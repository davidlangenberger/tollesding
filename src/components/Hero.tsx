import { hasAmazonAssociateTag } from "@/lib/amazon";
import { BrandLogo } from "./BrandLogo";

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
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <div className="rounded-[2rem] border border-white/60 bg-white/72 p-5 shadow-soft backdrop-blur sm:p-7">
              <BrandLogo />
            </div>
            <span className="eyebrow">Persönlich kuratiert statt beliebig gelistet</span>
            <h1 className="mt-6 max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              Dinge, die im Alltag
              <span className="block text-sun">wirklich was taugen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75 sm:text-xl">
              <em className="font-[var(--font-display)] not-italic text-ink">TollesDing</em> ist eine persönliche Sammlung für Familien, die wenig Zeit
              haben, gute Lösungen schätzen und keine Lust auf Ramsch, Fake-Tests oder
              beliebige Produktlisten mitbringen.
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-soft backdrop-blur sm:p-8">
              <div className="space-y-5">
                <div className="rounded-[1.5rem] bg-sand p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/45">
                    Was <em className="font-[var(--font-display)] not-italic normal-case tracking-normal text-ink">TollesDing</em> ausmacht
                  </p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-ink/70">
                    <p>Selbst benutzt oder aus unmittelbarer Erfahrung empfohlen.</p>
                    <p>Sinnvoller Nutzen vor Spielerei, Trend oder Marketinglärm.</p>
                    <p>Aus einem echten Familienalltag mit drei Kindern heraus kuratiert.</p>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-ink p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                    Haltung
                  </p>
                  <p className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white">
                    Kein Schnickschnack. Nur Dinge, die helfen.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Lieber weniger Empfehlungen, dafür solche, die man auch Freunden mit
                    gutem Gefühl weitergeben würde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
