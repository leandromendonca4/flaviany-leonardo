"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/Button";
import { Sparkles, ShieldCheck, Heart, Star, Play } from "lucide-react";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      aria-label="Apresentação"
    >
      <HeroBackdrop />
      {/* Orbs adicionais com parallax para profundidade */}
      <motion.div
        style={{ y: yBlob1 }}
        className="absolute top-1/4 right-1/3 h-72 w-72 rounded-full bg-champagne/20 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl container-px w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/70 backdrop-blur-md px-4 py-2 text-xs font-medium text-primary shadow-soft"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Psicoterapia online · CRP 03/21426</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.05] tracking-tight text-neutral-900"
            >
              Transforme sua{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">relação</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 22px rgba(54,214,21,0.8)) drop-shadow(0 0 42px rgba(54,214,21,0.6))" }}
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="#36D615"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeOpacity="0.98"
                  />
                </svg>
              </span>{" "}
              com você mesmo e com quem você ama.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-balance max-w-2xl text-lg sm:text-xl text-neutral-600 leading-relaxed"
            >
              Tratamento para transtornos sexuais, psicoterapia para adultos e casais
              e dificuldades nos relacionamentos. Um espaço seguro para compreender
              suas dores, transformar padrões que causam sofrimento e construir
              relações mais saudáveis, íntimas e satisfatórias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <WhatsAppButton size="lg">
                Agendar Consulta
              </WhatsAppButton>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-2 text-sm text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>100% sigiloso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>5.0</span>
              </div>
            </motion.div>
          </div>

          {/* Hero card visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative perspective-1000"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] blur-3xl opacity-30" />
                <div className="relative glass-strong rounded-[2.5rem] p-6 shadow-elegant">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-champagne/20">
                    <Image
                      src="/images/1.png"
                      alt="Flaviany Leonardo, psicóloga clínica"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 top-12 hidden sm:block"
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-elegant">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-neutral-500">Atendimento</span>
                      <span className="text-sm font-medium text-neutral-900">
                        Online para o Mundo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-16 hidden sm:block"
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-elegant">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 max-w-[180px]">
                    &ldquo;Mudou minha forma de enxergar a vida.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { v: "8+", l: "Anos de experiência" },
            { v: "2k+", l: "Atendimentos realizados" },
            { v: "100%", l: "Recomendam" },
            { v: "100%", l: "Online e sigiloso" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="text-3xl sm:text-4xl font-serif font-medium gradient-text">
                {s.v}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
