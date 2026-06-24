import * as React from 'react';

/**
 * BCL Input — cream text field with ink focus ring.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  iconLeft?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default true */
  full?: boolean;
}

export function Input(props: InputProps): JSX.Element;
