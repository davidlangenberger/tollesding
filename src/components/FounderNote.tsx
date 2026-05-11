import Image from "next/image";

export function FounderNote() {
  return (
    <section className="pb-10 pt-2 sm:pb-14">
      <div className="article-shell">
        <div className="border-t border-ink/10 pt-8">
          <span className="eyebrow">
            Warum es <em className="font-[var(--font-display)] not-italic">TollesDing</em> gibt
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-ink sm:text-[2.5rem]">
            Kein Testportal.
            <span className="block text-ink/55">Eher ein ehrliches Familienarchiv.</span>
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-[88px_minmax(0,1fr)] sm:items-start">
            <div className="w-20 overflow-hidden rounded-[1.2rem] bg-sand sm:w-[88px]">
              <Image
                src="/ich.png"
                alt="David Langenberger"
                width={1086}
                height={1448}
                sizes="88px"
                quality={64}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="space-y-4 text-sm leading-7 text-ink/62">
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
                Aus dieser Erfahrung ist <em className="font-[var(--font-display)] not-italic text-ink">TollesDing</em> entstanden. Hier stehen keine
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
      </div>
    </section>
  );
}
