import { hasAmazonAssociateTag } from "@/lib/amazon";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { BrandLogo } from "./BrandLogo";
import { PrivacyPolicy } from "./PrivacyPolicy";

export function Footer() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <footer className="border-t border-ink/[0.08] bg-[#f4f3ef] py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <BrandLogo compact />
            <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">
              Bei <em className="not-italic text-ink">TollesDing</em> teile ich Dinge,
              die ich selbst nutze und gern weiterempfehle.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">
              Rechtliches
            </h2>
            <div className="mt-3 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
              <details
                id="impressum"
                className="group py-4 text-sm leading-7 text-ink/60"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-xl px-1 py-1 font-semibold text-ink marker:hidden">
                  Impressum
                  <span className="text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 space-y-1 border-t border-ink/[0.06] pt-4">
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
                  <div className="mt-6 space-y-3 border-t border-ink/[0.08] pt-5">
                    <p className="font-semibold text-ink">Über TollesDing</p>
                    <p>
                      Ich bin 44, seit 11 Jahren verheiratet und wir haben drei Kinder
                      im Alter von 2, 8 und 10 Jahren. Unser Alltag ist schön, laut,
                      praktisch gedacht und meistens nicht besonders leer im Kalender.
                    </p>
                    <p>
                      Über die Jahre sind bei uns immer wieder Dinge gelandet, die ein
                      echtes Problem gelöst haben: nicht spektakulär, aber spürbar.
                      Freunde und Besucher haben manche davon gesehen, nachgekauft und
                      später erzählt, wie nützlich sie auch für sie geworden sind.
                    </p>
                    <p>
                      Daraus ist TollesDing entstanden. Keine Fake-Tests, erfundenen
                      Bewertungen oder endlosen Produktlisten, sondern Empfehlungen aus
                      dem Alltag und ehrliche Grenzen, wo sie dazugehören.
                    </p>
                  </div>
                </div>
              </details>

              <details
                id="datenschutz"
                className="group py-4 text-sm leading-7 text-ink/60"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-xl px-1 py-1 font-semibold text-ink marker:hidden">
                  Datenschutzerklärung
                  <span className="text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 border-t border-ink/[0.06] pt-4">
                  <PrivacyPolicy />
                </div>
              </details>

              <details
                id="affiliate-info"
                className="group py-4 text-sm leading-7 text-ink/60"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-xl px-1 py-1 font-semibold text-ink marker:hidden">
                  Affiliate-Hinweis
                  <span className="text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 border-t border-ink/[0.06] pt-4">
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
