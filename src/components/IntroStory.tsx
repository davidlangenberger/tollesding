import Image from "next/image";

export function IntroStory() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.56fr_1.44fr] lg:items-end">
          <div className="max-w-sm">
            <span className="eyebrow">
              Warum es <em className="font-[var(--font-display)] not-italic">TollesDing</em> gibt
            </span>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
              Kein Testportal.
              <span className="block text-ink/55">Eher ein ehrliches Familienarchiv.</span>
            </h2>
            <div className="mt-8 max-w-[18rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-soft backdrop-blur sm:max-w-[20rem]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src="/ich.png"
                  alt="David Langenberger, Gründer von TollesDing"
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1024px) 70vw, 320px"
                  quality={72}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 self-end text-base leading-8 text-ink/75 sm:text-lg">
            <p>
              Ich bin 44, seit 11 Jahren verheiratet und wir haben drei Kinder im
              Alter von 2, 8 und 10 Jahren. Unser Alltag ist schön, laut, praktisch
              gedacht und meistens nicht besonders leer im Kalender.
            </p>
            <p>
              Über die Jahre sind bei uns immer wieder Dinge gelandet, die ein
              echtes Problem gelöst haben: nicht spektakulär, aber spürbar. Genau
              diese Dinge haben Freunde und Besucher oft bei uns gesehen, später
              nachgekauft und uns dann erzählt, wie nützlich sie bei ihnen auch
              geworden sind.
            </p>
            <p>
              Aus dieser Erfahrung ist <em className="font-[var(--font-display)] not-italic">TollesDing</em> entstanden. Hier stehen keine
              Fake-Tests, keine erfundenen Bewertungen und keine endlosen
              Produktlisten. Nur Empfehlungen aus dem echten Alltag, mit ehrlichen
              Grenzen dort, wo sie dazugehören.
            </p>
            <p>
              Mich interessieren Produkte nicht deshalb, weil sie neu sind, sondern
              weil sie etwas vereinfachen. Wenn etwas bei uns zuhause dauerhaft
              benutzt wird, Besuchern auffällt und später sogar weiterempfohlen wird,
              ist das meistens ein ziemlich gutes Zeichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
