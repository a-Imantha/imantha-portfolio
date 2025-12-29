'use client';

import React, { useState } from 'react';
import { Check, Link as LinkIcon } from 'lucide-react';

interface CopyLinkButtonProps {
  sectionId: string;
  label?: string;
}

export function CopyLinkButton({ sectionId, label }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-gray-500 hover:text-gray-300 transition-colors"
      aria-label={label || `Copy link to section`}
    >
      {copied ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <LinkIcon className="w-5 h-5" />
      )}
    </button>
  );
}

