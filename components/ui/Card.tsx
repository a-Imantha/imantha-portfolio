import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, href, className = '', onClick }: CardProps) {
  const baseClasses = `
    bg-gray-900 border border-gray-800 rounded-lg p-6
    hover:border-gray-700 transition-all duration-200
    hover:shadow-lg hover:shadow-blue-500/10
  `;

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} block ${className}`}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseClasses} w-full text-left ${className}`}>
        {children}
      </button>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}

