"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`relative bg-white rounded-2xl border border-gray-100 shadow-sm ${paddings[padding]} ${
        hover
          ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/20 group/card"
          : ""
      } ${className}`}
    >
      {hover && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none shimmer-bg" />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
