import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ReferenceArea } from "recharts";
import React from "react";

interface DataPoint {
  year: number;
  model: string;
  paramsB: number; // Billions of parameters
  type?: "dense" | "moe";
  activeB?: number; // For MoE: approximate active parameters per token
  note?: string;
}

const data: DataPoint[] = [
  { year: 2012, model: "AlexNet", paramsB: 0.06, type: "dense" },
  { year: 2018, model: "BERT Large", paramsB: 0.34, type: "dense" },
  { year: 2019, model: "GPT-2", paramsB: 1.5, type: "dense" },
  { year: 2020, model: "GPT-3", paramsB: 175, type: "dense" },
  { year: 2021, model: "Switch Transformer", paramsB: 1600, type: "moe", activeB: 13, note: "MoE; ~1.6T parameters, ~13B active" },
  { year: 2022, model: "PaLM", paramsB: 540, type: "dense" },
  { year: 2023, model: "LLaMA 2", paramsB: 70, type: "dense" },
  { year: 2023, model: "Mixtral 8x7B", paramsB: 46.7, type: "moe", activeB: 12, note: "MoE; ~12B active" },
  { year: 2024, model: "Llama 3", paramsB: 70, type: "dense" },
  { year: 2024, model: "DBRX", paramsB: 132, type: "moe", activeB: 36, note: "MoE; ~36B active" },
  { year: 2025, model: "Frontier MoE (est.)", paramsB: 1000, type: "moe", activeB: 60, note: "Estimate; public details vary" },
];

const formatParams = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}T`;
  if (value >= 1) return `${value}B`;
  return `${value.toFixed(2)}B`;
};

export function ModelScaleChart() {
  return (
    <div className="rounded-2xl border border-accent/30 bg-background/40 p-4 sm:p-6 text-accent">
      <h3 className="text-lg font-semibold text-white mb-2">Model Scale Over Time</h3>
      <p className="text-xs text-muted-foreground mb-4">Approximate parameter counts (billions)</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <ReferenceArea x1={2023} x2={2025.2} fill="currentColor" fillOpacity={0.06} />
            <XAxis dataKey="year" stroke="currentColor" tick={{ fill: "currentColor" }} />
            <YAxis
              stroke="currentColor"
              tick={{ fill: "currentColor" }}
              scale="log"
              domain={[0.05, 'auto']}
              ticks={[0.1, 1, 10, 100, 1000, 2000]}
              tickFormatter={formatParams}
            />
            <Tooltip
              contentStyle={{ background: "rgba(10,25,47,0.9)", border: "1px solid rgba(0,240,255,0.3)", color: "#fff" }}
              labelStyle={{ color: "#00F0FF" }}
              formatter={(value: number, name: string) => [formatParams(value), name]}
              labelFormatter={(label: any, payload: any) => {
                const p = (payload && payload[0] && payload[0].payload) || {};
                return `${label} · ${p.model || ""}`;
              }}
            />
            <Legend wrapperStyle={{ color: 'currentColor' }} />
            <Line type="monotone" dataKey="paramsB" name="Total parameters" stroke="currentColor" strokeWidth={2} dot={{ r: 3, stroke: "currentColor", strokeWidth: 2 }} />
            <Line type="monotone" dataKey="activeB" name="Active parameters (MoE)" stroke="currentColor" strokeWidth={2} strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2">Notes: Log scale. Some values are estimates/rounded. MoE points show total vs. dashed active params; efficiency and multimodality aren’t captured by params alone.</p>
    </div>
  );
}
