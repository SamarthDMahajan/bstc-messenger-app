import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed next to the checkbox */
  label?: string;
  /** Error state for validation */
  error?: boolean;
}
