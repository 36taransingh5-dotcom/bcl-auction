// BCL top navigation — cream bar, logo left, center links, auth right.
(function () {
const { Button } = window.DesignSystem_39a708;

function TopNav({ active = 'home', onNav }) {
  const links = [
    ['home', 'Home'], ['teams', 'Teams'], ['players', 'Players'], ['auction', 'Auction'],
  ];
  return (
    <header style={{
      height: 72, background: 'var(--bcl-canvas)', borderBottom: '1px solid var(--bcl-line)',
      display: 'flex', alignItems: 'center', padding: '0 28px', gap: 24,
      position: 'sticky', top: 0, zIndex: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => onNav('home')}>
        <img src="../../assets/bcl-mark.svg" width="34" height="34" alt="BCL" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-1px', color: 'var(--bcl-ink)' }}>BCL</span>
      </div>

      <nav style={{ display: 'flex', gap: 4, margin: '0 auto' }}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => onNav(id)} style={{
            border: 'none', background: active === id ? 'var(--bcl-surface)' : 'transparent',
            color: active === id ? 'var(--bcl-ink)' : 'var(--bcl-ink-2)',
            fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: active === id ? 600 : 500,
            padding: '9px 16px', borderRadius: 999, cursor: 'pointer',
            transition: 'background var(--dur) var(--ease-out)',
          }}>{label}</button>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button style={{ border: 'none', background: 'transparent', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--bcl-ink)', cursor: 'pointer' }}>Login</button>
        <Button variant="primary" onClick={() => onNav('auction')}>Auction Room</Button>
      </div>
    </header>
  );
}

window.TopNav = TopNav;
})();
