Circular 20-second auction timer for the live room. The ring drains and shifts green → gold → pink as time runs out, pulsing under 5s. The parent owns the real countdown (reset on each new bid) and feeds `seconds`.

```jsx
<CountdownTimer seconds={timeLeft} total={20} size={140} />
```

Visual only — drive it from your auction clock. `total` controls the ring fraction (the auctioneer can extend time by raising both).
