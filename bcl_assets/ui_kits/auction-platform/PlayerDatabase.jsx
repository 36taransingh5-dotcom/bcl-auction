// BCL Player Database — search + role/status filters + results table.
(function () {
const { Input, Badge, Avatar, Button } = window.DesignSystem_39a708;
const { useState } = React;

function PlayerDatabase() {
  const D = window.BCL_DATA;
  const [q, setQ] = useState('');
  const [role, setRole] = useState('All');
  const [status, setStatus] = useState('All');

  const roles = ['All', 'Batter', 'Bowler', 'All-Rounder', 'Wicketkeeper'];
  const statuses = ['All', 'upcoming', 'live', 'sold', 'unsold'];

  const rows = D.database.filter((p) =>
    p.name.toLowerCase().includes(q.toLowerCase()) &&
    (role === 'All' || p.role === role) &&
    (status === 'All' || p.status === status)
  );

  const Chip = ({ active, children, onClick }) => (
    <button onClick={onClick} style={{
      border: `1.5px solid ${active ? 'var(--bcl-ink)' : 'var(--bcl-line-strong)'}`,
      background: active ? 'var(--bcl-ink)' : 'transparent', color: active ? '#fff' : 'var(--bcl-ink-2)',
      fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, padding: '7px 14px',
      borderRadius: 999, cursor: 'pointer', textTransform: status !== 'All' && statuses.includes(children) ? 'capitalize' : 'none',
    }}>{children}</button>
  );

  return (
    <div style={{ background: 'var(--bcl-canvas)', minHeight: 'calc(100vh - 72px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '36px 28px' }}>
        <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-1.5px', marginBottom: 4 }}>Player Database</h1>
        <p style={{ color: 'var(--bcl-ink-2)', fontSize: 16, marginBottom: 24 }}>{rows.length} of {D.database.length} players</p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', marginBottom: 14 }}>
          <div style={{ width: 320 }}>
            <Input label="Search" placeholder="Player name…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
          {roles.map((r) => <Chip key={r} active={role === r} onClick={() => setRole(r)}>{r}</Chip>)}
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {statuses.map((s) => (
            <button key={s} onClick={() => setStatus(s)} style={{
              border: `1.5px solid ${status === s ? 'var(--bcl-pink)' : 'var(--bcl-line-strong)'}`,
              background: status === s ? 'var(--bcl-pink)' : 'transparent', color: status === s ? '#fff' : 'var(--bcl-ink-2)',
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, padding: '7px 14px',
              borderRadius: 999, cursor: 'pointer', textTransform: 'capitalize',
            }}>{s}</button>
          ))}
        </div>

        <div style={{ background: 'var(--bcl-surface)', border: '1px solid var(--bcl-line)', borderRadius: 24, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1.5fr 1.2fr 1fr', padding: '14px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bcl-ink-3)', borderBottom: '1px solid var(--bcl-line)' }}>
            <div>Player</div><div>Role</div><div>Base price</div><div>Status</div>
          </div>
          {rows.map((p, i) => (
            <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '2.5fr 1.5fr 1.2fr 1fr', alignItems: 'center', padding: '14px 22px', borderBottom: i < rows.length - 1 ? '1px solid var(--bcl-line)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar name={p.name} size={40} ring="green" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.3px' }}>{p.name}</span>
              </div>
              <div style={{ color: 'var(--bcl-ink-2)', fontWeight: 500 }}>{p.role}</div>
              <div className="bcl-num" style={{ fontWeight: 700 }}>{p.base}</div>
              <div><Badge status={p.status} /></div>
            </div>
          ))}
          {rows.length === 0 && (
            <div style={{ padding: '40px 22px', textAlign: 'center', color: 'var(--bcl-ink-3)' }}>No players match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
}

window.PlayerDatabase = PlayerDatabase;
})();
