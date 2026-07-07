"use client";

import { motion } from "framer-motion";
import { CalendarDays, Video, ClipboardList, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Agendamento",
    description:
      "Escolha o melhor dia e horário para você através do WhatsApp ou do formulário online. O processo é simples, rápido e sigiloso.",
    color: "from-primary to-secondary",
  },
  {
    icon: Video,
    number: "02",
    title: "Primeira Sessão",
    description:
      "Um encontro de escuta ativa para entender sua história, suas demandas e construir juntos o caminho terapêutico.",
    color: "from-secondary to-accent",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Plano Terapêutico",
    description:
      "Definimos objetivos claros, frequência das sessões e estratégias personalizadas para sua jornada de autoconhecimento.",
    color: "from-accent to-champagne",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Evolução",
    description:
      "Acompanhamento contínuo, com revisão periódica do plano e celebração de cada conquista ao longo do processo.",
    color: "from-champagne to-primary",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-atuo"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
      aria-labelledby="como-titulo"
    >
      <div className="relative mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Como funciona"
          title={
            <span id="como-titulo">
              Sua jornada terapêutica em{" "}
              <span className="gradient-text">4 passos simples</span>.
            </span>
          }
          description="Um processo claro, humanizado e desenhado para você se sentir segura do início ao fim."
        />

        <div className="relative mt-20">
          {/* Linha conectora (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-2xl opacity-30`}
                      aria-hidden
                    />
                    <div
                      className={`relative h-32 w-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-elegant`}
                    >
                      <step.icon className="h-12 w-12" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-xs font-serif font-medium text-primary shadow-soft">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-xl text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-64">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
