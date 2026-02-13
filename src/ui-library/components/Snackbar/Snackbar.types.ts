export type SnackbarType = 'success' | 'error' | 'info' | 'warning' | 'default';

export interface SnackbarProps {
  /** The message to display */
  message: string;
  /** Controls visibility */
  isOpen: boolean;
  /** Function to call when closing (manual or auto) */
  onClose: () => void;
  /** Visual style of the snackbar */
  type?: SnackbarType;
  /** Time in milliseconds before auto-closing. Set to 0 to disable. Default: 3000ms */
  autoHideDuration?: number;
}
