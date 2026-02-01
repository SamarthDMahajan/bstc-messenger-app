import React, { InputHTMLAttributes } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed above the input */
  label?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Visual variant of the input */
  variant?: 'outlined' | 'filled';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = 'outlined',
  id,
  className = '',
  disabled,
  ...props
}) => {
  // Generate unique ID for accessibility if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className={`input-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      {label && <label htmlFor={inputId} className="input-label">{label}</label>}
      
      <input
        id={inputId}
        className={`input-field variant-${variant} ${error ? 'has-error' : ''}`}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        {...props}
      />

      {error && <span id={errorId} className="input-message error">{error}</span>}
      {!error && helperText && <span id={helperId} className="input-message helper">{helperText}</span>}
    </div>
  );
}
