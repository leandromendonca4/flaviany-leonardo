"use client";

import { motion } from "framer-motion";
import { Globe2, Lock, Clock, ShieldCheck, HeartHandshake, Award, Sparkles, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  {
    icon: Globe2,
    title: "Atendimento Online",
    description: "De qualquer lugar do mundo, com a mesma qualidade do presencial.",
    className: "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary/5 via-white to-secondary/5",
    featured: true,
  },
  {
    icon: Lock,
    title: "Sigilo Profissional",
    description: "Ética rigorosa conforme o código do CFP.",
    className: "lg:col-span-2",
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horários",
    description: "Sessões de segunda-feira a sexta-feira, em diversos horários.",
    className: "lg:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Seguro",
    description: "Plataforma criptografada e proteção de dados LGPD.",
    className: "lg:col-span-1",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Humanizado",
    description: "Escuta empática, sem julgamentos e com respeito ao seu tempo.",
    className: "lg:col-span-2",
  },
  {
    icon: Award,
    title: "Baseado em Evidências",
    description: "Técnicas validadas cientificamente (TCC).",
    className: "lg:col-span-1",
  },
  {
    icon: Sparkles,
    title: "Plano Personalizado",
    description: "Estratégias desenhadas para os seus objetivos.",
    className: "lg:col-span-1",
  },
  {
    icon: Calendar,
    title: "Agendamento Simples",
    description: "Reserva em poucos cliques pelo WhatsApp ou formulário.",
    className: "lg:col-span-2",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-24 sm:py-32 bg-offwhite overflow-hidden"
      aria-labelledby="beneficios-titulo"
    >
      <div
        className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Por que escolher"
          title={
            <span id="beneficios-titulo">
              Um cuidado pensado em cada{" "}
              <span className="gradient-text">detalhe</span>.
            </span>
          }
          description="Cada aspecto do meu trabalho foi desenhado para você se sentir segura, acolhida e livre para ser quem é."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[180px]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-white p-6 shadow-soft hover:shadow-elegant transition-all duration-500 ${item.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full flex flex-col justify-between">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    item.featured
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-glow-sm"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className={item.featured ? "mt-auto" : ""}>
                  <h3
                    className={`font-serif text-neutral-900 ${
                      item.featured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 text-neutral-600 leading-relaxed ${
                      item.featured ? "text-base max-w-md" : "text-sm"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
