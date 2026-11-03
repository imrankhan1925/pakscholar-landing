"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { SITE_CONFIG } from "@/data/site-content";
import { Button } from "../ui/Button";
import {
  LinkedInIcon,
  TwitterXIcon,
  FacebookIcon,
  InstagramIcon,
} from "../ui/SocialIcons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Student Application Query",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean frontend submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Student Application Query",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact & Inquiry"
          title="Let's Build a"
          titleHighlight="Brighter Future Together"
          subtitle="Have questions regarding scholarship eligibility, verification, or corporate partnerships? Get in touch with our team in Islamabad."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-9 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#16865D]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold text-[#25c88c] uppercase tracking-wider block mb-1">
                  National Secretariat
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {SITE_CONFIG.legalName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Dedicated to transparent scholarship stewardship, applicant testing coordination, and student empowerment across Pakistan.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#25c88c]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Head Office</span>
                    <span className="text-slate-100 font-medium text-xs leading-relaxed">
                      {SITE_CONFIG.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#25c88c]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Official Inquiries</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-slate-100 hover:text-[#25c88c] font-medium text-xs"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#25c88c]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Helpline & WhatsApp</span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="text-slate-100 hover:text-[#25c88c] font-medium text-xs"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#25c88c]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Operating Hours</span>
                    <span className="text-slate-100 font-medium text-xs">
                      {SITE_CONFIG.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-bold text-slate-300 block mb-3">
                  Follow Our Student Success Updates
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#16865D] flex items-center justify-center text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#16865D] flex items-center justify-center text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterXIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#16865D] flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#16865D] flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Presence Note */}
            <div className="p-5 rounded-2xl bg-[#effbf4] border border-[#16865D]/20 text-xs text-[#16865D] flex items-start gap-3">
              <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-[#102A43] mb-0.5">
                  Nationwide Testing & Verification Centers
                </strong>
                <span>{SITE_CONFIG.contact.regionalOffices}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#f8faf9] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#effbf4] border border-[#16865D]/30 flex items-center justify-center mx-auto text-[#16865D]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#102A43]">
                  Thank You for Reaching Out
                </h4>
                <p className="text-sm text-[#596A7A] max-w-md mx-auto leading-relaxed">
                  Your message has been captured in this frontend demonstration. In the production version, this form connects to our admissions and partnership helpdesk system.
                </p>
                <div className="pt-4">
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-[#16865D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Bilal Ahmed"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1C2B36] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16865D]/20 focus:border-[#16865D] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#16865D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="bilal@example.pk"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1C2B36] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16865D]/20 focus:border-[#16865D] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1C2B36] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16865D]/20 focus:border-[#16865D] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1C2B36] focus:outline-none focus:ring-2 focus:ring-[#16865D]/20 focus:border-[#16865D] transition"
                    >
                      <option>Student Application Query</option>
                      <option>Corporate CSR Partnership</option>
                      <option>Individual Donor / Sponsorship</option>
                      <option>University / Testing Center Affiliation</option>
                      <option>Media & General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-[#16865D]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, educational background, or partnership proposition..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1C2B36] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16865D]/20 focus:border-[#16865D] transition resize-none"
                  />
                </div>

                {/* Form submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center shadow-md shadow-[#16865D]/20"
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? "Processing..." : "Send Inquiries to Secretariat"}
                </Button>

                {/* Disclaimer notice */}
                <div className="flex items-start gap-2 pt-2 text-[11px] text-slate-500">
                  <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Frontend validation enabled. Submitted messages trigger a demo confirmation status. No live email server is connected yet.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
