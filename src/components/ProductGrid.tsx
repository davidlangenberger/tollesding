import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section id="produkte" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Die Auswahl</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            Kleine Dinge. Spürbarer Unterschied.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/60">
            Auf <em className="not-italic text-ink">TollesDing</em> landet nicht alles,
            was ganz okay ist. Hier stehen nur Produkte mit einem klaren, im Alltag
            nachvollziehbaren Nutzen. Deshalb ist die Liste nicht riesig, sondern
            bewusst kuratiert und ausführlich erklärt.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
