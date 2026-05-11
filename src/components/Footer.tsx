import { hasAmazonAssociateTag } from "@/lib/amazon";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { BrandLogo } from "./BrandLogo";
import { PrivacyPolicy } from "./PrivacyPolicy";

export function Footer() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <footer className="border-t border-ink/8 py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div>
            <BrandLogo compact />
            <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">
              <em className="font-[var(--font-display)] not-italic text-ink">TollesDing</em> ist eine persönliche Sammlung von Dingen, die in einem vollen
              Familienalltag wirklich helfen.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">
              Rechtliches
            </h2>
            <div className="mt-4 space-y-4">
              <details
                id="impressum"
                className="group rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm leading-7 text-ink/65"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-xl px-1 py-1 font-semibold text-ink marker:hidden">
                  Impressum
                  <span className="text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 space-y-1 border-t border-ink/8 pt-4">
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
              </details>

              <details
                id="datenschutz"
                className="group rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm leading-7 text-ink/65"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-xl px-1 py-1 font-semibold text-ink marker:hidden">
                  Datenschutzerklärung
                  <span className="text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 border-t border-ink/8 pt-4">
                  <PrivacyPolicy />
                </div>
              </details>

              <details
                id="affiliate-info"
                className="group rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm leading-7 text-ink/65"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-xl px-1 py-1 font-semibold text-ink marker:hidden">
                  Affiliate-Hinweis
                  <span className="text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 border-t border-ink/8 pt-4">
                  <AffiliateDisclosure />
                  {affiliateEnabled ? null : (
                    <p className="mt-4 text-xs leading-6 text-ink/50">
                      Der verpflichtende Amazon-Partnerhinweis wird automatisch sichtbar
                      verschärft, sobald eine echte Partner-ID hinterlegt ist.
                    </p>
                  )}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
