import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Shield, Lock, Database, Eye, Trash2, UserCheck } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "LGPD · Seus direitos",
  description: "Conheça seus direitos como titular de dados pessoais conforme a Lei Geral de Proteção de Dados.",
};

const rights = [
  {
    icon: Eye,
    title: "Acesso",
    description: "Saiba quais dados pessoais temos sobre você.",
  },
  {
    icon: Database,
    title: "Portabilidade",
    description: "Receba seus dados em formato estruturado e legível.",
  },
  {
    icon: UserCheck,
    title: "Correção",
    description: "Atualize ou corrija dados incompletos ou desatualizados.",
  },
  {
    icon: Lock,
    title: "Anonimização",
    description: "Solicite a anonimização de dados desnecessários.",
  },
  {
    icon: Trash2,
    title: "Eliminação",
    description: "Requeira a exclusão de dados tratados com seu consentimento.",
  },
  {
    icon: Shield,
    title: "Revogação",
    description: "Revogue consentimentos previamente concedidos.",
  },
];

export default function LgpdPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-5xl container-px">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            Lei Geral de Proteção de Dados
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl text-neutral-900 leading-tight">
            Seus <span className="gradient-text">direitos</span> como titular de dados
          </h1>
          <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
            A LGPD (Lei nº 13.709/2018) garante uma série de direitos aos cidadãos brasileiros.
            Conheça abaixo como exercê-los junto ao nosso site.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rights.map((r) => (
              <div key={r.title} className="card-premium p-6">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <r.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-serif text-lg text-neutral-900">{r.title}</h2>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>

          <section className="mt-14 card-premium p-8">
            <h2 className="font-serif text-2xl text-neutral-900">Como exercer seus direitos</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Para exercer qualquer um dos direitos acima, envie um e-mail para{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary underline">
                {siteConfig.email}
              </a>{" "}
              com seu pedido. Responderemos em até 15 dias úteis, conforme a legislação vigente.
            </p>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Você também pode apresentar reclamação diretamente à Autoridade Nacional de
              Proteção de Dados (ANPD) pelo site{" "}
              <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                gov.br/anpd
              </a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
