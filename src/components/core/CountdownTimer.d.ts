import * as React from 'react';

/**
 * BCL CountdownTimer — circular auction clock. Ring drains green → gold → pink
 * as time runs low; pulses under 5s. Parent owns the clock and passes `seconds`.
 */
export interface CountdownTimerProps {
  /** Seconds remaining. @default 20 */
  seconds?: number;
  /** Full duration for the ring fraction. @default 20 */
  total?: number;
  /** Diameter in px. @default 120 */
  size?: number;
  /** Caption under the number. @default "SEC" */
  label?: string;
  style?: React.CSSProperties;
}

export function CountdownTimer(props: CountdownTimerProps): JSX.Element;
