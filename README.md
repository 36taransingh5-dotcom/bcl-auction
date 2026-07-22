# BCL Auction

A real-time player auction app for the "Bromies Cricket League" (BCL). An admin runs a live auction where players are put up one at a time, teams place bids from their own screens, and a countdown timer drives the pace. Bids, sales, and team purses are persisted to a database via Prisma.

## Key Features

- **Live auction room** (`/auction`) where teams view the current player, the highest bid, a countdown timer, and can place bids or skip a player.
- **Admin dashboard** (`/admin/auction`) to start the next player (or a specific player), extend the timer, approve the current highest bidder as the winner, or mark a player unsold.
- **Real-time sync** across all connected clients via Socket.IO — auction state, bid updates, and timer ticks are broadcast to every client.
- **Automatic resolution**: if every team skips a player, the player is marked unsold; if all but the highest bidder skip, the player is auto-sold to the highest bidder.
- **Purse tracking**: each team has a purse that is decremented (and spend incremented) automatically when a player is sold.
- **Database seed script** that creates four teams and a handful of sample players (batsmen, bowlers, all-rounders, wicketkeepers).

## Tech Stack

- **Next.js 16** (App Router) with **React 19**
- **Custom Node server** (`server.js`) wrapping the Next.js request handler, used so **Socket.IO** can be attached to the same HTTP server
- **Prisma ORM** with a **SQLite** database (`prisma/dev.db`)
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) plus a custom CSS design-token system (`src/app/tokens/*.css`)
- **Framer Motion** for animation, **Lucide React** for icons
- TypeScript for config/types, JSX for components and pages
- ESLint (`eslint-config-next`)

## Project Structure

```
server.js                        # Custom Node server: Next.js + Socket.IO, all auction/live-bidding logic
prisma/
  schema.prisma                  # Team and Player models (SQLite)
  seed.js                        # Seeds sample teams and players
src/
  app/
    page.jsx                     # Landing page
    auction/                     # Live auction room (team-facing)
    admin/auction/                # Admin control panel
    tokens/                      # CSS design tokens (colors, spacing, typography, fonts)
  components/
    core/                        # Shared UI primitives (Button, Card, Badge, Input, Avatar, CountdownTimer)
    auction/                     # Auction-specific UI (BidPanel, PlayerCard, TeamCard)
  lib/socket.js                  # Socket.IO client instance
public/assets/                   # BCL logo/mark assets
bcl_assets/                      # Design-system reference assets, guidelines, and component templates
```

## Setup

Requires Node.js and npm.

```bash
npm install
```

Set up the database (generates the Prisma client, pushes the schema to SQLite, and seeds sample data):

```bash
npx prisma db push
node prisma/seed.js
```

## Usage

Run the app locally:

```bash
npm run dev
```

This starts the custom server (`server.js`), which serves Next.js and the Socket.IO server together on [http://localhost:3000](http://localhost:3000).

- Visit `/auction` for the team-facing live auction room.
- Visit `/admin/auction` for the admin controls (start next player, extend timer, approve winner, mark unsold).

### Other scripts

```bash
npm run build   # npx prisma db push && node prisma/seed.js && next build
npm run start   # NODE_ENV=production node server.js
npm run lint     # next lint
```

Note: `npm run build` re-runs `prisma db push` and re-seeds the database as part of the build step, which will reset any existing auction data.
