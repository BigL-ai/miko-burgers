# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev       # Start Vite dev server (use --host for mobile testing)
npm run build     # Production build → dist/
npm run preview   # Serve built version locally
npx vercel --yes --prod  # Deploy to Vercel production
```

No test framework configured. No linter configured.

## Architecture

Single-page burger ordering app. Zero backend — orders go to WhatsApp via deep link (`wa.me/NUMBER?text=MESSAGE`).

### Flow

```
App.jsx (step state machine: 'landing' → 'delivery-form' → 'menu')
  → User picks delivery/takeaway
  → If delivery: fills address form (Recoleta only)
  → Browses menu (loaded from menu.json)
  → Taps "Agregar" → CustomizeModal (remove ingredients, add extras)
  → Cart items accumulate in Zustand store
  → CartDrawer: review order, enter name, tap "Pedir por WhatsApp"
  → buildWhatsAppMessage() → buildWhatsAppUrl() → window.open()
```

### State Management (Zustand)

Two independent stores, no persistence:
- **useCartStore**: items with customizations, quantities, totals. Customized items get `customId = ${id}-${timestamp}` so the same burger with different mods appears as separate cart entries.
- **useOrderStore**: delivery type, customer name, address fields.

Components subscribe directly to stores (no prop drilling).

### Menu Data

`src/data/menu.json` is the single source of truth for:
- Categories and items (id, name, description, price, image, ingredients array)
- Extras with prices (bacon, cheddar, medallón, salsa)
- Config: deliveryFee, deliveryZone, whatsappNumber

Prices are integers in ARS (e.g., `15000` = $15.000). `formatPrice()` handles display formatting.

### Key Conventions

- **Naming**: The brand "Miço" uses the French ç (pronounced "Misso"). File names use "migo" for practicality, display names use "Miço".
- **Images**: `/public/images/menu/` as `.jpg`. Baby variants share images with their parent burger.
- **Delivery**: Flat $3,000 fee per order (not per item). Only Recoleta.
- **Styling**: Tailwind with custom palette — `miko-pink` (#FF1493), `miko-gold` (#FFD700), `miko-dark`, `miko-gray`. Font: Bebas Neue (headings), Inter (body).
- **Animations**: Framer Motion throughout — `whileTap`, `AnimatePresence`, layout animations.

### Deploy

Vercel project `miko-burgers` linked to GitHub repo `BigL-ai/miko-burgers`. Deploy via CLI (`npx vercel --yes --prod`). Auto-deploy from GitHub not yet connected.
