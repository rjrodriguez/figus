---
name: The 2026 Collector System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006e2f'
  on-secondary: '#ffffff'
  secondary-container: '#6bff8f'
  on-secondary-container: '#007432'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  h2:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  number-heavy:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 16px
  grid-gutter: 12px
---

## Brand & Style

The design system is engineered for the high-velocity environment of a global sporting event. It prioritizes utility, speed, and the "collector's dopamine hit" through a **Minimalist / Corporate Modern** aesthetic. The focus is entirely on the digital stickers, using the UI as a transparent, high-performance scaffolding.

The emotional response should be one of organized completion and professional clarity. By stripping away decorative clutter, the system ensures that the vibrant colors of the stickers and the status indicators (Owned vs. Repeated) remain the primary focus. It adopts a mobile-first, PWA-centric philosophy where every interaction feels tactile yet lightweight, mimicking the efficiency of a high-end fintech app but applied to sports memorabilia.

## Colors

The palette is functional and semantic. The background is a stark, clean white to provide maximum contrast for the content.

- **Primary (Slate 900):** Used for primary actions, heavy text, and structural UI elements to ground the design.
- **Success Green (#22c55e):** Reserved for "Owned" states. When a user acquires a sticker, this color signals completion.
- **Warning Orange (#f59e0b):** Specifically for "Repeats." It acts as a vibrant visual hook to encourage trading.
- **Neutral Slate (Slate 500/600):** Used for secondary text, borders, and "Missing" item placeholders to maintain a professional, de-emphasized tone.

## Typography

This design system utilizes **Inter** for its primary interface language due to its exceptional legibility on small mobile screens. **Geist** is introduced for labels and technical data (sticker numbers, counts) to provide a slightly more "engineered" feel.

The hierarchy is tight and compact. We avoid oversized headings to maximize vertical screen real estate for the sticker grid. "Label-caps" is used for metadata like "Group A" or "Team Totals," while "Number-heavy" ensures sticker IDs are instantly recognizable during physical-to-digital trading workflows.

## Layout & Spacing

The layout utilizes a **Fluid Grid** optimized for a 2-column or 3-column sticker view on mobile devices. A strict 4px baseline shift (Tailwind-style) governs all spatial relationships.

- **Margins:** Standard 16px lateral margins for mobile views.
- **Gaps:** 12px gutters between sticker cards to balance density and touch targets.
- **Safe Areas:** Strict adherence to bottom-screen safe areas to ensure navigation remains accessible on gesture-based mobile OSs.
- **Density:** The "Album View" uses a compact grid, while the "Detail View" uses generous 24px-32px vertical stacking for readability.

## Elevation & Depth

To maintain a high-performance feel, the system avoids complex blurs and heavy shadows. Instead, it uses **Low-contrast outlines** and **Tonal layers**.

- **Surface Level 0:** Pure white (#ffffff) for the main page background.
- **Surface Level 1:** Slate 50 (#f8fafc) for card backgrounds and container areas.
- **Borders:** 1px solid borders using Slate 200 for unearned items, shifting to Success Green for owned items.
- **Shadows:** A single "Soft Drop" (0px 2px 4px rgba(15, 23, 42, 0.05)) is applied only to active, tappable primary cards to indicate interactivity.

## Shapes

The design system adopts a **Rounded** shape language to soften the professional tone and make the "collecting" experience feel more approachable and modern.

- **Sticker Cards:** Use `rounded-lg` (1rem) to mimic the slightly rounded corners of physical stickers.
- **Buttons & Inputs:** Use `rounded-md` (0.5rem) for a precise, functional look.
- **Badges:** Use "Full Pill" for repeat counts and status tags to differentiate them from structural card elements.

## Components

### Sticker Cards
The core component. 
- **Missing:** Grayscale, 40% opacity, dashed Slate 200 border.
- **Owned:** Full color, 100% opacity, 1px solid Success Green border. Subtle "check" icon in top right.
- **Repeated:** Same as Owned, but featuring a vibrant Warning Orange badge in the top right corner displaying the count (e.g., "+2").

### Primary Buttons
High-contrast Slate 900 background with white Inter Bold text. Use a slight scale-down transform (0.98) on active tap states for tactile feedback.

### Progress Bars
Thin 4px height tracks. Background in Slate 100, fill in Success Green. Placed at the top of Team sections.

### Search & Filters
Input fields use a Slate 50 background with a Slate 200 border. Use Lucide icons (Search, Filter, Scan) at 18px size with a stroke weight of 2px for clarity.

### Bottom Navigation
A fixed-position PWA bar. Glassmorphism is permitted here (Backdrop Blur 8px) with 90% opacity white background to allow sticker colors to peek through as the user scrolls. Use 24px Lucide icons.