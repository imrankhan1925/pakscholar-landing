import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "navy" | "amber" | "outline" | "slate";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "emerald",
  size = "md",
  className = "",
  icon,
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    emerald: "bg-[#effbf4] text-[#16865D] border border-[#16865D]/20 font-medium",
    navy: "bg-[#f0f5fa] text-[#102A43] border border-[#102A43]/15 font-medium",
    amber: "bg-amber-50 text-amber-800 border border-amber-200 font-medium",
    outline: "border border-slate-200 text-slate-700 bg-white/70 font-normal",
    slate: "bg-slate-100 text-slate-700 border border-slate-200 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
