import { hasAmazonAssociateTag } from "@/lib/amazon";

export function AffiliateDisclosure() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <div className="space-y-4 text-sm leading-7 text-ink/70">
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
  );
}
