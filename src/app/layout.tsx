import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
  keywords: [
    "Alltagshelfer",
    "Haushaltshelfer",
    "Familie",
    "praktische Dinge",
    "sinnvolle Gadgets",
    "Zuhause",
    "Eltern",
    "Amazon Empfehlungen"
  ],
    category: "lifestyle",
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.ogDescription,
      url: siteConfig.siteUrl,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "TollesDing – praktische Alltagshelfer für Familien"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [absoluteUrl("/opengraph-image")]
    },
    alternates: {
      canonical: siteConfig.siteUrl
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-body)]">{children}</body>
    </html>
  );
}
