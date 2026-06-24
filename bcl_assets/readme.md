# BCL — Bromies Cricket League · Design System

A premium real-time cricket **auction** platform. BCL blends modern sports
broadcasting, playful-premium SaaS warmth, and live auction excitement. The base
atmosphere is a **warm cream stadium canvas** holding dark ink typography, colourful
auction cards, and live bidding interfaces.

It should feel like an **IPL auction room** crossed with **modern league-management
software** — approachable, premium, community-driven. Not an esports dashboard, not a
betting app.

## Sources
This system was authored from the BCL brand brief (no external Figma or codebase was
attached). All component implementations, sample data, and screens are original to this
system. If a production codebase or Figma exists, link it here so future updates can be
cross-referenced.

---

## CONTENT FUNDAMENTALS

**Voice:** confident, punchy, action-first. Short imperative phrases over long sentences.
The hero line — *"Bid. Build. Become Champions."* — sets the register: three beats,
period-separated, momentum building.

- **Casing:** Display headlines are sentence case with tight tracking. Micro-labels are
  ALL-CAPS with wide tracking (`LIVE`, `SOLD`, `UNSOLD`, `UPCOMING`, `PLACE BID`,
  `BASE PRICE`). Body and nav are sentence case.
- **Person:** Speaks to the team owner as **you** ("assemble a squad", "your purse").
  League-wide facts are stated plainly in third person.
- **Numbers:** Money is always Indian cricket convention — `₹ 4.50 CR`, `₹ 20 L`,
  rendered with tabular numerals (`.bcl-num`). Two decimals on crore for live bids.
- **Auction moments are loud but classy:** `SOLD TO` + team + price in a gold burst;
  `UNSOLD` is muted and quickly moves on. Never gambling language ("wager", "odds",
  "jackpot") — it's a league, not a book.
- **Emoji:** none. The energy comes from colour, motion and the cricket-ball mark, not
  emoji or unicode decoration.

Example copy: *"The real-time cricket auction room where leagues are won. Bid live,
manage your purse, and assemble a squad worth lifting the trophy."*

---

## VISUAL FOUNDATIONS

**Colour.** Warm cream canvas `#fffaf0` is the constant ground; almost everything sits on
it. Dark ink `#0a0a0a` is text + primary buttons. Five cricket accents do the colour
work: **Green** `#1a5c3a` (live cards, featured teams), **Gold** `#e8b94a` (winning bids,
trophies, premium), **Pink** `#ff4d8b` (player spotlights, the LIVE pulse, the PLACE BID
button), **Sky** `#8fd3ff` (stats/info), **Peach** `#ffb084` (community/team features).
Each accent has a soft tint (card fill) and a dark ink (readable text on that tint). The
dark theatre surface `#0a1a1a` is used *rarely* — only the live auction room and special
match moments.

**Type.** A single family — **Inter** (with **Inter Tight** for rounded display
headlines). Display weight is 500–600 with tight tracking (-1px to -2px); hero is 72px.
Body is 16px Inter. Bid amounts and timers use tabular numerals. No second typeface.

**Spacing & layout.** 4px base scale. Centered `1280px` container. 72px sticky cream nav.
Homepage hero is a **7/5 grid** (copy left, illustration/auction card right). Generous
whitespace — density comes from colour blocks, not cramming.

**Corners & cards.** Everything is rounded; **no sharp corners**. Buttons 12px, insets
16px, cards 24px, hero cards 32px, badges/timers fully pill. Cards have a **soft** shadow
at most (`--shadow-sm`); depth is created by **colour, spacing and illustration**, never
heavy drop shadows. A typical card is a solid accent fill or cream surface with a 1px
hairline (`--bcl-line`), 24px radius, 20–24px padding.

**Backgrounds.** Flat warm cream — no gradients, no busy textures. The brief calls for 3D
cricket illustrations (balls, trophies, bats, mascots) as the hero imagery; those are
**placeholders to be supplied** (see Iconography / Caveats). Avoid gradient washes.

**Motion.** Lively but not frantic. Easing is a soft `cubic-bezier(0.22,1,0.36,1)` for
most transitions and a gentle bounce `cubic-bezier(0.34,1.56,0.64,1)` for celebration
pops. The LIVE dot pulses (opacity 1 ↔ 0.25, 1.2s). The countdown ring drains and shifts
green → gold → pink, pulsing under 5s. New bids flash and the timer resets. SOLD triggers
a gold celebration pop. Durations: 140ms (fast), 240ms (default), 420ms (slow).

**States.** Buttons press to `scale(0.97)`. Interactive cards lift `translateY(-2/-3px)`
and deepen from `--shadow-sm` to `--shadow-md` on hover. Inputs swap a `--bcl-line-strong`
border for a solid ink border on focus (no glow ring). Filter chips invert to a solid
fill when active.

**Transparency/blur.** Used sparingly — only as low-opacity white overlays inside dark
accent cards (`rgba(255,255,255,0.06–0.10)`) to layer panels, and a dim scrim behind the
SOLD overlay. No heavy glassmorphism.

---

## ICONOGRAPHY

- **Logo / mark.** `assets/bcl-mark.svg` (cricket-ball roundel — black tile, pink ball,
  cream seam) and `assets/bcl-logo.svg` (mark + "BCL" wordmark). Wordmark is Inter Tight
  700, -1.5px tracking. The mark works on cream, ink, and accent grounds.
- **UI icons.** The system currently relies on typographic affordances (arrows `→`,
  uppercase labels, coloured dots) rather than a packed icon set. When line icons are
  needed, use **Lucide** (rounded, 2px stroke — matches the friendly geometry) from CDN:
  `https://unpkg.com/lucide@latest`. This is a **substitution** — no brand icon set was
  provided. Flag if you adopt a different set.
- **3D illustrations.** Cricket balls, trophies, bats, stadium mascots and team
  characters are core to the brief but were **not supplied**. Drop real 3D renders into
  `assets/` and reference them in the hero and player cards. Do **not** hand-draw these as
  SVG.
- **Emoji:** not used.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — entry point (imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `bcl-mark.svg`, `bcl-logo.svg`.
- `readme.md` — this file. `SKILL.md` — Agent-Skill manifest.

**Components** (`components/`) — namespace `window.DesignSystem_39a708`
- `core/` — `Button`, `Badge`, `Card`, `Input`, `Avatar`, `CountdownTimer`.
- `auction/` — `PlayerCard`, `TeamCard`, `BidPanel`.

**UI Kits** (`ui_kits/`)
- `auction-platform/` — full web app: Home, Auction Room, Team Dashboard, Player Database.

**Foundation cards** (`guidelines/`) — colour, type, spacing and brand specimen cards
shown in the Design System tab.

> Namespace note: the compiler assigned `DesignSystem_39a708`. Card/UI-kit HTML reads
> components via `const { Button } = window.DesignSystem_39a708`.
