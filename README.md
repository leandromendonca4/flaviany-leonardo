# Flaviany Leonardo · Website Premium

Website institucional premium para a psicóloga Flaviany Leonardo, com design internacional, animações sofisticadas, SEO avançado e foco em conversão.

## Stack

- **Next.js 15** (App Router, RSC, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 3** (paleta customizada)
- **Framer Motion** (animações, microinterações, parallax)
- **GSAP** (animações complexas quando necessário)
- **Lucide React** (ícones)
- Schema.org JSON-LD, Open Graph, Twitter Cards

## Estrutura

```
flaviany-leonardo/
├── app/
│   ├── globals.css        # Estilos globais, glassmorphism, animações
│   ├── layout.tsx         # Layout raiz, fontes, SEO, Schema.org
│   ├── page.tsx           # Página principal (compõe todas as seções)
│   ├── sitemap.ts         # Sitemap dinâmico
│   └── robots.ts          # Robots.txt dinâmico
├── components/
│   ├── sections/          # Seções do site
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Areas.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/                # Componentes base reutilizáveis
│       ├── Button.tsx
│       ├── Motion.tsx
│       └── SectionHeader.tsx
├── lib/
│   └── utils.ts           # cn(), siteConfig, whatsappLink
├── public/                # Assets estáticos
├── tailwind.config.ts     # Paleta, fontes, animações
├── next.config.ts         # Headers de segurança, otimizações
├── tsconfig.json
├── package.json
└── .env.example
```

## Instalação

```bash
npm install
# ou
pnpm install
# ou
yarn install
```

## Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

```env
NEXT_PUBLIC_SITE_URL=https://www.flavianyleonardo.com.br
NEXT_PUBLIC_WHATSAPP=5571999999999
NEXT_PUBLIC_INSTAGRAM=flavianyleonardo
NEXT_PUBLIC_EMAIL=contato@flavianyleonardo.com.br
NEXT_PUBLIC_CRP=03/21426
```

## Comandos

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Build de produção
npm run start      # Inicia servidor de produção
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#7B2FF7` | Roxo vibrante (CTA, destaques) |
| `secondary` | `#3A86FF` | Azul neon (links, hover) |
| `accent` | `#36D615` | Verde neon mais claro e mais suave |
| `lavender` | `#D86BFF` | Rosa lavanda (acentos) |
| `offwhite` | `#FAFAFA` | Fundos suaves |

## Tipografia

- **Títulos:** Playfair Display (Google Fonts)
- **Corpo:** Inter (Google Fonts)

Ambas com `font-display: swap` e preconnect configurados.

## Performance

- Imagens: `next/image` com AVIF/WebP automático
- Fonts: `next/font` com preload e swap
- Code splitting automático do Next.js
- `optimizePackageImports` para lucide-react e framer-motion
- Sem libs desnecessárias em client components
- Compressão habilitada

**Meta Lighthouse:** Performance 95+ | Acessibilidade 95+ | SEO 100 | Best Practices 95+

## SEO

- Metadata dinâmica via Next.js Metadata API
- Open Graph e Twitter Cards completos
- Schema.org `Person` + `ProfessionalService` em JSON-LD
- Sitemap e robots.txt dinâmicos
- Hierarquia semântica (`h1` → `h6`) correta
- `lang="pt-BR"` declarado
- Imagens com `alt` descritivo
- Acessibilidade WCAG AA (foco visível, skip link, contraste)

## Acessibilidade

- Skip link para conteúdo principal
- Foco visível com `ring-2 ring-primary`
- `aria-label` em ícones e botões decorativos
- `prefers-reduced-motion` respeitado
- Contraste de texto WCAG AA
- Navegação por teclado funcional

## Deploy

Recomendado: **Vercel** (zero-config para Next.js).

```bash
vercel --prod
```

## Customizações

### Trocar imagens
Edite as URLs Unsplash em `Hero.tsx`, `About.tsx`, `Blog.tsx` e `Testimonials.tsx`. Para produção, hospede as imagens em `/public/images` e use `next/image`.

### Cores
Edite `tailwind.config.ts` na seção `colors` e as variáveis CSS em `app/globals.css`.

### Conteúdo
- **Nome, CRP, contato:** `lib/utils.ts` (siteConfig)
- **Textos das seções:** edite cada componente em `components/sections/`
- **Depoimentos:** array em `Testimonials.tsx`
- **Blog:** array em `Blog.tsx` (integre com CMS depois)

### Animações
- Globais: `tailwind.config.ts` → `keyframes`
- Específicas: Framer Motion direto nos componentes
- Para GSAP/ScrollTrigger, crie um hook customizado em `lib/`

## Próximos Passos

- [ ] Integrar CMS (Sanity / Contentful) para blog
- [ ] Adicionar Google Analytics 4 / Plausible
- [ ] Implementar formulário de contato (Resend + React Email)
- [ ] Adicionar página de blog dinâmica (`/blog/[slug]`)
- [ ] Integrar Google Reviews API
- [ ] Páginas de Política de Privacidade e Termos
- [ ] Configurar domínio e SSL

## Licença

Todos os direitos reservados · Flaviany Leonardo · CRP 03/21426
