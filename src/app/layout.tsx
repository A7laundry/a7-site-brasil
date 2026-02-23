import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* [PLACEHOLDER: Google Tag Manager] */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXX');` }} /> */}
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
