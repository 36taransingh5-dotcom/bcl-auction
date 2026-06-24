The live bidding rail for the auction room — dark theatre surface showing the current highest bid, leading team, the big pink PLACE BID action, and bid history.

```jsx
<BidPanel
  currentBid="₹ 4.50 CR" leader="Mumbai Strikers" leaderAccent="gold"
  nextBid="₹ 4.60 CR" onBid={placeBid}
  history={[
    {team:'Mumbai Strikers', amount:'₹ 4.50 CR', accent:'gold'},
    {team:'Chennai Kings', amount:'₹ 4.40 CR', accent:'sky'},
  ]}
/>
```

Parent owns bid state and increment logic; `onBid` fires the raise. First history row is highlighted as the current leader.
