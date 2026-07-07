import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Blog } from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Blog · Sexualidade, Ansiedade e Relacionamentos",
  description: "Artigos sobre psicologia, sexualidade, ansiedade, relacionamentos e autoestima.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="overflow-hidden bg-gradient-to-br from-offwhite via-primary/[0.04] to-white pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl container-px">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Blog
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-serif text-neutral-900 leading-tight">
                Conteúdos sobre <span className="gradient-text">sexualidade, ansiedade</span> e relacionamentos
              </h1>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Explore artigos que ajudam a entender emoções, comunicação e prazer com cuidado e sensibilidade.
              </p>
            </div>
          </div>
        </section>
        <Blog />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
