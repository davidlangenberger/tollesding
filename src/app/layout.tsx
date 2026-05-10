import type { Metadata } from "next";
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
  title: "TollesDing – Dinge, die im Alltag wirklich was taugen",
  description:
    "Praktische, bewährte und sinnvolle Fundstücke für Zuhause und den Familienalltag. Persönlich empfohlen, weil sie unser Leben einfacher machen.",
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
    title: "TollesDing – Dinge, die im Alltag wirklich was taugen",
    description:
      "Persönlich empfohlene Fundstücke für Familien, die praktische Lösungen lieben.",
    url: "https://tollesding.de",
    siteName: "TollesDing",
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TollesDing – Dinge, die im Alltag wirklich was taugen",
    description:
      "Praktische, bewährte und sinnvolle Fundstücke für Zuhause und den Familienalltag."
  },
  alternates: {
    canonical: "https://tollesding.de"
  }
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
