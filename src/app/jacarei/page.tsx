"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Coleta em Jacareí", label: "zona sul e norte" },
  { value: "Entrega em 48h", label: "prazo garantido" },
  { value: "Zona sul + norte", label: "cobertura total" },
  { value: "Desde 2019", label: "no Vale do Paraíba" },
];

const NEIGHBORHOODS = [
  { name: "Centro", detail: "Atendimento completo em toda a área central de Jacareí." },
  { name: "Jardim Paraíba", detail: "Rota regular com coleta e entrega no bairro." },
  { name: "Nova Jacareí", detail: "Condomínios e residências atendidos normalmente." },
  { name: "Jardim Califórnia", detail: "Coleta programada com prazo garantido de 48h." },
  { name: "Cidade Morumbi", detail: "Atendimento completo incluindo empresas e condomínios." },
];

const PAIN_POINTS = [
  {
    icon: "🏙️",
    title: "Jacareí fica na sombra de SJC",
    body: "Muitos serviços premium chegam em São José dos Campos mas não alcançam Jacareí. A A7 atende as duas cidades com a mesma qualidade.",
  },
  {
    icon: "🕐",
    title: "Tempo perdido em lavanderia",
    body: "Levar, buscar, esperar. Com coleta e entrega na sua porta em Jacareí, você não precisa se mover.",
  },
  {
    icon: "⚠️",
    title: "Incerteza sobre prazo",
    body: "Lavanderias locais com prazos vagos. A A7 trabalha com prazo fixo de 48h e você acompanha tudo pelo WhatsApp.",
  },
  {
    icon: "🌊",
    title: "Distância da qualidade premium",
    body: "Antes da A7, ter lavanderia premium significava ir até SJC. Agora a qualidade vai até Jacareí sem custo extra.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Agende pelo WhatsApp",
    body: "Informe seu bairro em Jacareí e horário preferido. Confirmamos em minutos.",
  },
  {
    step: "02",
    title: "Coleta na sua porta",
    body: "Motoboy vai ao seu endereço em Jacareí. Você não precisa sair de casa.",
  },
  {
    step: "03",
    title: "Higienização profissional",
    body: "Processamos tudo na sede com equipamentos industriais e produtos premium.",
  },
  {
    step: "04",
    title: "Entrega em 48 horas",
    body: "Roupas limpas, passadas e embaladas de volta na sua porta em Jacareí.",
  },
];

const SERVICES = [
  {
    icon: "👗",
    title: "Roupas do Dia",
    body: "Lavagem, secagem e passadoria. Roupas dobradas e embaladas prontas para o guarda-roupa.",
  },
  {
    icon: "🛏️",
    title: "Edredons",
    body: "Higienização anti-ácaros com processo certificado. Edredom fofo e cheiroso em 48h.",
  },
  {
    icon: "🛋️",
    title: "Sofás & Tapetes",
    body: "Higienização profissional de estofados e lavagem de tapetes. Coleta em Jacareí.",
  },
  {
    icon: "🏢",
    title: "Empresarial",
    body: "Uniformes, toalhas e enxoval para empresas de Jacareí. Contratos mensais disponíveis.",
  },
  {
    icon: "📅",
    title: "Plano Mensal",
    body: "Coleta recorrente sem precisar agendar toda semana. Desconto garantido no plano.",
  },
  {
    icon: "⚡",
    title: "Express",
    body: "Precisou com urgência em Jacareí? Serviço express com devolução em 24h. Consulte.",
  },
];

const PROXIMITY_BENEFITS = [
  {
    icon: "📍",
    title: "Sede a poucos km de Jacareí",
    body: "Nossa base fica em São José dos Campos, cidade vizinha. Isso significa logística mais ágil, rotas diárias e menor tempo de trânsito para suas roupas.",
  },
  {
    icon: "🚀",
    title: "Prazo real de 48 horas",
    body: "Com a sede próxima, conseguimos cumprir o prazo de 48h consistentemente — algo difícil para lavanderias de cidades mais distantes.",
  },
  {
    icon: "📞",
    title: "Atendimento sem intermediários",
    body: "A equipe que atende Jacareí é a mesma que opera em SJC. Nenhuma franquia, nenhum intermediário. Comunicação direta e decisões rápidas.",
  },
  {
    icon: "🔄",
    title: "Rota otimizada diária",
    body: "Jacareí faz parte da nossa rota diária da Dutra. Não é um desvio — é caminho natural, o que garante regularidade no serviço.",
  },
];

const TESTIMONIALS = [
  {
    name: "Fernanda Couto",
    city: "Jacareí — Centro",
    text: "Morava em SJC antes e usava a A7 sempre. Quando me mudei para Jacareí, fiquei com medo de perder o serviço. Para minha surpresa, eles atendem Jacareí com o mesmo prazo e qualidade. Nunca parei de usar.",
  },
  {
    name: "Gilberto Ramos",
    city: "Jacareí — Jardim Califórnia",
    text: "Uso para minha família inteira. Coleta toda semana no bairro, entrega em 48h, roupas impecáveis. Nunca tive problema nenhum em mais de 1 ano de cliente.",
  },
  {
    name: "Simone Araujo",
    city: "Jacareí — Nova Jacareí",
    text: "Terceirizei a lavanderia de casa para a A7 e ganhei meu fim de semana de volta. Edredons, roupas do dia a dia, tudo junto. Qualidade que não encontrava antes em Jacareí.",
  },
];

const FAQ = [
  {
    q: "Vocês fazem coleta no mesmo dia em Jacareí?",
    a: "Para coleta no mesmo dia, consulte disponibilidade pelo WhatsApp com antecedência. Em geral, conseguimos coletar no dia seguinte ao agendamento. A sede fica em SJC, cidade vizinha, o que facilita muito a logística.",
  },
  {
    q: "Qual o frete para Jacareí?",
    a: "A coleta e entrega são incluídas no valor do serviço para pedidos acima do mínimo. Para clientes de plano mensal, o frete é sempre gratuito. Consulte as condições específicas no agendamento.",
  },
  {
    q: "Qual o prazo de entrega em Jacareí?",
    a: "O prazo padrão é de 48 horas a partir da coleta para roupas do dia a dia. Peças especiais como edredons e tapetes podem levar até 72h. Como a sede fica em SJC, a logística é muito eficiente.",
  },
  {
    q: "Vocês têm ponto de entrega em Jacareí?",
    a: "Fazemos coleta e entrega diretamente na sua porta em Jacareí. Não é necessário ir a nenhum ponto físico. Tudo pelo WhatsApp.",
  },
  {
    q: "Como funciona o plano mensal em Jacareí?",
    a: "O plano mensal funciona da mesma forma que em SJC. Você escolhe a frequência de coleta, garante um desconto no valor e não precisa agendar toda semana. Disponível para todos os bairros de Jacareí.",
  },
];

export default function JacareiPage() {
  const waLink = getWhatsAppLink("jacarei");

  return (
    <div className="min-h-screen bg-slate-950">
      <ServiceSchema name="Lavanderia em Jacareí" description="Coleta e entrega de lavanderia em Jacareí. Próximo à sede em SJC — serviço premium com entrega rápida em todos os bairros de Jacareí." slug="jacarei" />
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
            Agendar em Jacareí
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1400&q=80"
          alt="Jacareí cidade vista aérea"
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
                Jacareí · Coleta & Entrega
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              A Melhor
              <br />
              Lavanderia de{" "}
              <span className="text-blue-400">Jacareí</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Coleta e entrega em Jacareí —{" "}
              <strong className="text-white">serviço premium do Vale do Paraíba até a sua porta</strong>. Prazo garantido de 48 horas.
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
                Agendar coleta em Jacareí
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
              {["Zona sul e norte atendidas", "Entrega em 48h", "Sede próxima em SJC", "Plano mensal disponível"].map((t) => (
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

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              O problema
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Por que quem mora em Jacareí merecia mais
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="flex gap-5 p-7 bg-slate-800 border border-slate-700 hover:border-blue-600 transition-colors">
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

      <section id="bairros" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Cobertura em Jacareí
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Zona sul, zona norte — atendemos toda a cidade
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-xl">
              Com a sede em SJC a poucos quilômetros, cobrimos Jacareí inteira com rotas diárias. Principais bairros:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="bg-slate-900 border border-slate-800 p-6 hover:border-blue-700 transition-colors">
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
              <h3 className="font-bold text-blue-300 text-sm mb-2">Outro bairro?</h3>
              <p className="text-xs text-blue-400/70 leading-relaxed">Atendemos toda Jacareí. Mande mensagem com seu endereço e confirmamos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Como funciona
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Do agendamento à entrega em 4 passos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-slate-800 border border-slate-700 p-7 hover:border-blue-600 transition-colors">
                <span className="text-blue-400 font-black text-3xl block mb-4">{step.step}</span>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Serviços disponíveis
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Tudo que você precisa em Jacareí
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

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              A7 está pertinho
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              SJC ao lado de Jacareí: vantagem real para você
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROXIMITY_BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-5 p-7 bg-slate-800 border border-slate-700 hover:border-blue-600 transition-colors">
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">
            O que os moradores de Jacareí dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-slate-700 bg-slate-900 p-6">
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

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Sua primeira coleta em Jacareí
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            A qualidade premium do Vale do Paraíba chegando na sua porta em Jacareí. Prazo fixo de 48h, atendimento humano pelo WhatsApp.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta em Jacareí
          </a>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre atendimento em Jacareí</h2>
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

      <RelatedServices currentSlug="jacarei" />
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/vale-do-paraiba" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Vale do Paraíba
            </Link>
            <Link href="/taubate" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Taubaté
            </Link>
            <Link href="/sao-jose-dos-campos" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              São José dos Campos
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar em Jacareí →
          </a>
        </div>
      </footer>
    </div>
  );
}
