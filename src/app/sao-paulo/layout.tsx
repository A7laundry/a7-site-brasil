import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavanderia em São Paulo | Coleta e Entrega a Domicílio | A7 Lavanderia",
  description: "Lavanderia com coleta e entrega em São Paulo e Grande SP. 5 anos de mercado, 12 unidades no Brasil, padrão industrial. Entrega em 48h. Agende 24h pelo WhatsApp.",
  alternates: { canonical: "https://a7lavanderia.com/sao-paulo" },
  openGraph: {
    title: "Lavanderia em São Paulo | Coleta e Entrega a Domicílio | A7 Lavanderia",
    description: "Coleta e entrega em São Paulo e Grande SP. Padrão industrial, 48h de prazo. Agende pelo WhatsApp.",
    url: "https://a7lavanderia.com/sao-paulo",
  },
};

export default function SaoPauloLayout({ children }: { children: React.ReactNode }) {
  return children;
}
