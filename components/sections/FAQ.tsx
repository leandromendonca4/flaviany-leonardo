"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "1 – Você atende por convênio?",
    a: (
      <>
        <p>
          Entendo totalmente sua busca por um atendimento via plano. Eu até gostaria atender dessa forma, mas as limitações de tempo e possibilidades de capacitação tornam impossível entregar o nível de cuidado que eu acredito.
        </p>
        <p>Por isso, o meu cuidado é 100% particular.</p>
      </>
    ),
  },
  {
    q: "2 – Como pago as sessões?",
    a: (
      <>
        <p>
          O pagamento é realizado por PIX, transferência bancária ou outro meio combinado previamente.
        </p>
        <p>
          As informações são enviadas antes da sessão inicial para maior comodidade e organização.
        </p>
      </>
    ),
  },
  {
    q: "3 – Quanto tempo dura a sessão?",
    a: (
      <>
        <p>
          As sessões de psicoterapia individual, terapia sexual e terapia de casal têm duração média de 45 minutos.
        </p>
        <p>
          Os Encontros Terapêuticos para Casais possuem duração de 1h10min. E as supervisões possuem duração de 1h.
        </p>
      </>
    ),
  },
  {
    q: "4 – Você atende apenas questões relacionadas à sexualidade?",
    a: (
      <>
        <p>
          Não. Embora eu seja especialista em Sexualidade Humana e Disfunções Sexuais, também atendo demandas relacionadas à ansiedade, autoestima, relacionamentos, dependência emocional, conflitos familiares, autoconhecimento, dificuldades emocionais e outros sofrimentos psíquicos.
        </p>
      </>
    ),
  },
  {
    q: "5 – Quanto tempo dura o tratamento?",
    a: (
      <>
        <p>
          Cada pessoa possui uma história, necessidades e objetivos diferentes. Por isso, não é possível determinar previamente a duração do processo terapêutico.
        </p>
        <p>
          O trabalho é construído de forma individualizada, respeitando o ritmo e as demandas de cada paciente.
        </p>
      </>
    ),
  },
  {
    q: "6 – Como funciona a primeira sessão?",
    a: (
      <>
        <p>
          A primeira sessão é um espaço para que você possa falar sobre suas dificuldades, expectativas e objetivos.
        </p>
        <p>
          Também será um momento para esclarecer dúvidas e compreender como o processo terapêutico poderá ajudá-lo(a). Não é necessário se preparar ou saber exatamente o que dizer, o importante é começar de onde você está.
        </p>
      </>
    ),
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-white overflow-hidden font-sans"
      aria-labelledby="faq-titulo"
    >
      <div className="relative mx-auto max-w-5xl container-px">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title={
            <span id="faq-titulo">
              Tire suas dúvidas com{" "}
              <span className="gradient-text">transparência</span>.
            </span>
          }
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-primary/30 bg-primary/[0.02]"
                    : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl text-neutral-900">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-neutral-100 text-neutral-700"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-5 text-neutral-600 leading-relaxed space-y-4 font-sans text-base lg:px-8 lg:pb-7">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
