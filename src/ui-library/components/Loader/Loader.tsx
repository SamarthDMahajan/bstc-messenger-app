import React from 'react';
import './Loader.css';
import { LoaderProps } from './Loader.types';

export const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  variant = 'primary',
  label,
}) => {
  return (
    <div className="loader-container">
      <div
        className={`loader-spinner loader-${size} loader-${variant}`}
        role="status"
        aria-label={label || 'Loading'}
      />
      {label && <p className="loader-label">{label}</p>}
    </div>
  );
};

export default Loader;
