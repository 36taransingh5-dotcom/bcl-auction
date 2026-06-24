import React from 'react';

/**
 * BCL Badge — uppercase status pill (LIVE / SOLD / UNSOLD / UPCOMING)
 * and accent tag chips for roles and categories.
 */
export function Badge({
  children,
  status = null,         // live | sold | unsold | upcoming  (overrides tone)
  tone = 'neutral',      // neutral | pink | green | gold | sky | peach | ink
  soft = false,          // soft tinted fill instead of solid
  dot = false,           // leading status dot
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
    ink: ['#0a0a0a', '#fff'],
  };
  const softMap = {
    neutral: ['#efe8d4', 'var(--bcl-ink-2)'],
    pink: ['#ffdce8', '#9c1f4f'],
    green: ['#dce9e0', '#103d26'],
    gold: ['#f8edc9', '#6b5410'],
    sky: ['#dff1ff', '#1c5b85'],
    peach: ['#ffe5d4', '#8a4a23'],
    ink: ['#efe8d4', 'var(--bcl-ink)'],
  };
  const statusMap = {
    live: { tone: 'pink', dot: true, label: 'Live' },
    sold: { tone: 'green', label: 'Sold' },
    unsold: { tone: 'neutral', label: 'Unsold' },
    upcoming: { tone: 'sky', soft: true, label: 'Upcoming' },
  };

  let effTone = tone, effSoft = soft, effDot = dot, label = children;
  if (status && statusMap[status]) {
    const sc = statusMap[status];
    effTone = sc.tone; effDot = sc.dot ?? dot; effSoft = sc.soft ?? false;
    if (label == null) label = sc.label;
  }
  const [bg, fg] = (effSoft ? softMap : solid)[effTone] || solid.neutral;

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 999,
        background: bg, color: fg,
        fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
        letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4,
        ...style,
      }}
      {...rest}
    >
      {effDot && (
        <span style={{
          width: 7, height: 7, borderRadius: 999, background: 'currentColor',
          animation: status === 'live' ? 'bclpulse 1.2s var(--ease-out) infinite' : 'none',
        }} />
      )}
      {label}
      <style>{`@keyframes bclpulse{0%,100%{opacity:1}50%{opacity:0.25}}`}</style>
    </span>
  );
}
