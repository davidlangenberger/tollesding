import { BrandLogo } from "./BrandLogo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-shell">
        <div className="flex items-center justify-between py-5">
          <a
            href="#top"
            className="focus-ring inline-flex items-center rounded-full border border-white/40 bg-white/78 px-4 py-2 shadow-soft backdrop-blur"
          >
            <BrandLogo compact />
          </a>
          <nav aria-label="Hauptnavigation" className="hidden md:block">
            <ul className="flex items-center gap-2 rounded-full border border-white/40 bg-white/60 p-1 text-sm text-ink/75 shadow-soft backdrop-blur">
              <li>
                <a className="focus-ring rounded-full px-4 py-2 hover:bg-white" href="#produkte">
                  Fundstücke
                </a>
              </li>
              <li>
                <a className="focus-ring rounded-full px-4 py-2 hover:bg-white" href="#warum">
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
