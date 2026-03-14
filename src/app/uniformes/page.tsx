"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "+120 empresas", label: "contratos ativos" },
  { value: "Coleta na empresa", label: "sem interrupção da operação" },
  { value: "Por colaborador", label: "organização individual" },
  { value: "Contratos B2B", label: "com NF-e e faturamento CNPJ" },
];

const PROBLEMS = [
  {
    icon: "⏱️",
    title: "RH perdendo tempo com uniforme",
    body: "Gestão de uniforme não é tarefa de RH. Cada hora de colaborador de RH organizando lavagem é hora a menos em recrutamento, treinamento e cultura.",
  },
  {
    icon: "😬",
    title: "Apresentação inconsistente da equipe",
    body: "Colaborador com uniforme amassado, desbotado ou malcheiroso prejudica a imagem da marca perante clientes e parceiros.",
  },
  {
    icon: "🦠",
    title: "Higiene inadequada em setores críticos",
    body: "Saúde, alimentação e indústria têm exigências específicas de higienização que lavagem doméstica simplesmente não atende.",
  },
  {
    icon: "📉",
    title: "Custo oculto em lavagem interna",
    body: "Máquina, energia, sabão, tempo do funcionário, desgaste do uniforme. A conta de lavar interno é sempre maior do que parece.",
  },
  {
    icon: "🔀",
    title: "Peças misturadas e perdidas",
    body: "Sem processo, uniformes de colaboradores diferentes se misturam, peças somem e o controle de estoque vira um pesadelo.",
  },
];

const SECTOR_CARDS = [
  {
    icon: "🏥",
    title: "Saúde & Hospitais",
    items: ["Jalecos e scrubs", "Aventais cirúrgicos", "Uniformes de enfermagem", "Conformidade ANVISA"],
  },
  {
    icon: "🍳",
    title: "Alimentação & Gastronomia",
    items: ["Uniformes de cozinha", "Aventais e toucas", "EPIs laváveis", "Laudos de higienização"],
  },
  {
    icon: "🛍️",
    title: "Varejo",
    items: ["Camisetas de equipe", "Aventais de PDV", "Uniformes de gerência", "Padronização por loja"],
  },
  {
    icon: "🔒",
    title: "Segurança Patrimonial",
    items: ["Uniformes operacionais", "Coletes e jaquetas", "Roupas de ronda", "Embalagem individual"],
  },
  {
    icon: "🏭",
    title: "Indústria",
    items: ["EPIs laváveis (NR-6)", "Macacões e overalls", "Uniformes de produção", "Fardamentos técnicos"],
  },
  {
    icon: "🏨",
    title: "Hotelaria",
    items: ["Uniformes de recepção", "Uniformes de governança", "Uniformes de restaurante", "Crachás e acessórios"],
  },
];

const PROCESS = [
  { step: "01", title: "Contrato B2B", body: "Avaliamos número de colaboradores, tipos de uniforme e frequência. Montamos um plano sob medida." },
  { step: "02", title: "Coleta programada", body: "Nossa equipe passa na sua empresa nas datas e horários combinados. Sem interromper a operação." },
  { step: "03", title: "Separação por colaborador", body: "Cada peça é identificada pelo nome ou código do colaborador. Nada se mistura." },
  { step: "04", title: "Higienização profissional", body: "Processo industrial com temperatura, produto e tempo adequados para cada tipo de tecido e setor." },
  { step: "05", title: "Embalagem individual", body: "Cada colaborador recebe seu uniforme embalado individualmente com etiqueta de identificação." },
  { step: "06", title: "Entrega na empresa", body: "Devolvemos organizado por colaborador. A distribuição interna fica fácil e sem erros." },
];

const COMPLIANCE = [
  {
    norma: "ANVISA RDC 52/2009",
    desc: "Padrão de higienização para serviços de saúde com laudo de temperatura e produto.",
  },
  {
    norma: "NR-6 (EPIs Laváveis)",
    desc: "Processo adequado para manter as propriedades de proteção dos EPIs laváveis.",
  },
  {
    norma: "NR-24 (Alimentação)",
    desc: "Higienização de uniformes de manipuladores de alimentos conforme exigência da norma.",
  },
  {
    norma: "ISO 9001",
    desc: "Processo documentado e rastreável para atender exigências de auditorias de qualidade.",
  },
];

const TESTIMONIALS = [
  {
    name: "Patricia Drummond",
    role: "Gerente de RH · Clínica São Lucas, SJC",
    text: "40 jalecos e scrubs para a equipe de enfermagem. A A7 entrega com laudo de higienização que a nossa ANVISA exige. Nunca mais precisei me preocupar com isso.",
  },
  {
    name: "Marcos Rezende",
    role: "Proprietário · Rede Pastifício Fratelli (3 unidades)",
    text: "65 funcionários distribuídos em 3 lojas. A A7 coleta em todas, separa por colaborador e entrega organizado. Economizamos 35% comparado com a solução anterior.",
  },
  {
    name: "Ana Paula Correia",
    role: "Diretora administrativa · Grupo Vigilância Total",
    text: "120 vigilantes precisam de uniforme impecável todo dia. A A7 garante isso com coleta duas vezes por semana e embalagem individual. Zero reclamação da equipe.",
  },
];

const FAQ = [
  {
    q: "O preço é por colaborador ou por kg?",
    a: "Oferecemos as duas modalidades. Para equipes acima de 20 colaboradores, o contrato por colaborador costuma ser mais econômico e previsível. Para volumes menores, cobramos por kg com tabela fixa.",
  },
  {
    q: "Como identificamos as peças de cada colaborador?",
    a: "Na contratação, fornecemos etiquetas de identificação que são costuradas ou termocoladas nas peças. A partir daí, usamos o código do colaborador no check-in e check-out de cada peça.",
  },
  {
    q: "Com que frequência fazem a coleta?",
    a: "A frequência é definida em contrato, de acordo com sua operação. Pode ser diária, bissemanal ou semanal. Para setores críticos como saúde e alimentação, recomendamos coleta mínima semanal.",
  },
  {
    q: "Atendem as normas NR para alimentação e saúde?",
    a: "Sim. Emitimos laudo de higienização com temperatura, produto sanitizante e protocolo de processo para cada lote. Documentação aceita em auditorias ANVISA, MAPA e inspeções NR.",
  },
  {
    q: "Qual o processo para iniciar um novo contrato?",
    a: "Entre em contato pelo WhatsApp, agendamos uma reunião de levantamento (presencial ou online), avaliamos volume e necessidades e em até 5 dias úteis a parceria já está rodando.",
  },
];

export default function UniformesPage() {
  const waLink = getWhatsAppLink("uniformes");

  return (
    <div className="min-h-screen bg-indigo-950">
      <ServiceSchema name="Lavagem de Uniformes Corporativos" description="Lavanderia corporativa para uniformes com coleta na empresa, separação por colaborador e conformidade com ANVISA e normas NR." slug="uniformes" />
      <header className="fixed top-0 w-full z-50 bg-indigo-950/90 backdrop-blur-md border-b border-indigo-800/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
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
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80"
          alt="Equipe corporativa com uniformes padronizados"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-950/55 to-indigo-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-indigo-400" />
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.16em]">
                B2B · Lavanderia para Uniformes Corporativos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Uniformes Sempre
              <br />
              Prontos para
              <br />
              <span className="text-indigo-400">sua Equipe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Lavanderia corporativa para uniformes — coleta na empresa, higienização profissional e{" "}
              <strong className="text-white">entrega organizada por colaborador.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Solicitar proposta corporativa
              </a>
              <a
                href="#setores"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver setores atendidos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Coleta na empresa", "Por colaborador", "Laudo de higienização", "NR compliance"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-2xl leading-none tracking-tight">{s.value}</p>
                <p className="text-indigo-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-4">
              Os problemas que sua empresa enfrenta
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              Por que gestão interna de uniforme custa mais do que parece
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-gray-900 border border-gray-800 p-7 hover:border-indigo-800 transition-colors">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="setores" className="py-24 bg-indigo-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-4">
              Setores atendidos
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Do jaleco ao macacão industrial
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTOR_CARDS.map((s) => (
              <div key={s.title} className="bg-gray-950 border border-indigo-900/40 p-7 hover:border-indigo-700/60 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-4">
              Como funciona
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Do contrato à entrega organizada
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative">
                <span className="text-5xl font-black text-indigo-800/50 block mb-3 leading-none">{p.step}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-4">
              Conformidade regulatória
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Documentação pronta para ANVISA, NR e auditorias
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {COMPLIANCE.map((c) => (
              <div key={c.norma} className="flex gap-5 p-7 bg-gray-950 border border-indigo-900/30 hover:border-indigo-700/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                <div>
                  <h3 className="font-bold text-indigo-300 text-base mb-2">{c.norma}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            O que gestores e empresas dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-gray-800 bg-gray-900 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-indigo-400 text-sm">★</span>
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

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Sua equipe merece uniformes sempre prontos
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
            Terceirize a lavagem de uniformes e libere seu RH para o que realmente importa. Coleta, higienização e entrega organizada por colaborador.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-indigo-50 text-indigo-800 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Solicitar proposta corporativa
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre uniformes corporativos</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-indigo-900/20 bg-gray-900">
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

      <RelatedServices currentSlug="uniformes" />
      <footer className="bg-gray-950 border-t border-indigo-900/20 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/restaurantes" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Restaurantes
            </Link>
            <Link href="/hotelaria" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Hotelaria
            </Link>
            <Link href="/empresarial" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Empresarial
            </Link>
          </div>
          <a href={waLink} className="text-xs text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
            Solicitar proposta →
          </a>
        </div>
      </footer>
    </div>
  );
}
