"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";

// LP-02 · Limpeza de Tênis · Cluster: Tênis
// Artigo conectado: "Como Lavar Tênis Corretamente sem Estragar"

const HERO_IMG = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=90";

const SERVICES = [
  { icon: "👟", title: "Tênis esportivo", desc: "Running, basquete, futebol. Limpeza interna e externa.", tag: "Popular" },
  { icon: "⚪", title: "Tênis branco", desc: "Protocolo especial anti-amarelamento. Volta como novo.", tag: "Mais pedido" },
  { icon: "🥿", title: "Couro e nobuck", desc: "Hidratação e proteção do material. Sem ressecamento.", tag: "" },
  { icon: "👠", title: "Solado e entressola", desc: "Remoção de manchas profundas. Recuperação da cor original.", tag: "" },
  { icon: "🎽", title: "Tênis de grife", desc: "Protocolo premium. Jordan, Nike, Adidas, Off-White.", tag: "Premium" },
  { icon: "🧽", title: "Palmilhas e cadarços", desc: "Higienização interna completa. Elimina odores na raiz.", tag: "" },
];

const FAQ = [
  {
    q: "Podem lavar qualquer tipo de tênis?",
    a: "Sim. Trabalhamos com todos os materiais: lona, couro, nobuck, camurça, mesh e materiais sintéticos. Cada um tem protocolo específico.",
  },
  {
    q: "O tênis pode encolher ou deformar?",
    a: "Não. Usamos técnica de lavagem manual controlada para tênis de valor. Máquina apenas para modelos indicados pelo fabricante.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Em média 48–72h. Tênis com tratamento premium (couro, grife) pode levar até 96h pela complexidade do processo.",
  },
  {
    q: "Vale a pena higienizar um tênis barato?",
    a: "Depende. Para tênis acima de R$150, sempre vale. Para modelos de valor emocional ou de coleção, com certeza.",
  },
  {
    q: "Aceitam tênis com odor forte?",
    a: "Sim. Temos tratamento específico anti-odor com ozônio. Elimina bactérias causadoras de mau cheiro sem mascarar com perfume.",
  },
];

export default function Tenis() {
  const waLink = getWhatsAppLink("tenis");

  return (
    <div className="min-h-screen bg-white">

      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight">
            A7 <span className="text-purple-600">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold px-5 py-2.5 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar tênis
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Tênis limpo" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-950/55 to-purple-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-950/10" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-purple-400" />
              <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.16em]">
                Limpeza Profissional de Tênis · Coleta em Casa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Seu tênis merece<br />
              <span className="text-purple-400">tratamento.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Limpeza profissional, protocolo por material, coleta em casa.
              Seus tênis voltam como recém-tirados da caixa —{" "}
              <strong className="text-white">sem você perder tempo.</strong>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a
                href={waLink}
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-500 text-white font-black text-lg px-8 py-5 transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Mandar foto e agendar
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-5">
              {["Coleta grátis", "48–72h", "Todos os materiais", `${COMPANY.stats.googleRating}★`].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-3">O que tratamos</span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Qualquer tênis. Qualquer material.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-gray-100 p-6 hover:border-purple-200 hover:shadow-sm transition-all relative">
                {s.tag && (
                  <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5">
                    {s.tag}
                  </span>
                )}
                <span className="text-3xl block mb-3">{s.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="py-20 bg-purple-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-4">Como funciona</span>
              <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-8">
                4 passos.<br /><span className="text-purple-400">Você não faz nada.</span>
              </h2>
              <div className="space-y-5">
                {[
                  { n: "01", title: "Mande uma foto", body: "WhatsApp. A gente avalia e confirma o protocolo." },
                  { n: "02", title: "Coleta na sua porta", body: "Marcamos data e horário. Buscamos gratuitamente." },
                  { n: "03", title: "Limpeza com protocolo específico", body: "Cada material: técnica certa, produtos certos." },
                  { n: "04", title: "Entrega em 48–72h", body: "Embalado, cheirando bem, como novo." },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <span className="text-[2.5rem] font-black text-white/10 leading-none flex-shrink-0 w-10">{s.n}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{s.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80"
                alt="Tênis recém-lavado"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Resultados reais</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Lucas F.", city: "SJC", text: "Mandei meu Air Force 1 branco todo amarelado. Voltou branquíssimo. Melhor que novo. Mandei mais 3 pares na semana seguinte." },
              { name: "Beatriz R.", city: "Taubaté", text: "Tênis de corrida com cheiro horrível de suor. Tratamento anti-odor resolveu completamente. Recomendo demais." },
              { name: "Gabriel T.", city: "Jacareí", text: "Meu Jordan 1 de coleção. Fiquei com medo mas ficou perfeito. Equipe muito cuidadosa e profissional." },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 p-6">
                <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-purple-500 text-sm">★</span>)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 text-purple-700 flex items-center justify-center font-black text-sm">{t.name.charAt(0)}</div>
                  <div><p className="text-xs font-bold text-gray-900">{t.name}</p><p className="text-[10px] text-gray-400">{t.city}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest block mb-5">Primeiro mês 20% OFF</span>
          <h2 className="text-white font-black text-4xl tracking-tight mb-4">
            Seus tênis merecem<br />um tratamento digno.
          </h2>
          <p className="text-gray-400 mb-8">Mande a foto. A gente cuida do resto.</p>
          <a href={waLink} className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-500 text-white font-black text-xl px-10 py-5 transition-colors">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Mandar foto e agendar
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Dúvidas frequentes</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-gray-100">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <a href="/blog/lavar-tenis-corretamente" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            Artigo: Como lavar tênis corretamente
          </a>
          <a href={waLink} className="text-xs text-purple-400 font-semibold hover:text-purple-300 transition-colors">
            Agendar limpeza →
          </a>
        </div>
      </footer>
    </div>
  );
}
