import { BrandLogo } from "./BrandLogo";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 border-b border-ink/[0.06] bg-[#fbfbf9]/90 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex min-h-16 items-center justify-between">
          <a href="#top" className="focus-ring inline-flex items-center">
            <BrandLogo compact />
          </a>
          <nav aria-label="Hauptnavigation" className="hidden md:block">
            <ul className="flex items-center gap-7 text-[0.82rem] font-medium text-ink/60">
              <li>
                <a className="focus-ring hover:text-ink" href="#produkte">
                  Fundstücke
                </a>
              </li>
              <li>
                <a className="focus-ring hover:text-ink" href="#warum">
                  Warum diese Dinge?
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
