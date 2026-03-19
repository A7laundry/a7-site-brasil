import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "sjc-jardim-morumbi",
  name: "A7 Lavanderia — Jardim Morumbi",
  neighborhood: "Jardim Morumbi",
  city: "São José dos Campos",
  state: "SP",
  street: "Av. Benedito Bento, 717",
  zip: "12232-000",
  lat: -23.2285,
  lng: -45.8935,
  phone: "(12) 3307-5748",
  phoneRaw: "551233075748",
  hours: "Seg–Sex 08h–19h · Sáb 08h–15h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "19:00" },
    { days: ["Saturday"], opens: "08:00", closes: "15:00" },
  ],
  citySlug: "sao-jose-dos-campos",
  cityLabel: "São José dos Campos",
  heroImage: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1400&q=80",
  heroTagline: "Jardim Morumbi · São José dos Campos",
  about: "A7 Lavanderia no Jardim Morumbi, com horário estendido até as 19h nos dias úteis e atendimento aos sábados até as 15h. Coleta e entrega a domicílio para toda a região sul de SJC. Atendemos residências, condomínios e empresas com agilidade e qualidade.",
  nearbyRefs: [
    "Av. Benedito Bento, 717",
    "Próximo ao Shopping Vale Sul",
    "Região Jardim Satélite e arredores",
  ],
  seoTitle: "Lavanderia Jardim Morumbi São José dos Campos | A7 Lavanderia",
  seoDescription: "Lavanderia no Jardim Morumbi, SJC. Horário estendido até 19h. Coleta e entrega a domicílio. Roupas, edredons e uniformes. Agende: (12) 3307-5748.",
  testimonials: [
    { name: "Vanessa Lima", neighborhood: "Jardim Morumbi", text: "O horário estendido até as 19h é perfeito para quem trabalha o dia todo. Consigo agendar e ligar direto do trabalho. Roupas entregues no dia seguinte, tudo dobrado perfeitamente." },
    { name: "Gustavo Alves", neighborhood: "Jardim Satélite", text: "Sou cliente há dois anos. Mando roupa toda semana e nunca tive problema. A qualidade é consistente, o preço é justo e o atendimento é sempre simpático. Recomendo a todos os vizinhos." },
    { name: "Priscila Torres", neighborhood: "Jardim Morumbi", text: "Levei meus tênis de corrida que estavam precisando de um tratamento especial. Voltaram limpos, sem mancha e secos na perfeição. A A7 cuida de tudo com atenção." },
  ],
  faq: [
    { q: "Vocês atendem o Jardim Morumbi e Jardim Satélite?", a: "Sim, atendemos o Jardim Morumbi, Jardim Satélite e toda a região sul de SJC com coleta e entrega a domicílio." },
    { q: "Qual o horário de funcionamento?", a: "Segunda a sexta das 08h às 19h e sábados das 08h às 15h. Agendamentos pelo WhatsApp a qualquer hora." },
    { q: "Vocês lavam tênis?", a: "Sim. Lavamos tênis de corrida, casual e esportivo com processo especializado. Prazo de 48 a 72h dependendo do modelo." },
    { q: "Qual o prazo para entrega de roupas do dia a dia?", a: "48 horas para roupas convencionais. Edredons, tapetes e peças especiais em até 72h, confirmado no agendamento." },
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
