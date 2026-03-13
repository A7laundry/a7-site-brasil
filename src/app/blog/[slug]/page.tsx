import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppLink } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

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
      logo: { "@type": "ImageObject", url: "https://a7lavanderia.com.br/logo.png" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://a7lavanderia.com.br" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://a7lavanderia.com.br/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://a7lavanderia.com.br/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full mt-16">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container-main mx-auto">
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm mb-3">
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Article Content */}
            <article className="flex-1 min-w-0">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{post.readingTime} de leitura</span>
                <span>·</span>
                <span>Por {post.author}</span>
              </div>

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-gray-600 line-clamp-1">{post.title}</span>
              </nav>

              {/* MDX Content */}
              <div className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-primary
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-800
                prose-ul:text-gray-600 prose-ol:text-gray-600
                prose-li:my-1
                prose-table:text-sm
                prose-th:bg-gray-50 prose-th:text-gray-700 prose-th:font-semibold
                prose-td:text-gray-600
                prose-blockquote:border-accent prose-blockquote:text-gray-600
                prose-code:text-accent prose-code:bg-accent/5 prose-code:px-1 prose-code:rounded
              ">
                <MDXRemote source={post.content} />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Bottom */}
              <div className="mt-10 p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <p className="font-bold text-primary text-lg mb-2">
                  Gostou do conteúdo? A A7 cuida das suas roupas com o mesmo cuidado.
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Coleta e entrega grátis em todo o Vale do Paraíba. Agende em menos de 2 minutos.
                </p>
                <a
                  href={getWhatsAppLink("agendar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm"
                >
                  Agendar coleta pelo WhatsApp
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* WhatsApp CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <p className="font-bold text-lg mb-2">Roupas impecáveis na sua porta</p>
                  <p className="text-white/70 text-sm mb-4">
                    Coleta gratuita, 48h de prazo, 4.9 no Google
                  </p>
                  <a
                    href={getWhatsAppLink("agendar")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-accent text-white text-center font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                  <div>
                    <h3 className="font-bold text-primary text-base mb-4">Artigos relacionados</h3>
                    <div className="space-y-4">
                      {related.map((rel) => (
                        <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group flex gap-3">
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={rel.image}
                              alt={rel.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                              {rel.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{rel.readingTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog */}
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Ver todos os artigos
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
