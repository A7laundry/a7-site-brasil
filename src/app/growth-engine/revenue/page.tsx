"use client";

import { useState } from "react";
import {
  SEO_PAGES,
  LEADS_BY_SERVICE, LEADS_BY_CITY, LEADS_BY_PROBLEM,
  REVENUE_BY_SERVICE,
  UPSELL_DATA,
  MRR_PLANS,
  FUNNEL_STAGES,
  REVENUE_KPIS,
  getTrendColor, getTrendIcon, formatBRL, formatPct,
  type ServiceRevenue, type UpsellPerformance, type PagePerformance,
} from "@/lib/revenue-data";

// ─── MINI BAR ─────────────────────────────────────────────────────────────────

function MiniBar({ value, max, color = "bg-blue-500" }: { value: number; max: number; color?: string }) {
  return (
    <div className="w-20 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${Math.min((value / max) * 100, 100)}%` }} />
    </div>
  );
}

// ─── KPI CARD ─────────────────────────────────────────────────────────────────

function KpiCard({ label, valor, sub, delta, cor = "white" }: { label: string; valor: string; sub: string; delta?: string; cor?: string }) {
  const textCor = cor === "green" ? "text-emerald-400" : cor === "purple" ? "text-purple-400" : cor === "amber" ? "text-amber-400" : "text-white";
  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
      <p className="text-[10px] text-gray-500 mb-1">{label}</p>
      <p className={`text-xl font-bold ${textCor}`}>{valor}</p>
      <div className="flex items-center justify-between mt-0.5">
        <p className="text-[10px] text-gray-600">{sub}</p>
        {delta && <span className="text-[10px] text-emerald-400 font-medium">{delta}</span>}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────

function SectionHeader({ title, sub, count }: { title: string; sub: string; count?: number }) {
  return (
    <div className="flex items-baseline justify-between mb-5">
      <div>
        <h2 className="text-sm font-semibold text-white">{title}</h2>
        <p className="text-[11px] text-gray-500 mt-0.5">{sub}</p>
      </div>
      {count !== undefined && (
        <span className="text-xs text-gray-600 bg-white/[0.04] px-2.5 py-1 rounded-full">{count} entradas</span>
      )}
    </div>
  );
}

// ─── TABS ────────────────────────────────────────────────────────────────────

const PANELS = [
  { id: "seo", label: "SEO Performance", icone: "📈" },
  { id: "source", label: "Lead Sources", icone: "🎯" },
  { id: "revenue", label: "Revenue", icone: "💰" },
  { id: "upsell", label: "Upsell", icone: "⬆️" },
  { id: "mrr", label: "MRR / Recorrência", icone: "🔄" },
  { id: "funnel", label: "Funil", icone: "▽" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function RevenueDashboard() {
  const [activePanel, setActivePanel] = useState("seo");
  const [seoSort, setSeoSort] = useState<keyof PagePerformance>("receitaEstimada");
  const [seoFilter, setSeoFilter] = useState("Todos");
  const [revSort, setRevSort] = useState<keyof ServiceRevenue>("receitaTotal");
  const [upsellSort, setUpsellSort] = useState<keyof UpsellPerformance>("taxaConversao");

  const sortedSeo = [...SEO_PAGES]
    .filter((p) => seoFilter === "Todos" || p.tipo === seoFilter)
    .sort((a, b) => (b[seoSort] as number) - (a[seoSort] as number));

  const sortedRev = [...REVENUE_BY_SERVICE].sort((a, b) => (b[revSort] as number) - (a[revSort] as number));
  const sortedUpsell = [...UPSELL_DATA].sort((a, b) => (b[upsellSort] as number) - (a[upsellSort] as number));

  const totalMRR = MRR_PLANS.reduce((a, p) => a + p.mrr, 0);
  const totalAssinantes = MRR_PLANS.reduce((a, p) => a + p.assinantesAtivos, 0);
  const maxFunnel = FUNNEL_STAGES[0].valor;

  return (
    <div className="min-h-screen bg-[#0f0f13] text-gray-100 font-sans">

      {/* Header */}
      <div className="border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xs font-black text-white">R$</div>
          <div>
            <p className="text-sm font-semibold text-white">Revenue Intelligence Engine</p>
            <p className="text-[10px] text-gray-500">A7 Growth Engine · BLOCO 6 · Dados estimados</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gray-600 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
            📅 Março 2026 — Simulado
          </span>
          <a href="/growth-engine" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">← Dashboard</a>
        </div>
      </div>

      {/* Global KPIs */}
      <div className="px-6 py-5 border-b border-white/[0.06]">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          <KpiCard label="Tráfego SEO" valor={REVENUE_KPIS.trafegoTotal.toLocaleString("pt-BR")} sub="visitas/mês" delta="+12%" cor="white" />
          <KpiCard label="Leads" valor={REVENUE_KPIS.leadsTotal.toString()} sub="qualificados/mês" delta="+8%" cor="white" />
          <KpiCard label="Vendas" valor={REVENUE_KPIS.vendasTotal.toString()} sub="/mês" delta="+5%" cor="green" />
          <KpiCard label="Conversão" valor={formatPct(REVENUE_KPIS.taxaConversaoGeral)} sub="visita → venda" cor="white" />
          <KpiCard label="Ticket Médio" valor={formatBRL(REVENUE_KPIS.ticketMedioGeral)} sub="por pedido" cor="amber" />
          <KpiCard label="Receita/mês" valor={formatBRL(REVENUE_KPIS.receitaBruta)} sub="estimada" cor="amber" />
          <KpiCard label="MRR" valor={formatBRL(REVENUE_KPIS.mrrTotal)} sub={`${REVENUE_KPIS.assinantesTotais} assinantes`} delta="+17 planos" cor="purple" />
          <KpiCard label="LTV Estimado" valor={formatBRL(REVENUE_KPIS.ltv)} sub="por cliente" cor="white" />
        </div>
      </div>

      {/* Panel Tabs */}
      <div className="border-b border-white/[0.06] px-6">
        <div className="flex gap-1 overflow-x-auto">
          {PANELS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePanel(p.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-medium whitespace-nowrap transition-all border-b-2 ${
                activePanel === p.id
                  ? "border-amber-500 text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              <span>{p.icone}</span> {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 max-w-7xl mx-auto">

        {/* ─── PANEL 1: SEO PERFORMANCE ─────────────────────────────────── */}
        {activePanel === "seo" && (
          <div className="space-y-5">
            <SectionHeader
              title="SEO Performance por Página"
              sub="Desempenho individual das 133 páginas estáticas — visitas, leads e receita estimada"
              count={sortedSeo.length}
            />

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-1">
                {["Todos", "Combinação", "Problema", "Blog", "Cidade", "Serviço"].map((f) => (
                  <button key={f} onClick={() => setSeoFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${seoFilter === f ? "bg-white text-gray-900" : "bg-white/[0.05] text-gray-500 hover:text-gray-300"}`}>
                    {f}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2 text-[10px] text-gray-600">
                <span>Ordenar por</span>
                {(["receitaEstimada","leads","visitas","vendas"] as (keyof PagePerformance)[]).map((k) => (
                  <button key={k} onClick={() => setSeoSort(k)}
                    className={`px-2 py-1 rounded ${seoSort === k ? "bg-amber-500/20 text-amber-400" : "hover:text-gray-400"}`}>
                    {k === "receitaEstimada" ? "Receita" : k.charAt(0).toUpperCase() + k.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    {["Página", "Tipo", "Visitas", "Cliques WA", "Leads", "Vendas", "Conv.", "Receita Est.", "Trend"].map((h) => (
                      <th key={h} className="text-left text-[10px] text-gray-600 pb-3 pr-4 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {sortedSeo.map((page) => {
                    const conv = page.visitas > 0 ? page.vendas / page.visitas : 0;
                    const maxVisitas = Math.max(...SEO_PAGES.map(p => p.visitas));
                    return (
                      <tr key={page.path} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="py-2.5 pr-4">
                          <span className="font-mono text-[10px] text-blue-400 group-hover:text-blue-300">{page.path}</span>
                        </td>
                        <td className="py-2.5 pr-4">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                            page.tipo === "Combinação" ? "bg-purple-500/20 text-purple-400" :
                            page.tipo === "Problema" ? "bg-red-500/20 text-red-400" :
                            page.tipo === "Blog" ? "bg-green-500/20 text-green-400" :
                            page.tipo === "Cidade" ? "bg-blue-500/20 text-blue-400" :
                            "bg-amber-500/20 text-amber-400"
                          }`}>{page.tipo}</span>
                        </td>
                        <td className="py-2.5 pr-4">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-300 w-8 text-right">{page.visitas}</span>
                            <MiniBar value={page.visitas} max={maxVisitas} color="bg-blue-500/50" />
                          </div>
                        </td>
                        <td className="py-2.5 pr-4 text-gray-400">{page.cliquesWA}</td>
                        <td className="py-2.5 pr-4 text-gray-300 font-medium">{page.leads}</td>
                        <td className="py-2.5 pr-4 text-emerald-400 font-semibold">{page.vendas}</td>
                        <td className="py-2.5 pr-4">
                          <span className={conv >= 0.08 ? "text-emerald-400 font-semibold" : conv >= 0.05 ? "text-amber-400" : "text-gray-500"}>
                            {formatPct(conv)}
                          </span>
                        </td>
                        <td className="py-2.5 pr-4 text-amber-400 font-semibold">{formatBRL(page.receitaEstimada)}</td>
                        <td className="py-2.5 pr-4">
                          <span className={`text-sm ${getTrendColor(page.tendencia)}`}>{getTrendIcon(page.tendencia)}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[
                { label: "Visitas totais", val: SEO_PAGES.reduce((a,p) => a+p.visitas,0).toLocaleString("pt-BR") },
                { label: "Leads totais", val: SEO_PAGES.reduce((a,p) => a+p.leads,0).toString() },
                { label: "Vendas totais", val: SEO_PAGES.reduce((a,p) => a+p.vendas,0).toString() },
                { label: "Receita estimada", val: formatBRL(SEO_PAGES.reduce((a,p) => a+p.receitaEstimada,0)) },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-lg font-bold text-white">{s.val}</p>
                  <p className="text-[10px] text-gray-600 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── PANEL 2: LEAD SOURCES ────────────────────────────────────── */}
        {activePanel === "source" && (
          <div className="space-y-8">
            <SectionHeader title="Lead Source Intelligence" sub="Origem dos leads por serviço, cidade e problema" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* By Service */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <h3 className="text-xs font-semibold text-gray-300 mb-4">Por Serviço</h3>
                <div className="space-y-3">
                  {LEADS_BY_SERVICE.sort((a,b) => b.leads - a.leads).map((s) => {
                    const maxLeads = Math.max(...LEADS_BY_SERVICE.map(x => x.leads));
                    return (
                      <div key={s.nome}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-300">{s.nome}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">{s.leads} leads</span>
                            <span className="text-emerald-400 font-semibold">{formatBRL(s.receitaEstimada)}</span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${(s.leads / maxLeads) * 100}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* By City */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <h3 className="text-xs font-semibold text-gray-300 mb-4">Por Cidade</h3>
                <div className="space-y-3">
                  {LEADS_BY_CITY.map((c) => {
                    const maxLeads = Math.max(...LEADS_BY_CITY.map(x => x.leads));
                    const conv = c.vendas / c.leads;
                    return (
                      <div key={c.nome}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-300">{c.nome}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">{c.leads} leads</span>
                            <span className={conv >= 0.45 ? "text-emerald-400 font-semibold" : "text-amber-400"}>{formatPct(conv)}</span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500 rounded-full transition-all" style={{ width: `${(c.leads / maxLeads) * 100}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* By Problem */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <h3 className="text-xs font-semibold text-gray-300 mb-4">Por Problema (Motor 3)</h3>
                <div className="space-y-3">
                  {LEADS_BY_PROBLEM.map((p) => {
                    const maxLeads = Math.max(...LEADS_BY_PROBLEM.map(x => x.leads));
                    return (
                      <div key={p.nome}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-300">{p.nome}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">{p.leads} leads</span>
                            <span className="text-red-400 font-semibold">⚡ urgente</span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${(p.leads / maxLeads) * 100}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-xs font-semibold text-blue-300 mb-1">🏆 Serviço top</p>
                <p className="text-xl font-bold text-white">Mancha</p>
                <p className="text-[10px] text-gray-500 mt-1">145 leads/mês — maior volume de conversas</p>
              </div>
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                <p className="text-xs font-semibold text-teal-300 mb-1">🏙️ Cidade top</p>
                <p className="text-xl font-bold text-white">São José dos Campos</p>
                <p className="text-[10px] text-gray-500 mt-1">198 leads/mês — 38% do total</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <p className="text-xs font-semibold text-red-300 mb-1">⚡ Maior urgência</p>
                <p className="text-xl font-bold text-white">Mancha de Vinho</p>
                <p className="text-[10px] text-gray-500 mt-1">67 leads/mês · conversão 49%</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── PANEL 3: REVENUE BY SERVICE ──────────────────────────────── */}
        {activePanel === "revenue" && (
          <div className="space-y-5">
            <SectionHeader title="Revenue by Service" sub="Receita estimada, ticket médio e taxa de conversão por serviço" count={REVENUE_BY_SERVICE.length} />

            <div className="flex items-center gap-2 text-[10px] text-gray-600 mb-3">
              <span>Ordenar por</span>
              {(["receitaTotal","vendasTotal","taxaConversao","ticketMedio","mrr"] as (keyof ServiceRevenue)[]).map((k) => (
                <button key={k} onClick={() => setRevSort(k)}
                  className={`px-2 py-1 rounded transition-colors ${revSort === k ? "bg-amber-500/20 text-amber-400" : "hover:text-gray-400"}`}>
                  {k === "receitaTotal" ? "Receita" : k === "vendasTotal" ? "Vendas" : k === "taxaConversao" ? "Conversão" : k === "ticketMedio" ? "Ticket" : "MRR"}
                </button>
              ))}
            </div>

            {/* Big chart */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <div className="flex items-end gap-3 h-40 mb-4">
                {sortedRev.map((s) => {
                  const maxRec = Math.max(...sortedRev.map(x => x.receitaTotal));
                  const heightPct = (s.receitaTotal / maxRec) * 100;
                  const colors: Record<string,string> = { amber:"bg-amber-500", teal:"bg-teal-500", blue:"bg-blue-500", indigo:"bg-indigo-500", purple:"bg-purple-500", pink:"bg-pink-500", cyan:"bg-cyan-500", red:"bg-red-500" };
                  return (
                    <div key={s.slug} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="relative w-full flex flex-col justify-end" style={{ height: "100%" }}>
                        <div
                          className={`w-full ${colors[s.cor] ?? "bg-blue-500"} rounded-t-lg transition-all group-hover:opacity-80 relative`}
                          style={{ height: `${heightPct}%` }}
                        >
                          <div className="absolute -top-6 left-0 right-0 text-center text-[9px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {formatBRL(s.receitaTotal)}
                          </div>
                        </div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center leading-tight">{s.nome.split(" ")[0]}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    {["Serviço", "Ticket Mín", "Ticket Médio", "Ticket Máx", "Leads", "Vendas", "Conv.", "Receita Total", "MRR"].map(h => (
                      <th key={h} className="text-left text-[10px] text-gray-600 pb-3 pr-5 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {sortedRev.map((s) => (
                    <tr key={s.slug} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-5 font-medium text-gray-200">{s.nome}</td>
                      <td className="py-3 pr-5 text-gray-500">{formatBRL(s.ticketMin)}</td>
                      <td className="py-3 pr-5 font-semibold text-emerald-400">{formatBRL(s.ticketMedio)}</td>
                      <td className="py-3 pr-5 text-gray-500">{formatBRL(s.ticketMax)}</td>
                      <td className="py-3 pr-5 text-gray-400">{s.leadsTotal}</td>
                      <td className="py-3 pr-5 text-gray-300 font-medium">{s.vendasTotal}</td>
                      <td className="py-3 pr-5">
                        <span className={s.taxaConversao >= 0.5 ? "text-emerald-400 font-semibold" : "text-amber-400"}>
                          {formatPct(s.taxaConversao)}
                        </span>
                      </td>
                      <td className="py-3 pr-5 text-amber-400 font-bold">{formatBRL(s.receitaTotal)}</td>
                      <td className="py-3 pr-5 text-purple-400 font-semibold">{s.mrr > 0 ? formatBRL(s.mrr) : "—"}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-white/[0.1] font-bold">
                    <td className="py-3 pr-5 text-white">TOTAL</td>
                    <td className="py-3 pr-5" />
                    <td className="py-3 pr-5 text-emerald-400">{formatBRL(REVENUE_KPIS.ticketMedioGeral)}</td>
                    <td className="py-3 pr-5" />
                    <td className="py-3 pr-5 text-gray-300">{sortedRev.reduce((a,s) => a+s.leadsTotal, 0)}</td>
                    <td className="py-3 pr-5 text-gray-200">{sortedRev.reduce((a,s) => a+s.vendasTotal, 0)}</td>
                    <td className="py-3 pr-5 text-emerald-400">{formatPct(REVENUE_KPIS.taxaConversaoGeral)}</td>
                    <td className="py-3 pr-5 text-amber-400">{formatBRL(REVENUE_KPIS.receitaBruta)}</td>
                    <td className="py-3 pr-5 text-purple-400">{formatBRL(REVENUE_KPIS.mrrTotal)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ─── PANEL 4: UPSELL ──────────────────────────────────────────── */}
        {activePanel === "upsell" && (
          <div className="space-y-5">
            <SectionHeader title="Upsell Performance" sub="Quais upsells convertem mais e geram maior receita adicional" count={UPSELL_DATA.length} />

            <div className="flex items-center gap-2 text-[10px] text-gray-600">
              <span>Ordenar por</span>
              {(["taxaConversao","receitaAdd","convertidas"] as (keyof UpsellPerformance)[]).map((k) => (
                <button key={k} onClick={() => setUpsellSort(k)}
                  className={`px-2 py-1 rounded transition-colors ${upsellSort === k ? "bg-amber-500/20 text-amber-400" : "hover:text-gray-400"}`}>
                  {k === "taxaConversao" ? "Taxa" : k === "receitaAdd" ? "Receita" : "Convertidas"}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    {["Serviço Principal", "Upsell", "Ofertas", "Convertidas", "Taxa Conv.", "Ticket Add", "Receita Add"].map(h => (
                      <th key={h} className="text-left text-[10px] text-gray-600 pb-3 pr-5 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {sortedUpsell.map((u, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-5 font-medium text-gray-300">{u.servicoPrincipal}</td>
                      <td className="py-3 pr-5">
                        <span className="text-amber-400 font-medium">↑ {u.upsell}</span>
                      </td>
                      <td className="py-3 pr-5 text-gray-500">{u.ofertasFeitas}</td>
                      <td className="py-3 pr-5 text-gray-300 font-medium">{u.convertidas}</td>
                      <td className="py-3 pr-5">
                        <div className="flex items-center gap-2">
                          <span className={u.taxaConversao >= 0.25 ? "text-emerald-400 font-bold" : u.taxaConversao >= 0.15 ? "text-amber-400" : "text-gray-500"}>
                            {formatPct(u.taxaConversao)}
                          </span>
                          <MiniBar value={u.taxaConversao} max={0.35} color={u.taxaConversao >= 0.25 ? "bg-emerald-500" : "bg-amber-500"} />
                        </div>
                      </td>
                      <td className="py-3 pr-5 text-gray-400">{formatBRL(u.ticketAdd)}</td>
                      <td className="py-3 pr-5 text-emerald-400 font-semibold">{formatBRL(u.receitaAdd)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <p className="text-[10px] text-emerald-400 mb-1">🏆 Upsell mais eficiente</p>
                <p className="text-sm font-bold text-white">Edredom → Travesseiros</p>
                <p className="text-[10px] text-gray-500 mt-1">34% de conversão · R$40 de ticket adicional</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-[10px] text-amber-400 mb-1">💰 Maior receita adicional</p>
                <p className="text-sm font-bold text-white">Empresarial → Tapetes</p>
                <p className="text-[10px] text-gray-500 mt-1">{formatBRL(3200)} de receita adicional</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-[10px] text-blue-400 mb-1">📊 Total receita upsell</p>
                <p className="text-sm font-bold text-white">{formatBRL(REVENUE_KPIS.upsellReceitaTotal)}</p>
                <p className="text-[10px] text-gray-500 mt-1">+{formatPct(REVENUE_KPIS.upsellReceitaTotal / REVENUE_KPIS.receitaBruta)} da receita total</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── PANEL 5: MRR / RECORRÊNCIA ───────────────────────────────── */}
        {activePanel === "mrr" && (
          <div className="space-y-6">
            <SectionHeader title="MRR Engine — Receita Recorrente" sub="Planos mensais ativos, novos assinantes e churn" />

            {/* MRR KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard label="MRR Total" valor={formatBRL(totalMRR)} sub="receita mensal recorrente" cor="purple" delta={`+${REVENUE_KPIS.newPlanosMes} planos`} />
              <KpiCard label="Assinantes" valor={totalAssinantes.toString()} sub="planos ativos" cor="white" />
              <KpiCard label="Novos/Mês" valor={REVENUE_KPIS.newPlanosMes.toString()} sub="novos assinantes" cor="green" />
              <KpiCard label="Churn Médio" valor={formatPct(REVENUE_KPIS.churnMedioMensal)} sub="cancelamentos/mês" cor="amber" />
            </div>

            {/* Plans table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    {["Plano", "Descrição", "Ativos", "Novos/mês", "Cancel/mês", "Ticket Médio", "MRR", "Churn"].map(h => (
                      <th key={h} className="text-left text-[10px] text-gray-600 pb-3 pr-5 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {[...MRR_PLANS].sort((a,b) => b.mrr - a.mrr).map((p) => (
                    <tr key={p.plano} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-5 font-semibold text-gray-200">{p.plano}</td>
                      <td className="py-3 pr-5 text-gray-500 max-w-xs">{p.descricao}</td>
                      <td className="py-3 pr-5">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 font-medium">{p.assinantesAtivos}</span>
                          <MiniBar value={p.assinantesAtivos} max={totalAssinantes} color="bg-purple-500" />
                        </div>
                      </td>
                      <td className="py-3 pr-5 text-emerald-400 font-semibold">+{p.novosMes}</td>
                      <td className="py-3 pr-5">
                        {p.cancelamentosMes > 0
                          ? <span className="text-red-400">-{p.cancelamentosMes}</span>
                          : <span className="text-gray-600">—</span>}
                      </td>
                      <td className="py-3 pr-5 text-amber-400">{formatBRL(p.ticketMensalMedio)}</td>
                      <td className="py-3 pr-5 text-purple-400 font-bold">{formatBRL(p.mrr)}</td>
                      <td className="py-3 pr-5">
                        <span className={p.churnRate === 0 ? "text-emerald-400" : p.churnRate < 0.03 ? "text-amber-400" : "text-red-400"}>
                          {p.churnRate === 0 ? "0%" : formatPct(p.churnRate)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MRR visual breakdown */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <h3 className="text-xs font-semibold text-gray-300 mb-4">Contribuição por Plano</h3>
              <div className="space-y-3">
                {[...MRR_PLANS].sort((a,b) => b.mrr - a.mrr).map((p) => (
                  <div key={p.plano}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">{p.plano}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600">{p.assinantesAtivos} assinantes</span>
                        <span className="text-purple-400 font-semibold w-24 text-right">{formatBRL(p.mrr)}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{ width: `${(p.mrr / totalMRR) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-gray-500">MRR Total</span>
                <span className="text-lg font-bold text-purple-400">{formatBRL(totalMRR)}</span>
              </div>
            </div>
          </div>
        )}

        {/* ─── PANEL 6: FUNNEL ──────────────────────────────────────────── */}
        {activePanel === "funnel" && (
          <div className="space-y-8">
            <SectionHeader title="Funil de Conversão Completo" sub="De visitantes orgânicos a assinantes de plano mensal" />

            {/* Funnel visual */}
            <div className="max-w-2xl mx-auto space-y-2">
              {FUNNEL_STAGES.map((stage, idx) => {
                const widthPct = Math.max((stage.valor / maxFunnel) * 100, 18);
                const barColors: Record<string,string> = {
                  blue: "from-blue-600 to-blue-500",
                  indigo: "from-indigo-600 to-indigo-500",
                  green: "from-green-600 to-green-500",
                  teal: "from-teal-600 to-teal-500",
                  amber: "from-amber-600 to-amber-500",
                  emerald: "from-emerald-600 to-emerald-500",
                  purple: "from-purple-600 to-purple-500",
                };
                return (
                  <div key={stage.etapa}>
                    <div className="flex items-center justify-center">
                      <div
                        className={`bg-gradient-to-r ${barColors[stage.cor]} rounded-xl px-5 py-3.5 transition-all`}
                        style={{ width: `${widthPct}%` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-base">{stage.icone}</span>
                            <div>
                              <p className="text-sm font-semibold text-white">{stage.etapa}</p>
                              <p className="text-[10px] text-white/60">{stage.descricao}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-white">{stage.valor.toLocaleString("pt-BR")}</p>
                            {stage.percentualAnterior !== null && (
                              <p className="text-[10px] text-white/60">{stage.percentualAnterior.toFixed(1)}% do anterior</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {idx < FUNNEL_STAGES.length - 1 && (
                      <div className="flex justify-center my-1">
                        <span className="text-gray-700 text-sm">↓</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drop-off analysis */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <h3 className="text-xs font-semibold text-gray-300 mb-4">Análise de Drop-off por Etapa</h3>
              <div className="space-y-3">
                {FUNNEL_STAGES.slice(1).map((stage, idx) => {
                  const prev = FUNNEL_STAGES[idx];
                  const drop = prev.valor - stage.valor;
                  const dropPct = drop / prev.valor;
                  const isHighDrop = dropPct > 0.6;
                  return (
                    <div key={stage.etapa} className="flex items-center gap-4">
                      <div className="w-40 text-xs text-gray-500 text-right shrink-0">
                        {prev.etapa} → {stage.etapa}
                      </div>
                      <div className="flex-1 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${isHighDrop ? "bg-red-500" : "bg-emerald-500"}`}
                          style={{ width: `${((1 - dropPct) * 100)}%` }}
                        />
                      </div>
                      <div className="w-24 text-right">
                        <span className={`text-xs font-semibold ${isHighDrop ? "text-red-400" : "text-emerald-400"}`}>
                          {formatPct(1 - dropPct)} retidos
                        </span>
                      </div>
                      {isHighDrop && (
                        <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">⚠ oportunidade</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Revenue summary */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Custo por lead</p>
                <p className="text-xl font-bold text-white">R$0</p>
                <p className="text-[10px] text-gray-600 mt-1">100% orgânico</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Receita/venda</p>
                <p className="text-xl font-bold text-amber-400">{formatBRL(REVENUE_KPIS.ticketMedioGeral)}</p>
                <p className="text-[10px] text-gray-600 mt-1">ticket médio</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">ROI do SEO</p>
                <p className="text-xl font-bold text-emerald-400">∞</p>
                <p className="text-[10px] text-gray-600 mt-1">custo zero de aquisição</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">LTV/cliente</p>
                <p className="text-xl font-bold text-purple-400">{formatBRL(REVENUE_KPIS.ltv)}</p>
                <p className="text-[10px] text-gray-600 mt-1">lifetime value estimado</p>
              </div>
            </div>

            {/* Next BLOCO teaser */}
            <div className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 rounded-xl p-6 flex items-start gap-5">
              <span className="text-3xl shrink-0">🧠</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-violet-300 mb-1">BLOCO 7 — AI Content Engine (próximo)</p>
                <p className="text-xs text-gray-400 mb-3">
                  O engine analisa quais perguntas os clientes fazem no WhatsApp, identifica gaps no conteúdo SEO
                  e gera automaticamente novos artigos e páginas programáticas. Loop infinito de crescimento orgânico.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Analisar perguntas dos clientes", "Detectar gaps de conteúdo", "Gerar artigos automaticamente", "Publicar no blog", "Criar novas páginas SEO", "Loop infinito de tráfego"].map((item) => (
                    <span key={item} className="text-[10px] px-2 py-0.5 bg-violet-500/10 text-violet-400 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
