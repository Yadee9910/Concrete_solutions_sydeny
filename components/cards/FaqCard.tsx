// components/sections/FAQItem.tsx
'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqCardProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FaqCard: React.FC<FaqCardProps> = ({ 
  question, 
  answer, 
  isOpen = false 
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="border border-gray-200 w-full rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
      <button
        className="w-full px-4 py-4 text-left flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-base font-semibold text-secondary flex-1  transition-colors duration-300">
          {question}
        </h3>
        <div className={`
          shrink-0 p-2 rounded-full bg-gray-100 group-hover:bg-primary/10 
          transition-all duration-300
          ${open ? 'rotate-180 bg-primary/20' : ''}
        `}>
          {open ? (
            <Minus className="size-5 text-primary transition-all duration-300" />
          ) : (
            <Plus className="size-5 text-secondary group-hover:text-primary transition-all duration-300" />
          )}
        </div>
      </button>
      
      {/* Smooth Expand/Collapse Animation */}
      <div className={`
        transition-all duration-500 ease-in-out overflow-hidden
        ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-text text-base leading-7 animate-in fade-in duration-500">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;