"use client";

import { useState, useEffect } from "react";
import { logo } from "../app/assets/assets";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { ArrowRight, ChevronDown, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const services = [
  { name: "Bricklaying", href: "/services/bricklaying" },
  { name: "Concrete Driveways", href: "/services/concrete-driveways" },
  { name: "Retaining Walls", href: "/services/retaining-walls" },
  { name: "Landscaping", href: "/services/landscaping" },
  { name: "Paving", href: "/services/paving" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu} className="relative z-50">
              <Image
                src={logo}
                alt="RRR Bricklaying Logo"
                width={90}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex flex-row gap-8 items-center text-base font-medium">
                <li>
                  <Link
                    href="/"
                    className={`transition-colors duration-200 hover:text-primary ${
                      pathname === "/"
                        ? "text-primary font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex flex-row gap-1 items-center focus:outline-none transition-colors duration-200 ${
                          pathname.startsWith("/services")
                            ? "text-primary font-semibold"
                            : "text-secondary hover:text-primary"
                        }`}
                      >
                        <span>Services</span>
                        <ChevronDown className="size-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="rounded-lg bg-white border border-gray-200 shadow-xl min-w-[220px]"
                    >
                      {services.map((service, index) => (
                        <div key={service.name}>
                          <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-all duration-200 hover:text-primary hover:bg-primary/5 px-4 py-3 text-sm">
                            <Link href={service.href} className="w-full">
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                          {index < services.length - 1 && (
                            <DropdownMenuSeparator className="bg-gray-100" />
                          )}
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`transition-colors duration-200 hover:text-primary ${
                      pathname === "/about"
                        ? "text-primary font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`transition-colors duration-200 hover:text-primary ${
                      pathname === "/blogs"
                        ? "text-primary font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`transition-colors duration-200 hover:text-primary ${
                      pathname === "/contact"
                        ? "text-primary font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Contact & CTA */}
            <div className="hidden lg:flex flex-row gap-4 items-center">
              <a
                href="tel:0778946789"
                className="flex flex-row gap-2 items-center hover:text-primary transition-colors duration-200"
              >
                <Phone className="size-4" />
                <span className="font-medium">0778946789</span>
              </a>
              <Link href="/contact">
                <button className="bg-secondary hover:bg-hover flex flex-row gap-2 items-center py-2.5 px-5 text-sm rounded-full text-main transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="font-medium">Get Free Quote</span>
                  <ArrowRight className="size-4" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-50 p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-6 text-secondary" />
              ) : (
                <Menu className="size-6 text-secondary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
              style={{ top: "72px" }} // Start below header
            >
              <nav className="px-6 py-8">
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="block py-3 text-lg font-medium hover:text-primary transition-colors border-b border-gray-100"
                    >
                      Home
                    </Link>
                  </li>

                  {/* Mobile Services Dropdown */}
                  <li className="border-b border-gray-100">
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-primary transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`size-5 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mb-3 flex flex-col gap-1 overflow-hidden"
                        >
                          {services.map((service) => (
                            <li key={service.name}>
                              <Link
                                href={service.href}
                                onClick={closeMobileMenu}
                                className="block py-2 text-base hover:text-primary transition-colors"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="block py-3 text-lg font-medium hover:text-primary transition-colors border-b border-gray-100"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      onClick={closeMobileMenu}
                      className="block py-3 text-lg font-medium hover:text-primary transition-colors border-b border-gray-100"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="block py-3 text-lg font-medium hover:text-primary transition-colors border-b border-gray-100"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* Mobile Contact Info */}
                <div className="mt-8 space-y-4">
                  <a
                    href="tel:0778946789"
                    className="flex items-center gap-3 text-base font-medium py-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <span className="text-secondary">0778946789</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block"
                  >
                    <button className="w-full bg-secondary hover:bg-hover flex items-center justify-center gap-2 py-3.5 px-6 text-base rounded-full text-main transition-all duration-300 font-medium shadow-lg">
                      <span>Get Free Quote</span>
                      <ArrowRight className="size-5" />
                    </button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}