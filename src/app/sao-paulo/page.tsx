"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "12 unidades", label: "no Brasil" },
  { value: "Desde 2019", label: "no mercado" },
  { value: "Entrega em 48h", label: "prazo garantido" },
  { value: "24h", label: "agendamentos" },
];

const ZONES = [
  { name: "Zona Leste", detail: "Tatuapé, Mooca, Belém, Vila Prudente, Ipiranga e toda a região leste." },
  { name: "Zona Norte", detail: "Santana, Tucuruvi, Tremembé, Vila Guilherme e adjacências." },
  { name: "Zona Sul", detail: "Saúde, Jabaquara, Vila Mariana, Campo Belo, Santo André e ABC." },
  { name: "Zona Oeste", detail: "Lapa, Pinheiros, Vila Madalena, Perdizes e arredores." },
  { name: "Centro Expandido", detail: "República, Consolação, Bela Vista, Liberdade, Higienópolis." },
  { name: "Grande SP", detail: "Guarulhos, Mauá, Diadema, São Bernardo, Osasco. Consulte disponibilidade." },
];

const AUTHORITY = [
  {
    icon: "🏆",
    title: "10 anos de expertise — nascida no Vale do Paraíba",
    body: "A A7 começou em São José dos Campos em 2019 e cresceu para 12 unidades no Brasil. Cada processo, produto e treinamento foi refinado ao longo de milhares de pedidos. Essa experiência chega à sua porta em São Paulo.",
  },
  {
    icon: "🏭",
    title: "Centro de processamento industrial, não caseiro",
    body: "Suas roupas são lavadas em equipamentos industriais de alta capacidade, com controle preciso de temperatura, tempo e produtos. Resultado impossível de replicar com máquinas domésticas.",
  },
  {
    icon: "🧪",
    title: "Produtos premium, hipoalergênicos e testados",
    body: "Utilizamos detergentes de alto desempenho, amaciantes premium e produtos dermatologicamente testados — seguros para bebês, gestantes e peles sensíveis. Sem cheiro de 'lavanderia comum'.",
  },
  {
    icon: "📦",
    title: "Rastreabilidade total do seu pedido",
    body: "Cada peça é identificada na entrada e processada separadamente. Você acompanha o status pelo WhatsApp do início ao fim. Sem mistura, sem extravio, sem surpresa.",
  },
  {
    icon: "⏱️",
    title: "SLA de 48h — não é promessa, é contrato",
    body: "Confirmamos o prazo no agendamento. Se não entregamos no combinado, a lavagem é por nossa conta. É assim que construímos confiança há 5 anos.",
  },
  {
    icon: "🏢",
    title: "Estrutura para atender pessoa física e CNPJ",
    body: "Do morador de apartamento ao gestor de facilities de empresa, temos processo, NF eletrônica e contratos mensais. Seja qual for sua necessidade em SP, temos a solução.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Agende pelo WhatsApp", body: "Informe seu endereço em São Paulo, as peças e o horário preferido. Resposta garantida em até 5 minutos, 24h por dia." },
  { step: "02", title: "Coleta na sua porta", body: "Nosso parceiro de logística vai até você no horário combinado. Você não precisa se deslocar nem aguardar em fila." },
  { step: "03", title: "Processamento com padrão A7", body: "Suas roupas vão para nosso centro de operações. Lavagem industrial, secagem controlada e passadoria profissional." },
  { step: "04", title: "Entrega em 48 horas", body: "Tudo limpo, dobrado e embalado de volta na sua porta em São Paulo. Exatamente como prometido." },
];

const SERVICES = [
  { icon: "👗", title: "Roupas do Dia a Dia", body: "Lavagem, secagem e passadoria. Tudo dobrado e embalado. A roupa chega pronta para usar ou guardar." },
  { icon: "🛏️", title: "Edredons & Cobertores", body: "Higienização anti-ácaros profunda. Voltam fofos, cheirosos e sem fungos. Ideais para alérgicos e crianças." },
  { icon: "🛋️", title: "Sofás & Tapetes", body: "Higienização a seco de sofás e lavagem especializada de tapetes de qualquer tamanho." },
  { icon: "👟", title: "Tênis", body: "Lavagem especializada para qualquer tipo de tênis — corrida, casual, social. Sem danificar material ou cor." },
  { icon: "🏢", title: "Corporativo / CNPJ", body: "Uniformes, EPIs, enxoval. Contratos mensais com NF, coleta programada e relatório de peças." },
  { icon: "⚡", title: "Express 24h", body: "Precisa urgente? Serviço express disponível com entrega no dia seguinte. Consulte disponibilidade para seu endereço." },
];

const TESTIMONIALS = [
  {
    name: "Amanda Teixeira",
    city: "São Paulo — Zona Leste",
    text: "Morei em SJC e usava a A7 lá. Quando vim para SP fiquei com medo de perder o serviço. Descobri que eles entregam aqui e fiquei aliviada. Mesma qualidade, mesmo prazo, mesmo atendimento. Sem comparação.",
  },
  {
    name: "Rodrigo Fonseca",
    city: "São Paulo — Vila Madalena",
    text: "Sou muito exigente com roupas. Já usei 3 lavanderias diferentes em SP e nenhuma me atendeu bem. A A7 acertou em tudo: prazo, embalagem, cheiro, passadoria. Vale muito o custo-benefício.",
  },
  {
    name: "Camila Duarte",
    city: "São Paulo — Santana",
    text: "Uso o plano mensal há 6 meses. Coleta toda semana, sem precisar lembrar de agendar. As roupas voltam impecáveis e o motoboy é sempre pontual. Para quem tem uma rotina corrida em SP, isso é essencial.",
  },
  {
    name: "Paulo Nogueira",
    city: "São Paulo — Santo André",
    text: "Mandei edredons e cobertores que estavam guardados desde o inverno. Voltaram como novos — sem cheiro de armário, macios e perfumados. Minha esposa tem rinite e a diferença foi imediata. Recomendo.",
  },
];

const FAQ = [
  {
    q: "A A7 Lavanderia realmente atende em São Paulo?",
    a: "Sim. Atendemos São Paulo e Grande SP com coleta e entrega a domicílio, 24h por dia para agendamentos. O serviço é idêntico ao das nossas unidades físicas no Vale do Paraíba — mesma equipe, mesmo padrão de qualidade.",
  },
  {
    q: "Como funciona sem loja física em SP?",
    a: "Você agenda pelo WhatsApp, nosso parceiro de logística coleta no seu endereço e suas roupas são processadas no nosso centro de operações. Você não precisa sair de casa. O modelo funciona exatamente como delivery — só que para roupas.",
  },
  {
    q: "Qual o prazo de entrega em São Paulo?",
    a: "48 horas para roupas do dia a dia. Edredons, tapetes e peças especiais em até 72h. O prazo é confirmado no agendamento e cumprido — ou a lavagem é por nossa conta.",
  },
  {
    q: "Quais bairros de São Paulo são atendidos?",
    a: "Atendemos toda a Capital e Grande SP. Informe seu endereço no WhatsApp e confirmamos a disponibilidade para sua região imediatamente.",
  },
  {
    q: "Atendem empresas em São Paulo?",
    a: "Sim. Uniformes, EPIs, enxoval corporativo. Contratos mensais com NF eletrônica, coleta programada e relatório de peças. Entre em contato para uma proposta para seu CNPJ.",
  },
  {
    q: "É seguro enviar roupas pelo serviço de coleta?",
    a: "Sim. Cada peça é identificada e rastreada individualmente desde a coleta até a entrega. Temos processo rigoroso de controle — o mesmo usado nas nossas 10 unidades físicas há mais de 5 anos.",
  },
];

export default function SaoPauloPage() {
  const waLink = getWhatsAppLink("sao-paulo");

  return (
    <div className="min-h-screen bg-slate-950">
      <ServiceSchema
        name="Lavanderia em São Paulo"
        description="Coleta e entrega de lavanderia em São Paulo e Grande SP. A7 Lavanderia com 12 unidades no Brasil, 5 anos de mercado e padrão industrial de qualidade."
        slug="sao-paulo"
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
            Agendar em São Paulo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1400&q=80"
          alt="São Paulo skyline"
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
                São Paulo · Coleta & Entrega 24h
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              A lavanderia que
              <br />
              São Paulo merecia
              <br />
              <span className="text-blue-400">finalmente chegou</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Padrão industrial de qualidade, 5 anos de experiência e 12 unidades no Brasil.{" "}
              <strong className="text-white">Coleta e entrega na sua porta em até 48h.</strong>
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
                Agendar coleta em São Paulo
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
              {["Toda a Capital e Grande SP", "Entrega em 48h garantida", "Sem sair de casa", "Agendamento 24h"].map((t) => (
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
              5 anos de mercado.<br />12 unidades. 1 padrão de qualidade.
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-2xl">
              A A7 não é uma startup de app. Somos uma lavanderia profissional com processos industriais, equipe treinada e histórico verificável. Isso chega à sua porta em São Paulo.
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
              Simples como pedir delivery
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-xl">
              Sem sair de casa. Sem fila. Sem trânsito. Apenas roupas limpas chegando na sua porta.
            </p>
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
              Atendemos toda São Paulo
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-xl">
              Capital e Grande SP. Informe seu endereço no WhatsApp e confirmamos a disponibilidade em segundos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ZONES.map((z) => (
              <div key={z.name} className="bg-slate-800 border border-slate-700 p-6 hover:border-blue-700 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold text-white text-sm">{z.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{z.detail}</p>
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
              Quem já usa a A7 em São Paulo
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-slate-700 bg-slate-800 p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-blue-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-900 text-blue-300 flex items-center justify-center font-black text-sm rounded-full">
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
            Agende sua primeira coleta em São Paulo
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Qualidade industrial, prazo garantido de 48h e atendimento humano real. Experimente sem compromisso.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
            Agendar coleta em São Paulo
          </a>
          <p className="text-blue-200 text-xs mt-4">Resposta em até 5 minutos · Sem compromisso</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre o serviço em São Paulo</h2>
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

      <RelatedServices currentSlug="sao-paulo" />
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/unidades" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Nossas Unidades
            </Link>
            <Link href="/sao-jose-dos-campos" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              São José dos Campos
            </Link>
            <Link href="/mogi-das-cruzes" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Mogi das Cruzes
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar em São Paulo →
          </a>
        </div>
      </footer>
    </div>
  );
}
