"use client";

import { useState, useEffect } from "react";
import { FEATURED_PROMOS, getFeaturedPromos } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function Pricing() {
  const [promos, setPromos] = useState<typeof FEATURED_PROMOS>([]);

  useEffect(() => {
    setPromos(getFeaturedPromos(3));
  }, []);

  if (promos.length === 0) return null;

  return (
    <section id="ofertas" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="warning" className="mb-4">
              Ofertas Especiais
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Promoções exclusivas para você
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Aproveite nossas ofertas com coleta e entrega grátis. Clique para ver os detalhes completos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {promos.map((promo, index) => (
            <ScrollReveal key={promo.id} delay={index * 0.15}>
              <a
                href={promo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div
                  className={`relative h-full flex flex-col rounded-2xl border-2 p-6 md:p-8 transition-all duration-300 ${
                    promo.highlight
                      ? "border-accent bg-accent-50/30 shadow-xl shadow-accent/10 scale-[1.02] md:scale-105 animate-glow-pulse"
                      : "border-gray-100 bg-white hover:border-accent/30 hover:shadow-lg group-hover:-translate-y-1"
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge
                      variant={promo.highlight ? "accent" : "warning"}
                      className="shadow-md"
                    >
                      {promo.badge}
                    </Badge>
                  </div>

                  <div className="text-center mb-4 mt-2">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {promo.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {promo.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    {promo.priceFrom && (
                      <span className="text-sm text-gray-400 line-through block">
                        De {promo.priceFrom}
                      </span>
                    )}
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      {promo.priceTo}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed text-center mb-6 flex-1">
                    {promo.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {["Coleta e entrega grátis", "Prazo de até 48h", "Garantia de satisfação"].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={promo.highlight ? "primary" : "secondary"}
                    size="lg"
                    className="w-full pointer-events-none"
                  >
                    {promo.cta}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Button>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors"
            >
              Ver todos os serviços disponíveis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
