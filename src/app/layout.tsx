import type { Metadata } from "next";
import { fontSerif } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/config/company";
import "./globals.css";

const title = "Moza Systems — Creator marketing, websites & AI systems";
const description =
  "Moza Systems helps businesses acquire customers and operate better through creator marketing, high-converting websites and custom AI systems.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: "%s — Moza Systems",
  },
  description,
  openGraph: {
    title,
    description,
    url: company.url,
    siteName: "Moza Systems",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export const viewport = {
  themeColor: "#101c2c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-offwhite"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
