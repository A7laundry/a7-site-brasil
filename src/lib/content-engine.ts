// ─── A7 LAVANDERIA — AI CONTENT ENGINE DATA ────────────────────────────────
// BLOCO 7 · Loop infinito: perguntas → gaps → briefs → artigos → SEO → visitas

// ─── INTERFACES ───────────────────────────────────────────────────────────────

export interface ClientQuestion {
  id: string;
  pergunta: string;
  fonte: "WhatsApp" | "Google" | "Direto" | "Indicação";
  frequencia: number; // vezes/mês
  cluster: string;
  intencao: "Informacional" | "Comercial" | "Transacional";
  hasConteudo: boolean;
  contentSlug?: string;
  urgencia: "alta" | "media" | "baixa";
}

export interface ContentGap {
  id: string;
  topico: string;
  cluster: string;
  perguntasRelacionadas: string[];
  volumeEstimado: number;
  dificuldadeSEO: "baixa" | "media" | "alta";
  oportunidade: "alta" | "media" | "baixa";
  tipo: "artigo" | "pagina-seo" | "lp";
  status: "Detectado" | "Brief Gerado" | "Em Produção" | "Publicado";
}

export interface ArticleBrief {
  id: string;
  titulo: string;
  slug: string;
  cluster: string;
  persona: string;
  intencao: string;
  kwPrincipal: string;
  kwSecundarias: string[];
  outline: string[];
  cta: string;
  linksInternos: string[];
  estimativaTrafico: number;
  estimativaLeads: number;
  status: "Rascunho" | "Aprovado" | "Publicado";
  geradoEm: string;
}

export interface SEOOpportunity {
  id: string;
  tipo: "Motor 1 — Cidade" | "Motor 2 — Serviço" | "Motor 3 — Problema" | "Motor 4 — Combinação" | "LP";
  url: string;
  titulo: string;
  volumeEstimado: number;
  prioridade: "P0" | "P1" | "P2";
  status: "Detectado" | "Planejado" | "Publicado";
  gatilho: string;
}

export interface PipelineItem {
  id: string;
  tipo: "Artigo" | "Página SEO" | "Landing Page";
  titulo: string;
  status: "Detectado" | "Brief" | "Rascunho" | "Revisão" | "Publicado";
  cluster: string;
  prioridade: "P0" | "P1" | "P2";
  impactoEstimado: string;
}

export interface ContentEngineStats {
  perguntasAnalisadas: number;
  gapsDetectados: number;
  briefsGerados: number;
  artigosPublicados: number;
  paginasSEOGeradas: number;
  trafegoPotencial: number;
  leadsAdicionais: number;
  loopIteracoes: number;
}

// ─── CLIENT QUESTIONS ─────────────────────────────────────────────────────────

export const CLIENT_QUESTIONS: ClientQuestion[] = [
  // Cluster: Manchas
  { id: "Q01", pergunta: "Como tirar mancha de sangue da roupa?", fonte: "WhatsApp", frequencia: 34, cluster: "Manchas", intencao: "Informacional", hasConteudo: false, urgencia: "alta" },
  { id: "Q02", pergunta: "Como tirar mancha de vinho tinto do tapete?", fonte: "WhatsApp", frequencia: 28, cluster: "Manchas", intencao: "Informacional", hasConteudo: true, contentSlug: "tirar-mancha-vinho-tinto", urgencia: "alta" },
  { id: "Q03", pergunta: "Como tirar mancha de graxa de roupa branca?", fonte: "WhatsApp", frequencia: 19, cluster: "Manchas", intencao: "Informacional", hasConteudo: false, urgencia: "alta" },
  { id: "Q04", pergunta: "Mancha amarela de suor na camisa como tirar?", fonte: "WhatsApp", frequencia: 41, cluster: "Manchas", intencao: "Informacional", hasConteudo: false, urgencia: "alta" },
  { id: "Q05", pergunta: "Como tirar mancha de ferrugem da roupa?", fonte: "Google", frequencia: 22, cluster: "Manchas", intencao: "Informacional", hasConteudo: false, urgencia: "media" },

  // Cluster: Saúde & Higiene
  { id: "Q06", pergunta: "Quantas vezes por semana devo lavar o lençol?", fonte: "WhatsApp", frequencia: 47, cluster: "Saúde & Higiene", intencao: "Informacional", hasConteudo: false, urgencia: "alta" },
  { id: "Q07", pergunta: "Lavar roupa de cama mata ácaro?", fonte: "Google", frequencia: 38, cluster: "Saúde & Higiene", intencao: "Informacional", hasConteudo: true, contentSlug: "alergia-acaros-roupa-cama", urgencia: "alta" },
  { id: "Q08", pergunta: "Qual temperatura matar bactérias na roupa?", fonte: "WhatsApp", frequencia: 29, cluster: "Saúde & Higiene", intencao: "Informacional", hasConteudo: true, contentSlug: "temperatura-lavagem-tecidos", urgencia: "media" },
  { id: "Q09", pergunta: "Como higienizar roupa de bebê recém-nascido?", fonte: "WhatsApp", frequencia: 33, cluster: "Saúde & Higiene", intencao: "Informacional", hasConteudo: true, contentSlug: "higiene-roupas-bebe", urgencia: "alta" },
  { id: "Q10", pergunta: "Como eliminar fungo da roupa de uma vez?", fonte: "WhatsApp", frequencia: 25, cluster: "Saúde & Higiene", intencao: "Transacional", hasConteudo: true, contentSlug: "fungos-roupa-como-eliminar", urgencia: "alta" },
  { id: "Q11", pergunta: "Travesseiro pode ir na lavanderia?", fonte: "WhatsApp", frequencia: 18, cluster: "Saúde & Higiene", intencao: "Comercial", hasConteudo: false, urgencia: "media" },

  // Cluster: Tênis
  { id: "Q12", pergunta: "Como lavar tênis sem desgrudar a sola?", fonte: "WhatsApp", frequencia: 31, cluster: "Tênis", intencao: "Informacional", hasConteudo: true, contentSlug: "lavar-tenis-corretamente", urgencia: "media" },
  { id: "Q13", pergunta: "Lavanderia lava tênis de corrida?", fonte: "WhatsApp", frequencia: 44, cluster: "Tênis", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },
  { id: "Q14", pergunta: "Quanto custa lavar tênis na lavanderia?", fonte: "Google", frequencia: 52, cluster: "Tênis", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },
  { id: "Q15", pergunta: "Tênis Nike Air pode colocar na máquina?", fonte: "WhatsApp", frequencia: 23, cluster: "Tênis", intencao: "Informacional", hasConteudo: false, urgencia: "media" },

  // Cluster: Tapetes
  { id: "Q16", pergunta: "Quanto tempo demora para secar tapete na lavanderia?", fonte: "WhatsApp", frequencia: 26, cluster: "Tapetes", intencao: "Comercial", hasConteudo: false, urgencia: "media" },
  { id: "Q17", pergunta: "Tapete persa pode lavar na lavanderia?", fonte: "WhatsApp", frequencia: 15, cluster: "Tapetes", intencao: "Comercial", hasConteudo: false, urgencia: "media" },
  { id: "Q18", pergunta: "Como tirar cheiro de xixi de cachorro do tapete?", fonte: "WhatsApp", frequencia: 39, cluster: "Tapetes", intencao: "Transacional", hasConteudo: false, urgencia: "alta" },

  // Cluster: Casa
  { id: "Q19", pergunta: "Quanto custa higienizar sofá de 3 lugares?", fonte: "WhatsApp", frequencia: 57, cluster: "Casa", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },
  { id: "Q20", pergunta: "Lavanderia faz limpeza de colchão?", fonte: "Google", frequencia: 35, cluster: "Casa", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },
  { id: "Q21", pergunta: "Cortina de voil como lavar sem amassar?", fonte: "WhatsApp", frequencia: 21, cluster: "Casa", intencao: "Informacional", hasConteudo: true, contentSlug: "higienizacao-cortinas-saude", urgencia: "media" },
  { id: "Q22", pergunta: "Poltrona de couro como higienizar em casa?", fonte: "WhatsApp", frequencia: 17, cluster: "Casa", intencao: "Informacional", hasConteudo: true, contentSlug: "como-lavar-couro", urgencia: "baixa" },

  // Cluster: B2B
  { id: "Q23", pergunta: "Lavanderia para restaurante com contrato mensal?", fonte: "Direto", frequencia: 12, cluster: "B2B", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },
  { id: "Q24", pergunta: "Quanto custa terceirizar lavanderia de hotel?", fonte: "Google", frequencia: 9, cluster: "B2B", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },
  { id: "Q25", pergunta: "Serviço de lavagem de uniformes corporativos preço?", fonte: "Direto", frequencia: 11, cluster: "B2B", intencao: "Comercial", hasConteudo: false, urgencia: "alta" },

  // Cluster: Roupas Especiais
  { id: "Q26", pergunta: "Vestido de festa pode ir na lavanderia?", fonte: "WhatsApp", frequencia: 20, cluster: "Roupas Especiais", intencao: "Comercial", hasConteudo: false, urgencia: "media" },
  { id: "Q27", pergunta: "Como conservar vestido de noiva após o casamento?", fonte: "Google", frequencia: 14, cluster: "Roupas Especiais", intencao: "Informacional", hasConteudo: true, contentSlug: "conservar-vestido-noiva", urgencia: "media" },
  { id: "Q28", pergunta: "Casaco de pluma pode lavar na máquina?", fonte: "WhatsApp", frequencia: 27, cluster: "Roupas Especiais", intencao: "Informacional", hasConteudo: false, urgencia: "media" },

  // Cluster: Logística
  { id: "Q29", pergunta: "Lavanderia faz coleta e entrega em casa SJC?", fonte: "WhatsApp", frequencia: 63, cluster: "Logística", intencao: "Transacional", hasConteudo: false, urgencia: "alta" },
  { id: "Q30", pergunta: "Lavanderia urgente pronto em 24 horas SJC?", fonte: "WhatsApp", frequencia: 48, cluster: "Logística", intencao: "Transacional", hasConteudo: false, urgencia: "alta" },
];

// ─── CONTENT GAPS ─────────────────────────────────────────────────────────────

export const CONTENT_GAPS: ContentGap[] = [
  {
    id: "GAP01",
    topico: "Mancha de suor em camisa branca",
    cluster: "Manchas",
    perguntasRelacionadas: ["Q04"],
    volumeEstimado: 1800,
    dificuldadeSEO: "baixa",
    oportunidade: "alta",
    tipo: "artigo",
    status: "Brief Gerado",
  },
  {
    id: "GAP02",
    topico: "Frequência ideal de lavar roupas de cama",
    cluster: "Saúde & Higiene",
    perguntasRelacionadas: ["Q06"],
    volumeEstimado: 2200,
    dificuldadeSEO: "baixa",
    oportunidade: "alta",
    tipo: "artigo",
    status: "Brief Gerado",
  },
  {
    id: "GAP03",
    topico: "Coleta e entrega de lavanderia em SJC",
    cluster: "Logística",
    perguntasRelacionadas: ["Q29", "Q30"],
    volumeEstimado: 1400,
    dificuldadeSEO: "baixa",
    oportunidade: "alta",
    tipo: "lp",
    status: "Detectado",
  },
  {
    id: "GAP04",
    topico: "Tênis de corrida: cuidados e lavagem profissional",
    cluster: "Tênis",
    perguntasRelacionadas: ["Q13", "Q14", "Q15"],
    volumeEstimado: 3100,
    dificuldadeSEO: "media",
    oportunidade: "alta",
    tipo: "artigo",
    status: "Brief Gerado",
  },
  {
    id: "GAP05",
    topico: "Higienização de sofá: guia completo e preços",
    cluster: "Casa",
    perguntasRelacionadas: ["Q19"],
    volumeEstimado: 2700,
    dificuldadeSEO: "media",
    oportunidade: "alta",
    tipo: "lp",
    status: "Detectado",
  },
  {
    id: "GAP06",
    topico: "Como tirar cheiro de xixi de cachorro do tapete",
    cluster: "Tapetes",
    perguntasRelacionadas: ["Q18"],
    volumeEstimado: 1600,
    dificuldadeSEO: "baixa",
    oportunidade: "alta",
    tipo: "artigo",
    status: "Em Produção",
  },
  {
    id: "GAP07",
    topico: "Lavanderia para restaurantes: guia B2B",
    cluster: "B2B",
    perguntasRelacionadas: ["Q23", "Q24", "Q25"],
    volumeEstimado: 480,
    dificuldadeSEO: "baixa",
    oportunidade: "alta",
    tipo: "lp",
    status: "Detectado",
  },
  {
    id: "GAP08",
    topico: "Travesseiro: quanto tempo dura e quando lavar",
    cluster: "Saúde & Higiene",
    perguntasRelacionadas: ["Q11"],
    volumeEstimado: 950,
    dificuldadeSEO: "baixa",
    oportunidade: "media",
    tipo: "artigo",
    status: "Detectado",
  },
  {
    id: "GAP09",
    topico: "Casaco de pluma: como lavar sem estragar",
    cluster: "Roupas Especiais",
    perguntasRelacionadas: ["Q28"],
    volumeEstimado: 1100,
    dificuldadeSEO: "media",
    oportunidade: "media",
    tipo: "artigo",
    status: "Detectado",
  },
  {
    id: "GAP10",
    topico: "Higienização de colchão: benefícios e preços",
    cluster: "Casa",
    perguntasRelacionadas: ["Q20"],
    volumeEstimado: 2100,
    dificuldadeSEO: "media",
    oportunidade: "alta",
    tipo: "pagina-seo",
    status: "Detectado",
  },
  {
    id: "GAP11",
    topico: "Mancha de sangue: como remover rápido",
    cluster: "Manchas",
    perguntasRelacionadas: ["Q01"],
    volumeEstimado: 1900,
    dificuldadeSEO: "baixa",
    oportunidade: "alta",
    tipo: "artigo",
    status: "Detectado",
  },
  {
    id: "GAP12",
    topico: "Tapete persa: cuidados e limpeza especializada",
    cluster: "Tapetes",
    perguntasRelacionadas: ["Q17", "Q16"],
    volumeEstimado: 720,
    dificuldadeSEO: "baixa",
    oportunidade: "media",
    tipo: "artigo",
    status: "Detectado",
  },
];

// ─── ARTICLE BRIEFS ────────────────────────────────────────────────────────────

export const ARTICLE_BRIEFS: ArticleBrief[] = [
  {
    id: "BRIEF01",
    titulo: "Mancha de Suor na Camisa Branca: 5 Métodos que Funcionam de Verdade",
    slug: "tirar-mancha-suor-camisa-branca",
    cluster: "Manchas",
    persona: "Profissional urbano, 25–45 anos",
    intencao: "Informacional → Comercial",
    kwPrincipal: "mancha de suor camisa branca como tirar",
    kwSecundarias: ["tirar mancha amarela suor", "camisa branca manchada suor", "lavanderia mancha suor"],
    outline: [
      "Por que o suor causa manchas amarelas?",
      "O que NÃO fazer (erros comuns que pioram a mancha)",
      "Método 1: Bicarbonato + vinagre (caseiro, funciona em 70% dos casos)",
      "Método 2: Oxigênio ativo (para manchas antigas)",
      "Método 3: Água oxigenada diluída (camisas brancas apenas)",
      "Método 4: Enzimas têxteis profissionais",
      "Quando chamar a lavanderia (e o que esperar)",
      "Como prevenir manchas de suor (rotina recomendada)",
    ],
    cta: "Camisa já comprometida? Mande foto no WhatsApp para avaliação gratuita.",
    linksInternos: ["tirar-manchas-dificeis", "temperatura-lavagem-tecidos"],
    estimativaTrafico: 320,
    estimativaLeads: 8,
    status: "Aprovado",
    geradoEm: "2026-03-10",
  },
  {
    id: "BRIEF02",
    titulo: "Com Que Frequência Lavar Roupa de Cama? A Resposta que os Médicos Dão",
    slug: "frequencia-lavar-roupa-de-cama",
    cluster: "Saúde & Higiene",
    persona: "Responsável pela casa, 30–55 anos, preocupada com saúde",
    intencao: "Informacional",
    kwPrincipal: "quantas vezes por semana lavar roupa de cama",
    kwSecundarias: ["frequencia ideal trocar lençol", "lavar lençol semanal", "higiene roupa de cama"],
    outline: [
      "O que diz a ciência: estudo do NYU sobre colônias bacterianas em lençóis",
      "Recomendação oficial: 1x por semana (e por quê)",
      "Casos que exigem mais frequência: alérgicos, animais de estimação, verão",
      "A diferença entre lavar e higienizar (temperatura importa)",
      "Duvet, travesseiro, edredom: cadência recomendada",
      "Checklist visual: sinais de que o lençol está esperando há muito tempo",
      "Como a lavanderia pode ajudar (plano semanal sem esforço)",
    ],
    cta: "Assine nosso plano semanal e nunca mais pense nisso. Fale com a gente.",
    linksInternos: ["alergia-acaros-roupa-cama", "higienizacao-edredom-importancia"],
    estimativaTrafico: 480,
    estimativaLeads: 14,
    status: "Aprovado",
    geradoEm: "2026-03-10",
  },
  {
    id: "BRIEF03",
    titulo: "Tênis de Corrida: Como Lavar Sem Perder Estrutura, Cor ou Amortecimento",
    slug: "lavar-tenis-corrida-profissional",
    cluster: "Tênis",
    persona: "Corredor amador, 25–45 anos, cuida do equipamento",
    intencao: "Informacional → Transacional",
    kwPrincipal: "como lavar tênis de corrida",
    kwSecundarias: ["lavar tênis Nike corrida", "lavanderia tênis corrida SJC", "quanto custa lavar tênis corrida"],
    outline: [
      "Por que tênis de corrida são diferentes dos comuns (tecnologia no cabedal)",
      "Os 3 erros que destroem um tênis de corrida na lavagem",
      "Materiais comuns: mesh, Flyknit, boost — como cada um reage",
      "Passo a passo de lavagem manual correta",
      "Quando usar lavanderia profissional (e o que perguntar antes)",
      "Como secar sem deformar (e o que NÃO fazer: secadora, sol direto)",
      "Frequência ideal de lavagem por km rodados",
    ],
    cta: "Seu tênis merece cuidado profissional. Solicite coleta e entrega em SJC.",
    linksInternos: ["lavar-tenis-corretamente"],
    estimativaTrafico: 610,
    estimativaLeads: 22,
    status: "Rascunho",
    geradoEm: "2026-03-11",
  },
  {
    id: "BRIEF04",
    titulo: "Cheiro de Xixi de Cachorro no Tapete: Como Eliminar de Vez (Sem Estragar)",
    slug: "tirar-cheiro-xixi-cachorro-tapete",
    cluster: "Tapetes",
    persona: "Tutor de pet, 25–50 anos, preocupado com higiene doméstica",
    intencao: "Transacional",
    kwPrincipal: "como tirar cheiro xixi cachorro tapete",
    kwSecundarias: ["eliminar odor urina cachorro tapete", "xixi pet no tapete o que fazer", "higienizar tapete xixi"],
    outline: [
      "Por que o cheiro de xixi é tão difícil de eliminar (ácido úrico = cristais)",
      "O que acontece se não tratar (fungos, bactérias, recidiva do pet)",
      "Método caseiro de emergência (primeiras 2 horas após o acidente)",
      "Produtos enzymatic: a única solução real para ácido úrico",
      "Por que bicarbonato e vinagre não resolvem (e podem piorar)",
      "Higienização profissional: o que o processo faz que você não consegue em casa",
      "Como evitar que o pet repita no mesmo lugar",
    ],
    cta: "Tapete com xixi? Buscamos hoje. Devolvemos higienizado e sem odor.",
    linksInternos: ["limpeza-tapetes-profissional", "bacterias-tapetes-higienizacao"],
    estimativaTrafico: 890,
    estimativaLeads: 31,
    status: "Rascunho",
    geradoEm: "2026-03-12",
  },
];

// ─── SEO OPPORTUNITIES ────────────────────────────────────────────────────────

export const SEO_OPPORTUNITIES: SEOOpportunity[] = [
  {
    id: "SEO01",
    tipo: "Motor 3 — Problema",
    url: "/problema/mancha-suor-camisa",
    titulo: "Mancha de Suor em Camisa — Solução Profissional",
    volumeEstimado: 1800,
    prioridade: "P0",
    status: "Planejado",
    gatilho: "41 perguntas/mês sobre mancha de suor via WhatsApp",
  },
  {
    id: "SEO02",
    tipo: "Motor 3 — Problema",
    url: "/problema/cheiro-xixi-tapete",
    titulo: "Cheiro de Xixi de Pet no Tapete — Remoção Profissional",
    volumeEstimado: 1600,
    prioridade: "P0",
    status: "Planejado",
    gatilho: "39 perguntas/mês sobre xixi de pet — urgência transacional alta",
  },
  {
    id: "SEO03",
    tipo: "Motor 2 — Serviço",
    url: "/lavagem/colchao",
    titulo: "Higienização de Colchão Profissional em São José dos Campos",
    volumeEstimado: 2100,
    prioridade: "P0",
    status: "Detectado",
    gatilho: "35 perguntas/mês + Google trending: 'lavanderia faz colchão'",
  },
  {
    id: "SEO04",
    tipo: "Motor 4 — Combinação",
    url: "/lavagem/tenis/sao-jose-dos-campos",
    titulo: "Lavar Tênis em São José dos Campos",
    volumeEstimado: 890,
    prioridade: "P0",
    status: "Publicado",
    gatilho: "52 perguntas/mês sobre preço de lavagem de tênis em SJC",
  },
  {
    id: "SEO05",
    tipo: "LP",
    url: "/coleta-entrega",
    titulo: "Coleta e Entrega de Lavanderia em SJC — Sem Sair de Casa",
    volumeEstimado: 1400,
    prioridade: "P0",
    status: "Detectado",
    gatilho: "63 perguntas/mês — pergunta mais frequente do WhatsApp",
  },
  {
    id: "SEO06",
    tipo: "Motor 3 — Problema",
    url: "/problema/mancha-sangue-roupa",
    titulo: "Mancha de Sangue na Roupa — Remoção Profissional",
    volumeEstimado: 1900,
    prioridade: "P1",
    status: "Detectado",
    gatilho: "34 perguntas/mês via WhatsApp — alta intenção transacional",
  },
  {
    id: "SEO07",
    tipo: "Motor 4 — Combinação",
    url: "/lavagem/sofa/sao-jose-dos-campos",
    titulo: "Higienização de Sofá em São José dos Campos",
    volumeEstimado: 2700,
    prioridade: "P0",
    status: "Detectado",
    gatilho: "57 perguntas/mês sobre preço de higienização de sofá",
  },
  {
    id: "SEO08",
    tipo: "LP",
    url: "/empresarial",
    titulo: "Lavanderia Empresarial B2B — Restaurantes, Hotéis e Uniformes",
    volumeEstimado: 480,
    prioridade: "P0",
    status: "Detectado",
    gatilho: "32 contatos B2B/mês sem LP dedicada — taxa de fechamento baixa",
  },
  {
    id: "SEO09",
    tipo: "Motor 1 — Cidade",
    url: "/lavanderia/pindamonhangaba",
    titulo: "Lavanderia em Pindamonhangaba — A7 Lavanderia",
    volumeEstimado: 310,
    prioridade: "P1",
    status: "Detectado",
    gatilho: "Pindamonhangaba tem 170k habitantes — demanda crescente detectada",
  },
  {
    id: "SEO10",
    tipo: "Motor 2 — Serviço",
    url: "/lavagem/travesseiro",
    titulo: "Higienização de Travesseiro Profissional",
    volumeEstimado: 950,
    prioridade: "P1",
    status: "Detectado",
    gatilho: "18 perguntas/mês + sazonalidade: pico no inverno",
  },
];

// ─── PRODUCTION PIPELINE ─────────────────────────────────────────────────────

export const CONTENT_PIPELINE: PipelineItem[] = [
  { id: "PIP01", tipo: "Artigo", titulo: "Cheiro de Xixi de Cachorro no Tapete", status: "Rascunho", cluster: "Tapetes", prioridade: "P0", impactoEstimado: "+890 visitas/mês" },
  { id: "PIP02", tipo: "Artigo", titulo: "Tênis de Corrida: Como Lavar Sem Perder Estrutura", status: "Rascunho", cluster: "Tênis", prioridade: "P0", impactoEstimado: "+610 visitas/mês" },
  { id: "PIP03", tipo: "Artigo", titulo: "Com Que Frequência Lavar Roupa de Cama?", status: "Brief", cluster: "Saúde & Higiene", prioridade: "P0", impactoEstimado: "+480 visitas/mês" },
  { id: "PIP04", tipo: "Artigo", titulo: "Mancha de Suor na Camisa Branca", status: "Brief", cluster: "Manchas", prioridade: "P0", impactoEstimado: "+320 visitas/mês" },
  { id: "PIP05", tipo: "Página SEO", titulo: "/problema/mancha-suor-camisa", status: "Detectado", cluster: "Manchas", prioridade: "P0", impactoEstimado: "+1800 vol/mês" },
  { id: "PIP06", tipo: "Página SEO", titulo: "/problema/cheiro-xixi-tapete", status: "Detectado", cluster: "Tapetes", prioridade: "P0", impactoEstimado: "+1600 vol/mês" },
  { id: "PIP07", tipo: "Página SEO", titulo: "/lavagem/colchao", status: "Detectado", cluster: "Casa", prioridade: "P0", impactoEstimado: "+2100 vol/mês" },
  { id: "PIP08", tipo: "Landing Page", titulo: "/coleta-entrega", status: "Detectado", cluster: "Logística", prioridade: "P0", impactoEstimado: "Alta conversão — 63 perguntas/mês" },
  { id: "PIP09", tipo: "Landing Page", titulo: "/empresarial", status: "Detectado", cluster: "B2B", prioridade: "P0", impactoEstimado: "+32 leads B2B/mês" },
  { id: "PIP10", tipo: "Artigo", titulo: "Mancha de Sangue na Roupa: Como Remover Rápido", status: "Detectado", cluster: "Manchas", prioridade: "P1", impactoEstimado: "+300 visitas/mês" },
  { id: "PIP11", tipo: "Artigo", titulo: "Casaco de Pluma: Como Lavar Sem Estragar", status: "Detectado", cluster: "Roupas Especiais", prioridade: "P1", impactoEstimado: "+220 visitas/mês" },
  { id: "PIP12", tipo: "Artigo", titulo: "Tapete Persa: Cuidados e Limpeza Especializada", status: "Detectado", cluster: "Tapetes", prioridade: "P1", impactoEstimado: "+180 visitas/mês" },
];

// ─── ENGINE STATS ─────────────────────────────────────────────────────────────

export const CONTENT_ENGINE_STATS: ContentEngineStats = {
  perguntasAnalisadas: CLIENT_QUESTIONS.length,
  gapsDetectados: CONTENT_GAPS.length,
  briefsGerados: ARTICLE_BRIEFS.length,
  artigosPublicados: 30,
  paginasSEOGeradas: 133,
  trafegoPotencial: 18400,
  leadsAdicionais: 75,
  loopIteracoes: 1,
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export const GAP_COLORS: Record<ContentGap["oportunidade"], string> = {
  alta: "text-emerald-400",
  media: "text-amber-400",
  baixa: "text-slate-400",
};

export const STATUS_COLORS: Record<PipelineItem["status"], string> = {
  Detectado: "bg-slate-700 text-slate-300",
  Brief: "bg-blue-900/60 text-blue-300",
  Rascunho: "bg-amber-900/60 text-amber-300",
  Revisão: "bg-purple-900/60 text-purple-300",
  Publicado: "bg-emerald-900/60 text-emerald-300",
};

export const TIPO_COLORS: Record<PipelineItem["tipo"], string> = {
  "Artigo": "bg-blue-500/20 text-blue-300",
  "Página SEO": "bg-violet-500/20 text-violet-300",
  "Landing Page": "bg-rose-500/20 text-rose-300",
};
