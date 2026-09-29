import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Kyle Gulapa — Full-Stack Developer & AI Ads Specialist",
  description:
    "Portfolio of Kyle Eurie Alvaro Gulapa, a full-stack developer and AI ads specialist building dependable web products and polished commercial video ads.",
  keywords: [
    "Kyle Gulapa",
    "Full-Stack Developer",
    "AI Ads Specialist",
    "GoHighLevel Automation",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Philippines",
  ],
  authors: [{ name: "Kyle Gulapa" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Kyle Gulapa — Full-Stack Developer & AI Ads Specialist",
    description:
      "Web products and commercial AI ads by Kyle Gulapa.",
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
