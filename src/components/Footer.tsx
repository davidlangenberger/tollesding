export function Footer() {
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
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">
              Rechtliches
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-ink/65">
              <div id="impressum" className="rounded-2xl border border-ink/10 bg-white/60 p-4">
                <p className="font-semibold text-ink">Impressum</p>
                <p>Impressum wird ergänzt.</p>
              </div>
              <div
                id="datenschutz"
                className="rounded-2xl border border-ink/10 bg-white/60 p-4"
              >
                <p className="font-semibold text-ink">Datenschutz</p>
                <p>Datenschutzerklärung wird ergänzt.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">
              Affiliate-Hinweis
            </h2>
            <div className="mt-4 rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm leading-7 text-ink/65">
              <p>
                Einige Links auf dieser Seite sind Affiliate-Links. Als Amazon-Partner
                verdiene ich an qualifizierten Verkäufen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Impressum und Datenschutzerklaerung vor dem Livegang rechtlich final pruefen und ergaenzen. */}
    </footer>
  );
}
