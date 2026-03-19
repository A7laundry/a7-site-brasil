interface Props {
  name: string;
  description: string;
  slug: string;
}

export default function ServiceSchema({ name, description, slug }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "A7 Lavanderia",
      "url": "https://a7lavanderia.com",
      "telephone": "+55-12-97412-8390",
    },
    "areaServed": {
      "@type": "State",
      "name": "Vale do Paraíba, São Paulo, Brasil",
    },
    "url": `https://a7lavanderia.com/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
