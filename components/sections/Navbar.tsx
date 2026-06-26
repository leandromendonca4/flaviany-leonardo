"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { cn, siteConfig, whatsappLink } from "@/lib/utils";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#areas" },

  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl container-px transition-all duration-500",
            scrolled &&
              "rounded-2xl border border-white/40 bg-white/70 backdrop-blur-2xl shadow-soft mx-4 sm:mx-6 lg:mx-auto"
          )}
        >
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl transition-all",
              scrolled ? "py-2.5" : "py-3.5"
            )}
          >
            <a
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Flaviany Leonardo - Página inicial"
            >
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary via-secondary to-champagne flex items-center justify-center text-white font-serif font-medium shadow-glow-sm group-hover:shadow-glow transition-shadow">
                FL
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-serif text-[15px] leading-none text-neutral-900">
                  Flaviany Leonardo
                </span>
                <span className="text-[10px] leading-none text-neutral-500 mt-0.5 whitespace-nowrap">
                  Psicóloga e Sexóloga
                </span>
              </div>
            </a>

            <ul className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-3.5 py-1.5 text-sm text-neutral-700 hover:text-primary rounded-full hover:bg-primary/5 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex h-9 items-center gap-1.5 rounded-full bg-[#36D615] px-4 text-sm font-medium text-white shadow-soft hover:shadow-[0_0_44px_rgba(54,214,21,0.55)] transition-all hover:scale-[1.03]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Agendar
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white"
                aria-label="Abrir menu"
                aria-expanded={open}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-24 z-40 mx-4 rounded-3xl border border-white/40 bg-white/90 backdrop-blur-2xl p-6 shadow-elegant lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-neutral-800 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <WhatsAppButton size="md" className="w-full">
                Agendar Consulta
              </WhatsAppButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
