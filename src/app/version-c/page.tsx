"use client";

import { getWhatsAppLink, COMPANY } from "@/lib/constants";

// ─── VERSION C — AUTHORITY / TRUST ────────────────────────────────────────────
// Autoridade pela evidência. Copy racional. Credenciais em destaque.
// "A lavanderia que profissionais confiam" — posicionamento premium B2B/B2C.

export default function VersionC() {
  const waLink = getWhatsAppLink("agendar");

  const certifications = [
    { icon: "🏆", title: `${COMPANY.stats.googleRating} Google`, sub: "Avaliação média" },
    { icon: "📅", title: "14 anos", sub: "No mercado" },
    { icon: "🏭", title: `${COMPANY.stats.unitsBrazil + COMPANY.stats.unitsUSA} unidades`, sub: "Brasil + EUA" },
    { icon: "✅", title: `${COMPANY.stats.satisfaction}%`, sub: "Índice de satisfação" },
  ];

  const proofs = [
    { label: "Sem fidelidade", desc: "Cancele quando quiser, sem custo." },
    { label: "Coleta gratuita", desc: "Busca e entrega incluídos no preço." },
    { label: "Garantia de qualidade", desc: "Refazemos se não estiver perfeito." },
    { label: "Resposta em <5min", desc: "Atendimento humano via WhatsApp." },
  ];

  const process = [
    { n: "01", title: "Agendamento", body: "Via WhatsApp ou site. Escolha data e horário de coleta." },
    { n: "02", title: "Coleta domiciliar", body: "Coletor uniformizado, com identificação A7." },
    { n: "03", title: "Triagem e tratamento", body: "Cada peça avaliada individualmente. Processos por tipo de tecido." },
    { n: "04", title: "Controle de qualidade", body: "Inspeção visual pós-lavagem. Embalagem protetora." },
    { n: "05", title: "Entrega certificada", body: "Rastreável. Na sua porta, no prazo combinado." },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy-900 rounded flex items-center justify-center bg-[#0a1628]">
              <span className="text-white font-black text-xs">A7</span>
            </div>
            <div>
              <span className="font-black text-gray-900 text-sm">A7 Lavanderia</span>
              <span className="text-gray-400 text-xs block leading-tight">Padrão profissional</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#processo" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Processo</a>
            <a href="#garantias" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Garantias</a>
            <a href="#empresarial" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Empresarial</a>
          </nav>
          <a
            href={waLink}
            className="bg-[#0a1628] text-white text-sm font-bold px-5 py-2.5 hover:bg-gray-800 transition-colors"
          >
            Solicitar coleta
          </a>
        </div>
      </header>

      {/* ── HERO — AUTHORITY ── */}
      <section className="pt-16 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Credential badge */}
              <div className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs px-4 py-2 mb-8">
                <span className="text-yellow-400">★★★★★</span>
                <span>+{COMPANY.stats.attendances} atendimentos · 14 anos de operação</span>
              </div>

              <h1 className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
                A lavanderia que<br />
                <span className="text-blue-400">profissionais</span><br />
                confiam.
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                Coleta domiciliar, tratamento industrial e entrega em até 24h.
                Processo auditável, garantia em todas as peças.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-4 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar primeira coleta
                </a>
                <a href="#processo" className="inline-flex items-center justify-center text-white/50 hover:text-white text-sm font-medium px-6 py-4 border border-white/10 hover:border-white/30 transition-all">
                  Ver processo completo
                </a>
              </div>
            </div>

            {/* Credentials panel */}
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="border border-white/10 p-6">
                  <span className="text-2xl block mb-3">{c.icon}</span>
                  <p className="text-white font-black text-2xl tracking-tight">{c.title}</p>
                  <p className="text-white/40 text-xs mt-1">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="processo" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Nosso processo</span>
            <h2 className="font-black text-4xl tracking-tight mt-2 text-gray-900">
              Transparência em cada etapa.
            </h2>
          </div>
          <div className="space-y-px">
            {process.map((step, i) => (
              <div key={step.n} className="flex items-start gap-8 bg-white p-6 hover:bg-gray-50 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-200 group-hover:border-blue-500 flex items-center justify-center transition-colors">
                  <span className="font-black text-sm text-gray-400 group-hover:text-blue-600 transition-colors">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.body}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="ml-auto self-center">
                    <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section id="garantias" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Garantias</span>
            <h2 className="font-black text-4xl tracking-tight mt-2 text-gray-900">
              Compromissos que mantemos.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {proofs.map((p) => (
              <div key={p.label} className="flex items-start gap-4 p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{p.label}</p>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B ── */}
      <section id="empresarial" className="py-20 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Empresarial</span>
              <h2 className="text-white font-black text-4xl tracking-tight mt-3 mb-5">
                Soluções para<br />empresas e negócios.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Restaurantes, hotéis, pousadas, condomínios e empresas com demanda regular.
                Contrato personalizado, coleta programada, faturamento mensal.
              </p>
              <a
                href={waLink}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3.5 transition-colors text-sm"
              >
                Falar com consultor comercial →
              </a>
            </div>
            <div className="space-y-3">
              {["Restaurantes e lanchonetes", "Hotéis e pousadas", "Uniformes corporativos", "Condomínios residenciais", "Hosts de Airbnb"].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/10 px-5 py-3.5">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-black text-4xl tracking-tight text-gray-900 mb-4">
            Comece com zero compromisso.
          </h2>
          <p className="text-gray-500 mb-8 text-lg">Primeira coleta grátis. 20% OFF no primeiro mês.</p>
          <a
            href={waLink}
            className="inline-flex items-center gap-3 bg-[#0a1628] text-white font-bold text-lg px-10 py-5 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar primeira coleta
          </a>
        </div>
      </section>

      {/* ── VERSION BADGE ── */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#0a1628] text-white text-[10px] font-bold px-3 py-1.5 shadow-lg border border-white/10">
          Variação C — Authority
        </div>
      </div>
    </div>
  );
}
