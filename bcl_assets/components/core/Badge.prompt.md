Status pills and accent chips for BCL. Pass `status` for auction states (auto label, colour, and a pulsing dot on Live); pass `tone` + optional `soft` for role/category chips.

```jsx
<Badge status="live" />
<Badge status="sold" />
<Badge status="upcoming" />
<Badge tone="gold" soft>Batter</Badge>
<Badge tone="ink">All-Rounder</Badge>
```

`status`: live (pink, pulsing) · sold (green) · unsold (neutral) · upcoming (sky soft). `tone`: neutral / pink / green / gold / sky / peach / ink. Always uppercase, pill-shaped.
