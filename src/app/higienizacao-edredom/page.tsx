"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

// LP-01 · Higienização de Edredons · Cluster: Saúde & Higiene
// Artigos conectados: "Por Que Higienizar o Edredom Vai Além de Lavar" · "Alergia a Ácaros"

const HERO_IMG = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=90";
const PROCESS_IMG = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=80";

const STATS = [
  { val: "10M", label: "ácaros por edredom não lavado" },
  { val: "2×", label: "mais risco de alergia respiratória" },
  { val: "6h+", label: "economizadas por coleta" },
  { val: "99%", label: "remoção de ácaros e fungos" },
];

const BENEFITS = [
  {
    icon: "🦠",
    title: "Eliminação completa de ácaros",
    body: "Temperatura industrial de 90°C elimina 99% dos ácaros, fungos e bactérias impossíveis de remover na máquina doméstica.",
  },
  {
    icon: "🌬️",
    title: "Processo de secagem industrial",
    body: "Secagem em tambor industrial a temperatura controlada. Sem umidade residual — o principal causador de fungos.",
  },
  {
    icon: "📦",
    title: "Embalagem protetora",
    body: "Retorna embalado em plástico termossoldado. Protegido até o momento de uso.",
  },
  {
    icon: "🚚",
    title: "Coleta e entrega em casa",
    body: "Você agenda. Buscamos na sua porta. Devolvemos em até 72h, impecável.",
  },
  {
    icon: "🧴",
    title: "Produtos premium",
    body: "Detergentes enzimáticos hipoalergênicos. Sem resíduo químico. Indicados para bebês e pele sensível.",
  },
  {
    icon: "✅",
    title: "Garantia de qualidade",
    body: "Não ficou perfeito? Refazemos. Sem custo. Sem questionamento.",
  },
];

const FAQ = [
  {
    q: "Com que frequência devo higienizar o edredom?",
    a: "Para adultos saudáveis, a cada 3 meses. Para pessoas com rinite, asma ou alergia, a cada 6 semanas. Bebês: mensalmente.",
  },
  {
    q: "Qual a diferença entre lavar e higienizar?",
    a: "Lavar remove sujidade visível. Higienizar elimina microrganismos (ácaros, fungos, bactérias) com processos e temperaturas que a máquina doméstica não alcança.",
  },
  {
    q: "Edredom de pluma pode ser higienizado?",
    a: "Sim. Usamos ciclos específicos para pluma natural, pluma sintética, microfibra e lã. Cada material tem seu protocolo.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Em média 48–72h do momento da coleta até a entrega. Para casos urgentes, consulte disponibilidade.",
  },
  {
    q: "Vocês buscam fora de São José dos Campos?",
    a: "Sim. Atendemos toda a região do Vale do Paraíba: Taubaté, Jacareí, Caçapava, Pindamonhangaba e cidades vizinhas.",
  },
];

export default function HigienizacaoEdredom() {
  const waLink = getWhatsAppLink("edredom");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Higienização de Edredons" description="Higienização profunda de edredons e cobertores que elimina 100% dos ácaros. Lavagem em alta temperatura com produtos hipoalergênicos." slug="higienizacao-edredom" />

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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar coleta
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-14">
        {/* Photo */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Edredom limpo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/55 to-gray-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.16em]">
                Higienização de Edredom · Coleta em Casa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Seu edredom<br />
              parece limpo.<br />
              <span className="text-teal-400">Não está.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Em 6 meses sem higienização profissional, um edredom pode acumular
              até <strong className="text-white">10 milhões de ácaros</strong>.
              A solução é simples — você nem precisa sair de casa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-white font-black text-lg px-8 py-5 transition-colors"
              >
                <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar higienização
              </a>
              <a href="#como-funciona" className="inline-flex items-center justify-center text-white/70 hover:text-white text-sm font-semibold px-6 py-5 border border-white/20 hover:border-white/50 transition-all">
                Como funciona →
              </a>
            </motion.div>

            {/* Trust micro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Coleta gratuita", "Resultado em 72h", "Garantia total", `${COMPANY.stats.googleRating}★ Google`].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
                <p className="font-black text-white text-3xl md:text-4xl tracking-tight">{s.val}</p>
                <p className="text-teal-100 text-xs mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">O problema</span>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                O que você não vê<br />está te fazendo mal.
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Ácaros se alimentam de células mortas da pele. Um adulto perde até 1,5g por noite.
                  O edredom é o habitat perfeito — quente, úmido, cheio de alimento.
                </p>
                <p>
                  Após 6 meses sem higienização profissional, um edredom de casal pode ter
                  <strong className="text-white"> mais de 10 milhões de ácaros</strong> e suas fezes —
                  o principal gatilho de rinite, asma e eczema.
                </p>
                <p>
                  A máquina doméstica não resolve: a maioria não atinge temperatura suficiente para
                  eliminar os microrganismos, apenas os redistribui.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616627452838-63f5eae0a61a?w=800&q=80"
                alt="Pessoa com alergia"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 p-6">
                <p className="text-white/60 text-xs">
                  Sintomas de alergia respiratória? Seu edredom pode ser a causa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÃO ── */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">A solução A7</span>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight text-gray-900">
              Processo industrial.<br /><span className="text-teal-600">Resultado garantido.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-px">
              {[
                { n: "01", title: "Você agenda pelo WhatsApp", body: "Escolhe data e horário. Em menos de 1 minuto." },
                { n: "02", title: "Coleta gratuita na sua porta", body: "Coletor uniformizado busca seu edredom." },
                { n: "03", title: "Triagem e protocolo específico", body: "Cada tipo de preenchimento (pluma, microfibra, lã) tem processo próprio." },
                { n: "04", title: "Lavagem a 90°C + secagem industrial", body: "Elimina 99,9% dos ácaros, fungos e bactérias." },
                { n: "05", title: "Entrega embalado em 72h", body: "Selado em plástico protetor. Pronto para usar." },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-5 p-5 hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 bg-teal-50 flex items-center justify-center border border-teal-100">
                    <span className="text-xs font-black text-teal-600">{s.n}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{s.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src={PROCESS_IMG}
                alt="Processo de lavagem industrial"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Diferenciais</span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Por que a A7 é diferente.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Fernanda O.", city: "SJC", text: "Minha filha tinha rinite toda manhã. Higienizei os edredons e em 2 semanas melhorou muito. Não sabia que podia fazer tanta diferença.", stars: 5 },
              { name: "Ricardo M.", city: "Taubaté", text: "Mandei 3 edredons. Chegaram embalados, cheirando bem e visivelmente mais brancos. Processo muito profissional.", stars: 5 },
              { name: "Ana C.", city: "Jacareí", text: "A coleta foi pontual, a comunicação pelo WhatsApp ótima e o resultado foi incrível. Já agendei para o próximo trimestre.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="border border-gray-100 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-teal-500 text-sm">★</span>
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

      {/* ── CTA PRINCIPAL ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-5">Primeiro mês com 20% OFF</span>
          <h2
            className="text-white font-black leading-tight tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Durma com a consciência<br />e o edredom limpos.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Coleta gratuita. Resultado em 72h. Sem fidelidade.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-white font-black text-xl px-10 py-5 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar higienização
          </a>
          <p className="text-gray-600 text-xs mt-5">Respondemos em menos de 5 minutos · {COMPANY.stats.attendances}+ atendimentos</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">Perguntas frequentes</h2>
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

      <RelatedServices currentSlug="higienizacao-edredom" />
      {/* ── FOOTER STRIP ── */}
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex gap-6">
            <a href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Início</a>
            <a href="/blog/higienizacao-edredom-importancia" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Artigo: Por que higienizar</a>
            <a href="/para-alergicos" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Para alérgicos</a>
          </div>
          <a href={waLink} className="text-xs text-teal-400 font-semibold hover:text-teal-300 transition-colors">
            Agendar coleta →
          </a>
        </div>
      </footer>
    </div>
  );
}
