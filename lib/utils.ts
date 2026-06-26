import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Flaviany Leonardo",
  role: "Psicóloga Clínica",
  crp: "03/21426",
  city: "Salvador",
  state: "BA",
  country: "Brasil",
  whatsappRaw: "5571992646557",
  whatsappDisplay: "(71) 99264-6557",
  whatsappSiteMessage:
    "Vim do seu site e desejo mais informações.",
  email: "contato@psicologaflavianyleonardo.com",
  instagram: "psicologaflavianyleonardo",
  url: "https://www.psicologaflavianyleonardo.com",
  description:
    "Psicoterapia online para ansiedade, relacionamentos, autoestima, autoconhecimento e desenvolvimento emocional. Atendimento humanizado, sigiloso e 100% online com a psicóloga Flaviany Leonardo (CRP 03/21426).",
  ogImage: "/og-image.jpg",
};

export const whatsappLink = (message?: string) => {
  const text = message ?? siteConfig.whatsappSiteMessage;
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`;
};

export const instagramLink = `https://instagram.com/${siteConfig.instagram}`;

export const phoneLink = `tel:+${siteConfig.whatsappRaw}`;
