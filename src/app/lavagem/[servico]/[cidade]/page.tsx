import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getServiceBySlug, SERVICES, CITIES } from "@/lib/seo-data";
import SeoPageTemplate from "@/components/SeoPageTemplate";

interface Props {
  params: { servico: string; cidade: string };
}

// Motor 4: Combinação serviço × cidade (top 5 cidades × todos os serviços)
export async function generateStaticParams() {
  const topCities = CITIES.filter((c) => c.demanda === "alta");
  const params: { servico: string; cidade: string }[] = [];
  for (const service of SERVICES) {
    for (const city of topCities) {
      params.push({ servico: service.slug, cidade: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.servico);
  const city = getCityBySlug(params.cidade);
  if (!service || !city) return {};

  const nomeCap = service.nomeComposto.charAt(0).toUpperCase() + service.nomeComposto.slice(1);
  const title = `${nomeCap} em ${city.nome} — Coleta Grátis | A7 Lavanderia`;
  const description = `${nomeCap} profissional em ${city.nome}. ${service.descricao} Coleta e entrega grátis. A partir de R$${service.precoMin},00. Agende agora.`;

  return {
    title,
    description,
    alternates: { canonical: `https://a7lavanderia.com/lavagem/${service.slug}/${city.slug}` },
    openGraph: { title, description, type: "website", locale: "pt_BR" },
  };
}

export default function LavagemByServiceAndCity({ params }: Props) {
  const service = getServiceBySlug(params.servico);
  const city = getCityBySlug(params.cidade);
  if (!service || !city) notFound();

  const baseUrl = "https://a7lavanderia.com";
  const canonical = `${baseUrl}/lavagem/${service.slug}/${city.slug}`;
  const nomeCap = service.nomeComposto.charAt(0).toUpperCase() + service.nomeComposto.slice(1);

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${nomeCap} em ${city.nome}`,
    provider: {
      "@type": "LocalBusiness",
      name: "A7 Lavanderia",
      areaServed: { "@type": "City", name: city.nome },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200" },
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: service.precoMin,
      highPrice: service.precoMax,
      priceCurrency: "BRL",
    },
    areaServed: { "@type": "City", name: city.nome, addressRegion: city.estado },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Tem ${service.nomeComposto} com coleta em ${city.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sim. A A7 Lavanderia realiza ${service.nomeComposto} em ${city.nome} com coleta e entrega gratuitas. Agende pelo WhatsApp.`,
        },
      },
      {
        "@type": "Question",
        name: `Quanto custa ${service.nomeComposto} em ${city.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A partir de R$${service.precoMin},00. A coleta e entrega em ${city.nome} são sempre gratuitas.`,
        },
      },
      ...service.faq.slice(0, 2),
    ],
  };

  const waMsg = `Olá! Quero ${service.nomeComposto} em ${city.nome}. Qual o preço e prazo?`;

  return (
    <SeoPageTemplate
      title={`${nomeCap} em ${city.nome} | A7 Lavanderia`}
      description={`${nomeCap} profissional em ${city.nome}. Coleta e entrega grátis.`}
      canonical={canonical}
      schema={[localServiceSchema, faqSchema]}
      heroTag={`${service.icone} ${city.nome}, ${city.estado}`}
      heroH1={`${nomeCap} em ${city.nome}`}
      heroSubtitle={`${service.descricao} Atendemos ${city.nome} com coleta e entrega gratuita no seu endereço. Resultado em ${service.prazo}.`}
      heroCta={`Agendar em ${city.nome}`}
      heroWhatsApp={waMsg}
      introText={`A A7 Lavanderia é referência em ${service.nomeComposto} no Vale do Paraíba e atende ${city.nome} com estrutura completa. ${service.descricao} Com coleta e entrega gratuita em ${city.nome}, você não precisa se deslocar — a gente resolve de porta a porta.`}
      beneficios={[
        ...service.beneficios.slice(0, 4),
        `Coleta gratuita em ${city.nome} e região`,
        `Entrega em ${service.prazo} no seu endereço em ${city.nome}`,
      ]}
      processo={service.processo.map((s) => ({ step: s }))}
      depoimentos={[
        { nome: "Cliente A7", texto: `Ótimo serviço de ${service.nomeComposto} aqui em ${city.nome}. Recomendo.`, cidade: city.nome },
        { nome: "Cliente A7", texto: "Pontualidade na coleta e entrega. Resultado excelente.", cidade: city.nome },
        { nome: "Cliente A7", texto: "Atendimento via WhatsApp muito ágil. Voltarei com certeza.", cidade: city.nome },
      ]}
      faq={[
        {
          pergunta: `Vocês atendem ${city.nome} para ${service.nomeComposto}?`,
          resposta: `Sim, atendemos toda ${city.nome} incluindo ${city.bairros.join(", ")}. A coleta e entrega são sempre gratuitas.`,
        },
        {
          pergunta: `Qual o prazo para ${service.nomeComposto} em ${city.nome}?`,
          resposta: `O prazo é de ${service.prazo} após a coleta em ${city.nome}. Para serviços urgentes, entre em contato para verificar disponibilidade.`,
        },
        ...service.faq,
      ]}
      ctaTitle={`${nomeCap} em ${city.nome} — Agende Agora`}
      ctaDesc={`Coleta grátis · ${service.prazo} · A partir de R$${service.precoMin},00`}
      ctaButton={`Agendar em ${city.nome} pelo WhatsApp`}
      ctaWhatsApp={waMsg}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: nomeCap, href: `/lavagem/${service.slug}` },
        { label: city.nome, href: `/lavagem/${service.slug}/${city.slug}` },
      ]}
    />
  );
}
