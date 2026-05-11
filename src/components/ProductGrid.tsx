import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section id="produkte" className="py-20 sm:py-24">
      <div className="section-shell">
        <div>
          <span className="eyebrow">Aus unserem Alltag</span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
            Echte Gamechanger aus unserem Alltag.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/68">
            Auf <em className="font-[var(--font-display)] not-italic text-ink">TollesDing</em> landet nicht alles, was ganz okay ist. Hier schaffen es
            nur Dinge hinein, die sich bei uns als echte Gamechanger erwiesen haben.
            Genau deshalb ist die Liste bewusst nicht riesig, sondern kuratiert und
            ausführlich erzählt.
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
