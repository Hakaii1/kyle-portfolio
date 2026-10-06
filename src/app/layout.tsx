import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Kyle Gulapa — AI Ads Specialist",
  description:
    "AI video ad portfolio of Kyle Gulapa. UGC-style product videos, stylized 3D ads, AI visuals, editing, and captions created around your brand's brief.",
  keywords: [
    "Kyle Gulapa",
    "AI Ads Specialist",
    "AI Video Ads",
    "UGC-Style Ads",
    "Product Video Creative",
    "AI Video Production",
    "Video Editing Philippines",
    "Full-Stack Developer",
    "GoHighLevel Automation",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Philippines",
  ],
  authors: [{ name: "Kyle Gulapa" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Kyle Gulapa — AI Ads Specialist",
    description:
      "UGC-style product videos and stylized 3D ads. Explore AI ad creative by Kyle Gulapa and discuss your next project.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Navbar />
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
