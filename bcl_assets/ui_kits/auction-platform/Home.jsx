// BCL Homepage v2 — cricket identity, season ticker, illustration placeholders.
(function () {
const { Button, Badge, PlayerCard, TeamCard, CountdownTimer } = window.DesignSystem_39a708;

// Striped placeholder — marks where 3D cricket illustrations will drop in.
function IllPlaceholder({ label, height = 180 }) {
  return (
    <div style={{
      width: '100%', height, borderRadius: 20,
      background: 'repeating-linear-gradient(45deg, var(--bcl-surface) 0, var(--bcl-surface) 8px, var(--bcl-surface-2) 8px, var(--bcl-surface-2) 16px)',
      border: '1.5px dashed var(--bcl-line-strong)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bcl-ink-3)',
        letterSpacing: '0.04em', background: 'rgba(255,250,240,0.88)',
        padding: '5px 12px', borderRadius: 8,
      }}>{label}</span>
    </div>
  );
}

function Home({ onNav }) {
  const D   = window.BCL_DATA;
  const wrap = { maxWidth: 1280, margin: '0 auto', padding: '0 28px' };

  return (
    <div style={{ background: 'var(--bcl-canvas)', paddingBottom: 80 }}>

      {/* ── Season ticker ── */}
      <div style={{ background: 'var(--bcl-black)', padding: '9px 0' }}>
        <div style={{ ...wrap, display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--bcl-gold)', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            BCL Season 2025
          </span>
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12 }}>·</span>
          <span style={{ color: 'var(--bcl-on-dark-2)', fontSize: 12, fontWeight: 500 }}>64 Players · 8 Teams · ₹ 960 CR total purse</span>
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12 }}>·</span>
          <Badge status="live" style={{ fontSize: 11 }} />
          <span style={{ color: 'var(--bcl-on-dark-2)', fontSize: 12, fontWeight: 500 }}>Auction now live</span>
        </div>
      </div>

      {/* ── Hero — 7/5 grid ── */}
      <section style={{ ...wrap, display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 40, alignItems: 'center', padding: '64px 28px 56px' }}>
        <div>
          <h1 style={{ fontSize: 68, fontWeight: 600, letterSpacing: '-2.5px', lineHeight: 1.0, color: 'var(--bcl-ink)', textWrap: 'balance' }}>
            Bid. Build.<br />Become Champions.
          </h1>
          <p style={{ fontSize: 18, color: 'var(--bcl-ink-2)', maxWidth: 460, margin: '22px 0 30px', lineHeight: 1.55 }}>
            The real-time cricket auction room where leagues are won. Bid live, manage your purse, and assemble a squad worth lifting the trophy.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" size="lg" onClick={() => onNav('auction')}>Enter Auction Room</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('teams')}>View Teams</Button>
          </div>
        </div>

        {/* Right: illustration placeholder + live auction card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <IllPlaceholder label="3D illustration — cricket ball · bat · trophy" height={118} />

          <div style={{ background: 'var(--bcl-green)', color: '#fff', borderRadius: 28, padding: '24px 26px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: '#ff4d8b', animation: 'bclpulse 1.2s infinite' }} />
                Live Auction
              </span>
              <CountdownTimer seconds={14} total={20} size={64} label="SEC" />
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>On the block</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-1px', margin: '4px 0 16px' }}>Rohit Sharma</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'rgba(255,255,255,0.10)', borderRadius: 16 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Current bid</div>
                <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26 }}>₹ 4.50 CR</div>
              </div>
              <Button variant="accent" accent="pink" onClick={() => onNav('auction')}>Enter Room →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Teams ── */}
      <section style={{ ...wrap, marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-1px' }}>Teams in the league</h2>
          <button onClick={() => onNav('teams')} style={{ border: 'none', background: 'none', color: 'var(--bcl-ink-2)', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>View all →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {D.teams.slice(0, 6).map((t) => (
            <TeamCard key={t.name} {...t} style={{ width: '100%' }} onClick={() => onNav('teams')} />
          ))}
        </div>
      </section>

      {/* ── Featured players ── */}
      <section style={{ ...wrap, marginTop: 56 }}>
        <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-1px', marginBottom: 20 }}>Featured players</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {D.featured.map((p) => (
            <PlayerCard key={p.name} {...p} style={{ width: '100%' }} onClick={() => onNav('players')} />
          ))}
        </div>
      </section>

      <style>{`@keyframes bclpulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }`}</style>
    </div>
  );
}

window.Home = Home;
})();
