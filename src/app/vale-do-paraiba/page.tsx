"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "5", label: "cidades atendidas" },
  { value: "Coleta em 24h", label: "na maioria das cidades" },
  { value: "+3.200", label: "clientes" },
  { value: "Desde 2019", label: "na região" },
];

const CITIES = [
  {
    name: "São José dos Campos",
    short: "SJC",
    badge: "Sede",
    color: "blue",
    coverage: "Atendimento completo em todos os bairros. Coleta no mesmo dia disponível. Centro de operações da A7.",
    detail: "Toda a cidade, incluindo Jardim Aquarius, Centro, Urbanova, Parque Residencial e Eugênio de Melo.",
  },
  {
    name: "Taubaté",
    short: "TAU",
    badge: "Unidade local",
    color: "blue",
    coverage: "Unidade própria em Taubaté. Atendimento em 24h para toda a cidade e municípios adjacentes.",
    detail: "Centro, Jardim Santa Fé, Esplanada, Quiririm e bairros próximos.",
  },
  {
    name: "Jacareí",
    short: "JAC",
    badge: "Cobertura total",
    color: "blue",
    coverage: "Coleta em 24–48h cobrindo toda a extensão da cidade, incluindo condomínios e áreas industriais.",
    detail: "Centro, Jardim Aquarius, Jardim Bela Vista, Parque Meia Lua e region.",
  },
  {
    name: "Lorena & Guaratinguetá",
    short: "LOR / GUA",
    badge: "Rota integrada",
    color: "blue",
    coverage: "As duas cidades são atendidas na mesma rota. Coleta em 48h, entrega ágil para as duas.",
    detail: "Ideal para empresas com unidades nas duas cidades. Rota semanal garantida.",
  },
  {
    name: "Pindamonhangaba",
    short: "PINDA",
    badge: "Coleta semanal",
    color: "blue",
    coverage: "Rota semanal garantida. Agendamento simples pelo WhatsApp, coleta em 48h.",
    detail: "Toda a área urbana de Pindamonhangaba e bairros próximos.",
  },
];

const SERVICES = [
  {
    icon: "👗",
    title: "Roupas do dia a dia",
    body: "Lavagem, secagem e passadoria completa. Roupas dobradas e prontas para o guarda-roupa.",
  },
  {
    icon: "🛏️",
    title: "Edredons e cobertores",
    body: "Higienização profunda anti-ácaros. Processo certificado com secagem industrial.",
  },
  {
    icon: "🛋️",
    title: "Sofás e estofados",
    body: "Higienização a seco com equipamentos profissionais. Disponível em todo o Vale.",
  },
  {
    icon: "🟫",
    title: "Tapetes",
    body: "Lavagem manual especializada para tapetes persas, sintéticos e naturais. Coleta e entrega.",
  },
  {
    icon: "👟",
    title: "Tênis e calçados",
    body: "Limpeza manual com produtos específicos. Tênis devolvido como saído da caixa.",
  },
  {
    icon: "🏢",
    title: "Empresarial B2B",
    body: "Atendimento corporativo em todas as cidades. Uniformes, enxoval, contratos mensais.",
  },
];

const WHY_A7 = [
  {
    icon: "🏠",
    title: "Empresa local do Vale",
    body: "Nascemos em São José dos Campos em 2019. Conhecemos a região, as cidades, os bairros. Não somos uma franquia de fora.",
  },
  {
    icon: "🚀",
    title: "Coleta no mesmo dia em SJC",
    body: "Na cidade sede, conseguimos agendar coleta para o mesmo dia em boa parte da semana. Praticidade real.",
  },
  {
    icon: "🗺️",
    title: "Rotas otimizadas para a região",
    body: "Nossa logística foi desenhada para o Vale. Rodovias SP-99, Dutra e Presidente Dutra são nossas rotas diárias.",
  },
  {
    icon: "📞",
    title: "Atendimento humano pelo WhatsApp",
    body: "Nenhum robô. Quem responde é a equipe A7, que conhece sua cidade e sabe dar prazos reais.",
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    city: "São José dos Campos",
    text: "Uso a A7 há 3 anos. Coleta no mesmo dia em SJC é uma vantagem que nenhuma outra lavanderia oferece. Nunca tive nenhum problema.",
  },
  {
    name: "Roberto Vieira",
    city: "Taubaté",
    text: "Moro em Taubaté e precisava de uma lavanderia de qualidade próxima. A A7 entrega em 24h e o resultado é o mesmo das lavanderias premium de SJC.",
  },
  {
    name: "Aline Fernandes",
    city: "Lorena",
    text: "Pensava que Lorena ficava longe demais. Mas a rota integrada com Guaratinguetá é regular e pontual. Recomendo para toda a região.",
  },
];

const FAQ = [
  {
    q: "Quais cidades do Vale do Paraíba vocês atendem?",
    a: "Atendemos São José dos Campos, Taubaté, Jacareí, Lorena, Guaratinguetá e Pindamonhangaba com rotas regulares. Para outras cidades da região, consulte disponibilidade pelo WhatsApp.",
  },
  {
    q: "Qual o prazo de entrega por cidade?",
    a: "Em SJC: 24–48h (coleta no mesmo dia disponível). Taubaté e Jacareí: 24–48h. Lorena, Guaratinguetá e Pindamonhangaba: 48–72h. Prazos contados a partir da coleta.",
  },
  {
    q: "Existe pedido mínimo?",
    a: "Para clientes pessoa física, não há pedido mínimo em SJC. Para cidades fora de SJC, recomendamos pelo menos 5kg ou 15 peças para otimizar a rota de coleta.",
  },
  {
    q: "Vocês fazem atendimento B2B em todas as cidades?",
    a: "Sim. Atendemos empresas, restaurantes, hotéis e condomínios em todo o Vale com contratos mensais, coleta programada e faturamento por CNPJ.",
  },
  {
    q: "Como agendar uma coleta fora de SJC?",
    a: "Pelo WhatsApp. Informe sua cidade, endereço e preferência de horário. Nossa equipe confirma a próxima rota disponível para a sua região.",
  },
];

export default function ValeDoParaibaPage() {
  const waLink = getWhatsAppLink("vale-do-paraiba");

  return (
    <div className="min-h-screen bg-slate-950">
      <ServiceSchema name="Lavanderia no Vale do Paraíba" description="A7 Lavanderia atende todo o Vale do Paraíba: São José dos Campos, Taubaté, Jacareí, Lorena e região com coleta e entrega." slug="vale-do-paraiba" />
      <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-blue-400">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1400&q=80"
          alt="Vista aérea de São José dos Campos e Vale do Paraíba"
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
                Vale do Paraíba · Coleta & Entrega
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              A Lavanderia
              <br />
              Premium do
              <br />
              <span className="text-blue-400">Vale do Paraíba</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Atendendo São José dos Campos, Taubaté, Jacareí, Lorena e toda a região com coleta e entrega.{" "}
              <strong className="text-white">Empresa local, qualidade internacional.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Agendar coleta agora
              </a>
              <a
                href="#cidades"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver cidades
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["SJC, Taubaté, Jacareí", "Lorena & Guaratinguetá", "Pindamonhangaba", "B2B em toda a região"].map((t) => (
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
                <p className="text-white font-black text-2xl leading-none tracking-tight">{s.value}</p>
                <p className="text-blue-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cidades" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Cobertura regional
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Sua cidade atendida com qualidade A7
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map((c) => (
              <div
                key={c.name}
                className="bg-slate-900 border border-slate-800 p-7 hover:border-blue-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded">
                    {c.badge}
                  </span>
                  <span className="text-slate-500 font-black text-sm">{c.short}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-3">{c.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{c.coverage}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Todos os serviços
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Tudo o que você precisa, em todo o Vale
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

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">
              Por que A7
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Somos daqui. Conhecemos o Vale.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
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

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">
            Clientes de toda a região
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
            Sua cidade no Vale do Paraíba está coberta
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            SJC, Taubaté, Jacareí, Lorena, Guaratinguetá, Pindamonhangaba — e outras cidades da região. Agende agora pelo WhatsApp.
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
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre o atendimento regional</h2>
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

      <RelatedServices currentSlug="vale-do-paraiba" />
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/sao-jose-dos-campos" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              São José dos Campos
            </Link>
            <Link href="/taubate" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Taubaté
            </Link>
            <Link href="/jacarei" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Jacareí
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar coleta →
          </a>
        </div>
      </footer>
    </div>
  );
}
