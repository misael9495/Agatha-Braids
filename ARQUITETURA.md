# 🏗️ Arquitetura do Projeto - A.M Braids

## Visão Geral da Estrutura

```
📦 A.M Braids
├── 📁 app/                    # Next.js App Router
│   ├── layout.tsx             # Layout raiz (metadata, viewport)
│   ├── page.tsx               # Página inicial (home)
│   ├── globals.css            # Estilos globais + animações CSS
│   └── favicon.ico
│
├── 📁 components/             # Componentes React reutilizáveis
│   ├── header.tsx             # ☝️ Cabeçalho + Navegação
│   ├── hero.tsx               # 🚀 Seção Hero (landing)
│   ├── about.tsx              # 👤 Sobre Agatha
│   ├── portfolio.tsx          # 🖼️ Galeria de Trabalhos
│   ├── contact.tsx            # 📞 Seção de Contato
│   ├── footer.tsx             # 🔗 Rodapé
│   └── ui/                    # Componentes shadcn/ui
│       └── ...                # (Button, Card, etc)
│
├── 📁 public/                 # Arquivos estáticos
│   └── ...                    # Ícones, favicons
│
├── 📄 package.json            # Dependências do projeto
├── 📄 tsconfig.json           # Configuração TypeScript
├── 📄 tailwind.config.ts      # Configuração Tailwind
├── 📄 next.config.mjs         # Configuração Next.js
│
└── 📄 DOCUMENTAÇÃO
    ├── README_PT.md           # Documentação completa
    ├── COMECE_AQUI.md         # Guia rápido
    ├── CUSTOMIZACAO.md        # Como customizar
    ├── ARQUITETURA.md         # Este arquivo
    └── PROJETO_COMPLETO.txt   # Resumo do projeto
```

---

## Fluxo de Dados

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOME (page.tsx)                          │
│  Componente raiz que importa todos os componentes principais    │
└─────────────────────────────────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┬────────────────┐
        ▼                    ▼                    ▼                ▼
    ┌────────┐          ┌────────┐         ┌──────────┐      ┌─────────┐
    │ HEADER │          │  HERO  │         │  ABOUT   │      │PORTFOLIO│
    └────────┘          └────────┘         └──────────┘      └─────────┘
        │                   │                   │                  │
        │                   │                   │                  │
    Menu Nav          Image + CTA         Image + Text      Grid de Imagens
    Logo             Animations         Hover Effects         Lazy Loading
        │                   │                   │                  │
        └───────────────────┴───────────────────┴──────────────────┘
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
                ┌─────────┐      ┌────────┐
                │ CONTACT │      │ FOOTER │
                └─────────┘      └────────┘
                    │                 │
                Social Links      Quick Links
                Email Form        Info
```

---

## Componentes Detalhados

### 1. **Header Component** (`header.tsx`)
```
┌─────────────────────────────────────────────┐
│ [Logo] ────────── [Nav Links] ── [CTA]      │  Desktop (md+)
├─────────────────────────────────────────────┤
│ [Logo] ────────────────────────── [☰ Menu]  │  Mobile
└─────────────────────────────────────────────┘

Estado:
- isMenuOpen: boolean (menu mobile aberto/fechado)

Funções:
- scrollToSection(id): scroll suave para seção
- Renderização condicional do menu mobile
```

### 2. **Hero Component** (`hero.tsx`)
```
┌────────────────────────────────────────────────────┐
│  ┌─────────────┐            ┌────────────────────┐ │
│  │   Conteúdo  │            │  Blob Animations   │ │
│  │  • Título   │            │  (Background)      │ │
│  │  • Desc     │            │                    │ │
│  │  • Botões   │            │ Decorative Shapes  │ │
│  └─────────────┘            └────────────────────┘ │
└────────────────────────────────────────────────────┘

Características:
- Intersection Observer para animações
- CSS Blobs animados
- Smooth scroll indicator
```

### 3. **About Component** (`about.tsx`)
```
┌──────────────────────────────────────────┐
│  ┌─────────┐        ┌────────────────┐  │
│  │  Foto   │        │  • Título      │  │
│  │ Agatha  │        │  • Descrição   │  │
│  │(Gradient│        │  • 3 Stats     │  │
│  │ Border) │        │  • CTA Button  │  │
│  └─────────┘        └────────────────┘  │
└──────────────────────────────────────────┘

Elementos:
- Foto com gradient border
- 3 cards com ícones (Years, Clients, Quality)
- Transições suaves ao scroll
```

### 4. **Portfolio Component** (`portfolio.tsx`)
```
┌────────────────────────────────────────────────┐
│ GRID RESPONSIVO: 1 col (mobile) → 3 cols (lg) │
│                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │ Img  │  │ Img  │  │ Img  │  Desktop    │
│  │ Card │  │ Card │  │ Card │              │
│  └──────┘  └──────┘  └──────┘              │
│  ┌──────┐  ┌──────┐                        │
│  │ Img  │  │ Img  │   Tablet               │
│  │ Card │  │ Card │                        │
│  └──────┘  └──────┘                        │
│  ┌──────┐                                   │
│  │ Img  │             Mobile                │
│  │ Card │                                   │
│  └──────┘                                   │
└────────────────────────────────────────────────┘

Dados:
- Array de 14 objetos (title, image)
- Next.js Image otimizada
- Hover effects em cards
```

### 5. **Contact Component** (`contact.tsx`)
```
┌──────────────────────────────────────────────┐
│   4 Canais de Contato (Grid Responsivo)     │
│                                               │
│  ┌──────────┐  ┌──────────┐                 │
│  │ Instagram│  │  Email   │  Desktop       │
│  └──────────┘  └──────────┘                 │
│  ┌──────────┐  ┌──────────┐                 │
│  │ WhatsApp │  │ Location │                 │
│  └──────────┘  └──────────┘                 │
│                                               │
│  ┌─────────────────────────────────────┐    │
│  │  CTA Button: WhatsApp               │    │
│  └─────────────────────────────────────┘    │
│                                               │
│  📍 Info + 🕐 Horários                     │
└──────────────────────────────────────────────┘
```

### 6. **Footer Component** (`footer.tsx`)
```
┌───────────────────────────────────────────┐
│  Brand    │   Quick Links   │   Info      │
│  ───────────────────────────────────────  │
│  A.M      │ • Início        │ • Local    │
│  Braids   │ • Sobre         │ • Horário  │
│  Descrição│ • Trabalhos     │            │
│           │ • Contato       │            │
│───────────────────────────────────────────│
│          © 2024 A.M Braids. Made with ❤️ │
└───────────────────────────────────────────┘
```

---

## Fluxo de Navegação

```
                      [HOME]
                        │
          ┌─────────────┼─────────────┐
          │             │             │
      [Link]         [Link]        [Link]
    (Header)        (Footer)      (Scroll)
          │             │             │
          ▼             ▼             ▼
    ┌─────────┐   ┌────────┐   ┌───────────┐
    │ ABOUT   │   │PORTFOLIO│  │ CONTACT  │
    │         │   │         │  │          │
    │ id="about"  │id="port"  │ id="contact"
    └─────────┘   └────────┘   └───────────┘
```

**Scroll Suave:** HTML `scroll-behavior: smooth` + Intersection Observer

---

## Estado e Props

### Header
```tsx
interface HeaderState {
  isMenuOpen: boolean;
}

Props: Nenhum (usa document para scroll)
```

### Hero / About / Portfolio / Contact
```tsx
interface ScrollState {
  isVisible: boolean;
  ref: useRef<HTMLElement>(null);
}

Props: Nenhum
```

---

## Animações CSS

### Definidas em `globals.css`
```css
/* Blob animation - 7s infinito */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

/* Delay classes */
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
```

### Tailwind Animations
```
fade-in, slide-in-from-top, bounce
animate-blob (custom)
```

---

## Estilo de Design

### Cores
```
Primary:      #E7057A (Rosa Magenta)
Secondary:    #FFB6D9 (Rosa Claro)
Accent:       #FFFF00 (Amarelo)
Background:   #FFFFFF (Branco)
Foreground:   #1a1a1a (Preto)
Muted:        #F5F5F5 (Cinza Claro)
Border:       #E0E0E0 (Cinza Borda)
```

### Tipografia
```
Font Sans:  Geist (padrão do Next.js)
Font Mono:  Geist Mono
Font-Size:  Escala Tailwind (sm → 4xl)
Line Height: 1.4-1.6 (leading-relaxed)
```

### Espaçamento
```
Usando escala Tailwind: px-4, py-8, gap-6, etc
Sem arbitrary values (mantém performance)
Responsive: md:px-12, lg:py-32
```

---

## Performance Otimizações

```
✓ Next.js Image Component (lazy loading)
✓ Code Splitting automático
✓ CSS crítico inlined
✓ Animações CSS (não JS)
✓ Intersection Observer (evita reflows)
✓ SVG Icons (sem imagens)
✓ Sem dependências desnecessárias
✓ Blob Storage para imagens (CDN)
```

---

## SEO & Metadata

```
HTML Lang: pt-BR
Meta Tags:
- Title: A.M Braids | Tranças Profissionais & Estilo
- Description: [Otimizado para keywords]
- Keywords: tranças, box braids, etc
- Viewport: device-width, initial-scale=1
- Theme Color: #FFFFFF / #0f0f0f (light/dark)
```

---

## Responsividade Breakpoints

```
Mobile:   < 640px   (sm)
Tablet:   640-1024px (md → lg)
Desktop:  > 1024px  (lg)

Header:   Menu hamburger até md
Grid:     1 col (mobile) → 2 (tablet) → 3 (desktop)
```

---

## Fluxo de Desenvolvimento

```
┌─────────────────┐
│  Editar arquivo │
└────────┬────────┘
         │ (Hot Module Replacement)
         ▼
┌─────────────────┐
│ Browser recarrega│
└────────┬────────┘
         │ (Automático)
         ▼
┌─────────────────┐
│ Vê mudanças     │
└─────────────────┘
```

---

## Deployment Flow

```
┌──────────────┐
│  Git Push    │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│  GitHub Repository   │
└──────┬───────────────┘
       │
       │ (Webhook)
       ▼
┌──────────────────────┐
│ Vercel Build         │
│ - Instala deps       │
│ - Build Next.js      │
│ - Otimiza assets     │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Deploy à CDN         │
│ (Automático!)        │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Site ao vivo!        │
│ URL: seu-site.vercel.app
└──────────────────────┘
```

---

Arquitetura completa e pronta para escalar! 🚀

