"use client";

import { getWhatsAppLink, COMPANY } from "@/lib/constants";

// ─── VERSION A — DOPAMINE ──────────────────────────────────────────────────────
// Alta energia. Gradientes. Stats em destaque. Urgência máxima.
// "Seus vizinhos já usam" — social proof como pressão social.

export default function VersionA() {
  const waLink = getWhatsAppLink("agendar");
  const testimonials = [
    { name: "Carla M.", city: "SJC", text: "Chegou na hora, voltou impecável. Nunca mais lavo em casa.", stars: 5 },
    { name: "Rafael T.", city: "Taubaté", text: "Economizo 4h por semana. O preço vale demais.", stars: 5 },
    { name: "Ana P.", city: "Jacareí", text: "Minha filha tem alergia — as roupas chegam sem rastro de ácaro.", stars: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-black text-xl tracking-tight">A7 <span className="text-purple-600">Lavanderia</span></span>
          <a
            href={waLink}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-200 transition-all"
          >
            Agendar grátis →
          </a>
        </div>
      </header>

      {/* ── HERO — DOPAMINE ── */}
      <section className="pt-14 relative overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/30">
              <span className="flex gap-0.5">{"★★★★★"}</span>
              <span>+{COMPANY.stats.attendances} clientes satisfeitos</span>
              <span className="w-px h-3 bg-white/40" />
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-300" />
              </span>
              <span>Coletas abertas hoje</span>
            </div>

            <h1 className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}>
              Suas roupas<br />lavadas{" "}
              <span className="relative inline-block">
                <span className="relative z-10">perfeitas.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-300/60 -rotate-1" />
              </span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Coleta em casa. Entrega em até <strong className="text-white">24h</strong>.
              Sem fidelidade. Primeiro mês com <strong className="text-yellow-300">20% OFF</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-black text-lg px-8 py-4 rounded-2xl hover:bg-yellow-300 hover:text-purple-900 transition-all shadow-xl shadow-purple-900/30 hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar coleta grátis
              </a>
              <a href="#como-funciona" className="inline-flex items-center justify-center text-white/80 hover:text-white font-semibold text-sm px-6 py-4 border border-white/30 rounded-2xl hover:border-white/60 transition-all">
                Como funciona →
              </a>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: `+${COMPANY.stats.attendances}`, label: "atendimentos" },
              { val: `${COMPANY.stats.googleRating}★`, label: "Google" },
              { val: `${COMPANY.stats.unitsBrazil + COMPANY.stats.unitsUSA}`, label: "unidades" },
              { val: `${COMPANY.stats.satisfaction}%`, label: "satisfação" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-black text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">{s.val}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Como funciona</span>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight mt-2">4 passos. <span className="text-pink-500">Zero esforço.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "01", icon: "💬", title: "Você agenda", body: "WhatsApp. 30 segundos." },
              { n: "02", icon: "🚚", title: "Buscamos", body: "Coleta na sua porta." },
              { n: "03", icon: "✨", title: "Lavamos", body: "Padrão industrial premium." },
              { n: "04", icon: "📦", title: "Entregamos", body: "Em até 24h, impecável." },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="text-3xl mb-3 block">{step.icon}</span>
                <span className="text-5xl font-black text-gray-100 block leading-none mb-2">{step.n}</span>
                <h3 className="font-black text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl tracking-tight">O que nossos clientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-black">
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

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight mb-4">
            Pronto para parar de lavar roupa?
          </h2>
          <p className="text-white/80 mb-8 text-lg">Primeiro mês com 20% OFF. Sem fidelidade.</p>
          <a
            href={waLink}
            className="inline-flex items-center gap-3 bg-white text-purple-700 font-black text-xl px-10 py-5 rounded-2xl hover:bg-yellow-300 hover:text-purple-900 transition-all shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar coleta grátis
          </a>
        </div>
      </section>

      {/* ── VERSION BADGE ── */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
          Variação A — Dopamine
        </div>
      </div>
    </div>
  );
}
