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
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl container-px">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>

          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>

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

          <div className="prose prose-neutral mt-10 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-10 font-serif text-2xl text-neutral-900">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").map((l) => l.replace("- ", ""));
                return (
                  <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-neutral-600">
                    {items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mt-5 text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-neutral-500" />
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
              >
                #{t}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <ShareButton title={post.title} text={post.excerpt} />
          </div>
        </article>

        {/* CTA inline */}
        <div className="mx-auto max-w-3xl container-px mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-serif">
              Você não precisa passar por isso sozinha.
            </h3>
            <p className="mt-3 text-white/85 max-w-md mx-auto">
              Vamos conversar? Agende uma sessão e dê o primeiro passo.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contato-form"
                scroll={false}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-primary hover:scale-[1.03] transition-transform"
              >
                Agendar consulta
              </Link>
              <WhatsAppButton size="md" className="!bg-white/15 !border !border-white/30 backdrop-blur-md">
                WhatsApp
              </WhatsAppButton>
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
                  className="group card-premium overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary">{r.category}</span>
                    <h3 className="mt-2 font-serif text-lg text-neutral-900 group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
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
