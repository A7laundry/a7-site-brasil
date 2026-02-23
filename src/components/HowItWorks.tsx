"use client";

import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const stepIcons: Record<string, JSX.Element> = {
  phone: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  package: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container-main mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              4 passos. <span className="text-gradient">Zero esforço.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Do agendamento à entrega, tudo pensado para facilitar sua vida
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.15}>
              <div className="flex gap-4 md:gap-6 mb-8 last:mb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                    {stepIcons[step.icon]}
                  </div>
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="w-0.5 h-full bg-accent/20 mt-2 min-h-[2rem]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      Passo {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
