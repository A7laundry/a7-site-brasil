import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, CATEGORIES } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Dicas e Novidades de Lavanderia",
  description:
    "Artigos com dicas profissionais sobre cuidados com roupas, higienização, sustentabilidade e muito mais. Conteúdo da A7 Lavanderia.",
  alternates: {
    canonical: "https://a7lavanderia.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100 pt-24 pb-12">
          <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4">
              Blog A7 Lavanderia
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Dicas e novidades do mundo da lavanderia
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Conteúdo profissional para você cuidar melhor das suas roupas e
              simplificar sua rotina
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 text-gray-600 hover:border-accent hover:text-accent transition-colors cursor-pointer whitespace-nowrap"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>·</span>
                        <span>{post.readingTime} de leitura</span>
                      </div>
                      <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-accent text-sm font-semibold">
                        Ler artigo
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
