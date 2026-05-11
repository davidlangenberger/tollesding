import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-ink/6 pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow">TollesDing</span>
          <h1 className="mt-5 font-[var(--font-display)] text-[2.8rem] leading-[0.94] text-ink sm:text-6xl lg:text-[4.6rem]">
            Dinge, die im Alltag wirklich etwas leichter machen.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/72 sm:text-lg">
            Eine persönliche Sammlung für Familien, die gute Lösungen lieben, wenig Zeit
            haben und keine Lust auf Ramsch, Fake-Tests oder beliebige Listen mit
            hundert halbherzigen Empfehlungen.
          </p>
          <div className="mt-7 flex items-center justify-center gap-4 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/46">
            <span>Augsburg</span>
            <span className="h-1 w-1 rounded-full bg-ink/25" aria-hidden />
            <span>Drei Kinder</span>
            <span className="h-1 w-1 rounded-full bg-ink/25" aria-hidden />
            <span>Persönlich ausgewählt</span>
          </div>
          <div className="mt-9">
            <a
              href="#produkte"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink/92"
            >
              Fundstücke entdecken
            </a>
          </div>
        </div>

        <figure className="mt-14">
          <div className="overflow-hidden rounded-[1.75rem] bg-[#ece5da] shadow-[0_24px_60px_rgba(58,49,37,0.12)]">
            <Image
              src="/products/airtrack-matte.png"
              alt="Familie mit Turnmatte im Wohnzimmer"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 86vw, 1100px"
              quality={74}
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 max-w-3xl text-sm leading-6 text-ink/54">
            Die Empfehlungen auf dieser Seite sind nicht dafür da, nett auszusehen,
            sondern den Familienalltag wirklich leichter zu machen. Genau deshalb
            bleiben sie bei uns dauerhaft im Einsatz.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
