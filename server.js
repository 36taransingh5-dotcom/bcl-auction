const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Auction State
  let timerInterval = null;
  let timeLeft = 0;
  let currentAuctionState = {
    playerId: null,
    highestBid: null,
    highestBidTeamId: null,
    status: 'IDLE' // IDLE, LIVE
  };
  
  // Track teams that skipped the current player
  let skippedTeams = new Set();
  
  // Broadcast state helper
  const broadcastState = () => {
    io.emit('auction:state', {
      ...currentAuctionState,
      timeLeft,
      skippedTeamsCount: skippedTeams.size
    });
  };

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
    // Send current state on connection
    socket.emit('auction:state', {
      ...currentAuctionState,
      timeLeft,
      skippedTeamsCount: skippedTeams.size
    });

    socket.on('admin:startPlayer', async ({ playerId }) => {
      try {
        const player = await prisma.player.findUnique({ where: { id: playerId } });
        if (!player) return;
        
        await prisma.player.update({
          where: { id: playerId },
          data: { status: 'LIVE' }
        });
        
        currentAuctionState = {
          playerId,
          highestBid: player.basePrice,
          highestBidTeamId: null,
          status: 'LIVE'
        };
        skippedTeams.clear();
        timeLeft = 20; // 20 seconds timer
        
        if (timerInterval) clearInterval(timerInterval);
        
        timerInterval = setInterval(() => {
          if (timeLeft > 0) {
            timeLeft -= 1;
            io.emit('auction:timer', { timeLeft });
          } else {
            // Timer hit 0
            clearInterval(timerInterval);
            timerInterval = null;
            io.emit('auction:timerEnded', { playerId });
          }
        }, 1000);
        
        broadcastState();
      } catch (err) {
        console.error("Error starting player", err);
      }
    });
    
    socket.on('team:placeBid', async ({ teamId, amount }) => {
      if (currentAuctionState.status !== 'LIVE') return;
      if (amount <= currentAuctionState.highestBid && currentAuctionState.highestBidTeamId !== null) return;
      
      try {
        currentAuctionState.highestBid = amount;
        currentAuctionState.highestBidTeamId = teamId;
        
        // Reset timer
        timeLeft = 20;
        
        // Save to DB implicitly when SOLD, or we could track live updates. 
        // For performance, we'll update DB here too.
        await prisma.player.update({
          where: { id: currentAuctionState.playerId },
          data: { 
            currentBid: amount,
            currentBidTeamId: teamId
          }
        });
        
        broadcastState();
      } catch (err) {
        console.error("Error placing bid", err);
      }
    });

    socket.on('team:skip', async ({ teamId }) => {
      if (currentAuctionState.status !== 'LIVE') return;
      
      skippedTeams.add(teamId);
      broadcastState();
      
      // Get all teams count
      const totalTeams = await prisma.team.count();
      
      // If everyone skips
      if (skippedTeams.size >= totalTeams) {
        // Unsold
        clearInterval(timerInterval);
        timerInterval = null;
        
        await prisma.player.update({
          where: { id: currentAuctionState.playerId },
          data: { status: 'UNSOLD' }
        });
        
        currentAuctionState = { playerId: null, highestBid: null, highestBidTeamId: null, status: 'IDLE' };
        io.emit('auction:unsold', { playerId: currentAuctionState.playerId });
        broadcastState();
      } else if (
        currentAuctionState.highestBidTeamId !== null && 
        skippedTeams.size >= totalTeams - 1 && 
        !skippedTeams.has(currentAuctionState.highestBidTeamId)
      ) {
        // Everyone else skipped, immediately sell to highest bidder
        clearInterval(timerInterval);
        timerInterval = null;
        
        const price = currentAuctionState.highestBid;
        const winnerId = currentAuctionState.highestBidTeamId;
        const pId = currentAuctionState.playerId;
        
        await prisma.$transaction([
          prisma.player.update({
            where: { id: pId },
            data: { status: 'SOLD', currentBid: price, currentBidTeamId: winnerId }
          }),
          prisma.team.update({
            where: { id: winnerId },
            data: { 
              purse: { decrement: price },
              spent: { increment: price }
            }
          })
        ]);
        
        currentAuctionState = { playerId: null, highestBid: null, highestBidTeamId: null, status: 'IDLE' };
        io.emit('auction:sold', { playerId: pId, teamId: winnerId, amount: price });
        broadcastState();
      }
    });
    
    socket.on('admin:increaseTimer', () => {
      if (currentAuctionState.status === 'LIVE') {
        timeLeft += 10; // add 10s
        broadcastState();
      }
    });

    socket.on('admin:approveWinner', async () => {
      if (currentAuctionState.status !== 'LIVE' || !currentAuctionState.highestBidTeamId) return;
      
      clearInterval(timerInterval);
      timerInterval = null;
      
      const price = currentAuctionState.highestBid;
      const winnerId = currentAuctionState.highestBidTeamId;
      const pId = currentAuctionState.playerId;
      
      await prisma.$transaction([
        prisma.player.update({
          where: { id: pId },
          data: { status: 'SOLD', currentBid: price, currentBidTeamId: winnerId }
        }),
        prisma.team.update({
          where: { id: winnerId },
          data: { 
            purse: { decrement: price },
            spent: { increment: price }
          }
        })
      ]);
      
      currentAuctionState = { playerId: null, highestBid: null, highestBidTeamId: null, status: 'IDLE' };
      io.emit('auction:sold', { playerId: pId, teamId: winnerId, amount: price });
      broadcastState();
    });

    socket.on('admin:markUnsold', async () => {
       if (currentAuctionState.status !== 'LIVE') return;
       
       clearInterval(timerInterval);
       timerInterval = null;
       const pId = currentAuctionState.playerId;
       
       await prisma.player.update({
         where: { id: pId },
         data: { status: 'UNSOLD' }
       });
       
       currentAuctionState = { playerId: null, highestBid: null, highestBidTeamId: null, status: 'IDLE' };
       io.emit('auction:unsold', { playerId: pId });
       broadcastState();
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });

  server
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
