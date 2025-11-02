"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Shield, Award, Users, Star } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-6 md:py-8 px-4 relative overflow-hidden pt-8 md:pt-10"
    >
      {/* Two-tone background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary"></div>
        <div
          className="absolute inset-0 bg-secondary"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 30% 100%)",
          }}
        ></div>
      </div>

      {/* Wrapper for consistent padding */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-2">
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                  <Shield className="w-4 h-4" />
                  Quality Guaranteed
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl sm:text-5xl font-bold text-secondary leading-tight">
                  Expert Concrete &
                  <span className="block text-primary mt-2">
                    Bricklaying Solutions
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs md:text-md text-gray-600 leading-relaxed"
              >
                Transform your property with Sydney&apos;s trusted concrete
                contractors. From driveways to retaining walls, we deliver
                exceptional craftsmanship every time.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6 pt-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">5+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">
                      750+
                    </div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-3"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 bg-secondary hover:bg-hover text-white px-4 md:px-8 py-4 rounded-xl text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>Get Your Free Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full">
                {/* Main Video Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-100">
                  <video
                    src="/videos/hero-vid.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero-bricklaying.jpg"
                  />

                  {/* 100% Badge Overlay */}
                  <div className="hidden md:block absolute top-4 right-4 bg-secondary text-white px-5 py-3 rounded-xl shadow-lg z-10">
                    <div className="text-3xl font-bold leading-none mb-1">
                      100%
                    </div>
                    <div className="text-xs uppercase tracking-wider">
                      Guaranteed
                    </div>
                  </div>

                  {/* Rating Badge - Bottom Right */}
                  <div className="hidden md:flex absolute inset-0 items-end justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                      className="bg-white rounded-2xl shadow-2xl p-6 text-center"
                    >
                      <div className="text-5xl font-bold text-primary mb-1">
                        4.9
                      </div>
                      <div className="text-sm font-semibold text-secondary">
                        Customer Rating
                      </div>
                      <div className="flex gap-1 mt-2 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-primary fill-current"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}