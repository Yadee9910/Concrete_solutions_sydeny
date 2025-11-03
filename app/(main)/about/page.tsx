import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | RRR Bricklaying",
  description:
    "Learn about RRR Bricklaying - Sydney's trusted bricklaying and concrete services provider with over 5 years of experience. Quality craftsmanship, professional service, and customer satisfaction guaranteed.",
  alternates: {
    canonical: "https://concrete-solutions-sydeny.vercel.app/about",
  },
  openGraph: {
    title: "About Us | RRR Bricklaying",
    description:
      "Learn about RRR Bricklaying - Sydney's trusted bricklaying and concrete services provider with over 5 years of experience.",
    url: "https://concrete-solutions-sydeny.vercel.app/about",
    siteName: "RRR Bricklaying",
    images: [
      {
        url: "https://concrete-solutions-sydeny.vercel.app/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About RRR Bricklaying",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | RRR Bricklaying",
    description:
      "Learn about RRR Bricklaying - Sydney's trusted bricklaying and concrete services provider with over 5 years of experience.",
    images: ["https://concrete-solutions-sydeny.vercel.app/images/og-about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}