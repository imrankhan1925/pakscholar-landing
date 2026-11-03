"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Calendar, GraduationCap, Award, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { Scholarship, PORTAL_CONFIG } from "@/data/site-content";
import { Button } from "./Button";

interface ScholarshipModalProps {
  scholarship: Scholarship | null;
  isOpen: boolean;
  onClose: () => void;
  onApply?: (scholarship: Scholarship) => void;
}

export const ScholarshipModal: React.FC<ScholarshipModalProps> = ({
  scholarship,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !scholarship) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        {/* Modal Header */}
        <div className="bg-[#102A43] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16865D]/30 border border-[#16865D]/50 text-[#25c88c] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{scholarship.category} Scholarship</span>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold leading-snug">
            {scholarship.title}
          </h3>
          <p className="text-slate-300 text-sm mt-1.5">{scholarship.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
              <GraduationCap className="w-4 h-4 text-[#25c88c]" />
              <span>{scholarship.degreeLevel}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Deadline: {scholarship.deadline}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 text-[#1C2B36]">
          {/* Coverage Callout */}
          <div className="p-4 rounded-2xl bg-[#effbf4] border border-[#16865D]/20">
            <span className="text-xs font-semibold text-[#16865D] uppercase tracking-wider block mb-1">
              Financial Award & Benefits
            </span>
            <p className="text-base sm:text-lg font-bold text-[#102A43]">
              {scholarship.coverage}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Cohort Capacity: {scholarship.seats} (Merit competitive quota)
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#102A43] uppercase tracking-wider mb-2">
              Program Overview
            </h4>
            <p className="text-sm text-[#596A7A] leading-relaxed">
              {scholarship.summary}
            </p>
          </div>

          {/* Eligibility Requirements */}
          <div>
            <h4 className="text-sm font-bold text-[#102A43] uppercase tracking-wider mb-3">
              Eligibility & Academic Criteria
            </h4>
            <ul className="space-y-2.5">
              {scholarship.eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C2B36]">
                  <CheckCircle2 className="w-4 h-4 text-[#16865D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#102A43]" />
              <span>Required Application Documents</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16865D]" />
                <span>CNIC / B-Form & Photo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16865D]" />
                <span>Academic Transcripts / DMC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16865D]" />
                <span>University Admission Slip</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16865D]" />
                <span>Income Slip / Verification</span>
              </div>
            </div>
          </div>

          {/* Demo notice */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> All eligibility terms, deadlines, and seat allocations represent editable prototype demo data.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Back to Scholarships
          </Button>
          <a
            href={`${PORTAL_CONFIG.registerUrl}?scholarship=${encodeURIComponent(scholarship.title)}`}
            className="inline-flex items-center justify-center font-medium rounded-xl text-sm px-5 py-2.5 gap-2 bg-[#16865D] hover:bg-[#137350] text-white shadow-md shadow-[#16865D]/20 transition-all cursor-pointer"
          >
            <span>Apply on Student Portal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
