import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="eyebrow">Praktisch. Ehrlich. Ausgewählt.</span>
          <h1 className="mt-5 text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.25rem]">
            Dinge, die den Familienalltag wirklich leichter machen.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/60 sm:text-lg">
            Hier sammle ich Dinge, die ich selbst ausprobiert habe und die bei uns zu
            Hause wirklich nützlich sind. Vielleicht ist ja auch ein guter Tipp für
            dich dabei.
          </p>
          <div className="mt-8">
            <a
              href="#produkte"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black"
            >
              Fundstücke entdecken
            </a>
          </div>
        </div>

        <figure className="reveal mx-auto mt-12 max-w-3xl [animation-delay:120ms] sm:mt-14">
          <div className="overflow-hidden rounded-[1.75rem] bg-[#f1eee8] shadow-[0_24px_70px_rgba(31,41,55,0.09)]">
            <Image
              src="/products/airtrack-matte.png"
              alt="Familie mit Turnmatte im Wohnzimmer"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              quality={75}
              className="h-auto w-full object-contain"
            />
          </div>
          <figcaption className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-ink/50">
            Weniger Auswahl, mehr Substanz: Hier stehen nur Dinge, die im Alltag einen
            spürbaren Unterschied machen.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
