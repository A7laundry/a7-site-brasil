"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Coleta em Taubaté", label: "e região" },
  { value: "Entrega em 48h", label: "prazo garantido" },
  { value: "Região do Vale", label: "cobertura completa" },
  { value: "Desde 2019", label: "na região" },
];

const NEIGHBORHOODS = [
  { name: "Centro", detail: "Toda a área central, incluindo Praça da República e arredores." },
  { name: "Jardim das Nações", detail: "Coleta e entrega nos principais condomínios do bairro." },
  { name: "Quarta Divisão", detail: "Atendimento completo incluindo áreas residenciais e comerciais." },
  { name: "Areão", detail: "Bairro atendido com rota programada e prazo garantido." },
  { name: "Independência", detail: "Residências e empresas atendidas na mesma rota." },
];

const PAIN_POINTS = [
  {
    icon: "🔍",
    title: "Lavanderias de bairro sem estrutura",
    body: "Muitas lavanderias em Taubaté usam equipamentos caseiros, sem processo de controle de qualidade. Sua roupa merece mais.",
  },
  {
    icon: "⏰",
    title: "Prazo imprevisível",
    body: "Prometem 3 dias, entregam em 7. A A7 tem prazo fixo de 48h com acompanhamento pelo WhatsApp.",
  },
  {
    icon: "🧺",
    title: "Mistura de roupas de clientes diferentes",
    body: "Em lavanderias sem processo, peças de vários clientes são lavadas juntas. Na A7, cada pedido é identificado e processado separadamente.",
  },
  {
    icon: "💸",
    title: "Preço por peça obscuro",
    body: "Tabela de preços confusa, cobranças extras que aparecem na hora de buscar. Com a A7 é transparente desde o agendamento.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Agende pelo WhatsApp",
    body: "Informe seu endereço em Taubaté, dia e horário preferido. Resposta em até 5 minutos.",
  },
  {
    step: "02",
    title: "Coleta na sua porta",
    body: "Nosso motoboy vai até você em Taubaté no horário combinado. Sem deslocamento, sem trânsito.",
  },
  {
    step: "03",
    title: "Higienização com padrão A7",
    body: "Suas roupas são processadas no centro de operações com equipamentos industriais e produtos premium.",
  },
  {
    step: "04",
    title: "Entrega em 48 horas",
    body: "Roupas limpas, passadas e embaladas na sua porta em Taubaté. Exatamente como prometido.",
  },
];

const SERVICES = [
  {
    icon: "👗",
    title: "Roupas do Dia",
    body: "Lavagem, secagem e passadoria completa. Roupas dobradas e embaladas prontas para usar.",
  },
  {
    icon: "🛏️",
    title: "Edredons",
    body: "Higienização anti-ácaros profunda. Edredom volta fofo, cheiroso e sem fungos ou bactérias.",
  },
  {
    icon: "🛋️",
    title: "Sofás & Tapetes",
    body: "Higienização a seco de sofás e lavagem especializada de tapetes. Coleta e entrega em Taubaté.",
  },
  {
    icon: "🏢",
    title: "Empresarial",
    body: "Uniformes, toalhas e enxoval corporativo. Contratos mensais com faturamento por CNPJ.",
  },
  {
    icon: "📅",
    title: "Plano Mensal",
    body: "Assine e receba coleta recorrente sem precisar lembrar de agendar. Desconto no plano.",
  },
  {
    icon: "⚡",
    title: "Express",
    body: "Precisa com urgência? Serviço express com devolução em 24h. Consulte disponibilidade.",
  },
];

const WHY_A7 = [
  {
    icon: "🏭",
    title: "Equipamentos industriais, não domésticos",
    body: "Máquinas de capacidade industrial processam as roupas de forma mais eficiente e com temperatura controlada. Resultado incomparável com máquinas caseiras.",
  },
  {
    icon: "🧪",
    title: "Produtos testados dermatologicamente",
    body: "Nada de sabão comum. Usamos produtos premium, hipoalergênicos e dermatologicamente testados. Seguros para bebês e peles sensíveis.",
  },
  {
    icon: "📍",
    title: "Mesma qualidade da sede em SJC",
    body: "O mesmo processo, os mesmos padrões, os mesmos produtos. Morar em Taubaté não significa abrir mão da qualidade da lavanderia premium do Vale.",
  },
  {
    icon: "📱",
    title: "Atendimento humano e ágil",
    body: "Nenhum robô ou chatbot. Nossa equipe responde em até 5 minutos pelo WhatsApp com informação real sobre sua coleta.",
  },
];

const TESTIMONIALS = [
  {
    name: "Patrícia Monteiro",
    city: "Taubaté — Centro",
    text: "Antes eu usava uma lavanderia aqui no Centro de Taubaté. Trocas de prazo, roupas voltando com odor. Com a A7, agendei pelo WhatsApp, coletaram em casa e em 48h tudo estava de volta impecável.",
  },
  {
    name: "Diego Alves",
    city: "Taubaté — Jardim das Nações",
    text: "Moro no Jardim das Nações e precisava de uma opção boa para minha roupa social. A A7 atende o bairro normalmente e a qualidade é a mesma das lavanderias premium de SJC. Recomendo.",
  },
  {
    name: "Cássia Rodrigues",
    city: "Taubaté — Areão",
    text: "Uso o plano mensal há 4 meses. Coleta toda semana no mesmo dia, sem precisar lembrar de nada. Minhas roupas voltam muito bem cuidadas e passadas.",
  },
];

const FAQ = [
  {
    q: "Como agendar uma coleta em Taubaté?",
    a: "Pelo WhatsApp. Informe seu bairro em Taubaté, endereço completo e preferência de horário. Nossa equipe confirma a coleta normalmente para o próximo dia útil.",
  },
  {
    q: "Qual o prazo de entrega em Taubaté?",
    a: "O prazo padrão é de 48 horas a partir da coleta. Para roupas do dia a dia, geralmente conseguimos entregar em 2 dias úteis. Peças especiais como edredons e sofás podem levar até 72h.",
  },
  {
    q: "O frete é cobrado em Taubaté?",
    a: "A coleta e entrega são incluídas no valor do serviço para pedidos acima do mínimo. Para clientes de plano mensal, o frete é sempre gratuito. Consulte as condições exatas no agendamento.",
  },
  {
    q: "Vocês têm loja física em Taubaté?",
    a: "Nosso centro de operações fica em São José dos Campos. Mas você não precisa ir a lugar nenhum — a coleta e entrega acontecem na sua porta em Taubaté.",
  },
  {
    q: "Como funciona para empresas em Taubaté?",
    a: "Atendemos empresas de todos os portes em Taubaté com coleta programada, contratos mensais e faturamento por CNPJ. Entre em contato para uma proposta personalizada.",
  },
];

export default function TaubatePage() {
  const waLink = getWhatsAppLink("taubate");

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
            Agendar em Taubaté
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1400&q=80"
          alt="Taubaté cidade"
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
                Taubaté · Coleta & Entrega
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              A Lavanderia
              <br />
              Premium de{" "}
              <span className="text-blue-400">Taubaté</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Coleta e entrega em Taubaté e região —{" "}
              <strong className="text-white">A7 Lavanderia com qualidade de São Paulo</strong> chegando até a sua porta.
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
                Agendar coleta em Taubaté
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
              {["Todos os bairros de Taubaté", "Entrega em 48h", "Sem sair de casa", "Empresas e pessoas físicas"].map((t) => (
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
              Por que lavanderias comuns em Taubaté decepcionam
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
              Cobertura em Taubaté
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Atendemos todos os bairros
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-xl">
              Independente do bairro, a A7 atende toda Taubaté. Os principais bairros com rota regular:
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
              <h3 className="font-bold text-blue-300 text-sm mb-2">Seu bairro não está aqui?</h3>
              <p className="text-xs text-blue-400/70 leading-relaxed">Atendemos toda Taubaté. Mande mensagem com seu endereço e confirmamos a disponibilidade.</p>
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
              Tudo que você precisa em Taubaté
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
              A7 vs. lavanderia de bairro
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Qualidade de SJC, sem sair de Taubaté
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_A7.map((w) => (
              <div key={w.title} className="flex gap-5 p-7 bg-slate-800 border border-slate-700">
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

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">
            O que os taubateanos dizem
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
            Agende sua primeira coleta em Taubaté
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Qualidade premium do Vale do Paraíba com coleta e entrega na sua porta. Prazo garantido de 48h. Agende agora pelo WhatsApp.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta em Taubaté
          </a>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre atendimento em Taubaté</h2>
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
            <Link href="/sao-jose-dos-campos" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              São José dos Campos
            </Link>
            <Link href="/jacarei" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Jacareí
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar em Taubaté →
          </a>
        </div>
      </footer>
    </div>
  );
}
