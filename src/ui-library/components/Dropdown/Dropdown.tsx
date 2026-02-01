import React, { useEffect, useRef, useState } from 'react';
import './Dropdown.css';
import { DropdownProps } from './Dropdown.types';

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label,
  disabled = false,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`dropdown ${disabled ? 'disabled' : ''}`} ref={containerRef}>
      {label && <label className="dropdown-label">{label}</label>}
      <button
        type="button"
        className="dropdown-toggle"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
      >
        <span className={`dropdown-selected ${selected ? '' : 'placeholder'}`}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="dropdown-caret">▾</span>
      </button>
      {open && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`dropdown-item ${opt.value === value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
