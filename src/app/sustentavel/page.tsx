"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "70% menos água", label: "vs lavagem doméstica" },
  { value: "Biodegradável", label: "100% dos produtos" },
  { value: "Embalagem", label: "reciclável e reutilizável" },
  { value: "CO₂ Neutro", label: "compensação ativa" },
];

const ECO_PRACTICES = [
  {
    icon: "💧",
    title: "Circuito fechado de água",
    body: "Nossa água de lavagem passa por sistema de filtragem e reutilização. Cada ciclo reaproveitamos até 65% do volume, reduzindo drasticamente o consumo total.",
  },
  {
    icon: "☀️",
    title: "Energia solar",
    body: "Parte da energia utilizada em aquecimento e secagem vem de painéis solares instalados nas nossas unidades. Meta de 80% de energia renovável até 2026.",
  },
  {
    icon: "🌿",
    title: "Detergentes biodegradáveis",
    body: "Todos os produtos utilizados são certificados como biodegradáveis e livres de fosfatos, parabenos e corantes artificiais. Aprovados para peles sensíveis.",
  },
  {
    icon: "♻️",
    title: "Embalagem reciclável",
    body: "Substituímos sacos plásticos por embalagens de papel reciclado e algodão reutilizável. O cliente devolve a embalagem na próxima coleta e nós reusamos.",
  },
  {
    icon: "🌍",
    title: "Compensação de CO₂",
    body: "Calculamos a pegada de carbono de cada coleta e entrega. Compensamos 100% via reflorestamento certificado em parceria com projetos na Mata Atlântica.",
  },
  {
    icon: "📊",
    title: "Relatório de impacto",
    body: "Ao final de cada mês você recebe um relatório com a água economizada, CO₂ evitado e embalagens reutilizadas — seu impacto positivo em números reais.",
  },
];

const VALUES_GRID = [
  {
    icon: "💧",
    title: "Água",
    metric: "70% de economia",
    detail: "Sistema fechado de filtragem e reutilização por ciclo",
  },
  {
    icon: "⚡",
    title: "Energia",
    metric: "60% renovável",
    detail: "Painel solar + eficiência nas máquinas industriais",
  },
  {
    icon: "🌿",
    title: "Produtos",
    metric: "100% biodegradáveis",
    detail: "Sem fosfatos, parabenos ou corantes artificiais",
  },
  {
    icon: "📦",
    title: "Embalagem",
    metric: "Zero plástico",
    detail: "Papel reciclado e sacolas de algodão reutilizáveis",
  },
  {
    icon: "🌍",
    title: "CO₂",
    metric: "Neutro",
    detail: "Compensação 100% via reflorestamento certificado",
  },
  {
    icon: "🏆",
    title: "Certificações",
    metric: "Auditadas",
    detail: "Processo em conformidade com ISO 14001 e Selo Verde SP",
  },
];

const IMPACT_ITEMS = [
  { action: "Lavar 5kg de roupa em casa", water: "~120 litros", co2: "~0,8 kg CO₂" },
  { action: "Lavar 5kg na A7", water: "~36 litros", co2: "~0,2 kg CO₂" },
  { action: "Economia por pedido", water: "84 litros", co2: "0,6 kg CO₂" },
];

const TESTIMONIALS = [
  {
    name: "Juliana Moreira",
    role: "Consultora de sustentabilidade · SJC",
    text: "Sou muito criteriosa com consumo consciente. A A7 é a única lavanderia que me entregou relatório de impacto mensal. Recomendo com convicção.",
  },
  {
    name: "Felipe Nascimento",
    role: "Arquiteto · Taubaté",
    text: "Reduzi minha pegada hídrica em casa e a A7 faz parte disso. O sistema de embalagem reutilizável é simples e eficiente. Já indiquei para cinco amigos.",
  },
  {
    name: "Mariana Castro",
    role: "Mãe de 3 filhos · Jacareí",
    text: "Quero ensinar meus filhos a cuidar do planeta. Usamos a A7 há 1 ano e o relatório mensal virou pauta de conversa em família. Pequenas escolhas importam.",
  },
];

const CERTIFICATIONS = [
  { name: "ISO 14001", desc: "Gestão ambiental certificada" },
  { name: "Selo Verde SP", desc: "Programa Estadual de Sustentabilidade" },
  { name: "Produto Biodegradável", desc: "Certificação ABNT" },
  { name: "CO₂ Neutro", desc: "Compensação via Mata Atlântica" },
];

const FAQ = [
  {
    q: "Como posso verificar que as práticas sustentáveis são reais?",
    a: "Emitimos um relatório mensal de impacto por cliente com métricas auditadas: litros de água economizados, CO₂ compensado e embalagens reutilizadas. Além disso, nossas certificações estão disponíveis para consulta a qualquer momento.",
  },
  {
    q: "A embalagem reciclável funciona como?",
    a: "Na primeira entrega você recebe uma sacola de algodão orgânico. Na próxima coleta, basta deixar suas roupas na mesma sacola. Recolhemos, higienizamos a sacola e devolvemos junto com as peças. Zero plástico no processo.",
  },
  {
    q: "Os produtos são seguros para alérgicos?",
    a: "Sim. Todos os produtos são dermatologicamente testados, hipoalergênicos e livres de fragrâncias sintéticas agressivas. Para peles muito sensíveis ou bebês, oferecemos lavagem com produtos específicos — basta solicitar.",
  },
  {
    q: "O serviço sustentável é mais caro?",
    a: "Não. Nossas práticas sustentáveis fazem parte do processo padrão — não são um add-on com custo extra. Você paga o mesmo preço de um serviço convencional e ainda contribui para o planeta.",
  },
  {
    q: "Como posso contribuir ainda mais?",
    a: "Além de usar o serviço, você pode ativar o programa de compensação adicional por R$2/pedido, que financia o plantio de 2 mudas nativas por coleta. Em um ano, um cliente médio compensa mais de 50 mudas.",
  },
];

export default function SustentavelPage() {
  const waLink = getWhatsAppLink("sustentavel");

  return (
    <div className="min-h-screen bg-green-950">
      <ServiceSchema name="Lavanderia Sustentável" description="Lavanderia com práticas sustentáveis: 70% menos água, produtos biodegradáveis, embalagem reciclável e emissão de CO₂ neutra." slug="sustentavel" />
      <header className="fixed top-0 w-full z-50 bg-green-950/90 backdrop-blur-md border-b border-green-800/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Lavar com consciência
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1542601906897-f5de27f77e28?w=1400&q=80"
          alt="Natureza exuberante representando sustentabilidade"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/55 to-green-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-green-400" />
              <span className="text-green-400 text-xs font-bold uppercase tracking-[0.16em]">
                A7 Sustentável · Lavanderia Eco-consciente
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Limpo para Você,
              <br />
              Limpo para
              <br />
              <span className="text-green-400">o Planeta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Lavanderia com práticas sustentáveis — produtos biodegradáveis, economia de água e{" "}
              <strong className="text-white">emissão de CO₂ neutra em cada pedido.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Agendar coleta sustentável
              </a>
              <a
                href="#impacto"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Ver meu impacto
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["70% menos água", "Zero plástico", "CO₂ compensado", "Relatório mensal"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-2xl leading-none tracking-tight">{s.value}</p>
                <p className="text-green-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest block mb-4">
              Nossas práticas
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl">
              Como cada pedido cuida do seu guarda-roupa e do planeta
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECO_PRACTICES.map((p) => (
              <div key={p.title} className="bg-gray-900 border border-green-900/40 p-7 hover:border-green-700/60 transition-colors">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impacto" className="py-24 bg-green-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest block mb-4">
              Calculadora de impacto
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              O que você economiza em cada pedido
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-green-900/40">
                  <th className="text-left py-3 px-4 text-xs font-bold text-green-400 uppercase tracking-wider">Cenário</th>
                  <th className="text-center py-3 px-4 text-xs font-bold text-green-400 uppercase tracking-wider">Água usada</th>
                  <th className="text-center py-3 px-4 text-xs font-bold text-green-400 uppercase tracking-wider">CO₂ emitido</th>
                </tr>
              </thead>
              <tbody>
                {IMPACT_ITEMS.map((item, i) => (
                  <tr key={item.action} className={`border-b border-green-900/20 ${i === 2 ? "bg-green-900/20" : ""}`}>
                    <td className="py-4 px-4 text-sm text-white font-medium">{item.action}</td>
                    <td className="py-4 px-4 text-sm text-gray-400 text-center">{item.water}</td>
                    <td className="py-4 px-4 text-sm text-gray-400 text-center">{item.co2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">Estimativas baseadas em dados do Instituto Akatu e medições internas. Valores podem variar conforme tipo de roupa e temperatura.</p>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest block mb-4">
              Nossos pilares verdes
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              6 dimensões de sustentabilidade
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES_GRID.map((v) => (
              <div key={v.title} className="bg-gray-900 border border-green-900/30 p-7 hover:border-green-700/50 transition-colors">
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3 className="font-bold text-white text-base mb-1">{v.title}</h3>
                <p className="text-green-400 text-sm font-bold mb-2">{v.metric}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-950">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            Clientes que escolheram o futuro
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-green-900/40 bg-gray-950 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-green-500 text-sm">★</span>
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

      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest block mb-4">
              Certificações e selos
            </span>
            <h2 className="text-white font-black text-2xl tracking-tight">
              Compromisso verificado por terceiros
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="border border-green-900/30 bg-green-900/10 p-5 text-center">
                <p className="font-black text-green-400 text-base mb-1">{c.name}</p>
                <p className="text-xs text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Cada lavagem é um voto pelo planeta
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Sem custo adicional, sem compromisso. Você já escolhe ser sustentável no dia a dia — escolha também onde lava suas roupas.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-green-50 text-green-800 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta sustentável
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Dúvidas sobre sustentabilidade</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-green-900/30 bg-gray-900">
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

      <RelatedServices currentSlug="sustentavel" />
      <footer className="bg-gray-950 border-t border-green-900/20 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/lavagem-roupas" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Lavagem de roupas
            </Link>
            <Link href="/para-alergicos" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Para alérgicos
            </Link>
            <Link href="/como-funciona" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Como funciona
            </Link>
          </div>
          <a href={waLink} className="text-xs text-green-400 font-semibold hover:text-green-300 transition-colors">
            Agendar coleta →
          </a>
        </div>
      </footer>
    </div>
  );
}
