import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppUrl } from "@/lib/seo-data";

interface FAQ {
  pergunta: string;
  resposta: string;
}

interface ProcessStep {
  step: string;
}

interface SeoPageTemplateProps {
  // SEO
  title: string;
  description: string;
  canonical: string;
  schema: object | object[];

  // Hero
  heroTag: string;
  heroH1: string;
  heroSubtitle: string;
  heroCta: string;
  heroWhatsApp: string;

  // Content blocks
  introText: string;
  beneficios: string[];
  processo: ProcessStep[];

  // Social proof
  depoimentos?: Array<{ nome: string; texto: string; cidade: string }>;

  // FAQ
  faq: FAQ[];

  // Bottom CTA
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaWhatsApp: string;

  // Breadcrumb
  breadcrumbs: Array<{ label: string; href: string }>;
}

const DEFAULT_DEPOIMENTOS = [
  { nome: "Carla M.", texto: "Serviço impecável. Agendei pelo WhatsApp e em 48h estava tudo pronto.", cidade: "São José dos Campos" },
  { nome: "Rafael S.", texto: "Primeira vez usando lavanderia e fiquei impressionado. Muito profissional.", cidade: "Taubaté" },
  { nome: "Ana P.", texto: "Coleta e entrega grátis, resultado excelente. Virei cliente mensal.", cidade: "Jacareí" },
];

export default function SeoPageTemplate({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title: _title,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description: _description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canonical: _canonical,
  schema,
  heroTag,
  heroH1,
  heroSubtitle,
  heroCta,
  heroWhatsApp,
  introText,
  beneficios,
  processo,
  depoimentos = DEFAULT_DEPOIMENTOS,
  faq,
  ctaTitle,
  ctaDesc,
  ctaButton,
  ctaWhatsApp,
  breadcrumbs,
}: SeoPageTemplateProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#0d2b4e] pt-28 pb-16 px-4">
          <div className="container-main mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 mb-4">
              {heroTag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {heroH1}
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
            <a
              href={getWhatsAppUrl(heroWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20ba57] transition-colors text-base shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {heroCta}
            </a>
            <p className="text-white/40 text-xs mt-4">Coleta e entrega grátis · Resposta em minutos</p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div className="container-main mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              {breadcrumbs.map((bc, i) => (
                <span key={bc.href} className="flex items-center gap-2">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link href={bc.href} className="hover:text-blue-600 transition-colors">{bc.label}</Link>
                      <span>/</span>
                    </>
                  ) : (
                    <span className="text-gray-600">{bc.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>

        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Intro */}
            <section>
              <p className="text-xl text-gray-600 leading-relaxed">{introText}</p>
            </section>

            {/* Benefícios */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Por que escolher a A7 Lavanderia?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {beneficios.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <p className="text-sm text-gray-700">{b}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Processo */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona</h2>
              <div className="space-y-4">
                {processo.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700">{p.step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Depoimentos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">O que nossos clientes dizem</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {depoimentos.map((d, i) => (
                  <div key={i} className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-3 italic">&ldquo;{d.texto}&rdquo;</p>
                    <p className="text-xs font-semibold text-gray-800">{d.nome}</p>
                    <p className="text-xs text-gray-400">{d.cidade}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 text-sm text-gray-400">4.9 ★ · +200 avaliações no Google</p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-4">
                {faq.map((q, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{q.pergunta}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{q.resposta}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-br from-[#0a1628] to-[#0d2b4e] rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">{ctaTitle}</h2>
              <p className="text-white/70 mb-6">{ctaDesc}</p>
              <a
                href={getWhatsAppUrl(ctaWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20ba57] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {ctaButton}
              </a>
              <div className="flex items-center justify-center gap-6 mt-6 text-white/40 text-xs">
                <span>✓ Coleta grátis</span>
                <span>✓ Entrega em 48h</span>
                <span>✓ 4.9 no Google</span>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
