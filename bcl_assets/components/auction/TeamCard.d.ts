import * as React from 'react';

/**
 * BCL TeamCard — team summary with logo, squad size and purse meter.
 *
 * @startingPoint section="Auction" subtitle="Team summary with purse meter" viewport="700x220"
 */
export interface TeamCardProps {
  name?: string;
  logo?: string | null;
  /** Ring + purse-meter colour. @default "green" */
  accent?: 'pink' | 'green' | 'gold' | 'sky' | 'peach';
  players?: number;
  /** Spent, in CR. */
  spent?: number;
  /** Total purse, in CR. @default 120 */
  purse?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function TeamCard(props: TeamCardProps): JSX.Element;
