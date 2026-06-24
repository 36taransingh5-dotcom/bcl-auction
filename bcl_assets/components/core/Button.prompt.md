The primary rounded CTA for BCL — use `variant="primary"` (Auction Black) for the main action on any screen, and `variant="accent"` to match a coloured auction surface.

```jsx
<Button variant="primary" size="lg">Enter Auction Room</Button>
<Button variant="primary" size="xl" full>PLACE BID</Button>
<Button variant="secondary">View Squad</Button>
<Button variant="accent" accent="gold">Approve Winner</Button>
<Button variant="ghost" size="sm">Skip player</Button>
```

Variants: `primary` (default, black), `secondary` (cream + ink border), `accent` (pink/green/gold/sky/peach), `ghost`. Sizes: `sm` `md` `lg` `xl`. Pass `iconLeft` / `iconRight` for Lucide icons, `full` to stretch, `disabled` to dim. Press state scales to 0.97.
