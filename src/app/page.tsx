import { Footer } from "@/components/Footer";
import { FounderNote } from "@/components/FounderNote";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroStory } from "@/components/IntroStory";
import { ProductGrid } from "@/components/ProductGrid";
import { QualityPromise } from "@/components/QualityPromise";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TollesDing",
    url: "https://www.tollesding.de",
    inLanguage: "de-DE",
    description:
      "Praktische Alltagshelfer für Familien: ehrlich kuratiert, persönlich bewährt und direkt verlinkt."
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <Hero />
      <IntroStory />
      <ProductGrid />
      <QualityPromise />
      <FounderNote />
      <Footer />
    </main>
  );
}
