import type { Metadata } from "next";
import SeoPageTemplate from "@/components/SeoPageTemplate";

export const metadata: Metadata = {
  title: "Lavanderia Express 24h São José dos Campos | A7 Lavanderia",
  description:
    "Lavanderia express com entrega em 24h no Vale do Paraíba. Ideal para viagens, eventos e urgências. Coleta e entrega grátis. Agende pelo WhatsApp.",
  alternates: { canonical: "https://a7lavanderia.com.br/lavanderia-express" },
  openGraph: {
    title: "Lavanderia Express 24h | A7 Lavanderia",
    description:
      "Roupas lavadas e entregues em 24h. Para viagens, eventos e emergências no Vale do Paraíba.",
    type: "website",
    locale: "pt_BR",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lavanderia Express 24h",
  provider: {
    "@type": "LocalBusiness",
    name: "A7 Lavanderia",
    telephone: "+55-12-97412-8390",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São José dos Campos",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  description:
    "Lavagem e entrega express em 24h para roupas e peças com urgência.",
  areaServed: "Vale do Paraíba, SP",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual é o prazo da lavanderia express?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O prazo express é de 24 horas após a coleta. Para agendamentos feitos até as 10h, a entrega pode acontecer no mesmo dia após as 18h (sujeito à disponibilidade).",
      },
    },
    {
      "@type": "Question",
      name: "O serviço express tem custo adicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O serviço express tem acréscimo de 30% sobre o preço padrão. A coleta e entrega continuam gratuitas.",
      },
    },
    {
      "@type": "Question",
      name: "Qualquer peça entra no express?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roupas comuns, camisas sociais, calças e peças de uso diário entram no express. Edredons, tapetes e itens que exigem secagem industrial longa não são compatíveis com o prazo de 24h.",
      },
    },
    {
      "@type": "Question",
      name: "O express funciona para viagem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. É o cenário mais comum: cliente viaja, precisa de roupa limpa para o dia seguinte. Agende com antecedência mínima de 12h.",
      },
    },
  ],
};

export default function LavanderiaExpressPage() {
  const waMsg = "Olá! Preciso de lavanderia express — entrega em 24h. Podem me ajudar?";

  return (
    <SeoPageTemplate
      title="Lavanderia Express — Entrega em 24h"
      description="Roupas lavadas e entregues em 24 horas. Para viagens, eventos e urgências no Vale do Paraíba."
      canonical="https://a7lavanderia.com.br/lavanderia-express"
      schema={[serviceSchema, faqSchema]}
      heroTag="Lavanderia Express"
      heroH1="Lavanderia Express: Roupas Prontas em 24 Horas"
      heroSubtitle="Para viagens de última hora, eventos e emergências. Coleta no seu endereço hoje, entrega amanhã. Vale do Paraíba."
      heroCta="Agendar express agora"
      heroWhatsApp={waMsg}
      introText="Tem um evento amanhã e a roupa está suja. Vai viajar e precisar de roupa limpa no destino. Recebeu uma visita inesperada. O serviço express da A7 foi feito para quem não pode esperar 48h. Coleta hoje, entrega amanhã — garantido."
      beneficios={[
        "Entrega garantida em 24h após a coleta",
        "Mesmo dia possível para coletas até as 10h",
        "Lavagem, secagem e passagem completas",
        "Coleta e entrega grátis no Vale do Paraíba",
        "Comunicação em tempo real pelo WhatsApp",
        "Peças embaladas individualmente na entrega",
      ]}
      processo={[
        { step: "Mande WhatsApp urgente — respondemos em até 30 min em horário comercial" },
        { step: "Confirme o que precisa lavar e o endereço de coleta" },
        { step: "Coleta no mesmo dia (disponibilidade conforme agenda)" },
        { step: "Lavagem, secagem e passagem em ciclo prioritário" },
        { step: "Entrega em 24h no endereço que você preferir" },
      ]}
      depoimentos={[
        { nome: "Juliana T.", texto: "Minha filha derramou suco na roupa do aniversário dela horas antes. A A7 fez expresso e chegou a tempo. Salvou o dia.", cidade: "São José dos Campos" },
        { nome: "André C.", texto: "Viajei e esqueci de lavar. Eles coletaram segunda às 9h e entregaram terça às 17h no hotel. Perfeito.", cidade: "Taubaté" },
        { nome: "Fernanda R.", texto: "Uso o express antes de todo evento importante. Sem surpresas, sempre pontual.", cidade: "Jacareí" },
      ]}
      faq={[
        { pergunta: "Vocês funcionam no final de semana?", resposta: "Coleta e entrega acontecem de segunda a sábado. Para pedidos express no sábado, entre em contato pelo WhatsApp para verificar disponibilidade." },
        { pergunta: "O express funciona para roupas de sair à noite?", resposta: "Sim. Camisas sociais, vestidos e ternos entram no express com passadoria incluída." },
        { pergunta: "Posso misturar express com pedido normal?", resposta: "Pode. Separe o que é urgente do que pode aguardar — cobramos o adicional express apenas sobre as peças prioritárias." },
        { pergunta: "Têm limite de peças no express?", resposta: "Não há limite formal, mas acima de 20 peças o prazo pode estender para 36h. Informe o volume ao agendar." },
      ]}
      ctaTitle="Precisa de roupa limpa amanhã?"
      ctaDesc="Mande WhatsApp agora. Coletamos hoje e entregamos em 24h."
      ctaButton="Pedir express agora"
      ctaWhatsApp={waMsg}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Serviços", href: "/" },
        { label: "Lavanderia Express", href: "/lavanderia-express" },
      ]}
    />
  );
}
