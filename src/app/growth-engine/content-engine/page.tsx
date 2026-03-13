"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CLIENT_QUESTIONS,
  CONTENT_GAPS,
  ARTICLE_BRIEFS,
  SEO_OPPORTUNITIES,
  CONTENT_PIPELINE,
  CONTENT_ENGINE_STATS,
  GAP_COLORS,
  STATUS_COLORS,
  TIPO_COLORS,
  type ClientQuestion,
  type ContentGap,
  type ArticleBrief,
  type SEOOpportunity,
  type PipelineItem,
} from "@/lib/content-engine";

// ─── MINI COMPONENTS ──────────────────────────────────────────────────────────

function KpiCard({ label, value, sub, accent }: { label: string; value: string | number; sub?: string; accent?: string }) {
  return (
    <div className="bg-[#16161d] border border-white/5 rounded-xl p-4">
      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-bold ${accent ?? "text-white"}`}>{value}</p>
      {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

// ─── LOOP DIAGRAM ─────────────────────────────────────────────────────────────

function GrowthLoopDiagram() {
  const steps = [
    { icon: "💬", label: "Perguntas dos\nClientes", color: "from-blue-600 to-blue-500" },
    { icon: "🔍", label: "Detecção de\nGaps", color: "from-violet-600 to-violet-500" },
    { icon: "✍️", label: "Brief\nAutomático", color: "from-purple-600 to-purple-500" },
    { icon: "📝", label: "Artigo\nPublicado", color: "from-emerald-600 to-emerald-500" },
    { icon: "📈", label: "Nova Página\nSEO", color: "from-teal-600 to-teal-500" },
    { icon: "🚀", label: "Mais Visitas\n& Leads", color: "from-rose-600 to-rose-500" },
  ];

  return (
    <div className="bg-[#16161d] border border-white/5 rounded-xl p-6 mb-6">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 text-center">
        Loop Infinito de Crescimento Orgânico
      </h3>
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`flex flex-col items-center gap-1.5 min-w-[80px]`}>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-lg`}>
                {step.icon}
              </div>
              <p className="text-xs text-slate-400 text-center whitespace-pre-line leading-tight">{step.label}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="text-slate-600 text-lg">→</div>
            )}
            {i === steps.length - 1 && (
              <div className="text-rose-500 text-lg font-bold">↺</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 bg-emerald-900/20 border border-emerald-500/20 rounded-lg px-4 py-2 text-center">
        <p className="text-xs text-emerald-400">
          Cada novo cliente que pergunta algo → se torna conteúdo → gera tráfego → traz novos clientes.
          <span className="font-semibold"> Iteração 1 já detectou {CONTENT_ENGINE_STATS.gapsDetectados} gaps e {CONTENT_ENGINE_STATS.briefsGerados} briefs prontos.</span>
        </p>
      </div>
    </div>
  );
}

// ─── TABS ─────────────────────────────────────────────────────────────────────

const TABS = ["Visão Geral", "Perguntas", "Gaps", "Briefs", "Oportunidades SEO", "Pipeline"];

// ─── QUESTIONS TAB ────────────────────────────────────────────────────────────

function QuestionsTab() {
  const [clusterFilter, setClusterFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const clusters = ["Todos", ...Array.from(new Set(CLIENT_QUESTIONS.map((q) => q.cluster)))];

  const filtered = CLIENT_QUESTIONS.filter((q) => {
    const clusterOk = clusterFilter === "Todos" || q.cluster === clusterFilter;
    const statusOk =
      statusFilter === "Todos" ||
      (statusFilter === "Coberto" && q.hasConteudo) ||
      (statusFilter === "Gap" && !q.hasConteudo);
    return clusterOk && statusOk;
  }).sort((a, b) => b.frequencia - a.frequencia);

  const totalGaps = CLIENT_QUESTIONS.filter((q) => !q.hasConteudo).length;
  const coverage = Math.round((CLIENT_QUESTIONS.filter((q) => q.hasConteudo).length / CLIENT_QUESTIONS.length) * 100);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#16161d] border border-white/5 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-white">{CLIENT_QUESTIONS.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Perguntas analisadas</p>
        </div>
        <div className="bg-[#16161d] border border-white/5 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-red-400">{totalGaps}</p>
          <p className="text-xs text-slate-500 mt-0.5">Sem conteúdo (gaps)</p>
        </div>
        <div className="bg-[#16161d] border border-white/5 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-emerald-400">{coverage}%</p>
          <p className="text-xs text-slate-500 mt-0.5">Cobertura atual</p>
        </div>
      </div>

      {/* Coverage bar */}
      <div className="bg-[#16161d] border border-white/5 rounded-lg p-4">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Cobertura de conteúdo</span>
          <span>{coverage}% coberto · {100 - coverage}% gap</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all" style={{ width: `${coverage}%` }} />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <div className="flex gap-1">
          {clusters.map((c) => (
            <button key={c} onClick={() => setClusterFilter(c)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${clusterFilter === c ? "bg-violet-600 text-white" : "bg-[#16161d] text-slate-400 hover:bg-white/5"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-1 ml-auto">
          {["Todos", "Gap", "Coberto"].map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${statusFilter === s ? "bg-blue-700 text-white" : "bg-[#16161d] text-slate-400 hover:bg-white/5"}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#16161d] border border-white/5 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs text-slate-500 uppercase">
              <th className="text-left px-4 py-3">Pergunta</th>
              <th className="text-left px-4 py-3">Cluster</th>
              <th className="text-center px-4 py-3">Freq/mês</th>
              <th className="text-center px-4 py-3">Fonte</th>
              <th className="text-center px-4 py-3">Intenção</th>
              <th className="text-center px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((q: ClientQuestion) => (
              <tr key={q.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="px-4 py-3 text-slate-300 max-w-xs">
                  <p className="text-sm">&ldquo;{q.pergunta}&rdquo;</p>
                  {q.hasConteudo && q.contentSlug && (
                    <Link href={`/blog/${q.contentSlug}`} className="text-xs text-blue-400 hover:underline mt-0.5 inline-block">
                      → ver artigo
                    </Link>
                  )}
                </td>
                <td className="px-4 py-3">
                  <Badge className="bg-violet-900/40 text-violet-300">{q.cluster}</Badge>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`font-bold ${q.frequencia >= 40 ? "text-red-400" : q.frequencia >= 25 ? "text-amber-400" : "text-slate-400"}`}>
                    {q.frequencia}×
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-slate-400 text-xs">{q.fonte}</td>
                <td className="px-4 py-3 text-center">
                  <Badge className={
                    q.intencao === "Transacional" ? "bg-rose-900/40 text-rose-300" :
                    q.intencao === "Comercial" ? "bg-amber-900/40 text-amber-300" :
                    "bg-blue-900/40 text-blue-300"
                  }>
                    {q.intencao}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-center">
                  {q.hasConteudo
                    ? <Badge className="bg-emerald-900/40 text-emerald-300">✓ Coberto</Badge>
                    : <Badge className="bg-red-900/40 text-red-300">✗ Gap</Badge>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── GAPS TAB ─────────────────────────────────────────────────────────────────

function GapsTab() {
  const sorted = [...CONTENT_GAPS].sort((a, b) => b.volumeEstimado - a.volumeEstimado);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-3">
        <KpiCard label="Gaps Detectados" value={CONTENT_GAPS.length} accent="text-red-400" />
        <KpiCard label="Vol. Total Estimado" value={CONTENT_GAPS.reduce((s, g) => s + g.volumeEstimado, 0).toLocaleString("pt-BR")} sub="buscas/mês sem resposta" />
        <KpiCard label="Oportunidade Alta" value={CONTENT_GAPS.filter((g) => g.oportunidade === "alta").length} accent="text-emerald-400" />
        <KpiCard label="Baixa Dificuldade" value={CONTENT_GAPS.filter((g) => g.dificuldadeSEO === "baixa").length} accent="text-blue-400" sub="wins rápidos" />
      </div>

      <div className="grid gap-3">
        {sorted.map((gap: ContentGap) => (
          <div key={gap.id} className="bg-[#16161d] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-mono text-slate-600">{gap.id}</span>
                  <Badge className={
                    gap.tipo === "artigo" ? "bg-blue-900/40 text-blue-300" :
                    gap.tipo === "lp" ? "bg-rose-900/40 text-rose-300" :
                    "bg-violet-900/40 text-violet-300"
                  }>
                    {gap.tipo === "artigo" ? "📝 Artigo" : gap.tipo === "lp" ? "🎯 LP" : "📊 Pág SEO"}
                  </Badge>
                  <Badge className="bg-slate-800 text-slate-400">{gap.cluster}</Badge>
                  <Badge className={
                    gap.status === "Publicado" ? "bg-emerald-900/40 text-emerald-300" :
                    gap.status === "Em Produção" ? "bg-amber-900/40 text-amber-300" :
                    gap.status === "Brief Gerado" ? "bg-blue-900/40 text-blue-300" :
                    "bg-slate-700 text-slate-400"
                  }>
                    {gap.status}
                  </Badge>
                </div>
                <h3 className="text-white font-medium text-sm mb-2">{gap.topico}</h3>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>🔗 {gap.perguntasRelacionadas.length} perguntas ligadas</span>
                  <span>📈 ~{gap.volumeEstimado.toLocaleString("pt-BR")} vol/mês</span>
                  <span className={
                    gap.dificuldadeSEO === "baixa" ? "text-emerald-400" :
                    gap.dificuldadeSEO === "media" ? "text-amber-400" : "text-red-400"
                  }>
                    Dificuldade: {gap.dificuldadeSEO}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-lg font-bold ${GAP_COLORS[gap.oportunidade]}`}>
                  {gap.oportunidade === "alta" ? "↑↑" : gap.oportunidade === "media" ? "→" : "↓"}
                </p>
                <p className="text-xs text-slate-600">{gap.oportunidade}</p>
              </div>
            </div>

            {/* Mini volume bar */}
            <div className="mt-3 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${gap.oportunidade === "alta" ? "bg-emerald-500" : gap.oportunidade === "media" ? "bg-amber-500" : "bg-slate-600"}`}
                style={{ width: `${Math.min(100, (gap.volumeEstimado / 3100) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── BRIEFS TAB ───────────────────────────────────────────────────────────────

function BriefsTab() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4">
        <p className="text-xs text-blue-300">
          <span className="font-semibold">🤖 Gerado pelo AI Content Engine.</span> Cada brief foi criado automaticamente a partir das perguntas mais frequentes dos clientes. Pronto para passar para o editor ou gerar com IA.
        </p>
      </div>

      {ARTICLE_BRIEFS.map((brief: ArticleBrief) => (
        <div key={brief.id} className="bg-[#16161d] border border-white/5 rounded-xl overflow-hidden">
          {/* Header */}
          <button
            onClick={() => setExpanded(expanded === brief.id ? null : brief.id)}
            className="w-full p-4 text-left hover:bg-white/2 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-mono text-slate-600">{brief.id}</span>
                  <Badge className="bg-blue-900/40 text-blue-300">{brief.cluster}</Badge>
                  <Badge className={
                    brief.status === "Publicado" ? "bg-emerald-900/40 text-emerald-300" :
                    brief.status === "Aprovado" ? "bg-teal-900/40 text-teal-300" :
                    "bg-amber-900/40 text-amber-300"
                  }>
                    {brief.status}
                  </Badge>
                </div>
                <h3 className="text-white font-semibold text-sm">{brief.titulo}</h3>
                <p className="text-xs text-slate-500 mt-1">KW: <span className="text-slate-400">{brief.kwPrincipal}</span></p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-emerald-400 font-bold text-sm">+{brief.estimativaTrafico.toLocaleString("pt-BR")}</p>
                <p className="text-xs text-slate-600">visitas/mês</p>
                <p className="text-xs text-slate-600 mt-0.5">{brief.estimativaLeads} leads/mês</p>
              </div>
            </div>
            <div className="mt-2 text-right text-xs text-slate-600">
              {expanded === brief.id ? "▲ fechar" : "▼ ver brief completo"}
            </div>
          </button>

          {/* Expanded */}
          {expanded === brief.id && (
            <div className="border-t border-white/5 p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase mb-1">Persona</p>
                  <p className="text-sm text-slate-300">{brief.persona}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase mb-1">Intenção</p>
                  <p className="text-sm text-slate-300">{brief.intencao}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase mb-2">KWs Secundárias</p>
                <div className="flex flex-wrap gap-1.5">
                  {brief.kwSecundarias.map((kw, i) => (
                    <Badge key={i} className="bg-slate-800 text-slate-400">{kw}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase mb-2">Outline (H2s)</p>
                <ol className="space-y-1">
                  {brief.outline.map((h2, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-slate-600 shrink-0 w-4 text-right">{i + 1}.</span>
                      <span>{h2}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-xs text-slate-500 uppercase mb-1">CTA Recomendado</p>
                <p className="text-sm text-slate-300 italic">&ldquo;{brief.cta}&rdquo;</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase mb-1">Links Internos Sugeridos</p>
                <div className="flex flex-wrap gap-1.5">
                  {brief.linksInternos.map((slug, i) => (
                    <Link key={i} href={`/blog/${slug}`} className="text-xs text-blue-400 hover:underline">
                      /blog/{slug}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-lg p-3">
                <p className="text-xs text-emerald-400">
                  <span className="font-semibold">Impacto estimado:</span> +{brief.estimativaTrafico.toLocaleString("pt-BR")} visitas/mês · +{brief.estimativaLeads} leads/mês
                  · Gerado automaticamente em {brief.geradoEm}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── SEO OPPORTUNITIES TAB ────────────────────────────────────────────────────

function SEOOpportunitiesTab() {
  const byTipo = SEO_OPPORTUNITIES.reduce((acc, op) => {
    if (!acc[op.tipo]) acc[op.tipo] = [];
    acc[op.tipo].push(op);
    return acc;
  }, {} as Record<string, SEOOpportunity[]>);

  const tipoColors: Record<string, string> = {
    "Motor 1 — Cidade": "bg-blue-900/40 text-blue-300",
    "Motor 2 — Serviço": "bg-teal-900/40 text-teal-300",
    "Motor 3 — Problema": "bg-violet-900/40 text-violet-300",
    "Motor 4 — Combinação": "bg-purple-900/40 text-purple-300",
    "LP": "bg-rose-900/40 text-rose-300",
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <KpiCard label="Oportunidades detectadas" value={SEO_OPPORTUNITIES.length} />
        <KpiCard
          label="Volume total estimado"
          value={SEO_OPPORTUNITIES.reduce((s, o) => s + o.volumeEstimado, 0).toLocaleString("pt-BR")}
          sub="buscas/mês potenciais"
          accent="text-violet-400"
        />
        <KpiCard label="Prioridade P0" value={SEO_OPPORTUNITIES.filter((o) => o.prioridade === "P0").length} accent="text-rose-400" sub="ação imediata" />
      </div>

      {Object.entries(byTipo).map(([tipo, ops]) => (
        <div key={tipo}>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{tipo}</h3>
          <div className="grid gap-2">
            {(ops as SEOOpportunity[]).map((op) => (
              <div key={op.id} className="bg-[#16161d] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Badge className={tipoColors[op.tipo] ?? "bg-slate-700 text-slate-300"}>{op.tipo}</Badge>
                      <Badge className={op.prioridade === "P0" ? "bg-red-900/60 text-red-300" : op.prioridade === "P1" ? "bg-amber-900/60 text-amber-300" : "bg-slate-700 text-slate-400"}>
                        {op.prioridade}
                      </Badge>
                      <Badge className={
                        op.status === "Publicado" ? "bg-emerald-900/40 text-emerald-300" :
                        op.status === "Planejado" ? "bg-blue-900/40 text-blue-300" :
                        "bg-slate-700 text-slate-400"
                      }>
                        {op.status}
                      </Badge>
                    </div>
                    <h4 className="text-white text-sm font-medium">{op.titulo}</h4>
                    <code className="text-xs text-slate-500 mt-0.5 block">{op.url}</code>
                    <p className="text-xs text-slate-500 mt-2 italic">Gatilho: {op.gatilho}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-bold text-violet-400">{op.volumeEstimado.toLocaleString("pt-BR")}</p>
                    <p className="text-xs text-slate-600">vol/mês</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── PIPELINE TAB ─────────────────────────────────────────────────────────────

function PipelineTab() {
  const stages: PipelineItem["status"][] = ["Detectado", "Brief", "Rascunho", "Revisão", "Publicado"];

  const byStage = stages.reduce((acc, s) => {
    acc[s] = CONTENT_PIPELINE.filter((p) => p.status === s);
    return acc;
  }, {} as Record<string, PipelineItem[]>);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-2">
        {stages.map((stage) => (
          <div key={stage} className="bg-[#16161d] border border-white/5 rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-white">{byStage[stage]?.length ?? 0}</p>
            <p className="text-xs text-slate-500 mt-0.5">{stage}</p>
          </div>
        ))}
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-5 gap-3">
        {stages.map((stage) => (
          <div key={stage} className="space-y-2">
            <div className={`rounded-lg px-2 py-1 text-xs font-medium text-center ${STATUS_COLORS[stage]}`}>
              {stage}
            </div>
            {(byStage[stage] ?? []).map((item: PipelineItem) => (
              <div key={item.id} className="bg-[#16161d] border border-white/5 rounded-lg p-3 space-y-1.5">
                <Badge className={TIPO_COLORS[item.tipo]}>{item.tipo}</Badge>
                <p className="text-xs text-slate-300 leading-tight">{item.titulo}</p>
                <div className="flex items-center justify-between">
                  <Badge className={item.prioridade === "P0" ? "bg-red-900/40 text-red-300" : item.prioridade === "P1" ? "bg-amber-900/40 text-amber-300" : "bg-slate-700 text-slate-400"}>
                    {item.prioridade}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">{item.impactoEstimado}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── OVERVIEW TAB ─────────────────────────────────────────────────────────────

function OverviewTab() {
  const stats = CONTENT_ENGINE_STATS;

  return (
    <div className="space-y-6">
      <GrowthLoopDiagram />

      <div className="grid grid-cols-4 gap-3">
        <KpiCard label="Perguntas Analisadas" value={stats.perguntasAnalisadas} sub="via WhatsApp + Google" />
        <KpiCard label="Gaps Detectados" value={stats.gapsDetectados} accent="text-red-400" sub="conteúdo ausente" />
        <KpiCard label="Briefs Gerados" value={stats.briefsGerados} accent="text-blue-400" sub="prontos para produção" />
        <KpiCard label="Artigos Publicados" value={stats.artigosPublicados} accent="text-emerald-400" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <KpiCard label="Páginas SEO Ativas" value={stats.paginasSEOGeradas} accent="text-violet-400" sub="4 motores de geração" />
        <KpiCard label="Tráfego Potencial" value={`+${stats.trafegoPotencial.toLocaleString("pt-BR")}`} accent="text-teal-400" sub="visitas/mês ao completar pipeline" />
        <KpiCard label="Leads Adicionais Est." value={`+${stats.leadsAdicionais}`} accent="text-rose-400" sub="por mês após publicação" />
      </div>

      {/* Top gaps urgentes */}
      <div className="bg-[#16161d] border border-white/5 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-white mb-3">🔥 Gaps de Alta Oportunidade — Ação Imediata</h3>
        <div className="space-y-2">
          {CONTENT_GAPS.filter((g) => g.oportunidade === "alta").slice(0, 5).map((gap) => (
            <div key={gap.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-3">
                <Badge className={
                  gap.tipo === "artigo" ? "bg-blue-900/40 text-blue-300" :
                  gap.tipo === "lp" ? "bg-rose-900/40 text-rose-300" :
                  "bg-violet-900/40 text-violet-300"
                }>
                  {gap.tipo}
                </Badge>
                <span className="text-sm text-slate-300">{gap.topico}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">~{gap.volumeEstimado.toLocaleString("pt-BR")}/mês</span>
                <Badge className={
                  gap.status === "Brief Gerado" ? "bg-blue-900/40 text-blue-300" :
                  gap.status === "Em Produção" ? "bg-amber-900/40 text-amber-300" :
                  "bg-slate-700 text-slate-400"
                }>
                  {gap.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-violet-300 mb-3">📋 Próximos Passos — Iteração 2</h3>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="space-y-1.5">
            <p className="font-medium text-slate-400">Conteúdo Editorial</p>
            <p>✅ Publicar 4 briefs aprovados</p>
            <p>✅ Criar artigo: xixi de cachorro no tapete</p>
            <p>✅ Criar artigo: tênis de corrida</p>
          </div>
          <div className="space-y-1.5">
            <p className="font-medium text-slate-400">Programmatic SEO</p>
            <p>⬜ Adicionar /problema/mancha-suor-camisa</p>
            <p>⬜ Adicionar /lavagem/colchao (Motor 2)</p>
            <p>⬜ Criar LP /coleta-entrega (63 perguntas/mês)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContentEnginePage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href="/growth-engine" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                ← Growth Engine
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              🤖 AI Content Engine
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Loop infinito: perguntas dos clientes → gaps detectados → briefs automáticos → artigos → SEO → mais clientes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-emerald-900/30 border border-emerald-500/20 rounded-lg px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">Engine Ativo · Iteração {CONTENT_ENGINE_STATS.loopIteracoes}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/5 mb-6 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap border-b-2 -mb-px ${
                activeTab === tab
                  ? "text-white border-violet-500"
                  : "text-slate-500 border-transparent hover:text-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "Visão Geral" && <OverviewTab />}
        {activeTab === "Perguntas" && <QuestionsTab />}
        {activeTab === "Gaps" && <GapsTab />}
        {activeTab === "Briefs" && <BriefsTab />}
        {activeTab === "Oportunidades SEO" && <SEOOpportunitiesTab />}
        {activeTab === "Pipeline" && <PipelineTab />}
      </div>
    </div>
  );
}
