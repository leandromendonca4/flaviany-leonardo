"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Empresária · 34 anos",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    text: "A Flaviany transformou completamente minha forma de lidar com a ansiedade. Hoje consigo enxergar meus gatilhos e responder com mais consciência. Sou imensamente grata por esse espaço seguro.",
  },
  {
    name: "Camila R.",
    role: "Professora · 29 anos",
    avatar: "https://i.pravatar.cc/120?img=45",
    rating: 5,
    text: "Cheguei no processo terapêutico numa fase muito difícil. A escuta da Flaviany é única — técnica, cuidadosa e profundamente humana. Foi um divisor de águas na minha vida.",
  },
  {
    name: "Júlia M.",
    role: "Médica · 38 anos",
    avatar: "https://i.pravatar.cc/120?img=49",
    rating: 5,
    text: "Profissional de excelência. Me ajudou a ressignificar padrões de relação que repetia há anos. Hoje me sinto mais livre, mais inteira. Recomendo de olhos fechados.",
  },
  {
    name: "Beatriz L.",
    role: "Designer · 31 anos",
    avatar: "https://i.pravatar.cc/120?img=44",
    rating: 5,
    text: "O processo com a Flaviany me devolveu o colorido da vida. Sua combinação de técnica, empatia e leveza faz toda a diferença. Vale cada sessão.",
  },
  {
    name: "Renata T.",
    role: "Advogada · 42 anos",
    avatar: "https://i.pravatar.cc/120?img=48",
    rating: 5,
    text: "Eu era resistente à terapia online e me surpreendi. A conexão é real, o trabalho é profundo e a Flaviany é uma profissional incrível. Mudou minha perspectiva.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [autoplay]);

  const current = testimonials[index];

  return (
    <section
      id="depoimentos"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-offwhite via-primary/10 to-white text-neutral-900"
      aria-labelledby="depoimentos-titulo"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div
        className="absolute inset-x-0 top-0 h-72 bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-24 top-20 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute left-10 top-24 h-[240px] w-[240px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Depoimentos reais
          </span>
          <h2
            id="depoimentos-titulo"
            className="mt-6 text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 leading-tight"
          >
            Histórias de quem se permitiu <span className="text-accent">florescer</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-600 leading-relaxed">
            O impacto mais bonito do meu trabalho é ver cada paciente se reconectar com a própria vida.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 -left-4 sm:-left-8 text-primary/20" aria-hidden>
              <Quote className="h-20 w-20 sm:h-28 sm:w-28 fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-[0_40px_120px_rgba(15,23,42,0.18)]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
                <div className="grid gap-8 lg:grid-cols-[280px_1fr] items-stretch">
                  <div className="rounded-[28px] border border-primary/10 bg-white/80 p-6 flex flex-col justify-between">
                    <div>
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                        Depoimento real
                      </span>
                      <div className="mt-8 flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden border border-primary/20 bg-slate-100">
                          <Image
                            src={current.avatar}
                            alt={current.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">{current.name}</p>
                          <p className="mt-1 text-sm text-neutral-600">{current.role}</p>
                        </div>
                      </div>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-accent" />
                        ))}
                      </div>
                    </div>

                    <p className="mt-8 text-sm leading-relaxed text-neutral-700">
                      Depoimento real de paciente, compartilhado voluntariamente como forma de inspirar outras pessoas a buscarem cuidado emocional.
                    </p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <blockquote className="text-lg sm:text-2xl font-serif text-neutral-900 leading-relaxed">
                      &ldquo;{current.text}&rdquo;
                    </blockquote>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center justify-center gap-2 sm:justify-start">
                        {testimonials.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Ir para depoimento ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                              i === index
                                ? "w-8 bg-gradient-to-r from-accent to-primary"
                                : "w-1.5 bg-slate-300/50 hover:bg-slate-400/70"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() =>
                            setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                          }
                          aria-label="Depoimento anterior"
                          className="h-11 w-11 rounded-full border border-slate-200/40 bg-white/70 text-slate-900 hover:border-primary/30 hover:bg-white flex items-center justify-center transition-all"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                          aria-label="Próximo depoimento"
                          className="h-11 w-11 rounded-full border border-slate-200/40 bg-white/70 text-slate-900 hover:border-primary/30 hover:bg-white flex items-center justify-center transition-all"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles */}
            <div className="mt-8 flex justify-center">
              <span className="text-sm text-slate-300">
                Passe o mouse para pausar a rotação automática.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
