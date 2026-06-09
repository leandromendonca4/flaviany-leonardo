"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="glass-strong rounded-2xl p-4 max-w-xs shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/images/1.png"
                      alt="Flaviany Leonardo"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 text-sm">Flaviany Leonardo</div>
                    <div className="text-xs text-accent flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Olá! 👋 Como posso te ajudar hoje?
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#36D615] text-white text-sm font-medium hover:bg-[#2EC413] transition-colors"
                >
                  Iniciar conversa
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            {expanded && (
              <button
                onClick={() => setExpanded(false)}
                aria-label="Fechar"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-neutral-200 shadow-soft hover:scale-105 transition-transform"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              onMouseEnter={() => setExpanded(true)}
              className="group relative h-14 w-14 inline-flex items-center justify-center rounded-full bg-[#36D615] text-white shadow-elegant hover:shadow-[0_0_54px_rgba(54,214,21,0.75)] hover:scale-110 transition-all"
            >
              <span
                className="absolute inset-0 rounded-full bg-[#36D615] animate-ping opacity-30"
                aria-hidden
              />
              <MessageCircle className="relative h-6 w-6" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
