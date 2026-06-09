"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn, whatsappLink } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconAfter?: boolean;
  whatsapp?: boolean;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_24px_rgba(184,107,94,0.22)] hover:shadow-[0_0_36px_rgba(184,107,94,0.42)]",
  secondary:
    "bg-white text-neutral-900 border border-neutral-200 hover:border-primary/40 hover:text-primary shadow-soft",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
  whatsapp:
    "bg-[#36D615] text-white border border-[#36D615]/20 shadow-[0_0_28px_rgba(54,214,21,0.28)] hover:bg-[#4CFF24] hover:border-[#4CFF24]/40 hover:shadow-[0_0_24px_rgba(255,255,255,0.25),0_0_90px_rgba(54,214,21,0.85),inset_0_0_12px_rgba(255,255,255,0.12)]",
  outline:
    "bg-transparent border border-primary/40 text-primary hover:bg-primary/5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none will-change-transform hover:scale-[1.04] active:scale-[0.98]";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      iconAfter = true,
      whatsapp = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      base,
      variants[whatsapp ? "whatsapp" : variant],
      sizes[size],
      "active:scale-[0.98]",
      whatsapp ? "glow-button-whatsapp" : "glow-button",
      className
    );

    const Icon = whatsapp ? MessageCircle : ArrowRight;

    if (href) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
            {iconAfter && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
          </span>
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {iconAfter && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export const WhatsAppButton = ({
  message,
  size = "lg",
  children,
  className,
}: {
  message?: string;
  size?: Size;
  children?: React.ReactNode;
  className?: string;
}) => (
  <Button
    whatsapp
    size={size}
    href={whatsappLink(message)}
    className={className}
  >
    {children ?? "Falar no WhatsApp"}
  </Button>
);
