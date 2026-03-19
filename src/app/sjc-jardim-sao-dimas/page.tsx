import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "sjc-jardim-sao-dimas",
  name: "A7 Lavanderia — Jardim São Dimas",
  neighborhood: "Jardim São Dimas",
  city: "São José dos Campos",
  state: "SP",
  street: "Av. Nove de Julho, 242",
  zip: "12216-000",
  lat: -23.1912,
  lng: -45.8802,
  phone: "(12) 98844-0266",
  phoneRaw: "5512988440266",
  hours: "Seg–Sex 09h–18h · Sáb 09h–13h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  citySlug: "sao-jose-dos-campos",
  cityLabel: "São José dos Campos",
  heroImage: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1400&q=80",
  heroTagline: "Jardim São Dimas · São José dos Campos",
  about: "A7 Lavanderia no Jardim São Dimas, região central de São José dos Campos. Coleta e entrega a domicílio para residências, apartamentos e empresas da região. Praticidade e qualidade para o dia a dia de quem mora no centro de SJC.",
  nearbyRefs: [
    "Av. Nove de Julho, 242",
    "Próximo ao Centro de SJC",
    "Região Vila Adyana e arredores",
  ],
  seoTitle: "Lavanderia Jardim São Dimas São José dos Campos | A7 Lavanderia",
  seoDescription: "Lavanderia no Jardim São Dimas, SJC. Coleta e entrega a domicílio. Roupas, edredons, tênis e uniformes. Agende pelo WhatsApp: (12) 98844-0266.",
  testimonials: [
    { name: "Tatiana Moura", neighborhood: "Jardim São Dimas", text: "Uso a A7 toda semana. O aplicativo de agendamento pelo WhatsApp é simples e eles sempre cumprem o horário combinado. Roupa limpa, passada e cheirosa em 48 horas. Não abro mão mais." },
    { name: "Fábio Rezende", neighborhood: "Vila Adyana", text: "Trouxe tapetes pesados que não caberiam na máquina de casa. Foram lavados e entregues em perfeitas condições, mais limpos do que esperava. Atendimento nota 10." },
    { name: "Cristiane Barbosa", neighborhood: "Jardim São Dimas", text: "Trabalho home office e não tenho tempo para lavanderia. A A7 resolve tudo. Mando uma mensagem no WhatsApp na segunda de manhã e na quarta a roupa já está de volta. Simplesmente perfeito." },
  ],
  faq: [
    { q: "Vocês atendem o Jardim São Dimas e Vila Adyana?", a: "Sim, atendemos o Jardim São Dimas, Vila Adyana e toda a região central de SJC com coleta e entrega a domicílio." },
    { q: "Como agendar a coleta?", a: "Pelo WhatsApp. Informe endereço, peças e horário preferido. Confirmamos o agendamento e o motoboy chega no horário combinado." },
    { q: "Vocês lavam tapetes?", a: "Sim. Tapetes de todos os tamanhos, incluindo persas e sintéticos. O prazo pode variar de 48 a 72h dependendo do tamanho." },
    { q: "Atendem apartamentos?", a: "Sim. Atendemos apartamentos, casas e escritórios. O motoboy combina o ponto de coleta conforme sua preferência." },
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
