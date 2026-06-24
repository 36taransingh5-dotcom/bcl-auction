'use client';

import { useState, useEffect } from 'react';
import { socket } from '../../lib/socket';
import { Button } from '../../components/core/Button.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { Avatar } from '../../components/core/Avatar.jsx';
import { PlayerCard } from '../../components/auction/PlayerCard.jsx';
import { BidPanel } from '../../components/auction/BidPanel.jsx';
import { CountdownTimer } from '../../components/core/CountdownTimer.jsx';

const fmt = (cr) => cr ? `₹ ${cr.toFixed(2)} CR` : '₹ 0.00 CR';

export default function AuctionRoomClient({ teams }) {
  const [state, setState] = useState({
    playerId: null,
    highestBid: null,
    highestBidTeamId: null,
    status: 'IDLE' // IDLE, LIVE, SOLD, UNSOLD
  });
  
  const [timeLeft, setTimeLeft] = useState(0);
  const [history, setHistory] = useState([]); // Mock history for now
  
  // To handle the animations
  const [bidAnimKey, setBidAK] = useState(0);

  useEffect(() => {
    socket.connect();
    
    socket.on('auction:state', (newState) => {
      setState(prevState => {
        if (prevState.highestBid !== newState.highestBid) {
          setBidAK(k => k + 1);
        }
        return {
          playerId: newState.playerId,
          highestBid: newState.highestBid,
          highestBidTeamId: newState.highestBidTeamId,
          status: newState.status
        };
      });
      setTimeLeft(newState.timeLeft);
    });

    socket.on('auction:timer', ({ timeLeft }) => {
      setTimeLeft(timeLeft);
    });
    
    socket.on('auction:sold', ({ playerId, teamId, amount }) => {
      setState(s => ({ ...s, status: 'SOLD', highestBidTeamId: teamId, highestBid: amount }));
    });
    
    socket.on('auction:unsold', () => {
      setState(s => ({ ...s, status: 'UNSOLD' }));
    });

    return () => {
      socket.off('auction:state');
      socket.off('auction:timer');
      socket.off('auction:sold');
      socket.off('auction:unsold');
      socket.disconnect();
    };
  }, []);

  const placeBid = (teamId) => {
    if (state.status !== 'LIVE') return;
    
    let inc = 0.05;
    const bid = state.highestBid || 0;
    if (bid >= 1 && bid < 2) inc = 0.10;
    else if (bid >= 2 && bid < 10) inc = 0.10; // 0.1 CR as requested
    else if (bid >= 10) inc = 0.50;

    const nb = Math.round((bid + inc) * 100) / 100;
    
    socket.emit('team:placeBid', { teamId, amount: nb });
  };
  
  const skipPlayer = (teamId) => {
    socket.emit('team:skip', { teamId });
  };

  const adminStart = () => {
    // Start with the first player for demo purposes
    socket.emit('admin:startPlayer', { playerId: 'cm0r1abcd0005zxyz1234abcd' }); // Note: We need actual player IDs. We will add a fetch later.
  };

  const adminIncreaseTimer = () => socket.emit('admin:increaseTimer');
  const adminApprove = () => socket.emit('admin:approveWinner');
  const adminMarkUnsold = () => socket.emit('admin:markUnsold');

  const leaderTeam = teams.find(t => t.id === state.highestBidTeamId) || teams[0];
  const leaderHex = leaderTeam ? '#e8b94a' : '#fff'; // fallback color

  return (
    <div style={{ background: 'var(--bcl-dark)', minHeight: 'calc(100vh)', padding: 28, position: 'relative', overflow: 'hidden' }}>
      
      {/* Ambient spotlight */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(ellipse 720px 520px at 28% 44%, ${leaderHex}1c 0%, transparent 68%)`,
        transition: 'background 0.9s ease',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Badge status={state.status === 'LIVE' ? 'live' : 'upcoming'} />
            <span style={{ color: 'var(--bcl-on-dark)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.5px' }}>
              Auction Theatre
            </span>
            <span style={{ color: 'var(--bcl-on-dark-2)', fontSize: 14 }}>· BCL Season 2025</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>
          
          {/* Left Player Area */}
          <div style={{
            background: `radial-gradient(ellipse 65% 80% at 28% 50%, ${leaderHex}14 0%, rgba(255,255,255,0.03) 100%)`,
            border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, padding: 28,
            display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28, alignItems: 'center',
            transition: 'background 0.9s ease',
          }}>
            <div style={{ position: 'relative' }}>
              <PlayerCard
                name={state.playerId ? "Current Player" : "Waiting for Auction"}
                role="Player"
                variant="pink"
                status={state.status.toLowerCase()}
                basePrice="₹ 2.00 CR"
                soldPrice={fmt(state.highestBid)}
                style={{ position: 'relative' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <CountdownTimer seconds={timeLeft} total={20} size={154} />
            </div>
          </div>

          {/* Right Bid Panel */}
          <div key={`bp-${bidAnimKey}`} style={{ animation: bidAnimKey > 0 ? 'bclbidpop 0.42s var(--ease-bounce)' : 'none' }}>
            <BidPanel
              currentBid={fmt(state.highestBid)}
              leader={leaderTeam ? leaderTeam.name : 'None'}
              leaderAccent="gold"
              nextBid={fmt((state.highestBid || 2.00) + 0.1)}
              history={history}
              onBid={() => {}} // Disabled here, handled by Team Bidding strip
            />
          </div>
        </div>

        {/* Team Bidding Strip */}
        <div style={{ marginTop: 24 }}>
          <div style={{ color: 'var(--bcl-on-dark-2)', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 12 }}>
            Simulate Bidding as Teams
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {teams.map((t) => {
              const isLeader = state.highestBidTeamId === t.id;
              return (
                <div key={t.id} style={{ display: 'flex', gap: 4 }}>
                  <button onClick={() => placeBid(t.id)} disabled={state.status !== 'LIVE'} style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                    background: isLeader ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)',
                    border: `1.5px solid ${isLeader ? 'var(--bcl-gold)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: 16, cursor: state.status !== 'LIVE' ? 'not-allowed' : 'pointer',
                    textAlign: 'left', opacity: state.status !== 'LIVE' ? 0.5 : 1, flex: 1,
                  }}>
                    <Avatar name={t.name} square size={36} ring="gold" />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: 'var(--bcl-on-dark)', fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                      <div className="bcl-num" style={{ color: 'var(--bcl-on-dark-2)', fontSize: 12 }}>₹{(t.purse).toFixed(1)} CR left</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => skipPlayer(t.id)} 
                    disabled={state.status !== 'LIVE'}
                    style={{ background: '#333', color: '#fff', borderRadius: 8, padding: '0 8px', fontSize: 11, cursor: 'pointer' }}
                  >Skip</button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Admin Desk */}
        <div style={{
          marginTop: 16, padding: '14px 20px',
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--bcl-on-dark-2)', marginRight: 'auto' }}>
            Admin Controls
          </span>
          <Button variant="secondary" size="sm" onClick={adminStart}>Demo Start Player</Button>
          <Button variant="secondary" size="sm" onClick={adminIncreaseTimer} disabled={state.status !== 'LIVE'}>+10s</Button>
          <button onClick={adminMarkUnsold} disabled={state.status !== 'LIVE'} style={{
            background: 'rgba(131,125,110,0.22)', color: 'var(--bcl-on-dark-2)', padding: '9px 16px', borderRadius: 12
          }}>UNSOLD</button>
          <Button variant="accent" accent="gold" size="md" onClick={adminApprove} disabled={state.status !== 'LIVE'}>
            SOLD — Hammer down
          </Button>
        </div>
      </div>
    </div>
  );
}
