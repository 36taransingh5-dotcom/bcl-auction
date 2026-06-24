// BCL Team Dashboard — team summary card + budget stats + squad list.
(function () {
const { Button, Badge, Avatar, TeamCard } = window.DesignSystem_39a708;

function TeamDashboard({ onNav }) {
  const D = window.BCL_DATA;
  const team = D.teams[0];
  const remaining = 120 - team.spent;
  const wrap = { maxWidth: 1280, margin: '0 auto', padding: '36px 28px' };

  const Stat = ({ label, value, accent }) => (
    <div style={{ flex: 1, background: 'var(--bcl-surface)', border: '1px solid var(--bcl-line)', borderRadius: 20, padding: '18px 20px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bcl-ink-3)' }}>{label}</div>
      <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-1px', color: accent || 'var(--bcl-ink)', marginTop: 4 }}>{value}</div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bcl-canvas)', minHeight: 'calc(100vh - 72px)' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <Avatar name={team.name} square size={64} ring={team.accent} />
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-1.5px' }}>{team.name}</h1>
            <div style={{ color: 'var(--bcl-ink-2)', fontSize: 15 }}>Team Dashboard · {team.players} players · 120 CR starting purse</div>
          </div>
          <Button variant="primary" style={{ marginLeft: 'auto' }} onClick={() => onNav('auction')}>Go to Auction</Button>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
          <Stat label="Total purse" value="₹ 120 CR" />
          <Stat label="Spent" value={`₹ ${team.spent.toFixed(1)} CR`} accent="var(--bcl-pink)" />
          <Stat label="Remaining" value={`₹ ${remaining.toFixed(1)} CR`} accent="var(--bcl-green)" />
          <Stat label="Players bought" value={team.players} />
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.5px', marginBottom: 16 }}>Squad</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {D.squad.map((p) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--bcl-surface)', border: '1px solid var(--bcl-line)', borderRadius: 20, padding: 16 }}>
              <Avatar name={p.name} size={48} ring="sky" />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px' }}>{p.name}</div>
                <Badge tone="ink" soft style={{ marginTop: 4 }}>{p.role}</Badge>
              </div>
              <div className="bcl-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--bcl-green)' }}>{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.TeamDashboard = TeamDashboard;
})();
