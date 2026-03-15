import type { Metadata } from "next";
import SeoPageTemplate from "@/components/SeoPageTemplate";

export const metadata: Metadata = {
  title: "Lavanderia de Terno em São José dos Campos | A7 Lavanderia",
  description:
    "Limpeza profissional de ternos, blazers e tailleur. Coleta e entrega no Vale do Paraíba. Processo específico que preserva estrutura e caimento.",
  alternates: { canonical: "https://a7lavanderia.com.br/lavanderia-de-terno" },
  openGraph: {
    title: "Lavanderia de Terno | A7 Lavanderia",
    description:
      "Terno lavado com processo especializado que preserva estrutura, entretela e forro. Coleta grátis no Vale do Paraíba.",
    type: "website",
    locale: "pt_BR",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lavanderia de Terno",
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
    "Higienização profissional de ternos e blazers com processo específico para estrutura, entretela e forro.",
  areaServed: "Vale do Paraíba, SP",
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: "45",
    description: "Conjunto terno (paletó + calça) a partir de R$45",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto custa lavar um terno na A7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O conjunto completo (paletó + calça) começa em R$45. Ternos de lã super 100s, seda ou com forro especial têm orçamento individual. A coleta e entrega são gratuitas.",
      },
    },
    {
      "@type": "Question",
      name: "Lavam terno de lã?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, com processo específico. Identificamos o tipo de lã e aplicamos temperatura adequada. Usamos manequim a vapor para preservar o caimento.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o prazo para lavar terno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "72 horas após a coleta. Para ternos simples sem tratamento especial, 48h.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês entregam embalado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Ternos são entregues em capa protetora individual, prontos para ir ao armário ou direto para o evento.",
      },
    },
  ],
};

export default function LavanderiaDeTermoPage() {
  const waMsg = "Olá! Preciso lavar um terno. Podem me ajudar?";

  return (
    <SeoPageTemplate
      title="Lavanderia de Terno — Processo Especializado"
      description="Terno higienizado com processo que preserva estrutura, entretela e forro. Coleta grátis."
      canonical="https://a7lavanderia.com.br/lavanderia-de-terno"
      schema={[serviceSchema, faqSchema]}
      heroTag="Lavanderia de Terno"
      heroH1="Lavanderia de Terno com Coleta e Entrega Grátis"
      heroSubtitle="Processo especializado que preserva o caimento, a entretela e o forro. Ternos de lã, microfibra, linho e tecidos mistos. Coleta no Vale do Paraíba."
      heroCta="Agendar lavagem de terno"
      heroWhatsApp={waMsg}
      introText="Terno não é roupa comum. A estrutura de um paletó depende de entretela colada ou costurada, forro interno e tecido externo com comportamentos diferentes na umidade. Lavar no ciclo errado — temperatura errada, centrifugação — pode deformar a entretela de forma irreversível. A A7 trata cada terno com processo específico para preservar o investimento."
      beneficios={[
        "Processo específico por tipo de tecido (lã, microfibra, linho)",
        "Manequim a vapor para preservar caimento do paletó",
        "Vinco marcado com precisão profissional na calça",
        "Entrega em capa protetora individual",
        "Coleta e entrega grátis no Vale do Paraíba",
        "Forro tratado separadamente do tecido externo",
      ]}
      processo={[
        { step: "Mande foto pelo WhatsApp com o tipo de terno e condição da peça" },
        { step: "Confirmamos o processo adequado e agendamos a coleta no seu endereço" },
        { step: "Avaliamos entretela, forro e tecido externo individualmente" },
        { step: "Lavagem com temperatura e produto específicos para cada componente" },
        { step: "Passadoria em manequim a vapor + vinco na calça" },
        { step: "Entrega em capa protetora em até 72h" },
      ]}
      depoimentos={[
        { nome: "Rafael M.", texto: "Terno de noivado de 3 anos. Voltou impecável, com o caimento original. Recomendo.", cidade: "São José dos Campos" },
        { nome: "Carla O.", texto: "Tailleur da minha mãe que guardava há anos. Voltou sem marca, sem cheiro, perfeito.", cidade: "Taubaté" },
        { nome: "Bruno S.", texto: "Trabalho com vendas e uso terno todo dia. Pacote semanal com a A7 resolveu minha vida.", cidade: "Jacareí" },
      ]}
      faq={[
        { pergunta: "Lavam blazer separado do conjunto?", resposta: "Sim. Blazers, paletós e jaquetas sociais são aceitos separados. O processo é o mesmo do paletó do terno." },
        { pergunta: "E terno de linho?", resposta: "Linho tem comportamento diferente. Lavamos com temperatura controlada e passamos com vapor intenso para recuperar o visual natural do linho." },
        { pergunta: "Quanto custa lavar blazer?", resposta: "A partir de R$30. Com calça ou saia do conjunto, o par tem desconto em relação às peças separadas." },
        { pergunta: "Tempo mínimo de agendamento?", resposta: "Sem mínimo. Você pode agendar para hoje com coleta amanhã, dependendo da disponibilidade." },
      ]}
      ctaTitle="Seu terno merece o processo correto"
      ctaDesc="Coleta grátis no Vale do Paraíba. Entrega em capa protetora em 72h."
      ctaButton="Agendar lavagem de terno"
      ctaWhatsApp={waMsg}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Serviços", href: "/" },
        { label: "Lavanderia de Terno", href: "/lavanderia-de-terno" },
      ]}
    />
  );
}
