
"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const areas = [
  {
    title: "1 - TERAPIA SEXUAL",
    description:
      "Processo terapêutico voltado às questões sexuais psicogênicas, para recuperar a autonomia do corpo e resgatar o prazer sexual e a sexualidade.",
    details: [
      "Atendimentos individuais ou em casal.",
      "Sessões de 45 min, semanais ou quinzenais.",
      "Foco em autoconhecimento, prazer e relações corporais mais saudáveis.",
    ],
  },
  {
    title: "2 - PSICOTERAPIA INDIVIDUAL",
    description:
      "Apoio terapêutico para compreender bloqueios emocionais, padrões relacionais e fortalecer a autoestima por meio da psicanálise.",
    details: [
      "Sessões semanais de aproximadamente 45 minutos.",
      "Compreender padrões que influenciam sua forma de amar, desejar, se relacionar e viver.",
      "Construção de uma rotina emocional mais funcional e leve.",
    ],
  },
  {
    title: "3 - TERAPIA DE CASAL",
    description:
      "Atendimento para casais que querem compreender e melhorar a dinâmica afetiva, sexual e cotidiana da relação.",
    details: [
      "Casais monogâmicos e não monogâmicos.",
      "Foco em comunicação, intimidade e divisão de vida a dois.",
      "Sessões semanais de 45 minutos.",
    ],
  },
  {
    title: "4 - ENCONTRO TERAPÊUTICO PARA CASAIS",
    description:
      "Sessão pontual direcionada a um tema específico, com escuta profissional e orientações práticas para o casal avançar com mais clareza.",
    details: [
      "Duração de 1h10min em formato objetivo e acolhedor.",
      "Ideal para situações que pedem entendimento rápido e suporte relacional.",
      "Abordagem personalizada para decisões, conflitos e impasses." ,
    ],
  },
  {
    title: "5 - SUPERVISÃO EM T.S. PARA PROFISSIONAIS",
    description:
      "Espaço de supervisão clínica para profissionais que atuam com sexualidade, fortalecendo a prática com reflexões e estratégias clínicas.",
    details: [
      "Supervisão clínica segura e estruturada.",
      "Reflexão sobre casos, abordagens e decisões terapêuticas.",
      "Apoio ao desenvolvimento profissional e à atuação ética.",
    ],
  },
];

const disfuncoes = [
  {
    title: "Disfunção Erétil",
    content:
      "A D.E. abrange dificuldade em alcançar ou manter uma ereção adequada durante a atividade sexual. O tratamento associa psicoterapia para abordar os fatores psicológicos, técnicas especificas para o controle de ereção e direcionamento sobre como melhorar a intimidade.",
  },
  {
    title: "Ejaculação Precoce",
    content:
      "O processo foca em exercícios de fortalecimento do músculo pélvico, técnicas de controle de ejaculação, compreender os fatores psicológicos, além de estratégias para reduzir a ansiedade e a melhora na comunicação do casal.",
  },
  {
    title: "Desejo Hipoativo / Baixo Desejo",
    content:
      "Acompanhamento que investiga aspectos emocionais, relacionais e biológicos para restaurar o desejo e fortalecer a conexão afetiva.",
  },
  {
    title: "Dificuldade de Orgasmo",
    content:
      "Identificação de barreiras emocionais e relacionais, com psicoeducação sexual e práticas de autoconhecimento corporal e intervenções voltadas ao relacionamento, quando necessário.",
  },
  {
    title: "Dor na Relação",
    content:
      "Aproximação das causas emocionais, físicas e relacionais, manejo dos fatores que contribuem para a dor, redução dos medos e tensões associados, para promover conforto, confiança e uma vivência mais satisfatória.",
  },
  {
    title: "Conflitos no Relacionamento",
    content:
      "Intervenção em padrões de comunicação, compreensão mútua e apoio à resolução de impasses que geram sofrimento, estimulando a escuta empática e o desenvolvimento de recursos para lidar de maneira mais saudável com os conflitos.",
  },
];

export function Areas() {
  return (
    <section
      id="areas"
      className="relative py-24 sm:py-32 bg-offwhite overflow-hidden font-sans"
      aria-labelledby="areas-titulo"
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/8 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl container-px text-center">
        <SectionHeader
          eyebrow="Áreas de atendimento"
          title={
            <span id="areas-titulo">
              Atendimentos clínicos com foco em sexualidade, relação e saúde emocional.
            </span>
          }
          description="Atendimentos individuais, de casal e supervisão clínica — cada serviço é pensado para oferecer cuidado, profundidade e transformação."
          align="center"
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_32px_80px_rgba(15,23,42,0.08)]"
            >
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gradient-primary" />
              <h3 className="font-serif text-2xl font-bold text-neutral-900 leading-tight">
                {area.title.split(" - ")[1]}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-neutral-600 leading-relaxed">
                {area.description}
              </p>
              <ul className="mt-6 mx-auto max-w-xl space-y-3 text-left text-neutral-600">
                {area.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Como atuo
          </p>
          <h3 className="mt-4 text-3xl font-serif font-bold text-neutral-900">
            Principais disfunções na terapia sexual
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 leading-relaxed">
            Abordo as disfunções com cuidado clínico e nuance psicodinâmica, sempre respeitando o tempo e a singularidade de cada pessoa ou casal.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {disfuncoes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="rounded-[28px] border border-neutral-200 bg-white p-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <h4 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h4>
                <p className="mx-auto max-w-xl text-neutral-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
