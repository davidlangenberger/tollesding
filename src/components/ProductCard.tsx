import type { Product } from "@/data/products";
import { hasAmazonAssociateTag, withAssociateTag } from "@/lib/amazon";

type ProductCardProps = {
  product: Product;
};

const categoryStyles: Record<Product["category"], string> = {
  Küche: "bg-sun/15 text-ink",
  Technik: "bg-sage/20 text-ink",
  Sport: "bg-clay/15 text-ink",
  Schule: "bg-mist text-ink",
  Ordnung: "bg-ink/8 text-ink",
  Unklar: "bg-ink/10 text-ink"
};

export function ProductCard({ product }: ProductCardProps) {
  const link = withAssociateTag(product.amazonUrl);
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[product.category]}`}>
            {product.category}
          </span>
          {product.featured ? (
            <span className="rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-semibold text-ink">
              Besonders beliebt
            </span>
          ) : null}
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sand via-white to-mist p-5">
          <div className="flex min-h-32 items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/40">
                Platz für eigenes Foto
              </p>
              <p className="mt-2 max-w-[14rem] text-sm leading-6 text-ink/60">
                Aktuell bewusst ohne Amazon-Bild. Eigene Fotos lassen sich hier
                später sauber ergänzen.
              </p>
            </div>
            <div className="flex gap-2 self-start pt-3" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-sun/80" />
              <span className="h-2 w-2 rounded-full bg-sage/80" />
              <span className="h-2 w-2 rounded-full bg-clay/80" />
            </div>
          </div>
        </div>

        <h3 className="mt-6 font-[var(--font-display)] text-3xl leading-tight text-ink">
          {product.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-ink/75">{product.shortBenefit}</p>
        <p className="mt-4 text-sm leading-7 text-ink/65">{product.storyTeaser}</p>

        {product.note ? (
          <p className="mt-4 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3 text-sm leading-6 text-ink/70">
            Hinweis: {product.note}
          </p>
        ) : null}
      </div>

      <div className="mt-6 border-t border-ink/8 pt-5">
        <ul className="mb-5 flex flex-wrap gap-2" aria-label="Tags">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/65"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          className="focus-ring inline-flex items-center justify-center rounded-full border border-ink/15 bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
          href={link}
          target="_blank"
          rel={affiliateEnabled ? "noreferrer sponsored nofollow external" : "noreferrer nofollow external"}
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
