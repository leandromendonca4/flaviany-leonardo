"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Blog } from "@/components/sections/Blog";

export default function BlogPage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section
          ref={ref}
          className="relative overflow-hidden bg-gradient-to-br from-offwhite via-primary/[0.04] to-white pb-8 sm:pb-16"
        >
          <motion.div
            style={{ y: yBlob }}
            className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-secondary/10 blur-[140px]"
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 h-72 bg-primary/10 blur-[120px]" aria-hidden />

          <div className="relative mx-auto max-w-7xl container-px">
            <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[480px]">
              <div className="lg:col-span-7 text-center lg:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-semibold uppercase tracking-[0.24em] text-primary"
                >
                  Blog
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-4 text-4xl sm:text-5xl font-serif text-neutral-900 leading-tight"
                >
                  Conteúdos sobre <span className="gradient-text">sexualidade, ansiedade</span> e relacionamentos
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  Explore artigos que ajudam a entender emoções, comunicação e prazer com cuidado e sensibilidade.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 hidden lg:flex justify-center perspective-1000"
              >
                <motion.div
                  style={{ y: yImg }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      y: [0, -14, 0],
                      rotate: [-0.5, 0.5, -0.5],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-champagne rounded-[2.5rem] blur-3xl opacity-30 animate-pulse-slow" />
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-champagne/20 rounded-[3.5rem] blur-2xl opacity-50" aria-hidden />
                    <motion.div
                      whileHover={{ rotateY: 8, rotateX: -6, scale: 1.03, z: 20 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="relative glass-dark rounded-[2.5rem] p-6 shadow-elegant"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="relative aspect-[4/5] w-72 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-champagne/20 ring-1 ring-white/10">
                        <Image
                          src="/images/4.png"
                          alt="Flaviany Leonardo, psicóloga clínica"
                          fill
                          priority
                          sizes="288px"
                          className="object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent pointer-events-none" />
                        <motion.div
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-champagne/30 blur-3xl"
                    aria-hidden
                  />
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-secondary/20 blur-3xl"
                    aria-hidden
                  />
                  <motion.div
                    animate={{
                      x: [0, 6, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -right-4 top-1/3 h-16 w-16 rounded-full bg-accent/10 blur-3xl"
                    aria-hidden
                  />
                </motion.div>
              </motion.div>
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
