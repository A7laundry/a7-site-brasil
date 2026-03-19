import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "jacarei-vila-branca",
  name: "A7 Lavanderia — Vila Branca",
  neighborhood: "Vila Branca",
  city: "Jacareí",
  state: "SP",
  street: "Av. Almeida Junior, 112",
  zip: "12308-000",
  lat: -23.3085,
  lng: -45.9658,
  phone: "(12) 3958-5006",
  phoneRaw: "551239585006",
  hours: "Seg–Sex 09h–18h · Sáb 09h–13h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  citySlug: "jacarei",
  cityLabel: "Jacareí",
  heroImage: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1400&q=80",
  heroTagline: "Vila Branca · Jacareí",
  about: "Unidade A7 Lavanderia na Vila Branca, em Jacareí. Atendemos residências, condomínios e empresas do bairro e da região com coleta e entrega a domicílio. Qualidade profissional com a comodidade de não precisar sair de casa.",
  nearbyRefs: [
    "Av. Almeida Junior, 112",
    "Próximo ao Centro de Jacareí",
    "Região Jardim Santa Maria e arredores",
  ],
  seoTitle: "Lavanderia Vila Branca Jacareí | A7 Lavanderia",
  seoDescription: "Lavanderia na Vila Branca, Jacareí. Coleta e entrega a domicílio. Roupas, edredons, tênis e uniformes. Agende pelo WhatsApp: (12) 3958-5006.",
  testimonials: [
    { name: "Daniela Ferreira", neighborhood: "Vila Branca", text: "A A7 resolveu minha vida. Moro na Vila Branca e eles passam aqui na porta. Roupas chegam dobradas, sem um amasso, e sempre cheirosas. Nunca mais lavei roupa em casa." },
    { name: "Marcos Oliveira", neighborhood: "Jardim Santa Maria", text: "Mandei edredons e fronhas de casal que estavam guardados há meses. Voltaram impecáveis, sem cheiro de armário, macios. O atendimento no WhatsApp é rápido e muito educado." },
    { name: "Ana Paula Mendes", neighborhood: "Vila Branca", text: "Uso para uniforme do meu filho e para as roupas da casa. Prazo é sempre cumprido, qualidade é ótima. Já indiquei para várias vizinhas e todas adoraram." },
  ],
  faq: [
    { q: "Vocês atendem a Vila Branca e Jardim Santa Maria em Jacareí?", a: "Sim, atendemos a Vila Branca, Jardim Santa Maria e toda a região de Jacareí com coleta e entrega a domicílio." },
    { q: "Como funciona o agendamento?", a: "Pelo WhatsApp. Informe seu endereço, as peças que deseja enviar e o horário preferido para coleta. Confirmamos tudo na hora." },
    { q: "Qual o prazo de entrega?", a: "48 horas para roupas do dia a dia. Edredons e tapetes em até 72h, confirmado no agendamento." },
    { q: "Atendem uniformes escolares?", a: "Sim. Lavamos uniformes escolares com cuidado especial para manter as cores e o tecido. Aceitos avulsos ou em pacotes regulares." },
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
