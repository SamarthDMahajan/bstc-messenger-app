import { ReactNode } from 'react';

export interface ModalProps {
  /** Is the modal currently visible? */
  isOpen: boolean;
  /** Function to call when closing the modal (clicking backdrop or close button) */
  onClose: () => void;
  /** The title displayed at the top */
  title?: string;
  /** The content inside the modal */
  children: ReactNode;
  /** Optional footer content (e.g., action buttons) */
  footer?: ReactNode;
  /** Prevent closing when clicking outside? */
  preventCloseOnOutsideClick?: boolean;
}
