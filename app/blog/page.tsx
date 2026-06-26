import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Blog } from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Blog · Saúde Mental e Bem-estar",
  description: "Artigos sobre psicologia, ansiedade, relacionamentos, autoestima e desenvolvimento pessoal.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="overflow-hidden bg-offwhite py-20">
          <div className="mx-auto max-w-7xl container-px">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Blog
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-serif text-neutral-900">
                  Conteúdos sobre saúde mental, sexualidade e relacionamentos
                </h1>
                <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                  Explore artigos que ajudam a entender emoções, comunicação e prazer com cuidado e sensibilidade.
                </p>
              </div>
              <div className="relative h-72 sm:h-96 overflow-hidden rounded-[2rem] shadow-xl shadow-slate-900/10">
                <Image
                  src="/images/Conteúdos sobre saúde mental, sexualidade e relacionamentos.png"
                  alt="Ilustração sobre saúde mental e bem-estar"
                  fill
                  className="object-cover"
                />
              </div>
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
