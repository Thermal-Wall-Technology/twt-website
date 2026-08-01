import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  FileBadge,
  FlaskConical,
  Landmark,
  Layers3,
  Lightbulb,
  ShieldCheck,
  University,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About TWT | Thermal Wall Technology",
  description:
    "Learn about the origins, mission, founder, and research direction behind Thermal Wall Technology.",
};

const ORIGIN_STEPS = [
  {
    number: "01",
    title: "Thermal mass as precedent",
    text: "TWT begins with an established building-science principle: massive materials can absorb, store, and release sensible heat over time. Historic adobe and stone buildings made this behavior visible long before modern HVAC.",
  },
  {
    number: "02",
    title: "A practical safety question",
    text: "While building a tornado-resistant addition for a family member, Michael Sandefur worked with insulated concrete forms and embedded hydronic tubing. The experience led to a new question: could the mass itself communicate with the living space?",
  },
  {
    number: "03",
    title: "From ICF concept to TWT",
    text: "Subsequent heat-loss calculations and design work led to the TWT approach: exterior insulation, room-side concrete thermal mass, embedded hydronics, and an insulated concrete block concept designed for the system.",
  },
  {
    number: "04",
    title: "A research program in progress",
    text: "Today, TWT is seeking independent modeling, prototype testing, and whole-building measurement to determine where the system performs, how it should be controlled, and what can be responsibly claimed.",
  },
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <header className="max-w-[900px]">
      <p className="text-sm font-extrabold tracking-[0.2em] text-twt-primary-orange uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-[clamp(36px,4vw,64px)] leading-[1.03] font-extrabold tracking-[-0.045em] ${light ? "text-white" : "text-twt-deep-navy"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-[820px] text-[clamp(17px,1.3vw,21px)] leading-[1.65] font-medium ${light ? "text-twt-blue-white" : "text-twt-slate-gray"}`}
      >
        {description}
      </p>
    </header>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-twt-primary-white text-twt-text-dark">
      <header className="hidden">
        <div className="mx-auto flex min-h-20 max-w-[1480px] items-center justify-between gap-6 px-[clamp(22px,5vw,84px)]">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.08em] uppercase outline-offset-8 hover:text-twt-sky-blue focus-visible:outline-2 focus-visible:outline-twt-sky-blue"
          >
            <ArrowLeft
              className="size-5 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to overview
          </Link>
          <span className="text-right text-xs font-extrabold tracking-[0.15em] uppercase sm:text-sm">
            Thermal Wall Technology
          </span>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(72px,8vw,132px)] text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(to_right,rgba(66,169,232,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,169,232,0.35)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_38%,black)]"
          aria-hidden="true"
        />
        <span
          className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue),var(--twt-primary-white),var(--twt-warm-orange),var(--twt-primary-orange))]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.22em] text-twt-light-orange uppercase sm:text-base">
              About Thermal Wall Technology
            </p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(48px,6.1vw,94px)] leading-[0.98] font-extrabold tracking-[-0.055em]">
              A building should do more than
              <span className="block text-twt-primary-orange">
                hold the system.
              </span>
            </h1>
            <p className="mt-7 max-w-[820px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              TWT is a patented building concept designed to make the structure
              itself part of the heating, cooling, and thermal-storage system.
            </p>
            <p className="mt-5 max-w-[790px] border-l-2 border-twt-primary-orange pl-5 text-base leading-7 font-medium text-twt-blue-white">
              The mission is straightforward: develop and validate a resilient
              building system that uses thermal mass, exterior insulation, and
              low-temperature hydronics in a more integrated way.
            </p>
          </div>

          <aside className="relative mx-auto w-full max-w-[450px] border border-white/20 bg-white/[0.06] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="relative aspect-[0.76] overflow-hidden bg-twt-medium-navy">
              <Image
                src="/home/about/about-face.png"
                alt="Michael Sandefur, inventor of Thermal Wall Technology"
                fill
                sizes="(max-width: 1024px) 84vw, 450px"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-2">
              <div>
                <p className="text-xs font-extrabold tracking-[0.14em] text-twt-light-orange uppercase">
                  Founder
                </p>
                <p className="mt-1 text-xl font-extrabold">Michael Sandefur</p>
              </div>
              <FileBadge
                className="size-9 shrink-0 text-twt-sky-blue"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,132px)]">
        <Image
          src="/home/about/about-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-55"
        />
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="border-l-4 border-twt-primary-orange bg-white/90 p-[clamp(26px,3vw,42px)] shadow-[0_12px_30px_rgba(3,26,61,0.08)]">
            <Landmark
              className="size-10 text-twt-medium-navy"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <p className="mt-7 text-xs font-extrabold tracking-[0.16em] text-twt-primary-orange uppercase">
              Founding idea
            </p>
            <p className="mt-3 text-[clamp(26px,2.3vw,37px)] leading-[1.13] font-extrabold tracking-[-0.035em] text-twt-deep-navy">
              Keep the thermal mass inside the building&apos;s useful thermal
              boundary.
            </p>
            <p className="mt-5 leading-7 font-medium text-twt-slate-gray">
              Rather than insulating both sides of a concrete core, TWT proposes
              placing continuous insulation outside the mass so the room-facing
              structure can store and exchange heat.
            </p>
          </aside>

          <div>
            <SectionHeading
              eyebrow="The idea behind TWT"
              title="Building science, made structural"
              description="TWT brings together a concrete structural system, exterior insulation, hydronic distribution, and a room-coupled thermal mass. The intent is not to replace the physics of heating and cooling, but to use established physics through a different building assembly."
            />
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {[
                [
                  Layers3,
                  "Thermal mass",
                  "Concrete stores sensible heat and slows rapid temperature change.",
                ],
                [
                  Building2,
                  "Exterior insulation",
                  "The mass remains better connected to indoor conditions.",
                ],
                [
                  Lightbulb,
                  "Hydronic connection",
                  "Embedded tubing gives the mass an active thermal input and output.",
                ],
              ].map(([Icon, title, text]) => {
                const ItemIcon = Icon as typeof Layers3;
                return (
                  <article
                    className="border border-twt-light-gray bg-white/90 p-6"
                    key={title as string}
                  >
                    <ItemIcon
                      className="size-8 text-twt-blueprint-blue"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">
                      {title as string}
                    </h3>
                    <p className="mt-3 text-sm leading-6 font-medium text-twt-slate-gray">
                      {text as string}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Origin story"
            title="From a practical question to a research agenda"
            description="The story matters because it explains where the concept came from. It is not evidence of performance; that comes from modeling, laboratory work, and measured buildings."
          />

          <ol className="mt-[clamp(48px,5vw,80px)] grid gap-6">
            {ORIGIN_STEPS.map(({ number, title, text }, index) => (
              <li
                className="grid gap-6 lg:grid-cols-[120px_0.7fr_1.3fr] lg:items-start"
                key={number}
              >
                <div className="flex items-center gap-4 lg:block">
                  <span className="font-mono text-sm font-bold tracking-[0.16em] text-twt-primary-orange">
                    {number}
                  </span>
                  <span
                    className="h-px flex-1 bg-twt-light-gray lg:mt-5 lg:block"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[clamp(25px,2.2vw,34px)] leading-[1.1] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
                  {title}
                </h3>
                <div className="border-l-2 border-twt-blueprint-blue bg-white px-6 py-5 shadow-[0_10px_24px_rgba(3,26,61,0.05)]">
                  <p className="leading-7 font-medium text-twt-slate-gray">
                    {text}
                  </p>
                  {index === 2 ? (
                    <p className="mt-4 text-sm leading-6 font-semibold text-twt-medium-navy">
                      The system&apos;s claimed performance remains under
                      validation; the design concept and the evidence record are
                      intentionally kept separate.
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)] text-white">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Founder & intellectual property"
              title="Designed for a buildable system"
              description="Michael Sandefur is the inventor behind TWT and its related patent work. The intellectual-property record establishes ownership of the design approach; it does not replace measured technical validation."
              light
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="border border-white/15 bg-white/[0.06] p-[clamp(24px,3vw,38px)]">
              <FileBadge
                className="size-10 text-twt-sky-blue"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <p className="mt-8 text-xs font-extrabold tracking-[0.15em] text-twt-light-orange uppercase">
                Ownership
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em]">
                Patented system design
              </h3>
              <p className="mt-4 leading-7 font-medium text-twt-blue-white">
                Patents document the novelty and ownership of the TWT approach.
                Performance claims must still stand on their own evidence.
              </p>
              <a
                href="https://patents.google.com/patent/USRE50072E1/en"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex font-bold text-twt-sky-blue underline decoration-white/30 underline-offset-4 hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-sky-blue"
              >
                View U.S. Reissue Patent RE50,072 E1
              </a>
            </article>
            <article className="border border-white/15 bg-white/[0.06] p-[clamp(24px,3vw,38px)]">
              <University
                className="size-10 text-twt-sky-blue"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <p className="mt-8 text-xs font-extrabold tracking-[0.15em] text-twt-light-orange uppercase">
                Independent work
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em]">
                Analysis with defined scope
              </h3>
              <p className="mt-4 leading-7 font-medium text-twt-blue-white">
                Prior outside analysis examined a defined wall-level comparison.
                Whole-building operation, controls, and seasonal performance
                remain research questions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <aside className="border-t-4 border-twt-primary-orange bg-twt-pale-orange p-[clamp(26px,3vw,42px)]">
            <BookOpen
              className="size-10 text-twt-primary-orange"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <p className="mt-7 text-xs font-extrabold tracking-[0.16em] text-twt-primary-orange uppercase">
              Historical note
            </p>
            <h2 className="mt-3 text-3xl leading-[1.08] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
              Third Millennium Project was an early research initiative.
            </h2>
            <p className="mt-5 leading-7 font-medium text-twt-slate-gray">
              It was an earlier name used to explore funding and demonstrate the
              broader idea. It is part of the history of TWT, not a separate
              company, product line, or parallel brand.
            </p>
          </aside>

          <div>
            <SectionHeading
              eyebrow="Where TWT is now"
              title="Moving from concept to measurement"
              description="TWT is focused on a transparent research path: refine the assembly, define test methods, build and instrument a prototype, and publish defensible results. The current site separates established science from founder modeling, independent analysis, and future validation."
            />
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-twt-deep-navy px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                How the system works
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/evidence"
                className="group inline-flex min-h-14 items-center justify-center gap-3 border-2 border-twt-medium-navy px-6 py-4 font-bold text-twt-medium-navy outline-offset-4 transition-colors hover:border-twt-primary-orange hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                Review evidence &amp; limitations
                <ShieldCheck className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-orange px-[clamp(22px,5vw,84px)] py-[clamp(64px,7vw,96px)]">
        <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[880px]">
            <p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">
              Research &amp; partnership
            </p>
            <h2 className="mt-4 text-[clamp(34px,3.8vw,56px)] leading-[1.05] font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              The next chapter is a measured building.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-twt-deep-navy">
            <FlaskConical
              className="size-9 text-twt-primary-orange"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <p className="max-w-[410px] text-base leading-7 font-semibold">
              TWT is seeking research and industry collaborators to make the
              next stage testable, instrumented, and transparent.
            </p>
          </div>
        </div>
      </section>

      <footer className="hidden">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <p>Thermal Wall Technology, LLC</p>
          <p>Patents establish ownership. Performance requires measurement.</p>
        </div>
      </footer>
    </main>
  );
}
