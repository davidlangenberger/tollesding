import { hasAmazonAssociateTag } from "@/lib/amazon";
import { PrivacyPolicy } from "./PrivacyPolicy";

export function Footer() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <footer className="border-t border-ink/8 py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div>
            <p className="font-[var(--font-display)] text-3xl text-ink">Tolles Ding</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">
              Eine persönliche Sammlung von Dingen, die in einem vollen
              Familienalltag wirklich helfen.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                className="focus-ring rounded-full border border-ink/10 px-4 py-2 text-ink/70 hover:bg-white/70"
                href="#impressum"
              >
                Impressum
              </a>
              <a
                className="focus-ring rounded-full border border-ink/10 px-4 py-2 text-ink/70 hover:bg-white/70"
                href="#datenschutz"
              >
                Datenschutz
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">
              Rechtliches
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-ink/65">
              <div id="impressum" className="rounded-2xl border border-ink/10 bg-white/60 p-4">
                <p className="font-semibold text-ink">Impressum</p>
                <div className="mt-2 space-y-1">
                  <p>David Langenberger</p>
                  <p>Siegfried-Aufhäuser-Str. 17</p>
                  <p>86157 Augsburg</p>
                  <p>
                    <a
                      className="focus-ring rounded-sm underline decoration-ink/25 underline-offset-4 hover:decoration-ink/60"
                      href="mailto:david.langenberger@gmail.com"
                    >
                      david.langenberger@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">
              Affiliate-Hinweis
            </h2>
            <div className="mt-4 rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm leading-7 text-ink/65">
              {affiliateEnabled ? (
                <p>
                  Einige Links auf dieser Seite sind Affiliate-Links. Als
                  Amazon-Partner verdiene ich an qualifizierten Verkäufen.
                </p>
              ) : (
                <p>
                  Die Website ist auf Amazon-Partnerlinks vorbereitet. Solange noch
                  keine Partner-ID hinterlegt ist, entstehen über die derzeitigen
                  Amazon-Links keine Partnerprovisionen.
                </p>
              )}
            </div>
          </div>
        </div>
        <PrivacyPolicy />
      </div>
    </footer>
  );
}
