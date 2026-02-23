"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

export default function Transformation() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-gray-900 via-primary to-accent-50 overflow-hidden">
      <div className="container-main mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center"
            >
              <svg
                className="w-10 h-10 text-accent-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              E se alguém cuidasse de{" "}
              <span className="text-accent-200">tudo isso</span> por você?
            </h2>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              A A7 transforma sua rotina com{" "}
              <strong className="text-white">tecnologia industrial</strong>,{" "}
              <strong className="text-white">produtos premium</strong> e{" "}
              <strong className="text-white">entrega na sua porta</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {["Sem esforço", "Sem preocupação", "Sem surpresas"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <svg
                      className="w-4 h-4 text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white/90 font-medium">{item}</span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
