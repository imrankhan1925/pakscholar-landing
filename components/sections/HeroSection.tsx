"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, BookOpen, ExternalLink, LogIn } from "lucide-react";
import { Button } from "../ui/Button";
import { PORTAL_CONFIG } from "@/data/site-content";
import { Tilt3DCard } from "../ui/Tilt3DCard";
import { ThreeDGraduationCap } from "../ui/ThreeDIcons";

interface HeroSectionProps {
  onOpenPortal: (mode: "login" | "register" | "apply") => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPortal }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#f7fafc] via-white to-white perspective-1000"
    >
      {/* Background radial glows and atmospheric mesh lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#16865D]/15 to-[#102A43]/15 blur-3xl -z-10 pointer-events-none rounded-full animate-pulse-soft" />
      <div className="absolute top-40 right-[-100px] w-[450px] h-[450px] bg-[#16865D]/10 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-[-80px] w-[350px] h-[350px] bg-[#25c88c]/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Tag with 3D pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#effbf4] border border-[#16865D]/25 text-[#16865D] text-xs sm:text-sm font-semibold mb-6 shadow-xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#16865D] animate-ping" />
              <Sparkles className="w-4 h-4 text-[#16865D]" />
              <span>National Scholarship Initiative for Pakistan</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] tracking-tight leading-[1.15] mb-6">
              Your Potential Deserves an{" "}
              <span className="relative inline-block text-[#16865D]">
                Opportunity.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#16865D]/30 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q50,0 100,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#596A7A] leading-relaxed mb-8 max-w-2xl">
              We believe every talented student deserves the chance to achieve their dreams. Through accessible scholarship opportunities, we help deserving students overcome financial barriers and build a brighter future for Pakistan.
            </p>

            {/* Action Buttons with Direct Student Portal Redirection */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Button
                variant="primary"
                size="lg"
                href="#scholarships"
                icon={<ArrowRight className="w-5 h-5" />}
                className="shadow-md shadow-[#16865D]/20"
              >
                Explore Scholarships
              </Button>

              <a
                href={PORTAL_CONFIG.loginUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl border border-slate-300 hover:border-[#16865D] bg-white text-[#102A43] hover:text-[#16865D] shadow-xs hover:shadow-md transition-all group cursor-pointer"
                title="Directly launch the PakScholar Student Portal"
              >
                <LogIn className="w-4 h-4 text-[#16865D]" />
                <span>Student Portal (Login)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#16865D] transition-colors" />
              </a>

              <button
                type="button"
                onClick={() => onOpenPortal("register")}
                className="text-xs sm:text-sm font-semibold text-[#16865D] hover:underline flex items-center gap-1 self-center sm:self-auto py-2 cursor-pointer"
              >
                <span>New Student? Register here</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#596A7A]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#effbf4] flex items-center justify-center text-[#16865D]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-medium text-[#102A43]">100% Merit & Need-Focused</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#f0f5fa] flex items-center justify-center text-[#102A43]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-medium text-[#102A43]">Transparent Multi-Tier Review</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-medium text-[#102A43]">Tuition + Living Grants</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Composition */}
          <div className="lg:col-span-5 relative">
            <Tilt3DCard maxTilt={10} className="mx-auto max-w-md lg:max-w-none">
              <div className="relative mx-auto">
                {/* Main Photographic Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/4] card-3d-shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    alt="Pakistani university students studying together in a modern campus library"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-[#102A43]/15 to-transparent" />

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#25c88c] block mb-1">
                      Student Community
                    </span>
                    <p className="text-sm font-semibold leading-snug">
                      Empowering talented youth at top universities across Pakistan
                    </p>
                  </div>
                </div>

                {/* Floating 3D Badge 1: 3D Cap & Principle */}
                <div className="absolute -top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-slate-100/90 flex items-center gap-3 animate-float-slow max-w-[230px] card-3d-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#102A43] to-[#16865D] p-1 flex items-center justify-center shrink-0">
                    <ThreeDGraduationCap className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#102A43] leading-tight">
                      Empowering Talent
                    </p>
                    <p className="text-[11px] text-[#16865D] font-semibold mt-0.5">
                      Transforming Futures
                    </p>
                  </div>
                </div>

                {/* Floating 3D Badge 2: Live Portal Direct Link Card */}
                <a
                  href={PORTAL_CONFIG.loginUrl}
                  className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-100/90 flex items-center gap-3.5 max-w-[260px] animate-float-delayed card-3d-shadow hover:scale-105 transition-transform group cursor-pointer"
                  title="Click to launch student portal"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#102A43] flex items-center justify-center shrink-0 text-white shadow-sm group-hover:bg-[#16865D] transition-colors">
                    <Sparkles className="w-5 h-5 text-[#25c88c] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-extrabold text-[#102A43]">Student Portal</span>
                      <span className="text-[10px] font-bold bg-[#effbf4] text-[#16865D] px-1.5 py-0.5 rounded">
                        Active
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                      <span>Launch pakscholarUI</span>
                      <ExternalLink className="w-3 h-3 text-[#16865D]" />
                    </p>
                  </div>
                </a>

                {/* Decorative background isometric accents */}
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#16865D]/20 to-[#25c88c]/10 -z-10 rotate-12 blur-xs" />
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>
    </section>
  );
};
