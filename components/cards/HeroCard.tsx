"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroCardProps {
  title: string;
  page: string;
  btn: string;
}

function HeroCard({ title, page, btn }: HeroCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-secondary w-full py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16 text-main rounded-lg shadow-xl"
      >
        <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col gap-3 md:gap-4">
          {/* Button Badge */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base font-semibold bg-primary w-fit py-2 px-4 md:px-6 rounded-3xl shadow-md"
          >
            {btn}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            {title}
          </motion.h1>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Breadcrumb"
            className="flex flex-row text-xs sm:text-sm items-center gap-1"
          >
            <Link
              href="/"
              className="text-text hover:text-main transition-colors duration-200 font-medium"
            >
              HOME
            </Link>
            <ChevronRight className="size-3 sm:size-4 text-text" />
            <span className="text-main font-semibold">{page}</span>
          </motion.nav>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroCard;