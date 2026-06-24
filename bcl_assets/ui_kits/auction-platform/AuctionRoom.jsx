// BCL Live Auction Room v2 — theatrical spotlight, bid flash, UNSOLD, auctioneer desk.
(function () {
const { Button, Badge, Avatar, PlayerCard, BidPanel, CountdownTimer } = window.DesignSystem_39a708;
const { useState, useEffect } = React;

function nextIncrement(bid) {
  if (bid < 1)  return 0.05;
  if (bid < 10) return 0.10;
  return 0.50;
}
const fmt = (cr) => `₹ ${cr.toFixed(2)} CR`;

function AuctionRoom() {
  const D = window.BCL_DATA;
  const teams = D.teams.slice(0, 4);
  const [bid, setBid]           = useState(4.50);
  const [leaderIdx, setLeader]  = useState(0);
  const [time, setTime]         = useState(14);
  const [sold, setSold]         = useState(false);
  const [unsold, setUnsold]     = useState(false);
  const [bidAnimKey, setBidAK]  = useState(0);
  const [history, setHistory]   = useState([
    { team: 'Mumbai Strikers', amount: '₹ 4.50 CR', accent: 'gold' },
    { team: 'Chennai Kings',   amount: '₹ 4.40 CR', accent: 'sky'  },
    { team: 'Delhi Dynamos',   amount: '₹ 4.30 CR', accent: 'pink' },
  ]);

  useEffect(() => {
    if (sold || unsold) return;
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [sold, unsold]);

  const placeBid = (idx) => {
    if (sold || unsold) return;
    const inc = nextIncrement(bid);
    const nb  = Math.round((bid + inc) * 100) / 100;
    setBid(nb); setLeader(idx); setTime(20);
    setBidAK((k) => k + 1);
    setHistory((h) => [{ team: teams[idx].name, amount: fmt(nb), accent: teams[idx].accent }, ...h].slice(0, 5));
  };

  const reset = () => {
    setBid(4.50); setLeader(0); setTime(14); setSold(false); setUnsold(false);
    setHistory([
      { team: 'Mumbai Strikers', amount: '₹ 4.50 CR', accent: 'gold' },
      { team: 'Chennai Kings',   amount: '₹ 4.40 CR', accent: 'sky'  },
    ]);
  };

  const inc        = nextIncrement(bid);
  const accentHex  = { pink: '#ff4d8b', green: '#1a5c3a', gold: '#e8b94a', sky: '#8fd3ff', peach: '#ffb084' };
  const leaderHex  = accentHex[teams[leaderIdx].accent] || '#fff';

  return (
    <div style={{ background: 'var(--bcl-dark)', minHeight: 'calc(100vh - 72px)', padding: 28, position: 'relative', overflow: 'hidden' }}>

      {/* Ambient spotlight — colour tracks the leading team */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(ellipse 720px 520px at 28% 44%, ${leaderHex}1c 0%, transparent 68%)`,
        transition: 'background 0.9s ease',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Badge status="live" />
            <span style={{ color: 'var(--bcl-on-dark)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.5px' }}>
              Auction Theatre
            </span>
            <span style={{ color: 'var(--bcl-on-dark-2)', fontSize: 14 }}>· BCL Season 2025</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ height: 4, width: 96, background: 'rgba(255,255,255,0.10)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(18 / 64) * 100}%`, background: 'var(--bcl-gold)', borderRadius: 999 }} />
              </div>
              <span style={{ color: 'var(--bcl-on-dark-2)', fontSize: 13 }}>Lot 18 / 64</span>
            </div>
            <Button variant="secondary" size="sm" onClick={reset}
              style={{ background: 'transparent', color: 'var(--bcl-on-dark)', borderColor: 'rgba(255,255,255,0.25)' }}>
              Reset demo
            </Button>
          </div>
        </div>

        {/* ── Main 2-col grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>

          {/* Left — player spotlight + timer */}
          <div style={{
            background: `radial-gradient(ellipse 65% 80% at 28% 50%, ${leaderHex}14 0%, rgba(255,255,255,0.03) 100%)`,
            border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, padding: 28,
            display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28, alignItems: 'center',
            transition: 'background 0.9s ease',
          }}>
            <div style={{ position: 'relative' }}>
              {/* Halo glow behind the player card */}
              <div style={{
                position: 'absolute', inset: '-20px -14px', borderRadius: 44,
                background: `radial-gradient(ellipse at 50% 60%, ${leaderHex}2e 0%, transparent 65%)`,
                pointerEvents: 'none', transition: 'background 0.6s ease',
              }} />
              <PlayerCard
                name="Rohit Sharma" role="Batter" variant="pink"
                status={sold ? 'sold' : unsold ? 'unsold' : 'live'}
                basePrice="₹ 2.00 CR" soldPrice={fmt(bid)}
                stats={[{ label: 'Matches', value: 243 }, { label: 'Runs', value: '10.7k' }, { label: 'Avg', value: 48.9 }]}
                style={{ position: 'relative' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <CountdownTimer seconds={time} total={20} size={154} />
              <p style={{ color: 'var(--bcl-on-dark-2)', fontSize: 13, marginTop: 14, maxWidth: 200, marginInline: 'auto', lineHeight: 1.55 }}>
                {sold    ? 'Hammer down — squad & purse updated.'
                : unsold ? 'Player passed. Moving to next lot.'
                :          'New bid resets clock to 20s.'}
              </p>
            </div>
          </div>

          {/* Right — bid panel with pop animation on new bid */}
          <div key={`bp-${bidAnimKey}`}
            style={{ animation: bidAnimKey > 0 ? 'bclbidpop 0.42s var(--ease-bounce)' : 'none' }}>
            <BidPanel
              currentBid={fmt(bid)}
              leader={teams[leaderIdx].name}
              leaderAccent={teams[leaderIdx].accent}
              nextBid={fmt(Math.round((bid + inc) * 100) / 100)}
              history={history}
              onBid={() => placeBid((leaderIdx + 1) % teams.length)}
            />
          </div>
        </div>

        {/* ── Team bidding strip ── */}
        <div style={{ marginTop: 24 }}>
          <div style={{ color: 'var(--bcl-on-dark-2)', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 12 }}>
            Bid as a team
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {teams.map((t, i) => {
              const isLeader = leaderIdx === i;
              const c = accentHex[t.accent] || '#fff';
              return (
                <button key={t.name} onClick={() => placeBid(i)} disabled={sold || unsold} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                  background: isLeader ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${isLeader ? c : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 16, cursor: (sold || unsold) ? 'not-allowed' : 'pointer',
                  textAlign: 'left', opacity: (sold || unsold) ? 0.5 : 1,
                  transition: 'all var(--dur) var(--ease-out)',
                  boxShadow: isLeader ? `0 0 0 1px ${c}44, 0 4px 16px ${c}1e` : 'none',
                }}>
                  <Avatar name={t.name} square size={36} ring={t.accent} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: 'var(--bcl-on-dark)', fontWeight: 600, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</div>
                    <div className="bcl-num" style={{ color: 'var(--bcl-on-dark-2)', fontSize: 12 }}>₹{(120 - t.spent).toFixed(1)} CR left</div>
                  </div>
                  {isLeader && (
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: c, boxShadow: `0 0 10px ${c}`, flexShrink: 0 }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Auctioneer control desk ── */}
        <div style={{
          marginTop: 16, padding: '14px 20px',
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--bcl-on-dark-2)', marginRight: 'auto' }}>
            Auctioneer Desk
          </span>
          <Button variant="secondary" size="sm" onClick={() => setTime((t) => t + 10)} disabled={sold || unsold}
            style={{ background: 'transparent', color: 'var(--bcl-on-dark)', borderColor: 'rgba(255,255,255,0.20)', fontSize: 13 }}>+10s</Button>
          <Button variant="secondary" size="sm" onClick={() => setTime((t) => t + 30)} disabled={sold || unsold}
            style={{ background: 'transparent', color: 'var(--bcl-on-dark)', borderColor: 'rgba(255,255,255,0.20)', fontSize: 13 }}>+30s</Button>
          <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.12)', margin: '0 2px' }} />
          <button onClick={() => { setUnsold(true); setTime(0); }} disabled={sold || unsold} style={{
            background: 'rgba(131,125,110,0.22)', color: 'var(--bcl-on-dark-2)',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 12,
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.05em',
            padding: '9px 16px', cursor: (sold || unsold) ? 'not-allowed' : 'pointer',
            opacity: (sold || unsold) ? 0.45 : 1,
          }}>UNSOLD</button>
          <Button variant="accent" accent="gold" size="md" onClick={() => setSold(true)} disabled={sold || unsold}
            style={{ fontWeight: 800, letterSpacing: '0.02em' }}>
            SOLD — Hammer down
          </Button>
        </div>

      </div>

      {/* ── SOLD celebration overlay ── */}
      {sold && (
        <div style={{
          position: 'fixed', inset: 0, top: 72, zIndex: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(10,26,26,0.82)', animation: 'bclfade 0.28s var(--ease-out)',
        }} onClick={reset}>
          <div style={{
            background: 'var(--bcl-gold)', color: 'var(--bcl-gold-ink)', borderRadius: 32,
            padding: '48px 68px', textAlign: 'center', boxShadow: 'var(--shadow-gold)',
            animation: 'bclpop 0.38s var(--ease-bounce)', position: 'relative', overflow: 'hidden', minWidth: 360,
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.28) 0%, transparent 56%)', pointerEvents: 'none' }} />
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.72 }}>Sold to</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-1.5px', margin: '8px 0 4px' }}>{teams[leaderIdx].name}</div>
            <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 58, letterSpacing: '-2.5px', lineHeight: 1.08 }}>{fmt(bid)}</div>
            <div style={{ marginTop: 18, fontSize: 13, opacity: 0.66 }}>Tap anywhere for the next player</div>
          </div>
        </div>
      )}

      {/* ── UNSOLD overlay ── */}
      {unsold && (
        <div style={{
          position: 'fixed', inset: 0, top: 72, zIndex: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(10,26,26,0.82)', animation: 'bclfade 0.28s var(--ease-out)',
        }} onClick={reset}>
          <div style={{
            background: 'var(--bcl-surface-2)', color: 'var(--bcl-ink)', borderRadius: 32,
            padding: '44px 60px', textAlign: 'center', boxShadow: 'var(--shadow-pop)',
            animation: 'bclpop 0.38s var(--ease-bounce)', minWidth: 320,
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bcl-ink-3)', marginBottom: 10 }}>Unsold</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, letterSpacing: '-1.5px' }}>Rohit Sharma</div>
            <div style={{ color: 'var(--bcl-ink-2)', fontSize: 16, marginTop: 8, lineHeight: 1.5 }}>No qualifying bids received.</div>
            <div style={{ marginTop: 16, fontSize: 13, color: 'var(--bcl-ink-3)' }}>Tap anywhere to continue</div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bclfade   { from { opacity: 0 }              to { opacity: 1 } }
        @keyframes bclpop    { 0%  { transform: scale(0.65); opacity: 0 } 100% { transform: scale(1); opacity: 1 } }
        @keyframes bclbidpop { 0%  { transform: scale(1.04) } 60% { transform: scale(0.99) } 100% { transform: scale(1) } }
        @keyframes bclpulse  { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }
      `}</style>
    </div>
  );
}

window.AuctionRoom = AuctionRoom;
})();
