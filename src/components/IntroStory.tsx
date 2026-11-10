export function IntroStory() {
  return (
    <section className="border-y border-ink/[0.06] bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">Worum es hier geht</span>
          <div className="mt-4 space-y-5 text-base leading-8 text-ink/60 sm:text-[1.05rem]">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-[2.5rem]">
              <em className="not-italic">TollesDing</em> ist meine Sammlung von Dingen,
              die sich bei uns zu Hause bewährt haben.
            </h2>
            <p>
              Manche davon sind ganz unscheinbar. Sie lösen ein wiederkehrendes Problem,
              sparen ein paar Handgriffe oder machen eine tägliche Sache einfacher.
            </p>
            <p>
              Hier landen nur Dinge, die wir wirklich benutzen und die ich auch Freunden
              empfehlen würde. Wenn dir davon etwas den Alltag leichter macht, freut
              mich das.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
