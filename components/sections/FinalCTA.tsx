"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-labelledby="cta-titulo"
    >
      <div className="relative mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center"
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0, transparent 40%)",
            }}
            aria-hidden
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-champagne/40 to-transparent blur-3xl"
            aria-hidden
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-3xl"
            aria-hidden
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="absolute h-2 w-2 rounded-full bg-white/60"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
              }}
              aria-hidden
            />
          ))}

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-xs font-medium text-white"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Você não precisa enfrentar tudo sozinha</span>
            </motion.div>

            <motion.h2
              id="cta-titulo"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-white leading-[1.1]"
            >
              Encontre o prazer e a relação que você merece.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed"
            >
              Dê o primeiro passo para uma vida com mais leveza, clareza e bem-estar.
              Estou aqui para caminhar ao seu lado nessa jornada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center justify-center"
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-[#36D615] px-8 text-base font-medium text-white shadow-[0_0_28px_rgba(54,214,21,0.5)] hover:shadow-[0_0_60px_rgba(54,214,21,0.8)] transition-all duration-300 hover:scale-[1.06] active:scale-[0.98] animate-pulse-glow"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80"
            >
              <span>✓ Resposta em até 12h</span>
              <span>✓ Sigilo total</span>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
