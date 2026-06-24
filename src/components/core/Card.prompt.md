The base rounded surface for BCL — team cards, player cards, dashboards, info panels. Defaults to cream Surface (24px radius, soft shadow). Use accent variants for spotlight surfaces and `dark` for theatre mode.

```jsx
<Card>Squad summary…</Card>
<Card variant="pink" interactive>Featured player</Card>
<Card variant="gold">Winning bid</Card>
<Card variant="dark" pad={32}>Live auction theatre</Card>
```

Variants: surface (default) / canvas / dark / pink / green / gold / sky / peach. `interactive` adds a hover lift. Keep shadows soft — depth comes from colour and spacing.
