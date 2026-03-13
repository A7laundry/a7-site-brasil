"use client";

import { useState } from "react";
import Link from "next/link";
import { AI_ENGINE_STATS, TOP_SERVICES_BY_TICKET, LEAD_CATALOG } from "@/lib/whatsapp-context";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const LANDING_PAGES = [
  // BLOCO A — Por Serviço
  { id: "LP-01", nome: "Higienização de Edredons", url: "/higienizacao-edredom", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Saúde & Higiene" },
  { id: "LP-02", nome: "Limpeza de Tênis", url: "/tenis", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Tênis" },
  { id: "LP-03", nome: "Limpeza de Tapetes", url: "/tapetes", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Tapetes" },
  { id: "LP-04", nome: "Higienização de Sofás", url: "/sofas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Casa" },
  { id: "LP-05", nome: "Higienização de Cortinas", url: "/cortinas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Saúde & Higiene" },
  { id: "LP-06", nome: "Remoção de Manchas", url: "/remocao-manchas", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Manchas" },
  { id: "LP-07", nome: "Roupas Delicadas", url: "/roupas-delicadas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Roupas Especiais" },
  { id: "LP-08", nome: "Lavagem do Dia a Dia", url: "/lavagem-roupas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Dia a Dia" },
  { id: "LP-09", nome: "Plano Mensal", url: "/plano-mensal", tipo: "OFT", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Dia a Dia" },
  { id: "LP-10", nome: "Couro e Peças Especiais", url: "/couro-pecas-especiais", tipo: "SRV", prioridade: "P2", status: "Planejar", responsavel: "Dev", cluster: "Roupas Especiais" },
  // BLOCO B — Por Persona
  { id: "LP-11", nome: "Para Casais", url: "/para-casais", tipo: "PER", prioridade: "P0", status: "Planejar", responsavel: "Design", cluster: "Dia a Dia" },
  { id: "LP-12", nome: "Para Mães com Filhos", url: "/para-maes", tipo: "PER", prioridade: "P0", status: "Planejar", responsavel: "Design", cluster: "Saúde & Higiene" },
  { id: "LP-13", nome: "Para Executivos", url: "/para-executivos", tipo: "PER", prioridade: "P1", status: "Planejar", responsavel: "Design", cluster: "Roupas Especiais" },
  { id: "LP-14", nome: "Para Alérgicos", url: "/para-alergicos", tipo: "PER", prioridade: "P0", status: "Planejar", responsavel: "Design", cluster: "Saúde & Higiene" },
  { id: "LP-15", nome: "Para Hosts de Airbnb", url: "/airbnb", tipo: "PER", prioridade: "P1", status: "Planejar", responsavel: "Design", cluster: "B2B" },
  { id: "LP-16", nome: "Premium Concierge", url: "/premium", tipo: "PER", prioridade: "P2", status: "Planejar", responsavel: "Design", cluster: "Roupas Especiais" },
  { id: "LP-17", nome: "Lavanderia Sustentável", url: "/sustentavel", tipo: "PER", prioridade: "P2", status: "Planejar", responsavel: "Design", cluster: "Sustentabilidade" },
  // BLOCO C — Por Nicho B2B
  { id: "LP-18", nome: "Empresarial (Hub B2B)", url: "/empresarial", tipo: "NIC", prioridade: "P0", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-19", nome: "Para Restaurantes", url: "/restaurantes", tipo: "NIC", prioridade: "P0", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-20", nome: "Para Hotéis e Pousadas", url: "/hotelaria", tipo: "NIC", prioridade: "P0", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-21", nome: "Uniformes Corporativos", url: "/uniformes", tipo: "NIC", prioridade: "P1", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-22", nome: "Para Condomínios", url: "/condominios", tipo: "NIC", prioridade: "P2", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  // BLOCO D — Por Cidade
  { id: "LP-23", nome: "São José dos Campos", url: "/sao-jose-dos-campos", tipo: "CID", prioridade: "P0", status: "Publicado", responsavel: "Dev", cluster: "Local" },
  { id: "LP-24", nome: "Taubaté", url: "/taubate", tipo: "CID", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  { id: "LP-25", nome: "Jacareí", url: "/jacarei", tipo: "CID", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  { id: "LP-26", nome: "Lorena e Guaratinguetá", url: "/lorena-guaratingueta", tipo: "CID", prioridade: "P2", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  { id: "LP-27", nome: "Vale do Paraíba (Hub)", url: "/vale-do-paraiba", tipo: "CID", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  // BLOCO E — Por Decisão
  { id: "LP-28", nome: "Preços e Planos", url: "/precos", tipo: "DOR", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Decisão" },
  { id: "LP-29", nome: "Como Funciona", url: "/como-funciona", tipo: "DOR", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Decisão" },
  { id: "LP-30", nome: "Lavanderia ou em Casa?", url: "/lavanderia-ou-lavar-em-casa", tipo: "DOR", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Decisão" },
];

const CLUSTERS = [
  {
    nome: "Saúde & Higiene",
    cor: "blue",
    artigos: 6,
    planejados: 2,
    lps: ["LP-01", "LP-05", "LP-12", "LP-14"],
    temas: ["Ácaros", "Edredons", "Bebê", "Cortinas", "Fungos", "Tapetes"],
  },
  {
    nome: "Manchas & Emergências",
    cor: "orange",
    artigos: 3,
    planejados: 1,
    lps: ["LP-06"],
    temas: ["Vinho tinto", "Manchas difíceis", "Óleo"],
  },
  {
    nome: "Tênis",
    cor: "purple",
    artigos: 1,
    planejados: 2,
    lps: ["LP-02"],
    temas: ["Lavar tênis", "Tênis branco", "Couro"],
  },
  {
    nome: "Roupas Especiais",
    cor: "indigo",
    artigos: 7,
    planejados: 1,
    lps: ["LP-07", "LP-10", "LP-13", "LP-16"],
    temas: ["Delicadas", "Cashmere", "Couro", "Jeans", "Vestido noiva", "Social"],
  },
  {
    nome: "Tapetes, Sofás, Casa",
    cor: "teal",
    artigos: 2,
    planejados: 2,
    lps: ["LP-03", "LP-04"],
    temas: ["Tapetes profissional", "Sofá higienização"],
  },
  {
    nome: "Sustentabilidade",
    cor: "green",
    artigos: 3,
    planejados: 0,
    lps: ["LP-17"],
    temas: ["Lavanderia sustentável", "Consumo consciente", "Produtos eco"],
  },
  {
    nome: "Organização & Lifestyle",
    cor: "pink",
    artigos: 3,
    planejados: 1,
    lps: ["LP-08", "LP-11"],
    temas: ["Guardar roupas inverno", "Guarda-roupa", "Capsule wardrobe"],
  },
  {
    nome: "B2B Empresarial",
    cor: "amber",
    artigos: 3,
    planejados: 2,
    lps: ["LP-18", "LP-19", "LP-20", "LP-21", "LP-22"],
    temas: ["Uniformes", "Restaurante", "Hotel", "Condomínio", "Airbnb"],
  },
  {
    nome: "Local / Geo-Targeting",
    cor: "cyan",
    artigos: 2,
    planejados: 3,
    lps: ["LP-23", "LP-24", "LP-25", "LP-26", "LP-27"],
    temas: ["SJC", "Taubaté", "Jacareí", "Vale do Paraíba"],
  },
];

const KANBAN = {
  Planejamento: [
    { id: "k1", tipo: "LP", nome: "LP-18 · /empresarial", prioridade: "P0" },
    { id: "k2", tipo: "LP", nome: "LP-19 · /restaurantes", prioridade: "P0" },
    { id: "k3", tipo: "LP", nome: "LP-20 · /hotelaria", prioridade: "P0" },
    { id: "k4", tipo: "Artigo", nome: "Quanto custa uma lavanderia?", prioridade: "P0" },
    { id: "k5", tipo: "Artigo", nome: "Lavanderia ou lavar em casa?", prioridade: "P0" },
    { id: "k6", tipo: "LP", nome: "LP-28 · /precos", prioridade: "P0" },
    { id: "k7", tipo: "LP", nome: "LP-06 · /remocao-manchas", prioridade: "P0" },
  ],
  "Em Produção": [
    { id: "k8", tipo: "LP", nome: "LP-01 · /higienizacao-edredom", prioridade: "P0" },
    { id: "k9", tipo: "LP", nome: "LP-02 · /tenis", prioridade: "P0" },
    { id: "k10", tipo: "Artigo", nome: "Lavanderia com coleta em SJC", prioridade: "P0" },
    { id: "k11", tipo: "Criativo", nome: "Banners LP-01 · edredom", prioridade: "P1" },
  ],
  "Em Revisão": [
    { id: "k12", tipo: "LP", nome: "LP-03 · /tapetes", prioridade: "P0" },
    { id: "k13", tipo: "Artigo", nome: "Higienização edredom preço SJC", prioridade: "P0" },
  ],
  Publicado: [
    { id: "k14", tipo: "LP", nome: "LP-23 · /sao-jose-dos-campos", prioridade: "P0" },
    { id: "k15", tipo: "Artigo", nome: "30 artigos do blog", prioridade: "P0" },
    { id: "k16", tipo: "Artigo", nome: "Alergia a ácaros e roupa de cama", prioridade: "P0" },
  ],
};

const DEPARTMENTS = [
  { nome: "Estratégia", cor: "blue", icone: "🎯", responsabilidade: "Define prioridades e roadmap", lps: 30 },
  { nome: "Conteúdo", cor: "green", icone: "✍️", responsabilidade: "Cria artigos e copy das LPs", lps: 10 },
  { nome: "Desenvolvimento", cor: "indigo", icone: "💻", responsabilidade: "Implementa LPs no Next.js", lps: 20 },
  { nome: "Design", cor: "pink", icone: "🎨", responsabilidade: "Cria identidade visual e criativos", lps: 7 },
  { nome: "Tráfego Pago", cor: "orange", icone: "📢", responsabilidade: "Distribui campanhas para LPs P0", lps: 8 },
  { nome: "Comercial", cor: "amber", icone: "🤝", responsabilidade: "Fecha vendas via WhatsApp", lps: 5 },
  { nome: "Operação", cor: "teal", icone: "⚙️", responsabilidade: "Executa os serviços com qualidade", lps: 0 },
  { nome: "BI / Dados", cor: "purple", icone: "📊", responsabilidade: "Analisa performance e métricas", lps: 0 },
  { nome: "IA", cor: "violet", icone: "🤖", responsabilidade: "Qualifica leads e automatiza respostas", lps: 0 },
];

const ROADMAP = [
  { fase: 1, nome: "Mapa de Conteúdo", status: "Concluído", descricao: "30 artigos classificados por cluster, persona, intenção e funil", entregavel: "BLOCO 1 · mapa-estrategico-conteudo.md", cor: "green" },
  { fase: 2, nome: "Matriz de LPs", status: "Concluído", descricao: "30 landing pages mapeadas por tipo, persona, URL e estratégia", entregavel: "BLOCO 2 · matriz-landing-pages.md", cor: "green" },
  { fase: 3, nome: "Painel Operacional", status: "Em andamento", descricao: "Dashboard central para gerenciar SEO, conteúdo e LPs", entregavel: "BLOCO 3 · /growth-engine", cor: "blue" },
  { fase: 4, nome: "Produção de LPs P0", status: "Próximo", descricao: "Implementar as 15 LPs de prioridade máxima no Next.js", entregavel: "15 páginas publicadas em a7lavanderia.com", cor: "gray" },
  { fase: 5, nome: "SEO e Clusters", status: "Futuro", descricao: "Interlinking, structured data, GEO otimization", entregavel: "Rankings + aparição em AI Search", cor: "gray" },
  { fase: 6, nome: "Programmatic SEO", status: "Futuro", descricao: "1000+ páginas geradas: /lavanderia-[cidade], /lavar-[tipo]", entregavel: "BLOCO 4 · SEO Engine automatizado", cor: "gray" },
  { fase: 7, nome: "Campanhas Pagas", status: "Futuro", descricao: "Google Ads + Meta Ads apontando para LPs específicas", entregavel: "Campanhas segmentadas por LP", cor: "gray" },
  { fase: 8, nome: "Otimização Contínua", status: "Futuro", descricao: "A/B test, CRO, análise de funil, escala", entregavel: "Dashboard de performance + IA de qualificação", cor: "gray" },
];

const FUNIL = [
  { etapa: "SEO / Blog", icone: "📝", metrica: "Visitas orgânicas", valor: "—", meta: "10.000/mês", cor: "blue" },
  { etapa: "Landing Pages", icone: "🏠", metrica: "Sessões nas LPs", valor: "—", meta: "2.000/mês", cor: "indigo" },
  { etapa: "WhatsApp", icone: "💬", metrica: "Conversas iniciadas", valor: "—", meta: "200/mês", cor: "green" },
  { etapa: "Orçamento", icone: "📋", metrica: "Orçamentos enviados", valor: "—", meta: "100/mês", cor: "teal" },
  { etapa: "Venda", icone: "✅", metrica: "Pedidos fechados", valor: "—", meta: "60/mês", cor: "emerald" },
  { etapa: "Plano Mensal", icone: "🔄", metrica: "Assinantes ativos", valor: "—", meta: "20 ativos", cor: "purple" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const TIPO_LABELS: Record<string, string> = {
  SRV: "Serviço", PER: "Persona", NIC: "Nicho B2B", CID: "Cidade", DOR: "Dor", OFT: "Oferta",
};

const STATUS_COLORS: Record<string, string> = {
  Publicado: "bg-emerald-100 text-emerald-700",
  "Em Produção": "bg-blue-100 text-blue-700",
  "Em Revisão": "bg-amber-100 text-amber-700",
  Planejar: "bg-gray-100 text-gray-500",
};

const PRIORIDADE_COLORS: Record<string, string> = {
  P0: "bg-red-100 text-red-700 border-red-200",
  P1: "bg-orange-100 text-orange-700 border-orange-200",
  P2: "bg-yellow-100 text-yellow-700 border-yellow-200",
  P3: "bg-gray-100 text-gray-500 border-gray-200",
};

const TIPO_COLORS: Record<string, string> = {
  SRV: "bg-blue-100 text-blue-700",
  PER: "bg-purple-100 text-purple-700",
  NIC: "bg-amber-100 text-amber-700",
  CID: "bg-cyan-100 text-cyan-700",
  DOR: "bg-rose-100 text-rose-700",
  OFT: "bg-green-100 text-green-700",
};

const CLUSTER_COLORS: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50",
  orange: "border-orange-200 bg-orange-50",
  purple: "border-purple-200 bg-purple-50",
  indigo: "border-indigo-200 bg-indigo-50",
  teal: "border-teal-200 bg-teal-50",
  green: "border-green-200 bg-green-50",
  pink: "border-pink-200 bg-pink-50",
  amber: "border-amber-200 bg-amber-50",
  cyan: "border-cyan-200 bg-cyan-50",
};

const CLUSTER_BADGE: Record<string, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  indigo: "bg-indigo-500",
  teal: "bg-teal-500",
  green: "bg-green-500",
  pink: "bg-pink-500",
  amber: "bg-amber-500",
  cyan: "bg-cyan-500",
};

const KANBAN_TIPO_COLORS: Record<string, string> = {
  LP: "bg-blue-100 text-blue-700",
  Artigo: "bg-green-100 text-green-700",
  Criativo: "bg-purple-100 text-purple-700",
};

const ROADMAP_RING: Record<string, string> = {
  Concluído: "ring-emerald-500 bg-emerald-500 text-white",
  "Em andamento": "ring-blue-500 bg-blue-500 text-white",
  Próximo: "ring-amber-400 bg-amber-400 text-white",
  Futuro: "ring-gray-300 bg-white text-gray-400",
};

// ─── NAV ITEMS ────────────────────────────────────────────────────────────────

const NAV = [
  { id: "overview", label: "Visão Geral", icone: "◉" },
  { id: "lps", label: "Landing Pages", icone: "⬡" },
  { id: "clusters", label: "Clusters SEO", icone: "◈" },
  { id: "pipeline", label: "Pipeline", icone: "▤" },
  { id: "funil", label: "Funil", icone: "▽" },
  { id: "ai-sales", label: "AI Sales Engine", icone: "🤖" },
  { id: "departamentos", label: "Departamentos", icone: "⊞" },
  { id: "roadmap", label: "Roadmap", icone: "→" },
];

const EXTERNAL_LINKS = [
  { href: "/growth-engine/revenue", label: "Revenue Intelligence", icone: "💰" },
  { href: "/growth-engine/content-engine", label: "AI Content Engine", icone: "🧠" },
  { href: "/sales-assistant", label: "Sales Assistant", icone: "💬" },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function GrowthEngineDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [lpFilter, setLpFilter] = useState("Todos");

  const publishedLPs = LANDING_PAGES.filter((lp) => lp.status === "Publicado").length;
  const p0LPs = LANDING_PAGES.filter((lp) => lp.prioridade === "P0").length;
  const totalArticles = 30;

  const filteredLPs =
    lpFilter === "Todos"
      ? LANDING_PAGES
      : LANDING_PAGES.filter((lp) =>
          lpFilter === "P0" || lpFilter === "P1" || lpFilter === "P2"
            ? lp.prioridade === lpFilter
            : lp.tipo === lpFilter
        );

  return (
    <div className="flex min-h-screen bg-[#0f0f13] text-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/[0.06] flex flex-col">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-black text-white">
              A7
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">A7 Lavanderia</p>
              <p className="text-[10px] text-gray-500 mt-0.5">Growth Engine</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-0.5">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left ${
                activeSection === item.id
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-xs opacity-60">{item.icone}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* External links */}
        <div className="px-3 pb-3 space-y-0.5">
          <p className="text-[10px] text-gray-600 uppercase px-3 py-1 tracking-wider">Ferramentas</p>
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-gray-200 hover:bg-white/[0.04] transition-all"
            >
              <span className="text-xs opacity-60">{link.icone}</span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/[0.06]">
          <p className="text-[10px] text-gray-600">BLOCO 1–7 · v1.0</p>
          <p className="text-[10px] text-gray-600">2026-03-13</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-[#0f0f13]/80 backdrop-blur border-b border-white/[0.06] px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-white">
              {NAV.find((n) => n.id === activeSection)?.label}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">A7 Lavanderia · Growth Engine Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Fase 3 — Em andamento
            </span>
          </div>
        </div>

        <div className="px-8 py-8">

          {/* ─── SECTION 1: OVERVIEW ──────────────────────────────────────── */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white">A7 Lavanderia Growth Engine</h2>
                <p className="text-gray-400 mt-1 text-sm max-w-2xl">
                  Sistema de aquisição digital baseado em SEO, GEO, clusters de conteúdo, landing pages
                  estratégicas e funis de conversão via WhatsApp.
                </p>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "LPs Mapeadas", valor: "30", sub: `${publishedLPs} publicadas`, cor: "blue" },
                  { label: "Artigos", valor: `${totalArticles}`, sub: "no blog", cor: "green" },
                  { label: "LPs P0", valor: `${p0LPs}`, sub: "prioridade máxima", cor: "red" },
                  { label: "Clusters SEO", valor: "9", sub: "temáticos", cor: "purple" },
                  { label: "Visitas", valor: "—", sub: "meta: 10k/mês", cor: "amber" },
                  { label: "Leads", valor: "—", sub: "meta: 200/mês", cor: "teal" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{kpi.label}</p>
                    <p className="text-2xl font-bold text-white">{kpi.valor}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-4">Progresso das Fases</h3>
                  <div className="space-y-3">
                    {ROADMAP.map((fase) => (
                      <div key={fase.fase} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ring-2 shrink-0 ${ROADMAP_RING[fase.status]}`}>
                          {fase.status === "Concluído" ? "✓" : fase.fase}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`text-xs font-medium ${fase.status === "Futuro" ? "text-gray-500" : "text-gray-200"}`}>
                              Fase {fase.fase} — {fase.nome}
                            </p>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                              fase.status === "Concluído" ? "bg-emerald-500/20 text-emerald-400" :
                              fase.status === "Em andamento" ? "bg-blue-500/20 text-blue-400" :
                              fase.status === "Próximo" ? "bg-amber-500/20 text-amber-400" :
                              "bg-gray-700 text-gray-500"
                            }`}>
                              {fase.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-4">LPs por Prioridade</h3>
                  <div className="space-y-3">
                    {[
                      { label: "P0 — Máxima prioridade", count: 15, max: 30, cor: "bg-red-500" },
                      { label: "P1 — Alta prioridade", count: 10, max: 30, cor: "bg-orange-500" },
                      { label: "P2 — Média prioridade", count: 5, max: 30, cor: "bg-yellow-500" },
                    ].map((p) => (
                      <div key={p.label}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-400">{p.label}</span>
                          <span className="text-gray-300 font-medium">{p.count}</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className={`h-full ${p.cor} rounded-full`} style={{ width: `${(p.count / p.max) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <h4 className="text-xs text-gray-500 mb-3">LPs por Tipo</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { tipo: "SRV", label: "Serviço", count: 10 },
                        { tipo: "PER", label: "Persona", count: 7 },
                        { tipo: "NIC", label: "Nicho B2B", count: 5 },
                        { tipo: "CID", label: "Cidade", count: 5 },
                        { tipo: "DOR", label: "Dor/Decisão", count: 2 },
                        { tipo: "OFT", label: "Oferta", count: 1 },
                      ].map((t) => (
                        <div key={t.tipo} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${TIPO_COLORS[t.tipo]}`}>{t.tipo}</span>
                            <span className="text-xs text-gray-400">{t.label}</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-300">{t.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic alert */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 flex gap-4">
                <span className="text-amber-400 text-xl shrink-0">⚡</span>
                <div>
                  <p className="text-sm font-semibold text-amber-300">Gap Crítico — LP-18 /empresarial</p>
                  <p className="text-xs text-amber-400/70 mt-1">
                    3 artigos B2B de alto ticket (hotel, restaurante, uniformes) publicados sem landing page de destino.
                    Ticket médio estimado: R$500–R$5.000/mês por cliente. Implementar LP-18 é a ação de maior ROI imediato.
                  </p>
                </div>
              </div>

              {/* Engine quick-access */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/growth-engine/revenue" className="group bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 rounded-xl p-5 flex items-center justify-between transition-all">
                  <div>
                    <p className="text-sm font-bold text-white">💰 Revenue Intelligence</p>
                    <p className="text-xs text-gray-500 mt-1">6 painéis · SEO, leads, receita, upsell, MRR, funil</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-violet-400 transition-colors text-lg">→</span>
                </Link>
                <Link href="/growth-engine/content-engine" className="group bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/30 rounded-xl p-5 flex items-center justify-between transition-all">
                  <div>
                    <p className="text-sm font-bold text-white">🧠 AI Content Engine</p>
                    <p className="text-xs text-gray-500 mt-1">Loop infinito · 12 gaps · 4 briefs prontos · 10 oportunidades SEO</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-400 transition-colors text-lg">→</span>
                </Link>
                <Link href="/sales-assistant" className="group bg-white/[0.03] border border-white/[0.07] hover:border-green-500/30 rounded-xl p-5 flex items-center justify-between transition-all">
                  <div>
                    <p className="text-sm font-bold text-white">💬 Sales Assistant</p>
                    <p className="text-xs text-gray-500 mt-1">Ferramenta WhatsApp · classificar leads · respostas rápidas</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-green-400 transition-colors text-lg">→</span>
                </Link>
              </div>
            </div>
          )}

          {/* ─── SECTION 2: LANDING PAGES ─────────────────────────────────── */}
          {activeSection === "lps" && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {["Todos", "P0", "P1", "P2", "SRV", "PER", "NIC", "CID", "DOR"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setLpFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      lpFilter === f
                        ? "bg-white text-gray-900"
                        : "bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-gray-200"
                    }`}
                  >
                    {f === "Todos" ? "Todas as LPs" : f in TIPO_LABELS ? `${f} — ${TIPO_LABELS[f]}` : f}
                  </button>
                ))}
                <span className="ml-auto text-xs text-gray-600 self-center">{filteredLPs.length} LPs</span>
              </div>

              {/* LP Blocks */}
              {["SRV", "PER", "NIC", "CID", "DOR", "OFT"].map((tipo) => {
                const lps = filteredLPs.filter((lp) => lp.tipo === tipo);
                if (lps.length === 0) return null;
                const titles: Record<string, string> = {
                  SRV: "Bloco A — Por Serviço",
                  PER: "Bloco B — Por Persona",
                  NIC: "Bloco C — Por Nicho B2B",
                  CID: "Bloco D — Por Cidade",
                  DOR: "Bloco E — Por Dor / Decisão",
                  OFT: "Bloco F — Por Oferta",
                };
                return (
                  <div key={tipo}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-sm font-semibold text-gray-300">{titles[tipo]}</h3>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${TIPO_COLORS[tipo]}`}>{TIPO_LABELS[tipo]}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                      {lps.map((lp) => (
                        <div
                          key={lp.id}
                          className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all group"
                        >
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-gray-500">{lp.id}</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${PRIORIDADE_COLORS[lp.prioridade]}`}>
                                {lp.prioridade}
                              </span>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[lp.status]}`}>
                              {lp.status}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-100 group-hover:text-white mb-1">{lp.nome}</p>
                          <p className="text-[11px] text-gray-500 font-mono">{lp.url}</p>
                          <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                            <span className="text-[10px] text-gray-600">{lp.cluster}</span>
                            <span className="text-[10px] text-gray-600">{lp.responsavel}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── SECTION 3: CLUSTERS ──────────────────────────────────────── */}
          {activeSection === "clusters" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">9 clusters temáticos · {CLUSTERS.reduce((a, c) => a + c.artigos, 0)} artigos publicados · {CLUSTERS.reduce((a, c) => a + c.planejados, 0)} planejados</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {CLUSTERS.map((cluster) => (
                  <div
                    key={cluster.nome}
                    className={`border rounded-xl p-5 ${CLUSTER_COLORS[cluster.cor]}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${CLUSTER_BADGE[cluster.cor]}`} />
                        <h3 className="text-sm font-semibold text-gray-800">{cluster.nome}</h3>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{cluster.artigos}</p>
                        <p className="text-[10px] text-gray-500">artigos</p>
                      </div>
                      {cluster.planejados > 0 && (
                        <div>
                          <p className="text-2xl font-bold text-gray-400">+{cluster.planejados}</p>
                          <p className="text-[10px] text-gray-500">planejados</p>
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <p className="text-[10px] text-gray-500 mb-1.5">Temas cobertos</p>
                      <div className="flex flex-wrap gap-1">
                        {cluster.temas.map((t) => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 bg-white/60 rounded text-gray-700">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-500 mb-1.5">LPs relacionadas</p>
                      <div className="flex flex-wrap gap-1">
                        {cluster.lps.map((lp) => (
                          <span key={lp} className="text-[10px] font-mono px-1.5 py-0.5 bg-white/80 rounded text-gray-800 font-medium">{lp}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── SECTION 4: PIPELINE ──────────────────────────────────────── */}
          {activeSection === "pipeline" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Kanban de produção — artigos, landing pages e criativos</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {(Object.keys(KANBAN) as Array<keyof typeof KANBAN>).map((coluna) => (
                  <div key={coluna} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-300">{coluna}</h3>
                      <span className="text-xs text-gray-600 bg-white/[0.06] px-2 py-0.5 rounded-full">
                        {KANBAN[coluna].length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {KANBAN[coluna].map((item) => (
                        <div
                          key={item.id}
                          className="bg-white/[0.04] border border-white/[0.07] rounded-lg p-3 hover:bg-white/[0.08] transition-colors"
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${KANBAN_TIPO_COLORS[item.tipo]}`}>
                              {item.tipo}
                            </span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${PRIORIDADE_COLORS[item.prioridade]}`}>
                              {item.prioridade}
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 leading-snug">{item.nome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── SECTION 5: FUNIL ─────────────────────────────────────────── */}
          {activeSection === "funil" && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-sm text-gray-400">Funil de conversão — SEO → Blog → LP → WhatsApp → Venda → Recorrência</p>
              <div className="space-y-2">
                {FUNIL.map((etapa, idx) => {
                  const widths = ["100%", "80%", "60%", "50%", "40%", "30%"];
                  return (
                    <div key={etapa.etapa}>
                      <div
                        className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.07] transition-colors mx-auto"
                        style={{ width: widths[idx] }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{etapa.icone}</span>
                            <div>
                              <p className="text-sm font-semibold text-gray-100">{etapa.etapa}</p>
                              <p className="text-xs text-gray-500">{etapa.metrica}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-300">{etapa.valor}</p>
                            <p className="text-[10px] text-gray-600">meta {etapa.meta}</p>
                          </div>
                        </div>
                      </div>
                      {idx < FUNIL.length - 1 && (
                        <div className="flex justify-center my-1">
                          <span className="text-gray-700 text-sm">↓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
                <h3 className="text-xs font-semibold text-gray-300 mb-4">Integração WhatsApp por LP</h3>
                <div className="space-y-2 text-xs text-gray-400 font-mono">
                  {[
                    { lp: "/higienizacao-edredom", msg: "Olá! Tenho interesse na higienização do meu edredom" },
                    { lp: "/tapetes", msg: "Olá! Quero saber sobre limpeza de tapete" },
                    { lp: "/remocao-manchas", msg: "Olá! Tenho uma mancha difícil de tirar, posso mandar foto?" },
                    { lp: "/empresarial", msg: "Olá! Sou gestor e quero uma proposta empresarial" },
                    { lp: "/restaurantes", msg: "Olá! Tenho um restaurante e quero uma proposta" },
                    { lp: "/sao-jose-dos-campos", msg: "Olá! Preciso de coleta em São José dos Campos" },
                  ].map((item) => (
                    <div key={item.lp} className="flex gap-3">
                      <span className="text-blue-400 shrink-0">{item.lp}</span>
                      <span className="text-gray-500 shrink-0">→</span>
                      <span className="text-gray-500 italic truncate">&quot;{item.msg}&quot;</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── SECTION AI SALES ─────────────────────────────────────────── */}
          {activeSection === "ai-sales" && (
            <div className="space-y-8">
              {/* KPIs */}
              <div>
                <h2 className="text-lg font-bold text-white mb-1">AI Sales Engine</h2>
                <p className="text-sm text-gray-400 mb-6">Sistema de qualificação e conversão via WhatsApp. Transforma tráfego SEO em vendas automaticamente.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { label: "Páginas SEO", valor: AI_ENGINE_STATS.totalPages, sub: "estáticas SSG" },
                    { label: "Tráfego est.", valor: `${(AI_ENGINE_STATS.estimatedTotalMonthlyTraffic/1000).toFixed(1)}k`, sub: "visitas/mês" },
                    { label: "Leads est.", valor: AI_ENGINE_STATS.estimatedLeadsPerMonth, sub: "/mês" },
                    { label: "Vendas est.", valor: AI_ENGINE_STATS.estimatedMonthlySales, sub: "/mês" },
                    { label: "Ticket médio", valor: `R$${AI_ENGINE_STATS.estimatedAverageTicket}`, sub: "por pedido" },
                    { label: "MRR est.", valor: `R$${AI_ENGINE_STATS.estimatedMRR.toLocaleString("pt-BR")}`, sub: "mensal" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                      <p className="text-[10px] text-gray-500 mb-1">{kpi.label}</p>
                      <p className="text-xl font-bold text-white">{kpi.valor}</p>
                      <p className="text-[10px] text-gray-600 mt-0.5">{kpi.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Modules */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-4">5 Módulos do AI Sales Engine</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {[
                    { num: "01", nome: "Context Engine", desc: "Mensagem WA personalizada por rota SEO", cor: "blue", status: "Ativo" },
                    { num: "02", nome: "Lead Classifier", desc: "Classifica serviço, ticket e urgência", cor: "green", status: "Ativo" },
                    { num: "03", nome: "Reply Assistant", desc: "Sugere respostas ao atendente", cor: "purple", status: "Ativo" },
                    { num: "04", nome: "Upsell Engine", desc: "Sugere serviços complementares", cor: "amber", status: "Ativo" },
                    { num: "05", nome: "Recorrência", desc: "Pitch de plano mensal pós-venda", cor: "teal", status: "Ativo" },
                  ].map((mod) => (
                    <div key={mod.num} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 text-center">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-xs font-mono text-gray-500 mx-auto mb-3">{mod.num}</div>
                      <p className="text-xs font-semibold text-gray-200 mb-1">{mod.nome}</p>
                      <p className="text-[10px] text-gray-500 mb-2">{mod.desc}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">{mod.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ticket by service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-300 mb-4">Ticket por Serviço</h3>
                  <div className="space-y-3">
                    {TOP_SERVICES_BY_TICKET.slice(0, 7).map((s) => (
                      <div key={s.slug} className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 w-32 shrink-0">{s.label}</span>
                        <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(s.ticketMedio / 200) * 100}%` }} />
                        </div>
                        <span className="text-xs font-semibold text-emerald-400 w-12 text-right">R${s.ticketMedio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-300 mb-4">Funil SEO → Venda</h3>
                  <div className="space-y-2">
                    {[
                      { etapa: "Páginas SEO (133)", valor: AI_ENGINE_STATS.totalPages, max: 133 },
                      { etapa: "Visitas/mês", valor: AI_ENGINE_STATS.estimatedTotalMonthlyTraffic, max: 5000 },
                      { etapa: "Cliques no WA", valor: 450, max: 5000 },
                      { etapa: "Leads qualificados", valor: AI_ENGINE_STATS.estimatedLeadsPerMonth, max: 5000 },
                      { etapa: "Vendas fechadas", valor: AI_ENGINE_STATS.estimatedMonthlySales, max: 5000 },
                      { etapa: "Planos mensais", valor: 20, max: 5000 },
                    ].map((row) => (
                      <div key={row.etapa}>
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="text-gray-500">{row.etapa}</span>
                          <span className="text-gray-400 font-medium">{row.valor.toLocaleString("pt-BR")}</span>
                        </div>
                        <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500/50 rounded-full" style={{ width: `${Math.min((row.valor / row.max) * 100, 100)}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lead profiles */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Perfis de Lead — Classificação Automática</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {Object.values(LEAD_CATALOG).filter(p => p.slug !== "geral").map((profile) => (
                    <div key={profile.slug} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-xs font-semibold text-gray-200">{profile.label}</p>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          profile.urgencia === "alta" ? "bg-red-500/20 text-red-400" :
                          profile.urgencia === "media" ? "bg-amber-500/20 text-amber-400" :
                          "bg-gray-700 text-gray-500"
                        }`}>{profile.urgencia}</span>
                      </div>
                      <p className="text-lg font-bold text-emerald-400 mb-1">R${profile.ticketMedio}</p>
                      <p className="text-[10px] text-gray-600 mb-2">R${profile.ticketMin}–R${profile.ticketMax} · {profile.prazo}</p>
                      <div className="flex flex-wrap gap-1">
                        {profile.keywords.slice(0, 3).map((kw) => (
                          <span key={kw} className="text-[9px] px-1 py-0.5 bg-white/[0.05] rounded text-gray-600">{kw}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to assistant */}
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-green-300">Sales Assistant — Painel do Operador WhatsApp</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Ferramenta interna para classificar leads, copiar respostas, gerar links contextuais e consultar tabela de preços.
                  </p>
                </div>
                <a
                  href="/sales-assistant"
                  className="shrink-0 px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-xl hover:bg-green-500 transition-colors"
                >
                  Abrir Assistant →
                </a>
              </div>
            </div>
          )}

          {/* ─── SECTION 6: DEPARTAMENTOS ─────────────────────────────────── */}
          {activeSection === "departamentos" && (
            <div className="space-y-6">
              <p className="text-sm text-gray-400">9 departamentos envolvidos no Growth Engine</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {DEPARTMENTS.map((dept) => (
                  <div
                    key={dept.nome}
                    className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-xl shrink-0">
                        {dept.icone}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-100">{dept.nome}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{dept.responsabilidade}</p>
                        {dept.lps > 0 && (
                          <div className="mt-2">
                            <p className="text-[10px] text-gray-600">{dept.lps} LPs sob responsabilidade</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Responsibility matrix */}
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-4">Matriz de Responsabilidades — LPs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/[0.07]">
                        <th className="text-left text-gray-500 pb-2 pr-4">Responsável</th>
                        <th className="text-left text-gray-500 pb-2 pr-4">LPs</th>
                        <th className="text-left text-gray-500 pb-2">Prioridade máxima</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {[
                        { resp: "Dev", lps: LANDING_PAGES.filter((l) => l.responsavel === "Dev"), },
                        { resp: "Design", lps: LANDING_PAGES.filter((l) => l.responsavel === "Design"), },
                        { resp: "Comercial", lps: LANDING_PAGES.filter((l) => l.responsavel === "Comercial"), },
                      ].map((row) => (
                        <tr key={row.resp}>
                          <td className="py-2 pr-4 text-gray-300 font-medium">{row.resp}</td>
                          <td className="py-2 pr-4 text-gray-500">{row.lps.length} LPs</td>
                          <td className="py-2">
                            <div className="flex flex-wrap gap-1">
                              {row.lps.filter((l) => l.prioridade === "P0").map((l) => (
                                <span key={l.id} className="bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded text-[10px] font-mono">{l.id}</span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ─── SECTION 7: ROADMAP ───────────────────────────────────────── */}
          {activeSection === "roadmap" && (
            <div className="space-y-6">
              <p className="text-sm text-gray-400">8 fases do projeto · 2 concluídas · 1 em andamento</p>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.08]" />
                <div className="space-y-4">
                  {ROADMAP.map((fase) => (
                    <div key={fase.fase} className="relative flex gap-6">
                      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ring-2 shrink-0 ${ROADMAP_RING[fase.status]}`}>
                        {fase.status === "Concluído" ? "✓" : fase.fase}
                      </div>
                      <div className={`flex-1 border rounded-xl p-5 transition-all ${
                        fase.status === "Em andamento"
                          ? "bg-blue-500/5 border-blue-500/20"
                          : fase.status === "Concluído"
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : "bg-white/[0.02] border-white/[0.06]"
                      }`}>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className={`text-sm font-semibold ${fase.status === "Futuro" ? "text-gray-500" : "text-gray-100"}`}>
                              Fase {fase.fase} — {fase.nome}
                            </p>
                            <p className={`text-xs mt-0.5 ${fase.status === "Futuro" ? "text-gray-600" : "text-gray-400"}`}>
                              {fase.descricao}
                            </p>
                          </div>
                          <span className={`shrink-0 text-[10px] px-2 py-1 rounded-full font-medium ${
                            fase.status === "Concluído" ? "bg-emerald-500/20 text-emerald-400" :
                            fase.status === "Em andamento" ? "bg-blue-500/20 text-blue-400" :
                            fase.status === "Próximo" ? "bg-amber-500/20 text-amber-400" :
                            "bg-gray-700 text-gray-600"
                          }`}>
                            {fase.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.05]">
                          <span className="text-[10px] text-gray-600">Entregável:</span>
                          <span className={`text-[10px] font-mono ${fase.status === "Futuro" ? "text-gray-600" : "text-gray-400"}`}>
                            {fase.entregavel}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOCO 4 preview */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🚀</span>
                  <div>
                    <p className="text-sm font-bold text-purple-300">BLOCO 4 — Programmatic SEO Engine</p>
                    <p className="text-xs text-gray-400 mt-1 mb-3">
                      Geração automática de centenas de páginas otimizadas para SEO. Cada combinação de
                      serviço × cidade × persona gera uma página única e indexável.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "/lavanderia-[cidade]",
                        "/lavagem-[tipo-de-peca]",
                        "/tirar-mancha-[tipo]",
                        "/lavanderia-[bairro]-sjc",
                        "/higienizar-[item]-[cidade]",
                        "/preco-lavar-[tipo]-[cidade]",
                      ].map((pattern) => (
                        <span key={pattern} className="text-[11px] font-mono text-purple-300/70 bg-purple-500/10 px-2 py-1 rounded">
                          {pattern}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-purple-400 mt-3 font-semibold">Potencial: 1.000+ páginas orgânicas</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
