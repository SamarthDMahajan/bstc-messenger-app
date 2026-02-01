import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  preventCloseOnOutsideClick = false,
}) => {
  // Prevent scrolling the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!preventCloseOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Render to 'document.body' using Portal so it floats above everything
  return createPortal(
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container" role="dialog" aria-modal="true">
        
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          {children}
        </div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};
