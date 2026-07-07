import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/ui/Button";
import { ShareButton } from "@/components/ui/ShareButton";
import { whatsappLink } from "@/lib/utils";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-gradient-to-br from-offwhite via-primary/[0.04] to-white">
        <article className="mx-auto max-w-3xl container-px">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>

          <Link
            href={`/blog?categoria=${encodeURIComponent(post.category)}`}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            {post.category}
          </Link>

          <h1 className="mt-4 text-balance font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-[1.1]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">{post.excerpt}</p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src="/images/1.png"
                  alt={post.author}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-neutral-700">{post.author}</span>
            </div>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-10 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-12 font-serif text-2xl sm:text-3xl text-neutral-900 leading-snug">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").map((l) => l.replace("- ", ""));
                return (
                  <ul key={i} className="mt-5 space-y-3 pl-6 text-neutral-600 leading-relaxed" style={{ listStyleType: "disc" }}>
                    {items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed first:mt-0">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-neutral-500" />
            {post.tags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}`}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                #{t}
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <ShareButton title={post.title} text={post.excerpt} />
          </div>
        </article>

        {/* CTA inline */}
        <div className="mx-auto max-w-3xl container-px mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent p-8 sm:p-12 text-center text-white shadow-elegant">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <h3 className="text-2xl sm:text-3xl font-serif">
              Você não precisa passar por isso sozinha.
            </h3>
            <p className="mt-3 text-white/85 max-w-md mx-auto">
              Vamos conversar? Agende uma sessão e dê o primeiro passo.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-primary shadow-soft hover:scale-[1.03] transition-transform"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </div>

        {/* Posts relacionados */}
        {related.length > 0 && (
          <div className="mx-auto max-w-5xl container-px mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900">
              Continue <span className="gradient-text">lendo</span>
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-neutral-200/60 shadow-soft hover:shadow-elegant transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-0.5 text-[11px] font-medium text-primary">
                        {r.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-neutral-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
