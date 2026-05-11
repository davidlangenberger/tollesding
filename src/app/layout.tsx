import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tollesding.de"),
  title: "TollesDing: praktische Alltagshelfer für Familien",
  description:
    "Praktische Alltagshelfer für Familien: ehrlich kuratiert, persönlich bewährt und direkt verlinkt. Entdecke Fundstücke, die wirklich helfen.",
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
  openGraph: {
    title: "TollesDing: praktische Alltagshelfer für Familien",
    description:
      "Ehrlich kuratierte Alltagshelfer für Familien, die praktische Lösungen lieben.",
    url: "https://tollesding.de",
    siteName: "TollesDing",
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TollesDing: praktische Alltagshelfer für Familien",
    description:
      "Praktische Alltagshelfer für Familien, ehrlich kuratiert und persönlich bewährt."
  },
  alternates: {
    canonical: "https://tollesding.de"
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
