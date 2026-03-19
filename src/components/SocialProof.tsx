"use client";

import { motion } from "framer-motion";
import { COMPANY, TESTIMONIALS } from "@/lib/constants";

// ─── VERSION B — CLEAN LUXURY ─────────────────────────────────────────────────
// White background. Giant impact numbers + clean testimonial cards.
// Social proof as authority signal, not decoration.

export default function SocialProof() {
  const STATS = [
    { val: `+${COMPANY.stats.attendances}`, label: "atendimentos realizados", accent: false },
    { val: `${COMPANY.stats.googleRating}`, suffix: "★", label: "avaliação no Google", accent: true },
    { val: `${COMPANY.stats.unitsBrazil + COMPANY.stats.unitsUSA}`, label: "unidades BR + EUA", accent: false },
    { val: `${COMPANY.stats.satisfaction}%`, label: "índice de satisfação", accent: false },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-paper-100">
      <div className="container-main mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-xs font-bold text-electric-500 uppercase tracking-[0.16em] mb-4">Prova social</p>
          <h2
            className="font-black leading-[0.92] tracking-[-0.03em] text-ink-900"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Números que falam por si.
          </h2>
        </motion.div>

        {/* Impact numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-paper-300 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-paper-100 p-8 md:p-10 text-center"
            >
              <p className="font-black leading-none tracking-[-0.04em] mb-2" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                <span className={stat.accent ? "text-electric-500" : "text-ink-900"}>{stat.val}</span>
                {stat.suffix && <span className="text-electric-500">{stat.suffix}</span>}
              </p>
              <p className="text-xs text-ink-400 uppercase tracking-[0.12em] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white p-7 flex flex-col group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-electric-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink-600 leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-paper-200">
                <div className="w-9 h-9 bg-electric-50 text-electric-600 flex items-center justify-center font-black text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ink-300">{"neighborhood" in t && t.neighborhood ? `${t.neighborhood}, ${t.city}` : t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
