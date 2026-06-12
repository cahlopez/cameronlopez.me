# Cameron Lopez - Personal Portfolio

My personal portfolio: a clean, minimal, typography-focused site showcasing my
work and experience as a full-stack developer.

## Features

- **Minimal design**: Near-monochrome palette with a single accent, lots of whitespace
- **Light/Dark theme**: System-aware with a manual toggle (no flash on load)
- **Subtle motion**: Accessible scroll-reveal animations (respects `prefers-reduced-motion`)
- **Responsive**: Optimized for all device sizes

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Deployment**: Vercel with analytics

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   └── fonts/
│       └── Mona-Sans.woff2
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components (Header, Footer, Experience, Project)
│   ├── layouts/             # Page layouts
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── styles/              # Global styles and design tokens
├── astro.config.mts         # Astro configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended)

### Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start the dev server
pnpm build        # Build for production
pnpm preview      # Preview the production build
```

## Design

- **Typography**: Mona Sans variable font, with a monospace face for labels and dates
- **Color**: Neutral grayscale ramp plus one accent, defined as CSS variables in `src/styles/global.css`
- **Theme**: Light/dark via a `.dark` class, persisted to `localStorage`

## Development

- **Prettier**: Code formatting (with Astro + Tailwind plugins)
- **Husky + lint-staged**: Pre-commit formatting
- **TypeScript**: Type safety throughout

## Contact

- **Email**: hello@cameronlopez.me
- **LinkedIn**: [Cameron Lopez](https://www.linkedin.com/in/camahlopez/)
- **GitHub**: [@cahlopez](https://github.com/cahlopez)
- **Instagram**: [@\_cameronlopez](https://instagram.com/_cameronlopez)

---

Built with [Astro](https://astro.build) and [TailwindCSS](https://tailwindcss.com)
