import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  CircleAlert,
  FileSearch,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Thermal Wall Technology",
  description:
    "Explore TWT technical resources, frequently asked questions, and a plain-language building-science glossary.",
};

const FAQS = [
  {
    question: "What is Thermal Wall Technology?",
    answer:
      "TWT is a proposed building-system approach that combines exterior insulation, concrete thermal mass, embedded hydronic tubing, and a conductive room-facing finish. Its purpose is to make the structure part of heating, cooling, and thermal storage.",
  },
  {
    question: "What does the 65-75 degree range describe?",
    answer:
      "It describes the proposed wall operating temperature band, not hydronic supply-water temperature. The lower part of the band is relevant to cooling and the upper part to heating; the usable setpoint depends on room conditions, load, and dew point.",
  },
  {
    question: "Is solar thermal required?",
    answer:
      "No. TWT is designed as an envelope and distribution concept that can be studied with different compatible heat sources. Solar thermal and passive-solar strategies are optional proposed integrations, not prerequisites for the base wall concept.",
  },
  {
    question: "Is TWT the same as a conventional ICF wall?",
    answer:
      "No. Conventional ICF commonly leaves insulation on both sides of the concrete core. TWT proposes concentrating insulation on the exterior so the concrete mass remains more thermally connected to the room, then adds embedded hydronics as part of the system.",
  },
  {
    question: "What evidence exists today?",
    answer:
      "The current record includes established building-science principles, documented founder modeling, and a limited-scope independent wall analysis. Whole-building seasonal performance, controls, costs, and integrated cooling behavior have not yet been field-measured.",
  },
  {
    question: "Can TWT cool a building?",
    answer:
      "A cooler room-facing mass can absorb sensible heat, which is established physics. The eventual cooling capacity and control strategy must be measured, and every cooled surface must remain safely above the room dew point to prevent condensation.",
  },
  {
    question: "What interior finishes are compatible?",
    answer:
      "The room-facing finish needs to remain thermally conductive enough to preserve exchange between the concrete mass and the room. Final finish specifications need to be confirmed through engineering and prototype testing.",
  },
  {
    question: "Who is TWT looking to work with?",
    answer:
      "TWT is seeking researchers, engineering teams, testing facilities, industry collaborators, and funding partners who can help define methods, test assemblies, instrument a prototype, and publish transparent results.",
  },
] as const;

const GLOSSARY = [
  [
    "Building envelope",
    "The walls, roof, foundation, windows, doors, and other components separating conditioned indoor space from the outdoors.",
  ],
  [
    "Coefficient of performance (COP)",
    "A heat-pump efficiency ratio: useful heating or cooling delivered divided by electrical energy used. Actual values depend on equipment and operating conditions.",
  ],
  [
    "Dew point",
    "The temperature at which air reaches saturation and moisture condenses. Cooled radiant surfaces must stay above it with a suitable safety margin.",
  ],
  [
    "Exterior continuous insulation",
    "An uninterrupted insulation layer placed outside the structural mass to reduce thermal bridging and outward heat flow.",
  ],
  [
    "Hydronic distribution",
    "Heating or cooling distribution that uses water or a water-glycol mixture circulating through tubing.",
  ],
  [
    "Insulated concrete form (ICF)",
    "A construction system that uses permanent foam forms filled with reinforced concrete. It is related precedent, but not the same assembly as TWT.",
  ],
  [
    "Operative temperature",
    "A comfort measure that considers both air temperature and the temperatures of surrounding surfaces.",
  ],
  [
    "Radiant exchange",
    "Thermal energy exchanged between surfaces and people through infrared radiation. A radiant wall also exchanges heat through convection.",
  ],
  [
    "Sensible heat",
    "Thermal energy that changes a material's temperature without changing its state, such as warming or cooling concrete.",
  ],
  [
    "Thermal mass",
    "The ability of a material to absorb, store, and release sensible heat, moderating changes in temperature over time.",
  ],
  [
    "Thermal storage",
    "The intentional use of a material or medium to hold thermal energy for use at another time.",
  ],
  [
    "Thermal bridging",
    "A path through an assembly that conducts heat more readily than the surrounding insulation, increasing heat loss or gain.",
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

export default function ResourcesPage() {
  return (
    <main className={styles.page}>
      <section className="relative isolate overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,132px)] text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgba(66,169,232,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,169,232,0.3)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_42%,black)]"
          aria-hidden="true"
        />
        <span
          className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue),var(--twt-primary-white),var(--twt-warm-orange),var(--twt-primary-orange))]"
          aria-hidden="true"
        />

        <div className={styles.heroGrid}>
          <div>
            <p className="text-sm font-extrabold tracking-[0.22em] text-twt-light-orange uppercase sm:text-base">
              Resources
            </p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(48px,6vw,92px)] leading-[0.98] font-extrabold tracking-[-0.055em]">
              A clearer way to
              <span className="block text-twt-primary-orange">
                evaluate the work.
              </span>
            </h1>
            <p className="mt-7 max-w-[820px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              Technical context, plain-language definitions, and direct answers
              to the questions that should come before a performance claim.
            </p>
          </div>

          <aside className="border-l-2 border-twt-primary-orange bg-white/[0.06] p-[clamp(24px,3vw,40px)]">
            <FileSearch
              className="size-10 text-twt-sky-blue"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <p className="mt-7 text-xs font-extrabold tracking-[0.18em] text-twt-light-orange uppercase">
              How to use this hub
            </p>
            <p className="mt-3 text-lg leading-8 font-medium text-twt-blue-white">
              Start with the mechanism. Then review the evidence boundaries. Use
              the glossary and FAQ to distinguish what is established, modeled,
              and still open to research.
            </p>
          </aside>
        </div>
      </section>

      <nav
        className="sticky top-[76px] z-20 overflow-x-auto border-b border-twt-light-gray bg-white/95 px-[clamp(22px,5vw,84px)] backdrop-blur"
        aria-label="Resources navigation"
      >
        <div className="mx-auto flex min-h-16 w-max max-w-[1480px] items-center gap-8 pr-6 text-sm font-extrabold text-twt-medium-navy lg:w-full lg:justify-between lg:pr-0">
          {[
            ["Guides", "#guides"],
            ["FAQ", "#faq"],
            ["Glossary", "#glossary"],
            ["Source practice", "#sources"],
          ].map(([label, href]) => (
            <a
              className="whitespace-nowrap outline-offset-6 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="guides"
        className={`${styles.contentSection} ${styles.sectionInner}`}
      >
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Start here"
            title="Four guides, each with a different job"
            description="The site separates mechanism, evidence, company context, and partnership needs so readers can assess each without mistaking one type of information for another."
          />
          <div className={styles.guideGrid}>
            {[
              [
                Layers3,
                "How It Works",
                "Assembly, heat transfer, operating modes, ICF distinction, and engineering constraints.",
                "/how-it-works",
              ],
              [
                BookOpenCheck,
                "Evidence & Verification",
                "What is established, modeled, independently analyzed, and still unmeasured.",
                "/evidence",
              ],
              [
                Building2,
                "About TWT",
                "Origin, founder, intellectual-property context, and the research purpose behind the work.",
                "/about",
              ],
            ].map(([Icon, title, text, href]) => {
              const ItemIcon = Icon as typeof Layers3;
              return (
                <Link
                  href={href as string}
                  className={styles.guideCard}
                  key={href as string}
                >
                  <ItemIcon
                    className={styles.guideIcon}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <h3 className={styles.guideTitle}>{title as string}</h3>
                  <p className={styles.guideText}>{text as string}</p>
                  <span className={styles.guideLink}>
                    Open guide
                    <ArrowRight
                      className={styles.guideArrow}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className={`${styles.contentSection} ${styles.paleSection}`}
      >
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <aside>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Useful answers without overreach"
              description="These answers are written for current-stage TWT: they describe the concept and its evidence boundaries instead of treating modeled outcomes as installed-building results."
            />
            <div className={styles.faqNotice}>
              <CircleAlert
                className={styles.faqNoticeIcon}
                strokeWidth={1.7}
                aria-hidden="true"
              />
              <p className={styles.faqNoticeText}>
                When a question turns on a performance number, follow the link
                to the evidence page and read the scope before using it.
              </p>
            </div>
          </aside>

          <div className={styles.faqList}>
            {FAQS.map(({ question, answer }) => (
              <details className={styles.faqItem} key={question}>
                <summary className={styles.faqSummary}>
                  <span>{question}</span>
                  <span className={styles.faqToggle} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className={styles.faqAnswer}>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="glossary"
        className={`${styles.contentSection} ${styles.sectionInner}`}
      >
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Glossary"
            title="Building-science language, translated"
            description="A compact reference for terms used across TWT materials. Definitions explain the concept; they are not system-performance claims."
          />
          <div className={styles.glossaryGrid}>
            {GLOSSARY.map(([term, definition]) => (
              <article className={styles.glossaryCard} key={term}>
                <h3 className={styles.glossaryTitle}>{term}</h3>
                <p className={styles.glossaryText}>{definition}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sources"
        className={`${styles.contentSection} ${styles.darkSection}`}
      >
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Source practice"
              title="The source tells you what the claim can mean."
              description="A patent, a model, a laboratory test, and a measured building each answer different questions. The reliability of a conclusion depends on method, scope, and transparency."
              light
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Patent",
                "Establishes ownership and novelty; it does not establish installed performance.",
              ],
              [
                "Model",
                "Tests a scenario under assumptions; it does not replace measurement.",
              ],
              [
                "Lab test",
                "Characterizes a representative assembly under controlled conditions.",
              ],
              [
                "Measured building",
                "Shows performance for an actual design, climate, operation, and period of observation.",
              ],
            ].map(([label, text]) => (
              <article
                className="border border-white/15 bg-white/[0.06] p-6"
                key={label}
              >
                <h3 className="text-lg font-extrabold text-twt-light-orange">
                  {label}
                </h3>
                <p className="mt-3 text-sm leading-6 font-medium text-twt-blue-white">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
