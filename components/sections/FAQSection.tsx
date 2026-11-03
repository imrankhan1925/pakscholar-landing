"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, MessageSquare } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQ_LIST } from "@/data/site-content";
import { Button } from "../ui/Button";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "General", "Eligibility", "Application", "Partners"];

  const filteredFAQs = FAQ_LIST.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F8F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Answers & Guidance"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about the PakScholar evaluation framework, application deadlines, testing criteria, and institutional partnerships."
          align="center"
        />

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#102A43] text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-[#102A43] hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick search input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-[#1C2B36] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16865D]/20 focus:border-[#16865D]"
              />
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No questions found</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching with different terms or select &ldquo;All&rdquo;.
              </p>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#16865D]/30 shadow-md ring-1 ring-[#16865D]/10"
                      : "bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#102A43] leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#16865D] text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#596A7A] leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#effbf4] text-[#16865D] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#102A43]">
                Still have unanswered questions?
              </p>
              <p className="text-xs text-[#596A7A]">
                Our candidate advisory team answers all queries within 24 business hours.
              </p>
            </div>
          </div>
          <Button variant="primary" size="sm" href="#contact">
            Reach Out to Us
          </Button>
        </div>
      </div>
    </section>
  );
};
