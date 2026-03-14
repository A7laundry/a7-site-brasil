"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

// ─── VERSION B — CLEAN LUXURY ─────────────────────────────────────────────────
// Horizontal numbered steps on desktop, vertical timeline on mobile.
// Dark background — creates section contrast rhythm.

const STEPS = [
  {
    n: "01",
    title: "Você agenda",
    body: "Uma mensagem no WhatsApp. 30 segundos. Escolha o horário de coleta.",
    icon: "💬",
  },
  {
    n: "02",
    title: "Buscamos em casa",
    body: "Seu coletor chega no horário combinado. Você não precisa sair de casa.",
    icon: "🚚",
  },
  {
    n: "03",
    title: "Tratamento industrial",
    body: "Cada peça com o processo correto. Produtos premium, padrão internacional.",
    icon: "✨",
  },
  {
    n: "04",
    title: "Entrega impecável",
    body: "Lavadas, passadas, embaladas. De volta na sua porta. Prontas para usar.",
    icon: "📦",
  },
];

export default function HowItWorks() {
  const waLink = getWhatsAppLink("agendar");

  return (
    <section id="como-funciona" className="section-padding bg-ink-900 overflow-hidden">
      <div className="container-main mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <p className="text-xs font-bold text-electric-400 uppercase tracking-[0.16em] mb-4">Como funciona</p>
            <h2
              className="font-black leading-[0.92] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              4 passos.{" "}
              <span className="text-electric-400">Zero esforço.</span>
            </h2>
          </div>
          <a
            href={waLink}
            className="inline-flex items-center gap-3 bg-electric-500 hover:bg-electric-400 text-white font-bold px-6 py-3.5 transition-colors duration-200 whitespace-nowrap self-start lg:self-auto text-sm tracking-wide"
          >
            <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar agora
          </a>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-ink-900 p-8 relative group hover:bg-ink-800 transition-colors duration-300"
            >
              {/* Step number */}
              <span className="text-[4rem] font-black leading-none tracking-[-0.06em] text-white/5 group-hover:text-electric-500/10 transition-colors duration-300 mb-6 block select-none">
                {step.n}
              </span>

              {/* Icon */}
              <span className="text-3xl mb-4 block">{step.icon}</span>

              {/* Title */}
              <h3 className="font-bold text-white text-lg mb-2 leading-tight">{step.title}</h3>

              {/* Body */}
              <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>

              {/* Connector line (hidden on last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-12 bg-electric-500/30 -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
