export const COMPANY = {
  name: "A7 Lavanderia",
  tagline: "Lavanderia premium com coleta e entrega",
  description:
    "Lavanderia premium com coleta e entrega no Vale do Paraíba. Roupas, tênis, edredons e tapetes higienizados com padrão internacional.",
  phone: "(12) 97412-8390",
  whatsapp: "5512974128390",
  whatsappDisplay: "(12) 97412-8390",
  email: "[PLACEHOLDER: email@a7lavanderia.com.br]",
  website: "https://a7lavanderia.com.br",
  cnpj: "[PLACEHOLDER: XX.XXX.XXX/0001-XX]",
  foundingYear: "[PLACEHOLDER: ano de fundação]",
  address: {
    street: "[PLACEHOLDER: Rua Principal, 123]",
    neighborhood: "[PLACEHOLDER: Centro]",
    city: "São José dos Campos",
    state: "SP",
    zip: "[PLACEHOLDER: 12200-000]",
    country: "BR",
  },
  socialMedia: {
    instagram: "[PLACEHOLDER: https://instagram.com/a7lavanderia]",
    facebook: "[PLACEHOLDER: https://facebook.com/a7lavanderia]",
    tiktok: "[PLACEHOLDER: https://tiktok.com/@a7lavanderia]",
    youtube: "[PLACEHOLDER: https://youtube.com/@a7lavanderia]",
  },
  stats: {
    attendances: "50.000",
    unitsBrazil: 14,
    unitsUSA: 2,
    googleRating: 4.9,
    satisfaction: "99,7",
  },
  units: [
    "São José dos Campos - Centro",
    "São José dos Campos - Jardim Aquarius",
    "Taubaté",
    "Jacareí",
    "Caçapava",
    "Pindamonhangaba",
    "Guaratinguetá",
    "Lorena",
    "Cruzeiro",
    "Aparecida",
    "Caraguatatuba",
    "São Sebastião",
    "Ubatuba",
    "Campos do Jordão",
  ],
  cities: [
    "São José dos Campos",
    "Taubaté",
    "Jacareí",
    "Caçapava",
    "Pindamonhangaba",
    "Guaratinguetá",
    "Lorena",
    "Cruzeiro",
    "Aparecida",
    "Caraguatatuba",
    "São Sebastião",
    "Ubatuba",
    "Campos do Jordão",
  ],
  certifications: [
    "Produtos Dermatologicamente Testados",
    "ISO 9001 (se aplicável)",
    "Selo Sustentabilidade",
  ],
};

export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Gostaria de saber mais sobre os serviços da A7 Lavanderia. 🧺",
  agendar:
    "Olá! Gostaria de agendar uma coleta gratuita. 🚀",
  planos:
    "Olá! Gostaria de conhecer os planos da A7 Lavanderia. 💰",
  orcamento:
    "Olá! Gostaria de solicitar um orçamento. 📋",
  empresarial:
    "Olá! Gostaria de saber mais sobre o plano empresarial. 🏢",
};

export function getWhatsAppLink(message: keyof typeof WHATSAPP_MESSAGES | string = "default") {
  const text = WHATSAPP_MESSAGES[message as keyof typeof WHATSAPP_MESSAGES] || message;
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const UNSPLASH_IMAGES = {
  hero: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1920&q=80&auto=format&fit=crop",
  services: {
    roupas: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop",
    camisas: "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=600&q=80&auto=format&fit=crop",
    edredons: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop",
    tapetes: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80&auto=format&fit=crop",
    tenis: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
    uniformes: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
  },
  about: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
  painPoints: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1920&q=80&auto=format&fit=crop",
  blog: {
    cuidados: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80&auto=format&fit=crop",
    manchas: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&q=80&auto=format&fit=crop",
    edredom: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop",
    tenis: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
    sustentabilidade: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80&auto=format&fit=crop",
    organizacao: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80&auto=format&fit=crop",
    tapetes: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80&auto=format&fit=crop",
    cashmere: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a75?w=600&q=80&auto=format&fit=crop",
    uniforme: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
    alergia: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80&auto=format&fit=crop",
  },
};

export const SERVICES = [
  {
    id: "roupas-dia-a-dia",
    title: "Roupas do Dia a Dia",
    description:
      "Lavagem e passadoria completa para suas roupas do cotidiano. Cuidamos como se fossem nossas.",
    price: "[PLACEHOLDER: preço]",
    icon: "shirt",
    image: UNSPLASH_IMAGES.services.roupas,
  },
  {
    id: "roupas-sociais",
    title: "Roupas Sociais e Delicadas",
    description:
      "Tratamento especial para camisas sociais, ternos, vestidos de festa e tecidos delicados.",
    price: "[PLACEHOLDER: preço]",
    icon: "sparkles",
    image: UNSPLASH_IMAGES.services.camisas,
  },
  {
    id: "edredons",
    title: "Edredons e Cobertores",
    description:
      "Higienização profunda que elimina 100% dos ácaros. Seu edredom volta cheiroso e fofo.",
    price: "[PLACEHOLDER: preço]",
    icon: "cloud",
    image: UNSPLASH_IMAGES.services.edredons,
  },
  {
    id: "tapetes-cortinas",
    title: "Tapetes e Cortinas",
    description:
      "Lavagem especializada que preserva fibras e cores. Retirada e instalação opcionais.",
    price: "[PLACEHOLDER: preço]",
    icon: "home",
    image: UNSPLASH_IMAGES.services.tapetes,
  },
  {
    id: "tenis",
    title: "Tênis e Calçados",
    description:
      "Higienização completa que elimina odores e bactérias. Seu tênis volta como novo.",
    price: "[PLACEHOLDER: preço]",
    icon: "footprints",
    image: UNSPLASH_IMAGES.services.tenis,
  },
  {
    id: "uniformes",
    title: "Uniformes Corporativos",
    description:
      "Soluções para empresas com planos sob medida. Volume, prazo e qualidade garantidos.",
    price: "Sob consulta",
    icon: "building",
    image: UNSPLASH_IMAGES.services.uniformes,
  },
];

export const PLANS = [
  {
    id: "essencial",
    name: "Essencial",
    description: "Ideal para solteiros e casais",
    price: "[PLACEHOLDER]",
    period: "/mês",
    popular: false,
    features: [
      "Até 15 peças por semana",
      "Coleta e entrega grátis",
      "Lavagem e passadoria",
      "Prazo de 48h",
      "Atendimento via WhatsApp",
    ],
    cta: "Começar agora",
  },
  {
    id: "familia",
    name: "Família",
    description: "Perfeito para famílias",
    price: "[PLACEHOLDER]",
    period: "/mês",
    popular: true,
    features: [
      "Até 40 peças por semana",
      "Coleta e entrega grátis",
      "Lavagem, passadoria e secagem",
      "Prazo de 48h",
      "Edredom mensal incluso",
      "Atendimento prioritário",
      "App de acompanhamento",
    ],
    cta: "Começar agora",
  },
  {
    id: "empresarial",
    name: "Empresarial",
    description: "Para empresas de todos os portes",
    price: "Sob consulta",
    period: "",
    popular: false,
    features: [
      "Volume personalizado",
      "Coleta e entrega diária",
      "Uniformes e EPIs",
      "Prazo sob medida",
      "Gestor de conta dedicado",
      "Relatórios mensais",
      "Faturamento por CNPJ",
    ],
    cta: "Solicitar proposta",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Silva",
    city: "São José dos Campos",
    rating: 5,
    text: "A A7 mudou minha rotina! Antes eu perdia todo fim de semana lavando roupa. Agora é só agendar pelo WhatsApp e pronto. Qualidade impecável!",
    verified: true,
  },
  {
    id: 2,
    name: "Carlos Santos",
    city: "Taubaté",
    rating: 5,
    text: "Uso o plano Família há 8 meses. Minha esposa e eu ganhamos um tempo precioso juntos. As roupas voltam perfeitas, cheirosas e bem passadas.",
    verified: true,
  },
  {
    id: 3,
    name: "Ana Oliveira",
    city: "Jacareí",
    rating: 5,
    text: "Mandei meus edredons que estavam guardados há meses. Voltaram como novos! Sem cheiro, sem ácaros, macios. Super recomendo.",
    verified: true,
  },
  {
    id: 4,
    name: "Roberto Mendes",
    city: "São José dos Campos",
    rating: 5,
    text: "Como gerente de hotel, preciso de um parceiro confiável. A A7 nunca me deixou na mão. Pontualidade e qualidade sempre.",
    verified: true,
  },
  {
    id: 5,
    name: "Juliana Costa",
    city: "Pindamonhangaba",
    rating: 5,
    text: "Meus tênis brancos estavam impossíveis. A A7 devolveu eles como se tivessem saído da caixa. Virei cliente fiel!",
    verified: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a coleta e entrega?",
    answer:
      "É simples! Você agenda pelo WhatsApp, nosso motoboy coleta as roupas na sua porta no horário combinado. Após a higienização, devolvemos tudo limpo, passado e embalado. Sem taxa de entrega para planos mensais.",
  },
  {
    question: "Quais cidades vocês atendem?",
    answer:
      "Atendemos todo o Vale do Paraíba e Litoral Norte de São Paulo: São José dos Campos, Taubaté, Jacareí, Caçapava, Pindamonhangaba, Guaratinguetá, Lorena, Cruzeiro, Aparecida, Caraguatatuba, São Sebastião, Ubatuba e Campos do Jordão. Também temos unidades nos Estados Unidos.",
  },
  {
    question: "Qual o prazo de devolução?",
    answer:
      "O prazo padrão é de 48 horas para roupas do dia a dia. Peças delicadas e edredons podem levar até 72 horas. Para emergências, oferecemos serviço express com devolução em 24 horas (consulte disponibilidade).",
  },
  {
    question: "Posso cancelar o plano a qualquer momento?",
    answer:
      "Sim! Não temos fidelidade. Você pode cancelar, pausar ou trocar de plano a qualquer momento sem multas ou taxas. Basta avisar pelo WhatsApp com 7 dias de antecedência.",
  },
  {
    question: "Vocês lavam roupas delicadas?",
    answer:
      "Com certeza! Temos processos específicos para cada tipo de tecido: seda, linho, cashmere, couro e muito mais. Cada peça é analisada individualmente e recebe o tratamento adequado. Usamos produtos premium e dermatologicamente testados.",
  },
  {
    question: "Como funciona a higienização de edredons?",
    answer:
      "Nosso processo remove 100% dos ácaros, fungos e bactérias. Usamos lavagem com água quente controlada, produtos hipoalergênicos e secagem em alta temperatura. Seu edredom volta fofo, cheiroso e seguro para toda a família.",
  },
  {
    question: "Vocês atendem empresas?",
    answer:
      "Sim! Temos um plano empresarial sob medida para hotéis, restaurantes, academias, clínicas e empresas de todos os portes. Oferecemos coleta diária, faturamento por CNPJ, relatórios mensais e gestor de conta dedicado.",
  },
  {
    question: "Quais formas de pagamento aceitam?",
    answer:
      "Aceitamos PIX, cartão de crédito (até 12x), cartão de débito, boleto bancário e transferência. Para planos mensais, o pagamento é recorrente no cartão de crédito com desconto especial.",
  },
  {
    question: "E se alguma peça for danificada?",
    answer:
      "Sua tranquilidade é nossa prioridade. Todas as peças são fotografadas na entrada e passam por inspeção rigorosa. Em caso de qualquer dano (o que é raríssimo), cobrimos integralmente o reparo ou substituição da peça.",
  },
  {
    question: "Vocês usam produtos seguros para alérgicos?",
    answer:
      "Sim! Todos os nossos produtos são dermatologicamente testados e hipoalergênicos. Também oferecemos opção de lavagem com produtos específicos para peles sensíveis e bebês. Basta informar na hora do agendamento.",
  },
];

export const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Blog", href: "#blog" },
  { label: "Cotação", href: "#cotacao" },
  { label: "FAQ", href: "#faq" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Agende pelo WhatsApp",
    description:
      "Mande uma mensagem com o dia e horário de sua preferência. Respondemos em menos de 5 minutos.",
    icon: "phone",
  },
  {
    step: 2,
    title: "Coletamos na sua porta",
    description:
      "Nosso motoboy vai até você no horário combinado. Sem sair de casa, sem pegar trânsito.",
    icon: "truck",
  },
  {
    step: 3,
    title: "Higienizamos com padrão premium",
    description:
      "Cada peça recebe tratamento individualizado com produtos de alta performance e tecnologia industrial.",
    icon: "sparkles",
  },
  {
    step: 4,
    title: "Devolvemos pronto para usar",
    description:
      "Suas roupas voltam limpas, passadas e embaladas na sua porta. É só guardar e vestir.",
    icon: "package",
  },
];

export const PAIN_POINTS = [
  {
    icon: "clock",
    title: "Fim de semana perdido",
    description: "Lavando, estendendo, passando... Quando percebe, o domingo acabou.",
  },
  {
    icon: "alert",
    title: "Medo de estragar roupas caras",
    description: "Aquela camisa social de R$300 merece cuidado profissional.",
  },
  {
    icon: "bug",
    title: "Edredons acumulando ácaros",
    description: "Meses sem lavar = milhões de ácaros. Alergias, espirros e noites mal dormidas.",
  },
  {
    icon: "nose",
    title: "Tênis com cheiro impossível",
    description: "Nem bicarbonato resolve. A máquina de casa não dá conta.",
  },
  {
    icon: "wallet",
    title: "Empresa gastando demais",
    description: "Uniformes, toalhas, enxoval... Sem processo eficiente, o custo dispara.",
  },
];

export const BENEFITS = [
  {
    number: "8",
    suffix: "h+",
    label: "livres por semana",
    description: "Tempo que você ganha para o que realmente importa",
  },
  {
    number: "99,7",
    suffix: "%",
    label: "de satisfação",
    description: "Índice de aprovação dos nossos clientes",
  },
  {
    number: "40",
    suffix: "%",
    label: "mais economia",
    description: "Comparado com lavar em casa (água, luz, produtos)",
  },
  {
    number: "100",
    suffix: "%",
    label: "dos ácaros eliminados",
    description: "Higienização profunda com tecnologia industrial",
  },
  {
    number: "24",
    suffix: "h",
    label: "para coleta",
    description: "Agendamento rápido, coleta no mesmo dia ou no dia seguinte",
  },
  {
    number: "14",
    suffix: "",
    label: "unidades no Brasil",
    description: "Presença consolidada no Vale do Paraíba e Litoral Norte",
  },
];

export const BLOG_ARTICLES = [
  {
    id: 1,
    slug: "como-cuidar-roupas-delicadas",
    title: "Como Cuidar de Roupas Delicadas: Guia Completo",
    excerpt: "Aprenda as melhores práticas para manter suas roupas de seda, linho e cashmere sempre impecáveis.",
    category: "Dicas",
    image: UNSPLASH_IMAGES.blog.cuidados,
  },
  {
    id: 2,
    slug: "tirar-manchas-dificeis",
    title: "7 Truques Profissionais para Tirar Manchas Difíceis",
    excerpt: "Vinho, café, gordura... descubra como profissionais removem as manchas mais teimosas.",
    category: "Dicas",
    image: UNSPLASH_IMAGES.blog.manchas,
  },
  {
    id: 3,
    slug: "higienizacao-edredom-importancia",
    title: "Por que Higienizar seu Edredom a Cada 3 Meses?",
    excerpt: "Ácaros, fungos e bactérias se acumulam rapidamente. Saiba como proteger sua família.",
    category: "Saúde",
    image: UNSPLASH_IMAGES.blog.edredom,
  },
  {
    id: 4,
    slug: "lavar-tenis-corretamente",
    title: "Como Lavar Tênis sem Estragar: Passo a Passo",
    excerpt: "Seu tênis merece cuidado especial. Veja o método profissional de higienização.",
    category: "Tutorial",
    image: UNSPLASH_IMAGES.blog.tenis,
  },
  {
    id: 5,
    slug: "lavanderia-sustentavel",
    title: "Lavanderia Sustentável: Como a A7 Reduz o Impacto Ambiental",
    excerpt: "Conheça nossas práticas sustentáveis que economizam até 60% de água por lavagem.",
    category: "Sustentabilidade",
    image: UNSPLASH_IMAGES.blog.sustentabilidade,
  },
  {
    id: 6,
    slug: "organizar-guarda-roupa",
    title: "5 Dicas para Organizar seu Guarda-Roupa como um Profissional",
    excerpt: "Técnicas de organização que vão transformar seu dia a dia e conservar suas roupas.",
    category: "Organização",
    image: UNSPLASH_IMAGES.blog.organizacao,
  },
  {
    id: 7,
    slug: "limpeza-tapetes-profissional",
    title: "Limpeza Profissional de Tapetes: Quando e Por Quê",
    excerpt: "Descubra por que a limpeza caseira não é suficiente e quando chamar um profissional.",
    category: "Dicas",
    image: UNSPLASH_IMAGES.blog.tapetes,
  },
  {
    id: 8,
    slug: "cuidados-cashmere-la",
    title: "Guia Definitivo: Cuidados com Cashmere e Lã",
    excerpt: "Proteja seus investimentos em moda com os cuidados certos para fibras nobres.",
    category: "Tutorial",
    image: UNSPLASH_IMAGES.blog.cashmere,
  },
  {
    id: 9,
    slug: "uniformes-corporativos-higienizacao",
    title: "Higienização de Uniformes: Como Manter a Equipe Impecável",
    excerpt: "Dicas para empresas que querem manter a apresentação profissional dos colaboradores.",
    category: "Empresarial",
    image: UNSPLASH_IMAGES.blog.uniforme,
  },
  {
    id: 10,
    slug: "alergia-acaros-roupa-cama",
    title: "Alergia a Ácaros? O Que Sua Roupa de Cama Tem a Ver com Isso",
    excerpt: "Entenda a relação entre a higienização das roupas de cama e os sintomas alérgicos.",
    category: "Saúde",
    image: UNSPLASH_IMAGES.blog.alergia,
  },
];

export const COUPON_DATA = {
  groupSize: "2.847",
  coupons: [
    { item: "Edredom Casal", price: "R$29,90" },
    { item: "Tênis (par)", price: "R$23,90" },
  ],
  whatsappGroupMessage:
    "Olá! Quero participar do grupo de cupons da A7 Lavanderia! 🎟️",
};

export const SOCIAL_PROOF_NOTIFICATIONS = [
  { name: "Maria", city: "SJC", action: "acabou de agendar uma coleta" },
  { name: "Carlos", city: "Taubaté", action: "lavou 3 edredons" },
  { name: "Ana", city: "Jacareí", action: "assinou o plano Família" },
  { name: "Roberto", city: "SJC", action: "higienizou 5 pares de tênis" },
  { name: "Juliana", city: "Pinda", action: "lavou cortinas e tapetes" },
  { name: "Fernando", city: "Guaratinguetá", action: "renovou o plano Essencial" },
  { name: "Patrícia", city: "Caçapava", action: "agendou coleta express" },
  { name: "Lucas", city: "Lorena", action: "lavou 40 peças esta semana" },
];

export const PROMO_TICKER_MESSAGES = [
  "Primeiro mês com 20% OFF em todos os planos",
  "Edredom Casal por R$29,90 no grupo de cupons",
  "Frete grátis para planos mensais",
  "Tênis higienizado por R$23,90 no grupo VIP",
  "Coleta express disponível em 24h",
  "+50.000 atendimentos realizados",
];

export const QUOTE_SERVICES = [
  { value: "", label: "Selecione um serviço" },
  { value: "roupas-dia-a-dia", label: "Roupas do Dia a Dia" },
  { value: "roupas-sociais", label: "Roupas Sociais e Delicadas" },
  { value: "edredons", label: "Edredons e Cobertores" },
  { value: "tapetes-cortinas", label: "Tapetes e Cortinas" },
  { value: "tenis", label: "Tênis e Calçados" },
  { value: "uniformes", label: "Uniformes Corporativos" },
  { value: "outro", label: "Outro" },
];
