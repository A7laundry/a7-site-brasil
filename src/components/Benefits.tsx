"use client";

import { BENEFITS } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Card from "./ui/Card";
import Counter from "./ui/Counter";

export default function Benefits() {
  return (
    <section className="section-padding bg-gradient-to-b from-accent-50 to-white">
      <div className="container-main mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              O que muda na sua vida com a A7
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Números reais de quem já transformou sua rotina
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {BENEFITS.map((benefit, index) => (
            <ScrollReveal key={benefit.label} delay={index * 0.1}>
              <Card className="text-center group">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-gradient">
                    <Counter
                      end={benefit.number}
                      suffix={benefit.suffix}
                    />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {benefit.label}
                </h3>
                <p className="text-sm text-gray-500">
                  {benefit.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
