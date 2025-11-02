"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <motion.button
        onClick={() => onToggle(id)}
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left bg-main cursor-pointer transition-colors duration-200"
      >
        <h3 className="text-base  tracking-wide font-bold text-secondary pr-4">
          {title}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-secondary p-1 text-main rounded-full shrink-0"
        >
          <ChevronDownIcon className="size-5 sm:size-6 text-main" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3, ease: "easeInOut" },
        }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 sm:px-5 md:px-6 py-3 sm:py-4"
        >
          <p className="leading-6 sm:leading-7 text-sm text-text">
            {content}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}