"use client";

import React, { useState } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ImpactSection } from "./sections/ImpactSection";
import { AboutSection } from "./sections/AboutSection";
import { MissionSection } from "./sections/MissionSection";
import { ScholarshipsSection } from "./sections/ScholarshipsSection";
import { ProcessSection } from "./sections/ProcessSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { VisionSection } from "./sections/VisionSection";
import { GetInvolvedSection } from "./sections/GetInvolvedSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { PortalModal } from "./ui/PortalModal";

export const PakScholarLanding: React.FC = () => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalMode, setPortalMode] = useState<"login" | "register" | "apply">("login");
  const [selectedScholarshipTitle, setSelectedScholarshipTitle] = useState<string | undefined>(
    undefined
  );

  const handleOpenPortal = (
    mode: "login" | "register" | "apply",
    scholarshipTitle?: string
  ) => {
    setPortalMode(mode);
    setSelectedScholarshipTitle(scholarshipTitle);
    setPortalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1C2B36] selection:bg-[#16865D]/20 selection:text-[#102A43]">
      {/* Sticky Header with navigation & portal triggers */}
      <Header onOpenPortal={handleOpenPortal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section A & B: Hero Section */}
        <HeroSection onOpenPortal={handleOpenPortal} />

        {/* Section C: Impact Statistics */}
        <ImpactSection />

        {/* Section D: About PakScholar */}
        <AboutSection />

        {/* Section E: Our Mission & Why We Exist */}
        <MissionSection />

        {/* Section F: Available Scholarships */}
        <ScholarshipsSection onOpenPortal={handleOpenPortal} />

        {/* Section G: How It Works / Journey Timeline */}
        <ProcessSection onOpenPortal={handleOpenPortal} />

        {/* Section H: Student Success Stories */}
        <SuccessStoriesSection />

        {/* Section I: Vision for Pakistan / High Impact Banner */}
        <VisionSection onOpenPortal={handleOpenPortal} />

        {/* Section J: Get Involved / Partner With Us */}
        <GetInvolvedSection />

        {/* Section K: Frequently Asked Questions */}
        <FAQSection />

        {/* Section L: Contact Section */}
        <ContactSection />
      </main>

      {/* Section M: Multi-Column Footer */}
      <Footer onOpenPortal={handleOpenPortal} />

      {/* Shared Interactive Student & Application Portal Modal */}
      <PortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        defaultMode={portalMode}
        selectedScholarshipTitle={selectedScholarshipTitle}
      />
    </div>
  );
};
