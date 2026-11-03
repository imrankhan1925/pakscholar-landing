"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { SUCCESS_STORIES } from "@/data/site-content";
import { Badge } from "../ui/Badge";
import { Tilt3DCard } from "../ui/Tilt3DCard";
import { ThreeDMedal } from "../ui/ThreeDIcons";

export const SuccessStoriesSection: React.FC = () => {
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const currentStory = SUCCESS_STORIES[featuredIndex];

  const handlePrev = () => {
    setFeaturedIndex((prev) => (prev === 0 ? SUCCESS_STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev === SUCCESS_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="stories" className="py-20 sm:py-28 bg-[#F8F8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Success Stories"
          title="Every Opportunity Creates a"
          titleHighlight="New Story"
          subtitle="Behind every scholarship is an ambitious student who refused to let financial adversity stop their education. Read how timely support transformed their academic journeys."
          align="center"
        />

        {/* Featured Story Hero Card with 3D Tilt */}
        <Tilt3DCard maxTilt={4} className="mb-12">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl card-3d-shadow overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px]">
                <Image
                  src={currentStory.image}
                  alt={currentStory.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/20 to-transparent lg:hidden" />

                <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25c88c]">
                    {currentStory.category}
                  </span>
                  <h4 className="text-xl font-bold">{currentStory.name}</h4>
                  <p className="text-xs text-slate-200">{currentStory.program}</p>
                </div>

                {/* 3D Floating Medal badge on image */}
                <div className="hidden lg:block absolute top-6 left-6 animate-float-slow">
                  <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md p-1.5 shadow-xl border border-white/60 flex items-center justify-center">
                    <ThreeDMedal className="w-12 h-12" />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="emerald">{currentStory.category}</Badge>
                      <span className="text-xs font-semibold text-slate-400">
                        {currentStory.year}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#effbf4] text-[#16865D] flex items-center justify-center">
                      <Quote className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Big Quote */}
                  <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-[#102A43] leading-relaxed italic mb-8">
                    &ldquo;{currentStory.quote}&rdquo;
                  </blockquote>

                  {/* Student Info */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-[#102A43]">
                        {currentStory.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#16865D] flex items-center gap-1.5 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                        <span>{currentStory.program}</span>
                      </p>
                      <p className="text-xs text-[#596A7A] mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{currentStory.institution} • {currentStory.hometown}</span>
                      </p>
                    </div>

                    {/* Switcher Controls */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#16865D] hover:bg-[#effbf4] text-slate-600 hover:text-[#16865D] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Previous story"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#16865D] hover:bg-[#effbf4] text-slate-600 hover:text-[#16865D] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Next story"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt3DCard>

        {/* Story Selector Mini Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUCCESS_STORIES.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setFeaturedIndex(idx)}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                featuredIndex === idx
                  ? "bg-white border-[#16865D] shadow-md ring-1 ring-[#16865D]/30 scale-102"
                  : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#102A43] truncate">
                  {story.name}
                </p>
                <p className="text-[11px] text-[#16865D] font-medium truncate">
                  {story.program}
                </p>
                <p className="text-[10px] text-slate-400 truncate">
                  {story.institution.split(",")[0]}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#596A7A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#16865D]" />
          <span>
            Representative student profiles — Content displayed is sample demonstration data for client preview.
          </span>
        </div>
      </div>
    </section>
  );
};
