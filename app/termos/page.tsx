import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site de Flaviany Leonardo.",
};

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl container-px">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            Última atualização: jun/2025
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl text-neutral-900 leading-tight">
            Termos de <span className="gradient-text">Uso</span>
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Ao acessar este site, você concorda com os termos descritos abaixo. Caso não concorde,
            recomendamos que não utilize os serviços oferecidos.
          </p>

          <section className="mt-10">
            <h2 className="font-serif text-2xl text-neutral-900">1. Sobre o serviço</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Este site é de titularidade de Flaviany Leonardo, psicóloga clínica (CRP 03/21426),
              e tem por finalidade apresentar informações profissionais, captar contatos e
              possibilitar o agendamento de sessões de psicoterapia online.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-neutral-900">2. Uso adequado</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Você se compromete a utilizar o site de forma lícita, ética e em conformidade com a
              legislação brasileira. É vedado o uso para fins ilegais, difamatórios ou que violem
              direitos de terceiros.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-neutral-900">3. Conteúdo</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Os textos, imagens e demais conteúdos são de propriedade da profissional ou
              licenciados, sendo vedada a reprodução sem autorização prévia.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-neutral-900">4. Limitação de responsabilidade</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              As informações disponibilizadas no site têm caráter informativo e não substituem
              consulta, diagnóstico ou tratamento psicológico. O início do processo terapêutico
              é formalizado em sessão.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-neutral-900">5. Sigilo profissional</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Todo o conteúdo das sessões é protegido pelo sigilo profissional conforme o Código
              de Ética do Psicólogo (CFP) e a LGPD.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-neutral-900">6. Foro</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Fica eleito o foro de Salvador/BA para dirimir quaisquer questões oriundas destes
              Termos.
            </p>
          </section>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
