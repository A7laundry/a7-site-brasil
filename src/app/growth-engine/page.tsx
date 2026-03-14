"use client";

import { useState } from "react";
import Link from "next/link";
import { AI_ENGINE_STATS, TOP_SERVICES_BY_TICKET, LEAD_CATALOG } from "@/lib/whatsapp-context";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const LANDING_PAGES = [
  // BLOCO A — Por Serviço
  { id: "LP-01", nome: "Higienização de Edredons", url: "/higienizacao-edredom", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Saúde & Higiene" },
  { id: "LP-02", nome: "Limpeza de Tênis", url: "/tenis", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Tênis" },
  { id: "LP-03", nome: "Limpeza de Tapetes", url: "/tapetes", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Tapetes" },
  { id: "LP-04", nome: "Higienização de Sofás", url: "/sofas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Casa" },
  { id: "LP-05", nome: "Higienização de Cortinas", url: "/cortinas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Saúde & Higiene" },
  { id: "LP-06", nome: "Remoção de Manchas", url: "/remocao-manchas", tipo: "SRV", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Manchas" },
  { id: "LP-07", nome: "Roupas Delicadas", url: "/roupas-delicadas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Roupas Especiais" },
  { id: "LP-08", nome: "Lavagem do Dia a Dia", url: "/lavagem-roupas", tipo: "SRV", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Dia a Dia" },
  { id: "LP-09", nome: "Plano Mensal", url: "/plano-mensal", tipo: "OFT", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Dia a Dia" },
  { id: "LP-10", nome: "Couro e Peças Especiais", url: "/couro-pecas-especiais", tipo: "SRV", prioridade: "P2", status: "Planejar", responsavel: "Dev", cluster: "Roupas Especiais" },
  // BLOCO B — Por Persona
  { id: "LP-11", nome: "Para Casais", url: "/para-casais", tipo: "PER", prioridade: "P0", status: "Planejar", responsavel: "Design", cluster: "Dia a Dia" },
  { id: "LP-12", nome: "Para Mães com Filhos", url: "/para-maes", tipo: "PER", prioridade: "P0", status: "Planejar", responsavel: "Design", cluster: "Saúde & Higiene" },
  { id: "LP-13", nome: "Para Executivos", url: "/para-executivos", tipo: "PER", prioridade: "P1", status: "Planejar", responsavel: "Design", cluster: "Roupas Especiais" },
  { id: "LP-14", nome: "Para Alérgicos", url: "/para-alergicos", tipo: "PER", prioridade: "P0", status: "Planejar", responsavel: "Design", cluster: "Saúde & Higiene" },
  { id: "LP-15", nome: "Para Hosts de Airbnb", url: "/airbnb", tipo: "PER", prioridade: "P1", status: "Planejar", responsavel: "Design", cluster: "B2B" },
  { id: "LP-16", nome: "Premium Concierge", url: "/premium", tipo: "PER", prioridade: "P2", status: "Planejar", responsavel: "Design", cluster: "Roupas Especiais" },
  { id: "LP-17", nome: "Lavanderia Sustentável", url: "/sustentavel", tipo: "PER", prioridade: "P2", status: "Planejar", responsavel: "Design", cluster: "Sustentabilidade" },
  // BLOCO C — Por Nicho B2B
  { id: "LP-18", nome: "Empresarial (Hub B2B)", url: "/empresarial", tipo: "NIC", prioridade: "P0", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-19", nome: "Para Restaurantes", url: "/restaurantes", tipo: "NIC", prioridade: "P0", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-20", nome: "Para Hotéis e Pousadas", url: "/hotelaria", tipo: "NIC", prioridade: "P0", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-21", nome: "Uniformes Corporativos", url: "/uniformes", tipo: "NIC", prioridade: "P1", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  { id: "LP-22", nome: "Para Condomínios", url: "/condominios", tipo: "NIC", prioridade: "P2", status: "Planejar", responsavel: "Comercial", cluster: "B2B" },
  // BLOCO D — Por Cidade
  { id: "LP-23", nome: "São José dos Campos", url: "/sao-jose-dos-campos", tipo: "CID", prioridade: "P0", status: "Publicado", responsavel: "Dev", cluster: "Local" },
  { id: "LP-24", nome: "Taubaté", url: "/taubate", tipo: "CID", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  { id: "LP-25", nome: "Jacareí", url: "/jacarei", tipo: "CID", prioridade: "P1", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  { id: "LP-26", nome: "Lorena e Guaratinguetá", url: "/lorena-guaratingueta", tipo: "CID", prioridade: "P2", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  { id: "LP-27", nome: "Vale do Paraíba (Hub)", url: "/vale-do-paraiba", tipo: "CID", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Local" },
  // BLOCO E — Por Decisão
  { id: "LP-28", nome: "Preços e Planos", url: "/precos", tipo: "DOR", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Decisão" },
  { id: "LP-29", nome: "Como Funciona", url: "/como-funciona", tipo: "DOR", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Decisão" },
  { id: "LP-30", nome: "Lavanderia ou em Casa?", url: "/lavanderia-ou-lavar-em-casa", tipo: "DOR", prioridade: "P0", status: "Planejar", responsavel: "Dev", cluster: "Decisão" },
];

const CLUSTERS = [
  {
    nome: "Saúde & Higiene",
    cor: "blue",
    artigos: 6,
    planejados: 2,
    lps: ["LP-01", "LP-05", "LP-12", "LP-14"],
    temas: ["Ácaros", "Edredons", "Bebê", "Cortinas", "Fungos", "Tapetes"],
  },
  {
    nome: "Manchas & Emergências",
    cor: "orange",
    artigos: 3,
    planejados: 1,
    lps: ["LP-06"],
    temas: ["Vinho tinto", "Manchas difíceis", "Óleo"],
  },
  {
    nome: "Tênis",
    cor: "purple",
    artigos: 1,
    planejados: 2,
    lps: ["LP-02"],
    temas: ["Lavar tênis", "Tênis branco", "Couro"],
  },
  {
    nome: "Roupas Especiais",
    cor: "indigo",
    artigos: 7,
    planejados: 1,
    lps: ["LP-07", "LP-10", "LP-13", "LP-16"],
    temas: ["Delicadas", "Cashmere", "Couro", "Jeans", "Vestido noiva", "Social"],
  },
  {
    nome: "Tapetes, Sofás, Casa",
    cor: "teal",
    artigos: 2,
    planejados: 2,
    lps: ["LP-03", "LP-04"],
    temas: ["Tapetes profissional", "Sofá higienização"],
  },
  {
    nome: "Sustentabilidade",
    cor: "green",
    artigos: 3,
    planejados: 0,
    lps: ["LP-17"],
    temas: ["Lavanderia sustentável", "Consumo consciente", "Produtos eco"],
  },
  {
    nome: "Organização & Lifestyle",
    cor: "pink",
    artigos: 3,
    planejados: 1,
    lps: ["LP-08", "LP-11"],
    temas: ["Guardar roupas inverno", "Guarda-roupa", "Capsule wardrobe"],
  },
  {
    nome: "B2B Empresarial",
    cor: "amber",
    artigos: 3,
    planejados: 2,
    lps: ["LP-18", "LP-19", "LP-20", "LP-21", "LP-22"],
    temas: ["Uniformes", "Restaurante", "Hotel", "Condomínio", "Airbnb"],
  },
  {
    nome: "Local / Geo-Targeting",
    cor: "cyan",
    artigos: 2,
    planejados: 3,
    lps: ["LP-23", "LP-24", "LP-25", "LP-26", "LP-27"],
    temas: ["SJC", "Taubaté", "Jacareí", "Vale do Paraíba"],
  },
];

const KANBAN = {
  Planejamento: [
    { id: "k1", tipo: "LP", nome: "LP-18 · /empresarial", prioridade: "P0" },
    { id: "k2", tipo: "LP", nome: "LP-19 · /restaurantes", prioridade: "P0" },
    { id: "k3", tipo: "LP", nome: "LP-20 · /hotelaria", prioridade: "P0" },
    { id: "k4", tipo: "Artigo", nome: "Quanto custa uma lavanderia?", prioridade: "P0" },
    { id: "k5", tipo: "Artigo", nome: "Lavanderia ou lavar em casa?", prioridade: "P0" },
    { id: "k6", tipo: "LP", nome: "LP-28 · /precos", prioridade: "P0" },
    { id: "k7", tipo: "LP", nome: "LP-06 · /remocao-manchas", prioridade: "P0" },
  ],
  "Em Produção": [
    { id: "k8", tipo: "LP", nome: "LP-01 · /higienizacao-edredom", prioridade: "P0" },
    { id: "k9", tipo: "LP", nome: "LP-02 · /tenis", prioridade: "P0" },
    { id: "k10", tipo: "Artigo", nome: "Lavanderia com coleta em SJC", prioridade: "P0" },
    { id: "k11", tipo: "Criativo", nome: "Banners LP-01 · edredom", prioridade: "P1" },
  ],
  "Em Revisão": [
    { id: "k12", tipo: "LP", nome: "LP-03 · /tapetes", prioridade: "P0" },
    { id: "k13", tipo: "Artigo", nome: "Higienização edredom preço SJC", prioridade: "P0" },
  ],
  Publicado: [
    { id: "k14", tipo: "LP", nome: "LP-23 · /sao-jose-dos-campos", prioridade: "P0" },
    { id: "k15", tipo: "Artigo", nome: "30 artigos do blog", prioridade: "P0" },
    { id: "k16", tipo: "Artigo", nome: "Alergia a ácaros e roupa de cama", prioridade: "P0" },
  ],
};

const DEPARTMENTS = [
  {
    nome: "Estratégia",
    cor: "blue",
    icone: "🎯",
    responsabilidade: "Define prioridades e roadmap",
    lps: 30,
    status: "Ativo",
    descricao: "Cérebro do Growth Engine. Define o que será feito, em que ordem e por quê. Toma decisões baseadas em dados, personas e oportunidades de mercado.",
    tarefas: [
      "Definir e priorizar as 30 LPs por P0/P1/P2",
      "Mapear clusters de conteúdo e personas-alvo",
      "Gerenciar o roadmap de 8 fases do Growth Engine",
      "Validar hipóteses de conversão por LP",
      "Decidir qual variação do site principal promover",
      "Alinhar estratégia de conteúdo com oportunidades SEO",
    ],
    entregaveis: [
      "blueprint-30-artigos.md — mapa completo de conteúdo",
      "matriz-landing-pages.md — 30 LPs priorizadas",
      "Painel Growth Engine (/growth-engine)",
      "Roadmap de fases atualizado",
    ],
    kpis: ["LPs publicadas vs. planejadas", "Posições no Google por cluster", "Receita atribuída ao funil orgânico", "Fases do roadmap concluídas"],
    ferramentas: ["Growth Engine (este painel)", "Google Search Console", "ClickUp", "Claude AI"],
  },
  {
    nome: "Conteúdo",
    cor: "green",
    icone: "✍️",
    responsabilidade: "Cria artigos e copy das LPs",
    lps: 10,
    status: "Em andamento",
    descricao: "Alimenta o topo e meio do funil. Produz conteúdo que atrai, educa e converte — dos artigos SEO ao copy de cada LP.",
    tarefas: [
      "Escrever os 30 artigos do blog por cluster e intenção",
      "Criar copy das 30 LPs (hero, benefícios, FAQ, CTA)",
      "Produzir 6 iscas digitais por persona (guias, checklists)",
      "Escrever meta-descriptions e títulos SEO otimizados",
      "Criar conteúdo para sequências de nurture no WhatsApp",
      "Manter consistência de voz da marca em todos os canais",
    ],
    entregaveis: [
      "30 artigos publicados no blog",
      "Copy completo das 30 LPs",
      "6 iscas digitais por persona",
      "Meta-descriptions e títulos SEO",
    ],
    kpis: ["Artigos publicados por mês", "Tempo médio na página (> 3min)", "Palavras-chave rankeando no Top 10", "Taxa de clique nos CTAs"],
    ferramentas: ["Notion", "Claude AI", "Google Search Console", "Semrush / Ubersuggest"],
  },
  {
    nome: "Desenvolvimento",
    cor: "indigo",
    icone: "💻",
    responsabilidade: "Implementa LPs no Next.js",
    lps: 20,
    status: "Ativo",
    descricao: "Constrói e mantém toda a infraestrutura digital. Das 30 LPs ao programmatic SEO — transforma estratégia em páginas funcionais e performáticas.",
    tarefas: [
      "Implementar as 30 LPs estratégicas em Next.js 14",
      "Manter e evoluir o painel Growth Engine",
      "Escalar o programmatic SEO (/lavanderia/[cidade] — 133+ páginas)",
      "Otimizar Core Web Vitals (LCP < 2.5s, CLS < 0.1)",
      "Implementar UTMs e tracking em todos os CTAs",
      "Integrar WhatsApp deep links com mensagens pré-preenchidas",
      "Criar e testar variações A-F do site principal",
    ],
    entregaveis: [
      "30 LPs deployadas na Vercel",
      "133 páginas programáticas /lavanderia/[cidade]",
      "Painel Growth Engine funcional",
      "6 variações do site principal (A–F)",
    ],
    kpis: ["LPs ao ar sem erros de build", "LCP < 2.5s em todas as LPs", "Uptime 99.9% na Vercel", "Score Lighthouse > 90"],
    ferramentas: ["Next.js 14", "Vercel", "GitHub", "Claude Code", "Tailwind CSS"],
  },
  {
    nome: "Design",
    cor: "pink",
    icone: "🎨",
    responsabilidade: "Cria identidade visual e criativos",
    lps: 7,
    status: "Planejado",
    descricao: "Garante que cada LP comunique visualmente o que o copy promete. Do sistema de cores às imagens hero — design que converte.",
    tarefas: [
      "Definir e manter o sistema de tokens visuais (cores, tipografia)",
      "Selecionar e editar imagens hero alinhadas à mensagem de cada LP",
      "Criar criativos para campanhas de tráfego pago (Google + Meta)",
      "Design das 6 iscas digitais por persona",
      "Criar thumbnails para os cards de LP no Growth Engine",
      "Testar variações visuais de CTA (cor, tamanho, texto)",
    ],
    entregaveis: [
      "Guidelines visuais A7 Lavanderia",
      "Biblioteca de imagens hero por LP",
      "Pack de criativos para ads por cluster",
      "Design das iscas digitais",
    ],
    kpis: ["Consistência visual entre LPs (audit mensal)", "CTR dos criativos de ads (> 2%)", "Taxa de conversão por variação visual"],
    ferramentas: ["Figma", "Canva Pro", "Adobe Lightroom", "Unsplash Pro"],
  },
  {
    nome: "Tráfego Pago",
    cor: "orange",
    icone: "📢",
    responsabilidade: "Distribui campanhas para LPs P0",
    lps: 8,
    status: "Planejado",
    descricao: "Acelera o que já converte organicamente. Direciona budget para as LPs P0 com maior potencial de retorno e segmenta por persona e intenção.",
    tarefas: [
      "Criar campanhas Google Ads (Search) para LPs P0 de alta intenção",
      "Criar campanhas Meta Ads para LPs de persona (mães, casais, executivos)",
      "Configurar remarketing segmentado por LP visitada",
      "Testar audiências lookalike com base em clientes atuais",
      "Gerenciar orçamento por CPA-alvo (< R$25)",
      "Integrar UTMs com o BI para atribuição precisa",
    ],
    entregaveis: [
      "Campanhas Google Ads ativas para LPs P0",
      "Campanhas Meta Ads por persona",
      "Remarketing configurado por LP",
      "Relatório quinzenal de CPA e ROAS",
    ],
    kpis: ["CPA < R$25 por lead", "ROAS > 4x", "CTR Search > 5%", "CTR Display > 1%"],
    ferramentas: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Looker Studio"],
  },
  {
    nome: "Comercial",
    cor: "amber",
    icone: "🤝",
    responsabilidade: "Fecha vendas via WhatsApp",
    lps: 5,
    status: "Ativo",
    descricao: "Transforma leads em clientes. Atua no fundo do funil — recebe os contatos qualificados pelas LPs e fecha pedidos e planos mensais.",
    tarefas: [
      "Responder leads no WhatsApp em menos de 5 minutos",
      "Qualificar intenção: pedido avulso vs. plano mensal",
      "Enviar orçamentos personalizados por tipo de serviço",
      "Fazer follow-up com leads que não responderam",
      "Converter avulsos em assinantes do plano mensal",
      "Coletar feedback pós-serviço para depoimentos",
    ],
    entregaveis: [
      "Taxa de conversão WhatsApp → pedido",
      "Carteira de assinantes do plano mensal",
      "Base de depoimentos reais por persona",
      "Relatório de objeções mais comuns",
    ],
    kpis: ["Tempo de 1ª resposta < 5min", "Taxa de conversão > 30%", "Assinantes plano mensal (meta: 20)", "NPS pós-atendimento > 85"],
    ferramentas: ["WhatsApp Business", "Planilha de leads", "CRM (a definir)", "Notion"],
  },
  {
    nome: "Operação",
    cor: "teal",
    icone: "⚙️",
    responsabilidade: "Executa os serviços com qualidade",
    lps: 0,
    status: "Ativo",
    descricao: "Entrega o que as LPs prometem. A experiência do cliente começa aqui — coleta no prazo, qualidade no processo e entrega sem surpresas.",
    tarefas: [
      "Executar coletas dentro do SLA prometido por LP",
      "Garantir padrão de qualidade por tipo de serviço",
      "Devolver peças no prazo acordado com o cliente",
      "Gerenciar capacidade operacional conforme volume de leads",
      "Registrar e tratar reclamações de clientes",
      "Alimentar o comercial com feedbacks para depoimentos",
    ],
    entregaveis: [
      "SLA de entrega cumprido por tipo de serviço",
      "Zero peças danificadas por mês",
      "Relatório de capacidade vs. demanda",
      "Base de feedbacks por serviço",
    ],
    kpis: ["On-time delivery > 95%", "Reclamações < 1% do volume", "NPS operacional > 80", "Capacidade utilizada vs. disponível"],
    ferramentas: ["Agenda de coletas", "Sistema interno", "WhatsApp", "Planilha de controle"],
  },
  {
    nome: "BI / Dados",
    cor: "purple",
    icone: "📊",
    responsabilidade: "Analisa performance e métricas",
    lps: 0,
    status: "Planejado",
    descricao: "Transforma dados em decisões. Monitora cada LP do funil, identifica onde há vazamento e direciona o time para o que realmente converte.",
    tarefas: [
      "Configurar GA4 com eventos customizados em todas as LPs",
      "Implementar UTMs padronizados por canal e LP",
      "Criar dashboards de conversão por LP e cluster",
      "Analisar scroll depth e heatmaps por LP",
      "Coordenar A/B test das variações do site (A–F)",
      "Produzir relatório mensal de performance do funil",
    ],
    entregaveis: [
      "Dashboard de conversão por LP (Looker Studio)",
      "Relatório mensal de performance",
      "Análise de A/B test com variação vencedora",
      "Mapa de calor das LPs principais",
    ],
    kpis: ["Cobertura de tracking (100% das LPs)", "Dados de conversão por LP atualizados", "Insights acionáveis por mês", "Decisão de variação vencedora a cada 30 dias"],
    ferramentas: ["Google Analytics 4", "Hotjar", "Looker Studio", "Google Search Console", "Google Tag Manager"],
  },
  {
    nome: "IA",
    cor: "violet",
    icone: "🤖",
    responsabilidade: "Qualifica leads e automatiza respostas",
    lps: 0,
    status: "Planejado",
    descricao: "Escala o comercial sem escalar a equipe. Qualifica leads 24/7, responde dúvidas frequentes e nutre quem não converteu na primeira visita.",
    tarefas: [
      "Implementar bot de qualificação no WhatsApp Business API",
      "Automatizar respostas para as 20 perguntas mais frequentes",
      "Criar sequência de nurture pós-cadastro (5 mensagens por persona)",
      "Sugerir LP relevante com base no comportamento do usuário",
      "Integrar dados do bot com o CRM comercial",
      "Treinar modelo com histórico de conversas convertidas",
    ],
    entregaveis: [
      "Bot de qualificação WhatsApp ativo",
      "Sequências de nurture por persona (9 clusters)",
      "Relatório de leads qualificados automaticamente",
      "Integração bot → CRM funcionando",
    ],
    kpis: ["% leads qualificados sem intervenção humana (meta: 40%)", "Tempo de resposta bot < 30s", "Taxa de abertura nurture > 60%", "Leads que retornam após nurture"],
    ferramentas: ["WhatsApp Business API", "n8n / Make", "Claude API", "Supabase (base de leads)"],
  },
];

const ROADMAP = [
  { fase: 1, nome: "Mapa de Conteúdo", status: "Concluído", descricao: "30 artigos classificados por cluster, persona, intenção e funil", entregavel: "BLOCO 1 · mapa-estrategico-conteudo.md", cor: "green" },
  { fase: 2, nome: "Matriz de LPs", status: "Concluído", descricao: "30 landing pages mapeadas por tipo, persona, URL e estratégia", entregavel: "BLOCO 2 · matriz-landing-pages.md", cor: "green" },
  { fase: 3, nome: "Painel Operacional", status: "Em andamento", descricao: "Dashboard central para gerenciar SEO, conteúdo e LPs", entregavel: "BLOCO 3 · /growth-engine", cor: "blue" },
  { fase: 4, nome: "Produção de LPs P0", status: "Próximo", descricao: "Implementar as 15 LPs de prioridade máxima no Next.js", entregavel: "15 páginas publicadas em a7lavanderia.com", cor: "gray" },
  { fase: 5, nome: "SEO e Clusters", status: "Futuro", descricao: "Interlinking, structured data, GEO otimization", entregavel: "Rankings + aparição em AI Search", cor: "gray" },
  { fase: 6, nome: "Programmatic SEO", status: "Futuro", descricao: "1000+ páginas geradas: /lavanderia-[cidade], /lavar-[tipo]", entregavel: "BLOCO 4 · SEO Engine automatizado", cor: "gray" },
  { fase: 7, nome: "Campanhas Pagas", status: "Futuro", descricao: "Google Ads + Meta Ads apontando para LPs específicas", entregavel: "Campanhas segmentadas por LP", cor: "gray" },
  { fase: 8, nome: "Otimização Contínua", status: "Futuro", descricao: "A/B test, CRO, análise de funil, escala", entregavel: "Dashboard de performance + IA de qualificação", cor: "gray" },
];

const FUNIL = [
  { etapa: "SEO / Blog", icone: "📝", metrica: "Visitas orgânicas", valor: "—", meta: "10.000/mês", cor: "blue" },
  { etapa: "Landing Pages", icone: "🏠", metrica: "Sessões nas LPs", valor: "—", meta: "2.000/mês", cor: "indigo" },
  { etapa: "WhatsApp", icone: "💬", metrica: "Conversas iniciadas", valor: "—", meta: "200/mês", cor: "green" },
  { etapa: "Orçamento", icone: "📋", metrica: "Orçamentos enviados", valor: "—", meta: "100/mês", cor: "teal" },
  { etapa: "Venda", icone: "✅", metrica: "Pedidos fechados", valor: "—", meta: "60/mês", cor: "emerald" },
  { etapa: "Plano Mensal", icone: "🔄", metrica: "Assinantes ativos", valor: "—", meta: "20 ativos", cor: "purple" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const TIPO_LABELS: Record<string, string> = {
  SRV: "Serviço", PER: "Persona", NIC: "Nicho B2B", CID: "Cidade", DOR: "Dor", OFT: "Oferta",
};

const STATUS_COLORS: Record<string, string> = {
  Publicado: "bg-emerald-100 text-emerald-700",
  "Em Produção": "bg-blue-100 text-blue-700",
  "Em Revisão": "bg-amber-100 text-amber-700",
  Planejar: "bg-gray-100 text-gray-500",
};

const PRIORIDADE_COLORS: Record<string, string> = {
  P0: "bg-red-100 text-red-700 border-red-200",
  P1: "bg-orange-100 text-orange-700 border-orange-200",
  P2: "bg-yellow-100 text-yellow-700 border-yellow-200",
  P3: "bg-gray-100 text-gray-500 border-gray-200",
};

const TIPO_COLORS: Record<string, string> = {
  SRV: "bg-blue-100 text-blue-700",
  PER: "bg-purple-100 text-purple-700",
  NIC: "bg-amber-100 text-amber-700",
  CID: "bg-cyan-100 text-cyan-700",
  DOR: "bg-rose-100 text-rose-700",
  OFT: "bg-green-100 text-green-700",
};

const CLUSTER_COLORS: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50",
  orange: "border-orange-200 bg-orange-50",
  purple: "border-purple-200 bg-purple-50",
  indigo: "border-indigo-200 bg-indigo-50",
  teal: "border-teal-200 bg-teal-50",
  green: "border-green-200 bg-green-50",
  pink: "border-pink-200 bg-pink-50",
  amber: "border-amber-200 bg-amber-50",
  cyan: "border-cyan-200 bg-cyan-50",
};

const CLUSTER_BADGE: Record<string, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  indigo: "bg-indigo-500",
  teal: "bg-teal-500",
  green: "bg-green-500",
  pink: "bg-pink-500",
  amber: "bg-amber-500",
  cyan: "bg-cyan-500",
};

const KANBAN_TIPO_COLORS: Record<string, string> = {
  LP: "bg-blue-100 text-blue-700",
  Artigo: "bg-green-100 text-green-700",
  Criativo: "bg-purple-100 text-purple-700",
};

const ROADMAP_RING: Record<string, string> = {
  Concluído: "ring-emerald-500 bg-emerald-500 text-white",
  "Em andamento": "ring-blue-500 bg-blue-500 text-white",
  Próximo: "ring-amber-400 bg-amber-400 text-white",
  Futuro: "ring-gray-300 bg-white text-gray-400",
};

// ─── NAV ITEMS ────────────────────────────────────────────────────────────────

const NAV = [
  { id: "overview", label: "Visão Geral", icone: "◉" },
  { id: "site", label: "Site Principal", icone: "🌐" },
  { id: "artigos", label: "Artigos & Funil", icone: "📝" },
  { id: "lps", label: "Landing Pages", icone: "⬡" },
  { id: "clusters", label: "Clusters SEO", icone: "◈" },
  { id: "pipeline", label: "Pipeline", icone: "▤" },
  { id: "funil", label: "Funil", icone: "▽" },
  { id: "ai-sales", label: "AI Sales Engine", icone: "🤖" },
  { id: "departamentos", label: "Departamentos", icone: "⊞" },
  { id: "roadmap", label: "Roadmap", icone: "→" },
];

// Ferramentas — aparecem no nav E no overview
const EXTERNAL_LINKS = [
  { href: "/growth-engine/revenue", label: "Revenue Intelligence", icone: "💰", desc: "SEO · Leads · Receita · MRR · Funil" },
  { href: "/growth-engine/content-engine", label: "AI Content Engine", icone: "🧠", desc: "Perguntas → Gaps → Briefs → SEO" },
  { href: "/sales-assistant", label: "Sales Assistant", icone: "💬", desc: "WhatsApp · Lead classifier · Upsell" },
];

// ─── ARTIGOS — 30 publicados com conexão ao funil e LPs ──────────────────────
const ARTIGOS = [
  // Cluster: Saúde & Higiene
  { slug: "alergia-acaros-roupa-cama", titulo: "Alergia a Ácaros? O Que Sua Roupa de Cama Tem a Ver", cluster: "Saúde & Higiene", funil: "Topo", lpId: "LP-14", lpUrl: "/para-alergicos", cta: "Agendar higienização edredom" },
  { slug: "higienizacao-edredom-importancia", titulo: "Por Que Higienizar o Edredom Vai Além de Lavar", cluster: "Saúde & Higiene", funil: "Meio", lpId: "LP-01", lpUrl: "/higienizacao-edredom", cta: "Agendar coleta" },
  { slug: "fungos-roupa-como-eliminar", titulo: "Fungos nas Roupas: Como Identificar e Eliminar", cluster: "Saúde & Higiene", funil: "Fundo", lpId: "LP-08", lpUrl: "/lavagem-roupas", cta: "Enviar peça para análise" },
  { slug: "higiene-roupas-bebe", titulo: "Roupas de Bebê: Por Que a Higienização Precisa Ser Diferente", cluster: "Saúde & Higiene", funil: "Meio", lpId: "LP-12", lpUrl: "/para-maes", cta: "Agendar coleta" },
  { slug: "bacterias-tapetes-higienizacao", titulo: "Tapetes São os Maiores Reservatórios de Bactérias da Casa", cluster: "Saúde & Higiene", funil: "Topo", lpId: "LP-03", lpUrl: "/tapetes", cta: "Agendar limpeza de tapete" },
  { slug: "higienizacao-cortinas-saude", titulo: "Cortinas e Saúde: O Que Você Não Vê Pode Te Fazer Mal", cluster: "Saúde & Higiene", funil: "Topo", lpId: "LP-05", lpUrl: "/cortinas", cta: "Agendar limpeza cortinas" },
  // Cluster: Manchas & Emergências
  { slug: "tirar-mancha-vinho-tinto", titulo: "Como Tirar Mancha de Vinho Tinto: Guia Definitivo", cluster: "Manchas", funil: "Fundo", lpId: "LP-06", lpUrl: "/remocao-manchas", cta: "Mandar foto no WhatsApp" },
  { slug: "tirar-manchas-dificeis", titulo: "Manchas Difíceis: O Que Fazer Quando Nada Funciona", cluster: "Manchas", funil: "Fundo", lpId: "LP-06", lpUrl: "/remocao-manchas", cta: "Enviar peça para análise" },
  { slug: "tirar-mancha-oleo-roupa", titulo: "Como Tirar Mancha de Óleo da Roupa: Técnicas que Funcionam", cluster: "Manchas", funil: "Fundo", lpId: "LP-06", lpUrl: "/remocao-manchas", cta: "Enviar para análise" },
  // Cluster: Tênis
  { slug: "lavar-tenis-corretamente", titulo: "Como Lavar Tênis Corretamente sem Estragar", cluster: "Tênis", funil: "Meio", lpId: "LP-02", lpUrl: "/tenis", cta: "Agendar limpeza de tênis" },
  // Cluster: Roupas Especiais
  { slug: "como-cuidar-roupas-delicadas", titulo: "Como Cuidar de Roupas Delicadas sem Estragar", cluster: "Roupas Especiais", funil: "Topo", lpId: "LP-07", lpUrl: "/roupas-delicadas", cta: "Agendar coleta" },
  { slug: "cuidados-cashmere-la", titulo: "Cashmere e Lã: Guia Completo de Cuidados", cluster: "Roupas Especiais", funil: "Topo", lpId: "LP-10", lpUrl: "/couro-pecas-especiais", cta: "Agendar coleta peças especiais" },
  { slug: "como-lavar-couro", titulo: "Como Lavar Couro: Do Tênis à Jaqueta", cluster: "Roupas Especiais", funil: "Meio", lpId: "LP-10", lpUrl: "/couro-pecas-especiais", cta: "Enviar peça para avaliação" },
  { slug: "como-lavar-jeans", titulo: "Como Lavar Jeans sem Desbotar ou Encolher", cluster: "Roupas Especiais", funil: "Topo", lpId: "LP-07", lpUrl: "/roupas-delicadas", cta: "Agendar coleta" },
  { slug: "conservar-vestido-noiva", titulo: "Como Conservar o Vestido de Noiva Após o Casamento", cluster: "Roupas Especiais", funil: "Meio", lpId: "LP-10", lpUrl: "/couro-pecas-especiais", cta: "Solicitar orçamento" },
  { slug: "temperatura-lavagem-tecidos", titulo: "Temperatura de Lavagem: O Que Cada Tecido Precisa", cluster: "Roupas Especiais", funil: "Topo", lpId: "LP-07", lpUrl: "/roupas-delicadas", cta: "Agendar coleta" },
  { slug: "lavar-mao-vs-maquina", titulo: "Lavar à Mão vs Máquina: Quando Cada Um Vale", cluster: "Roupas Especiais", funil: "Meio", lpId: "LP-08", lpUrl: "/lavagem-roupas", cta: "Agendar coleta" },
  // Cluster: Tapetes, Sofás, Casa
  { slug: "limpeza-tapetes-profissional", titulo: "Limpeza de Tapetes Profissional: Quando e Por Quê", cluster: "Tapetes & Casa", funil: "Meio", lpId: "LP-03", lpUrl: "/tapetes", cta: "Agendar limpeza tapete" },
  { slug: "higienizar-sofa-casa", titulo: "Como Higienizar Sofá em Casa (e Quando Chamar Profissional)", cluster: "Tapetes & Casa", funil: "Fundo", lpId: "LP-04", lpUrl: "/sofas", cta: "Agendar higienização sofá" },
  // Cluster: Sustentabilidade
  { slug: "lavanderia-sustentavel", titulo: "Lavanderia Sustentável: Como Escolher com Consciência", cluster: "Sustentabilidade", funil: "Topo", lpId: "LP-17", lpUrl: "/sustentavel", cta: "Conheça a A7 Sustentável" },
  { slug: "consumo-consciente-roupas", titulo: "Consumo Consciente de Roupas: Guia Prático", cluster: "Sustentabilidade", funil: "Topo", lpId: "LP-17", lpUrl: "/sustentavel", cta: "Conheça nosso processo eco" },
  { slug: "produtos-ecologicos-lavar-roupa", titulo: "Produtos Ecológicos para Lavar Roupa: Vale a Pena?", cluster: "Sustentabilidade", funil: "Meio", lpId: "LP-17", lpUrl: "/sustentavel", cta: "Falar sobre opções eco" },
  // Cluster: Organização & Lifestyle
  { slug: "organizar-guarda-roupa", titulo: "Como Organizar o Guarda-Roupa de Vez", cluster: "Organização", funil: "Topo", lpId: "LP-08", lpUrl: "/lavagem-roupas", cta: "Agendar coleta" },
  { slug: "guardar-roupas-inverno", titulo: "Como Guardar Roupas de Inverno sem Estragar", cluster: "Organização", funil: "Topo", lpId: "LP-08", lpUrl: "/lavagem-roupas", cta: "Agendar lavagem antes de guardar" },
  { slug: "capsule-wardrobe-guia", titulo: "Guia de Capsule Wardrobe: Menos é Mais", cluster: "Organização", funil: "Topo", lpId: "LP-13", lpUrl: "/para-executivos", cta: "Agendar coleta" },
  // Cluster: B2B
  { slug: "uniformes-corporativos-higienizacao", titulo: "Higienização de Uniformes Corporativos: Guia para Empresas", cluster: "B2B", funil: "Fundo", lpId: "LP-21", lpUrl: "/uniformes", cta: "Solicitar orçamento B2B" },
  { slug: "enxoval-restaurante-gestao", titulo: "Gestão de Enxoval de Restaurante: Como Terceirizar", cluster: "B2B", funil: "Fundo", lpId: "LP-19", lpUrl: "/restaurantes", cta: "Falar com comercial" },
  { slug: "lavanderia-hoteis-terceirizacao", titulo: "Lavanderia para Hotéis: Como Terceirizar com Qualidade", cluster: "B2B", funil: "Fundo", lpId: "LP-20", lpUrl: "/hotelaria", cta: "Solicitar orçamento hotel" },
  // Cluster: Local / Geo
  { slug: "lavanderia-sao-jose-dos-campos", titulo: "Lavanderia em São José dos Campos: Guia Completo", cluster: "Local", funil: "Fundo", lpId: "LP-23", lpUrl: "/sao-jose-dos-campos", cta: "Agendar coleta em SJC" },
  { slug: "lavanderias-vale-do-paraiba", titulo: "Melhores Lavanderias do Vale do Paraíba", cluster: "Local", funil: "Fundo", lpId: "LP-27", lpUrl: "/vale-do-paraiba", cta: "Ver unidades próximas" },
];

// ─── LPs JÁ CONSTRUÍDAS E ATIVAS ─────────────────────────────────────────────
// Atualizar sempre que uma nova LP for ao ar
const ACTIVE_LP_URLS = new Set([
  "/sao-jose-dos-campos",     // LP-23 — original
  "/higienizacao-edredom",    // LP-01 — Batch 1
  "/tenis",                   // LP-02 — Batch 1
  "/remocao-manchas",         // LP-06 — Batch 1
  "/para-alergicos",          // LP-14 — Batch 1
  "/precos",                  // LP-28 — Batch 1
  "/para-maes",               // LP-12 — Batch 2
  "/tapetes",                 // LP-03 — Batch 2
  "/empresarial",             // LP-18 — Batch 2
  "/como-funciona",           // LP-29 — Batch 2
  "/lavanderia-ou-lavar-em-casa", // LP-30 — Batch 2
  "/sofas",                   // LP-04 — Batch 3
  "/roupas-delicadas",        // LP-07 — Batch 3
  "/restaurantes",            // LP-19 — Batch 3
  "/para-casais",             // LP-11 — Batch 3
  "/vale-do-paraiba",         // LP-27 — Batch 3
  "/cortinas",                // LP-05 — Batch 4
  "/lavagem-roupas",          // LP-08 — Batch 4
  "/plano-mensal",            // LP-09 — Batch 4
  "/couro-pecas-especiais",   // LP-10 — Batch 4
  "/para-executivos",         // LP-13 — Batch 4
  "/airbnb",                  // LP-15 — Batch 5
  "/premium",                 // LP-16 — Batch 5
  "/sustentavel",             // LP-17 — Batch 5
  "/hotelaria",               // LP-20 — Batch 5
  "/uniformes",               // LP-21 — Batch 5
  "/condominios",             // LP-22 — Batch 6
  "/taubate",                 // LP-24 — Batch 6
  "/jacarei",                 // LP-25 — Batch 6
  "/lorena-guaratingueta",    // LP-26 — Batch 6
]);

// ─── ARTIGOS SECTION COMPONENT ────────────────────────────────────────────────

const FUNIL_COLORS: Record<string, string> = {
  Topo: "bg-blue-500/20 text-blue-300",
  Meio: "bg-amber-500/20 text-amber-300",
  Fundo: "bg-emerald-500/20 text-emerald-300",
};

const CLUSTER_TAG_COLORS: Record<string, string> = {
  "Saúde & Higiene": "bg-cyan-500/15 text-cyan-300",
  "Manchas": "bg-orange-500/15 text-orange-300",
  "Tênis": "bg-purple-500/15 text-purple-300",
  "Roupas Especiais": "bg-indigo-500/15 text-indigo-300",
  "Tapetes & Casa": "bg-teal-500/15 text-teal-300",
  "Sustentabilidade": "bg-green-500/15 text-green-300",
  "Organização": "bg-pink-500/15 text-pink-300",
  "B2B": "bg-amber-500/15 text-amber-300",
  "Local": "bg-rose-500/15 text-rose-300",
};

// ─── ESTRATÉGIA POR ARTIGO ─────────────────────────────────────────────────
const ARTICLE_STRATEGY: Record<string, {
  objetivo: string;
  jornada: string[];
  iscas: string[];
  canais: { canal: string; formato: string; icon: string }[];
  proxPassos: string[];
}> = {
  "alergia-acaros-roupa-cama": {
    objetivo: "Conscientizar sobre ácaros como causa de alergia e capturar leads qualificados de alérgicos",
    jornada: ["Pessoa pesquisa sintomas de rinite matinal", "Encontra o artigo no Google", "Aprende que a cama é a causa", "CTA → /para-alergicos para conversão"],
    iscas: ["PDF gratuito: 'Checklist Anti-Ácaro do Quarto'", "Quiz: 'Sua cama está te deixando doente?'", "Mini-vídeo: 'Como identificar ácaros em casa'"],
    canais: [
      { canal: "SEO Google", formato: "Artigo de blog (já publicado)", icon: "🔍" },
      { canal: "Pinterest", formato: "Infográfico 'Ciclo de vida do ácaro'", icon: "📌" },
      { canal: "Instagram Reels", formato: "Vídeo '10M de ácaros no seu edredom'", icon: "📱" },
      { canal: "YouTube Shorts", formato: "Time-lapse limpeza de edredom", icon: "▶️" },
      { canal: "WhatsApp Status", formato: "Curiosidade + link para artigo", icon: "💬" },
    ],
    proxPassos: ["Criar infográfico do ciclo do ácaro", "Gravar Reel de prova social (antes/depois edredom)", "Adicionar pop-up no artigo com oferta anti-ácaro"],
  },
  "tirar-mancha-vinho-tinto": {
    objetivo: "Capturar demanda de fundo de funil — pessoa com emergência de mancha precisa agir agora",
    jornada: ["Mancha acontece → pesquisa imediata no Google", "Encontra o guia", "Tenta solução caseira / percebe que precisa de ajuda", "CTA urgente → WhatsApp com foto da mancha"],
    iscas: ["'Mande foto agora — avaliamos grátis'", "Guia rápido para imprimir: 'O que fazer nos primeiros 60 segundos'", "Sticker WhatsApp: 'Socorremos manchas'"],
    canais: [
      { canal: "SEO Google", formato: "Artigo urgência (já publicado)", icon: "🔍" },
      { canal: "TikTok", formato: "Vídeo 'Tiramos mancha de vinho impossível'", icon: "🎵" },
      { canal: "Instagram Stories", formato: "Enquete: conseguiu tirar?", icon: "📱" },
      { canal: "Google Ads", formato: "Anúncio 'Remoção de manchas urgente'", icon: "💰" },
    ],
    proxPassos: ["Criar campanha Google Ads para 'como tirar mancha vinho'", "Vídeo antes/depois para TikTok", "Adicionar urgência no artigo: banner 'Mande foto agora'"],
  },
  "lavar-tenis-corretamente": {
    objetivo: "Educar sobre cuidados com tênis e converter para serviço de limpeza profissional",
    jornada: ["Comprou tênis caro → pesquisa como cuidar", "Lê o guia completo", "Percebe risco de estragar na lavagem doméstica", "CTA → /tenis para limpeza profissional"],
    iscas: ["'Guia de materiais: lona, couro, nobuck, mesh'", "Calculadora de custo: 'Vale lavar ou comprar novo?'", "Sorteio mensal: 'Limpeza grátis de 1 par'"],
    canais: [
      { canal: "SEO Google", formato: "Artigo informacional (já publicado)", icon: "🔍" },
      { canal: "Instagram", formato: "Carrossel 'Antes e depois de 5 tênis famosos'", icon: "📱" },
      { canal: "TikTok", formato: "Dueto com vídeo de limpeza caseira errada", icon: "🎵" },
      { canal: "YouTube", formato: "Tutorial 'Como NÃO lavar seu Nike'", icon: "▶️" },
      { canal: "Pinterest", formato: "Pins com fotos de tênis limpos por material", icon: "📌" },
    ],
    proxPassos: ["Criar carrossel Instagram com antes/depois", "Parceria com sneaker shops locais", "Campanha 'Tênis para formatura' em novembro"],
  },
  "uniformes-corporativos-higienizacao": {
    objetivo: "Capturar leads B2B de alto valor — empresas com demanda recorrente de uniformes",
    jornada: ["RH pesquisa solução para uniformes corporativos", "Lê o guia de gestão de enxoval", "Reconhece que terceirizar é mais eficiente", "CTA → /uniformes para falar com comercial"],
    iscas: ["Proposta comercial: 'Orçamento para empresa em 24h'", "Case study: 'Como reduzimos custo de uniformes em 30%'", "Template gratuito: 'Planilha de controle de enxoval corporativo'"],
    canais: [
      { canal: "SEO Google", formato: "Artigo B2B (já publicado)", icon: "🔍" },
      { canal: "LinkedIn", formato: "Artigo 'Como gestores de RH estão terceirizando enxoval'", icon: "💼" },
      { canal: "LinkedIn Ads", formato: "Anúncio segmentado para RH e gestão", icon: "💰" },
      { canal: "Email outreach", formato: "Prospecção ativa para empresas locais", icon: "📧" },
    ],
    proxPassos: ["Criar LinkedIn Company Page A7", "Publicar case study de cliente B2B", "Iniciar prospecção ativa em SJC"],
  },
  "lavanderia-sao-jose-dos-campos": {
    objetivo: "Capturar demanda local transacional — pessoa em SJC procurando lavanderia",
    jornada: ["Pesquisa 'lavanderia em SJC' ou 'lavanderia com coleta'", "Encontra artigo + LP cidade", "Compara com opções locais", "Agenda pelo WhatsApp"],
    iscas: ["Mapa interativo de cobertura por bairro em SJC", "Oferta geo-localizada: '20% OFF para moradores do [bairro]'", "Parceria com condomínios de SJC"],
    canais: [
      { canal: "SEO Local Google", formato: "Artigo + Google Business Profile", icon: "🔍" },
      { canal: "Google Maps", formato: "Perfil A7 otimizado + fotos + avaliações", icon: "🗺️" },
      { canal: "Facebook Ads", formato: "Segmentação por bairro em SJC", icon: "📘" },
      { canal: "Grupos Facebook SJC", formato: "Posts orgânicos com dica + CTA", icon: "👥" },
      { canal: "Nextdoor / Grupos WhatsApp", formato: "Indicações por moradores", icon: "🏘️" },
    ],
    proxPassos: ["Otimizar Google Business Profile com fotos reais", "Campanha de avaliações Google (solicitar para clientes SJC)", "Facebook Ads geo-segmentado por bairro"],
  },
};

const DEFAULT_STRATEGY = {
  objetivo: "Educar o leitor sobre o tema e converter para o serviço relacionado via LP de destino",
  jornada: ["Pesquisa informacional no Google", "Consome o conteúdo completo", "Reconhece o problema ou necessidade", "CTA direciona para LP ou WhatsApp"],
  iscas: ["Oferta de primeira coleta com desconto", "Conteúdo complementar: checklist ou guia", "Prova social: depoimento de cliente com mesmo problema"],
  canais: [
    { canal: "SEO Google", formato: "Artigo de blog (publicado)", icon: "🔍" },
    { canal: "Instagram", formato: "Carrossel com os principais pontos do artigo", icon: "📱" },
    { canal: "WhatsApp", formato: "Compartilhamento orgânico via clientes", icon: "💬" },
  ],
  proxPassos: ["Criar conteúdo visual derivado do artigo", "Adicionar CTA contextual no meio do artigo", "Monitorar posição Google e otimizar H1/meta"],
};

function ArticleDrawer({ artigo, onClose }: { artigo: typeof ARTIGOS[0]; onClose: () => void }) {
  const strategy = ARTICLE_STRATEGY[artigo.slug] ?? DEFAULT_STRATEGY;
  const funilSteps = [
    { stage: "Topo", label: "Conscientização", active: artigo.funil === "Topo" },
    { stage: "Meio", label: "Consideração", active: artigo.funil === "Meio" },
    { stage: "Fundo", label: "Decisão", active: artigo.funil === "Fundo" },
  ];

  return (
    <div className="mt-px border-t border-white/[0.08] bg-white/[0.03] animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="p-5 space-y-5">
        {/* Header strip */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Estratégia do artigo</p>
            <p className="text-white font-semibold text-sm leading-tight">{artigo.titulo}</p>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-400 flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Objetivo */}
          <div className="bg-white/[0.04] rounded-lg p-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">🎯 Objetivo</p>
            <p className="text-sm text-gray-300 leading-relaxed">{strategy.objetivo}</p>
          </div>

          {/* Funil visual */}
          <div className="bg-white/[0.04] rounded-lg p-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">🔻 Posição no funil</p>
            <div className="flex items-stretch gap-1 h-16">
              {funilSteps.map((step, i) => (
                <div key={step.stage} className={`flex-1 flex flex-col items-center justify-center text-center rounded transition-all ${step.active
                  ? step.stage === "Topo" ? "bg-blue-500 text-white"
                    : step.stage === "Meio" ? "bg-amber-500 text-white"
                    : "bg-emerald-500 text-white"
                  : "bg-white/[0.04] text-gray-600"}`}
                  style={{ clipPath: i < 2 ? "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)" : undefined }}
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${step.active ? "text-white" : "text-gray-600"}`}>{step.stage}</span>
                  <span className={`text-[8px] ${step.active ? "text-white/80" : "text-gray-700"}`}>{step.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1">
              {strategy.jornada.map((step, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span className="text-gray-600 flex-shrink-0">{i + 1}.</span>
                  <span className="text-gray-400 leading-tight">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LP destino */}
          <div className="bg-white/[0.04] rounded-lg p-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">🔗 LP de destino</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono bg-white/[0.06] text-gray-400 px-2 py-0.5 rounded">{artigo.lpId}</span>
                <span className="text-blue-400 text-xs font-mono">{artigo.lpUrl}</span>
                {ACTIVE_LP_URLS.has(artigo.lpUrl) ? (
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    LP ATIVA
                  </span>
                ) : (
                  <span className="text-[9px] text-gray-700 border border-white/[0.06] px-2 py-0.5 rounded-full">em construção</span>
                )}
              </div>
              <p className="text-xs text-gray-500 italic">CTA: &ldquo;{artigo.cta}&rdquo;</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Link href={`/blog/${artigo.slug}`} target="_blank"
                  className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded hover:bg-blue-500/20 transition-colors">
                  Ver artigo ↗
                </Link>
                <Link href={artigo.lpUrl} target="_blank"
                  className={`text-[10px] font-bold px-3 py-1.5 rounded transition-colors ${ACTIVE_LP_URLS.has(artigo.lpUrl) ? "text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20" : "text-violet-400 bg-violet-500/10 hover:bg-violet-500/20"}`}>
                  {ACTIVE_LP_URLS.has(artigo.lpUrl) ? "Abrir LP ↗" : "Ver rascunho ↗"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Iscas */}
          <div className="bg-white/[0.04] rounded-lg p-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">🪝 Ideias de iscas</p>
            <ul className="space-y-2">
              {strategy.iscas.map((isca, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5">→</span>
                  <span>{isca}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Canais */}
          <div className="bg-white/[0.04] rounded-lg p-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">📡 Canais de aquisição</p>
            <div className="space-y-2">
              {strategy.canais.map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-base leading-none flex-shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <span className="text-xs font-semibold text-gray-300">{c.canal}</span>
                    <span className="text-[11px] text-gray-600 ml-1.5">{c.formato}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Próximos passos */}
        <div className="bg-white/[0.04] rounded-lg p-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">⚡ Próximos passos</p>
          <div className="flex flex-wrap gap-2">
            {strategy.proxPassos.map((passo, i) => (
              <span key={i} className="text-[11px] bg-white/[0.05] border border-white/[0.08] text-gray-400 px-3 py-1.5 rounded-full">
                {passo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtigosSection() {
  const [clusterFilter, setClusterFilter] = useState("Todos");
  const [funilFilter, setFunilFilter] = useState("Todos");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const clusters = ["Todos", ...Array.from(new Set(ARTIGOS.map((a) => a.cluster)))];

  const filtered = ARTIGOS.filter((a) => {
    const clOk = clusterFilter === "Todos" || a.cluster === clusterFilter;
    const fOk = funilFilter === "Todos" || a.funil === funilFilter;
    return clOk && fOk;
  });

  const funiCounts = {
    Topo: ARTIGOS.filter((a) => a.funil === "Topo").length,
    Meio: ARTIGOS.filter((a) => a.funil === "Meio").length,
    Fundo: ARTIGOS.filter((a) => a.funil === "Fundo").length,
  };

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-white">30</p>
          <p className="text-xs text-gray-500 mt-0.5">Artigos publicados</p>
        </div>
        {Object.entries(funiCounts).map(([funil, count]) => (
          <div key={funil} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
            <p className={`text-2xl font-bold ${funil === "Topo" ? "text-blue-400" : funil === "Meio" ? "text-amber-400" : "text-emerald-400"}`}>{count}</p>
            <p className="text-xs text-gray-500 mt-0.5">Funil — {funil}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap items-center">
        <div className="flex gap-1 flex-wrap">
          {clusters.map((c) => (
            <button key={c} onClick={() => setClusterFilter(c)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${clusterFilter === c ? "bg-blue-600 text-white" : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.08]"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-1 ml-auto">
          {["Todos", "Topo", "Meio", "Fundo"].map((f) => (
            <button key={f} onClick={() => setFunilFilter(f)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${funilFilter === f ? "bg-violet-600 text-white" : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.08]"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-gray-600">Clique em um artigo para ver a estratégia completa, iscas e canais de aquisição.</p>

      {/* Article list with expandable drawer */}
      <div className="bg-white/[0.02] border border-white/[0.07] rounded-xl overflow-hidden">
        {filtered.map((artigo, idx) => (
          <div key={artigo.slug}>
            {/* Row */}
            <button
              onClick={() => setExpandedSlug(expandedSlug === artigo.slug ? null : artigo.slug)}
              className={`w-full text-left border-b border-white/[0.04] transition-colors ${expandedSlug === artigo.slug ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                {/* Expand icon */}
                <svg
                  className={`w-3 h-3 text-gray-600 flex-shrink-0 transition-transform ${expandedSlug === artigo.slug ? "rotate-90 text-blue-400" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>

                {/* Número */}
                <span className="text-[10px] font-mono text-gray-700 flex-shrink-0 w-5">{String(idx + 1).padStart(2, "0")}</span>

                {/* Título */}
                <p className="text-sm text-gray-200 leading-tight flex-1 text-left">{artigo.titulo}</p>

                {/* Cluster */}
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium hidden md:block flex-shrink-0 ${CLUSTER_TAG_COLORS[artigo.cluster] ?? "bg-gray-700 text-gray-400"}`}>
                  {artigo.cluster}
                </span>

                {/* Funil */}
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${FUNIL_COLORS[artigo.funil]}`}>
                  {artigo.funil}
                </span>

                {/* LP ativa indicator */}
                {ACTIVE_LP_URLS.has(artigo.lpUrl) ? (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-full flex-shrink-0">
                    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    LP
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-gray-700 hidden lg:block flex-shrink-0">{artigo.lpId}</span>
                )}
              </div>
            </button>

            {/* Drawer */}
            {expandedSlug === artigo.slug && (
              <ArticleDrawer artigo={artigo} onClose={() => setExpandedSlug(null)} />
            )}
          </div>
        ))}
        <div className="px-4 py-3 border-t border-white/[0.04]">
          <p className="text-xs text-gray-600">{filtered.length} artigos · {filtered.filter((a) => a.funil === "Fundo").length} fundo de funil · clique para expandir estratégia</p>
        </div>
      </div>

      {/* Funil visual */}
      <div className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Distribuição dos Artigos no Funil</h3>
        <div className="space-y-3">
          {[
            { label: "Topo — Conscientização", count: funiCounts.Topo, desc: "Educa, cria necessidade, atrai tráfego", color: "bg-blue-500" },
            { label: "Meio — Consideração", count: funiCounts.Meio, desc: "Compara, informa, qualifica o lead", color: "bg-amber-500" },
            { label: "Fundo — Decisão", count: funiCounts.Fundo, desc: "Urgência + CTA direto para WhatsApp/LP", color: "bg-emerald-500" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div>
                  <span className="text-gray-300 font-medium">{item.label}</span>
                  <span className="text-gray-600 ml-2">{item.desc}</span>
                </div>
                <span className="text-gray-300 font-bold">{item.count} artigos</span>
              </div>
              <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full transition-all`}
                  style={{ width: `${(item.count / 30) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function GrowthEngineDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [lpFilter, setLpFilter] = useState("Todos");
  const [selectedDept, setSelectedDept] = useState<typeof DEPARTMENTS[0] | null>(null);

  const publishedLPs = LANDING_PAGES.filter((lp) => lp.status === "Publicado").length;
  const p0LPs = LANDING_PAGES.filter((lp) => lp.prioridade === "P0").length;
  const totalArticles = 30;

  const filteredLPs =
    lpFilter === "Todos"
      ? LANDING_PAGES
      : LANDING_PAGES.filter((lp) =>
          lpFilter === "P0" || lpFilter === "P1" || lpFilter === "P2"
            ? lp.prioridade === lpFilter
            : lp.tipo === lpFilter
        );

  return (
    <div className="flex min-h-screen bg-[#0f0f13] text-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/[0.06] flex flex-col">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-black text-white">
              A7
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">A7 Lavanderia</p>
              <p className="text-[10px] text-gray-500 mt-0.5">Growth Engine</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-0.5">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left ${
                activeSection === item.id
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-xs opacity-60">{item.icone}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Ferramentas — fixed shortcut cards */}
        <div className="px-3 pb-4 space-y-1.5 border-t border-white/[0.05] pt-4">
          <p className="text-[10px] text-gray-600 uppercase px-1 pb-1 tracking-widest">Ferramentas</p>
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.04] hover:border-white/[0.12] transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{link.icone}</span>
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                <span className="ml-auto text-gray-700 group-hover:text-gray-400 text-xs">↗</span>
              </div>
              <p className="text-[10px] text-gray-600 pl-6">{link.desc}</p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/[0.06]">
          <p className="text-[10px] text-gray-600">BLOCO 1–7 · v1.0</p>
          <p className="text-[10px] text-gray-600">2026-03-13</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-[#0f0f13]/80 backdrop-blur border-b border-white/[0.06] px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-white">
              {NAV.find((n) => n.id === activeSection)?.label ?? activeSection}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">A7 Lavanderia · Growth Engine Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Fase 3 — Em andamento
            </span>
          </div>
        </div>

        <div className="px-8 py-8">

          {/* ─── SECTION 1: OVERVIEW ──────────────────────────────────────── */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white">A7 Lavanderia Growth Engine</h2>
                <p className="text-gray-400 mt-1 text-sm max-w-2xl">
                  Sistema de aquisição digital baseado em SEO, GEO, clusters de conteúdo, landing pages
                  estratégicas e funis de conversão via WhatsApp.
                </p>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "LPs Mapeadas", valor: "30", sub: `${publishedLPs} publicadas`, cor: "blue" },
                  { label: "Artigos", valor: `${totalArticles}`, sub: "no blog", cor: "green" },
                  { label: "LPs P0", valor: `${p0LPs}`, sub: "prioridade máxima", cor: "red" },
                  { label: "Clusters SEO", valor: "9", sub: "temáticos", cor: "purple" },
                  { label: "Visitas", valor: "—", sub: "meta: 10k/mês", cor: "amber" },
                  { label: "Leads", valor: "—", sub: "meta: 200/mês", cor: "teal" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{kpi.label}</p>
                    <p className="text-2xl font-bold text-white">{kpi.valor}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-4">Progresso das Fases</h3>
                  <div className="space-y-3">
                    {ROADMAP.map((fase) => (
                      <div key={fase.fase} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ring-2 shrink-0 ${ROADMAP_RING[fase.status]}`}>
                          {fase.status === "Concluído" ? "✓" : fase.fase}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`text-xs font-medium ${fase.status === "Futuro" ? "text-gray-500" : "text-gray-200"}`}>
                              Fase {fase.fase} — {fase.nome}
                            </p>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                              fase.status === "Concluído" ? "bg-emerald-500/20 text-emerald-400" :
                              fase.status === "Em andamento" ? "bg-blue-500/20 text-blue-400" :
                              fase.status === "Próximo" ? "bg-amber-500/20 text-amber-400" :
                              "bg-gray-700 text-gray-500"
                            }`}>
                              {fase.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-4">LPs por Prioridade</h3>
                  <div className="space-y-3">
                    {[
                      { label: "P0 — Máxima prioridade", count: 15, max: 30, cor: "bg-red-500" },
                      { label: "P1 — Alta prioridade", count: 10, max: 30, cor: "bg-orange-500" },
                      { label: "P2 — Média prioridade", count: 5, max: 30, cor: "bg-yellow-500" },
                    ].map((p) => (
                      <div key={p.label}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-400">{p.label}</span>
                          <span className="text-gray-300 font-medium">{p.count}</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className={`h-full ${p.cor} rounded-full`} style={{ width: `${(p.count / p.max) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <h4 className="text-xs text-gray-500 mb-3">LPs por Tipo</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { tipo: "SRV", label: "Serviço", count: 10 },
                        { tipo: "PER", label: "Persona", count: 7 },
                        { tipo: "NIC", label: "Nicho B2B", count: 5 },
                        { tipo: "CID", label: "Cidade", count: 5 },
                        { tipo: "DOR", label: "Dor/Decisão", count: 2 },
                        { tipo: "OFT", label: "Oferta", count: 1 },
                      ].map((t) => (
                        <div key={t.tipo} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${TIPO_COLORS[t.tipo]}`}>{t.tipo}</span>
                            <span className="text-xs text-gray-400">{t.label}</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-300">{t.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic alert */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 flex gap-4">
                <span className="text-amber-400 text-xl shrink-0">⚡</span>
                <div>
                  <p className="text-sm font-semibold text-amber-300">Gap Crítico — LP-18 /empresarial</p>
                  <p className="text-xs text-amber-400/70 mt-1">
                    3 artigos B2B de alto ticket (hotel, restaurante, uniformes) publicados sem landing page de destino.
                    Ticket médio estimado: R$500–R$5.000/mês por cliente. Implementar LP-18 é a ação de maior ROI imediato.
                  </p>
                </div>
              </div>

              {/* Engine quick-access */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/growth-engine/revenue" className="group bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 rounded-xl p-5 flex items-center justify-between transition-all">
                  <div>
                    <p className="text-sm font-bold text-white">💰 Revenue Intelligence</p>
                    <p className="text-xs text-gray-500 mt-1">6 painéis · SEO, leads, receita, upsell, MRR, funil</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-violet-400 transition-colors text-lg">→</span>
                </Link>
                <Link href="/growth-engine/content-engine" className="group bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/30 rounded-xl p-5 flex items-center justify-between transition-all">
                  <div>
                    <p className="text-sm font-bold text-white">🧠 AI Content Engine</p>
                    <p className="text-xs text-gray-500 mt-1">Loop infinito · 12 gaps · 4 briefs prontos · 10 oportunidades SEO</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-400 transition-colors text-lg">→</span>
                </Link>
                <Link href="/sales-assistant" className="group bg-white/[0.03] border border-white/[0.07] hover:border-green-500/30 rounded-xl p-5 flex items-center justify-between transition-all">
                  <div>
                    <p className="text-sm font-bold text-white">💬 Sales Assistant</p>
                    <p className="text-xs text-gray-500 mt-1">Ferramenta WhatsApp · classificar leads · respostas rápidas</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-green-400 transition-colors text-lg">→</span>
                </Link>
              </div>
            </div>
          )}

          {/* ─── SECTION SITE PRINCIPAL ───────────────────────────────────── */}
          {activeSection === "site" && (
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-400 mb-1">3 variações de design · Teste A/B/C · Sempre evoluindo</p>
                <p className="text-xs text-gray-600">
                  O site principal é tratado como produto — novas variações são criadas, testadas e comparadas continuamente.
                  A variação vencedora se torna a homepage. As outras ficam disponíveis para análise e iteração.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Version B — atual (live) */}
                <a
                  href="https://a7-lavanderia.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                >
                  <div className="relative h-40 overflow-hidden bg-[#070810]">
                    <img
                      src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80"
                      alt="Version B"
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-black text-3xl tracking-[-0.04em]">Clean</p>
                        <p className="text-blue-400 font-black text-3xl tracking-[-0.04em]">Luxury</p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                      <span className="text-[10px] text-green-400 font-bold">LIVE · ATIVO</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-[9px] font-bold px-2 py-1 rounded">
                      Variação B
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">Version B — Clean Luxury</h3>
                    <p className="text-xs text-gray-500 mb-3">Near-black + off-white + electric blue. Nike editorial. Espaço em branco como luxo. Font-black tracking -0.04em.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-green-400 font-semibold">Homepage atual</span>
                      <span className="text-[10px] text-gray-600">a7-lavanderia.vercel.app</span>
                    </div>
                  </div>
                </a>

                {/* Version A — Dopamine */}
                <a
                  href="/version-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                >
                  <div className="relative h-40 overflow-hidden" style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899, #f97316)" }}>
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-black text-3xl tracking-tight">Dopamine</p>
                        <p className="text-yellow-300 font-black text-xl">★★★★★</p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/40 text-white/70 text-[10px] px-2 py-1 rounded">
                      Em teste
                    </div>
                    <div className="absolute top-3 right-3 bg-purple-500 text-white text-[9px] font-bold px-2 py-1 rounded">
                      Variação A
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">Version A — Dopamine</h3>
                    <p className="text-xs text-gray-500 mb-3">Gradiente roxo/rosa/laranja. Alta energia. Stats em destaque. Urgência e social proof. Botões arredondados.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-yellow-500 font-semibold">Teste ativo</span>
                      <span className="text-[10px] text-gray-600">/version-a</span>
                    </div>
                  </div>
                </a>

                {/* Version C — Authority */}
                <a
                  href="/version-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                >
                  <div className="relative h-40 overflow-hidden bg-[#0a1628]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-black text-3xl tracking-tight">Authority</p>
                        <p className="text-blue-400 font-bold text-sm mt-1">14 anos · Padrão profissional</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 grid grid-cols-4 gap-px opacity-10">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="border border-white/20" />
                      ))}
                    </div>
                    <div className="absolute top-3 left-3 bg-black/40 text-white/70 text-[10px] px-2 py-1 rounded">
                      Em teste
                    </div>
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded">
                      Variação C
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">Version C — Authority</h3>
                    <p className="text-xs text-gray-500 mb-3">Navy + branco + azul. Copy racional. Credenciais e processo detalhado. B2B + B2C. Conversão por confiança.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-yellow-500 font-semibold">Teste ativo</span>
                      <span className="text-[10px] text-gray-600">/version-c</span>
                    </div>
                  </div>
                </a>

                {/* Version D — Conversational/Human */}
                <a
                  href="/version-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                >
                  <div className="relative h-32 bg-[#FAFAF8] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#1C1C1A] leading-tight">Humana</div>
                        <div className="text-xs text-[#C4622D] font-semibold mt-1">Terracotta · Casual</div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-orange-100 text-orange-700 text-[9px] font-bold px-2 py-1 rounded">
                      Em teste
                    </div>
                    <div className="absolute top-3 right-3 bg-[#C4622D] text-white text-[9px] font-bold px-2 py-1 rounded">
                      Variação D
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">Version D — Human</h3>
                    <p className="text-xs text-gray-500 mb-3">Branco quente + terracotta. Hero split. Copy casual e direto. Sem overlay escuro. Conversão por proximidade.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-yellow-500 font-semibold">Novo</span>
                      <span className="text-[10px] text-gray-600">/version-d</span>
                    </div>
                  </div>
                </a>

                {/* Version E — Brutalist */}
                <a
                  href="/version-e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                >
                  <div className="relative h-32 bg-black overflow-hidden border border-[#00FF88]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-black text-white uppercase tracking-tighter leading-tight">LAVANDERIA</div>
                        <div className="text-xl font-black text-[#00FF88] uppercase tracking-tighter">PREMIUM</div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-[#00FF88] text-black text-[9px] font-bold px-2 py-1">
                      Em teste
                    </div>
                    <div className="absolute top-3 right-3 bg-[#00FF88] text-black text-[9px] font-bold px-2 py-1">
                      Variação E
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">Version E — Brutalist</h3>
                    <p className="text-xs text-gray-500 mb-3">Preto + neon verde. Hero tipográfico sem imagem. Ticker animado. Sharp corners. Alto impacto visual.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-yellow-500 font-semibold">Novo</span>
                      <span className="text-[10px] text-gray-600">/version-e</span>
                    </div>
                  </div>
                </a>

                {/* Version F — Cinematic */}
                <a
                  href="/version-f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                >
                  <div className="relative h-32 bg-[#0A0A0A] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-light text-gray-400 uppercase tracking-widest mb-1">Cinematic</div>
                        <div className="text-lg font-light text-white italic">O cuidado que suas</div>
                        <div className="text-lg font-light text-[#F59E0B] italic">roupas merecem</div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-amber-500/20 text-amber-400 text-[9px] font-bold px-2 py-1 rounded">
                      Em teste
                    </div>
                    <div className="absolute top-3 right-3 bg-amber-500 text-black text-[9px] font-bold px-2 py-1 rounded">
                      Variação F
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">Version F — Cinematic</h3>
                    <p className="text-xs text-gray-500 mb-3">Preto + dourado. Hero full-bleed moody. Scroll animado. Horizontal scroll services. Luxury brand feel.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-yellow-500 font-semibold">Novo</span>
                      <span className="text-[10px] text-gray-600">/version-f</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Principles */}
              <div className="border border-white/[0.07] rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-300 mb-4">Como gerenciar as variações</h3>
                <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-500">
                  <div>
                    <p className="text-gray-300 font-semibold mb-1">1. Sempre há 3 versões</p>
                    <p>Uma ativa (homepage), duas em teste. Novas variações substituem as mais antigas após análise.</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-1">2. Métricas de decisão</p>
                    <p>Taxa de conversão WhatsApp, tempo na página, scroll depth, bounce rate. Mín. 2 semanas por teste.</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-1">3. Vencedor vira homepage</p>
                    <p>A variação com melhor conversão substitui <code className="bg-white/[0.06] px-1">/</code>. A perdedora vira referência histórica.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─── SECTION ARTIGOS: 30 ARTIGOS + FUNIL ──────────────────────── */}
          {activeSection === "artigos" && (
            <ArtigosSection />
          )}

          {/* ─── SECTION 2: LANDING PAGES ─────────────────────────────────── */}
          {activeSection === "lps" && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {["Todos", "P0", "P1", "P2", "SRV", "PER", "NIC", "CID", "DOR"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setLpFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      lpFilter === f
                        ? "bg-white text-gray-900"
                        : "bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-gray-200"
                    }`}
                  >
                    {f === "Todos" ? "Todas as LPs" : f in TIPO_LABELS ? `${f} — ${TIPO_LABELS[f]}` : f}
                  </button>
                ))}
                <span className="ml-auto text-xs text-gray-600 self-center">{filteredLPs.length} LPs</span>
              </div>

              {/* LP Blocks */}
              {["SRV", "PER", "NIC", "CID", "DOR", "OFT"].map((tipo) => {
                const lps = filteredLPs.filter((lp) => lp.tipo === tipo);
                if (lps.length === 0) return null;
                const titles: Record<string, string> = {
                  SRV: "Bloco A — Por Serviço",
                  PER: "Bloco B — Por Persona",
                  NIC: "Bloco C — Por Nicho B2B",
                  CID: "Bloco D — Por Cidade",
                  DOR: "Bloco E — Por Dor / Decisão",
                  OFT: "Bloco F — Por Oferta",
                };
                const THUMB: Record<string, string> = {
                  "Saúde & Higiene": "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=70",
                  "Tênis": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=70",
                  "Tapetes": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=70",
                  "Casa": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=70",
                  "Manchas": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70",
                  "Roupas Especiais": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=70",
                  "Dia a Dia": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=70",
                  "B2B": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70",
                  "Local": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70",
                  "Decisão": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=70",
                  "Sustentabilidade": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=70",
                };
                const DEFAULT_THUMB = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=70";
                return (
                  <div key={tipo}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-sm font-semibold text-gray-300">{titles[tipo]}</h3>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${TIPO_COLORS[tipo]}`}>{TIPO_LABELS[tipo]}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                      {lps.map((lp) => {
                        const href = lp.status === "Publicado" ? `https://a7lavanderia.com.br${lp.url}` : lp.url;
                        const isLive = lp.status === "Publicado";
                        return (
                          <a
                            key={lp.id}
                            href={href}
                            target={isLive ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="group block bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
                          >
                            {/* Thumbnail */}
                            <div className="relative h-28 overflow-hidden bg-white/[0.04]">
                              <img
                                src={THUMB[lp.cluster] ?? DEFAULT_THUMB}
                                alt={lp.nome}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                              />
                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                              {/* Badges on image */}
                              <div className="absolute top-2 left-2 flex gap-1">
                                <span className="text-[9px] font-mono bg-black/60 text-gray-300 px-1.5 py-0.5 rounded">{lp.id}</span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${PRIORIDADE_COLORS[lp.prioridade]}`}>{lp.prioridade}</span>
                              </div>
                              <div className="absolute top-2 right-2">
                                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${STATUS_COLORS[lp.status]}`}>{lp.status}</span>
                              </div>
                              {/* Live indicator */}
                              {isLive && (
                                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                                  <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                                  </span>
                                  <span className="text-[9px] text-green-400 font-semibold">LIVE</span>
                                </div>
                              )}
                            </div>
                            {/* Info */}
                            <div className="p-3">
                              <p className="text-xs font-semibold text-gray-100 group-hover:text-white leading-tight mb-1 line-clamp-2">{lp.nome}</p>
                              <p className="text-[10px] text-gray-600 font-mono truncate">{lp.url}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── SECTION 3: CLUSTERS ──────────────────────────────────────── */}
          {activeSection === "clusters" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">9 clusters temáticos · {CLUSTERS.reduce((a, c) => a + c.artigos, 0)} artigos publicados · {CLUSTERS.reduce((a, c) => a + c.planejados, 0)} planejados</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {CLUSTERS.map((cluster) => (
                  <div
                    key={cluster.nome}
                    className={`border rounded-xl p-5 ${CLUSTER_COLORS[cluster.cor]}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${CLUSTER_BADGE[cluster.cor]}`} />
                        <h3 className="text-sm font-semibold text-gray-800">{cluster.nome}</h3>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{cluster.artigos}</p>
                        <p className="text-[10px] text-gray-500">artigos</p>
                      </div>
                      {cluster.planejados > 0 && (
                        <div>
                          <p className="text-2xl font-bold text-gray-400">+{cluster.planejados}</p>
                          <p className="text-[10px] text-gray-500">planejados</p>
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <p className="text-[10px] text-gray-500 mb-1.5">Temas cobertos</p>
                      <div className="flex flex-wrap gap-1">
                        {cluster.temas.map((t) => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 bg-white/60 rounded text-gray-700">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-500 mb-1.5">LPs relacionadas</p>
                      <div className="flex flex-wrap gap-1">
                        {cluster.lps.map((lp) => (
                          <span key={lp} className="text-[10px] font-mono px-1.5 py-0.5 bg-white/80 rounded text-gray-800 font-medium">{lp}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── SECTION 4: PIPELINE ──────────────────────────────────────── */}
          {activeSection === "pipeline" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Kanban de produção — artigos, landing pages e criativos</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {(Object.keys(KANBAN) as Array<keyof typeof KANBAN>).map((coluna) => (
                  <div key={coluna} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-300">{coluna}</h3>
                      <span className="text-xs text-gray-600 bg-white/[0.06] px-2 py-0.5 rounded-full">
                        {KANBAN[coluna].length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {KANBAN[coluna].map((item) => (
                        <div
                          key={item.id}
                          className="bg-white/[0.04] border border-white/[0.07] rounded-lg p-3 hover:bg-white/[0.08] transition-colors"
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${KANBAN_TIPO_COLORS[item.tipo]}`}>
                              {item.tipo}
                            </span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${PRIORIDADE_COLORS[item.prioridade]}`}>
                              {item.prioridade}
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 leading-snug">{item.nome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── SECTION 5: FUNIL ─────────────────────────────────────────── */}
          {activeSection === "funil" && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-sm text-gray-400">Funil de conversão — SEO → Blog → LP → WhatsApp → Venda → Recorrência</p>
              <div className="space-y-2">
                {FUNIL.map((etapa, idx) => {
                  const widths = ["100%", "80%", "60%", "50%", "40%", "30%"];
                  return (
                    <div key={etapa.etapa}>
                      <div
                        className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.07] transition-colors mx-auto"
                        style={{ width: widths[idx] }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{etapa.icone}</span>
                            <div>
                              <p className="text-sm font-semibold text-gray-100">{etapa.etapa}</p>
                              <p className="text-xs text-gray-500">{etapa.metrica}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-300">{etapa.valor}</p>
                            <p className="text-[10px] text-gray-600">meta {etapa.meta}</p>
                          </div>
                        </div>
                      </div>
                      {idx < FUNIL.length - 1 && (
                        <div className="flex justify-center my-1">
                          <span className="text-gray-700 text-sm">↓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
                <h3 className="text-xs font-semibold text-gray-300 mb-4">Integração WhatsApp por LP</h3>
                <div className="space-y-2 text-xs text-gray-400 font-mono">
                  {[
                    { lp: "/higienizacao-edredom", msg: "Olá! Tenho interesse na higienização do meu edredom" },
                    { lp: "/tapetes", msg: "Olá! Quero saber sobre limpeza de tapete" },
                    { lp: "/remocao-manchas", msg: "Olá! Tenho uma mancha difícil de tirar, posso mandar foto?" },
                    { lp: "/empresarial", msg: "Olá! Sou gestor e quero uma proposta empresarial" },
                    { lp: "/restaurantes", msg: "Olá! Tenho um restaurante e quero uma proposta" },
                    { lp: "/sao-jose-dos-campos", msg: "Olá! Preciso de coleta em São José dos Campos" },
                  ].map((item) => (
                    <div key={item.lp} className="flex gap-3">
                      <span className="text-blue-400 shrink-0">{item.lp}</span>
                      <span className="text-gray-500 shrink-0">→</span>
                      <span className="text-gray-500 italic truncate">&quot;{item.msg}&quot;</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── SECTION AI SALES ─────────────────────────────────────────── */}
          {activeSection === "ai-sales" && (
            <div className="space-y-8">
              {/* KPIs */}
              <div>
                <h2 className="text-lg font-bold text-white mb-1">AI Sales Engine</h2>
                <p className="text-sm text-gray-400 mb-6">Sistema de qualificação e conversão via WhatsApp. Transforma tráfego SEO em vendas automaticamente.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { label: "Páginas SEO", valor: AI_ENGINE_STATS.totalPages, sub: "estáticas SSG" },
                    { label: "Tráfego est.", valor: `${(AI_ENGINE_STATS.estimatedTotalMonthlyTraffic/1000).toFixed(1)}k`, sub: "visitas/mês" },
                    { label: "Leads est.", valor: AI_ENGINE_STATS.estimatedLeadsPerMonth, sub: "/mês" },
                    { label: "Vendas est.", valor: AI_ENGINE_STATS.estimatedMonthlySales, sub: "/mês" },
                    { label: "Ticket médio", valor: `R$${AI_ENGINE_STATS.estimatedAverageTicket}`, sub: "por pedido" },
                    { label: "MRR est.", valor: `R$${AI_ENGINE_STATS.estimatedMRR.toLocaleString("pt-BR")}`, sub: "mensal" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                      <p className="text-[10px] text-gray-500 mb-1">{kpi.label}</p>
                      <p className="text-xl font-bold text-white">{kpi.valor}</p>
                      <p className="text-[10px] text-gray-600 mt-0.5">{kpi.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Modules */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-4">5 Módulos do AI Sales Engine</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {[
                    { num: "01", nome: "Context Engine", desc: "Mensagem WA personalizada por rota SEO", cor: "blue", status: "Ativo" },
                    { num: "02", nome: "Lead Classifier", desc: "Classifica serviço, ticket e urgência", cor: "green", status: "Ativo" },
                    { num: "03", nome: "Reply Assistant", desc: "Sugere respostas ao atendente", cor: "purple", status: "Ativo" },
                    { num: "04", nome: "Upsell Engine", desc: "Sugere serviços complementares", cor: "amber", status: "Ativo" },
                    { num: "05", nome: "Recorrência", desc: "Pitch de plano mensal pós-venda", cor: "teal", status: "Ativo" },
                  ].map((mod) => (
                    <div key={mod.num} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 text-center">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-xs font-mono text-gray-500 mx-auto mb-3">{mod.num}</div>
                      <p className="text-xs font-semibold text-gray-200 mb-1">{mod.nome}</p>
                      <p className="text-[10px] text-gray-500 mb-2">{mod.desc}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">{mod.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ticket by service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-300 mb-4">Ticket por Serviço</h3>
                  <div className="space-y-3">
                    {TOP_SERVICES_BY_TICKET.slice(0, 7).map((s) => (
                      <div key={s.slug} className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 w-32 shrink-0">{s.label}</span>
                        <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(s.ticketMedio / 200) * 100}%` }} />
                        </div>
                        <span className="text-xs font-semibold text-emerald-400 w-12 text-right">R${s.ticketMedio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-300 mb-4">Funil SEO → Venda</h3>
                  <div className="space-y-2">
                    {[
                      { etapa: "Páginas SEO (133)", valor: AI_ENGINE_STATS.totalPages, max: 133 },
                      { etapa: "Visitas/mês", valor: AI_ENGINE_STATS.estimatedTotalMonthlyTraffic, max: 5000 },
                      { etapa: "Cliques no WA", valor: 450, max: 5000 },
                      { etapa: "Leads qualificados", valor: AI_ENGINE_STATS.estimatedLeadsPerMonth, max: 5000 },
                      { etapa: "Vendas fechadas", valor: AI_ENGINE_STATS.estimatedMonthlySales, max: 5000 },
                      { etapa: "Planos mensais", valor: 20, max: 5000 },
                    ].map((row) => (
                      <div key={row.etapa}>
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="text-gray-500">{row.etapa}</span>
                          <span className="text-gray-400 font-medium">{row.valor.toLocaleString("pt-BR")}</span>
                        </div>
                        <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500/50 rounded-full" style={{ width: `${Math.min((row.valor / row.max) * 100, 100)}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lead profiles */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Perfis de Lead — Classificação Automática</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {Object.values(LEAD_CATALOG).filter(p => p.slug !== "geral").map((profile) => (
                    <div key={profile.slug} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-xs font-semibold text-gray-200">{profile.label}</p>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          profile.urgencia === "alta" ? "bg-red-500/20 text-red-400" :
                          profile.urgencia === "media" ? "bg-amber-500/20 text-amber-400" :
                          "bg-gray-700 text-gray-500"
                        }`}>{profile.urgencia}</span>
                      </div>
                      <p className="text-lg font-bold text-emerald-400 mb-1">R${profile.ticketMedio}</p>
                      <p className="text-[10px] text-gray-600 mb-2">R${profile.ticketMin}–R${profile.ticketMax} · {profile.prazo}</p>
                      <div className="flex flex-wrap gap-1">
                        {profile.keywords.slice(0, 3).map((kw) => (
                          <span key={kw} className="text-[9px] px-1 py-0.5 bg-white/[0.05] rounded text-gray-600">{kw}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to assistant */}
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-green-300">Sales Assistant — Painel do Operador WhatsApp</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Ferramenta interna para classificar leads, copiar respostas, gerar links contextuais e consultar tabela de preços.
                  </p>
                </div>
                <a
                  href="/sales-assistant"
                  className="shrink-0 px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-xl hover:bg-green-500 transition-colors"
                >
                  Abrir Assistant →
                </a>
              </div>
            </div>
          )}

          {/* ─── SECTION 6: DEPARTAMENTOS ─────────────────────────────────── */}
          {activeSection === "departamentos" && (
            <div className="space-y-6">
              <p className="text-sm text-gray-400">9 departamentos envolvidos no Growth Engine</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.nome}
                    onClick={() => setSelectedDept(dept)}
                    className="text-left bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-150 group w-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                        {dept.icone}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-gray-100">{dept.nome}</p>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ${dept.status === "Ativo" ? "bg-emerald-500/15 text-emerald-400" : dept.status === "Em andamento" ? "bg-blue-500/15 text-blue-400" : "bg-gray-500/15 text-gray-500"}`}>
                            {dept.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{dept.responsabilidade}</p>
                        <div className="flex items-center gap-3 mt-2">
                          {dept.lps > 0 && <p className="text-[10px] text-gray-600">{dept.lps} LPs</p>}
                          <p className="text-[10px] text-gray-700 group-hover:text-gray-500 transition-colors">Ver detalhes →</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Responsibility matrix */}
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-4">Matriz de Responsabilidades — LPs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/[0.07]">
                        <th className="text-left text-gray-500 pb-2 pr-4">Responsável</th>
                        <th className="text-left text-gray-500 pb-2 pr-4">LPs</th>
                        <th className="text-left text-gray-500 pb-2">Prioridade máxima</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {[
                        { resp: "Dev", lps: LANDING_PAGES.filter((l) => l.responsavel === "Dev"), },
                        { resp: "Design", lps: LANDING_PAGES.filter((l) => l.responsavel === "Design"), },
                        { resp: "Comercial", lps: LANDING_PAGES.filter((l) => l.responsavel === "Comercial"), },
                      ].map((row) => (
                        <tr key={row.resp}>
                          <td className="py-2 pr-4 text-gray-300 font-medium">{row.resp}</td>
                          <td className="py-2 pr-4 text-gray-500">{row.lps.length} LPs</td>
                          <td className="py-2">
                            <div className="flex flex-wrap gap-1">
                              {row.lps.filter((l) => l.prioridade === "P0").map((l) => (
                                <span key={l.id} className="bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded text-[10px] font-mono">{l.id}</span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ─── SECTION 7: ROADMAP ───────────────────────────────────────── */}
          {activeSection === "roadmap" && (
            <div className="space-y-6">
              <p className="text-sm text-gray-400">8 fases do projeto · 2 concluídas · 1 em andamento</p>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.08]" />
                <div className="space-y-4">
                  {ROADMAP.map((fase) => (
                    <div key={fase.fase} className="relative flex gap-6">
                      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ring-2 shrink-0 ${ROADMAP_RING[fase.status]}`}>
                        {fase.status === "Concluído" ? "✓" : fase.fase}
                      </div>
                      <div className={`flex-1 border rounded-xl p-5 transition-all ${
                        fase.status === "Em andamento"
                          ? "bg-blue-500/5 border-blue-500/20"
                          : fase.status === "Concluído"
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : "bg-white/[0.02] border-white/[0.06]"
                      }`}>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className={`text-sm font-semibold ${fase.status === "Futuro" ? "text-gray-500" : "text-gray-100"}`}>
                              Fase {fase.fase} — {fase.nome}
                            </p>
                            <p className={`text-xs mt-0.5 ${fase.status === "Futuro" ? "text-gray-600" : "text-gray-400"}`}>
                              {fase.descricao}
                            </p>
                          </div>
                          <span className={`shrink-0 text-[10px] px-2 py-1 rounded-full font-medium ${
                            fase.status === "Concluído" ? "bg-emerald-500/20 text-emerald-400" :
                            fase.status === "Em andamento" ? "bg-blue-500/20 text-blue-400" :
                            fase.status === "Próximo" ? "bg-amber-500/20 text-amber-400" :
                            "bg-gray-700 text-gray-600"
                          }`}>
                            {fase.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.05]">
                          <span className="text-[10px] text-gray-600">Entregável:</span>
                          <span className={`text-[10px] font-mono ${fase.status === "Futuro" ? "text-gray-600" : "text-gray-400"}`}>
                            {fase.entregavel}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOCO 4 preview */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🚀</span>
                  <div>
                    <p className="text-sm font-bold text-purple-300">BLOCO 4 — Programmatic SEO Engine</p>
                    <p className="text-xs text-gray-400 mt-1 mb-3">
                      Geração automática de centenas de páginas otimizadas para SEO. Cada combinação de
                      serviço × cidade × persona gera uma página única e indexável.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "/lavanderia-[cidade]",
                        "/lavagem-[tipo-de-peca]",
                        "/tirar-mancha-[tipo]",
                        "/lavanderia-[bairro]-sjc",
                        "/higienizar-[item]-[cidade]",
                        "/preco-lavar-[tipo]-[cidade]",
                      ].map((pattern) => (
                        <span key={pattern} className="text-[11px] font-mono text-purple-300/70 bg-purple-500/10 px-2 py-1 rounded">
                          {pattern}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-purple-400 mt-3 font-semibold">Potencial: 1.000+ páginas orgânicas</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ─── DEPT MODAL ──────────────────────────────────────────────────────── */}
      {selectedDept && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setSelectedDept(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-[#0e0e12] border border-white/[0.1] rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#0e0e12] border-b border-white/[0.07] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-xl">
                  {selectedDept.icone}
                </div>
                <div>
                  <p className="font-bold text-white">{selectedDept.nome}</p>
                  <p className="text-xs text-gray-500">{selectedDept.responsabilidade}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${selectedDept.status === "Ativo" ? "bg-emerald-500/15 text-emerald-400" : selectedDept.status === "Em andamento" ? "bg-blue-500/15 text-blue-400" : "bg-gray-500/15 text-gray-500"}`}>
                  {selectedDept.status}
                </span>
                <button onClick={() => setSelectedDept(null)} className="text-gray-600 hover:text-gray-300 transition-colors text-xl leading-none">✕</button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Descrição */}
              <p className="text-sm text-gray-400 leading-relaxed">{selectedDept.descricao}</p>

              {/* Tarefas */}
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">Tarefas no projeto</h3>
                <ul className="space-y-2">
                  {selectedDept.tarefas.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-[10px] font-mono text-gray-700 mt-0.5 shrink-0 w-5">{String(i + 1).padStart(2, "0")}</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entregáveis */}
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">Entregáveis</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDept.entregaveis.map((e, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-gray-400">
                      {e}
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">KPIs de sucesso</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDept.kpis.map((k, i) => (
                    <span key={i} className="bg-violet-500/10 text-violet-400 text-[11px] px-3 py-1 rounded-full border border-violet-500/20">
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ferramentas */}
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDept.ferramentas.map((f, i) => (
                    <span key={i} className="bg-white/[0.04] text-gray-400 text-[11px] px-3 py-1 rounded-full border border-white/[0.07]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {selectedDept.lps > 0 && (
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex items-center justify-between">
                  <p className="text-xs text-gray-500">LPs sob responsabilidade deste departamento</p>
                  <span className="text-2xl font-black text-white">{selectedDept.lps}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
