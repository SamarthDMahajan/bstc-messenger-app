import React from 'react';
import './Checkbox.css';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = '',
  disabled,
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`checkbox-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="checkbox-input"
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
      <label htmlFor={checkboxId} className={`checkbox-label ${error ? 'error' : ''}`}>
        <span className="custom-checkmark">
          {/* SVG Checkmark Icon */}
          <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        {label && <span className="label-text">{label}</span>}
      </label>
    </div>
  );
};
