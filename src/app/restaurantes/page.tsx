"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "+120", label: "negócios atendidos" },
  { value: "Coleta & Entrega", label: "programada" },
  { value: "Contrato Mensal", label: "preço fixo" },
  { value: "SLA", label: "garantido" },
];

const PROBLEMS = [
  {
    icon: "🧺",
    title: "Enxoval manchado e desgastado",
    body: "Toalhas amareladas, guardanapos com manchas persistentes e aventais sem cor prejudicam a imagem do restaurante na mesa.",
  },
  {
    icon: "⏰",
    title: "Equipe perdendo tempo na lavanderia",
    body: "Cada hora de funcionário lavando enxoval internamente é hora a menos no atendimento, na cozinha e na qualidade do serviço.",
  },
  {
    icon: "🔴",
    title: "Resultados inconsistentes",
    body: "Lavar em máquinas domésticas não padroniza resultados. Peças chegam às mesas com odor, amassado ou mal higienizadas.",
  },
  {
    icon: "📋",
    title: "Risco na vigilância sanitária",
    body: "Sem laudo de higienização e rastreabilidade das peças, seu restaurante fica vulnerável em fiscalizações da ANVISA.",
  },
  {
    icon: "📦",
    title: "Falta de enxoval no pico",
    body: "Fim de semana lotado, cozinha no limite — e você descobre que não tem guardanapos suficientes para o segundo turno.",
  },
];

const PROCESS = [
  { step: "01", title: "Contrato B2B personalizado", body: "Avaliamos seu volume, frequência e tipos de peças. Montamos um plano sob medida com preço fixo mensal." },
  { step: "02", title: "Coleta programada na sua porta", body: "Definimos os dias da semana para coleta. Nosso motorista aparece no horário combinado, sem você precisar ligar." },
  { step: "03", title: "Processamento industrial", body: "Cada lote passa por lavagem em temperatura controlada, produtos sanitizantes certificados e secagem profissional." },
  { step: "04", title: "Entrega com relatório", body: "Devolvemos as peças dobradas, embaladas e acompanhadas de relatório de higienização para seus arquivos ANVISA." },
];

const SEGMENTS = [
  {
    icon: "🍽️",
    title: "Restaurantes à La Carte",
    items: ["Toalhas de mesa", "Guardanapos de pano", "Aventais de sommelier", "Uniformes de garçom"],
  },
  {
    icon: "☕",
    title: "Bistrôs & Cafeterias",
    items: ["Panos de copa", "Aventais barista", "Uniformes da equipe", "Toalhinhas de bandeja"],
  },
  {
    icon: "🍕",
    title: "Pizzarias",
    items: ["Aventais de cozinha", "Uniformes da equipe", "Panos de secagem", "Guardanapos de entrega"],
  },
  {
    icon: "🥩",
    title: "Churrascarias",
    items: ["Uniformes de garçom", "Aventais de churrasqueiro", "Toalhas de mesa", "Roupões de recepção"],
  },
  {
    icon: "🏬",
    title: "Food Courts",
    items: ["Uniformes de praça", "Aventais padronizados", "Panos de limpeza", "Camisetas de equipe"],
  },
  {
    icon: "📦",
    title: "Dark Kitchens",
    items: ["Uniformes de cozinha", "Aventais de produção", "Toucas e luvas de pano", "EPIs laváveis"],
  },
];

const DIFERENCIAIS = [
  {
    icon: "💰",
    title: "Contrato mensal com preço fixo",
    body: "Sem surpresa no final do mês. Você sabe exatamente o custo de enxoval, podendo precificar seus pratos com precisão.",
  },
  {
    icon: "🚪",
    title: "Coleta na sua porta",
    body: "Sem deslocamento, sem perda de tempo. Nossa equipe vai até o seu restaurante no horário programado toda semana.",
  },
  {
    icon: "🔍",
    title: "Rastreabilidade de peças",
    body: "Cada lote é registrado, fotografado e documentado. Você sabe exatamente quantas peças saíram e voltaram.",
  },
  {
    icon: "📄",
    title: "Relatório de higiene para ANVISA",
    body: "Laudo com temperatura, produtos utilizados e resultado de higienização. Documentação pronta para qualquer fiscalização.",
  },
];

const TESTIMONIALS = [
  {
    name: "Chef Marco Ribeiro",
    role: "Restaurante Il Sapore, SJC",
    text: "Terceirizei o enxoval há 2 anos e nunca mais tive problema. Toalhas sempre impecáveis, entrega pontual. Economizei pelo menos 40% em comparação com lavar internamente.",
  },
  {
    name: "Fernanda Gomes",
    role: "Gerente, Bistró Lareira, Taubaté",
    text: "O relatório de higienização foi decisivo para aprovar nossa licença sanitária. A A7 entende as necessidades do setor alimentício de verdade.",
  },
  {
    name: "Ricardo Alves",
    role: "Proprietário, Churrascaria Gaúcha, Jacareí",
    text: "75 uniformes semanais para minha brigada. Nunca mais tive funcionário reclamando de uniforme malcheiroso ou mal lavado. Serviço top.",
  },
];

const FAQ = [
  {
    q: "Qual o volume mínimo para contrato B2B?",
    a: "Atendemos a partir de 30 peças por semana. Para volumes menores, oferecemos plano avulso com desconto para clientes recorrentes.",
  },
  {
    q: "Com que frequência fazem a coleta?",
    a: "A frequência é definida em contrato — pode ser diária, bissemanal ou semanal, de acordo com a operação do seu restaurante.",
  },
  {
    q: "Preciso assinar um contrato de fidelidade?",
    a: "Nosso contrato padrão é de 3 meses, renovável automaticamente. Não exigimos fidelidade anual. Saída com 30 dias de aviso prévio.",
  },
  {
    q: "A documentação atende exigências da ANVISA?",
    a: "Sim. Emitimos laudo de higienização com temperatura, produtos sanitizantes e lote de cada entrega. Documentação aceita em fiscalizações da vigilância sanitária.",
  },
  {
    q: "Como começo a parceria?",
    a: "É simples: entre em contato pelo WhatsApp, agendamos uma visita técnica para avaliar volume e necessidades, e em até 5 dias úteis a parceria já está operando.",
  },
];

export default function RestaurantesPage() {
  const waLink = getWhatsAppLink("restaurantes");

  return (
    <div className="min-h-screen bg-emerald-950">
      <header className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-emerald-900/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-emerald-400">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Solicitar proposta
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
          alt="Mesa de restaurante com toalhas brancas impecáveis"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/55 to-gray-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.16em]">
                B2B · Lavanderia para Restaurantes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Sua Louçaria
              <br />
              Sempre
              <br />
              <span className="text-emerald-400">Impecável</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Lavanderia B2B para restaurantes: toalhas, guardanapos, uniformes e aventais com entrega programada.{" "}
              <strong className="text-white">Foco no seu negócio, enxoval no nosso.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Solicitar proposta grátis
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Como funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Relatório ANVISA incluso", "Contrato sem fidelidade", "Rastreabilidade total", "NF-e para CNPJ"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-2xl leading-none tracking-tight">{s.value}</p>
                <p className="text-emerald-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4">
              O problema que custeia seu negócio
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              Por que o enxoval interno afunda a margem dos restaurantes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-gray-900 border border-gray-800 p-7 hover:border-emerald-800 transition-colors">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-emerald-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4">
              Como funciona
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Da proposta à primeira entrega em 5 dias
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative">
                <span className="text-5xl font-black text-emerald-800/60 block mb-3 leading-none">{p.step}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4">
              Segmentos atendidos
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Atendemos todo o setor de alimentação
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="bg-gray-900 border border-gray-800 p-7 hover:border-emerald-700 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4">
              Diferenciais B2B
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              O que só a A7 oferece para o seu restaurante
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {DIFERENCIAIS.map((d) => (
              <div key={d.title} className="flex gap-5 p-7 bg-gray-950/60 border border-emerald-900/40">
                <span className="text-3xl flex-shrink-0">{d.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            O que nossos parceiros falam
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-gray-800 bg-gray-900 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-emerald-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-xs font-bold text-white">{t.name}</p>
                  <p className="text-[10px] text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Planos a partir de R$490/mês
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
            Inclui coleta programada, processamento industrial, entrega e relatório de higienização. Preço fixo, sem surpresas.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-emerald-50 text-emerald-800 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Solicitar proposta personalizada
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre o contrato B2B</h2>
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

      <footer className="bg-gray-950 border-t border-gray-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/uniforms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Uniformes corporativos
            </Link>
            <Link href="/hotelaria" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Hotelaria
            </Link>
            <Link href="/empresarial" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Empresarial
            </Link>
          </div>
          <a href={waLink} className="text-xs text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
            Solicitar proposta →
          </a>
        </div>
      </footer>
    </div>
  );
}
