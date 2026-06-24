import React from 'react';

/**
 * BCL Avatar — round player / team avatar with optional accent ring.
 * Falls back to initials on a coloured tile.
 */
export function Avatar({
  src = null,
  name = '',
  size = 48,
  ring = null,           // accent ring colour: pink|green|gold|sky|peach|ink
  square = false,
  style = {},
  ...rest
}) {
  const accents = { pink: '#ff4d8b', green: '#1a5c3a', gold: '#e8b94a', sky: '#8fd3ff', peach: '#ffb084', ink: '#0a0a0a' };
  const initials = name.split(' ').map((w) => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const radius = square ? Math.round(size * 0.28) : '50%';
  const ringColor = ring ? (accents[ring] || ring) : null;

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: radius,
        background: src ? 'var(--bcl-surface-2)' : 'var(--bcl-green)',
        color: '#fff', overflow: 'hidden', flexShrink: 0,
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: Math.round(size * 0.38), letterSpacing: '-0.02em',
        boxShadow: ringColor ? `0 0 0 3px var(--bcl-canvas), 0 0 0 5px ${ringColor}` : 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '?')}
    </span>
  );
}
