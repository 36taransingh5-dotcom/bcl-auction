---
name: bcl-design
description: Use this skill to generate well-branded interfaces and assets for BCL (Bromies Cricket League — a real-time cricket auction platform), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Canvas:** warm cream `#fffaf0`. **Ink:** `#0a0a0a`. Accents: Green `#1a5c3a`, Gold `#e8b94a`, Pink `#ff4d8b`, Sky `#8fd3ff`, Peach `#ffb084`.
- **Type:** Inter / Inter Tight. Display 500–600, tight tracking (-1 to -2px), hero 72px. Tabular numerals for bids (`₹ 4.50 CR`).
- **Corners:** rounded always — buttons 12px, cards 24px, hero 32px, badges/timers pill. Soft shadows only; depth from colour + spacing.
- **Tokens:** link `styles.css`. **Components:** load `_ds_bundle.js`, read from `window.DesignSystem_39a708`.
- **Voice:** confident, action-first, ALL-CAPS micro-labels, no emoji, never betting language.
- **Components:** Button, Badge, Card, Input, Avatar, CountdownTimer, PlayerCard, TeamCard, BidPanel.
- **UI kit:** `ui_kits/auction-platform/` (Home, Auction Room, Team Dashboard, Player Database).
