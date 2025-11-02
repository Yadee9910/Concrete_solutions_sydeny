import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import Indicators from "@/components/home/Indicators";
import ServicesHome from "@/components/home/ServicesHome";
import DeliveringExcellence from "@/components/home/DeliveringExcellence";
import ClientHome from "@/components/home/ClientHome";
import ContactHome from "@/components/home/ContactHome";
import BlogSection from "@/components/home/BlogSection";
import WhoWeAre from "@/components/home/WhoweAre";

export const metadata: Metadata = {
  title: "RRR Bricklaying | Expert Bricklaying & Concrete Services Sydney",
  description:
    "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney. 5+ years experience. 100% quality guaranteed. Get a free quote today!",
  keywords: [
    "bricklaying Sydney",
    "concrete driveways",
    "retaining walls",
    "masonry services",
    "Seven Hills",
    "Western Sydney",
    "bricklayer near me",
    "concrete services Sydney",
  ],
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "RRR Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    description:
      "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney. 5+ years experience. 100% quality guaranteed.",
    url: "https://yourdomain.com",
    siteName: "RRR Bricklaying",
    images: [
      {
        url: "https://yourdomain.com/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "RRR Bricklaying Services Sydney",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RRR Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    description:
      "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney.",
    images: ["https://yourdomain.com/images/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  // JSON-LD Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RRR Bricklaying",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/images/logo.png",
    description:
      "Expert bricklaying and concrete services in Sydney with 5+ years of experience",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Seven Hills",
      addressRegion: "NSW",
      postalCode: "2147",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-778-946-789",
      contactType: "Customer Service",
      areaServed: "AU",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage",
      "https://tiktok.com/@yourpage",
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "750",
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main className="flex flex-col gap-5">
        <HeroSection />
        <Indicators />
        <WhoWeAre />
        <ServicesHome />
        <DeliveringExcellence />
        <ClientHome />
        <ContactHome />
        <BlogSection />
      </main>
    </>
  );
}