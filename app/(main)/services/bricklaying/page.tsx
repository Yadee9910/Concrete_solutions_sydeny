import { Metadata } from "next";
import BricklayingContent from "./BrickayingContent";


export const metadata: Metadata = {
  title: "Professional Bricklaying Services Sydney | Concrete Solutions Sydeny Bricklaying",
  description:
    "Expert bricklaying services in Sydney. Residential and commercial bricklaying, new builds, extensions, retaining walls, and fences. Quality workmanship guaranteed. Get a free quote today!",
  alternates: {
    canonical: "https://concrete-solutions-sydeny.vercel.app/services/bricklaying",
  },
  openGraph: {
    title: "Professional Bricklaying Services Sydney | Concrete Solutions Sydeny Bricklaying",
    description:
      "Expert bricklaying services in Sydney. Residential and commercial bricklaying, new builds, extensions, retaining walls, and fences.",
    url: "https://concrete-solutions-sydeny.vercel.app/services/bricklaying",
    siteName: "Concrete Solutions Sydeny Bricklaying",
    images: [
      {
        url: "https://concrete-solutions-sydeny.vercel.app/images/og-bricklaying.jpg",
        width: 1200,
        height: 630,
        alt: "Bricklaying Services Sydney",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Bricklaying Services Sydney | Concrete Solutions Sydeny Bricklaying",
    description:
      "Expert bricklaying services in Sydney. Residential and commercial bricklaying, new builds, extensions, retaining walls.",
    images: ["https://concrete-solutions-sydeny.vercel.app/images/og-bricklaying.jpg"],
  },
};

export default function BricklayingPage() {
  return <BricklayingContent />;
}