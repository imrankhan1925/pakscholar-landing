"use client";

import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Building2, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { Tilt3DCard } from "./Tilt3DCard";

interface StatCardProps {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#16865D]" />,
  Award: <Award className="w-6 h-6 text-[#16865D]" />,
  Building2: <Building2 className="w-6 h-6 text-[#16865D]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#16865D]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#16865D]" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-[#16865D]" />,
};

export const StatCard: React.FC<StatCardProps> = ({
  value,
  numericValue,
  suffix,
  label,
  description,
  icon,
}) => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // ms
          const steps = 40;
          const increment = numericValue / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, numericValue]);

  return (
    <Tilt3DCard maxTilt={7} className="h-full">
      <div
        ref={cardRef}
        className="group relative h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#16865D] rounded-t-2xl transition-all duration-300" />

        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#effbf4] border border-[#16865D]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            {iconMap[icon] || <Sparkles className="w-6 h-6 text-[#16865D]" />}
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Demo Metric
          </span>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight mb-2">
            {hasAnimated ? `${count}${suffix}` : value}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1C2B36] mb-1.5 group-hover:text-[#16865D] transition-colors">
            {label}
          </h3>
          <p className="text-xs sm:text-sm text-[#596A7A] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Tilt3DCard>
  );
};
