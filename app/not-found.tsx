import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[calc(100svh-76px)] place-items-center overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(72px,10vw,150px)] text-white">
      <div className="relative w-full max-w-[1080px]">
        <div className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full border border-twt-sky-blue/30" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full border-[24px] border-twt-primary-orange/20" aria-hidden="true" />

        <p className="font-mono text-sm font-bold tracking-[0.22em] text-twt-light-orange uppercase">404 / Page not found</p>
        <p className="mt-9 text-[clamp(90px,17vw,210px)] leading-[0.72] font-extrabold tracking-[-0.09em] text-white/10" aria-hidden="true">404</p>
        <div className="relative -mt-2 max-w-[730px]">
          <h1 className="text-[clamp(42px,5.2vw,78px)] leading-[1.01] font-extrabold tracking-[-0.055em]">
            This part of the system has not been built.
          </h1>
          <p className="mt-7 max-w-[650px] text-[clamp(18px,1.4vw,22px)] leading-[1.6] font-medium text-twt-blue-white">
            The page may have moved, the address may be incomplete, or the resource is not available yet. Return to the evidence, the mechanism, or the site home.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="group inline-flex min-h-14 items-center gap-3 bg-twt-primary-orange px-6 py-4 font-extrabold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-sky-blue">
              <Home className="size-5" aria-hidden="true" />
              Return home
            </Link>
            <Link href="/how-it-works" className="group inline-flex min-h-14 items-center gap-3 border-2 border-white/60 px-6 py-4 font-extrabold text-white outline-offset-4 transition-colors hover:border-twt-light-orange hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-twt-sky-blue">
              How it works
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="/evidence" className="group inline-flex min-h-14 items-center gap-3 border-2 border-white/60 px-6 py-4 font-extrabold text-white outline-offset-4 transition-colors hover:border-twt-light-orange hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-twt-sky-blue">
              Evidence
              <FlaskConical className="size-5" aria-hidden="true" />
            </Link>
          </div>
          <Link href="/resources" className="mt-8 inline-flex items-center gap-2 font-bold text-twt-sky-blue underline decoration-white/25 underline-offset-4 hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-sky-blue">
            <BookOpen className="size-4" aria-hidden="true" />
            Browse resources
          </Link>
        </div>
      </div>
    </main>
  );
}

