const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.player.deleteMany({});
  await prisma.team.deleteMany({});

  const teams = [
    { name: 'Chennai Super Kings', logo: '🦁' },
    { name: 'Mumbai Indians', logo: '🌪️' },
    { name: 'Royal Challengers Bangalore', logo: '👑' },
    { name: 'Kolkata Knight Riders', logo: '⚔️' },
  ];

  const createdTeams = [];
  for (const t of teams) {
    createdTeams.push(await prisma.team.create({ data: t }));
  }

  const players = [
    { name: 'Virat Kohli', role: 'BATSMAN', battingStyle: 'Right-hand bat', basePrice: 2.00 },
    { name: 'MS Dhoni', role: 'WICKETKEEPER', battingStyle: 'Right-hand bat', basePrice: 1.50 },
    { name: 'Jasprit Bumrah', role: 'BOWLER', bowlingStyle: 'Right-arm fast', basePrice: 2.00 },
    { name: 'Ben Stokes', role: 'ALLROUNDER', battingStyle: 'Left-hand bat', bowlingStyle: 'Right-arm fast-medium', basePrice: 2.00 },
    { name: 'Rashid Khan', role: 'BOWLER', bowlingStyle: 'Right-arm leg spin', basePrice: 1.50 },
    { name: 'Rishabh Pant', role: 'WICKETKEEPER', battingStyle: 'Left-hand bat', basePrice: 1.00 },
    { name: 'Hardik Pandya', role: 'ALLROUNDER', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium-fast', basePrice: 2.00 },
  ];

  for (const p of players) {
    await prisma.player.create({ data: p });
  }
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
