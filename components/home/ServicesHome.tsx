"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import HomeServiceCard from "@/components/cards/HomeServiceCard";
import {
  Hammer,
  Mountain,
  Home,
  Trees,
  Pickaxe,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { img } from "@/app/assets/assets";

const services = [
  {
    title: "Professional Bricklaying",
    description:
      "Expert bricklaying services for residential and commercial projects. We deliver precision craftsmanship with every brick laid, ensuring structural integrity and aesthetic appeal.",
    icon: Hammer,
    image: img,
    href: "/services/bricklaying",
    features: [
      "Residential & Commercial",
      "Heritage Restoration",
      "Modern & Traditional Styles",
    ],
  },
  {
    title: "Retaining Walls",
    description:
      "Structurally sound retaining walls designed to prevent erosion and create usable spaces. Our expert team handles complex drainage and engineering requirements.",
    icon: Mountain,
    image: img,
    href: "/services/retaining-walls",
    features: [
      "Engineered Solutions",
      "Drainage Systems",
      "Multiple Material Options",
    ],
  },
  {
    title: "Concrete Driveways",
    description:
      "Durable, attractive concrete driveways built to last. From plain to decorative finishes, we create surfaces that enhance your property's curb appeal.",
    icon: Home,
    image: img,
    href: "/services/concrete-driveways",
    features: [
      "Plain & Colored Concrete",
      "Exposed Aggregate",
      "Stamped Patterns",
    ],
  },
  {
    title: "Landscaping",
    description:
      "Complete landscaping solutions to transform your outdoor space. We combine hardscaping expertise with design vision to create beautiful, functional yards.",
    icon: Trees,
    image: img,
    href: "/services/landscaping",
    features: ["Garden Design", "Outdoor Living Spaces", "Water Features"],
  },
  {
    title: "Excavation Services",
    description:
      "Professional excavation for all construction needs. Our experienced operators handle site preparation, trenching, and earthmoving with precision.",
    icon: Pickaxe,
    image: img,
    href: "/services/excavation",
    features: ["Site Preparation", "Trenching & Grading", "Demolition Work"],
  },
  {
    title: "Paving Solutions",
    description:
      "Premium paving services for pathways, patios, and outdoor areas. We offer various materials and patterns to suit your style and budget.",
    icon: Layers,
    image: img,
    href: "/services/paving",
    features: [
      "Pavers & Natural Stone",
      "Travertine & Bluestone",
      "Custom Patterns",
    ],
  },
];

export default function ServicesHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    const nextIndex = (currentIndex + 1) % services.length;

    return [
      { ...services[prevIndex], position: "left", index: prevIndex },
      { ...services[currentIndex], position: "center", index: currentIndex },
      { ...services[nextIndex], position: "right", index: nextIndex },
    ];
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-10 px-4 bg-secondary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-primary text-white rounded-full py-2 px-4 text-sm font-semibold shadow-lg"
              >
                Our Core Services
              </motion.span>

              <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white leading-tight">
                Expert Construction &
                <span className="block text-primary mt-1">
                  Hardscaping Solutions
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-4"
          >
            <p className="text-md text-white/90 leading-relaxed">
              At RRR Bricklaying, we go beyond standard brickwork. We offer a
              full suite of integrated hardscaping and construction services,
              ensuring quality and efficiency from site preparation to the final
              finish.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Licensed", "Insured", "Experienced", "Guaranteed"].map(
                (badge, index) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                    }}
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20"
                  >
                    ✓ {badge}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* 3D Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="relative h-[460px] flex items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            {getVisibleCards().map((service) => {
              const isCenter = service.position === "center";
              const isLeft = service.position === "left";
              const isRight = service.position === "right";

              // Calculate transforms for cleaner 3D effect
              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;

              if (isLeft) {
                translateX = -400; // Move left
                translateZ = -200; // Move back
                rotateY = 35; // Rotate right
                scale = 0.75;
                opacity = 0.5;
              } else if (isRight) {
                translateX = 400; // Move right
                translateZ = -200; // Move back
                rotateY = -35; // Rotate left
                scale = 0.75;
                opacity = 0.5;
              } else {
                // Center card
                translateX = 0;
                translateZ = 0;
                rotateY = 0;
                scale = 1;
                opacity = 1;
              }

              return (
                <motion.div
                  key={service.index}
                  initial={false}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                    mass: 0.5,
                  }}
                  className={`absolute w-[300px] sm:w-[350px] md:w-[350px] ${
                    isCenter ? "z-30" : "z-10"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  <HomeServiceCard {...service} />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-primary text-white rounded-full p-2 shadow-xl transition-all duration-300 border border-white/20"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Center Indicator */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-primary text-white rounded-full p-2 shadow-xl transition-all duration-300 border border-white/20"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}