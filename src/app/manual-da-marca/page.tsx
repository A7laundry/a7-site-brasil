"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const PERSONALITY_TRAITS = [
  { word: "BOLD", sub: "Audacioso", desc: "Não pedimos licença para ocupar espaço. A A7 tem convicção." },
  { word: "SHARP", sub: "Preciso", desc: "Cada detalhe importa. Do atendimento à entrega, zero tolerância à mediocridade." },
  { word: "HUMAN", sub: "Humano", desc: "Tecnologia e escala, com o calor de quem realmente se importa." },
  { word: "FREE", sub: "Libertador", desc: "Devolvemos o bem mais escasso do mundo moderno: o seu tempo." },
  { word: "MOVE", sub: "Em Movimento", desc: "Uma marca viva, em expansão, que cresce junto com quem usa." },
];

const AUDIENCES = [
  {
    title: "O Profissional de Alta Performance",
    tag: "BUSY PRO",
    desc: "CEO, médico, advogado, gestor. Agenda lotada. Zero tempo para roupa. Quer resultado sem processo.",
    pain: "Tempo é dinheiro. Cada hora lavando roupa é uma hora não vendida.",
    promise: "A7 é o assistente pessoal das suas roupas.",
    color: "from-[#0C5982] to-[#0a4a6e]",
  },
  {
    title: "A Família Moderna",
    tag: "FAMILY",
    desc: "Casal com filhos, dupla jornada, fim de semana curto. A logística doméstica engole o tempo livre.",
    pain: "Lavanderia é a tarefa que nunca acaba — e que sempre atrasa o que importa.",
    promise: "A7 é a terceirização inteligente da rotina.",
    color: "from-[#0e6fa3] to-[#0C5982]",
  },
  {
    title: "O Anfitião 5 Estrelas",
    tag: "AIRBNB HOST",
    desc: "Proprietário de imóvel por temporada. Avaliação depende de roupa de cama impecável.",
    pain: "Uma nota 4 por roupa mal lavada custa caro demais.",
    promise: "A7 é o padrão hotel que seus hóspedes sentem sem saber o porquê.",
    color: "from-[#1a7ab5] to-[#0e6fa3]",
  },
  {
    title: "O Empreendedor",
    tag: "BUSINESS",
    desc: "Dono de restaurante, clínica, academia, escritório. Uniforme e enxoval são parte da marca.",
    pain: "Operação parada por falta de uniforme é custo invisível mas real.",
    promise: "A7 Business: SLA garantido, nota fiscal, parceria de verdade.",
    color: "from-[#074060] to-[#0C5982]",
  },
  {
    title: "O Indivíduo Premium",
    tag: "PREMIUM",
    desc: "Alguém que gasta bem, escolhe com critério e não aceita menos do que o melhor.",
    pain: "Lavanderia comum não trata cashmere, seda e peças de grife como merecem.",
    promise: "A7 Premium: curadoria têxtil para quem entende valor.",
    color: "from-[#0a3a52] to-[#0C5982]",
  },
];

const VOICE_CHANNELS = [
  {
    channel: "Site / Landing Pages",
    tone: "Direto. Persuasivo. Sem rodeios.",
    example: "\"Coleta hoje. Entrega amanhã. Sem esforço nenhum.\"",
    avoid: "\"Oferecemos soluções completas para higienização têxtil profissional.\"",
  },
  {
    channel: "Redes Sociais",
    tone: "Provocador. Inteligente. Com personalidade.",
    example: "\"Seu domingo não foi feito para máquina de lavar.\"",
    avoid: "\"Confira nossas promoções e serviços especiais!\"",
  },
  {
    channel: "Anúncios",
    tone: "Urgente. Emocional. Benefício acima de tudo.",
    example: "\"4h de fim de semana de volta. É disso que se trata.\"",
    avoid: "\"A melhor lavanderia da cidade com os melhores preços!\"",
  },
  {
    channel: "WhatsApp",
    tone: "Humano. Rápido. Sem formalidade excessiva.",
    example: "\"Oi! Tudo pronto. Sua entrega sai hoje até às 19h. 🙌\"",
    avoid: "\"Prezado cliente, informamos que seu pedido está em processamento.\"",
  },
  {
    channel: "Atendimento",
    tone: "Empático. Resolutivo. Proativo.",
    example: "\"Entendo. Vou resolver isso agora mesmo para você.\"",
    avoid: "\"Vou verificar com a equipe e retorno em breve.\"",
  },
];

const COLORS_PRIMARY = [
  { name: "A7 Navy", hex: "#0C5982", label: "Cor principal", use: "Logotipo · Headers · CTAs primários" },
  { name: "A7 Cyan", hex: "#46C1F1", label: "Cor de acento", use: "Destaques · Ícones · Links · Hover states" },
  { name: "A7 Black", hex: "#080B10", label: "Fundo profundo", use: "Seções premium · Contraste máximo · Hero" },
  { name: "A7 White", hex: "#F8FAFC", label: "Respiro", use: "Fundos · Espaço negativo · Texto em escuro" },
];

const COLORS_EXTENDED = [
  { name: "Navy Light", hex: "#1A7AB5" },
  { name: "Cyan Dark", hex: "#2DA8D8" },
  { name: "Midnight", hex: "#050A14" },
  { name: "Slate", hex: "#64748B" },
  { name: "Ice", hex: "#E0F4FF" },
  { name: "Success", hex: "#10B981" },
];

const TAGLINES = [
  { line: "Seu tempo de volta.", note: "Principal — institucional" },
  { line: "Limpo. Livre. A7.", note: "Versão curta — redes sociais" },
  { line: "Roupas que voltam. Tempo que fica.", note: "Storytelling" },
  { line: "A melhor decisão que você pode lavar.", note: "Trocadilho inteligente" },
  { line: "Viva mais. Lave menos.", note: "Lifestyle" },
  { line: "Roupa impecável, rotina intocada.", note: "Premium" },
  { line: "Porque seu fim de semana merece mais.", note: "Emocional" },
  { line: "Não é lavanderia. É liberdade.", note: "Manifesto" },
  { line: "De 0 a impecável em 48h.", note: "Performance" },
  { line: "O padrão que você merece.", note: "Premium" },
  { line: "A7. Sempre pronto.", note: "Confiança" },
  { line: "Pare de lavar. Comece a viver.", note: "Provocador" },
  { line: "O detalhe que eleva tudo.", note: "Aspiracional" },
  { line: "Sua roupa nunca esteve tão bem.", note: "Resultado" },
  { line: "Tempo é o novo luxo. Guarde o seu.", note: "Lifestyle premium" },
  { line: "Coleta, cuida, entrega. Você só usa.", note: "Processo simples" },
  { line: "A lavanderia que pensa como você.", note: "Inteligência" },
  { line: "Tecnologia no cuidado. Humanidade na entrega.", note: "Tech + human" },
  { line: "Cada peça tratada como se fosse nossa.", note: "Cuidado" },
  { line: "Escale sua vida. A A7 cuida do resto.", note: "B2B / empreendedor" },
];

const CAMPAIGNS = [
  {
    name: "\"Calcule o que você perde\"",
    tag: "AWARENESS",
    concept: "Uma calculadora interativa que mostra quantas horas por ano a pessoa perde lavando roupa, passando e dobrando. O resultado é devastador. A solução é óbvia.",
    channels: "Digital · Social · Landing Page",
    hook: "Você sabe exatamente quanto tempo joga fora toda semana?",
  },
  {
    name: "\"Domingo Livre\"",
    tag: "CONVERSION",
    concept: "Sequência de stories e reels mostrando o que pessoas reais fazem no domingo com o tempo que a A7 devolveu. Viagem, família, esporte, descanso. Roupa na A7.",
    channels: "Instagram · TikTok · YouTube Shorts",
    hook: "Esse é o domingo de quem usa A7.",
  },
  {
    name: "\"Sua Roupa Tem Memória\"",
    tag: "EMOTIONAL",
    concept: "Cada peça de roupa carrega uma história. O terno da entrevista. O vestido do aniversário. Nós cuidamos do que tem valor. Campanha de brand equity pura.",
    channels: "Video · OOH · Social",
    hook: "Algumas roupas a gente nunca esquece.",
  },
  {
    name: "\"A7 Business: O Uniforme que Vende\"",
    tag: "B2B",
    concept: "Focada em empresários. Mostra como uniforme bem cuidado eleva a percepção da marca. Dados reais de clientes. Case de restaurantes e clínicas.",
    channels: "LinkedIn · Google Ads · Outbound",
    hook: "Sua equipe é a sua marca. Como ela está?",
  },
  {
    name: "\"Avaliação 5 Estrelas Começa na Cama\"",
    tag: "AIRBNB",
    concept: "Para anfitriões Airbnb. Conexão direta entre roupa de cama impecável e avaliação alta. ROI imediato e mensurável.",
    channels: "Meta Ads · Google · Airbnb Community",
    hook: "O hóspede não fala da cama. Mas dá nota por ela.",
  },
  {
    name: "\"O Padrão Hotel em Casa\"",
    tag: "PREMIUM",
    concept: "Serviço A7 Premium. Imagens de hotéis 5 estrelas — a mesma qualidade de dobramento, perfume e entrega, na sua casa.",
    channels: "Instagram · Pinterest · Display Premium",
    hook: "Você não mora em um hotel. Mas sua roupa pode ser tratada como se morasse.",
  },
  {
    name: "\"Manifesto A7\"",
    tag: "BRAND FILM",
    concept: "Video de 60s. Sem narração no início. Imagens de pessoas correndo, trabalhando, criando, amando. Fim: 'Enquanto você vive — A7 trabalha.' Arrepio garantido.",
    channels: "YouTube · Cinema Local · OOH Digital",
    hook: "Enquanto você vive, a A7 trabalha.",
  },
  {
    name: "\"Teste A7\"",
    tag: "TRIAL",
    concept: "Primeira coleta com 30% de desconto. Funil completo: anúncio → LP → WhatsApp → coleta → surpreender na entrega → retenção. Conversão de experimentação em hábito.",
    channels: "Google Search · Meta Ads · WhatsApp",
    hook: "Uma vez que você experimenta, não volta atrás.",
  },
  {
    name: "\"Plano Família: Paz em Casa\"",
    tag: "SUBSCRIPTION",
    concept: "Para famílias. Foco na paz doméstica — menos discussão sobre quem lava a roupa. Humor inteligente. Resultado emocional: mais harmonia.",
    channels: "Instagram · Facebook · Google",
    hook: "Você nunca mais vai brigar por causa de roupa.",
  },
  {
    name: "\"A7 na Sua Cidade\"",
    tag: "GEO EXPANSION",
    concept: "Campanha de entrada em novas cidades. Cada cidade recebe uma campanha personalizada com pontos de referência locais e depoimentos de moradores reais.",
    channels: "Geo-targeted Digital · OOH Local · WhatsApp",
    hook: "A A7 chegou em [cidade]. E o seu domingo nunca mais vai ser o mesmo.",
  },
];

const ECOSYSTEM = [
  {
    brand: "A7 Lavanderia",
    icon: "🧺",
    pos: "Core",
    desc: "O serviço principal. Lavagem profissional com coleta e entrega. Base de toda a operação.",
    color: "#0C5982",
  },
  {
    brand: "A7 Express",
    icon: "⚡",
    pos: "Fast Track",
    desc: "Entrega em 24h para urgências. Premium price, máxima agilidade. Para quem não pode esperar.",
    color: "#1A7AB5",
  },
  {
    brand: "A7 Business",
    icon: "🏢",
    pos: "B2B",
    desc: "Solução completa para empresas. Contratos mensais, nota fiscal, SLA garantido, conta dedicada.",
    color: "#074060",
  },
  {
    brand: "A7 Premium",
    icon: "⭐",
    pos: "Luxury",
    desc: "Curadoria têxtil para peças especiais. Seda, cashmere, couro, grife. Protocolo único por material.",
    color: "#0a3a52",
  },
  {
    brand: "A7 Sustentável",
    icon: "🌿",
    pos: "Green",
    desc: "70% menos água. Produtos biodegradáveis. Para quem quer qualidade sem culpa ambiental.",
    color: "#0e6945",
  },
  {
    brand: "A7 Franchising",
    icon: "📍",
    pos: "Expansion",
    desc: "Modelo replicável. Brand playbook completo. Operação treinada. Escala nacional em construção.",
    color: "#3a0a52",
  },
];

const TOUCH_POINTS = [
  { moment: "Primeiro Contato", feel: "Surpreendente", desc: "Anúncio ou indicação que interrompe o scroll. Proposta clara. Um clique até o WhatsApp." },
  { moment: "Agendamento", feel: "Sem Fricção", desc: "Menos de 3 mensagens no WhatsApp. Dia, hora, endereço. Confirmação automática com foto do coletor." },
  { moment: "Coleta", feel: "Profissional", desc: "Coletor uniformizado, pontual, simpático. Sacola A7 com lacre. Recibo digital imediato." },
  { moment: "Processo", feel: "Transparente", desc: "Atualização por WhatsApp. Status em tempo real. Sem sumiço, sem silêncio." },
  { moment: "Entrega", feel: "Dopaminérgico", desc: "Roupas dobradas em padrão hotel. Perfumadas. Embaladas. O momento de abrir a sacola tem que ser inesquecível." },
  { moment: "Pós-entrega", feel: "Relacionamento", desc: "Agradecimento personalizado. Cupom para próxima coleta. Pergunta de satisfação. Não desaparecer." },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function ManualDaMarcaPage() {
  return (
    <div className="min-h-screen bg-[#080B10] text-white font-sans">

      {/* ── NAV ── */}
      <header className="fixed top-0 w-full z-50 bg-[#080B10]/95 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-6 text-xs text-white/40 font-semibold tracking-widest uppercase">
            <span>Brand OS</span>
            <span className="text-white/20">·</span>
            <span>2025 — 2026</span>
          </div>
          <Link href="/growth-engine" className="text-white/50 hover:text-white text-sm transition-colors">
            ← Growth Engine
          </Link>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          01 · MANIFESTO
      ══════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C5982]/20 via-transparent to-[#46C1F1]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0C5982]/8 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-12">01 — Manifesto</p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-16"
          >
            <span className="block text-white">Nós não</span>
            <span className="block text-[#46C1F1]">lavamos</span>
            <span className="block text-white">roupas.</span>
          </motion.h1>

          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-white/70 leading-relaxed border-l-4 border-[#46C1F1] pl-8">
            <p>
              Enquanto você descansa, cuida de quem ama, constrói seu negócio ou simplesmente <em className="text-white">vive</em> — a A7 trabalha.
            </p>
            <p>
              Cada peça que sai daqui não é só roupa limpa. É a sua manhã de volta. É a sua semana inteira. É a liberdade de fazer o que realmente move o mundo.
            </p>
            <p>
              Somos a empresa que existe para que você não perca mais nenhuma hora do que é irrepetivelmente seu.
            </p>
            <p className="text-white font-bold text-2xl mt-8">
              A7. Porque seu tempo vale mais.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          02 · PURPOSE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#0C5982]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">02 — Brand Purpose</p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-12">
            Existimos para<br />
            <span className="text-[#46C1F1]">devolver o tempo</span><br />
            que a vida rouba.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "O Problema Real", text: "Uma família brasileira perde entre 4 e 8 horas por semana com lavagem, secagem, passagem e dobramento. São mais de 400 horas por ano." },
              { title: "Nossa Solução", text: "A A7 assume toda essa operação. Coleta, trata, dobra e entrega — com padrão profissional, em 48 horas, no seu endereço." },
              { title: "O Impacto", text: "Não vendemos limpeza. Vendemos presença. A hora que você recupera com a A7 é a hora que você passa fazendo o que importa." },
            ].map((item) => (
              <div key={item.title} className="border border-white/20 rounded-2xl p-8">
                <h3 className="text-[#46C1F1] font-black text-sm uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          03 · POSITIONING
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">03 — Brand Positioning</p>

          <div className="border border-[#46C1F1]/30 rounded-3xl p-12 md:p-20 text-center mb-16">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-6">A A7 é a única</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              empresa de conveniência<br />lifestyle no Brasil que<br />
              <span className="text-[#46C1F1]">devolve tempo real</span><br />
              com precisão profissional.
            </h2>
            <p className="text-white/50 text-lg mt-8 max-w-2xl mx-auto">
              Não somos uma lavanderia. Somos a primeira empresa de gerenciamento têxtil por assinatura com foco em qualidade de vida.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Categoria que Ocupamos", value: "Lifestyle Convenience" },
              { label: "Território Emocional", value: "Liberdade + Controle" },
              { label: "Promessa Central", value: "Tempo Devolvido" },
              { label: "Prova", value: "48h · Coleta Grátis · Resultado Garantido" },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.04] rounded-2xl p-6">
                <p className="text-[#46C1F1] text-xs font-bold uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-white font-black text-lg leading-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          04 · PERSONALITY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#080B10]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">04 — Brand Personality</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16">
            A A7 não tem só<br /><span className="text-[#46C1F1]">um serviço.</span><br />Tem caráter.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PERSONALITY_TRAITS.map((t, i) => (
              <div
                key={t.word}
                className="group relative overflow-hidden bg-white/[0.03] hover:bg-[#0C5982]/30 border border-white/[0.08] hover:border-[#46C1F1]/40 rounded-3xl p-8 transition-all duration-300 cursor-default"
              >
                <p className="text-6xl font-black text-white/10 group-hover:text-[#46C1F1]/20 transition-colors leading-none mb-4">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-3xl font-black text-white tracking-tighter mb-1">{t.word}</p>
                <p className="text-[#46C1F1] text-xs font-bold uppercase tracking-widest mb-4">{t.sub}</p>
                <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          05 · TARGET AUDIENCE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">05 — Target Audience</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            Quem é o<br /><span className="text-[#46C1F1]">cliente A7.</span>
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-xl">Não atendemos todo mundo. Atendemos quem valoriza o que a gente oferece: resultado e tempo.</p>

          <div className="space-y-4">
            {AUDIENCES.map((a) => (
              <div key={a.tag} className={`group relative overflow-hidden bg-gradient-to-r ${a.color} rounded-3xl p-8 md:p-10`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">{a.tag}</span>
                  </div>
                  <div className="flex-1 grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-black text-white mb-2">{a.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{a.desc}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Dor Principal</p>
                      <p className="text-white/80 text-sm leading-relaxed">{a.pain}</p>
                    </div>
                    <div>
                      <p className="text-[#46C1F1] text-xs font-bold uppercase tracking-widest mb-2">Promessa A7</p>
                      <p className="text-white font-semibold text-sm leading-relaxed">{a.promise}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          06 · BRAND VOICE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#080B10]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">06 — Brand Voice</p>
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-6">
                A A7 fala<br />como <span className="text-[#46C1F1]">uma pessoa.</span><br />Não como uma empresa.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Diretos. Honestos. Com personalidade. Nunca corporativos, nunca genéricos, nunca vazios.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { trait: "Direto", opp: "Prolixo" },
                { trait: "Humano", opp: "Corporativo" },
                { trait: "Confiante", opp: "Arrogante" },
                { trait: "Inteligente", opp: "Complexo" },
              ].map((t) => (
                <div key={t.trait} className="bg-white/[0.04] rounded-2xl p-5">
                  <p className="text-[#46C1F1] font-black">{t.trait}</p>
                  <p className="text-white/30 text-sm">não {t.opp}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {VOICE_CHANNELS.map((v) => (
              <div key={v.channel} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-48 flex-shrink-0">
                    <p className="text-[#46C1F1] font-black text-sm uppercase tracking-widest">{v.channel}</p>
                    <p className="text-white/40 text-xs mt-1">{v.tone}</p>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-4">
                    <div className="bg-[#0C5982]/20 border border-[#46C1F1]/20 rounded-xl p-4">
                      <p className="text-[#46C1F1] text-xs font-bold uppercase mb-2">✓ USE</p>
                      <p className="text-white text-sm leading-relaxed">{v.example}</p>
                    </div>
                    <div className="bg-red-950/30 border border-red-900/30 rounded-xl p-4">
                      <p className="text-red-400 text-xs font-bold uppercase mb-2">✕ EVITE</p>
                      <p className="text-white/50 text-sm leading-relaxed">{v.avoid}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          07 · VISUAL IDENTITY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#0C5982]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">07 — Visual Identity</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16">
            Sistema Visual<br /><span className="text-white">A7 Brand OS.</span>
          </h2>

          {/* LOGO */}
          <div className="mb-16">
            <h3 className="text-xl font-black text-white/60 uppercase tracking-widest mb-8">Logotipo</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/logo-light.png", bg: "bg-[#0C5982]", label: "Negativa — Fundo Escuro", rule: "Uso preferencial digital" },
                { src: "/logo-dark.png", bg: "bg-white", label: "Positiva — Fundo Claro", rule: "Headers brancos, e-mail" },
                { src: "/logo-vertical.png", bg: "bg-white", label: "Vertical — Preferencial", rule: "Material impresso, fachadas" },
                { src: "/logo-symbol.png", bg: "bg-white", label: "Símbolo", rule: "Avatar, favicon, ícone" },
              ].map((v) => (
                <div key={v.label} className="rounded-2xl overflow-hidden border border-white/20">
                  <div className={`${v.bg} h-32 flex items-center justify-center p-6`}>
                    <img src={v.src} alt={v.label} className="max-h-16 max-w-full object-contain" />
                  </div>
                  <div className="bg-white/10 p-4">
                    <p className="font-bold text-white text-sm">{v.label}</p>
                    <p className="text-white/50 text-xs mt-1">{v.rule}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white/10 rounded-2xl p-6">
              <p className="text-[#46C1F1] font-black text-sm uppercase tracking-widest mb-3">Zona de Respiro</p>
              <p className="text-white/70 text-sm">Mínimo equivalente à largura das letras <strong className="text-white">AA</strong> em todos os lados. Mín. digital: 50px. Mín. impresso: 20mm.</p>
            </div>
          </div>

          {/* COLORS */}
          <div className="mb-16">
            <h3 className="text-xl font-black text-white/60 uppercase tracking-widest mb-8">Paleta de Cores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {COLORS_PRIMARY.map((c) => (
                <div key={c.name} className="rounded-2xl overflow-hidden border border-white/20">
                  <div className="h-24" style={{ backgroundColor: c.hex }} />
                  <div className="bg-white/10 p-4">
                    <p className="font-black text-white">{c.name}</p>
                    <p className="font-mono text-[#46C1F1] text-sm">{c.hex}</p>
                    <p className="text-white/50 text-xs mt-1">{c.label}</p>
                    <p className="text-white/40 text-xs">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {COLORS_EXTENDED.map((c) => (
                <div key={c.name} className="rounded-xl overflow-hidden border border-white/10">
                  <div className="h-12" style={{ backgroundColor: c.hex }} />
                  <div className="bg-white/5 p-3">
                    <p className="text-white/70 text-xs font-bold">{c.name}</p>
                    <p className="font-mono text-white/40 text-xs">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TYPOGRAPHY */}
          <div>
            <h3 className="text-xl font-black text-white/60 uppercase tracking-widest mb-8">Tipografia</h3>
            <div className="space-y-4">
              {[
                { name: "Display / Impacto", spec: "Inter Black · 64–96px · tracking -0.04em", sample: "Seu tempo de volta.", note: "Headlines de campanha, hero sections" },
                { name: "Heading / Destaque", spec: "Inter ExtraBold · 32–56px · tracking -0.02em", sample: "A7 Lavanderia.", note: "Títulos de seção, carrossel" },
                { name: "Body / Leitura", spec: "Inter Regular/Medium · 16–18px · leading 1.6", sample: "Coleta, cuidado e entrega em 48 horas.", note: "Parágrafos, FAQs, descrições" },
                { name: "Label / Interface", spec: "Inter Bold · 10–12px · tracking +0.1em · UPPERCASE", sample: "SERVIÇOS · PREÇOS · COMO FUNCIONA", note: "Tags, botões, navegação" },
              ].map((t) => (
                <div key={t.name} className="bg-white/10 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[#46C1F1] text-xs font-black uppercase tracking-widest">{t.name}</p>
                      <p className="text-white/40 text-xs mt-1 font-mono">{t.spec}</p>
                    </div>
                    <p className="text-white/30 text-xs">{t.note}</p>
                  </div>
                  <p className="text-3xl font-black text-white">{t.sample}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          08 · SOCIAL MEDIA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">08 — Social Media Style</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16">
            Não postamos conteúdo.<br /><span className="text-[#46C1F1]">Criamos momentos.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                format: "Reels / TikTok",
                hook: "Primeiros 3 segundos decidem tudo",
                structure: ["Provocação visual forte", "Reveal do problema", "Solução A7 em ação", "CTA simples e direto"],
                vibe: "Rápido · Estético · Real",
              },
              {
                format: "Feed / Carrossel",
                hook: "Slide 1 = headline de revista",
                structure: ["Slide 1: Provocação", "Slide 2–4: Dados / Contexto", "Slide 5–7: Solução", "Último: CTA + swipe up"],
                vibe: "Clean · Informativo · Aspiracional",
              },
              {
                format: "Stories",
                hook: "Conversação, não publicidade",
                structure: ["Bastidores reais", "Antes e depois", "Depoimento rápido", "Enquete / pergunta"],
                vibe: "Humano · Autêntico · Próximo",
              },
            ].map((f) => (
              <div key={f.format} className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8">
                <p className="text-[#46C1F1] font-black text-sm uppercase tracking-widest mb-2">{f.format}</p>
                <p className="text-white/40 text-xs mb-6 italic">&ldquo;{f.hook}&rdquo;</p>
                <ul className="space-y-2 mb-6">
                  {f.structure.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-[#46C1F1] font-black">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest border-t border-white/10 pt-4">{f.vibe}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0C5982]/20 border border-[#0C5982]/30 rounded-3xl p-8">
            <h3 className="text-xl font-black text-white mb-6">Pilares de Conteúdo</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { pillar: "Educação", pct: "30%", desc: "Cuidado com tecidos, hábitos, dicas" },
                { pillar: "Prova Social", pct: "25%", desc: "Depoimentos reais, antes/depois" },
                { pillar: "Lifestyle", pct: "20%", desc: "Tempo livre, qualidade de vida" },
                { pillar: "Bastidores", pct: "15%", desc: "Processo, equipe, operação" },
                { pillar: "Oferta", pct: "10%", desc: "Promoções, novidades, CTA" },
              ].map((p) => (
                <div key={p.pillar} className="text-center">
                  <p className="text-3xl font-black text-[#46C1F1]">{p.pct}</p>
                  <p className="text-white font-bold text-sm mt-1">{p.pillar}</p>
                  <p className="text-white/40 text-xs mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          09 · ADVERTISING
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#080B10]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">09 — Advertising Style</p>
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            Anúncios que<br /><span className="text-[#46C1F1]">param o scroll.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: "Google Search",
                rule: "Headline = benefício emocional, não descrição de serviço",
                ex_title: "FAÇA",
                ex: "\"Seu domingo livre começa com a A7 | Coleta grátis hoje\"",
                not_title: "EVITE",
                not: "\"Lavanderia profissional em SJC — serviços de qualidade\"",
              },
              {
                type: "Meta / Instagram Ads",
                rule: "Primeiros 3s devem ser visuais poderosos + texto de gancho",
                ex_title: "FAÇA",
                ex: "Visual: roupa dobrada em padrão hotel. Texto: 'Isso chegou na casa dela ontem.'",
                not_title: "EVITE",
                not: "Logo + nome da empresa + lista de serviços",
              },
              {
                type: "Landing Pages",
                rule: "Um problema. Uma solução. Uma CTA. Sem distração.",
                ex_title: "ESTRUTURA",
                ex: "Hero bold → Stats → Processo → Depoimento → CTA → FAQ → CTA final",
                not_title: "PROIBIDO",
                not: "Menu de navegação. Links externos. Mais de 1 CTA por fold.",
              },
              {
                type: "OOH / Outdoor",
                rule: "7 palavras ou menos. Visual que funciona em 3 segundos.",
                ex_title: "APROVADO",
                ex: "\"Domingo livre. A7 cuida do resto.\"",
                not_title: "REPROVADO",
                not: "Logo + endereço + telefone + lista de serviços",
              },
            ].map((a) => (
              <div key={a.type} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
                <p className="text-[#46C1F1] font-black text-sm uppercase tracking-widest mb-2">{a.type}</p>
                <p className="text-white/50 text-xs mb-6 italic">{a.rule}</p>
                <div className="space-y-3">
                  <div className="bg-[#0C5982]/20 border border-[#46C1F1]/20 rounded-xl p-4">
                    <p className="text-[#46C1F1] text-xs font-bold mb-2">✓ {a.ex_title}</p>
                    <p className="text-white text-sm">{a.ex}</p>
                  </div>
                  <div className="bg-red-950/20 border border-red-900/20 rounded-xl p-4">
                    <p className="text-red-400 text-xs font-bold mb-2">✕ {a.not_title}</p>
                    <p className="text-white/50 text-sm">{a.not}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          10 · CUSTOMER EXPERIENCE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#0C5982]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">10 — Customer Experience</p>
          <h2 className="text-5xl font-black tracking-tighter mb-4">
            A experiência<br />é <span className="text-white">o produto.</span>
          </h2>
          <p className="text-white/60 text-lg mb-16 max-w-xl">Cada ponto de contato precisa surpreender. A A7 deve ser memorável — não apenas funcional.</p>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#46C1F1]/30" />
            <div className="space-y-6 pl-20">
              {TOUCH_POINTS.map((t, i) => (
                <div key={t.moment} className="relative">
                  <div className="absolute -left-[3.25rem] w-8 h-8 rounded-full bg-[#46C1F1] text-[#0C5982] flex items-center justify-center font-black text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <p className="text-white font-black text-lg">{t.moment}</p>
                        <p className="text-white/60 text-sm mt-1 leading-relaxed">{t.desc}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="bg-[#46C1F1] text-[#0C5982] font-black text-xs uppercase px-4 py-2 rounded-full">{t.feel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          11 · PHYSICAL APPLICATIONS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">11 — Physical Applications</p>
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            A marca que<br /><span className="text-[#46C1F1]">você toca.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { item: "Uniforme", spec: "Calça preta · Camisa A7 Navy · Bordado lateral · Crachá magnético", icon: "👔" },
              { item: "Sacola de Coleta", spec: "Lona resistente · Azul Navy · Logo positiva · Lacre numerado com QR Code", icon: "🛍️" },
              { item: "Veículo de Entrega", spec: "Envelopamento total · Fundo Navy · Logo lateral horizontal branca · Tagline na traseira", icon: "🚐" },
              { item: "Fachada de Loja", spec: "Fundo #0C5982 · Logo branca centralizada · Iluminação de LED branco · Vidro limpo", icon: "🏪" },
              { item: "Embalagem / Entrega", spec: "Papel A7 Navy · Adesivo lacre · Cheiro de lavanda leve · Cartão de agradecimento manuscrito", icon: "📦" },
              { item: "Papelaria", spec: "Cartão de visita · Timbrado · Envelope · Etiqueta têxtil · Tag de preço", icon: "🗂️" },
            ].map((a) => (
              <div key={a.item} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-3xl mb-4">{a.icon}</p>
                <p className="text-white font-black text-lg mb-2">{a.item}</p>
                <p className="text-white/50 text-sm leading-relaxed">{a.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          12 · PHOTOGRAPHY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#080B10]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">12 — Photography Style</p>
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            Imagens que<br /><span className="text-[#46C1F1]">vendem estilo de vida,</span><br />não serviço.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-[#46C1F1] font-black uppercase tracking-widest text-xs mb-4">Luz</p>
                <p className="text-white/70 text-sm leading-relaxed">Natural e difusa. Nunca flash direto. Prefira luz da janela, ambiência quente. Evitar sombras duras. Sensação de lar limpo, não de estúdio.</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-[#46C1F1] font-black uppercase tracking-widest text-xs mb-4">Paleta</p>
                <p className="text-white/70 text-sm leading-relaxed">Tons neutros dominam: branco, off-white, linho, madeira. Pontos de cor: A7 Navy ou Cyan como acento pontual. Nunca colorido excessivo.</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-[#46C1F1] font-black uppercase tracking-widest text-xs mb-4">Composição</p>
                <p className="text-white/70 text-sm leading-relaxed">Regra dos terços. Espaço negativo generoso. Texturas de tecido em destaque. Dobramento visto de cima (flat lay) para produto. Pessoas reais, não modelos perfeitos.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-[#46C1F1] font-black uppercase tracking-widest text-xs mb-4">Emoção que as fotos devem transmitir</p>
                <ul className="space-y-2">
                  {[
                    "Calma — dormitório organizado ao amanhecer",
                    "Leveza — pessoa rindo enquanto coloca a sacola na porta",
                    "Status — roupas dobradas em padrão hotel no quarto",
                    "Liberdade — família no parque, não na lavanderia",
                    "Profissionalismo — equipe uniformizada na operação",
                  ].map((e, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-[#46C1F1] font-black">→</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0C5982]/20 border border-[#0C5982]/30 rounded-2xl p-6">
                <p className="text-[#46C1F1] font-black uppercase tracking-widest text-xs mb-4">O que nunca mostrar</p>
                <ul className="space-y-2">
                  {["Máquina de lavar suja", "Roupa amontoada", "Ambiente industrial frio", "Modelos com expressão forçada"].map((e, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-red-400/70">
                      <span className="text-red-400 font-black">✕</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          13 · BRAND ECOSYSTEM
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">13 — Brand Ecosystem</p>
          <h2 className="text-5xl font-black tracking-tighter mb-4">
            A7 não é um serviço.<br /><span className="text-[#46C1F1]">É um ecossistema.</span>
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-xl">Cada vertical serve um segmento diferente, com a mesma obsessão por qualidade e tempo.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ECOSYSTEM.map((e) => (
              <div
                key={e.brand}
                className="group relative overflow-hidden rounded-3xl p-8 border border-white/[0.08] bg-white/[0.03] hover:border-[#46C1F1]/30 transition-all"
                style={{ borderTopColor: e.color + "80" }}
              >
                <div className="text-4xl mb-4">{e.icon}</div>
                <p className="text-[#46C1F1] text-xs font-black uppercase tracking-widest mb-1">{e.pos}</p>
                <p className="text-2xl font-black text-white mb-3">{e.brand}</p>
                <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          14 · DIFFERENTIATION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#0C5982]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">14 — Brand Differentiation</p>
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            Por que A7 e<br /><span className="text-white">não qualquer outra.</span>
          </h2>
          <div className="space-y-3">
            {[
              ["Lavanderia comum", "A7"],
              ["Foco em roupas limpas", "Foco em tempo devolvido"],
              ["Transação pontual", "Relacionamento contínuo"],
              ["Ambiente industrial sem identidade", "Marca com propósito e personalidade"],
              ["Sem padrão de comunicação", "Brand voice consistente em todos os canais"],
              ["Processo opaco", "Transparência total via WhatsApp em tempo real"],
              ["Entrega qualquer", "Entrega em padrão hotel — dobramento, perfume, embalagem"],
              ["Preço como diferencial", "Valor percebido como diferencial"],
              ["Operação local sem escala", "Sistema de franquias e expansão nacional"],
            ].map(([left, right], i) => (
              <div key={i} className="grid grid-cols-2 rounded-xl overflow-hidden">
                <div className="bg-white/5 p-4 text-white/40 text-sm flex items-center">{left}</div>
                <div className="bg-[#46C1F1]/20 border-l-2 border-[#46C1F1] p-4 text-white font-semibold text-sm flex items-center">{right}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          15 · TAGLINES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#080B10]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">15 — Brand Taglines</p>
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            20 formas de dizer<br /><span className="text-[#46C1F1]">o que a A7 é.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {TAGLINES.map((t, i) => (
              <div key={t.line} className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <span className="text-[#46C1F1]/40 font-black text-2xl leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-white font-black text-lg leading-tight">{t.line}</p>
                  <p className="text-white/30 text-xs mt-1">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#46C1F1] rounded-3xl p-10 text-center">
            <p className="text-[#0C5982] text-xs font-black uppercase tracking-widest mb-3">Tagline Principal</p>
            <p className="text-[#080B10] text-5xl md:text-7xl font-black tracking-tighter">Seu tempo de volta.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          16 · CAMPAIGNS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050A14]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#46C1F1] text-xs font-black uppercase tracking-[0.4em] mb-8">16 — Campaign Ideas</p>
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            10 campanhas prontas<br /><span className="text-[#46C1F1]">para dominar.</span>
          </h2>
          <div className="space-y-4">
            {CAMPAIGNS.map((c, i) => (
              <div key={c.name} className="bg-white/[0.03] border border-white/[0.07] hover:border-[#46C1F1]/20 rounded-3xl p-8 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-8 flex-shrink-0">
                    <span className="text-[#46C1F1]/40 font-black text-2xl">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <p className="text-white font-black text-xl">{c.name}</p>
                      <span className="bg-[#0C5982]/40 text-[#46C1F1] text-xs font-black uppercase px-3 py-1 rounded-full">{c.tag}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{c.concept}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <div>
                        <p className="text-white/30 uppercase tracking-widest mb-1">Canais</p>
                        <p className="text-white/60">{c.channels}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase tracking-widest mb-1">Hook</p>
                        <p className="text-[#46C1F1] font-semibold italic">&ldquo;{c.hook}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════════════════ */}
      <section className="min-h-[60vh] flex items-center justify-center py-32 px-6 bg-[#080B10] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C5982]/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0C5982]/10 blur-[100px] pointer-events-none" />
        <div className="text-center relative z-10">
          <img src="/logo-light.png" alt="A7 Lavanderia" className="h-12 w-auto mx-auto mb-12" />
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            Seu tempo<br /><span className="text-[#46C1F1]">de volta.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-12">
            Este é o Brand OS que transforma uma lavanderia em um movimento. Uma marca que escala, inspira e permanece.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/growth-engine"
              className="bg-[#0C5982] hover:bg-[#1A7AB5] text-white font-black px-8 py-4 rounded-xl transition-colors"
            >
              Growth Engine →
            </Link>
            <Link
              href="/"
              className="bg-white/[0.06] hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-colors border border-white/[0.1]"
            >
              Ver o Site
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#050A14] border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="/logo-light.png" alt="A7 Lavanderia" className="h-6 w-auto" />
          <p className="text-white/20 text-xs text-center">
            A7 Brand OS v2.0 · Estratégia de Marca · 2025–2026 · Confidencial
          </p>
          <p className="text-white/20 text-xs">© 2025 A7 Lavanderia</p>
        </div>
      </footer>
    </div>
  );
}
