"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Alto Tietê", label: "toda a região" },
  { value: "48h", label: "prazo garantido" },
  { value: "12 unidades", label: "no Brasil" },
  { value: "24h", label: "agendamentos" },
];

const NEIGHBORHOODS = [
  { name: "Centro de Mogi", detail: "Toda a área central, Praça da Sé e arredores com coleta e entrega." },
  { name: "Vila Industrial", detail: "Empresas e residências da Vila Industrial e Parque Industrial." },
  { name: "Brás Cubas", detail: "Condomínios e residências próximos à Universidade Brás Cubas." },
  { name: "Jundiapeba", detail: "Bairro atendido com rota programada e prazo garantido." },
  { name: "Cezar de Souza", detail: "Região Cezar de Souza e adjacências." },
  { name: "Alto Tietê", detail: "Suzano, Itaquaquecetuba, Poá e municípios do Alto Tietê. Consulte disponibilidade." },
];

const AUTHORITY = [
  {
    icon: "🏆",
    title: "Lavanderia com histórico real — não um app sem estrutura",
    body: "A A7 tem 5 anos de operação, 12 unidades físicas e milhares de pedidos entregues. Quando você nos contrata, há uma estrutura industrial real por trás do seu pedido — não um intermediário repassando para qualquer lavanderia.",
  },
  {
    icon: "📍",
    title: "Proximidade com o Vale do Paraíba",
    body: "Mogi das Cruzes está a poucos quilômetros de SJC, onde fica nosso centro de operações. Isso garante logística eficiente, prazo de 48h cumprido e coleta ágil na sua porta.",
  },
  {
    icon: "🧪",
    title: "Produtos premium — diferentes das lavanderias de bairro",
    body: "Usamos detergentes de alto desempenho, amaciantes premium e produtos dermatologicamente testados. O resultado é visível: roupas mais limpas, mais macias e com perfume que dura.",
  },
  {
    icon: "📦",
    title: "Rastreabilidade — cada peça identificada",
    body: "Seu pedido entra identificado e sai identificado. Não há mistura de roupas de clientes diferentes. Cada peça tem controle individual do início ao fim do processo.",
  },
  {
    icon: "🏭",
    title: "Equipamentos industriais, não máquinas de casa",
    body: "Máquinas industriais com capacidade, temperatura e ciclos que uma lavadora doméstica não consegue replicar. Essa é a diferença entre 'lavado' e 'higienizado profissionalmente'.",
  },
  {
    icon: "💼",
    title: "Para pessoa física e CNPJ",
    body: "Do morador ao gestor de empresa, temos processo para ambos. NF eletrônica, contratos mensais, coleta programada e relatório de peças para clientes corporativos de Mogi e Alto Tietê.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Agende pelo WhatsApp", body: "Informe seu endereço em Mogi das Cruzes, as peças e o horário preferido. Resposta em até 5 minutos." },
  { step: "02", title: "Coleta na sua porta", body: "Nosso parceiro de logística vai até você no horário combinado. Sem deslocamento, sem fila, sem trânsito." },
  { step: "03", title: "Processamento padrão A7", body: "Suas roupas vão para o centro de operações: lavagem industrial, secagem controlada, passadoria profissional." },
  { step: "04", title: "Entrega em 48 horas", body: "Roupas limpas, dobradas e embaladas de volta na sua porta em Mogi. Exatamente como prometido." },
];

const SERVICES = [
  { icon: "👗", title: "Roupas do Dia a Dia", body: "Lavagem, secagem e passadoria completa. Entrega dobrada e embalada pronta para usar." },
  { icon: "🛏️", title: "Edredons & Cobertores", body: "Higienização profunda anti-ácaros. Voltam fofos, cheirosos e protegidos contra fungos." },
  { icon: "🛋️", title: "Tapetes", body: "Lavagem especializada para tapetes de qualquer tamanho e material. Coleta e entrega incluídas." },
  { icon: "👟", title: "Tênis", body: "Limpeza especializada sem danificar material ou cor. Corrida, casual e social." },
  { icon: "🏢", title: "Corporativo / CNPJ", body: "Uniformes e enxoval corporativo com NF eletrônica e contrato mensal para empresas de Mogi." },
  { icon: "⚡", title: "Express 24h", body: "Urgência? Serviço express com devolução no dia seguinte. Consulte disponibilidade para seu endereço." },
];

const TESTIMONIALS = [
  {
    name: "Fernanda Lopes",
    city: "Mogi das Cruzes — Centro",
    text: "Em Mogi as opções de lavanderia são limitadas. A A7 veio preencher uma lacuna real. Qualidade impressionante, atendimento ágil pelo WhatsApp e o prazo de 48h é cumprido sem falha. Uso toda semana.",
  },
  {
    name: "Márcio Teixeira",
    city: "Mogi das Cruzes — Vila Industrial",
    text: "Mando os uniformes da minha empresa toda semana. Processo impecável, peças voltam sem mancha e com as cores preservadas. O contrato mensal com NF facilitou muito nossa contabilidade. Recomendo para qualquer empresa.",
  },
  {
    name: "Juliana Cardoso",
    city: "Mogi das Cruzes — Brás Cubas",
    text: "Descobri a A7 por indicação de uma amiga que mora em SJC. Experimentei com desconfiança e fiquei impressionada. O edredom voltou como novo — sem cheiro de mofo, macio, perfumado. Nunca mais larguei.",
  },
];

const FAQ = [
  {
    q: "A A7 Lavanderia realmente atende Mogi das Cruzes?",
    a: "Sim. Atendemos Mogi das Cruzes e toda a região do Alto Tietê com coleta e entrega a domicílio, 24h para agendamentos. O serviço tem o mesmo padrão das nossas unidades físicas.",
  },
  {
    q: "Vocês têm loja física em Mogi das Cruzes?",
    a: "Nosso serviço em Mogi é por coleta e entrega. Você agenda pelo WhatsApp, nosso parceiro de logística busca no seu endereço e processa no nosso centro de operações. É como um delivery, sem precisar sair de casa.",
  },
  {
    q: "Qual o prazo de entrega em Mogi?",
    a: "48 horas para roupas do dia a dia. Edredons e tapetes em até 72h. O prazo é confirmado no agendamento e cumprido — se não entregarmos no combinado, a lavagem é gratuita.",
  },
  {
    q: "Quais bairros de Mogi são atendidos?",
    a: "Atendemos toda Mogi das Cruzes e municípios do Alto Tietê. Informe seu endereço no WhatsApp e confirmamos a disponibilidade imediatamente." },
  {
    q: "Atendem empresas em Mogi das Cruzes?",
    a: "Sim. Temos estrutura completa para CNPJ: unifomes, EPIs e enxoval corporativo com NF eletrônica, coleta programada e relatório de peças. Entre em contato para uma proposta.",
  },
  {
    q: "Por que escolher a A7 e não uma lavanderia local?",
    a: "Estrutura industrial, processos padronizados, rastreabilidade por pedido e 5 anos de histórico verificável. Lavanderias de bairro usam equipamentos domésticos e processos informais. A diferença na qualidade é imediata.",
  },
];

export default function MogiDasCruzesPage() {
  const waLink = getWhatsAppLink("mogi-das-cruzes");

  return (
    <div className="min-h-screen bg-slate-950">
      <ServiceSchema
        name="Lavanderia em Mogi das Cruzes"
        description="Coleta e entrega de lavanderia em Mogi das Cruzes e Alto Tietê. A7 Lavanderia com 5 anos de mercado, padrão industrial e entrega em 48h."
        slug="mogi-das-cruzes"
      />

      <header className="fixed top-0 w-full z-50 bg-blue-600/90 backdrop-blur-md border-b border-blue-500/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
            Agendar em Mogi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1521656958802-453928e4e4e0?w=1400&q=80"
          alt="Lavanderia Mogi das Cruzes"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-950/70 to-slate-950/20" />
        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.16em]">
                Mogi das Cruzes · Alto Tietê · Coleta & Entrega 24h
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              Lavanderia premium
              <br />
              em Mogi das Cruzes
              <br />
              <span className="text-blue-400">sem sair de casa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              A A7 Lavanderia chega a Mogi das Cruzes com coleta e entrega a domicílio.{" "}
              <strong className="text-white">5 anos de mercado, 12 unidades e padrão industrial. Entrega em 48h garantida.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                Agendar coleta em Mogi
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Como funciona →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Toda Mogi e Alto Tietê", "Entrega em 48h garantida", "Sem sair de casa", "Agendamento 24h"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-xl leading-tight tracking-tight">{s.value}</p>
                <p className="text-blue-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Por que confiar
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Não somos mais uma lavanderia.<br />Somos uma operação industrial.
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-2xl">
              Quando você contrata a A7, não está pagando para alguém lavar roupa em casa e entregar. Está acessando uma estrutura com equipamentos industriais, processos padronizados e histórico de 5 anos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUTHORITY.map((a) => (
              <div key={a.title} className="flex flex-col gap-4 p-7 bg-slate-800 border border-slate-700 hover:border-blue-600 transition-colors">
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Como funciona
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              4 passos. Sem sair de casa.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} className="bg-slate-900 border border-slate-800 p-7 hover:border-blue-600 transition-colors">
                <span className="text-blue-400 font-black text-3xl block mb-4">{s.step}</span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Cobertura
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Toda Mogi e Alto Tietê
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-xl">
              Atendemos Mogi das Cruzes e municípios do Alto Tietê. Informe seu endereço e confirmamos a disponibilidade.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="bg-slate-800 border border-slate-700 p-6 hover:border-blue-700 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold text-white text-sm">{n.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{n.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Serviços
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Tudo que você precisa em um pedido
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-slate-700 bg-slate-900 p-7 hover:border-blue-600 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Depoimentos
            </span>
            <h2 className="text-white font-black text-3xl tracking-tight">
              Quem já usa a A7 em Mogi
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-slate-700 bg-slate-800 p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-blue-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 text-blue-300 flex items-center justify-center font-black text-sm rounded-full">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-slate-500">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Agende sua primeira coleta em Mogi das Cruzes
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Padrão industrial, prazo garantido de 48h e atendimento humano real. Experimente sem compromisso.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
            Agendar coleta em Mogi
          </a>
          <p className="text-blue-200 text-xs mt-4">Resposta em até 5 minutos · Sem compromisso</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre o serviço em Mogi</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-slate-800 bg-slate-900">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-800 transition-colors">
                  <span className="font-semibold text-slate-100 text-sm pr-4">{item.q}</span>
                  <svg className="w-4 h-4 text-slate-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="mogi-das-cruzes" />
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/unidades" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Nossas Unidades
            </Link>
            <Link href="/sao-paulo" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              São Paulo
            </Link>
            <Link href="/vale-do-paraiba" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Vale do Paraíba
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar em Mogi →
          </a>
        </div>
      </footer>
    </div>
  );
}
