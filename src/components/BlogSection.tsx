"use client";

import Image from "next/image";
import { BLOG_ARTICLES } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Badge from "./ui/Badge";

export default function BlogSection() {
  const displayedArticles = BLOG_ARTICLES.slice(0, 6);

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-main mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="accent" className="mb-4">
              Blog A7
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Dicas e novidades do mundo da lavanderia
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Conteúdo para você cuidar melhor das suas roupas e simplificar sua rotina
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <a
                href={`https://a7lavanderia.com.br/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-accent text-sm font-semibold">
                      Ler artigo
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <a
              href="https://a7lavanderia.com.br/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-accent border-2 border-accent/20 rounded-xl hover:bg-accent/5 transition-all duration-300"
            >
              Ver todos os artigos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
