"use client";

import { PLANS, getWhatsAppLink } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

export default function Pricing() {
  return (
    <section id="planos" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="warning" className="mb-4">
              Primeiro mês com 20% OFF
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Planos que cabem na sua rotina
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Transparência total. Sem taxas escondidas, sem surpresas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.15}>
              <div
                className={`relative h-full flex flex-col rounded-2xl border-2 p-6 md:p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-accent bg-accent-50/30 shadow-xl shadow-accent/10 scale-[1.02] md:scale-105 animate-glow-pulse"
                    : "border-gray-100 bg-white hover:border-accent/30 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="accent" className="shadow-md">
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price !== "Sob consulta" ? (
                      <>
                        <span className="text-sm text-gray-400">R$</span>
                        <span className="text-4xl md:text-5xl font-bold text-primary">
                          {plan.price}
                        </span>
                        <span className="text-gray-400">{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-primary">
                        Sob consulta
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-success shrink-0 mt-0.5"
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
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  href={
                    plan.id === "empresarial"
                      ? getWhatsAppLink("empresarial")
                      : getWhatsAppLink("planos")
                  }
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-sm text-gray-400 mt-8">
            Todos os planos incluem coleta e entrega grátis. Cancele a qualquer momento.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
