"use client";

import React, { useState } from "react";
import {
  Compass,
  UserPlus,
  FileText,
  CreditCard,
  ShieldCheck,
  PenTool,
  CheckCircle2,
  Trophy,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { JOURNEY_STEPS, PORTAL_CONFIG } from "@/data/site-content";
import { Tilt3DCard } from "../ui/Tilt3DCard";
import { ThreeDDiploma } from "../ui/ThreeDIcons";

const stepIconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-[#16865D]" />,
  UserPlus: <UserPlus className="w-5 h-5 text-[#16865D]" />,
  FileText: <FileText className="w-5 h-5 text-[#16865D]" />,
  CreditCard: <CreditCard className="w-5 h-5 text-[#16865D]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#16865D]" />,
  PenTool: <PenTool className="w-5 h-5 text-[#16865D]" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#16865D]" />,
  Trophy: <Trophy className="w-5 h-5 text-[#16865D]" />,
};

interface ProcessSectionProps {
  onOpenPortal?: (mode: "login" | "register" | "apply") => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Your Journey to a"
          titleHighlight="Scholarship"
          subtitle="We have designed an open, merit-centered, and transparent roadmap. Follow these simple steps from exploring programs to joining our family of PakScholar fellows."
          align="center"
        />

        {/* Desktop Interactive Stepper Navigation (Step Badges) */}
        <div className="hidden lg:grid grid-cols-8 gap-2 mb-10 pb-4 border-b border-slate-100">
          {JOURNEY_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex flex-col items-center text-center p-2.5 rounded-2xl transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? "bg-[#102A43] text-white shadow-md scale-102"
                  : "bg-slate-50 text-[#596A7A] hover:bg-[#effbf4] hover:text-[#16865D]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                  activeStepIndex === idx
                    ? "bg-[#16865D] text-white"
                    : "bg-white text-slate-700 border border-slate-200"
                }`}
              >
                0{step.step}
              </div>
              <span className="text-[11px] font-semibold line-clamp-1">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Step Spotlight (Desktop Interactive Preview with 3D illustration) */}
        <div className="hidden lg:block mb-16 p-8 rounded-3xl bg-gradient-to-br from-[#f8faf9] via-white to-[#effbf4]/50 border border-[#16865D]/25 shadow-md card-3d-shadow">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* 3D Asset Column */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#effbf4] to-white border border-[#16865D]/20 p-2 flex items-center justify-center shadow-inner animate-float-slow">
                <ThreeDDiploma className="w-20 h-20" />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#16865D] text-white text-xs font-bold uppercase tracking-wider">
                  Step 0{JOURNEY_STEPS[activeStepIndex].step} • {JOURNEY_STEPS[activeStepIndex].tag}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Phase {activeStepIndex < 4 ? "Application & Verification" : "Examination & Award"}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#102A43]">
                {JOURNEY_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-base text-[#596A7A] leading-relaxed max-w-2xl">
                {JOURNEY_STEPS[activeStepIndex].description}
              </p>
            </div>

            {/* Direct Portal Actions */}
            <div className="col-span-4 flex flex-col items-end justify-center space-y-3">
              <a
                href={PORTAL_CONFIG.registerUrl}
                className="inline-flex items-center gap-2 bg-[#16865D] hover:bg-[#137350] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-[#16865D]/20 hover:shadow-lg transition-all group"
              >
                <span>Register on Student Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={PORTAL_CONFIG.loginUrl}
                className="text-xs font-semibold text-[#102A43] hover:text-[#16865D] flex items-center gap-1"
              >
                <span>Already registered? Sign in here</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Responsive Grid / Timeline for Mobile and Tablet with 3D Card Hover */}
        <div className="relative">
          {/* Vertical connecting line for mobile */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 sm:hidden -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_STEPS.map((step) => (
              <Tilt3DCard key={step.step} maxTilt={6} className="h-full">
                <div className="group relative h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#16865D]/40 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Top Step Number and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#effbf4] border border-[#16865D]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {stepIconMap[step.icon] || <Sparkles className="w-5 h-5 text-[#16865D]" />}
                      </div>
                      <span className="w-7 h-7 rounded-full bg-[#102A43] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                        {step.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-[#16865D] uppercase tracking-wider block mb-1">
                      {step.tag}
                    </span>

                    <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#16865D] transition-colors mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#596A7A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Part of Phase {step.step <= 4 ? "1" : "2"}</span>
                    <span className="font-semibold text-slate-500">Step 0{step.step}/08</span>
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
