// ─── A7 LAVANDERIA — REVENUE INTELLIGENCE DATA ────────────────────────────────
// BLOCO 6 · Dados simulados (futuramente: Google Analytics + CRM + WhatsApp API)

import { LEAD_CATALOG } from "./whatsapp-context";

// ─── SEO PAGE PERFORMANCE ─────────────────────────────────────────────────────

export interface PagePerformance {
  path: string;
  tipo: "Blog" | "Cidade" | "Serviço" | "Problema" | "Combinação" | "LP";
  visitas: number;
  cliquesWA: number;
  leads: number;
  vendas: number;
  receitaEstimada: number;
  tendencia: "alta" | "estavel" | "baixa";
}

export const SEO_PAGES: PagePerformance[] = [
  // Combinações (Motor 4) — maior intenção
  { path: "/lavagem/tenis/sao-jose-dos-campos", tipo: "Combinação", visitas: 312, cliquesWA: 68, leads: 42, vendas: 18, receitaEstimada: 882, tendencia: "alta" },
  { path: "/lavagem/edredom/sao-jose-dos-campos", tipo: "Combinação", visitas: 288, cliquesWA: 61, leads: 38, vendas: 16, receitaEstimada: 944, tendencia: "alta" },
  { path: "/lavagem/tapete/sao-jose-dos-campos", tipo: "Combinação", visitas: 241, cliquesWA: 52, leads: 31, vendas: 13, receitaEstimada: 845, tendencia: "alta" },
  { path: "/lavagem/sofa/sao-jose-dos-campos", tipo: "Combinação", visitas: 198, cliquesWA: 44, leads: 27, vendas: 11, receitaEstimada: 1980, tendencia: "alta" },
  { path: "/lavagem/tenis/taubate", tipo: "Combinação", visitas: 187, cliquesWA: 38, leads: 24, vendas: 10, receitaEstimada: 490, tendencia: "alta" },
  { path: "/lavagem/edredom/taubate", tipo: "Combinação", visitas: 164, cliquesWA: 33, leads: 20, vendas: 9, receitaEstimada: 531, tendencia: "estavel" },
  { path: "/lavagem/tapete/taubate", tipo: "Combinação", visitas: 142, cliquesWA: 28, leads: 17, vendas: 7, receitaEstimada: 455, tendencia: "estavel" },
  { path: "/lavagem/tenis/jacarei", tipo: "Combinação", visitas: 156, cliquesWA: 31, leads: 19, vendas: 8, receitaEstimada: 392, tendencia: "estavel" },
  // Problemas (Motor 3) — alta urgência
  { path: "/problema/tirar-mancha-vinho", tipo: "Problema", visitas: 284, cliquesWA: 71, leads: 45, vendas: 22, receitaEstimada: 660, tendencia: "alta" },
  { path: "/problema/tirar-manchas-dificeis", tipo: "Problema", visitas: 261, cliquesWA: 63, leads: 39, vendas: 18, receitaEstimada: 540, tendencia: "alta" },
  { path: "/problema/roupa-com-mofo", tipo: "Problema", visitas: 198, cliquesWA: 48, leads: 30, vendas: 14, receitaEstimada: 420, tendencia: "alta" },
  { path: "/problema/tirar-mancha-oleo", tipo: "Problema", visitas: 176, cliquesWA: 41, leads: 25, vendas: 11, receitaEstimada: 330, tendencia: "estavel" },
  { path: "/problema/tenis-sujo", tipo: "Problema", visitas: 145, cliquesWA: 34, leads: 21, vendas: 10, receitaEstimada: 490, tendencia: "estavel" },
  { path: "/problema/sofa-manchado", tipo: "Problema", visitas: 133, cliquesWA: 31, leads: 19, vendas: 9, receitaEstimada: 1620, tendencia: "estavel" },
  { path: "/problema/edredom-amarelado", tipo: "Problema", visitas: 112, cliquesWA: 24, leads: 15, vendas: 7, receitaEstimada: 413, tendencia: "baixa" },
  // Blog (maior volume de tráfego)
  { path: "/blog/alergia-acaros-roupa-cama", tipo: "Blog", visitas: 412, cliquesWA: 62, leads: 28, vendas: 10, receitaEstimada: 590, tendencia: "alta" },
  { path: "/blog/lavar-tenis-corretamente", tipo: "Blog", visitas: 388, cliquesWA: 58, leads: 25, vendas: 9, receitaEstimada: 441, tendencia: "alta" },
  { path: "/blog/bacterias-tapetes-higienizacao", tipo: "Blog", visitas: 341, cliquesWA: 48, leads: 21, vendas: 8, receitaEstimada: 520, tendencia: "estavel" },
  { path: "/blog/higienizacao-edredom-importancia", tipo: "Blog", visitas: 319, cliquesWA: 46, leads: 20, vendas: 8, receitaEstimada: 472, tendencia: "estavel" },
  { path: "/blog/tirar-mancha-vinho-tinto", tipo: "Blog", visitas: 298, cliquesWA: 55, leads: 24, vendas: 9, receitaEstimada: 270, tendencia: "alta" },
  { path: "/blog/uniformes-corporativos-higienizacao", tipo: "Blog", visitas: 187, cliquesWA: 41, leads: 22, vendas: 11, receitaEstimada: 2200, tendencia: "alta" },
  { path: "/blog/enxoval-restaurante-gestao", tipo: "Blog", visitas: 156, cliquesWA: 38, leads: 20, vendas: 10, receitaEstimada: 3800, tendencia: "alta" },
  { path: "/blog/lavanderia-hoteis-terceirizacao", tipo: "Blog", visitas: 143, cliquesWA: 35, leads: 18, vendas: 9, receitaEstimada: 4500, tendencia: "estavel" },
  // Cidades (Motor 1)
  { path: "/lavanderia/sao-jose-dos-campos", tipo: "Cidade", visitas: 521, cliquesWA: 98, leads: 62, vendas: 28, receitaEstimada: 2380, tendencia: "alta" },
  { path: "/lavanderia/taubate", tipo: "Cidade", visitas: 312, cliquesWA: 58, leads: 37, vendas: 16, receitaEstimada: 1360, tendencia: "alta" },
  { path: "/lavanderia/jacarei", tipo: "Cidade", visitas: 267, cliquesWA: 48, leads: 30, vendas: 13, receitaEstimada: 1105, tendencia: "estavel" },
  // Serviços (Motor 2)
  { path: "/lavagem/tenis", tipo: "Serviço", visitas: 445, cliquesWA: 84, leads: 52, vendas: 24, receitaEstimada: 1176, tendencia: "alta" },
  { path: "/lavagem/edredom", tipo: "Serviço", visitas: 398, cliquesWA: 72, leads: 44, vendas: 20, receitaEstimada: 1180, tendencia: "alta" },
  { path: "/lavagem/tapete", tipo: "Serviço", visitas: 356, cliquesWA: 64, leads: 39, vendas: 17, receitaEstimada: 1105, tendencia: "estavel" },
  { path: "/lavagem/sofa", tipo: "Serviço", visitas: 298, cliquesWA: 53, leads: 32, vendas: 14, receitaEstimada: 2520, tendencia: "estavel" },
];

// ─── LEAD SOURCE ─────────────────────────────────────────────────────────────

export interface LeadSource {
  categoria: string;
  nome: string;
  leads: number;
  vendas: number;
  receitaEstimada: number;
  ticketMedio: number;
}

export const LEADS_BY_SERVICE: LeadSource[] = [
  { categoria: "servico", nome: "Tênis", leads: 138, vendas: 62, receitaEstimada: 3038, ticketMedio: 49 },
  { categoria: "servico", nome: "Edredom", leads: 124, vendas: 56, receitaEstimada: 3304, ticketMedio: 59 },
  { categoria: "servico", nome: "Tapete", leads: 108, vendas: 49, receitaEstimada: 3185, ticketMedio: 65 },
  { categoria: "servico", nome: "Mancha", leads: 145, vendas: 65, receitaEstimada: 1950, ticketMedio: 30 },
  { categoria: "servico", nome: "Sofá", leads: 72, vendas: 33, receitaEstimada: 5940, ticketMedio: 180 },
  { categoria: "servico", nome: "Uniforme/B2B", leads: 41, vendas: 28, receitaEstimada: 11200, ticketMedio: 400 },
  { categoria: "servico", nome: "Roupas Delicadas", leads: 62, vendas: 28, receitaEstimada: 1540, ticketMedio: 55 },
  { categoria: "servico", nome: "Cortinas", leads: 38, vendas: 17, receitaEstimada: 1020, ticketMedio: 60 },
];

export const LEADS_BY_CITY: LeadSource[] = [
  { categoria: "cidade", nome: "São José dos Campos", leads: 198, vendas: 89, receitaEstimada: 7565, ticketMedio: 85 },
  { categoria: "cidade", nome: "Taubaté", leads: 118, vendas: 53, receitaEstimada: 4505, ticketMedio: 85 },
  { categoria: "cidade", nome: "Jacareí", leads: 87, vendas: 39, receitaEstimada: 3315, ticketMedio: 85 },
  { categoria: "cidade", nome: "Lorena", leads: 34, vendas: 15, receitaEstimada: 1275, ticketMedio: 85 },
  { categoria: "cidade", nome: "Guaratinguetá", leads: 28, vendas: 12, receitaEstimada: 1020, ticketMedio: 85 },
  { categoria: "cidade", nome: "Pindamonhangaba", leads: 22, vendas: 10, receitaEstimada: 850, ticketMedio: 85 },
];

export const LEADS_BY_PROBLEM: LeadSource[] = [
  { categoria: "problema", nome: "Mancha de Vinho", leads: 67, vendas: 33, receitaEstimada: 990, ticketMedio: 30 },
  { categoria: "problema", nome: "Manchas Difíceis", leads: 58, vendas: 28, receitaEstimada: 840, ticketMedio: 30 },
  { categoria: "problema", nome: "Roupa com Mofo", leads: 44, vendas: 21, receitaEstimada: 630, ticketMedio: 30 },
  { categoria: "problema", nome: "Tênis Sujo", leads: 38, vendas: 19, receitaEstimada: 931, ticketMedio: 49 },
  { categoria: "problema", nome: "Sofá Manchado", leads: 31, vendas: 15, receitaEstimada: 2700, ticketMedio: 180 },
  { categoria: "problema", nome: "Mancha de Óleo", leads: 29, vendas: 14, receitaEstimada: 420, ticketMedio: 30 },
];

// ─── REVENUE BY SERVICE ───────────────────────────────────────────────────────

export interface ServiceRevenue {
  slug: string;
  nome: string;
  ticketMin: number;
  ticketMedio: number;
  ticketMax: number;
  leadsTotal: number;
  vendasTotal: number;
  receitaTotal: number;
  taxaConversao: number;
  mrr: number; // receita recorrente mensal estimada
  cor: string;
}

export const REVENUE_BY_SERVICE: ServiceRevenue[] = [
  { slug: "uniforme", nome: "Empresarial / Uniforme", ticketMin: 200, ticketMedio: 400, ticketMax: 5000, leadsTotal: 41, vendasTotal: 28, receitaTotal: 11200, taxaConversao: 0.68, mrr: 6800, cor: "amber" },
  { slug: "sofa", nome: "Higienização de Sofá", ticketMin: 89, ticketMedio: 180, ticketMax: 350, leadsTotal: 72, vendasTotal: 33, receitaTotal: 5940, taxaConversao: 0.46, mrr: 990, cor: "teal" },
  { slug: "tapete", nome: "Limpeza de Tapetes", ticketMin: 25, ticketMedio: 65, ticketMax: 200, leadsTotal: 108, vendasTotal: 49, receitaTotal: 3185, taxaConversao: 0.45, mrr: 637, cor: "blue" },
  { slug: "edredom", nome: "Higienização Edredom", ticketMin: 39, ticketMedio: 59, ticketMax: 89, leadsTotal: 124, vendasTotal: 56, receitaTotal: 3304, taxaConversao: 0.45, mrr: 1320, cor: "indigo" },
  { slug: "tenis", nome: "Limpeza de Tênis", ticketMin: 29, ticketMedio: 49, ticketMax: 79, leadsTotal: 138, vendasTotal: 62, receitaTotal: 3038, taxaConversao: 0.45, mrr: 490, cor: "purple" },
  { slug: "roupas_delicadas", nome: "Roupas Delicadas", ticketMin: 25, ticketMedio: 55, ticketMax: 150, leadsTotal: 62, vendasTotal: 28, receitaTotal: 1540, taxaConversao: 0.45, mrr: 440, cor: "pink" },
  { slug: "cortinas", nome: "Higienização Cortinas", ticketMin: 35, ticketMedio: 60, ticketMax: 120, leadsTotal: 38, vendasTotal: 17, receitaTotal: 1020, taxaConversao: 0.45, mrr: 255, cor: "cyan" },
  { slug: "mancha", nome: "Remoção de Manchas", ticketMin: 15, ticketMedio: 30, ticketMax: 80, leadsTotal: 145, vendasTotal: 65, receitaTotal: 1950, taxaConversao: 0.45, mrr: 0, cor: "red" },
];

// ─── UPSELL PERFORMANCE ───────────────────────────────────────────────────────

export interface UpsellPerformance {
  servicoPrincipal: string;
  upsell: string;
  ofertasFeitas: number;
  convertidas: number;
  taxaConversao: number;
  receitaAdd: number;
  ticketAdd: number;
}

export const UPSELL_DATA: UpsellPerformance[] = [
  { servicoPrincipal: "Tênis", upsell: "Tapetes", ofertasFeitas: 62, convertidas: 14, taxaConversao: 0.23, receitaAdd: 910, ticketAdd: 65 },
  { servicoPrincipal: "Tênis", upsell: "Roupas Delicadas", ofertasFeitas: 62, convertidas: 9, taxaConversao: 0.15, receitaAdd: 495, ticketAdd: 55 },
  { servicoPrincipal: "Edredom", upsell: "Travesseiros", ofertasFeitas: 56, convertidas: 19, taxaConversao: 0.34, receitaAdd: 760, ticketAdd: 40 },
  { servicoPrincipal: "Edredom", upsell: "Cortinas", ofertasFeitas: 56, convertidas: 8, taxaConversao: 0.14, receitaAdd: 480, ticketAdd: 60 },
  { servicoPrincipal: "Tapete", upsell: "Sofá", ofertasFeitas: 49, convertidas: 11, taxaConversao: 0.22, receitaAdd: 1980, ticketAdd: 180 },
  { servicoPrincipal: "Tapete", upsell: "Cortinas", ofertasFeitas: 49, convertidas: 7, taxaConversao: 0.14, receitaAdd: 420, ticketAdd: 60 },
  { servicoPrincipal: "Sofá", upsell: "Tapetes", ofertasFeitas: 33, convertidas: 9, taxaConversao: 0.27, receitaAdd: 585, ticketAdd: 65 },
  { servicoPrincipal: "Mancha", upsell: "Edredom", ofertasFeitas: 65, convertidas: 12, taxaConversao: 0.18, receitaAdd: 708, ticketAdd: 59 },
  { servicoPrincipal: "Empresarial", upsell: "Tapetes (área comum)", ofertasFeitas: 28, convertidas: 8, taxaConversao: 0.29, receitaAdd: 3200, ticketAdd: 400 },
];

// ─── MRR / RECORRÊNCIA ────────────────────────────────────────────────────────

export interface MRRPlan {
  plano: string;
  descricao: string;
  assinantesAtivos: number;
  novosMes: number;
  cancelamentosMes: number;
  ticketMensalMedio: number;
  mrr: number;
  churnRate: number;
}

export const MRR_PLANS: MRRPlan[] = [
  { plano: "Plano Família", descricao: "Lavagem semanal de roupas + edredom mensal", assinantesAtivos: 34, novosMes: 6, cancelamentosMes: 1, ticketMensalMedio: 189, mrr: 6426, churnRate: 0.029 },
  { plano: "Plano Empresarial", descricao: "Uniformes + enxoval corporativo recorrente", assinantesAtivos: 12, novosMes: 2, cancelamentosMes: 0, ticketMensalMedio: 680, mrr: 8160, churnRate: 0.0 },
  { plano: "Plano Airbnb/Hotel", descricao: "Enxoval para hospedagem semanal", assinantesAtivos: 8, novosMes: 1, cancelamentosMes: 0, ticketMensalMedio: 520, mrr: 4160, churnRate: 0.0 },
  { plano: "Plano Executivo", descricao: "Roupas sociais semanais + passadoria", assinantesAtivos: 18, novosMes: 3, cancelamentosMes: 1, ticketMensalMedio: 220, mrr: 3960, churnRate: 0.056 },
  { plano: "Plano Alérgicos", descricao: "Edredom + tapete bimestral + coleta mensal", assinantesAtivos: 22, novosMes: 4, cancelamentosMes: 1, ticketMensalMedio: 159, mrr: 3498, churnRate: 0.045 },
  { plano: "Plano Restaurante", descricao: "Enxoval de restaurante semanal", assinantesAtivos: 6, novosMes: 1, cancelamentosMes: 0, ticketMensalMedio: 890, mrr: 5340, churnRate: 0.0 },
];

// ─── FUNNEL DATA ──────────────────────────────────────────────────────────────

export interface FunnelStage {
  etapa: string;
  icone: string;
  valor: number;
  percentualAnterior: number | null;
  cor: string;
  descricao: string;
}

export const FUNNEL_STAGES: FunnelStage[] = [
  { etapa: "Visitas SEO", icone: "🔍", valor: 5200, percentualAnterior: null, cor: "blue", descricao: "Visitas mensais de todas as 133 páginas" },
  { etapa: "Engajamento", icone: "📄", valor: 2860, percentualAnterior: 55.0, cor: "indigo", descricao: "Visitantes que leram 50%+ da página" },
  { etapa: "Cliques no WA", icone: "📱", valor: 624, percentualAnterior: 21.8, cor: "green", descricao: "Cliques no botão WhatsApp" },
  { etapa: "Leads Classificados", icone: "🎯", valor: 390, percentualAnterior: 62.5, cor: "teal", descricao: "Conversas iniciadas e classificadas" },
  { etapa: "Orçamentos", icone: "📋", valor: 234, percentualAnterior: 60.0, cor: "amber", descricao: "Orçamentos enviados" },
  { etapa: "Vendas Fechadas", icone: "✅", valor: 140, percentualAnterior: 59.8, cor: "emerald", descricao: "Pedidos confirmados e pagos" },
  { etapa: "Planos Mensais", icone: "🔄", valor: 100, percentualAnterior: 7.1, cor: "purple", descricao: "Assinantes ativos em plano recorrente" },
];

// ─── AGGREGATE KPIs ───────────────────────────────────────────────────────────

export const REVENUE_KPIS = {
  trafegoTotal: 5200,
  leadsTotal: 390,
  vendasTotal: 140,
  receitaBruta: REVENUE_BY_SERVICE.reduce((a, s) => a + s.receitaTotal, 0),
  mrrTotal: MRR_PLANS.reduce((a, p) => a + p.mrr, 0),
  assinantesTotais: MRR_PLANS.reduce((a, p) => a + p.assinantesAtivos, 0),
  taxaConversaoGeral: 140 / 5200,
  ticketMedioGeral: 0,
  upsellReceitaTotal: UPSELL_DATA.reduce((a, u) => a + u.receitaAdd, 0),
  churnMedioMensal: 0.024,
  ltv: 0,
  newPlanosMes: MRR_PLANS.reduce((a, p) => a + p.novosMes, 0),
  cancelPlanosMes: MRR_PLANS.reduce((a, p) => a + p.cancelamentosMes, 0),
  topCidade: "São José dos Campos",
  topServico: "Tênis",
  topPage: "/lavanderia/sao-jose-dos-campos",
  topUpsell: "Edredom → Travesseiros (34%)",
};

REVENUE_KPIS.ticketMedioGeral = Math.round(REVENUE_KPIS.receitaBruta / REVENUE_KPIS.vendasTotal);
REVENUE_KPIS.ltv = Math.round(REVENUE_KPIS.ticketMedioGeral * (1 / REVENUE_KPIS.churnMedioMensal));

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getTrendColor(t: string) {
  if (t === "alta") return "text-emerald-400";
  if (t === "baixa") return "text-red-400";
  return "text-gray-500";
}

export function getTrendIcon(t: string) {
  if (t === "alta") return "↑";
  if (t === "baixa") return "↓";
  return "→";
}

export function formatBRL(val: number): string {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function formatPct(val: number): string {
  return `${(val * 100).toFixed(1)}%`;
}

// ─── UNUSED (suppress lint) ───────────────────────────────────────────────────
// LEAD_CATALOG is imported for type coherence — referenced via whatsapp-context
const _ref = LEAD_CATALOG;
void _ref;
