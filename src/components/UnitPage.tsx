"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export interface UnitData {
  // Identidade
  slug: string;
  name: string; // "A7 Lavanderia — Bosque dos Eucaliptos"
  neighborhood: string;
  city: string;
  state: string;

  // Endereço
  street: string;
  zip: string;
  lat: number;
  lng: number;

  // Contato
  phone: string;
  phoneRaw: string; // apenas dígitos para wa.me
  hours: string; // display
  hoursSchema: { days: string[]; opens: string; closes: string }[]; // para Schema

  // Hub da cidade
  citySlug: string;
  cityLabel: string;

  // Conteúdo local
  heroImage: string;
  heroTagline: string; // "Bosque dos Eucaliptos · SJC"
  about: string; // parágrafo sobre o bairro/localização
  nearbyRefs: string[]; // pontos de referência ("próximo ao Parque Santos Dumont")

  // SEO
  seoTitle: string;
  seoDescription: string;

  // Depoimento local
  testimonials: { name: string; neighborhood: string; text: string }[];

  // FAQ específico
  faq: { q: string; a: string }[];
}

function WaIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d={WA_PATH} />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const SERVICES = [
  { icon: "👗", title: "Roupas do dia a dia", body: "Lavagem, secagem e passadoria. Entregues dobradas e embaladas." },
  { icon: "🛏️", title: "Edredons e cobertores", body: "Higienização anti-ácaros com equipamento industrial. Volta fofo e cheiroso." },
  { icon: "👟", title: "Tênis e calçados", body: "Limpeza manual especializada sem danificar o material." },
  { icon: "🪟", title: "Cortinas e tapetes", body: "Lavagem que preserva fibras e cores. Retirada e devolução incluídas." },
  { icon: "✨", title: "Roupas delicadas", body: "Seda, linho, cashmere — processo específico por tipo de tecido." },
  { icon: "🏢", title: "Uniformes corporativos", body: "Contratos mensais com NF eletrônica para empresas do bairro." },
];

export default function UnitPage({ unit }: { unit: UnitData }) {
  const waLink = `https://wa.me/${unit.phoneRaw}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma coleta na unidade ${unit.neighborhood}. 🧺`)}`;

  // Schema LocalBusiness com todos os dados reais
  const schema = {
    "@context": "https://schema.org",
    "@type": "Laundry",
    "@id": `https://a7lavanderia.com/${unit.slug}`,
    name: unit.name,
    description: unit.seoDescription,
    url: `https://a7lavanderia.com/${unit.slug}`,
    telephone: `+55${unit.phoneRaw.replace(/\D/g, "")}`,
    image: unit.heroImage,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: unit.street,
      addressLocality: unit.city,
      addressRegion: unit.state,
      postalCode: unit.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: unit.lat,
      longitude: unit.lng,
    },
    openingHoursSpecification: unit.hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
    sameAs: [
      "https://instagram.com/a7lavanderia",
      "https://facebook.com/lavanderiaa7",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "A7 Lavanderia",
      url: "https://a7lavanderia.com",
    },
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "A7 Lavanderia", item: "https://a7lavanderia.com" },
      { "@type": "ListItem", position: 2, name: unit.cityLabel, item: `https://a7lavanderia.com/${unit.citySlug}` },
      { "@type": "ListItem", position: 3, name: unit.neighborhood, item: `https://a7lavanderia.com/${unit.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-blue-700/90 backdrop-blur-md border-b border-blue-600/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </Link>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold px-5 py-2 rounded transition-colors">
            <WaIcon /> Agendar nesta unidade
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="pt-14 bg-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300 transition-colors">A7 Lavanderia</Link>
          <span>/</span>
          <Link href={`/${unit.citySlug}`} className="hover:text-slate-300 transition-colors">{unit.cityLabel}</Link>
          <span>/</span>
          <span className="text-slate-300">{unit.neighborhood}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-20">
        <img src={unit.heroImage} alt={`A7 Lavanderia ${unit.neighborhood}`}
          className="object-cover absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.16em]">{unit.heroTagline}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-5"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}>
              Lavanderia em<br />
              <span className="text-blue-400">{unit.neighborhood}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
              {unit.about}
            </motion.p>

            {/* Endereço destacado */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 mb-8 inline-block">
              <p className="text-white text-sm font-semibold">{unit.street} — {unit.neighborhood}</p>
              <p className="text-white/60 text-xs mt-0.5">{unit.city}, {unit.state} · CEP {unit.zip}</p>
              <p className="text-blue-300 text-xs mt-1">🕐 {unit.hours}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black text-base px-7 py-4 rounded transition-colors">
                <WaIcon /> Agendar coleta — {unit.phone}
              </a>
              <Link href={`/${unit.citySlug}`}
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white/60 hover:text-white text-sm px-5 py-4 rounded transition-colors">
                Ver todas as unidades em {unit.cityLabel}
              </Link>
            </motion.div>

            {/* Pontos de referência */}
            {unit.nearbyRefs.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="mt-6 flex flex-wrap gap-4">
                {unit.nearbyRefs.map((r) => (
                  <span key={r} className="flex items-center gap-1.5 text-xs text-white/40">
                    <CheckIcon /> {r}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-3">Serviços disponíveis</span>
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            O que fazemos na unidade {unit.neighborhood}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-slate-700 bg-slate-950 p-6 hover:border-blue-600 transition-colors rounded-lg">
                <span className="text-2xl block mb-3">{s.icon}</span>
                <h3 className="font-bold text-white text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-3">Como funciona</span>
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">Do agendamento à entrega</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Agende pelo WhatsApp", body: `Informe seu endereço em ${unit.neighborhood}, dia e horário. Resposta em até 5 minutos.` },
              { n: "02", title: "Coleta na sua porta", body: "Nosso motoboy vai até você no horário combinado. Sem sair de casa." },
              { n: "03", title: "Higienização profissional", body: "Equipamentos industriais, temperatura controlada, produtos premium." },
              { n: "04", title: "Entrega em 48 horas", body: "Roupas limpas, passadas e embaladas de volta na sua porta." },
            ].map((step) => (
              <div key={step.n} className="bg-slate-900 border border-slate-800 p-6 hover:border-blue-600 transition-colors rounded-lg">
                <span className="text-blue-400 font-black text-3xl block mb-3">{step.n}</span>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T: Diferenciais */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-3">Por que a A7</span>
          <h2 className="text-white font-black text-3xl tracking-tight mb-10">
            Experiência real, qualidade garantida
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: "🏭", title: "Equipamento industrial", body: "Não usamos máquinas domésticas. Equipamentos industriais garantem resultado que lavagem em casa não entrega." },
              { icon: "🧪", title: "Produtos dermatologicamente testados", body: "Detergentes neutros, hipoalergênicos, seguros para pele sensível e bebês. Certificados e testados." },
              { icon: "📍", title: "Unidade no seu bairro", body: `Presença física em ${unit.neighborhood} — você pode deixar as peças ou solicitar coleta. Sem deslocamento até outra cidade.` },
              { icon: "📱", title: "Atendimento humano e ágil", body: "Nenhum robô. Nossa equipe responde em até 5 minutos com informação real sobre sua coleta." },
            ].map((d) => (
              <div key={d.title} className="flex gap-5 p-6 bg-slate-950 border border-slate-800 rounded-lg">
                <span className="text-3xl shrink-0">{d.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1.5">{d.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      {unit.testimonials.length > 0 && (
        <section className="py-20 bg-slate-950">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-white font-black text-3xl tracking-tight mb-10">
              Clientes de {unit.neighborhood} e região
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {unit.testimonials.map((t) => (
                <div key={t.name} className="border border-slate-800 bg-slate-900 p-6 rounded-lg">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-blue-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-900 text-blue-300 flex items-center justify-center font-black text-sm rounded">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{t.name}</p>
                      <p className="text-[10px] text-slate-500">{t.neighborhood}, {unit.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl tracking-tight mb-3">
            Agende sua coleta em {unit.neighborhood}
          </h2>
          <p className="text-blue-100 mb-8">{unit.street} · {unit.hours}</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 font-black text-lg px-10 py-4 rounded transition-colors">
            <WaIcon /> {unit.phone}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-2xl tracking-tight text-white mb-8">
            Dúvidas — {unit.neighborhood}
          </h2>
          <div className="space-y-px">
            {unit.faq.map((item) => (
              <details key={item.q} className="group border border-slate-800 bg-slate-900">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-800 transition-colors">
                  <span className="font-semibold text-slate-100 text-sm pr-4">{item.q}</span>
                  <svg className="w-4 h-4 text-slate-500 shrink-0 group-open:rotate-180 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-black text-white tracking-tight">A7 Lavanderia</Link>
          <div className="flex items-center gap-5">
            <Link href={`/${unit.citySlug}`} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Unidades em {unit.cityLabel}
            </Link>
            <Link href="/unidades" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Todas as unidades
            </Link>
          </div>
          <a href={waLink} className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Agendar em {unit.neighborhood} →
          </a>
        </div>
      </footer>
    </div>
  );
}
