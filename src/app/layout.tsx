import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prime Rice — Premium Basmati & Non-Basmati Rice from Pakistan",
    template: "%s · Prime Rice",
  },
  description:
    "Prime Rice supplies premium Basmati and Non Basmati rice worldwide with flexible packaging and export services.",
  openGraph: {
    type: "website",
    siteName: "Prime Rice",
    title: "Prime Rice — Premium Rice from Pakistan",
    description:
      "Premium Basmati and Non Basmati rice, flexible packaging, and international supply.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream font-sans text-forest-950 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}