export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  /** List of options to display */
  options: Option[];
  /** Currently selected value */
  value?: string;
  /** Callback when an option is selected */
  onChange: (value: string) => void;
  /** Placeholder text when nothing is selected */
  placeholder?: string;
  /** Label above the dropdown */
  label?: string;
  /** Disable interaction */
  disabled?: boolean;
}
