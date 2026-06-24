import React from 'react';

/**
 * BCL Button — rounded friendly CTA.
 * Primary = Auction Black with white text; the main "PLACE BID" action.
 */
export function Button({
  children,
  variant = 'primary',   // primary | secondary | accent | ghost
  size = 'md',           // sm | md | lg | xl
  accent = 'pink',       // used when variant="accent": pink|green|gold|sky|peach
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 14, radius: 10, gap: 6 },
    md: { padding: '12px 20px', fontSize: 16, radius: 12, gap: 8 },
    lg: { padding: '16px 28px', fontSize: 18, radius: 14, gap: 10 },
    xl: { padding: '20px 36px', fontSize: 20, radius: 16, gap: 12 },
  };
  const accents = {
    pink: '#ff4d8b', green: '#1a5c3a', gold: '#e8b94a', sky: '#8fd3ff', peach: '#ffb084',
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: s.gap, width: full ? '100%' : 'auto',
    padding: s.padding, fontSize: s.fontSize,
    fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: '-0.01em',
    borderRadius: s.radius, border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    whiteSpace: 'nowrap', lineHeight: 1,
  };

  const variants = {
    primary: { background: 'var(--bcl-black)', color: '#fff' },
    secondary: { background: 'var(--bcl-canvas)', color: 'var(--bcl-ink)', borderColor: 'var(--bcl-ink)' },
    accent: { background: accents[accent] || accents.pink, color: accent === 'gold' || accent === 'sky' || accent === 'peach' ? 'var(--bcl-ink)' : '#fff' },
    ghost: { background: 'transparent', color: 'var(--bcl-ink)' },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
