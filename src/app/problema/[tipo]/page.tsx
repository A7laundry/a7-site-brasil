import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProblemBySlug, PROBLEMS } from "@/lib/seo-data";
import SeoPageTemplate from "@/components/SeoPageTemplate";

interface Props {
  params: { tipo: string };
}

export async function generateStaticParams() {
  return PROBLEMS.map((p) => ({ tipo: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const problem = getProblemBySlug(params.tipo);
  if (!problem) return {};

  const title = `${problem.tituloLong} — Solução Profissional | A7 Lavanderia`;
  const description = `${problem.descricao} ${problem.solucao} Coleta e entrega grátis no Vale do Paraíba.`;

  return {
    title,
    description,
    alternates: { canonical: `https://a7lavanderia.com/problema/${problem.slug}` },
    openGraph: { title, description, type: "website", locale: "pt_BR" },
  };
}

export default function ProblemPage({ params }: Props) {
  const problem = getProblemBySlug(params.tipo);
  if (!problem) notFound();

  const baseUrl = "https://a7lavanderia.com";
  const canonical = `${baseUrl}/problema/${problem.slug}`;

  const urgenciaLabel: Record<string, string> = {
    alta: "⚡ Urgente — Aja rápido",
    media: "🔶 Moderado — Trate logo",
    baixa: "🔵 Preventivo — Resolva antes de piorar",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: problem.faq.map((q) => ({
      "@type": "Question",
      name: q.pergunta,
      acceptedAnswer: { "@type": "Answer", text: q.resposta },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: problem.tituloLong,
    description: problem.descricao,
    step: problem.dicas.map((d, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: d,
    })),
  };

  const waMsg = `Olá! Preciso de ajuda para resolver: ${problem.titulo}. Podem ajudar?`;

  const dikasComoBeneficios = [
    `${problem.solucao}`,
    "Avaliação gratuita via foto antes de comprometer o serviço",
    "Nunca cobramos por resultado que não conseguimos entregar",
    "Coleta e entrega grátis em todo o Vale do Paraíba",
    "Mais de 200 avaliações 5 estrelas no Google",
    "Atendimento via WhatsApp com resposta em minutos",
  ];

  return (
    <SeoPageTemplate
      title={`${problem.tituloLong} | A7 Lavanderia`}
      description={`${problem.descricao} Solução profissional com coleta e entrega grátis.`}
      canonical={canonical}
      schema={[faqSchema, howToSchema]}
      heroTag={urgenciaLabel[problem.urgencia]}
      heroH1={problem.tituloLong}
      heroSubtitle={`${problem.descricao} Nossa equipe resolve com produtos profissionais. Mande foto pelo WhatsApp para avaliação gratuita.`}
      heroCta="Mandar foto para avaliação grátis"
      heroWhatsApp={waMsg}
      introText={`${problem.descricao} ${problem.solucao} Não tente resolver por conta própria antes de consultar — o tratamento errado pode fixar o problema permanentemente. Mande uma foto pelo WhatsApp antes de qualquer coisa.`}
      beneficios={dikasComoBeneficios}
      processo={[
        { step: `Tire uma foto da peça e mande pelo WhatsApp — avaliação 100% gratuita` },
        { step: "Nossa equipe analisa e informa honestamente se conseguimos resolver" },
        { step: "Se sim, agendamos a coleta no seu endereço sem custo de frete" },
        { step: `Aplicamos ${problem.solucao.toLowerCase()}` },
        { step: "Entregamos a peça tratada em até 48h, embalada e pronta para usar" },
      ]}
      faq={[
        ...problem.faq,
        {
          pergunta: "Vocês garantem a remoção?",
          resposta: "Não garantimos 100% antes de ver a peça — isso seria desonesto. Mas avaliamos via foto gratuitamente e só aceitamos o serviço se tivermos boa chance de sucesso. Nunca cobramos por resultado que não entregamos.",
        },
        {
          pergunta: "O que fazer enquanto espero a coleta?",
          resposta: `Siga as dicas abaixo para não piorar a situação: ${problem.dicas[0]}.`,
        },
      ]}
      ctaTitle="Não deixe o problema piorar"
      ctaDesc="Mande foto agora. Avaliação gratuita e resposta em minutos."
      ctaButton="Mandar foto pelo WhatsApp"
      ctaWhatsApp={waMsg}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/" },
        { label: problem.titulo, href: `/problema/${problem.slug}` },
      ]}
    />
  );
}
