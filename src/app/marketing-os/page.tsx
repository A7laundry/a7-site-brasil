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
  "/lavanderia-de-terno": true, "/lavanderia-express": true,
  "/lavanderia/cacapava": true, "/lavanderia/pindamonhangaba": true,
  "/lavanderia/guaratingueta": true, "/lavanderia/campos-do-jordao": true,
  "/lavanderia/lorena": true, "/lavanderia/cruzeiro": true,
  "/lavanderia/aparecida": true, "/lavanderia/potim": true,
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
  { slug: "quanto-custa-lavanderia", title: "Quanto custa uma lavanderia? Guia de preços 2025", cluster: "Local", funnel: "Decisão", intent: "Transacional", lp: "/precos", monetization: "Todos os serviços", gap: "Calculadora de orçamento interativa" },
  { slug: "lavanderia-coleta-domicilio-sjc", title: "Lavanderia com coleta em domicílio em SJC", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/sao-jose-dos-campos", monetization: "Todos os serviços", gap: "Coleta express em outros bairros" },
  { slug: "plano-mensal-lavanderia-vale", title: "Plano mensal de lavanderia: vale a pena?", cluster: "Organização", funnel: "Retenção", intent: "Transacional", lp: "/plano-mensal", monetization: "Plano mensal recorrente", gap: "Comparativo planos família vs. casal" },
  { slug: "como-escolher-lavanderia", title: "Como escolher uma lavanderia: 7 critérios", cluster: "Local", funnel: "Decisão", intent: "Transacional", lp: "/como-funciona", monetization: "Todos os serviços", gap: "Checklist imprimível para escolha" },
  { slug: "lavanderia-vs-lavar-em-casa", title: "Lavanderia ou lavar em casa? Comparativo", cluster: "Organização", funnel: "Consideration", intent: "Transacional", lp: "/lavanderia-ou-lavar-em-casa", monetization: "Todos os serviços", gap: "Calculadora de custo real" },
  { slug: "lavanderia-para-airbnb", title: "Lavanderia para Airbnb: como funciona", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/airbnb", monetization: "Contrato Airbnb/temporada", gap: "Modelo de contrato para múltiplos imóveis" },
  { slug: "terceirizar-lavanderia-empresa", title: "Terceirizar lavanderia: quando vale a pena", cluster: "B2B", funnel: "Decisão", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B corporativo", gap: "Calculadora de ROI interativa" },
  { slug: "lavanderia-para-academias-spas", title: "Lavanderia para academias e spas", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B academia/spa", gap: "SLA garantido para alto volume" },
  { slug: "gestao-uniforme-corporativo", title: "Gestão de uniformes corporativos", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/uniformes", monetization: "Contrato B2B uniforme", gap: "Software de controle de estoque" },
  { slug: "lavanderia-para-condominios", title: "Lavanderia para condomínios", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/condominios", monetization: "Contrato B2B condomínio", gap: "Proposta para assembleia de condomínio" },
  // ── EPIC-02 · B2B Cluster ─────────────────────────────────────────────────
  { slug: "lavanderia-para-clinicas-consultorios", title: "Lavanderia para clínicas e consultórios", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B saúde", gap: "Protocolo ANVISA para lavagem de jalecos" },
  { slug: "lavanderia-para-coworking-escritorios", title: "Lavanderia para coworking e escritórios", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B escritório", gap: "Gestão de uniforme para recepção" },
  { slug: "quanto-custa-terceirizar-lavanderia-empresa", title: "Quanto custa terceirizar lavanderia para empresa", cluster: "B2B", funnel: "Decisão", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B corporativo", gap: "Calculadora de custo interno vs. terceirizado" },
  { slug: "lavanderia-para-pousadas-pequenos-hoteis", title: "Lavanderia para pousadas e pequenos hotéis", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/hotelaria", monetization: "Contrato B2B hotelaria", gap: "SLA de enxoval para pousadas sazonais" },
  { slug: "contrato-lavanderia-corporativa-o-que-exigir", title: "Contrato de lavanderia corporativa: o que exigir", cluster: "B2B", funnel: "Decisão", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B corporativo", gap: "Minuta de contrato para download" },
  { slug: "lavanderia-para-saloes-beleza-estetica", title: "Lavanderia para salões de beleza e estética", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/empresarial", monetization: "Contrato B2B beleza", gap: "Processo para toalhas com tintura" },
  { slug: "lavanderia-industria-uniformes-epi", title: "Lavanderia para indústria: uniformes e EPIs", cluster: "B2B", funnel: "Consideration", intent: "Comercial", lp: "/uniformes", monetization: "Contrato B2B indústria", gap: "Laudo de higienização para auditoria NR-6" },
  // ── EPIC-02 · Cidades / Local SEO ─────────────────────────────────────────
  { slug: "lavanderia-cacapava", title: "Lavanderia em Caçapava: coleta e entrega", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/cacapava", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/cacapava (ativa)" },
  { slug: "lavanderia-pindamonhangaba", title: "Lavanderia em Pindamonhangaba: coleta e entrega", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/pindamonhangaba", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/pindamonhangaba (ativa)" },
  { slug: "lavanderia-guaratingueta", title: "Lavanderia em Guaratinguetá: coleta e entrega", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/guaratingueta", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/guaratingueta (ativa)" },
  { slug: "lavanderia-campos-do-jordao", title: "Lavanderia em Campos do Jordão: pousadas e residências", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/campos-do-jordao", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/campos-do-jordao (ativa)" },
  { slug: "lavanderia-lorena", title: "Lavanderia em Lorena: coleta e entrega", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/lorena", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/lorena (ativa)" },
  { slug: "lavanderia-cruzeiro", title: "Lavanderia em Cruzeiro: coleta e entrega", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/cruzeiro", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/cruzeiro (ativa)" },
  { slug: "lavanderia-aparecida", title: "Lavanderia em Aparecida: coleta e pousadas", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/aparecida", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/aparecida (ativa)" },
  { slug: "lavanderia-potim", title: "Lavanderia em Potim: coleta e entrega", cluster: "Local", funnel: "Decisão", intent: "Navegacional", lp: "/lavanderia/potim", monetization: "Todos os serviços", gap: "LP dedicada /lavanderia/potim (ativa)" },
  // ── EPIC-02 · Manchas Cluster ─────────────────────────────────────────────
  { slug: "como-tirar-mancha-de-oleo-roupa", title: "Como tirar mancha de óleo de roupa", cluster: "Manchas", funnel: "Awareness", intent: "Informacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Óleo de motor vs. óleo de cozinha: tratamentos diferentes" },
  { slug: "como-tirar-mancha-de-vinho-roupa", title: "Como tirar mancha de vinho da roupa", cluster: "Manchas", funnel: "Awareness", intent: "Informacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Mancha de vinho em tecidos delicados: guia específico" },
  { slug: "como-tirar-mancha-de-mofo-roupa", title: "Como tirar mancha de mofo de roupa", cluster: "Manchas", funnel: "Awareness", intent: "Informacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Mofo em roupas de inverno guardadas: prevenção" },
  { slug: "como-tirar-mancha-amarela-roupa-branca", title: "Como tirar mancha amarela de roupa branca", cluster: "Manchas", funnel: "Consideration", intent: "Transacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Recuperar camisa branca com manchas antigas de suor" },
  { slug: "lavanderia-especializada-manchas-dificeis", title: "Lavanderia especializada em manchas difíceis", cluster: "Manchas", funnel: "Decisão", intent: "Transacional", lp: "/remocao-manchas", monetization: "Remoção de manchas profissional", gap: "Calculadora: vale tentar em casa ou ir direto à lavanderia?" },
  // ── EPIC-02 · Tênis + Tapetes + Edredom ───────────────────────────────────
  { slug: "lavanderia-de-tenis-como-funciona", title: "Lavanderia de tênis: como funciona e quanto custa", cluster: "Tênis", funnel: "Consideration", intent: "Transacional", lp: "/tenis", monetization: "Limpeza de tênis", gap: "Preço de lavagem de tênis por material" },
  { slug: "lavar-tapete-lavanderia-ou-em-casa", title: "Lavar tapete: lavanderia ou em casa?", cluster: "Tapetes & Casa", funnel: "Consideration", intent: "Transacional", lp: "/tapetes", monetization: "Limpeza de tapetes", gap: "Frequência de lavagem por tipo de tapete" },
  { slug: "lavanderia-edredom-cobertor-colcha", title: "Lavar edredom, cobertor e colcha na lavanderia", cluster: "Saúde & Higiene", funnel: "Consideration", intent: "Transacional", lp: "/higienizacao-edredom", monetization: "Higienização de edredons", gap: "Guia por tipo de enchimento (pluma, fibra, látex)" },
  // ── EPIC-02 · Gap Articles (batch 2) ──────────────────────────────────────
  { slug: "com-que-frequencia-lavar-edredom", title: "Com que frequência lavar edredom? Guia por estação e perfil", cluster: "Saúde & Higiene", funnel: "Awareness", intent: "Informacional", lp: "/higienizacao-edredom", monetization: "Higienização de edredons", gap: "Frequência por perfil: alérgicos, animais, bebês" },
  { slug: "como-tirar-mancha-de-cafe-da-roupa", title: "Como tirar mancha de café da roupa: passo a passo por tipo de café", cluster: "Manchas", funnel: "Awareness", intent: "Informacional", lp: "/remocao-manchas", monetization: "Remoção de manchas", gap: "Café puro vs. café com leite: tratamentos distintos" },
  { slug: "acaros-no-sofa-sinais-e-solucao", title: "Ácaros no sofá: sinais, riscos e como eliminar de vez", cluster: "Saúde & Higiene", funnel: "Awareness", intent: "Informacional", lp: "/sofas", monetization: "Higienização de sofás", gap: "Guia de identificação e frequência recomendada" },
  { slug: "quanto-custa-higienizar-sofa-profissional", title: "Quanto custa higienizar sofá profissional em SJC e região", cluster: "Tapetes & Casa", funnel: "Decisão", intent: "Transacional", lp: "/sofas", monetization: "Higienização de sofás", gap: "Tabela de preços por tipo e tamanho de sofá" },
  { slug: "preco-lavagem-tenis-sao-jose-dos-campos", title: "Preço de lavagem de tênis em São José dos Campos: tabela 2025", cluster: "Tênis", funnel: "Decisão", intent: "Transacional", lp: "/tenis", monetization: "Limpeza de tênis", gap: "Tabela de preços por material + descontos progressivos" },
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
    id: "saude", nome: "Saúde & Higiene", cor: "blue", tw: "bg-blue-500/15 text-blue-400 border-blue-500/25", badge: "bg-blue-500",
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
    id: "manchas", nome: "Manchas", cor: "orange", tw: "bg-orange-500/15 text-orange-400 border-orange-500/25", badge: "bg-orange-500",
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
    id: "tenis", nome: "Tênis", cor: "purple", tw: "bg-purple-500/15 text-purple-400 border-purple-500/25", badge: "bg-purple-500",
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
    id: "roupas", nome: "Roupas Especiais", cor: "indigo", tw: "bg-indigo-500/15 text-indigo-400 border-indigo-500/25", badge: "bg-indigo-500",
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
    id: "tapetes", nome: "Tapetes & Casa", cor: "teal", tw: "bg-teal-500/15 text-teal-400 border-teal-500/25", badge: "bg-teal-500",
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
    id: "sustentavel", nome: "Sustentabilidade", cor: "green", tw: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25", badge: "bg-emerald-500",
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
    id: "organizacao", nome: "Organização", cor: "pink", tw: "bg-pink-500/15 text-pink-400 border-pink-500/25", badge: "bg-pink-500",
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
    id: "b2b", nome: "B2B", cor: "amber", tw: "bg-amber-500/15 text-amber-400 border-amber-500/25", badge: "bg-amber-500",
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
    id: "local", nome: "Local", cor: "cyan", tw: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25", badge: "bg-cyan-500",
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
  { stage: "Awareness" as FunnelStage, icon: "👁", cor: "sky", descricao: "Atrai quem tem o problema mas não conhece a solução", cta: "Blog SEO → captura WhatsApp", kpi: "Impressões, cliques, tempo na página", hex: "#0ea5e9" },
  { stage: "Consideration" as FunnelStage, icon: "🤔", cor: "violet", descricao: "Converte quem está pesquisando a solução profissional", cta: "Comparativo + prova social → WhatsApp", kpi: "CTR para LP, lead WhatsApp", hex: "#8b5cf6" },
  { stage: "Decisão" as FunnelStage, icon: "⚖", cor: "amber", descricao: "Fecha quem já quer contratar e está comparando", cta: "LP com preço + social proof + CTA direto", kpi: "Agendamentos WhatsApp, leads qualificados", hex: "#f59e0b" },
  { stage: "Booking" as FunnelStage, icon: "📅", cor: "emerald", descricao: "Converte o contato em pedido confirmado", cta: "Formulário de coleta / WhatsApp deep link", kpi: "Taxa conversão LP→pedido (meta 3–8%)", hex: "#22c55e" },
  { stage: "Retenção" as FunnelStage, icon: "🔄", cor: "teal", descricao: "Transforma pedido avulso em cliente recorrente", cta: "Oferta plano mensal após 1ª coleta", kpi: "Taxa de recompra, assinantes plano mensal", hex: "#14b8a6" },
  { stage: "Referral" as FunnelStage, icon: "🎁", cor: "rose", descricao: "Transforma clientes em promotores ativos", cta: "R$20 OFF por indicação confirmada", kpi: "NPS > 85, avaliações Google, indicações/mês", hex: "#f43f5e" },
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

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function getClickUpLink(titulo: string): string {
  return `https://app.clickup.com/t/new?name=${encodeURIComponent(`[Blog] ${titulo}`)}&tags=content,seo,blog`;
}

// ─── DARK DESIGN SYSTEM ───────────────────────────────────────────────────────

const CLUSTER_BADGE: Record<string, string> = {
  "Saúde & Higiene": "bg-blue-500/15 text-blue-400 border border-blue-500/25",
  "Manchas": "bg-orange-500/15 text-orange-400 border border-orange-500/25",
  "Tênis": "bg-purple-500/15 text-purple-400 border border-purple-500/25",
  "Roupas Especiais": "bg-indigo-500/15 text-indigo-400 border border-indigo-500/25",
  "Tapetes & Casa": "bg-teal-500/15 text-teal-400 border border-teal-500/25",
  "Sustentabilidade": "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  "Organização": "bg-pink-500/15 text-pink-400 border border-pink-500/25",
  "B2B": "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  "Local": "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
};

const CLUSTER_BAR_COLOR: Record<string, string> = {
  "Saúde & Higiene": "#3b82f6", "Manchas": "#f97316", "Tênis": "#a855f7",
  "Roupas Especiais": "#6366f1", "Tapetes & Casa": "#14b8a6",
  "Sustentabilidade": "#22c55e", "Organização": "#ec4899",
  "B2B": "#f59e0b", "Local": "#06b6d4",
};

const FUNNEL_BADGE: Record<string, string> = {
  "Awareness": "bg-sky-500/15 text-sky-400",
  "Consideration": "bg-violet-500/15 text-violet-400",
  "Decisão": "bg-amber-500/15 text-amber-400",
  "Booking": "bg-emerald-500/15 text-emerald-400",
  "Retenção": "bg-teal-500/15 text-teal-400",
  "Referral": "bg-rose-500/15 text-rose-400",
};

const SOCIAL_BADGE: Record<string, string> = {
  "Instagram": "bg-pink-500", "TikTok": "bg-zinc-900 border border-zinc-700",
  "LinkedIn": "bg-blue-700", "Pinterest": "bg-red-600",
  "YouTube": "bg-red-500", "Google Business": "bg-blue-500",
  "WhatsApp": "bg-green-600", "YouTube Shorts": "bg-red-500",
};

const SECTIONS = [
  { id: "overview", label: "Dashboard", icon: "⚡", desc: "Command Center" },
  { id: "score", label: "Score", icon: "◎", desc: "Plan tracker" },
  { id: "marca", label: "Marca", icon: "◐", desc: "Brand OS" },
  { id: "onboarding", label: "Onboarding", icon: "◐", desc: "Guia operacional" },
  { id: "inventory", label: "Content Engine", icon: "✦", desc: "40 artigos" },
  { id: "clusters", label: "SEO Clusters", icon: "◈", desc: "9 clusters" },
  { id: "funil", label: "Funil Visual", icon: "▼", desc: "6 etapas" },
  { id: "calendario", label: "Calendário", icon: "◷", desc: "30 dias" },
  { id: "local", label: "Local SEO", icon: "◉", desc: "10 cidades" },
  { id: "classifier", label: "IA Classifier", icon: "◎", desc: "Auto tag" },
];

// ─── SCORE BREAKDOWN ──────────────────────────────────────────────────────────

const SCORE_BREAKDOWN = [
  { id: "content",  icon: "✦", label: "Conteúdo Publicado", desc: "artigos SEO no ar",           pts: 30, current: 68, target: 70,  hex: "#6366f1", tw: "indigo" },
  { id: "lps",      icon: "◉", label: "Landing Pages",      desc: "LPs ativas e otimizadas",     pts: 20, current: 40, target: 40,  hex: "#22c55e", tw: "emerald" },
  { id: "clusters", icon: "◈", label: "Clusters SEO",        desc: "clusters com ≥3 artigos",     pts: 15, current: 9,  target: 9,   hex: "#a855f7", tw: "purple" },
  { id: "local",    icon: "◉", label: "SEO Local",           desc: "cidades com LP dedicada",     pts: 15, current: 13, target: 13,  hex: "#f59e0b", tw: "amber" },
  { id: "gaps",     icon: "▼", label: "Gaps Fechados",       desc: "lacunas de conteúdo resolvidas", pts: 20, current: 28, target: 47, hex: "#ef4444", tw: "red" },
];

const SCORE_TOTAL = Math.round(
  SCORE_BREAKDOWN.reduce((acc, s) => acc + (s.current / s.target) * s.pts, 0)
);

const SCORE_GRADE = SCORE_TOTAL >= 90 ? { label: "Líder", color: "#6366f1" }
  : SCORE_TOTAL >= 75 ? { label: "Dominando", color: "#22c55e" }
  : SCORE_TOTAL >= 60 ? { label: "Crescendo", color: "#22d3ee" }
  : SCORE_TOTAL >= 40 ? { label: "Construindo", color: "#f59e0b" }
  : { label: "Iniciante", color: "#ef4444" };

// ─── ONBOARDING MODULES ───────────────────────────────────────────────────────

const ONBOARDING_MODULES = [
  {
    icon: "⚡", color: "#6366f1",
    title: "Ecossistema Digital A7",
    desc: "Stack, URLs de produção e visão geral da arquitetura",
    items: [
      { type: "url",  label: "Produção",     value: "https://a7lavanderia.vercel.app" },
      { type: "url",  label: "Marketing OS", value: "https://a7lavanderia.vercel.app/marketing-os" },
      { type: "info", label: "Stack",        value: "Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion" },
      { type: "info", label: "Deploy",       value: "Vercel — auto-deploy ao push para branch `main` (~2 min)" },
      { type: "info", label: "Repositório",  value: "GitHub: A7laundry/a7-site-brasil" },
    ],
    note: "Todo push para `main` dispara o build na Vercel automaticamente. Não precisa de ação manual.",
  },
  {
    icon: "📁", color: "#22d3ee",
    title: "Estrutura do Projeto",
    desc: "Onde fica cada coisa no repositório",
    items: [
      { type: "code", label: "src/app/",               value: "Rotas e páginas (App Router). Cada pasta = uma URL pública." },
      { type: "code", label: "src/components/",         value: "Componentes React. HomeRedesign.tsx = homepage completa." },
      { type: "code", label: "src/content/blog/",       value: "Artigos em .mdx — um arquivo por artigo. Slug = nome do arquivo." },
      { type: "code", label: "src/lib/constants.ts",    value: "Fonte de verdade: empresa, serviços, depoimentos, FAQ, WhatsApp links." },
      { type: "code", label: "src/lib/schemas.ts",      value: "JSON-LD schemas SEO (LocalBusiness, FAQ, Organization, Breadcrumb)." },
      { type: "code", label: "public/",                 value: "Assets estáticos: logos, imagens, robots.txt, sitemap.xml." },
    ],
    note: "Nunca edite arquivos dentro de `.next/` — são gerados automaticamente pelo build.",
  },
  {
    icon: "✍️", color: "#a855f7",
    title: "Publicar um Artigo de Blog",
    desc: "Passo a passo para criar e publicar conteúdo SEO",
    items: [
      { type: "step", label: "1. Criar arquivo", value: "Crie `src/content/blog/[slug-do-artigo].mdx` (slug em kebab-case, sem acentos)" },
      { type: "step", label: "2. Frontmatter",   value: "Preencha: title, excerpt, category, image (Unsplash URL), publishedAt (YYYY-MM-DD), author, readingTime, seoTitle, seoDescription, tags" },
      { type: "step", label: "3. Conteúdo",      value: "Escreva em Markdown. Use ## para H2, **negrito**, listas. Mínimo 400 palavras." },
      { type: "step", label: "4. Marketing OS",  value: "Adicione o artigo ao array ARTICLES em `/marketing-os/page.tsx` com slug, cluster, funnel, lp e monetizacao" },
      { type: "step", label: "5. Deploy",        value: "git add src/content/blog/[slug].mdx && git commit -m 'feat: artigo [título]' && git push" },
    ],
    note: "O artigo aparece automaticamente em /blog/[slug] após o deploy. Confira o SEO antes: seoTitle máx 60 chars, seoDescription máx 160 chars.",
  },
  {
    icon: "🏪", color: "#22c55e",
    title: "Criar / Editar Landing Page",
    desc: "Como criar uma nova LP ou editar uma existente",
    items: [
      { type: "step", label: "1. Copiar modelo",   value: "Duplique `/src/app/tapetes/page.tsx` como base — tem o padrão completo de LP com schema, hero, benefícios e CTAs." },
      { type: "step", label: "2. Editar conteúdo", value: "Ajuste título, descrição, imagem hero, benefícios, FAQ e WhatsApp link. Dados da empresa ficam em `constants.ts`." },
      { type: "step", label: "3. Registrar no OS", value: "Adicione a rota ao LP_ACTIVE em `marketing-os/page.tsx` e ao CITY_LPS em `HomeRedesign.tsx` se for LP de cidade." },
      { type: "step", label: "4. SEO checklist",   value: "seoTitle único com keyword, seoDescription com CTA, H1 com keyword, URL limpa, schema JSON-LD, links internos." },
      { type: "step", label: "5. Deploy",          value: "git add src/app/[slug]/ && git commit -m 'feat: LP [nome]' && git push" },
    ],
    note: "LPs locais (ex: /taubate) têm peso SEO alto — priorize as cidades que ainda estão sem cobertura no Local SEO Map.",
  },
  {
    icon: "🔧", color: "#f59e0b",
    title: "Workflow de Deploy",
    desc: "Do desenvolvimento ao ar em produção",
    items: [
      { type: "cmd", label: "Servidor local",   value: "npm run dev — abre em http://localhost:3000" },
      { type: "cmd", label: "Validar build",    value: "npm run build — rode sempre antes de commitar para capturar erros TypeScript" },
      { type: "cmd", label: "Checar linting",   value: "npm run lint — garante padrão de código" },
      { type: "cmd", label: "Commitar",         value: "git add [arquivos] && git commit -m 'feat: descrição clara'" },
      { type: "cmd", label: "Deploy",           value: "git push origin main — Vercel faz o deploy automaticamente em ~2 min" },
      { type: "cmd", label: "Verificar",        value: "Acesse a7lavanderia.vercel.app e confira a mudança em produção" },
    ],
    note: "Use Conventional Commits: feat: (novo), fix: (bug), refactor: (melhoria), docs: (texto). Isso facilita o histórico do projeto.",
  },
  {
    icon: "📊", color: "#ef4444",
    title: "Usando o Marketing OS",
    desc: "Guia rápido de cada seção do dashboard",
    items: [
      { type: "info", label: "Dashboard",       value: "Visão geral: Score, clusters, oportunidades, funil e insights. Ponto de partida diário." },
      { type: "info", label: "Score",           value: "Mede o progresso do plano em 5 categorias (0–100). Mostra o que está puxando o score para baixo." },
      { type: "info", label: "Content Engine",  value: "Inventário completo de 40 artigos com filtro por cluster e funil. Identifica gaps de cobertura." },
      { type: "info", label: "SEO Clusters",    value: "9 clusters temáticos. Clique em qualquer cluster para ver artigos, gaps e ideias de social media." },
      { type: "info", label: "Funil Visual",    value: "Distribuição de artigos por etapa do funil (Awareness → Referral). Identifica etapas subrecobertas." },
      { type: "info", label: "Calendário",      value: "Planejamento de conteúdo dos próximos 30 dias. Clique em cada dia para abrir task no ClickUp." },
      { type: "info", label: "Local SEO",       value: "Grid das 13 cidades do Vale. Verde = LP ativa, cinza = sem cobertura (oportunidade prioritária)." },
      { type: "info", label: "IA Classifier",   value: "Cole um título de artigo para classificar automaticamente cluster, funil, LP e sugestões de conteúdo." },
    ],
    note: "O Marketing OS é atualizado manualmente por enquanto. Sempre que publicar novo artigo, adicione ao ARTICLES no código.",
  },
  {
    icon: "📍", color: "#06b6d4",
    title: "SEO Checklist por Página",
    desc: "O que verificar antes de publicar qualquer página",
    items: [
      { type: "check", label: "seoTitle",          value: "Único, com keyword principal, máximo 60 caracteres" },
      { type: "check", label: "seoDescription",    value: "Com CTA (ex: 'Saiba mais', 'Solicite orçamento'), máximo 160 caracteres" },
      { type: "check", label: "H1",                value: "Contém a keyword principal — único por página" },
      { type: "check", label: "URL",               value: "Limpa, sem acentos, em kebab-case, com keyword" },
      { type: "check", label: "Imagem hero",       value: "Alt text descritivo com keyword, mínimo 1200px largura" },
      { type: "check", label: "Links internos",    value: "Ao menos 1 link para LP relacionada + 1 link para artigo do mesmo cluster" },
      { type: "check", label: "Schema JSON-LD",    value: "LPs de cidade: LocalBusiness. FAQ presente: FAQPage. Homepage já tem todos." },
      { type: "check", label: "CTA WhatsApp",      value: "Toda página deve ter ao menos 1 CTA para WhatsApp usando getWhatsAppLink()" },
    ],
    note: "Para LPs de cidade, inclua o nome da cidade no H1, seoTitle, seoDescription e na URL. Isso multiplica a visibilidade local.",
  },
  {
    icon: "🗓️", color: "#34d399",
    title: "Operação Semanal & Mensal",
    desc: "Rotina de manutenção e crescimento do site",
    items: [
      { type: "week", label: "Segunda",    value: "Publicar 1 artigo de gap crítico (prioridade: B2B → Local → Manchas → Tapetes)" },
      { type: "week", label: "Quarta",     value: "Checar Google Search Console (quando configurado) — impressões, cliques, posições" },
      { type: "week", label: "Sexta",      value: "Atualizar ARTICLES no Marketing OS se novos artigos foram publicados" },
      { type: "month", label: "Mês 1",    value: "Criar LPs para Caçapava, Pindamonhangaba e Campos do Jordão → +9 pts no Score" },
      { type: "month", label: "Mês 2",    value: "Publicar 10 artigos de gaps B2B e Local → fechar maior gap de score" },
      { type: "month", label: "Mês 3",    value: "Revisão geral: top 5 páginas por conversão, atualização de depoimentos e stats" },
    ],
    note: "Meta de score: sair de 55 → 70 pts em 60 dias. Isso exige: 10 novos artigos + 3 LPs de cidade + fechar 8 gaps de B2B.",
  },
];

const SCORE_MILESTONES = [
  { pts: 60, title: "Crescendo", desc: "Publicar 10 artigos de gaps críticos (B2B + Manchas)", done: SCORE_TOTAL >= 60 },
  { pts: 70, title: "Tração SEO", desc: "Criar LPs para Caçapava, Pindamonhangaba e Campos do Jordão", done: SCORE_TOTAL >= 70 },
  { pts: 80, title: "Dominando", desc: "Fechar 50% dos gaps — 23 novos artigos publicados", done: SCORE_TOTAL >= 80 },
  { pts: 90, title: "Líder Regional", desc: "100% dos gaps fechados + todas as cidades do Vale mapeadas", done: SCORE_TOTAL >= 90 },
  { pts: 100, title: "Autoridade Total", desc: "Pilar pages completas + expansão para novos clusters", done: SCORE_TOTAL >= 100 },
];

// ─── CLASSIFIER LOGIC ─────────────────────────────────────────────────────────

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
  const [activeOnboardingModule, setActiveOnboardingModule] = useState<number | null>(0);
  const [classifierResult, setClassifierResult] = useState<ReturnType<typeof classifyArticle> | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalArticles = ARTICLES.length;
  const totalGaps = CLUSTERS_MOS.reduce((s, c) => s + c.gap, 0);

  const filteredArticles = useMemo(() => ARTICLES.filter(a =>
    (clusterFilter === "Todos" || a.cluster === clusterFilter) &&
    (funnelFilter === "Todos" || a.funnel === funnelFilter)
  ), [clusterFilter, funnelFilter]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans flex">

      {/* ── SLIDE-OVER CLUSTER DETAIL ────────────────────────────────────────── */}
      {selectedCluster && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedCluster(null)} />
          <div className="w-full md:max-w-xl bg-[#0e0e13] border-l border-[#1e1e28] overflow-y-auto flex flex-col">
            <div className="sticky top-0 bg-[#0e0e13]/95 backdrop-blur border-b border-[#1e1e28] px-4 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-lg border ${selectedCluster.tw}`}>{selectedCluster.nome}</span>
                <span className="text-xs text-zinc-600">{ARTICLES.filter(a => a.cluster === selectedCluster.nome).length} artigos · <span className="text-amber-400">+{selectedCluster.gap} gaps</span></span>
              </div>
              <button onClick={() => setSelectedCluster(null)} className="text-zinc-600 hover:text-zinc-300 text-xl leading-none w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all">×</button>
            </div>
            <div className="p-4 md:p-6 space-y-6 flex-1">
              <div>
                <p className="text-[10px] text-cyan-500/60 uppercase tracking-widest mb-2 font-bold">Pillar Page</p>
                <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-xl p-4">
                  <p className="text-sm font-semibold text-zinc-200 leading-relaxed">{selectedCluster.pilar}</p>
                  <Link href={selectedCluster.lp} className="text-xs text-cyan-400 mt-2 block hover:underline font-mono">{selectedCluster.lp} →</Link>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2 font-bold">Artigos publicados</p>
                <div className="space-y-1.5">
                  {ARTICLES.filter(a => a.cluster === selectedCluster.nome).map(a => (
                    <Link key={a.slug} href={`/blog/${a.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-[#1e1e28] hover:border-cyan-500/20 transition-all group">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${FUNNEL_BADGE[a.funnel]}`}>{a.funnel}</span>
                      <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors flex-1">{a.title}</span>
                      <span className="text-cyan-500 opacity-0 group-hover:opacity-100 text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-amber-500/60 uppercase tracking-widest mb-2 font-bold">Gaps — conteúdo em falta</p>
                <div className="space-y-2">
                  {selectedCluster.proximos.map(p => (
                    <div key={p} className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/15">
                      <span className="text-amber-400 text-xs mt-0.5 shrink-0">+</span>
                      <span className="text-xs text-zinc-400 flex-1">{p}</span>
                      <a href={getClickUpLink(p)} target="_blank" rel="noopener noreferrer"
                        className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded hover:bg-cyan-500/20 transition-colors shrink-0 font-bold border border-cyan-500/20">
                        + ClickUp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-pink-500/60 uppercase tracking-widest mb-2 font-bold">Social Media</p>
                <div className="space-y-2">
                  {selectedCluster.social.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-[#1e1e28]">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded text-white shrink-0 ${SOCIAL_BADGE[s.plataforma] ?? "bg-zinc-700"}`}>{s.plataforma}</span>
                      <div>
                        <span className="text-[10px] text-zinc-600 block mb-0.5">{s.formato}</span>
                        <span className="text-xs text-zinc-400">{s.angulo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-amber-400/60 uppercase tracking-widest mb-2 font-bold">Insights estratégicos</p>
                <div className="space-y-2">
                  {selectedCluster.insights.map((ins, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15">
                      <span className="text-amber-400 text-xs mt-0.5 shrink-0">💡</span>
                      <p className="text-xs text-zinc-400">{ins}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest mb-2 font-bold">Monetização</p>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                  <p className="text-xs text-emerald-400">{selectedCluster.monetizacao}</p>
                  <p className="text-[10px] text-zinc-600 mt-1">{selectedCluster.local}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE DRAWER ────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative w-72 max-w-[85vw] bg-[#0c0c10] border-r border-[#1a1a22] flex flex-col h-full overflow-hidden z-10">
            <div className="px-5 pt-6 pb-5 border-b border-[#1a1a22] flex items-center justify-between">
              <div>
                <img src="/logo-light.png" alt="A7 Lavanderia" className="h-7 w-auto mb-3" />
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black tracking-[0.25em] text-indigo-400 uppercase">Marketing OS</span>
                  <span className="text-[9px] bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 px-1.5 py-0.5 rounded font-mono">v2</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-zinc-500 hover:text-zinc-200 w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/5 transition-all text-xl">×</button>
            </div>
            <nav className="p-3 space-y-0.5 flex-1 overflow-y-auto">
              {SECTIONS.map(s => (
                <button key={s.id} onClick={() => { setActiveSection(s.id); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all border ${
                    activeSection === s.id
                      ? "bg-indigo-500/10 border-indigo-500/20"
                      : "border-transparent hover:bg-white/[0.035]"
                  }`}>
                  <span className="text-base w-6 text-center leading-none">{s.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium leading-none ${activeSection === s.id ? "text-zinc-100" : "text-zinc-400"}`}>{s.label}</p>
                    <p className={`text-[10px] mt-0.5 ${activeSection === s.id ? "text-indigo-400" : "text-zinc-600"}`}>{s.desc}</p>
                  </div>
                  {activeSection === s.id && <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-[#1a1a22]">
              <Link href="/growth-engine" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
                <span>←</span> Growth Engine
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── SIDEBAR (desktop only) ───────────────────────────────────────────── */}
      <aside className="hidden md:flex w-56 shrink-0 sticky top-0 h-screen flex-col bg-[#0c0c10] border-r border-[#1a1a22] overflow-hidden">
        {/* Logo */}
        <div className="px-5 pt-6 pb-5 border-b border-[#1a1a22]">
          <img src="/logo-light.png" alt="A7 Lavanderia" className="h-7 w-auto mb-4" />
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black tracking-[0.25em] text-indigo-400 uppercase">Marketing OS</span>
            <span className="text-[9px] bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 px-1.5 py-0.5 rounded font-mono">v2</span>
          </div>
          <p className="text-[9px] text-zinc-700 mt-0.5 tracking-wider">Growth Command Center</p>
        </div>

        {/* Nav */}
        <nav className="p-3 space-y-0.5 flex-1 overflow-y-auto">
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all border ${
                activeSection === s.id
                  ? "bg-indigo-500/10 border-indigo-500/20 shadow-sm"
                  : "border-transparent hover:bg-white/[0.035] hover:border-white/5"
              }`}>
              <span className="text-sm w-5 text-center leading-none">{s.icon}</span>
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-medium leading-none ${activeSection === s.id ? "text-zinc-100" : "text-zinc-500"}`}>{s.label}</p>
                <p className={`text-[10px] mt-0.5 ${activeSection === s.id ? "text-indigo-400" : "text-zinc-700"}`}>{s.desc}</p>
              </div>
              {activeSection === s.id && <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#1a1a22]">
          <Link href="/growth-engine" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-400 text-xs transition-colors mb-2">
            <span>←</span> Growth Engine
          </Link>
          <p className="text-[9px] text-zinc-800 font-mono">A7 Lavanderia · {new Date().getFullYear()}</p>
        </div>
      </aside>

      {/* ── MAIN ─────────────────────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b border-[#1a1a22] bg-[#09090b]/95 backdrop-blur-xl">
          <div className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-[#1a1a22] text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all shrink-0"
                aria-label="Menu"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="min-w-0">
                <p className="text-[10px] text-zinc-700 font-mono uppercase tracking-wider hidden sm:block">A7 Lavanderia · Vale do Paraíba</p>
                <h1 className="text-sm font-bold text-zinc-200 leading-tight">{SECTIONS.find(s => s.id === activeSection)?.label}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex items-center gap-1.5 text-[10px] md:text-[11px] bg-emerald-500/8 text-emerald-400 border border-emerald-500/20 px-2 md:px-3 py-1.5 rounded-full font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" style={{ boxShadow: "0 0 6px #22c55e" }} />
                <span className="hidden sm:inline">LIVE · </span>{totalArticles} artigos<span className="hidden sm:inline"> · {totalGaps} gaps</span>
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 max-w-5xl w-full mx-auto pb-24 md:pb-8">

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* DASHBOARD (OVERVIEW)                                           */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "overview" && (
            <div className="space-y-8">

              {/* Hero */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full uppercase">Marketing Operating System</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none">Growth Command Center</h2>
                <p className="text-zinc-500 text-sm mt-2">Intelligence dashboard para domínio de SEO, conteúdo e geração de clientes no Vale do Paraíba.</p>
              </div>

              {/* 4 Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Content Engine", val: `${totalArticles}`, sub: "artigos publicados", desc: "9 clusters SEO", bg: "bg-indigo-500/8", border: "border-indigo-500/20", text: "text-indigo-400", glow: "rgba(99,102,241,0.15)", action: () => setActiveSection("inventory") },
                  { label: "SEO Opportunity", val: `${totalGaps}`, sub: "gaps identificados", desc: "artigos em falta", bg: "bg-amber-500/8", border: "border-amber-500/20", text: "text-amber-400", glow: "rgba(245,158,11,0.15)", action: () => setActiveSection("clusters") },
                  { label: "Landing Pages", val: "40", sub: "LPs ativas", desc: "todas publicadas", bg: "bg-emerald-500/8", border: "border-emerald-500/20", text: "text-emerald-400", glow: "rgba(34,197,94,0.15)", action: () => setActiveSection("inventory") },
                  { label: "Local Expansion", val: "21", sub: "cidades mapeadas", desc: "Vale do Paraíba", bg: "bg-cyan-500/8", border: "border-cyan-500/20", text: "text-cyan-400", glow: "rgba(6,182,212,0.15)", action: () => setActiveSection("local") },
                ].map(k => (
                  <button key={k.label} onClick={k.action}
                    className={`${k.bg} border ${k.border} rounded-2xl p-5 text-left hover:scale-[1.02] transition-all cursor-pointer group`}
                    style={{ boxShadow: `0 0 24px ${k.glow}` }}>
                    <p className={`text-[10px] font-black tracking-widest uppercase ${k.text} mb-4`}>{k.label}</p>
                    <p className="text-5xl font-black text-white font-mono leading-none">{k.val}</p>
                    <p className="text-sm text-zinc-300 font-semibold mt-2">{k.sub}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">{k.desc}</p>
                    <p className={`text-xs font-semibold mt-3 ${k.text} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                      Ver detalhes <span>→</span>
                    </p>
                  </button>
                ))}
              </div>

              {/* Marketing Score Banner */}
              {(() => {
                const r = 36; const circ = 2 * Math.PI * r;
                const offset = circ * (1 - SCORE_TOTAL / 100);
                return (
                  <button onClick={() => setActiveSection("score")}
                    className="w-full bg-[#111115] border border-[#1a1a22] hover:border-indigo-500/30 rounded-2xl p-4 md:p-5 flex items-center gap-4 md:gap-6 transition-all group text-left"
                    style={{ boxShadow: `0 0 40px rgba(99,102,241,0.06)` }}>
                    {/* Circular gauge */}
                    <div className="relative shrink-0 w-20 h-20 flex items-center justify-center">
                      <svg width="80" height="80" className="-rotate-90 absolute inset-0">
                        <circle cx="40" cy="40" r={r} fill="none" stroke="#1a1a22" strokeWidth="7" />
                        <circle cx="40" cy="40" r={r} fill="none" strokeWidth="7" strokeLinecap="round"
                          strokeDasharray={circ} strokeDashoffset={offset}
                          style={{ stroke: SCORE_GRADE.color, transition: "stroke-dashoffset 1.2s ease" }} />
                      </svg>
                      <span className="relative text-xl font-black text-white font-mono leading-none">{SCORE_TOTAL}</span>
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">Marketing Score</p>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full border"
                          style={{ color: SCORE_GRADE.color, borderColor: `${SCORE_GRADE.color}30`, backgroundColor: `${SCORE_GRADE.color}10` }}>
                          {SCORE_GRADE.label}
                        </span>
                      </div>
                      <div className="w-full bg-[#1c1c24] rounded-full h-1.5 overflow-hidden mt-2 mb-2">
                        <div className="h-full rounded-full transition-all" style={{ width: `${SCORE_TOTAL}%`, backgroundColor: SCORE_GRADE.color }} />
                      </div>
                      <p className="text-xs text-zinc-600">{SCORE_TOTAL}/100 pts · próximo milestone: {SCORE_MILESTONES.find(m => !m.done)?.pts ?? 100} pts</p>
                    </div>
                    {/* Category pills */}
                    <div className="hidden lg:flex flex-col gap-1.5 shrink-0">
                      {SCORE_BREAKDOWN.map(s => {
                        const pts = Math.round((s.current / s.target) * s.pts);
                        return (
                          <div key={s.id} className="flex items-center gap-2">
                            <div className="w-20 bg-[#1c1c24] rounded-full h-1 overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${(s.current / s.target) * 100}%`, backgroundColor: s.hex }} />
                            </div>
                            <span className="text-[10px] text-zinc-600 font-mono w-10 text-right">{pts}/{s.pts}</span>
                            <span className="text-[10px] text-zinc-700 w-32 truncate">{s.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    <span className="text-zinc-700 group-hover:text-indigo-400 transition-colors text-sm shrink-0">→</span>
                  </button>
                );
              })()}

              {/* SEO Topic Domination */}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Cobertura de conteúdo</p>
                    <h3 className="text-lg font-black text-zinc-100">SEO Topic Domination</h3>
                  </div>
                  <span className="text-[10px] text-zinc-700 font-mono bg-white/[0.03] border border-[#1a1a22] px-3 py-1.5 rounded-lg">
                    {ARTICLES.length} / {CLUSTERS_MOS.reduce((s, c) => s + ARTICLES.filter(a => a.cluster === c.nome).length + c.gap, 0)} publicados
                  </span>
                </div>
                <div className="space-y-2">
                  {CLUSTERS_MOS.map(c => {
                    const arts = ARTICLES.filter(a => a.cluster === c.nome).length;
                    const total = arts + c.gap;
                    const pct = Math.round((arts / total) * 100);
                    return (
                      <button key={c.id} onClick={() => setSelectedCluster(c)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-[#242430] transition-all group cursor-pointer text-left">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${CLUSTERS_MOS.find(x => x.id === c.id)?.tw} w-36 shrink-0 text-center`}>{c.nome}</span>
                        <div className="flex-1 bg-[#1c1c24] rounded-full h-1.5 overflow-hidden">
                          <div className="h-full rounded-full transition-all group-hover:brightness-125" style={{ width: `${pct}%`, backgroundColor: CLUSTER_BAR_COLOR[c.nome] }} />
                        </div>
                        <span className="text-xs text-zinc-500 font-mono w-10 text-right">{pct}%</span>
                        <span className="text-xs text-zinc-700 w-14 text-right font-mono">{arts}/{total}</span>
                        <span className="text-xs text-amber-500 w-14 text-right">+{c.gap} gaps</span>
                        <span className="text-zinc-700 group-hover:text-indigo-400 transition-colors text-xs shrink-0">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content Opportunities */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Próximas ações</p>
                    <h3 className="text-lg font-black text-zinc-100">Content Opportunities</h3>
                  </div>
                  <span className="text-xs text-zinc-700">{totalGaps} artigos em falta</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { cluster: "B2B" as ClusterKey, prio: "CRÍTICO", prioBg: "bg-red-500/15 text-red-400 border-red-500/25", cardBorder: "border-red-500/20", cardBg: "bg-red-500/5", btnBorder: "border-red-500/25 hover:bg-red-500/10 text-red-400" },
                    { cluster: "Tapetes & Casa" as ClusterKey, prio: "ALTO", prioBg: "bg-amber-500/15 text-amber-400 border-amber-500/25", cardBorder: "border-amber-500/20", cardBg: "bg-amber-500/5", btnBorder: "border-amber-500/25 hover:bg-amber-500/10 text-amber-400" },
                    { cluster: "Tênis" as ClusterKey, prio: "ALTO", prioBg: "bg-amber-500/15 text-amber-400 border-amber-500/25", cardBorder: "border-amber-500/20", cardBg: "bg-amber-500/5", btnBorder: "border-amber-500/25 hover:bg-amber-500/10 text-amber-400" },
                    { cluster: "Local" as ClusterKey, prio: "ALTO", prioBg: "bg-amber-500/15 text-amber-400 border-amber-500/25", cardBorder: "border-amber-500/20", cardBg: "bg-amber-500/5", btnBorder: "border-amber-500/25 hover:bg-amber-500/10 text-amber-400" },
                  ].map(g => {
                    const cd = CLUSTERS_MOS.find(c => c.nome === g.cluster)!;
                    const arts = ARTICLES.filter(a => a.cluster === g.cluster).length;
                    return (
                      <div key={g.cluster} className={`rounded-2xl border ${g.cardBorder} ${g.cardBg} p-5`}>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${g.prioBg}`}>{g.prio}</span>
                          <span className="text-xs text-zinc-700 font-mono">{arts} publs.</span>
                        </div>
                        <h4 className="text-xl font-black text-white mb-1">{g.cluster}</h4>
                        <p className="text-xs text-zinc-500 mb-4">{cd.gap} artigos faltando · {cd.monetizacao.split("—")[0]?.trim()}</p>
                        <div className="flex gap-2">
                          <button onClick={() => setSelectedCluster(cd)}
                            className={`flex-1 border ${g.btnBorder} rounded-xl px-3 py-2 text-xs font-bold transition-all`}>
                            Ver Plano Completo →
                          </button>
                          <a href={getClickUpLink(`Cluster ${g.cluster} — Content Plan`)} target="_blank" rel="noopener noreferrer"
                            className="border border-[#2a2a35] text-zinc-600 hover:text-zinc-300 hover:border-[#3a3a45] rounded-xl px-3 py-2 text-xs font-bold transition-all whitespace-nowrap">
                            + ClickUp
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Traffic Funnel + Performance */}
              <div className="grid lg:grid-cols-2 gap-4">

                {/* Traffic Funnel */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Conversão</p>
                  <h3 className="text-base font-black text-zinc-100 mb-5">Traffic Funnel</h3>
                  <div className="flex flex-col items-center gap-1.5">
                    {FUNNEL_STAGES_DATA.map((f, i) => {
                      const count = ARTICLES.filter(a => a.funnel === f.stage).length;
                      const widthPcts = [100, 83, 66, 52, 38, 28];
                      return (
                        <button key={f.stage}
                          onClick={() => { setActiveSection("inventory"); setFunnelFilter(f.stage); }}
                          className="rounded-xl px-4 py-2.5 flex items-center justify-between hover:brightness-110 transition-all cursor-pointer"
                          style={{
                            width: `${widthPcts[i]}%`,
                            background: `${f.hex}12`,
                            border: `1px solid ${f.hex}30`,
                          }}>
                          <span className="text-xs font-bold text-zinc-300">{f.stage}</span>
                          <span className="text-xs font-mono" style={{ color: f.hex }}>{count}</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-zinc-700 text-center mt-3">Clique para filtrar inventário</p>
                </div>

                {/* Performance Snapshot */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Métricas</p>
                  <h3 className="text-base font-black text-zinc-100 mb-5">Performance Snapshot</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: "Organic Traffic Est.", val: "~1.2k", sub: "visitas/mês estimadas", color: "#6366f1" },
                      { label: "Keywords Indexadas", val: "40", sub: "artigos SEO ativos", color: "#22d3ee" },
                      { label: "Páginas Publicadas", val: "70", sub: "artigos + LPs", color: "#22c55e" },
                      { label: "Visibilidade Local", val: "5/10", sub: "cidades com LP ativa", color: "#f59e0b" },
                      { label: "Clusters Cobertos", val: "9/9", sub: "100% mapeados", color: "#a855f7" },
                    ].map(m => (
                      <div key={m.label} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.025] border border-[#1a1a22]">
                        <div>
                          <p className="text-xs text-zinc-400 font-medium">{m.label}</p>
                          <p className="text-[10px] text-zinc-700">{m.sub}</p>
                        </div>
                        <span className="text-xl font-black font-mono" style={{ color: m.color }}>{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Local SEO Map + AI Insights */}
              <div className="grid lg:grid-cols-2 gap-4">

                {/* Local Map */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Geografia</p>
                      <h3 className="text-base font-black text-zinc-100">Local SEO Map</h3>
                    </div>
                    <button onClick={() => setActiveSection("local")} className="text-xs text-indigo-400 hover:underline">Ver todas →</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { nome: "São José dos Campos", pop: "730k", status: "active" },
                      { nome: "Taubaté", pop: "330k", status: "active" },
                      { nome: "Jacareí", pop: "240k", status: "active" },
                      { nome: "Vale do Paraíba", pop: "Hub", status: "active" },
                      { nome: "Lorena / Guara.", pop: "190k", status: "active" },
                      { nome: "Caçapava", pop: "100k", status: "planned" },
                      { nome: "Pindamonhangaba", pop: "170k", status: "planned" },
                      { nome: "Campos do Jordão", pop: "52k", status: "planned" },
                    ].map(city => (
                      <div key={city.nome}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border ${city.status === "active" ? "bg-emerald-500/5 border-emerald-500/15" : "bg-[#0e0e12] border-[#1a1a22]"}`}>
                        <span className={`h-2 w-2 rounded-full shrink-0 ${city.status === "active" ? "bg-emerald-500" : "bg-zinc-800"}`}
                          style={city.status === "active" ? { boxShadow: "0 0 6px #22c55e" } : {}} />
                        <div className="min-w-0">
                          <p className={`text-xs font-semibold truncate ${city.status === "active" ? "text-zinc-200" : "text-zinc-700"}`}>{city.nome}</p>
                          <p className="text-[9px] text-zinc-700">{city.pop}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Growth Insights */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="text-[9px] font-black tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded-lg">AI</span>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-0">Inteligência</p>
                      <h3 className="text-base font-black text-zinc-100">Growth Insights</h3>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {CLUSTERS_MOS.flatMap(c => c.insights).slice(0, 5).map((ins, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.025] border border-[#1a1a22] hover:border-amber-500/20 hover:bg-amber-500/3 transition-all">
                        <span className="text-amber-400 text-xs mt-0.5 shrink-0">💡</span>
                        <p className="text-xs text-zinc-500 leading-relaxed">{ins}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gap críticos */}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="h-2 w-2 rounded-full bg-red-500 shrink-0" style={{ boxShadow: "0 0 6px #ef4444" }} />
                  <h3 className="text-base font-black text-zinc-100">Gaps Críticos — Ação Imediata</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { gap: "Cluster B2B tem maior ROI (R$500–R$5k/mês) com 5 gaps abertos — alta prioridade", prio: "CRÍTICO", cluster: "B2B" as ClusterKey },
                    { gap: "Tênis — alto engajamento viral nas redes, só 1 artigo publicado + 5 gaps pendentes", prio: "ALTO", cluster: "Tênis" as ClusterKey },
                    { gap: "Tapetes & Casa — sofá e tapete têm ticket alto, 6 cidades sem artigo específico", prio: "ALTO", cluster: "Tapetes & Casa" as ClusterKey },
                    { gap: "Local SEO converte 5x mais — 6 cidades do Vale do Paraíba sem cobertura de artigo", prio: "ALTO", cluster: "Local" as ClusterKey },
                  ].map(g => {
                    const cd = CLUSTERS_MOS.find(c => c.nome === g.cluster);
                    return (
                      <button key={g.gap} onClick={() => cd && setSelectedCluster(cd)}
                        className="flex gap-3 p-4 bg-white/[0.025] rounded-xl border border-[#1a1a22] text-left hover:border-[#2a2a35] hover:bg-white/[0.04] transition-all group cursor-pointer">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded self-start mt-0.5 shrink-0 ${g.prio === "CRÍTICO" ? "bg-red-500/15 text-red-400 border border-red-500/25" : "bg-amber-500/15 text-amber-400 border border-amber-500/25"}`}>{g.prio}</span>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors flex-1 leading-relaxed">{g.gap}</p>
                        <span className="text-zinc-700 group-hover:text-indigo-400 transition-colors text-xs shrink-0 self-start mt-0.5">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* SCORE                                                          */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "score" && (() => {
            const r = 72; const circ = 2 * Math.PI * r;
            const offset = circ * (1 - SCORE_TOTAL / 100);
            const nextMilestone = SCORE_MILESTONES.find(m => !m.done);
            return (
              <div className="space-y-8">

                {/* Header */}
                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase mb-2">Controle do Plano</p>
                  <h2 className="text-4xl font-black text-white tracking-tight leading-none">Marketing Score</h2>
                  <p className="text-zinc-500 text-sm mt-2">Score calculado em tempo real com base no progresso do plano de marketing A7.</p>
                </div>

                {/* Hero Score */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-10">
                  {/* Big gauge */}
                  <div className="relative shrink-0 w-48 h-48 flex items-center justify-center">
                    <svg width="192" height="192" className="-rotate-90 absolute inset-0">
                      <circle cx="96" cy="96" r={r} fill="none" stroke="#1a1a22" strokeWidth="12" />
                      <circle cx="96" cy="96" r={r} fill="none" strokeWidth="12" strokeLinecap="round"
                        strokeDasharray={circ} strokeDashoffset={offset}
                        style={{ stroke: SCORE_GRADE.color }} />
                    </svg>
                    <div className="relative text-center">
                      <p className="text-5xl font-black text-white font-mono leading-none">{SCORE_TOTAL}</p>
                      <p className="text-xs text-zinc-600 mt-1">de 100</p>
                    </div>
                  </div>
                  {/* Score info */}
                  <div className="flex-1 min-w-0 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border"
                      style={{ color: SCORE_GRADE.color, borderColor: `${SCORE_GRADE.color}40`, backgroundColor: `${SCORE_GRADE.color}10` }}>
                      <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: SCORE_GRADE.color, boxShadow: `0 0 8px ${SCORE_GRADE.color}` }} />
                      <span className="text-sm font-black tracking-wide uppercase">{SCORE_GRADE.label}</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md">
                      Seu plano de marketing está {SCORE_TOTAL >= 60 ? "evoluindo bem" : "em construção"}. {nextMilestone ? `Próximo milestone em ${nextMilestone.pts} pts: ${nextMilestone.title}.` : "Autoridade máxima atingida."}
                    </p>
                    {/* Scale */}
                    <div className="flex items-center gap-1 max-w-sm mx-auto lg:mx-0">
                      {[
                        { pts: 40, label: "Iniciante", color: "#ef4444" },
                        { pts: 60, label: "Construindo", color: "#f59e0b" },
                        { pts: 75, label: "Crescendo", color: "#22d3ee" },
                        { pts: 90, label: "Dominando", color: "#22c55e" },
                        { pts: 100, label: "Líder", color: "#6366f1" },
                      ].map((level, i) => (
                        <div key={i} className="flex-1 text-center">
                          <div className="h-1.5 rounded-full mb-1" style={{ backgroundColor: SCORE_TOTAL >= (i === 0 ? 0 : [0,40,60,75,90][i]) ? level.color : "#1c1c24" }} />
                          <p className="text-[8px] text-zinc-700 truncate">{level.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-5">Breakdown por categoria</p>
                  <div className="space-y-4">
                    {SCORE_BREAKDOWN.map(s => {
                      const pct = Math.round((s.current / s.target) * 100);
                      const pts = Math.round((s.current / s.target) * s.pts);
                      return (
                        <div key={s.id}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono" style={{ color: s.hex }}>{s.icon}</span>
                              <span className="text-sm font-semibold text-zinc-200">{s.label}</span>
                              <span className="text-xs text-zinc-600">{s.desc}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-zinc-600 font-mono">{s.current}/{s.target}</span>
                              <span className="text-xs font-black font-mono" style={{ color: s.hex }}>{pts}</span>
                              <span className="text-xs text-zinc-700">/ {s.pts} pts</span>
                            </div>
                          </div>
                          <div className="w-full bg-[#1c1c24] rounded-full h-2 overflow-hidden">
                            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: s.hex }} />
                          </div>
                          {pct < 100 && (
                            <p className="text-[10px] text-zinc-700 mt-1">
                              +{s.target - s.current} {s.desc.split(" ")[0]} para {s.pts} pts máximos
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1a1a22] flex items-center justify-between">
                    <span className="text-xs text-zinc-600">Score total</span>
                    <span className="text-2xl font-black font-mono text-white">{SCORE_TOTAL} <span className="text-zinc-600 text-sm">/ 100</span></span>
                  </div>
                </div>

                {/* Milestones */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-5">Roadmap de evolução</p>
                  <div className="space-y-3">
                    {SCORE_MILESTONES.map((m, i) => (
                      <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                        m.done
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : i === SCORE_MILESTONES.findIndex(x => !x.done)
                          ? "bg-indigo-500/8 border-indigo-500/25"
                          : "bg-white/[0.02] border-[#1a1a22]"
                      }`}>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                          m.done ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-zinc-600"
                        }`}>
                          {m.done ? "✓" : m.pts}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className={`text-sm font-black ${m.done ? "text-emerald-400" : i === SCORE_MILESTONES.findIndex(x => !x.done) ? "text-white" : "text-zinc-600"}`}>
                              {m.title}
                            </p>
                            <span className="text-[10px] text-zinc-700 font-mono">{m.pts} pts</span>
                            {i === SCORE_MILESTONES.findIndex(x => !x.done) && (
                              <span className="text-[9px] font-black text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Próximo</span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-600 leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's dragging the score down */}
                <div className="bg-[#111115] border border-red-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="h-2 w-2 rounded-full bg-red-500" style={{ boxShadow: "0 0 6px #ef4444" }} />
                    <h3 className="text-base font-black text-zinc-100">O que está puxando o score para baixo</h3>
                  </div>
                  <div className="space-y-3">
                    {SCORE_BREAKDOWN.filter(s => (s.current / s.target) < 1).sort((a, b) => {
                      const gapA = (1 - a.current / a.target) * a.pts;
                      const gapB = (1 - b.current / b.target) * b.pts;
                      return gapB - gapA;
                    }).map(s => {
                      const gap = Math.round((1 - s.current / s.target) * s.pts);
                      return (
                        <div key={s.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.025] border border-[#1a1a22]">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-mono" style={{ color: s.hex }}>{s.icon}</span>
                            <div>
                              <p className="text-sm font-semibold text-zinc-300">{s.label}</p>
                              <p className="text-xs text-zinc-600">{s.current}/{s.target} {s.desc}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-black font-mono text-red-400">-{gap}</p>
                            <p className="text-[10px] text-zinc-700">pts perdidos</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })()}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* MARCA — BRAND OS                                              */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "marca" && (
            <div className="space-y-8">

              {/* Header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] text-[#46C1F1]/60 uppercase mb-2">Brand OS v2.0</p>
                  <h2 className="text-4xl font-black text-white tracking-tight leading-none">Manual da Marca</h2>
                  <p className="text-zinc-500 text-sm mt-2">Identidade visual, campanhas, linguagem e aplicações da A7 Lavanderia.</p>
                </div>
                <a href="/manual-da-marca" target="_blank" rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 bg-[#0C5982] hover:bg-[#1A7AB5] text-white font-black text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap">
                  Abrir Manual Completo →
                </a>
              </div>

              {/* Manifesto */}
              <div className="relative overflow-hidden rounded-2xl bg-[#050810] border border-[#0C5982]/40 p-8"
                style={{ boxShadow: "0 0 40px rgba(70,193,241,0.06)" }}>
                <div className="absolute top-0 right-0 w-64 h-full opacity-5"
                  style={{ background: "radial-gradient(circle at right, #46C1F1, transparent 70%)" }} />
                <p className="text-[10px] font-black tracking-[0.4em] text-[#46C1F1] uppercase mb-4">Manifesto · O produto real</p>
                <p className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tighter mb-4">
                  Não vendemos limpeza.<br />
                  <span className="text-[#46C1F1]">Vendemos domingos.</span>
                </p>
                <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
                  Uma família perde entre 400–500h/ano com lavagem. A A7 existe para que você nunca perca uma hora com o que importa menos.
                </p>
                <p className="text-[#46C1F1] font-bold text-sm mt-3">A7. Porque seu tempo vale mais.</p>
              </div>

              {/* Color System + Logo */}
              <div className="grid lg:grid-cols-2 gap-4">

                {/* Colors */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-4">03 · Color System</p>
                  <div className="space-y-2">
                    {[
                      { name: "A7 Navy",  hex: "#0C5982", textColor: "text-white",       role: "Cor Primária · Logotipo · Headers · CTAs" },
                      { name: "A7 Cyan",  hex: "#46C1F1", textColor: "text-[#0C5982]",   role: "Acento · Destaques · Links · Energia" },
                      { name: "A7 Black", hex: "#050810", textColor: "text-white/60",     role: "Fundo · Profundidade · Premium" },
                      { name: "A7 White", hex: "#F8FAFC", textColor: "text-[#050810]/60", role: "Contraste · Respiro · Limpeza" },
                    ].map(c => (
                      <div key={c.name} className="flex items-center gap-4 p-3 rounded-xl border border-white/5 overflow-hidden relative"
                        style={{ backgroundColor: c.hex }}>
                        <p className={`font-black text-sm ${c.textColor} w-20 shrink-0`}>{c.name}</p>
                        <code className={`font-mono text-xs ${c.textColor} opacity-60`}>{c.hex}</code>
                        <p className={`text-xs ${c.textColor} opacity-40 text-right flex-1 truncate`}>{c.role}</p>
                      </div>
                    ))}
                  </div>
                  {/* Gradient */}
                  <div className="mt-3 rounded-xl h-8 overflow-hidden" style={{ background: "linear-gradient(90deg, #050810 0%, #0C5982 40%, #46C1F1 70%, #E0F4FF 100%)" }} />
                  <p className="text-[9px] text-zinc-700 uppercase tracking-widest mt-2 text-center font-bold">Gradiente Institucional</p>
                </div>

                {/* Logos */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-4">04 · Logo System</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { bg: "#0C5982", src: "/logo-light.png", label: "Negativa", sub: "Fundos escuros" },
                      { bg: "#ffffff", src: "/logo-dark.png",  label: "Positiva", sub: "Fundos claros" },
                      { bg: "#ffffff", src: "/logo-vertical.png", label: "Vertical", sub: "Fachadas, físico" },
                      { bg: "#080B14", src: "/logo-symbol.png",   label: "Símbolo", sub: "Avatar, favicon" },
                    ].map(v => (
                      <div key={v.label} className="rounded-xl overflow-hidden border border-white/5">
                        <div className="h-16 flex items-center justify-center p-4" style={{ backgroundColor: v.bg }}>
                          <img src={v.src} alt={v.label} className="max-h-8 max-w-full object-contain" />
                        </div>
                        <div className="bg-white/[0.03] px-3 py-2">
                          <p className="text-white text-xs font-black">{v.label}</p>
                          <p className="text-zinc-600 text-[10px]">{v.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-600">
                    <span className="text-[#46C1F1] font-black">Zona de respiro:</span> altura da letra A em todos os lados. Mínimo digital 50px.
                  </div>
                </div>
              </div>

              {/* Typography + Brand Energy */}
              <div className="grid lg:grid-cols-2 gap-4">

                {/* Typography */}
                <div className="bg-[#0C5982]/15 border border-[#0C5982]/30 rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-[#46C1F1]/60 uppercase mb-4">05 · Typography</p>
                  <div className="space-y-2">
                    {[
                      { size: "Display",  spec: "Black · 64–96px · -0.04em",  sample: "A7." },
                      { size: "Headline", spec: "ExtraBold · 32–56px · -0.02em", sample: "Limpo." },
                      { size: "Body",     spec: "Regular · 16–18px · 1.6",    sample: "Entregamos hoje." },
                      { size: "Label",    spec: "Bold · 10–12px · +0.1em",    sample: "AGENDAR" },
                    ].map(t => (
                      <div key={t.size} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                        <p className="text-[#46C1F1] text-[10px] font-black w-16 shrink-0">{t.size}</p>
                        <code className="text-zinc-600 text-[10px] font-mono flex-1">{t.spec}</code>
                        <p className="text-white font-black">{t.sample}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Energy */}
                <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-4">11 · Brand Energy</p>
                  <p className="text-zinc-500 text-xs mb-4">Se a A7 fosse uma pessoa:</p>
                  <div className="space-y-2">
                    {[
                      { trait: "BOLD",    desc: "Fala o que pensa. Direto ao ponto." },
                      { trait: "SHARP",   desc: "Nunca erra o prazo. Executa com precisão." },
                      { trait: "HUMAN",   desc: "Lembra o seu nome. Se importa de verdade." },
                      { trait: "FREE",    desc: "Não te prende. Te liberta de tarefas sem sentido." },
                      { trait: "GROWING", desc: "Sempre em movimento. Nunca satisfeita com o suficiente." },
                    ].map(t => (
                      <div key={t.trait} className="flex items-center gap-3">
                        <span className="text-[#46C1F1] font-black text-xs w-16 shrink-0">{t.trait}</span>
                        <div className="flex-1 h-px bg-white/5" />
                        <span className="text-zinc-600 text-xs text-right max-w-[180px]">{t.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand Language */}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-4">12 · Brand Language — Taglines</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "Seu tempo de volta.", "Não vendemos limpeza. Vendemos domingos.",
                    "Enquanto você vive, a A7 trabalha.", "Pare de lavar. Comece a viver.",
                    "Tempo é o novo luxo. Guarde o seu.", "A lavanderia que pensa como você.",
                    "Cada peça tratada como se fosse nossa.", "Não é lavanderia. É liberdade.",
                    "De 0 a impecável em 48h.", "Limpo. Livre. A7.", "Viva mais. Lave menos.",
                    "Domingo livre.", "O padrão hotel em casa.", "48h e pronto.", "Sunday is not for washing clothes.",
                  ].map(t => (
                    <div key={t} className="p-3 rounded-xl bg-white/[0.025] border border-[#1a1a22] hover:border-[#46C1F1]/20 transition-colors">
                      <p className="text-zinc-300 text-xs font-semibold leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10 Campaigns */}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">10 · Campaigns — Prontas para ativar</p>
                  <span className="text-xs text-zinc-700 font-mono">10 campanhas</span>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { n:"01", name:"Compre seu Domingo de Volta",   line:"Sunday is not for washing clothes.", tag:"HERO",         bg:"#0C5982", accent:"#46C1F1" },
                    { n:"02", name:"Calcule o que Você Perde",       line:"500 horas. Todo ano. Desperdiçadas.", tag:"AWARENESS",    bg:"#0d0d17", accent:"#46C1F1" },
                    { n:"03", name:"Sua Roupa Tem Memória",          line:"O terno da entrevista. O vestido do aniversário.", tag:"EMOTIONAL",   bg:"#0d0d12", accent:"#46C1F1" },
                    { n:"04", name:"O Padrão Hotel em Casa",         line:"Você não mora em hotel. Mas pode ter a mesma roupa.", tag:"PREMIUM",     bg:"#0C5982", accent:"#ffffff" },
                    { n:"05", name:"Avaliação 5★ Começa na Cama",   line:"Seu hóspede não comenta. Mas avalia.", tag:"AIRBNB",      bg:"#074060", accent:"#46C1F1" },
                    { n:"06", name:"Roupa Limpa não é o Produto",    line:"O produto é o seu fim de semana livre.", tag:"BRAND FILM",  bg:"#0b0b15", accent:"#46C1F1" },
                    { n:"07", name:"A Primeira Coleta É Nossa",      line:"Experimente. Uma vez que você vê, não volta atrás.", tag:"TRIAL",       bg:"#0C5982", accent:"#46C1F1" },
                    { n:"08", name:"Uniforme que Vende",             line:"Sua equipe é o primeiro produto que o cliente vê.", tag:"B2B",         bg:"#0d0d15", accent:"#46C1F1" },
                    { n:"09", name:"Plano Família: Paz em Casa",     line:"Menos uma batalha na sua semana.", tag:"SUBSCRIPTION", bg:"#074060", accent:"#46C1F1" },
                    { n:"10", name:"A A7 Chegou na Sua Cidade",      line:"[Cidade]. Seu domingo nunca mais vai ser o mesmo.", tag:"GEO EXPANSION", bg:"#0C5982", accent:"#46C1F1" },
                  ].map(c => (
                    <div key={c.n} className="relative overflow-hidden rounded-xl p-4 flex items-start gap-3 border"
                      style={{ backgroundColor: c.bg, borderColor: c.accent + "20" }}>
                      <span className="font-black text-white/15 text-2xl leading-none shrink-0">{c.n}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-white font-black text-sm">{c.name}</p>
                          <span className="text-[9px] font-black px-2 py-0.5 rounded-full shrink-0"
                            style={{ backgroundColor: c.accent + "20", color: c.accent }}>{c.tag}</span>
                        </div>
                        <p className="text-white/40 text-xs italic leading-snug">&ldquo;{c.line}&rdquo;</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photography Direction */}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-4">06 · Photography — Nunca mostramos a lavagem</p>
                <p className="text-zinc-600 text-xs mb-4">Mostramos o que a pessoa faz com o tempo que a A7 devolveu.</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { src: "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=400&q=80", label: "FAMÍLIA" },
                    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80", label: "EXECUTIVO" },
                    { src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&q=80", label: "LAR MODERNO" },
                    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", label: "PADRÃO HOTEL" },
                    { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80", label: "CLOSET" },
                    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", label: "PROFISSIONAL" },
                  ].map(p => (
                    <div key={p.label} className="relative overflow-hidden rounded-xl aspect-square">
                      <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 to-transparent" />
                      <p className="absolute bottom-1.5 left-0 right-0 text-center text-[8px] font-black text-[#46C1F1] uppercase tracking-wider">{p.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { title: "LUZ",    rule: "Natural · difusa · quente" },
                    { title: "PALETA", rule: "Neutros · branco · linho" },
                    { title: "EMOÇÃO", rule: "Calma · leveza · liberdade" },
                    { title: "EVITAR", rule: "Máquinas sujas · estúdio frio" },
                  ].map(r => (
                    <div key={r.title} className="p-3 rounded-xl bg-white/[0.02] border border-[#1a1a22]">
                      <p className="text-[#46C1F1] font-black text-[10px] uppercase tracking-wider mb-1">{r.title}</p>
                      <p className="text-zinc-600 text-xs">{r.rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between p-5 bg-[#0C5982]/15 border border-[#0C5982]/30 rounded-2xl">
                <div>
                  <p className="text-white font-black text-sm">Manual completo com Store Experience, Social Media e Physical Applications</p>
                  <p className="text-zinc-600 text-xs mt-0.5">12 seções · mockups CSS · A7 Brand OS v2.0</p>
                </div>
                <a href="/manual-da-marca" target="_blank" rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 bg-[#0C5982] hover:bg-[#1A7AB5] text-white font-black text-sm px-6 py-3 rounded-xl transition-colors">
                  Abrir Manual →
                </a>
              </div>

            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* ONBOARDING                                                     */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "onboarding" && (
            <div className="space-y-8">

              {/* Header */}
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase mb-2">Guia Operacional</p>
                <h2 className="text-4xl font-black text-white tracking-tight leading-none">Onboarding do Site</h2>
                <p className="text-zinc-500 text-sm mt-2">Tudo que você precisa para operar, publicar e escalar o site A7 Lavanderia.</p>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-3 flex-wrap">
                {ONBOARDING_MODULES.map((m, i) => (
                  <button key={i} onClick={() => setActiveOnboardingModule(activeOnboardingModule === i ? null : i)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${
                      activeOnboardingModule === i
                        ? "text-white border-transparent"
                        : "text-zinc-600 border-[#1a1a22] hover:border-zinc-700 hover:text-zinc-400"
                    }`}
                    style={activeOnboardingModule === i ? { backgroundColor: `${m.color}20`, borderColor: `${m.color}40`, color: m.color } : {}}>
                    <span>{m.icon}</span>
                    <span>{m.title.split(" ").slice(0, 2).join(" ")}</span>
                  </button>
                ))}
              </div>

              {/* Modules */}
              <div className="space-y-3">
                {ONBOARDING_MODULES.map((m, i) => {
                  const isOpen = activeOnboardingModule === i;
                  return (
                    <div key={i} className={`rounded-2xl border transition-all overflow-hidden ${isOpen ? "border-[#2a2a38]" : "border-[#1a1a22]"}`}
                      style={isOpen ? { boxShadow: `0 0 30px ${m.color}08` } : {}}>

                      {/* Module header */}
                      <button onClick={() => setActiveOnboardingModule(isOpen ? null : i)}
                        className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-all group">
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ backgroundColor: `${m.color}15`, border: `1px solid ${m.color}25` }}>
                          {m.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-sm font-black text-zinc-100">{m.title}</p>
                            <span className="text-[9px] font-black text-zinc-700 font-mono">0{i + 1}</span>
                          </div>
                          <p className="text-xs text-zinc-600">{m.desc}</p>
                        </div>
                        <span className={`text-zinc-700 group-hover:text-zinc-400 transition-all text-sm ${isOpen ? "rotate-90" : ""}`}>›</span>
                      </button>

                      {/* Module content */}
                      {isOpen && (
                        <div className="px-5 pb-5 space-y-4 border-t border-[#1a1a22]">
                          <div className="pt-4 space-y-2">
                            {m.items.map((item, j) => (
                              <div key={j} className={`flex items-start gap-3 p-3 rounded-xl ${
                                item.type === "check" ? "bg-emerald-500/5 border border-emerald-500/15" :
                                item.type === "cmd"   ? "bg-zinc-900 border border-[#2a2a38]" :
                                item.type === "step"  ? "bg-white/[0.025] border border-[#1e1e28]" :
                                item.type === "week" || item.type === "month" ? "bg-white/[0.02] border border-[#1a1a22]" :
                                "bg-white/[0.02] border border-[#1a1a22]"
                              }`}>
                                {/* Icon by type */}
                                <span className="shrink-0 mt-0.5 text-xs font-black w-4">
                                  {item.type === "check" ? <span className="text-emerald-400">✓</span>
                                   : item.type === "cmd"  ? <span className="text-amber-400">$</span>
                                   : item.type === "step" ? <span className="font-mono" style={{ color: m.color }}>{j + 1}</span>
                                   : item.type === "url"  ? <span className="text-blue-400">↗</span>
                                   : item.type === "code" ? <span className="text-zinc-600">/</span>
                                   : item.type === "week" ? <span className="text-cyan-400">◷</span>
                                   : <span className="text-indigo-400">◈</span>}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-black uppercase tracking-wider mb-0.5" style={{ color: m.color + "cc" }}>{item.label}</p>
                                  {item.type === "cmd" || item.type === "code" ? (
                                    <code className="text-xs text-zinc-300 font-mono break-all">{item.value}</code>
                                  ) : item.type === "url" ? (
                                    <a href={item.value.startsWith("http") ? item.value : `https://${item.value}`}
                                      target="_blank" rel="noopener noreferrer"
                                      className="text-xs text-blue-400 hover:underline font-mono break-all">{item.value}</a>
                                  ) : (
                                    <p className="text-xs text-zinc-400 leading-relaxed">{item.value}</p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* Note */}
                          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15">
                            <span className="text-amber-400 text-sm shrink-0">💡</span>
                            <p className="text-xs text-zinc-500 leading-relaxed">{m.note}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quick reference footer */}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-4">Referência Rápida — Comandos Essenciais</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { cmd: "npm run dev",             desc: "Servidor local (localhost:3000)" },
                    { cmd: "npm run build",            desc: "Validar antes de commitar" },
                    { cmd: "git push origin main",     desc: "Deploy para produção (Vercel)" },
                    { cmd: "git log --oneline -5",     desc: "Ver últimos commits" },
                    { cmd: "git status",               desc: "Arquivos modificados" },
                    { cmd: "git add [arquivo]",        desc: "Stagear arquivo específico" },
                  ].map(r => (
                    <div key={r.cmd} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-[#2a2a38]">
                      <span className="text-amber-400 text-xs font-black shrink-0">$</span>
                      <code className="text-xs text-zinc-300 font-mono flex-1">{r.cmd}</code>
                      <span className="text-[10px] text-zinc-700 shrink-0">{r.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* CONTENT ENGINE (INVENTORY)                                     */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "inventory" && (
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Inventário completo</p>
                <h2 className="text-2xl font-black text-zinc-100">Content Engine</h2>
                <p className="text-zinc-600 text-sm mt-1">{totalArticles} artigos · <span className="text-emerald-400">●</span> LP ativa · <span className="text-amber-400">⚠</span> funil incompleto</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-5">
                <div>
                  <p className="text-[10px] text-zinc-700 uppercase tracking-wider mb-2 font-bold">Cluster</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", ...Object.keys(CLUSTER_BADGE)].map(c => (
                      <button key={c} onClick={() => setClusterFilter(c)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${clusterFilter === c ? "bg-indigo-500 text-white border-indigo-500 font-bold" : "border-[#1a1a22] text-zinc-600 hover:border-[#2a2a35] hover:text-zinc-300"}`}>{c}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-700 uppercase tracking-wider mb-2 font-bold">Funil</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", ...Object.keys(FUNNEL_BADGE)].map(f => (
                      <button key={f} onClick={() => setFunnelFilter(f)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${funnelFilter === f ? "bg-indigo-500 text-white border-indigo-500 font-bold" : "border-[#1a1a22] text-zinc-600 hover:border-[#2a2a35] hover:text-zinc-300"}`}>{f}</button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-700 font-mono">{filteredArticles.length} artigos exibidos</p>

              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#1a1a22]">
                        {["Artigo", "Cluster", "Funil", "LP", "LP ativa", "Funil OK", "Próximo artigo"].map(h => (
                          <th key={h} className="text-left px-4 py-3 text-[10px] font-black uppercase tracking-wider text-zinc-700">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredArticles.map(a => {
                        const lpAtiva = LP_ACTIVE[a.lp] ?? false;
                        const fc = getFunnelCompleteness(a.lp);
                        return (
                          <tr key={a.slug} className="border-b border-[#1a1a22] hover:bg-white/[0.025] transition-colors">
                            <td className="px-4 py-3">
                              <Link href={`/blog/${a.slug}`} className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium text-xs leading-tight block max-w-[180px]">
                                {a.title} <span className="text-cyan-500/40">↗</span>
                              </Link>
                            </td>
                            <td className="px-4 py-3">
                              <button onClick={() => { const cd = CLUSTERS_MOS.find(c => c.nome === a.cluster); if (cd) setSelectedCluster(cd); }}
                                className={`text-[10px] font-bold px-2 py-1 rounded-lg border hover:brightness-110 transition-all cursor-pointer ${CLUSTER_BADGE[a.cluster]}`}>
                                {a.cluster}
                              </button>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${FUNNEL_BADGE[a.funnel]}`}>{a.funnel}</span>
                            </td>
                            <td className="px-4 py-3">
                              <Link href={a.lp} className="text-cyan-400 text-xs hover:underline font-mono">{a.lp}</Link>
                            </td>
                            <td className="px-4 py-3 text-center">
                              {lpAtiva
                                ? <span className="text-emerald-400 text-sm" style={{ textShadow: "0 0 6px #22c55e" }}>●</span>
                                : <span className="text-zinc-700 text-sm">○</span>}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {fc.complete
                                ? <span className="text-emerald-400 text-xs font-black">✓</span>
                                : <span className="text-amber-400 text-xs font-black" title={`Tem: ${fc.stages.join(", ")}`}>⚠</span>}
                            </td>
                            <td className="px-4 py-3">
                              <a href={getClickUpLink(a.gap)} target="_blank" rel="noopener noreferrer"
                                className="text-[10px] text-zinc-600 hover:text-amber-400 italic hover:underline transition-colors">
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
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* SEO CLUSTERS                                                    */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "clusters" && (
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Arquitetura de conteúdo</p>
                <h2 className="text-2xl font-black text-zinc-100">SEO Clusters</h2>
                <p className="text-zinc-600 text-sm mt-1">Clique para expandir — pillar, artigos, gaps, social e insights.</p>
              </div>
              {CLUSTERS_MOS.map(c => {
                const arts = ARTICLES.filter(a => a.cluster === c.nome);
                const isExpanded = expandedCluster === c.id;
                const pct = Math.round((arts.length / (arts.length + c.gap)) * 100);
                return (
                  <div key={c.id} className="bg-[#111115] border border-[#1a1a22] rounded-2xl overflow-hidden hover:border-[#222230] transition-colors">
                    <button onClick={() => setExpandedCluster(isExpanded ? null : c.id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.025] transition-all">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${c.tw} shrink-0`}>{c.nome}</span>
                        <div className="flex-1 max-w-32 bg-[#1c1c24] rounded-full h-1 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: CLUSTER_BAR_COLOR[c.nome] }} />
                        </div>
                        <span className="text-xs text-zinc-600 font-mono shrink-0">{arts.length} arts</span>
                        <span className="text-xs text-amber-500 shrink-0">+{c.gap} gaps</span>
                        <Link href={c.lp} onClick={e => e.stopPropagation()} className="text-xs text-cyan-400 hover:underline font-mono truncate max-w-28">{c.lp}</Link>
                      </div>
                      <span className={`text-zinc-600 transition-transform duration-200 text-lg ml-4 shrink-0 ${isExpanded ? "rotate-45" : ""}`}>+</span>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-[#1a1a22] p-5 space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] text-cyan-500/60 uppercase tracking-widest mb-2 font-bold">Pillar Page</p>
                            <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-xl p-4">
                              <p className="text-sm font-semibold text-zinc-200 leading-relaxed">{c.pilar}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest mb-2 font-bold">Monetização</p>
                            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4">
                              <p className="text-sm text-emerald-400">{c.monetizacao}</p>
                              <p className="text-xs text-zinc-700 mt-2">{c.local}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2 font-bold">Artigos publicados ({arts.length})</p>
                          <div className="flex flex-wrap gap-2">
                            {arts.map(a => (
                              <Link key={a.slug} href={`/blog/${a.slug}`}
                                className={`text-xs px-3 py-1.5 rounded-lg border hover:brightness-110 transition-all ${FUNNEL_BADGE[a.funnel]} border-transparent`}>
                                {a.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-amber-500/60 uppercase tracking-widest mb-2 font-bold">Gaps — criar agora ({c.proximos.length})</p>
                          <div className="grid md:grid-cols-2 gap-2">
                            {c.proximos.map(p => (
                              <div key={p} className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/15">
                                <span className="text-amber-400 text-xs shrink-0">+</span>
                                <span className="text-xs text-zinc-400 flex-1">{p}</span>
                                <a href={getClickUpLink(p)} target="_blank" rel="noopener noreferrer"
                                  className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 hover:bg-cyan-500/20 font-bold shrink-0 transition-colors">
                                  ClickUp
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] text-pink-500/60 uppercase tracking-widest mb-2 font-bold">Social Media</p>
                            <div className="space-y-2">
                              {c.social.map((s, i) => (
                                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-[#1a1a22]">
                                  <span className={`text-[9px] font-black px-2 py-0.5 rounded text-white shrink-0 ${SOCIAL_BADGE[s.plataforma] ?? "bg-zinc-700"}`}>{s.plataforma}</span>
                                  <div>
                                    <span className="text-[10px] text-zinc-700 block">{s.formato}</span>
                                    <span className="text-xs text-zinc-500">{s.angulo}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] text-amber-400/60 uppercase tracking-widest mb-2 font-bold">Insights</p>
                            <div className="space-y-2">
                              {c.insights.map((ins, i) => (
                                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/15">
                                  <span className="text-amber-400 text-xs shrink-0">💡</span>
                                  <p className="text-xs text-zinc-500">{ins}</p>
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

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* FUNIL VISUAL                                                    */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "funil" && (
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Conversão completa</p>
                <h2 className="text-2xl font-black text-zinc-100">Funil Visual</h2>
                <p className="text-zinc-600 text-sm mt-1">Do primeiro clique ao cliente recorrente — conteúdo, social e conversão mapeados.</p>
              </div>
              {FUNNEL_STAGES_DATA.map((f, i) => {
                const arts = ARTICLES.filter(a => a.funnel === f.stage);
                const funnelWidths = ["w-full", "w-11/12", "w-9/12", "w-7/12", "w-5/12", "w-3/12"];
                return (
                  <div key={f.stage}
                    className={`rounded-2xl border p-5 ${funnelWidths[i]} mx-auto transition-all`}
                    style={{ background: `${f.hex}08`, borderColor: `${f.hex}25` }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ background: `${f.hex}20`, border: `1px solid ${f.hex}40` }}>
                        {f.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-black text-lg text-zinc-100">{f.stage}</h3>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: `${f.hex}50` }}>{arts.length} artigos</span>
                        </div>
                        <p className="text-xs text-zinc-600 mt-0.5">{f.descricao}</p>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4">
                      <div>
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest mb-2 font-bold">Conteúdo mapeado</p>
                        {arts.length > 0 ? (
                          <div className="space-y-1">
                            {arts.map(a => (
                              <Link key={a.slug} href={`/blog/${a.slug}`}
                                className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.07] border border-[#1a1a22] hover:border-[#2a2a35] transition-all group">
                                <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors flex-1 leading-tight text-[11px]">{a.title}</span>
                                <span className="text-zinc-700 group-hover:text-cyan-400 text-xs">↗</span>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20">
                            <p className="text-xs text-red-400 font-bold">⚠ Sem conteúdo</p>
                            <p className="text-xs text-zinc-600 mt-1">Gap crítico — criar urgente</p>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest mb-2 font-bold">CTA estratégico</p>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-[#1a1a22] mb-3">
                          <p className="text-xs text-zinc-400">{f.cta}</p>
                        </div>
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest mb-1 font-bold">KPI</p>
                        <p className="text-xs text-zinc-600">{f.kpi}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest mb-2 font-bold">Social — arte sugerida</p>
                        <div className="space-y-1.5">
                          {[
                            [{ plat: "Instagram", art: "Carrossel educativo — problema + solução" }, { plat: "TikTok", art: "Tutorial rápido — hook com o problema" }],
                            [{ plat: "Instagram", art: "Reels — antes/depois do serviço" }, { plat: "LinkedIn", art: "Post comparativo — custo vs. benefício" }],
                            [{ plat: "Instagram", art: "Stories com localização SJC + CTA link" }, { plat: "Google Business", art: "Post com preço + botão WhatsApp" }],
                            [{ plat: "WhatsApp", art: "Deep link pré-preenchido + formulário coleta" }],
                            [{ plat: "WhatsApp", art: "Sequência pós-coleta com oferta plano mensal D+1" }],
                            [{ plat: "WhatsApp", art: "Indicação — R$20 OFF para amigo" }, { plat: "Instagram", art: "Story com depoimento de cliente real" }],
                          ][i].map(s => (
                            <div key={s.plat} className="flex gap-2 items-start p-2 rounded-lg bg-white/[0.025] border border-[#1a1a22] text-xs">
                              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white shrink-0 ${SOCIAL_BADGE[s.plat] ?? "bg-zinc-700"}`}>{s.plat}</span>
                              <span className="text-zinc-500">{s.art}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* CALENDÁRIO 30 DIAS                                              */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "calendario" && (
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Planejamento editorial</p>
                <h2 className="text-2xl font-black text-zinc-100">Calendário 30 Dias</h2>
                <p className="text-zinc-600 text-sm mt-1">Próximos artigos. Clique em <strong className="text-cyan-400">+ ClickUp</strong> para criar a task automaticamente.</p>
              </div>
              {[0, 1, 2, 3].map(week => {
                const weekItems = CALENDAR_30.filter(item => item.day > week * 7 && item.day <= (week + 1) * 7);
                const weekStart = new Date(startDate); weekStart.setDate(startDate.getDate() + week * 7);
                const weekLabel = `Semana ${week + 1} — ${weekStart.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}`;
                return (
                  <div key={week} className="bg-[#111115] border border-[#1a1a22] rounded-2xl overflow-hidden">
                    <div className="px-5 py-3 border-b border-[#1a1a22] flex items-center justify-between">
                      <h3 className="font-bold text-sm text-zinc-400">{weekLabel}</h3>
                      <span className="text-xs text-zinc-700 font-mono">{weekItems.length} artigos</span>
                    </div>
                    <div className="divide-y divide-[#1a1a22]">
                      {weekItems.length === 0 ? (
                        <p className="px-5 py-4 text-xs text-zinc-700 italic">Sem artigos agendados nesta semana.</p>
                      ) : weekItems.map(item => (
                        <div key={item.day} className="flex items-center gap-4 px-5 py-3 hover:bg-white/[0.025] transition-colors">
                          <span className="text-xs font-mono text-zinc-700 w-12 shrink-0">{item.date}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg shrink-0 ${CLUSTER_BADGE[item.cluster]}`}>{item.cluster}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg shrink-0 ${FUNNEL_BADGE[item.funnel]}`}>{item.funnel}</span>
                          <span className="text-sm text-zinc-300 flex-1 min-w-0 truncate">{item.titulo}</span>
                          <Link href={item.lp} className="text-xs text-cyan-400 hover:underline font-mono shrink-0">{item.lp}</Link>
                          <a href={getClickUpLink(item.titulo)} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 font-bold shrink-0 transition-colors whitespace-nowrap">
                            + ClickUp
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-5">
                <p className="text-[10px] text-zinc-700 uppercase tracking-wider mb-4 font-bold">Cadência recomendada</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { freq: "2×/semana", tipo: "Artigo SEO (Awareness/Consideration)", color: "#6366f1" },
                    { freq: "1×/semana", tipo: "Post Social (Reels/Carrossel)", color: "#ec4899" },
                    { freq: "1×/mês", tipo: "Conteúdo B2B (LinkedIn/Email)", color: "#f59e0b" },
                  ].map(c => (
                    <div key={c.freq} className="bg-white/[0.025] rounded-xl p-4 border border-[#1a1a22]">
                      <p className="text-2xl font-black" style={{ color: c.color }}>{c.freq}</p>
                      <p className="text-xs text-zinc-600 mt-1">{c.tipo}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* LOCAL SEO                                                       */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "local" && (
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-1">Expansão geográfica</p>
                <h2 className="text-2xl font-black text-zinc-100">Local SEO</h2>
                <p className="text-zinc-600 text-sm mt-1">10 cidades do Vale do Paraíba — SEO local converte 5× mais que nacional.</p>
              </div>
              <div className="space-y-2.5">
                {[
                  { cidade: "São José dos Campos", status: "LP + 4 artigos", prioridade: "P0", pop: "730k", lp: "/sao-jose-dos-campos", pct: 90 },
                  { cidade: "Vale do Paraíba (Hub)", status: "LP publicada", prioridade: "P0", pop: "2M+", lp: "/vale-do-paraiba", pct: 70 },
                  { cidade: "Taubaté", status: "LP publicada", prioridade: "P0", pop: "330k", lp: "/taubate", pct: 60 },
                  { cidade: "Jacareí", status: "LP publicada", prioridade: "P1", pop: "240k", lp: "/jacarei", pct: 50 },
                  { cidade: "Lorena / Guaratinguetá", status: "LP publicada", prioridade: "P1", pop: "190k", lp: "/lorena-guaratingueta", pct: 45 },
                  { cidade: "Caçapava", status: "Planejar", prioridade: "P2", pop: "100k", lp: "", pct: 10 },
                  { cidade: "Pindamonhangaba", status: "Planejar", prioridade: "P2", pop: "170k", lp: "", pct: 10 },
                  { cidade: "Tremembé", status: "Planejar", prioridade: "P3", pop: "50k", lp: "", pct: 0 },
                  { cidade: "Aparecida", status: "Planejar", prioridade: "P3", pop: "38k", lp: "", pct: 0 },
                  { cidade: "Campos do Jordão", status: "Planejar", prioridade: "P3", pop: "52k", lp: "", pct: 0 },
                ].map(c => {
                  const prioBg = c.prioridade === "P0" ? "bg-red-500/15 text-red-400 border-red-500/25"
                    : c.prioridade === "P1" ? "bg-amber-500/15 text-amber-400 border-amber-500/25"
                    : c.prioridade === "P2" ? "bg-zinc-500/15 text-zinc-500 border-zinc-500/25"
                    : "bg-zinc-800/30 text-zinc-700 border-zinc-700/25";
                  const active = c.pct > 20;
                  return (
                    <div key={c.cidade} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${active ? "bg-[#111115] border-[#1a1a22] hover:border-[#242430]" : "bg-[#0c0c10] border-[#14141a]"}`}>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg border shrink-0 ${prioBg}`}>{c.prioridade}</span>
                      <div className="w-48 shrink-0">
                        <p className={`font-semibold text-sm ${active ? "text-zinc-200" : "text-zinc-600"}`}>{c.cidade}</p>
                        <p className="text-[10px] text-zinc-700">{c.pop} hab.</p>
                      </div>
                      <div className="flex-1 bg-[#1c1c24] rounded-full h-1 overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                      <span className={`text-xs w-28 text-right ${active ? "text-zinc-400" : "text-zinc-700"}`}>{c.status}</span>
                      {c.lp ? (
                        <Link href={c.lp} className="text-xs text-cyan-400 hover:underline font-mono w-40 text-right shrink-0">{c.lp}</Link>
                      ) : (
                        <a href={getClickUpLink(`LP Cidade: ${c.cidade}`)} target="_blank" rel="noopener noreferrer"
                          className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded-lg hover:bg-cyan-500/20 font-bold transition-colors w-40 text-center shrink-0">
                          + ClickUp
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* IA CLASSIFIER                                                   */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activeSection === "classifier" && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-black tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded-lg">AI</span>
                  <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">Classificação automática</p>
                </div>
                <h2 className="text-2xl font-black text-zinc-100">Classificador IA</h2>
                <p className="text-zinc-600 text-sm mt-1">Cole o título de qualquer artigo — o sistema classifica, conecta à LP e gera task no ClickUp.</p>
              </div>

              <div className="bg-[#111115] border border-[#1a1a22] rounded-2xl p-6">
                <div className="flex gap-3">
                  <input type="text" value={classifierInput} onChange={e => setClassifierInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && classifierInput.trim() && setClassifierResult(classifyArticle(classifierInput))}
                    placeholder="Ex: Como tirar mancha de café da roupa..."
                    className="flex-1 bg-white/[0.04] border border-[#2a2a35] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-colors" />
                  <button onClick={() => classifierInput.trim() && setClassifierResult(classifyArticle(classifierInput))}
                    className="bg-indigo-500 text-white font-black px-6 py-3 rounded-xl hover:bg-indigo-400 transition-colors text-sm">
                    Classificar
                  </button>
                </div>

                {classifierResult && (
                  <div className="mt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/[0.03] rounded-xl p-4 border border-[#1a1a22] space-y-3">
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold">Análise</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-zinc-600">Cluster:</span>
                          <button onClick={() => { const cd = CLUSTERS_MOS.find(c => c.nome === classifierResult.cluster); if (cd) setSelectedCluster(cd); }}
                            className={`text-xs font-bold px-2 py-1 rounded-lg border hover:brightness-110 transition-all ${CLUSTER_BADGE[classifierResult.cluster]}`}>
                            {classifierResult.cluster} →
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-zinc-600">Funil:</span>
                          <span className={`text-xs font-bold px-2 py-1 rounded-lg ${FUNNEL_BADGE[classifierResult.funnel]}`}>{classifierResult.funnel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-zinc-600">LP sugerida:</span>
                          <Link href={classifierResult.lp} className="text-xs text-cyan-400 hover:underline font-mono">{classifierResult.lp}</Link>
                        </div>
                        <div className="pt-2">
                          <p className="text-[10px] text-zinc-700 mb-1.5">Monetização:</p>
                          <p className="text-xs text-zinc-500">{classifierResult.monetizacao}</p>
                        </div>
                        <a href={getClickUpLink(classifierInput)} target="_blank" rel="noopener noreferrer"
                          className="block text-center bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-xl hover:bg-cyan-500/20 font-bold text-xs transition-colors">
                          + Criar no ClickUp
                        </a>
                      </div>
                      <div className="bg-white/[0.03] rounded-xl p-4 border border-[#1a1a22] space-y-3">
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold">Artigos sugeridos</p>
                        {classifierResult.sugestoes.map(s => (
                          <a key={s} href={getClickUpLink(s)} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/15 hover:bg-amber-500/10 transition-colors group">
                            <span className="text-amber-400 text-xs shrink-0">+</span>
                            <span className="text-xs text-zinc-500 flex-1">{s}</span>
                            <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">ClickUp →</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    {classifierResult.social.length > 0 && (
                      <div>
                        <p className="text-[10px] text-zinc-700 uppercase tracking-widest mb-2 font-bold">Social media sugerido</p>
                        <div className="flex gap-3">
                          {classifierResult.social.map((s, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-[#1a1a22] flex-1">
                              <span className={`text-[9px] font-black px-2 py-0.5 rounded text-white shrink-0 ${SOCIAL_BADGE[s.plataforma] ?? "bg-zinc-700"}`}>{s.plataforma}</span>
                              <div>
                                <p className="text-[10px] text-zinc-700">{s.formato}</p>
                                <p className="text-xs text-zinc-500 mt-0.5">{s.angulo}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

        </main>

        {/* ── BOTTOM TAB BAR (mobile only) ─────────────────────────────────── */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c10]/98 backdrop-blur-xl border-t border-[#1a1a22] flex items-center justify-around px-1 pb-safe">
          {[
            { id: "overview",   icon: "⚡", label: "Dashboard" },
            { id: "score",      icon: "◎", label: "Score" },
            { id: "inventory",  icon: "✦", label: "Conteúdo" },
            { id: "clusters",   icon: "◈", label: "Clusters" },
            { id: "calendario", icon: "◷", label: "Calendário" },
          ].map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex flex-col items-center gap-0.5 py-2.5 px-3 rounded-xl transition-all min-w-0 flex-1 ${
                activeSection === s.id ? "text-indigo-400" : "text-zinc-600"
              }`}
            >
              <span className="text-base leading-none">{s.icon}</span>
              <span className={`text-[9px] font-bold tracking-wide leading-none mt-0.5 ${activeSection === s.id ? "text-indigo-400" : "text-zinc-600"}`}>
                {s.label}
              </span>
              {activeSection === s.id && (
                <span className="absolute bottom-1 h-0.5 w-5 rounded-full bg-indigo-400" style={{ position: "static", display: "block", width: "20px", height: "2px", borderRadius: "9999px", backgroundColor: "#818cf8", marginTop: "2px" }} />
              )}
            </button>
          ))}
          {/* More button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`flex flex-col items-center gap-0.5 py-2.5 px-3 rounded-xl transition-all min-w-0 flex-1 ${
              !["overview","score","inventory","clusters","calendario"].includes(activeSection) ? "text-indigo-400" : "text-zinc-600"
            }`}
          >
            <span className="text-base leading-none">⋯</span>
            <span className={`text-[9px] font-bold tracking-wide leading-none mt-0.5 ${
              !["overview","score","inventory","clusters","calendario"].includes(activeSection) ? "text-indigo-400" : "text-zinc-600"
            }`}>Mais</span>
          </button>
        </nav>

      </div>
    </div>
  );
}
