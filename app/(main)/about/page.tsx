"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import HeroCard from "@/components/cards/HeroCard";
import Indicators from "@/components/home/Indicators";
import AboutUsCard from "@/components/cards/AboutUsCard";
import ToggleDownCard from "@/components/cards/ToggleDownCard";
import { img } from "@/app/assets/assets";
import { dropdownItems, whyChooseUsData } from "@/data/about";

function About() {
  const [openItem, setOpenItem] = useState<string | null>("mission");

  // Refs for scroll animations
  const [whoWeAreRef, whoWeAreInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyChooseRef, whyChooseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const galleryImages = Array(6).fill(img);

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroCard title="About Us" page="ABOUT US" btn="Who We Are" />

      {/* Who We Are Section */}
      <section
        ref={whoWeAreRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 items-center min-h-[70vh]"
      >
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={whoWeAreInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-secondary w-fit font-medium text-main rounded-full py-2 px-4 md:px-6 text-sm shadow-lg"
            >
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight"
            >
              Your Trusted Bricklaying Partners in Sydney
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-md text-text leading-relaxed">
              We are Concrete Solutions Bricklaying, a team of fully licensed, dedicated
              professional bricklayers and mason bricklayers proudly serving the
              entire Sydney Metro area for over 5 years. We specialize in
              delivering not just flawless brickwork, but complete, integrated
              hardscape solutions from initial excavation and retaining walls to
              stunning final finishes like concrete driveways and paving.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Dropdown Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          {dropdownItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
              }}
            >
              <ToggleDownCard
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={openItem === item.id}
                onToggle={toggleItem}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Indicators Section */}
      <section className="w-full">
        <Indicators />
      </section>

      {/* Image Gallery Section */}
      <section
        ref={galleryRef}
        className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-52 py-8 md:py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={image}
                alt={`Concrete Solutions Bricklaying project showcase ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyChooseRef}
        className="flex flex-col gap-6 md:gap-8 lg:gap-10 py-8 min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-secondary"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto max-w-7xl w-full">
          {whyChooseUsData.map((card, index) => (
            <AboutUsCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;