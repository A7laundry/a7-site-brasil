"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { BlogPostMeta } from "@/lib/blog";

const CATEGORIES = [
  "Todos",
  "Dicas",
  "Saúde",
  "Tutorial",
  "Sustentabilidade",
  "Organização",
  "Empresarial",
  "Local",
];

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-accent text-white border-accent"
                    : "border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">
              Nenhum artigo encontrado nesta categoria.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
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
                          {new Date(post.publishedAt).toLocaleDateString(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
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
          )}
        </div>
      </section>
    </>
  );
}
