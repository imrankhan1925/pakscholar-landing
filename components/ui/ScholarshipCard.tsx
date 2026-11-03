"use client";

import React from "react";
import { GraduationCap, Calendar, Check, Sparkles, Users, ExternalLink } from "lucide-react";
import { Scholarship, PORTAL_CONFIG } from "@/data/site-content";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Tilt3DCard } from "./Tilt3DCard";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  onViewDetails: (scholarship: Scholarship) => void;
  onApply: (scholarship: Scholarship) => void;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  scholarship,
  onViewDetails,
}) => {
  const categoryVariantMap: Record<Scholarship["category"], "emerald" | "navy" | "amber" | "slate"> = {
    Merit: "emerald",
    "Need-Based": "navy",
    Postgraduate: "amber",
    STEM: "emerald",
  };

  const portalApplyUrl = `${PORTAL_CONFIG.registerUrl}?scholarship=${encodeURIComponent(
    scholarship.title
  )}`;

  return (
    <Tilt3DCard maxTilt={5} className="h-full">
      <div
        className={`group relative h-full bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
          scholarship.isPopular
            ? "border-[#16865D]/40 shadow-lg shadow-[#16865D]/10 ring-1 ring-[#16865D]/20 card-3d-shadow"
            : "border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
        }`}
      >
        {scholarship.isPopular && (
          <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#16865D] to-[#25c88c] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Priority Cycle</span>
          </div>
        )}

        <div>
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <Badge variant={categoryVariantMap[scholarship.category] || "emerald"}>
              {scholarship.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{scholarship.seats}</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl font-bold text-[#102A43] group-hover:text-[#16865D] transition-colors line-clamp-2">
            {scholarship.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#596A7A] mt-1.5 mb-4 line-clamp-2">
            {scholarship.summary}
          </p>

          {/* Degree Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-[#102A43] text-xs font-medium mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-[#16865D]" />
            <span>{scholarship.degreeLevel}</span>
          </div>

          {/* Coverage Highlights Box */}
          <div className="p-3.5 rounded-2xl bg-[#effbf4] border border-[#16865D]/15 mb-5">
            <span className="text-[11px] font-semibold text-[#16865D] uppercase tracking-wider block">
              Award Coverage
            </span>
            <p className="text-sm sm:text-base font-bold text-[#102A43] mt-0.5">
              {scholarship.coverage}
            </p>
          </div>

          {/* Eligibility Snapshot */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Key Criteria
            </span>
            {scholarship.eligibility.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-[#16865D] shrink-0 mt-0.5" />
                <span className="line-clamp-2">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Bottom: Deadline & CTAs */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Deadline:</span>
            </div>
            <span className="font-semibold text-slate-700">{scholarship.deadline}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(scholarship)}
              className="w-full text-xs"
            >
              View Details
            </Button>

            <a
              href={portalApplyUrl}
              className={`w-full text-xs inline-flex items-center justify-center font-medium rounded-xl py-2 px-3 gap-1.5 transition-all cursor-pointer ${
                scholarship.isPopular
                  ? "bg-[#16865D] hover:bg-[#137350] text-white shadow-xs"
                  : "bg-[#102A43] hover:bg-[#0c2236] text-white shadow-xs"
              }`}
              title="Apply for this scholarship on the student portal"
            >
              <span>Apply Now</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </Tilt3DCard>
  );
};
