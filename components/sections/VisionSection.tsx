"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { PORTAL_CONFIG } from "@/data/site-content";

interface VisionSectionProps {
  onOpenPortal: (mode: "login" | "register" | "apply") => void;
}

export const VisionSection: React.FC<VisionSectionProps> = () => {
  return (
    <section id="impact" className="relative py-24 sm:py-32 overflow-hidden bg-[#102A43] text-white">
      {/* Background Hero Image with Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
          alt="Pakistani university graduation ceremony with graduates celebrating"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#102A43]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16865D]/30 border border-[#16865D]/50 text-[#25c88c] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#25c88c]" />
            <span>Our Vision for Pakistan</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Investing in Students Means{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25c88c] to-[#a9ebd0]">
              Investing in Pakistan.
            </span>
          </h2>

          {/* Content Narrative */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 font-light">
            When we support one student&apos;s education, we help create opportunities that can benefit families, communities, and future generations. Every supported student represents a vital step toward a more educated, prosperous, and empowered Pakistan.
          </p>

          {/* Metrics summary banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-white/15 mb-8">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#25c88c]">100%</p>
              <p className="text-xs text-slate-300 mt-0.5">Need & Merit Focus</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">20+ Cities</p>
              <p className="text-xs text-slate-300 mt-0.5">National Footprint</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#25c88c]">4-Year</p>
              <p className="text-xs text-slate-300 mt-0.5">Graduation Guarantee</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              icon={<ArrowRight className="w-5 h-5" />}
              className="shadow-lg shadow-[#16865D]/30"
            >
              Be Part of the Change
            </Button>
            <a
              href={PORTAL_CONFIG.registerUrl}
              className="inline-flex items-center justify-center font-medium rounded-xl text-base px-6 py-3.5 gap-2.5 border border-white/40 hover:border-white text-white hover:bg-white/10 shadow-sm transition-all"
            >
              <span>Apply as a Student</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
