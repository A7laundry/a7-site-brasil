import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, CITIES, SERVICES } from "@/lib/seo-data";
import SeoPageTemplate from "@/components/SeoPageTemplate";

interface Props {
  params: { cidade: string };
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.cidade);
  if (!city) return {};

  const title = `Lavanderia em ${city.nome} — Coleta e Entrega Grátis | A7 Lavanderia`;
  const description = `A melhor lavanderia em ${city.nome}, ${city.estado}. Coleta e entrega grátis na sua casa. Edredons, tapetes, tênis, roupas. Agende em minutos pelo WhatsApp.`;

  return {
    title,
    description,
    alternates: { canonical: `https://a7lavanderia.com/lavanderia/${city.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default function LavanderiaByCity({ params }: Props) {
  const city = getCityBySlug(params.cidade);
  if (!city) notFound();

  const baseUrl = "https://a7lavanderia.com";
  const canonical = `${baseUrl}/lavanderia/${city.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "A7 Lavanderia",
    description: `Lavanderia profissional em ${city.nome} com coleta e entrega grátis.`,
    url: canonical,
    telephone: "+55-12-97412-8390",
    areaServed: { "@type": "City", name: city.nome },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.nome,
      addressRegion: city.estado,
      addressCountry: "BR",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Lavanderia",
      itemListElement: SERVICES.slice(0, 5).map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.nomeComposto },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Tem lavanderia com coleta e entrega em ${city.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sim. A A7 Lavanderia atende ${city.nome} e toda a região do ${city.regiao}. A coleta e entrega são gratuitas. Agende pelo WhatsApp em minutos.`,
        },
      },
      {
        "@type": "Question",
        name: `Quanto custa a lavanderia em ${city.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Os preços variam por serviço. Edredom a partir de R$39,90, tapete a partir de R$25/m², tênis a partir de R$29,90 o par. A coleta e entrega são sempre gratuitas em ${city.nome}.`,
        },
      },
      {
        "@type": "Question",
        name: `Qual o prazo de entrega em ${city.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `O prazo padrão é 48 horas após a coleta. Para serviços de roupa social e itens menores, oferecemos prazo de 24h.`,
        },
      },
    ],
  };

  const waMsg = `Olá! Preciso de lavanderia em ${city.nome}. Podem me ajudar?`;

  const depoimentosCidade = [
    { nome: "Fernanda R.", texto: `Conheci a A7 aqui em ${city.nome} e virei cliente fiel. Qualidade impecável.`, cidade: city.nome },
    { nome: "Marcos T.", texto: "Agendei pelo WhatsApp à noite e no dia seguinte já buscaram. Prático demais.", cidade: city.nome },
    { nome: "Lívia C.", texto: "Edredom e tapetes impecáveis. Coleta e entrega no horário combinado.", cidade: city.nome },
  ];

  return (
    <SeoPageTemplate
      title={`Lavanderia em ${city.nome} — Coleta e Entrega Grátis`}
      description={`A melhor lavanderia em ${city.nome}. Coleta grátis, 48h, 4.9 no Google.`}
      canonical={canonical}
      schema={[localBusinessSchema, faqSchema]}
      heroTag={`Lavanderia em ${city.nome}, ${city.estado}`}
      heroH1={`Lavanderia em ${city.nome} com Coleta e Entrega Grátis`}
      heroSubtitle={`Atendemos ${city.nome} e toda a região do ${city.regiao}. Você agenda, a gente busca e entrega em 48h.`}
      heroCta={`Agendar coleta em ${city.nome}`}
      heroWhatsApp={waMsg}
      introText={`A A7 Lavanderia atende ${city.nome} com coleta e entrega gratuita no endereço que você preferir. Roupas, edredons, tapetes, sofás, tênis e muito mais — tudo lavado com qualidade profissional e devolvido no prazo. Com ${city.populacao} de habitantes, ${city.nome} merece uma lavanderia à altura.`}
      beneficios={[
        `Coleta grátis em ${city.nome} e região`,
        "Entrega em 48h no endereço combinado",
        "4.9 estrelas no Google — mais de 200 avaliações",
        "Equipamentos industriais que não danificam suas peças",
        "Atendimento via WhatsApp 7 dias por semana",
        `Atendemos todos os bairros de ${city.nome}: ${city.bairros.slice(0, 3).join(", ")} e mais`,
      ]}
      processo={[
        { step: `Você manda mensagem pelo WhatsApp informando o que precisa lavar em ${city.nome}` },
        { step: "Enviamos a tabela de preços e confirmamos o agendamento da coleta" },
        { step: `Nossa equipe busca os itens no seu endereço em ${city.nome}` },
        { step: "Lavagem profissional com equipamentos industriais e produtos certificados" },
        { step: "Devolvemos em 48h — limpo, embalado, no seu endereço" },
      ]}
      depoimentos={depoimentosCidade}
      faq={[
        { pergunta: `Vocês atendem qual área de ${city.nome}?`, resposta: `Atendemos toda ${city.nome} incluindo ${city.bairros.join(", ")} e demais bairros. Em dúvida, mande sua localização pelo WhatsApp.` },
        { pergunta: `Quanto custa a coleta em ${city.nome}?`, resposta: `A coleta e entrega são sempre gratuitas em ${city.nome}, independente do serviço ou quantidade de peças.` },
        { pergunta: `Qual o prazo de entrega em ${city.nome}?`, resposta: "O prazo padrão é 48 horas após a coleta. Para roupas sociais e itens urgentes, oferecemos prazo de 24h." },
        { pergunta: `Vocês atendem finais de semana em ${city.nome}?`, resposta: "Sim. Agendamentos pelo WhatsApp são aceitos 7 dias por semana. Coletas e entregas acontecem de segunda a sábado." },
        { pergunta: "Qual o valor mínimo de pedido?", resposta: "Não existe valor mínimo. Você pode enviar desde uma peça até um volume grande — o atendimento é o mesmo." },
      ]}
      ctaTitle={`Pronto para ter sua roupa impecável em ${city.nome}?`}
      ctaDesc="Agende agora pelo WhatsApp. Em menos de 2 minutos está feito."
      ctaButton={`Agendar coleta em ${city.nome}`}
      ctaWhatsApp={waMsg}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Lavanderia por Cidade", href: "/" },
        { label: `Lavanderia em ${city.nome}`, href: `/lavanderia/${city.slug}` },
      ]}
    />
  );
}
