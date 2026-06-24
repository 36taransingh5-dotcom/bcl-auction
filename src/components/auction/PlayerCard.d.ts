import * as React from 'react';

/**
 * BCL PlayerCard — coloured featured/database player card with role, stats,
 * base price and auction status.
 *
 * @startingPoint section="Auction" subtitle="Coloured player card with stats + status" viewport="700x340"
 */
export interface PlayerStat {
  label: string;
  value: string | number;
}
export interface PlayerCardProps {
  name?: string;
  role?: string;
  /** Colour theme. @default "pink" */
  variant?: 'pink' | 'green' | 'gold' | 'sky' | 'peach';
  photo?: string | null;
  /** Up to ~3 stat tiles. */
  stats?: PlayerStat[];
  basePrice?: string;
  /** @default "upcoming" */
  status?: 'upcoming' | 'live' | 'sold' | 'unsold';
  /** Shown instead of base price when status="sold". */
  soldPrice?: string | null;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function PlayerCard(props: PlayerCardProps): JSX.Element;
