"use client";

import Image, { StaticImageData } from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface ClientCardProps {
  name: string;
  role: string;
  location: string;
  testimonial: string;
  rating: number;
  image: string | StaticImageData;
}

export default function ClientCard({
  name,
  role,
  location,
  testimonial,
  rating,
  image,
}: ClientCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 md:p-8 h-full flex flex-col relative overflow-hidden"
    >
      {/* Quote Icon Background */}
      <div className="absolute -top-4 -right-4 opacity-5">
        <Quote className="w-32 h-32 text-primary" />
      </div>

      {/* Header with Profile */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/10">
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
            <Quote className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-md text-secondary">{name}</h3>
          <p className="text-xs text-gray-600">{role}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 grow line-clamp-6 relative z-10">
        {testimonial}
      </p>

      {/* Rating */}
      <div className="flex gap-1 relative z-10">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-primary fill-primary" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}