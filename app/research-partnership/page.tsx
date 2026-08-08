import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  ChartNoAxesCombined,
  FileBadge,
  FlaskConical,
  Handshake,
  HeartPulse,
  Lightbulb,
  Ruler,
  ShieldCheck,
  University,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Partnership | Thermal Wall Technology",
  description:
    "Explore TWT's research agenda, validation needs, collaboration opportunities, and prototype pathway.",
};

const WORKSTREAMS = [
  {
    icon: Calculator,
    title: "Building science",
    text: "Whole-building energy modeling, envelope analysis, climate response, and comparative baseline design.",
  },
  {
    icon: Waves,
    title: "Hydronics & controls",
    text: "Tube layout, water temperatures, zoning, pumping, weather response, thermal storage, and control logic.",
  },
  {
    icon: Ruler,
    title: "Materials & structure",
    text: "Block geometry, reinforcement, constructability, exterior insulation attachment, durability, and code pathways.",
  },
  {
    icon: HeartPulse,
    title: "Indoor environment",
    text: "Thermal comfort, humidity, condensation safeguards, ventilation, indoor air quality, and occupant response.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Deployment economics",
    text: "First cost, operating cost, maintenance, resilience, grid interaction, and lifecycle comparison methods.",
  },
] as const;

const PROTOTYPE_STEPS = [
  [
    "01",
    "Define the reference",
    "Document the exact TWT assembly and a matched baseline building or assembly. Agree on climates, loads, performance boundaries, and success criteria before modeling starts.",
  ],
  [
    "02",
    "Test the assembly",
    "Measure heat transfer, thermal storage, hydronic response, surface temperatures, moisture behavior, and constructability in controlled conditions.",
  ],
  [
    "03",
    "Instrument a building",
    "Build and monitor a prototype through heating and cooling seasons, recording energy, weather, comfort, humidity, controls, and maintenance data.",
  ],
  [
    "04",
    "Publish and refine",
    "Compare results with the pre-defined baseline, document limitations, publish methods and findings, then improve the next version of the system.",
  ],
] as const;

const APPLICATIONS = [
  [
    "Affordable housing",
    "Energy burden, comfort, durability, and a rigorous path to comparative performance data.",
  ],
  [
    "Resilience buildings",
    "Thermal stability and structural questions during weather events and power interruptions.",
  ],
  [
    "Education & campus",
    "Instrumented living-lab environments with consistent occupancy and measurable operations.",
  ],
  [
    "Grid-aware communities",
    "Thermal storage and demand-shifting behavior studied with utilities and control partners.",
  ],
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
    <header className={styles.sectionHeader}>
      <p className="text-sm font-extrabold tracking-[0.2em] text-twt-primary-orange uppercase">
        {eyebrow}
      </p>
      <h2
        className={`${styles.sectionHeading} ${light ? styles.sectionHeadingLight : styles.sectionHeadingDark}`}
      >
        {title}
      </h2>
      <p
        className={`${styles.sectionDescription} ${light ? styles.sectionDescriptionLight : styles.sectionDescriptionDark}`}
      >
        {description}
      </p>
    </header>
  );
}

export default function ResearchPartnershipPage() {
  return (
    <main className={styles.page}>
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

      <section className="relative isolate overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,136px)] text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgba(66,169,232,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,169,232,0.3)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_40%,black)]"
          aria-hidden="true"
        />
        <span
          className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue),var(--twt-primary-white),var(--twt-warm-orange),var(--twt-primary-orange))]"
          aria-hidden="true"
        />

        <div className={styles.heroGrid}>
          <div>
            <p className="text-sm font-extrabold tracking-[0.22em] text-twt-light-orange uppercase sm:text-base">
              Research &amp; partnership
            </p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(48px,6vw,92px)] leading-[0.98] font-extrabold tracking-[-0.055em]">
              Build the
              <span className="block text-twt-primary-orange">
                evidence together.
              </span>
            </h1>
            <p className="mt-7 max-w-[850px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              TWT is seeking university, engineering, industry, and funding
              collaborators to turn a patented building concept into a
              rigorously measured research program.
            </p>
            <a
              href="#participate"
              className="group mt-9 inline-flex min-h-14 items-center gap-3 border-2 border-twt-primary-orange px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
            >
              Explore participation
              <ArrowRight
                className={styles.evidenceReviewIcon}
                aria-hidden="true"
              />
            </a>
          </div>

          <aside className="border-l-2 border-twt-primary-orange bg-white/[0.06] p-[clamp(24px,3.3vw,42px)]">
            <p className="text-xs font-extrabold tracking-[0.18em] text-twt-light-orange uppercase">
              The current ask
            </p>
            <ul className="mt-7 grid gap-5">
              {[
                ["Establish", "a transparent test protocol"],
                ["Measure", "the assembly and a full-scale prototype"],
                ["Compare", "against a defined baseline"],
                ["Publish", "methods, findings, and limitations"],
              ].map(([verb, text]) => (
                <li
                  className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  key={verb}
                >
                  <span
                    className="mt-1 size-2 shrink-0 rounded-full bg-twt-sky-blue"
                    aria-hidden="true"
                  />
                  <p className="text-base leading-7 font-medium text-twt-blue-white">
                    <strong className="font-extrabold text-white">
                      {verb}
                    </strong>{" "}
                    {text}.
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.sectionInner}`}>
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Starting point"
            title="A concept with defined evidence boundaries"
            description="TWT has a patent record, documented founder calculations, a scoped independent wall-level analysis, and established building-science precedent. It does not yet have field-measured whole-building performance."
          />
          <div className={styles.evidenceGrid}>
            {[
              [
                FileBadge,
                "Patented design",
                "Ownership and novelty of the building-system approach.",
              ],
              [
                Calculator,
                "Documented modeling",
                "Founder-developed calculations under stated assumptions.",
              ],
              [
                University,
                "Independent analysis",
                "A separate, wall-level model with clearly limited scope.",
              ],
              [
                FlaskConical,
                "Validation required",
                "Measured assembly and whole-building outcomes still needed.",
              ],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof FileBadge;
              return (
                <article className={styles.evidenceCard} key={title as string}>
                  <ItemIcon
                    className={styles.evidenceIcon}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <h3 className={styles.evidenceCardTitle}>
                    {title as string}
                  </h3>
                  <p className={styles.evidenceCardText}>{text as string}</p>
                </article>
              );
            })}
          </div>
          <Link href="/evidence" className={styles.evidenceReviewLink}>
            Review the evidence and its limits
            <ArrowRight
              className={styles.evidenceReviewIcon}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.paleSection}`}>
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Research agenda"
            title="Five workstreams, one measurable system"
            description="The question is not simply whether a wall stores heat. The research program must examine the integrated envelope, hydronics, controls, indoor conditions, construction process, and economics."
          />
          <div className={styles.workstreamsGrid}>
            {WORKSTREAMS.map(({ icon: Icon, title, text }, index) => (
              <article className={styles.workstreamCard} key={title}>
                <div className={styles.workstreamHeader}>
                  <Icon
                    className={styles.workstreamIcon}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span className={styles.workstreamNumber}>0{index + 1}</span>
                </div>
                <h3 className={styles.evidenceCardTitle}>{title}</h3>
                <p className={styles.evidenceCardText}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.darkSection}`}>
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Validation path"
            title="A prototype is a research instrument, not a marketing demonstration."
            description="The proposed sequence is designed to create data a technical reviewer can audit: clear inputs, controlled tests, measured operation, and published limitations alongside findings."
            light
          />
          <ol className={styles.prototypeSteps}>
            {PROTOTYPE_STEPS.map(([number, title, text]) => (
              <li className={styles.prototypeStep} key={number}>
                <span className={styles.prototypeNumber}>{number}</span>
                <h3 className={styles.prototypeTitle}>{title}</h3>
                <p className={styles.prototypeText}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.sectionInner}`}>
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className={styles.questionAside}>
            <Lightbulb
              className="size-10 text-twt-primary-orange"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <p className="mt-7 text-xs font-extrabold tracking-[0.16em] text-twt-primary-orange uppercase">
              Research question
            </p>
            <p className="mt-3 text-[clamp(27px,2.3vw,38px)] leading-[1.13] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
              Where does TWT create measurable value, and under what conditions?
            </p>
            <p className="mt-5 leading-7 font-medium text-twt-slate-gray">
              The purpose of the program is to answer that question with methods
              that distinguish plausible mechanisms from demonstrated
              performance.
            </p>
          </aside>

          <div>
            <SectionHeading
              eyebrow="Potential research contexts"
              title="Start where measurement and public value can meet"
              description="These are prospective applications after technical validation. They are research contexts?not current promises or operating claims."
            />
            <div className={styles.applicationGrid}>
              {APPLICATIONS.map(([title, text]) => (
                <article className={styles.applicationCard} key={title}>
                  <h3 className={styles.applicationTitle}>{title}</h3>
                  <p className={styles.evidenceCardText}>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="participate"
        className={`${styles.contentSection} ${styles.scrollSection} ${styles.paleSection}`}
      >
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Participation"
            title="Two ways to help move the work forward"
            description="One research path, with different forms of contribution. TWT is seeking disciplined collaboration rather than separate audience funnels."
          />
          <div className={styles.participationGrid}>
            <article
              className={`${styles.participationCard} ${styles.participationResearch}`}
            >
              <University
                className="size-11 text-twt-medium-navy"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <p className="mt-8 text-xs font-extrabold tracking-[0.16em] text-twt-primary-orange uppercase">
                Research collaboration
              </p>
              <h3 className="mt-3 text-[clamp(29px,2.7vw,42px)] leading-[1.08] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
                Bring a method, facility, or discipline.
              </h3>
              <ul className={styles.participationList}>
                {[
                  "Co-develop an independent test plan.",
                  "Model the system or a defined subsystem.",
                  "Test materials, assemblies, controls, or indoor conditions.",
                  "Host or help design an instrumented prototype.",
                ].map((item) => (
                  <li className={styles.participationItem} key={item}>
                    <span
                      className={styles.participationMarkerBlue}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article
              className={`${styles.participationCard} ${styles.participationFunding}`}
            >
              <Handshake
                className="size-11 text-twt-primary-orange"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <p className="mt-8 text-xs font-extrabold tracking-[0.16em] text-twt-primary-orange uppercase">
                Funding discussion
              </p>
              <h3 className="mt-3 text-[clamp(29px,2.7vw,42px)] leading-[1.08] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
                Help fund the evidence needed for a serious decision.
              </h3>
              <ul className={styles.participationList}>
                {[
                  "Support a scoped research, testing, or prototype program.",
                  "Fund instrumentation, monitoring, or third-party analysis.",
                  "Participate in a grant or industry-collaboration proposal.",
                  "Discuss an appropriate structure before any public commitment.",
                ].map((item) => (
                  <li className={styles.participationItem} key={item}>
                    <span
                      className={styles.participationMarkerOrange}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.orangeSection}`}>
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">
              Start a substantive conversation
            </p>
            <h2 className="mt-4 text-[clamp(36px,4vw,62px)] leading-[1.05] font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              A useful first inquiry names the question to be solved.
            </h2>
          </div>
          <div className="border-l-2 border-twt-primary-orange pl-6">
            <p className="text-lg leading-8 font-medium text-twt-slate-gray">
              Include your organization or discipline, relevant capabilities or
              facilities, the type of contribution you are considering, and the
              uncertainty you would most want the research to resolve.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/evidence"
                className="group inline-flex min-h-14 items-center gap-3 bg-twt-deep-navy px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                Review evidence first
                <ShieldCheck className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/how-it-works"
                className="group inline-flex min-h-14 items-center gap-3 border-2 border-twt-medium-navy px-6 py-4 font-bold text-twt-medium-navy outline-offset-4 transition-colors hover:border-twt-primary-orange hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                Review the mechanism
                <ArrowRight
                  className={styles.evidenceReviewIcon}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="hidden">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <p>Thermal Wall Technology, LLC</p>
          <p>Research questions are stated separately from measured results.</p>
        </div>
      </footer>
    </main>
  );
}
