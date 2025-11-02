"use client";

import { indicators } from "@/data/indicators";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Indicators() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-8 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {indicators.map((indicator, index) => (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              y: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="bg-white/80 backdrop-blur-sm shadow-lg border border-secondary/10 rounded-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-150 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.3,
                type: "spring",
                stiffness: 200,
              }}
              className="w-16 h-16 bg-linear-to-br from-primary/20 to-orange-300/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <indicator.icon className="text-secondary w-8 h-8" />
            </motion.div>
            <h3 className="font-bold text-secondary mb-2 text-center text-lg">
              {indicator.title}
            </h3>
            <p className="text-text text-sm text-center leading-relaxed">
              {indicator.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}