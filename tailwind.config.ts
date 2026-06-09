import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B86B5E",
          50: "#FBF3F1",
          100: "#F6E3DE",
          200: "#EDC7BD",
          300: "#E1A697",
          400: "#D18675",
          500: "#B86B5E",
          600: "#9C574D",
          700: "#7E463E",
          800: "#5F352F",
          900: "#3F2320",
        },
        secondary: {
          DEFAULT: "#8B5E3C",
          50: "#F8F1EA",
          100: "#EFE0CF",
          200: "#DFC09F",
          300: "#CFA070",
          400: "#B88658",
          500: "#8B5E3C",
          600: "#734A2D",
          700: "#5B3923",
          800: "#422819",
          900: "#29170E",
        },
        accent: {
          DEFAULT: "#36D615",
          50: "#ECF9DE",
          100: "#D3F4C4",
          200: "#A6E999",
          300: "#78DB65",
          400: "#54D030",
          500: "#36D615",
          600: "#2FB20F",
          700: "#248A0B",
          800: "#185D08",
          900: "#0F3204",
        },
        champagne: {
          DEFAULT: "#C19A6B",
          50: "#FAF4EA",
          100: "#F2E4C9",
          200: "#E4C893",
          300: "#D6AD5D",
          400: "#C19A6B",
          500: "#A57F4D",
          600: "#87643A",
          700: "#694B2A",
          800: "#4B331B",
          900: "#2D1C0C",
        },
        offwhite: "#FAF6F0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #B86B5E 0%, #8B5E3C 50%, #C19A6B 100%)",
        "gradient-soft":
          "linear-gradient(135deg, rgba(184,107,94,0.08) 0%, rgba(139,94,60,0.08) 50%, rgba(193,154,107,0.08) 100%)",
        "gradient-hero":
          "radial-gradient(ellipse at top, rgba(184,107,94,0.18) 0%, rgba(139,94,60,0.12) 35%, rgba(250,246,240,1) 70%)",
        "grid-pattern":
          "linear-gradient(rgba(184,107,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,107,94,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(184,107,94,0.25)",
        "glow": "0 0 40px rgba(184,107,94,0.35)",
        "glow-lg": "0 0 80px rgba(184,107,94,0.4)",
        "elegant":
          "0 10px 40px -10px rgba(184,107,94,0.15), 0 4px 16px -4px rgba(139,94,60,0.1)",
        "soft": "0 4px 30px rgba(0,0,0,0.06)",
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 10px 40px -10px rgba(184,107,94,0.1)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        blob: "blob 12s infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%": { "background-position": "-1000px 0" },
          "100%": { "background-position": "1000px 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
