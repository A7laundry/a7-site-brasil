import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "sjc-cidade-morumbi",
  name: "A7 Lavanderia — Cidade Morumbi",
  neighborhood: "Cidade Morumbi",
  city: "São José dos Campos",
  state: "SP",
  street: "R. Gisele Martins, 441",
  zip: "12230-000",
  lat: -23.2195,
  lng: -45.9215,
  phone: "(12) 3939-7543",
  phoneRaw: "551239397543",
  hours: "24 horas · 7 dias por semana",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  ],
  citySlug: "sao-jose-dos-campos",
  cityLabel: "São José dos Campos",
  heroImage: "https://images.unsplash.com/photo-1521656958802-453928e4e4e0?w=1400&q=80",
  heroTagline: "Cidade Morumbi · São José dos Campos",
  about: "Unidade 24 horas da A7 Lavanderia no Cidade Morumbi, São José dos Campos. Atendemos a qualquer hora do dia ou da noite, com coleta e entrega a domicílio. Ideal para quem tem rotina intensa e precisa de flexibilidade total no agendamento.",
  nearbyRefs: [
    "R. Gisele Martins, 441",
    "Próximo ao Parque Tecnológico de SJC",
    "Região Parque Industrial e arredores",
  ],
  seoTitle: "Lavanderia Cidade Morumbi São José dos Campos 24h | A7 Lavanderia",
  seoDescription: "Lavanderia 24h no Cidade Morumbi, SJC. Coleta e entrega a domicílio qualquer hora. Roupas, edredons, tênis e uniformes. Agende: (12) 3939-7543.",
  testimonials: [
    { name: "Rafael Campos", neighborhood: "Cidade Morumbi", text: "Trabalho em turno noturno e sempre tive dificuldade para encontrar lavanderia com horário compatível. A A7 funciona 24h e consigo agendar coleta mesmo de madrugada. Isso faz toda a diferença." },
    { name: "Letícia Andrade", neighborhood: "Parque Industrial", text: "Mandei edredom de casal, dois cobertores e roupas de cama. Tudo voltou em 72 horas, sem amassados, sem cheiro de mofo. Serviço de qualidade e atendimento rápido no WhatsApp." },
    { name: "Anderson Pires", neighborhood: "Cidade Morumbi", text: "A unidade 24h é um diferencial enorme. Já agendei coleta às 22h pela praticidade do WhatsApp e o motoboy foi no dia seguinte cedo. Eficiência total." },
  ],
  faq: [
    { q: "A unidade do Cidade Morumbi funciona 24 horas mesmo?", a: "Sim. Atendemos 24h, 7 dias por semana. Basta agendar pelo WhatsApp a qualquer horário." },
    { q: "Vocês atendem o Parque Industrial e Cidade Morumbi?", a: "Sim, atendemos toda a região incluindo Cidade Morumbi, Parque Industrial e adjacências com coleta e entrega a domicílio." },
    { q: "Qual o prazo de entrega?", a: "48 horas para roupas convencionais. Edredons e tapetes em até 72h. Confirmamos o prazo no agendamento." },
    { q: "Atendem empresas com turno noturno?", a: "Sim. Temos contratos mensais para uniformes com coleta em horários flexíveis, incluindo período noturno, com NF eletrônica." },
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
