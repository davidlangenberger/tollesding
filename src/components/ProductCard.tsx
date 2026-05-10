import Image from "next/image";
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
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-float sm:p-7 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <div>
          <div className="flex items-start justify-between gap-4 lg:block">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[product.category]}`}
            >
              {product.category}
            </span>
            {product.featured ? (
              <span className="ml-3 inline-flex rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-semibold text-ink lg:ml-0 lg:mt-3">
                Besonders beliebt
              </span>
            ) : null}
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sand via-white to-mist p-5">
            {product.image ? (
              <div className="relative overflow-hidden rounded-[1.15rem] bg-white">
                <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-ink/18 to-transparent" />
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 100vw, 260px"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div className="flex min-h-40 items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/40">
                    Platz für eigenes Foto
                  </p>
                  <p className="mt-2 max-w-[14rem] text-sm leading-6 text-ink/60">
                    Aktuell ohne eigenes Foto. Sobald eines vorliegt, erscheint es hier
                    im gleichen Layout.
                  </p>
                </div>
                <div className="flex gap-2 self-start pt-3" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-sun/80" />
                  <span className="h-2 w-2 rounded-full bg-sage/80" />
                  <span className="h-2 w-2 rounded-full bg-clay/80" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="font-[var(--font-display)] text-3xl leading-tight text-ink sm:text-[2.2rem]">
              {product.title}
            </h3>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-ink/78">{product.shortBenefit}</p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-ink/68">{product.storyTeaser}</p>

            {product.note ? (
              <p className="mt-5 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3 text-sm leading-7 text-ink/70">
                Hinweis: {product.note}
              </p>
            ) : null}
          </div>

          <div className="mt-8 border-t border-ink/8 pt-5">
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
        </div>
      </div>
    </article>
  );
}
