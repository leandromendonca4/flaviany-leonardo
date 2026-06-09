"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Award, Heart, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação",
    items: [
      "Graduação em Psicologia — Universidade Federal da Bahia (UFBA)",
      "Pós-graduação em Terapia Cognitivo-Comportamental",
      "Especialização em Saúde Mental da Mulher",
    ],
  },
  {
    icon: Award,
    title: "Especializações",
    items: [
      "TCC (Terapia Cognitivo-Comportamental)",
      "Terapia do Esquema",
      "Mindfulness e Regulação Emocional",
      "Atendimento à mulher e relações",
    ],
  },
  {
    icon: Heart,
    title: "Experiência",
    items: [
      "8+ anos de atuação clínica",
      "Mais de 2.000 pacientes atendidos",
      "Palestrante em saúde mental corporativa",
      "Atendimento 100% online desde 2019",
    ],
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
      aria-labelledby="sobre-titulo"
    >
      <div
        className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-champagne/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Sobre mim"
          title={
            <span id="sobre-titulo">
              Cuidado humano, clínico e{" "}
              <span className="gradient-text">transformador</span>.
            </span>
          }
          description="Acredito que cada pessoa carrega em si a capacidade de florescer. Meu trabalho é oferecer um espaço seguro, ético e afetuoso para que você se reconecte com sua história, seus desejos e sua potência."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-12 items-center">
          {/* Imagem com parallax */}
          <motion.div
            style={{ y }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-20" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-elegant">
                <Image
                  src="/images/3.png"
                  alt="Flaviany Leonardo em seu consultório"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 glass-strong rounded-2xl p-5 shadow-elegant max-w-[240px]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-medium gradient-text">CRP</div>
                    <div className="text-xs text-neutral-600">03/21426</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Registro profissional ativo e regular junto ao Conselho Federal de Psicologia.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Texto e credenciais */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <FadeIn>
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                Sou <strong className="text-neutral-900">Flaviany Leonardo</strong>, psicóloga
                clínica (CRP 03/21426) especializada em sexologia, atuando na área da terapia sexual
                com foco nas disfunções sexuais, além da terapia de casais, consultoria para casais e
                psicoterapia individual, online e presencial.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Estudo a mente e o comportamento humano há mais de 8 anos, com mais de 2 mil horas de
                atendimento clínico, online e presencial, tanto em Salvador quanto em São Paulo,
                através do Instituto de Psicologia da USP (IPUSP).
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Utilizo o viés da psicanálise para estudar cada pessoa que vem até mim. Esta abordagem
                possibilita uma visão dos reais desejos, entendimentos internos e compreensão dos
                nossos comportamentos e pensamentos inconscientes, involuntários e impulsivos, dando a
                possibilidade de autoanálise e mudança.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Porém, utilizo técnicas de outras abordagens quando necessário, visto que cada ser
                humano é único, de forma que a condução do processo também deve ser única.
              </p>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-3 gap-4 mt-4">
              {credentials.map((c) => (
                <StaggerItem key={c.title}>
                  <div className="card-premium p-5 h-full">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-neutral-900 mb-3">
                      {c.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      {c.items.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
