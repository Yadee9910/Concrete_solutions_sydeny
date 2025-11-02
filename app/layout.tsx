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
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "RRR Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    template: "%s | RRR Bricklaying",
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
  authors: [{ name: "RRR Bricklaying" }],
  creator: "RRR Bricklaying",
  publisher: "RRR Bricklaying",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://yourdomain.com",
    siteName: "RRR Bricklaying",
    title: "RRR Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    description:
      "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney.",
    images: [
      {
        url: "https://yourdomain.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "RRR Bricklaying",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RRR Bricklaying | Expert Bricklaying & Concrete Services Sydney",
    description:
      "Professional bricklaying, concrete driveways, retaining walls & masonry services in Sydney.",
    images: ["https://yourdomain.com/images/og-default.jpg"],
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