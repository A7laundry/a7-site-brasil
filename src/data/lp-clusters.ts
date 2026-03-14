export interface LPInfo {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  accent: string; // tailwind color name e.g. "teal", "amber"
}

export interface Cluster {
  id: string;
  label: string;
  lps: LPInfo[];
}

export const LP_CLUSTERS: Cluster[] = [
  {
    id: "casa",
    label: "Higienização da Casa",
    lps: [
      { slug: "sofas", title: "Higienização de Sofás", desc: "Extração úmida e tratamento anti-ácaros", icon: "🛋️", accent: "amber" },
      { slug: "tapetes", title: "Lavagem de Tapetes", desc: "Lavagem profunda que preserva cores e fibras", icon: "🏠", accent: "teal" },
      { slug: "cortinas", title: "Higienização de Cortinas", desc: "Sem tirar da janela — aspiração ultrassônica", icon: "🪟", accent: "violet" },
      { slug: "higienizacao-edredom", title: "Higienização de Edredons", desc: "Elimina 100% dos ácaros e alérgenos", icon: "🛏️", accent: "teal" },
    ],
  },
  {
    id: "roupas-especiais",
    label: "Roupas & Peças Especiais",
    lps: [
      { slug: "roupas-delicadas", title: "Roupas Delicadas", desc: "Seda, cashmere, linho e peças de grife", icon: "✨", accent: "indigo" },
      { slug: "couro-pecas-especiais", title: "Couro & Peças Especiais", desc: "Higienização e hidratação profissional", icon: "🧥", accent: "amber" },
      { slug: "tenis", title: "Tênis & Calçados", desc: "Higienização completa que elimina odores", icon: "👟", accent: "purple" },
      { slug: "remocao-manchas", title: "Remoção de Manchas", desc: "Tratamento urgente para manchas difíceis", icon: "⚡", accent: "orange" },
    ],
  },
  {
    id: "persona",
    label: "Para Você",
    lps: [
      { slug: "para-maes", title: "Para Mães", desc: "Roupas de bebê e família com cuidado especial", icon: "👶", accent: "rose" },
      { slug: "para-casais", title: "Para Casais", desc: "Plano casal com entrega organizada", icon: "💑", accent: "rose" },
      { slug: "para-alergicos", title: "Para Alérgicos", desc: "Protocolo completo anti-ácaros", icon: "🌿", accent: "blue" },
      { slug: "para-executivos", title: "Para Executivos", desc: "Ternos e camisas sociais com express 24h", icon: "💼", accent: "blue" },
    ],
  },
  {
    id: "cotidiano",
    label: "Lavagem do Dia a Dia",
    lps: [
      { slug: "lavagem-roupas", title: "Lavagem de Roupas", desc: "Lavagem completa do cotidiano em 48h", icon: "👗", accent: "cyan" },
      { slug: "plano-mensal", title: "Plano Mensal", desc: "Assinatura com coleta semanal e preço fixo", icon: "📅", accent: "blue" },
      { slug: "precos", title: "Preços & Planos", desc: "Tabela completa de valores e planos", icon: "💰", accent: "blue" },
      { slug: "como-funciona", title: "Como Funciona", desc: "Entenda o processo de coleta e entrega", icon: "🚀", accent: "blue" },
      { slug: "lavanderia-ou-lavar-em-casa", title: "Lavanderia vs. Casa", desc: "A conta real de lavar em casa", icon: "🧺", accent: "emerald" },
    ],
  },
  {
    id: "b2b",
    label: "Para Empresas",
    lps: [
      { slug: "restaurantes", title: "Para Restaurantes", desc: "Enxoval e uniformes com SLA garantido", icon: "🍽️", accent: "emerald" },
      { slug: "hotelaria", title: "Para Hotelaria", desc: "Volume sem limite para hotéis e pousadas", icon: "🏨", accent: "amber" },
      { slug: "uniformes", title: "Uniformes Corporativos", desc: "Lavagem separada por colaborador", icon: "👔", accent: "indigo" },
      { slug: "airbnb", title: "Para Airbnb", desc: "Avaliação 5★ começa na roupa de cama", icon: "🏠", accent: "rose" },
      { slug: "empresarial", title: "Plano Empresarial", desc: "Soluções B2B completas para sua empresa", icon: "🏢", accent: "indigo" },
      { slug: "condominios", title: "Para Condomínios", desc: "Parceria com desconto para moradores", icon: "🏗️", accent: "sky" },
    ],
  },
  {
    id: "premium",
    label: "Serviços Premium",
    lps: [
      { slug: "premium", title: "Serviço Premium", desc: "Concierge 24/7 e garantia total", icon: "⭐", accent: "amber" },
      { slug: "sustentavel", title: "Lavanderia Sustentável", desc: "70% menos água, produtos biodegradáveis", icon: "🌱", accent: "green" },
    ],
  },
  {
    id: "geo",
    label: "Por Região",
    lps: [
      { slug: "sao-jose-dos-campos", title: "São José dos Campos", desc: "Nossa sede — atendimento completo", icon: "📍", accent: "blue" },
      { slug: "vale-do-paraiba", title: "Vale do Paraíba", desc: "Toda a região com coleta e entrega", icon: "🗺️", accent: "blue" },
      { slug: "taubate", title: "Taubaté", desc: "Coleta e entrega em 48h", icon: "📍", accent: "blue" },
      { slug: "jacarei", title: "Jacareí", desc: "Coleta e entrega próximo à sede", icon: "📍", accent: "blue" },
      { slug: "lorena-guaratingueta", title: "Lorena & Guaratinguetá", desc: "Rota combinada com Aparecida", icon: "📍", accent: "blue" },
    ],
  },
];

export function getRelatedLPs(currentSlug: string, limit = 3): LPInfo[] {
  for (const cluster of LP_CLUSTERS) {
    const found = cluster.lps.find((lp) => lp.slug === currentSlug);
    if (found) {
      return cluster.lps.filter((lp) => lp.slug !== currentSlug).slice(0, limit);
    }
  }
  // fallback: return popular LPs
  return [
    { slug: "precos", title: "Ver Preços", desc: "Tabela completa de valores", icon: "💰", accent: "blue" },
    { slug: "como-funciona", title: "Como Funciona", desc: "Entenda o processo", icon: "🚀", accent: "blue" },
    { slug: "plano-mensal", title: "Plano Mensal", desc: "Assinatura com preço fixo", icon: "📅", accent: "blue" },
  ];
}

export function getClusterForSlug(slug: string): Cluster | null {
  return LP_CLUSTERS.find((c) => c.lps.some((lp) => lp.slug === slug)) ?? null;
}
