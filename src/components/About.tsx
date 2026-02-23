"use client";

import Image from "next/image";
import { COMPANY, UNSPLASH_IMAGES } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Badge from "./ui/Badge";

export default function About() {
  const credibilityItems = [
    { number: `+${COMPANY.stats.attendances}`, label: "Atendimentos realizados" },
    { number: `${COMPANY.stats.unitsBrazil}`, label: "Unidades no Brasil" },
    { number: `${COMPANY.stats.unitsUSA}`, label: "Unidades nos EUA" },
    { number: `${COMPANY.stats.googleRating}`, label: "Estrelas no Google" },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={UNSPLASH_IMAGES.about}
                  alt="Equipe A7 Lavanderia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm">
                      Brasil + EUA
                    </div>
                    <div className="text-xs text-gray-400">
                      Operação internacional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <Badge variant="accent" className="mb-4">
              Sobre a A7
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
              Por trás da A7: pessoas que amam o que fazem
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
              <p>
                A A7 Lavanderia nasceu com um propósito simples:{" "}
                <strong className="text-primary">devolver tempo e tranquilidade</strong>{" "}
                para as pessoas. Desde {COMPANY.foundingYear}, transformamos a maneira
                como milhares de famílias e empresas cuidam das suas roupas.
              </p>
              <p>
                Com{" "}
                <strong className="text-primary">
                  {COMPANY.stats.unitsBrazil} unidades no Brasil e{" "}
                  {COMPANY.stats.unitsUSA} nos Estados Unidos
                </strong>
                , investimos em tecnologia de ponta, produtos premium
                dermatologicamente testados e uma equipe treinada para oferecer
                o melhor cuidado possível.
              </p>
              <p>
                Nosso compromisso vai além da limpeza: queremos ser o parceiro
                que simplifica sua rotina, cuida do que é seu com carinho e entrega
                excelência em cada peça.
              </p>
            </div>

            {/* Credibility numbers */}
            <div className="grid grid-cols-2 gap-4">
              {credibilityItems.map((item) => (
                <div
                  key={item.label}
                  className="text-center p-3 rounded-xl bg-white border border-gray-100"
                >
                  <div className="text-xl font-bold text-gradient">
                    {item.number}
                  </div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mt-6">
              {COMPANY.certifications.map((cert) => (
                <Badge key={cert} variant="default">
                  {cert}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
