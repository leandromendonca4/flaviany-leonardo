"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, User, Mail, Phone, MessageSquare, Calendar, Clock } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Ansiedade",
    preference: "Online",
    period: "Manhã",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((f) => ({ ...f, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setStatus("submitting");

    // Simula envio — em produção, integrar com Resend / API / Formspree
    await new Promise((r) => setTimeout(r, 1400));

    // Monta mensagem para WhatsApp como fallback/canal direto
    const msg = `Olá Flaviany! Gostaria de agendar uma sessão.
%0A*Nome:* ${form.name}
%0A*E-mail:* ${form.email}
%0A*Telefone:* ${form.phone}
%0A*Tema:* ${form.topic}
%0A*Modalidade:* ${form.preference}
%0A*Período preferido:* ${form.period}
%0A*Mensagem:* ${form.message}`;

    setStatus("success");
    // Opcional: abrir WhatsApp com os dados
    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="contato-form"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
      aria-labelledby="form-titulo"
    >
      <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-5xl container-px">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              <Calendar className="h-3.5 w-3.5" />
              Agendamento
            </span>
            <h2
              id="form-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl font-serif font-medium text-neutral-900 leading-tight"
            >
              Dê o primeiro passo para sua{" "}
              <span className="gradient-text">transformação</span>.
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Preencha o formulário e entrarei em contato em até 12 horas para conversarmos.
              Ou, se preferir, fale comigo diretamente pelo WhatsApp.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-neutral-700">
              {[
                "Resposta em até 12h úteis",
                "Sigilo total conforme o CFP",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-800 hover:border-primary/40 hover:text-primary shadow-soft transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              Prefiro falar pelo WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="card-premium p-10 text-center"
                >
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-neutral-900">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    Recebi seu pedido. Em breve abrirei o WhatsApp com sua mensagem pré-preenchida.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        topic: "Ansiedade",
                        preference: "Online",
                        period: "Manhã",
                        message: "",
                        consent: false,
                      });
                    }}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 px-6 text-sm font-medium hover:border-primary/40 hover:text-primary transition"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="card-premium p-6 sm:p-8"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Nome completo"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      icon={User}
                      required
                      placeholder="Seu nome"
                    />
                    <Field
                      label="E-mail"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      icon={Mail}
                      required
                      placeholder="seu@email.com"
                    />
                    <Field
                      label="Telefone (WhatsApp)"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      icon={Phone}
                      required
                      placeholder="(71) 99999-9999"
                    />
                    <SelectField
                      label="Área principal"
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      options={["Terapia Sexual", "Terapia de Casal", "Psicoterapia", "Encontro Terapêutico para Casais", "Supervisão em T.S.", "Outro"]}
                    />
                    <SelectField
                      label="Modalidade"
                      name="preference"
                      value={form.preference}
                      onChange={handleChange}
                      options={["Online", "Presencial (se disponível)"]}
                    />
                    <SelectField
                      label="Período preferido"
                      name="period"
                      value={form.period}
                      onChange={handleChange}
                      options={["Manhã", "Tarde", "Noite", "Sábados"]}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-neutral-800 mb-2">
                      Conte um pouco sobre o que te trouxe aqui
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Compartilhe, no seu tempo, o que você gostaria de trabalhar na terapia."
                      className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                    />
                  </div>

                  <label className="mt-5 flex items-start gap-3 text-xs text-neutral-600">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-primary focus:ring-primary"
                    />
                    <span>
                      Concordo com a <a href="/privacidade" className="text-primary underline">Política de Privacidade</a> e
                      autorizo o contato conforme a LGPD. Seus dados são tratados com sigilo e não serão compartilhados.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting" || !form.consent}
                    className="mt-6 group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-elegant hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Enviar mensagem
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs text-neutral-500 inline-flex items-center justify-center gap-1.5 w-full">
                    <Clock className="h-3 w-3" />
                    Resposta em até 12 horas úteis
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  icon: Icon,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ComponentType<{ className?: string }>;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-800 mb-2">
        {label}{required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="h-12 w-full rounded-full border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-800 mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237B2FF7' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          paddingRight: "2.5rem",
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
