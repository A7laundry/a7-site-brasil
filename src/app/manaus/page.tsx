"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "2 unidades", label: "em Manaus" },
  { value: "Atendimento 24h", label: "sem restrição de horário" },
  { value: "Entrega em 48h", label: "prazo garantido" },
  { value: "Coleta grátis", label: "na sua porta" },
];

const NEIGHBORHOODS = [
  { name: "Coroado", detail: "Unidade física na Av. Rodrigo Otávio. Coleta e entrega no bairro e arredores." },
  { name: "Zumbi dos Palmares", detail: "Unidade física na R. Luís Venzon. Atendimento 24h para moradores da região." },
  { name: "Adrianópolis", detail: "Bairro nobre de Manaus com rota regular de coleta e entrega." },
  { name: "Flores", detail: "Atendimento residencial e empresarial com prazo de 48h." },
  { name: "Aleixo", detail: "Coleta programada para residências e empresas da área." },
  { name: "Nossa Senhora das Graças", detail: "Rota regular com frequência semanal ou quinzenal." },
];

const PAIN_POINTS = [
  {
    icon: "🌡️",
    title: "Calor e umidade aceleram o problema",
    body: "Em Manaus, o clima quente e úmido favorece o crescimento de fungos e ácaros em roupas e edredons. Lavagem profissional com temperatura controlada é essencial, não opcional.",
  },
  {
    icon: "⏰",
    title: "Lavanderias sem processo consistente",
    body: "Muitas lavanderias em Manaus não têm controle de qualidade. Roupas voltam com odor, manchas que não saíram, ou peças trocadas com outros clientes.",
  },
  {
    icon: "🧺",
    title: "Dificuldade com peças grandes",
    body: "Edredons, cobertores e tapetes exigem equipamento industrial. Máquinas domésticas não dão conta — e o calor de Manaus não seca rápido o suficiente para evitar mofo.",
  },
  {
    icon: "🏢",
    title: "Empresas sem parceiro confiável",
    body: "Hotéis, restaurantes e empresas em Manaus sofrem com lavanderia industrial inconstante. A A7 oferece contrato com prazo, volume e NF garantidos.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Agende pelo WhatsApp",
    body: "Informe seu endereço em Manaus, dia e horário. Respondemos em até 5 minutos. Funcionamos 24 horas.",
  },
  {
    step: "02",
    title: "Coleta na sua porta",
    body: "Nosso motoboy vai até você no horário combinado. Qualquer bairro de Manaus, sem deslocamento da sua parte.",
  },
  {
    step: "03",
    title: "Higienização com padrão A7",
    body: "Suas peças são processadas com equipamentos industriais, temperatura controlada e produtos premium hipoalergênicos.",
  },
  {
    step: "04",
    title: "Entrega em 48 horas",
    body: "Roupas limpas, passadas e embaladas na sua porta. Prazo fixo, sem surpresas.",
  },
];

const SERVICES = [
  {
    icon: "👗",
    title: "Roupas do Dia a Dia",
    body: "Lavagem, secagem e passadoria completa. Roupas dobradas e embaladas prontas para usar.",
  },
  {
    icon: "🛏️",
    title: "Edredons e Cobertores",
    body: "Higienização anti-ácaros e anti-fungos. Essencial no clima de Manaus para quem tem rinite ou alergias.",
  },
  {
    icon: "👟",
    title: "Tênis e Calçados",
    body: "Limpeza especializada que remove mofo, odor e sujeira profunda sem danificar o material.",
  },
  {
    icon: "🪟",
    title: "Cortinas e Tapetes",
    body: "Lavagem especializada que preserva fibras e cores. Retirada e devolução incluídas.",
  },
  {
    icon: "🏢",
    title: "Empresarial",
    body: "Uniformes, toalhas e enxoval para hotéis, restaurantes e empresas. Contratos mensais com NF.",
  },
  {
    icon: "⚡",
    title: "Atendimento 24h",
    body: "Diferente de outras lavanderias, atendemos qualquer hora do dia ou da noite. Agende quando quiser.",
  },
];

const WHY_A7 = [
  {
    icon: "🏭",
    title: "Equipamentos industriais",
    body: "Máquinas de alta capacidade com temperatura controlada eliminam fungos e ácaros — problema real no clima úmido de Manaus.",
  },
  {
    icon: "🧪",
    title: "Produtos hipoalergênicos",
    body: "Detergentes neutros e dermatologicamente testados. Seguros para bebês, crianças e pessoas com pele sensível.",
  },
  {
    icon: "📍",
    title: "Unidades físicas em Manaus",
    body: "Duas unidades no Coroado e Zumbi dos Palmares. Você leva ou a gente busca — como preferir.",
  },
  {
    icon: "📱",
    title: "Atendimento humano 24h",
    body: "Nenhum robô ou chatbot. Equipe real respondendo pelo WhatsApp qualquer hora com informação precisa sobre seu pedido.",
  },
];

const TESTIMONIALS = [
  {
    name: "Aline Batista",
    city: "Manaus — Coroado",
    text: "Em Manaus é difícil achar lavanderia com coleta de qualidade. A A7 chegou e mudou isso. Atende 24h, o pessoal é atencioso e as roupas voltam sempre no ponto. Já indiquei para toda a família.",
  },
  {
    name: "Thiago Amazonas",
    city: "Manaus — Zumbi dos Palmares",
    text: "Mesmo com o calor de Manaus, uso edredom e nunca tinha higienizado direito. A A7 fez um serviço impecável, voltou sem aquele cheiro de guardado. Atendimento 24h é um diferencial enorme aqui.",
  },
  {
    name: "Rafaela Monteiro",
    city: "Manaus — Adrianópolis",
    text: "Meu marido tem rinite forte. Depois que começamos a higienizar edredons e travesseiros na A7, as crises reduziram muito. Prazo de 48h cumprido rigorosamente. Nunca falharam.",
  },
];

const FAQ = [
  {
    q: "Como agendar uma coleta em Manaus?",
    a: "Pelo WhatsApp. Informamos endereço, bairro e horário de preferência. Nossa equipe atende 24 horas e confirma normalmente para o próximo turno disponível.",
  },
  {
    q: "Qual o prazo de entrega em Manaus?",
    a: "O prazo padrão é de 48 horas para roupas do dia a dia. Edredons, tapetes e peças especiais podem levar até 72h. O prazo é confirmado no agendamento.",
  },
  {
    q: "Vocês têm loja física em Manaus?",
    a: "Sim, temos duas unidades físicas: Av. Rodrigo Otávio, 20b (Coroado) e R. Luís Venzon, 32 (Zumbi dos Palmares). Ambas abertas 24 horas. Você pode levar as peças ou solicitar coleta a domicílio.",
  },
  {
    q: "Atendem empresas em Manaus?",
    a: "Sim. Hotéis, restaurantes, clínicas e empresas com necessidade de lavagem regular de uniformes e enxoval. Contratos mensais com coleta programada, NF eletrônica e custo fixo.",
  },
  {
    q: "Como funciona para edredons com mofo?",
    a: "Edredons com mofo passam por processo especial com produto antifúngico e temperatura controlada. O resultado é avaliado antes da devolução. Informamos no agendamento sobre casos mais severos.",
  },
];

export default function ManausPage() {
  const waLink = `https://wa.me/559298115494?text=${encodeURIComponent("Olá! Gostaria de agendar uma coleta em Manaus. 🧺")}`;

  return (
    <div className="min-h-screen bg-slate-950">
      <ServiceSchema
        name="Lavanderia em Manaus"
        description="A7 Lavanderia em Manaus. Duas unidades físicas no Coroado e Zumbi dos Palmares. Coleta e entrega 24h. Roupas, edredons, uniformes e mais."
        slug="manaus"
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-blue-600/90 backdrop-blur-md border-b border-blue-500/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar em Manaus
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1400&q=80"
          alt="Manaus cidade"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />

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
                Manaus · Coleta & Entrega 24h
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              Lavanderia Premium
              <br />
              em{" "}
              <span className="text-blue-400">Manaus</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Duas unidades físicas em Manaus com{" "}
              <strong className="text-white">atendimento 24 horas</strong>. Coleta e entrega a domicílio em toda a cidade.
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
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Agendar coleta em Manaus
              </a>
              <a
                href="#bairros"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver bairros atendidos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["2 unidades físicas em Manaus", "Atendimento 24 horas", "Coleta a domicílio", "Empresas e pessoas físicas"].map((t) => (
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

      {/* Stats bar */}
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

      {/* Unidades físicas */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">Nossas unidades</span>
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-8">
            2 endereços físicos em Manaus
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                bairro: "Coroado",
                endereco: "Av. Rodrigo Otávio, 20b",
                cep: "CEP 69055-010",
                horario: "Aberto 24 horas",
                phone: "(92) 98115-4947",
                wa: "559298115494",
              },
              {
                bairro: "Zumbi dos Palmares",
                endereco: "R. Luís Venzon, 32",
                cep: "CEP 69084-125",
                horario: "Aberto 24 horas",
                phone: "(92) 98115-4947",
                wa: "559298115494",
              },
            ].map((u) => (
              <div key={u.bairro} className="bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">{u.horario}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">A7 Lavanderia — {u.bairro}</h3>
                <p className="text-slate-400 text-sm mb-0.5">{u.endereco}</p>
                <p className="text-slate-500 text-xs mb-4">{u.cep} · Manaus, AM</p>
                <a
                  href={`https://wa.me/${u.wa}?text=${encodeURIComponent("Olá! Gostaria de agendar uma coleta. 🧺")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                  {u.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">O problema</span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Por que o clima de Manaus exige cuidado profissional
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="flex gap-5 p-7 bg-slate-900 border border-slate-800 hover:border-blue-600 transition-colors">
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bairros */}
      <section id="bairros" className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">Cobertura em Manaus</span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">Atendemos toda Manaus</h2>
            <p className="text-slate-400 text-base mt-4 max-w-xl">
              Com duas unidades estrategicamente localizadas, cobrimos todos os principais bairros da cidade.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="bg-slate-950 border border-slate-800 p-6 hover:border-blue-700 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold text-white text-sm">{n.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{n.detail}</p>
              </div>
            ))}
            <div className="bg-blue-950 border border-blue-700/50 p-6">
              <h3 className="font-bold text-blue-300 text-sm mb-2">Seu bairro não está aqui?</h3>
              <p className="text-xs text-blue-400/70 leading-relaxed">Atendemos toda Manaus. Mande mensagem com seu endereço e confirmamos a rota disponível.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">Como funciona</span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">Do agendamento à entrega em 4 passos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-slate-900 border border-slate-800 p-7 hover:border-blue-600 transition-colors">
                <span className="text-blue-400 font-black text-3xl block mb-4">{step.step}</span>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">Serviços disponíveis</span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">Tudo que você precisa em Manaus</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-slate-700 bg-slate-950 p-7 hover:border-blue-600 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que A7 */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">Diferenciais</span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Por que a A7 é diferente em Manaus
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_A7.map((w) => (
              <div key={w.title} className="flex gap-5 p-7 bg-slate-900 border border-slate-800">
                <span className="text-3xl flex-shrink-0">{w.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{w.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">O que os manauaras dizem</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-slate-700 bg-slate-950 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-blue-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-900 text-blue-300 flex items-center justify-center font-black text-sm rounded">
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
            Agende sua coleta em Manaus agora
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Atendemos 24 horas. Você pode agendar agora e combinar o melhor horário para coleta.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta em Manaus
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre atendimento em Manaus</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-slate-800 bg-slate-900">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-800 transition-colors">
                  <span className="font-semibold text-slate-100 text-sm pr-4">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-slate-500 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="manaus" />

      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/unidades" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Todas as unidades
            </Link>
            <Link href="/sao-jose-dos-campos" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              São José dos Campos
            </Link>
            <Link href="/taubate" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Taubaté
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar em Manaus →
          </a>
        </div>
      </footer>
    </div>
  );
}
