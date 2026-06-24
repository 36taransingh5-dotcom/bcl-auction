import React from 'react';

/**
 * BCL Card — rounded friendly surface. Depth comes from colour + spacing,
 * not heavy shadows. Use accent variants for spotlight surfaces.
 */
export function Card({
  children,
  variant = 'surface',   // surface | canvas | dark | pink | green | gold | sky | peach
  pad = 24,
  radius = 24,
  interactive = false,
  style = {},
  ...rest
}) {
  const variants = {
    surface: { background: 'var(--bcl-surface)', color: 'var(--bcl-ink)', border: '1px solid var(--bcl-line)' },
    canvas: { background: 'var(--bcl-canvas)', color: 'var(--bcl-ink)', border: '1px solid var(--bcl-line)' },
    dark: { background: 'var(--bcl-dark)', color: 'var(--bcl-on-dark)', border: '1px solid #1d3530' },
    pink: { background: 'var(--bcl-pink)', color: '#fff', border: '1px solid transparent' },
    green: { background: 'var(--bcl-green)', color: '#fff', border: '1px solid transparent' },
    gold: { background: 'var(--bcl-gold)', color: 'var(--bcl-gold-ink)', border: '1px solid transparent' },
    sky: { background: 'var(--bcl-sky)', color: 'var(--bcl-sky-ink)', border: '1px solid transparent' },
    peach: { background: 'var(--bcl-peach)', color: 'var(--bcl-peach-ink)', border: '1px solid transparent' },
  };

  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.surface;

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        borderRadius: radius, padding: pad,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...v, ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
