"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY, getWhatsAppLink } from "@/lib/constants";
import ServiceSchema from "@/components/ServiceSchema";

const whatsappLink = getWhatsAppLink("default");

const UNIDADES_FISICAS = COMPANY.units.filter((u) => !("virtual" in u && u.virtual));
const UNIDADES_DELIVERY = COMPANY.units.filter((u) => "virtual" in u && u.virtual);

const CIDADES_ORDER = [
  "São José dos Campos",
  "Jacareí",
  "Taubaté",
  "Manaus",
];

function groupByCity(units: typeof COMPANY.units) {
  const map: Record<string, typeof COMPANY.units> = {};
  for (const u of units) {
    if (!map[u.city]) map[u.city] = [];
    map[u.city].push(u);
  }
  return map;
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function UnidadesPage() {
  const grouped = groupByCity(UNIDADES_FISICAS);
  const citiesOrdered = CIDADES_ORDER.filter((c) => grouped[c]);

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="Unidades A7 Lavanderia"
        description="Encontre a unidade A7 Lavanderia mais próxima. São José dos Campos, Jacareí, Taubaté e Manaus. Coleta e entrega a domicílio."
        slug="unidades"
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-dark.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <WhatsAppIcon />
            Agendar coleta
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-blue-500/30 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {COMPANY.units.length} unidades no Brasil
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossas Unidades
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Atendemos com coleta e entrega em São José dos Campos, Jacareí, Taubaté, Manaus e região de São Paulo e Mogi das Cruzes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unidades por cidade */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {citiesOrdered.map((city, cityIdx) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cityIdx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{city}</h2>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-0.5 rounded-full">
                  {grouped[city].length} {grouped[city].length === 1 ? "unidade" : "unidades"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {grouped[city].map((unit, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-4 text-base">
                      {unit.name}
                    </h3>

                    <div className="space-y-2.5 text-sm text-gray-600">
                      {unit.street && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5 shrink-0"><MapPinIcon /></span>
                          <span>{unit.street}, {unit.neighborhood} — CEP {unit.zip}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500 shrink-0"><PhoneIcon /></span>
                        <a
                          href={`tel:${unit.phoneRaw}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {unit.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500 shrink-0"><ClockIcon /></span>
                        <span>{unit.hours}</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${unit.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de agendar uma coleta. 🧺")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
                    >
                      <WhatsAppIcon />
                      Agendar nesta unidade
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery virtual */}
      {UNIDADES_DELIVERY.length > 0 && (
        <section className="py-12 px-6 bg-blue-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Atendimento por Delivery</h2>
            <p className="text-gray-500 text-sm mb-6">Coleta e entrega via plataforma, sem unidade física de atendimento.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {UNIDADES_DELIVERY.map((unit, idx) => (
                <div key={idx} className="bg-white border border-blue-100 rounded-2xl p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{unit.city} — {unit.state}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <ClockIcon />
                      <span>{unit.hours}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${unit.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de agendar coleta em " + unit.city + ". 🧺")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors shrink-0"
                  >
                    <WhatsAppIcon />
                    Agendar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-16 px-6 bg-blue-950 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Não encontrou sua cidade?</h2>
          <p className="text-blue-200 mb-8">
            Entre em contato pelo WhatsApp. Avaliamos atendimento em novas regiões conforme demanda.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-6 px-6 bg-gray-900 text-gray-400 text-sm text-center">
        <Link href="/" className="hover:text-white transition-colors">
          ← Voltar para o site
        </Link>
        <span className="mx-3">·</span>
        <span>© {new Date().getFullYear()} A7 Lavanderia</span>
      </footer>
    </div>
  );
}
