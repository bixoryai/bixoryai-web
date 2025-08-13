import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import React from "react";

interface DataPoint {
  year: number;
  model: string;
  paramsB: number; // Billions of parameters
}

const data: DataPoint[] = [
  { year: 2012, model: "AlexNet", paramsB: 0.06 },
  { year: 2018, model: "BERT Large", paramsB: 0.34 },
  { year: 2019, model: "GPT-2", paramsB: 1.5 },
  { year: 2020, model: "GPT-3", paramsB: 175 },
  { year: 2022, model: "PaLM", paramsB: 540 },
  { year: 2023, model: "LLaMA 2", paramsB: 70 },
  { year: 2024, model: "Llama 3", paramsB: 70 },
];

export function ModelScaleChart() {
  return (
    <div className="rounded-2xl border border-accent/30 bg-background/40 p-4 sm:p-6 text-accent">
      <h3 className="text-lg font-semibold text-foreground mb-2">Model Scale Over Time</h3>
      <p className="text-xs text-muted-foreground mb-4">Approximate parameter counts (billions)</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="currentColor" tick={{ fill: "currentColor" }} />
            <YAxis stroke="currentColor" tick={{ fill: "currentColor" }} domain={[0, 600]} />
            <Tooltip
              contentStyle={{ background: "rgba(10,25,47,0.9)", border: "1px solid rgba(0,240,255,0.3)", color: "#fff" }}
              labelStyle={{ color: "#00F0FF" }}
              formatter={(value: number, _name, payload: any) => [
                `${value}B`,
                payload?.payload?.model || "Parameters"
              ]}
            />
            <Line type="monotone" dataKey="paramsB" stroke="currentColor" strokeWidth={2} dot={{ r: 3, stroke: "currentColor", strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2">Notes: Some values are estimates or rounded; multimodal/reasoning advances not reflected by params alone.</p>
    </div>
  );
}
