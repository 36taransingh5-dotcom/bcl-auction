import * as React from 'react';

/**
 * BCL Badge — uppercase status pill and accent tag chip.
 * Use `status` for auction states; use `tone`/`soft` for role and category chips.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** Auction status preset — sets colour, label and pulsing dot. */
  status?: 'live' | 'sold' | 'unsold' | 'upcoming';
  /** Accent colour when not using a status. @default "neutral" */
  tone?: 'neutral' | 'pink' | 'green' | 'gold' | 'sky' | 'peach' | 'ink';
  /** Soft tinted fill instead of solid. */
  soft?: boolean;
  /** Leading status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
