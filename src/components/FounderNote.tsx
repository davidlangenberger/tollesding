import Image from "next/image";

export function FounderNote() {
  return (
    <section className="pb-8 pt-4 sm:pb-10">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-ink/8 bg-white/55 p-5 shadow-soft backdrop-blur sm:p-6">
          <span className="eyebrow">
            Warum es <em className="font-[var(--font-display)] not-italic">TollesDing</em> gibt
          </span>
          <h2 className="mt-5 font-[var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">
            Kein Testportal.
            <span className="block text-ink/55">Eher ein ehrliches Familienarchiv.</span>
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-[112px_minmax(0,1fr)] sm:items-start">
            <div className="w-24 overflow-hidden rounded-[1.4rem] border border-white/70 bg-sand sm:w-28">
              <Image
                src="/ich.png"
                alt="David Langenberger"
                width={1086}
                height={1448}
                sizes="112px"
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
