import React from 'react';

/**
 * BCL CountdownTimer — circular auction timer. 20s default.
 * Ring drains and shifts to pink when time runs low. Purely visual driver
 * via `seconds` / `total` props (parent owns the real clock).
 */
export function CountdownTimer({
  seconds = 20,
  total = 20,
  size = 120,
  label = 'SEC',
  style = {},
}) {
  const stroke = Math.max(6, Math.round(size * 0.09));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, seconds / total));
  const low = seconds <= 5;
  const color = low ? '#ff4d8b' : seconds <= 10 ? '#e8b94a' : '#1a5c3a';

  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bcl-line)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 0.9s linear, stroke 0.3s var(--ease-out)' }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        animation: low ? 'bcltick 1s var(--ease-out) infinite' : 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: Math.round(size * 0.34), color: 'var(--bcl-ink)',
          fontVariantNumeric: 'tabular-nums', lineHeight: 1,
        }}>{seconds}</span>
        <span style={{
          fontSize: Math.round(size * 0.1), fontWeight: 700, letterSpacing: '0.12em',
          color: 'var(--bcl-ink-3)', marginTop: 2,
        }}>{label}</span>
      </div>
      <style>{`@keyframes bcltick{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}`}</style>
    </div>
  );
}
