import * as React from 'react';

/**
 * BCL BidPanel — live bidding rail on the dark theatre surface.
 *
 * @startingPoint section="Auction" subtitle="Live bidding rail with history" viewport="700x460"
 */
export interface BidHistoryItem {
  team: string;
  amount: string;
  accent?: 'pink' | 'green' | 'gold' | 'sky' | 'peach';
}
export interface BidPanelProps {
  currentBid?: string;
  leader?: string;
  /** Leading team ring colour. @default "gold" */
  leaderAccent?: 'pink' | 'green' | 'gold' | 'sky' | 'peach';
  /** Amount the PLACE BID button will raise to. */
  nextBid?: string;
  history?: BidHistoryItem[];
  onBid?: () => void;
  style?: React.CSSProperties;
}

export function BidPanel(props: BidPanelProps): JSX.Element;
