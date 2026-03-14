import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CITIES, SERVICES, PROBLEMS } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://a7lavanderia.com.br";
  const posts = getAllPosts();
  const topCities = CITIES.filter((c) => c.demanda === "alta");

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,

    // Motor 1: /lavanderia/[cidade]
    ...CITIES.map((c) => ({
      url: `${baseUrl}/lavanderia/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: c.demanda === "alta" ? 0.9 : 0.7,
    })),

    // Motor 2: /lavagem/[servico]
    ...SERVICES.map((s) => ({
      url: `${baseUrl}/lavagem/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Motor 3: /problema/[tipo]
    ...PROBLEMS.map((p) => ({
      url: `${baseUrl}/problema/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p.urgencia === "alta" ? 0.85 : 0.7,
    })),

    // Motor 4: /lavagem/[servico]/[cidade]
    ...SERVICES.flatMap((s) =>
      topCities.map((c) => ({
        url: `${baseUrl}/lavagem/${s.slug}/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      }))
    ),

    // LPs estratégicas
    // P0 — prioridade máxima
    ...[
      "/sao-jose-dos-campos",
      "/higienizacao-edredom",
      "/tenis",
      "/remocao-manchas",
      "/para-alergicos",
      "/precos",
      "/tapetes",
      "/empresarial",
      "/sofas",
      "/restaurantes",
      "/para-casais",
      "/vale-do-paraiba",
      "/como-funciona",
      "/plano-mensal",
    ].map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // P1 — prioridade alta
    ...[
      "/para-maes",
      "/lavanderia-ou-lavar-em-casa",
      "/roupas-delicadas",
      "/para-executivos",
      "/airbnb",
      "/hotelaria",
      "/uniformes",
      "/condominios",
    ].map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // P2 — prioridade média
    ...[
      "/cortinas",
      "/couro-pecas-especiais",
      "/premium",
      "/sustentavel",
      "/taubate",
      "/jacarei",
      "/lorena-guaratingueta",
    ].map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Variações do site
    ...["/version-c", "/version-d", "/version-e", "/version-f"].map(
      (slug) => ({
        url: `${baseUrl}${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.3,
      })
    ),
  ];
}
