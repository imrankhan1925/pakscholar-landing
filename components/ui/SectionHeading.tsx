import React from "react";

export interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-3xl mb-12 sm:mb-16 ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 transition-all ${
            isDark
              ? "bg-[#16865D]/20 text-[#25c88c] border border-[#16865D]/30"
              : "bg-[#effbf4] text-[#16865D] border border-[#16865D]/20"
          }`}
        >
          {badgeIcon && <span className="shrink-0">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-tight sm:leading-[1.2] ${
          isDark ? "text-white" : "text-[#102A43]"
        }`}
      >
        {title}{" "}
        {titleHighlight && (
          <span
            className={
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#25c88c] to-[#a9ebd0]"
                : "text-[#16865D]"
            }
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300 font-light" : "text-[#596A7A]"
          } ${isCenter ? "max-w-2xl" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
