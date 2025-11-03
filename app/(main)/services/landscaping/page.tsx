import { Metadata } from "next";
import LandscapingContent from "./LandscapingContent";

export const metadata: Metadata = {
  title: "Professional Landscaping Services Sydney | Concrete Solutions Sydeny Bricklaying",
  description:
    "Transform your outdoor space with expert landscaping services in Sydney. Garden design, lawn installation, water features, and more. Beautiful, functional, and sustainable solutions tailored to your home.",
  alternates: {
    canonical: "https://concrete-solutions-sydeny.vercel.app/services/landscaping",
  },
  openGraph: {
    title: "Professional Landscaping Services Sydney | Concrete Solutions Sydeny Bricklaying",
    description:
      "Transform your outdoor space with expert landscaping services in Sydney. Custom garden design, lawn installation, and sustainable outdoor solutions.",
    url: "https://concrete-solutions-sydeny.vercel.app/services/landscaping",
    siteName: "Concrete Solutions Sydeny Bricklaying",
    images: [
      {
        url: "https://concrete-solutions-sydeny.vercel.app/images/og-landscaping.jpg",
        width: 1200,
        height: 630,
        alt: "Landscaping Services Sydney",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Landscaping Services Sydney | Concrete Solutions Sydeny Bricklaying",
    description:
      "Transform your outdoor space with expert landscaping services in Sydney. Custom garden design, water features, and more.",
    images: ["https://concrete-solutions-sydeny.vercel.app/images/og-landscaping.jpg"],
  },
};

export default function LandscapingPage() {
  return <LandscapingContent />;
}
