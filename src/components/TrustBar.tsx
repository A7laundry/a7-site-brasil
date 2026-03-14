"use client";

import { COMPANY } from "@/lib/constants";

// ─── VERSION B — CLEAN LUXURY ─────────────────────────────────────────────────
// Dark power stripe — white on near-black. Premium authority signal.

const TRUST_ITEMS = [
  { val: `+${COMPANY.stats.attendances}`, label: "atendimentos" },
  { val: `${COMPANY.stats.googleRating} ★`, label: "Google Reviews" },
  { val: `${COMPANY.stats.unitsBrazil} unidades`, label: "no Brasil" },
  { val: `${COMPANY.stats.unitsUSA} unidades`, label: "nos EUA" },
  { val: "24h", label: "turnaround garantido" },
  { val: "Coleta Grátis", label: "em domicílio" },
  { val: `${COMPANY.stats.satisfaction}%`, label: "satisfação" },
  { val: "Dermatologicamente", label: "testado" },
];

export default function TrustBar() {
  return (
    <div className="bg-ink-900 overflow-hidden border-y border-white/5">
      <div className="flex items-center py-4 animate-marquee whitespace-nowrap">
        {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
          <div key={i} className="inline-flex items-center gap-6 px-10">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-black text-white tracking-tight">{item.val}</span>
              <span className="text-xs text-white/35 uppercase tracking-[0.1em]">{item.label}</span>
            </div>
            <span className="text-electric-500 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
