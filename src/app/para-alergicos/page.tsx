"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";

// LP-14 · Para Alérgicos · Cluster: Saúde & Higiene · Persona
// Artigo: "Alergia a Ácaros? O Que Sua Roupa de Cama Tem a Ver"

const HERO_IMG = "https://images.unsplash.com/photo-1616627452838-63f5eae0a61a?w=1600&q=90";

const SINTOMAS = [
  { icon: "😤", label: "Rinite ao acordar" },
  { icon: "👁️", label: "Olhos irritados de manhã" },
  { icon: "🤧", label: "Espirros constantes em casa" },
  { icon: "😮‍💨", label: "Tosse seca noturna" },
  { icon: "🌙", label: "Sono não reparador" },
  { icon: "🫁", label: "Crise de asma sem causa aparente" },
];

const PROTOCOLO = [
  { title: "Temperatura 90°C", body: "Elimina 99,9% dos ácaros. A máquina doméstica não ultrapassa 60°C — insuficiente para matar Dermatophagoides." },
  { title: "Produtos hipoalergênicos", body: "Sem fragrâncias, corantes ou conservantes. Formulação dermatologicamente testada. Indicada para bebês e pele sensível." },
  { title: "Secagem industrial controlada", body: "Elimina umidade residual — o principal facilitador da proliferação de fungos e ácaros." },
  { title: "Embalagem selada", body: "Protege da recontaminação até o momento de uso. Sem contato com poeira entre a lavagem e a cama." },
];

const FAQ = [
  {
    q: "Com que frequência um alérgico deve lavar a roupa de cama?",
    a: "Travesseiro e fronha: a cada 2 semanas. Lençol e capa de edredom: semanalmente. Edredom e manta: a cada 4–6 semanas. Esses são os prazos para controle efetivo de ácaros.",
  },
  {
    q: "A lavagem doméstica não resolve?",
    a: "Parcialmente. A máquina doméstica não atinge temperatura suficiente para matar todos os ácaros e seus ovos. O processo industrial combina temperatura, enzimas e secagem completa — resultado muito superior.",
  },
  {
    q: "Indicado para bebês com eczema ou alergia?",
    a: "Sim. Nossos produtos são hipoalergênicos e sem componentes irritantes. Muitos pediatras recomendam lavagem profissional para roupas de bebê com histórico de reação.",
  },
  {
    q: "Vocês atendem com urgência?",
    a: "Sim. Para quadros de crise alérgica, temos disponibilidade de coleta expressa. Consulte pelo WhatsApp.",
  },
];

export default function ParaAlergicos() {
  const waLink = getWhatsAppLink("alergicos");

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight">A7 <span className="text-blue-600">Lavanderia</span></a>
          <a href={waLink} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Agendar coleta anti-ácaro
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Dormindo bem sem alergia" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/55 to-blue-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.16em]">Lavagem anti-ácaro · Para alérgicos e sensíveis</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Se você acorda<br />com rinite todo dia,<br />
              <span className="text-blue-400">sua cama é a causa.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Lavagem profissional a <strong className="text-white">90°C com produtos hipoalergênicos</strong>.
              Elimina ácaros, fungos e alérgenos da roupa de cama, edredons e travesseiros.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3">
              <a href={waLink} className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white font-black text-lg px-8 py-5 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Agendar coleta anti-ácaro
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-5">
              {["Produtos hipoalergênicos", "90°C de temperatura", "Indicado para bebês", `${COMPANY.stats.googleRating}★ Google`].map((t) => (
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

      {/* ── SINTOMAS ── */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="font-black text-2xl md:text-3xl tracking-tight text-gray-900">
              Você reconhece esses sintomas?
            </h2>
            <p className="text-gray-500 text-sm mt-2">Se sim, muito provavelmente a causa está na sua cama.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SINTOMAS.map((s) => (
              <div key={s.label} className="bg-white border border-blue-100 p-4 text-center hover:border-blue-300 transition-colors">
                <span className="text-3xl block mb-2">{s.icon}</span>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTOCOLO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">Protocolo anti-alérgico</span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Por que o processo A7 funciona.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PROTOCOLO.map((p, i) => (
              <div key={p.title} className="bg-blue-50 p-7 border-l-4 border-blue-500">
                <span className="text-blue-300 font-black text-5xl leading-none block mb-3 opacity-50">0{i + 1}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE TRATAMOS ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4">O que higienizamos</span>
              <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-8">
                Tudo que está em contato com você enquanto dorme.
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Edredons e mantas",
                  "Travesseiros",
                  "Lençóis e fronhas",
                  "Capas de edredom",
                  "Protetores de colchão",
                  "Cobertores de bebê",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href={waLink} className="inline-flex items-center gap-3 mt-10 bg-blue-500 hover:bg-blue-400 text-white font-black px-7 py-4 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Agendar higienização
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt="Cama limpa e saudável"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Clientes que respiram melhor</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Mariana S.", city: "SJC", text: "Meu filho tem asma. Desde que comecei a higienizar os edredons na A7, as crises noturnas reduziram demais. O pediatra ficou impressionado." },
              { name: "Carlos E.", city: "Taubaté", text: "Tinha rinite toda manhã há anos. Achei que era poeira de rua. Era a cama. Duas higienizações depois, acordo sem espirrar." },
              { name: "Patrícia L.", city: "SJC", text: "Produtos sem cheiro forte, processo seguro para bebê. Exatamente o que eu precisava para o enxoval do meu filho." },
            ].map((t) => (
              <div key={t.name} className="border border-gray-100 p-6">
                <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-blue-500 text-sm">★</span>)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 text-blue-700 flex items-center justify-center font-black text-sm">{t.name.charAt(0)}</div>
                  <div><p className="text-xs font-bold text-gray-900">{t.name}</p><p className="text-[10px] text-gray-400">{t.city}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Dúvidas frequentes</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-gray-200 bg-white">
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

      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <a href="/blog/alergia-acaros-roupa-cama" className="text-xs text-gray-500 hover:text-gray-300">Artigo: Alergia a Ácaros e Roupa de Cama</a>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300">Agendar coleta →</a>
        </div>
      </footer>
    </div>
  );
}
