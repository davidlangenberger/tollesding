import Image from "next/image";

export function FounderNote() {
  return (
    <section className="pb-8 pt-4 sm:pb-10">
      <div className="section-shell">
        <div className="mx-auto grid max-w-3xl gap-5 rounded-[2rem] border border-ink/8 bg-white/55 p-4 shadow-soft backdrop-blur sm:grid-cols-[112px_minmax(0,1fr)] sm:items-center sm:p-5">
          <div className="w-24 overflow-hidden rounded-[1.4rem] border border-white/70 bg-sand sm:w-28">
            <Image
              src="/ich.png"
              alt="David Langenberger"
              width={1086}
              height={1448}
              sizes="112px"
              quality={64}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="text-sm leading-7 text-ink/62">
            <p>
              Hinter <em className="font-[var(--font-display)] not-italic text-ink">TollesDing</em> steckt
              David Langenberger, 44, seit 11 Jahren verheiratet und Vater von drei
              Kindern. Die Empfehlungen auf dieser Seite kommen aus genau diesem
              Alltag heraus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
