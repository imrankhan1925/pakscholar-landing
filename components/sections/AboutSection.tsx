"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, Eye, HeartHandshake, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Tilt3DCard } from "../ui/Tilt3DCard";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About PakScholar"
          title="Opening Doors to"
          titleHighlight="Brighter Futures"
          subtitle="PakScholar is built on a simple belief: talent exists everywhere, but opportunity does not. We work to bridge that gap by supporting deserving students and helping them continue their education without allowing financial challenges to define their future."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Campus & Student Image with 3D Card Hover */}
          <div className="lg:col-span-5 relative">
            <Tilt3DCard maxTilt={8} className="mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/5] card-3d-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop"
                  alt="Pakistani students studying in a quiet university library"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16865D] text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Nurturing Potential</span>
                  </div>
                  <p className="text-sm font-semibold leading-relaxed">
                    Bridging the educational gap for promising students in every province of Pakistan.
                  </p>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#102A43] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/10 hidden sm:block animate-float-delayed">
                <p className="text-xs italic text-slate-200 leading-relaxed">
                  &ldquo;Your dreams shouldn&apos;t stop because of financial barriers.&rdquo;
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#25c88c]" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#25c88c]">
                    PakScholar Guiding Principle
                  </span>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Right Column: Mission, Vision, and Commitment Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card 1: Mission */}
            <div className="group p-6 sm:p-7 rounded-2xl bg-[#f8faf9] border border-slate-200/80 hover:border-[#16865D]/40 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#effbf4] border border-[#16865D]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-[#16865D]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                    <span>Our Mission</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#effbf4] text-[#16865D] font-medium">Core Purpose</span>
                  </h3>
                  <p className="text-sm text-[#596A7A] leading-relaxed">
                    To identify talented, hardworking, and deserving students across Pakistan and provide them with robust, timely scholarship grants and comprehensive mentorship so they can graduate without financial disruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Vision */}
            <div className="group p-6 sm:p-7 rounded-2xl bg-[#f8faf9] border border-slate-200/80 hover:border-[#16865D]/40 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f5fa] border border-[#102A43]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6 text-[#102A43]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                    <span>Our Vision</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#f0f5fa] text-[#102A43] font-medium">Future Pakistan</span>
                  </h3>
                  <p className="text-sm text-[#596A7A] leading-relaxed">
                    A Pakistan where socio-economic circumstance never limits intellectual capability—cultivating an educated, self-reliant generation of innovators, healthcare leaders, engineers, and public servants.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Our Commitment */}
            <div className="group p-6 sm:p-7 rounded-2xl bg-[#f8faf9] border border-slate-200/80 hover:border-[#16865D]/40 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                    <span>Our Commitment</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-medium">Guaranteed Integrity</span>
                  </h3>
                  <p className="text-sm text-[#596A7A] leading-relaxed">
                    Uncompromising merit transparency, zero discrimination, and continuous support. From the day of scholarship award to the day of university convocation, we stand beside our scholars every step of the journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="#how-it-works"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn How It Works
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#contact"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
