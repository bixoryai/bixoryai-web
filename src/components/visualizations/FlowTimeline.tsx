import React from "react";
import type { LucideIcon } from "lucide-react";

export interface TimelineItem {
  period: string; // e.g., "1943", "2012", "2017–Present"
  title: string;
  description: string;
  Icon: LucideIcon;
  accent?: "blue" | "green" | "orange" | "purple" | "pink" | "cyan";
}

const accentMap: Record<NonNullable<TimelineItem["accent"]>, string> = {
  blue: "from-blue-500 to-purple-600",
  green: "from-green-500 to-teal-600",
  orange: "from-orange-500 to-red-600",
  purple: "from-purple-500 to-indigo-600",
  pink: "from-pink-500 to-rose-600",
  cyan: "from-cyan-500 to-blue-600",
};

export function FlowTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" aria-hidden />
      <ol className="space-y-6">
        {items.map(({ period, title, description, Icon, accent = "cyan" }, idx) => (
          <li key={`${period}-${idx}`} className="relative pl-12">
            <div className="absolute left-0 top-1.5">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${accentMap[accent]} flex items-center justify-center border border-white/10 shadow-md`}> 
                <Icon className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="bg-card-gradient/40 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-accent">{period}</span>
                <span className="text-white font-semibold">{title}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
