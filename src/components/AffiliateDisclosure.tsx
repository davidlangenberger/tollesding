import { hasAmazonAssociateTag } from "@/lib/amazon";

export function AffiliateDisclosure() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <section id="transparenz" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/75 p-6 shadow-soft backdrop-blur sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Transparenz</span>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
              Offen verlinkt. Offen gesagt.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-ink/75">
            {affiliateEnabled ? (
              <p>
                Einige Links auf dieser Seite sind Affiliate-Links. Wenn du darüber
                etwas kaufst, erhalten wir gegebenenfalls eine kleine Provision. Für
                dich ändert sich am Preis nichts.
              </p>
            ) : (
              <p>
                Die Seite ist bereits für Amazon-Partnerlinks vorbereitet. Aktuell
                ist jedoch noch keine Partner-ID hinterlegt. Die derzeitigen
                Produktlinks sind deshalb normale externe Links zu Amazon.
              </p>
            )}
            <p>
              Empfohlen werden nur Dinge, die wir selbst sinnvoll finden, nutzen
              oder aus unmittelbarer Erfahrung guten Gewissens weitergeben würden.
            </p>
            {affiliateEnabled ? (
              <p className="rounded-2xl border border-ink/10 bg-sand px-4 py-3 text-sm text-ink/70">
                Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
              </p>
            ) : (
              <p className="rounded-2xl border border-ink/10 bg-sand px-4 py-3 text-sm text-ink/70">
                Hinweis: Der gesetzte Amazon-Partnerhinweis wird aktiviert, sobald
                die Partner-ID hinterlegt ist.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
