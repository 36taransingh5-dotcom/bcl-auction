/* @ds-bundle: {"format":3,"namespace":"DesignSystem_39a708","components":[{"name":"BidPanel","sourcePath":"components/auction/BidPanel.jsx"},{"name":"PlayerCard","sourcePath":"components/auction/PlayerCard.jsx"},{"name":"TeamCard","sourcePath":"components/auction/TeamCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CountdownTimer","sourcePath":"components/core/CountdownTimer.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/auction/BidPanel.jsx":"e665618f4e64","components/auction/PlayerCard.jsx":"fdc58fde0a5c","components/auction/TeamCard.jsx":"a1287746205e","components/core/Avatar.jsx":"ea34b590da05","components/core/Badge.jsx":"e4b9ef9465d0","components/core/Button.jsx":"6c086c1ba165","components/core/Card.jsx":"fabdfa7f060f","components/core/CountdownTimer.jsx":"e636cc54c7c0","components/core/Input.jsx":"a69754d831a2","ui_kits/auction-platform/AuctionRoom.jsx":"ae8b1bf8043b","ui_kits/auction-platform/Home.jsx":"4993772e18d9","ui_kits/auction-platform/PlayerDatabase.jsx":"7f0021654c16","ui_kits/auction-platform/TeamDashboard.jsx":"6a9eecc80e20","ui_kits/auction-platform/TopNav.jsx":"4dca8a4a6619","ui_kits/auction-platform/app.jsx":"748804f07a7b","ui_kits/auction-platform/data.js":"0ae4346ff110"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_39a708 = window.DesignSystem_39a708 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BCL Avatar — round player / team avatar with optional accent ring.
 * Falls back to initials on a coloured tile.
 */
function Avatar({
  src = null,
  name = '',
  size = 48,
  ring = null,
  // accent ring colour: pink|green|gold|sky|peach|ink
  square = false,
  style = {},
  ...rest
}) {
  const accents = {
    pink: '#ff4d8b',
    green: '#1a5c3a',
    gold: '#e8b94a',
    sky: '#8fd3ff',
    peach: '#ffb084',
    ink: '#0a0a0a'
  };
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const radius = square ? Math.round(size * 0.28) : '50%';
  const ringColor = ring ? accents[ring] || ring : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: radius,
      background: src ? 'var(--bcl-surface-2)' : 'var(--bcl-green)',
      color: '#fff',
      overflow: 'hidden',
      flexShrink: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.38),
      letterSpacing: '-0.02em',
      boxShadow: ringColor ? `0 0 0 3px var(--bcl-canvas), 0 0 0 5px ${ringColor}` : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/auction/TeamCard.jsx
try { (() => {
/**
 * BCL TeamCard — team summary: logo, name, players bought, purse spent/remaining.
 * Cream surface with a coloured purse meter.
 */
function TeamCard({
  name = 'Team Name',
  logo = null,
  accent = 'green',
  // ring + meter colour
  players = 0,
  spent = 0,
  // in CR
  purse = 120,
  // total CR
  style = {},
  onClick
}) {
  const accents = {
    pink: '#ff4d8b',
    green: '#1a5c3a',
    gold: '#e8b94a',
    sky: '#8fd3ff',
    peach: '#ffb084'
  };
  const c = accents[accent] || accents.green;
  const remaining = Math.max(0, purse - spent);
  const pct = Math.max(0, Math.min(1, spent / purse));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--bcl-surface)',
      border: '1px solid var(--bcl-line)',
      borderRadius: 24,
      padding: 20,
      width: 300,
      boxShadow: 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (onClick) e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: logo,
    square: true,
    size: 52,
    ring: accent
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      letterSpacing: '-0.02em',
      color: 'var(--bcl-ink)',
      lineHeight: 1.1
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--bcl-ink-3)',
      marginTop: 2
    }
  }, players, " players bought"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--bcl-ink-3)'
    }
  }, "Spent"), /*#__PURE__*/React.createElement("div", {
    className: "bcl-num",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--bcl-ink)'
    }
  }, "\u20B9", spent.toFixed(1), " CR")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--bcl-ink-3)'
    }
  }, "Remaining"), /*#__PURE__*/React.createElement("div", {
    className: "bcl-num",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: c
    }
  }, "\u20B9", remaining.toFixed(1), " CR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: 'var(--bcl-surface-2)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct * 100}%`,
      height: '100%',
      background: c,
      borderRadius: 999,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auction/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BCL Badge — uppercase status pill (LIVE / SOLD / UNSOLD / UPCOMING)
 * and accent tag chips for roles and categories.
 */
function Badge({
  children,
  status = null,
  // live | sold | unsold | upcoming  (overrides tone)
  tone = 'neutral',
  // neutral | pink | green | gold | sky | peach | ink
  soft = false,
  // soft tinted fill instead of solid
  dot = false,
  // leading status dot
  style = {},
  ...rest
}) {
  const solid = {
    neutral: ['#efe8d4', 'var(--bcl-ink-2)'],
    pink: ['#ff4d8b', '#fff'],
    green: ['#1a5c3a', '#fff'],
    gold: ['#e8b94a', '#6b5410'],
    sky: ['#8fd3ff', '#1c5b85'],
    peach: ['#ffb084', '#8a4a23'],
    ink: ['#0a0a0a', '#fff']
  };
  const softMap = {
    neutral: ['#efe8d4', 'var(--bcl-ink-2)'],
    pink: ['#ffdce8', '#9c1f4f'],
    green: ['#dce9e0', '#103d26'],
    gold: ['#f8edc9', '#6b5410'],
    sky: ['#dff1ff', '#1c5b85'],
    peach: ['#ffe5d4', '#8a4a23'],
    ink: ['#efe8d4', 'var(--bcl-ink)']
  };
  const statusMap = {
    live: {
      tone: 'pink',
      dot: true,
      label: 'Live'
    },
    sold: {
      tone: 'green',
      label: 'Sold'
    },
    unsold: {
      tone: 'neutral',
      label: 'Unsold'
    },
    upcoming: {
      tone: 'sky',
      soft: true,
      label: 'Upcoming'
    }
  };
  let effTone = tone,
    effSoft = soft,
    effDot = dot,
    label = children;
  if (status && statusMap[status]) {
    const sc = statusMap[status];
    effTone = sc.tone;
    effDot = sc.dot ?? dot;
    effSoft = sc.soft ?? false;
    if (label == null) label = sc.label;
  }
  const [bg, fg] = (effSoft ? softMap : solid)[effTone] || solid.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      ...style
    }
  }, rest), effDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'currentColor',
      animation: status === 'live' ? 'bclpulse 1.2s var(--ease-out) infinite' : 'none'
    }
  }), label, /*#__PURE__*/React.createElement("style", null, `@keyframes bclpulse{0%,100%{opacity:1}50%{opacity:0.25}}`));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/auction/PlayerCard.jsx
try { (() => {
/**
 * BCL PlayerCard — featured / database player card. Colour variants
 * (green, gold, pink, peach, sky) with role, stats, base price and status.
 */
function PlayerCard({
  name = 'Player Name',
  role = 'All-Rounder',
  variant = 'pink',
  // pink | green | gold | sky | peach
  photo = null,
  stats = [],
  // [{label, value}]
  basePrice = '₹ 2.00 CR',
  status = 'upcoming',
  // upcoming | live | sold | unsold
  soldPrice = null,
  style = {},
  onClick
}) {
  const themes = {
    pink: {
      bg: '#ff4d8b',
      fg: '#fff',
      sub: 'rgba(255,255,255,0.78)',
      chip: 'rgba(255,255,255,0.18)'
    },
    green: {
      bg: '#1a5c3a',
      fg: '#fff',
      sub: 'rgba(255,255,255,0.78)',
      chip: 'rgba(255,255,255,0.16)'
    },
    gold: {
      bg: '#e8b94a',
      fg: '#5a4710',
      sub: '#7a611c',
      chip: 'rgba(90,71,16,0.12)'
    },
    sky: {
      bg: '#8fd3ff',
      fg: '#13456a',
      sub: '#1c5b85',
      chip: 'rgba(19,69,106,0.12)'
    },
    peach: {
      bg: '#ffb084',
      fg: '#7a3f1c',
      sub: '#8a4a23',
      chip: 'rgba(122,63,28,0.12)'
    }
  };
  const t = themes[variant] || themes.pink;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: t.bg,
      color: t.fg,
      borderRadius: 24,
      padding: 22,
      width: 280,
      boxShadow: 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (onClick) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: t.sub
    }
  }, role), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    status: status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: photo,
    size: 64,
    style: {
      background: t.chip,
      color: t.fg
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, name))), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: t.chip,
      borderRadius: 14,
      padding: '10px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: t.sub,
      marginTop: 2
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: t.sub
    }
  }, status === 'sold' ? 'Sold for' : 'Base price'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
      marginTop: 2
    }
  }, status === 'sold' && soldPrice ? soldPrice : basePrice))));
}
Object.assign(__ds_scope, { PlayerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auction/PlayerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BCL Button — rounded friendly CTA.
 * Primary = Auction Black with white text; the main "PLACE BID" action.
 */
function Button({
  children,
  variant = 'primary',
  // primary | secondary | accent | ghost
  size = 'md',
  // sm | md | lg | xl
  accent = 'pink',
  // used when variant="accent": pink|green|gold|sky|peach
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 14,
      radius: 10,
      gap: 6
    },
    md: {
      padding: '12px 20px',
      fontSize: 16,
      radius: 12,
      gap: 8
    },
    lg: {
      padding: '16px 28px',
      fontSize: 18,
      radius: 14,
      gap: 10
    },
    xl: {
      padding: '20px 36px',
      fontSize: 20,
      radius: 16,
      gap: 12
    }
  };
  const accents = {
    pink: '#ff4d8b',
    green: '#1a5c3a',
    gold: '#e8b94a',
    sky: '#8fd3ff',
    peach: '#ffb084'
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    width: full ? '100%' : 'auto',
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    letterSpacing: '-0.01em',
    borderRadius: s.radius,
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    whiteSpace: 'nowrap',
    lineHeight: 1
  };
  const variants = {
    primary: {
      background: 'var(--bcl-black)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--bcl-canvas)',
      color: 'var(--bcl-ink)',
      borderColor: 'var(--bcl-ink)'
    },
    accent: {
      background: accents[accent] || accents.pink,
      color: accent === 'gold' || accent === 'sky' || accent === 'peach' ? 'var(--bcl-ink)' : '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--bcl-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/auction/BidPanel.jsx
try { (() => {
/**
 * BCL BidPanel — live bidding rail. Shows current highest bid, leading team,
 * bid history and the PLACE BID action. Dark theatre surface.
 */
function BidPanel({
  currentBid = '₹ 4.50 CR',
  leader = 'Mumbai Strikers',
  leaderAccent = 'gold',
  nextBid = '₹ 4.60 CR',
  history = [],
  // [{team, amount, accent}]
  onBid,
  style = {}
}) {
  const accents = {
    pink: '#ff4d8b',
    green: '#1a5c3a',
    gold: '#e8b94a',
    sky: '#8fd3ff',
    peach: '#ffb084'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bcl-dark)',
      color: 'var(--bcl-on-dark)',
      borderRadius: 24,
      padding: 24,
      width: 340,
      boxShadow: 'var(--shadow-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--bcl-on-dark-2)'
    }
  }, "Current highest bid"), /*#__PURE__*/React.createElement("div", {
    className: "bcl-num",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: '-0.02em',
      margin: '4px 0 12px'
    }
  }, currentBid), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: leader,
    square: true,
    size: 34,
    ring: leaderAccent
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--bcl-on-dark-2)',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }, "Leading"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, leader))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: onBid,
    style: {
      background: 'var(--bcl-pink)',
      color: '#fff',
      marginBottom: 6
    }
  }, "PLACE BID \xB7 ", nextBid), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--bcl-on-dark-2)',
      marginBottom: 18
    }
  }, "Tap to raise by the next increment"), history.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--bcl-on-dark-2)',
      marginBottom: 8
    }
  }, "Bid history"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, history.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '7px 10px',
      background: i === 0 ? 'rgba(255,255,255,0.07)' : 'transparent',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: accents[h.accent] || '#fff'
    }
  }), h.team), /*#__PURE__*/React.createElement("span", {
    className: "bcl-num",
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: i === 0 ? '#fff' : 'var(--bcl-on-dark-2)'
    }
  }, h.amount))))));
}
Object.assign(__ds_scope, { BidPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auction/BidPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BCL Card — rounded friendly surface. Depth comes from colour + spacing,
 * not heavy shadows. Use accent variants for spotlight surfaces.
 */
function Card({
  children,
  variant = 'surface',
  // surface | canvas | dark | pink | green | gold | sky | peach
  pad = 24,
  radius = 24,
  interactive = false,
  style = {},
  ...rest
}) {
  const variants = {
    surface: {
      background: 'var(--bcl-surface)',
      color: 'var(--bcl-ink)',
      border: '1px solid var(--bcl-line)'
    },
    canvas: {
      background: 'var(--bcl-canvas)',
      color: 'var(--bcl-ink)',
      border: '1px solid var(--bcl-line)'
    },
    dark: {
      background: 'var(--bcl-dark)',
      color: 'var(--bcl-on-dark)',
      border: '1px solid #1d3530'
    },
    pink: {
      background: 'var(--bcl-pink)',
      color: '#fff',
      border: '1px solid transparent'
    },
    green: {
      background: 'var(--bcl-green)',
      color: '#fff',
      border: '1px solid transparent'
    },
    gold: {
      background: 'var(--bcl-gold)',
      color: 'var(--bcl-gold-ink)',
      border: '1px solid transparent'
    },
    sky: {
      background: 'var(--bcl-sky)',
      color: 'var(--bcl-sky-ink)',
      border: '1px solid transparent'
    },
    peach: {
      background: 'var(--bcl-peach)',
      color: 'var(--bcl-peach-ink)',
      border: '1px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.surface;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: radius,
      padding: pad,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CountdownTimer.jsx
try { (() => {
/**
 * BCL CountdownTimer — circular auction timer. 20s default.
 * Ring drains and shifts to pink when time runs low. Purely visual driver
 * via `seconds` / `total` props (parent owns the real clock).
 */
function CountdownTimer({
  seconds = 20,
  total = 20,
  size = 120,
  label = 'SEC',
  style = {}
}) {
  const stroke = Math.max(6, Math.round(size * 0.09));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, seconds / total));
  const low = seconds <= 5;
  const color = low ? '#ff4d8b' : seconds <= 10 ? '#e8b94a' : '#1a5c3a';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--bcl-line)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: 'stroke-dashoffset 0.9s linear, stroke 0.3s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      animation: low ? 'bcltick 1s var(--ease-out) infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: Math.round(size * 0.34),
      color: 'var(--bcl-ink)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    }
  }, seconds), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.round(size * 0.1),
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: 'var(--bcl-ink-3)',
      marginTop: 2
    }
  }, label)), /*#__PURE__*/React.createElement("style", null, `@keyframes bcltick{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}`));
}
Object.assign(__ds_scope, { CountdownTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CountdownTimer.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BCL Input — cream field with ink focus ring. Friendly rounded.
 */
function Input({
  label = null,
  hint = null,
  iconLeft = null,
  size = 'md',
  // sm | md | lg
  full = true,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 12px',
      fontSize: 14,
      radius: 10
    },
    md: {
      padding: '12px 14px',
      fontSize: 16,
      radius: 12
    },
    lg: {
      padding: '15px 16px',
      fontSize: 17,
      radius: 14
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: full ? 'block' : 'inline-block',
      width: full ? '100%' : 'auto',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--bcl-ink-2)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--bcl-canvas)',
      border: `1.5px solid ${focus ? 'var(--bcl-ink)' : 'var(--bcl-line-strong)'}`,
      borderRadius: s.radius,
      padding: s.padding,
      transition: 'border-color var(--dur) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--bcl-ink-3)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      color: 'var(--bcl-ink)',
      width: '100%',
      minWidth: 0,
      ...style
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--bcl-ink-3)',
      marginTop: 6
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/AuctionRoom.jsx
try { (() => {
// BCL Live Auction Room v2 — theatrical spotlight, bid flash, UNSOLD, auctioneer desk.
(function () {
  const {
    Button,
    Badge,
    Avatar,
    PlayerCard,
    BidPanel,
    CountdownTimer
  } = window.DesignSystem_39a708;
  const {
    useState,
    useEffect
  } = React;
  function nextIncrement(bid) {
    if (bid < 1) return 0.05;
    if (bid < 10) return 0.10;
    return 0.50;
  }
  const fmt = cr => `₹ ${cr.toFixed(2)} CR`;
  function AuctionRoom() {
    const D = window.BCL_DATA;
    const teams = D.teams.slice(0, 4);
    const [bid, setBid] = useState(4.50);
    const [leaderIdx, setLeader] = useState(0);
    const [time, setTime] = useState(14);
    const [sold, setSold] = useState(false);
    const [unsold, setUnsold] = useState(false);
    const [bidAnimKey, setBidAK] = useState(0);
    const [history, setHistory] = useState([{
      team: 'Mumbai Strikers',
      amount: '₹ 4.50 CR',
      accent: 'gold'
    }, {
      team: 'Chennai Kings',
      amount: '₹ 4.40 CR',
      accent: 'sky'
    }, {
      team: 'Delhi Dynamos',
      amount: '₹ 4.30 CR',
      accent: 'pink'
    }]);
    useEffect(() => {
      if (sold || unsold) return;
      const id = setInterval(() => setTime(t => t > 0 ? t - 1 : 0), 1000);
      return () => clearInterval(id);
    }, [sold, unsold]);
    const placeBid = idx => {
      if (sold || unsold) return;
      const inc = nextIncrement(bid);
      const nb = Math.round((bid + inc) * 100) / 100;
      setBid(nb);
      setLeader(idx);
      setTime(20);
      setBidAK(k => k + 1);
      setHistory(h => [{
        team: teams[idx].name,
        amount: fmt(nb),
        accent: teams[idx].accent
      }, ...h].slice(0, 5));
    };
    const reset = () => {
      setBid(4.50);
      setLeader(0);
      setTime(14);
      setSold(false);
      setUnsold(false);
      setHistory([{
        team: 'Mumbai Strikers',
        amount: '₹ 4.50 CR',
        accent: 'gold'
      }, {
        team: 'Chennai Kings',
        amount: '₹ 4.40 CR',
        accent: 'sky'
      }]);
    };
    const inc = nextIncrement(bid);
    const accentHex = {
      pink: '#ff4d8b',
      green: '#1a5c3a',
      gold: '#e8b94a',
      sky: '#8fd3ff',
      peach: '#ffb084'
    };
    const leaderHex = accentHex[teams[leaderIdx].accent] || '#fff';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-dark)',
        minHeight: 'calc(100vh - 72px)',
        padding: 28,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(ellipse 720px 520px at 28% 44%, ${leaderHex}1c 0%, transparent 68%)`,
        transition: 'background 0.9s ease'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      status: "live"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bcl-on-dark)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: '-0.5px'
      }
    }, "Auction Theatre"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bcl-on-dark-2)',
        fontSize: 14
      }
    }, "\xB7 BCL Season 2025")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        width: 96,
        background: 'rgba(255,255,255,0.10)',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: `${18 / 64 * 100}%`,
        background: 'var(--bcl-gold)',
        borderRadius: 999
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bcl-on-dark-2)',
        fontSize: 13
      }
    }, "Lot 18 / 64")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: reset,
      style: {
        background: 'transparent',
        color: 'var(--bcl-on-dark)',
        borderColor: 'rgba(255,255,255,0.25)'
      }
    }, "Reset demo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 24,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: `radial-gradient(ellipse 65% 80% at 28% 50%, ${leaderHex}14 0%, rgba(255,255,255,0.03) 100%)`,
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 24,
        padding: 28,
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: 28,
        alignItems: 'center',
        transition: 'background 0.9s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: '-20px -14px',
        borderRadius: 44,
        background: `radial-gradient(ellipse at 50% 60%, ${leaderHex}2e 0%, transparent 65%)`,
        pointerEvents: 'none',
        transition: 'background 0.6s ease'
      }
    }), /*#__PURE__*/React.createElement(PlayerCard, {
      name: "Rohit Sharma",
      role: "Batter",
      variant: "pink",
      status: sold ? 'sold' : unsold ? 'unsold' : 'live',
      basePrice: "\u20B9 2.00 CR",
      soldPrice: fmt(bid),
      stats: [{
        label: 'Matches',
        value: 243
      }, {
        label: 'Runs',
        value: '10.7k'
      }, {
        label: 'Avg',
        value: 48.9
      }],
      style: {
        position: 'relative'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(CountdownTimer, {
      seconds: time,
      total: 20,
      size: 154
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--bcl-on-dark-2)',
        fontSize: 13,
        marginTop: 14,
        maxWidth: 200,
        marginInline: 'auto',
        lineHeight: 1.55
      }
    }, sold ? 'Hammer down — squad & purse updated.' : unsold ? 'Player passed. Moving to next lot.' : 'New bid resets clock to 20s.'))), /*#__PURE__*/React.createElement("div", {
      key: `bp-${bidAnimKey}`,
      style: {
        animation: bidAnimKey > 0 ? 'bclbidpop 0.42s var(--ease-bounce)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(BidPanel, {
      currentBid: fmt(bid),
      leader: teams[leaderIdx].name,
      leaderAccent: teams[leaderIdx].accent,
      nextBid: fmt(Math.round((bid + inc) * 100) / 100),
      history: history,
      onBid: () => placeBid((leaderIdx + 1) % teams.length)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--bcl-on-dark-2)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        marginBottom: 12
      }
    }, "Bid as a team"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12
      }
    }, teams.map((t, i) => {
      const isLeader = leaderIdx === i;
      const c = accentHex[t.accent] || '#fff';
      return /*#__PURE__*/React.createElement("button", {
        key: t.name,
        onClick: () => placeBid(i),
        disabled: sold || unsold,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 16px',
          background: isLeader ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${isLeader ? c : 'rgba(255,255,255,0.06)'}`,
          borderRadius: 16,
          cursor: sold || unsold ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          opacity: sold || unsold ? 0.5 : 1,
          transition: 'all var(--dur) var(--ease-out)',
          boxShadow: isLeader ? `0 0 0 1px ${c}44, 0 4px 16px ${c}1e` : 'none'
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: t.name,
        square: true,
        size: 36,
        ring: t.accent
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'var(--bcl-on-dark)',
          fontWeight: 600,
          fontSize: 14,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, t.name), /*#__PURE__*/React.createElement("div", {
        className: "bcl-num",
        style: {
          color: 'var(--bcl-on-dark-2)',
          fontSize: 12
        }
      }, "\u20B9", (120 - t.spent).toFixed(1), " CR left")), isLeader && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 8,
          height: 8,
          borderRadius: 999,
          background: c,
          boxShadow: `0 0 10px ${c}`,
          flexShrink: 0
        }
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        padding: '14px 20px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: 'var(--bcl-on-dark-2)',
        marginRight: 'auto'
      }
    }, "Auctioneer Desk"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setTime(t => t + 10),
      disabled: sold || unsold,
      style: {
        background: 'transparent',
        color: 'var(--bcl-on-dark)',
        borderColor: 'rgba(255,255,255,0.20)',
        fontSize: 13
      }
    }, "+10s"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setTime(t => t + 30),
      disabled: sold || unsold,
      style: {
        background: 'transparent',
        color: 'var(--bcl-on-dark)',
        borderColor: 'rgba(255,255,255,0.20)',
        fontSize: 13
      }
    }, "+30s"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 22,
        background: 'rgba(255,255,255,0.12)',
        margin: '0 2px'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setUnsold(true);
        setTime(0);
      },
      disabled: sold || unsold,
      style: {
        background: 'rgba(131,125,110,0.22)',
        color: 'var(--bcl-on-dark-2)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 12,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.05em',
        padding: '9px 16px',
        cursor: sold || unsold ? 'not-allowed' : 'pointer',
        opacity: sold || unsold ? 0.45 : 1
      }
    }, "UNSOLD"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      accent: "gold",
      size: "md",
      onClick: () => setSold(true),
      disabled: sold || unsold,
      style: {
        fontWeight: 800,
        letterSpacing: '0.02em'
      }
    }, "SOLD \u2014 Hammer down"))), sold && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        top: 72,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(10,26,26,0.82)',
        animation: 'bclfade 0.28s var(--ease-out)'
      },
      onClick: reset
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-gold)',
        color: 'var(--bcl-gold-ink)',
        borderRadius: 32,
        padding: '48px 68px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-gold)',
        animation: 'bclpop 0.38s var(--ease-bounce)',
        position: 'relative',
        overflow: 'hidden',
        minWidth: 360
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.28) 0%, transparent 56%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        opacity: 0.72
      }
    }, "Sold to"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 44,
        letterSpacing: '-1.5px',
        margin: '8px 0 4px'
      }
    }, teams[leaderIdx].name), /*#__PURE__*/React.createElement("div", {
      className: "bcl-num",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 58,
        letterSpacing: '-2.5px',
        lineHeight: 1.08
      }
    }, fmt(bid)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        fontSize: 13,
        opacity: 0.66
      }
    }, "Tap anywhere for the next player"))), unsold && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        top: 72,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(10,26,26,0.82)',
        animation: 'bclfade 0.28s var(--ease-out)'
      },
      onClick: reset
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-surface-2)',
        color: 'var(--bcl-ink)',
        borderRadius: 32,
        padding: '44px 60px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-pop)',
        animation: 'bclpop 0.38s var(--ease-bounce)',
        minWidth: 320
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--bcl-ink-3)',
        marginBottom: 10
      }
    }, "Unsold"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: '-1.5px'
      }
    }, "Rohit Sharma"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--bcl-ink-2)',
        fontSize: 16,
        marginTop: 8,
        lineHeight: 1.5
      }
    }, "No qualifying bids received."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontSize: 13,
        color: 'var(--bcl-ink-3)'
      }
    }, "Tap anywhere to continue"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes bclfade   { from { opacity: 0 }              to { opacity: 1 } }
        @keyframes bclpop    { 0%  { transform: scale(0.65); opacity: 0 } 100% { transform: scale(1); opacity: 1 } }
        @keyframes bclbidpop { 0%  { transform: scale(1.04) } 60% { transform: scale(0.99) } 100% { transform: scale(1) } }
        @keyframes bclpulse  { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }
      `));
  }
  window.AuctionRoom = AuctionRoom;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/AuctionRoom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// BCL Homepage v2 — cricket identity, season ticker, illustration placeholders.
(function () {
  const {
    Button,
    Badge,
    PlayerCard,
    TeamCard,
    CountdownTimer
  } = window.DesignSystem_39a708;

  // Striped placeholder — marks where 3D cricket illustrations will drop in.
  function IllPlaceholder({
    label,
    height = 180
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height,
        borderRadius: 20,
        background: 'repeating-linear-gradient(45deg, var(--bcl-surface) 0, var(--bcl-surface) 8px, var(--bcl-surface-2) 8px, var(--bcl-surface-2) 16px)',
        border: '1.5px dashed var(--bcl-line-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--bcl-ink-3)',
        letterSpacing: '0.04em',
        background: 'rgba(255,250,240,0.88)',
        padding: '5px 12px',
        borderRadius: 8
      }
    }, label));
  }
  function Home({
    onNav
  }) {
    const D = window.BCL_DATA;
    const wrap = {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 28px'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-canvas)',
        paddingBottom: 80
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-black)',
        padding: '9px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bcl-gold)',
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      }
    }, "BCL Season 2025"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.28)',
        fontSize: 12
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bcl-on-dark-2)',
        fontSize: 12,
        fontWeight: 500
      }
    }, "64 Players \xB7 8 Teams \xB7 \u20B9 960 CR total purse"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.28)',
        fontSize: 12
      }
    }, "\xB7"), /*#__PURE__*/React.createElement(Badge, {
      status: "live",
      style: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bcl-on-dark-2)',
        fontSize: 12,
        fontWeight: 500
      }
    }, "Auction now live"))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        gap: 40,
        alignItems: 'center',
        padding: '64px 28px 56px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 68,
        fontWeight: 600,
        letterSpacing: '-2.5px',
        lineHeight: 1.0,
        color: 'var(--bcl-ink)',
        textWrap: 'balance'
      }
    }, "Bid. Build.", /*#__PURE__*/React.createElement("br", null), "Become Champions."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        color: 'var(--bcl-ink-2)',
        maxWidth: 460,
        margin: '22px 0 30px',
        lineHeight: 1.55
      }
    }, "The real-time cricket auction room where leagues are won. Bid live, manage your purse, and assemble a squad worth lifting the trophy."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav('auction')
    }, "Enter Auction Room"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNav('teams')
    }, "View Teams"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(IllPlaceholder, {
      label: "3D illustration \u2014 cricket ball \xB7 bat \xB7 trophy",
      height: 118
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-green)',
        color: '#fff',
        borderRadius: 28,
        padding: '24px 26px',
        boxShadow: 'var(--shadow-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: '#ff4d8b',
        animation: 'bclpulse 1.2s infinite'
      }
    }), "Live Auction"), /*#__PURE__*/React.createElement(CountdownTimer, {
      seconds: 14,
      total: 20,
      size: 64,
      label: "SEC"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.65)'
      }
    }, "On the block"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        letterSpacing: '-1px',
        margin: '4px 0 16px'
      }
    }, "Rohit Sharma"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        background: 'rgba(255,255,255,0.10)',
        borderRadius: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.65)'
      }
    }, "Current bid"), /*#__PURE__*/React.createElement("div", {
      className: "bcl-num",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26
      }
    }, "\u20B9 4.50 CR")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      accent: "pink",
      onClick: () => onNav('auction')
    }, "Enter Room \u2192"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 32,
        fontWeight: 600,
        letterSpacing: '-1px'
      }
    }, "Teams in the league"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav('teams'),
      style: {
        border: 'none',
        background: 'none',
        color: 'var(--bcl-ink-2)',
        fontWeight: 600,
        fontSize: 15,
        cursor: 'pointer'
      }
    }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16
      }
    }, D.teams.slice(0, 6).map(t => /*#__PURE__*/React.createElement(TeamCard, _extends({
      key: t.name
    }, t, {
      style: {
        width: '100%'
      },
      onClick: () => onNav('teams')
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 32,
        fontWeight: 600,
        letterSpacing: '-1px',
        marginBottom: 20
      }
    }, "Featured players"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, D.featured.map(p => /*#__PURE__*/React.createElement(PlayerCard, _extends({
      key: p.name
    }, p, {
      style: {
        width: '100%'
      },
      onClick: () => onNav('players')
    }))))), /*#__PURE__*/React.createElement("style", null, `@keyframes bclpulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }`));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/PlayerDatabase.jsx
try { (() => {
// BCL Player Database — search + role/status filters + results table.
(function () {
  const {
    Input,
    Badge,
    Avatar,
    Button
  } = window.DesignSystem_39a708;
  const {
    useState
  } = React;
  function PlayerDatabase() {
    const D = window.BCL_DATA;
    const [q, setQ] = useState('');
    const [role, setRole] = useState('All');
    const [status, setStatus] = useState('All');
    const roles = ['All', 'Batter', 'Bowler', 'All-Rounder', 'Wicketkeeper'];
    const statuses = ['All', 'upcoming', 'live', 'sold', 'unsold'];
    const rows = D.database.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) && (role === 'All' || p.role === role) && (status === 'All' || p.status === status));
    const Chip = ({
      active,
      children,
      onClick
    }) => /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        border: `1.5px solid ${active ? 'var(--bcl-ink)' : 'var(--bcl-line-strong)'}`,
        background: active ? 'var(--bcl-ink)' : 'transparent',
        color: active ? '#fff' : 'var(--bcl-ink-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 600,
        padding: '7px 14px',
        borderRadius: 999,
        cursor: 'pointer',
        textTransform: status !== 'All' && statuses.includes(children) ? 'capitalize' : 'none'
      }
    }, children);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-canvas)',
        minHeight: 'calc(100vh - 72px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '36px 28px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 40,
        fontWeight: 600,
        letterSpacing: '-1.5px',
        marginBottom: 4
      }
    }, "Player Database"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--bcl-ink-2)',
        fontSize: 16,
        marginBottom: 24
      }
    }, rows.length, " of ", D.database.length, " players"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-end',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 320
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Search",
      placeholder: "Player name\u2026",
      value: q,
      onChange: e => setQ(e.target.value)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 10,
        flexWrap: 'wrap'
      }
    }, roles.map(r => /*#__PURE__*/React.createElement(Chip, {
      key: r,
      active: role === r,
      onClick: () => setRole(r)
    }, r))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 24,
        flexWrap: 'wrap'
      }
    }, statuses.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setStatus(s),
      style: {
        border: `1.5px solid ${status === s ? 'var(--bcl-pink)' : 'var(--bcl-line-strong)'}`,
        background: status === s ? 'var(--bcl-pink)' : 'transparent',
        color: status === s ? '#fff' : 'var(--bcl-ink-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 600,
        padding: '7px 14px',
        borderRadius: 999,
        cursor: 'pointer',
        textTransform: 'capitalize'
      }
    }, s))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-surface)',
        border: '1px solid var(--bcl-line)',
        borderRadius: 24,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2.5fr 1.5fr 1.2fr 1fr',
        padding: '14px 22px',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--bcl-ink-3)',
        borderBottom: '1px solid var(--bcl-line)'
      }
    }, /*#__PURE__*/React.createElement("div", null, "Player"), /*#__PURE__*/React.createElement("div", null, "Role"), /*#__PURE__*/React.createElement("div", null, "Base price"), /*#__PURE__*/React.createElement("div", null, "Status")), rows.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: 'grid',
        gridTemplateColumns: '2.5fr 1.5fr 1.2fr 1fr',
        alignItems: 'center',
        padding: '14px 22px',
        borderBottom: i < rows.length - 1 ? '1px solid var(--bcl-line)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: 40,
      ring: "green"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: '-0.3px'
      }
    }, p.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--bcl-ink-2)',
        fontWeight: 500
      }
    }, p.role), /*#__PURE__*/React.createElement("div", {
      className: "bcl-num",
      style: {
        fontWeight: 700
      }
    }, p.base), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      status: p.status
    })))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '40px 22px',
        textAlign: 'center',
        color: 'var(--bcl-ink-3)'
      }
    }, "No players match your filters."))));
  }
  window.PlayerDatabase = PlayerDatabase;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/PlayerDatabase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/TeamDashboard.jsx
try { (() => {
// BCL Team Dashboard — team summary card + budget stats + squad list.
(function () {
  const {
    Button,
    Badge,
    Avatar,
    TeamCard
  } = window.DesignSystem_39a708;
  function TeamDashboard({
    onNav
  }) {
    const D = window.BCL_DATA;
    const team = D.teams[0];
    const remaining = 120 - team.spent;
    const wrap = {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '36px 28px'
    };
    const Stat = ({
      label,
      value,
      accent
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--bcl-surface)',
        border: '1px solid var(--bcl-line)',
        borderRadius: 20,
        padding: '18px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--bcl-ink-3)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "bcl-num",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        letterSpacing: '-1px',
        color: accent || 'var(--bcl-ink)',
        marginTop: 4
      }
    }, value));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bcl-canvas)',
        minHeight: 'calc(100vh - 72px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: team.name,
      square: true,
      size: 64,
      ring: team.accent
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 40,
        fontWeight: 600,
        letterSpacing: '-1.5px'
      }
    }, team.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--bcl-ink-2)',
        fontSize: 15
      }
    }, "Team Dashboard \xB7 ", team.players, " players \xB7 120 CR starting purse")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        marginLeft: 'auto'
      },
      onClick: () => onNav('auction')
    }, "Go to Auction")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Total purse",
      value: "\u20B9 120 CR"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Spent",
      value: `₹ ${team.spent.toFixed(1)} CR`,
      accent: "var(--bcl-pink)"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Remaining",
      value: `₹ ${remaining.toFixed(1)} CR`,
      accent: "var(--bcl-green)"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Players bought",
      value: team.players
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: '-0.5px',
        marginBottom: 16
      }
    }, "Squad"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14
      }
    }, D.squad.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: 'var(--bcl-surface)',
        border: '1px solid var(--bcl-line)',
        borderRadius: 20,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: 48,
      ring: "sky"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        letterSpacing: '-0.3px'
      }
    }, p.name), /*#__PURE__*/React.createElement(Badge, {
      tone: "ink",
      soft: true,
      style: {
        marginTop: 4
      }
    }, p.role)), /*#__PURE__*/React.createElement("div", {
      className: "bcl-num",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 16,
        color: 'var(--bcl-green)'
      }
    }, p.price))))));
  }
  window.TeamDashboard = TeamDashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/TeamDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/TopNav.jsx
try { (() => {
// BCL top navigation — cream bar, logo left, center links, auth right.
(function () {
  const {
    Button
  } = window.DesignSystem_39a708;
  function TopNav({
    active = 'home',
    onNav
  }) {
    const links = [['home', 'Home'], ['teams', 'Teams'], ['players', 'Players'], ['auction', 'Auction']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 72,
        background: 'var(--bcl-canvas)',
        borderBottom: '1px solid var(--bcl-line)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 28px',
        gap: 24,
        position: 'sticky',
        top: 0,
        zIndex: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer'
      },
      onClick: () => onNav('home')
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/bcl-mark.svg",
      width: "34",
      height: "34",
      alt: "BCL"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: '-1px',
        color: 'var(--bcl-ink)'
      }
    }, "BCL")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 4,
        margin: '0 auto'
      }
    }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNav(id),
      style: {
        border: 'none',
        background: active === id ? 'var(--bcl-surface)' : 'transparent',
        color: active === id ? 'var(--bcl-ink)' : 'var(--bcl-ink-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: active === id ? 600 : 500,
        padding: '9px 16px',
        borderRadius: 999,
        cursor: 'pointer',
        transition: 'background var(--dur) var(--ease-out)'
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--bcl-ink)',
        cursor: 'pointer'
      }
    }, "Login"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNav('auction')
    }, "Auction Room")));
  }
  window.TopNav = TopNav;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/app.jsx
try { (() => {
// BCL auction-platform UI kit — app shell + router.
(function () {
  const {
    useState
  } = React;
  function App() {
    const [route, setRoute] = useState('home');
    const nav = r => {
      setRoute(r);
      window.scrollTo(0, 0);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        background: 'var(--bcl-canvas)'
      }
    }, /*#__PURE__*/React.createElement(TopNav, {
      active: route,
      onNav: nav
    }), route === 'home' && /*#__PURE__*/React.createElement(Home, {
      onNav: nav
    }), route === 'auction' && /*#__PURE__*/React.createElement(AuctionRoom, null), route === 'teams' && /*#__PURE__*/React.createElement(TeamDashboard, {
      onNav: nav
    }), route === 'players' && /*#__PURE__*/React.createElement(PlayerDatabase, null));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auction-platform/data.js
try { (() => {
// Shared sample data for the BCL auction-platform UI kit.
window.BCL_DATA = {
  teams: [{
    name: 'Mumbai Strikers',
    accent: 'gold',
    players: 12,
    spent: 84.5
  }, {
    name: 'Chennai Kings',
    accent: 'sky',
    players: 11,
    spent: 76.0
  }, {
    name: 'Delhi Dynamos',
    accent: 'pink',
    players: 13,
    spent: 91.5
  }, {
    name: 'Bengaluru Blasters',
    accent: 'green',
    players: 10,
    spent: 68.0
  }, {
    name: 'Kolkata Knights',
    accent: 'peach',
    players: 12,
    spent: 80.5
  }, {
    name: 'Punjab Panthers',
    accent: 'gold',
    players: 9,
    spent: 54.0
  }],
  featured: [{
    name: 'Rohit Sharma',
    role: 'Batter',
    variant: 'pink',
    status: 'live',
    basePrice: '₹ 2.00 CR',
    stats: [{
      label: 'Matches',
      value: 243
    }, {
      label: 'Runs',
      value: '10.7k'
    }, {
      label: 'Avg',
      value: 48.9
    }]
  }, {
    name: 'Jasprit Bumrah',
    role: 'Bowler',
    variant: 'green',
    status: 'sold',
    basePrice: '₹ 2.00 CR',
    soldPrice: '₹ 6.20 CR',
    stats: [{
      label: 'Matches',
      value: 189
    }, {
      label: 'Wkts',
      value: 312
    }, {
      label: 'Econ',
      value: 6.6
    }]
  }, {
    name: 'Virat Kohli',
    role: 'Batter',
    variant: 'gold',
    status: 'upcoming',
    basePrice: '₹ 2.00 CR',
    stats: [{
      label: 'Matches',
      value: 296
    }, {
      label: 'Runs',
      value: '12.3k'
    }, {
      label: 'Avg',
      value: 52.7
    }]
  }, {
    name: 'Hardik Pandya',
    role: 'All-Rounder',
    variant: 'peach',
    status: 'upcoming',
    basePrice: '₹ 1.50 CR',
    stats: [{
      label: 'Matches',
      value: 174
    }, {
      label: 'Runs',
      value: '3.4k'
    }, {
      label: 'Wkts',
      value: 142
    }]
  }],
  squad: [{
    name: 'Suryakumar Yadav',
    role: 'Batter',
    price: '₹ 5.20 CR'
  }, {
    name: 'Trent Boult',
    role: 'Bowler',
    price: '₹ 4.10 CR'
  }, {
    name: 'Tim David',
    role: 'All-Rounder',
    price: '₹ 3.80 CR'
  }, {
    name: 'Ishan Kishan',
    role: 'Wicketkeeper',
    price: '₹ 3.20 CR'
  }, {
    name: 'Piyush Chawla',
    role: 'Bowler',
    price: '₹ 1.40 CR'
  }, {
    name: 'Tilak Varma',
    role: 'Batter',
    price: '₹ 2.60 CR'
  }],
  database: [{
    name: 'Rohit Sharma',
    role: 'Batter',
    status: 'live',
    base: '₹ 2.00 CR'
  }, {
    name: 'Jasprit Bumrah',
    role: 'Bowler',
    status: 'sold',
    base: '₹ 6.20 CR'
  }, {
    name: 'Virat Kohli',
    role: 'Batter',
    status: 'upcoming',
    base: '₹ 2.00 CR'
  }, {
    name: 'Hardik Pandya',
    role: 'All-Rounder',
    status: 'upcoming',
    base: '₹ 1.50 CR'
  }, {
    name: 'Ravindra Jadeja',
    role: 'All-Rounder',
    status: 'sold',
    base: '₹ 4.80 CR'
  }, {
    name: 'KL Rahul',
    role: 'Wicketkeeper',
    status: 'upcoming',
    base: '₹ 2.00 CR'
  }, {
    name: 'Mohammed Shami',
    role: 'Bowler',
    status: 'unsold',
    base: '₹ 1.50 CR'
  }, {
    name: 'Shubman Gill',
    role: 'Batter',
    status: 'upcoming',
    base: '₹ 2.00 CR'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auction-platform/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BidPanel = __ds_scope.BidPanel;

__ds_ns.PlayerCard = __ds_scope.PlayerCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CountdownTimer = __ds_scope.CountdownTimer;

__ds_ns.Input = __ds_scope.Input;

})();
