import { Metadata } from "next";
import RetainingWallsContent from "./RetainingWallsContent";

export const metadata: Metadata = {
  title: "Retaining Walls Sydney | Durable & Stylish Retaining Wall Builders | Concrete Solutions Sydney Bricklaying",
  description:
    "Concrete Solutions Sydney Bricklaying provides expert retaining wall construction in Sydney. We build strong, stylish, and long-lasting retaining walls for residential and commercial properties. Get durable, affordable, and custom retaining wall solutions.",
  alternates: {
    canonical: "https://concrete-solutions-sydeny.vercel.app/services/retaining-walls",
  },
  openGraph: {
    title: "Retaining Walls Sydney | Durable & Stylish Retaining Wall Builders | Concrete Solutions Sydney Bricklaying",
    description:
      "Get expertly engineered retaining walls in Sydney. Our walls are built for strength, style, and long-lasting performance—perfect for homes and commercial sites.",
    url: "https://concrete-solutions-sydeny.vercel.app/services/retaining-walls",
    siteName: "Concrete Solutions Sydney Bricklaying",
    images: [
      {
        url: "https://concrete-solutions-sydeny.vercel.app/images/og-retaining-walls.jpg",
        width: 1200,
        height: 630,
        alt: "Retaining Walls Sydney - Concrete Solutions Sydney Bricklaying",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retaining Walls Sydney | Durable & Stylish Retaining Wall Builders | Concrete Solutions Sydney Bricklaying",
    description:
      "Expert retaining wall construction across Sydney. Strong, stylish, and affordable solutions built to last.",
    images: ["https://concrete-solutions-sydeny.vercel.app/images/og-retaining-walls.jpg"],
  },
};

export default function RetainingWallsPage() {
  return <RetainingWallsContent />;
}
