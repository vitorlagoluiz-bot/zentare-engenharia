# Plan: Rebuild Zentare Engenharia Landing Page

Refactor the current landing page into a high-end, conversion-focused landing page for Zentare Engenharia. The focus is on technical authority, visual sophistication (Bordeaux and Gold palette), and clear conversion paths via WhatsApp.

## User Review Required

> [!IMPORTANT]
> - All "Solicitar orçamento" buttons will link to the provided WhatsApp number: `https://wa.me/5511918579184`.
> - The design will prioritize the Bordeaux (#3B0B12) and Gold (#C9A24A) palette with a focus on "Credibility, Clarity, and Authority".

## Proposed Changes

### 1. Visual & Structure Overhaul
- **Hero Section**: New high-impact hero with professional engineering imagery (avoiding generic skyscrapers), stronger hierarchy, and a direct WhatsApp CTA.
- **Authority Bar**: Add a highlighted section with key statistics: `+8 years experience`, `+500 inspections`, `+200 ongoing projects`.
- **"About" Section**: Refined narrative focusing on Eng.ª Civil Jaqueline Santos and technical responsibility.
- **Service Cards**: Redesign the grid with 6 specific services (Perícias Judiciais, Vistoria Técnica, Avaliações Patrimoniais, Inspeção Predial, ART, Acompanhamento de Obras) including icons and descriptions.
- **Pricing/Packages Section**: New commercial section with 3 tiers (Básico, Premium, Premium Plus) for residential units up to 50m², highlighting the "Premium" option.
- **Final CTA & Footer**: Strong conversion section before a professional footer with navigation and technician credentials.

### 2. Technical Improvements
- **Typography & Color**: Ensure consistent use of `Cormorant Garamond` (Serif) for headings and `Inter` (Sans) for body.
- **Responsive Design**: Optimization for mobile views, ensuring cards stack correctly and CTA buttons are easily accessible.
- **Interactivity**: Add subtle `framer-motion` entrance animations and hover effects on cards and buttons.
- **Floating WhatsApp**: Implement a persistent floating action button for quick contact.

## Technical Details
- **Palette**: Bordeaux (#3B0B12), Gold (#C9A24A), Graphite (#151515), Off-white (#F5F2EC).
- **Icons**: Use `lucide-react` for minimalist engineering and business icons.
- **Animations**: `framer-motion` for `initial={{ opacity: 0, y: 20 }}` while `inView`.
- **SEO**: Meta tags for title "Zentare Engenharia | Laudos e Perícias" and technical description.
