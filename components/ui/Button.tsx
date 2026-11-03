import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "navy" | "outline" | "outline-white" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 shadow-xs",
    md: "text-sm px-5 py-2.5 gap-2 shadow-xs",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-sm font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#16865D] hover:bg-[#137350] text-white shadow-emerald-900/10 hover:shadow-md hover:shadow-[#16865D]/25 focus:ring-[#16865D]",
    secondary:
      "bg-[#102A43] hover:bg-[#0c2236] text-white shadow-navy-950/20 hover:shadow-md focus:ring-[#102A43]",
    navy:
      "bg-[#102A43] hover:bg-[#1b3a5b] text-white focus:ring-[#102A43]",
    outline:
      "border border-slate-300 hover:border-[#16865D] text-[#1C2B36] hover:text-[#16865D] bg-white/80 hover:bg-[#effbf4] focus:ring-[#16865D]",
    "outline-white":
      "border border-white/40 hover:border-white text-white hover:bg-white/10 focus:ring-white",
    ghost:
      "text-[#1C2B36] hover:text-[#16865D] hover:bg-slate-100/70 focus:ring-slate-300",
    white:
      "bg-white text-[#102A43] hover:bg-slate-50 shadow-md hover:shadow-lg focus:ring-white font-semibold",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isAnchor = href.startsWith("#");
    return (
      <Link href={href} className={combinedClasses} target={isAnchor ? undefined : "_self"}>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
