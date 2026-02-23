"use client";

import { COMPANY, TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Card from "./ui/Card";
import Counter from "./ui/Counter";
import Badge from "./ui/Badge";

export default function SocialProof() {
  const stats = [
    { number: "50000", suffix: "+", label: "Atendimentos" },
    { number: String(COMPANY.stats.unitsBrazil), suffix: "", label: "Unidades BR" },
    { number: String(COMPANY.stats.unitsUSA), suffix: "", label: "Unidades EUA" },
    { number: "4", suffix: ".9 ★", label: "Google Reviews" },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-gray-50">
      <div className="container-main mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Mais de {COMPANY.stats.attendances} clientes confiam na A7
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre a experiência
            </p>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 md:p-6 rounded-2xl bg-white border border-gray-100"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-warning"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-4 flex-1 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.city}
                    </div>
                  </div>
                  {testimonial.verified && (
                    <Badge variant="success" className="ml-auto text-xs">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                      Verificado
                    </Badge>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
