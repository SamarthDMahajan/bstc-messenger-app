export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** Array of dropdown options */
  options: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onChange: (value: string) => void;
  /** Label displayed above the dropdown */
  label?: string;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Disable the dropdown */
  disabled?: boolean;
  /** Error state for validation */
  error?: string;
}
