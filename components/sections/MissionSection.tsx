"use client";

import React from "react";
import { Scale, Sparkles, ShieldCheck, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { CORE_VALUES } from "@/data/site-content";
import { Button } from "../ui/Button";

const iconMap: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-8 h-8 text-[#25c88c]" />,
  Sparkles: <Sparkles className="w-8 h-8 text-[#25c88c]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#25c88c]" />,
};

export const MissionSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#102A43] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16865D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#25c88c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why We Exist"
          title="Talent Is Everywhere."
          titleHighlight="Opportunity Should Be Too."
          subtitle="Across cities, towns, and remote villages in Pakistan, countless bright young minds dream of becoming doctors, software engineers, teachers, and innovators. But financial constraints too often extinguish their ambition before they can begin. PakScholar exists to ensure no deserving talent is left behind."
          align="center"
          theme="dark"
        />

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-[#16865D]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#16865D]/20 border border-[#16865D]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[val.icon] || <Sparkles className="w-8 h-8 text-[#25c88c]" />}
                </div>

                <div className="text-xs font-bold text-[#25c88c] uppercase tracking-wider mb-2">
                  Pillar 0{idx + 1}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {val.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-semibold text-[#25c88c] group-hover:translate-x-1 transition-transform">
                <span>Committed to Excellence</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Inspiring Statement Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#16865D]/30 via-white/5 to-[#16865D]/20 border border-white/15 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#16865D] flex items-center justify-center text-white shrink-0 hidden sm:flex">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                &ldquo;Investing in Education. Building Pakistan&apos;s Future.&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Every scholarship funded touches a family, inspires a community, and propels our nation forward.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            href="#scholarships"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Explore Scholarships
          </Button>
        </div>
      </div>
    </section>
  );
};
