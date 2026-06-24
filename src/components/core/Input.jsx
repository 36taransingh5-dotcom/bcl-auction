import React from 'react';

/**
 * BCL Input — cream field with ink focus ring. Friendly rounded.
 */
export function Input({
  label = null,
  hint = null,
  iconLeft = null,
  size = 'md',           // sm | md | lg
  full = true,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: { padding: '8px 12px', fontSize: 14, radius: 10 },
    md: { padding: '12px 14px', fontSize: 16, radius: 12 },
    lg: { padding: '15px 16px', fontSize: 17, radius: 14 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <label style={{ display: full ? 'block' : 'inline-block', width: full ? '100%' : 'auto', fontFamily: 'var(--font-body)' }}>
      {label && (
        <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--bcl-ink-2)', marginBottom: 6 }}>{label}</span>
      )}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--bcl-canvas)',
        border: `1.5px solid ${focus ? 'var(--bcl-ink)' : 'var(--bcl-line-strong)'}`,
        borderRadius: s.radius, padding: s.padding,
        transition: 'border-color var(--dur) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ display: 'flex', color: 'var(--bcl-ink-3)' }}>{iconLeft}</span>}
        <input
          onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: s.fontSize, color: 'var(--bcl-ink)',
            width: '100%', minWidth: 0, ...style,
          }}
          {...rest}
        />
      </span>
      {hint && <span style={{ display: 'block', fontSize: 12, color: 'var(--bcl-ink-3)', marginTop: 6 }}>{hint}</span>}
    </label>
  );
}
