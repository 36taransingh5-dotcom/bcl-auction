// BCL auction-platform UI kit — app shell + router.
(function () {
const { useState } = React;

function App() {
  const [route, setRoute] = useState('home');
  const nav = (r) => { setRoute(r); window.scrollTo(0, 0); };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bcl-canvas)' }}>
      <TopNav active={route} onNav={nav} />
      {route === 'home' && <Home onNav={nav} />}
      {route === 'auction' && <AuctionRoom />}
      {route === 'teams' && <TeamDashboard onNav={nav} />}
      {route === 'players' && <PlayerDatabase />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
