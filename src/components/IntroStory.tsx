export function IntroStory() {
  return (
    <section className="py-20 sm:py-24">
      <div className="article-shell">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <span className="eyebrow">Worum es hier geht</span>
          </div>
          <div className="space-y-6 text-[1.06rem] leading-8 text-ink/74">
            <p className="font-[var(--font-display)] text-3xl leading-tight text-ink sm:text-[2.45rem]">
              <em className="not-italic">TollesDing</em> ist keine Produktliste, die jeden
              Trend mitnimmt. Eher eine ruhige Auswahl der Dinge, die in einem
              lebhaften Familienalltag dauerhaft geblieben sind.
            </p>
            <p className="first-letter:float-left first-letter:mr-3 first-letter:pt-1 first-letter:font-[var(--font-display)] first-letter:text-6xl first-letter:leading-[0.82] first-letter:text-ink">
              Viele dieser Empfehlungen sind nicht spektakulär. Genau das ist der
              Punkt. Sie lösen kleine, wiederkehrende Probleme, sparen Zeit, bringen
              Ordnung in Routinen oder machen Dinge einfacher, die mit Kindern
              erstaunlich oft vorkommen.
            </p>
            <p>
              Statt möglichst viel zu zeigen, startet diese Seite bewusst mit vier
              Fundstücken, für die auch die Bildsprache schon so sitzt, wie sie sitzen
              soll. Die anderen Dinge kommen wieder dazu, sobald ihre Bilder denselben
              ruhigen, hochwertigen Ton treffen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
