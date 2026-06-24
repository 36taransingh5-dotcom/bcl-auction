import * as React from 'react';

/**
 * BCL Card — rounded surface. Depth from colour + spacing, not shadow.
 *
 * @startingPoint section="Core" subtitle="Rounded surface — cream, dark, accent variants" viewport="700x200"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** @default "surface" */
  variant?: 'surface' | 'canvas' | 'dark' | 'pink' | 'green' | 'gold' | 'sky' | 'peach';
  /** Inner padding in px. @default 24 */
  pad?: number;
  /** Corner radius in px. @default 24 */
  radius?: number;
  /** Lift + shadow on hover. */
  interactive?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
