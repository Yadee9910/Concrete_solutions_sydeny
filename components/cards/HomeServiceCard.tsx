"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HomeServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string | StaticImageData;
  href: string;
  features?: string[];
}

export default function HomeServiceCard({
  title,
  description,
  icon: Icon,
  image,
  href,
  features = [],
}: HomeServiceCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100"
      >
        {/* Image Section */}
        <div className="relative h-44 overflow-hidden bg-linear-to-br from-secondary/10 to-primary/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-secondary/80 to-transparent opacity-60" />

          {/* Icon Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-3">
            {description}
          </p>

          {/* Features List */}
          {features.length > 0 && (
            <ul className="space-y-2 mb-2">
              {features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          <div className="flex items-center gap-2 text-secondary group-hover:text-primary transition-colors font-semibold text-sm pt-1 border-t border-gray-100">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}