import { products } from "@/data/products";
import { hasAmazonAssociateTag } from "@/lib/amazon";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <section id="produkte" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Aus unserem Alltag</span>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
              Acht Fundstücke, die bei uns nicht dekorativ herumliegen, sondern
              benutzt werden.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/68">
              Statt kurzer Listen mit halben Aussagen findest du hier bewusst
              ausführlichere Empfehlungen. Jede davon beschreibt nicht nur das Produkt,
              sondern den konkreten Alltag dahinter: was es bei uns einfacher macht,
              für wen es sinnvoll ist und warum es seinen Platz auf dieser Seite
              verdient hat.
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/60">
            {affiliateEnabled
              ? "Transparenz vorab: Die Produktlinks gehen zu Amazon. Einige davon sind Affiliate-Links. Wir verlinken nichts versteckt und nennen die Dinge so konkret, wie wir sie tatsächlich kennen."
              : "Transparenz vorab: Die Produktlinks gehen zu Amazon. Solange noch keine Amazon-Partner-ID hinterlegt ist, sind es normale externe Produktlinks ohne Provisionszuordnung."}
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
