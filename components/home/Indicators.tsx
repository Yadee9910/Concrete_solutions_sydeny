"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EarthIcon, HandCoins, NotepadText } from "lucide-react";

const indicators = [
  {
    icon: EarthIcon,
    title: "Reliable Local Brickies",
    description:
      "If you need a bricklayer for repairs, additions, or insurance work, our local brickies are ready to mobilise quickly across Sydney.",
  },
  {
    icon: HandCoins,
    title: "Start-to-Finish Project Management",
    description:
      "From excavation and site prep to final retaining wall installation, we handle the entire process with one reliable team",
  },
  {
    icon: NotepadText,
    title: "Transparent Pricing & Planning",
    description:
      "Get a clear breakdown of the retaining wall cost, concrete driveway cost, or any project price with a free, no-obligation quote today",
  },
];

export default function Indicators() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-8 md:py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {indicators.map((indicator, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}