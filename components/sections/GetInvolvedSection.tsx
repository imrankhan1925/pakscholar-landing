"use client";

import React from "react";
import { Building, HeartHandshake, School, ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { PARTNER_OPTIONS } from "@/data/site-content";
import { Button } from "../ui/Button";

const partnerIconMap: Record<string, React.ReactNode> = {
  Building: <Building className="w-7 h-7 text-[#16865D]" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-[#16865D]" />,
  School: <School className="w-7 h-7 text-[#16865D]" />,
};

export const GetInvolvedSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get Involved"
          title="Together, We Can Make"
          titleHighlight="Education Accessible"
          subtitle="Organizations, companies, philanthropists, and academic institutions play an indispensable role in transforming Pakistan's educational landscape. Discover how you can collaborate."
          align="center"
        />

        {/* 3 Partnership Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PARTNER_OPTIONS.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-[#f8faf9] border border-slate-200/90 p-8 hover:bg-white hover:border-[#16865D]/40 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#effbf4] border border-[#16865D]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {partnerIconMap[item.icon] || <HeartHandshake className="w-7 h-7 text-[#16865D]" />}
                </div>

                <span className="text-xs font-bold text-[#16865D] uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-xl font-bold text-[#102A43] mb-3 group-hover:text-[#16865D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#596A7A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/70">
                <Button
                  variant="outline"
                  size="sm"
                  href="#contact"
                  className="w-full justify-center group-hover:bg-[#effbf4] group-hover:border-[#16865D]/30"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {item.actionText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-[#102A43] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1.5">
            <h4 className="text-xl sm:text-2xl font-bold">
              Looking to establish an endowed scholarship fund?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Our secretariat provides customized stewardship, semesterly academic progress reports, and direct scholar engagement.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            href="#contact"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
