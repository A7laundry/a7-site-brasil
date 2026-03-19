import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Dicas e Novidades de Lavanderia",
  description:
    "Artigos com dicas profissionais sobre cuidados com roupas, higienização, sustentabilidade e muito mais. Conteúdo da A7 Lavanderia.",
  alternates: {
    canonical: "https://www.a7lavanderia.com/blog",
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
            <p className="text-sm text-gray-400 mt-3">
              {posts.length} artigos publicados
            </p>
          </div>
        </section>

        <BlogGrid posts={posts} />
      </main>
      <Footer />
    </>
  );
}
