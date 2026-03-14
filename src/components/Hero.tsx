"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY, getWhatsAppLink } from "@/lib/constants";

// ─── VERSION B — CLEAN LUXURY / NIKE ─────────────────────────────────────────
// Editorial split-screen: left = headline + CTA / right = full-bleed photo
// Typography-first. White space as luxury signal. Single decisive CTA.

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1400&q=90&auto=format&fit=crop";

export default function Hero() {
  const waLink = getWhatsAppLink("agendar");

  return (
    <section className="relative min-h-screen bg-paper-100 overflow-hidden">
      {/* ── GRID ───────────────────────────────────────────────────────────── */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_45%]">

        {/* ── LEFT — TEXT BLOCK ─────────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 pb-16 lg:pt-0 lg:pb-0 relative z-10">

          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 w-fit"
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-electric-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="text-xs font-semibold text-ink-400 tracking-[0.12em] uppercase">
              {COMPANY.stats.googleRating} Google &bull; +{COMPANY.stats.attendances} atendimentos
            </span>
          </motion.div>

          {/* H1 — massive editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.9] tracking-[-0.04em] text-ink-900 mb-6"
            style={{ fontSize: "clamp(3.2rem, 8.5vw, 7rem)" }}
          >
            Suas roupas{" "}
            <span className="block text-electric-500">impecáveis.</span>
            <span className="block">Você, livre.</span>
          </motion.h1>

          {/* Electric rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="w-14 h-[3px] bg-electric-500 mb-7"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg sm:text-xl text-ink-400 leading-relaxed max-w-md mb-10 font-normal"
          >
            Lavanderia premium com coleta e entrega em casa.
            Vale do Paraíba &mdash; {COMPANY.stats.unitsBrazil} unidades, padrão internacional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href={waLink}
              className="inline-flex items-center gap-3 bg-electric-500 hover:bg-electric-600 text-white font-bold text-base px-8 py-4 tracking-wide transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Coleta Grátis
            </a>

            <a
              href="#planos"
              className="inline-flex items-center gap-2 text-ink-400 hover:text-ink-900 font-semibold text-sm tracking-wide group transition-colors duration-200"
            >
              Ver planos e preços
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-16 pt-8 border-t border-paper-300 flex items-center gap-8 flex-wrap"
          >
            {[
              { val: `${COMPANY.stats.unitsBrazil}`, label: "unidades BR" },
              { val: `${COMPANY.stats.unitsUSA}`, label: "unidades EUA" },
              { val: "24h", label: "turnaround" },
              { val: "Grátis", label: "coleta e entrega" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-2xl font-black text-ink-900 leading-none tracking-tight">{item.val}</span>
                <span className="text-[10px] text-ink-300 uppercase tracking-[0.14em] mt-1">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — IMAGE (desktop only) ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <Image
            src={HERO_IMAGE}
            alt="Roupas impecáveis — A7 Lavanderia premium"
            fill
            priority
            className="object-cover"
            sizes="45vw"
          />
          {/* Left rule */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-electric-500/50" />

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-12 left-0 bg-ink-900 text-white px-5 py-3.5 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">Disponível agora</p>
              <p className="text-sm font-semibold text-white leading-tight">Respondemos em &lt;5 min</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── MOBILE image strip ────────────────────────────────────────────── */}
      <div className="lg:hidden h-[45vw] max-h-72 relative">
        <Image
          src={HERO_IMAGE}
          alt="A7 Lavanderia premium"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/80 via-transparent to-transparent" />
      </div>
    </section>
  );
}
