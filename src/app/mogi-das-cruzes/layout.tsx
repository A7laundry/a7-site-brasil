import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavanderia em Mogi das Cruzes | Coleta e Entrega | A7 Lavanderia",
  description: "Lavanderia com coleta e entrega em Mogi das Cruzes e Alto Tietê. 5 anos de mercado, 12 unidades no Brasil, padrão industrial. Entrega em 48h. Agende 24h pelo WhatsApp.",
  alternates: { canonical: "https://a7lavanderia.com/mogi-das-cruzes" },
  openGraph: {
    title: "Lavanderia em Mogi das Cruzes | Coleta e Entrega | A7 Lavanderia",
    description: "Coleta e entrega em Mogi das Cruzes e Alto Tietê. Padrão industrial, 48h de prazo. Agende pelo WhatsApp.",
    url: "https://a7lavanderia.com/mogi-das-cruzes",
  },
};

export default function MogiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
