Round player and team avatar; shows the image or falls back to initials on a green tile. Add an accent `ring` to highlight the active bidder or featured player.

```jsx
<Avatar name="Rohit Sharma" src="/players/rohit.png" size={64} ring="pink" />
<Avatar name="Mumbai Strikers" square ring="gold" />
```

`square` gives a rounded-square (team logos). `ring` accepts a palette name or any colour.
