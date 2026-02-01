import React from 'react';
import './Radio.css';
import { RadioProps } from './Radio.types';

export const Radio: React.FC<RadioProps> = ({
  label,
  error,
  className = '',
  disabled,
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`radio-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        id={radioId}
        className="radio-input"
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
      <label htmlFor={radioId} className={`radio-label ${error ? 'error' : ''}`}>
        <span className="custom-radio" />
        {label && <span className="label-text">{label}</span>}
      </label>
    </div>
  );
};

export default Radio;
