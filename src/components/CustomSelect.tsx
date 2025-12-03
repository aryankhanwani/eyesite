'use client';

import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  required = false,
  id,
  name,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {/* Hidden input for form validation */}
      <input
        type="hidden"
        id={id ? `${id}_hidden` : undefined}
        name={name}
        value={value}
        required={required}
      />
      <button
        type="button"
        id={id}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-4 py-3 rounded-xl border transition-all text-left
          flex items-center justify-between gap-2
          ${disabled 
            ? 'opacity-50 cursor-not-allowed bg-gray-50 border-[#e7e8ea]' 
            : 'cursor-pointer'
          }
          ${isOpen 
            ? 'border-[#19395f] ring-2 ring-[#19395f]/20' 
            : 'border-[#e7e8ea] hover:border-[#19395f]/50 focus:border-[#19395f] focus:ring-2 focus:ring-[#19395f]/20'
          }
          ${selectedOption ? 'text-black bg-white' : 'text-black/40 bg-white'}
          ${required && !value ? 'border-red-300' : ''}
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-required={required}
        aria-invalid={required && !value}
      >
        <span className="flex-1 truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-[#19395f] transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-[100]" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="absolute z-[101] w-full mt-2 bg-white border border-[#e7e8ea] rounded-xl shadow-xl max-h-60 overflow-auto"
            role="listbox"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                role="option"
                aria-selected={value === option.value}
                className={`
                  w-full px-4 py-3 text-left
                  flex items-center justify-between gap-2
                  transition-colors
                  first:rounded-t-xl last:rounded-b-xl
                  ${value === option.value
                    ? 'bg-[#19395f] text-white'
                    : 'text-black hover:bg-[#f4f6f8]'
                  }
                  ${option.value === '' ? 'border-b border-[#e7e8ea]' : ''}
                `}
              >
                <span className="flex-1">{option.label}</span>
                {value === option.value && (
                  <svg 
                    className="w-5 h-5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

