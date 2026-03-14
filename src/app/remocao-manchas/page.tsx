"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

// LP-06 · Remoção de Manchas · Cluster: Manchas
// Artigos: "Guia Definitivo Vinho Tinto" + "Manchas Difíceis" + "Mancha de Óleo" (todos Fundo)

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90";

const MANCHAS = [
  { icon: "🍷", label: "Vinho tinto", urgencia: "Alta", detalhe: "Ação imediata + enzimas específicas para taninos" },
  { icon: "🫒", label: "Óleo e gordura", urgencia: "Média", detalhe: "Pré-tratamento desgordurante antes da lavagem" },
  { icon: "☕", label: "Café e chá", urgencia: "Alta", detalhe: "Neutralização dos taninos com produto alcalino" },
  { icon: "🩸", label: "Sangue", urgencia: "Crítica", detalhe: "Água fria + enzimas proteolíticas. Nunca quente." },
  { icon: "🖊️", label: "Tinta e caneta", urgencia: "Alta", detalhe: "Solventes específicos por tipo de tinta" },
  { icon: "🥦", label: "Comida e molhos", urgencia: "Média", detalhe: "Combinação de enzimas proteolíticas e lipases" },
  { icon: "🌿", label: "Grama e terra", urgencia: "Baixa", detalhe: "Pré-molho alcalino + lavagem em alta temperatura" },
  { icon: "🕯️", label: "Vela e cera", urgencia: "Média", detalhe: "Remoção mecânica + solvente + lavagem" },
];

const URGENCIA_COLORS: Record<string, string> = {
  Crítica: "bg-red-100 text-red-700",
  Alta: "bg-orange-100 text-orange-700",
  Média: "bg-yellow-100 text-yellow-700",
  Baixa: "bg-green-100 text-green-700",
};

const FAQ = [
  {
    q: "Existe mancha que não sai mais?",
    a: "Tecnicamente sim — manchas antigas, oxidadas ou que foram lavadas com água quente antes do tratamento correto podem ser permanentes. Por isso, quanto antes nos mandar, maiores as chances.",
  },
  {
    q: "Devo tentar tirar em casa antes de mandar?",
    a: "Depende. Se for mancha fresca de orgânicos (sangue, vinho), água fria imediata ajuda. Mas nunca use água quente — fixa a proteína na fibra. Para dúvida, mande direto.",
  },
  {
    q: "Vocês garantem remoção total?",
    a: "Trabalhamos para isso. Em manchas recentes, nossa taxa de remoção total é de 93%. Para manchas antigas ou em materiais delicados, é de 70%. Sempre avisamos antes.",
  },
  {
    q: "Quanto custa o tratamento?",
    a: "Varia por tipo de peça e mancha. Consulte pelo WhatsApp — respondemos com orçamento em minutos.",
  },
];

export default function RemocaoManchas() {
  const waLink = getWhatsAppLink("mancha");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Remoção de Manchas Difíceis" description="Tratamento profissional para remoção de manchas difíceis em roupas e tecidos. Vinho, óleo, sangue, ferrugem — análise e tratamento por tipo de mancha." slug="remocao-manchas" />
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <img src="/logo-dark.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a href={waLink} className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold px-5 py-2.5 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Mandar foto agora
          </a>
        </div>
      </header>

      {/* ── HERO com urgência ── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Remoção de manchas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/55 to-gray-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            {/* Urgência */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold px-4 py-2 mb-6">
              ⚡ Mancha fresca? Cada minuto importa. Mande agora.
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Não jogou fora.<br />
              Não tratou errado.<br />
              <span className="text-orange-400">A gente resolve.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Tratamento especializado por tipo de mancha e tecido.
              <strong className="text-white"> 93% de remoção total</strong> em manchas recentes.
              Coleta em casa. Orçamento imediato.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3">
              <a href={waLink} className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-black text-lg px-8 py-5 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Mandar foto da mancha
              </a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-4 text-xs text-white/40">
              Respondemos em menos de 5 min · Orçamento imediato pelo WhatsApp
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── MANCHAS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-3">Tipos de mancha</span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Cada mancha tem um protocolo.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MANCHAS.map((m) => (
              <div key={m.label} className="border border-gray-100 p-5 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{m.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 ${URGENCIA_COLORS[m.urgencia]}`}>
                    {m.urgencia}
                  </span>
                </div>
                <p className="font-bold text-gray-900 text-sm mb-1">{m.label}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{m.detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <section className="bg-orange-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: "93%", label: "remoção total em manchas recentes" },
              { val: "+8", label: "tipos de tratamento especializado" },
              { val: "5min", label: "tempo de resposta pelo WhatsApp" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-black text-white text-3xl md:text-4xl">{s.val}</p>
                <p className="text-orange-100 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA URGÊNCIA ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 mb-6">
            ⏱️ Quanto mais rápido, melhor o resultado
          </div>
          <h2 className="text-white font-black text-4xl tracking-tight mb-4">
            Mandou a foto.<br />A gente analisa e resolve.
          </h2>
          <p className="text-gray-400 mb-8">Orçamento em menos de 5 minutos. Coleta grátis.</p>
          <a href={waLink} className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-black text-xl px-10 py-5 transition-colors">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Mandar foto agora
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Perguntas sobre manchas</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-gray-100">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="remocao-manchas" />
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex gap-5">
            <a href="/blog/tirar-mancha-vinho-tinto" className="text-xs text-gray-500 hover:text-gray-300">Guia: Vinho tinto</a>
            <a href="/blog/tirar-manchas-dificeis" className="text-xs text-gray-500 hover:text-gray-300">Manchas difíceis</a>
          </div>
          <a href={waLink} className="text-xs text-orange-400 font-semibold hover:text-orange-300">Mandar foto →</a>
        </div>
      </footer>
    </div>
  );
}
