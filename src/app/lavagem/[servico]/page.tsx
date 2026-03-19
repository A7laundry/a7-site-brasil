import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/lib/seo-data";
import SeoPageTemplate from "@/components/SeoPageTemplate";

interface Props {
  params: { servico: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ servico: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.servico);
  if (!service) return {};

  const title = `${service.nomeComposto.charAt(0).toUpperCase() + service.nomeComposto.slice(1)} Profissional — A7 Lavanderia`;
  const description = `${service.descricao} Coleta e entrega grátis no Vale do Paraíba. A partir de R$${service.precoMin},00. Agende pelo WhatsApp.`;

  return {
    title,
    description,
    alternates: { canonical: `https://a7lavanderia.com/lavagem/${service.slug}` },
    openGraph: { title, description, type: "website", locale: "pt_BR" },
  };
}

export default function LavagemByService({ params }: Props) {
  const service = getServiceBySlug(params.servico);
  if (!service) notFound();

  const baseUrl = "https://a7lavanderia.com";
  const canonical = `${baseUrl}/lavagem/${service.slug}`;
  const nomeCap = service.nomeComposto.charAt(0).toUpperCase() + service.nomeComposto.slice(1);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nomeCap,
    provider: { "@type": "LocalBusiness", name: "A7 Lavanderia" },
    description: service.descricao,
    areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: -23.178, longitude: -45.884 }, geoRadius: "80000" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: service.precoMin,
      highPrice: service.precoMax,
      priceCurrency: "BRL",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((q) => ({
      "@type": "Question",
      name: q.pergunta,
      acceptedAnswer: { "@type": "Answer", text: q.resposta },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Como funciona a ${service.nomeComposto} na A7 Lavanderia`,
    step: service.processo.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s,
    })),
  };

  const waMsg = `Olá! Quero saber sobre ${service.nomeComposto}. Qual o preço?`;

  return (
    <SeoPageTemplate
      title={`${nomeCap} Profissional | A7 Lavanderia`}
      description={service.descricao}
      canonical={canonical}
      schema={[serviceSchema, faqSchema, howToSchema]}
      heroTag={`${service.icone} ${nomeCap}`}
      heroH1={`${nomeCap.charAt(0).toUpperCase() + nomeCap.slice(1)} Profissional`}
      heroSubtitle={`${service.descricao} Coleta e entrega grátis. Resultado em ${service.prazo}.`}
      heroCta={`Agendar ${service.nomeComposto}`}
      heroWhatsApp={waMsg}
      introText={`A A7 Lavanderia realiza ${service.nomeComposto} com equipamentos industriais e processo validado. ${service.descricao} Atendemos todo o Vale do Paraíba com coleta gratuita. O preço começa em R$${service.precoMin},00 e o prazo de entrega é ${service.prazo}.`}
      beneficios={service.beneficios}
      processo={service.processo.map((s) => ({ step: s }))}
      faq={service.faq}
      ctaTitle={`Agende sua ${service.nomeComposto} agora`}
      ctaDesc={`Coleta grátis · Prazo ${service.prazo} · A partir de R$${service.precoMin},00`}
      ctaButton={`Agendar ${service.nomeComposto} pelo WhatsApp`}
      ctaWhatsApp={waMsg}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Serviços", href: "/" },
        { label: nomeCap, href: `/lavagem/${service.slug}` },
      ]}
    />
  );
}
