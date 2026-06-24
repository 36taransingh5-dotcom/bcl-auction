import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Avatar } from '../core/Avatar.jsx';

/**
 * BCL PlayerCard — featured / database player card. Colour variants
 * (green, gold, pink, peach, sky) with role, stats, base price and status.
 */
export function PlayerCard({
  name = 'Player Name',
  role = 'All-Rounder',
  variant = 'pink',          // pink | green | gold | sky | peach
  photo = null,
  stats = [],                // [{label, value}]
  basePrice = '₹ 2.00 CR',
  status = 'upcoming',       // upcoming | live | sold | unsold
  soldPrice = null,
  style = {},
  onClick,
}) {
  const themes = {
    pink: { bg: '#ff4d8b', fg: '#fff', sub: 'rgba(255,255,255,0.78)', chip: 'rgba(255,255,255,0.18)' },
    green: { bg: '#1a5c3a', fg: '#fff', sub: 'rgba(255,255,255,0.78)', chip: 'rgba(255,255,255,0.16)' },
    gold: { bg: '#e8b94a', fg: '#5a4710', sub: '#7a611c', chip: 'rgba(90,71,16,0.12)' },
    sky: { bg: '#8fd3ff', fg: '#13456a', sub: '#1c5b85', chip: 'rgba(19,69,106,0.12)' },
    peach: { bg: '#ffb084', fg: '#7a3f1c', sub: '#8a4a23', chip: 'rgba(122,63,28,0.12)' },
  };
  const t = themes[variant] || themes.pink;

  return (
    <div
      onClick={onClick}
      style={{
        background: t.bg, color: t.fg, borderRadius: 24, padding: 22,
        width: 280, boxShadow: 'var(--shadow-sm)', cursor: onClick ? 'pointer' : 'default',
        transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => { if (onClick) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; } }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: t.sub }}>{role}</span>
        <Badge status={status} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <Avatar name={name} src={photo} size={64} style={{ background: t.chip, color: t.fg }} />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1.05 }}>{name}</div>
        </div>
      </div>

      {stats.length > 0 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ flex: 1, background: t.chip, borderRadius: 14, padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.sub, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.sub }}>
            {status === 'sold' ? 'Sold for' : 'Base price'}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', marginTop: 2 }}>
            {status === 'sold' && soldPrice ? soldPrice : basePrice}
          </div>
        </div>
      </div>
    </div>
  );
}
