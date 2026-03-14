import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

const LP_MAPPING: Record<string, string> = {
  "alergia-acaros-roupa-cama": "/para-alergicos",
  "higienizacao-edredom-importancia": "/higienizacao-edredom",
  "fungos-roupa-como-eliminar": "/lavagem-roupas",
  "higiene-roupas-bebe": "/para-maes",
  "bacterias-tapetes-higienizacao": "/tapetes",
  "higienizacao-cortinas-saude": "/cortinas",
  "tirar-mancha-vinho-tinto": "/remocao-manchas",
  "tirar-manchas-dificeis": "/remocao-manchas",
  "tirar-mancha-oleo-roupa": "/remocao-manchas",
  "lavar-tenis-corretamente": "/tenis",
  "como-cuidar-roupas-delicadas": "/roupas-delicadas",
  "cuidados-cashmere-la": "/couro-pecas-especiais",
  "como-lavar-couro": "/couro-pecas-especiais",
  "como-lavar-jeans": "/roupas-delicadas",
  "limpeza-tapetes-profissional": "/tapetes",
  "higienizar-sofa-casa": "/sofas",
  "uniformes-corporativos-higienizacao": "/uniformes",
  "enxoval-restaurante-gestao": "/restaurantes",
  "lavanderia-hoteis-terceirizacao": "/hotelaria",
  "lavanderia-sao-jose-dos-campos": "/sao-jose-dos-campos",
  "lavanderias-vale-do-paraiba": "/vale-do-paraiba",
  "lavanderia-sustentavel": "/sustentavel",
  "temperatura-lavagem-tecidos": "/lavagem-roupas",
  "lavar-mao-vs-maquina": "/lavagem-roupas",
  "organizar-guarda-roupa": "/lavagem-roupas",
  "guardar-roupas-inverno": "/lavagem-roupas",
  "conservar-vestido-noiva": "/roupas-delicadas",
  "capsule-wardrobe-guia": "/plano-mensal",
  "consumo-consciente-roupas": "/sustentavel",
  "produtos-ecologicos-lavar-roupa": "/sustentavel",
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `https://a7lavanderia.com.br/blog/${post.slug}`,
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 3);
  const lpUrl = LP_MAPPING[post.slug] ?? "/";

  const whatsappMessage = encodeURIComponent(
    `Olá! Li o artigo '${post.title}' e gostaria de agendar uma coleta.`
  );
  const whatsappUrl = `https://wa.me/5512974128390?text=${whatsappMessage}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "A7 Lavanderia" },
    publisher: {
      "@type": "Organization",
      name: "A7 Lavanderia",
      logo: {
        "@type": "ImageObject",
        url: "https://a7lavanderia.com.br/logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://a7lavanderia.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://a7lavanderia.com.br/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://a7lavanderia.com.br/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-8 bg-gray-50 border-b border-gray-100">
          <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-600 line-clamp-1">{post.title}</span>
            </nav>

            {/* Category badge */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">{post.excerpt}</p>

            {/* Meta: author, date, reading time */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6">
              <span>Por {post.author}</span>
              <span>·</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readingTime} de leitura</span>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-gray-200 text-gray-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12">
          <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <article>
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-strong:text-gray-900
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-li:text-gray-600 prose-li:my-1
                  prose-ul:text-gray-600 prose-ol:text-gray-600
                  prose-blockquote:border-accent prose-blockquote:text-gray-600
                  prose-table:text-sm
                  prose-th:bg-gray-50 prose-th:text-gray-700 prose-th:font-semibold
                  prose-td:text-gray-600
                  prose-code:text-accent prose-code:bg-accent/5 prose-code:px-1 prose-code:rounded"
              >
                <MDXRemote source={post.content} />
              </div>
            </article>

            {/* CTA Banner */}
            <div className="mt-12 rounded-2xl bg-[#0047FF] p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Pronto para experimentar?</h2>
              <p className="text-white/80 mb-6">
                Agende sua coleta agora — sem compromisso, sem fidelidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0047FF] font-semibold rounded-xl hover:bg-white/90 transition-colors text-sm"
                >
                  Agendar pelo WhatsApp →
                </a>
                <Link
                  href={lpUrl}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm border border-white/20"
                >
                  Ver serviço →
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group block"
                    >
                      <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={rel.image}
                            alt={rel.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary backdrop-blur-sm">
                              {rel.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <span>
                              {new Date(rel.publishedAt).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                            <span>·</span>
                            <span>{rel.readingTime}</span>
                          </div>
                          <h3 className="text-sm font-bold text-gray-900 group-hover:text-accent transition-colors line-clamp-2 leading-snug flex-1">
                            {rel.title}
                          </h3>
                          <div className="mt-3 flex items-center text-accent text-xs font-semibold">
                            Ler artigo
                            <svg
                              className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
