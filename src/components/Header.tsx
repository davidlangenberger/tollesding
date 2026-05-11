import { BrandLogo } from "./BrandLogo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-shell">
        <div className="flex items-center justify-between py-6">
          <a href="#top" className="focus-ring inline-flex items-center">
            <BrandLogo compact />
          </a>
          <nav aria-label="Hauptnavigation" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-ink/68">
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
