import React, { useEffect } from 'react';
import './Snackbar.css';
import { SnackbarProps } from './Snackbar.types';

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  isOpen,
  onClose,
  type = 'default',
  autoHideDuration = 3000, // Default 3 seconds
}) => {
  
  // Timer Logic
  useEffect(() => {
    if (isOpen && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);

      // Cleanup: Clear timer if component unmounts or user closes it manually
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoHideDuration, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`snackbar-container position-bottom-right ${isOpen ? 'show' : ''}`}>
      <div className={`snackbar-content snackbar-${type}`}>
        
        {/* Icon based on type (Optional, improves UX) */}
        <span className="snackbar-icon">
          {type === 'success' && '✓'}
          {type === 'error' && '⚠'}
          {type === 'info' && 'ℹ'}
        </span>

        <span className="snackbar-message">{message}</span>
        
        <button className="snackbar-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>
    </div>
  );
};
