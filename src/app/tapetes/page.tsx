"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

// LP-03 · Limpeza de Tapetes · Cluster: Tapetes & Casa

// Sala elegante com tapete — belo por fora, invisível por dentro (reforça o headline)
const HERO_IMG = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=90";
const PROCESS_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80";

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "10x", label: "mais sujidade que carpete comum" },
  { value: "72h", label: "prazo médio" },
  { value: "Todos", label: "os materiais" },
  { value: "99%", label: "remoção de ácaros" },
];

const TYPES = [
  { icon: "🟫", nome: "Persa e Oriental", detalhe: "Fibras naturais, tingimento artesanal. Lavagem manual com pH neutro." },
  { icon: "🔲", nome: "Shaggy / pelúcia", detalhe: "Pelos longos que acumulam pó. Extração profunda + secagem completa." },
  { icon: "⬜", nome: "Sisal e natural", detalhe: "Fibras naturais sensíveis à umidade. Processo controlado de secagem." },
  { icon: "🟦", nome: "Sintético / sala", detalhe: "Extração de sujidade, gordura e manchas. Resultado imediato." },
  { icon: "🛏️", nome: "Pelúcia / quarto criança", detalhe: "Higienização anti-ácaro. Produtos hipoalergênicos. Seguro para crianças." },
  { icon: "🚗", nome: "Tapete automotivo", detalhe: "Extração de odores e sujidade profunda. Secagem rápida." },
];

const PROCESS_STEPS = [
  { num: "01", label: "Foto e avaliação" },
  { num: "02", label: "Coleta domiciliar" },
  { num: "03", label: "Análise do material" },
  { num: "04", label: "Lavagem por extração" },
  { num: "05", label: "Secagem industrial + entrega" },
];

const BENEFITS = [
  { icon: "💧", title: "Extração profunda", body: "Remove sujidade, gordura, alérgenos e bactérias que aspiradores domésticos não alcançam." },
  { icon: "🌀", title: "Secagem industrial", body: "Sem risco de mofo ou odor residual. Secagem completa em câmara controlada." },
  { icon: "🎨", title: "Preservação das cores", body: "Produtos com pH adequado a cada tipo de fibra. Cores preservadas, sem desbotamento." },
  { icon: "✅", title: "Garantia de resultado", body: "Não ficou como esperado? Refazemos sem custo adicional." },
];

const TESTIMONIALS = [
  { name: "Roberto C.", city: "SJC", text: "Tapete persa da minha avó, nunca tinha sido lavado direito. Voltou com as cores vivas como novo. Equipe muito cuidadosa." },
  { name: "Daniela M.", city: "Taubaté", text: "Tapete shaggy branco. Parecia impossível. Voltou imaculado. Preço justo e prazo cumprido." },
  { name: "Paulo S.", city: "Jacareí", text: "Mando todos os tapetes da casa a cada 6 meses. Serviço impecável, sempre pontual." },
];

const FAQ = [
  { q: "Qual o tamanho máximo de tapete que vocês atendem?", a: "Sem limite de tamanho. Tapetes de sala grande, passadeiras, capachos — buscamos e devolvemos todos." },
  { q: "Tapete persa pode ser lavado?", a: "Sim, com cuidados específicos. Usamos pH neutro, lavagem manual para áreas delicadas e secagem controlada para preservar fibras e cores naturais." },
  { q: "Quanto tempo leva?", a: "Em média 48–72h. Tapetes muito grandes ou com sujidade severa podem levar até 96h pelo processo de secagem." },
  { q: "E se o tapete tiver manchas difíceis?", a: "Avaliamos a mancha e o material antes de qualquer processo. Taxa de remoção acima de 85% para manchas comuns." },
];

const TRUST_ITEMS = ["Todos os tipos de tapete", "Extração profissional", "Secagem rápida", `${COMPANY.stats.googleRating}★ Google`];

export default function Tapetes() {
  const waLink = getWhatsAppLink("tapete");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Lavagem de Tapetes" description="Lavagem profissional de tapetes que preserva cores e fibras. Extração de ácaros, manchas e odores. Coleta e entrega no Vale do Paraíba." slug="tapetes" />
      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            
            <img src="/logo-dark.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold px-5 py-2.5 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar limpeza
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Tapete limpo em ambiente sofisticado"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay mais escuro à esquerda — imagem da sala fica visível à direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/55 to-gray-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.16em]">
                Limpeza profissional de tapetes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Seu tapete guarda tudo
              <br />
              que você não consegue ver.
              <br />
              <span className="text-teal-400">A gente tira.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Limpeza profissional com{" "}
              <strong className="text-white">extração e secagem industrial</strong>. Tapetes persas, shaggy,
              sisal, sintético. Coleta em casa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-black text-lg px-8 py-5 transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Agendar limpeza do tapete
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
                    className="w-3 h-3 text-teal-400"
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

      {/* ── STATS STRIP ── */}
      <section className="bg-teal-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-3xl leading-none tracking-tight">{s.value}</p>
                <p className="text-teal-100 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAPETE TYPES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">
              Todos os materiais
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Qual é o seu tapete?
            </h2>
            <p className="text-gray-500 mt-3 text-base">
              Cada material recebe o tratamento adequado. Sem exceções.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TYPES.map((t) => (
              <div
                key={t.nome}
                className="border border-gray-100 p-6 hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl block mb-3">{t.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{t.nome}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">
                Nosso processo
              </span>
              <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-10 leading-tight">
                Da coleta à entrega — sem você precisar sair de casa.
              </h2>
              <div className="space-y-5">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.num} className="flex items-center gap-5">
                    <span className="text-teal-400 font-black text-2xl leading-none w-10 flex-shrink-0 opacity-70">
                      {step.num}
                    </span>
                    <div className="h-px flex-1 bg-gray-800" />
                    <span className="text-white/80 text-sm font-semibold text-right">{step.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={waLink}
                className="inline-flex items-center gap-3 mt-12 bg-teal-600 hover:bg-teal-500 text-white font-black px-7 py-4 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Iniciar processo
              </a>
            </div>
            <img
              src={PROCESS_IMG}
              alt="Processo de limpeza profissional de tapete"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">
              Diferenciais
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Limpeza que você vê. E sente.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-gray-100 p-7 hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-teal-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">
            Tapetes transformados
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-teal-100 bg-white p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-teal-600 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-100 text-teal-700 flex items-center justify-center font-black text-sm">
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

      {/* ── MAIN CTA ── */}
      <section className="py-28 bg-teal-700">
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
              Seu tapete merece
              <br />
              <span className="text-teal-300">um tratamento à altura.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Coleta gratuita. Todos os materiais. Resultado garantido.
            </p>
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-teal-50 text-teal-700 font-black text-xl px-10 py-6 transition-colors"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Agendar limpeza grátis
            </a>
          </motion.div>
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

      <RelatedServices currentSlug="tapetes" />
      {/* ── FOOTER STRIP ── */}
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <a
              href="/blog/bacterias-tapetes-higienizacao"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Artigo: Tapetes e bactérias
            </a>
            <a href="/sofas" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Também higienizamos sofás
            </a>
          </div>
          <a href={waLink} className="text-xs text-teal-400 font-semibold hover:text-teal-300 transition-colors">
            Agendar limpeza →
          </a>
        </div>
      </footer>
    </div>
  );
}
