"use client";

import { motion } from "framer-motion";

// ─── VERSION B — CLEAN LUXURY ─────────────────────────────────────────────────
// White background. Large numbered editorial cards. Pain before solution.

const PAINS = [
  {
    n: "01",
    title: "A pilha de roupa que nunca acaba.",
    body: "Você lava, dobra, guarda — e no dia seguinte está tudo de volta. Um ciclo que drena seu tempo e sua energia semana após semana.",
    stat: "6h+",
    statLabel: "por semana em lavagem doméstica",
  },
  {
    n: "02",
    title: "A mancha que não sai. A peça que nunca mais voltou.",
    body: "Vinho. Óleo. Suor. Ferrugem. Cada erro na lavagem custa dinheiro e destrói peças que você ama.",
    stat: "R$200+",
    statLabel: "perdidos por peça danificada",
  },
  {
    n: "03",
    title: "Edredom, tapete, sofá — ninguém cuida disso em casa.",
    body: "Esses itens acumulam ácaros, fungos e bactérias por meses. Lavar em casa não resolve. Precisam de tratamento industrial.",
    stat: "10M",
    statLabel: "ácaros num colchão não higienizado",
  },
  {
    n: "04",
    title: "Seu tempo vale mais do que isso.",
    body: "Enquanto você lava roupa, o que mais poderia estar fazendo? Trabalho, família, descanso, saúde. A lavanderia devolve isso a você.",
    stat: "312h",
    statLabel: "por ano que você pode recuperar",
  },
];

export default function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <p className="text-xs font-bold text-electric-500 uppercase tracking-[0.16em] mb-4">O problema</p>
          <h2
            className="font-black leading-[0.92] tracking-[-0.03em] text-ink-900"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Sua rotina não deveria incluir isso.
          </h2>
        </motion.div>

        {/* Pain cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper-300">
          {PAINS.map((pain, i) => (
            <motion.div
              key={pain.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 group hover:bg-paper-100 transition-colors duration-300"
            >
              {/* Big number */}
              <span className="block text-[5rem] font-black leading-none tracking-[-0.06em] text-paper-300 group-hover:text-electric-50 transition-colors duration-300 mb-4 select-none">
                {pain.n}
              </span>
              <h3 className="text-xl font-bold text-ink-900 leading-tight mb-3">{pain.title}</h3>
              <p className="text-ink-400 leading-relaxed text-sm mb-6">{pain.body}</p>
              {/* Stat */}
              <div className="inline-flex items-baseline gap-2 bg-ink-900 text-white px-4 py-2">
                <span className="font-black text-lg tracking-tight text-electric-300">{pain.stat}</span>
                <span className="text-xs text-white/50">{pain.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-paper-300 pt-10"
        >
          <p className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight max-w-lg leading-tight">
            E se alguém cuidasse de{" "}
            <span className="text-electric-500">tudo isso</span> por você?
          </p>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 text-electric-500 hover:text-electric-700 font-bold text-sm tracking-wide group transition-colors duration-200 whitespace-nowrap"
          >
            Ver como funciona
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
