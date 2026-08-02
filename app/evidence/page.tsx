import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Building2,
  Calculator,
  CircleAlert,
  ExternalLink,
  FlaskConical,
  Gauge,
  Ruler,
  Thermometer,
  University,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Evidence & Verification | Thermal Wall Technology",
  description:
    "Review the established science, modeled findings, independent analysis, limitations, and validation work behind Thermal Wall Technology.",
};

const EVIDENCE_LEVELS = [
  {
    number: "01",
    status: "Established foundation",
    title: "Building-science principles",
    icon: BookOpenCheck,
    tone: "border-twt-medium-navy",
    iconTone: "bg-twt-pale-blue text-twt-medium-navy",
    supports: [
      "Heat moves from warmer regions toward cooler regions.",
      "Concrete can store and release sensible thermal energy.",
      "Exterior insulation can place structural mass inside the conditioned thermal envelope.",
    ],
    boundary:
      "These principles explain why the concept is physically plausible. They do not establish TWT's whole-building efficiency.",
  },
  {
    number: "02",
    status: "Founder-modeled",
    title: "Analytical wall scenarios",
    icon: Calculator,
    tone: "border-twt-blueprint-blue",
    iconTone: "bg-twt-light-blue text-twt-medium-navy",
    supports: [
      "Documented comparisons of one-sided and two-sided insulated concrete walls.",
      "Calculated heat loss, energy storage, and temperature profiles under defined conditions.",
      "A foundation for specifying the independent USI model.",
    ],
    boundary:
      "The calculations are scenario-based models, not observations from an occupied building.",
  },
  {
    number: "03",
    status: "Independently analyzed",
    title: "USI engineering model",
    icon: University,
    tone: "border-twt-primary-navy",
    iconTone: "bg-twt-blue-white text-twt-primary-navy",
    supports: [
      "A separately developed one-dimensional transient heat-transfer model.",
      "Similar daily wall heat-flux results for the report's defined comparison.",
      "Agreement with the founder model's overall wall-level conclusion within the stated scope.",
    ],
    boundary:
      "The analysis did not model a complete house, radiant exchange, floors, zoning, controls, or occupied-building effects.",
  },
  {
    number: "04",
    status: "Industry precedent",
    title: "Conventional ICF evidence",
    icon: Building2,
    tone: "border-twt-slate-gray",
    iconTone: "bg-twt-concrete-light text-twt-text-dark",
    supports: [
      "A recognized construction platform from which TWT differs mechanically.",
      "Relevant precedent for concrete construction, durability, acoustics, and envelope performance.",
      "Published comparisons between conventional ICF and wood-frame construction.",
      
    ],
    boundary:
      "ICF findings belong to conventional ICF assemblies and cannot be presented as measured TWT performance.",
  },
  {
    number: "05",
    status: "Validation required",
    title: "Whole-building performance",
    icon: FlaskConical,
    tone: "border-twt-primary-orange",
    iconTone: "bg-twt-pale-orange text-twt-primary-orange",
    supports: [
      "A defined research agenda for university and industry partners.",
      "Testable hypotheses for the envelope, hydronics, controls, heating, and cooling.",
      "Clear separation between current evidence and future measurements.",
    ],
    boundary:
      "Seasonal energy savings, operating temperatures, integrated-system performance, and lifecycle costs are not yet field-measured.",
  },
] as const;

const MODEL_ASSUMPTIONS = [
  ["Analysis type", "One-dimensional finite-difference transient model"],
  ["Outdoor condition", "0\u00b0F"],
  ["Indoor condition", "72\u00b0F"],
  ["Modeled exterior-wall area", "4,440 ft\u00b2"],
  ["Two-sided ICF case", "2.5 in EPS / 8 in concrete / 2.5 in EPS"],
  ["One-sided TWT case", "5 in exterior EPS / 8 in concrete"],
] as const;

const RESEARCH_GAPS = [
  {
    icon: Building2,
    title: "Whole-building coupling",
    text: "Measure walls, floors, internal mass, infiltration, occupancy, and weather as one interacting system.",
  },
  {
    icon: Waves,
    title: "Hydronic distribution",
    text: "Optimize tube spacing, embedment depth, flow rates, manifolds, pumping energy, and zoning.",
  },
  {
    icon: Gauge,
    title: "Controls",
    text: "Test predictive charging, weather response, reserve storage, and zone-level control logic.",
  },
  {
    icon: Thermometer,
    title: "Seasonal operation",
    text: "Confirm achievable surface and water temperatures across heating and cooling seasons.",
  },
  {
    icon: FlaskConical,
    title: "Moisture control",
    text: "Establish condensation limits, dew-point safeguards, humidity control, and indoor-air requirements.",
  },
  {
    icon: Ruler,
    title: "Comparative performance",
    text: "Compare energy, peak demand, comfort, maintenance, and cost against an equivalent reference building.",
  },
] as const;

const SOURCES = [
  {
    type: "Patent record",
    title: "U.S. Reissue Patent RE50,072 E1 ? Wall with pre-bent tubing",
    detail:
      "Issued August 6, 2024; reissue of U.S. Patent 11,142,908. Public records list Michael Sandefur as inventor and Thermal Wall Technologies, LLC as assignee.",
    href: "https://patents.google.com/patent/USRE50072E1/en",
    linkLabel: "View public patent record",
  },
  {
    type: "Primary analysis",
    title: "Thermal Wall Analysis",
    detail:
      "Brandon S. Field, PhD, University of Southern Indiana, March 15, 2016.",
  },
  // {
  //   type: "Research proposal",
  //   title: "NSF SBIR Proposal #1746698",
  //   detail:
  //     "Submitted June 2017. Used here as a record of proposed research and legacy modeling claims, not as evidence of an NSF award or completed testing.",
  // },
  // {
  //   type: "Industry precedent",
  //   title:
  //     "Costs and Benefits of Insulating Concrete Forms for Residential Construction",
  //   detail: "HUD / NAHB Research Center, 2001.",
  //   href: "https://www.huduser.gov/portal/publications/destech/ICFbenefits.html",
  // },
  {
    type: "Established science",
    title: "ZEB Technologies: Passive Design Techniques",
    detail: "U.S. Department of Energy guidance on thermal mass.",
    href: "https://www.energy.gov/eere/buildings/zeb-technologies-passive-design-techniques",
  },
  {
    type: "Future test framework",
    title: "ASTM C1363",
    detail:
      "Standard hot-box method for measuring thermal performance of building assemblies.",
    href: "https://store.astm.org/standards/c1363",
  },
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="max-w-[900px]">
      <p className="text-sm font-extrabold tracking-[0.2em] text-twt-primary-orange uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[clamp(36px,4vw,62px)] leading-[1.04] font-extrabold tracking-[-0.045em] text-twt-deep-navy">
        {title}
      </h2>
      <p className="mt-5 max-w-[800px] text-[clamp(17px,1.3vw,21px)] leading-[1.65] font-medium text-twt-slate-gray">
        {description}
      </p>
    </header>
  );
}

export default function EvidencePage() {
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
          <span className="text-right text-sm font-extrabold tracking-[0.16em] uppercase">
            Thermal Wall Technology
          </span>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,132px)] text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(to_right,rgba(66,169,232,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,169,232,0.35)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_35%,black)]"
          aria-hidden="true"
        />
        <span
          className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue),var(--twt-primary-white),var(--twt-warm-orange),var(--twt-primary-orange))]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-[1480px] gap-[clamp(48px,7vw,110px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold tracking-[0.22em] text-twt-light-orange uppercase sm:text-base">
              Evidence &amp; Verification
            </p>
            <h1 className="mt-5 max-w-[940px] text-[clamp(48px,6.2vw,94px)] leading-[0.98] font-extrabold tracking-[-0.055em]">
              Evidence without
              <span className="block text-twt-primary-orange">
                overstatement.
              </span>
            </h1>
            <p className="mt-7 max-w-[860px] text-[clamp(19px,1.55vw,25px)] leading-[1.55] font-medium text-twt-blue-white">
              Every TWT claim is separated by source, method, and validation
              status. Patents establish ownership. Models test feasibility. Only
              measurements can establish real-building performance.
            </p>
          </div>

          <aside
            className="border-l-2 border-twt-primary-orange bg-white/[0.06] p-[clamp(24px,3vw,38px)]"
            aria-label="Current evidence status"
          >
            <p className="text-xs font-extrabold tracking-[0.18em] text-twt-light-orange uppercase">
              Current status
            </p>
            <dl className="mt-6 grid gap-5">
              {[
                ["Established science", "Sourced"],
                ["Founder calculations", "Documented"],
                ["Independent analysis", "Limited scope"],
                ["Whole-building testing", "Still required"],
              ].map(([term, value]) => (
                <div
                  className="flex items-start justify-between gap-5 border-b border-white/10 pb-4"
                  key={term}
                >
                  <dt className="text-sm font-medium text-twt-blue-white">
                    {term}
                  </dt>
                  <dd className="text-right text-sm font-extrabold text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,84px)] py-[clamp(72px,7vw,112px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="How to read this page"
            title="Three rules for every claim"
            description="Technical credibility depends on showing not only what a source supports, but also where its authority stops."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Identify the source",
                "Name who produced the evidence and when.",
              ],
              [
                "02",
                "Describe the method",
                "State whether it is established science, calculation, simulation, or measurement.",
              ],
              [
                "03",
                "Declare the boundary",
                "Explain what the evidence does not establish.",
              ],
            ].map(([number, title, text]) => (
              <article
                className="border-t-4 border-twt-primary-orange bg-twt-soft-white p-[clamp(24px,3vw,38px)]"
                key={number}
              >
                <span className="font-mono text-sm font-bold tracking-[0.14em] text-twt-slate-gray">
                  {number}
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">
                  {title}
                </h3>
                <p className="mt-3 leading-7 font-medium text-twt-slate-gray">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="evidence-register"
        className="bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(78px,8vw,128px)]"
      >
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Evidence register"
            title="Five levels, clearly separated"
            description="The ordering moves from broadly established knowledge to the specific performance questions that remain open."
          />
          <ol className="mt-[clamp(48px,5vw,76px)] grid gap-6">
            {EVIDENCE_LEVELS.map(
              ({
                number,
                status,
                title,
                icon: Icon,
                tone,
                iconTone,
                supports,
                boundary,
              }) => (
                <li key={number}>
                  <article
                    className={
                      "grid overflow-hidden border-l-4 bg-white shadow-[0_12px_30px_rgba(3,26,61,0.07)] " +
                      tone +
                      " lg:grid-cols-[0.72fr_1.28fr]"
                    }
                  >
                    <div className="border-b border-twt-light-gray p-[clamp(24px,3vw,42px)] lg:border-r lg:border-b-0">
                      <div className="flex items-center justify-between gap-5">
                        <span
                          className={
                            "grid size-16 place-items-center rounded-full " +
                            iconTone
                          }
                        >
                          <Icon
                            className="size-8"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-mono text-sm font-bold tracking-[0.16em] text-twt-slate-gray">
                          {number}
                        </span>
                      </div>
                      <p className="mt-8 text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">
                        {status}
                      </p>
                      <h3 className="mt-3 text-[clamp(27px,2.2vw,36px)] leading-[1.1] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
                        {title}
                      </h3>
                    </div>
                    <div className="grid gap-8 p-[clamp(24px,3vw,42px)] xl:grid-cols-[1.15fr_0.85fr]">
                      <div>
                        <p className="text-xs font-extrabold tracking-[0.14em] text-twt-medium-navy uppercase">
                          What it supports
                        </p>
                        <ul className="mt-5 grid gap-3">
                          {supports.map((item) => (
                            <li
                              className="grid grid-cols-[8px_1fr] gap-4 leading-7 font-medium text-twt-text-dark"
                              key={item}
                            >
                              <span
                                className="mt-[0.68rem] size-2 bg-twt-blueprint-blue"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-l-2 border-twt-primary-orange bg-twt-pale-orange p-5">
                        <p className="text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">
                          Evidence boundary
                        </p>
                        <p className="mt-3 leading-7 font-semibold text-twt-deep-navy">
                          {boundary}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,84px)] py-[clamp(78px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Independent analysis"
            title="What the USI report actually established"
            description="In March 2016, Brandon S. Field, PhD, of the University of Southern Indiana developed a separate wall-level model to examine the founder's calculations."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["84.72", "BTU/ft\u00b2/day", "Founder model"],
              ["86.64", "BTU/ft\u00b2/day", "USI model"],
              ["~2%", "reported variance", "Specific heat-flux comparison"],
            ].map(([value, unit, label]) => (
              <article
                className="border border-twt-light-gray bg-white p-[clamp(24px,3vw,38px)] shadow-[0_10px_28px_rgba(3,26,61,0.07)]"
                key={label}
              >
                <strong className="block text-[clamp(42px,4vw,64px)] leading-none font-extrabold tracking-[-0.05em] text-twt-primary-orange">
                  {value}
                </strong>
                <span className="mt-2 block text-sm font-bold text-twt-medium-navy">
                  {unit}
                </span>
                <p className="mt-5 border-t border-twt-light-gray pt-5 font-extrabold text-twt-deep-navy">
                  {label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="overflow-hidden border border-twt-light-gray">
              <div className="bg-twt-deep-navy px-6 py-4 text-white">
                <h3 className="text-lg font-extrabold">
                  Documented model case
                </h3>
              </div>
              <dl className="divide-y divide-twt-light-gray">
                {MODEL_ASSUMPTIONS.map(([term, value]) => (
                  <div
                    className="grid gap-2 px-6 py-4 sm:grid-cols-[0.9fr_1.1fr]"
                    key={term}
                  >
                    <dt className="font-bold text-twt-slate-gray">{term}</dt>
                    <dd className="font-extrabold text-twt-deep-navy">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="bg-twt-pale-orange p-[clamp(26px,3vw,40px)]">
              <CircleAlert
                className="size-9 text-twt-primary-orange"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">
                Solid Foundation Established for Whole-Building Development

              </h3>
              <p className="mt-4 leading-7 font-semibold text-twt-text-dark">
                We’ve successfully verified our baseline wall performance, achieving a ~2%variance with an independent USI engineering model on daily heat-flux calculations.

              </p>
              <p className="mt-5 border-t border-twt-warm-orange/30 pt-5 leading-7 font-medium text-twt-slate-gray">
               With the core wall model independently verified, we are actively advancing to full-system integration—mapping out complex whole-building variables like internal thermal mass, hydronic distribution, and predictive control strategies.

              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(78px,8vw,128px)] text-white">
        <div className="mx-auto max-w-[1480px]">
          <header className="max-w-[920px]">
            <p className="text-sm font-extrabold tracking-[0.2em] text-twt-light-orange uppercase">
              Validation program
            </p>
            <h2 className="mt-4 text-[clamp(38px,4.4vw,68px)] leading-[1.03] font-extrabold tracking-[-0.045em]">
              What must be measured next
            </h2>
            <p className="mt-5 max-w-[820px] text-[clamp(17px,1.3vw,21px)] leading-[1.65] font-medium text-twt-blue-white">
              These are research requirements, not hidden weaknesses. They
              define a practical collaboration agenda for building-science,
              mechanical-engineering, controls, and architecture teams.
            </p>
          </header>

          <div className="mt-12 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_GAPS.map(({ icon: Icon, title, text }, index) => (
              <article
                className="bg-twt-deep-navy p-[clamp(24px,3vw,38px)]"
                key={title}
              >
                <div className="flex items-center justify-between gap-5">
                  <Icon
                    className="size-8 text-twt-sky-blue"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs font-bold tracking-[0.14em] text-twt-slate-gray">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 font-medium text-twt-blue-white">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,84px)] py-[clamp(78px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Source register"
            title="Traceable sources and honest labels"
            description="Primary TWT documents are identified separately from external building-science and industry references."
          />
          <div className="mt-12 divide-y divide-twt-light-gray border-y border-twt-light-gray">
            {SOURCES.map((source) => (
              <article
                className="grid gap-4 py-7 md:grid-cols-[0.32fr_0.68fr] md:items-start"
                key={source.title}
              >
                <p className="text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">
                  {source.type}
                </p>
                <div>
                  <h3 className="text-xl font-extrabold tracking-[-0.025em] text-twt-deep-navy">
                    {source.title}
                  </h3>
                  <p className="mt-2 max-w-[920px] leading-7 font-medium text-twt-slate-gray">
                    {source.detail}
                  </p>
                  {"href" in source && source.href ? (
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 font-bold text-twt-medium-navy underline decoration-twt-light-gray underline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-focus"
                    >
                      {"linkLabel" in source && source.linkLabel ? source.linkLabel : "View authoritative source"}
                      <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-orange px-[clamp(22px,5vw,84px)] py-[clamp(68px,7vw,104px)]">
        <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-[900px]">
            <p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">
              Research &amp; partnership
            </p>
            <h2 className="mt-4 text-[clamp(36px,4vw,62px)] leading-[1.05] font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              The next evidence is a measured building.
            </h2>
            <p className="mt-5 max-w-[800px] text-lg leading-8 font-medium text-twt-slate-gray">
              TWT is seeking university and industry partners to refine the
              model, define the protocol, instrument a prototype, and publish
              defensible results.
            </p>
          </div>
          <Link
            href="/"
            className="group inline-flex min-h-16 shrink-0 items-center justify-center gap-4 bg-twt-deep-navy px-8 py-5 text-lg font-bold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-focus"
          >
            Return to project overview
            <ArrowRight
              className="size-6 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <footer className="hidden">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <p>Thermal Wall Technology, LLC</p>
          <p>Modeled results are not field-measured performance.</p>
        </div>
      </footer>
    </main>
  );
}
