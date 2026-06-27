"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/utils";

const links = {
  navegar: [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas de Atendimento", href: "#areas" },

    { label: "Benefícios", href: "#beneficios" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ],
  contato: [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: whatsappLink(),
      external: true,
    },
    {
      icon: MapPin,
      label: "Atendimento 100% online · Mundo",
      href: "#",
      external: false,
    },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "LGPD", href: "/lgpd" },
    { label: "Código de Ética CFP", href: "https://site.cfp.org.br", external: true },
  ],
};

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-neutral-950 text-neutral-300 overflow-hidden">
      <div
        className="absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-secondary/15 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl container-px pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-serif font-medium">
                FL
              </div>
              <div>
                <div className="font-serif text-lg text-white">Flaviany Leonardo</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  Psicóloga e Sexóloga · CRP 03/21426
                </div>
              </div>
            </Link>
            <p className="mt-5 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Cuidando da sua saúde emocional em todo o mundo.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium text-white uppercase tracking-widest">
              Navegar
            </h3>
            <ul className="mt-5 space-y-3">
              {links.navegar.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-white uppercase tracking-widest">
              Contato
            </h3>
            <ul className="mt-5 space-y-3">
              {links.contato.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <l.icon className="h-3.5 w-3.5" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium text-white uppercase tracking-widest">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {year} Flaviany Leonardo · Psicóloga e Sexóloga CRP 03/21426.
            Todos os direitos reservados.
          </p>
          <p className="text-[11px] mt-1">
            <a href={siteConfig.url} className="hover:text-white transition-colors">
              {siteConfig.url.replace("https://", "")}
            </a>
          </p>
          <p className="inline-flex items-center gap-1.5">
            Feito por{" "}
            <a href="https://lardii.com.br" target="_blank" rel="noopener noreferrer" className="text-[#36D615] hover:text-[#2db811] transition-colors">
              LÁRDII
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
