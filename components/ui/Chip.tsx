import React from 'react';
import Link from 'next/link';

interface ChipProps {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({ label, href, active, onClick, className = '' }: ChipProps) {
  const baseClasses = `
    inline-block px-3 py-1 text-sm rounded-full
    transition-all duration-200
    ${active 
      ? 'bg-blue-600 text-white' 
      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
    }
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {label}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {label}
      </button>
    );
  }

  return <span className={baseClasses}>{label}</span>;
}

