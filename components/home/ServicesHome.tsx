"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeServiceCard from "@/components/cards/HomeServiceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ServicesHome() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="min-h-[88vh] bg-linear-to-br from-secondary/5 to-primary/5 flex flex-col gap-8 p-4 md:p-8 rounded-2xl"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 lg:w-1/2"
        >
          <span className="w-fit bg-secondary rounded-full py-2 px-6 text-sm text-main font-medium shadow-lg">
            Our Core Services
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Expert Construction &{" "}
            <span className="text-primary">Hardscaping</span> in Sydney
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg lg:w-1/2 text-text leading-relaxed"
        >
          At RRR Bricklaying, we go beyond standard brickwork. We offer a full
          suite of integrated hardscaping and construction services, ensuring
          quality and efficiency from site preparation to the final finish.
        </motion.p>
      </div>

      {/* Services Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative max-w-7xl mx-auto w-full"
      >
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
              className="snap-center shrink-0"
            >
              <HomeServiceCard />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-row gap-4 justify-center items-center"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("left")}
          className="bg-main rounded-full p-3 border border-secondary hover:bg-secondary group transition-colors duration-300 shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="text-secondary group-hover:text-main transition-colors" />
        </motion.button>
        <p className="text-sm md:text-base font-semibold text-secondary">
          DRAG OR CLICK
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("right")}
          className="bg-main border border-secondary rounded-full p-3 hover:bg-secondary group transition-colors duration-300 shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="text-secondary group-hover:text-main transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
}