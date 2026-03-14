"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Lorena + Guaratinguetá", label: "na mesma rota" },
  { value: "+Aparecida", label: "turismo religioso" },
  { value: "Entrega em 72h", label: "prazo garantido" },
  { value: "Desde 2019", label: "no Vale do Paraíba" },
];

const PAIN_POINTS = [
  {
    icon: "🗺️",
    title: "Duas cidades, dois problemas logísticos",
    body: "Quem tem negócios ou família nas duas cidades precisa de um parceiro que atenda as duas. A A7 serve Lorena e Guaratinguetá na mesma rota, no mesmo dia.",
  },
  {
    icon: "🏨",
    title: "Hotelaria e turismo sem lavanderia confiável",
    body: "Pousadas e hotéis próximos à Basílica de Aparecida enfrentam alta demanda de enxoval sem ter lavanderia de qualidade por perto. A A7 resolve isso.",
  },
  {
    icon: "⏰",
    title: "Distância percebida como barreira",
    body: "Muitas pessoas acham que lavanderia premium é só para SJC ou São Paulo. A A7 chega na região sul do Vale com o mesmo padrão.",
  },
  {
    icon: "📦",
    title: "Volume de temporada sem suporte",
    body: "Aparecida recebe milhões de peregrinos por ano. Em alta temporada, hotéis e pousadas precisam de parceiro de lavanderia com capacidade real.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Agende pelo WhatsApp",
    body: "Informe sua cidade — Lorena, Guaratinguetá ou Aparecida — e horário preferido.",
  },
  {
    step: "02",
    title: "Coleta na rota integrada",
    body: "Passamos por Lorena e Guaratinguetá no mesmo dia. Tudo coletado numa rota eficiente.",
  },
  {
    step: "03",
    title: "Higienização profissional",
    body: "Suas peças são processadas com equipamentos industriais e produtos certificados.",
  },
  {
    step: "04",
    title: "Entrega em 72 horas",
    body: "Roupas limpas, passadas e embaladas de volta na sua porta. Prazo garantido.",
  },
];

const SERVICES = [
  {
    icon: "👗",
    title: "Roupas do Dia a Dia",
    body: "Lavagem, secagem e passadoria completa. Roupas dobradas e prontas para o guarda-roupa.",
  },
  {
    icon: "🛏️",
    title: "Cama & Banho",
    body: "Lençóis, fronhas, toalhas de hotel e pousada. Processo industrial anti-ácaros e anti-fungos.",
  },
  {
    icon: "⛪",
    title: "Enxoval de Hospedagem",
    body: "Para pousadas e hotéis em Aparecida, Lorena e Guaratinguetá. Contratos mensais e coleta regular.",
  },
  {
    icon: "🛋️",
    title: "Sofás & Tapetes",
    body: "Higienização profissional de estofados e tapetes. Coleta na região sul do Vale.",
  },
  {
    icon: "📅",
    title: "Plano Mensal",
    body: "Assine e receba coleta recorrente sem precisar agendar toda semana. Desconto garantido.",
  },
  {
    icon: "🏢",
    title: "Empresarial B2B",
    body: "Uniformes, enxoval e EPIs para empresas da região. Faturamento por CNPJ disponível.",
  },
];

const APARECIDA_SECTION = [
  {
    icon: "🕊️",
    title: "Milhões de peregrinos por ano",
    body: "A Basílica Nacional de Aparecida recebe mais de 12 milhões de visitantes ao ano. Pousadas e hotéis na cidade vivem em alta ocupação constante, com demanda de enxoval muito acima da média.",
  },
  {
    icon: "🏩",
    title: "Pousadas e hotéis próximos à Basílica",
    body: "Estabelecimentos na Rua Eugênio Brunini, Avenida Getúlio Vargas e arredores podem ter contratos regulares de lavanderia com coleta semanal e entrega programada.",
  },
  {
    icon: "📈",
    title: "Alta temporada — capacidade real",
    body: "Nossa estrutura industrial suporta volume de alta temporada. Sem lista de espera, sem atraso. Planejamos a capacidade junto com os clientes de hospedagem.",
  },
  {
    icon: "🤝",
    title: "Contrato flexível para hotelaria",
    body: "Sem fidelidade obrigatória. Contratos mensais com volume mínimo reduzido, coleta programada e relatório mensal para o gestor.",
  },
];

const TESTIMONIALS = [
  {
    name: "Claudinho Ferreira",
    city: "Guaratinguetá",
    text: "Uso a A7 para minha família em Guaratinguetá há quase 2 anos. O prazo de 72h é honesto e cumprem sempre. Qualidade muito melhor do que as lavanderias locais que tentei antes.",
  },
  {
    name: "Rosangela Pinto",
    city: "Lorena",
    text: "Minha pousada em Lorena precisava de um parceiro de lavanderia sério. A A7 faz a rota regular, entrega no prazo e nunca me deixou na mão em nenhuma alta temporada.",
  },
  {
    name: "Alessandro Matos",
    city: "Guaratinguetá — Centro",
    text: "Achava que lavanderia premium era coisa de SJC. A A7 chegou na região com o mesmo serviço que minha irmã usa em São José dos Campos. Fiquei impressionado com a qualidade.",
  },
];

const FAQ = [
  {
    q: "Vocês atendem Aparecida também?",
    a: "Sim. Aparecida faz parte da nossa rota integrada com Lorena e Guaratinguetá. Atendemos residências e estabelecimentos comerciais, incluindo pousadas e hotéis próximos à Basílica Nacional.",
  },
  {
    q: "O prazo é maior por ser mais longe?",
    a: "Para a região de Lorena e Guaratinguetá, o prazo padrão é de 72 horas a partir da coleta — um dia a mais do que em cidades mais próximas da sede. Isso é compensado pela rota integrada que otimiza todo o percurso.",
  },
  {
    q: "O plano mensal está disponível nessa região?",
    a: "Sim. Clientes de Lorena, Guaratinguetá e Aparecida podem assinar o plano mensal com as mesmas condições das outras cidades. Coleta recorrente, desconto garantido e sem precisar agendar toda semana.",
  },
  {
    q: "O frete é cobrado para essa região?",
    a: "Para clientes de plano mensal, o frete é gratuito. Para pedidos avulsos, consulte as condições no agendamento pelo WhatsApp. O valor de frete, quando aplicado, é informado antes da confirmação.",
  },
  {
    q: "Como agendar para essa região?",
    a: "Pelo WhatsApp. Informe sua cidade — Lorena, Guaratinguetá ou Aparecida — seu endereço e preferência de horário para coleta. Nossa equipe confirma a próxima rota disponível, normalmente com 1-2 dias de antecedência.",
  },
];

export default function LorenaGuaratinguetaPage() {
  const waLink = getWhatsAppLink("lorena-guaratingueta");

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 w-full z-50 bg-blue-600/90 backdrop-blur-md border-b border-blue-500/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-blue-200">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar na região
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
          alt="Vale do Paraíba Sul — Lorena e Guaratinguetá"
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
                Lorena · Guaratinguetá · Aparecida
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
            >
              Lavanderia Premium
              <br />
              para{" "}
              <span className="text-blue-400">Lorena</span> e{" "}
              <span className="text-blue-400">Guaratinguetá</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              A A7 atende toda a região sul do Vale do Paraíba —{" "}
              <strong className="text-white">coleta e entrega em Lorena, Guaratinguetá e Aparecida</strong> com prazo garantido de 72 horas.
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
                Agendar coleta na região
              </a>
              <a
                href="#aparecida"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Hotelaria em Aparecida
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Lorena + Guaratinguetá na mesma rota", "Aparecida incluída", "Prazo de 72h", "Hotelaria e residências"].map((t) => (
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
              O que a região sul do Vale enfrentava sem a A7
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="flex gap-5 p7 p-7 bg-slate-800 border border-slate-700 hover:border-blue-600 transition-colors">
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

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Como funciona
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Rota integrada — duas cidades, um serviço
            </h2>
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

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Serviços disponíveis
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Tudo que a região sul do Vale precisa
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-slate-700 bg-slate-800/50 p-7 hover:border-blue-600 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aparecida" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Aparecida — turismo religioso
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              A cidade mais visitada do Brasil merece lavanderia à altura
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-2xl leading-relaxed">
              Com mais de 12 milhões de peregrinos por ano, Aparecida tem uma das maiores demandas de enxoval de hospedagem do país. Pousadas e hotéis próximos à Basílica Nacional precisam de um parceiro de lavanderia confiável, com capacidade real e prazo garantido.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {APARECIDA_SECTION.map((item) => (
              <div key={item.title} className="flex gap-5 p-7 bg-slate-900 border border-slate-800 hover:border-blue-700 transition-colors">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-blue-950 border border-blue-700/40 p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-black text-lg mb-2">Pousada ou hotel em Aparecida?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Solicite uma proposta personalizada para o seu estabelecimento. Volume mínimo acessível, coleta semanal programada e relatório mensal para o gestor.
              </p>
            </div>
            <a
              href={waLink}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-base px-7 py-4 rounded transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Solicitar proposta
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">
            O que os clientes da região dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-slate-700 bg-slate-800 p-6">
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
            Agende sua coleta em Lorena, Guaratinguetá ou Aparecida
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Rota integrada, prazo garantido de 72h, qualidade A7 premium na região sul do Vale do Paraíba. Agende agora pelo WhatsApp.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta na minha cidade
          </a>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre atendimento na região</h2>
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
            <Link href="/jacarei" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Jacareí
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar na região →
          </a>
        </div>
      </footer>
    </div>
  );
}
