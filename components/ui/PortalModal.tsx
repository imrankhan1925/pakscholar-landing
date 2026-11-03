"use client";

import React, { useState, useEffect } from "react";
import { X, GraduationCap, ArrowRight, ShieldCheck, Sparkles, UserPlus, LogIn, LayoutDashboard } from "lucide-react";
import { PORTAL_CONFIG } from "@/data/site-content";
import { ThreeDPortalBadge } from "./ThreeDIcons";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "login" | "register" | "apply";
  selectedScholarshipTitle?: string;
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  defaultMode = "login",
  selectedScholarshipTitle,
}) => {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "apply" | null>(null);

  const mode = activeTab ?? defaultMode;

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

  if (!isOpen) return null;

  const targetUrl =
    mode === "register" || mode === "apply"
      ? selectedScholarshipTitle
        ? `${PORTAL_CONFIG.registerUrl}?scholarship=${encodeURIComponent(selectedScholarshipTitle)}`
        : PORTAL_CONFIG.registerUrl
      : PORTAL_CONFIG.loginUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 card-3d-shadow">
        {/* Header */}
        <div className="bg-[#102A43] text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-[#16865D]/20 rounded-full blur-2xl" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#16865D] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#25c88c]">
              PakScholar Student Portal (pakscholarUI)
            </span>
          </div>

          <h3 id="portal-modal-title" className="text-xl sm:text-2xl font-bold">
            {mode === "login" && "Student Portal Sign In"}
            {(mode === "register" || mode === "apply") && "New Student Registration"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {selectedScholarshipTitle
              ? `Proceeding to apply for: ${selectedScholarshipTitle}`
              : "Access scholarship applications, track status, and take online examinations."}
          </p>

          {/* Mode Tabs */}
          <div className="mt-5 flex gap-2 p-1 bg-white/10 rounded-xl max-w-xs">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                mode === "login"
                  ? "bg-[#16865D] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Student Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                mode === "register" || mode === "apply"
                  ? "bg-[#16865D] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Sign Up / Register
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* 3D Portal Visual Indicator */}
          <ThreeDPortalBadge />

          <div className="rounded-2xl bg-[#effbf4] border border-[#16865D]/20 p-4 text-xs text-[#102A43] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#16865D]">
              <Sparkles className="w-4 h-4 text-[#16865D]" />
              <span>Redirecting to Student Portal Application</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              You will be redirected to the secure <strong>PakScholar Student Portal</strong> (running on <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-[#102A43]">{PORTAL_CONFIG.baseUrl}</code>).
            </p>
          </div>

          {/* Direct Redirection Actions */}
          <div className="space-y-3">
            <a
              href={targetUrl}
              className="w-full py-3.5 px-5 rounded-xl bg-[#16865D] hover:bg-[#137350] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#16865D]/25 transition-all group"
            >
              <span>
                {mode === "login"
                  ? "Continue to Student Portal Login"
                  : "Proceed to Student Registration"}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={PORTAL_CONFIG.loginUrl}
                className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:text-[#102A43] hover:bg-slate-50 flex items-center justify-center gap-1.5 font-medium transition"
              >
                <LogIn className="w-3.5 h-3.5 text-[#16865D]" />
                <span>Portal Login</span>
              </a>
              <a
                href={PORTAL_CONFIG.registerUrl}
                className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:text-[#102A43] hover:bg-slate-50 flex items-center justify-center gap-1.5 font-medium transition"
              >
                <UserPlus className="w-3.5 h-3.5 text-[#16865D]" />
                <span>New Signup</span>
              </a>
            </div>
          </div>

          {/* Additional Portal Quick-links */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <a
              href={PORTAL_CONFIG.dashboardUrl}
              className="hover:text-[#16865D] flex items-center gap-1 font-medium"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Student Dashboard</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={PORTAL_CONFIG.forgotPasswordUrl}
              className="hover:text-[#16865D] font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Prototype / Integration Info */}
          <div className="flex items-start gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16865D] shrink-0 mt-0.5" />
            <span>
              Connected to student portal at <code className="font-mono text-slate-600">{PORTAL_CONFIG.baseUrl}</code>. Configurable via <code className="font-mono text-slate-600">NEXT_PUBLIC_STUDENT_PORTAL_URL</code>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
