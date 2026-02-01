import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
  disabled = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      {label && <label className="dropdown-label">{label}</label>}

      <button
        className={`dropdown-trigger ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="dropdown-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="dropdown-menu" role="listbox">
          {options.map((option) => (
            <button
              key={option.value}
              className={`dropdown-item ${option.value === value ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}`}
              onClick={() => !option.disabled && handleSelect(option.value)}
              disabled={option.disabled}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {error && <span className="dropdown-error">{error}</span>}
    </div>
  );
};
