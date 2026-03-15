"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type FunnelStage = "Awareness" | "Consideration" | "Decisão" | "Booking" | "Retenção" | "Referral";
type ClusterKey = "Saúde & Higiene" | "Manchas" | "Tênis" | "Roupas Especiais" | "Tapetes & Casa" | "Sustentabilidade" | "Organização" | "B2B" | "Local";

// ─── LP STATUS MAP ────────────────────────────────────────────────────────────

const LP_ACTIVE: Record<string, boolean> = {
  "/higienizacao-edredom": true, "/tenis": true, "/tapetes": true, "/sofas": true,
  "/cortinas": true, "/remocao-manchas": true, "/roupas-delicadas": true,
  "/lavagem-roupas": true, "/plano-mensal": true, "/couro-pecas-especiais": true,
  "/para-casais": true, "/para-maes": true, "/para-executivos": true,
  "/para-alergicos": true, "/airbnb": true, "/premium": true, "/sustentavel": true,
  "/empresarial": true, "/restaurantes": true, "/hotelaria": true,
  "/uniformes": true, "/condominios": true, "/sao-jose-dos-campos": true,
  "/taubate": true, "/jacarei": true, "/lorena-guaratingueta": true,
  "/vale-do-paraiba": true, "/precos": true, "/como-funciona": true,
  "/lavanderia-ou-lavar-em-casa": true,
};

// ─── ARTICLES DATABASE ────────────────────────────────────────────────────────

const ARTICLES: {
  slug: string; title: string; cluster: ClusterKey; funnel: FunnelStage;
  intent: string; lp: string; monetization: string; gap: string;
}[] = [
  { slug: "alergia-acaros-roupa-cama", title: "Alergia a ácaros e roupa de cama", cluster: "Saúde & Higiene", funnel: "Awareness", intent: "Informacional", lp: "/higienizacao-edredom", monetization: "Higienização de edredons", gap: "Como prevenir ácaros em tapetes" },
  { slug: "bacterias-tapetes-higienizacao", title: "Bactérias em tapetes: por que higienizar?", cluster: "Tapetes & Casa", funnel: "Awareness", intent: "Informacional", lp: "/tapetes", monetization: "Limpeza de tapetes", gap: "Com que frequência lavar tapetes" },
  { slug: "capsule-wardrobe-guia", title: "Guia de Capsule Wardrobe", cluster: "Organização", funnel: "Awareness", intent: "Informacional", lp: "/roupas-delicadas", monetization: "Lavagem de roupas delicadas", gap: "Como organizar roupas por estação" },
  { slug: "como-cuidar-roupas-delicadas", title: "Como cuidar de roupas delicadas", cluster: "Roupas Especiais", funnel: "Consideration", intent: "Transacional", lp: "/roupas-delicadas", monetization: "Lavagem de peças especiais", gap: "Quanto custa lavar roupas delicadas" },
  { slug: "como-lavar-couro", title: "Como lavar couro corretamente", cluster: "Roupas Especiais", funnel: "Consideration", intent: "Transacional", lp: "/couro-pecas-especiais", monetization: "Limpeza de couro", gap: "Recuperação de peças de couro danificadas" },
  { slug: "como-lavar-jeans", title: "Como lavar jeans corretamente", cluster: "Roupas Especiais", funnel: "Awareness", intent: "Informacional", lp: "/lavagem-roupas", monetization: "Lavagem do dia a dia", gap: "Com que frequência lavar jeans" },
  { slug: "conservar-vestido-noiva", title: "Como conservar vestido de noiva", cluster: "Roupas Especiais", funnel: "Awareness", intent: "Informacional", lp: "/roupas-delicadas", monetization: "Lavagem de peças especiais", gap: "Onde lavar vestido de noiva em SJC" },
  { slug: "consumo-consciente-roupas", title: "Consumo consciente de roupas", cluster: "Sustentabilidade", funnel: "Awareness", intent: "Informacional", lp: "/sustentavel", monetization: "Plano mensal sustentável", gap: "Lavanderia ecológica vs. convencional" },
  { slug: "cuidados-cashmere-la", title: "Cuidados com cashmere e lã", cluster: "Roupas Especiais", funnel: "Consideration", intent: "Transacional", lp: "/roupas-delicadas", monetization: "Lavagem de peças especiais", gap: "Preço para lavar cashmere" },
  { slug: "enxoval-restaurante-gestao", title: "Gestão de enxoval em restaurantes", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/restaurantes", monetization: "Contrato B2B restaurantes", gap: "Quanto economiza terceirizando lavanderia" },
  { slug: "fungos-roupa-como-eliminar", title: "Fungos na roupa: como eliminar", cluster: "Saúde & Higiene", funnel: "Awareness", intent: "Informacional", lp: "/lavagem-roupas", monetization: "Lavagem especializada", gap: "Como evitar mofo em roupas guardadas" },
  { slug: "guardar-roupas-inverno", title: "Como guardar roupas de inverno", cluster: "Organização", funnel: "Awareness", intent: "Informacional", lp: "/lavagem-roupas", monetization: "Lavagem antes de guardar", gap: "Checklist de guarda-roupa de inverno" },
  { slug: "higiene-roupas-bebe", title: "Higiene de roupas de bebê", cluster: "Saúde & Higiene", funnel: "Awareness", intent: "Informacional", lp: "/para-maes", monetization: "Lavagem de roupas de bebê", gap: "Produtos seguros para lavar roupa de bebê" },
  { slug: "higienizacao-cortinas-saude", title: "Higienização de cortinas e saúde", cluster: "Saúde & Higiene", funnel: "Consideration", intent: "Transacional", lp: "/cortinas", monetization: "Higienização de cortinas", gap: "Preço de higienização de cortinas SJC" },
  { slug: "higienizacao-edredom-importancia", title: "Por que higienizar edredom?", cluster: "Saúde & Higiene", funnel: "Awareness", intent: "Informacional", lp: "/higienizacao-edredom", monetization: "Higienização de edredons", gap: "Com que frequência lavar edredom" },
  { slug: "higienizar-sofa-casa", title: "Como higienizar sofá em casa", cluster: "Tapetes & Casa", funnel: "Consideration", intent: "Transacional", lp: "/sofas", monetization: "Higienização de sofás", gap: "Preço de higienização de sofá SJC" },
  { slug: "lavanderia-hoteis-terceirizacao", title: "Lavanderia para hotéis: terceirização", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/hotelaria", monetization: "Contrato B2B hotelaria", gap: "SLA de lavanderia para pousadas" },
  { slug: "lavanderia-sao-jose-dos-campos", title: "Lavanderia em São José dos Campos", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/sao-jose-dos-campos", monetization: "Todos os serviços", gap: "Melhores lavanderias de SJC (comparativo)" },
  { slug: "lavanderia-sustentavel", title: "O que é uma lavanderia sustentável?", cluster: "Sustentabilidade", funnel: "Awareness", intent: "Informacional", lp: "/sustentavel", monetization: "Plano mensal eco", gap: "Selos e certificações de sustentabilidade" },
  { slug: "lavanderias-vale-do-paraiba", title: "Lavanderias no Vale do Paraíba", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/vale-do-paraiba", monetization: "Todos os serviços", gap: "Lavanderia com coleta em Taubaté" },
  { slug: "lavar-mao-vs-maquina", title: "Lavar à mão vs. máquina: quando usar", cluster: "Organização", funnel: "Consideration", intent: "Informacional", lp: "/lavagem-roupas", monetization: "Lavagem do dia a dia", gap: "Quando vale contratar lavanderia profissional" },
  { slug: "lavar-tenis-corretamente", title: "Como lavar tênis corretamente", cluster: "Tênis", funnel: "Awareness", intent: "Informacional", lp: "/tenis", monetization: "Limpeza de tênis", gap: "Preço de lavagem de tênis SJC" },
  { slug: "limpeza-tapetes-profissional", title: "Limpeza de tapetes profissional", cluster: "Tapetes & Casa", funnel: "Consideration", intent: "Transacional", lp: "/tapetes", monetization: "Limpeza de tapetes", gap: "Diferença entre lavagem e higienização de tapetes" },
  { slug: "organizar-guarda-roupa", title: "Como organizar o guarda-roupa", cluster: "Organização", funnel: "Awareness", intent: "Informacional", lp: "/lavagem-roupas", monetization: "Lavagem + organização", gap: "Método KonMari aplicado ao guarda-roupa" },
  { slug: "produtos-ecologicos-lavar-roupa", title: "Produtos ecológicos para lavar roupa", cluster: "Sustentabilidade", funnel: "Awareness", intent: "Informacional", lp: "/sustentavel", monetization: "Lavanderia sustentável", gap: "Produtos naturais vs. industriais" },
  { slug: "temperatura-lavagem-tecidos", title: "Temperatura certa para cada tecido", cluster: "Roupas Especiais", funnel: "Awareness", intent: "Informacional", lp: "/roupas-delicadas", monetization: "Lavagem especializada", gap: "Guia de etiquetas de lavagem" },
  { slug: "tirar-mancha-oleo-roupa", title: "Como tirar mancha de óleo da roupa", cluster: "Manchas", funnel: "Awareness", intent: "Informacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Manchas que só profissionais removem" },
  { slug: "tirar-mancha-vinho-tinto", title: "Como tirar mancha de vinho tinto", cluster: "Manchas", funnel: "Awareness", intent: "Informacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Como tirar mancha de café da roupa" },
  { slug: "tirar-manchas-dificeis", title: "Como tirar manchas difíceis", cluster: "Manchas", funnel: "Consideration", intent: "Transacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Quando a mancha não sai em casa" },
  { slug: "uniformes-corporativos-higienizacao", title: "Higienização de uniformes corporativos", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/uniformes", monetization: "Contrato B2B uniformes", gap: "Gestão de estoque de uniformes" },
  // EPIC-01 — Fundo de funil
  { slug: "quanto-custa-lavanderia", title: "Quanto custa uma lavanderia? Guia de preços 2025", cluster: "Local", funnel: "Decisão", intent: "Transacional", lp: "/precos", monetization: "Todos os serviços", gap: "Calculadora de orçamento interativa" },
  { slug: "lavanderia-coleta-domicilio-sjc", title: "Lavanderia com coleta em domicílio em SJC", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/sao-jose-dos-campos", monetization: "Todos os serviços", gap: "Coleta express em outros bairros" },
  { slug: "plano-mensal-lavanderia-vale", title: "Plano mensal de lavanderia: vale a pena?", cluster: "Organização", funnel: "Retenção", intent: "Transacional", lp: "/plano-mensal", monetization: "Plano mensal recorrente", gap: "Comparativo planos família vs. casal" },
  { slug: "como-escolher-lavanderia", title: "Como escolher uma lavanderia: 7 critérios", cluster: "Local", funnel: "Decisão", intent: "Transacional", lp: "/como-funciona", monetization: "Todos os serviços", gap: "Checklist imprimível para escolha" },
  { slug: "lavanderia-vs-lavar-em-casa", title: "Lavanderia ou lavar em casa? Comparativo", cluster: "Organização", funnel: "Consideration", intent: "Transacional", lp: "/lavanderia-ou-lavar-em-casa", monetization: "Todos os serviços", gap: "Calculadora de custo real" },
  // EPIC-01 — B2B
  { slug: "lavanderia-para-airbnb", title: "Lavanderia para Airbnb: como funciona", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/airbnb", monetization: "Contrato Airbnb/temporada", gap: "Modelo de contrato para múltiplos imóveis" },
  { slug: "terceirizar-lavanderia-empresa", title: "Terceirizar lavanderia: quando vale a pena", cluster: "B2B", funnel: "Decisão", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B corporativo", gap: "Calculadora de ROI interativa" },
  { slug: "lavanderia-para-academias-spas", title: "Lavanderia para academias e spas", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B academia/spa", gap: "SLA garantido para alto volume" },
  { slug: "gestao-uniforme-corporativo", title: "Gestão de uniformes corporativos", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/uniformes", monetization: "Contrato B2B uniforme", gap: "Software de controle de estoque" },
  { slug: "lavanderia-para-condominios", title: "Lavanderia para condomínios", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/condominios", monetization: "Contrato B2B condomínio", gap: "Proposta para assembleia de condomínio" },
];

// ─── CLUSTERS DATA ────────────────────────────────────────────────────────────

const CLUSTERS_MOS: {
  id: string; nome: ClusterKey; cor: string; tw: string; badge: string;
  pilar: string; lp: string; gap: number;
  proximos: string[]; monetizacao: string; local: string;
  social: { plataforma: string; formato: string; angulo: string }[];
  insights: string[];
}[] = [
  {
    id: "saude", nome: "Saúde & Higiene", cor: "blue", tw: "bg-blue-100 text-blue-700 border-blue-200", badge: "bg-blue-600",
    pilar: "Guia completo de higiene doméstica: o que você não vê pode te adoecer",
    lp: "/higienizacao-edredom", gap: 4,
    proximos: ["Com que frequência lavar edredom (guia por estação)", "Ácaros no sofá: sinais e solução", "Lavanderia para bebês recém-nascidos", "Higienização pós-COVID: protocolo completo"],
    monetizacao: "Higienização de edredons, cortinas, tapetes — ticket R$80–R$200",
    local: "higienização de edredom em [cidade], lavanderia para alérgicos em [cidade]",
    social: [
      { plataforma: "Instagram", formato: "Carrossel", angulo: "Antes/depois de edredom higienizado — visual impactante" },
      { plataforma: "TikTok", formato: "Vídeo 30s", angulo: "Câmera fechada em ácaro em edredom não lavado" },
      { plataforma: "Instagram", formato: "Stories", angulo: "Poll: 'Quando você lavou seu edredom pela última vez?'" },
      { plataforma: "LinkedIn", formato: "Artigo", angulo: "Produtividade e saúde: como ambiente limpo impacta o trabalho" },
    ],
    insights: ["Buscas por 'higienização de edredom' triplicam no inverno — criar conteúdo sazonal até maio", "Pais de crianças alérgicas são o segmento de maior conversão deste cluster", "Video mostrando extração de ácaros tem alto potencial viral no TikTok"],
  },
  {
    id: "manchas", nome: "Manchas", cor: "orange", tw: "bg-orange-100 text-orange-700 border-orange-200", badge: "bg-orange-500",
    pilar: "Guia definitivo de remoção de manchas: 30 tipos e como resolver cada um",
    lp: "/remocao-manchas", gap: 7,
    proximos: ["Como tirar mancha de café da roupa", "Como tirar mancha de suor do colarinho", "Como tirar mancha de ferrugem", "Como tirar mancha de graxa", "Manchas que só profissional remove"],
    monetizacao: "Remoção de manchas — ticket R$30–R$120/peça",
    local: "remoção de manchas em [cidade], lavanderia urgente [cidade]",
    social: [
      { plataforma: "Instagram", formato: "Reels", angulo: "Antes/depois de mancha removida profissionalmente" },
      { plataforma: "TikTok", formato: "Tutorial 60s", angulo: "3 manchas impossíveis que profissional remove em 24h" },
      { plataforma: "Pinterest", formato: "Infográfico", angulo: "Guia visual: tipo de mancha → solução correta" },
      { plataforma: "Instagram", formato: "Stories", angulo: "Poll: 'Você tenta tirar mancha em casa antes de trazer?'" },
    ],
    insights: ["Conteúdo de manchas tem altíssima taxa de save no Instagram — ótimo para alcance orgânico", "Criar 'guia de manchas PDF' como lead magnet — alta conversão para lista WhatsApp", "Mancha de vinho é a mais buscada — priorizar série de manchas por ocasião"],
  },
  {
    id: "tenis", nome: "Tênis", cor: "purple", tw: "bg-purple-100 text-purple-700 border-purple-200", badge: "bg-purple-600",
    pilar: "Como cuidar de tênis: guia completo por material (couro, camurça, mesh)",
    lp: "/tenis", gap: 5,
    proximos: ["Como limpar tênis branco em casa", "Como lavar tênis de couro sem estragar", "Quanto custa limpar tênis em lavanderia", "Tênis de camurça: cuidados especiais", "Lavar tênis na máquina: risco ou mito?"],
    monetizacao: "Limpeza de tênis — ticket R$50–R$150/par",
    local: "lavar tênis em [cidade], higienização de tênis [cidade]",
    social: [
      { plataforma: "Instagram", formato: "Reels 15s", angulo: "Tênis Jordan sujo → limpo em 24h — resultado chocante" },
      { plataforma: "TikTok", formato: "POV 30s", angulo: "POV: você manda seu tênis favorito para a A7" },
      { plataforma: "Instagram", formato: "Carrossel", angulo: "Top 5 erros ao lavar tênis em casa" },
      { plataforma: "YouTube Shorts", formato: "45s", angulo: "Processo completo de higienização de tênis branco" },
    ],
    insights: ["Tênis é o serviço com maior potencial de viralização — antes/depois são muito compartilhados", "Clientes jovens (18–30) são o público dominante — tom descontraído nas redes", "Parceria com lojas de tênis premium de SJC para indicação mútua"],
  },
  {
    id: "roupas", nome: "Roupas Especiais", cor: "indigo", tw: "bg-indigo-100 text-indigo-700 border-indigo-200", badge: "bg-indigo-600",
    pilar: "Guia completo de cuidados com roupas especiais: seda, cashmere, lã e couro",
    lp: "/roupas-delicadas", gap: 3,
    proximos: ["Como cuidar de seda: guia prático", "Lavanderia para roupas de grife: vale a pena?", "Guia de etiquetas de lavagem (símbolos explicados)"],
    monetizacao: "Roupas delicadas — ticket R$20–R$80/peça",
    local: "lavagem de roupas delicadas em [cidade], lavanderia para peças de grife",
    social: [
      { plataforma: "Instagram", formato: "Carrossel", angulo: "Sabe o que significa cada símbolo da etiqueta de roupa?" },
      { plataforma: "Pinterest", formato: "Guia visual", angulo: "Infográfico: cada tecido especial e seus cuidados" },
      { plataforma: "Instagram", formato: "Stories", angulo: "Quiz: você cuida bem das suas roupas especiais?" },
      { plataforma: "LinkedIn", formato: "Post", angulo: "Executivo(a): quanto sua roupa social vale? Cuide bem dela." },
    ],
    insights: ["Executivos e mães são os maiores convertedores deste cluster", "Conteúdo de 'símbolos da etiqueta' tem altíssima taxa de save — leve viral", "Oferecer avaliação gratuita de peça delicada como isca na primeira coleta"],
  },
  {
    id: "tapetes", nome: "Tapetes & Casa", cor: "teal", tw: "bg-teal-100 text-teal-700 border-teal-200", badge: "bg-teal-600",
    pilar: "Como higienizar sua casa: guia de tapetes, sofás e cortinas",
    lp: "/sofas", gap: 6,
    proximos: ["Com que frequência higienizar sofá", "Higienização de tapete persa: cuidados especiais", "Lavagem de cortinas sem tirar do trilho", "Higienização de colchão", "Antes e depois: higienização de sofá (cases)"],
    monetizacao: "Sofás R$150–R$400 | Tapetes R$80–R$300 | Cortinas R$50–R$200",
    local: "higienização de sofá em [cidade], limpeza de tapetes [cidade]",
    social: [
      { plataforma: "Instagram", formato: "Reels", angulo: "Sofá antes/depois — água suja extraída em tempo real" },
      { plataforma: "TikTok", formato: "ASMR 30s", angulo: "Som da extratora no sofá — satisfatório e viral" },
      { plataforma: "Instagram", formato: "Carrossel", angulo: "Sinais de que seu sofá precisa de higienização agora" },
      { plataforma: "YouTube", formato: "Tutorial", angulo: "Como funciona a higienização de sofá por dentro" },
    ],
    insights: ["Vídeo de extratora em sofá é o conteúdo de maior engajamento do setor — produzir urgente", "Sofá e tapete têm ticket mais alto — priorizar conversão direta no feed", "Sazonalidade: pré-festas (novembro) e pré-verão são picos de demanda"],
  },
  {
    id: "sustentavel", nome: "Sustentabilidade", cor: "green", tw: "bg-green-100 text-green-700 border-green-200", badge: "bg-green-600",
    pilar: "Guia de consumo consciente de moda: como cuidar e durar mais com menos",
    lp: "/sustentavel", gap: 3,
    proximos: ["Moda circular: como a lavanderia se encaixa", "Fast fashion vs. slow fashion: impacto ambiental", "Como estender a vida útil das roupas"],
    monetizacao: "Plano mensal eco — ticket R$150–R$400/mês",
    local: "lavanderia sustentável em [cidade], lavanderia ecológica",
    social: [
      { plataforma: "Instagram", formato: "Carrossel", angulo: "Lavanderia profissional usa 60% menos água que máquina doméstica" },
      { plataforma: "TikTok", formato: "Dado chocante", angulo: "Sabia que lavar em casa desperdiça X litros por lavagem?" },
      { plataforma: "LinkedIn", formato: "Artigo", angulo: "Sustentabilidade como diferencial de marca para o varejo" },
      { plataforma: "Instagram", formato: "Stories", angulo: "Nossa lavanderia usa produtos biodegradáveis — conheça" },
    ],
    insights: ["Público millennials/Gen Z tem alta afinidade — linguagem autêntica e dados concretos", "Selos e certificações de sustentabilidade aumentam conversão neste cluster em ~30%", "Parceria com marcas de moda sustentável de SJC para cross-content"],
  },
  {
    id: "organizacao", nome: "Organização", cor: "pink", tw: "bg-pink-100 text-pink-700 border-pink-200", badge: "bg-pink-600",
    pilar: "Método de organização de roupas: guarda-roupa funcional em 7 passos",
    lp: "/plano-mensal", gap: 4,
    proximos: ["Rotina de lavagem semanal para famílias", "Como montar uma rotina de lavanderia em casa", "Checklists de temporada: guardar e lavar", "Minimalismo e roupas: o papel da lavanderia"],
    monetizacao: "Plano mensal + lavagem do dia a dia",
    local: "N/A — cluster nacional",
    social: [
      { plataforma: "Instagram", formato: "Carrossel", angulo: "Rotina de lavagem da semana para família de 4 pessoas" },
      { plataforma: "Pinterest", formato: "Checklist", angulo: "Checklist de organização de guarda-roupa por estação" },
      { plataforma: "TikTok", formato: "POV 30s", angulo: "POV: você nunca mais precisa pensar em lavar roupa" },
      { plataforma: "Instagram", formato: "Stories", angulo: "Quanto tempo você perde lavando roupa por semana?" },
    ],
    insights: ["Conteúdo de rotina e organização tem altíssimo engajamento com mães e donas de casa", "Checklist imprimível de organização é o lead magnet mais fácil de produzir — alta conversão", "Colaboração com influenciadoras de organização doméstica de SJC"],
  },
  {
    id: "b2b", nome: "B2B", cor: "amber", tw: "bg-amber-100 text-amber-700 border-amber-200", badge: "bg-amber-500",
    pilar: "Guia de terceirização de lavanderia para empresas: ROI, SLA e como escolher",
    lp: "/empresarial", gap: 5,
    proximos: ["Quanto custa terceirizar lavanderia para restaurante", "SLA de lavanderia hospitalar e clínicas", "Lavanderia para academias: toalhas e uniformes", "ROI de terceirizar lavanderia em condomínios", "Como escolher lavanderia corporativa"],
    monetizacao: "Contrato B2B R$500–R$5.000/mês | Ticket alto, recorrente",
    local: "lavanderia empresarial em [cidade], lavanderia para hotel [cidade]",
    social: [
      { plataforma: "LinkedIn", formato: "Artigo", angulo: "Quanto sua empresa perde por não terceirizar a lavagem de uniformes?" },
      { plataforma: "LinkedIn", formato: "Case", angulo: "Como restaurante X economizou R$1.200/mês terceirizando lavanderia" },
      { plataforma: "Instagram", formato: "Carrossel", angulo: "5 tipos de empresa que deveriam terceirizar lavanderia agora" },
      { plataforma: "WhatsApp", formato: "Sequência", angulo: "Proposta automática para leads B2B com calculadora de ROI" },
    ],
    insights: ["LinkedIn é o canal prioritário para B2B — postar 2x/semana com foco em ROI e casos reais", "Calculadora de ROI interativa no site pode multiplicar conversão B2B por 3x", "Restaurantes abrem às quintas/sextas — melhor dia para prospecção ativa no WhatsApp"],
  },
  {
    id: "local", nome: "Local", cor: "cyan", tw: "bg-cyan-100 text-cyan-700 border-cyan-200", badge: "bg-cyan-600",
    pilar: "Melhores lavanderias do Vale do Paraíba: comparativo completo 2025",
    lp: "/vale-do-paraiba", gap: 6,
    proximos: ["Lavanderia com coleta em Taubaté", "Lavanderia em Jacareí: guia completo", "Higienização de edredom em SJC: preço e prazo", "Limpeza de sofá em Taubaté", "Lavanderia delivery em Lorena e Guaratinguetá", "Melhor lavanderia de SJC (comparativo de preços)"],
    monetizacao: "Todos os serviços — captura de demanda local com alta intenção",
    local: "lavanderia em [cidade] — 15+ cidades do Vale do Paraíba",
    social: [
      { plataforma: "Instagram", formato: "Stories/Local", angulo: "Geotag em todos os posts — mostrar SJC, Taubaté, Jacareí" },
      { plataforma: "Google Business", formato: "Post semanal", angulo: "Serviço da semana + CTA WhatsApp" },
      { plataforma: "Instagram", formato: "Reels", angulo: "Tour pela nossa unidade em SJC — humaniza a marca" },
      { plataforma: "TikTok", formato: "Local", angulo: "A7 Lavanderia de SJC: dia a dia da operação" },
    ],
    insights: ["SEO local tem conversão 5x maior que nacional — prioridade máxima", "Google Business com fotos reais da equipe e unidade aumenta CTR em Maps em 40%", "Criar Reels com geotag de SJC/Taubaté semanalmente para visibilidade local"],
  },
];

// ─── FUNNEL STAGES ────────────────────────────────────────────────────────────

const FUNNEL_STAGES_DATA = [
  { stage: "Awareness" as FunnelStage, icon: "👁️", cor: "sky", tw: "bg-sky-50 border-sky-200", badge: "bg-sky-500", badgeText: "text-sky-700", descricao: "Atrai quem tem o problema mas não conhece a solução", cta: "Blog SEO → captura WhatsApp", kpi: "Impressões, cliques, tempo na página", width: "w-full" },
  { stage: "Consideration" as FunnelStage, icon: "🤔", cor: "violet", tw: "bg-violet-50 border-violet-200", badge: "bg-violet-500", badgeText: "text-violet-700", descricao: "Converte quem está pesquisando a solução profissional", cta: "Comparativo + prova social → WhatsApp", kpi: "CTR para LP, lead WhatsApp", width: "w-10/12" },
  { stage: "Decisão" as FunnelStage, icon: "⚖️", cor: "amber", tw: "bg-amber-50 border-amber-200", badge: "bg-amber-500", badgeText: "text-amber-700", descricao: "Fecha quem já quer contratar e está comparando", cta: "LP com preço + social proof + CTA direto", kpi: "Agendamentos WhatsApp, leads qualificados", width: "w-8/12" },
  { stage: "Booking" as FunnelStage, icon: "📅", cor: "green", tw: "bg-green-50 border-green-200", badge: "bg-green-500", badgeText: "text-green-700", descricao: "Converte o contato em pedido confirmado", cta: "Formulário de coleta / WhatsApp deep link", kpi: "Taxa conversão LP→pedido (meta 3–8%)", width: "w-6/12" },
  { stage: "Retenção" as FunnelStage, icon: "🔄", cor: "teal", tw: "bg-teal-50 border-teal-200", badge: "bg-teal-500", badgeText: "text-teal-700", descricao: "Transforma pedido avulso em cliente recorrente", cta: "Oferta plano mensal após 1ª coleta", kpi: "Taxa de recompra, assinantes plano mensal", width: "w-4/12" },
  { stage: "Referral" as FunnelStage, icon: "🎁", cor: "rose", tw: "bg-rose-50 border-rose-200", badge: "bg-rose-500", badgeText: "text-rose-700", descricao: "Transforma clientes em promotores ativos", cta: "R$20 OFF por indicação confirmada", kpi: "NPS > 85, avaliações Google, indicações/mês", width: "w-3/12" },
];

// ─── 30-DAY CALENDAR ─────────────────────────────────────────────────────────

const startDate = new Date("2025-03-17");
const CALENDAR_30: { day: number; date: string; titulo: string; cluster: ClusterKey; funnel: FunnelStage; lp: string }[] = [
  { day: 1, date: "17/03", titulo: "Com que frequência lavar edredom", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/higienizacao-edredom" },
  { day: 3, date: "19/03", titulo: "Quanto custa limpeza de sofá profissional em SJC", cluster: "Tapetes & Casa", funnel: "Decisão", lp: "/sofas" },
  { day: 5, date: "21/03", titulo: "Como lavar tênis branco sem estragar", cluster: "Tênis", funnel: "Awareness", lp: "/tenis" },
  { day: 7, date: "24/03", titulo: "Lavanderia com coleta em Taubaté: guia completo", cluster: "Local", funnel: "Decisão", lp: "/taubate" },
  { day: 9, date: "26/03", titulo: "Quanto custa terceirizar lavanderia para restaurante", cluster: "B2B", funnel: "Consideration", lp: "/restaurantes" },
  { day: 11, date: "28/03", titulo: "Como tirar mancha de café da roupa", cluster: "Manchas", funnel: "Awareness", lp: "/remocao-manchas" },
  { day: 13, date: "31/03", titulo: "Ácaros no sofá: sintomas e como eliminar", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/sofas" },
  { day: 15, date: "02/04", titulo: "Lavanderia para Airbnb: contrato e preços", cluster: "B2B", funnel: "Consideration", lp: "/airbnb" },
  { day: 17, date: "04/04", titulo: "Guia de etiquetas de lavagem: símbolos explicados", cluster: "Roupas Especiais", funnel: "Awareness", lp: "/roupas-delicadas" },
  { day: 19, date: "07/04", titulo: "Higienização de colchão: saúde e bem-estar", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/higienizacao-edredom" },
  { day: 21, date: "09/04", titulo: "Preço de lavagem de tênis em SJC: comparativo", cluster: "Tênis", funnel: "Decisão", lp: "/tenis" },
  { day: 23, date: "11/04", titulo: "Lavanderia em Jacareí: guia completo 2025", cluster: "Local", funnel: "Decisão", lp: "/jacarei" },
  { day: 25, date: "14/04", titulo: "Como tirar mancha de suor do colarinho", cluster: "Manchas", funnel: "Awareness", lp: "/remocao-manchas" },
  { day: 27, date: "16/04", titulo: "Higienização de cortinas sem tirar do trilho", cluster: "Saúde & Higiene", funnel: "Consideration", lp: "/cortinas" },
  { day: 29, date: "18/04", titulo: "Rotina de lavagem semanal para famílias", cluster: "Organização", funnel: "Awareness", lp: "/para-maes" },
];

// ─── CLICKUP LINK HELPER ──────────────────────────────────────────────────────

function getClickUpLink(titulo: string): string {
  return `https://app.clickup.com/t/new?name=${encodeURIComponent(`[Blog] ${titulo}`)}&tags=content,seo,blog`;
}

// ─── COLORS ───────────────────────────────────────────────────────────────────

const CLUSTER_COLORS: Record<string, string> = {
  "Saúde & Higiene": "bg-blue-100 text-blue-700", "Manchas": "bg-orange-100 text-orange-700",
  "Tênis": "bg-purple-100 text-purple-700", "Roupas Especiais": "bg-indigo-100 text-indigo-700",
  "Tapetes & Casa": "bg-teal-100 text-teal-700", "Sustentabilidade": "bg-green-100 text-green-700",
  "Organização": "bg-pink-100 text-pink-700", "B2B": "bg-amber-100 text-amber-700",
  "Local": "bg-cyan-100 text-cyan-700",
};
const FUNNEL_COLORS: Record<string, string> = {
  "Awareness": "bg-sky-100 text-sky-700", "Consideration": "bg-violet-100 text-violet-700",
  "Decisão": "bg-amber-100 text-amber-700", "Booking": "bg-green-100 text-green-700",
  "Retenção": "bg-teal-100 text-teal-700", "Referral": "bg-rose-100 text-rose-700",
};
const SOCIAL_COLORS: Record<string, string> = {
  "Instagram": "bg-pink-500", "TikTok": "bg-black", "LinkedIn": "bg-blue-700",
  "Pinterest": "bg-red-600", "YouTube": "bg-red-500", "Google Business": "bg-blue-500",
  "WhatsApp": "bg-green-600", "YouTube Shorts": "bg-red-500",
};

const SECTIONS = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "inventory", label: "Inventário", icon: "📚" },
  { id: "clusters", label: "Clusters SEO", icon: "🗂️" },
  { id: "funil", label: "Funil Visual", icon: "🔻" },
  { id: "calendario", label: "Calendário 30d", icon: "📅" },
  { id: "local", label: "SEO Local", icon: "📍" },
  { id: "classifier", label: "Classificador", icon: "🤖" },
];

// ─── CLUSTER KEYWORDS (for classifier) ───────────────────────────────────────

const CLUSTER_KEYWORDS: Record<ClusterKey, string[]> = {
  "Saúde & Higiene": ["ácaro", "alergia", "fungos", "bactéria", "higieniz", "edredom", "saúde", "rinite"],
  "Manchas": ["mancha", "vinho", "óleo", "café", "ferrugem", "graxa", "tirar", "remov"],
  "Tênis": ["tênis", "calçado", "sapatilha", "solado", "camurça"],
  "Roupas Especiais": ["delicada", "seda", "cashmere", "lã", "grife", "noiva", "blazer", "terno"],
  "Tapetes & Casa": ["tapete", "sofá", "cortina", "colchão", "estofado"],
  "Sustentabilidade": ["sustentáv", "ecológ", "consciente", "meio ambiente", "eco"],
  "Organização": ["organiz", "guarda-roupa", "guardar", "armário", "rotina"],
  "B2B": ["empresa", "restaurante", "hotel", "uniforme", "corporativo", "airbnb", "condomínio"],
  "Local": ["são josé", "sjc", "taubaté", "jacareí", "vale do paraíba", "lorena"],
};
const FUNNEL_KEYWORDS: Record<FunnelStage, string[]> = {
  "Awareness": ["como", "por que", "o que é", "guia", "dicas"],
  "Consideration": ["vale a pena", "vs.", "quando contratar", "diferença"],
  "Decisão": ["preço", "quanto custa", "melhor", "em sjc", "coleta"],
  "Booking": ["agendar", "solicitar"], "Retenção": ["plano", "mensal", "assinatura"], "Referral": ["indicar"],
};

function classifyArticle(title: string) {
  const lower = title.toLowerCase();
  let cluster: ClusterKey = "Organização";
  for (const [k, kws] of Object.entries(CLUSTER_KEYWORDS)) {
    if (kws.some(kw => lower.includes(kw))) { cluster = k as ClusterKey; break; }
  }
  let funnel: FunnelStage = "Awareness";
  for (const [s, kws] of Object.entries(FUNNEL_KEYWORDS)) {
    if (kws.some(kw => lower.includes(kw))) { funnel = s as FunnelStage; break; }
  }
  const cd = CLUSTERS_MOS.find(c => c.nome === cluster);
  return { cluster, funnel, lp: cd?.lp ?? "/", monetizacao: cd?.monetizacao ?? "", sugestoes: cd?.proximos.slice(0, 4) ?? [], social: cd?.social.slice(0, 2) ?? [] };
}

// ─── FUNNEL COMPLETENESS ──────────────────────────────────────────────────────

function getFunnelCompleteness(lp: string): { stages: FunnelStage[]; complete: boolean } {
  const arts = ARTICLES.filter(a => a.lp === lp);
  const stages = Array.from(new Set(arts.map(a => a.funnel)));
  const complete = stages.includes("Awareness") && (stages.includes("Consideration") || stages.includes("Decisão"));
  return { stages, complete };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function MarketingOS() {
  const [activeSection, setActiveSection] = useState("overview");
  const [clusterFilter, setClusterFilter] = useState("Todos");
  const [funnelFilter, setFunnelFilter] = useState("Todos");
  const [selectedCluster, setSelectedCluster] = useState<typeof CLUSTERS_MOS[0] | null>(null);
  const [expandedCluster, setExpandedCluster] = useState<string | null>(null);
  const [classifierInput, setClassifierInput] = useState("");
  const [classifierResult, setClassifierResult] = useState<ReturnType<typeof classifyArticle> | null>(null);

  const totalArticles = ARTICLES.length;
  const totalGaps = CLUSTERS_MOS.reduce((s, c) => s + c.gap, 0);

  const filteredArticles = useMemo(() => ARTICLES.filter(a => {
    return (clusterFilter === "Todos" || a.cluster === clusterFilter) &&
           (funnelFilter === "Todos" || a.funnel === funnelFilter);
  }), [clusterFilter, funnelFilter]);

  return (
    <div className="min-h-screen bg-[#050810] text-white font-sans">

      {/* ── SLIDE-OVER CLUSTER DETAIL ── */}
      {selectedCluster && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedCluster(null)} />
          <div className="w-full max-w-xl bg-[#0a0f1e] border-l border-white/10 overflow-y-auto flex flex-col">
            <div className="sticky top-0 bg-[#0a0f1e] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black px-3 py-1 rounded-full border ${selectedCluster.tw}`}>{selectedCluster.nome}</span>
                <span className="text-xs text-white/40">{ARTICLES.filter(a => a.cluster === selectedCluster.nome).length} artigos · <span className="text-orange-400">+{selectedCluster.gap} gaps</span></span>
              </div>
              <button onClick={() => setSelectedCluster(null)} className="text-white/40 hover:text-white text-xl leading-none">×</button>
            </div>
            <div className="p-6 space-y-6 flex-1">

              {/* Pillar page */}
              <div>
                <p className="text-[10px] text-[#46C1F1]/60 uppercase tracking-widest mb-2">Pillar Page</p>
                <div className="bg-[#46C1F1]/10 border border-[#46C1F1]/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-white leading-relaxed">{selectedCluster.pilar}</p>
                  <Link href={selectedCluster.lp} className="text-xs text-[#46C1F1] mt-2 block hover:underline font-mono">{selectedCluster.lp} →</Link>
                </div>
              </div>

              {/* Published articles */}
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Artigos publicados</p>
                <div className="space-y-1.5">
                  {ARTICLES.filter(a => a.cluster === selectedCluster.nome).map(a => (
                    <Link key={a.slug} href={`/blog/${a.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#46C1F1]/30 transition-all group">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${FUNNEL_COLORS[a.funnel]}`}>{a.funnel}</span>
                      <span className="text-xs text-white/70 group-hover:text-white transition-colors">{a.title}</span>
                      <span className="ml-auto text-[#46C1F1] opacity-0 group-hover:opacity-100 text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Gaps */}
              <div>
                <p className="text-[10px] text-orange-400/60 uppercase tracking-widest mb-2">Gaps — conteúdo em falta</p>
                <div className="space-y-2">
                  {selectedCluster.proximos.map(p => (
                    <div key={p} className="flex items-start gap-2 p-2.5 rounded-lg bg-orange-500/5 border border-orange-500/20">
                      <span className="text-orange-400 text-xs mt-0.5 shrink-0">+</span>
                      <span className="text-xs text-orange-300/80 flex-1">{p}</span>
                      <a href={getClickUpLink(p)} target="_blank" rel="noopener noreferrer"
                        className="text-[10px] bg-[#46C1F1]/20 text-[#46C1F1] px-2 py-0.5 rounded hover:bg-[#46C1F1]/30 transition-colors shrink-0 font-bold">
                        + ClickUp
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social media */}
              <div>
                <p className="text-[10px] text-pink-400/60 uppercase tracking-widest mb-2">Social Media — ângulos de conteúdo</p>
                <div className="space-y-2">
                  {selectedCluster.social.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plataforma] ?? "bg-gray-600"}`}>{s.plataforma}</span>
                      <div>
                        <span className="text-[10px] text-white/40 block mb-0.5">{s.formato}</span>
                        <span className="text-xs text-white/70">{s.angulo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div>
                <p className="text-[10px] text-yellow-400/60 uppercase tracking-widest mb-2">Insights estratégicos</p>
                <div className="space-y-2">
                  {selectedCluster.insights.map((ins, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <span className="text-yellow-400 text-xs mt-0.5 shrink-0">💡</span>
                      <p className="text-xs text-yellow-300/80">{ins}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monetization */}
              <div>
                <p className="text-[10px] text-green-400/60 uppercase tracking-widest mb-2">Monetização</p>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-xs text-green-300">{selectedCluster.monetizacao}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-40 bg-[#050810]/95 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link href="/growth-engine" className="text-white/40 hover:text-white text-sm transition-colors">← Growth Engine</Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <div>
              <h1 className="text-sm font-black tracking-widest text-white uppercase">Marketing OS</h1>
              <p className="text-[10px] text-[#46C1F1]/70 tracking-widest uppercase">A7 Lavanderia · Sistema Operacional de Marketing</p>
            </div>
          </div>
        </div>
        <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full font-mono">
          {totalArticles} artigos · 9 clusters · {totalGaps} gaps
        </span>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-52 shrink-0 border-r border-white/10 min-h-[calc(100vh-57px)] sticky top-[57px] self-start">
          <nav className="p-3 space-y-1">
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all ${activeSection === s.id ? "bg-[#46C1F1]/20 text-[#46C1F1] font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"}`}>
                <span className="text-base">{s.icon}</span>{s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8 max-w-5xl">

          {/* ── OVERVIEW ── */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black mb-1">Marketing Operating System</h2>
                <p className="text-white/50 text-sm">Clique em qualquer cluster para ver o plano completo, artigos, gaps, social media e insights.</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Artigos publicados", val: `${totalArticles}`, sub: "em 9 clusters", cor: "text-[#46C1F1]" },
                  { label: "Gaps identificados", val: `${totalGaps}`, sub: "artigos em falta", cor: "text-orange-400" },
                  { label: "LPs ativas", val: "30", sub: "todas publicadas", cor: "text-green-400" },
                  { label: "Cidades mapeadas", val: "10", sub: "Vale do Paraíba", cor: "text-purple-400" },
                ].map(k => (
                  <div key={k.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className={`text-3xl font-black ${k.cor}`}>{k.val}</p>
                    <p className="text-white text-sm font-semibold mt-1">{k.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{k.sub}</p>
                  </div>
                ))}
              </div>

              {/* Cluster bars — CLICKABLE */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-black">Cobertura por Cluster</h3>
                  <span className="text-xs text-white/30">Clique para ver plano completo →</span>
                </div>
                <div className="space-y-3">
                  {CLUSTERS_MOS.map(c => {
                    const arts = ARTICLES.filter(a => a.cluster === c.nome).length;
                    const total = arts + c.gap;
                    const pct = Math.round((arts / total) * 100);
                    return (
                      <button key={c.id} onClick={() => setSelectedCluster(c)}
                        className="w-full flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-all group cursor-pointer text-left">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.tw} w-36 shrink-0 text-center group-hover:ring-1 group-hover:ring-white/20 transition-all`}>{c.nome}</span>
                        <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                          <div className={`h-2 rounded-full ${c.badge} transition-all group-hover:brightness-110`} style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-white/50 w-20 text-right">{arts}/{total}</span>
                        <span className="text-xs text-orange-400 w-14 text-right">+{c.gap} gaps</span>
                        <span className="text-white/20 group-hover:text-[#46C1F1] transition-colors text-xs">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Funil distribution */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Distribuição no Funil</h3>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                  {FUNNEL_STAGES_DATA.map(f => {
                    const count = ARTICLES.filter(a => a.funnel === f.stage).length;
                    return (
                      <button key={f.stage} onClick={() => { setActiveSection("inventory"); setFunnelFilter(f.stage); }}
                        className={`rounded-xl p-4 border text-center hover:scale-105 transition-all cursor-pointer ${f.tw}`}>
                        <div className={`w-8 h-8 rounded-full ${f.badge} mx-auto mb-2 flex items-center justify-center text-white font-black text-sm`}>{count}</div>
                        <p className={`text-xs font-bold ${f.badgeText}`}>{f.stage}</p>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-white/30 mt-4">💡 Clique em qualquer etapa para filtrar o inventário</p>
              </div>

              {/* Top gaps */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">🔥 Gaps Críticos</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { gap: "Cluster B2B — maior ticket (R$500–R$5k/mês), ainda 5 gaps abertos", prio: "CRÍTICO", cluster: "B2B" as ClusterKey },
                    { gap: "Tênis — alto engajamento nas redes, só 1 artigo publicado + 5 gaps", prio: "ALTO", cluster: "Tênis" as ClusterKey },
                    { gap: "Tapetes & Casa — sofá/tapete são ticket alto, 6 gaps sem cobertura", prio: "ALTO", cluster: "Tapetes & Casa" as ClusterKey },
                    { gap: "Local — SEO local converte 5x mais, 6 cidades sem artigo específico", prio: "ALTO", cluster: "Local" as ClusterKey },
                  ].map(g => {
                    const cd = CLUSTERS_MOS.find(c => c.nome === g.cluster);
                    return (
                      <button key={g.gap} onClick={() => cd && setSelectedCluster(cd)}
                        className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10 text-left hover:border-[#46C1F1]/30 hover:bg-white/8 transition-all group cursor-pointer">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded self-start mt-0.5 shrink-0 ${g.prio === "CRÍTICO" ? "bg-red-500/20 text-red-400" : "bg-orange-500/20 text-orange-400"}`}>{g.prio}</span>
                        <p className="text-sm text-white/70 group-hover:text-white transition-colors">{g.gap}</p>
                        <span className="ml-auto text-white/20 group-hover:text-[#46C1F1] text-xs shrink-0 self-start mt-0.5">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── INVENTORY ── */}
          {activeSection === "inventory" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Inventário de Conteúdo</h2>
                <p className="text-white/50 text-sm">{totalArticles} artigos classificados. <span className="text-green-400">●</span> LP ativa · <span className="text-orange-400">○</span> funil incompleto</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-xs text-white/40 mb-1">Cluster</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", ...Object.keys(CLUSTER_COLORS)].map(c => (
                      <button key={c} onClick={() => setClusterFilter(c)}
                        className={`text-xs px-3 py-1 rounded-full border transition-all ${clusterFilter === c ? "bg-[#46C1F1] text-black border-[#46C1F1] font-bold" : "border-white/20 text-white/50 hover:border-white/40"}`}>{c}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Funil</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", ...Object.keys(FUNNEL_COLORS)].map(f => (
                      <button key={f} onClick={() => setFunnelFilter(f)}
                        className={`text-xs px-3 py-1 rounded-full border transition-all ${funnelFilter === f ? "bg-[#46C1F1] text-black border-[#46C1F1] font-bold" : "border-white/20 text-white/50 hover:border-white/40"}`}>{f}</button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/30">{filteredArticles.length} artigos exibidos</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-xs">
                      <th className="text-left py-2 pr-3 font-medium">Artigo</th>
                      <th className="text-left py-2 pr-3 font-medium">Cluster</th>
                      <th className="text-left py-2 pr-3 font-medium">Funil</th>
                      <th className="text-left py-2 pr-3 font-medium">LP</th>
                      <th className="text-center py-2 pr-3 font-medium">LP ativa</th>
                      <th className="text-center py-2 pr-3 font-medium">Funil OK</th>
                      <th className="text-left py-2 font-medium">Gap → próximo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArticles.map(a => {
                      const lpAtiva = LP_ACTIVE[a.lp] ?? false;
                      const fc = getFunnelCompleteness(a.lp);
                      return (
                        <tr key={a.slug} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                          <td className="py-3 pr-3">
                            <Link href={`/blog/${a.slug}`} className="text-white hover:text-[#46C1F1] transition-colors font-medium text-xs leading-tight block max-w-[180px]">
                              {a.title} <span className="text-[#46C1F1]/50">↗</span>
                            </Link>
                          </td>
                          <td className="py-3 pr-3">
                            <button onClick={() => { const cd = CLUSTERS_MOS.find(c => c.nome === a.cluster); if (cd) setSelectedCluster(cd); }}
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full hover:ring-1 hover:ring-white/30 transition-all cursor-pointer ${CLUSTER_COLORS[a.cluster]}`}>
                              {a.cluster}
                            </button>
                          </td>
                          <td className="py-3 pr-3">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${FUNNEL_COLORS[a.funnel]}`}>{a.funnel}</span>
                          </td>
                          <td className="py-3 pr-3">
                            <Link href={a.lp} className="text-[#46C1F1] text-xs hover:underline font-mono">{a.lp}</Link>
                          </td>
                          <td className="py-3 pr-3 text-center">
                            {lpAtiva
                              ? <span className="text-green-400 text-sm" title="LP ativa">●</span>
                              : <span className="text-red-400 text-sm" title="LP inativa">○</span>}
                          </td>
                          <td className="py-3 pr-3 text-center">
                            {fc.complete
                              ? <span className="text-green-400 text-xs font-bold">✓</span>
                              : <span className="text-orange-400 text-xs font-bold" title={`Tem: ${fc.stages.join(", ")}`}>⚠</span>}
                          </td>
                          <td className="py-3">
                            <a href={getClickUpLink(a.gap)} target="_blank" rel="noopener noreferrer"
                              className="text-[10px] text-orange-300/70 hover:text-orange-300 italic hover:underline transition-colors">
                              {a.gap} ↗
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── CLUSTERS ── */}
          {activeSection === "clusters" && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-black mb-1">Arquitetura de Clusters SEO</h2>
                <p className="text-white/50 text-sm">Clique no card para expandir — pillar page, artigos, gaps, social media e insights.</p>
              </div>
              {CLUSTERS_MOS.map(c => {
                const arts = ARTICLES.filter(a => a.cluster === c.nome);
                const isExpanded = expandedCluster === c.id;
                return (
                  <div key={c.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <button onClick={() => setExpandedCluster(isExpanded ? null : c.id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-all">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-black px-3 py-1 rounded-full border ${c.tw}`}>{c.nome}</span>
                        <span className="text-xs text-white/40">{arts.length} artigos</span>
                        <span className="text-xs text-orange-400">+{c.gap} gaps</span>
                        <Link href={c.lp} onClick={e => e.stopPropagation()} className="text-xs text-[#46C1F1] hover:underline font-mono">{c.lp}</Link>
                      </div>
                      <span className={`text-white/30 transition-transform text-lg ${isExpanded ? "rotate-45" : ""}`}>+</span>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-white/10 p-5 space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          {/* Pillar */}
                          <div>
                            <p className="text-[10px] text-[#46C1F1]/60 uppercase tracking-widest mb-2">Pillar Page</p>
                            <div className="bg-[#46C1F1]/10 border border-[#46C1F1]/20 rounded-xl p-4">
                              <p className="text-sm font-semibold leading-relaxed">{c.pilar}</p>
                            </div>
                          </div>
                          {/* Monetization */}
                          <div>
                            <p className="text-[10px] text-green-400/60 uppercase tracking-widest mb-2">Monetização</p>
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                              <p className="text-sm text-green-300">{c.monetizacao}</p>
                              <p className="text-xs text-green-400/50 mt-2">{c.local}</p>
                            </div>
                          </div>
                        </div>

                        {/* Articles */}
                        <div>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Artigos publicados ({arts.length})</p>
                          <div className="flex flex-wrap gap-2">
                            {arts.map(a => (
                              <Link key={a.slug} href={`/blog/${a.slug}`}
                                className={`text-xs px-3 py-1.5 rounded-full border hover:brightness-110 transition-all ${FUNNEL_COLORS[a.funnel]} border-transparent`}>
                                {a.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Gaps */}
                        <div>
                          <p className="text-[10px] text-orange-400/60 uppercase tracking-widest mb-2">Gaps — criar agora ({c.proximos.length})</p>
                          <div className="grid md:grid-cols-2 gap-2">
                            {c.proximos.map(p => (
                              <div key={p} className="flex items-center gap-2 p-2.5 rounded-lg bg-orange-500/5 border border-orange-500/20">
                                <span className="text-orange-400 text-xs shrink-0">+</span>
                                <span className="text-xs text-orange-300/80 flex-1">{p}</span>
                                <a href={getClickUpLink(p)} target="_blank" rel="noopener noreferrer"
                                  className="text-[10px] bg-[#46C1F1]/20 text-[#46C1F1] px-2 py-0.5 rounded hover:bg-[#46C1F1]/30 font-bold shrink-0 transition-colors">
                                  ClickUp
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Social + Insights */}
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <p className="text-[10px] text-pink-400/60 uppercase tracking-widest mb-2">Social Media</p>
                            <div className="space-y-2">
                              {c.social.map((s, i) => (
                                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                                  <span className={`text-[10px] font-black px-2 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plataforma] ?? "bg-gray-600"}`}>{s.plataforma}</span>
                                  <div>
                                    <span className="text-[10px] text-white/30 block">{s.formato}</span>
                                    <span className="text-xs text-white/60">{s.angulo}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] text-yellow-400/60 uppercase tracking-widest mb-2">Insights</p>
                            <div className="space-y-2">
                              {c.insights.map((ins, i) => (
                                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                                  <span className="text-yellow-400 text-xs shrink-0">💡</span>
                                  <p className="text-xs text-yellow-300/80">{ins}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── FUNIL VISUAL ── */}
          {activeSection === "funil" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Funil Visual Completo</h2>
                <p className="text-white/50 text-sm">Do primeiro clique ao cliente recorrente — com conteúdo, social e conversão mapeados.</p>
              </div>

              <div className="space-y-3">
                {FUNNEL_STAGES_DATA.map((f, i) => {
                  const arts = ARTICLES.filter(a => a.funnel === f.stage);
                  return (
                    <div key={f.stage} className={`rounded-2xl border p-5 ${f.tw}`}>
                      {/* Stage header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-full ${f.badge} flex items-center justify-center text-white font-black text-lg shrink-0`}>
                          {f.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className={`font-black text-lg ${f.badgeText}`}>{f.stage}</h3>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${f.badge} text-white`}>{arts.length} artigos</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{f.descricao}</p>
                        </div>
                        {/* Funnel width visual */}
                        <div className="hidden lg:flex items-center gap-2">
                          <div className={`${f.width} h-2 ${f.badge} rounded-full opacity-60`} style={{ minWidth: "24px", maxWidth: "120px" }} />
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-3 gap-4">
                        {/* Articles */}
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Conteúdo mapeado</p>
                          {arts.length > 0 ? (
                            <div className="space-y-1">
                              {arts.map(a => (
                                <Link key={a.slug} href={`/blog/${a.slug}`}
                                  className="flex items-center gap-2 p-2 rounded-lg bg-white/40 hover:bg-white/60 transition-colors group">
                                  <span className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors flex-1 leading-tight">{a.title}</span>
                                  <span className="text-gray-400 group-hover:text-gray-700 text-xs">↗</span>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                              <p className="text-xs text-red-500 font-semibold">⚠ Sem conteúdo nesta etapa</p>
                              <p className="text-xs text-red-400 mt-1">Gap crítico — criar conteúdo urgente</p>
                            </div>
                          )}
                        </div>

                        {/* CTA + KPI */}
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">CTA estratégico</p>
                          <div className="p-3 rounded-lg bg-white/40 mb-3">
                            <p className="text-xs text-gray-700">{f.cta}</p>
                          </div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">KPI</p>
                          <p className="text-xs text-gray-600">{f.kpi}</p>
                        </div>

                        {/* Social creative template */}
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Social — arte sugerida</p>
                          {i === 0 && (
                            <div className="space-y-1.5">
                              {[
                                { plat: "Instagram", art: "Carrossel educativo — problema + solução" },
                                { plat: "TikTok", art: "Tutorial rápido — hook com o problema" },
                                { plat: "Pinterest", art: "Infográfico — guia visual" },
                              ].map(s => <div key={s.plat} className="flex gap-2 items-start p-2 rounded bg-white/30 text-xs">
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plat]}`}>{s.plat}</span>
                                <span className="text-gray-600">{s.art}</span>
                              </div>)}
                            </div>
                          )}
                          {i === 1 && (
                            <div className="space-y-1.5">
                              {[
                                { plat: "Instagram", art: "Reels — antes/depois do serviço" },
                                { plat: "LinkedIn", art: "Post comparativo — custo vs. benefício" },
                              ].map(s => <div key={s.plat} className="flex gap-2 items-start p-2 rounded bg-white/30 text-xs">
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plat]}`}>{s.plat}</span>
                                <span className="text-gray-600">{s.art}</span>
                              </div>)}
                            </div>
                          )}
                          {i === 2 && (
                            <div className="space-y-1.5">
                              {[
                                { plat: "Instagram", art: "Stories com localização SJC + CTA link" },
                                { plat: "Google Business", art: "Post com preço + botão WhatsApp" },
                              ].map(s => <div key={s.plat} className="flex gap-2 items-start p-2 rounded bg-white/30 text-xs">
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plat]}`}>{s.plat}</span>
                                <span className="text-gray-600">{s.art}</span>
                              </div>)}
                            </div>
                          )}
                          {i === 3 && (
                            <div className="p-2 rounded bg-white/30 text-xs text-gray-600">Landing pages com formulário de coleta. WhatsApp deep link pré-preenchido.</div>
                          )}
                          {i === 4 && (
                            <div className="p-2 rounded bg-white/30 text-xs text-gray-600">WhatsApp: sequência pós-coleta com oferta plano mensal D+1.</div>
                          )}
                          {i === 5 && (
                            <div className="space-y-1.5">
                              {[
                                { plat: "WhatsApp", art: "Mensagem de indicação — R$20 OFF para amigo" },
                                { plat: "Instagram", art: "Story com depoimento de cliente real" },
                              ].map(s => <div key={s.plat} className="flex gap-2 items-start p-2 rounded bg-white/30 text-xs">
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plat]}`}>{s.plat}</span>
                                <span className="text-gray-600">{s.art}</span>
                              </div>)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── CALENDÁRIO 30 DIAS ── */}
          {activeSection === "calendario" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Calendário de Conteúdo — 30 dias</h2>
                <p className="text-white/50 text-sm">Próximos artigos agendados. Clique em <strong className="text-[#46C1F1]">ClickUp</strong> para criar a task automaticamente.</p>
              </div>

              {/* Weeks */}
              {[0, 1, 2, 3].map(week => {
                const weekItems = CALENDAR_30.filter(item => item.day > week * 7 && item.day <= (week + 1) * 7);
                const weekStart = new Date(startDate); weekStart.setDate(startDate.getDate() + week * 7);
                const weekLabel = `Semana ${week + 1} — ${weekStart.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}`;
                return (
                  <div key={week} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                      <h3 className="font-bold text-sm text-white/70">{weekLabel}</h3>
                      <span className="text-xs text-white/30">{weekItems.length} artigos</span>
                    </div>
                    <div className="divide-y divide-white/5">
                      {weekItems.length === 0 ? (
                        <p className="px-5 py-4 text-xs text-white/30 italic">Sem artigos agendados nesta semana.</p>
                      ) : weekItems.map(item => (
                        <div key={item.day} className="flex items-center gap-4 px-5 py-3 hover:bg-white/3 transition-colors">
                          <span className="text-xs font-mono text-white/30 w-12 shrink-0">{item.date}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${CLUSTER_COLORS[item.cluster]}`}>{item.cluster}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${FUNNEL_COLORS[item.funnel]}`}>{item.funnel}</span>
                          <span className="text-sm text-white/80 flex-1">{item.titulo}</span>
                          <Link href={item.lp} className="text-xs text-[#46C1F1] hover:underline font-mono shrink-0">{item.lp}</Link>
                          <a href={getClickUpLink(item.titulo)} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] bg-[#46C1F1]/20 text-[#46C1F1] border border-[#46C1F1]/30 px-3 py-1 rounded-lg hover:bg-[#46C1F1]/30 font-bold shrink-0 transition-colors whitespace-nowrap">
                            + ClickUp
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-xs text-white/40 mb-3">📌 Cadência recomendada</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  {[
                    { freq: "2× por semana", tipo: "Artigo SEO (Awareness/Consideration)", cor: "text-[#46C1F1]" },
                    { freq: "1× por semana", tipo: "Post Social (Reels/Carrossel)", cor: "text-pink-400" },
                    { freq: "1× por mês", tipo: "Conteúdo B2B (LinkedIn/Email)", cor: "text-amber-400" },
                  ].map(c => (
                    <div key={c.freq} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className={`text-lg font-black ${c.cor}`}>{c.freq}</p>
                      <p className="text-xs text-white/50 mt-1">{c.tipo}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── LOCAL SEO ── */}
          {activeSection === "local" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">SEO Local</h2>
                <p className="text-white/50 text-sm">10 cidades do Vale do Paraíba — estratégia de expansão geográfica.</p>
              </div>
              {[
                { cidade: "São José dos Campos", status: "LP + 4 artigos", prioridade: "P0", pop: "730k", lp: "/sao-jose-dos-campos", cor: "text-green-400" },
                { cidade: "Vale do Paraíba (Hub)", status: "LP publicada", prioridade: "P0", pop: "2M+", lp: "/vale-do-paraiba", cor: "text-green-400" },
                { cidade: "Taubaté", status: "LP publicada", prioridade: "P0", pop: "330k", lp: "/taubate", cor: "text-[#46C1F1]" },
                { cidade: "Jacareí", status: "LP publicada", prioridade: "P1", pop: "240k", lp: "/jacarei", cor: "text-[#46C1F1]" },
                { cidade: "Lorena / Guaratinguetá", status: "LP publicada", prioridade: "P1", pop: "190k", lp: "/lorena-guaratingueta", cor: "text-[#46C1F1]" },
                { cidade: "Caçapava", status: "Planejar", prioridade: "P2", pop: "100k", lp: "", cor: "text-white/30" },
                { cidade: "Pindamonhangaba", status: "Planejar", prioridade: "P2", pop: "170k", lp: "", cor: "text-white/30" },
                { cidade: "Tremembé", status: "Planejar", prioridade: "P3", pop: "50k", lp: "", cor: "text-white/30" },
                { cidade: "Aparecida", status: "Planejar", prioridade: "P3", pop: "38k", lp: "", cor: "text-white/30" },
                { cidade: "Campos do Jordão", status: "Planejar", prioridade: "P3", pop: "52k", lp: "", cor: "text-white/30" },
              ].map(c => (
                <div key={c.cidade} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 transition-colors">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${c.prioridade === "P0" ? "bg-red-500/20 text-red-400" : c.prioridade === "P1" ? "bg-orange-500/20 text-orange-400" : c.prioridade === "P2" ? "bg-yellow-500/20 text-yellow-400" : "bg-white/10 text-white/30"}`}>{c.prioridade}</span>
                  <span className="font-semibold text-sm w-52 shrink-0">{c.cidade}</span>
                  <span className="text-xs text-white/30 w-12 shrink-0">{c.pop}</span>
                  <span className={`text-xs flex-1 ${c.cor}`}>{c.status}</span>
                  {c.lp ? <Link href={c.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{c.lp}</Link> : (
                    <a href={getClickUpLink(`LP Cidade: ${c.cidade}`)} target="_blank" rel="noopener noreferrer"
                      className="text-[10px] bg-[#46C1F1]/20 text-[#46C1F1] px-2 py-0.5 rounded hover:bg-[#46C1F1]/30 font-bold transition-colors">+ ClickUp</a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── CLASSIFIER ── */}
          {activeSection === "classifier" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Classificador Automático</h2>
                <p className="text-white/50 text-sm">Cole o título de qualquer novo artigo — o sistema classifica, conecta à LP e gera task no ClickUp.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex gap-3">
                  <input type="text" value={classifierInput} onChange={e => setClassifierInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && classifierInput.trim() && setClassifierResult(classifyArticle(classifierInput))}
                    placeholder="Ex: Como tirar mancha de café da roupa..."
                    className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#46C1F1]/50" />
                  <button onClick={() => classifierInput.trim() && setClassifierResult(classifyArticle(classifierInput))}
                    className="bg-[#46C1F1] text-black font-black px-6 py-3 rounded-xl hover:bg-[#46C1F1]/80 transition-colors text-sm">Classificar</button>
                </div>

                {classifierResult && (
                  <div className="mt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                        <p className="text-xs text-white/40 uppercase tracking-widest">Análise</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/50">Cluster:</span>
                          <button onClick={() => { const cd = CLUSTERS_MOS.find(c => c.nome === classifierResult.cluster); if (cd) setSelectedCluster(cd); }}
                            className={`text-xs font-bold px-2 py-0.5 rounded-full hover:ring-1 hover:ring-white/30 transition-all ${CLUSTER_COLORS[classifierResult.cluster]}`}>
                            {classifierResult.cluster} →
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/50">Funil:</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${FUNNEL_COLORS[classifierResult.funnel]}`}>{classifierResult.funnel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/50">LP alvo:</span>
                          <Link href={classifierResult.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{classifierResult.lp}</Link>
                        </div>
                        <div>
                          <span className="text-xs text-white/50 block mb-1">Monetização:</span>
                          <p className="text-xs text-green-400">{classifierResult.monetizacao}</p>
                        </div>
                        <a href={getClickUpLink(classifierInput)} target="_blank" rel="noopener noreferrer"
                          className="block w-full text-center text-sm bg-[#46C1F1]/20 text-[#46C1F1] border border-[#46C1F1]/30 px-4 py-2.5 rounded-xl hover:bg-[#46C1F1]/30 font-bold transition-colors mt-2">
                          + Criar task no ClickUp
                        </a>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Conteúdo relacionado</p>
                        <ul className="space-y-2 mb-4">
                          {classifierResult.sugestoes.map(s => (
                            <li key={s} className="flex gap-2 text-xs">
                              <span className="text-orange-400 shrink-0">→</span>
                              <span className="text-orange-300/80 flex-1">{s}</span>
                              <a href={getClickUpLink(s)} target="_blank" rel="noopener noreferrer"
                                className="text-[10px] text-[#46C1F1]/60 hover:text-[#46C1F1] shrink-0 transition-colors">+ CU</a>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Social media</p>
                        {classifierResult.social.map((s, i) => (
                          <div key={i} className="flex gap-2 items-start p-2 rounded bg-white/5 border border-white/10 mb-1.5">
                            <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white shrink-0 ${SOCIAL_COLORS[s.plataforma] ?? "bg-gray-600"}`}>{s.plataforma}</span>
                            <span className="text-xs text-white/60">{s.angulo}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
