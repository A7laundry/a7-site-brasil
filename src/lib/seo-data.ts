// ─── A7 LAVANDERIA — PROGRAMMATIC SEO DATA ────────────────────────────────────
// Fonte única de verdade para todos os 4 motores de SEO programático

export const WA_NUMBER = "5512974128390";

export function getWhatsAppUrl(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── CITIES ──────────────────────────────────────────────────────────────────

export interface City {
  slug: string;
  nome: string;
  estado: string;
  regiao: string;
  populacao: string;
  bairros: string[];
  demanda: "alta" | "media" | "baixa";
}

export const CITIES: City[] = [
  {
    slug: "sao-jose-dos-campos",
    nome: "São José dos Campos",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "730 mil",
    bairros: ["Centro", "Jardim Aquarius", "Urbanova", "Campos de São José", "Jardim das Indústrias", "Vila Adyana"],
    demanda: "alta",
  },
  {
    slug: "taubate",
    nome: "Taubaté",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "320 mil",
    bairros: ["Centro", "Quiririm", "Bonsucesso", "Parque Industrial", "Jardim América"],
    demanda: "alta",
  },
  {
    slug: "jacarei",
    nome: "Jacareí",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "240 mil",
    bairros: ["Centro", "Jardim Santa Maria", "Parque Industrial", "Vila São José"],
    demanda: "alta",
  },
  {
    slug: "lorena",
    nome: "Lorena",
    estado: "SP",
    regiao: "Vale do Paraíba Sul",
    populacao: "90 mil",
    bairros: ["Centro", "Cidades Universitárias", "Vila Industrial"],
    demanda: "media",
  },
  {
    slug: "guaratingueta",
    nome: "Guaratinguetá",
    estado: "SP",
    regiao: "Vale do Paraíba Sul",
    populacao: "122 mil",
    bairros: ["Centro", "Jardim Paraíba", "Pedregulho"],
    demanda: "media",
  },
  {
    slug: "aparecida",
    nome: "Aparecida",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "36 mil",
    bairros: ["Centro", "Bairro da Basílica", "Vila Romana"],
    demanda: "media",
  },
  {
    slug: "pindamonhangaba",
    nome: "Pindamonhangaba",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "165 mil",
    bairros: ["Centro", "Moreira César", "Vila Maria"],
    demanda: "media",
  },
  {
    slug: "cruzeiro",
    nome: "Cruzeiro",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "80 mil",
    bairros: ["Centro", "Aparecida", "Vila Rodoviária"],
    demanda: "media",
  },
  {
    slug: "cacapava",
    nome: "Caçapava",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "92 mil",
    bairros: ["Centro", "Jardim das Nações", "Paraíso"],
    demanda: "media",
  },
  {
    slug: "tremembe",
    nome: "Tremembé",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "45 mil",
    bairros: ["Centro", "Fazenda Velha", "Jardim Santa Cruz"],
    demanda: "baixa",
  },
  {
    slug: "sao-luis-do-paraitinga",
    nome: "São Luís do Paraitinga",
    estado: "SP",
    regiao: "Serra da Mantiqueira",
    populacao: "12 mil",
    bairros: ["Centro Histórico"],
    demanda: "baixa",
  },
  {
    slug: "paraibuna",
    nome: "Paraibuna",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "18 mil",
    bairros: ["Centro", "Vila Nova"],
    demanda: "baixa",
  },
  {
    slug: "santa-branca",
    nome: "Santa Branca",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "14 mil",
    bairros: ["Centro"],
    demanda: "baixa",
  },
  {
    slug: "cachoeira-paulista",
    nome: "Cachoeira Paulista",
    estado: "SP",
    regiao: "Vale do Paraíba Sul",
    populacao: "32 mil",
    bairros: ["Centro", "Canção Nova"],
    demanda: "baixa",
  },
  {
    slug: "queluz",
    nome: "Queluz",
    estado: "SP",
    regiao: "Vale do Paraíba Sul",
    populacao: "13 mil",
    bairros: ["Centro"],
    demanda: "baixa",
  },
  {
    slug: "roseira",
    nome: "Roseira",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "10 mil",
    bairros: ["Centro"],
    demanda: "baixa",
  },
  {
    slug: "potim",
    nome: "Potim",
    estado: "SP",
    regiao: "Vale do Paraíba Sul",
    populacao: "22 mil",
    bairros: ["Centro"],
    demanda: "baixa",
  },
  {
    slug: "bananal",
    nome: "Bananal",
    estado: "SP",
    regiao: "Vale do Paraíba Sul",
    populacao: "10 mil",
    bairros: ["Centro Histórico"],
    demanda: "baixa",
  },
  {
    slug: "lagoinha",
    nome: "Lagoinha",
    estado: "SP",
    regiao: "Serra da Mantiqueira",
    populacao: "5 mil",
    bairros: ["Centro"],
    demanda: "baixa",
  },
  {
    slug: "jambeiro",
    nome: "Jambeiro",
    estado: "SP",
    regiao: "Vale do Paraíba",
    populacao: "8 mil",
    bairros: ["Centro"],
    demanda: "baixa",
  },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  nome: string;
  nomeComposto: string; // "lavagem de edredom"
  descricao: string;
  precoMin: number;
  precoMax: number;
  prazo: string;
  icone: string;
  beneficios: string[];
  processo: string[];
  faq: Array<{ pergunta: string; resposta: string }>;
  schemaType: "Service" | "HomeAndConstructionBusiness";
}

export const SERVICES: Service[] = [
  {
    slug: "edredom",
    nome: "edredom",
    nomeComposto: "lavagem de edredom",
    descricao: "Higienização profissional de edredons com temperatura industrial de 60°C, eliminando 100% dos ácaros, fungos e bactérias.",
    precoMin: 39,
    precoMax: 89,
    prazo: "48h",
    icone: "🛏️",
    beneficios: [
      "Elimina 100% dos ácaros a temperatura industrial",
      "Remove fungos e bactérias invisíveis",
      "Ideal para quem sofre de rinite e asma",
      "Coleta e entrega grátis na sua cidade",
      "Processo suave que preserva o enchimento",
    ],
    processo: [
      "Você agenda pelo WhatsApp e escolhe o horário da coleta",
      "Buscamos o edredom na sua casa, sem custo extra",
      "Lavagem em máquina industrial a 60°C com produtos dermatologicamente testados",
      "Secagem completa em estufa profissional",
      "Entrega em 48h embalado e pronto para usar",
    ],
    faq: [
      { pergunta: "Quanto custa lavar um edredom na A7?", resposta: "O preço varia de R$39,90 a R$89,90 dependendo do tamanho (solteiro, casal ou king). A coleta e entrega são gratuitas." },
      { pergunta: "Com qual frequência devo lavar o edredom?", resposta: "Para quem tem alergias, recomendamos a cada 2 meses. Para o público geral, a cada 3 a 6 meses é suficiente." },
      { pergunta: "A lavagem elimina os ácaros?", resposta: "Sim. A lavagem a 60°C elimina 100% dos ácaros, fezes de ácaros, fungos e bactérias presentes no edredom." },
      { pergunta: "Posso lavar edredom king na A7?", resposta: "Sim. Temos equipamentos industriais para todos os tamanhos, incluindo king size e super king." },
      { pergunta: "Qual o prazo de entrega?", resposta: "O prazo padrão é de 48 horas após a coleta. Em datas de alta demanda pode ser até 72h." },
    ],
    schemaType: "Service",
  },
  {
    slug: "tapete",
    nome: "tapete",
    nomeComposto: "limpeza de tapete",
    descricao: "Limpeza profissional de tapetes com extração de sujeira profunda, manchas e odores. Todos os materiais e tamanhos.",
    precoMin: 25,
    precoMax: 150,
    prazo: "72h",
    icone: "🪣",
    beneficios: [
      "Remove sujeira profunda que o aspirador não alcança",
      "Elimina manchas de animais, vinho, café e gordura",
      "Reduz drasticamente ácaros e alérgenos",
      "Tapetes de todos os materiais: lã, sintético, sisal, viscose",
      "Preço por m² — sem surpresas",
    ],
    processo: [
      "Orçamento gratuito via foto pelo WhatsApp",
      "Coleta agendada no horário que preferir",
      "Pré-tratamento de manchas com produtos específicos",
      "Lavagem com extração profissional",
      "Secagem controlada e entrega em 72h",
    ],
    faq: [
      { pergunta: "Quanto custa a limpeza de tapete?", resposta: "Cobramos por m². O preço começa em R$25/m² para tapetes sintéticos simples. Tapetes de lã e peças especiais têm orçamento específico via foto." },
      { pergunta: "Vocês retiram manchas de animais?", resposta: "Sim. Utilizamos enzimas específicas para manchas de urina, fezes e vômito de animais, eliminando o odor na raiz." },
      { pergunta: "Lavam tapetes persas e orientais?", resposta: "Sim, mas com protocolo especial. Avaliamos o material antes e informamos o processo adequado para não danificar as fibras." },
      { pergunta: "O tapete fica molhado na entrega?", resposta: "Não. Utilizamos secagem industrial. O tapete é entregue seco e pronto para uso." },
    ],
    schemaType: "Service",
  },
  {
    slug: "tenis",
    nome: "tênis",
    nomeComposto: "limpeza de tênis",
    descricao: "Limpeza especializada de tênis e calçados esportivos. Técnica correta por material: couro, lona, mesh, camurça.",
    precoMin: 29,
    precoMax: 79,
    prazo: "48h",
    icone: "👟",
    beneficios: [
      "Resultado profissional: parece novo mesmo depois de anos",
      "Técnica específica por tipo de material",
      "Branco que volta a ser branco de verdade",
      "Sem risco de descolar sola ou danificar estrutura",
      "Desodorização inclusa em todo serviço",
    ],
    processo: [
      "Mande foto do tênis pelo WhatsApp para avaliação gratuita",
      "Agendamos a coleta no seu endereço",
      "Limpeza manual com produtos específicos por material",
      "Branqueamento de solados e palmilhas",
      "Entrega em 48h em bag protetora",
    ],
    faq: [
      { pergunta: "Quanto custa limpar um tênis na A7?", resposta: "O preço por par começa em R$29,90 para tênis de lona básico. Tênis de couro, suede e peças de grife têm orçamento via foto, podendo chegar a R$79,90." },
      { pergunta: "Vocês limpam tênis brancos?", resposta: "Sim, é um dos nossos serviços mais procurados. Usamos técnica específica para branqueamento sem danificar o material." },
      { pergunta: "Como funciona para quem tem vários pares?", resposta: "Temos pacote de 3 pares com desconto. Entre em contato para montar o melhor combo." },
      { pergunta: "Vocês limpam Air Force, Yeezy e tênis de grife?", resposta: "Sim, com protocolo premium. Avaliamos cada par individualmente antes de aceitar." },
    ],
    schemaType: "Service",
  },
  {
    slug: "sofa",
    nome: "sofá",
    nomeComposto: "higienização de sofá",
    descricao: "Higienização profissional de sofás e estofados. Remove manchas, odores, ácaros e bactérias sem tirar de casa.",
    precoMin: 89,
    precoMax: 350,
    prazo: "no local",
    icone: "🛋️",
    beneficios: [
      "Higienização no local — sem precisar tirar o sofá",
      "Remove manchas de gordura, vinho, pet e uso diário",
      "Elimina odores profundos incluindo pet e cigarro",
      "Reduz ácaros e alérgenos no estofado",
      "Sofá seco em até 4h após o serviço",
    ],
    processo: [
      "Orçamento gratuito via foto e medidas do sofá",
      "Agendamento conforme sua disponibilidade",
      "Pré-tratamento de manchas específicas",
      "Limpeza com extratora profissional de estofados",
      "Aplicação de impermeabilizante opcional",
    ],
    faq: [
      { pergunta: "Quanto custa higienizar um sofá?", resposta: "O preço varia de R$89,90 a R$350 dependendo do tamanho e tipo de tecido. Sofá de 2 lugares começa em R$89,90. Cantineiros e em L têm orçamento específico." },
      { pergunta: "O sofá precisa sair de casa?", resposta: "Não. Realizamos o serviço no local, seja residência ou escritório. Você não precisa mover o sofá." },
      { pergunta: "Quanto tempo o sofá fica molhado?", resposta: "Com nosso equipamento de secagem, o sofá fica em condições de uso em 2 a 4 horas após o serviço." },
      { pergunta: "Vocês removem cheiro de animal?", resposta: "Sim. Usamos enzimas específicas que eliminam o odor na raiz, não apenas mascaram." },
    ],
    schemaType: "Service",
  },
  {
    slug: "cortinas",
    nome: "cortinas",
    nomeComposto: "lavagem de cortinas",
    descricao: "Lavagem e higienização profissional de cortinas de todos os tipos. Coleta sem precisar tirar do trilho.",
    precoMin: 35,
    precoMax: 120,
    prazo: "72h",
    icone: "🪟",
    beneficios: [
      "Não precisa tirar do trilho — coletamos instaladas",
      "Remove poeira, mofo e ácaros acumulados",
      "Adequado para voil, blackout, linho e tecidos pesados",
      "Entrega dobrada e pronta para reinstalar",
      "Frequência recomendada: a cada 6 meses",
    ],
    processo: [
      "Desmontagem cuidadosa sem danificar o trilho",
      "Identificação de cada cortina para reinstalação correta",
      "Lavagem conforme o tipo de tecido",
      "Secagem e acabamento profissional",
      "Entrega embalada em 72h",
    ],
    faq: [
      { pergunta: "Quanto custa lavar cortinas?", resposta: "O preço começa em R$35,00 por painel. Cortinas grandes ou de tecido especial têm orçamento via foto." },
      { pergunta: "Precisam ser tiradas do trilho antes?", resposta: "Não precisa. Nossa equipe retira e reinstala as cortinas, incluído no serviço." },
      { pergunta: "Com que frequência devo lavar as cortinas?", resposta: "A cada 6 meses para uso geral. Em ambientes com muito pó ou pessoas alérgicas, recomendamos a cada 3 meses." },
    ],
    schemaType: "Service",
  },
  {
    slug: "camisa-social",
    nome: "camisa social",
    nomeComposto: "lavagem de camisa social",
    descricao: "Lavagem e passadoria de camisas sociais com acabamento profissional. Gola perfeita, sem amassados.",
    precoMin: 12,
    precoMax: 25,
    prazo: "24h",
    icone: "👔",
    beneficios: [
      "Gola passada com precisão profissional",
      "Sem riscos de amarelamento",
      "Sem manchas de ferro",
      "Entrega em 24h para quem precisa de urgência",
      "Pacotes semanais para executivos",
    ],
    processo: [
      "Coleta no escritório ou residência",
      "Lavagem separada por cor e tipo de tecido",
      "Passadoria profissional com vapor",
      "Embalagem em saco protetor",
      "Entrega no prazo combinado",
    ],
    faq: [
      { pergunta: "Quanto custa lavar uma camisa social?", resposta: "A partir de R$12,00 por camisa, incluindo lavagem e passadoria. Pacotes semanais têm desconto progressivo." },
      { pergunta: "Vocês passam a gola pesada?", resposta: "Sim. Usamos goma e vapor para golas e punhos, com resultado igual ao serviço de tinturas de alta qualidade." },
      { pergunta: "Têm serviço expresso para camisa?", resposta: "Sim. Com agendamento até as 10h, entregamos no mesmo dia a partir das 18h (sujeito a disponibilidade)." },
    ],
    schemaType: "Service",
  },
  {
    slug: "calca-social",
    nome: "calça social",
    nomeComposto: "lavagem de calça social",
    descricao: "Lavagem, passadoria e vinco perfeito em calças sociais. Processo especializado para tecidos nobres.",
    precoMin: 18,
    precoMax: 35,
    prazo: "48h",
    icone: "👖",
    beneficios: [
      "Vinco marcado com precisão profissional",
      "Sem riscos para tecidos finos",
      "Adequado para seda, linho e viscose",
      "Lavagem e passadoria inclusa",
    ],
    processo: [
      "Coleta agendada",
      "Lavagem com produto específico para o tecido",
      "Passadoria com vapor e máquina de vinco",
      "Embalagem protetora",
    ],
    faq: [
      { pergunta: "Quanto custa lavar calça social?", resposta: "De R$18,00 a R$35,00 por peça, dependendo do tecido. Inclui lavagem e passadoria com vinco." },
      { pergunta: "Fazem vinco marcado?", resposta: "Sim. Utilizamos máquina de vinco profissional com resultado superior ao ferro doméstico." },
    ],
    schemaType: "Service",
  },
  {
    slug: "terno",
    nome: "terno",
    nomeComposto: "lavagem de terno",
    descricao: "Higienização completa de ternos e blazers com processo especializado. Preserva estrutura e caimento.",
    precoMin: 45,
    precoMax: 120,
    prazo: "72h",
    icone: "🤵",
    beneficios: [
      "Processo específico para estrutura do terno",
      "Sem encolhimento ou deformação",
      "Entrega com caimento perfeito",
      "Tratamento especial para forros",
    ],
    processo: [
      "Avaliação do tecido e tipo de entretela",
      "Lavagem a seco ou úmida conforme etiqueta",
      "Passadoria com manequim a vapor",
      "Embalagem em capa protetora",
    ],
    faq: [
      { pergunta: "Quanto custa lavar um terno?", resposta: "O conjunto completo (paletó + calça) custa de R$45,00 a R$120,00 dependendo do tecido. Ternos de lã super 100s têm protocolo especial." },
      { pergunta: "Terno de lã pode lavar?", resposta: "Sim, mas com processo específico. Identificamos o tipo de lã e aplicamos o método correto, incluindo vaporizaçao e manequim." },
    ],
    schemaType: "Service",
  },
  {
    slug: "jeans",
    nome: "jeans",
    nomeComposto: "lavagem de jeans",
    descricao: "Lavagem profissional de jeans com preservação da cor, elasticidade e caimento original.",
    precoMin: 15,
    precoMax: 35,
    prazo: "48h",
    icone: "👖",
    beneficios: [
      "Preserva a cor original sem desbotamento",
      "Mantém elasticidade do lycra",
      "Não deforma no joelho ou quadril",
      "Secagem controlada para preservar caimento",
    ],
    processo: [
      "Lavagem na temperatura correta para jeans",
      "Centrifugação controlada",
      "Secagem em temperatura moderada",
      "Passadoria leve se necessário",
    ],
    faq: [
      { pergunta: "Quanto custa lavar jeans na lavanderia?", resposta: "A partir de R$15,00 por peça. Jeans raw denim e peças de grife têm protocolo especial." },
      { pergunta: "Lavanderia desbota o jeans?", resposta: "Não. Ao contrário, o processo correto preserva a cor muito mais que a lavagem doméstica com temperatura errada." },
    ],
    schemaType: "Service",
  },
  {
    slug: "moletom",
    nome: "moletom",
    nomeComposto: "lavagem de moletom",
    descricao: "Lavagem especializada de moletons que preserva espessura, maciez e não deforma.",
    precoMin: 20,
    precoMax: 40,
    prazo: "48h",
    icone: "🧥",
    beneficios: [
      "Não encolhe nem deforma no capuz",
      "Preserva a maciez original",
      "Remove manchas difíceis de suor e uso intenso",
      "Secagem controlada que mantém o volume",
    ],
    processo: [
      "Lavagem com temperatura controlada",
      "Centrifugação suave",
      "Secagem em temperatura baixa para preservar fibras",
    ],
    faq: [
      { pergunta: "Moletom pode lavar em lavanderia?", resposta: "Sim, e é o método mais seguro. A temperatura correta evita encolhimento e deformação que acontece na máquina doméstica em temperatura errada." },
      { pergunta: "Quanto custa lavar moletom?", resposta: "A partir de R$20,00 por peça, incluindo o capuz." },
    ],
    schemaType: "Service",
  },
  {
    slug: "cobertor",
    nome: "cobertor",
    nomeComposto: "lavagem de cobertor",
    descricao: "Lavagem de cobertores e mantas de todos os tamanhos com processo industrial que remove ácaros e odores.",
    precoMin: 25,
    precoMax: 65,
    prazo: "48h",
    icone: "🛏️",
    beneficios: [
      "Remove ácaros e odores profundamente",
      "Ideal para cobertores de lã e acrílico",
      "Secagem completa — entrega totalmente seco",
      "Capacidade para tamanhos casal e king",
    ],
    processo: [
      "Lavagem em temperatura adequada ao material",
      "Enxágue reforçado para remover sabão residual",
      "Secagem completa em estufa industrial",
    ],
    faq: [
      { pergunta: "Quanto custa lavar cobertor?", resposta: "A partir de R$25,00 para solteiro até R$65,00 para king size de lã." },
      { pergunta: "Lavam cobertor de lã?", resposta: "Sim, com processo específico que não deforma as fibras de lã." },
    ],
    schemaType: "Service",
  },
  {
    slug: "travesseiro",
    nome: "travesseiro",
    nomeComposto: "lavagem de travesseiro",
    descricao: "Higienização de travesseiros de todos os tipos: pluma, fibra, viscoelástico. Elimina ácaros e amarelamento.",
    precoMin: 25,
    precoMax: 55,
    prazo: "48h",
    icone: "😴",
    beneficios: [
      "Elimina ácaros e bactérias acumuladas",
      "Remove amarelamento causado pelo suor",
      "Restaura volume e maciez original",
      "Processo adequado para cada tipo de enchimento",
    ],
    processo: [
      "Identificação do tipo de travesseiro",
      "Lavagem com temperatura e produto específicos",
      "Secagem completa — entrega sem umidade residual",
    ],
    faq: [
      { pergunta: "Quanto custa lavar travesseiro?", resposta: "A partir de R$25,00 por unidade para fibra e pluma sintética. Viscoelástico tem protocolo especial." },
      { pergunta: "Com que frequência lavar o travesseiro?", resposta: "A cada 3 a 6 meses é o recomendado para reduzir a carga de ácaros e fungos." },
    ],
    schemaType: "Service",
  },
  {
    slug: "roupas-delicadas",
    nome: "roupas delicadas",
    nomeComposto: "lavagem de roupas delicadas",
    descricao: "Lavagem especializada em seda, cashmere, renda, linho e peças delicadas. Sem risco de dano.",
    precoMin: 25,
    precoMax: 80,
    prazo: "72h",
    icone: "👗",
    beneficios: [
      "Processo específico para seda, cashmere e viscosa",
      "Sem risco de encolhimento ou deformação",
      "Produto dermatologicamente testado",
      "Avaliação individual de cada peça antes de aceitar",
    ],
    processo: [
      "Análise do tecido e etiqueta de cuidados",
      "Lavagem com produto específico para delicados",
      "Secagem plana ou suspensa conforme o material",
      "Passadoria com temperatura controlada",
    ],
    faq: [
      { pergunta: "Quanto custa lavar roupa delicada?", resposta: "De R$25,00 a R$80,00 por peça dependendo do tipo de tecido e tamanho. Avaliamos cada peça individualmente." },
      { pergunta: "Lavam seda?", resposta: "Sim, com produto neutro específico para proteínas naturais. Nunca usamos água quente em seda." },
      { pergunta: "E cashmere?", resposta: "Sim. O cashmere precisa de lavagem fria com produto especial e secagem plana. Fazemos isso corretamente." },
    ],
    schemaType: "Service",
  },
  {
    slug: "uniforme",
    nome: "uniforme",
    nomeComposto: "lavagem de uniforme",
    descricao: "Lavagem de uniformes corporativos e profissionais. Serviço para empresas com volume e contrato.",
    precoMin: 10,
    precoMax: 35,
    prazo: "48h",
    icone: "👷",
    beneficios: [
      "Atendimento para empresas com contrato",
      "Nota fiscal disponível",
      "Volume ilimitado com SLA garantido",
      "Preserva a estampa e emblemas dos uniformes",
    ],
    processo: [
      "Diagnóstico de volume e frequência",
      "Proposta de contrato mensal",
      "Coleta programada por rota",
      "Lavagem e entrega no prazo acordado",
    ],
    faq: [
      { pergunta: "Vocês atendem empresas para uniforme?", resposta: "Sim. Temos contrato mensal para empresas com coleta programada, nota fiscal e SLA de entrega. Entre em contato para proposta." },
      { pergunta: "Qual o volume mínimo para contrato empresarial?", resposta: "A partir de 20 peças por semana já temos condições especiais para empresas." },
    ],
    schemaType: "Service",
  },
];

// ─── PROBLEMS ────────────────────────────────────────────────────────────────

export interface Problem {
  slug: string;
  titulo: string;
  tituloLong: string;
  descricao: string;
  urgencia: "alta" | "media" | "baixa";
  solucao: string;
  dicas: string[];
  faq: Array<{ pergunta: string; resposta: string }>;
}

export const PROBLEMS: Problem[] = [
  {
    slug: "tirar-mancha-vinho",
    titulo: "Tirar Mancha de Vinho",
    tituloLong: "Como tirar mancha de vinho tinto da roupa",
    descricao: "Mancha de vinho é uma emergência. O tempo de resposta define se a peça tem salvação.",
    urgencia: "alta",
    solucao: "A A7 Lavanderia usa pré-tratamento enzimático específico para manchas de vinho antes da lavagem profissional.",
    dicas: [
      "Não esfregue a mancha — isso aprofunda no tecido",
      "Tampe com sal grosso para absorver o líquido ainda fresco",
      "Não deixe secar — o tanino do vinho fixa a quente",
      "Mande foto para avaliarmos antes de levar a peça",
    ],
    faq: [
      { pergunta: "Vocês conseguem tirar mancha de vinho tinto?", resposta: "Na maioria dos casos sim, especialmente se a peça chegar antes de lavar em casa. Use pré-tratamento enzimático. Mande foto pelo WhatsApp para avaliação." },
      { pergunta: "Mancha de vinho que já lavou tem salvação?", resposta: "Tem menor chance após a lavagem a quente, mas ainda tentamos. Nunca garantimos remoção 100%, mas sempre informamos antes de cobrar." },
      { pergunta: "Quanto custa tirar mancha de vinho?", resposta: "O serviço de remoção de mancha começa em R$15,00. Para peças delicadas o orçamento é individual." },
    ],
  },
  {
    slug: "tirar-mancha-oleo",
    titulo: "Tirar Mancha de Óleo",
    tituloLong: "Como tirar mancha de óleo e gordura da roupa",
    descricao: "Manchas de óleo e gordura são especialmente difíceis por serem hidrofóbicas — repelem água comum.",
    urgencia: "alta",
    solucao: "Usamos desengordurante profissional específico que emulsifica a gordura antes da lavagem.",
    dicas: [
      "Aplique talco ou amido de milho para absorver o óleo fresco",
      "Não molhe antes de tratar — água fixa a gordura",
      "Detergente de louça pode ajudar em peças de algodão simples",
      "Para peças delicadas, mande direto para nós",
    ],
    faq: [
      { pergunta: "Mancha de óleo de cozinha tem salvação?", resposta: "Sim, com desengordurante profissional. Quanto mais fresca a mancha, maior a chance de remoção total." },
      { pergunta: "E mancha de azeite em tecido branco?", resposta: "Tratamos com processo específico. Mande foto para avaliarmos — tecido branco tem mais opções de tratamento." },
      { pergunta: "Quanto custa remover mancha de óleo?", resposta: "A partir de R$15,00 por peça para algodão simples. Peças delicadas têm orçamento individual." },
    ],
  },
  {
    slug: "tirar-mancha-cafe",
    titulo: "Tirar Mancha de Café",
    tituloLong: "Como tirar mancha de café da roupa",
    descricao: "Café com leite é mais difícil que café puro pela proteína do leite que fixa com calor.",
    urgencia: "alta",
    solucao: "Pré-tratamento enzimático que dissolve os taninos do café e as proteínas do leite.",
    dicas: [
      "Enxágue com água fria imediatamente — nunca quente",
      "Café com leite: aplique produto enzimático antes de lavar",
      "Não seque na secadora antes de confirmar que a mancha saiu",
    ],
    faq: [
      { pergunta: "Mancha de café seca tem jeito?", resposta: "Tem, mas é mais difícil. A mancha seca precisa ser reidratada antes do pré-tratamento enzimático." },
      { pergunta: "E mancha de café com leite?", resposta: "É mais complexa pela proteína do leite. Usamos enzima proteolítica específica antes da lavagem." },
    ],
  },
  {
    slug: "tirar-mancha-sangue",
    titulo: "Tirar Mancha de Sangue",
    tituloLong: "Como tirar mancha de sangue da roupa",
    descricao: "Sangue coagula e fixa em tecido. Temperatura é o fator mais crítico no tratamento.",
    urgencia: "alta",
    solucao: "Tratamento com água oxigenada diluída e enzimas proteolíticas que dissolvem as proteínas do sangue.",
    dicas: [
      "Use SEMPRE água fria — água quente cozinha o sangue e fixa para sempre",
      "Água oxigenada 10 volumes funciona em manchas frescas",
      "Nunca esfregue — tampe e deixe o produto agir",
    ],
    faq: [
      { pergunta: "Mancha de sangue sai na lavanderia?", resposta: "Na maioria dos casos sim, com enzimas proteolíticas. Sangue fresco tem taxa de remoção de 90%+. Sangue seco é mais difícil mas geralmente tratável." },
      { pergunta: "Quanto custa tirar mancha de sangue?", resposta: "A partir de R$15,00. Para peças delicadas como seda e linho o orçamento é individual." },
    ],
  },
  {
    slug: "tirar-mancha-gordura",
    titulo: "Tirar Mancha de Gordura",
    tituloLong: "Como tirar mancha de gordura da roupa",
    descricao: "Gordura de churrasco, fritura e alimentos oleosos precisa de desengordurante específico.",
    urgencia: "media",
    solucao: "Desengordurante industrial que emulsifica a gordura sem danificar o tecido.",
    dicas: [
      "Não molhe a área manchada — água espalha a gordura",
      "Aplique amido de milho ou pó de talco para absorver o excesso",
      "Deixe agir por 30 min antes de escovar levemente",
    ],
    faq: [
      { pergunta: "Mancha de churrasco sai da roupa?", resposta: "Sim, com desengordurante e pré-tratamento adequado. Mande foto para avaliação." },
    ],
  },
  {
    slug: "roupa-com-mofo",
    titulo: "Roupa com Mofo",
    tituloLong: "O que fazer com roupa com mofo e cheiro de bolor",
    descricao: "Mofo em roupa é fungo vivo. Lavar em casa sem tratamento correto apenas move o fungo — não elimina.",
    urgencia: "alta",
    solucao: "Lavagem a 60°C com produto antifúngico específico que elimina o fungo na raiz, não apenas o odor.",
    dicas: [
      "Não misture roupas com mofo com as outras na máquina",
      "Lavar a baixa temperatura só move o fungo",
      "Deixe as peças ao sol antes de trazer — luz UV mata esporos",
    ],
    faq: [
      { pergunta: "Roupa com mofo tem salvação?", resposta: "Na maioria dos casos sim, especialmente se não houver dano estrutural na fibra. Manchas muito antigas podem manchar permanentemente, mas o fungo é eliminado." },
      { pergunta: "Quanto custa lavar roupa com mofo?", resposta: "A partir de R$15,00 por peça com tratamento antifúngico incluso." },
      { pergunta: "Vocês eliminam o cheiro de bolor?", resposta: "Sim. O tratamento remove o fungo que causa o cheiro, não apenas mascara o odor." },
    ],
  },
  {
    slug: "roupa-com-cheiro",
    titulo: "Roupa com Cheiro",
    tituloLong: "Como eliminar cheiro difícil da roupa",
    descricao: "Cheiro persistente de suor, cigarro, perfume ou mofo pode ser eliminado com o processo correto.",
    urgencia: "media",
    solucao: "Lavagem com neutralizador de odores enzimático que age na fonte do cheiro, não apenas mascara.",
    dicas: [
      "Cheiro de suor: é causado por bactérias — precisa de tratamento bactericida",
      "Cheiro de cigarro: impregnado nas fibras — precisa de lavagem com neutralizador",
      "Não use mais amaciante — mascara o cheiro temporariamente e piora a longo prazo",
    ],
    faq: [
      { pergunta: "Lavanderia tira cheiro de suor da roupa?", resposta: "Sim. Usamos neutralizador enzimático que elimina as bactérias causadoras do odor, não apenas perfuma." },
      { pergunta: "E cheiro de cigarro em roupa?", resposta: "Sim, embora exija lavagem dupla em alguns casos. É completamente eliminado em nossa lavagem." },
    ],
  },
  {
    slug: "tapete-com-cheiro",
    titulo: "Tapete com Cheiro",
    tituloLong: "Como eliminar cheiro de tapete",
    descricao: "Tapete acumula odor de pet, umidade e uso. Limpeza superficial não resolve — precisa de extração profunda.",
    urgencia: "media",
    solucao: "Extração profissional com produto neutralizador de odores e secagem completa que elimina a umidade residual.",
    dicas: [
      "Cheiro de urina de pet precisa de enzima específica",
      "Tapete úmido volta a cheirar — secagem completa é essencial",
      "Aspiração frequente reduz mas não elimina o problema",
    ],
    faq: [
      { pergunta: "Quanto custa limpar tapete com cheiro de cachorro?", resposta: "A partir de R$25/m². Tapetes com urina de animal levam produto enzimático adicional incluso no preço." },
    ],
  },
  {
    slug: "sofa-manchado",
    titulo: "Sofá Manchado",
    tituloLong: "Como limpar sofá manchado",
    descricao: "Sofá com manchas de uso, alimentos e pet pode ser recuperado sem precisar comprar novo.",
    urgencia: "media",
    solucao: "Pré-tratamento de manchas com extratora profissional de estofados que limpa em profundidade.",
    dicas: [
      "Não esfregue a mancha — espalhará no tecido",
      "Mande foto para avaliação antes do serviço",
      "A maioria das manchas de uso diário são removíveis",
    ],
    faq: [
      { pergunta: "Sofá manchado tem jeito?", resposta: "Na maioria dos casos sim. Mande foto pelo WhatsApp para avaliação gratuita — informamos honestamente o que conseguimos remover." },
      { pergunta: "Quanto custa limpar sofá manchado?", resposta: "A partir de R$89,90 para sofá de 2 lugares. O pré-tratamento de manchas está incluso." },
    ],
  },
  {
    slug: "tenis-sujo",
    titulo: "Tênis Sujo",
    tituloLong: "Como limpar tênis muito sujo",
    descricao: "Tênis usado no dia a dia acumula sujeira que escova doméstica não remove completamente.",
    urgencia: "media",
    solucao: "Limpeza profissional com produtos específicos para cada parte do tênis: mesh, solado, cadarços e palmilha.",
    dicas: [
      "Não coloque tênis na máquina — pode descolar a sola e danificar estrutura",
      "Para manchas de barro: deixe secar completamente antes de escovação",
      "Cadarços: troque por novos se muito manchados — são baratos",
    ],
    faq: [
      { pergunta: "Tênis muito sujo tem salvação?", resposta: "Na maioria dos casos sim. Mande foto para avaliação. Tênis com estrutura comprometida são honestos na avaliação." },
      { pergunta: "Qual o prazo para limpar tênis?", resposta: "48 horas após a coleta, ou 24h no serviço expresso." },
    ],
  },
  {
    slug: "edredom-amarelado",
    titulo: "Edredom Amarelado",
    tituloLong: "Como branquear edredom amarelado",
    descricao: "Amarelamento em edredons brancos é causado por suor e oxidação. Tem tratamento específico.",
    urgencia: "media",
    solucao: "Processo de branqueamento com oxigênio ativo que remove o amarelamento sem agredir as fibras.",
    dicas: [
      "Não use alvejante cloro em edredons — danifica as fibras",
      "Exposição ao sol ajuda parcialmente mas não remove completamente",
      "O branqueamento profissional usa oxigênio ativo, mais seguro que cloro",
    ],
    faq: [
      { pergunta: "Edredom amarelado volta a ficar branco?", resposta: "Sim, na maioria dos casos. Usamos branqueamento com oxigênio ativo que remove o amarelamento sem danificar o enchimento." },
      { pergunta: "Quanto custa branquear edredom?", resposta: "O serviço de branqueamento está incluso na higienização padrão do edredom, a partir de R$39,90." },
    ],
  },
  {
    slug: "uniforme-sujo",
    titulo: "Uniforme Sujo",
    tituloLong: "Como lavar uniforme de trabalho pesado",
    descricao: "Uniformes de construção, indústria e cozinha acumulam sujeira que lavagem doméstica não resolve.",
    urgencia: "media",
    solucao: "Lavagem industrial com pré-tratamento específico para cada tipo de sujeira (óleo, tinta, graxa, alimentos).",
    dicas: [
      "Pré-trate manchas de graxa antes de lavar",
      "Uniformes de cozinha: produto específico para gordura animal",
      "Uniformes de construção: pré-molho antes da lavagem",
    ],
    faq: [
      { pergunta: "Lavam uniforme de obra e construção?", resposta: "Sim, com pré-tratamento industrial para graxa, cimento e tinta. Volume mínimo para empresas sob consulta." },
      { pergunta: "Vocês atendem empresas para uniforme?", resposta: "Sim. Temos contrato mensal com SLA e nota fiscal para empresas." },
    ],
  },
  {
    slug: "cortina-empoeirada",
    titulo: "Cortina Empoeirada",
    tituloLong: "Como lavar cortina muito empoeirada",
    descricao: "Cortina que nunca foi lavada acumula poeira, ácaros e bactérias que afetam a qualidade do ar.",
    urgencia: "baixa",
    solucao: "Lavagem com sacudida prévia, pré-enxágue e lavagem com produto adequado ao tipo de tecido.",
    dicas: [
      "Não bata a cortina empoeirada na sua casa — isso libera os ácaros no ar",
      "Cortinas blackout pesadas não devem ser lavadas em máquina doméstica",
      "Frequência recomendada: a cada 6 meses",
    ],
    faq: [
      { pergunta: "Quando devo lavar as cortinas?", resposta: "A cada 6 meses para uso geral. Para casas com animais ou pessoas alérgicas, a cada 3 meses." },
      { pergunta: "Vocês buscam as cortinas?", resposta: "Sim. Nossa equipe retira as cortinas com cuidado e reinstala após a lavagem." },
    ],
  },
  {
    slug: "bebe-vomitou-roupa",
    titulo: "Roupa de Bebê com Vômito",
    tituloLong: "Como lavar roupa de bebê com vômito e leite",
    descricao: "Roupas de bebê com leite e vômito precisam de lavagem com produto hipoalergênico e processo correto.",
    urgencia: "alta",
    solucao: "Lavagem com produto hipoalergênico certificado e enzimas proteolíticas que removem proteínas do leite.",
    dicas: [
      "Enxágue imediatamente com água fria para remover o excesso",
      "Nunca use produto comum — pode irritar a pele do bebê",
      "Roupas de bebê devem ser lavadas separadas das roupas adultas",
    ],
    faq: [
      { pergunta: "Vocês usam produto hipoalergênico para roupas de bebê?", resposta: "Sim. Temos linha específica com produto hipoalergênico testado para bebês, sem fragrâncias e sem corantes." },
      { pergunta: "Quanto custa lavar roupas de bebê?", resposta: "A partir de R$15,00 por peça. Temos pacotes mensais para famílias com bebê." },
    ],
  },
  {
    slug: "mancha-caneta",
    titulo: "Mancha de Caneta",
    tituloLong: "Como tirar mancha de caneta da roupa",
    descricao: "Tinta de caneta esferográfica, pilot e marcador têm composições diferentes — cada uma tem tratamento específico.",
    urgencia: "media",
    solucao: "Removedor de tinta específico que dissolve os solventes da caneta sem danificar o tecido.",
    dicas: [
      "Álcool isopropílico funciona para caneta esferográfica em algodão",
      "Não esfregue — dabbing (tamponamento) é mais efetivo",
      "Caneta permanente em tecido delicado: mande direto para nós",
    ],
    faq: [
      { pergunta: "Mancha de caneta sai da roupa?", resposta: "Caneta esferográfica: alta taxa de remoção. Caneta permanente em tecido: mais difícil, mas geralmente tratável. Mande foto para avaliação." },
    ],
  },
  {
    slug: "mancha-ferrugem",
    titulo: "Mancha de Ferrugem",
    tituloLong: "Como tirar mancha de ferrugem da roupa",
    descricao: "Ferrugem em roupa é óxido de ferro. Requer ácido específico para quelação — não lava com detergente comum.",
    urgencia: "media",
    solucao: "Ácido oxálico diluído ou removedor específico de ferrugem que quelata o ferro sem danificar as fibras.",
    dicas: [
      "Não use alvejante cloro — fixa a ferrugem",
      "Suco de limão pode funcionar em manchas pequenas e recentes",
      "Ferrugem de água de tanque: mancha leve, geralmente fácil",
    ],
    faq: [
      { pergunta: "Mancha de ferrugem sai da roupa?", resposta: "Na maioria dos casos sim, com quelante de ferro específico. Ferrugem muito antiga pode tingir permanentemente fibras claras." },
    ],
  },
  {
    slug: "roupa-com-pelo-pet",
    titulo: "Roupa com Pelo de Pet",
    tituloLong: "Como tirar pelo de pet da roupa",
    descricao: "Pelos de cães e gatos se incrustam nas fibras de tecido e não saem com lavagem comum.",
    urgencia: "baixa",
    solucao: "Lavagem com pré-tratamento e ciclo de centrifugação específico que remove pelos incrustados.",
    dicas: [
      "Role fita adesiva antes de lavar para remover excesso",
      "Seque na secadora com ball de tênis — solta os pelos das fibras",
      "Lavagem a frio com centrifugação alta funciona bem",
    ],
    faq: [
      { pergunta: "Lavanderia remove pelos de pet da roupa?", resposta: "Sim. Usamos pré-tratamento e ciclo específico que remove pelos incrustados nas fibras." },
    ],
  },
  {
    slug: "mancha-graxe",
    titulo: "Mancha de Graxa",
    tituloLong: "Como tirar mancha de graxa e óleo de carro da roupa",
    descricao: "Graxa mecânica e óleo de motor são entre as manchas mais difíceis por conterem polímeros e metais.",
    urgencia: "alta",
    solucao: "Desengordurante industrial alcalino que dissolve os componentes da graxa antes da lavagem principal.",
    dicas: [
      "Aplique desengordurante (tipo Orange Power) antes de lavar",
      "Não molhe antes de tratar — água dispersa a graxa",
      "Para uniformes de mecânico, pré-molho em solvente é o mais efetivo",
    ],
    faq: [
      { pergunta: "Mancha de óleo de carro sai da roupa?", resposta: "Na maioria dos casos sim, com desengordurante industrial. Manchas muito antigas têm menor taxa de remoção." },
      { pergunta: "Lavam roupa de mecânico?", resposta: "Sim, com protocolo específico para graxa e óleo mineral. Temos contrato empresarial para oficinas." },
    ],
  },
];

// ─── LOOKUP HELPERS ──────────────────────────────────────────────────────────

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getProblemBySlug(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug);
}

// Top 5 cities for Motor 4 combinations
export const TOP_CITIES = CITIES.filter((c) => c.demanda === "alta").map((c) => c.slug);

// All slugs per motor
export const allCitySlugs = CITIES.map((c) => c.slug);
export const allServiceSlugs = SERVICES.map((s) => s.slug);
export const allProblemSlugs = PROBLEMS.map((p) => p.slug);
