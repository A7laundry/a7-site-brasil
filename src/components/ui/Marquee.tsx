"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "normal" | "fast";
  className?: string;
}

export default function Marquee({
  children,
  speed = "normal",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex whitespace-nowrap ${
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee"
        }`}
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
