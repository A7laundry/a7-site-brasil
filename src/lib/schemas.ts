import { COMPANY, FAQ_ITEMS, SERVICES } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.website}/#localbusiness`,
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "[PLACEHOLDER: latitude]",
      longitude: "[PLACEHOLDER: longitude]",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.stats.googleRating,
      reviewCount: "[PLACEHOLDER: número de reviews]",
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "$$",
    image: `${COMPANY.website}/og-image.jpg`,
    sameAs: [
      COMPANY.socialMedia.instagram,
      COMPANY.socialMedia.facebook,
      COMPANY.socialMedia.tiktok,
      COMPANY.socialMedia.youtube,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    areaServed: COMPANY.cities.map((city) => ({
      "@type": "City",
      name: `${city}, SP`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Lavanderia",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY.website}/#organization`,
    name: COMPANY.name,
    url: COMPANY.website,
    logo: `${COMPANY.website}/logo.png`,
    description: COMPANY.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: [
      COMPANY.socialMedia.instagram,
      COMPANY.socialMedia.facebook,
      COMPANY.socialMedia.tiktok,
      COMPANY.socialMedia.youtube,
    ],
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: COMPANY.website,
      },
    ],
  };
}

export function generateServiceSchema(service: typeof SERVICES[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
    },
    areaServed: {
      "@type": "State",
      name: "São Paulo",
    },
  };
}
