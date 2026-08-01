import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

const NAV_ITEMS = [
  ["How It Works", "/how-it-works"],
  ["Evidence", "/evidence"],
  ["Research", "/research-partnership"],
  ["Future Applications", "/future-applications"],
  ["Resources", "/resources"],
  ["About", "/about"],
] as const;

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 outline-offset-6 focus-visible:outline-2 focus-visible:outline-twt-focus"
      aria-label="Thermal Wall Technology home"
    >
      <span className={`grid shrink-0 place-items-center border-2 border-twt-primary-orange bg-twt-deep-navy font-extrabold tracking-[-0.08em] text-white ${compact ? "size-8 text-[11px]" : "size-10 text-sm"}`}>
        TWT
      </span>
      <span className="grid leading-none">
        <span className={`font-extrabold tracking-[-0.045em] text-twt-deep-navy ${compact ? "text-base" : "text-lg"}`}>
          Thermal Wall
        </span>
        <span className={`mt-1 font-bold tracking-[0.16em] text-twt-primary-orange uppercase ${compact ? "text-[8px]" : "text-[9px]"}`}>
          Technology
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-twt-light-gray bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-6 px-[clamp(20px,4vw,68px)]">
        <BrandMark />

        <nav className="hidden items-center gap-[clamp(20px,2.3vw,42px)] lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              className="text-sm font-extrabold tracking-[-0.015em] text-twt-medium-navy transition-colors hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-twt-focus"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/research-partnership#participate"
          className="hidden min-h-11 items-center justify-center bg-twt-primary-orange px-5 text-sm font-extrabold text-white outline-offset-4 transition-colors hover:bg-twt-deep-navy focus-visible:outline-2 focus-visible:outline-twt-focus sm:inline-flex"
        >
          Start a conversation
        </Link>

        <details className="relative lg:hidden">
          <summary className="flex min-h-11 list-none items-center gap-2 border border-twt-light-gray px-3 text-sm font-extrabold text-twt-deep-navy outline-offset-4 hover:border-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus [&::-webkit-details-marker]:hidden">
            <Menu className="size-5" aria-hidden="true" />
            Menu
          </summary>
          <nav className="absolute right-0 top-[calc(100%+10px)] grid w-[min(84vw,320px)] border border-twt-light-gray bg-white p-3 shadow-[0_18px_40px_rgba(3,26,61,0.18)]" aria-label="Mobile navigation">
            {NAV_ITEMS.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                className="px-4 py-3 font-extrabold text-twt-medium-navy outline-offset-2 hover:bg-twt-pale-blue hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/research-partnership#participate"
              className="mt-2 bg-twt-primary-orange px-4 py-3 text-center font-extrabold text-white outline-offset-2 hover:bg-twt-deep-navy focus-visible:outline-2 focus-visible:outline-twt-focus"
            >
              Start a conversation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-twt-deep-navy px-[clamp(20px,4vw,68px)] py-[clamp(44px,5vw,72px)] text-white">
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <BrandMark compact />
          <p className="mt-6 max-w-[620px] text-sm leading-6 font-medium text-twt-blue-white">
            A patented building concept seeking rigorous research, prototype measurement, and transparent technical validation.
          </p>
          <p className="mt-4 max-w-[650px] border-l-2 border-twt-primary-orange pl-4 text-xs leading-5 font-semibold text-twt-blue-white">
            Patents establish ownership. Models test feasibility. Measured performance requires a defined test method and a real building.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:min-w-[420px]">
          <nav className="grid gap-3 text-sm font-bold text-twt-blue-white" aria-label="Footer navigation">
            {NAV_ITEMS.map(([label, href]) => (
              <Link href={href} key={href} className="w-fit hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-sky-blue">
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/research-partnership#participate"
            className="group inline-flex w-fit items-center gap-3 self-start border-b border-twt-primary-orange pb-2 text-sm font-extrabold text-white outline-offset-4 hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-twt-sky-blue"
          >
            Research &amp; partnership
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1600px] flex-col gap-3 border-t border-white/15 pt-6 text-xs font-medium text-twt-blue-white sm:flex-row sm:items-center sm:justify-between">
        <p>Thermal Wall Technology, LLC</p>
        <p>Conceptual design and modeled results are not field-measured performance.</p>
      </div>
    </footer>
  );
}

