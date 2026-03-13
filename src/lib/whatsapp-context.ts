// ─── A7 LAVANDERIA — AI SALES ENGINE ─────────────────────────────────────────
// WhatsApp Context Engine · Lead Classification · Upsell · Recorrência

export const WA_NUMBER = "5512974128390";

// ─── LEAD CATALOG ─────────────────────────────────────────────────────────────

export interface LeadProfile {
  slug: string;
  label: string;
  keywords: string[]; // palavras que identificam esse serviço na mensagem do cliente
  ticketMin: number;
  ticketMax: number;
  ticketMedio: number;
  prazo: string;
  urgencia: "alta" | "media" | "baixa";
  upsells: string[]; // slugs de serviços relacionados
  recorrencia: string; // pitch de plano mensal
  replyTemplate: (detalhe?: string) => string;
  upsellTemplate: string;
  recorrenciaTemplate: string;
}

export const LEAD_CATALOG: Record<string, LeadProfile> = {
  edredom: {
    slug: "edredom",
    label: "Edredom",
    keywords: ["edredom", "duvet", "acolchoado", "cobertor grosso", "plumão"],
    ticketMin: 39,
    ticketMax: 89,
    ticketMedio: 59,
    prazo: "48h",
    urgencia: "media",
    upsells: ["travesseiro", "cobertor", "cortinas"],
    recorrencia: "higienizacao-edredom",
    replyTemplate: (detalhe) =>
      `Olá! Tudo bem? 😊\n\nA higienização de edredom aqui na A7 começa em R$39,90 para solteiro e vai até R$89,90 para king size. O processo inclui lavagem a 60°C que elimina 100% dos ácaros e fungos.\n\nO prazo é de 48h após a coleta, e a coleta é sempre grátis aqui em ${detalhe || "São José dos Campos"} e região.\n\nQual o tamanho do edredom? (solteiro, casal ou king?) 😊`,
    upsellTemplate:
      "Aproveitando a coleta do edredom, também higienizamos **travesseiros** e **cobertores** com desconto! Quer que eu inclua no orçamento?",
    recorrenciaTemplate:
      "Muitos clientes com alergias fazem a higienização a cada 2 meses — temos plano mensal com desconto progressivo. Posso te explicar melhor?",
  },

  tapete: {
    slug: "tapete",
    label: "Tapete",
    keywords: ["tapete", "carpete", "passadeira", "tapetinho", "capacho"],
    ticketMin: 25,
    ticketMax: 200,
    ticketMedio: 65,
    prazo: "72h",
    urgencia: "media",
    upsells: ["sofa", "cortinas", "edredom"],
    recorrencia: "tapetes",
    replyTemplate: (detalhe) =>
      `Olá! 😊\n\nA limpeza de tapete aqui na A7 é cobrada por m². O valor começa em R$25/m² para tapetes sintéticos e varia conforme o material.\n\nSe quiser, me manda uma foto e as medidas aproximadas — faço o orçamento na hora!\n\nAtendemos ${detalhe || "toda a região"} com coleta e entrega grátis. Prazo de 72h após coleta. 🧹`,
    upsellTemplate:
      "Já que vamos passar pelo seu endereço para o tapete, também higienizamos **sofás** no mesmo dia! Temos combo com desconto. Quer saber mais?",
    recorrenciaTemplate:
      "Para famílias com pets ou crianças, recomendamos limpeza trimestral. Temos plano com desconto para clientes recorrentes. Posso te explicar?",
  },

  tenis: {
    slug: "tenis",
    label: "Tênis",
    keywords: ["tênis", "tenis", "sneaker", "sapatênis", "calçado esportivo", "air force", "yeezy", "vans", "nike", "adidas"],
    ticketMin: 29,
    ticketMax: 79,
    ticketMedio: 49,
    prazo: "48h",
    urgencia: "alta",
    upsells: ["roupas-delicadas", "tapete"],
    recorrencia: "tenis",
    replyTemplate: () =>
      `Olá! Que bom que nos encontrou! 👟\n\nA limpeza de tênis aqui na A7 começa em R$29,90 o par e vai até R$79,90 para peças premium (couro, suede, grife).\n\nMe manda uma foto do seu tênis que faço o orçamento exato e te falo se tem chance de deixar como novo! O prazo é de 48h e a coleta é grátis. 😊`,
    upsellTemplate:
      "Aproveitando, também fazemos limpeza de **palmilhas ortopédicas** e **outros calçados**! Quer incluir mais alguma peça no pedido?",
    recorrenciaTemplate:
      "Clientes que usam tênis com frequência costumam fazer limpeza mensal. Temos pacote 3 pares/mês com desconto fixo. Posso te passar os detalhes?",
  },

  sofa: {
    slug: "sofa",
    label: "Sofá",
    keywords: ["sofá", "sofa", "estofado", "poltrona", "chaise", "loveseat", "sectional"],
    ticketMin: 89,
    ticketMax: 350,
    ticketMedio: 180,
    prazo: "no dia",
    urgencia: "media",
    upsells: ["tapete", "cortinas"],
    recorrencia: "sofa",
    replyTemplate: () =>
      `Olá! 😊\n\nA higienização de sofá aqui na A7 é feita no local — você não precisa mover nada!\n\nO valor começa em R$89,90 para sofá de 2 lugares. Para cantineiro ou em L, faço orçamento pela foto.\n\nMe manda uma foto do sofá e o modelo (tamanho, tipo de tecido se souber) que preparo o orçamento na hora! 🛋️`,
    upsellTemplate:
      "Aproveitando que nossa equipe vai até você para o sofá, também higienizamos **tapetes e cadeiras** no mesmo dia. Tem interesse em um combo com desconto?",
    recorrenciaTemplate:
      "Para sofás com uso intenso (pets, crianças), recomendamos higienização semestral. Temos desconto para clientes recorrentes. Posso te explicar?",
  },

  cortinas: {
    slug: "cortinas",
    label: "Cortinas",
    keywords: ["cortina", "cortinas", "blackout", "voil", "persiana de tecido"],
    ticketMin: 35,
    ticketMax: 120,
    ticketMedio: 60,
    prazo: "72h",
    urgencia: "baixa",
    upsells: ["tapete", "edredom"],
    recorrencia: "cortinas",
    replyTemplate: () =>
      `Olá! 😊\n\nLavamos cortinas de todos os tipos! O valor começa em R$35,00 por painel.\n\nE a melhor parte: **nossa equipe retira e reinstala as cortinas** — você não precisa fazer nada!\n\nMe conta qual o tipo de cortina e quantos painéis são para eu passar o orçamento exato. 🪟`,
    upsellTemplate:
      "Muitos clientes aproveitam a lavagem das cortinas para higienizar os **tapetes e edredons** no mesmo pedido — fica mais econômico com o frete único!",
    recorrenciaTemplate:
      "Recomendamos lavar as cortinas a cada 6 meses. Com nosso lembrete semestral e desconto para recorrentes, fica ainda mais fácil manter a casa saudável.",
  },

  mancha: {
    slug: "mancha",
    label: "Remoção de Mancha",
    keywords: ["mancha", "manchado", "vinho", "óleo", "graxa", "sangue", "café", "ferrugem", "caneta", "mofo"],
    ticketMin: 15,
    ticketMax: 80,
    ticketMedio: 30,
    prazo: "48h",
    urgencia: "alta",
    upsells: ["edredom", "tapete"],
    recorrencia: "lavagem-roupas",
    replyTemplate: () =>
      `Olá! 😊 Vamos ver o que dá pra fazer!\n\nPor favor, me manda uma foto da peça com a mancha — avaliamos gratuitamente e te dizemos honestamente se conseguimos remover *antes* de você trazer.\n\n⚠️ Dica importante: **não tente lavar em casa antes**, pois o processo errado pode fixar a mancha permanentemente.\n\nAguardo a foto! 📸`,
    upsellTemplate:
      "Enquanto tratamos a mancha, posso avaliar outras peças que precisem de cuidado? Muitos clientes aproveitam para mandar mais peças juntas e economizar no frete.",
    recorrenciaTemplate:
      "Para evitar problemas com manchas futuras, temos plano mensal de lavagem — a gente cuida das suas roupas antes que o problema apareça.",
  },

  roupas_delicadas: {
    slug: "roupas-delicadas",
    label: "Roupas Delicadas",
    keywords: ["seda", "cashmere", "lã", "la", "delicada", "delicado", "renda", "linho", "vintage", "grife", "importada", "terno", "blazer"],
    ticketMin: 25,
    ticketMax: 150,
    ticketMedio: 55,
    prazo: "72h",
    urgencia: "media",
    upsells: ["tenis", "mancha"],
    recorrencia: "roupas-delicadas",
    replyTemplate: (detalhe) =>
      `Olá! 😊 Que ótimo!\n\nTrabalhamos com lavagem especializada em roupas delicadas — seda, cashmere, lã, linho, renda e peças de grife.\n\nCada peça é avaliada individualmente antes de aceitar o serviço. Me manda uma foto ${detalhe ? `da peça` : "das peças"} com a etiqueta de cuidados (se tiver) que faço a avaliação na hora!\n\nO prazo é de 72h e a coleta é grátis. ✨`,
    upsellTemplate:
      "Junto com as peças delicadas, também cuido de **tênis premium** e **calçados** com o mesmo nível de cuidado. Tem algum par que precise de atenção?",
    recorrenciaTemplate:
      "Clientes com muitas peças delicadas costumam ter um plano mensal conosco — avaliamos e lavamos periodicamente, mantendo o guarda-roupa sempre em dia.",
  },

  uniforme: {
    slug: "uniforme",
    label: "Uniforme / Empresarial",
    keywords: ["uniforme", "farda", "empresa", "funcionário", "colaborador", "restaurante", "hotel", "bar", "cozinha", "porteiro", "zelador"],
    ticketMin: 10,
    ticketMax: 35,
    ticketMedio: 20,
    prazo: "48h",
    urgencia: "media",
    upsells: ["tapete", "cortinas"],
    recorrencia: "empresarial",
    replyTemplate: () =>
      `Olá! 😊\n\nAtendemos empresas com contrato mensal, nota fiscal e SLA de entrega!\n\nPara uniformes e enxoval empresarial, preparamos uma proposta personalizada baseada no seu volume e frequência.\n\nPode me contar um pouco mais? Qual o tipo de negócio e quantas peças aproximadamente por semana? 🏢`,
    upsellTemplate:
      "Além dos uniformes, também cuidamos de **tapetes das áreas comuns** e **cortinas** do estabelecimento. Posso incluir no orçamento?",
    recorrenciaTemplate:
      "Temos contratos mensais com preço fixo, coleta programada e nota fiscal — muito mais prático do que gerenciar internamente. Posso preparar uma proposta?",
  },

  geral: {
    slug: "geral",
    label: "Consulta Geral",
    keywords: ["roupa", "lavar", "lavagem", "lavanderia", "coleta", "buscar", "entrega", "como funciona", "preço", "quanto custa", "valor"],
    ticketMin: 39,
    ticketMax: 150,
    ticketMedio: 70,
    prazo: "48h",
    urgencia: "media",
    upsells: ["edredom", "tapete", "tenis"],
    recorrencia: "plano-mensal",
    replyTemplate: () =>
      `Olá! Seja bem-vindo à A7 Lavanderia! 😊\n\nTemos coleta e entrega grátis em todo o Vale do Paraíba. Cuidamos de:\n\n👟 Tênis e calçados\n🛏️ Edredons e roupas de cama\n🪣 Tapetes\n🛋️ Sofás\n👗 Roupas delicadas\n🔵 Remoção de manchas\n\nMe conta o que precisa que preparo o orçamento na hora!`,
    upsellTemplate:
      "Além do que me pediu, posso orçar outros serviços na mesma coleta — fica mais vantajoso no frete!",
    recorrenciaTemplate:
      "Temos plano mensal que sai mais econômico para quem usa com frequência. Posso explicar como funciona?",
  },
};

// ─── CONTEXT MESSAGE GENERATOR ────────────────────────────────────────────────

export interface RouteContext {
  service?: string;
  city?: string;
  problem?: string;
  page?: string; // fallback: path completo
}

export function getContextualMessage(ctx: RouteContext): string {
  const { service, city, problem } = ctx;
  const cityLabel = city ? formatCityName(city) : "São José dos Campos";

  // Motor 4: serviço + cidade
  if (service && city) {
    const profile = LEAD_CATALOG[normalizeServiceSlug(service)];
    const label = profile?.label ?? formatServiceName(service);
    return `Olá! Vi que vocês fazem ${label.toLowerCase()} em ${cityLabel}. Gostaria de saber o preço e o prazo. 😊`;
  }

  // Motor 2: serviço
  if (service) {
    const profile = LEAD_CATALOG[normalizeServiceSlug(service)];
    const label = profile?.label ?? formatServiceName(service);
    return `Olá! Quero saber sobre ${label.toLowerCase()}. Qual o preço e como funciona? 😊`;
  }

  // Motor 3: problema
  if (problem) {
    const problemLabel = formatProblemName(problem);
    return `Olá! Tenho um problema: ${problemLabel}. Vocês conseguem resolver? Gostaria de enviar uma foto para avaliação. 😊`;
  }

  // Motor 1: cidade
  if (city) {
    return `Olá! Gostaria de saber como funciona a coleta e entrega em ${cityLabel}. Quais serviços vocês oferecem? 😊`;
  }

  // Genérico
  return `Olá! Gostaria de saber mais sobre os serviços da A7 Lavanderia. 😊`;
}

export function getWhatsAppUrl(msg: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function getContextualWhatsAppUrl(ctx: RouteContext): string {
  return getWhatsAppUrl(getContextualMessage(ctx));
}

// ─── LEAD CLASSIFIER ──────────────────────────────────────────────────────────

export interface ClassifiedLead {
  profile: LeadProfile;
  confidence: number; // 0–1
  matchedKeywords: string[];
  estimatedTicket: number;
  urgencia: "alta" | "media" | "baixa";
  suggestedReply: string;
  upsellMessage: string;
  recorrenciaMessage: string;
}

export function classifyLead(message: string, cityHint?: string): ClassifiedLead {
  const msg = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let best: { profile: LeadProfile; score: number; matched: string[] } | null = null;

  for (const profile of Object.values(LEAD_CATALOG)) {
    const matched = profile.keywords.filter((kw) => {
      const normalized = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return msg.includes(normalized);
    });
    const score = matched.length / profile.keywords.length;

    if (!best || score > best.score || (score === best.score && matched.length > best.matched.length)) {
      best = { profile, score, matched };
    }
  }

  const result = best ?? { profile: LEAD_CATALOG.geral, score: 0, matched: [] };

  return {
    profile: result.profile,
    confidence: Math.min(result.score * 3, 1), // escala para 0-1
    matchedKeywords: result.matched,
    estimatedTicket: result.profile.ticketMedio,
    urgencia: result.profile.urgencia,
    suggestedReply: result.profile.replyTemplate(cityHint),
    upsellMessage: result.profile.upsellTemplate,
    recorrenciaMessage: result.profile.recorrenciaTemplate,
  };
}

// ─── UPSELL ENGINE ────────────────────────────────────────────────────────────

export interface UpsellSuggestion {
  serviceSlug: string;
  label: string;
  pitch: string;
  estimatedAddValue: number;
}

export function getUpsellSuggestions(serviceSlug: string): UpsellSuggestion[] {
  const profile = LEAD_CATALOG[normalizeServiceSlug(serviceSlug)];
  if (!profile) return [];

  return profile.upsells.map((slug) => {
    const upsellProfile = LEAD_CATALOG[normalizeServiceSlug(slug)];
    return {
      serviceSlug: slug,
      label: upsellProfile?.label ?? formatServiceName(slug),
      pitch: profile.upsellTemplate,
      estimatedAddValue: upsellProfile?.ticketMedio ?? 50,
    };
  });
}

// ─── RECORRÊNCIA ENGINE ───────────────────────────────────────────────────────

export interface RecorrenciaSuggestion {
  planSlug: string;
  pitch: string;
  estimatedMonthlyValue: number;
}

export function getRecorrenciaSuggestion(serviceSlug: string): RecorrenciaSuggestion {
  const profile = LEAD_CATALOG[normalizeServiceSlug(serviceSlug)] ?? LEAD_CATALOG.geral;
  return {
    planSlug: profile.recorrencia,
    pitch: profile.recorrenciaTemplate,
    estimatedMonthlyValue: Math.round(profile.ticketMedio * 1.8), // estima 1.8x o ticket único
  };
}

// ─── REPLY TEMPLATES LIBRARY ──────────────────────────────────────────────────

export interface ReplyTemplate {
  id: string;
  label: string;
  situacao: string;
  mensagem: string;
}

export const REPLY_TEMPLATES: ReplyTemplate[] = [
  {
    id: "preco-generico",
    label: "Pergunta de preço — geral",
    situacao: "Cliente perguntou o preço sem especificar o item",
    mensagem: "Olá! 😊 Nossos preços variam por serviço. Me conta o que você precisa lavar ou higienizar que preparo um orçamento na hora! Coleta e entrega são sempre grátis.",
  },
  {
    id: "foto-pedido",
    label: "Pedir foto da peça",
    situacao: "Antes de orçar item com mancha, dano ou peça especial",
    mensagem: "Me manda uma foto que faço a avaliação gratuitamente! Assim consigo te dar um orçamento preciso e dizer honestamente o que dá para fazer. 📸",
  },
  {
    id: "confirmacao-coleta",
    label: "Confirmar agendamento de coleta",
    situacao: "Após cliente aceitar o orçamento",
    mensagem: "Perfeito! ✅ Anote: a coleta está agendada para [DIA] entre [HORARIO]. Nossa equipe vai ao endereço combinado. Qualquer coisa, é só chamar aqui!",
  },
  {
    id: "prazo-48h",
    label: "Informar prazo 48h",
    situacao: "Cliente perguntou o prazo",
    mensagem: "O prazo padrão é de 48h após a coleta. Ou seja: hoje coletamos, amanhã ou depois entregamos tudo limpinho! 🚀",
  },
  {
    id: "nao-garantimos-mancha",
    label: "Honestidade sobre mancha difícil",
    situacao: "Mancha antiga ou tipo difícil — não garantir antes de ver",
    mensagem: "Olha, vou ser honesto: sem ver a peça, não consigo garantir 100%. Mas manda a foto que avalio sem compromisso — só aceitamos se tivermos boa chance de resolver. 😊",
  },
  {
    id: "proposta-empresarial",
    label: "Iniciar proposta empresarial",
    situacao: "Cliente é empresa, restaurante, hotel ou condomínio",
    mensagem: "Ótimo! Atendemos empresas com contrato mensal, coleta programada e nota fiscal. Me conta: qual o tipo de negócio e o volume aproximado de peças por semana? Vou preparar uma proposta personalizada. 🏢",
  },
  {
    id: "primeiro-pedido-desconto",
    label: "Oferecer desconto para primeiro pedido",
    situacao: "Cliente parece estar decidindo se usa pela primeira vez",
    mensagem: "Para você experimentar a A7, temos desconto especial no primeiro pedido! Me conta o que precisa e incluo o desconto no orçamento. 😊",
  },
  {
    id: "plano-mensal",
    label: "Oferecer plano mensal",
    situacao: "Após finalizar serviço ou cliente usar frequentemente",
    mensagem: "Que bom que ficou satisfeito! 🌟 Muitos clientes optam pelo nosso plano mensal — além de economizar, você garante prioridade na coleta. Posso te explicar como funciona?",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function formatCityName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace("Dos", "dos")
    .replace("De", "de")
    .replace("Do", "do");
}

function formatServiceName(slug: string): string {
  return slug.split("-").join(" ");
}

function formatProblemName(slug: string): string {
  const map: Record<string, string> = {
    "tirar-mancha-vinho": "mancha de vinho na roupa",
    "tirar-mancha-oleo": "mancha de óleo na roupa",
    "tirar-mancha-cafe": "mancha de café",
    "tirar-mancha-sangue": "mancha de sangue",
    "tirar-mancha-gordura": "mancha de gordura",
    "roupa-com-mofo": "roupa com mofo",
    "roupa-com-cheiro": "roupa com cheiro ruim",
    "tapete-com-cheiro": "tapete com cheiro",
    "sofa-manchado": "sofá manchado",
    "tenis-sujo": "tênis muito sujo",
    "edredom-amarelado": "edredom amarelado",
    "uniforme-sujo": "uniforme de trabalho sujo",
    "cortina-empoeirada": "cortina empoeirada",
    "bebe-vomitou-roupa": "roupa de bebê com vômito",
    "mancha-caneta": "mancha de caneta",
    "mancha-ferrugem": "mancha de ferrugem",
    "roupa-com-pelo-pet": "roupa cheia de pelo de animal",
    "mancha-graxe": "mancha de graxa",
  };
  return map[slug] ?? slug.split("-").join(" ");
}

function normalizeServiceSlug(slug: string): string {
  const map: Record<string, string> = {
    edredom: "edredom",
    tapete: "tapete",
    tapetes: "tapete",
    tenis: "tenis",
    "tenis-esportivo": "tenis",
    sofa: "sofa",
    sofas: "sofa",
    cortinas: "cortinas",
    cortina: "cortinas",
    "camisa-social": "roupas_delicadas",
    "calca-social": "roupas_delicadas",
    terno: "roupas_delicadas",
    jeans: "geral",
    moletom: "geral",
    cobertor: "edredom",
    travesseiro: "edredom",
    "roupas-delicadas": "roupas_delicadas",
    cashmere: "roupas_delicadas",
    uniforme: "uniforme",
    "remocao-manchas": "mancha",
    mancha: "mancha",
  };
  return map[slug] ?? "geral";
}

// ─── STATS (para o dashboard) ─────────────────────────────────────────────────

export const AI_ENGINE_STATS = {
  totalPages: 133,
  motorCidade: { pages: 20, estimatedMonthlyClicks: 800 },
  motorServico: { pages: 14, estimatedMonthlyClicks: 600 },
  motorProblema: { pages: 18, estimatedMonthlyClicks: 1200 },
  motorCombinacao: { pages: 42, estimatedMonthlyClicks: 400 },
  blog: { pages: 30, estimatedMonthlyClicks: 2000 },
  estimatedTotalMonthlyTraffic: 5000,
  estimatedLeadsPerMonth: 150,
  estimatedConversionRate: 0.03,
  estimatedMonthlySales: 45,
  estimatedAverageTicket: 85,
  estimatedMRR: 3825,
};

export const TOP_SERVICES_BY_TICKET = Object.values(LEAD_CATALOG)
  .filter((p) => p.slug !== "geral")
  .sort((a, b) => b.ticketMedio - a.ticketMedio);

export const TOP_SERVICES_BY_VOLUME = ["edredom", "tapete", "tenis", "mancha", "sofa"];
