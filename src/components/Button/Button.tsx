import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${isLoading ? 'loading' : ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="btn-spinner" aria-hidden /> : null}
      <span className="btn-label">{children}</span>
    </button>
  );
};

export default Button;
