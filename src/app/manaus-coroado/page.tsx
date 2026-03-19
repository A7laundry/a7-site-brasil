import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "manaus-coroado",
  name: "A7 Lavanderia — Coroado",
  neighborhood: "Coroado",
  city: "Manaus",
  state: "AM",
  street: "Av. Rodrigo Otávio, 20b",
  zip: "69080-000",
  lat: -3.0812,
  lng: -59.9872,
  phone: "(92) 98115-4947",
  phoneRaw: "5592981154947",
  hours: "24 horas · 7 dias por semana",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  ],
  citySlug: "manaus",
  cityLabel: "Manaus",
  heroImage: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1400&q=80",
  heroTagline: "Coroado · Manaus",
  about: "A7 Lavanderia no Coroado, Manaus. Funcionamos 24 horas por dia, 7 dias por semana, com coleta e entrega a domicílio. No clima úmido e quente de Manaus, cuidamos das suas roupas com processos que combatem mofo, fungos e odores causados pela umidade amazônica.",
  nearbyRefs: [
    "Av. Rodrigo Otávio, 20b",
    "Próximo ao INPA e UEA",
    "Região Coroado e Flores",
  ],
  seoTitle: "Lavanderia Coroado Manaus 24h | A7 Lavanderia",
  seoDescription: "Lavanderia 24h no Coroado, Manaus. Coleta e entrega a domicílio. Combate mofo e fungos do clima amazônico. Roupas e edredons. Agende: (92) 98115-4947.",
  testimonials: [
    { name: "Aline Batista", neighborhood: "Coroado", text: "Em Manaus a umidade estraga tudo. A A7 cuida das roupas de um jeito que a máquina de casa não consegue — sem cheiro de mofo, sem mancha de fungos. Uso toda semana e indico para todo mundo." },
    { name: "Thiago Amazonas", neighborhood: "Flores", text: "Funcionando 24h é perfeito para quem tem rotina intensa. Agendar às 23h pelo WhatsApp e ter a roupa de volta no dia seguinte é uma comodidade que não existe igual em Manaus." },
    { name: "Rafaela Monteiro", neighborhood: "Coroado", text: "Minha filha tem rinite e as roupas lavadas na A7 fazem diferença. Processo de lavagem de alta temperatura elimina ácaros e fungos. Desde que comecei a usar, as crises diminuíram muito." },
  ],
  faq: [
    { q: "Vocês atendem o Coroado e Flores em Manaus?", a: "Sim, atendemos o Coroado, Flores e toda a zona leste de Manaus com coleta e entrega a domicílio, 24h por dia." },
    { q: "Como o clima de Manaus afeta as roupas?", a: "A umidade e o calor da Amazônia favorecem o crescimento de mofo e fungos em roupas armazenadas. Nosso processo de lavagem em alta temperatura elimina esses organismos." },
    { q: "Qual o prazo de entrega em Manaus?", a: "48 horas para roupas do dia a dia. Edredons e tapetes em até 72h. Prazo confirmado no agendamento." },
    { q: "Atendem empresas no Coroado?", a: "Sim. Contratos mensais para uniformes corporativos com NF eletrônica e coleta programada para empresas da região." },
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
