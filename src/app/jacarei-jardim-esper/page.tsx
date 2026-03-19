import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "jacarei-jardim-esper",
  name: "A7 Lavanderia — Jardim Esper",
  neighborhood: "Jardim Esper",
  city: "Jacareí",
  state: "SP",
  street: "Av. Siqueira Campos, 380",
  zip: "12306-000",
  lat: -23.2998,
  lng: -45.9712,
  phone: "(12) 97412-8390",
  phoneRaw: "5512974128390",
  hours: "Seg–Sex 09h–18h · Sáb 08h–13h",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
  citySlug: "jacarei",
  cityLabel: "Jacareí",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  heroTagline: "Jardim Esper · Jacareí",
  about: "A7 Lavanderia no Jardim Esper, em Jacareí. Segunda unidade da cidade para atender com mais agilidade os moradores da região norte. Coleta e entrega a domicílio para residências, condomínios e empresas, com atendimento pelo WhatsApp.",
  nearbyRefs: [
    "Av. Siqueira Campos, 380",
    "Próximo ao Jardim das Indústrias",
    "Região Jardim Esper e Jardim Paraíba",
  ],
  seoTitle: "Lavanderia Jardim Esper Jacareí | A7 Lavanderia",
  seoDescription: "Lavanderia no Jardim Esper, Jacareí. Coleta e entrega a domicílio. Roupas, edredons, tênis e uniformes. Agende pelo WhatsApp: (12) 97412-8390.",
  testimonials: [
    { name: "Roberto Nascimento", neighborhood: "Jardim Esper", text: "Excelente serviço. Agendo pelo WhatsApp, o motoboy chega no horário e devolve tudo impecável. Roupas dobradas, sem amasso, cheirosas. Uso toda semana e nunca decepcionou." },
    { name: "Silvia Cardoso", neighborhood: "Jardim Paraíba", text: "Mandei peças delicadas que eu tinha medo de estragar na máquina. Voltaram perfeitas. A equipe cuida muito bem das roupas e o atendimento é super atencioso. Recomendo." },
    { name: "Fernando Costa", neighborhood: "Jardim Esper", text: "Uso a A7 para as roupas da minha família há mais de um ano. Qualidade constante, prazo sempre cumprido e preço justo. Já indiquei para todos os conhecidos no Jardim Esper." },
  ],
  faq: [
    { q: "Vocês atendem o Jardim Esper e Jardim Paraíba em Jacareí?", a: "Sim, atendemos o Jardim Esper, Jardim Paraíba e toda a região norte de Jacareí com coleta e entrega a domicílio." },
    { q: "Como faço o agendamento?", a: "Pelo WhatsApp. Informe seu endereço, as peças e o horário preferido. Confirmamos na hora e o motoboy vai até você." },
    { q: "Vocês atendem peças delicadas como seda e linho?", a: "Sim. Tratamos peças delicadas com produtos e processos específicos para cada tipo de tecido." },
    { q: "Qual o prazo para roupas do dia a dia?", a: "48 horas para roupas convencionais. Peças especiais e edredons em até 72h, confirmado no agendamento." },
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
