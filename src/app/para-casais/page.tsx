"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "8h", label: "devolvidas por semana" },
  { value: "Juntas", label: "peças do casal" },
  { value: "Sem contrato", label: "cancele quando quiser" },
  { value: "+1.200", label: "casais atendidos" },
];

const PROBLEMS = [
  {
    icon: "📅",
    title: "O fim de semana virou dia de lavar roupa",
    body: "Sábado é para sair, descansar, curtir. Em vez disso, metade do dia vai para lavar, estender e passar. O casal que deveria aproveitar o tempo livre fica em turnos domésticos.",
  },
  {
    icon: "🤝",
    title: "\"Quem lava essa semana?\"",
    body: "Dividir tarefas domésticas é uma fonte real de atrito para casais. Quem atrasa, quem sobra, quem faz mal. A lavanderia vira motivo de discussão.",
  },
  {
    icon: "👕",
    title: "Roupas misturadas, separação impossível",
    body: "Mandar as roupas dos dois juntos e receber tudo misturado? Redobra o trabalho na hora de guardar. E se um dos dois tem peças delicadas, o risco aumenta.",
  },
  {
    icon: "⚡",
    title: "Conta de luz e água que assusta",
    body: "Duas pessoas, duas cargas, às vezes três por semana. Lavadora, secadora, ferro. Sem contar os produtos. O custo de lavar em casa é maior do que parece.",
  },
];

const BENEFITS = [
  {
    icon: "👫",
    title: "Tudo junto numa entrega",
    body: "Vocês dois mandam as roupas em um pedido. Simples, sem separar por pessoa na hora de montar o saco.",
  },
  {
    icon: "🗂️",
    title: "Separação por pessoa",
    body: "Devolvemos cada roupa etiquetada e organizada por pessoa, para facilitar na hora de guardar.",
  },
  {
    icon: "📦",
    title: "Peças dobradas e passadas",
    body: "Tudo dobrado, camisas passadas, prontas para ir direto para o guarda-roupa. Zero trabalho residual.",
  },
  {
    icon: "📱",
    title: "Coleta agendada pelo WhatsApp",
    body: "Sem app, sem plataforma complicada. Um whats resolve coleta, entrega e qualquer dúvida.",
  },
  {
    icon: "💰",
    title: "Sem surpresas no preço",
    body: "No Plano Casal, o valor é fixo e mensal. Vocês sabem exatamente o que vão pagar, sem variações.",
  },
  {
    icon: "⏱️",
    title: "Tempo de volta pra vocês",
    body: "Em média 8 horas por semana recuperadas. Uma tarde inteira de domingo devolvida para o casal.",
  },
];

const PLAN_FEATURES = [
  "Coleta e entrega na sua porta",
  "Lavagem de ambas as pessoas num pedido só",
  "Separação e etiquetagem por pessoa",
  "Roupas dobradas e passadas",
  "Desconto especial vs. plano individual",
  "Sem contrato de fidelidade",
  "Atendimento prioritário no WhatsApp",
  "Roupas de bebê inclusas (opcional)",
];

const TESTIMONIALS = [
  {
    name: "Lucas e Mariana S.",
    city: "São José dos Campos",
    text: "Trabalhamos os dois em período integral. Nosso fim de semana era literalmente dominado pela roupa. Hoje a A7 cuida de tudo e a gente usa esse tempo para se ver de verdade.",
  },
  {
    name: "Renata e Paulo C.",
    city: "Taubaté",
    text: "Tenho bebê de 8 meses. Meu marido e eu já não tínhamos tempo nem para nós dois. O Plano Casal resolveu as roupas do casal e as do bebê também. Indispensável.",
  },
  {
    name: "Juliana e André M.",
    city: "Jacareí",
    text: "Acabamos de nos casar e desde o início optamos por terceirizar a lavanderia. Nenhum de nós precisou sequer discutir quem lavaria. Vale cada centavo.",
  },
];

const FAQ = [
  {
    q: "Podemos mandar as roupas dos dois juntos no mesmo saco?",
    a: "Sim, e é exatamente assim que funciona. Vocês colocam as roupas dos dois juntos. A gente separa, lava e devolve etiquetado por pessoa.",
  },
  {
    q: "Como vocês separam as roupas de cada um?",
    a: "Na hora da entrega, organizamos em pacotes ou embalagens separadas identificadas por nome. Para facilitar, peça que cada um coloque uma fita ou etiqueta nas próprias peças ao colocar no saco — ou avisem na hora do agendamento.",
  },
  {
    q: "Posso mandar roupas de bebê junto?",
    a: "Sim. Temos protocolo de lavagem com produtos hipoalergênicos para roupas de bebê. Basta separar num saquinho identificado dentro do pedido.",
  },
  {
    q: "Como agendamos a coleta?",
    a: "Pelo WhatsApp. Você escolhe o dia e a janela de horário, e nosso entregador vai até o endereço combinado.",
  },
  {
    q: "O preço é por pessoa ou por peso total?",
    a: "No Plano Casal, o valor é fixo mensal. Vocês pagam um único valor que cobre as roupas dos dois, sem cálculo por peça ou por quilo.",
  },
];

export default function ParaCasaisPage() {
  const waLink = getWhatsAppLink("para-casais");

  return (
    <div className="min-h-screen bg-rose-950">
      <ServiceSchema name="Lavanderia para Casais" description="Plano casal com coleta semanal, separação por pessoa e entrega organizada. Devolva o fim de semana para vocês dois." slug="para-casais" />
      <header className="fixed top-0 w-full z-50 bg-rose-950/90 backdrop-blur-md border-b border-rose-900/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-rose-400">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
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
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
          alt="Casal aproveitando tempo livre em casa organizada"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-rose-950/55 to-rose-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-rose-400" />
              <span className="text-rose-400 text-xs font-bold uppercase tracking-[0.16em]">
                Para Casais · Plano conjunto
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Tempo Juntos
              <br />
              é Muito Mais
              <br />
              <span className="text-rose-400">Valioso</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Chega de dividir o fim de semana com pilhas de roupa.{" "}
              <strong className="text-white">A A7 cuida de tudo para vocês dois.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Quero o Plano Casal
              </a>
              <a
                href="#plano-casal"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver o plano
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Sem contrato", "Coleta na porta", "Separado por pessoa", "Roupas passadas"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-rose-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-3xl leading-none tracking-tight">{s.value}</p>
                <p className="text-rose-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
              O problema real
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              A roupa está consumindo o tempo que vocês deveriam ter juntos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-gray-900 border border-gray-800 p-7 hover:border-rose-900 transition-colors">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-rose-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
              Por que casais escolhem a A7
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Tudo pensado para facilitar a vida dos dois
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="border border-rose-900/50 bg-rose-950/80 p-7 hover:border-rose-700 transition-colors">
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
                <p className="text-sm text-rose-200/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plano-casal" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
              Plano exclusivo
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
              O Plano Casal A7
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Um único plano para os dois. Desconto especial comparado a dois planos individuais. Sem fidelidade, sem burocracia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-rose-950 border border-rose-800 p-8">
              <h3 className="text-white font-black text-xl mb-6">O que está incluso</h3>
              <ul className="space-y-3">
                {PLAN_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-rose-100/80">
                    <svg className="w-4 h-4 text-rose-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="bg-gray-900 border border-gray-800 p-6">
                <p className="text-gray-400 text-sm mb-2">Economia real por mês</p>
                <p className="text-white font-black text-2xl">~8 horas livres</p>
                <p className="text-gray-500 text-xs mt-1">tempo recuperado para o casal</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6">
                <p className="text-gray-400 text-sm mb-2">Comparado a 2 planos individuais</p>
                <p className="text-rose-400 font-black text-2xl">Desconto especial</p>
                <p className="text-gray-500 text-xs mt-1">solicite o valor pelo WhatsApp</p>
              </div>
              <a
                href={waLink}
                className="flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-black text-lg px-6 py-5 rounded transition-colors w-full"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Quero o Plano Casal
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-rose-950/50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">
            Casais que recuperaram o fim de semana
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-rose-900/50 bg-gray-950 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-rose-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-rose-900 text-rose-300 flex items-center justify-center font-black text-sm rounded">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-gray-500">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2
            className="text-white font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            O domingo era para ser
            <br />
            de vocês.
            <br />
            <span className="text-rose-400">A gente devolve.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Sem contrato. Primeiro pedido com <strong className="text-rose-400">10% OFF</strong>. Coleta hoje.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-black text-xl px-10 py-6 rounded transition-colors"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar primeira coleta
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-950 border-t border-gray-900">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas frequentes</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-gray-800 bg-gray-900">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-800 transition-colors">
                  <span className="font-semibold text-gray-100 text-sm pr-4">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="para-casais" />
      <footer className="bg-gray-950 border-t border-gray-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/para-maes" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Para mães
            </Link>
            <Link href="/como-funciona" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Como funciona
            </Link>
            <Link href="/precos" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Preços
            </Link>
          </div>
          <a href={waLink} className="text-xs text-rose-400 font-semibold hover:text-rose-300 transition-colors">
            Agendar coleta →
          </a>
        </div>
      </footer>
    </div>
  );
}
