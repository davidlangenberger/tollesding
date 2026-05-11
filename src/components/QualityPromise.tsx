const principles = [
  {
    title: "Im Alltag getestet",
    text: "Nicht zwischen zwei Tabs bewertet, sondern im echten Familienbetrieb benutzt."
  },
  {
    title: "Sinnvoll statt verspielt",
    text: "Kein Gadget um des Gadgets willen. Ein Produkt muss uns Zeit, Nerven oder Wege sparen."
  },
  {
    title: "Familienkompatibel",
    text: "Wenn etwas im Alltag mit Kindern nicht standhält, hat es hier keinen Platz."
  },
  {
    title: "Mit gutem Gefühl empfohlen",
    text: "Nur Dinge, die wir auch Freunden weitergeben würden, kommen auf diese Seite."
  }
];

export function QualityPromise() {
  return (
    <section id="warum" className="pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-md">
            <span className="eyebrow">Warum diese Dinge?</span>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
              Weil praktisch oft leise wirkt. Und gerade deshalb bleibt.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="border-t border-ink/10 pt-4">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
