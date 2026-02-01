import { InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed next to the radio button */
  label?: string;
  /** Error state */
  error?: boolean;
}
