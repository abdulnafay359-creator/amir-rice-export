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
  metadataBase: new URL("https://amirriceexport.com"),
  title: {
    default: "Amir Rice Export — Premium Basmati & Non-Basmati Rice from Pakistan",
    template: "%s · Amir Rice Export",
  },
  description:
    "Pakistan-based exporter of premium Basmati and non-Basmati rice. Sortex-cleaned, moisture-controlled and shipped worldwide from Karachi.",
  openGraph: {
    type: "website",
    siteName: "Amir Rice Export",
    title: "Amir Rice Export — Premium Rice from Pakistan",
    description:
      "Premium Basmati and non-Basmati rice, sortex-cleaned and exported worldwide from Karachi, Pakistan.",
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