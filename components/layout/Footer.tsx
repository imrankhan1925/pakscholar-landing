"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SCHOLARSHIPS_DATA, PORTAL_CONFIG } from "@/data/site-content";
import { Button } from "../ui/Button";
import {
  LinkedInIcon,
  TwitterXIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "../ui/SocialIcons";

interface FooterProps {
  onOpenPortal?: (mode: "login" | "register" | "apply") => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#102A43] text-white pt-16 sm:pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Announcement Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#16865D]/30 via-slate-800 to-[#102A43] p-8 sm:p-10 border border-[#16865D]/30 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-56 h-56 bg-[#16865D]/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16865D]/30 text-[#25c88c] text-xs font-semibold uppercase tracking-wider mb-2">
                Scholarship Alerts & Updates
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Stay Informed About Upcoming Grant Cycles
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Receive instant notifications when new undergraduate, STEM, and need-based scholarship deadlines are announced across Pakistan.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 bg-[#16865D]/20 border border-[#16865D]/50 px-5 py-3 rounded-2xl text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#25c88c] shrink-0" />
                  <span>Thank you! You will receive notification updates. (Demo)</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your student or university email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#16865D] focus:border-transparent transition"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto shrink-0 shadow-md"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Organization Branding */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#16865D] flex items-center justify-center shadow-lg shadow-[#16865D]/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Pak<span className="text-[#25c88c]">Scholar</span>
              </span>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.mission}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                Main Slogan
              </p>
              <p className="italic text-[#25c88c] font-medium">
                &ldquo;{SITE_CONFIG.tagline}&rdquo;
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#16865D] hover:scale-105 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#16865D] hover:scale-105 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#16865D] hover:scale-105 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#16865D] hover:scale-105 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#16865D] hover:scale-105 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#25c88c] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Scholarship Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Scholarship Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SCHOLARSHIPS_DATA.map((s) => (
                <li key={s.id}>
                  <a
                    href="#scholarships"
                    className="hover:text-[#25c88c] transition-colors line-clamp-1"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li className="pt-2 space-y-1.5">
                <a
                  href={PORTAL_CONFIG.loginUrl}
                  className="text-xs font-bold text-[#25c88c] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Student Portal Login</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href={PORTAL_CONFIG.registerUrl}
                  className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>New Student Registration</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Secretariat */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Secretariat & Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#25c88c] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#25c88c] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-xs hover:text-[#25c88c] transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25c88c] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-xs hover:text-[#25c88c] transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#25c88c] shrink-0" />
                <span className="text-xs text-slate-400">{SITE_CONFIG.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Transparency Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              &copy; 2026 {SITE_CONFIG.legalName}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#16865D]" />
              Pakistan Educational Initiative
            </span>
            <span>•</span>
            <span className="italic">Prototype Demo Representation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
