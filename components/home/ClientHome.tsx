"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { prof } from "@/app/assets/assets";
import ClientCard from "@/components/cards/ClientCard";

const testimonials = [
  {
    name: "Michael B.",
    role: "CEO & Property Manager",
    location: "Parramatta",
    testimonial:
      "I manage several properties and needed reliable retaining wall contractors in Sydney for a complex, failing wall. RRR's team were outstanding. They identified the core yard drainage problem immediately, then designed and built a new, structurally sound retaining wall that is built to last.",
    rating: 5,
    image: prof,
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Seven Hills",
    testimonial:
      "Exceptional service from start to finish! The concrete driveway they installed exceeded our expectations. Professional, punctual, and the quality of work is outstanding. Highly recommend RRR Bricklaying for any concrete work.",
    rating: 5,
    image: prof,
  },
  {
    name: "David Chen",
    role: "Builder",
    location: "Western Sydney",
    testimonial:
      "We've worked with RRR on multiple commercial projects. Their attention to detail and commitment to quality is unmatched. They're our go-to contractors for all bricklaying and concrete work. Always deliver on time and within budget.",
    rating: 5,
    image: prof,
  },
  {
    name: "Emma Wilson",
    role: "Restaurant Owner",
    location: "Blacktown",
    testimonial:
      "They transformed our outdoor dining area with beautiful exposed aggregate pathways. The team was professional, clean, and completed the work ahead of schedule. Our customers constantly compliment the new look!",
    rating: 5,
    image: prof,
  },
  {
    name: "James Martinez",
    role: "Architect",
    location: "Castle Hill",
    testimonial:
      "As an architect, I work with many contractors. RRR Bricklaying stands out for their precision and understanding of complex designs. They bring my visions to life with exceptional craftsmanship. A true pleasure to work with.",
    rating: 5,
    image: prof,
  },
  {
    name: "Lisa Anderson",
    role: "Homeowner",
    location: "The Hills District",
    testimonial:
      "Our retaining wall project was completed flawlessly. From the initial consultation to the final inspection, everything was handled professionally. The team was knowledgeable, courteous, and the quality speaks for itself.",
    rating: 5,
    image: prof,
  },
];

export default function ClientHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const itemsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [itemsPerView, setItemsPerView] = useState(itemsToShow.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(itemsToShow.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(itemsToShow.tablet);
      } else {
        setItemsPerView(itemsToShow.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused, maxIndex]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-secondary text-main rounded-full py-2 px-6 text-sm font-semibold mb-4 shadow-md"
          >
            Loved by Our Clients
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 leading-tight"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Client feedback is the measure of our success. Read what homeowners
            and builders are saying about RRR Bricklaying&apos;s reliability and
            quality.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-secondary hover:text-white text-secondary rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-secondary hover:text-white text-secondary rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-3 md:px-4 pb-4"
                  style={{
                    minWidth: `${100 / itemsPerView}%`,
                  }}
                >
                  <ClientCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-secondary hover:text-white text-secondary rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-secondary hover:text-white text-secondary rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-2 mt-8"
        >
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-secondary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
