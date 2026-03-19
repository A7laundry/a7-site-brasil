import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "sjc-urbanova",
  name: "A7 Lavanderia — Urbanova",
  neighborhood: "Urbanova",
  city: "São José dos Campos",
  state: "SP",
  street: "Av. Shishima Hifumi, 2.200",
  zip: "12244-000",
  lat: -23.2398,
  lng: -45.9318,
  phone: "(12) 3346-6490",
  phoneRaw: "551233466490",
  hours: "Seg–Sex 08h–18h · Sáb 08h–13h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
  citySlug: "sao-jose-dos-campos",
  cityLabel: "São José dos Campos",
  heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80",
  heroTagline: "Urbanova · São José dos Campos",
  about: "Unidade A7 Lavanderia localizada no coração do Urbanova, em São José dos Campos. Atendemos os condomínios, residências e empresas da região com coleta e entrega a domicílio. Ideal para moradores da Av. Shishima Hifumi e arredores.",
  nearbyRefs: [
    "Av. Shishima Hifumi, 2.200",
    "Próximo ao Parque Vicentina Aranha",
    "Região Bosque dos Eucaliptos e Urbanova",
  ],
  seoTitle: "Lavanderia Urbanova São José dos Campos | A7 Lavanderia",
  seoDescription: "Lavanderia no Urbanova, SJC. Coleta e entrega a domicílio em condomínios. Roupas, edredons, tênis e uniformes. Agende pelo WhatsApp: (12) 3346-6490.",
  testimonials: [
    { name: "Beatriz Souza", neighborhood: "Urbanova", text: "Moro em condomínio fechado e a A7 é perfeita. O motoboy combina horário pelo WhatsApp, retira na portaria e entrega tudo dobrado e perfumado. Nunca mais precisei me preocupar com lavanderia." },
    { name: "Caio Henrique", neighborhood: "Bosque dos Eucaliptos", text: "Mandei minha edredom king e meu cobertor de casal. Voltaram em 48 horas cheirosos e bem secos. O preço é justo para a qualidade que entregam. Recomendo demais." },
    { name: "Mariana Vasconcelos", neighborhood: "Urbanova", text: "Excelente atendimento. Encomendei lavagem de uniformes corporativos para minha equipe e a A7 cumpriu o prazo, emitiu NF e ainda fez a coleta na empresa. Parceria certa." },
  ],
  faq: [
    { q: "Vocês atendem o Urbanova e Bosque dos Eucaliptos?", a: "Sim, atendemos toda a região norte de SJC, incluindo Urbanova, Bosque dos Eucaliptos e condomínios do entorno, com coleta e entrega a domicílio." },
    { q: "Como agendar a coleta em condomínio fechado?", a: "Pelo WhatsApp. Informamos ao motoboy o nome do morador e a portaria combina a retirada sem necessidade de acesso." },
    { q: "Qual o prazo para roupas do dia a dia?", a: "48 horas para roupas convencionais. Edredons e peças especiais em até 72h, confirmado no agendamento." },
    { q: "Atendem empresas no Urbanova?", a: "Sim. Oferecemos contrato mensal para uniformes, com NF eletrônica e coleta programada para empresas da região." },
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
