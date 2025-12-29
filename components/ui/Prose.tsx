import React from 'react';
import '@/styles/mdx.css';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className = '' }: ProseProps) {
  return <div className={`prose max-w-none ${className}`}>{children}</div>;
}

// Custom MDX components
export const mdxComponents = {
  Callout: ({ children, type = 'info' }: { children: React.ReactNode; type?: string }) => {
    const colors = {
      info: 'bg-blue-900/20 border-blue-500',
      warning: 'bg-yellow-900/20 border-yellow-500',
      error: 'bg-red-900/20 border-red-500',
      success: 'bg-green-900/20 border-green-500',
    };
    const colorClass = colors[type as keyof typeof colors] || colors.info;
    
    return (
      <div className={`${colorClass} border-l-4 p-4 my-4 rounded`}>
        {children}
      </div>
    );
  },
  InlineImage: ({ src, alt }: { src: string; alt: string }) => (
    <span className="inline-block mx-1">
      <img src={src} alt={alt} className="inline-block h-6 w-auto" />
    </span>
  ),
};

