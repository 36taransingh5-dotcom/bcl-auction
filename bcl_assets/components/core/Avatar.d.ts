import * as React from 'react';

/**
 * BCL Avatar — round player/team image with optional accent ring; initials fallback.
 */
export interface AvatarProps {
  src?: string | null;
  /** Used for initials fallback and alt text. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** Accent ring colour. */
  ring?: 'pink' | 'green' | 'gold' | 'sky' | 'peach' | 'ink' | string | null;
  /** Rounded-square instead of circle. */
  square?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
