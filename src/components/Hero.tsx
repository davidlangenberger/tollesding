import { hasAmazonAssociateTag } from "@/lib/amazon";

export function Hero() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink/5 pb-20 pt-28 sm:pb-24 sm:pt-32"
    >
      <div
        className="absolute inset-0 bg-paper-grid bg-[size:32px_32px] opacity-30"
        aria-hidden
      />
      <div
        className="absolute left-[8%] top-28 h-40 w-40 rounded-full bg-sun/25 blur-3xl animate-glow"
        aria-hidden
      />
      <div
        className="absolute right-[4%] top-20 h-56 w-56 rounded-full bg-sage/25 blur-3xl animate-drift"
        aria-hidden
      />
      <div className="section-shell relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Persönlich kuratiert statt beliebig gelistet</span>
            <h1 className="mt-6 max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              Dinge, die im Alltag
              <span className="block text-sun">wirklich was taugen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75 sm:text-xl">
              Praktische Fundstücke für Familien, die wenig Zeit haben, gern gute
              Lösungen nutzen und keine Lust auf Ramsch kennen.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#produkte"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink/90"
              >
                Fundstücke entdecken
              </a>
              <p className="max-w-xs text-sm leading-6 text-ink/60">
                {affiliateEnabled
                  ? "Einige Links sind Affiliate-Links. Für dich bleibt der Preis gleich."
                  : "Die Produktlinks führen aktuell als normale externe Links zu Amazon."}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-[2rem] border border-white/60 bg-white/60 blur-[2px] lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-sand p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/45">
                    Zuhause
                  </p>
                  <p className="mt-10 font-[var(--font-display)] text-2xl text-ink">
                    Weniger Suchen.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Mehr Dinge, die einfach funktionieren.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/45">
                    Familie
                  </p>
                  <div className="mt-8 flex items-end gap-3">
                    <div className="h-20 w-12 rounded-t-full bg-sage/80" />
                    <div className="h-28 w-12 rounded-t-full bg-sun/80" />
                    <div className="h-16 w-12 rounded-t-full bg-clay/80" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-ink/65">
                    Aus dem echten Alltag mit drei Kindern statt aus einem Testlabor.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-ink p-5 text-white sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                    Auswahlprinzip
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
                    <p>Selbst benutzt oder aus direkter Erfahrung empfohlen.</p>
                    <p>Sinnvoller Nutzen vor Spielerei und Trends.</p>
                    <p>Nur Dinge, die man guten Gewissens weitergibt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
