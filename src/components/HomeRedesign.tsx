"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  COMPANY,
  SERVICES,
  TESTIMONIALS,
  HOW_IT_WORKS_STEPS,
  PAIN_POINTS,
  FAQ_ITEMS,
  getWhatsAppLink,
} from "@/lib/constants";

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString("pt-BR")}{suffix}</span>;
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── ICONS ────────────────────────────────────────────────────────────────────

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowRight = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const StarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ─── TRUST ITEMS ─────────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  { icon: "⭐", text: `${COMPANY.stats.googleRating} Google` },
  { icon: "🧺", text: `${COMPANY.stats.attendances}+ atendimentos` },
  { icon: "🚴", text: "Coleta e entrega grátis" },
  { icon: "⚡", text: "Resposta em menos de 5 min" },
  { icon: "🏆", text: `${COMPANY.stats.satisfaction}% de satisfação` },
  { icon: "📍", text: `${COMPANY.cities?.length ?? 13} cidades do Vale` },
  { icon: "⏰", text: "Devolução em 48h" },
  { icon: "🔒", text: "Cobertura total por danos" },
];

// ─── PAIN POINT ICONS ────────────────────────────────────────────────────────

const PAIN_ICONS: Record<string, string> = {
  clock: "⏰", alert: "⚠️", bug: "🦟", nose: "👃", wallet: "💸",
};

// ─── CITY LP MAP ─────────────────────────────────────────────────────────────

const CITY_LPS: Record<string, string> = {
  "São José dos Campos": "/sao-jose-dos-campos",
  "Taubaté": "/taubate",
  "Jacareí": "/jacarei",
  "Caçapava": "",
  "Pindamonhangaba": "",
  "Guaratinguetá": "/lorena-guaratingueta",
  "Lorena": "/lorena-guaratingueta",
  "Cruzeiro": "",
  "Aparecida": "",
  "Caraguatatuba": "",
  "São Sebastião": "",
  "Ubatuba": "",
  "Campos do Jordão": "",
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomeRedesign() {
  const waLink = getWhatsAppLink("agendar");
  const waOrcamento = getWhatsAppLink("orcamento");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO — "A lavanderia mais moderna do Vale do Paraíba"           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="inicio" className="relative min-h-screen bg-ink-900 overflow-hidden">

        {/* Background image (desktop right panel) */}
        <div className="absolute inset-0 lg:left-[55%] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=90&auto=format&fit=crop"
            alt="Roupas impecáveis A7 Lavanderia"
            fill priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Dark gradient overlay — covers full on mobile, fades on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/95 to-ink-900/30 lg:from-ink-900 lg:via-ink-900/80 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 pt-24 pb-16 max-w-3xl">

          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 w-fit"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white/60 tracking-[0.12em] uppercase">
              {COMPANY.stats.googleRating} Google · +{COMPANY.stats.attendances} clientes
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.92] tracking-[-0.04em] text-white mb-7"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            A lavanderia{" "}
            <span className="text-electric-400 block">mais moderna</span>
            <span className="block">do Vale do Paraíba.</span>
          </motion.h1>

          {/* Electric rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
            className="w-12 h-[3px] bg-electric-500 mb-7"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-lg mb-10 font-normal"
          >
            Coletamos na sua porta, lavamos com padrão premium e devolvemos em 48h — prontas para viver.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba59] text-white font-bold text-base px-8 py-4 rounded-none transition-all duration-200 tracking-wide shadow-lg shadow-[#25D366]/20">
              <WhatsAppIcon className="w-5 h-5" />
              Agendar Coleta Grátis
            </a>
            <a href="#servicos"
              className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white font-semibold text-sm tracking-wide group transition-colors duration-200 py-4">
              Ver todos os serviços
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { val: `${COMPANY.stats.unitsBrazil}`, label: "unidades no Brasil" },
              { val: `${COMPANY.stats.unitsUSA}`, label: "unidades nos EUA" },
              { val: "24h", label: "serviço express" },
              { val: "Grátis", label: "coleta e entrega" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none tracking-tight">{item.val}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.14em] mt-1.5">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur border border-white/15 px-5 py-3.5"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/50">Disponível agora</p>
            <p className="text-sm font-semibold text-white leading-tight">Respondemos em &lt;5 min</p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 2. TRUST MARQUEE                                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="bg-ink-800 border-y border-white/5 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 text-sm text-white/60 font-medium mx-8">
              <span className="text-base">{item.icon}</span>
              {item.text}
              <span className="text-white/20 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 3. PROBLEM SECTION                                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="text-[11px] font-black tracking-[0.2em] text-electric-500 uppercase mb-3">O problema</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink-900 leading-[1.05] tracking-tight mb-5">
                Ainda perdendo tempo{" "}
                <span className="italic font-black text-ink-400">com isso?</span>
              </h2>
              <p className="text-lg text-ink-400">
                Todo brasileiro tem pelo menos um desses problemas. A A7 resolve todos.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAIN_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group p-6 border border-ink-100 hover:border-electric-200 hover:shadow-lg hover:shadow-electric-50 transition-all duration-300 cursor-default">
                  <div className="text-3xl mb-4">{PAIN_ICONS[p.icon] ?? "⚠️"}</div>
                  <h3 className="text-lg font-black text-ink-900 mb-2 group-hover:text-electric-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}

            {/* Solution card */}
            <Reveal delay={0.4}>
              <div className="p-6 bg-electric-500 text-white flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-lg font-black mb-2">A A7 resolve tudo isso</h3>
                  <p className="text-sm text-white/80 leading-relaxed">Coleta, lava e entrega. Você só aproveita o tempo livre.</p>
                </div>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all">
                  Agendar agora <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 4. HOW IT WORKS                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="py-24 sm:py-32 bg-paper-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[11px] font-black tracking-[0.2em] text-electric-500 uppercase mb-3">Como funciona</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink-900 leading-[1.05] tracking-tight">
                Simples como deveria ser
              </h2>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative p-8 lg:p-10 group">
                  {/* Connector line */}
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 w-px h-16 -translate-y-1/2 bg-ink-100" />
                  )}
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-5xl font-black text-electric-500/20 leading-none font-mono">{String(step.step).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-black text-ink-900 mb-3 leading-tight">{step.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 text-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-electric-500 hover:bg-electric-600 text-white font-bold px-10 py-4 tracking-wide transition-colors duration-200">
                <WhatsAppIcon className="w-5 h-5" />
                Começar agora — é grátis a coleta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 5. SERVICES                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="servicos" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5">
              <div>
                <p className="text-[11px] font-black tracking-[0.2em] text-electric-500 uppercase mb-3">Serviços</p>
                <h2 className="text-4xl sm:text-5xl font-black text-ink-900 leading-[1.05] tracking-tight">
                  Cuidamos de tudo<br className="hidden sm:block" /> que você veste e usa
                </h2>
              </div>
              <a href={waOrcamento} target="_blank" rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-ink-400 hover:text-electric-500 group transition-colors">
                Ver todos os serviços <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.07}>
                <a href={service.landingUrl || waLink} target="_blank" rel="noopener noreferrer"
                  className="group block overflow-hidden border border-ink-100 hover:border-electric-200 hover:shadow-xl hover:shadow-electric-50/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-ink-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                  </div>
                  {/* Text */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-ink-900 mb-2 group-hover:text-electric-600 transition-colors">{service.title}</h3>
                    <p className="text-sm text-ink-400 leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-electric-500 uppercase tracking-wider group-hover:gap-3 transition-all">
                      Ver oferta <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 6. SOCIAL PROOF                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="depoimentos" className="py-24 sm:py-32 bg-paper-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-black tracking-[0.2em] text-electric-500 uppercase mb-3">Depoimentos</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink-900 leading-[1.05] tracking-tight mb-4">
                O que nossos clientes dizem
              </h2>
              {/* Google rating aggregate */}
              <div className="inline-flex items-center gap-3 bg-white border border-paper-300 px-5 py-2.5 shadow-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-black text-ink-900">{COMPANY.stats.googleRating}</span>
                <span className="text-ink-300">·</span>
                <span className="text-xs text-ink-400 font-medium">Avaliações Google verificadas</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <div className="bg-white p-6 border border-paper-300 hover:shadow-md transition-shadow duration-200">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <StarIcon key={j} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  {/* Review text */}
                  <p className="text-ink-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-paper-200">
                    <div>
                      <p className="text-sm font-black text-ink-900">{t.name}</p>
                      <p className="text-xs text-ink-400">{t.city}</p>
                    </div>
                    {t.verified && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5">
                        <CheckIcon />
                        Verificado
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 7. AUTHORITY NUMBERS                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-ink-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <Reveal>
            <p className="text-[11px] font-black tracking-[0.2em] text-electric-400 uppercase text-center mb-14">
              Números que falam por si
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { target: 50000, suffix: "+", label: "atendimentos", desc: "clientes satisfeitos" },
              { target: 49, suffix: "", prefix: "", decimalVal: "4.9", label: "Google", desc: "nota média de avaliações" },
              { target: 14, suffix: "", label: "unidades", desc: "no Brasil e EUA" },
              { target: 99, suffix: "%+", label: "satisfação", desc: "em todos os serviços" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center lg:text-left">
                  <p className="text-5xl sm:text-6xl font-black text-white leading-none tracking-tight mb-3 font-mono">
                    {stat.decimalVal ? stat.decimalVal : <Counter target={stat.target} suffix={stat.suffix} />}
                  </p>
                  <p className="text-sm font-black text-electric-400 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xs text-white/40">{stat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Horizontal proof strip */}
          <Reveal delay={0.3}>
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { icon: "🧼", text: "Produtos dermatológicos testados" },
                { icon: "♻️", text: "Processo sustentável" },
                { icon: "🔒", text: "Cobertura total por danos" },
                { icon: "📦", text: "Embalagem profissional inclusa" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <p className="text-xs text-white/50 leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 8. LOCAL SEO — CIDADES                                            */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
              <div>
                <p className="text-[11px] font-black tracking-[0.2em] text-electric-500 uppercase mb-3">Cobertura regional</p>
                <h2 className="text-4xl sm:text-5xl font-black text-ink-900 leading-[1.05] tracking-tight">
                  Atendemos todo o<br className="hidden sm:block" /> Vale do Paraíba
                </h2>
              </div>
              <p className="text-ink-400 text-sm max-w-xs">
                Coleta e entrega gratuitas em {COMPANY.cities?.length ?? 13} cidades. Basta um WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {COMPANY.cities?.map((city, i) => {
              const lp = CITY_LPS[city];
              return (
                <Reveal key={city} delay={i * 0.04}>
                  {lp ? (
                    <Link href={lp}
                      className="flex items-center gap-2.5 p-3.5 border border-ink-100 hover:border-electric-300 hover:bg-electric-50 transition-all group">
                      <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                      <span className="text-sm font-semibold text-ink-700 group-hover:text-electric-600 transition-colors truncate">{city}</span>
                    </Link>
                  ) : (
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3.5 border border-ink-100 hover:border-electric-200 hover:bg-paper-100 transition-all group">
                      <span className="h-2 w-2 rounded-full bg-ink-200 shrink-0" />
                      <span className="text-sm font-semibold text-ink-500 truncate">{city}</span>
                    </a>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.5}>
            <p className="text-xs text-ink-300 mt-6 font-medium">
              ✓ Verde = página dedicada com informações locais · Cinza = atendemos mas a página está sendo criada
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 9. FAQ                                                            */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 sm:py-32 bg-paper-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-black tracking-[0.2em] text-electric-500 uppercase mb-3">FAQ</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink-900 leading-[1.05] tracking-tight">
                Perguntas frequentes
              </h2>
            </div>
          </Reveal>

          <div className="space-y-0">
            {FAQ_ITEMS.slice(0, 6).map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-b border-paper-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-base font-bold text-ink-800 group-hover:text-electric-600 transition-colors pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`shrink-0 text-ink-300 text-xl leading-none transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pb-5"
                    >
                      <p className="text-sm text-ink-500 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 10. FINAL CTA                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-40 bg-ink-900 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-700/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-electric-500/20 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 text-center">
          <Reveal>
            <p className="text-[11px] font-black tracking-[0.2em] text-electric-400 uppercase mb-6">Pronto para começar?</p>
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1.0] tracking-[-0.04em] mb-6">
              Sua roupa de volta{" "}
              <span className="text-electric-400">impecável.</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto leading-relaxed">
              Primeira coleta grátis. Sem contrato. Cancele quando quiser.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba59] text-white font-bold text-lg px-10 py-5 transition-colors duration-200 shadow-lg shadow-green-500/20">
                <WhatsAppIcon className="w-6 h-6" />
                Agendar Coleta Grátis
              </a>
              <a href="/precos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold text-sm px-8 py-5 transition-all duration-200">
                Ver preços e planos
              </a>
            </div>
            <p className="text-xs text-white/25 mt-8 tracking-wider uppercase">
              {COMPANY.address.city} · {COMPANY.address.state} · Vale do Paraíba
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FLOATING WHATSAPP CTA (mobile-first, always visible)             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1fba59] text-white font-bold text-sm px-5 py-3.5 shadow-xl shadow-green-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ borderRadius: "2px" }}
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <WhatsAppIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Agendar Coleta</span>
      </a>

    </>
  );
}
