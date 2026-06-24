import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ background: 'var(--bcl-canvas)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 64, color: 'var(--bcl-ink)' }}>Bromies Cricket League</h1>
      <p style={{ fontSize: 24, color: 'var(--bcl-ink-2)', marginBottom: 40 }}>Bid. Build. Become Champions.</p>
      
      <Link href="/auction" style={{ background: 'var(--bcl-pink)', color: '#fff', padding: '16px 32px', borderRadius: 12, fontSize: 18, fontWeight: 'bold', textDecoration: 'none' }}>
        Enter Live Auction Room
      </Link>
    </div>
  );
}
