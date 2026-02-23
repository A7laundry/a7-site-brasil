"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-600 focus:ring-accent shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5",
    secondary:
      "bg-white text-primary border-2 border-primary/10 hover:border-accent hover:text-accent focus:ring-accent hover:-translate-y-0.5",
    outline:
      "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 focus:ring-white",
    ghost:
      "bg-transparent text-primary hover:bg-primary/5 focus:ring-primary",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] focus:ring-[#25D366] shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
