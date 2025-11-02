
"use client";

import { ChevronDownIcon } from "lucide-react";

interface ToggleDownCardProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function ToggleDownCard({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: ToggleDownCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex justify-between items-center p-6 text-left bg-main hover:bg-secondary/5 cursor-pointer transition-colors duration-200"
      >
        <h2 className="text-lg tracking-wide font-bold text-secondary">{title}</h2>
        
        <div className="bg-secondary p-1 text-main rounded-full">
            <ChevronDownIcon
            className={`size-6 text-main transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
            }`}
            />
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-2">
          <p
            className={`leading-7 text-text`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
