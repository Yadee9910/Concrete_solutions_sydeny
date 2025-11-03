import { footerLogo } from "@/app/assets/assets";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiTiktokFill } from "react-icons/ri";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-main py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Company Details Column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div>
              <Image
                src={footerLogo}
                alt="Concrete Solutions Sydeny Bricklaying Logo"
                width={90}
                height={40}
              />
            </div>

            <p className="text-justify text-sm md:text-base leading-relaxed font-light lg:w-5/6">
              Expert Bricklaying & Masonry Works. Solutions Tailored to Your
              Needs Ensuring Accuracy, Compliance, and Financial Peace of Mind.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-row gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full hover:bg-primary transition-colors duration-300 p-2.5 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full hover:bg-primary transition-colors duration-300 p-2.5 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full hover:bg-primary transition-colors duration-300 p-2.5 cursor-pointer"
                aria-label="TikTok"
              >
                <RiTiktokFill className="size-6" />
              </a>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-4">
              {/* Phone */}

              <a
                href="tel:0759497812"
                className="flex flex-row items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <div className="bg-main p-2 flex items-center justify-center rounded-full">
                  <Phone className="text-secondary size-5" />
                </div>
                <p className="font-medium text-main">0759497812</p>
              </a>

              {/* Email */}

              <a
                href="mailto:info@rrrbricklaying.com.au"
                className="flex flex-row items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <div className="bg-main p-2 flex items-center justify-center rounded-full">
                  <MdEmail className="text-secondary size-5" />
                </div>
                <p className="font-medium text-main break-all">
                  info@rrrbricklaying.com.au
                </p>
              </a>
            </div>
          </div>

          {/* Menu Items Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Links */}
            <div className="flex flex-col gap-3">
              <span className="font-semibold tracking-wider text-primary mb-2">
                ABOUT
              </span>
              <ul className="flex flex-col gap-3 text-sm font-light">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "About", href: "/about" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Contact", href: "/contact" },
                  // { name: "Privacy Policy", href: "/privacy-policy" },
                  // { name: "Terms and Conditions", href: "/terms" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:underline hover:underline-offset-4 hover:translate-x-2 transition-all duration-200 hover:text-primary inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div className="flex flex-col gap-3">
              <span className="font-semibold tracking-wider text-primary mb-2">
                SERVICES
              </span>
              <ul className="flex flex-col gap-3 text-sm font-light">
                {[
                  { name: "Bricklaying", href: "/services/bricklaying" },
                  { name: "Landscaping", href: "/services/landscaping" },
                  {
                    name: "Retaining Walls",
                    href: "/services/retaining",
                  },
                  
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="hover:underline hover:underline-offset-4 hover:translate-x-2 transition-all duration-200 hover:text-primary inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
              <span className="font-semibold tracking-wider text-primary mb-2">
                NEWSLETTER
              </span>

              <div className="flex flex-col gap-4 text-sm">
                <p className="font-light leading-relaxed">
                  Want to receive news and updates? Enter your email.
                </p>

                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full py-2.5 px-4 rounded-lg text-sm bg-white/10 text-main placeholder:text-main/60 focus:outline-none focus:ring-2 focus:ring-primary border border-white/20"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-main hover:bg-gray-100 text-secondary py-2.5 px-5 rounded-lg flex flex-row items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    <span>Submit</span>
                    <ArrowRight className="size-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-8 border-t border-main/20 text-center">
          <p className="text-sm text-main/80">
            © {new Date().getFullYear()} Concrete Solutions Sydeny Bricklaying. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}