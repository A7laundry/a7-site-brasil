"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── FADE-IN WRAPPER ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── LABEL ────────────────────────────────────────────────────────────────────
function Label({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="text-[#46C1F1] font-black text-xs tracking-[0.4em] uppercase">{n}</span>
      <span className="w-8 h-px bg-[#46C1F1]/40" />
      <span className="text-white/30 font-black text-xs tracking-[0.3em] uppercase">{text}</span>
    </div>
  );
}

export default function ManualDaMarcaPage() {
  return (
    <div className="bg-[#050810] text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.png" alt="A7" className="h-6 w-auto invert brightness-0" />
          </Link>
          <Link href="/growth-engine" className="text-white text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            ← Growth
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          ① MANIFESTO — FULL BLEED
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1800&q=90"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.5em] mb-8">A7 LAVANDERIA · Brand OS 2025</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-[13vw] md:text-[11vw] font-black leading-[0.85] tracking-tighter uppercase text-white">
              Nós não<br />
              <span className="text-[#46C1F1]">lavamos</span><br />
              roupas.
            </h1>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 max-w-xl">
            <p className="text-white/50 text-xl leading-relaxed border-l-2 border-[#46C1F1] pl-6">
              Devolvemos o bem mais escasso do mundo moderno. O único que, uma vez gasto, nunca volta.
            </p>
            <p className="text-white text-xl font-bold mt-3 pl-6">Seu tempo.</p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ② STATEMENT — SINGLE POWERFUL LINE
      ══════════════════════════════════════════════════════════ */}
      <section className="min-h-[60vh] flex items-center justify-center bg-[#0C5982] px-6 py-20">
        <Reveal className="text-center">
          <p className="text-white/30 text-xs font-black uppercase tracking-[0.5em] mb-6">O produto real</p>
          <p className="text-[8vw] md:text-[6vw] font-black leading-tight tracking-tighter">
            Não vendemos limpeza.<br />
            <span className="text-[#46C1F1]">Vendemos domingos.</span>
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ③ MANIFESTO COMPLETO
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Label n="01" text="Manifesto" />
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Enquanto<br />você <span className="text-[#46C1F1]">vive</span>,<br />a A7<br />trabalha.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>Uma família brasileira perde entre <strong className="text-white">400 e 500 horas por ano</strong> com lavagem, secagem, passagem e dobramento.</p>
            <p>São 400 horas que poderiam ser gastas com quem você ama. Com o negócio que você constrói. Com o descanso que você merece.</p>
            <p className="text-white text-2xl font-black leading-tight">A A7 existe para que você nunca mais perca uma hora com o que importa menos.</p>
            <p className="text-[#46C1F1] font-bold text-xl">A7. Porque seu tempo vale mais.</p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ④ TIME IS THE PRODUCT — VISUAL
      ══════════════════════════════════════════════════════════ */}
      <section className="py-0 bg-[#050810]">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* Left: The problem */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=90"
              alt="Lavando em casa"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/90 to-[#050810]/40" />
            <div className="absolute inset-0 flex flex-col justify-center p-12">
              <Reveal>
                <p className="text-red-400 font-black text-xs uppercase tracking-widest mb-4">SEM A7</p>
                <p className="text-5xl md:text-6xl font-black leading-tight tracking-tighter text-white/70">
                  -500h<br />por ano
                </p>
                <p className="text-white/40 mt-4 text-lg">Perdidas em lavagem,<br />secagem e passagem.</p>
              </Reveal>
            </div>
          </div>
          {/* Right: The solution */}
          <div className="relative overflow-hidden bg-[#0C5982]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C5982] to-[#074060]" />
            <div className="absolute inset-0 flex flex-col justify-center p-12">
              <Reveal delay={0.2}>
                <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-4">COM A7</p>
                <p className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                  +500h<br />de volta
                </p>
                <p className="text-white/70 mt-4 text-lg">Para viver o que<br />realmente importa.</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Família", "Negócios", "Saúde", "Descanso"].map((t) => (
                    <div key={t} className="border border-white/20 rounded-xl px-4 py-3 text-white/80 text-sm font-semibold">{t}</div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑤ BRAND PURPOSE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <Label n="02" text="Purpose" />
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
            {[
              { n: "O QUE FAZEMOS", text: "Coletamos, lavamos, dobramos e entregamos. Em 48h. Na sua porta.", icon: "🧺" },
              { n: "COMO FAZEMOS", text: "Com protocolos profissionais por tipo de tecido. Sem surpresas. Com pontualidade garantida.", icon: "⚡" },
              { n: "POR QUÊ EXISTIMOS", text: "Para que nenhuma hora da sua vida seja gasta com o que uma máquina pode fazer por você.", icon: "💡" },
            ].map((item) => (
              <Reveal key={item.n} className="bg-[#080B14] p-10">
                <p className="text-4xl mb-6">{item.icon}</p>
                <p className="text-[#46C1F1] text-xs font-black uppercase tracking-widest mb-4">{item.n}</p>
                <p className="text-white text-xl font-semibold leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑥ COLOR SYSTEM — FULL BLEED STRIPS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <Label n="03" text="Color System" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              Duas cores.<br /><span className="text-[#46C1F1]">Identidade total.</span>
            </h2>
          </Reveal>

          {/* Main colors: full-bleed horizontal strips */}
          <div className="space-y-3 mb-6">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl h-36 bg-[#0C5982] flex items-center px-10 cursor-default">
                <div className="flex items-center gap-8">
                  <p className="text-white text-5xl font-black tracking-tighter">A7 Navy</p>
                  <div className="h-px w-12 bg-white/30" />
                  <p className="font-mono text-white/60 text-xl">#0C5982</p>
                </div>
                <p className="absolute right-10 text-white/20 font-black text-xs uppercase tracking-widest">Cor Primária · Logotipo · Headers · CTAs</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl h-28 bg-[#46C1F1] flex items-center px-10 cursor-default">
                <div className="flex items-center gap-8">
                  <p className="text-[#0C5982] text-4xl font-black tracking-tighter">A7 Cyan</p>
                  <div className="h-px w-12 bg-[#0C5982]/30" />
                  <p className="font-mono text-[#0C5982]/60 text-lg">#46C1F1</p>
                </div>
                <p className="absolute right-10 text-[#0C5982]/30 font-black text-xs uppercase tracking-widest">Acento · Destaques · Links · Energia</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="group relative overflow-hidden rounded-2xl h-20 bg-[#050810] border border-white/10 flex items-center px-10 cursor-default">
                <div className="flex items-center gap-8">
                  <p className="text-white text-3xl font-black tracking-tighter">A7 Black</p>
                  <div className="h-px w-12 bg-white/20" />
                  <p className="font-mono text-white/40 text-lg">#050810</p>
                </div>
                <p className="absolute right-10 text-white/20 font-black text-xs uppercase tracking-widest">Fundo · Profundidade · Premium</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group relative overflow-hidden rounded-2xl h-20 bg-white flex items-center px-10 cursor-default">
                <div className="flex items-center gap-8">
                  <p className="text-[#050810] text-3xl font-black tracking-tighter">A7 White</p>
                  <div className="h-px w-12 bg-[#050810]/20" />
                  <p className="font-mono text-[#050810]/40 text-lg">#F8FAFC</p>
                </div>
                <p className="absolute right-10 text-[#050810]/20 font-black text-xs uppercase tracking-widest">Contraste · Respiro · Limpeza</p>
              </div>
            </Reveal>
          </div>

          {/* Gradient system */}
          <Reveal delay={0.3}>
            <div className="rounded-2xl overflow-hidden h-20" style={{ background: "linear-gradient(90deg, #050810 0%, #0C5982 40%, #46C1F1 70%, #E0F4FF 100%)" }} />
            <p className="text-white/30 text-xs mt-3 text-center font-bold uppercase tracking-widest">Gradiente Institucional · Uso em fundos de seção, banners e heróis</p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑦ LOGO SYSTEM
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <Label n="04" text="Logo System" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              Um símbolo.<br /><span className="text-[#46C1F1]">Infinitas aplicações.</span>
            </h2>
          </Reveal>

          {/* 4 logo versions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { bg: "#0C5982", src: "/logo-light.png", label: "Negativa", sub: "Fundos escuros e coloridos" },
              { bg: "#ffffff", src: "/logo-dark.png", label: "Positiva", sub: "Fundos claros e brancos" },
              { bg: "#ffffff", src: "/logo-vertical.png", label: "Vertical", sub: "Fachadas e material físico" },
              { bg: "#080B14", src: "/logo-symbol.png", label: "Símbolo", sub: "Avatar, favicon, ícone app" },
            ].map((v) => (
              <Reveal key={v.label}>
                <div className="rounded-2xl overflow-hidden">
                  <div className="h-40 flex items-center justify-center p-8" style={{ backgroundColor: v.bg }}>
                    <img src={v.src} alt={v.label} className="max-h-16 max-w-full object-contain" />
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.06] p-4 rounded-b-2xl">
                    <p className="text-white font-black">{v.label}</p>
                    <p className="text-white/40 text-xs mt-1">{v.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Clear space rule */}
          <Reveal>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex items-center justify-center w-48 h-24 flex-shrink-0">
                <div className="absolute inset-0 border-2 border-dashed border-[#46C1F1]/30 rounded-xl" />
                <div className="relative p-4">
                  <img src="/logo-light.png" alt="" className="h-8 w-auto" />
                </div>
              </div>
              <div>
                <p className="text-[#46C1F1] font-black text-sm uppercase tracking-widest mb-2">Zona de Respiro</p>
                <p className="text-white/60 text-sm leading-relaxed">Mantenha um espaço livre equivalente à altura da letra <strong className="text-white">A</strong> do logotipo em todos os lados. Nenhum elemento pode invadir essa área. Mínimo digital: <strong className="text-white">50px</strong>. Mínimo impresso: <strong className="text-white">20mm</strong>.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑧ TYPOGRAPHY — GIANT SPECIMEN
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 overflow-hidden bg-[#0C5982]">
        <div className="max-w-7xl mx-auto px-6">
          <Label n="05" text="Typography" />
        </div>
        {/* Oversized specimen */}
        <div className="overflow-hidden">
          <Reveal>
            <p className="text-[18vw] font-black leading-none tracking-tighter text-white whitespace-nowrap px-6 opacity-90">
              A7 LAVANDERIA
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[8vw] font-black leading-none tracking-tighter text-[#46C1F1] whitespace-nowrap px-6">
              Seu tempo de volta.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[4vw] font-bold leading-tight text-white/40 whitespace-nowrap px-6">
              Coleta grátis · Entrega em 48h · Padrão profissional
            </p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { size: "Display", spec: "Black · 64–96px · -0.04em", sample: "A7." },
              { size: "Headline", spec: "ExtraBold · 32–56px · -0.02em", sample: "Limpo." },
              { size: "Body", spec: "Regular · 16–18px · 1.6", sample: "Entregamos hoje." },
              { size: "Label", spec: "Bold · 10–12px · +0.1em", sample: "AGENDAR" },
            ].map((t) => (
              <Reveal key={t.size}>
                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-[#46C1F1] text-xs font-black uppercase tracking-widest mb-1">{t.size}</p>
                  <p className="text-white/40 font-mono text-xs mb-4">{t.spec}</p>
                  <p className="text-white font-black text-3xl">{t.sample}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑨ PHOTOGRAPHY DIRECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <Label n="06" text="Photography" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              Fotos que vendem<br /><span className="text-[#46C1F1]">estilo de vida.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 text-xl mb-16 max-w-xl">Nunca mostramos a lavagem. Mostramos o que a pessoa faz com o tempo que a A7 devolveu.</p>
          </Reveal>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              { src: "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80", label: "FAMÍLIA", sub: "Tempo junto" },
              { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", label: "EXECUTIVO", sub: "Produtividade" },
              { src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80", label: "LAR MODERNO", sub: "Organização" },
              { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", label: "PADRÃO HOTEL", sub: "Resultado" },
              { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80", label: "CLOSET", sub: "Ordem e beleza" },
              { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", label: "PROFISSIONAL", sub: "Performance" },
            ].map((photo) => (
              <Reveal key={photo.label}>
                <div className="relative overflow-hidden rounded-2xl aspect-square group cursor-default">
                  <img src={photo.src} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[#46C1F1] text-xs font-black uppercase tracking-widest">{photo.label}</p>
                    <p className="text-white/60 text-xs">{photo.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Photo rules */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "LUZ", rule: "Natural · difusa · quente · janela" },
              { title: "PALETA", rule: "Neutros · branco · linho · madeira" },
              { title: "EMOÇÃO", rule: "Calma · leveza · liberdade · status" },
              { title: "EVITAR", rule: "Máquinas sujas · roupas amontoadas · estúdio frio" },
            ].map((r) => (
              <Reveal key={r.title}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                  <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-2">{r.title}</p>
                  <p className="text-white/70 text-sm">{r.rule}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑩ SOCIAL MEDIA SYSTEM
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#080B14]">
        <div className="max-w-7xl mx-auto">
          <Label n="07" text="Social Media" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              Instagram que<br /><span className="text-[#46C1F1]">para o scroll.</span>
            </h2>
          </Reveal>

          {/* Instagram grid mockup */}
          <Reveal>
            <div className="bg-[#111] rounded-3xl p-6 max-w-sm mx-auto md:mx-0 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0C5982] flex items-center justify-center">
                  <img src="/logo-light.png" alt="" className="h-4 w-auto" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">a7lavanderia</p>
                  <p className="text-white/40 text-xs">São José dos Campos</p>
                </div>
              </div>
              {/* 3×3 grid */}
              <div className="grid grid-cols-3 gap-0.5">
                {[
                  { bg: "#0C5982", text: "DOMINGO\nÉ SEU.", textColor: "white" },
                  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" },
                  { bg: "#050810", text: "48h.", textColor: "#46C1F1" },
                  { img: "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=300&q=80" },
                  { bg: "#46C1F1", text: "A7.", textColor: "#0C5982" },
                  { img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=80" },
                  { bg: "#080B14", text: "SEU\nTEMPO.", textColor: "white" },
                  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80" },
                  { bg: "#0C5982", text: "COLETA\nGRÁTIS.", textColor: "#46C1F1" },
                ].map((cell, i) => (
                  <div key={i} className="aspect-square overflow-hidden">
                    {cell.img ? (
                      <img src={cell.img} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: cell.bg }}>
                        <p className="font-black text-center leading-tight text-sm whitespace-pre" style={{ color: cell.textColor }}>{cell.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Format cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                format: "REELS · 0:03",
                desc: "Os primeiros 3 segundos decidem tudo. Visual impactante + texto-gancho na tela.",
                hook: "\"Você sabe quanto tempo perde todo mês?\"",
                color: "#0C5982",
              },
              {
                format: "CARROSSEL · 7–9 SLIDES",
                desc: "Slide 1 é uma provocação. Slides do meio entregam valor. Último slide: CTA direto.",
                hook: "\"A conta que você nunca fez (e vai te surpreender)\"",
                color: "#46C1F1",
              },
              {
                format: "STORIES · DIÁRIO",
                desc: "Bastidores reais. Antes e depois. Depoimentos curtos. Enquetes que engajam.",
                hook: "\"Como foi o seu domingo? O nosso foi lavando roupas.\"",
                color: "#1A7AB5",
              },
            ].map((f) => (
              <Reveal key={f.format}>
                <div className="border rounded-3xl p-8" style={{ borderColor: f.color + "40" }}>
                  <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: f.color }}>{f.format}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{f.desc}</p>
                  <p className="text-white/50 text-sm italic border-l-2 pl-4" style={{ borderColor: f.color }}>&ldquo;{f.hook}&rdquo;</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑪ PHYSICAL APPLICATIONS — CSS MOCKUPS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <Label n="08" text="Physical Applications" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              A marca que<br /><span className="text-[#46C1F1]">você toca.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* VAN MOCKUP */}
            <Reveal>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-6">Veículo de Entrega</p>
                {/* CSS Van */}
                <div className="relative mx-auto" style={{ width: "100%", maxWidth: "400px" }}>
                  <div className="relative bg-[#0C5982] rounded-xl overflow-hidden" style={{ height: "180px" }}>
                    {/* Van body top */}
                    <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#0C5982]" />
                    {/* Windshield */}
                    <div className="absolute top-3 left-4 w-20 h-12 bg-[#46C1F1]/20 rounded-lg" />
                    {/* Side window */}
                    <div className="absolute top-3 left-28 w-32 h-12 bg-[#46C1F1]/15 rounded-lg" />
                    {/* Logo on side */}
                    <div className="absolute top-1/2 right-8 -translate-y-1/2">
                      <img src="/logo-light.png" alt="A7" className="h-8 w-auto" />
                    </div>
                    {/* Tagline */}
                    <div className="absolute bottom-16 left-4 right-4 text-center">
                      <p className="text-[#46C1F1] text-xs font-black uppercase tracking-widest">Seu tempo de volta.</p>
                    </div>
                    {/* Van base / bumper */}
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#050810]" />
                    {/* Wheels */}
                    <div className="absolute bottom-1 left-8 w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#46C1F1]/40" />
                    <div className="absolute bottom-1 right-8 w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#46C1F1]/40" />
                  </div>
                </div>
                <div className="mt-4 text-white/40 text-xs">Envelopamento total · Fundo Navy · Logo lateral branca · Tagline na traseira</div>
              </div>
            </Reveal>

            {/* UNIFORM MOCKUP */}
            <Reveal delay={0.1}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-6">Uniforme</p>
                <div className="flex items-center justify-center gap-8">
                  {/* Shirt CSS */}
                  <div className="relative flex-shrink-0">
                    <svg viewBox="0 0 120 130" width="120" className="drop-shadow-xl">
                      {/* Shirt body */}
                      <path d="M10 40 L0 20 L35 10 L40 30 L80 30 L85 10 L120 20 L110 40 L95 35 L95 120 L25 120 L25 35 Z" fill="#0C5982" />
                      {/* Collar */}
                      <path d="M40 30 Q60 45 80 30 L70 10 Q60 25 50 10 Z" fill="#074060" />
                      {/* Sleeves */}
                      <path d="M25 35 L0 20 L10 40 Z" fill="#0a4a72" />
                      <path d="M95 35 L120 20 L110 40 Z" fill="#0a4a72" />
                    </svg>
                    {/* Logo on shirt */}
                    <div className="absolute top-[45px] left-[28px] w-16">
                      <img src="/logo-light.png" alt="" className="w-full" />
                    </div>
                  </div>
                  {/* Cap CSS */}
                  <div className="relative flex-shrink-0">
                    <svg viewBox="0 0 100 80" width="100">
                      {/* Cap dome */}
                      <ellipse cx="50" cy="45" rx="45" ry="30" fill="#0C5982" />
                      <rect x="5" y="43" width="90" height="10" rx="2" fill="#074060" />
                      {/* Brim */}
                      <ellipse cx="28" cy="54" rx="28" ry="6" fill="#050810" />
                      {/* Logo on cap */}
                    </svg>
                    <div className="absolute top-[18px] left-[30px] w-10">
                      <img src="/logo-light.png" alt="" className="w-full" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-white/40 text-xs">Calça preta · Polo navy · Bordado peitoral · Crachá magnético</div>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* LAUNDRY BAG */}
            <Reveal>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-6">Sacola de Coleta</p>
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {/* Bag handles */}
                    <div className="flex justify-center gap-4 mb-1">
                      <div className="w-1 h-8 bg-[#46C1F1]/60 rounded-full" />
                      <div className="w-1 h-8 bg-[#46C1F1]/60 rounded-full" />
                    </div>
                    {/* Bag body */}
                    <div className="w-28 h-32 bg-[#0C5982] rounded-b-xl rounded-t-lg flex items-center justify-center border border-[#46C1F1]/20">
                      <div className="text-center">
                        <img src="/logo-light.png" alt="" className="h-5 w-auto mx-auto mb-2" />
                        <p className="text-[#46C1F1] text-[9px] font-black uppercase tracking-widest">Seu tempo de volta.</p>
                      </div>
                    </div>
                    {/* Seal tag */}
                    <div className="absolute -bottom-3 right-2 bg-[#46C1F1] text-[#0C5982] text-[7px] font-black px-2 py-1 rounded-full">
                      #A7-00001
                    </div>
                  </div>
                </div>
                <div className="text-white/40 text-xs text-center">Lona resistente · Lacre numerado · QR Code</div>
              </div>
            </Reveal>

            {/* PACKAGING */}
            <Reveal delay={0.1}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-6">Embalagem Entrega</p>
                <div className="flex justify-center mb-4">
                  {/* Box mockup */}
                  <div className="relative w-28 h-24">
                    {/* Front face */}
                    <div className="absolute inset-0 bg-[#0C5982] rounded-lg border border-[#46C1F1]/20 flex items-center justify-center">
                      <img src="/logo-light.png" alt="" className="h-5 w-auto" />
                    </div>
                    {/* Top face */}
                    <div className="absolute -top-4 left-2 right-0 h-6 bg-[#0a4a72] rounded-t-lg transform -skew-x-12 origin-bottom" />
                    {/* Side face */}
                    <div className="absolute top-0 -right-4 bottom-0 w-6 bg-[#074060] rounded-r-lg transform skew-y-6 origin-left" />
                    {/* Sticker */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#46C1F1] rounded-full flex items-center justify-center">
                      <span className="text-[#0C5982] text-[6px] font-black">A7</span>
                    </div>
                  </div>
                </div>
                <div className="text-white/40 text-xs text-center">Papel couchê · Adesivo lacre · Perfume leve</div>
              </div>
            </Reveal>

            {/* STORE FACADE */}
            <Reveal delay={0.15}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-6">Fachada da Loja</p>
                <div className="flex justify-center mb-4">
                  {/* Store front mockup */}
                  <div className="relative w-36 h-28">
                    {/* Building */}
                    <div className="absolute inset-0 bg-[#0C5982] rounded-t-xl">
                      {/* Sign board */}
                      <div className="absolute top-2 left-2 right-2 h-8 bg-[#050810] rounded-lg flex items-center justify-center">
                        <img src="/logo-light.png" alt="" className="h-4 w-auto" />
                      </div>
                      {/* Glass door */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-14 bg-[#46C1F1]/20 border border-[#46C1F1]/30 rounded-t-lg" />
                      {/* Windows */}
                      <div className="absolute bottom-0 left-2 w-10 h-10 bg-[#46C1F1]/15 border border-[#46C1F1]/20" />
                      <div className="absolute bottom-0 right-2 w-10 h-10 bg-[#46C1F1]/15 border border-[#46C1F1]/20" />
                    </div>
                    {/* Ground */}
                    <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#1a1a1a] rounded-b" />
                  </div>
                </div>
                <div className="text-white/40 text-xs text-center">Fundo Navy · Iluminação LED branco · Vidro limpo</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑫ STORE EXPERIENCE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0C5982]">
        <div className="max-w-7xl mx-auto">
          <Label n="09" text="Store Experience" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              A loja precisa<br /><span className="text-white">ser inesquecível.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { sense: "VISÃO", desc: "Tudo azul Navy e branco. Organização impecável. Logo visível de 50 metros.", icon: "👁" },
              { sense: "CHEIRO", desc: "Aroma suave e exclusivo A7. Lavanda + algodão + ar fresco. Inconfundível.", icon: "👃" },
              { sense: "TOQUE", desc: "Superfícies limpas. Materiais premium. Nada de plástico barato.", icon: "✋" },
              { sense: "SOM", desc: "Playlist curada. Ambiente tranquilo. Voz da equipe: clara, simpática, segura.", icon: "👂" },
              { sense: "SENSAÇÃO", desc: "Eficiência visível. Confiança imediata. Você sabe que está em boas mãos.", icon: "💙" },
            ].map((s) => (
              <Reveal key={s.sense}>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl mb-3">{s.icon}</p>
                  <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-2">{s.sense}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑬ CAMPAIGNS — POSTER STYLE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <Label n="10" text="Campaigns" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              10 campanhas prontas<br /><span className="text-[#46C1F1]">para dominar.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                n: "01", name: "Compre seu Domingo de Volta",
                line: "\"Sunday is not for washing clothes.\"",
                tag: "HERO CAMPAIGN",
                bg: "#0C5982", accent: "#46C1F1",
                desc: "Campanha principal. Foco em tempo e liberdade. Mídias: video 60s + OOH + digital.",
              },
              {
                n: "02", name: "Calcule o que Você Perde",
                line: "\"500 horas. Todo ano. Desperdiçadas.\"",
                tag: "AWARENESS",
                bg: "#050810", accent: "#46C1F1",
                desc: "Landing page interativa com calculadora de tempo perdido. Resultado é chocante.",
              },
              {
                n: "03", name: "Sua Roupa Tem Memória",
                line: "\"O terno da entrevista. O vestido do aniversário. Nós cuidamos do que tem valor.\"",
                tag: "EMOTIONAL",
                bg: "#080B14", accent: "#46C1F1",
                desc: "Campanha de brand equity. Video emocional. Alto potencial de compartilhamento.",
              },
              {
                n: "04", name: "O Padrão Hotel em Casa",
                line: "\"Você não mora em hotel. Mas pode ter a mesma roupa.\"",
                tag: "PREMIUM",
                bg: "#0C5982", accent: "#ffffff",
                desc: "Para segmento premium. Imagens aspiracionais. Conversão por desejo.",
              },
              {
                n: "05", name: "Avaliação 5★ Começa na Cama",
                line: "\"Seu hóspede não comenta. Mas avalia.\"",
                tag: "AIRBNB",
                bg: "#074060", accent: "#46C1F1",
                desc: "Para anfitriões. ROI direto e mensurável. Google + Meta Ads segmentado.",
              },
              {
                n: "06", name: "Roupa Limpa não é o Produto",
                line: "\"O produto é o seu fim de semana livre.\"",
                tag: "BRAND FILM",
                bg: "#050810", accent: "#46C1F1",
                desc: "Video manifesto 90s. Sem narração nos primeiros 30s. Imagens da vida real.",
              },
              {
                n: "07", name: "A Primeira Coleta É Nossa",
                line: "\"Experimente. Uma vez que você vê, não volta atrás.\"",
                tag: "TRIAL",
                bg: "#0C5982", accent: "#46C1F1",
                desc: "Funil completo: anúncio → LP → WhatsApp → coleta → surpreender na entrega.",
              },
              {
                n: "08", name: "Uniforme que Vende",
                line: "\"Sua equipe é o primeiro produto que o cliente vê.\"",
                tag: "B2B",
                bg: "#050810", accent: "#46C1F1",
                desc: "Para empresas e restaurantes. LinkedIn + Google. Geração de leads B2B.",
              },
              {
                n: "09", name: "Plano Família: Paz em Casa",
                line: "\"Menos uma batalha na sua semana.\"",
                tag: "SUBSCRIPTION",
                bg: "#074060", accent: "#46C1F1",
                desc: "Para famílias. Humor inteligente. Foco em harmonia doméstica.",
              },
              {
                n: "10", name: "A A7 Chegou na Sua Cidade",
                line: "\"[Cidade]. Seu domingo nunca mais vai ser o mesmo.\"",
                tag: "GEO EXPANSION",
                bg: "#0C5982", accent: "#46C1F1",
                desc: "Para expansão geográfica. Personalizado por cidade. OOH + digital local.",
              },
            ].map((c) => (
              <Reveal key={c.n}>
                <div
                  className="relative overflow-hidden rounded-3xl p-10 min-h-[200px] flex flex-col justify-between group cursor-default"
                  style={{ backgroundColor: c.bg, border: `1px solid ${c.accent}20` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-black text-white/20 text-3xl">{c.n}</span>
                        <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: c.accent + "20", color: c.accent }}>{c.tag}</span>
                      </div>
                      <p className="text-white font-black text-xl mb-2">{c.name}</p>
                      <p className="text-white/50 text-sm italic mb-3">{c.line}</p>
                    </div>
                  </div>
                  <p className="text-white/30 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑭ BRAND ENERGY — PERSONA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#080B14]">
        <div className="max-w-7xl mx-auto">
          <Label n="11" text="Brand Energy" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
              Se a A7 fosse<br /><span className="text-[#46C1F1]">uma pessoa.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {[
                { trait: "BOLD", desc: "Fala o que pensa. Sem rodeios. Direto ao ponto." },
                { trait: "SHARP", desc: "Nunca erra o prazo. Executa com precisão." },
                { trait: "HUMAN", desc: "Lembra o seu nome. Se importa de verdade." },
                { trait: "FREE", desc: "Não te prende. Te liberta de tarefas sem sentido." },
                { trait: "GROWING", desc: "Está sempre em movimento. Nunca satisfeita com o suficiente." },
              ].map((t, i) => (
                <Reveal key={t.trait} delay={i * 0.05}>
                  <div className="flex items-center gap-6 group">
                    <span className="text-[#46C1F1] font-black text-sm w-20 flex-shrink-0">{t.trait}</span>
                    <div className="flex-1 h-px bg-white/10 group-hover:bg-[#46C1F1]/30 transition-colors" />
                    <p className="text-white/50 text-sm w-64 flex-shrink-0">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C5982]/90 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[#46C1F1] font-black text-xs uppercase tracking-widest mb-2">A PESSOA A7</p>
                    <p className="text-white text-2xl font-black leading-tight">Alta performance. Zero tempo a perder.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ⑮ TAGLINES WALL
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 overflow-hidden bg-[#050810]">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Label n="12" text="Brand Language" />
          <Reveal>
            <h2 className="text-5xl font-black tracking-tighter">Palavras que ficam.</h2>
          </Reveal>
        </div>
        {/* Scrolling tagline strip */}
        <div className="relative overflow-hidden py-4 bg-[#0C5982]/20 border-y border-[#46C1F1]/10">
          <div className="flex gap-8 whitespace-nowrap animate-[scroll_20s_linear_infinite]" style={{ animation: "none" }}>
            {["Seu tempo de volta.", "Limpo. Livre. A7.", "Viva mais. Lave menos.", "Roupa impecável, rotina intocada.", "Domingo livre.", "48h e pronto.", "O padrão hotel em casa.", "Seu tempo de volta."].map((t, i) => (
              <span key={i} className="text-2xl font-black text-white/30 hover:text-[#46C1F1] transition-colors cursor-default mx-4">{t}</span>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Pare de lavar. Comece a viver.",
              "Tempo é o novo luxo. Guarde o seu.",
              "A lavanderia que pensa como você.",
              "Cada peça tratada como se fosse nossa.",
              "Não é lavanderia. É liberdade.",
              "De 0 a impecável em 48h.",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="bg-white/[0.03] border border-white/[0.05] hover:border-[#46C1F1]/30 rounded-2xl p-6 transition-colors cursor-default">
                  <p className="text-white font-black text-xl">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLOSING — FULL IMPACT
      ══════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#050810]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #0C5982 0%, transparent 70%)" }} />
        </div>
        <Reveal className="relative z-10">
          <img src="/logo-light.png" alt="A7 Lavanderia" className="h-12 w-auto mx-auto mb-16 opacity-60" />
          <h2 className="text-[12vw] font-black leading-[0.85] tracking-tighter uppercase">
            <span className="text-white">Seu</span><br />
            <span className="text-[#46C1F1]">tempo</span><br />
            <span className="text-white">de volta.</span>
          </h2>
          <p className="text-white/30 text-lg mt-12 mb-10">
            A7 Brand OS v2.0 · São José dos Campos · 2025
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/growth-engine" className="bg-[#0C5982] hover:bg-[#1A7AB5] text-white font-black px-10 py-4 rounded-2xl transition-colors text-lg">
              Growth Engine →
            </Link>
            <Link href="/" className="bg-white/[0.06] hover:bg-white/10 text-white font-bold px-10 py-4 rounded-2xl transition-colors border border-white/10 text-lg">
              Ver o Site
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="bg-[#050810] border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="/logo-light.png" alt="A7 Lavanderia" className="h-5 w-auto opacity-40" />
          <p className="text-white/20 text-xs">A7 Brand OS · Confidencial · © 2025 A7 Lavanderia</p>
          <p className="text-white/20 text-xs">Pentagram-level brand strategy</p>
        </div>
      </footer>
    </div>
  );
}
