import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavanderia em Taubaté | Coleta e Entrega a Domicílio | A7 Lavanderia",
  description: "Lavanderia em Taubaté com unidade física na Esplanada. Coleta e entrega a domicílio em todos os bairros. Roupas, edredons, tapetes e uniformes. Agende: (12) 98177-8142.",
  alternates: { canonical: "https://a7lavanderia.com/taubate" },
  openGraph: {
    title: "Lavanderia em Taubaté | Coleta e Entrega a Domicílio | A7 Lavanderia",
    description: "Lavanderia em Taubaté com unidade física na Esplanada. Coleta e entrega a domicílio em todos os bairros.",
    url: "https://a7lavanderia.com/taubate",
  },
};

export default function TaubateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
