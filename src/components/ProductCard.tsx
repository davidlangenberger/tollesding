import Image from "next/image";
import type { Product } from "@/data/products";
import { hasAmazonAssociateTag, withAssociateTag } from "@/lib/amazon";
import { productBlurDataURL } from "@/lib/image";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const link = withAssociateTag(product.amazonUrl);
  const reversed = index % 2 === 1;
  const taxonomy = [product.category, ...product.tags.slice(0, 2)];

  return (
    <article id={product.id} className="border-t border-ink/10 pt-12 first:border-t-0 first:pt-0 sm:pt-16">
      <div
        className={`grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 ${
          reversed ? "lg:items-end" : "lg:items-start"
        }`}
      >
        <div className={`${reversed ? "lg:order-2" : ""} lg:col-span-7`}>
          <div className="overflow-hidden rounded-[1.6rem] bg-[#ece6dc] shadow-[0_24px_54px_rgba(62,49,37,0.11)]">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 62vw"
                quality={74}
                placeholder="blur"
                blurDataURL={productBlurDataURL}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.01]"
              />
            ) : (
              <div className="flex min-h-[24rem] items-end justify-between bg-white px-6 py-6">
                <div>
                  <p className="eyebrow">Bild folgt</p>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-ink/60">
                    Sobald ein passendes Foto vorliegt, erscheint es hier im gleichen
                    ruhigen Magazinlayout.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`${reversed ? "lg:order-1" : ""} lg:col-span-5 lg:self-center`}>
          <ul className="flex flex-wrap gap-2" aria-label="Kategorien und Taxonomie">
            {taxonomy.map((item, taxonomyIndex) => (
              <li
                key={`${product.id}-${item}-${taxonomyIndex}`}
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                  taxonomyIndex === 0
                    ? "border-ink/15 bg-ink text-white"
                    : "border-ink/10 bg-white/80 text-ink/72"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-4 font-[var(--font-display)] text-4xl leading-[1.02] text-ink sm:text-[2.8rem]">
            {product.title}
          </h3>
          <p className="mt-6 text-lg leading-8 text-ink/78">{product.shortBenefit}</p>
          <p className="mt-5 text-base leading-8 text-ink/68">{product.storyTeaser}</p>

          {product.note ? (
            <p className="mt-5 text-sm leading-7 text-ink/54">Hinweis: {product.note}</p>
          ) : null}

          <div className="mt-8">
            <a
              className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/15 bg-white/88 px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:border-ink/25 hover:bg-white"
              href={link}
              target="_blank"
              rel={hasAmazonAssociateTag() ? "noopener noreferrer sponsored nofollow" : "noopener noreferrer nofollow"}
            >
              Bei Amazon ansehen
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
