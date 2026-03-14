"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

// LP-28 · Preços e Planos · Cluster: Decisão
// Toda jornada de funil converge aqui. Copy racional + emocional.

const HERO_IMG = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=90";

const PLANOS = [
  {
    id: "avulso",
    nome: "Avulso",
    tagline: "Para experimentar",
    preco: "Sob consulta",
    desc: "Peça por peça, sem compromisso. Ideal para primeira experiência.",
    items: [
      "Coleta e entrega grátis",
      "Prazo padrão 48–72h",
      "Todos os tipos de peça",
      "Sem fidelidade",
    ],
    destaque: false,
    cta: "Solicitar orçamento",
  },
  {
    id: "mensal",
    nome: "Mensal",
    tagline: "Mais popular",
    preco: "A partir de R$149",
    desc: "Coleta semanal ou quinzenal. Preço fixo por mês. Sem surpresas.",
    items: [
      "Coleta programada (semanal ou quinzenal)",
      "Preço fixo mensal",
      "Prioridade de atendimento",
      "20% OFF no primeiro mês",
      "Cancele quando quiser",
    ],
    destaque: true,
    cta: "Assinar plano mensal",
  },
  {
    id: "empresarial",
    nome: "Empresarial",
    tagline: "Para negócios",
    preco: "Sob medida",
    desc: "Restaurantes, hotéis, condomínios. Volume, coleta programada, faturamento mensal.",
    items: [
      "Volume ilimitado",
      "Coleta diária ou programada",
      "Contrato personalizado",
      "Nota fiscal",
      "Gestor de conta dedicado",
    ],
    destaque: false,
    cta: "Falar com comercial",
  },
];

const SERVICOS = [
  { cat: "Roupas do dia a dia", items: [
    { nome: "Camisa social / blusa", ref: "A partir de R$8" },
    { nome: "Calça / jeans", ref: "A partir de R$12" },
    { nome: "Vestido simples", ref: "A partir de R$15" },
    { nome: "Conjunto (2 peças)", ref: "A partir de R$22" },
  ]},
  { cat: "Cama e banho", items: [
    { nome: "Edredom solteiro", ref: "A partir de R$39" },
    { nome: "Edredom casal / queen", ref: "A partir de R$59" },
    { nome: "Jogo de cama completo", ref: "A partir de R$45" },
    { nome: "Travesseiro", ref: "A partir de R$22" },
  ]},
  { cat: "Especiais", items: [
    { nome: "Tênis (par)", ref: "A partir de R$35" },
    { nome: "Remoção de mancha (por peça)", ref: "A partir de R$25" },
    { nome: "Peça de couro", ref: "A partir de R$45" },
    { nome: "Vestido de festa / noiva", ref: "Sob consulta" },
  ]},
];

const FAQ = [
  {
    q: "Os preços já incluem coleta e entrega?",
    a: "Sim. Coleta e entrega são sempre gratuitas, independente do plano ou tipo de serviço.",
  },
  {
    q: "Posso cancelar o plano mensal a qualquer hora?",
    a: "Sim. Sem multa, sem carência. Cancele quando quiser pelo WhatsApp.",
  },
  {
    q: "O orçamento é cobrado?",
    a: "Não. Orçamento é sempre gratuito. Você só paga após aprovação.",
  },
  {
    q: "Aceitam cartão, PIX e boleto?",
    a: "Sim. Cartão de crédito (parcelado em até 3x), PIX e transferência. Para empresarial, boleto mensal.",
  },
  {
    q: "O desconto de 20% vale para qual plano?",
    a: "Para o plano mensal no primeiro mês. Sem restrição de volume.",
  },
];

export default function Precos() {
  const waLink = getWhatsAppLink("precos");
  const [activeTab, setActiveTab] = useState<"planos" | "tabela">("planos");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Preços da A7 Lavanderia" description="Tabela completa de preços e planos da A7 Lavanderia. Roupas, edredons, tapetes, tênis e serviços especiais com coleta e entrega." slug="precos" />
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight">A7 <span style={{ color: "#0047FF" }}>Lavanderia</span></a>
          <a href={waLink} className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 transition-colors" style={{ background: "#0047FF" }}>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Obter orçamento
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Roupas limpas organizadas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-950/20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl text-center mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 justify-center mb-6">
              <div className="h-px w-8" style={{ background: "#0047FF" }} />
              <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "#0047FF" }}>Preços e planos · Transparência total</span>
              <div className="h-px w-8" style={{ background: "#0047FF" }} />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Preço justo.<br />
              <span style={{ color: "#4d7fff" }}>Sem surpresa na conta.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-white/60 text-lg">
              Coleta e entrega sempre grátis. Primeiro mês com 20% OFF.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex justify-center gap-0 mb-12 border border-gray-200 w-fit mx-auto">
            {(["planos", "tabela"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-sm font-bold transition-colors ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
                style={activeTab === tab ? { background: "#0047FF" } : {}}
              >
                {tab === "planos" ? "Planos" : "Tabela de preços"}
              </button>
            ))}
          </div>

          {/* PLANOS */}
          {activeTab === "planos" && (
            <div className="grid md:grid-cols-3 gap-5">
              {PLANOS.map((p) => (
                <div
                  key={p.id}
                  className={`relative p-7 border-2 ${p.destaque ? "border-blue-600 shadow-xl shadow-blue-100" : "border-gray-100"}`}
                >
                  {p.destaque && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-4 py-1" style={{ background: "#0047FF" }}>
                      MAIS POPULAR
                    </div>
                  )}
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{p.tagline}</p>
                  <h3 className="font-black text-2xl text-gray-900 mb-1">{p.nome}</h3>
                  <p className="font-black text-3xl tracking-tight mb-3" style={{ color: "#0047FF" }}>{p.preco}</p>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0047FF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink}
                    className={`block w-full text-center font-bold py-3.5 text-sm transition-colors ${p.destaque ? "text-white" : "border border-gray-200 text-gray-900 hover:border-gray-400"}`}
                    style={p.destaque ? { background: "#0047FF" } : {}}
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* TABELA */}
          {activeTab === "tabela" && (
            <div className="space-y-8">
              {SERVICOS.map((cat) => (
                <div key={cat.cat}>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">{cat.cat}</h3>
                  <div className="border border-gray-100 divide-y divide-gray-50">
                    {cat.items.map((item) => (
                      <div key={item.nome} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors">
                        <span className="text-sm text-gray-700">{item.nome}</span>
                        <span className="text-sm font-bold text-gray-900">{item.ref}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-xs text-gray-400 pt-2">
                * Preços de referência. Orçamento final após avaliação. Coleta e entrega sempre gratuitas.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── GARANTIAS ── */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "🚚", title: "Coleta gratuita", sub: "Sempre, em todos os planos" },
              { icon: "✅", title: "Sem fidelidade", sub: "Cancele quando quiser" },
              { icon: "🔄", title: "Garantia total", sub: "Refazemos se não ficar perfeito" },
              { icon: "💬", title: "Resposta <5min", sub: "Atendimento humano no WhatsApp" },
            ].map((g) => (
              <div key={g.title} className="text-center p-5 border border-white/[0.07]">
                <span className="text-3xl block mb-3">{g.icon}</span>
                <p className="text-white font-bold text-sm mb-1">{g.title}</p>
                <p className="text-gray-500 text-xs">{g.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-5 text-center">
          <h2 className="font-black text-4xl tracking-tight text-gray-900 mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">20% OFF no primeiro mês. Sem compromisso.</p>
          <a href={waLink} className="inline-flex items-center gap-3 text-white font-black text-xl px-10 py-5 transition-colors" style={{ background: "#0047FF" }}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Agendar primeira coleta
          </a>
          <p className="text-gray-400 text-xs mt-4">{COMPANY.stats.attendances}+ clientes · {COMPANY.stats.googleRating}★ Google</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Sobre preços e planos</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group bg-white border border-gray-200">
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

      <RelatedServices currentSlug="precos" />
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex gap-5">
            <a href="/como-funciona" className="text-xs text-gray-500 hover:text-gray-300">Como funciona</a>
            <a href="/lavanderia-ou-lavar-em-casa" className="text-xs text-gray-500 hover:text-gray-300">Vale a pena?</a>
          </div>
          <a href={waLink} className="text-xs font-semibold hover:opacity-80" style={{ color: "#4d7fff" }}>Obter orçamento →</a>
        </div>
      </footer>
    </div>
  );
}
