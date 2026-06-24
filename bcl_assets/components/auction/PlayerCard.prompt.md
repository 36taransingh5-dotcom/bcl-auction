The hero unit of BCL — a coloured player card used in featured rows and the player database. Pick a `variant` colour, pass `stats`, and set `status` to flip the price label between base and sold.

```jsx
<PlayerCard
  name="Rohit Sharma" role="Batter" variant="pink"
  stats={[{label:'Matches',value:243},{label:'Runs',value:'10.7k'},{label:'Avg',value:48.9}]}
  basePrice="₹ 2.00 CR" status="live"
/>
<PlayerCard name="Bumrah" role="Bowler" variant="green" status="sold" soldPrice="₹ 6.20 CR" />
```

Variants: pink / green / gold / sky / peach. `status`: upcoming · live · sold · unsold. Composes Avatar + Badge.
