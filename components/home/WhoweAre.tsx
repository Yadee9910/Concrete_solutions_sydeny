"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeftRight,
  Building,
  Home,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Home, label: "Residential" },
  { icon: Building, label: "Commercial" },
  { icon: ArrowLeftRight, label: "Retaining Walls" },
  { icon: ShieldCheck, label: "Structural Integrity" },
];

export default function WhoWeAre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="min-h-[88vh] bg-main py-8 md:py-12 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Header */}
            <div className="space-y-4 md:space-y-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-secondary w-fit font-medium text-main rounded-full py-2 px-6 text-sm shadow-lg"
              >
                Who We Are
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight"
              >
                Your Sydney Bricklaying Contractors & Masonry Experts
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-text leading-relaxed"
            >
              We are local bricklayers dedicated to delivering exceptional
              brickwork and structural integrity across Sydney. From residential
              foundations to complex commercial retaining walls, we provide
              reliable, high-quality construction services tailored to your
              exact needs.
            </motion.p>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-white px-6 py-4 rounded-xl shadow-xl bg-linear-to-r from-primary to-orange-600"
            >
              <div className="text-4xl md:text-6xl font-bold mr-3">5+</div>
              <div className="text-left">
                <div className="font-semibold text-base md:text-lg">
                  Years of Experience
                </div>
                <div className="text-main text-sm md:text-base font-medium">
                  Trusted Sydney Experts
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-secondary/10 rounded-2xl p-4 md:p-6 border border-secondary/20"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-secondary mb-1 text-base md:text-lg">
                    Ready to Start Your Project
                  </h3>
                  <p className="text-text/70 text-sm">Get a free quote today</p>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:0778946789"
                  className="bg-secondary hover:bg-secondary/90 text-main px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm md:text-base"
                >
                  <Phone className="size-4 md:size-5" />
                  Call Us: 077 894 6789
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <Image
                    src="/images/hero-bricklaying.jpg"
                    alt="Professional bricklaying work in Sydney"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Services Highlights */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
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
                  className="bg-white/80 backdrop-blur-sm shadow-lg border border-secondary/10 rounded-lg p-3 md:p-4 hover:shadow-xl transition-shadow duration-150 cursor-pointer"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="size-4 md:size-5 text-main" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}