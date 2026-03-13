"use client";

import { useState, useCallback } from "react";
import {
  classifyLead,
  getUpsellSuggestions,
  getRecorrenciaSuggestion,
  REPLY_TEMPLATES,
  LEAD_CATALOG,
  getContextualMessage,
  TOP_SERVICES_BY_TICKET,
  AI_ENGINE_STATS,
} from "@/lib/whatsapp-context";
import type { ClassifiedLead } from "@/lib/whatsapp-context";

// ─── COPY BUTTON ──────────────────────────────────────────────────────────────

function CopyButton({ text, label = "Copiar" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={copy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        copied
          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
          : "bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/[0.08]"
      }`}
    >
      {copied ? "✓ Copiado!" : `📋 ${label}`}
    </button>
  );
}

// ─── CONFIDENCE BAR ───────────────────────────────────────────────────────────

function ConfidenceBar({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  const color = pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-gray-600";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-500 w-8 text-right">{pct}%</span>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "classifier", label: "Classificar Lead", icone: "🎯" },
  { id: "templates", label: "Respostas Rápidas", icone: "⚡" },
  { id: "context", label: "Gerar Links WA", icone: "🔗" },
  { id: "pricing", label: "Tabela de Preços", icone: "💰" },
  { id: "stats", label: "Engine Stats", icone: "📊" },
];

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function SalesAssistant() {
  const [activeTab, setActiveTab] = useState("classifier");
  const [inputMessage, setInputMessage] = useState("");
  const [cityHint, setCityHint] = useState("");
  const [classified, setClassified] = useState<ClassifiedLead | null>(null);
  const [contextService, setContextService] = useState("");
  const [contextCity, setContextCity] = useState("");
  const [contextProblem, setContextProblem] = useState("");

  const handleClassify = () => {
    if (!inputMessage.trim()) return;
    setClassified(classifyLead(inputMessage, cityHint || undefined));
  };

  const generatedMsg = getContextualMessage({
    service: contextService || undefined,
    city: contextCity || undefined,
    problem: contextProblem || undefined,
  });

  const waUrl = `https://wa.me/5512974128390?text=${encodeURIComponent(generatedMsg)}`;

  return (
    <div className="min-h-screen bg-[#0f0f13] text-gray-100 font-sans">
      {/* Header */}
      <div className="border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-sm font-black text-white">
            AI
          </div>
          <div>
            <p className="text-sm font-semibold text-white">A7 Sales Assistant</p>
            <p className="text-[10px] text-gray-500">AI Sales Engine · BLOCO 5</p>
          </div>
        </div>
        <a
          href="/growth-engine"
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          ← Growth Engine
        </a>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/[0.06] px-6">
        <div className="flex gap-1 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? "border-green-500 text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              <span>{tab.icone}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* ─── TAB 1: CLASSIFIER ─────────────────────────────────────────── */}
        {activeTab === "classifier" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-white mb-1">Classificar mensagem do cliente</h2>
              <p className="text-xs text-gray-500">Cole a mensagem recebida no WhatsApp. O sistema classifica o lead e sugere a melhor resposta.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <label className="text-xs text-gray-500 block mb-2">Mensagem do cliente</label>
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ex: Olá, quanto custa limpar um tapete? Tenho um cachorro em casa..."
                  rows={4}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-500/40 resize-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-2">Cidade (opcional)</label>
                <input
                  value={cityHint}
                  onChange={(e) => setCityHint(e.target.value)}
                  placeholder="Ex: São José dos Campos"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-500/40 mb-3"
                />
                <button
                  onClick={handleClassify}
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-colors text-sm"
                >
                  Classificar Lead →
                </button>
              </div>
            </div>

            {classified && (
              <div className="space-y-4">
                {/* Classification result */}
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-white">{classified.profile.label}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          classified.urgencia === "alta" ? "bg-red-500/20 text-red-400" :
                          classified.urgencia === "media" ? "bg-amber-500/20 text-amber-400" :
                          "bg-gray-700 text-gray-400"
                        }`}>
                          Urgência {classified.urgencia}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Palavras identificadas: {classified.matchedKeywords.length > 0
                          ? classified.matchedKeywords.map(k => `"${k}"`).join(", ")
                          : "nenhuma — classificação genérica"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-400">R${classified.estimatedTicket}</p>
                      <p className="text-[10px] text-gray-600">ticket estimado</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-1">Confiança da classificação</p>
                    <ConfidenceBar value={classified.confidence} />
                  </div>
                </div>

                {/* Suggested reply */}
                <div className="bg-white/[0.04] border border-green-500/20 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-semibold text-green-400">💬 Resposta sugerida</h3>
                    <CopyButton text={classified.suggestedReply} label="Copiar resposta" />
                  </div>
                  <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">{classified.suggestedReply}</p>
                </div>

                {/* Upsell */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] border border-amber-500/20 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-semibold text-amber-400">⬆️ Upsell sugerido</h3>
                      <CopyButton text={classified.upsellMessage} />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{classified.upsellMessage}</p>
                    <div className="mt-3 flex gap-2">
                      {getUpsellSuggestions(classified.profile.slug).map((up) => (
                        <span key={up.serviceSlug} className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded-full">
                          +R${up.estimatedAddValue} · {up.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/[0.03] border border-purple-500/20 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-semibold text-purple-400">🔄 Pitch de recorrência</h3>
                      <CopyButton text={classified.recorrenciaMessage} />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{classified.recorrenciaMessage}</p>
                    <p className="text-[10px] text-purple-400/60 mt-2">
                      MRR estimado: R${getRecorrenciaSuggestion(classified.profile.slug).estimatedMonthlyValue}/mês
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── TAB 2: TEMPLATES ──────────────────────────────────────────── */}
        {activeTab === "templates" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-white mb-1">Biblioteca de Respostas Rápidas</h2>
              <p className="text-xs text-gray-500">Respostas prontas para as situações mais comuns no WhatsApp. Clique em copiar e ajuste conforme necessário.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {REPLY_TEMPLATES.map((tmpl) => (
                <div key={tmpl.id} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-100">{tmpl.label}</p>
                      <p className="text-[11px] text-gray-600 mt-0.5">{tmpl.situacao}</p>
                    </div>
                    <CopyButton text={tmpl.mensagem} />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-wrap">{tmpl.mensagem}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── TAB 3: CONTEXT LINKS ──────────────────────────────────────── */}
        {activeTab === "context" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-white mb-1">Gerador de Links WhatsApp Contextuais</h2>
              <p className="text-xs text-gray-500">Gere links com mensagem pré-preenchida para campanhas, anúncios ou QR codes.</p>
            </div>

            {/* Builder */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <label className="text-xs text-gray-500 block mb-2">Serviço</label>
                  <select
                    value={contextService}
                    onChange={(e) => setContextService(e.target.value)}
                    className="w-full bg-[#1a1a22] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-green-500/40"
                  >
                    <option value="">— Nenhum —</option>
                    <option value="edredom">Edredom</option>
                    <option value="tapete">Tapete</option>
                    <option value="tenis">Tênis</option>
                    <option value="sofa">Sofá</option>
                    <option value="cortinas">Cortinas</option>
                    <option value="roupas-delicadas">Roupas Delicadas</option>
                    <option value="uniforme">Uniforme</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-2">Cidade</label>
                  <select
                    value={contextCity}
                    onChange={(e) => setContextCity(e.target.value)}
                    className="w-full bg-[#1a1a22] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-green-500/40"
                  >
                    <option value="">— Nenhuma —</option>
                    <option value="sao-jose-dos-campos">São José dos Campos</option>
                    <option value="taubate">Taubaté</option>
                    <option value="jacarei">Jacareí</option>
                    <option value="lorena">Lorena</option>
                    <option value="guaratingueta">Guaratinguetá</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-2">Problema</label>
                  <select
                    value={contextProblem}
                    onChange={(e) => setContextProblem(e.target.value)}
                    className="w-full bg-[#1a1a22] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-green-500/40"
                  >
                    <option value="">— Nenhum —</option>
                    <option value="tirar-mancha-vinho">Mancha de vinho</option>
                    <option value="tirar-mancha-oleo">Mancha de óleo</option>
                    <option value="roupa-com-mofo">Roupa com mofo</option>
                    <option value="tenis-sujo">Tênis sujo</option>
                    <option value="sofa-manchado">Sofá manchado</option>
                  </select>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 mb-4">
                <p className="text-[10px] text-gray-600 mb-2">Mensagem gerada</p>
                <p className="text-sm text-gray-300">{generatedMsg}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <CopyButton text={generatedMsg} label="Copiar mensagem" />
                <CopyButton text={waUrl} label="Copiar link WhatsApp" />
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30 transition-colors"
                >
                  Testar no WhatsApp ↗
                </a>
              </div>
            </div>

            {/* All contextual links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Links contextuais das páginas SEO</h3>
              <div className="space-y-2">
                {[
                  { route: "/lavagem/tenis/sao-jose-dos-campos", service: "tenis", city: "sao-jose-dos-campos" },
                  { route: "/lavagem/edredom/sao-jose-dos-campos", service: "edredom", city: "sao-jose-dos-campos" },
                  { route: "/lavagem/tapete/taubate", service: "tapete", city: "taubate" },
                  { route: "/problema/tirar-mancha-vinho", problem: "tirar-mancha-vinho" },
                  { route: "/problema/roupa-com-mofo", problem: "roupa-com-mofo" },
                  { route: "/lavanderia/jacarei", city: "jacarei" },
                  { route: "/lavanderia/taubate", city: "taubate" },
                  { route: "/lavagem/sofa/sao-jose-dos-campos", service: "sofa", city: "sao-jose-dos-campos" },
                ].map((item) => {
                  const msg = getContextualMessage({ service: item.service, city: item.city, problem: item.problem });
                  return (
                    <div key={item.route} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                      <span className="text-[11px] font-mono text-blue-400 shrink-0 w-56">{item.route}</span>
                      <span className="text-[11px] text-gray-500 flex-1 truncate">{msg}</span>
                      <CopyButton text={`https://wa.me/5512974128390?text=${encodeURIComponent(msg)}`} label="Link" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 4: PRICING ────────────────────────────────────────────── */}
        {activeTab === "pricing" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-white mb-1">Tabela de Preços e Referência de Ticket</h2>
              <p className="text-xs text-gray-500">Referência rápida para o time de vendas. Use durante a conversa no WhatsApp.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    {["Serviço", "Preço Mín.", "Ticket Médio", "Preço Máx.", "Prazo", "Urgência"].map((h) => (
                      <th key={h} className="text-left text-xs text-gray-500 pb-3 pr-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {TOP_SERVICES_BY_TICKET.map((s) => (
                    <tr key={s.slug} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-6 font-medium text-gray-200">{s.label}</td>
                      <td className="py-3 pr-6 text-gray-400">R${s.ticketMin},00</td>
                      <td className="py-3 pr-6">
                        <span className="font-semibold text-emerald-400">R${s.ticketMedio}</span>
                      </td>
                      <td className="py-3 pr-6 text-gray-400">R${s.ticketMax},00</td>
                      <td className="py-3 pr-6 text-gray-400">{s.prazo}</td>
                      <td className="py-3 pr-6">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          s.urgencia === "alta" ? "bg-red-500/20 text-red-400" :
                          s.urgencia === "media" ? "bg-amber-500/20 text-amber-400" :
                          "bg-gray-700 text-gray-400"
                        }`}>
                          {s.urgencia}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Upsell map */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Mapa de Upsell por Serviço</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {TOP_SERVICES_BY_TICKET.slice(0, 6).map((s) => {
                  const upsells = getUpsellSuggestions(s.slug);
                  const recorrencia = getRecorrenciaSuggestion(s.slug);
                  return (
                    <div key={s.slug} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <p className="text-xs font-semibold text-gray-200 mb-2">{s.label}</p>
                      <div className="space-y-1 mb-3">
                        {upsells.map((u) => (
                          <div key={u.serviceSlug} className="flex items-center justify-between text-[10px]">
                            <span className="text-amber-400">↑ {u.label}</span>
                            <span className="text-gray-600">+R${u.estimatedAddValue}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-white/[0.04] pt-2">
                        <p className="text-[10px] text-purple-400">♻ Recorrência: R${recorrencia.estimatedMonthlyValue}/mês</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 5: STATS ──────────────────────────────────────────────── */}
        {activeTab === "stats" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-white mb-1">AI Sales Engine — Projeções</h2>
              <p className="text-xs text-gray-500">Estimativas baseadas nos 133 páginas estáticas e métricas do setor de lavanderia no Brasil.</p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: "Páginas SEO", valor: AI_ENGINE_STATS.totalPages, cor: "blue", sub: "133 estáticas" },
                { label: "Tráfego/mês", valor: `${(AI_ENGINE_STATS.estimatedTotalMonthlyTraffic / 1000).toFixed(1)}k`, cor: "indigo", sub: "estimado ao estabilizar" },
                { label: "Leads/mês", valor: AI_ENGINE_STATS.estimatedLeadsPerMonth, cor: "green", sub: "conversão 3%" },
                { label: "Vendas/mês", valor: AI_ENGINE_STATS.estimatedMonthlySales, cor: "emerald", sub: "60% de fechamento" },
                { label: "Ticket Médio", valor: `R$${AI_ENGINE_STATS.estimatedAverageTicket}`, cor: "amber", sub: "por pedido" },
                { label: "MRR Projetado", valor: `R$${AI_ENGINE_STATS.estimatedMRR.toLocaleString("pt-BR")}`, cor: "purple", sub: "receita mensal" },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                  <p className="text-[10px] text-gray-500 mb-1">{kpi.label}</p>
                  <p className="text-xl font-bold text-white">{kpi.valor}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Motors breakdown */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Contribuição por Motor SEO</h3>
              <div className="space-y-4">
                {[
                  { label: "Motor 3 — Problemas", clicks: AI_ENGINE_STATS.motorProblema.estimatedMonthlyClicks, pages: AI_ENGINE_STATS.motorProblema.pages, cor: "bg-red-500", note: "Alta intenção de compra" },
                  { label: "Blog — Artigos", clicks: AI_ENGINE_STATS.blog.estimatedMonthlyClicks, pages: AI_ENGINE_STATS.blog.pages, cor: "bg-green-500", note: "Maior volume de tráfego" },
                  { label: "Motor 1 — Cidades", clicks: AI_ENGINE_STATS.motorCidade.estimatedMonthlyClicks, pages: AI_ENGINE_STATS.motorCidade.pages, cor: "bg-blue-500", note: "Conversão local alta" },
                  { label: "Motor 2 — Serviços", clicks: AI_ENGINE_STATS.motorServico.estimatedMonthlyClicks, pages: AI_ENGINE_STATS.motorServico.pages, cor: "bg-amber-500", note: "Intenção comercial" },
                  { label: "Motor 4 — Combinações", clicks: AI_ENGINE_STATS.motorCombinacao.estimatedMonthlyClicks, pages: AI_ENGINE_STATS.motorCombinacao.pages, cor: "bg-purple-500", note: "Ultra-específico" },
                ].map((motor) => {
                  const maxClicks = AI_ENGINE_STATS.estimatedTotalMonthlyTraffic;
                  return (
                    <div key={motor.label}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-300">{motor.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-600">{motor.pages} págs</span>
                          <span className="text-gray-400 font-medium">{motor.clicks.toLocaleString("pt-BR")} cliques/mês</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className={`h-full ${motor.cor} rounded-full`} style={{ width: `${(motor.clicks / maxClicks) * 100}%` }} />
                        </div>
                        <span className="text-[10px] text-gray-600 w-28 text-right">{motor.note}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lead catalog summary */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Perfis de Lead por Serviço</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.values(LEAD_CATALOG).filter(p => p.slug !== "geral").map((profile) => (
                  <div key={profile.slug} className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-200">{profile.label}</p>
                      <p className="text-[10px] text-gray-600">Prazo: {profile.prazo} · Urgência: {profile.urgencia}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-400">R${profile.ticketMedio}</p>
                      <p className="text-[10px] text-gray-600">R${profile.ticketMin}–R${profile.ticketMax}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
