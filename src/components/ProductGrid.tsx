import { products } from "@/data/products";
import { hasAmazonAssociateTag } from "@/lib/amazon";
import { ProductCard } from "./ProductCard";

const categories = ["Alle", "Küche", "Technik", "Sport", "Schule", "Ordnung", "Unklar"];

export function ProductGrid() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <section id="produkte" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Aus unserem Alltag</span>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
              Acht Fundstücke, die bei uns nicht dekorativ herumliegen, sondern
              benutzt werden.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/60">
            {affiliateEnabled
              ? "Transparenz vorab: Die Produktlinks gehen zu Amazon. Einige davon sind Affiliate-Links. Wir verlinken nichts versteckt und nennen die Dinge so konkret, wie wir sie tatsächlich kennen."
              : "Transparenz vorab: Die Produktlinks gehen zu Amazon. Solange noch keine Amazon-Partner-ID hinterlegt ist, sind es normale externe Produktlinks ohne Provisionszuordnung."}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink/65"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
