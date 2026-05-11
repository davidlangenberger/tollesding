import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section id="produkte" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <span className="eyebrow">Aus unserem Alltag</span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
            Vier Fundstücke, die bei uns geblieben sind, weil sie jeden Tag einen
            kleinen Unterschied machen.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink/68">
            Im ersten Schritt zeigt <em className="font-[var(--font-display)] not-italic text-ink">TollesDing</em> nur die Dinge, für die Bild, Text und Nutzen
            gerade schon sauber zusammenpassen. Deshalb ist die Auswahl noch klein,
            aber bewusst ausführlich erzählt.
          </p>
        </div>

        <div className="mt-12 space-y-12 sm:space-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
