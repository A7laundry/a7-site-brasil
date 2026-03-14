"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

// LP-12 · Para Mães com Filhos · Cluster: Saúde & Higiene

// Roupas de bebê dobradas, limpas e organizadas — o resultado que a mãe quer ver
const HERO_IMG = "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1600&q=90";
const SECONDARY_IMG = "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1200&q=80";

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "+50.000", label: "atendimentos" },
  { value: "99,7%", label: "satisfação" },
  { value: "24–48h", label: "entrega" },
  { value: "0", label: "reclamações roupa bebê" },
];

const BENEFITS = [
  { icon: "👶", title: "Protocolo para roupas de bebê", body: "Produtos hipoalergênicos certificados. Sem corantes, perfumes sintéticos ou conservantes. Seguros para pele sensível." },
  { icon: "⏱️", title: "Devolve seu tempo", body: "Média de 6 horas por semana recuperadas. Tempo para você, para seu filho, para o que realmente importa." },
  { icon: "🧺", title: "Lavamos tudo", body: "Roupas de bebê, roupas de adulto, edredons, lençóis, fraldas de pano. Uma coleta resolve tudo." },
  { icon: "🚚", title: "Coleta e entrega grátis", body: "Marcamos o horário que funciona pra você. Chegamos, buscamos, devolvemos." },
  { icon: "🌿", title: "Produtos naturais e seguros", body: "Formulação testada dermatologicamente. Ideal para bebês com eczema, dermatite ou pele sensível." },
  { icon: "📱", title: "Tudo pelo WhatsApp", body: "Agenda, dúvidas, rastreamento. Atendimento humano. Sem app para baixar." },
];

const TESTIMONIALS = [
  { name: "Juliana R.", city: "SJC", text: "Meu bebê tem dermatite. Desde que comecei com a A7, as crises melhoraram muito. Os produtos são mesmo diferentes." },
  { name: "Camila T.", city: "Taubaté", text: "Sou mãe solo de dois filhos. A A7 me devolveu umas 6 horas por semana. Não sei o que faria sem eles." },
  { name: "Fernanda K.", city: "Jacareí", text: "Mandei um pacotão de roupas de bebê. Voltaram cheirando bem, macias, perfeitamente dobradas. Top demais." },
];

const FAQ = [
  { q: "Vocês usam produtos seguros para bebê?", a: "Sim. Linha hipoalergênica certificada, sem fragrâncias sintéticas, corantes ou conservantes. Testada para pele sensível e recém-nascidos." },
  { q: "Posso mandar fraldas de pano?", a: "Sim. Temos protocolo específico para fraldas de pano que garante higienização completa mantendo a integridade do material." },
  { q: "E roupas com manchas de comida e leite?", a: "Especialidade da casa. Manchas orgânicas de bebê (leite, comida, baba) são nossas mais frequentes. Taxa de remoção total acima de 90%." },
  { q: "Posso mandar roupas de adulto junto?", a: "Sim. Você manda tudo de uma vez. Separamos e tratamos cada peça com o protocolo adequado." },
  { q: "Qual o prazo?", a: "48–72h do momento da coleta até a entrega. Para roupas de bebê urgentes, consulte disponibilidade expressa." },
];

const TRUST_ITEMS = ["Produtos sem alérgenos", "Indicado para bebê", "Coleta em casa", `${COMPANY.stats.googleRating}★ Google`];

export default function ParaMaes() {
  const waLink = getWhatsAppLink("maes");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Lavanderia para Mães" description="Lavagem especializada de roupas de bebê e enxoval familiar. Produtos hipoalergênicos, sem contaminação cruzada. Coleta e entrega no Vale do Paraíba." slug="para-maes" />
      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight">
            A7 <span className="text-rose-600">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold px-5 py-2.5 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar coleta
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Roupas de bebê limpas e dobradas"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay mais leve à direita — imagem respira, reforça o resultado */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-rose-950/55 to-rose-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-rose-400" />
              <span className="text-rose-400 text-xs font-bold uppercase tracking-[0.16em]">
                Para mães · Lavagem hipoalergênica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Para mães que já não
              <br />
              têm tempo
              <br />
              <span className="text-rose-400">para mais nada.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Coleta em casa. Lavagem hipoalergênica para roupas de bebê e criança. Entrega em 48h.{" "}
              <strong className="text-white">Você cuida do que importa.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-rose-500 hover:bg-rose-400 text-white font-black text-lg px-8 py-5 transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Agendar coleta grátis
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
                    className="w-3 h-3 text-rose-400"
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
      <section className="bg-rose-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-3xl leading-none tracking-tight">{s.value}</p>
                <p className="text-rose-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-4">
                O problema real
              </span>
              <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-8 leading-tight">
                Quantas horas você perde por semana com roupa?
              </h2>
              <div className="space-y-5 text-white/60 text-base leading-relaxed">
                <p>
                  Uma mãe comum gasta entre <strong className="text-white">5 a 8 horas semanais</strong> apenas com
                  tarefas relacionadas à roupa — separar, lavar, estender, dobrar, passar, guardar. Para mães de bebê
                  ou crianças pequenas, esse número é ainda maior.
                </p>
                <p>
                  No meio disso tudo, ainda existe a preocupação com os produtos certos:{" "}
                  <strong className="text-white">o amaciante vai irritar a pele do bebê?</strong> O sabão é seguro para
                  roupa de recém-nascido? A temperatura está certa? São perguntas que ninguém deveria ter que responder
                  sozinha.
                </p>
                <p>
                  A A7 Lavanderia cuida de tudo isso. Você coloca as roupas em um saco, agendamos a coleta, e em 48h
                  tudo volta limpo, higiênico, dobrado e pronto. Sem estresse. Sem dúvida.{" "}
                  <strong className="text-white">Só tempo de volta para você.</strong>
                </p>
              </div>
            </div>
            <img
              src={SECONDARY_IMG}
              alt="Mãe com bebê aproveitando tempo livre"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-3">
              Por que mães escolhem a A7
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Cuidado que vai além da lavagem.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-gray-100 p-7 hover:border-rose-200 hover:shadow-sm transition-all"
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
      <section className="py-24 bg-rose-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">
            Mães que recuperaram seu tempo
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-rose-100 bg-white p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-rose-500 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-rose-100 text-rose-700 flex items-center justify-center font-black text-sm">
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
      <section className="py-28 bg-gray-950">
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
              Você já faz muito.
              <br />
              A roupa a gente faz por você.
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Primeiro mês com <strong className="text-rose-400">20% OFF</strong>. Sem fidelidade.
            </p>
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-3 bg-rose-500 hover:bg-rose-400 text-white font-black text-xl px-10 py-6 transition-colors"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Quero meu tempo de volta
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

      <RelatedServices currentSlug="para-maes" />
      {/* ── FOOTER STRIP ── */}
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <a href="/blog/higiene-roupas-bebe" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Artigo: Roupas de Bebê
            </a>
            <a href="/para-alergicos" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Para alérgicos
            </a>
          </div>
          <a href={waLink} className="text-xs text-rose-400 font-semibold hover:text-rose-300 transition-colors">
            Agendar coleta →
          </a>
        </div>
      </footer>
    </div>
  );
}
