import Image from "next/image";

export function IntroStory() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-md">
            <span className="eyebrow">
              Warum es <em className="font-[var(--font-display)] not-italic">TollesDing</em> gibt
            </span>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
              Kein Testportal.
              <span className="block text-ink/55">Eher ein ehrliches Familienarchiv.</span>
            </h2>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-soft backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-sand">
                <Image
                  src="/ich.png"
                  alt="David Langenberger, Gründer von TollesDing"
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  quality={72}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="mt-4 px-1">
                <p className="font-semibold text-ink">David Langenberger</p>
                <p className="mt-1 text-sm leading-6 text-ink/62">
                  44 Jahre, seit 11 Jahren verheiratet, Vater von drei Kindern und
                  jemand, der gute Alltagslösungen lieber empfiehlt als groß darüber redet.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-base leading-8 text-ink/75 sm:text-lg">
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
