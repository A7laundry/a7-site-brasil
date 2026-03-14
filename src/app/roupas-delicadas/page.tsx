"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Zero", label: "peças danificadas" },
  { value: "+5.000", label: "peças premium tratadas" },
  { value: "12+", label: "tipos de tecido" },
  { value: "Desde 2019", label: "no mercado" },
];

const PROBLEMS = [
  {
    icon: "📏",
    title: "Encolhimento",
    body: "Lã, cashmere e seda encolhem com água quente ou agitação mecânica. Uma lavagem errada pode destruir uma peça de R$800 em minutos.",
  },
  {
    icon: "🎨",
    title: "Perda de cor",
    body: "Peças tingidas em processos artesanais desbotam com produtos alcalinos. A cor original nunca volta depois que o dano acontece.",
  },
  {
    icon: "🧵",
    title: "Dano ao tecido",
    body: "A centrifugação e a agitação da máquina comum distorcem fibras finas, criam bolinhas e alteram a estrutura do tecido para sempre.",
  },
  {
    icon: "🏷️",
    title: "Etiqueta diz 'lavar à mão'",
    body: "A maioria das pessoas ignora. O fabricante não coloca essa instrução por capricho — é porque o material exige tratamento controlado.",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Análise de tecido", body: "Identificamos a composição exata: seda, cashmere, lã merino, linho, viscose ou misto. Cada fibra tem protocolo próprio." },
  { num: "02", title: "Seleção de produtos", body: "Detergentes com pH neutro, produtos específicos para proteínas (lã, seda) e condicionadores de fibra. Nunca genéricos." },
  { num: "03", title: "Lavagem manual controlada", body: "Temperatura controlada entre 20°C e 30°C. Sem torção, sem esfregação. Movimento suave em sentido único da fibra." },
  { num: "04", title: "Enxágue cuidadoso", body: "Remoção completa dos produtos sem pressão excessiva. Preservação do caimento e elasticidade original da peça." },
  { num: "05", title: "Secagem plana", body: "Peças delicadas nunca são penduradas. Secagem em superfície plana preserva o formato e evita distorção das fibras." },
  { num: "06", title: "Passadoria especializada", body: "Vapor controlado e temperatura específica para cada tecido. Linho a 200°C; seda e cashmere abaixo de 130°C." },
];

const SERVICE_CARDS = [
  {
    icon: "🪢",
    title: "Seda",
    desc: "Lavagem com detergente de proteína, temperatura controlada e secagem plana. Preservação do brilho natural.",
    price: "A partir de R$35/peça",
  },
  {
    icon: "🧣",
    title: "Cashmere & Lã",
    desc: "Processo anti-feltragem com condicionador de fibra. Elimina bolinhas e restaura maciez.",
    price: "A partir de R$45/peça",
  },
  {
    icon: "👔",
    title: "Linho",
    desc: "Lavagem suave + passadoria profissional a vapor. Amassados eliminados sem danificar a estrutura.",
    price: "A partir de R$28/peça",
  },
  {
    icon: "💎",
    title: "Peças de Grife",
    desc: "Protocolo premium para Chanel, Hermès, Gucci, Prada. Documentação fotográfica antes e depois.",
    price: "Sob consulta",
  },
  {
    icon: "🪡",
    title: "Bordados",
    desc: "Higienização manual peça a peça. Sem imersão total para preservar bordados, lantejoulas e aplicações.",
    price: "A partir de R$40/peça",
  },
  {
    icon: "🎭",
    title: "Fantasias & Trajes",
    desc: "Trajes de dança, cosplay, teatro e cerimônia. Limpeza especializada que preserva estrutura e ornamentos.",
    price: "A partir de R$60/peça",
  },
];

const BENEFITS = [
  {
    icon: "🔬",
    title: "Análise de tecido",
    body: "Cada peça é identificada antes do processo. Composição, sensibilidade e cuidados especiais registrados individualmente.",
  },
  {
    icon: "🧪",
    title: "Produtos específicos",
    body: "Nunca usamos detergentes comuns. Cada tecido recebe o produto certo: pH neutro, enzimas específicas ou condicionadores de fibra.",
  },
  {
    icon: "🤲",
    title: "Manuseio cuidadoso",
    body: "Lavagem manual ou máquina com programa delicado validado. Zero agitação excessiva, zero torção, zero centrifugação agressiva.",
  },
  {
    icon: "✅",
    title: "Garantia de resultado",
    body: "Peça danificada durante o processo? Cobrimos a reposição. Essa situação não acontece, mas a garantia está aqui.",
  },
];

const TESTIMONIALS = [
  {
    name: "Isabela F.",
    city: "SJC",
    text: "Blusa de seda da minha mãe, comprada na Itália há 20 anos. Parecia que não tinha saída. Voltou impecável, com o brilho original. Chorei de alegria.",
  },
  {
    name: "Rafael M.",
    city: "Taubaté",
    text: "Mando meus ternos e camisas sociais regularmente. Qualidade muito superior à lavanderia comum. Peças delicadas chegam sempre perfeitas.",
  },
  {
    name: "Camila S.",
    city: "São Paulo",
    text: "Casaco de cashmere da Burberry que estava todo pelotado. Tratamento removeu as bolinhas e devolveu a maciez original. Surreal.",
  },
];

const FAQ = [
  {
    q: "Que tipos de tecido vocês atendem?",
    a: "Atendemos seda, cashmere, lã (merino, angorá, mohair), linho, viscose, modal, organza, tule, renda e peças mistas. Se a etiqueta diz 'lavagem delicada' ou 'lavar à mão', trabalhamos com ela.",
  },
  {
    q: "Como envio as peças?",
    a: "Fazemos coleta domiciliar em todo o Vale do Paraíba. Você embala as peças normalmente e nosso motoboy busca no endereço combinado. Para regiões fora da nossa área de cobertura, aceitamos envio por transportadora.",
  },
  {
    q: "Qual o prazo para receber as peças higienizadas?",
    a: "Em média 3 a 5 dias úteis para peças delicadas. Peças com bordados, adornos ou tecidos muito sensíveis podem levar até 7 dias úteis. Sempre comunicamos antes de qualquer prazo adicional.",
  },
  {
    q: "E se uma peça for danificada?",
    a: "Todas as peças são fotografadas no recebimento e passam por inspeção de estado. Em caso de qualquer dano causado pelo processo (situação raríssima), cobrimos o reparo ou reposição. Peças de grife passam por protocolo adicional de segurança.",
  },
  {
    q: "Qual o valor para peças avulsas?",
    a: "Os preços variam conforme o tipo de tecido, complexidade da peça e serviço necessário. Consulte nosso WhatsApp com foto da peça para orçamento preciso. Geralmente a partir de R$28 para peças simples.",
  },
];

const TRUST_ITEMS = [
  "Zero peças danificadas",
  "12+ tipos de tecido",
  "Coleta domiciliar",
  `${COMPANY.stats.googleRating}★ Google`,
];

export default function RoupasDelicadas() {
  const waLink = getWhatsAppLink("roupas-delicadas");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Lavagem de Roupas Delicadas" description="Lavagem especializada para seda, cashmere, lã, linho e peças de grife. Zero danos garantidos, produtos específicos por tecido." slug="roupas-delicadas" />
      <header className="fixed top-0 w-full z-50 bg-indigo-950/90 backdrop-blur-md border-b border-indigo-900/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-indigo-400">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold px-5 py-2.5 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Cuidar das minhas peças
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Peças delicadas de seda e tecido premium"
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-indigo-400" />
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.16em]">
                Lavagem especializada · Roupas delicadas e premium
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              Suas Peças Mais
              <br />
              Valiosas Merecem
              <br />
              <span className="text-indigo-400">Cuidado Especial</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Lavagem especializada para{" "}
              <strong className="text-white">seda, cashmere, lã, linho e peças de grife</strong>. Cada
              fibra com o tratamento que merece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg px-8 py-5 transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Enviar peças para avaliação
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {TRUST_ITEMS.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg
                    className="w-3 h-3 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
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
                <p className="text-white font-black text-3xl leading-none tracking-tight">{s.value}</p>
                <p className="text-indigo-100 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">
              Por que não lavar em casa
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Uma lavagem errada pode destruir uma peça de R$1.000.
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl">
              Máquinas domésticas não distinguem tecidos. Água quente, agitação excessiva e detergente
              genérico são os maiores inimigos das peças delicadas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="border border-gray-100 p-7 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-3">
              Nosso processo
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Análise, produto certo, mão de obra especializada.
              <br />
              <span className="text-indigo-400">Nessa sequência, sempre.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="border border-indigo-900/50 bg-indigo-900/20 p-6 hover:border-indigo-500/50 transition-all"
              >
                <span className="text-indigo-400/60 font-black text-4xl leading-none block mb-4">
                  {step.num}
                </span>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-indigo-100/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={waLink}
              className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black px-8 py-5 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Enviar peça para avaliação
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">
              O que tratamos
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Cada tecido. Cada peça especial.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_CARDS.map((s) => (
              <div
                key={s.title}
                className="border border-gray-100 p-6 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl block mb-3">{s.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                <span className="text-[11px] font-bold text-indigo-600">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-3">
              Por que a A7
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Diferenciais que protegem
              <br />
              <span className="text-indigo-400">seu investimento.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-indigo-900/50 bg-indigo-900/20 p-7 hover:border-indigo-500/50 transition-all"
              >
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
                <p className="text-sm text-indigo-100/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">
            Peças salvas. Clientes satisfeitos.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-indigo-100 bg-white p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-indigo-500 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{t.name}</p>
                    <p className="text-[10px] text-gray-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-indigo-700">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-white font-black leading-[0.95] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Suas peças merecem
              <br />
              <span className="text-indigo-200">quem entende de tecido.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Mande a foto. Fazemos a análise e o orçamento em minutos.
            </p>
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-indigo-50 text-indigo-700 font-black text-xl px-10 py-6 transition-colors"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Enviar peça para avaliação
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">
            Dúvidas frequentes
          </h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-gray-200 bg-white">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="roupas-delicadas" />
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <a
              href="/couro-pecas-especiais"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Também tratamos couro e peças especiais
            </a>
          </div>
          <a
            href={waLink}
            className="text-xs text-indigo-400 font-semibold hover:text-indigo-300 transition-colors"
          >
            Enviar peça →
          </a>
        </div>
      </footer>
    </div>
  );
}
