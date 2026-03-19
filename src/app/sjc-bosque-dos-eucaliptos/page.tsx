import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "sjc-bosque-dos-eucaliptos",
  name: "A7 Lavanderia — Bosque dos Eucaliptos",
  neighborhood: "Bosque dos Eucaliptos",
  city: "São José dos Campos",
  state: "SP",
  street: "Av. Andrômeda, 3115",
  zip: "12233-000",
  lat: -23.2264,
  lng: -45.9022,
  phone: "(12) 3917-4807",
  phoneRaw: "551239174807",
  hours: "Seg–Sex 08h–18h · Sáb 08h–13h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
  citySlug: "sao-jose-dos-campos",
  cityLabel: "São José dos Campos",
  heroImage: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1400&q=80",
  heroTagline: "Bosque dos Eucaliptos · São José dos Campos",
  about: "Unidade da A7 Lavanderia no Bosque dos Eucaliptos, um dos bairros mais valorizados de SJC. Coleta e entrega a domicílio em toda a região. Atendemos residências, condomínios e empresas do bairro e adjacências.",
  nearbyRefs: [
    "Av. Andrômeda, 3115",
    "Próximo ao Parque Santos Dumont",
    "Região Urbanova e arredores",
  ],
  seoTitle: "Lavanderia Bosque dos Eucaliptos São José dos Campos | A7 Lavanderia",
  seoDescription: "Lavanderia no Bosque dos Eucaliptos, SJC. Coleta e entrega a domicílio. Roupas, edredons, tênis e uniformes. Agende pelo WhatsApp: (12) 3917-4807.",
  testimonials: [
    { name: "Fernanda Rocha", neighborhood: "Bosque dos Eucaliptos", text: "Uso a A7 há quase um ano e não consigo imaginar minha semana sem eles. Roupas chegam dobradas, perfumadas e sem uma ruga. O motoboy é sempre pontual e super simpático." },
    { name: "Ricardo Almeida", neighborhood: "Urbanova", text: "Mandei três edredons que estavam guardados desde o inverno passado. Voltaram como se fossem novos — macios, sem nenhum cheiro de mofo. Minha filha tem rinite e a diferença foi imediata." },
    { name: "Carla Batista", neighborhood: "Bosque dos Eucaliptos", text: "Perfeito para quem mora em condomínio. Agendo pelo WhatsApp, deixo na portaria e recebo tudo de volta em 48h impecável. Recomendo para todos os vizinhos." },
  ],
  faq: [
    { q: "Vocês atendem o Bosque dos Eucaliptos e Urbanova?", a: "Sim, atendemos o Bosque dos Eucaliptos, Urbanova e toda a região norte de SJC com coleta e entrega a domicílio." },
    { q: "Qual o prazo de entrega?", a: "48 horas para roupas do dia a dia. Edredons e tapetes até 72h. Prazo confirmado no agendamento." },
    { q: "Posso deixar as roupas na portaria do condomínio?", a: "Sim. Basta combinar com o motoboy no agendamento. Combinamos o local de coleta conforme sua preferência." },
    { q: "Atendem empresas no bairro?", a: "Sim. Uniformes corporativos com contrato mensal, NF eletrônica e coleta programada para empresas do Bosque dos Eucaliptos e Urbanova." },
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
