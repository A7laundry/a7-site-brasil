"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type FunnelStage = "Awareness" | "Consideration" | "Decisão" | "Booking" | "Retenção" | "Referral";
type ClusterKey = "Saúde & Higiene" | "Manchas" | "Tênis" | "Roupas Especiais" | "Tapetes & Casa" | "Sustentabilidade" | "Organização" | "B2B" | "Local";

// ─── ARTICLES DATABASE ────────────────────────────────────────────────────────

const ARTICLES: {
  slug: string;
  title: string;
  cluster: ClusterKey;
  funnel: FunnelStage;
  intent: string;
  lp: string;
  monetization: string;
  gap: string;
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
];

// ─── CLUSTERS ─────────────────────────────────────────────────────────────────

const CLUSTERS_MOS = [
  {
    id: "saude",
    nome: "Saúde & Higiene",
    cor: "blue",
    tw: "bg-blue-100 text-blue-700 border-blue-200",
    badge: "bg-blue-600",
    pilar: "Guia completo de higiene doméstica: o que você não vê pode te adoecer",
    lp: "/higienizacao-edredom",
    artigos: 6,
    gap: 4,
    local: "higienização de edredom em [cidade], lavanderia para alérgicos em [cidade]",
    monetizacao: "Higienização de edredons, cortinas, tapetes — ticket médio R$80–R$200",
    proximos: [
      "Com que frequência lavar edredom (guia por estação)",
      "Ácaros no sofá: sinais e solução",
      "Lavanderia para bebês recém-nascidos",
      "Higienização pós-COVID: protocolo completo",
    ],
  },
  {
    id: "manchas",
    nome: "Manchas & Emergências",
    cor: "orange",
    tw: "bg-orange-100 text-orange-700 border-orange-200",
    badge: "bg-orange-500",
    pilar: "Guia definitivo de remoção de manchas: 30 tipos e como resolver cada um",
    lp: "/remocao-manchas",
    artigos: 3,
    gap: 7,
    local: "remoção de manchas em [cidade], lavanderia urgente [cidade]",
    monetizacao: "Remoção de manchas — ticket R$30–R$120/peça",
    proximos: [
      "Como tirar mancha de café da roupa",
      "Como tirar mancha de suor do colarinho",
      "Como tirar mancha de ferrugem",
      "Como tirar mancha de graxa",
      "Manchas que só profissional remove",
    ],
  },
  {
    id: "tenis",
    nome: "Tênis & Calçados",
    cor: "purple",
    tw: "bg-purple-100 text-purple-700 border-purple-200",
    badge: "bg-purple-600",
    pilar: "Como cuidar de tênis: guia completo por material (couro, camurça, mesh)",
    lp: "/tenis",
    artigos: 1,
    gap: 5,
    local: "lavar tênis em [cidade], higienização de tênis [cidade]",
    monetizacao: "Limpeza de tênis — ticket R$50–R$150/par",
    proximos: [
      "Como limpar tênis branco em casa",
      "Como lavar tênis de couro sem estragar",
      "Quanto custa limpar tênis em lavanderia",
      "Tênis de camurça: cuidados especiais",
      "Lavar tênis na máquina: risco ou mito?",
    ],
  },
  {
    id: "roupas",
    nome: "Roupas Especiais",
    cor: "indigo",
    tw: "bg-indigo-100 text-indigo-700 border-indigo-200",
    badge: "bg-indigo-600",
    pilar: "Guia completo de cuidados com roupas especiais: seda, cashmere, lã e couro",
    lp: "/roupas-delicadas",
    artigos: 7,
    gap: 3,
    local: "lavagem de roupas delicadas em [cidade], lavanderia para peças de grife",
    monetizacao: "Roupas delicadas — ticket R$20–R$80/peça",
    proximos: [
      "Como cuidar de seda: guia prático",
      "Lavanderia para roupas de grife: vale a pena?",
      "Guia de etiquetas de lavagem (o que cada símbolo significa)",
    ],
  },
  {
    id: "tapetes",
    nome: "Tapetes & Casa",
    cor: "teal",
    tw: "bg-teal-100 text-teal-700 border-teal-200",
    badge: "bg-teal-600",
    pilar: "Como higienizar sua casa: guia de tapetes, sofás e cortinas",
    lp: "/sofas",
    artigos: 2,
    gap: 6,
    local: "higienização de sofá em [cidade], limpeza de tapetes [cidade]",
    monetizacao: "Sofás R$150–R$400 | Tapetes R$80–R$300 | Cortinas R$50–R$200",
    proximos: [
      "Com que frequência higienizar sofá",
      "Higienização de tapete persa: cuidados especiais",
      "Lavagem de cortinas sem tirar do trilho",
      "Higienização de colchão: saúde e bem-estar",
      "Antes e depois: higienização de sofá (cases)",
    ],
  },
  {
    id: "sustentavel",
    nome: "Sustentabilidade",
    cor: "green",
    tw: "bg-green-100 text-green-700 border-green-200",
    badge: "bg-green-600",
    pilar: "Guia de consumo consciente de moda: como cuidar e durar mais com menos",
    lp: "/sustentavel",
    artigos: 3,
    gap: 3,
    local: "lavanderia sustentável em [cidade], lavanderia ecológica",
    monetizacao: "Plano mensal eco — ticket R$150–R$400/mês",
    proximos: [
      "Moda circular: como a lavanderia se encaixa",
      "Fast fashion vs. slow fashion: impacto ambiental",
      "Como estender a vida útil das roupas",
    ],
  },
  {
    id: "organizacao",
    nome: "Organização & Lifestyle",
    cor: "pink",
    tw: "bg-pink-100 text-pink-700 border-pink-200",
    badge: "bg-pink-600",
    pilar: "Método de organização de roupas: guarda-roupa funcional em 7 passos",
    lp: "/plano-mensal",
    artigos: 3,
    gap: 4,
    local: "N/A (cluster nacional)",
    monetizacao: "Plano mensal + lavagem do dia a dia",
    proximos: [
      "Rotina de lavagem semanal para famílias",
      "Como montar uma rotina de lavanderia em casa",
      "Checklists de temporada: guardar e lavar",
      "Minimalismo e roupas: o papel da lavanderia",
    ],
  },
  {
    id: "b2b",
    nome: "B2B Empresarial",
    cor: "amber",
    tw: "bg-amber-100 text-amber-700 border-amber-200",
    badge: "bg-amber-500",
    pilar: "Guia de terceirização de lavanderia para empresas: ROI, SLA e como escolher",
    lp: "/empresarial",
    artigos: 3,
    gap: 7,
    local: "lavanderia empresarial em [cidade], lavanderia para hotel [cidade]",
    monetizacao: "Contrato B2B R$500–R$5.000/mês | Ticket alto, recorrente",
    proximos: [
      "Quanto custa terceirizar lavanderia para restaurante",
      "Lavanderia para Airbnb: como funciona o contrato",
      "Uniforme corporativo: lavagem própria vs. terceirizada",
      "SLA de lavanderia hospitalar e clínicas",
      "Lavanderia para academias e spas",
      "ROI de terceirizar lavanderia em condomínios",
      "Como escolher lavanderia terceirizada para hotel",
    ],
  },
  {
    id: "local",
    nome: "Local / Geo-SEO",
    cor: "cyan",
    tw: "bg-cyan-100 text-cyan-700 border-cyan-200",
    badge: "bg-cyan-600",
    pilar: "Melhores lavanderias do Vale do Paraíba: comparativo completo 2025",
    lp: "/vale-do-paraiba",
    artigos: 2,
    gap: 8,
    local: "lavanderia em [cidade] — 15+ cidades do Vale do Paraíba",
    monetizacao: "Todos os serviços — captura de demanda local com alta intenção",
    proximos: [
      "Lavanderia com coleta em Taubaté",
      "Lavanderia em Jacareí: guia completo",
      "Higienização de edredom em São José dos Campos",
      "Limpeza de sofá em Taubaté",
      "Lavanderia delivery em Lorena e Guaratinguetá",
      "Melhor lavanderia de SJC (comparativo de preços)",
      "Lavanderia express em São José dos Campos",
      "Lavanderia para condomínios em Taubaté",
    ],
  },
];

// ─── FUNNEL ───────────────────────────────────────────────────────────────────

const FUNNEL_STAGES = [
  {
    stage: "Awareness",
    cor: "sky",
    tw: "bg-sky-50 border-sky-200",
    badge: "bg-sky-500",
    descricao: "Atrai quem tem o problema mas não sabe da solução",
    artigos: ARTICLES.filter(a => a.funnel === "Awareness"),
    exemplos: ["Como tirar mancha de vinho", "Por que higienizar edredom", "Tênis amarelando?"],
    cta: "Conteúdo educativo → captura de email / WhatsApp",
    kpi: "Impressões, cliques orgânicos, tempo na página",
  },
  {
    stage: "Consideration",
    cor: "violet",
    tw: "bg-violet-50 border-violet-200",
    badge: "bg-violet-500",
    descricao: "Converte quem está pesquisando a solução profissional",
    artigos: ARTICLES.filter(a => a.funnel === "Consideration"),
    exemplos: ["Lavanderia vs. lavar em casa", "Quanto custa limpeza de tapete", "Vale a pena contratar?"],
    cta: "Comparativo + prova social → WhatsApp",
    kpi: "CTR para LP, tempo na página, lead WhatsApp",
  },
  {
    stage: "Decisão",
    cor: "amber",
    tw: "bg-amber-50 border-amber-200",
    badge: "bg-amber-500",
    descricao: "Fecha quem já quer contratar e está comparando opções",
    artigos: ARTICLES.filter(a => a.funnel === "Decisão"),
    exemplos: ["Lavanderia em SJC", "Preços de lavanderia", "Lavanderia com coleta"],
    cta: "LP com preço + social proof + CTA WhatsApp direto",
    kpi: "Agendamentos WhatsApp, leads qualificados",
  },
  {
    stage: "Booking",
    cor: "green",
    tw: "bg-green-50 border-green-200",
    badge: "bg-green-500",
    descricao: "Converte o contato em pedido confirmado",
    artigos: [],
    exemplos: ["LPs de serviço com CTA", "Como funciona", "Preços e planos"],
    cta: "Formulário de coleta / WhatsApp deep link",
    kpi: "Taxa de conversão LP → pedido (meta: 3–8%)",
  },
  {
    stage: "Retenção",
    cor: "teal",
    tw: "bg-teal-50 border-teal-200",
    badge: "bg-teal-500",
    descricao: "Transforma pedido avulso em cliente recorrente",
    artigos: [],
    exemplos: ["Plano mensal", "Clube de assinantes", "Sequência WhatsApp pós-serviço"],
    cta: "Oferta plano mensal no WhatsApp após 1ª coleta",
    kpi: "Taxa de recompra, assinantes plano mensal",
  },
  {
    stage: "Referral",
    cor: "rose",
    tw: "bg-rose-50 border-rose-200",
    badge: "bg-rose-500",
    descricao: "Transforma clientes em promotores",
    artigos: [],
    exemplos: ["Indique um amigo", "Depoimento no Google", "Compartilhe no WhatsApp"],
    cta: "R$20 OFF na próxima coleta por indicação",
    kpi: "NPS > 85, avaliações Google, indicações/mês",
  },
];

// ─── PERSONAS ─────────────────────────────────────────────────────────────────

const PERSONAS = [
  {
    nome: "Casal Profissional",
    icone: "👫",
    cor: "blue",
    tw: "border-blue-200 bg-blue-50",
    badge: "bg-blue-600",
    descricao: "Casal sem filhos, ambos trabalhando, renda alta, apartamento",
    dores: ["Sem tempo para lavar em casa", "Roupas sociais e delicadas", "Querem praticidade total"],
    servicos: ["Plano mensal", "Roupas delicadas", "Lavagem semanal"],
    conteudo: ["Rotina de lavagem para quem trabalha muito", "Plano mensal vs. avulso"],
    gatilhos: ["Praticidade", "Tempo economizado", "Qualidade garantida"],
    lp: "/para-casais",
    ticket: "R$200–R$500/mês",
  },
  {
    nome: "Mãe com Filhos",
    icone: "👩‍👧‍👦",
    cor: "pink",
    tw: "border-pink-200 bg-pink-50",
    badge: "bg-pink-600",
    descricao: "Mãe com filhos pequenos, preocupada com higiene e saúde",
    dores: ["Volume enorme de roupa", "Roupas de bebê precisam de cuidado especial", "Ácaros e alergias nas crianças"],
    servicos: ["Lavagem de roupas de bebê", "Higienização de edredons", "Plano família"],
    conteudo: ["Higiene de roupas de bebê", "Alergia a ácaros em crianças"],
    gatilhos: ["Saúde dos filhos", "Segurança dos produtos", "Certificação"],
    lp: "/para-maes",
    ticket: "R$150–R$350/mês",
  },
  {
    nome: "Executivo(a)",
    icone: "💼",
    cor: "gray",
    tw: "border-gray-200 bg-gray-50",
    badge: "bg-gray-700",
    descricao: "Profissional de alto padrão, usa roupas sociais e peças de valor",
    dores: ["Ternos e blazers que precisam de cuidado especial", "Sem tempo para ir à lavanderia", "Não pode arriscar peças caras"],
    servicos: ["Roupas delicadas", "Couro e peças especiais", "Serviço premium"],
    conteudo: ["Como cuidar de terno", "Lavanderia premium concierge"],
    gatilhos: ["Confiança", "Resultado garantido", "Coleta no escritório"],
    lp: "/para-executivos",
    ticket: "R$300–R$800/mês",
  },
  {
    nome: "Alérgico(a)",
    icone: "🤧",
    cor: "green",
    tw: "border-green-200 bg-green-50",
    badge: "bg-green-600",
    descricao: "Pessoa com rinite, asma ou alergia a ácaros buscando solução",
    dores: ["Ácaros em roupas, tapetes e edredons", "Produtos de lavagem que irritam a pele", "Recorrência das crises alérgicas"],
    servicos: ["Higienização anti-ácaros", "Lavagem hipoalergênica", "Edredons e tapetes"],
    conteudo: ["Alergia a ácaros: guia completo", "Produtos seguros para alérgicos"],
    gatilhos: ["Saúde", "Certificação", "Produtos hipoalergênicos"],
    lp: "/para-alergicos",
    ticket: "R$200–R$400/mês",
  },
  {
    nome: "Host Airbnb / Hotel",
    icone: "🏨",
    cor: "amber",
    tw: "border-amber-200 bg-amber-50",
    badge: "bg-amber-600",
    descricao: "Dono de imóvel de aluguel por temporada ou pequena pousada",
    dores: ["Alto volume de troca de enxoval", "Prazo apertado entre hóspedes", "Qualidade do enxoval afeta avaliação"],
    servicos: ["Plano B2B", "Enxoval de cama/banho", "Entrega express"],
    conteudo: ["Lavanderia para Airbnb", "Enxoval de hotel: como terceirizar"],
    gatilhos: ["Prazo garantido", "Preço por volume", "Avaliação no Airbnb"],
    lp: "/airbnb",
    ticket: "R$400–R$2.000/mês",
  },
  {
    nome: "Empresa / B2B",
    icone: "🏢",
    cor: "violet",
    tw: "border-violet-200 bg-violet-50",
    badge: "bg-violet-600",
    descricao: "Restaurante, academia, clínica ou empresa com uniforme",
    dores: ["Gestão de uniformes e enxoval corporativo", "Volume alto com frequência diária/semanal", "Confiabilidade e prazo são essenciais"],
    servicos: ["Contrato mensal B2B", "Uniformes", "Enxoval comercial"],
    conteudo: ["Terceirização de lavanderia para empresas", "ROI de lavanderia corporativa"],
    gatilhos: ["Confiabilidade", "SLA garantido", "NF / contrato"],
    lp: "/empresarial",
    ticket: "R$500–R$5.000/mês",
  },
];

// ─── LOCAL SEO ─────────────────────────────────────────────────────────────────

const LOCAL_SEO_CITIES = [
  { cidade: "São José dos Campos", status: "LP publicada", prioridade: "P0", pop: "730k", lp: "/sao-jose-dos-campos" },
  { cidade: "Taubaté", status: "LP criada", prioridade: "P0", pop: "330k", lp: "/taubate" },
  { cidade: "Jacareí", status: "LP criada", prioridade: "P1", pop: "240k", lp: "/jacarei" },
  { cidade: "Lorena / Guaratinguetá", status: "LP criada", prioridade: "P1", pop: "190k", lp: "/lorena-guaratingueta" },
  { cidade: "Vale do Paraíba (Hub)", status: "LP criada", prioridade: "P0", pop: "2M+", lp: "/vale-do-paraiba" },
  { cidade: "Caçapava", status: "Planejar", prioridade: "P2", pop: "100k", lp: "" },
  { cidade: "Pindamonhangaba", status: "Planejar", prioridade: "P2", pop: "170k", lp: "" },
  { cidade: "Tremembé", status: "Planejar", prioridade: "P2", pop: "50k", lp: "" },
  { cidade: "Aparecida", status: "Planejar", prioridade: "P3", pop: "38k", lp: "" },
  { cidade: "Campos do Jordão", status: "Planejar", prioridade: "P3", pop: "52k", lp: "" },
];

const LOCAL_SEO_TEMPLATES = [
  "lavanderia em [cidade]",
  "lavanderia com coleta em [cidade]",
  "lavagem de edredom em [cidade]",
  "higienização de sofá em [cidade]",
  "limpeza de tapete em [cidade]",
  "lavanderia delivery em [cidade]",
  "lavagem de tênis em [cidade]",
  "lavanderia para hotel em [cidade]",
];

// ─── ROADMAP ──────────────────────────────────────────────────────────────────

const ROADMAP_30 = [
  { n: 1, titulo: "Com que frequência lavar edredom (guia por estação)", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/higienizacao-edredom" },
  { n: 2, titulo: "Quanto custa limpeza de sofá profissional em SJC", cluster: "Tapetes & Casa", funnel: "Decisão", lp: "/sofas" },
  { n: 3, titulo: "Como lavar tênis branco sem estragar", cluster: "Tênis", funnel: "Awareness", lp: "/tenis" },
  { n: 4, titulo: "Lavanderia com coleta em Taubaté: guia completo", cluster: "Local", funnel: "Decisão", lp: "/taubate" },
  { n: 5, titulo: "Quanto custa terceirizar lavanderia para restaurante", cluster: "B2B", funnel: "Consideration", lp: "/restaurantes" },
  { n: 6, titulo: "Como tirar mancha de café da roupa", cluster: "Manchas", funnel: "Awareness", lp: "/remocao-manchas" },
  { n: 7, titulo: "Ácaros no sofá: sintomas e como eliminar", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/sofas" },
  { n: 8, titulo: "Lavanderia para Airbnb: como funciona o contrato", cluster: "B2B", funnel: "Consideration", lp: "/airbnb" },
  { n: 9, titulo: "Guia de etiquetas de lavagem: o que cada símbolo significa", cluster: "Roupas Especiais", funnel: "Awareness", lp: "/roupas-delicadas" },
  { n: 10, titulo: "Higienização de colchão: saúde e bem-estar", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/higienizacao-edredom" },
  { n: 11, titulo: "Preço de lavagem de tênis em SJC: comparativo", cluster: "Tênis", funnel: "Decisão", lp: "/tenis" },
  { n: 12, titulo: "Lavanderia em Jacareí: guia completo 2025", cluster: "Local", funnel: "Decisão", lp: "/jacarei" },
  { n: 13, titulo: "Como tirar mancha de suor do colarinho", cluster: "Manchas", funnel: "Awareness", lp: "/remocao-manchas" },
  { n: 14, titulo: "Higienização de cortinas sem tirar do trilho", cluster: "Saúde & Higiene", funnel: "Consideration", lp: "/cortinas" },
  { n: 15, titulo: "Uniforme corporativo: lavar em casa vs. terceirizar", cluster: "B2B", funnel: "Consideration", lp: "/uniformes" },
  { n: 16, titulo: "Como cuidar de seda: guia prático passo a passo", cluster: "Roupas Especiais", funnel: "Awareness", lp: "/roupas-delicadas" },
  { n: 17, titulo: "Lavanderia delivery em Vale do Paraíba: como funciona", cluster: "Local", funnel: "Consideration", lp: "/vale-do-paraiba" },
  { n: 18, titulo: "Moda circular: como a lavanderia sustentável se encaixa", cluster: "Sustentabilidade", funnel: "Awareness", lp: "/sustentavel" },
  { n: 19, titulo: "Tapete persa e oriental: cuidados especiais de lavagem", cluster: "Tapetes & Casa", funnel: "Consideration", lp: "/tapetes" },
  { n: 20, titulo: "Como tirar mancha de ferrugem da roupa", cluster: "Manchas", funnel: "Awareness", lp: "/remocao-manchas" },
  { n: 21, titulo: "Lavanderia para academias e spas: terceirização", cluster: "B2B", funnel: "Consideration", lp: "/empresarial" },
  { n: 22, titulo: "Rotina de lavagem semanal para famílias com filhos", cluster: "Organização", funnel: "Awareness", lp: "/para-maes" },
  { n: 23, titulo: "Como estender a vida útil das roupas favoritas", cluster: "Sustentabilidade", funnel: "Awareness", lp: "/sustentavel" },
  { n: 24, titulo: "Higienização de tapete em Taubaté: preço e prazo", cluster: "Local", funnel: "Decisão", lp: "/tapetes" },
  { n: 25, titulo: "Lavanderia para condomínios: benefícios e como contratar", cluster: "B2B", funnel: "Consideration", lp: "/condominios" },
  { n: 26, titulo: "Como guardar edredom de inverno sem criar mofo", cluster: "Saúde & Higiene", funnel: "Awareness", lp: "/higienizacao-edredom" },
  { n: 27, titulo: "Diferença entre lavagem e higienização de tapetes", cluster: "Tapetes & Casa", funnel: "Consideration", lp: "/tapetes" },
  { n: 28, titulo: "Plano mensal de lavanderia: vale a pena para famílias?", cluster: "Organização", funnel: "Consideration", lp: "/plano-mensal" },
  { n: 29, titulo: "Tênis de camurça: como limpar sem estragar", cluster: "Tênis", funnel: "Awareness", lp: "/tenis" },
  { n: 30, titulo: "Lavanderia em Pindamonhangaba: coleta e entrega", cluster: "Local", funnel: "Decisão", lp: "" },
];

const LEAD_MAGNETS = [
  { titulo: "Guia de Manchas: 30 tipos e como remover cada um", persona: "Todos", formato: "PDF", lp: "/remocao-manchas" },
  { titulo: "Checklist de Cuidados com Roupas Delicadas", persona: "Executivos / Casais", formato: "PDF", lp: "/roupas-delicadas" },
  { titulo: "Calendário de Limpeza Doméstica (sofá, tapete, edredom)", persona: "Mães / Famílias", formato: "PDF", lp: "/higienizacao-edredom" },
  { titulo: "Guia Anti-Ácaros: ambiente saudável para alérgicos", persona: "Alérgicos", formato: "PDF", lp: "/para-alergicos" },
  { titulo: "Calculadora de ROI: terceirizar lavanderia vs. lavar em casa", persona: "B2B / Airbnb", formato: "Planilha", lp: "/empresarial" },
  { titulo: "Guia de Etiquetas de Lavagem (poster imprimível)", persona: "Todos", formato: "Poster", lp: "/lavagem-roupas" },
];

// ─── MONETIZATION ─────────────────────────────────────────────────────────────

const MONETIZATION_MAP = [
  { conteudo: "Artigos de manchas (3)", servico: "Remoção de manchas", lp: "/remocao-manchas", ticket: "R$30–R$120", recorrencia: "Avulso" },
  { conteudo: "Artigos de saúde/higiene (6)", servico: "Edredons + cortinas + tapetes", lp: "/higienizacao-edredom", ticket: "R$80–R$300", recorrencia: "Sazonal" },
  { conteudo: "Artigos de tênis (1)", servico: "Limpeza de tênis", lp: "/tenis", ticket: "R$50–R$150/par", recorrencia: "Mensal" },
  { conteudo: "Artigos de roupas especiais (7)", servico: "Lavagem delicada + couro", lp: "/roupas-delicadas", ticket: "R$20–R$80/peça", recorrencia: "Mensal" },
  { conteudo: "Artigos de tapetes/casa (2)", servico: "Higienização sofás + tapetes", lp: "/sofas", ticket: "R$150–R$400", recorrencia: "Semestral" },
  { conteudo: "Artigos B2B (3)", servico: "Contratos corporativos", lp: "/empresarial", ticket: "R$500–R$5.000/mês", recorrencia: "Contrato" },
  { conteudo: "Artigos locais (2)", servico: "Todos os serviços", lp: "/vale-do-paraiba", ticket: "Variável", recorrencia: "Alta intenção" },
  { conteudo: "Artigos de organização (3)", servico: "Plano mensal", lp: "/plano-mensal", ticket: "R$150–R$400/mês", recorrencia: "Recorrente" },
  { conteudo: "Artigos sustentabilidade (3)", servico: "Plano eco mensal", lp: "/sustentavel", ticket: "R$200–R$450/mês", recorrencia: "Recorrente" },
];

// ─── AUTO CLASSIFIER ──────────────────────────────────────────────────────────

const CLUSTER_KEYWORDS: Record<ClusterKey, string[]> = {
  "Saúde & Higiene": ["ácaro", "alergia", "fungos", "bactéria", "higieniz", "edredom", "saúde", "rinite", "asma"],
  "Manchas": ["mancha", "vinho", "óleo", "café", "ferrugem", "graxa", "tirar", "remov"],
  "Tênis": ["tênis", "calçado", "sapatilha", "couro", "camurça", "solado"],
  "Roupas Especiais": ["delicada", "seda", "cashmere", "lã", "grife", "noiva", "blazer", "terno", "social"],
  "Tapetes & Casa": ["tapete", "sofá", "cortina", "colchão", "almofada", "estofado"],
  "Sustentabilidade": ["sustentáv", "ecológ", "consciente", "meio ambiente", "eco", "orgânic"],
  "Organização": ["organiz", "guarda-roupa", "guardar", "armário", "rotina", "método"],
  "B2B": ["empresa", "restaurante", "hotel", "uniforme", "corporativo", "airbnb", "pousada", "condomínio", "contrato"],
  "Local": ["são josé", "sjc", "taubaté", "jacareí", "vale do paraíba", "lorena", "guaratinguetá"],
};

const FUNNEL_KEYWORDS: Record<FunnelStage, string[]> = {
  "Awareness": ["como", "por que", "o que é", "guia", "dicas", "erros", "benefícios"],
  "Consideration": ["vale a pena", "vs.", "comparativo", "quando contratar", "diferença"],
  "Decisão": ["preço", "quanto custa", "melhor lavanderia", "em [cidade]", "coleta"],
  "Booking": ["agendar", "solicitar", "contratar"],
  "Retenção": ["plano", "assinatura", "recorrente", "mensal"],
  "Referral": ["indicar", "indicação", "amigos"],
};

function classifyArticle(title: string): { cluster: ClusterKey; funnel: FunnelStage; lp: string; monetizacao: string; sugestoes: string[] } {
  const lower = title.toLowerCase();

  let cluster: ClusterKey = "Organização";
  for (const [key, keywords] of Object.entries(CLUSTER_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) {
      cluster = key as ClusterKey;
      break;
    }
  }

  let funnel: FunnelStage = "Awareness";
  for (const [stage, keywords] of Object.entries(FUNNEL_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) {
      funnel = stage as FunnelStage;
      break;
    }
  }

  const clusterData = CLUSTERS_MOS.find(c => c.nome === cluster);
  const lp = clusterData?.lp ?? "/";
  const monetizacao = clusterData?.monetizacao ?? "Serviços gerais";
  const sugestoes = clusterData?.proximos.slice(0, 4) ?? [];

  return { cluster, funnel, lp, monetizacao, sugestoes };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "inventory", label: "Inventário", icon: "📚" },
  { id: "clusters", label: "Clusters SEO", icon: "🗂️" },
  { id: "funnel", label: "Funil", icon: "🔻" },
  { id: "local", label: "SEO Local", icon: "📍" },
  { id: "personas", label: "Personas", icon: "👥" },
  { id: "monetizacao", label: "Monetização", icon: "💰" },
  { id: "roadmap", label: "Roadmap", icon: "🗺️" },
  { id: "classifier", label: "Classificador", icon: "🤖" },
];

const CLUSTER_COLORS: Record<string, string> = {
  "Saúde & Higiene": "bg-blue-100 text-blue-700",
  "Manchas": "bg-orange-100 text-orange-700",
  "Tênis": "bg-purple-100 text-purple-700",
  "Roupas Especiais": "bg-indigo-100 text-indigo-700",
  "Tapetes & Casa": "bg-teal-100 text-teal-700",
  "Sustentabilidade": "bg-green-100 text-green-700",
  "Organização": "bg-pink-100 text-pink-700",
  "B2B": "bg-amber-100 text-amber-700",
  "Local": "bg-cyan-100 text-cyan-700",
};

const FUNNEL_COLORS: Record<string, string> = {
  "Awareness": "bg-sky-100 text-sky-700",
  "Consideration": "bg-violet-100 text-violet-700",
  "Decisão": "bg-amber-100 text-amber-700",
  "Booking": "bg-green-100 text-green-700",
  "Retenção": "bg-teal-100 text-teal-700",
  "Referral": "bg-rose-100 text-rose-700",
};

export default function MarketingOS() {
  const [activeSection, setActiveSection] = useState("overview");
  const [clusterFilter, setClusterFilter] = useState("Todos");
  const [funnelFilter, setFunnelFilter] = useState("Todos");
  const [classifierInput, setClassifierInput] = useState("");
  const [classifierResult, setClassifierResult] = useState<ReturnType<typeof classifyArticle> | null>(null);

  const totalArticles = ARTICLES.length;
  const totalGaps = CLUSTERS_MOS.reduce((s, c) => s + c.gap, 0);
  const totalClusters = CLUSTERS_MOS.length;
  const publishedLPs = 1;

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(a => {
      const matchCluster = clusterFilter === "Todos" || a.cluster === clusterFilter;
      const matchFunnel = funnelFilter === "Todos" || a.funnel === funnelFilter;
      return matchCluster && matchFunnel;
    });
  }, [clusterFilter, funnelFilter]);

  const handleClassify = () => {
    if (!classifierInput.trim()) return;
    setClassifierResult(classifyArticle(classifierInput));
  };

  return (
    <div className="min-h-screen bg-[#050810] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-[#050810]/95 backdrop-blur">
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
        <div className="flex items-center gap-3">
          <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full font-mono">
            {totalArticles} artigos · {totalClusters} clusters · {totalGaps} gaps
          </span>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-52 shrink-0 border-r border-white/10 min-h-[calc(100vh-57px)] sticky top-[57px] self-start">
          <nav className="p-3 space-y-1">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all ${
                  activeSection === s.id
                    ? "bg-[#46C1F1]/20 text-[#46C1F1] font-semibold"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-base">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8 max-w-6xl">

          {/* ── OVERVIEW ── */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black mb-1">Marketing Operating System</h2>
                <p className="text-white/50 text-sm">Visão completa do ecossistema de conteúdo, SEO e geração de leads da A7 Lavanderia.</p>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Artigos publicados", val: "30", sub: "em 9 clusters", cor: "text-[#46C1F1]" },
                  { label: "Gaps identificados", val: `${totalGaps}`, sub: "artigos em falta", cor: "text-orange-400" },
                  { label: "LPs estratégicas", val: "30", sub: `${publishedLPs} publicada(s)`, cor: "text-green-400" },
                  { label: "Cidades mapeadas", val: "10", sub: "5 LPs ativas", cor: "text-purple-400" },
                ].map(k => (
                  <div key={k.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className={`text-3xl font-black ${k.cor}`}>{k.val}</p>
                    <p className="text-white text-sm font-semibold mt-1">{k.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{k.sub}</p>
                  </div>
                ))}
              </div>

              {/* Cluster coverage */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Cobertura por Cluster</h3>
                <div className="space-y-3">
                  {CLUSTERS_MOS.map(c => {
                    const total = c.artigos + c.gap;
                    const pct = Math.round((c.artigos / total) * 100);
                    return (
                      <div key={c.id} className="flex items-center gap-4">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.tw} w-40 shrink-0 text-center`}>{c.nome}</span>
                        <div className="flex-1 bg-white/10 rounded-full h-2">
                          <div className={`h-2 rounded-full ${c.badge}`} style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-white/50 w-20 text-right">{c.artigos}/{total} artigos</span>
                        <span className="text-xs text-orange-400 w-16 text-right">+{c.gap} gaps</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Funnel distribution */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Distribuição no Funil</h3>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                  {FUNNEL_STAGES.map(f => (
                    <div key={f.stage} className={`rounded-xl p-4 border text-center ${f.tw}`}>
                      <div className={`w-8 h-8 rounded-full ${f.badge} mx-auto mb-2 flex items-center justify-center text-white font-black text-sm`}>
                        {f.artigos.length}
                      </div>
                      <p className="text-xs font-bold text-gray-700">{f.stage}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-4">⚠️ Fundo do funil (Booking, Retenção, Referral) ainda sem artigos — oportunidade crítica.</p>
              </div>

              {/* Top gaps */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">🔥 Top Gaps Estratégicos</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { gap: "Cluster B2B tem só 3 artigos mas representa o maior ticket (R$500–R$5k/mês)", prio: "CRÍTICO" },
                    { gap: "Zero artigos de fundo de funil para Booking/Retenção/Referral", prio: "CRÍTICO" },
                    { gap: "Cluster Tênis tem 1 artigo — serviço de alto engajamento nas buscas", prio: "ALTO" },
                    { gap: "Cluster Local tem 2 artigos — maior intenção de compra das buscas", prio: "ALTO" },
                    { gap: "Manchas: 3 artigos publicados, 7+ oportunidades de cauda longa", prio: "MÉDIO" },
                    { gap: "Tapetes & Casa: 2 artigos — sofá e tapete são serviços de ticket alto", prio: "MÉDIO" },
                  ].map(g => (
                    <div key={g.gap} className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded self-start mt-0.5 shrink-0 ${
                        g.prio === "CRÍTICO" ? "bg-red-500/20 text-red-400" :
                        g.prio === "ALTO" ? "bg-orange-500/20 text-orange-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>{g.prio}</span>
                      <p className="text-sm text-white/70">{g.gap}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── INVENTORY ── */}
          {activeSection === "inventory" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Inventário de Conteúdo</h2>
                <p className="text-white/50 text-sm">30 artigos classificados por cluster, estágio de funil e oportunidade de monetização.</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <div>
                  <p className="text-xs text-white/40 mb-1">Cluster</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", ...Object.keys(CLUSTER_COLORS)].map(c => (
                      <button key={c} onClick={() => setClusterFilter(c)}
                        className={`text-xs px-3 py-1 rounded-full border transition-all ${clusterFilter === c ? "bg-[#46C1F1] text-black border-[#46C1F1] font-bold" : "border-white/20 text-white/50 hover:border-white/40"}`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Funil</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", ...Object.keys(FUNNEL_COLORS)].map(f => (
                      <button key={f} onClick={() => setFunnelFilter(f)}
                        className={`text-xs px-3 py-1 rounded-full border transition-all ${funnelFilter === f ? "bg-[#46C1F1] text-black border-[#46C1F1] font-bold" : "border-white/20 text-white/50 hover:border-white/40"}`}>
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/30">{filteredArticles.length} artigos exibidos</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-xs">
                      <th className="text-left py-2 pr-4 font-medium">Artigo</th>
                      <th className="text-left py-2 pr-4 font-medium">Cluster</th>
                      <th className="text-left py-2 pr-4 font-medium">Funil</th>
                      <th className="text-left py-2 pr-4 font-medium">Intenção</th>
                      <th className="text-left py-2 pr-4 font-medium">LP</th>
                      <th className="text-left py-2 font-medium">Próximo conteúdo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArticles.map(a => (
                      <tr key={a.slug} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td className="py-3 pr-4">
                          <Link href={`/blog/${a.slug}`} className="text-white hover:text-[#46C1F1] transition-colors font-medium text-xs leading-tight block max-w-[200px]">
                            {a.title}
                          </Link>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CLUSTER_COLORS[a.cluster]}`}>
                            {a.cluster}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${FUNNEL_COLORS[a.funnel]}`}>
                            {a.funnel}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="text-xs text-white/40">{a.intent}</span>
                        </td>
                        <td className="py-3 pr-4">
                          <Link href={a.lp} className="text-[#46C1F1] text-xs hover:underline font-mono">{a.lp}</Link>
                        </td>
                        <td className="py-3">
                          <span className="text-xs text-orange-400/80 italic">{a.gap}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── CLUSTERS ── */}
          {activeSection === "clusters" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Arquitetura de Clusters SEO</h2>
                <p className="text-white/50 text-sm">9 clusters temáticos com pillar pages, artigos de suporte e LPs conectadas.</p>
              </div>

              <div className="space-y-5">
                {CLUSTERS_MOS.map(c => (
                  <div key={c.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-black px-3 py-1 rounded-full border ${c.tw}`}>{c.nome}</span>
                        <span className="text-xs text-white/40">{c.artigos} artigos · <span className="text-orange-400">+{c.gap} gaps</span></span>
                      </div>
                      <Link href={c.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{c.lp}</Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Pillar Page</p>
                        <p className="text-white/80 text-xs leading-relaxed border-l-2 border-[#46C1F1]/40 pl-3">{c.pilar}</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Próximos artigos</p>
                        <ul className="space-y-1">
                          {c.proximos.map(p => (
                            <li key={p} className="text-xs text-orange-300/80 flex gap-2">
                              <span className="text-orange-500 mt-0.5 shrink-0">+</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Monetização</p>
                        <p className="text-white/60 text-xs mb-3">{c.monetizacao}</p>
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-1">SEO Local</p>
                        <p className="text-cyan-400/70 text-xs italic">{c.local}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── FUNNEL ── */}
          {activeSection === "funnel" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Arquitetura de Funil</h2>
                <p className="text-white/50 text-sm">Como o conteúdo guia o cliente da descoberta até o agendamento recorrente.</p>
              </div>

              <div className="space-y-4">
                {FUNNEL_STAGES.map((f, i) => (
                  <div key={f.stage} className={`rounded-xl p-6 border ${f.tw}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${f.badge} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-black text-gray-900">{f.stage}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{f.descricao}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                        {f.artigos.length} artigos
                      </span>
                    </div>

                    {f.artigos.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Artigos mapeados:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {f.artigos.map(a => (
                            <Link key={a.slug} href={`/blog/${a.slug}`}
                              className="text-xs bg-white/60 text-gray-700 px-2 py-1 rounded-full hover:bg-white transition-colors">
                              {a.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-gray-400 font-semibold mb-1">Exemplos de conteúdo:</p>
                        <ul className="space-y-0.5">
                          {f.exemplos.map(e => <li key={e} className="text-gray-600">• {e}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-gray-400 font-semibold mb-1">CTA estratégico:</p>
                        <p className="text-gray-600">{f.cta}</p>
                        <p className="text-gray-400 font-semibold mt-2 mb-1">KPIs:</p>
                        <p className="text-gray-600">{f.kpi}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── LOCAL SEO ── */}
          {activeSection === "local" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">SEO Local</h2>
                <p className="text-white/50 text-sm">Estratégia de expansão geográfica no Vale do Paraíba.</p>
              </div>

              {/* Cities table */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Cidades Mapeadas</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/40 text-xs">
                        <th className="text-left py-2 pr-4">Cidade</th>
                        <th className="text-left py-2 pr-4">Pop.</th>
                        <th className="text-left py-2 pr-4">Prioridade</th>
                        <th className="text-left py-2 pr-4">Status</th>
                        <th className="text-left py-2">LP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LOCAL_SEO_CITIES.map(c => (
                        <tr key={c.cidade} className="border-b border-white/5">
                          <td className="py-3 pr-4 font-medium">{c.cidade}</td>
                          <td className="py-3 pr-4 text-white/50 text-xs">{c.pop}</td>
                          <td className="py-3 pr-4">
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                              c.prioridade === "P0" ? "bg-red-500/20 text-red-400" :
                              c.prioridade === "P1" ? "bg-orange-500/20 text-orange-400" :
                              c.prioridade === "P2" ? "bg-yellow-500/20 text-yellow-400" :
                              "bg-white/10 text-white/30"
                            }`}>{c.prioridade}</span>
                          </td>
                          <td className="py-3 pr-4">
                            <span className={`text-xs ${c.status === "LP publicada" ? "text-green-400" : c.status === "LP criada" ? "text-[#46C1F1]" : "text-white/30"}`}>
                              {c.status}
                            </span>
                          </td>
                          <td className="py-3">
                            {c.lp ? <Link href={c.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{c.lp}</Link> : <span className="text-white/20 text-xs">—</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* URL templates */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Templates de URL Local</h3>
                <p className="text-white/40 text-sm mb-4">Para cada cidade, replicar estes padrões de URL e conteúdo:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {LOCAL_SEO_TEMPLATES.map(t => (
                    <div key={t} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                      <span className="text-[#46C1F1] text-xs">→</span>
                      <code className="text-xs text-cyan-300 font-mono">{t}</code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programmatic SEO */}
              <div className="bg-[#0C5982]/20 border border-[#46C1F1]/20 rounded-xl p-6">
                <h3 className="font-black mb-2 text-[#46C1F1]">🤖 Programmatic SEO — /lavanderia/[serviço]/[cidade]</h3>
                <p className="text-white/60 text-sm mb-3">Combinando 8 serviços × 10 cidades = <strong className="text-white">80+ páginas automáticas</strong> de alta intenção.</p>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-white/50 font-mono">
                  {["/lavagem-roupas/sao-jose-dos-campos", "/higienizacao-edredom/taubate", "/limpeza-tapetes/jacarei", "/higienizacao-sofa/sao-jose-dos-campos", "/lavagem-tenis/taubate", "/remocao-manchas/sao-jose-dos-campos"].map(url => (
                    <div key={url} className="bg-white/5 px-3 py-1.5 rounded">{url}</div>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-3">Ver /lavanderia/[cidade] já implementado — expandir para /lavanderia/[servico]/[cidade]</p>
              </div>

              {/* Google Business */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-3">Google Business Profile</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {[
                    { acao: "Completar 100% do perfil GBP", impacto: "Pack local, Maps ranking", urgencia: "Crítico" },
                    { acao: "Adicionar fotos da unidade + equipe", impacto: "Engajamento + confiança", urgencia: "Alto" },
                    { acao: "Publicar posts semanais no GBP", impacto: "Relevância local", urgencia: "Médio" },
                    { acao: "Responder todas as avaliações (Google)", impacto: "NPS + sinal de atividade", urgencia: "Alto" },
                    { acao: "Adicionar serviços com preços no GBP", impacto: "Conversão direta", urgencia: "Alto" },
                    { acao: "Criar perfil para Taubaté (próxima unidade)", impacto: "Cobertura regional", urgencia: "Médio" },
                  ].map(a => (
                    <div key={a.acao} className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded self-start shrink-0 ${
                        a.urgencia === "Crítico" ? "bg-red-500/20 text-red-400" :
                        a.urgencia === "Alto" ? "bg-orange-500/20 text-orange-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>{a.urgencia}</span>
                      <div>
                        <p className="text-white/80 text-xs font-medium">{a.acao}</p>
                        <p className="text-white/30 text-xs">{a.impacto}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── PERSONAS ── */}
          {activeSection === "personas" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Personas</h2>
                <p className="text-white/50 text-sm">6 perfis de clientes com dores, gatilhos e estratégia de conteúdo.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {PERSONAS.map(p => (
                  <div key={p.nome} className={`rounded-xl p-6 border ${p.tw}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{p.icone}</span>
                      <div>
                        <h3 className="font-black text-gray-900">{p.nome}</h3>
                        <p className="text-xs text-gray-500">{p.descricao}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                      <div>
                        <p className="font-bold text-gray-700 mb-1">Dores principais:</p>
                        <ul className="space-y-0.5">
                          {p.dores.map(d => <li key={d} className="text-gray-600">• {d}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 mb-1">Serviços-chave:</p>
                        <ul className="space-y-0.5">
                          {p.servicos.map(s => <li key={s} className="text-gray-600">• {s}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                      <div>
                        <p className="font-bold text-gray-700 mb-1">Gatilhos de conversão:</p>
                        <div className="flex flex-wrap gap-1">
                          {p.gatilhos.map(g => (
                            <span key={g} className={`px-2 py-0.5 rounded-full font-medium ${p.tw} border`}>{g}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 mb-1">Ticket médio:</p>
                        <p className="font-black text-gray-900">{p.ticket}</p>
                        <p className="font-bold text-gray-700 mt-2 mb-1">LP principal:</p>
                        <Link href={p.lp} className="text-xs font-mono text-blue-600 hover:underline">{p.lp}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── MONETIZAÇÃO ── */}
          {activeSection === "monetizacao" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Mapa de Monetização</h2>
                <p className="text-white/50 text-sm">Como cada tipo de conteúdo conecta a receita.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-xs">
                      <th className="text-left py-2 pr-4">Conteúdo</th>
                      <th className="text-left py-2 pr-4">Serviço</th>
                      <th className="text-left py-2 pr-4">LP</th>
                      <th className="text-left py-2 pr-4">Ticket</th>
                      <th className="text-left py-2">Recorrência</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MONETIZATION_MAP.map(m => (
                      <tr key={m.conteudo} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td className="py-3 pr-4 text-xs text-white/70">{m.conteudo}</td>
                        <td className="py-3 pr-4 text-xs font-medium">{m.servico}</td>
                        <td className="py-3 pr-4">
                          <Link href={m.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{m.lp}</Link>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="text-xs font-black text-green-400">{m.ticket}</span>
                        </td>
                        <td className="py-3">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            m.recorrencia === "Contrato" || m.recorrencia === "Recorrente" ? "bg-green-500/20 text-green-400" :
                            m.recorrencia === "Alta intenção" ? "bg-[#46C1F1]/20 text-[#46C1F1]" :
                            "bg-white/10 text-white/40"
                          }`}>{m.recorrencia}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Lead magnets */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Iscas Digitais (Lead Magnets)</h3>
                <p className="text-white/40 text-sm mb-4">Materiais gratuitos que capturam leads qualificados para nutrição via WhatsApp.</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {LEAD_MAGNETS.map(lm => (
                    <div key={lm.titulo} className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-2xl">{lm.formato === "PDF" ? "📄" : lm.formato === "Planilha" ? "📊" : "🖼️"}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{lm.titulo}</p>
                        <p className="text-xs text-white/40 mt-1">Persona: {lm.persona} · {lm.formato}</p>
                        <Link href={lm.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{lm.lp}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* B2B opportunities */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="font-black mb-3 text-amber-400">💼 Oportunidades B2B — Maior ROI</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {[
                    { tipo: "Restaurantes", ticket: "R$800–R$3k/mês", pipeline: "3 artigos publicados · LP /restaurantes", status: "Pronto para ativar" },
                    { tipo: "Hotéis e Pousadas", ticket: "R$1k–R$5k/mês", pipeline: "1 artigo · LP /hotelaria", status: "Precisa de mais conteúdo" },
                    { tipo: "Uniformes Corporativos", ticket: "R$500–R$2k/mês", pipeline: "1 artigo · LP /uniformes", status: "Precisa de mais conteúdo" },
                    { tipo: "Airbnb Hosts", ticket: "R$400–R$2k/mês", pipeline: "LP /airbnb criada", status: "Precisa de conteúdo" },
                    { tipo: "Condomínios", ticket: "R$1k–R$4k/mês", pipeline: "LP /condominios criada", status: "Sem conteúdo ainda" },
                    { tipo: "Academias e Spas", ticket: "R$600–R$2k/mês", pipeline: "Sem LP ou artigo", status: "Gap — alta oportunidade" },
                  ].map(b => (
                    <div key={b.tipo} className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-bold text-amber-300">{b.tipo}</p>
                        <span className="text-xs font-black text-green-400">{b.ticket}</span>
                      </div>
                      <p className="text-xs text-white/50 mb-1">{b.pipeline}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        b.status.includes("Pronto") ? "bg-green-500/20 text-green-400" :
                        b.status.includes("Gap") ? "bg-red-500/20 text-red-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>{b.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── ROADMAP ── */}
          {activeSection === "roadmap" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Roadmap de Conteúdo</h2>
                <p className="text-white/50 text-sm">Próximos 30 artigos priorizados por impacto estratégico.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-xs">
                      <th className="text-left py-2 pr-3 w-8">#</th>
                      <th className="text-left py-2 pr-4">Título sugerido</th>
                      <th className="text-left py-2 pr-4">Cluster</th>
                      <th className="text-left py-2 pr-4">Funil</th>
                      <th className="text-left py-2">LP alvo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROADMAP_30.map(r => (
                      <tr key={r.n} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td className="py-2.5 pr-3 text-white/30 font-mono text-xs">{r.n}</td>
                        <td className="py-2.5 pr-4 text-xs text-white/80 font-medium">{r.titulo}</td>
                        <td className="py-2.5 pr-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CLUSTER_COLORS[r.cluster] ?? "bg-gray-100 text-gray-700"}`}>
                            {r.cluster}
                          </span>
                        </td>
                        <td className="py-2.5 pr-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${FUNNEL_COLORS[r.funnel] ?? "bg-gray-100 text-gray-700"}`}>
                            {r.funnel}
                          </span>
                        </td>
                        <td className="py-2.5">
                          {r.lp ? <Link href={r.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{r.lp}</Link> : <span className="text-white/20 text-xs">A criar</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Next LPs */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-4">Próximas Landing Pages (por prioridade)</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  {[
                    { lp: "/empresarial", desc: "Hub B2B — 3 artigos prontos apontando para ela", prio: "P0 CRÍTICO" },
                    { lp: "/precos", desc: "Página de decisão mais buscada — fundo de funil", prio: "P0 CRÍTICO" },
                    { lp: "/remocao-manchas", desc: "Cluster mais amplo de topo de funil", prio: "P0" },
                    { lp: "/higienizacao-edredom", desc: "Maior volume de busca sazonal", prio: "P0" },
                    { lp: "/tenis", desc: "Alto engajamento, ticket recorrente", prio: "P0" },
                    { lp: "/tapetes", desc: "Ticket alto, buscas constantes", prio: "P0" },
                  ].map(l => (
                    <div key={l.lp} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded shrink-0 mt-0.5 ${
                        l.prio.includes("CRÍTICO") ? "bg-red-500/20 text-red-400" : "bg-orange-500/20 text-orange-400"
                      }`}>{l.prio}</span>
                      <div>
                        <Link href={l.lp} className="text-[#46C1F1] font-mono text-xs hover:underline">{l.lp}</Link>
                        <p className="text-xs text-white/50 mt-0.5">{l.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── CLASSIFIER ── */}
          {activeSection === "classifier" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-1">Classificador Automático</h2>
                <p className="text-white/50 text-sm">Insira o título de um novo artigo e o sistema classifica automaticamente.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <label className="block text-sm font-semibold mb-3 text-white/70">Título do novo artigo</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={classifierInput}
                    onChange={e => setClassifierInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleClassify()}
                    placeholder="Ex: Como tirar mancha de café da roupa..."
                    className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#46C1F1]/50"
                  />
                  <button
                    onClick={handleClassify}
                    className="bg-[#46C1F1] text-black font-black px-6 py-3 rounded-xl hover:bg-[#46C1F1]/80 transition-colors text-sm"
                  >
                    Classificar
                  </button>
                </div>

                {classifierResult && (
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Análise automática</p>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-xs text-white/50">Cluster:</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${CLUSTER_COLORS[classifierResult.cluster]}`}>{classifierResult.cluster}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-white/50">Funil:</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${FUNNEL_COLORS[classifierResult.funnel]}`}>{classifierResult.funnel}</span>
                        </div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-xs text-white/50">LP alvo:</span>
                          <Link href={classifierResult.lp} className="text-xs text-[#46C1F1] hover:underline font-mono">{classifierResult.lp}</Link>
                        </div>
                        <div>
                          <span className="text-xs text-white/50 block mb-1">Monetização:</span>
                          <p className="text-xs text-green-400">{classifierResult.monetizacao}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Conteúdo relacionado sugerido</p>
                      <ul className="space-y-2">
                        {classifierResult.sugestoes.map(s => (
                          <li key={s} className="flex gap-2 text-xs">
                            <span className="text-orange-400 shrink-0">→</span>
                            <span className="text-orange-300/80">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* How it works */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black mb-3">Como o sistema funciona</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {[
                    { step: "1", titulo: "Análise de palavras-chave", desc: "O título é comparado com dicionários de palavras-chave de cada cluster para identificar o tema dominante." },
                    { step: "2", titulo: "Mapeamento no funil", desc: "Padrões como 'como fazer', 'quanto custa', 'em [cidade]' determinam em qual estágio do funil o artigo atua." },
                    { step: "3", titulo: "Conexão com LP e receita", desc: "O cluster identificado é mapeado à LP estratégica correspondente e à oportunidade de monetização." },
                  ].map(s => (
                    <div key={s.step} className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 bg-[#46C1F1]/20 text-[#46C1F1] rounded-full flex items-center justify-center font-black text-sm mb-3">{s.step}</div>
                      <p className="font-semibold text-sm mb-1">{s.titulo}</p>
                      <p className="text-xs text-white/40">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
