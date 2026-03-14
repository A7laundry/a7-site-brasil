"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

// ─── VERSION B — CLEAN LUXURY ─────────────────────────────────────────────────
// Pure near-black. One headline. One CTA. No noise. Maximum authority.
// The close that converts.

export default function CTA() {
  const waLink = getWhatsAppLink("agendar");

  return (
    <section className="relative bg-ink-900 overflow-hidden">
      {/* Subtle texture layer */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Electric accent line at top */}
      <div className="h-px w-full bg-electric-500" />

      <div className="container-main mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.14em]">
              Respondemos em menos de 5 minutos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.9] tracking-[-0.04em] text-white mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            Sua liberdade começa{" "}
            <span className="text-electric-400">agora.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto"
          >
            Agende sua primeira coleta. Sem compromisso. Sem fidelidade.
            Ganhe <span className="text-white font-bold">20% OFF</span> no primeiro mês.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={waLink}
              className="group inline-flex items-center gap-3 bg-electric-500 hover:bg-electric-400 text-white font-bold text-lg px-10 py-5 transition-colors duration-200 tracking-wide"
            >
              <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Coleta Grátis
            </a>
          </motion.div>

          {/* Micro-trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex items-center justify-center gap-6 flex-wrap"
          >
            {["Sem taxa de cancelamento", "Coleta gratuita", "Resposta em &lt;5min"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-white/35 font-medium">
                <svg className="w-3.5 h-3.5 text-electric-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom electric line */}
      <div className="h-px w-full bg-electric-500/30" />
    </section>
  );
}
