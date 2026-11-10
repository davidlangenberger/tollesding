import Image from "next/image";
import type { Product } from "@/data/products";
import { hasAmazonAssociateTag, withAssociateTag } from "@/lib/amazon";
import { productBlurDataURL } from "@/lib/image";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const links = (product.amazonLinks ?? [
    { label: "Bei Amazon ansehen", url: product.amazonUrl }
  ]).map((item) => ({
    ...item,
    url: withAssociateTag(item.url)
  }));
  const reversed = index % 2 === 1;
  const taxonomy = product.tags.slice(0, 3);

  return (
    <article
      id={product.id}
      className="group scroll-mt-24 border-t border-ink/[0.08] pt-14 first:border-t-0 first:pt-0 sm:pt-20"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-14 xl:gap-20">
        <div className={reversed ? "lg:order-2" : ""}>
          <div className="mx-auto max-w-[30rem] overflow-hidden rounded-[1.5rem] bg-[#f0ede7] shadow-[0_18px_50px_rgba(31,41,55,0.08)]">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={1200}
                height={900}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 410px"
                quality={75}
                placeholder="blur"
                blurDataURL={productBlurDataURL}
                className="aspect-[4/3] h-auto w-full object-contain transition duration-700 group-hover:scale-[1.015]"
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

        <div className={reversed ? "lg:order-1" : ""}>
          <p className="eyebrow">{product.category}</p>
          <div className="mt-4 flex items-start gap-2">
            <h3 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[2.55rem]">
              {product.title}
            </h3>
            <a
              href={`#${product.id}`}
              aria-label={`Direktlink zu „${product.title}“`}
              title={`Direktlink zu „${product.title}“`}
              className="focus-ring mt-1 shrink-0 rounded px-1 text-sm font-normal text-ink/35 hover:text-ink/75"
            >
              <span aria-hidden="true">#</span>
            </a>
          </div>
          <p className="mt-5 text-lg leading-8 text-ink/75">{product.shortBenefit}</p>
          <p className="mt-4 text-base leading-8 text-ink/60">{product.storyTeaser}</p>

          <ul
            className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-ink/40"
            aria-label="Produkteigenschaften"
          >
            {taxonomy.map((item, taxonomyIndex) => (
              <li key={`${product.id}-${item}-${taxonomyIndex}`}>
                {taxonomyIndex > 0 ? <span className="mr-3" aria-hidden>·</span> : null}
                {item}
              </li>
            ))}
          </ul>

          {product.note ? (
            <p className="mt-5 text-sm leading-7 text-ink/54">Hinweis: {product.note}</p>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((item, linkIndex) => (
              <a
                key={`${product.id}-${item.label}`}
                className={`focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
                  linkIndex === 0
                    ? "border-ink bg-ink text-white hover:bg-black"
                    : "border-ink/12 bg-white text-ink hover:border-ink/25"
                }`}
                href={item.url}
                target="_blank"
                rel={
                  hasAmazonAssociateTag()
                    ? "noopener noreferrer sponsored nofollow"
                    : "noopener noreferrer nofollow"
                }
              >
                {item.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
