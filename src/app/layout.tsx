import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A7 Lavanderia",
  description:
    "Lavanderia premium com coleta e entrega no Vale do Paraíba. Roupas, tênis, edredons e tapetes higienizados com padrão internacional.",
  url: "https://a7lavanderia.com.br",
  telephone: "+55-12-97412-8390",
  priceRange: "$$",
  image: "https://a7lavanderia.com.br/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Benedito Bento, 717",
    addressLocality: "São José dos Campos",
    addressRegion: "SP",
    postalCode: "12230-100",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.1896,
    longitude: -45.8841,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
  sameAs: [],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -23.1896,
      longitude: -45.8841,
    },
    geoRadius: "100000",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a7lavanderia.com.br"),
  title: {
    default:
      "A7 Lavanderia | Lavanderia Premium com Coleta e Entrega no Vale do Paraíba",
    template: "%s | A7 Lavanderia",
  },
  description:
    "Lavanderia premium com coleta e entrega no Vale do Paraíba. Roupas, tênis, edredons e tapetes higienizados com padrão internacional. +50.000 atendimentos. 14 unidades.",
  keywords: [
    "lavanderia",
    "lavanderia premium",
    "coleta e entrega",
    "Vale do Paraíba",
    "São José dos Campos",
    "lavanderia São José dos Campos",
    "lavanderia Taubaté",
    "lavar edredom",
    "higienização de tênis",
    "lavanderia empresarial",
    "lavanderia delivery",
    "lavar roupa",
    "passadoria",
  ],
  authors: [{ name: "A7 Lavanderia" }],
  creator: "A7 Lavanderia",
  publisher: "A7 Lavanderia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://a7lavanderia.com.br",
    siteName: "A7 Lavanderia",
    title:
      "A7 Lavanderia | Lavanderia Premium com Coleta e Entrega no Vale do Paraíba",
    description:
      "Lavanderia premium com coleta e entrega. Roupas, tênis, edredons e tapetes higienizados com padrão internacional. +50.000 atendimentos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A7 Lavanderia - Lavanderia Premium com Coleta e Entrega",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A7 Lavanderia | Lavanderia Premium com Coleta e Entrega",
    description:
      "Lavanderia premium com coleta e entrega no Vale do Paraíba. +50.000 atendimentos. 14 unidades.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://a7lavanderia.com.br",
  },
  verification: {
    // [PLACEHOLDER: adicionar IDs reais]
    // google: "google-site-verification-id",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFXWVCL4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFXWVCL4');`}
        </Script>
      </body>
    </html>
  );
}
