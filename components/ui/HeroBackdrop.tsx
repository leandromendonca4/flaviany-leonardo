"use client";

import { motion } from "framer-motion";

/**
 * Animação abstrata premium - alternativa leve a vídeo de fundo
 * Combina orbes orgânicos, partículas e linhas em movimento contínuo.
 * Paleta alinhada à identidade visual real (rose/terracota/caramelo/champagne).
 */
export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Orbes flutuantes - paleta quente */}
      <motion.div
        className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184,107,94,0.45) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(193,154,107,0.40) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,94,60,0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(122,139,92,0.30) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["-50%", "-30%", "-70%", "-50%"],
          y: ["-50%", "-70%", "-30%", "-50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG decorativo animado (ondas) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 opacity-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#B86B5E" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#8B5E3C" stopOpacity="0.4" />
            <stop offset="1" stopColor="#C19A6B" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#wave-grad)"
          animate={{
            d: [
              "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z",
              "M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,154.7C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z",
              "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        aria-hidden
      />
    </div>
  );
}
