"use client";

import { PROMO_TICKER_MESSAGES } from "@/lib/constants";
import Marquee from "../ui/Marquee";

export default function PromoBanner() {
  return (
    <div className="relative z-[51] bg-gradient-to-r from-primary via-accent to-primary text-white py-2">
      <Marquee speed="fast">
        {PROMO_TICKER_MESSAGES.map((msg, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium px-4">
            <span className="text-yellow-300">★</span>
            {msg}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
