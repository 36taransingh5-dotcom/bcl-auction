import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

/**
 * BCL TeamCard — team summary: logo, name, players bought, purse spent/remaining.
 * Cream surface with a coloured purse meter.
 */
export function TeamCard({
  name = 'Team Name',
  logo = null,
  accent = 'green',          // ring + meter colour
  players = 0,
  spent = 0,                 // in CR
  purse = 120,               // total CR
  style = {},
  onClick,
}) {
  const accents = { pink: '#ff4d8b', green: '#1a5c3a', gold: '#e8b94a', sky: '#8fd3ff', peach: '#ffb084' };
  const c = accents[accent] || accents.green;
  const remaining = Math.max(0, purse - spent);
  const pct = Math.max(0, Math.min(1, spent / purse));

  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bcl-surface)', border: '1px solid var(--bcl-line)',
        borderRadius: 24, padding: 20, width: 300, boxShadow: 'var(--shadow-sm)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform var(--dur) var(--ease-out)', ...style,
      }}
      onMouseEnter={(e) => { if (onClick) e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <Avatar name={name} src={logo} square size={52} ring={accent} />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', color: 'var(--bcl-ink)', lineHeight: 1.1 }}>{name}</div>
          <div style={{ fontSize: 13, color: 'var(--bcl-ink-3)', marginTop: 2 }}>{players} players bought</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--bcl-ink-3)' }}>Spent</div>
          <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--bcl-ink)' }}>₹{spent.toFixed(1)} CR</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--bcl-ink-3)' }}>Remaining</div>
          <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: c }}>₹{remaining.toFixed(1)} CR</div>
        </div>
      </div>

      <div style={{ height: 8, borderRadius: 999, background: 'var(--bcl-surface-2)', overflow: 'hidden' }}>
        <div style={{ width: `${pct * 100}%`, height: '100%', background: c, borderRadius: 999, transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    </div>
  );
}
