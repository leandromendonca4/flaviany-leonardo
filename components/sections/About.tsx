"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Heart, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação",
    items: [
      "Graduação em Psicologia — Universidade Salvador (UNIFACS)",
      "Pós-graduação em Sexualidade Humana",
      "Especialização em Terapia Sexual",
    ],
  },
  {
    icon: Heart,
    title: "Experiência",
    items: [
      "8+ anos estudando o comportamento humano",
      "Atendimento a casais monogâmicos e não monogâmicos",
      "Tratamento das Disfunções Sexuais",
      "Psicoterapia / Psicanálise",
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
          description="Acredito que a transformação acontece quando nos permitimos olhar para nossa história com coragem, acolhimento e verdade."
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
                Olá, sou <strong className="text-neutral-900">Flaviany Leonardo</strong>, psicóloga
                clínica (CRP 03/21426), especialista em Sexualidade Humana e terapeuta de casais.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Há mais de 8 anos dedico meus estudos e minha prática clínica à compreensão da mente,
                dos relacionamentos e da sexualidade. Ao longo dessa trajetória, acumulei mais de 2 mil
                horas de atendimento, acompanhando pessoas e casais em seus processos de
                autoconhecimento, transformação emocional e reconstrução dos vínculos afetivos.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Meu trabalho é voltado para questões relacionadas à sexualidade, disfunções sexuais,
                dificuldades nos relacionamentos, autoestima, dependência emocional, conflitos afetivos
                e sofrimento psíquico. Também atuo com consultoria para casais, supervisão clínica e
                psicoterapia individual.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                A psicanálise é a base do meu olhar clínico. Por meio dela, buscamos compreender não
                apenas os sintomas, mas também as histórias, os padrões e os conflitos que influenciam
                a forma como você se relaciona consigo mesmo, com o outro e com o mundo.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Acredito que cada pessoa possui uma trajetória única. Por isso, construo um
                acompanhamento cuidadoso e personalizado, respeitando sua singularidade, seu tempo e as
                necessidades específicas do seu processo.
              </p>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4 mt-4">
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
