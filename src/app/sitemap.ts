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
  ];
}
