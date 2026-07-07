"use client";

import { useState, useMemo, Suspense, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/blog-data";

const categories = [
  "Todos",
  "Terapia Sexual",
  "Terapia de Casal",
  "Sexualidade",
  "Saúde Mental",
  "Autoestima",
  "Psicanálise",
];

function BlogContent() {
  const [active, setActive] = useState("Todos");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag");
    const categoria = params.get("categoria");
    if (categoria && categories.some((c) => c.toLowerCase() === categoria.toLowerCase())) {
      setActive(categoria);
    } else if (tag) {
      setQuery(tag);
    }
  }, []);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCategory = active === "Todos" || p.category === active;
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchCategory && matchQuery;
    });
  }, [active, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section
      id="blog"
      className="relative py-24 sm:py-32 bg-offwhite overflow-hidden"
      aria-labelledby="blog-titulo"
    >
      <div className="relative mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Blog · Conteúdos"
          title={
            <span id="blog-titulo">
              Reflexões para cultivar sua{" "}
              <span className="gradient-text">inteligência emocional</span>.
            </span>
          }
          description="Artigos cuidadosamente escritos para te apoiar entre as sessões, ampliar seu olhar e oferecer caminhos práticos."
        />

        {/* Filtros */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active === c
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-soft"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artigos…"
              className="h-11 w-full rounded-full border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 text-center py-16"
            >
              <p className="text-neutral-600">
                Nenhum artigo encontrado para essa busca. Tente outro termo.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`${active}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-white border border-neutral-200/60 shadow-soft hover:shadow-elegant transition-all"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative aspect-[16/10] lg:aspect-[16/12] overflow-hidden">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-medium text-primary">
                          {featured.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-xs text-neutral-500">
                        <span>{featured.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {featured.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 font-serif text-2xl sm:text-3xl text-neutral-900 group-hover:text-primary transition-colors leading-tight">
                        {featured.title}
                      </h3>
                      <p className="mt-3 text-neutral-600 leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        Ler artigo completo
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )}

              {rest.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-neutral-200/60 shadow-soft hover:shadow-elegant transition-all"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-0.5 text-[11px] font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-lg text-neutral-900 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Ler mais
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function Blog() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-neutral-500">Carregando...</div>}>
      <BlogContent />
    </Suspense>
  );
}
