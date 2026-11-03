"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, ArrowRight, UserCircle2, ExternalLink } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, PORTAL_CONFIG } from "@/data/site-content";

interface HeaderProps {
  onOpenPortal?: (mode: "login" | "register" | "apply") => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for nav highlight
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-sm border-b border-slate-200/70 py-3"
            : "bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="PakScholar Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#102A43] to-[#16865D] p-0.5 shadow-md shadow-[#16865D]/15 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
                <div className="w-full h-full bg-[#102A43] rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#25c88c]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
                    Pak<span className="text-[#16865D]">Scholar</span>
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#16865D] animate-pulse" />
                </div>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase hidden sm:block">
                  Scholarship Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#16865D] bg-[#effbf4] font-semibold"
                        : "text-[#1C2B36] hover:text-[#16865D] hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={PORTAL_CONFIG.loginUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm text-[#102A43] hover:text-[#16865D] font-semibold rounded-xl hover:bg-slate-100/70 transition-colors"
                title="Sign in to PakScholar Student Portal"
              >
                <UserCircle2 className="w-4 h-4 text-slate-500" />
                <span>Student Login</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PORTAL_CONFIG.registerUrl}
                className="inline-flex items-center gap-2 bg-[#16865D] hover:bg-[#137350] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs shadow-emerald-900/10 hover:shadow-md hover:shadow-[#16865D]/25 transition-all group"
                title="Create Account on PakScholar Student Portal"
              >
                <span>Apply for Scholarship</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={PORTAL_CONFIG.registerUrl}
                className="sm:hidden text-xs px-3 py-1.5 rounded-lg bg-[#16865D] text-white font-semibold flex items-center gap-1"
              >
                <span>Apply</span>
                <ArrowRight className="w-3 h-3" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#102A43] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-[65px] left-0 right-0 bg-white border-b border-slate-200 shadow-2xl p-6 transition-all duration-300">
            <nav className="flex flex-col space-y-2 mb-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#1C2B36] hover:bg-[#effbf4] hover:text-[#16865D] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={PORTAL_CONFIG.loginUrl}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 text-sm font-semibold text-[#102A43] hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors"
              >
                <UserCircle2 className="w-4 h-4 text-slate-500" />
                <span>Student Portal Login</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PORTAL_CONFIG.registerUrl}
                className="w-full py-3 px-4 rounded-xl bg-[#16865D] hover:bg-[#137350] text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Apply for Scholarship (Register)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-slate-500 font-medium">
                {SITE_CONFIG.tagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
