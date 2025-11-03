import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://concrete-solutions-sydeny.vercel.app/"),
  title: {
    default: "Concrete Solutions Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    template: "%s | Concrete Solutions Bricklaying",
  },
  description:
    "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney. 100% quality guaranteed. Get a free quote today!",
  keywords: [
    "bricklaying Sydney",
    "concrete driveways",
    "retaining walls",
    "masonry services",
    "Seven Hills",
    "Western Sydney",
  ],
  authors: [{ name: "Concrete Solutions Bricklaying" }],
  creator: "Concrete Solutions Bricklaying",
  publisher: "Concrete Solutions Bricklaying",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://concrete-solutions-sydeny.vercel.app/",
    siteName: "Concrete Solutions Bricklaying",
    title: "Concrete Solutions Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    description:
      "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney.",
    images: [
      {
        url: "https://concrete-solutions-sydeny.vercel.app/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Concrete Solutions Bricklaying",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Solutions Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    description:
      "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney.",
    images: ["https://concrete-solutions-sydeny.vercel.app/images/og-default.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#022b60",
              color: "#fff",
            },
            success: {
              style: {
                background: "#F59E0B",
              },
            },
            error: {
              style: {
                background: "#ef4444",
              },
            },
          }}
        />
      </body>
    </html>
  );
}