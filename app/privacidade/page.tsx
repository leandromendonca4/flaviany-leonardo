import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e proteção de dados pessoais do site de Flaviany Leonardo.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl container-px prose prose-neutral">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            LGPD · Última atualização: jun/2025
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl text-neutral-900 leading-tight">
            Política de <span className="gradient-text">Privacidade</span>
          </h1>
          <p className="mt-4 text-neutral-600">
            Esta Política descreve como Flaviany Leonardo, psicóloga clínica (CRP 03/21426),
            coleta, utiliza, armazena e protege os dados pessoais dos usuários do site, em
            conformidade com a Lei nº 13.709/2018 (LGPD).
          </p>

          <Section title="1. Dados coletados">
            <p>Coletamos os seguintes dados pessoais quando você preenche o formulário de contato ou interage conosco:</p>
            <ul>
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Telefone / WhatsApp</li>
              <li>Mensagem livre enviada pelo formulário</li>
              <li>Dados de navegação (cookies, IP, dispositivo)</li>
            </ul>
          </Section>

          <Section title="2. Finalidades de uso">
            <p>Os dados são utilizados exclusivamente para:</p>
            <ul>
              <li>Entrar em contato em resposta a solicitações</li>
              <li>Agendar sessões terapêuticas</li>
              <li>Cumprir obrigações legais e fiscais</li>
              <li>Melhorar a experiência do site</li>
            </ul>
          </Section>

          <Section title="3. Compartilhamento">
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto
              quando necessário para cumprimento legal ou mediante autorização expressa.
            </p>
          </Section>

          <Section title="4. Cookies">
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e, com seu consentimento,
              cookies analíticos (Google Analytics) para mensurar o desempenho.
            </p>
          </Section>

          <Section title="5. Direitos do titular">
            <p>Conforme a LGPD, você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento</li>
              <li>Solicitar acesso, correção ou eliminação</li>
              <li>Revogar consentimento</li>
              <li>Apresentar reclamação à ANPD</li>
            </ul>
          </Section>

          <Section title="6. Encarregado de dados (DPO)">
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary">
                {siteConfig.email}
              </a>.
            </p>
          </Section>

          <Section title="7. Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos
              não autorizados, perda ou destruição.
            </p>
          </Section>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-neutral-900">{title}</h2>
      <div className="mt-3 text-neutral-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:underline">
        {children}
      </div>
    </section>
  );
}
