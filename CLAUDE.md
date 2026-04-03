# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

Single-page marketing site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

**Page composition** (`src/app/page.tsx`): sections are assembled in order — `Navbar → Hero → Features → HowItWorks → CTA → Footer`. `Results` and `Pricing` components exist in `src/components/` but are commented out pending content.

**Fonts** (configured in `layout.tsx`):
- `--font-bebas-neue` → `font-heading` (all-caps display headings)
- `--font-inter` → `font-body` / default body text

**Color palette** (defined in both `globals.css` CSS vars and `tailwind.config.ts`):
- `accent`: `#9D7CEC` (purple) — primary brand color
- `accent-dark`: `#7B5CC4` — hover state

**Animation pattern**: All components use `"use client"` and Framer Motion. Entrance animations use `initial/animate` on Hero, and `initial/whileInView + viewport={{ once: true }}` on all below-the-fold sections.

**Scroll anchors**: Sections use `id` attributes (`#diensten`, `#hoe-het-werkt`, `#contact`) with `scroll-mt-20 md:scroll-mt-24` to account for the fixed navbar height.

**CTA link**: `src/components/CTA.tsx` contains a `CALENDLY_URL` constant that needs to be replaced with the real Calendly booking link.

**Assets**: Brand images live in `public/assets/`. The navbar uses `fangform-wolf-trimmed.png` (wolf icon) and the Hero uses `fangform-logo-trimmed.png` (full logo).
