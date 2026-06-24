import { PrismaClient } from '@prisma/client';
import AuctionRoomClient from './AuctionRoomClient';

const prisma = new PrismaClient();

export default async function AuctionPage() {
  const teams = await prisma.team.findMany({
    orderBy: { id: 'asc' }
  });
  
  return <AuctionRoomClient teams={teams} />;
}
