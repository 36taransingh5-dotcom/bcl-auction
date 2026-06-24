import { PrismaClient } from '@prisma/client';
import AdminAuctionClient from './AdminAuctionClient';

const prisma = new PrismaClient();

export default async function AdminAuctionPage() {
  const teams = await prisma.team.findMany({
    orderBy: { id: 'asc' }
  });
  
  return <AdminAuctionClient teams={teams} />;
}
