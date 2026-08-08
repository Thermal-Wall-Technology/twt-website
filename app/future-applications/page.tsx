import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartHandshake,
  House,
  Landmark,
  ShieldCheck,
  University,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Future Applications | Thermal Wall Technology",
  description:
    "Explore the potential future applications TWT intends to evaluate after rigorous research and validation.",
};

const APPLICATIONS = [
  {
    icon: House,
    title: "Homes",
    context:
      "Comfort, operating cost, resilience, and durable construction in a complete residential assembly.",
    question:
      "Can the system maintain comfort and manage moisture across real heating and cooling seasons?",
  },
  {
    icon: Building2,
    title: "Multifamily & affordable housing",
    context:
      "A research setting where energy burden, maintenance, indoor conditions, and durability can be assessed together.",
    question:
      "Where can an integrated envelope and low-temperature system create measurable public value?",
  },
  {
    icon: GraduationCap,
    title: "Education & campus",
    context:
      "Potential living-lab environments with defined operations, multidisciplinary research capacity, and long-term monitoring.",
    question:
      "How does the concept perform under consistent use, controls, and measurement protocols?",
  },
  {
    icon: Landmark,
    title: "Community & resilience buildings",
    context:
      "Buildings that may benefit from investigation of thermal stability, durability, and operation during disruptions.",
    question:
      "What remains functional through weather events or limited power, and for how long?",
  },
  {
    icon: Factory,
    title: "Manufacturing partnerships",
    context:
      "A future pathway for evaluating repeatable block production, quality assurance, constructability, and supply-chain feasibility.",
    question:
      "Can the design be manufactured and installed consistently at a defined quality standard?",
  },
  {
    icon: Waves,
    title: "Grid-aware systems",
    context:
      "A research opportunity to study thermal storage, hydronic controls, and demand shifting alongside utility or industry partners.",
    question:
      "When and how can thermal mass reduce grid demand without compromising comfort?",
  },
] as const;

const PATH = [
  [
    "Research",
    "Define the question, baseline, and method before making a performance claim.",
  ],
  [
    "Prototype",
    "Test assemblies and operate an instrumented building under a documented protocol.",
  ],
  [
    "Compare",
    "Evaluate measured outcomes against a transparent reference condition.",
  ],
  [
    "Decide",
    "Identify where the system is appropriate, what remains uncertain, and what needs refinement.",
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

export default function FutureApplicationsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <p className="text-sm font-extrabold tracking-[0.2em] text-twt-light-orange uppercase">
              Future potential
            </p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(48px,6.2vw,96px)] leading-[0.98] font-extrabold tracking-[-0.065em]">
              Where the research could lead.
            </h1>
            <p className="mt-8 max-w-[790px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              TWT is a patented building concept with potential applications
              across housing, institutional buildings, manufacturing, and
              grid-aware energy systems. Those applications remain prospective
              until research defines where the system performs, for whom, and
              under what conditions.
            </p>
            <Link
              href="/research-partnership"
              className="group mt-9 inline-flex min-h-14 items-center gap-3 border-2 border-twt-primary-orange px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
            >
              Explore the research program
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <aside className="border-l-2 border-twt-primary-orange bg-white/[0.06] p-[clamp(26px,3.4vw,44px)]">
            <ShieldCheck
              className="size-11 text-twt-sky-blue"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="mt-8 text-xs font-extrabold tracking-[0.17em] text-twt-light-orange uppercase">
              A necessary distinction
            </p>
            <p className="mt-4 text-[clamp(26px,2.3vw,37px)] leading-[1.12] font-extrabold tracking-[-0.04em]">
              Potential is not a performance claim.
            </p>
            <p className="mt-5 leading-7 font-medium text-twt-blue-white">
              This page describes contexts worth studying after validation. It
              does not represent installed-project outcomes, guaranteed savings,
              or a current market offer.
            </p>
          </aside>
        </div>
      </section>

      <nav
        className={styles.sectionNav}
        aria-label="Future applications sections"
      >
        <div className={styles.sectionNavInner}>
          <a
            href="#contexts"
            className="outline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
          >
            Contexts to evaluate
          </a>
          <a
            href="#sequence"
            className="outline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
          >
            Validation before deployment
          </a>
          <a
            href="#participate"
            className="outline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
          >
            Participate
          </a>
        </div>
      </nav>

      <section
        id="contexts"
        className={`${styles.contentSection} ${styles.sectionInner}`}
      >
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Contexts to evaluate"
            title="Applications should follow the evidence."
            description="Each setting presents a different technical, human, and economic question. The right next step is not to market every possibility; it is to select useful test cases and make their assumptions visible."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {APPLICATIONS.map(
              ({ icon: Icon, title, context, question }, index) => (
                <article className={styles.applicationCard} key={title}>
                  <div className={styles.applicationHeader}>
                    <Icon
                      className={styles.applicationIcon}
                      strokeWidth={1.55}
                      aria-hidden="true"
                    />
                    <span className={styles.applicationNumber}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={styles.applicationTitle}>{title}</h3>
                  <p className={styles.applicationContext}>{context}</p>
                  <div className={styles.applicationQuestion}>
                    <p className={styles.questionLabel}>Question to answer</p>
                    <p className={styles.questionText}>{question}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.paleSection}`}>
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className={styles.designAside}>
            <HeartHandshake
              className="size-11 text-twt-primary-orange"
              strokeWidth={1.55}
              aria-hidden="true"
            />
            <p className="mt-8 text-xs font-extrabold tracking-[0.17em] text-twt-primary-orange uppercase">
              Design principle
            </p>
            <p className="mt-4 text-[clamp(27px,2.35vw,39px)] leading-[1.12] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
              Start with a public-value question, not a product category.
            </p>
            <p className="mt-5 leading-7 font-medium text-twt-slate-gray">
              Research partners can help identify sites where comfort, energy
              burden, resilience, constructability, or grid performance can be
              measured honestly.
            </p>
          </aside>
          <div>
            <SectionHeading
              eyebrow="What each evaluation must include"
              title="A full system boundary"
              description="TWT should be evaluated as an integrated assembly, not as a single material or isolated energy number."
            />
            <div className={styles.criteriaGrid}>
              {[
                "A clearly defined wall, floor, hydronic, control, and ventilation configuration.",
                "A matched baseline and stated climate, occupancy, and utility assumptions.",
                "Measured energy, surface temperature, comfort, humidity, and maintenance information.",
                "Constructability, cost, durability, and code questions documented alongside energy results.",
              ].map((item) => (
                <div className={styles.criteriaItem} key={item}>
                  <CheckCircle2
                    className={styles.criteriaIcon}
                    aria-hidden="true"
                  />
                  <p className={styles.criteriaText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="sequence"
        className={`${styles.contentSection} ${styles.darkSection}`}
      >
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Validation before deployment"
            title="A disciplined route from idea to application."
            description="The next applications should be selected as research cases. What is learned in one setting determines whether and how the next setting is appropriate."
            light
          />
          <ol className="mt-[clamp(48px,5vw,78px)] grid gap-5">
            {PATH.map(([number, text], index) => (
              <li
                className="grid gap-5 border-t border-white/15 pt-6 md:grid-cols-[90px_0.4fr_1fr] md:items-start"
                key={number}
              >
                <span className="font-mono text-sm font-bold tracking-[0.16em] text-twt-light-orange">
                  0{index + 1}
                </span>
                <h3 className="text-[clamp(25px,2.2vw,34px)] leading-[1.1] font-extrabold tracking-[-0.04em] text-white">
                  {number}
                </h3>
                <p className="border-l-2 border-twt-primary-orange pl-6 leading-7 font-medium text-twt-blue-white">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="participate"
        className="scroll-mt-32 bg-twt-pale-orange px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,118px)]"
      >
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">
              Shape a test case
            </p>
            <h2 className="mt-4 text-[clamp(38px,4vw,62px)] leading-[1.05] font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              Bring the question, site, method, or capability.
            </h2>
          </div>
          <div className="border-l-2 border-twt-primary-orange pl-6">
            <p className="text-lg leading-8 font-medium text-twt-slate-gray">
              TWT is looking for collaborators who can help define practical
              research applications, develop evaluation methods, host
              prototypes, or support the work needed to validate a serious
              building-system decision.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/research-partnership#participate"
                className="group inline-flex min-h-14 items-center gap-3 bg-twt-deep-navy px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                Research &amp; partnership
                <University className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/evidence"
                className="group inline-flex min-h-14 items-center gap-3 border-2 border-twt-medium-navy px-6 py-4 font-bold text-twt-medium-navy outline-offset-4 transition-colors hover:border-twt-primary-orange hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
              >
                Review evidence first
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
