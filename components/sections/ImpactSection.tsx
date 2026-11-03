"use client";

import React from "react";
import { IMPACT_STATS } from "@/data/site-content";
import { StatCard } from "../ui/StatCard";
import { ShieldCheck } from "lucide-react";

export const ImpactSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-[#F8F8F2] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, idx) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              icon={stat.icon}
              index={idx}
            />
          ))}
        </div>

        {/* Demo data notice banner */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#596A7A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#16865D]" />
          <span>
            Demonstration figures configured in <code className="bg-slate-200/60 px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-700">data/site-content.ts</code> — Ready for production database metrics.
          </span>
        </div>
      </div>
    </section>
  );
};
