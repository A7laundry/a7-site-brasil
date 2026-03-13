import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  content: string;
}

export type BlogPostMeta = Omit<BlogPost, "content">;

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      image: data.image,
      publishedAt: data.publishedAt,
      author: data.author ?? "Equipe A7 Lavanderia",
      readingTime: data.readingTime ?? "5 min",
      seoTitle: data.seoTitle ?? data.title,
      seoDescription: data.seoDescription ?? data.excerpt,
      tags: data.tags ?? [],
    } as BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    image: data.image,
    publishedAt: data.publishedAt,
    author: data.author ?? "Equipe A7 Lavanderia",
    readingTime: data.readingTime ?? "5 min",
    seoTitle: data.seoTitle ?? data.title,
    seoDescription: data.seoDescription ?? data.excerpt,
    tags: data.tags ?? [],
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}

export const CATEGORIES = [
  "Todos",
  "Dicas",
  "Saúde",
  "Tutorial",
  "Sustentabilidade",
  "Organização",
  "Empresarial",
  "Local",
];
