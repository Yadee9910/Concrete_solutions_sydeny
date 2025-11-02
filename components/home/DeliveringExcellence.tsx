"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const stats = [
  {
    value: "98%",
    label: "On-Time Completion",
    description:
      "We use efficient project management to meet timelines for all your hardscaping and bricklaying needs",
  },
  {
    value: "750+",
    label: "Projects Completed",
    description:
      "Proven experience in residential, commercial, and specialist projects across all of Sydney Metro",
  },
];

export default function DeliveringExcellence() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="min-h-[88vh] flex flex-col gap-8 mx-auto py-8 px-4 max-w-6xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-secondary leading-tight">
          Delivering Excellence Through{" "}
          <span className="text-primary block mt-2">
            Expertise and Dedication
          </span>
        </h2>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-20">
        {stats.map((stat, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex flex-col gap-4 bg-white shadow-2xl p-6 md:p-8 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
          >
            <motion.h3
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.2,
                type: "spring",
                stiffness: 150,
              }}
              className="text-secondary font-bold text-5xl md:text-6xl"
            >
              {stat.value}
            </motion.h3>
            <h4 className="text-primary font-semibold text-lg md:text-xl">
              {stat.label}
            </h4>
            <p className="text-text leading-relaxed text-sm md:text-md">
              {stat.description}
            </p>
          </motion.article>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <div className="bg-white flex flex-col gap-4 justify-center items-center rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-secondary">
            Ready to Start Your Project?
          </h3>
          <p className="text-text text-sm md:text-md">
            Join 750+ satisfied clients who trusted us with their vision
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary hover:bg-primary/90 text-main px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            <Link href="/contact">Get Your Free Quote</Link>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}