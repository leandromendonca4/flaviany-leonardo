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
        <section className="relative overflow-hidden bg-gradient-to-br from-offwhite via-primary/[0.04] to-white pb-8 sm:pb-12">
          <div className="absolute inset-x-0 top-0 h-72 bg-primary/10 blur-[120px]" aria-hidden />
          <div className="mx-auto max-w-7xl container-px">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Blog
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-serif text-neutral-900 leading-tight">
                  Conteúdos sobre <span className="gradient-text">sexualidade, ansiedade</span> e relacionamentos
                </h1>
                <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-xl">
                  Explore artigos que ajudam a entender emoções, comunicação e prazer com cuidado e sensibilidade.
                </p>
              </div>

              <div className="lg:col-span-5 hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] blur-3xl opacity-20" />
                  <div className="relative glass-strong rounded-[2.5rem] p-5 shadow-elegant">
                    <div className="relative aspect-[4/5] w-72 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-champagne/20">
                      <Image
                        src="/images/1.png"
                        alt="Flaviany Leonardo, psicóloga clínica"
                        fill
                        priority
                        sizes="288px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
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
