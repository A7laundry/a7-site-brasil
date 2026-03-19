import UnitPage, { UnitData } from "@/components/UnitPage";
import type { Metadata } from "next";

const unit: UnitData = {
  slug: "manaus-zumbi",
  name: "A7 Lavanderia — Zumbi dos Palmares",
  neighborhood: "Zumbi dos Palmares",
  city: "Manaus",
  state: "AM",
  street: "R. Luís Venzon, 32",
  zip: "69095-000",
  lat: -3.0935,
  lng: -60.0158,
  phone: "(92) 98115-4947",
  phoneRaw: "5592981154947",
  hours: "24 horas · 7 dias por semana",
  hoursSchema: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  ],
  citySlug: "manaus",
  cityLabel: "Manaus",
  heroImage: "https://images.unsplash.com/photo-1521656958802-453928e4e4e0?w=1400&q=80",
  heroTagline: "Zumbi dos Palmares · Manaus",
  about: "Segunda unidade A7 Lavanderia em Manaus, no bairro Zumbi dos Palmares. Atendemos 24 horas por dia para residências, condomínios e empresas da zona norte. No clima equatorial de Manaus, nosso processo de lavagem profissional garante roupas limpas, sem mofo e protegidas da umidade amazônica.",
  nearbyRefs: [
    "R. Luís Venzon, 32",
    "Próximo ao Parque dos Bilhares",
    "Região Zumbi dos Palmares e Tarumã",
  ],
  seoTitle: "Lavanderia Zumbi dos Palmares Manaus 24h | A7 Lavanderia",
  seoDescription: "Lavanderia 24h em Zumbi dos Palmares, Manaus. Coleta e entrega a domicílio. Anti-mofo e fungos. Roupas, edredons e uniformes. Agende: (92) 98115-4947.",
  testimonials: [
    { name: "Carlos Eduardo", neighborhood: "Zumbi dos Palmares", text: "Segunda unidade da A7 que uso em Manaus. O serviço é idêntico ao Coroado — excelência total. Roupas limpas, sem cheiro de mofo, entregues no prazo. Em Manaus não tem opção melhor." },
    { name: "Juliana Ferreira", neighborhood: "Tarumã", text: "Moro no Tarumã e a coleta no Zumbi é ótima. O processo anti-mofo é diferencial real aqui na cidade. Minha família tem alergia e as roupas chegam sem nenhum agente irritante. Nota 10." },
    { name: "Paulo Sérgio", neighborhood: "Zumbi dos Palmares", text: "Funcionando 24h é um diferencial enorme em Manaus. Agendo na madrugada quando lembro e o motoboy passa no dia seguinte cedo. Nunca precisei esperar ou remarcar. Perfeito." },
  ],
  faq: [
    { q: "Vocês atendem o Zumbi dos Palmares e Tarumã em Manaus?", a: "Sim, atendemos o Zumbi dos Palmares, Tarumã e toda a zona norte de Manaus com coleta e entrega a domicílio, 24h por dia." },
    { q: "Qual a diferença entre as duas unidades de Manaus?", a: "Ambas oferecem o mesmo serviço completo. A unidade do Coroado atende a zona leste e a do Zumbi dos Palmares cobre a zona norte, garantindo coleta mais ágil em toda a cidade." },
    { q: "Como proteger roupas do mofo em Manaus?", a: "Nosso processo de lavagem profissional em alta temperatura elimina fungos e bactérias. Recomendamos lavagem regular para peças armazenadas no clima úmido de Manaus." },
    { q: "Atendem empresas no Zumbi dos Palmares?", a: "Sim. Contratos mensais para uniformes com NF eletrônica, coleta programada e relatório de peças para empresas da zona norte." },
  ],
};

export const metadata: Metadata = {
  title: unit.seoTitle,
  description: unit.seoDescription,
  alternates: { canonical: `https://a7lavanderia.com/${unit.slug}` },
  openGraph: { title: unit.seoTitle, description: unit.seoDescription, url: `https://a7lavanderia.com/${unit.slug}` },
};

export default function Page() {
  return <UnitPage unit={unit} />;
}
