import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "taubate-esplanada",
  name: "A7 Lavanderia — Esplanada",
  neighborhood: "Esplanada",
  city: "Taubaté",
  state: "SP",
  street: "Av. Haroldo Mattos, 817",
  zip: "12060-000",
  lat: -23.0195,
  lng: -45.5572,
  phone: "(12) 98177-8142",
  phoneRaw: "5512981778142",
  hours: "Seg–Sex 08h–18h · Sáb 08h–13h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
  citySlug: "taubate",
  cityLabel: "Taubaté",
  heroImage: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=1400&q=80",
  heroTagline: "Esplanada · Taubaté",
  about: "A7 Lavanderia na Esplanada, em Taubaté, atendendo residências e empresas da região com coleta e entrega a domicílio. Qualidade profissional para roupas do dia a dia, edredons, tapetes e uniformes corporativos no Vale do Paraíba.",
  nearbyRefs: [
    "Av. Haroldo Mattos, 817",
    "Próximo ao Esplanada Shopping",
    "Região Centro de Taubaté e arredores",
  ],
  seoTitle: "Lavanderia Esplanada Taubaté | A7 Lavanderia",
  seoDescription: "Lavanderia na Esplanada, Taubaté. Coleta e entrega a domicílio. Roupas, edredons, tênis e uniformes. Agende pelo WhatsApp: (12) 98177-8142.",
  testimonials: [
    { name: "Renata Souza", neighborhood: "Esplanada", text: "A melhor lavanderia de Taubaté sem dúvida. Uso a A7 há mais de um ano e a qualidade é sempre impecável. Roupas chegam dobradas, cheirosas e no prazo combinado. Muito satisfeita." },
    { name: "Jorge Henrique", neighborhood: "Centro", text: "Mandei uniformes da minha empresa e fiquei surpreso com a qualidade. Todas as peças voltaram sem manchas, com as cores preservadas. Vou fechar contrato mensal com certeza." },
    { name: "Lúcia Antunes", neighborhood: "Esplanada", text: "Tenho alergia a produtos químicos fortes e a A7 usa produtos suaves. Minha roupa chega limpa, perfumada sem exagero e minha pele não reage. Serviço de excelência em Taubaté." },
  ],
  faq: [
    { q: "Vocês atendem a Esplanada e o Centro de Taubaté?", a: "Sim, atendemos a Esplanada, Centro e toda a região urbana de Taubaté com coleta e entrega a domicílio." },
    { q: "Como agendar em Taubaté?", a: "Pelo WhatsApp. Informe seu endereço, as peças e o horário preferido para coleta. Confirmamos e o motoboy vai até você." },
    { q: "Atendem empresas em Taubaté?", a: "Sim. Temos contratos mensais para uniformes corporativos com NF eletrônica, coleta programada e relatório de peças." },
    { q: "Qual o prazo de entrega?", a: "48 horas para roupas do dia a dia. Edredons e tapetes em até 72h. Prazo confirmado no agendamento." },
  ],
};

export const metadata: Metadata = {
  title: unit.seoTitle,
  description: unit.seoDescription,
  alternates: { canonical: `https://a7lavanderia.com/${unit.slug}` },
  openGraph: { title: unit.seoTitle, description: unit.seoDescription, url: `https://a7lavanderia.com/${unit.slug}` },
};

export default function Page() {
  return <UnitPage unit={unit} />;
}
