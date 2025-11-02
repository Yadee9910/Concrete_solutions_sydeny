"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AboutUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

function AboutUsCard({
  icon,
  title,
  description,
  index = 0,
}: AboutUsCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-main border p-4 sm:p-5 md:p-6 rounded-lg border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Icon Container */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="text-secondary font-bold flex flex-col items-start justify-start shrink-0"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-2 w-full">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.3,
          }}
          className="text-secondary font-semibold text-base sm:text-lg md:text-xl"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.4,
          }}
          className="text-text text-sm leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </motion.article>
  );
}

export default AboutUsCard;