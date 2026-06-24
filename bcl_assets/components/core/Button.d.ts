import * as React from 'react';

/**
 * BCL Button — rounded friendly call-to-action.
 * Primary is Auction Black; use accent variants for spotlight surfaces.
 *
 * @startingPoint section="Core" subtitle="Rounded CTA — primary, accent, ghost" viewport="700x120"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Accent colour when variant="accent". @default "pink" */
  accent?: 'pink' | 'green' | 'gold' | 'sky' | 'peach';
  /** Stretch to fill container width. */
  full?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps): JSX.Element;
