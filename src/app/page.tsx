import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroStory } from "@/components/IntroStory";
import { ProductGrid } from "@/components/ProductGrid";
import { QualityPromise } from "@/components/QualityPromise";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <IntroStory />
      <ProductGrid />
      <QualityPromise />
      <Footer />
    </main>
  );
}
