"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Concierge 24/7", label: "atendimento dedicado" },
  { value: "Express 12h", label: "entrega garantida" },
  { value: "Garantia Total", label: "em cada peça" },
  { value: "Desde 2019", label: "referência premium" },
];

const DIFFERENTIATORS = [
  {
    icon: "👑",
    title: "Concierge dedicado",
    body: "Um consultor exclusivo cuida do seu pedido do início ao fim. Você tem acesso direto, sem fila, sem chatbot.",
  },
  {
    icon: "🚗",
    title: "Coleta em domicílio",
    body: "Agendamos no horário que você preferir. Nosso motorista vai até você — seja no escritório, no condomínio ou em casa.",
  },
  {
    icon: "🔖",
    title: "Rastreio peça a peça",
    body: "Cada item recebe uma etiqueta individual com QR code. Você acompanha o status de cada peça em tempo real.",
  },
  {
    icon: "📜",
    title: "Certificado de qualidade",
    body: "Emitimos um laudo de higienização para cada pedido — temperatura, produtos, tempo de processo. Documentação completa.",
  },
  {
    icon: "🧵",
    title: "Preservação de monogramas",
    body: "Iniciais bordadas, logos de grife e detalhes artesanais recebem tratamento manual específico para preservação total.",
  },
  {
    icon: "📸",
    title: "Registro fotográfico",
    body: "Cada peça é fotografada na entrada e na saída. Você sabe exatamente o estado em que chegou e como voltou.",
  },
];

const SERVICES = [
  {
    icon: "👔",
    title: "Roupas Premium",
    items: ["Camisas de linho e seda", "Ternos e blazers de grife", "Peças importadas e vintage", "Acessórios delicados"],
  },
  {
    icon: "💎",
    title: "Peças de Grife",
    items: ["Gucci, Prada, Armani e similares", "Tratamento por tecido específico", "Laudo de higienização incluso", "Embalagem premium de devolução"],
  },
  {
    icon: "🧥",
    title: "Itens de Couro",
    items: ["Jaquetas e casacos de couro", "Bolsas e carteiras de luxo", "Hidratação e restauração", "Proteção UV inclusa"],
  },
  {
    icon: "🏠",
    title: "Casa Completa",
    items: ["Enxoval de cama premium", "Cortinas e tapetes finos", "Mantas e cobertores de lã", "Roupões e toalhas egípcias"],
  },
  {
    icon: "💼",
    title: "Corporativo Premium",
    items: ["Uniformes executivos", "Ternos e moda social B2B", "Contratos para empresas", "NF-e e faturamento por CNPJ"],
  },
  {
    icon: "⚡",
    title: "Emergency Express",
    items: ["Entrega em até 12 horas", "Coleta imediata disponível", "Suporte via concierge 24/7", "Disponível 7 dias por semana"],
  },
];

const GUARANTEE = [
  {
    scenario: "Peça danificada",
    response: "Cobrimos reparo por alfaiate parceiro certificado ou reposição integral — você escolhe.",
  },
  {
    scenario: "Resultado insatisfatório",
    response: "Relavam sem custo. Se ainda não satisfizer, reembolso completo do serviço.",
  },
  {
    scenario: "Atraso na entrega express",
    response: "Desconto automático de 50% no próximo pedido. Pontualidade é compromisso, não promessa.",
  },
  {
    scenario: "Peça perdida",
    response: "Indenização pelo valor de mercado da peça, documentado via laudo de entrada.",
  },
];

const TESTIMONIALS = [
  {
    name: "Alexandre Machado",
    role: "CEO · Grupo AM Holdings",
    text: "Tenho 40 camisas sociais e 12 ternos em rodízio. A A7 Premium é a única lavanderia que cuida deles com o nível que eles merecem. Concierge sempre disponível.",
  },
  {
    name: "Isabela Torres",
    role: "Influenciadora de moda · 890K seguidores",
    text: "Uso peças de grife no dia a dia das redes. A A7 devolve tudo como novo, com laudo. Nunca mais me preocupei com encaminhar uma Gucci para lavar.",
  },
  {
    name: "Dr. Rodrigo Almeida",
    role: "Cirurgião · Hospital Santa Casa",
    text: "Meus costumes de R$3.000+ precisam de cuidado real. A A7 Premium entrega isso — com rastreio individual e certificado. Virei cliente permanente.",
  },
];

const FAQ = [
  {
    q: "O que está incluso no serviço premium?",
    a: "Coleta em domicílio no horário agendado, rastreio individual por QR code, certificado de higienização, embalagem premium de devolução e concierge dedicado durante todo o processo.",
  },
  {
    q: "Como funciona o concierge?",
    a: "Você recebe o contato direto do seu consultor via WhatsApp. Ele agenda a coleta, acompanha o processo, avisa sobre qualquer particularidade da peça e confirma a entrega. Disponível 24/7 para pedidos urgent.",
  },
  {
    q: "Qual o prazo do serviço express?",
    a: "O express garante devolução em até 12 horas após a coleta. Para pedidos recebidos até as 12h, a entrega acontece no mesmo dia. Para pedidos após as 12h, entregamos no dia seguinte pela manhã.",
  },
  {
    q: "Peças caras ficam seguras?",
    a: "Sim. Registramos o valor declarado de cada peça no check-in com foto e laudo. Todas as peças ficam em área de acesso restrito. Em caso de qualquer problema (rarísssimo), a cobertura é integral.",
  },
  {
    q: "Como solicitar o primeiro pedido?",
    a: "Entre em contato pelo WhatsApp para agendar uma consulta gratuita com nosso concierge. Ele avalia suas necessidades, orienta sobre cuidados específicos de cada peça e agenda a primeira coleta.",
  },
];

export default function PremiumPage() {
  const waLink = getWhatsAppLink("premium");

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ServiceSchema name="Serviço Premium A7 Lavanderia" description="O padrão mais alto em lavanderia: concierge 24/7, rastreamento por QR code, garantia total e express 12h. Para quem não aceita menos que perfeito." slug="premium" />
      <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-yellow-900/30">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Falar com concierge
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
          alt="Serviço premium de lavanderia de luxo"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-[#0A0A0A]/15" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-yellow-500" />
              <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.16em]">
                A7 Premium · Lavanderia de Luxo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              O Padrão Mais
              <br />
              Alto em
              <br />
              <span className="text-yellow-400">Lavanderia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Para quem não aceita menos que perfeito — serviço premium com concierge, express e{" "}
              <strong className="text-white">garantia total em cada peça.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Falar com concierge
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border border-yellow-700/40 hover:border-yellow-600/60 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver serviços premium
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Concierge dedicado", "Rastreio por QR code", "Certificado de higienização", "Garantia total"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-500 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-black font-black text-2xl leading-none tracking-tight">{s.value}</p>
                <p className="text-yellow-900 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-4">
              O que nos diferencia
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              Cinco pilares que nenhuma lavanderia comum oferece
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="bg-gray-950 border border-yellow-900/30 p-7 hover:border-yellow-700/50 transition-colors">
                <span className="text-3xl block mb-4">{d.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{d.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-4">
              Categorias premium
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Cada peça recebe o cuidado que merece
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-[#0A0A0A] border border-yellow-900/30 p-7 hover:border-yellow-600/50 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-yellow-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-4">
              Garantia A7 Premium
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Se algo não sair perfeito, nós resolvemos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {GUARANTEE.map((g) => (
              <div key={g.scenario} className="flex gap-5 p-7 bg-gray-950 border border-yellow-900/30 hover:border-yellow-700/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0 mt-1.5" />
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{g.scenario}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{g.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            Quem confia no padrão A7 Premium
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-yellow-900/30 bg-[#0A0A0A] p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
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

      <section className="py-20 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-black font-black text-3xl md:text-4xl tracking-tight mb-4">
            A partir de R$299 por pedido
          </h2>
          <p className="text-yellow-900 text-lg mb-10 max-w-xl mx-auto">
            Concierge dedicado, coleta em domicílio, rastreio individual e garantia total inclusa. O valor que você investe é menor que o custo de repor uma peça danificada.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar consulta premium
          </a>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Perguntas sobre o Premium</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-yellow-900/30 bg-gray-950">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-900 transition-colors">
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

      <RelatedServices currentSlug="premium" />
      <footer className="bg-[#0A0A0A] border-t border-yellow-900/20 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/para-executivos" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Para executivos
            </Link>
            <Link href="/roupas-delicadas" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Roupas delicadas
            </Link>
            <Link href="/empresarial" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Empresarial
            </Link>
          </div>
          <a href={waLink} className="text-xs text-yellow-500 font-semibold hover:text-yellow-400 transition-colors">
            Falar com concierge →
          </a>
        </div>
      </footer>
    </div>
  );
}
