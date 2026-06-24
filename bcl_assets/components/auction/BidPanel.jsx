import React from 'react';
import { Button } from '../core/Button.jsx';
import { Avatar } from '../core/Avatar.jsx';

/**
 * BCL BidPanel — live bidding rail. Shows current highest bid, leading team,
 * bid history and the PLACE BID action. Dark theatre surface.
 */
export function BidPanel({
  currentBid = '₹ 4.50 CR',
  leader = 'Mumbai Strikers',
  leaderAccent = 'gold',
  nextBid = '₹ 4.60 CR',
  history = [],              // [{team, amount, accent}]
  onBid,
  style = {},
}) {
  const accents = { pink: '#ff4d8b', green: '#1a5c3a', gold: '#e8b94a', sky: '#8fd3ff', peach: '#ffb084' };

  return (
    <div style={{
      background: 'var(--bcl-dark)', color: 'var(--bcl-on-dark)', borderRadius: 24,
      padding: 24, width: 340, boxShadow: 'var(--shadow-pop)', ...style,
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bcl-on-dark-2)' }}>Current highest bid</div>
      <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-0.02em', margin: '4px 0 12px' }}>{currentBid}</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'rgba(255,255,255,0.06)', borderRadius: 14, marginBottom: 18 }}>
        <Avatar name={leader} square size={34} ring={leaderAccent} />
        <div>
          <div style={{ fontSize: 11, color: 'var(--bcl-on-dark-2)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Leading</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{leader}</div>
        </div>
      </div>

      <Button variant="primary" size="lg" full onClick={onBid}
        style={{ background: 'var(--bcl-pink)', color: '#fff', marginBottom: 6 }}>
        PLACE BID · {nextBid}
      </Button>
      <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--bcl-on-dark-2)', marginBottom: 18 }}>Tap to raise by the next increment</div>

      {history.length > 0 && (
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bcl-on-dark-2)', marginBottom: 8 }}>Bid history</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {history.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: i === 0 ? 'rgba(255,255,255,0.07)' : 'transparent', borderRadius: 10 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: accents[h.accent] || '#fff' }} />
                  {h.team}
                </span>
                <span className="bcl-num" style={{ fontWeight: 700, fontSize: 13.5, color: i === 0 ? '#fff' : 'var(--bcl-on-dark-2)' }}>{h.amount}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
