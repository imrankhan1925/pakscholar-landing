"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { SCHOLARSHIPS_DATA, Scholarship } from "@/data/site-content";
import { ScholarshipCard } from "../ui/ScholarshipCard";
import { ScholarshipModal } from "../ui/ScholarshipModal";
import { Button } from "../ui/Button";

interface ScholarshipsSectionProps {
  onOpenPortal: (mode: "login" | "register" | "apply", scholarshipTitle?: string) => void;
}

export const ScholarshipsSection: React.FC<ScholarshipsSectionProps> = ({ onOpenPortal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalScholarship, setActiveModalScholarship] = useState<Scholarship | null>(null);

  const categories = ["All", "Merit", "Need-Based", "STEM", "Postgraduate"];

  const filteredScholarships =
    selectedCategory === "All"
      ? SCHOLARSHIPS_DATA
      : SCHOLARSHIPS_DATA.filter((s) => s.category === selectedCategory);

  const handleViewDetails = (scholarship: Scholarship) => {
    setActiveModalScholarship(scholarship);
  };

  const handleApply = (scholarship: Scholarship) => {
    onOpenPortal("apply", scholarship.title);
  };

  return (
    <section id="scholarships" className="py-20 sm:py-28 bg-[#F1F4F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Scholarship Programs"
          title="Find an Opportunity That"
          titleHighlight="Moves You Forward"
          subtitle="Explore scholarship opportunities and take the next step toward your academic future. Our multi-tiered programs support undergraduate, STEM, and research-focused scholars across Pakistan."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#102A43] text-white shadow-md shadow-[#102A43]/20 scale-102"
                  : "bg-white text-[#596A7A] hover:text-[#102A43] hover:bg-slate-50 border border-slate-200/70"
              }`}
            >
              {cat === "All" ? "All Programs" : `${cat} Scholarships`}
            </button>
          ))}
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredScholarships.map((scholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              onViewDetails={handleViewDetails}
              onApply={handleApply}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#16865D] uppercase tracking-wider">
              Need Assistance Choosing?
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#102A43]">
              Not sure which scholarship category fits your profile?
            </h4>
            <p className="text-xs sm:text-sm text-[#596A7A] max-w-xl">
              Check our application guidelines or speak with our candidate admissions advisory team for clarification.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="md"
              href="#faq"
            >
              Read FAQs
            </Button>
            <Button
              variant="primary"
              size="md"
              href="#contact"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <ScholarshipModal
        scholarship={activeModalScholarship}
        isOpen={!!activeModalScholarship}
        onClose={() => setActiveModalScholarship(null)}
        onApply={(s) => {
          setActiveModalScholarship(null);
          handleApply(s);
        }}
      />
    </section>
  );
};
