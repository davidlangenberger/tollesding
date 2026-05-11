import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FounderNote } from "@/components/FounderNote";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroStory } from "@/components/IntroStory";
import { ProductGrid } from "@/components/ProductGrid";
import { QualityPromise } from "@/components/QualityPromise";
import { products } from "@/data/products";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.siteUrl
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.ogDescription,
      url: siteConfig.siteUrl,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "TollesDing – praktische Alltagshelfer für Familien"
        }
      ]
    }
  };
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}#website`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        inLanguage: "de-DE",
        description: siteConfig.description
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.siteUrl}#collection`,
        url: siteConfig.siteUrl,
        name: siteConfig.title,
        isPartOf: {
          "@id": `${siteConfig.siteUrl}#website`
        },
        about: {
          "@type": "Thing",
          name: "Praktische Alltagshelfer für Familien"
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: product.title,
              category: product.category,
              description: product.shortBenefit,
              image: product.image ? absoluteUrl(product.image) : undefined
            }
          }))
        }
      }
    ]
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
