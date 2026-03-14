"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Volume sem limite", label: "escalamos com você" },
  { value: "SLA 24h", label: "garantido em contrato" },
  { value: "+50 hotéis", label: "parceiros ativos" },
  { value: "Contrato Mensal", label: "preço fixo e previsível" },
];

const SCALE_TIERS = [
  {
    size: "Pequena Pousada",
    rooms: "Até 20 quartos",
    detail: "Coleta semanal, preço por kg. Ideal para pousadas familiares e airbnbs gerenciados.",
  },
  {
    size: "Hotel Boutique",
    rooms: "20–60 quartos",
    detail: "Coleta bissemanal, kit por quarto definido. Relatório quinzenal de controle.",
  },
  {
    size: "Hotel de Médio Porte",
    rooms: "60–150 quartos",
    detail: "Coleta diária, rota dedicada, gerente de conta A7. SLA de 24h contratual.",
  },
  {
    size: "Rede Hoteleira",
    rooms: "+150 quartos",
    detail: "Proposta corporativa com múltiplas unidades, faturamento consolidado e suporte prioritário.",
  },
];

const SERVICE_CATEGORIES = [
  {
    icon: "🛏️",
    title: "Roupas de Cama",
    items: ["Lençóis casal e solteiro", "Fronhas avulsa e envelope", "Protetores de colchão", "Edredons e cobertores"],
  },
  {
    icon: "🚿",
    title: "Toalhas de Banho",
    items: ["Toalhas de banho (todos os tamanhos)", "Toalhas de rosto", "Tapetes de banheiro", "Roupões e toalhas de spa"],
  },
  {
    icon: "👕",
    title: "Uniformes da Equipe",
    items: ["Uniformes de recepção", "Uniformes de governança", "Uniformes de restaurante", "EPIs e aventais"],
  },
  {
    icon: "🍽️",
    title: "Restaurante & F&B",
    items: ["Toalhas de mesa", "Guardanapos de pano", "Aventais de garçom", "Panos de copa"],
  },
  {
    icon: "💆",
    title: "Spa & Wellness",
    items: ["Lençóis de maca", "Toalhas de spa", "Curativos e banhos", "Roupões premium"],
  },
  {
    icon: "📋",
    title: "Contratos Especiais",
    items: ["Alta temporada (volume extra)", "Eventos e convenções", "Reforma e fechamento parcial", "Atendimento emergencial"],
  },
];

const OPERATIONAL_GUARANTEES = [
  {
    icon: "🔄",
    title: "Consistência absoluta",
    body: "Cada lote processado segue o mesmo protocolo de temperatura, tempo e produto. O enxoval de hoje tem a mesma qualidade do de 6 meses atrás.",
  },
  {
    icon: "🏷️",
    title: "Separação por código de cor",
    body: "Lençóis, toalhas e uniformes são processados em lotes separados com etiquetagem por cor. Sem mistura de enxoval entre categorias.",
  },
  {
    icon: "🔍",
    title: "Rastreio de peças perdidas",
    body: "Cada lote é pesado e contado na entrada e na saída. Divergências são resolvidas antes da entrega. Reposição automática em caso de perda confirmada.",
  },
  {
    icon: "📊",
    title: "Relatório mensal de qualidade",
    body: "Todo mês você recebe um relatório com volume processado, tempo médio de giro, peças descartadas e sugestões de reposição de estoque.",
  },
];

const TESTIMONIALS = [
  {
    name: "Geraldo Henrique",
    role: "Gerente geral · Hotel Serrano, Campos do Jordão",
    text: "Terceirizei o enxoval para a A7 há dois anos. Nunca mais tive quarto segurando check-in por falta de lençol. SLA cumprido 100% das vezes.",
  },
  {
    name: "Sônia Batista",
    role: "Proprietária · Pousada das Pedras, Ubatuba",
    text: "Pequena pousada de 12 quartos. A A7 adaptou o contrato para minha escala — coleta toda terça, entrega toda quinta. Simples assim.",
  },
  {
    name: "Eduardo Lins",
    role: "Diretor de operações · Rede Aquárius Hotels",
    text: "Gerenciamos 3 hotéis no Vale do Paraíba. A A7 consolida tudo em um único contrato, com relatório por unidade. Facilita demais o controle.",
  },
];

const FAQ = [
  {
    q: "Qual o volume mínimo para contrato hoteleiro?",
    a: "Atendemos a partir de 15 quartos ou 50 kg/semana. Para volumes menores, temos um plano flex por demanda sem contrato fixo.",
  },
  {
    q: "O SLA de 24h é garantido mesmo em alta temporada?",
    a: "Sim. O SLA é contratual e se aplica ao longo do ano, incluindo alta temporada e feriados. Para isso, dimensionamos capacidade com antecedência baseada no seu calendário de ocupação.",
  },
  {
    q: "Como funciona o controle de qualidade?",
    a: "Cada lote passa por inspeção visual de 100% das peças antes de embalar. Peças com desgaste excessivo ou manchas persistentes são separadas e reportadas antes da devolução.",
  },
  {
    q: "Como funciona o gerenciamento de peças perdidas?",
    a: "Pesagem e contagem na entrada e na saída. Divergência acima de 1% dispara protocolo de busca. Confirmada a perda, reposição pelo valor de mercado da peça em até 5 dias úteis.",
  },
  {
    q: "Qual o prazo e formato do contrato?",
    a: "Contrato padrão de 6 meses, renovável automaticamente. Sem multa por rescisão com 30 dias de aviso prévio. Inclui gestor de conta dedicado e faturamento por CNPJ com NF-e.",
  },
];

export default function HotelariaPage() {
  const waLink = getWhatsAppLink("hotelaria");

  return (
    <div className="min-h-screen bg-stone-950">
      <ServiceSchema name="Lavanderia para Hotelaria" description="Outsourcing de lavanderia para hotéis, pousadas e resorts. Volume sem limite, SLA 24h, relatório de higiene e controle de qualidade." slug="hotelaria" />
      <header className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Solicitar proposta B2B
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
          alt="Quarto de hotel luxuoso com roupa de cama branca impecável"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/55 to-stone-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.16em]">
                B2B · Outsourcing de Lavanderia para Hotelaria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              O Padrão Hoteleiro
              <br />
              que Seus Hóspedes
              <br />
              <span className="text-amber-500">Merecem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Outsourcing de lavanderia para hotéis, pousadas e resorts — volume, qualidade e{" "}
              <strong className="text-white">entrega no prazo. Sempre.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-600 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Solicitar proposta hoteleira
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver categorias
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["SLA contratual", "Gestor de conta dedicado", "Relatório mensal", "NF-e por CNPJ"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-amber-700 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-2xl leading-none tracking-tight">{s.value}</p>
                <p className="text-amber-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-4">
              Escala sob medida
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              Da pequena pousada ao hotel de rede
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {SCALE_TIERS.map((t) => (
              <div key={t.size} className="bg-gray-900 border border-amber-900/30 p-7 hover:border-amber-700/50 transition-colors">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-bold text-white text-base">{t.size}</h3>
                  <span className="text-xs text-amber-500 font-bold">{t.rooms}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categorias" className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-4">
              Categorias atendidas
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Cobertura completa da operação hoteleira
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_CATEGORIES.map((s) => (
              <div key={s.title} className="bg-gray-950 border border-amber-900/30 p-7 hover:border-amber-700/50 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-4">
              Garantias operacionais
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              O que a A7 garante em cada contrato hoteleiro
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {OPERATIONAL_GUARANTEES.map((g) => (
              <div key={g.title} className="flex gap-5 p-7 bg-stone-950 border border-amber-900/30 hover:border-amber-700/40 transition-colors">
                <span className="text-3xl flex-shrink-0">{g.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{g.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            O que gerentes e proprietários dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-amber-900/30 bg-gray-950 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
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

      <section className="py-20 bg-amber-700">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Consulte nossos planos B2B para hotéis
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto">
            Cada hotel tem necessidades diferentes. Fale com nosso consultor e receba uma proposta personalizada com SLA, volume e preço fixo.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-amber-50 text-amber-800 font-black text-lg px-10 py-5 rounded transition-colors"
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
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre parceria hoteleira</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-amber-900/20 bg-gray-900">
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

      <RelatedServices currentSlug="hotelaria" />
      <footer className="bg-gray-950 border-t border-amber-900/20 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/airbnb" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Airbnb
            </Link>
            <Link href="/uniformes" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Uniformes
            </Link>
            <Link href="/restaurantes" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Restaurantes
            </Link>
          </div>
          <a href={waLink} className="text-xs text-amber-500 font-semibold hover:text-amber-400 transition-colors">
            Solicitar proposta →
          </a>
        </div>
      </footer>
    </div>
  );
}
