"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Turnaround 24h", label: "entre check-out e check-in" },
  { value: "+200", label: "anfitriões atendidos" },
  { value: "Entre Hóspedes", label: "reposição garantida" },
  { value: "SLA", label: "garantido por contrato" },
];

const PROBLEMS = [
  {
    icon: "⭐",
    title: "Avaliações ruins por roupa de cama suja",
    body: "Uma toalha manchada ou um edredom com cheiro é o fim da sua nota 5 estrelas. Hóspedes mencionam lençóis em 1 a cada 3 reviews negativos.",
  },
  {
    icon: "⏰",
    title: "Sem tempo entre hóspedes",
    body: "Check-out às 11h e check-in às 14h. Três horas para limpar, repor e preparar o apartamento com tudo impecável — impossível sem ajuda.",
  },
  {
    icon: "🧴",
    title: "Alvejante destruindo seus tecidos",
    body: "Usar água sanitária para tirar manchas desgasta as fibras rapidamente. Seus lençóis ficam finos, amarelados e sem vida.",
  },
  {
    icon: "🔁",
    title: "Qualidade inconsistente",
    body: "Lavar em casa ou em lavanderias comuns não garante o mesmo padrão toda vez. Uma estadia perfeita e outra abaixo das expectativas.",
  },
  {
    icon: "📦",
    title: "Enxoval desfalcado no pico",
    body: "Alta temporada com dois imóveis rodando e você descobre que metade das toalhas ainda está na lavanderia do bairro.",
  },
];

const PROCESS = [
  { step: "01", title: "Check-out do hóspede", body: "Assim que o hóspede sai, você (ou sua equipe) prepara o saco de enxoval sujo para coleta." },
  { step: "02", title: "Coleta expressa", body: "Nossa equipe passa no seu imóvel para buscar cama, banho e toalhas. Horários flexíveis, inclusive fins de semana." },
  { step: "03", title: "Lavagem hoteleira", body: "Processo em temperatura controlada, branqueamento óptico e perfumação sutil. Padrão de hotel 4 estrelas." },
  { step: "04", title: "Controle de qualidade", body: "Cada peça é inspecionada antes de embalar. Manchas recalcitrantes são tratadas individualmente." },
  { step: "05", title: "Entrega antes do check-in", body: "Devolvemos dobrado e embalado com antecedência suficiente para você preparar o imóvel com calma." },
];

const PACKAGES = [
  {
    icon: "🛏️",
    title: "Kit Cama Standard",
    items: ["Lençol casal (2 peças)", "Fronha (2 unidades)", "Cobre-leito fino"],
  },
  {
    icon: "✨",
    title: "Kit Cama Premium",
    items: ["Lençol egípcio / percal 400 fios", "Fronhas bordadas", "Edredom incluso"],
  },
  {
    icon: "🚿",
    title: "Kit Banheiro",
    items: ["Toalha de banho (2 unidades)", "Toalha de rosto (2 unidades)", "Tapete de banheiro"],
  },
  {
    icon: "🏠",
    title: "Kit Completo Quarto",
    items: ["Kit Cama + Kit Banheiro", "Toalha de piso", "Manta decorativa"],
  },
  {
    icon: "🏢",
    title: "Kit Apartamento Completo",
    items: ["Todos os quartos", "Panos de cozinha / copa", "Toalhas extras de reposição"],
  },
  {
    icon: "⚡",
    title: "Avulso por Urgência",
    items: ["Entrega em até 12 horas", "Ideal para reservas de última hora", "Taxa express transparente"],
  },
];

const THROUGHPUT = [
  { range: "1 imóvel", detail: "Anfitrião individual — coleta por demanda, sem contrato" },
  { range: "2–5 imóveis", detail: "Multi-host — coleta programada semanal com desconto" },
  { range: "6–15 imóveis", detail: "Gestor de propriedades — rota dedicada e conta gerenciada" },
  { range: "+15 imóveis", detail: "Property manager — proposta B2B personalizada com SLA" },
];

const TESTIMONIALS = [
  {
    name: "Renata Magalhães",
    role: "Superhost · 4 imóveis em SJC",
    text: "Eram 3 da tarde, check-in às 4h, e a A7 entregou o enxoval dobradinho na minha porta. Nunca mais perdi uma avaliação por causa de roupa de cama.",
  },
  {
    name: "Bruno Cavalcante",
    role: "Superhost · Campos do Jordão",
    text: "Tenho um chalé na serra e o giro é intenso no inverno. A A7 cobre tudo: cama, banho, cobertor de lã. Nota 5 em 100% das avaliações de limpeza.",
  },
  {
    name: "Carla Figueiredo",
    role: "Gestora de 12 imóveis · Vale do Paraíba",
    text: "Antes eu tinha 2 conjuntos de enxoval por imóvel e vivia no sufoco. Hoje terceirizei tudo para a A7 e a operação ficou 100% previsível.",
  },
];

const FAQ = [
  {
    q: "Com qual antecedência preciso solicitar a coleta?",
    a: "Para atendimento padrão, pedimos 24 horas de antecedência. Para serviços express (entrega em até 12h), basta avisar pelo WhatsApp — atendemos conforme disponibilidade, incluindo fins de semana.",
  },
  {
    q: "O preço é por imóvel ou por peça?",
    a: "Oferecemos as duas modalidades: por kit (pacote fechado para um quarto ou apartamento inteiro) ou por peça avulsa. Para anfitriões com múltiplos imóveis, o contrato mensal costuma ser mais econômico.",
  },
  {
    q: "O que acontece se alguma peça sumir?",
    a: "Registramos todas as peças na entrada e na saída com checklist fotográfico. Caso alguma peça não retorne, cobrimos a reposição integral — sem discussão.",
  },
  {
    q: "Como funciona para quem gerencia vários imóveis?",
    a: "Criamos uma rota dedicada com dias e horários fixos para os seus endereços. Você recebe um único relatório consolidado com o status de cada imóvel.",
  },
  {
    q: "Vocês acessam o imóvel ou eu preciso estar presente?",
    a: "Nossa equipe recolhe e entrega na porta ou em local combinado (cofre de chave, portaria, etc.). Nunca é necessário acesso interno ao imóvel — sua privacidade e a dos hóspedes é respeitada conforme a LGPD.",
  },
];

export default function AirbnbPage() {
  const waLink = getWhatsAppLink("airbnb");

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="fixed top-0 w-full z-50 bg-rose-600/90 backdrop-blur-md border-b border-rose-700/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-rose-200">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-rose-50 text-rose-700 text-sm font-bold px-5 py-2.5 rounded transition-colors"
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
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80"
          alt="Quarto de apartamento com roupa de cama branca impecável"
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
              <div className="h-px w-8 bg-rose-400" />
              <span className="text-rose-400 text-xs font-bold uppercase tracking-[0.16em]">
                B2B · Lavanderia para Anfitriões Airbnb
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Avaliação 5 Estrelas
              <br />
              Começa na
              <br />
              <span className="text-rose-400">Roupa de Cama</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Lavanderia B2B para anfitriões Airbnb — cama, banho e toalhas sempre impecáveis entre hóspedes.{" "}
              <strong className="text-white">Turnaround 24h, SLA garantido.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Solicitar proposta grátis
              </a>
              <a
                href="#kits"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver kits disponíveis
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Coleta e entrega a domicílio", "Padrão hoteleiro", "Funciona fins de semana", "Serve múltiplos imóveis"].map((t) => (
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
                <p className="text-white font-black text-2xl leading-none tracking-tight">{s.value}</p>
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
              O problema que derruba sua nota
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              Por que anfitriões perdem o status de Superhost por causa de enxoval
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-gray-900 border border-gray-800 p-7 hover:border-rose-800 transition-colors">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
              O processo
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Do check-out ao check-in sem preocupação
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative">
                <span className="text-5xl font-black text-rose-800/50 block mb-3 leading-none">{p.step}</span>
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kits" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
              Pacotes disponíveis
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Um kit para cada tipo de imóvel
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-gray-900 border border-gray-800 p-7 hover:border-rose-700 transition-colors">
                <span className="text-3xl block mb-4">{pkg.icon}</span>
                <h3 className="font-bold text-white text-base mb-3">{pkg.title}</h3>
                <ul className="space-y-1.5">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
              Quantos imóveis você gerencia?
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Do anfitrião individual ao gestor de portfólio
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {THROUGHPUT.map((t) => (
              <div key={t.range} className="flex gap-5 p-6 bg-gray-950 border border-gray-800 hover:border-rose-800 transition-colors">
                <div className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0 mt-1.5" />
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{t.range}</h3>
                  <p className="text-sm text-gray-400">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            O que anfitriões dizem sobre a A7
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-gray-800 bg-gray-900 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-rose-400 text-sm">★</span>
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

      <section className="py-20 bg-rose-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Mantenha o 5 Estrelas toda estadia
          </h2>
          <p className="text-rose-100 text-lg mb-10 max-w-xl mx-auto">
            Enxoval hoteleiro sem sair de casa. Coleta, lavagem e entrega antes do próximo check-in — garantido.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-rose-50 text-rose-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Solicitar proposta para anfitriões
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas frequentes de anfitriões</h2>
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
            <Link href="/hotelaria" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Hotelaria
            </Link>
            <Link href="/uniformes" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Uniformes
            </Link>
            <Link href="/restaurantes" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Restaurantes
            </Link>
          </div>
          <a href={waLink} className="text-xs text-rose-400 font-semibold hover:text-rose-300 transition-colors">
            Solicitar proposta →
          </a>
        </div>
      </footer>
    </div>
  );
}
