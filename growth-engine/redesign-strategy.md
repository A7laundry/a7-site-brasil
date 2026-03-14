# A7 Lavanderia — Estratégia de Redesign
**Growth Engine · BLOCO 2**
Data: 2026-03-13 | Versão: 1.0

---

## Índice

- [PARTE 1 — Diagnóstico Estratégico](#parte-1)
- [PARTE 2 — Estratégia do Site](#parte-2)
- [PARTE 3 — Arquitetura de Informação](#parte-3)
- [PARTE 4 — 3 Variações Paralelas](#parte-4)
- [PARTE 5 — Wireframe da Homepage (Versão B)](#parte-5)
- [PARTE 6 — Direção de Copy (3 Versões)](#parte-6)
- [PARTE 7 — Sistema UI/UX](#parte-7)
- [PARTE 8 — Proteção de Blog e Landing Pages](#parte-8)
- [PARTE 9 — Plano de Implementação](#parte-9)
- [PARTE 10 — Recomendação Final](#parte-10)

---

<a id="parte-1"></a>
## PARTE 1 — Diagnóstico Estratégico

### 1.1 Fraquezas Atuais do Site

**Problema 1: Hero sobrecarregado visualmente**
O Hero atual acumula três elementos orbitais (floating shapes com blur-3xl), um overlay em gradiente, um grid pattern SVG em base64, e animações de float simultâneas. Em mobile, isso resulta em sobrecarga visual e competição de atenção com a headline principal. A headline `"Roupas impecáveis na sua porta. Sem você mexer um dedo."` é boa, mas fica sufocada pelo ruído visual ao redor.

**Problema 2: Ausência de hierarquia de conversão clara**
O site atual empilha 14 seções em ordem lógica de storytelling, mas sem priorização de conversão. Seções como `About` e `BlogSection` aparecem antes do `QuoteForm`, consumindo energia cognitiva do visitante antes de apresentar o CTA principal. Um visitante de tráfego pago que chega com intenção de compra precisa encontrar o formulário de cotação muito antes da posição atual (10ª seção).

**Problema 3: Sistema de prova social disperso**
O `TrustBar` apresenta os stats (4.9, 50k+, 14 unidades) logo no topo, mas a `SocialProof` (depoimentos completos) aparece na 9ª posição. Isso separa a afirmação da prova. O visitante vê os números mas não vê o contexto humano que os valida até muito depois — quando pode já ter saído.

**Problema 4: Oferta nebulosa**
A seção `Pricing` atual exibe promoções variáveis (`FEATURED_PROMOS`) sem mostrar uma estrutura de preços clara ou um pacote âncora. Para um serviço de lavanderia premium, a ausência de um preço de entrada claro gera fricção de decisão. O visitante não sabe se é "para ele" sem clicar e ir para o WhatsApp.

**Problema 5: Identidade visual mid-tier**
O binômio `#1e3a5f` (navy) + `#3b82f6` (azul Tailwind padrão) é funcional mas genérico. É a combinação de cores mais comum em serviços B2B de tecnologia e saúde no Brasil. Para uma lavanderia que compete em premium, as cores não comunicam luxo, nem urgência, nem autoridade de mercado. A identidade visual atual posiciona a A7 como competente — não como líder.

**Problema 6: Mobile hierarchy inadequada**
A seção `PainPoints` usa cards em grid com ícones e textos longos que, em mobile, criam blocos de leitura densa. O ritmo de scroll em mobile não foi otimizado — o usuário precisa rolar mais de 3 telas antes de chegar a um CTA acionável. No mobile, qualquer CTA além do 2º scroll já sofre drop significativo de CTR.

**Problema 7: WhatsApp float sem contexto**
O `WhatsAppFloat` aparece como botão genérico sem copy contextual. Não muda conforme a seção que o usuário está visitando. Uma menção a "Peça orçamento grátis" ou "Agende sua coleta" vinculada ao contexto seria dramaticamente mais eficaz.

**Problema 8: Falta de elemento de urgência real**
O `PromoBanner` e o `CouponPopup` existem, mas são componentes de marketing sobrepostos ao layout, não integrados à narrativa da página. Urgência real precisa estar tecida na estrutura do conteúdo, não apenas em popups que o usuário treina o cérebro para fechar.

---

### 1.2 Bloqueadores de Conversão

**Bloqueador CRO #1 — Distância entre intenção e ação**
Para tráfego pago (Google Ads, Meta Ads) com intenção comercial, o caminho médio até o primeiro CTA é ~3 scrolls (Hero → TrustBar → PainPoints → Transformation → Benefits → CTA). Em dispositivos com 390px de largura (iPhone 14 Pro padrão), isso representa 6-7 viewports de conteúdo antes de um convite claro a agir.

**Bloqueador CRO #2 — Ausência de preço âncora**
Sem um preço de referência visível acima do fold (ou no segundo scroll), o visitante não consegue posicionar a oferta mentalmente. Isso aumenta o abandono, especialmente para públicos que chegam pelo Google com pesquisas de preço ("quanto custa lavanderia São José dos Campos").

**Bloqueador CRO #3 — Formulário de cotação pouco convidativo**
O `QuoteForm` aparece na 11ª posição e, pela estrutura atual, é o único formulário de captura de lead do site. Não há micro-conversões intermediárias (calculadora de preço, quiz de serviço, download de tabela) que capturem emails/contatos de visitantes que ainda não estão prontos para comprar.

**Bloqueador CRO #4 — Falta de especificidade geográfica no hero**
O hero genérico não menciona nenhuma cidade. Para tráfego local (busca "lavanderia São José dos Campos"), o visitante que chega da SERP vê um hero que poderia ser de qualquer lavanderia no Brasil. A ausência do gatilho geográfico no primeiro viewport aumenta a taxa de rejeição.

**Bloqueador CRO #5 — Depoimentos sem rosto real**
A seção `SocialProof` usa depoimentos com iniciais ou avatares gerados. No mercado brasileiro de serviços de consumo, depoimentos sem foto real têm 40-60% menos credibilidade percebida do que depoimentos com foto (dado amplamente documentado em estudos de UX brasileiro).

---

### 1.3 Como o Redesign Resolve Cada Problema

| Problema | Solução no Redesign |
|----------|---------------------|
| Hero sobrecarregado | Versão B: hero full-screen tipográfico, sem floating shapes, imagem de fundo tratada com overlay único, copy em destaque absoluto |
| Hierarquia de conversão | Inserir mini-CTA após TrustBar e após Benefits; mover QuoteForm para posição 6 (antes de SocialProof) |
| Prova social dispersa | Sistema de trust em camadas: badge no hero, números no TrustBar, depoimento âncora logo após a oferta, testimonial grid na posição atual |
| Oferta nebulosa | Inserir preço-âncora visível ("A partir de R$ 12/kg") na seção Services com CTA direto |
| Identidade visual mid-tier | Nova paleta premium (ver Parte 4) com opção de cream/charcoal para Versão B |
| Mobile hierarchy | Redesenhar PainPoints como lista vertical com ícones inline, não grid; inserir CTA sticky no mobile após 2º scroll |
| WhatsApp float sem contexto | Copy dinâmico por seção via Intersection Observer |
| Ausência de urgência | Urgência integrada na narrativa: vagas por cidade, prazo de coleta, social proof em tempo real |

---

### 1.4 Preservação de SEO

**Regra absoluta: nenhuma URL existente pode ser alterada sem redirect 301.**

**URLs que devem ser preservadas integralmente:**
- `/blog/[slug]` — 30 artigos com equity acumulada
- `/lavanderia/[cidade]` — 133 páginas programáticas com targeting local
- `/lavagem/[tipo]` — páginas de serviço por tipo
- `/problema/[problema]` — landing pages por problema

**O que pode mudar sem impacto SEO:**
- Componentes visuais (Hero, About, etc.) — mudança de HTML não afeta URLs
- Classes CSS, estrutura de layout, tipografia
- Conteúdo inline que não é o conteúdo indexado (badges, labels de UI)

**O que deve ser auditado antes de qualquer deploy:**
- Meta titles e meta descriptions de todas as páginas (não alterar sem estratégia)
- Structured data (LocalBusiness, FAQ, Organization) — manter todos os schemas presentes
- H1 da homepage — pode ser otimizado, mas não removido
- Alt text de imagens — revisar e melhorar sem perder palavras-chave existentes
- Links internos das seções do homepage para páginas de serviço e cidades

**Mudanças de performance que beneficiam SEO:**
- Reduzir animações desnecessárias (melhora CLS e FID)
- Eliminar floating shapes com blur-3xl (reduz custo de paint)
- Lazy load otimizado para imagens abaixo do fold
- Reduzir JavaScript de animação no primeiro viewport (melhora LCP)

---

<a id="parte-2"></a>
## PARTE 2 — Estratégia do Site

### 2.1 Objetivo Primário

**Converter visitantes em agendamentos de coleta via WhatsApp ou QuoteForm**, priorizando leads com intenção comercial (tráfego pago + busca transacional local). A métrica de sucesso é o número de conversas abertas no WhatsApp ou formulários preenchidos, não o tempo na página.

### 2.2 Objetivo Secundário

**Ranquear para termos locais de alta intenção** em todas as 14 cidades do Vale do Paraíba, construindo autoridade de domínio através do cluster de blog e das páginas programáticas, e **estabelecer a A7 como o provedor de referência** no segmento de lavanderia premium no interior de São Paulo.

### 2.3 Objetivos Terciários

- Capturar leads em estágios iniciais do funil via conteúdo (blog, calculadoras, guias)
- Construir audiência para remarketing via Meta Pixel e Google Tag Manager
- Gerar backlinks orgânicos através de conteúdo de autoridade (artigos pilar P0)
- Posicionar a A7 para expansão de franchising (B2B secundário)

---

### 2.4 Três Buyer Personas

**Persona 1 — Beatriz, 34 anos, "A Profissional Sobrecarregada"**
Gerente de projetos, mora em São José dos Campos, solteira ou casada sem filhos. Renda familiar R$ 8.000-15.000. Trabalha 9-10h por dia, viaja a trabalho com frequência. Tem roupas de qualidade (blazers, camisas, vestidos de alfaiataria) que exigem cuidado especial. Problema central: não tem tempo para lavar, passar e organizar. Sente culpa por deixar roupas acumuladas. Já teve peças estragadas lavando em casa. Prioridade de decisão: praticidade e qualidade. Preço é secundário se o serviço for confiável.
- Canal de entrada: Instagram, busca Google "lavanderia com coleta São José dos Campos"
- CTA que converte: "Agende sua coleta em 2 minutos"
- Objeção principal: "E se estragarem minha peça favorita?"
- Prova que converte: depoimento de pessoa similar + garantia de qualidade explícita

**Persona 2 — Carlos, 42 anos, "O Pai da Família Organizada"**
Engenheiro ou médico, casado, 2-3 filhos. Mora em Taubaté, Jacareí ou Pindamonhangaba. Renda familiar R$ 15.000-30.000. Preocupado com saúde da família, especialmente alergias e higiene do lar. Tem coleção de edredons, tapetes persas, roupas de cama de qualidade. Problema central: volume de roupas da família torna a lavagem doméstica insustentável; preocupação com ácaros e fungos (filhos com rinite). Prioridade de decisão: higiene comprovada + logística conveniente. Pesquisa antes de decidir.
- Canal de entrada: busca orgânica blog ("alergia ácaros edredom"), Google Maps
- CTA que converte: "Higienização Completa para sua Família"
- Objeção principal: "Lavanderia industrial vai estragar minhas peças delicadas?"
- Prova que converte: certificações, processo detalhado, antes/depois de higienização

**Persona 3 — Mariana, 28 anos, "A Sneakerhead Premium"**
Designer, analista de marketing ou freelancer criativo. Mora em São José dos Campos ou Campos do Jordão (temporada). Solteira. Renda R$ 4.000-8.000. Colecionadora de tênis, tem Jordans, New Balance, Yeezys. Usa Instagram intensamente, segue contas de sneakers. Problema central: tênis caros que não pode colocar na máquina e não sabe lavar corretamente. Já estragou uma peça lavando em casa. Prioridade de decisão: especialização técnica + resultado estético. Preço justo para peças que valem R$ 1.000+.
- Canal de entrada: Instagram/TikTok, busca "lavar tênis profissional São José dos Campos"
- CTA que converte: "Envie uma foto dos seus tênis"
- Objeção principal: "Mas eles entendem de materiais especiais?"
- Prova que converte: fotos de resultado antes/depois, lista de marcas atendidas

---

### 2.5 Ações de Conversão por Prioridade

| Prioridade | Ação | CTA | Posição no Site |
|-----------|------|-----|----------------|
| P0 | Abrir conversa WhatsApp | "Agendar coleta grátis" | Hero, sticky mobile, float |
| P0 | Preencher QuoteForm | "Receber orçamento" | Posição 6 (após Benefits) |
| P1 | Clicar em LP de cidade | "Ver serviços em [cidade]" | TrustBar, Footer |
| P1 | Clicar em artigo do blog | Link contextual em seções | BlogSection, FAQ |
| P2 | Salvar contato WhatsApp | Botão fixo iOS/Android | WhatsAppFloat |
| P2 | Compartilhar depoimento | Botão social em SocialProof | SocialProof |

---

### 2.6 Posicionamento Emocional

A A7 Lavanderia não vende lavagem. Vende **tempo de volta para o que importa** e **a certeza de que suas peças favoritas estão seguras**.

O eixo emocional central é o alívio: alívio da culpa de deixar acumular, alívio da ansiedade de estragar uma peça cara, alívio do cansaço de gerenciar mais uma tarefa doméstica. A promessa não é apenas limpeza — é libertação de uma corveia.

O posicionamento secundário é a confiança: em uma categoria onde o consumidor entrega itens de valor afetivo e financeiro, a empresa que demonstra mais processos, mais cuidado, mais garantias ganha. A A7 tem os números para provar (4.9, 50k+) mas precisa traduzir esses números em narrativa humana.

**Frase de posicionamento (uso interno):**
"A A7 é a lavanderia que pessoas que se importam com suas roupas escolhem quando não querem se preocupar."

---

### 2.7 Sistema de Confiança em Camadas

**Camada 1 — Imediata (0-3 segundos, no hero):**
Badge de rating Google 4.9, número de atendimentos, ano de fundação, menção às 14 unidades. Objetivo: criar credibilidade antes de qualquer claim.

**Camada 2 — Estrutural (primeiros 3 scrolls):**
TrustBar com logos de parceiros (se houver), certificações, selos de qualidade. Se não houver logos, substituir por process badges ("Produto dermatologicamente testado", "Entrega em 48h", "Sem contrato mínimo").

**Camada 3 — Humana (após apresentação do serviço):**
Depoimentos com foto real, nome completo, cidade, tipo de serviço contratado. Um depoimento âncora de alta credibilidade logo após a seção de benefícios (posição 5-6).

**Camada 4 — Técnica (na seção de serviços):**
Processo passo a passo com foto de cada etapa, descrição de produtos utilizados, temperatura de lavagem, tempo de processo. Para Beatriz e Carlos, processo transparente é prova de qualidade.

**Camada 5 — Local (no footer e sidebar):**
Endereços das 14 unidades, link para Google Maps, Google My Business rating embed.

---

### 2.8 Fluxo Conteúdo→Conversão

```
TOPO DO FUNIL
Blog (30 artigos SEO) → Artigo informacional →
Lê sobre "alergia ácaros edredom" →
CTA inline "Higienizar seu edredom agora" →
Landing Page /higienizacao-edredon →
WhatsApp ou QuoteForm

MEIO DO FUNIL
Pesquisa local →
"lavanderia premium São José dos Campos" →
LP /lavanderia/sao-jose-dos-campos →
Preço + Processo + Depoimentos locais →
WhatsApp

FUNDO DO FUNIL
Tráfego pago →
Homepage ou LP específica de serviço →
Hero → Benefits → Oferta → QuoteForm →
Conversão em até 3 scrolls

REMARKETING
Visitou mas não converteu →
Pixel → Campanha de remarketing →
Homepage com oferta de urgência visível →
Conversão no 2º toque
```

---

<a id="parte-3"></a>
## PARTE 3 — Arquitetura de Informação

### 3.1 Estrutura Geral do Site

```
a7lavanderia.com.br/
├── / (Homepage)
├── /blog/
│   ├── / (índice do blog)
│   └── /[slug] (30 artigos — preservar URLs)
├── /lavanderia/
│   └── /[cidade] (133 páginas programáticas)
├── /lavagem/
│   └── /[tipo] (páginas por tipo de lavagem)
├── /problema/
│   └── /[problema] (landing pages por problema)
└── /[páginas estáticas: sobre, contato, franquias]
```

### 3.2 Hierarquia de Conteúdo

**Nível 0 — Homepage**
Página raiz. Objetivo: converter e distribuir tráfego. Serve a todos os públicos simultaneamente. Não otimizada para nenhuma keyword específica de cidade (concorre com as LPs de cidade). Keyword-alvo: "lavanderia premium com coleta e entrega Vale do Paraíba" + branded.

**Nível 1 — Páginas de Cidade (`/lavanderia/[cidade]`)**
133 páginas com targeting específico por cidade + serviço. Recebem tráfego de busca local ("lavanderia [cidade]"). Devem ter: hero com nome da cidade, Google Maps embed da unidade mais próxima, depoimentos locais quando possível, preços locais se houver variação.

**Nível 2 — Páginas de Serviço (`/lavagem/[tipo]`)**
Páginas por tipo de serviço: roupas, edredons, tênis, tapetes, cortinas, roupas delicadas, remoção de manchas, etc. Recebem tráfego de busca por serviço ("higienizar edredom profissional"). São a ponte entre o blog (TOFU) e a conversão (BOFU).

**Nível 3 — Blog (`/blog/[slug]`)**
30 artigos em 8 clusters. Objetivo primário: SEO orgânico. Objetivo secundário: nutrir leads. Todo artigo deve ter um CTA inline apontando para a LP de serviço correspondente. Nunca para a homepage diretamente.

**Nível 4 — Páginas de Problema (`/problema/[problema]`)**
Landing pages de alta conversão para problemas específicos: manchas, cheiro, fungos, etc. Recebem tráfego de campanhas pagas. Mais diretas, menos conteúdo editorial, mais CTA.

---

### 3.3 Cluster de Blog — 30 Artigos em 8 Clusters

**Cluster 1 — Saúde & Higiene (6 artigos)**
Pilar: saúde da família, prevenção de alergias, higiene profunda.
Link interno bidirecional: cada artigo aponta para `/higienizacao-edredon`, `/tapetes`, `/cortinas`.
Não competem entre si — cobrem ângulos diferentes do mesmo tema.

**Cluster 2 — Manchas & Emergências (3 artigos)**
Pilar: urgência, problema imediato, solução profissional.
Alta intenção transacional. Artigos devem ter CTA "Envie uma foto pelo WhatsApp" no segundo parágrafo.

**Cluster 3 — Tênis & Calçados (1+ artigos)**
Pilar: especialização técnica, produtos premium.
Conecta a `/tenis`. Alta busca de volume. Oportunidade de expandir o cluster.

**Cluster 4 — Roupas Especiais & Cuidados**
Pilar: confiança, técnica, materiais delicados.
Conecta a `/roupas-delicadas`. Persona Beatriz.

**Clusters 5-8 — Expandir conforme planejamento**
Ver `/growth-engine/mapa-estrategico-conteudo.md` para mapeamento completo.

---

### 3.4 Sistema de Landing Pages — 133 Páginas Programáticas

**Template base:** `SeoPageTemplate.tsx`
**Rota:** `/lavanderia/[cidade]`

Cada página deve conter:
1. H1 único: "Lavanderia Premium em [Cidade] — A7 Lavanderia"
2. Parágrafo de introdução com cidade e variações de keyword
3. Seção de serviços (lista das categorias disponíveis na cidade)
4. Bloco de proof local (depoimentos da cidade se disponível; fallback para rating geral)
5. Mapa com unidade mais próxima ou área de cobertura
6. QuoteForm ou WhatsApp CTA com message pré-preenchida com a cidade
7. FAQ específico ("Quanto tempo demora a entrega em [Cidade]?")
8. Links internos para artigos do blog relevantes para a região

---

### 3.5 Lógica de Linking Interno

**Regra 1 — Blog para Serviço (sempre)**
Todo artigo de blog deve ter ao menos um link interno para a LP de serviço correspondente. Nunca finalizar um artigo sem um caminho para conversão.

**Regra 2 — Serviço para Blog (quando relevante)**
LPs de serviço podem e devem linkar para 2-3 artigos informativos relevantes no formato "Saiba mais sobre [tema]". Isso aumenta dwell time e distribui PageRank.

**Regra 3 — Homepage para LPs de Cidade (footer + TrustBar)**
A homepage deve mencionar as principais cidades no footer (já existente) e idealmente ter uma seção "Atendemos em:" com links para as principais LPs.

**Regra 4 — LPs de Cidade para Blog Local**
Quando um artigo menciona uma cidade específica, ele deve ser linkado na LP dessa cidade. Cria cluster de relevância geográfica.

**Regra 5 — Breadcrumbs funcionais**
Toda página de nível 2+ deve ter breadcrumb com schema markup (já existe `generateBreadcrumbSchema`). Verificar se está sendo injetado em todas as páginas filhas.

---

### 3.6 Pontes de Conversão

**Ponte 1 — Blog para WhatsApp (urgência)**
Nos artigos de cluster Manchas, inserir botão WhatsApp inline com copy contextual: "Tem essa mancha agora? Mande uma foto — resolvemos hoje."

**Ponte 2 — LP de Cidade para QuoteForm (local)**
No final de cada LP de cidade, QuoteForm com campo hidden `source_city` já preenchido para rastreamento de origem.

**Ponte 3 — Homepage para LP de Cidade (geolocalização)**
Se possível, detectar geolocalização via browser API e mostrar banner contextual: "Atendemos em Taubaté — ver serviços disponíveis."

**Ponte 4 — FAQ para Serviço (BOFU)**
Cada resposta de FAQ que menciona um serviço deve ter um link inline para a LP correspondente. Ex: FAQ "Vocês lavam edredons?" → resposta com link para `/higienizacao-edredon`.

---

<a id="parte-4"></a>
## PARTE 4 — 3 Variações Paralelas

---

### Versão A — DOPAMINE

**Conceito central:** Alta energia, movimento, urgência palpável. A lavanderia que não deixa você esperando. Design que diz "rápido, eficiente, agora".

**Direção visual:**
Fundo escuro quase preto (`#0a0a0a` ou `#111827`) com acentos em amarelo vibrante (`#FACC15`) ou laranja quente (`#F97316`). Gradientes diagonais agressivos. Elementos gráficos em movimento — não sutis. Tipografia condensada e bold. Fotografia de alta saturação e contraste.

**Design language:**
Inspirado em marcas de delivery premium e fintech brasileiras (iFood, Nubank, Rappi). Sensação de app nativo, não de site institucional. Cards com hover states dramáticos. Micro-interações em cada CTA. Scroll parallax agressivo nos primeiros dois viewports.

**Mood:**
Urgente, energético, resolutivo. "Esse problema tem solução AGORA." Não há tempo a perder. A A7 é uma máquina de resolução de problemas.

**Tipografia:**
- Display: Clash Display ou Space Grotesk — pesado, moderno, sem serifa
- Body: Inter 400/500
- Accents: Números em fonte mono (JetBrains Mono ou IBM Plex Mono) para criar sensação de precisão técnica nos stats

**Ritmo de seções:**
Nenhuma seção tem a mesma altura. Alternância intencional de seções full-screen e seções compactas de 200-300px. Cria ritmo de leitura dinâmico que previne monotonia.

**Estilo de CTA:**
Botão com fundo amarelo ou laranja, texto preto bold, com ícone de seta à direita. Hover: botão expande ligeiramente + shadow dramática. Sem bordas arredondadas excessivas — ângulos de 6-8px máximo. CTA secundário: texto sublinhado com cor de acento, sem background.

**Estilo de imagem:**
Fotografia tratada com filtro high-contrast e ligeira saturação aumentada. Imagens de processo (máquinas, vapor, mãos em luvas, roupas organizadas) mais do que imagens de lifestyle. Quando lifestyle, recorte dramático — não foto de família soridente genérica.

**Ângulo de persuasão:**
Problema → Solução Imediata. A copy ataca a dor sem cerimônia e apresenta a solução com velocidade. "Roupas acumulando há 2 semanas? Coleta hoje. Entrega em 48h." Sem rodeios.

**Ângulo de urgência:**
Urgência baseada em escassez de tempo: "Coleta disponível hoje em São José dos Campos — X vagas restantes." Contadores regressivos para promoções. Notificações de social proof em tempo real ("Maria de Taubaté acabou de agendar").

**Estratégia de confiança:**
Confiança demonstrada por velocidade e garantias concretas. "Garantia: se não ficar satisfeito, refazemos grátis." Não se apoia em credenciais institucionais — se apoia em resultados e promessas mensuráveis.

**Diferenciador central:**
Velocidade + Garantia. "A lavanderia mais rápida do Vale do Paraíba com a garantia mais forte do mercado."

---

### Versão B — CLEAN LUXURY / NIKE

**Conceito central:** Menos é mais. Silêncio como statement de qualidade. O produto fala por si. Espaço em branco é premium.

**Direção visual:**
Background cream ou branco puro (`#FAFAF9` ou `#FFFFFF`). Tipografia preta (`#0F0F0F`) absolutamente dominante na hierarchy. Cor de acento usada com extrema parcimônia — não mais que 1 elemento por viewport. Fotografia em preto e branco ou tratamento de baixa saturação. Grid assimétrico com gutters generosos.

**Design language:**
Inspirado em Aesop, La Mer, Bottega Veneta digitalmente. No contexto brasileiro, pensa no universo de marcas como Reserva Premium, Iódice, ou Alpargatas linha premium. Não é a típica "luxo brasileiro" de dourado e bordô — é luxo contemporâneo, editorial, minimalista.

**Mood:**
Confiante, sereno, inevitável. Uma marca que não precisa gritar porque tem substância. "Não te convencemos — você já sabe que somos a melhor escolha."

**Tipografia:**
- Display: Playfair Display Italic para headlines emocionais / frases de impacto
- Headers: DM Serif Display ou Cormorant Garamond — editorial, digno
- Body: DM Sans ou Söhne — clean, legível, neutro
- Numbers/Stats: Grande, bold, DM Serif para criar contraste editorial

**Ritmo de seções:**
Seções amplas com muito breathing room. Cada seção tem uma única ideia. Nada compete. Scroll lento e deliberado. Imagens ocupam full-width sem contenção em cards. Headlines grandes em viewport, subheadline pequeno e preciso.

**Estilo de CTA:**
Dois estilos apenas. CTA primário: fundo preto, texto branco, sem ícone, bordas 2px. Hover: inverte para branco com border preta. CTA secundário: apenas texto com underline fino animado. Zero gradientes. Zero sombras excessivas.

**Estilo de imagem:**
Fotografia em branco e preto ou desaturada para 20-30%. Recortes precisos. Quando colorida, single subject com background neutro. Imagens de detalhe — a textura de um tecido, uma mão segurando uma peça dobrada com precisão — não panorâmicas.

**Ângulo de persuasão:**
Aspiração → Identidade. "Pessoas que se importam com qualidade escolhem A7." A copy não vende lavagem — vende um estilo de vida de quem cuida do que tem. Não há urgência explícita — o desejo é criado pela aspiração.

**Ângulo de urgência:**
Urgência inexistente ou sutilíssima. Não há countdown, não há "vagas limitadas". A única urgência é implícita: "suas peças estão esperando cuidado — não as deixe mais tempo sem ele."

**Estratégia de confiança:**
Confiança construída por curadoria e cuidado com detalhes. Cada depoimento tem o nome completo da pessoa, a cidade, e o serviço específico. A página de processo mostra produto por produto utilizado. Confiança por transparência total, não por volume de claims.

**Diferenciador central:**
Cuidado como arte. "Tratamos suas roupas como peças que merecem atenção individual."

---

### Versão C — AUTHORITY / TRUST

**Conceito central:** Líder de mercado incontestável. Presença de empresa séria, escala real, credenciais sólidas. Para quem toma decisões baseadas em prova, não em emoção.

**Direção visual:**
Navy original (`#1e3a5f`) como foundation mas usado com mais confiança — não como cor de fundo genérica mas como elemento de marca. Branco limpo para conteúdo. Acento em azul mais saturado ou verde confiança (`#059669`). Estrutura de layout em grid rígido, simétrico, como um portal de notícias premium ou um site corporativo de primeira linha.

**Design language:**
Inspirado em Sebrae, Nubank institucional, ou sites de empresas como Localfrio ou Hapvida. Seriedade empresarial com calor humano nos depoimentos. Dados em destaque. Números grandes. Logos de parceiros. Certificações visíveis.

**Mood:**
Sólido, estabelecido, confiável. "Somos os maiores e os melhores porque provamos isso todos os dias." Uma marca que entrou para ficar e você pode verificar isso.

**Tipografia:**
- Display: Montserrat ExtraBold — robusto, moderno, institucional
- Headers: Montserrat 700 — consistência na hierarquia
- Body: Source Sans Pro ou Open Sans — máxima legibilidade
- Numbers: Tabular, bold, grande — os dados são o destaque

**Ritmo de seções:**
Grid de conteúdo denso mas bem organizado. Seções compactas. Sem muito espaço em branco — o espaço é preenchido com prova. Cada scroll traz mais evidência de liderança. Barra de credenciais permanente. Nada de animações que distraem.

**Estilo de CTA:**
CTA primário: fundo navy com texto branco + ícone WhatsApp verde. Grande, prominente, difícil de ignorar. Hover: brightening do fundo. CTA secundário: fundo branco com border navy 2px. Em mobile: full-width, sempre visível.

**Estilo de imagem:**
Fotografia real das unidades (não stock). Se não disponível, usar mockups hiper-realistas das operações. Imagens de equipe com uniforme. Imagens de certificados físicos. Fotos de fachada das unidades. Autenticidade documentada.

**Ângulo de persuasão:**
Prova → Confiança. Toda afirmação tem uma prova correspondente. "4.9 estrelas no Google — veja as 2.847 avaliações." "50.000 atendimentos — desde [ano de fundação]." "14 unidades — veja a unidade mais próxima." Nada de afirmações sem evidência.

**Ângulo de urgência:**
Urgência baseada em disponibilidade real: "X clientes atendidos esta semana em São José dos Campos." "Próxima coleta disponível: [data]." Não é scarcity artificial — é calendário real. Social proof em tempo real reforça demanda.

**Estratégia de confiança:**
Confiança por acumulação de evidências. TrustBar completo. Logos. Números. Depoimentos com nome completo e foto real. Processo auditável. FAQ detalhado. Link para Google My Business. Quantidade de prova supera qualquer objeção possível.

**Diferenciador central:**
Escala com qualidade. "A maior lavanderia premium do Vale do Paraíba — com o cuidado de uma lavanderia de bairro."

---

<a id="parte-5"></a>
## PARTE 5 — Wireframe da Homepage (Versão B — Clean Luxury)

*Cada seção documentada com: objetivo, headline direction, subheadline, papel emocional, direção visual, CTA, elemento de confiança, notas CRO.*

---

### Seção 0 — Header

**Objetivo:** Navegação limpa + CTA sempre acessível
**Elementos:** Logo à esquerda (tipografia apenas, sem ícone excessivo). Nav central com 4 itens: Serviços | Como Funciona | Preços | Blog. À direita: CTA "Agendar coleta" em fundo escuro.
**Comportamento:** Sticky. Em scroll, adiciona sutil shadow bottom border. Em mobile: hambúrguer + CTA floating no bottom bar.
**Notas CRO:** Em mobile, o CTA no bottom bar deve ser "Agendar pelo WhatsApp" com ícone verde — mais alto CTR que qualquer outro posicionamento.

---

### Seção 1 — Hero

**Objetivo:** Criar desejo imediato e comunicar a oferta central em menos de 3 segundos.

**Headline direction:**
Duas linhas, separadas por intenção:
Linha 1 (grande, serif, preto): "Suas roupas. Cuidadas."
Linha 2 (menor, sans, cinza médio): "Com coleta e entrega no Vale do Paraíba."

Alternativa editorial:
Linha 1: "Tempo de volta."
Linha 2: "A lavanderia que cuida das suas roupas enquanto você cuida do que importa."

**Subheadline:** Uma linha de copy de suporte, máximo 12 palavras, em sans 16px cinza: "Premium. Pontual. Sem você sair de casa."

**Papel emocional:** Alívio imediato. O visitante deve sentir que o problema já está resolvido antes de clicar em qualquer coisa.

**Direção visual:**
Layout split: 55% esquerda texto, 45% direita imagem (ou full-screen com texto overlay left-aligned). Imagem: fotografia de roupas perfeitamente dobradas em ambiente clean, desaturada para 15-20%, com detalhe próximo de textura. Fundo cream `#FAFAF9`. Zero floating shapes. Zero animações orbitais.

**CTA:**
Primário: "Agendar coleta grátis" — botão preto, 48px height, padding generoso, texto branco, cantos 4px.
Secundário: "Ver como funciona" — texto com underline animado, cinza escuro.

**Elemento de confiança:**
Uma única linha abaixo dos CTAs: ★★★★★ 4.9 · 50.000+ atendimentos · 14 unidades no Vale do Paraíba.
Em fonte 13px, espaçamento generoso entre items.

**Notas CRO:**
- Nenhum autoplaying animation no hero para não prejudicar LCP
- H1 deve conter a keyword "lavanderia" + "coleta e entrega" ou "Vale do Paraíba"
- Imagem hero deve ter alt text otimizado com keyword local
- O badge de trust deve ser copiável (texto, não imagem) para que o Google indexe

---

### Seção 2 — TrustBar

**Objetivo:** Validar credibilidade instantaneamente antes da narrativa de venda.

**Headline direction:** Nenhuma. Apenas dados em display.

**Layout:** 4 colunas em desktop / 2+2 em mobile:
- 4.9 / Google Reviews (com estrela)
- 50.000+ / Atendimentos
- 14 / Unidades no Brasil
- Desde [ano] / Vale do Paraíba

**Papel emocional:** Segurança. "Não sou cobaia — outros já confiaram."

**Direção visual:** Fundo ligeiramente off-white `#F5F5F0`. Números em DM Serif 48px preto. Label em sans 12px cinza. Dividers verticais sutis entre colunas. Zero backgrounds coloridos nos cards.

**CTA:** Nenhum nesta seção. A função é validar, não converter.

**Elemento de confiança:** Os próprios números são o trust element. Opcional: link sutil "Ver avaliações no Google" abaixo do rating.

**Notas CRO:** Não sobrecarregar. Máximo 4 itens. Cinco+ itens na TrustBar reduz o impacto visual de cada um.

---

### Seção 3 — PainPoints

**Objetivo:** Criar reconhecimento e ressonância emocional. "Eles entenderam meu problema."

**Headline direction:**
"Reconhece isso?" (H2, serif, 40px)
Subheadline: "A maioria das pessoas que nos chamou estava em uma dessas situações." (sans 16px, cinza)

**Dores apresentadas (5 máximo, em formato vertical):**
1. Roupas acumuladas há semanas sem tempo de lavar
2. Uma peça cara que você tem medo de estragar na máquina
3. Edredom ou tapete que ninguém sabe como limpar direito
4. Tênis colecionáveis que precisam de cuidado especializado
5. Manchas que você tentou tirar e só pioraram

**Papel emocional:** Validação do problema. O visitante se vê descrito e sente que a empresa o compreende antes de tentar vender.

**Direção visual:** Lista simples com checkmarks em cinza escuro. Nenhum card com background. Tipografia em duas colunas no desktop, uma coluna no mobile. Espaço em branco generoso entre items. Uma imagem editorial à direita mostrando uma pilha de roupas sobre poltrona — representando o "caos" de forma esteticamente agradável.

**CTA:** Nenhum direto nesta seção. Opcional: link sutil no final "Veja como resolvemos cada um →"

**Elemento de confiança:** Nenhum explícito. A credibilidade aqui vem do reconhecimento — o visitante confia em quem o entende.

**Notas CRO:** Testar A/B: lista com 3 dores específicas por persona vs. lista de 5 dores gerais. A versão específica geralmente converte melhor para tráfego segmentado.

---

### Seção 4 — Transformation (Antes/Depois)

**Objetivo:** Mostrar o resultado tangível. Criar desejo pelo estado final.

**Headline direction:**
"O que muda quando você escolhe a A7." (H2, serif)
Subheadline: "Não é apenas limpeza. É saber que suas peças estão em mãos certas." (sans 16px)

**Layout:**
Dois blocos lado a lado:
ANTES: imagem de roupa amassada/manchada/tênis sujo (low contrast, slightly desaturated)
DEPOIS: imagem de roupa perfeitamente dobrada/tênis limpo (sharp, light, high detail)

Abaixo dos blocos, três bullets de transformação:
- "Peças que você pensou que tinham perdido — de volta como novas"
- "Tempo que você gastaria lavando — de volta para você"
- "A ansiedade de estragar uma peça cara — eliminada"

**Papel emocional:** Desejo pelo resultado. Antecipação do alívio.

**Direção visual:** Split screen com linha central tênue. Escala de cinza no ANTES, colorido/bright no DEPOIS. Contraste emocional visual.

**CTA:** "Ver o que atendemos" — link para seção Services, não externo. Mantém o usuário no fluxo.

**Elemento de confiança:** "99,7% de satisfação em 50.000 atendimentos" — pequeno, abaixo do CTA.

**Notas CRO:** Esta seção tem alto potencial de social share. Adicionar botão de compartilhamento Instagram Stories.

---

### Seção 5 — Benefits

**Objetivo:** Converter a proposta emocional em razões racionais para escolher a A7.

**Headline direction:**
"Por que a A7?" (H2, serif)
Subheadline: "Além da limpeza impecável." (sans 16px, italicizado, editorial)

**Benefícios (6 máximo):**
1. **Coleta e entrega gratuita** — Agendamos no seu horário, sem custo adicional
2. **Garantia de qualidade** — Se não ficar satisfeito, refazemos sem cobrar
3. **Produtos dermatologicamente testados** — Seguros para pele sensível e roupas delicadas
4. **Processo rastreável** — Você sabe em que etapa sua roupa está
5. **14 unidades no Vale do Paraíba** — Atendimento rápido perto de você
6. **Entrega em até 48h** — Sem te deixar sem suas peças por semanas

**Papel emocional:** Segurança racional. "Tenho boas razões para escolher eles."

**Direção visual:** Grid 3x2 em desktop, lista em mobile. Ícone minimal (linha fina, não preenchido) + headline em bold + descritivo em 2 linhas. Background branco. Zero cards com shadow excessiva. Espaçamento generoso.

**CTA:** "Agendar minha coleta" — CTA primário centralizado, fundo preto, botão completo.

**Elemento de confiança:** "Sem contrato mínimo. Cancele quando quiser." — pequeno abaixo do CTA. Remove a principal objeção de tentativa.

**Notas CRO:** Os 6 benefícios devem ser testados em ordem. Colocar Garantia como primeiro geralmente aumenta conversão para tráfego frio.

---

### Seção 6 — QuoteForm (Posição adiantada vs. layout atual)

**Objetivo:** Capturar leads com intenção moderada-alta antes de precisar ir para seções mais baixas.

**Headline direction:**
"Quanto custa? Descubra em segundos." (H2, sans bold — mais direto, não-editorial aqui)
Subheadline: "Sem compromisso. Resposta em minutos pelo WhatsApp." (sans 14px, cinza)

**Campos do formulário:**
- Nome (texto)
- Cidade (dropdown com as 14 cidades + "Outra")
- Serviço de interesse (dropdown: Roupas, Edredons, Tênis, Tapetes, Roupas Delicadas, Outro)
- Mensagem opcional (textarea, placeholder: "Descreva brevemente o que precisa — ex: 15 peças, algumas delicadas")
- Botão: "Receber orçamento no WhatsApp"

**Papel emocional:** Transação sem risco. "Posso perguntar sem precisar pagar ou me comprometer."

**Direção visual:** Formulário em background levemente offwhite, padding generoso, campos com border bottom apenas (não border completa — mais premium). Layout 2 colunas desktop, 1 mobile.

**CTA:** Botão full-width na mobile, 60% width centralizado no desktop. Verde WhatsApp (#25D366) com ícone. Texto: "Receber orçamento gratuito".

**Elemento de confiança:** Abaixo do botão: "🔒 Seus dados estão seguros. Não enviamos spam." + "Normalmente respondemos em menos de 10 minutos."

**Notas CRO:**
- Não usar CAPTCHA — reduz conversão em 15-20%
- Campo "Serviço" como dropdown reduz fricção vs. texto livre
- Considerar alternative: botão WhatsApp direto com mensagem pré-preenchida em vez de formulário — testar qual converte mais

---

### Seção 7 — Services

**Objetivo:** Mostrar amplitude e especialização. Cada serviço é uma porta de entrada para uma LP específica.

**Headline direction:**
"O que cuidamos para você." (H2, serif)
Subheadline: "Do cotidiano ao especial — temos o processo certo para cada tipo de peça." (sans 16px)

**Serviços apresentados (grid 3x2 ou 2x3):**
1. Roupas do dia a dia — "Peças delicadas ou robustas, lavadas no processo ideal"
2. Edredons & roupa de cama — "Higienização profunda com eliminação de ácaros"
3. Tênis & calçados — "Especialistas em materiais técnicos e modelos premium"
4. Tapetes & cortinas — "Limpeza que restaura cores e elimina reservatórios de bactérias"
5. Remoção de manchas — "Manchas difíceis que resistiram a tudo — nossa especialidade"
6. Roupas especiais & festas — "Vestidos, ternos, tuxedos — tratamento individual de cada peça"

**Papel emocional:** Confiança de especialização. "Eles atendem exatamente o que preciso."

**Direção visual:** Cards com imagem de fundo (foto real ou editorial do serviço), título em overlay, link sutil "Ver serviço →". Em hover: imagem levemente brighten, link torna-se sublinhado. Sem preço visível aqui — o preço é na LP do serviço.

**CTA por card:** Link "Ver serviço" → LP correspondente.

**Elemento de confiança:** Badge sutil no card de Remoção de manchas: "Garantia de resultado ou refazemos grátis."

**Notas CRO:** Cards de serviço são excelentes para internal link equity. Cada card deve apontar para a LP correspondente com âncora descritiva.

---

### Seção 8 — HowItWorks

**Objetivo:** Eliminar fricção de "como funciona?" antes que vire objeção.

**Headline direction:**
"Como funciona." (H2, serif — simples, direto)
Subheadline: "Simples como deveria ser." (sans 16px, italic)

**3 passos (não mais que 3):**
1. **Agende** — Escolha data e horário. Coleta gratuita na sua porta.
2. **Cuidamos** — Processo especializado para cada tipo de peça. Você acompanha.
3. **Entregamos** — Suas peças de volta, impecáveis, no prazo combinado.

**Papel emocional:** Redução de fricção. "É mais fácil do que eu pensava."

**Direção visual:** Três colunas com números grandes (01, 02, 03) em DM Serif 120px cinza claro como fundo decorativo. Texto de título em 24px bold. Descritivo em 16px normal. Linha conectora horizontal tênue entre steps. Em mobile: vertical com linha vertical.

**CTA:** "Começar agora — coleta grátis" — botão centralizado, mesmo estilo do hero.

**Elemento de confiança:** "Sem cadastro obrigatório. Primeira coleta sempre grátis."

**Notas CRO:** 3 passos é o máximo. 4+ passos cria percepção de complexidade. Se precisar mostrar mais, usar seção de FAQ ou Processo separada.

---

### Seção 9 — Pricing / Ofertas

**Objetivo:** Remover a barreira de "não sei quanto custa" e apresentar âncora de preço.

**Headline direction:**
"Investimento em cuidado." (H2, serif)
Subheadline: "Transparente, justo, sem surpresas." (sans 16px)

**Layout:**
3 cards de oferta/plano:
- Card 1: **Primeira vez** — "A partir de R$ XX" — Ideal para: quem quer conhecer o serviço
- Card 2 (highlight): **Pacote família** — "A partir de R$ XX/mês" — Ideal para: famílias que precisam de regularidade
- Card 3: **Empresarial** — "Sob consulta" — Ideal para: empresas, escritórios, hotéis

**Papel emocional:** Clareza. "Sei quanto vou pagar antes de entrar em contato."

**Direção visual:** Cards em branco com border 1px cinza claro. Card highlight com border 2px preto e badge "Mais escolhido". Preço em DM Serif 32px. Features em lista minimalista. CTA por card.

**CTA por card:** "Começar" → WhatsApp com mensagem pré-preenchida para o plano específico.

**Elemento de confiança:** "Coleta e entrega grátis em todos os planos. Cancele quando quiser."

**Notas CRO:** Mostrar preço a partir de é melhor do que sem preço — reduz abandono por incerteza. Mesmo que o preço real seja cotado, a âncora "a partir de" qualifica o lead.

---

### Seção 10 — SocialProof

**Objetivo:** Validação por pares — outras pessoas como o visitante que já confiaram e aprovaram.

**Headline direction:**
"O que nossos clientes dizem." (H2, serif)
Subheadline: "Mais de 50.000 atendimentos no Vale do Paraíba." (sans 16px)

**Layout:**
Grid de 3 depoimentos em desktop, 1 em mobile (carousel). Cada depoimento:
- Foto de perfil circular (real, não avatar)
- Nome completo
- Cidade
- Serviço utilizado
- Texto do depoimento (3-5 linhas — não mais)
- Rating 5 estrelas
- Data (trimestre/ano, não data exata — ex: "Janeiro 2026")

**Depoimentos-âncora prioritários (por persona):**
- Beatriz-perfil: "Achei que teria que enviar meu trench coat para São Paulo. A A7 resolveu em 48h e ficou como novo."
- Carlos-perfil: "Minha filha tem rinite severa. Desde que higienizamos os edredons mensalmente, as crises reduziram muito."
- Mariana-perfil: "Meu Jordan 1 estava com a sola amarelada. Peguei de volta como se fosse novo. Vale cada centavo."

**Papel emocional:** Identificação e validação social. "Pessoas como eu já escolheram e aprovaram."

**Direção visual:** Cards sem sombra pesada. Background offwhite `#F9F9F7`. Citation marks em DM Serif 60px cinza claro como elemento decorativo. Foto de perfil em escala de cinza para consistência (se não houver fotos reais coloridas padronizadas).

**CTA:** Link abaixo do grid: "Ver todas as avaliações no Google →" (abre Google My Business em nova aba).

**Elemento de confiança:** Rating geral 4.9/5 em destaque sobre o grid.

**Notas CRO:** Testar depoimentos com foto vs. sem foto — o delta de credibilidade com foto real é significativo. Se não houver fotos reais, usar ilustrações/avatares consistentes em estilo. Nunca usar fotos de stock como "depoimentos".

---

### Seção 11 — About

**Objetivo:** Humanizar a marca. Criar conexão com a história da empresa.

**Headline direction:**
"A lavanderia que Vale do Paraíba escolheu." (H2, serif)
Subheadline: Uma frase sobre a história (placeholder aguardando info do cliente).

**Conteúdo:**
- 2 parágrafos curtos de história da empresa
- 3 valores da marca em formato de lista simples
- Foto da equipe ou da operação (real)

**Papel emocional:** Humanidade e continuidade. "Não é uma startup de app — tem raízes aqui."

**Direção visual:** Layout editorial assimétrico: texto em 60% da largura, imagem em 40%. Imagem: foto real, não stock. Em preto e branco ou baixa saturação para consistência editorial.

**CTA:** Nenhum direto. Opcional: link sutil "Conhecer a história →" para uma página /sobre.

**Elemento de confiança:** Número de anos de mercado + número de unidades.

**Notas CRO:** Esta seção não precisa converter — sua função é construir conexão e reduzir churn pós-visita. Visitantes que se conectam com a história voltam.

---

### Seção 12 — BlogSection

**Objetivo:** Demonstrar expertise. Direcionar tráfego orgânico de volta ao blog. Manter visitantes no ecossistema.

**Headline direction:**
"Aprenda a cuidar das suas peças." (H2, serif)
Subheadline: "Artigos escritos por especialistas em lavanderia." (sans 16px)

**Layout:**
Grid 3 artigos em destaque (P0 do mapa estratégico). Cada card:
- Imagem do artigo (thumbnail editorial)
- Cluster/tag
- Título do artigo
- Tempo de leitura
- Link "Ler artigo →"

**Papel emocional:** Expertise. "Eles sabem do que estão falando."

**Direção visual:** Cards com border sutil, sem shadow. Imagem em proporção 16:9, tratada com baixa saturação. Link em azul minimal ou preto com hover underline.

**CTA:** "Ver todos os artigos" → `/blog`

**Notas CRO:** Artigos P0 aqui: "Alergia a Ácaros? O Que Sua Roupa de Cama Tem a Ver com Isso" + "Como Tirar Mancha de Vinho Tinto" + "Como Lavar Tênis Corretamente". Esses três têm maior volume de busca e melhor potencial de conversão.

---

### Seção 13 — FAQ

**Objetivo:** Responder objeções antes que o visitante precise formular a pergunta.

**Headline direction:**
"Perguntas frequentes." (H2, serif — sem creativity aqui, clareza é o objetivo)

**Perguntas essenciais:**
1. Quanto tempo demora o processo de ponta a ponta?
2. Como funciona a coleta e entrega?
3. Vocês atendem minha cidade?
4. O que acontece se algo for danificado?
5. Quais são as formas de pagamento?
6. Posso cancelar quando quiser?
7. Vocês atendem empresas?

**Papel emocional:** Segurança. "Todas as minhas dúvidas foram respondidas."

**Direção visual:** Accordion simples. Chevron icon à direita. Linha divisória tênue entre items. Background branco. Sem animações dramáticas no abrir/fechar — velocidade moderada.

**CTA:** Após o último item: "Ainda tem dúvidas? Fale conosco no WhatsApp." com ícone.

**Schema:** FAQ schema já configurado (`generateFAQSchema`). Verificar se todas as perguntas/respostas estão sendo incluídas no schema.

---

### Seção 14 — CTA Final

**Objetivo:** Última chamada para conversão antes do footer.

**Headline direction:**
Duas opções a testar:
A: "Suas roupas estão esperando." (emocional, curto, serif italic)
B: "Pronto para uma coleta grátis?" (direto, question format)

**Subheadline:** "Agende agora. Coleta grátis. Sem compromisso."

**Papel emocional:** Urgência suave + reassurance. O visitante que chegou até aqui está qualificado — precisa apenas de um empurrão final sem pressão.

**Direção visual:** Fundo preto. Texto branco. Headline grande, serif, centralizada. CTA único em destaque branco com texto preto. Nenhuma outra distração.

**CTA:** Um único botão. "Agendar coleta grátis" — prominente, centralizado.

**Elemento de confiança:** "Coleta grátis · Entrega em 48h · Garantia de qualidade"

**Notas CRO:** CTA único — sem opções secundárias nesta seção. A distância percorrida pelo visitante até aqui justifica a assertividade da abordagem.

---

### Seção 15 — Footer

**Objetivo:** Utilidade, links de navegação, credenciais legais, links para cidades.

**Colunas:**
1. Logo + tagline + contatos
2. Serviços (links para LPs de serviço)
3. Cidades principais (links para LPs de cidade)
4. Conteúdo (blog, sobre, franquias)
5. Legal (política de privacidade, termos)

**Elemento extra:** Google rating badge com link para Google Maps.

**Notas SEO:** Footer com links para as 14 cidades é estratégico para PageRank interno das LPs programáticas.

---

<a id="parte-6"></a>
## PARTE 6 — Direção de Copy (3 Versões)

*Cada seção com copy distinto para as 3 versões. Todas em português brasileiro, específicas para lavanderia premium.*

---

### 6.1 Hero Headline

**Versão A (DOPAMINE):**
Headline: "Roupas limpas. Coleta hoje. Entrega em 48h."
Sub: "A lavanderia que não te faz esperar. São José dos Campos e região."
Urgência: "⚡ 3 vagas de coleta disponíveis hoje"

**Versão B (CLEAN LUXURY):**
Headline: "Suas roupas, cuidadas."
Sub: "Com coleta e entrega. Premium. No Vale do Paraíba."
Trust line: "★★★★★ 4.9 · 50.000 atendimentos · 14 unidades"

**Versão C (AUTHORITY):**
Headline: "A Maior Lavanderia Premium do Vale do Paraíba."
Sub: "4.9 estrelas no Google. Mais de 50.000 famílias atendidas. 14 unidades. Coleta e entrega grátis."
Badge: "Líderes no mercado desde [ano]"

---

### 6.2 Hero Sub / Supporting Copy

**Versão A (DOPAMINE):**
"Tem roupas acumuladas? Mancha urgente? Edredom que ninguém sabe lavar? A A7 busca na sua porta e devolve impecável. Sem você sair de casa. Sem complicação."

**Versão B (CLEAN LUXURY):**
"Para quem se importa com qualidade. Para quem valoriza o tempo. Para quem entende que algumas coisas merecem cuidado especializado."

**Versão C (AUTHORITY):**
"Com mais de 50.000 atendimentos e avaliação 4.9 no Google, a A7 Lavanderia é a escolha de quem não aceita menos que o melhor para suas roupas e a sua família."

---

### 6.3 CTA Primário

**Versão A:** "Agendar coleta AGORA →"
**Versão B:** "Agendar coleta grátis"
**Versão C:** "Solicitar coleta gratuita"

---

### 6.4 CTA Secundário

**Versão A:** "Ver como funciona em 60 segundos ↓"
**Versão B:** "Ver como funciona →"
**Versão C:** "Conheça nossa história e certificações →"

---

### 6.5 Seção de Dores (PainPoints)

**Versão A (DOPAMINE):**
Headline: "Isso te parece familiar?"
Items:
- "Pilha de roupa que só cresce e você não tem hora de resolver"
- "Aquela peça cara que você tem medo de colocar na máquina"
- "Edredom que você não sabe se lava ou não lava — e fica empurrando"
- "Mancha que você tentou tirar em casa e só piorou"
- "Tênis novinho que você deixa de usar com medo de sujar"
Fechamento: "Você não precisa resolver isso sozinho. A A7 resolve por você."

**Versão B (CLEAN LUXURY):**
Headline: "Reconhece isso?"
Subtexto: "A maioria das pessoas que nos chamou estava em uma dessas situações."
Items (mais contidos, menos exclamação):
- "Roupas acumuladas por falta de tempo — não de vontade"
- "Uma peça especial que merece cuidado que a máquina não oferece"
- "Edredons e tapetes que pedem processo profissional"
- "Manchas que resistem a qualquer tentativa doméstica"
- "Tênis com valor sentimental ou financeiro que você não arrisca"
Fechamento: (sem fechamento explícito — a próxima seção apresenta a solução naturalmente)

**Versão C (AUTHORITY):**
Headline: "Por que as famílias do Vale do Paraíba escolhem profissionais?"
Subtexto: "Pesquisamos nossos clientes. Estes são os motivos mais comuns:"
Items:
- "Falta de tempo para gerenciar a lavagem de toda a família (78% dos clientes)"
- "Medo de estragar peças de valor com lavagem incorreta (65%)"
- "Preocupação com higiene e saúde — ácaros, fungos, bactérias (54%)"
- "Volume de peças que torna a lavagem doméstica inviável (49%)"
- "Necessidade de processo especializado para tênis, couro, delicados (41%)"
Fechamento: "A A7 foi criada para resolver todos esses problemas com eficiência e confiança."

---

### 6.6 Seção de Benefícios

**Versão A (DOPAMINE):**
Headline: "Por que A7 e não qualquer outra lavanderia?"
Benefícios:
- "COLETA HOJE — Agendamos no dia, sem esperar semanas"
- "ENTREGA EM 48H — Não fica sem suas roupas por uma eternidade"
- "GARANTIA TOTAL — Se não ficar 100%, refazemos de graça"
- "SEM CONTRATO — Usa quando precisar, sem fidelidade forçada"
- "14 UNIDADES — Sempre tem uma perto de você no Vale"
- "PRODUTOS SEGUROS — Dermatologicamente testados, seguros para bebês"
CTA: "Quero isso para mim agora →"

**Versão B (CLEAN LUXURY):**
Headline: "Por que a A7."
Subheadline: "Além da limpeza impecável."
Benefícios:
- "Coleta e entrega — no seu horário, na sua porta, sem custo adicional"
- "Garantia de qualidade — se não ficar como deve, refazemos"
- "Produtos testados — formulações que respeitam cada tipo de tecido e pele"
- "Processo rastreável — você sabe onde suas peças estão"
- "14 unidades — atendimento próximo, sempre"
- "Sem burocracia — sem contrato, sem taxa de cancelamento"
CTA: "Agendar minha coleta"
Subtexto CTA: "Sem compromisso. Primeira coleta grátis."

**Versão C (AUTHORITY):**
Headline: "O que nos torna a lavanderia de referência no Vale do Paraíba"
Benefícios com dados:
- "Coleta e entrega gratuita — em todas as 14 cidades atendidas"
- "Avaliação 4.9/5 no Google — com mais de 2.800 avaliações verificadas"
- "Garantia documentada — política de reparação em caso de qualquer problema"
- "Produtos certificados — formulações aprovadas por dermatologistas"
- "Equipe treinada — cada colaborador passa por capacitação técnica mensal"
- "14 unidades operacionais — cobertura total do Vale do Paraíba"
CTA: "Solicitar coleta gratuita agora"
Subtexto CTA: "Atendemos sua cidade. Confirme conosco."

---

### 6.7 Prova Social / Trust

**Versão A (DOPAMINE):**
Headline: "O que os clientes falam (e continuam usando)"
Depoimento âncora: "Deixei acumular um mês de roupas antes de ligar. Em 48h, tudo de volta. Nunca mais lavo em casa." — Fernanda M., São José dos Campos
Badge de urgência: "237 pedidos realizados esta semana no Vale do Paraíba"

**Versão B (CLEAN LUXURY):**
Headline: "O que nossos clientes dizem."
Depoimento âncora: "Entrego minhas roupas para a A7 como se fosse uma extensão da minha rotina. É só agendar e esquecer — quando volta, está perfeito." — Carolina B., Taubaté
Subtexto: "50.000 atendimentos realizados com 4.9 de satisfação."

**Versão C (AUTHORITY):**
Headline: "50.000 famílias do Vale do Paraíba confiam na A7."
Depoimento âncora: "Sou médico, me preocupo muito com higiene. A A7 é a única lavanderia que me passou confiança técnica suficiente para confiar com os itens da família. Processos claros, resultado comprovado." — Dr. Ricardo A., São José dos Campos
Badge: "★★★★★ 4.9 no Google · 2.847 avaliações verificadas"

---

### 6.8 Como Funciona

**Versão A (DOPAMINE):**
Headline: "Simples. Rápido. Sem sair de casa."
Passo 1: "AGENDE — 2 minutos pelo WhatsApp. Escolhe data e horário."
Passo 2: "BUSCAMOS — Vamos até você. Grátis. Sem taxa de coleta."
Passo 3: "ENTREGAMOS — 48h depois, tudo impecável na sua porta."
CTA: "Começar agora — é grátis →"

**Versão B (CLEAN LUXURY):**
Headline: "Como funciona."
Subheadline: "Simples como deveria ser."
Passo 1: "Agende — escolha a data, nós vamos até você."
Passo 2: "Cuidamos — processo especializado para cada peça."
Passo 3: "Entregamos — suas peças de volta, impecáveis."
CTA: "Começar agora"
Note: "Sem cadastro obrigatório. Sem burocracia."

**Versão C (AUTHORITY):**
Headline: "Nosso processo, passo a passo."
Subheadline: "Transparência do início ao fim."
Passo 1: "Coleta agendada — equipe uniformizada vai até você no horário marcado."
Passo 2: "Triagem e processo — cada peça é avaliada e tratada individualmente."
Passo 3: "Entrega conferida — você recebe suas peças e confirma a qualidade."
Nota: "Em caso de qualquer não-conformidade, nossa política de garantia é acionada imediatamente."
CTA: "Solicitar coleta agora"

---

### 6.9 Seção de Urgência

**Versão A (DOPAMINE):**
Headline: "Hoje tem coleta na sua região."
Sub: "Vagas preenchendo rápido. Garante a sua antes que acabe."
Detalhe: "São José dos Campos: X vagas · Taubaté: X vagas · Jacareí: X vagas"
CTA: "Garantir minha vaga agora ⚡"
Countdown: [Timer dinâmico se disponibilidade real puder ser integrada]

**Versão B (CLEAN LUXURY):**
(Urgência inexistente como seção separada — substituída por copy de benefício)
Alternativa: linha sutil no hero — "Coleta disponível esta semana. Agende com antecedência."

**Versão C (AUTHORITY):**
Headline: "Agendamento disponível para esta semana."
Sub: "Nossa agenda é limitada por unidade. Confira disponibilidade na sua cidade."
CTA: "Verificar agenda →" (abre WhatsApp com mensagem "Quero verificar disponibilidade de coleta em [cidade]")

---

### 6.10 CTA Final

**Versão A (DOPAMINE):**
Headline: "Chega de deixar para depois."
Sub: "Agende agora. Coleta hoje. Entrega em 48h. Garantia total."
CTA: "AGENDAR MINHA COLETA AGORA →"
Subtexto: "Mais de 50.000 famílias já escolheram a A7. Seja a próxima."

**Versão B (CLEAN LUXURY):**
Headline: "Suas roupas estão esperando."
Sub: "Agende sua coleta. Sem compromisso."
CTA: "Agendar coleta grátis"
Subtexto: "Coleta grátis · Entrega em 48h · Garantia de qualidade"

**Versão C (AUTHORITY):**
Headline: "Junte-se às 50.000 famílias que escolheram a A7."
Sub: "A lavanderia de referência do Vale do Paraíba. Coleta e entrega grátis. Garantia documentada."
CTA: "Solicitar coleta gratuita"
Subtexto: "Atendemos todas as 14 cidades do Vale do Paraíba. Confirme sua região."

---

<a id="parte-7"></a>
## PARTE 7 — Sistema UI/UX

### 7.1 Sistema de Espaçamento

**Filosofia:** O espaçamento comunica valor percebido. Mais espaço = mais premium. A Versão B usa o dobro do espaçamento da Versão A.

**Grid base:** 8px grid system para todos os elementos.

| Escala | Valor | Uso |
|--------|-------|-----|
| xs | 8px | Gap entre elementos inline, padding de badges |
| sm | 16px | Padding interno de cards, gap entre items de lista |
| md | 24px | Gap entre grupos de elementos, padding de seções mobile |
| lg | 48px | Section padding vertical mobile, gap entre cards |
| xl | 80px | Section padding vertical desktop |
| 2xl | 120px | Section padding vertical Versão B (premium) |
| 3xl | 160px | Hero padding top/bottom Versão B |

**Versão A:** section-padding = 60px (mobile) / 80px (desktop)
**Versão B:** section-padding = 80px (mobile) / 120px (desktop)
**Versão C:** section-padding = 60px (mobile) / 80px (desktop)

---

### 7.2 Ritmo de Seções

**Versão A — Ritmo Staccato:**
Seções curtas (300-400px), conteúdo denso, ritmo rápido. Cada seção termina com CTA. Alta densidade de informação. Usuário navega como lê um feed.

**Versão B — Ritmo Andante:**
Seções largas (600-800px+), respiro entre blocos, cada seção tem uma única ideia central. Usuário navega como lê uma revista de luxo. Sem CTA em cada seção — converte na confiança acumulada.

**Versão C — Ritmo Moderato:**
Seções médias (400-600px), conteúdo balanceado, CTAs em posições estratégicas (após cada bloco de prova). Usuário navega como lê um portal de comparação de serviços.

---

### 7.3 Lógica de Cards

**Card base (todas as versões):**
- Border radius: 8px (A), 4px (B), 12px (C)
- Shadow: médio (A), nenhuma/mínima (B), suave (C)
- Background: branco puro (A/C), cream `#FAFAF9` (B)
- Hover: translateY(-4px) + shadow increase (A), border color change (B), shadow increase (C)

**Card de serviço:**
- Imagem: 16:9 ratio, lazy loaded, tratada (alta saturação em A, desaturada em B, colorida em C)
- Título: 18-20px, bold/semi-bold
- Descrição: 14px, no máximo 2 linhas
- CTA: link com arrow (não botão completo)

**Card de depoimento:**
- Photo: 48px círculo (A), 40px círculo escala-cinza (B), 56px círculo (C)
- Nome: 14px bold
- Cidade + Serviço: 12px, cinza
- Texto: 14-16px, linha 1.6
- Stars: 14px, amarelo `#FACC15`

---

### 7.4 Hierarquia de Botões

**Versão A:**
- Primary: `bg-yellow-400 text-black font-bold` + hover `bg-yellow-300`
- Secondary: `border-2 border-yellow-400 text-yellow-400` + hover `bg-yellow-400 text-black`
- Ghost: `text-yellow-400 underline`

**Versão B:**
- Primary: `bg-gray-900 text-white` + hover `bg-gray-700`
- Secondary: `border border-gray-900 text-gray-900 bg-white` + hover `bg-gray-900 text-white`
- Ghost: `text-gray-900 underline-offset-4 underline decoration-1`

**Versão C:**
- Primary: `bg-primary text-white` (`#1e3a5f`) + hover `bg-primary-700`
- Secondary: `bg-white border-2 border-primary text-primary` + hover `bg-primary text-white`
- WhatsApp: `bg-green-500 text-white` + ícone WhatsApp + hover `bg-green-600`

**Regra universal:** Nunca mais de 2 botões side-by-side. Em mobile, sempre full-width ou 100% de uma coluna. Height mínima: 48px (touch target).

---

### 7.5 Trust Badges

**Sistema de badges:**

| Badge | Versão A | Versão B | Versão C |
|-------|----------|----------|----------|
| Google Rating | Pill amarelo + estrela | Texto simples, mono | Box com borda, grande |
| Garantia | Tag "Garantia total" bold | Texto inline, sutil | Ícone shield + texto |
| Certificação | Ícone check + texto | Sem exibição visual | Badge formal com border |
| Coleta grátis | Tag verde | Bullet point simples | Badge outlined |

**Posicionamento de badges:**
- Hero: apenas rating + atendimentos (máximo 1 linha)
- Benefits section: badge por benefício
- Pricing: badge "Mais escolhido" no card highlight
- QuoteForm: "Dados seguros" + "Resposta em 10 min"
- CTA final: lista inline horizontal de 3 benefícios

---

### 7.6 Design de Formulário

**Princípios gerais:**
- Máximo 4-5 campos visíveis (formulários longos têm alta taxa de abandono)
- Labels sempre visíveis (acima do campo, não como placeholder)
- Placeholder como exemplo de preenchimento
- Validação inline (não esperar submit para mostrar erros)
- Mensagem de erro em vermelho, inline, abaixo do campo

**Campos do QuoteForm:**
```
Nome*                [text input]
Cidade*              [select dropdown]
Serviço de interesse [select dropdown]
Mensagem             [textarea, opcional]

[Botão: Receber orçamento gratuito no WhatsApp]

🔒 Seus dados estão protegidos.
   Normalmente respondemos em menos de 10 minutos.
```

**Estilo por versão:**
- Versão A: Border completa, radius 6px, fundo branco, accent amarelo no focus
- Versão B: Border bottom apenas, fundo transparente, accent cinza escuro no focus
- Versão C: Border completa, radius 8px, fundo offwhite, accent navy no focus

---

### 7.7 Hierarquia Mobile

**Ordem de prioridade em mobile (o que aparece primeiro):**

1. Header minimal com CTA
2. Hero (headline + CTA + trust line mínima)
3. TrustBar (2 colunas, não 4)
4. QuoteForm ou WhatsApp CTA (antecipado vs. desktop)
5. Benefits (lista vertical, não grid)
6. PainPoints (lista vertical, sem cards)
7. Services (scroll horizontal ou lista)
8. HowItWorks (vertical, 3 passos)
9. SocialProof (carousel, 1 depoimento por vez)
10. FAQ (accordion)
11. CTA final
12. Footer (collapsible em acordeon)

**Regra mobile crítica:** Em mobile, o QuoteForm deve aparecer mais cedo (posição 4) do que no desktop (posição 6). Usuário mobile tem menor tolerância para scroll antes de encontrar o CTA.

---

### 7.8 Sticky CTA Mobile

**Componente:** Barra fixada no bottom do viewport em mobile (não em desktop).

**Copy:** "Agendar coleta grátis · WhatsApp"
**Ícone:** WhatsApp verde à esquerda do texto
**Comportamento:** Aparece após 2 scrolls (1 viewport de distância do hero). Desaparece quando QuoteForm está visível (Intersection Observer).
**Z-index:** 50 (abaixo de popups, acima do conteúdo)
**Height:** 56px com padding lateral 16px

**Implementação sugerida:**
```tsx
// Detectar scroll position e visibilidade do QuoteForm
// Mostrar sticky bar após scrollY > window.innerHeight
// Ocultar quando QuoteForm entra no viewport
```

---

### 7.9 WhatsApp Float

**Comportamento dinâmico por seção (via Intersection Observer):**

| Seção visível | Copy do botão |
|--------------|---------------|
| Hero | "Falar com a A7" |
| PainPoints | "Resolver meu problema →" |
| Services | "Solicitar orçamento →" |
| Pricing | "Contratar agora →" |
| SocialProof | "Quero experimentar →" |
| FAQ | "Tirar uma dúvida →" |
| CTA Final | "Agendar coleta grátis" |

**Posição:** Bottom-right, 24px de margem, 64px acima da sticky bar mobile.
**Animação:** Aparece com fade-in após 3 segundos de página carregada (não imediato — reduz percepção de "popup agressivo").
**Efeito de pulse:** Versão A — pulse animation contínua. Versão B — sem pulse, estático. Versão C — pulse sutil a cada 5 segundos.

---

### 7.10 Apresentação de Depoimentos

**Formato recomendado:**

```
┌─────────────────────────────────────────┐
│  ❝                                      │
│  Texto do depoimento em até 4 linhas    │
│  sem exceder o card. Copy real,         │
│  específico, com detalhe do serviço.    │
│                                         │
│  [foto] Nome Sobrenome                  │
│         Cidade · Serviço               │
│         ★★★★★ · Jan 2026              │
└─────────────────────────────────────────┘
```

**Seleção de depoimentos:**
- Não usar depoimentos genéricos ("Ótimo serviço! Recomendo!")
- Preferir depoimentos que mencionam um serviço específico
- Preferir depoimentos que descrevem um problema resolvido
- Preferir depoimentos com nome completo e cidade visível
- Evitar depoimentos com mais de 6 linhas (prejudica escaneabilidade)

---

### 7.11 Blocos de Oferta

**Anatomia do card de oferta/preço:**

```
┌────────────────────────────────┐
│         [Badge]                │
│                                │
│  Título do Plano               │
│  Subtítulo descritivo          │
│                                │
│  A partir de                   │
│  R$ XX,xx                      │
│                                │
│  ✓ Feature 1                   │
│  ✓ Feature 2                   │
│  ✓ Feature 3                   │
│                                │
│  [CTA Button]                  │
│                                │
│  Coleta e entrega grátis       │
└────────────────────────────────┘
```

**Regras de pricing cards:**
- Sempre mostrar preço "a partir de" — nunca sem preço
- O card highlight (mais escolhido) deve estar no centro (grid 3 colunas)
- Diferença visual clara entre cards normais e o highlight (border, scale, ou background)
- Features em lista curta — máximo 5 itens por card
- CTA específico por card (não o mesmo botão nos 3)

---

### 7.12 Componentes Premium

**Seção Numbers (grande, impactante):**
```tsx
// Usar DM Serif para números grandes (80-120px)
// Label pequena abaixo em sans
// Cor: preto nos números, cinza nas labels
// Animar com countup quando entra no viewport (Intersection Observer)
// Ex: "50.000+" animado de 0 em 1.5s quando visível
```

**Progress/Process Bar:**
Barra de progresso visual para "Como Funciona" — linha horizontal com 3 pontos marcando cada etapa. Animação de preenchimento no scroll.

**Before/After Slider:**
Para seção Transformation — slider interativo que revela antes/depois. Em mobile, dois thumbnails verticais com labels claras.

**City Selector:**
Na seção de cobertura ou no QuoteForm — dropdown de cidades com search inline para facilitar seleção entre as 14 cidades.

---

<a id="parte-8"></a>
## PARTE 8 — Proteção de Blog e Landing Pages

### 8.1 O Que Não Pode Quebrar

**URLs — Regra Absoluta:**
Nenhuma das seguintes rotas pode ser alterada, removida ou ter sua estrutura modificada sem redirect 301 imediato:

```
/blog/[slug]                    — 30 artigos indexados
/lavanderia/[cidade]            — 133 páginas programáticas
/lavagem/[tipo]                 — páginas de serviço (número a confirmar)
/problema/[problema]            — landing pages por problema
```

**Meta tags — Regra de Preservação:**
- Title tags existentes não devem ser alteradas sem análise prévia de ranking atual
- Description não é fator de ranking mas afeta CTR — alterar com cuidado
- H1 de páginas de conteúdo não deve ser removido ou substituído

**Structured data — Regra de Manutenção:**
Todos os schemas existentes (`LocalBusiness`, `FAQ`, `Organization`, `Breadcrumb`) devem ser mantidos e verificados após qualquer deploy. Alterações no HTML podem quebrar schema injetados em `dangerouslySetInnerHTML`.

**Links internos existentes:**
Se artigos de blog têm links para seções da homepage (ex: âncoras `#servicos`, `#contato`), esses âncoras devem ser mantidos ou migrados com redirects.

---

### 8.2 O Que Pode Melhorar (Sem Risco)

**Componente `SeoPageTemplate.tsx`:**
Pode receber atualização visual (layout, tipografia, espaçamento) sem afetar URLs ou conteúdo indexado. O redesign das LPs de cidade é bem-vindo desde que:
- O H1 único por cidade seja mantido
- O conteúdo de texto não seja reduzido (risco de perda de relevância)
- As palavras-chave locais continuem presentes no texto

**Blog layout:**
O template visual do blog pode ser redesenhado sem impacto de SEO. Melhorias como:
- Tipografia mais legível
- Tabela de conteúdo (TOC) para artigos longos
- CTA inline mais visível
- Related posts mais relevantes

São todas melhorias que beneficiam tempo na página e conversão.

**Imagens:**
Alt texts podem e devem ser melhorados. Substituição de imagens não impacta SEO desde que alt texts sejam mantidos ou melhorados.

---

### 8.3 Preservação de Equity SEO

**Equity atual acumulada:**
- 30 artigos com backlinks orgânicos (a serem auditados)
- 133 páginas programáticas com indexação local
- Citations de NAP (Name, Address, Phone) em diretórios externos

**Regras de preservação:**
1. **Não consolidar** — Não combinar duas páginas de cidade em uma. Cada página tem seu próprio targeting geográfico.
2. **Não redirecionar para homepage** — Se uma página de cidade for temporariamente removida, usar redirect temporário 302, não 301 permanente.
3. **Manter breadcrumbs** — O schema de breadcrumb distribui equity de forma consistente. Não remover.
4. **Não alterar slug de artigos** — Mesmo que o título seja editado para melhor CTR na SERP, o slug (/blog/[slug]) não deve mudar.
5. **Canonical tags** — Verificar que páginas programáticas com parâmetros de URL não duplicam conteúdo. Canonical para a URL limpa.

---

### 8.4 Autoridade de Cluster

**O que sustenta a autoridade dos clusters:**
- Links internos entre artigos do mesmo cluster
- Links de artigos para LPs de serviço
- Links de LPs de serviço para artigos complementares
- Consistência temática dentro de cada cluster

**Proteção:**
- Não alterar os títulos dos artigos sem análise do ranking atual
- Ao adicionar novos artigos, seguir a estrutura de clustering existente
- Adicionar links internos novos entre artigos relacionados — é uma melhoria, não um risco
- Não publicar artigos sobre o mesmo tema com URLs diferentes (cannibalization)

---

### 8.5 Prevenção de Canibalização

**Situações de risco:**
- Homepage competindo com LP `/lavanderia/sao-jose-dos-campos` para "lavanderia São José dos Campos"
- Artigo do blog competindo com LP de serviço para mesma keyword

**Solução para homepage vs. LP de cidade:**
Homepage deve ser otimizada para termos brandados e genéricos regionais ("A7 Lavanderia", "lavanderia premium Vale do Paraíba"). As LPs de cidade competem pelos termos locais específicos.

**Solução para blog vs. LP de serviço:**
Artigos informativos ("como lavar tênis corretamente") não devem competir com LPs comerciais ("higienização profissional de tênis"). Os artigos são TOFU, as LPs são BOFU. Se houver sobreposição de keyword, usar canonical ou rebalancear o conteúdo do artigo para ser mais informacional.

**Auditoria recomendada antes do redesign:**
Verificar no Google Search Console quais artigos aparecem em SERPs de alta intenção transacional. Se um artigo está ranqueando para "lavanderia tênis São José dos Campos", não alterar esse artigo durante o redesign.

---

### 8.6 Diferenciação Visual das LPs sem Dano à Marca

**Princípio:** LPs programáticas devem ser reconhecidas como parte da A7 mas otimizadas para conversão local, não para identidade de marca.

**O que muda nas LPs vs. homepage:**
- Hero específico com nome da cidade no H1
- Seção de mapa com unidade local
- Depoimentos locais quando disponíveis
- FAQ com perguntas específicas da cidade
- CTA com mensagem WhatsApp pré-preenchida com a cidade

**O que NÃO muda:**
- Logo e cores (identidade consistente)
- Header e Footer (navegação consistente)
- Benefícios e serviços (oferta consistente)
- Schema markup (estrutura de dados consistente)

**Diferenciação visual permitida:**
- Banner hero com foto da cidade (Campos do Jordão com neve, Ubatuba com praia)
- Menção a bairros e pontos de referência locais
- Horário de atendimento específico da unidade

---

<a id="parte-9"></a>
## PARTE 9 — Plano de Implementação

### 9.1 Ordem de Prioridade

**Fase 0 — Auditoria Pré-Redesign (1-2 semanas)**
Obrigatória antes de qualquer alteração de código:
- [ ] Exportar ranking atual de palavras-chave (Google Search Console)
- [ ] Documentar posição do H1 em cada página de conversão
- [ ] Mapear todos os links internos existentes
- [ ] Backup completo do projeto atual em branch separada (`git checkout -b pre-redesign-backup`)
- [ ] Screenshot de todas as páginas principais (homepage, LPs top 5, artigos P0)
- [ ] Registrar Core Web Vitals atuais (LCP, CLS, FID) via PageSpeed Insights

---

**Fase 1 — Sistemas de Base (1-2 semanas)**
Itens que outros componentes dependem — implementar primeiro:
- [ ] Definir paleta de cores da versão selecionada e atualizar CSS custom properties
- [ ] Implementar sistema de tipografia (importar fontes via next/font)
- [ ] Criar componentes base reutilizáveis: Button, Badge, Card, ScrollReveal (se não existirem)
- [ ] Definir e aplicar escala de espaçamento no tailwind.config
- [ ] Criar variáveis CSS para todas as cores da nova paleta

---

**Fase 2 — Componentes Críticos de Conversão (2-3 semanas)**
Itens com maior impacto direto em conversão:
- [ ] **Hero** — Redesenhar com nova direção visual, manter H1 otimizado
- [ ] **QuoteForm** — Redesenhar e adiantar para posição 6 no layout
- [ ] **WhatsApp Float** — Implementar copy dinâmico por seção
- [ ] **Sticky CTA Mobile** — Novo componente, bottom bar mobile
- [ ] **TrustBar** — Simplificar para no máximo 4 colunas com dados precisos
- [ ] **CTA Final** — Redesenhar seção de fechamento

---

**Fase 3 — Seções de Conteúdo (2-3 semanas)**
Seções de meio-funil, narrativa e conteúdo:
- [ ] **PainPoints** — Nova estrutura visual (lista, não grid denso)
- [ ] **Benefits** — Grid limpo, ícones mínimos, espaçamento generoso
- [ ] **Services** — Cards com imagem real, links para LPs
- [ ] **HowItWorks** — 3 passos, visual numerado
- [ ] **SocialProof** — Grid/carousel com depoimentos reais
- [ ] **Pricing** — Cards com preço âncora visível

---

**Fase 4 — Seções Secundárias (1-2 semanas)**
Seções de suporte e informação:
- [ ] **About** — Layout editorial assimétrico
- [ ] **BlogSection** — 3 artigos P0 em destaque
- [ ] **FAQ** — Accordion com schema markup verificado
- [ ] **Header** — Sticky com CTA, mobile hambúrguer
- [ ] **Footer** — Links para cidades, colunas organizadas

---

**Fase 5 — LPs e Blog (2-4 semanas)**
Componentes compartilhados pelas páginas de conteúdo:
- [ ] Atualizar `SeoPageTemplate.tsx` com novo visual (sem alterar estrutura de dados)
- [ ] Revisar e melhorar CTAs inline nos 30 artigos do blog
- [ ] Adicionar breadcrumbs visuais nas LPs de cidade
- [ ] Verificar schema markup em todas as páginas programáticas após mudanças

---

**Fase 6 — Performance e Validação (1-2 semanas)**
Antes do deploy em produção:
- [ ] Auditoria de performance (PageSpeed Insights — meta: LCP < 2.5s, CLS < 0.1)
- [ ] Teste em dispositivos reais (iPhone 14, Samsung Galaxy, tablet)
- [ ] Verificação de schema markup (Google Rich Results Test)
- [ ] Revisão de alt texts de imagens
- [ ] Teste A/B configurado (mínimo: hero headline vs. alternativa)

---

### 9.2 Checklist de Validação Mobile

**Antes de qualquer deploy:**
- [ ] Hero: headline legível em 390px sem overflow ou font-size < 24px
- [ ] CTA do hero: visível sem scroll em iPhone SE (568px de altura)
- [ ] TrustBar: 2 colunas no mobile (não 4 columns que ficam ilegíveis)
- [ ] PainPoints: lista vertical, sem grid que quebre em 1 coluna
- [ ] Benefits: single column, espaçamento respeitado
- [ ] Services: scroll horizontal ou single column
- [ ] QuoteForm: campos ocupam 100% da largura, keyboard não corta o botão
- [ ] SocialProof: carousel funcional com swipe, indicadores de posição visíveis
- [ ] Sticky bottom CTA: não cobre conteúdo importante, 48px de height touch target
- [ ] WhatsApp Float: não sobrepõe o sticky bar
- [ ] Footer: collapsible no mobile, links com tamanho de toque adequado (44px+)
- [ ] FAQ accordion: itens com toque confortável (48px+ por item)

---

### 9.3 Checklist de Validação de Conversão

**KPIs a medir antes e depois:**
- [ ] Taxa de conversão: visitas → WhatsApp (via UTM + evento de clique)
- [ ] Taxa de conversão: visitas → QuoteForm preenchido
- [ ] Scroll depth: % de usuários que chegam até SocialProof, FAQ, CTA Final
- [ ] Click-through no hero CTA (heatmap — Hotjar ou Microsoft Clarity)
- [ ] Abandono de formulário: em que campo o usuário desiste
- [ ] CTR do WhatsApp Float vs. QuoteForm (qual converte mais por tipo de tráfego)

**Configurar antes do lançamento:**
- [ ] Google Analytics 4: events para cada CTA (button_click com label)
- [ ] Meta Pixel: evento Lead no submit do QuoteForm
- [ ] Google Tag Manager: trigger para WhatsApp link click
- [ ] Microsoft Clarity: session recording + heatmaps (gratuito, zero impacto LGPD com configuração correta)

---

### 9.4 Checklist de Validação SEO

**Pré-deploy:**
- [ ] Todas as rotas existentes respondem 200 (não 404)
- [ ] Redirects 301 configurados para qualquer URL alterada
- [ ] sitemap.ts atualizado com URLs corretas
- [ ] robots.ts permitindo indexação das páginas novas
- [ ] H1 único por página (verificar duplicatas)
- [ ] Meta title único por página
- [ ] Schema markup válido (teste em https://search.google.com/test/rich-results)
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Pós-deploy (primeiros 14 dias):**
- [ ] Monitorar impressões e posições no Google Search Console
- [ ] Verificar se páginas novas estão sendo indexadas (Coverage report)
- [ ] Checar se alguma página perdeu posição significativa (alerta: > 5 posições em keyword P0)
- [ ] Solicitar re-indexação de homepage e páginas alteradas via GSC

---

<a id="parte-10"></a>
## PARTE 10 — Recomendação Final

### 10.1 Qual versão para cada cenário

---

**Para tráfego pago frio (Google Ads, Meta Ads — awareness/conversão):**
**→ Versão A (DOPAMINE)**

Razão: Tráfego pago frio precisa de urgência visível, proposta de valor imediata e CTA que não permite procrastinação. A Versão A ataca a dor com linguagem direta, mostra disponibilidade hoje, e remove objeções com garantia explícita. O visitante que clicou em um anúncio está no modo "resolver agora" — a Versão A corresponde a esse estado mental.

Implementação específica: Criar landing pages dedicadas para campanhas (não usar a homepage) com headline que ecoe exatamente o copy do anúncio (message match). Ex: Anúncio "Lavanderia com coleta hoje em SJC" → LP com hero "Coleta hoje em São José dos Campos. Entrega em 48h."

---

**Para tráfego orgânico (SEO — busca informacional e local):**
**→ Versão C (AUTHORITY), com elementos de Versão B**

Razão: Quem chega por busca orgânica já investiu tempo pesquisando — quer ser convencido por credibilidade, não por urgência artificial. A Versão C com seus números concretos, provas verificáveis e linguagem de liderança de mercado converte esse perfil. Elementos de Versão B (espaçamento, tipografia editorial) podem ser incorporados na Versão C para elevar a percepção de premium sem sacrificar a densidade de prova.

---

**Para construção de confiança local (Google Maps, referências de boca a boca):**
**→ Versão C (AUTHORITY)**

Razão: Clientes que chegam por indicação ou pelo Maps querem confirmar que a empresa é real, sólida, estabelecida. A Versão C com fotos reais das unidades, endereços visíveis, equipe identificada, e volume de avaliações em destaque é exatamente o que esse perfil precisa para confirmar a decisão que já estava quase tomada.

---

**Para construção de marca premium no longo prazo:**
**→ Versão B (CLEAN LUXURY)**

Razão: A Versão B é a que posiciona a A7 como uma marca de luxo — não uma lavanderia com preço baixo ou urgência de promoção. Para uma estratégia de 18-36 meses onde o objetivo é aumentar ticket médio, expandir para clientes de altíssima renda, e se diferenciar radicalmente de qualquer concorrente no Vale do Paraíba, a Versão B é a aposta certa. É a única das três que faz o visitante sentir que está escolhendo algo especial, não apenas conveniente.

---

**Para geração rápida de leads (conversão máxima no menor prazo):**
**→ Versão A (DOPAMINE) — homepage + Versão C — páginas orgânicas**

Razão: Uma abordagem híbrida pragmática. A homepage, que recebe a maior parte do tráfego pago e direto, é tratada como landing page de alta conversão (Versão A). As LPs de cidade e de serviço, que recebem tráfego orgânico de maior intenção, usam a Versão C. O blog permanece neutro em termos de versão — foco em qualidade de conteúdo, não em design "persuasivo".

---

### 10.2 Recomendação Definitiva

**Para a situação atual da A7 Lavanderia (escala em expansão, base sólida, precisando crescer):**

**Implementar Versão B como identidade base do site, com CTAs e elementos de urgência da Versão A em posições estratégicas.**

Esta é a "síntese de mercado": o design e a identidade visual da Versão B posicionam a A7 como líder premium — o que justifica preço, reduz a comparação direta com concorrentes de preço baixo, e atrai o perfil de cliente de maior valor de vida útil (Beatriz e Carlos). Os elementos de urgência da Versão A (WhatsApp Float dinâmico, sticky CTA mobile, copy de disponibilidade hoje) garantem que a conversão de tráfego pago não seja sacrificada em nome da estética.

A Versão C tem seu papel reservado para as LPs programáticas das 14 cidades — onde a densidade de prova local (avaliações da cidade, endereço físico, bairros atendidos) é o fator de conversão dominante.

**Sequência de implementação:**
1. Implementar o design system da Versão B no site principal
2. Adicionar os componentes de urgência/conversão da Versão A (sticky bar, float dinâmico, urgência contextual)
3. Atualizar `SeoPageTemplate.tsx` com a estrutura de prova local da Versão C
4. Medir resultados por 60 dias antes de qualquer nova iteração

**O que a A7 ganha com esta síntese:**
- Posicionamento premium que justifica preço acima dos concorrentes
- Taxa de conversão de tráfego pago mantida ou melhorada pelos elementos de urgência
- Autoridade local reforçada pelas LPs de cidade otimizadas
- Identidade de marca consistente e reconhecível em todas as 14 cidades
- Base visual que suporta expansão de franchising (a marca parece investível)

---

### 10.3 Métricas de Sucesso do Redesign

| Métrica | Baseline a medir | Meta 90 dias |
|---------|-----------------|-------------|
| Conversão hero CTA | [medir antes] | +30% vs. baseline |
| QuoteForm preenchido | [medir antes] | +50% vs. baseline |
| WhatsApp click | [medir antes] | +40% vs. baseline |
| Bounce rate mobile | [medir antes] | -15% vs. baseline |
| Scroll depth até SocialProof | [medir antes] | +25% vs. baseline |
| Posições P0 no GSC | [documentar antes] | Manter ou melhorar todas |
| LCP mobile | [medir antes] | < 2.5s |
| CLS | [medir antes] | < 0.1 |

---

*Documento criado por Growth Engine · A7 Lavanderia · 2026-03-13*
*Versão: 1.0 — Para implementação imediata*
