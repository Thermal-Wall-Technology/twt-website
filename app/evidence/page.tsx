import styles from "./page.module.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  FlaskConical,
  Gauge,
  Info,
  MoonStar,
  ShieldCheck,
  Sun,
  Sunset,
  Target,
  Thermometer,
  XCircle,
} from "lucide-react";
export const metadata: Metadata = {
  title: "Evidence",
  description:
    "Independent analysis, modeled results, and clear boundaries for Thermal Wall Technology.",
};
const metrics = [
  [
    Thermometer,
    "MODELED OPERATING RANGE",
    "65–75°F",
    "Low-temperature wall operation used throughout TWT system modeling.",
  ],
  [
    Clock3,
    "INDEPENDENT MODEL RESULT",
    "~5 hours",
    "Stored heat delivery after the six-hour solar-charging period.",
  ],
  [
    Target,
    "INDEPENDENT AGREEMENT",
    "~2%",
    "Agreement on the relevant heat-flux calculation.",
  ],
  [
    Sun,
    "MODEL CONDITIONS",
    "6 hours",
    "Solar energy input used in the independent comparison.",
  ],
] as const;
const pillars = [
  [
    Atom,
    "Established physics",
    "Built on proven principles of heat transfer, radiant exchange, thermal mass, and insulation.",
  ],
  [
    FlaskConical,
    "Founder-developed models",
    "Dozens of scenarios across climates, controls, equipment, and system configurations.",
  ],
  [
    ShieldCheck,
    "Independently checked",
    "University engineering analysis closely reproduced the relevant calculation within approximately 2%.",
  ],
  [
    FileText,
    "Clear scope",
    "The core wall thermal-storage and heat-delivery principle has been independently examined. Whole-building demonstration is next.",
  ],
] as const;
const subnav = [
  ["Overview", "#overview"],
  ["Evidence in Detail", "#details"],
  ["Modeling & Methods", "#model"],
  ["Heat Cycle", "#thermal-cycle"],
  ["Assumptions & Boundaries", "#coverage"],
  ["Validation Roadmap", "#roadmap"],
  ["References", "#references"],
] as const;
const Btn = ({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) => (
  <Link
    href={href}
    className={`${styles.evBtn} ${primary ? styles.primary : ""}`}
  >
    {children}
    <ArrowRight size={16} />
  </Link>
);
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className={styles.evLabel}>{children}</p>
);

const thermalCycle = [
  [
    Sun,
    "01",
    "Day",
    "Sunlight charges the wall",
    "Solar energy warms the concrete wall surface and begins charging the thermal mass.",
    "/evidence/day.png",
    "Sunlight warming a Thermal Wall",
  ],
  [
    Sunset,
    "02",
    "Evening",
    "Heat settles into the mass",
    "As solar input fades, the wall retains thermal energy within the concrete mass.",
    "/evidence/evening.png",
    "Thermal energy stored within a Thermal Wall",
  ],
  [
    MoonStar,
    "03",
    "Night",
    "Stored heat returns indoors",
    "After sunset, the stored heat radiates back toward the occupied space when it is needed.",
    "/evidence/night.png",
    "Stored heat radiating from a Thermal Wall at night",
  ],
] as const;

function Chart() {
  return (
    <figure className={styles.chartCard}>
      <div className={styles.chartIntro}>
        <div>
          <span>Modeled wall performance</span>
          <strong>Daytime heat, released after sunset.</strong>
        </div>
        <p>0°F outside · 72°F inside · 6 hours of solar input</p>
      </div>
      <div className={styles.chartLegend} aria-label="Temperature chart legend">
        <span className={styles.twtLegend}>TWT thermal mass wall</span>
        <span className={styles.icfLegend}>Conventional insulated wall</span>
      </div>
      <div className={styles.chartImageFrame}>
        <Image
          src="/evidence/only_graph.png"
          alt="Modeled wall surface temperature graph showing the Thermal Wall holding heat above room temperature after sunset"
          width={1691}
          height={930}
          sizes="(max-width: 1050px) calc(100vw - 32px), 58vw"
        />
      </div>
      <figcaption className={styles.chartInsight}>
        <div>
          <Thermometer />
          <p>
            <b>Up to ~5 hours</b>
            of stored heat delivered to the room after solar input ends.
          </p>
        </div>
      </figcaption>
      <footer>
        Independent model by Dr. Brandon Field, University of Southern Indiana,
        March 2016. One-dimensional transient finite-difference wall model.{" "}
        <a href="#references">Read technical note</a>
      </footer>
    </figure>
  );
}
export default function Evidence() {
  return (
    <main className={styles.evidencePage}>
      <nav className={styles.evidenceSubnav} aria-label="Evidence sections">
        <div>
          {subnav.map(([n, h], i) => (
            <a className={i === 0 ? styles.active : ""} href={h} key={h}>
              {n}
            </a>
          ))}
        </div>
      </nav>
      <section id="overview" className={styles.evidenceHero}>
        <div className={`${styles.evShell} ${styles.heroGrid}`}>
          <div>
            <Label>THE FOUNDATION OF TWT</Label>
            <h1>
              Evidence. Modeled.
              <br />
              <span>Independently checked.</span>
            </h1>
            <p>
              TWT&apos;s performance is grounded in building science, developed
              through founder-led engineering, and supported by an independent
              university thermal-wall model whose relevant calculation closely
              matched the founder&apos;s work.
            </p>
            <div className={styles.evidencePillars}>
              {pillars.map(([Icon, title, text]) => (
                <article key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className={styles.corePanel}>
            <div className={styles.coreVisual}>
              <Image
                src="/evidence/twt-wall.png"
                alt="Concrete thermal wall with embedded hydronic tubing and exterior insulation"
                width={1600}
                height={1067}
                sizes="(max-width: 900px) 100vw, 34vw"
                loading="eager"
              />
            </div>
            <Label>Core finding</Label>
            <p>
              A transient heat-flow model was independently developed by the
              University of Southern Indiana to evaluate the core TWT wall
              principle. Under a severe winter scenario—0°F outdoors, 72°F
              indoors, and six hours of modeled solar input—the
              exterior-insulated wall delivered stored heat to the room for
              approximately five hours after sunset, while the conventional
              two-sided insulated wall did not.
            </p>
            <Btn href="#model">See the modeled comparison</Btn>
          </aside>
        </div>
      </section>
      <section id="details" className={styles.evSection}>
        <div className={`${styles.evShell} ${styles.metricsLayout}`}>
          <div>
            <Label>EVIDENCE AT A GLANCE</Label>
            <h2>What the evidence establishes</h2>
            <p>Key results from independent analysis and founder modeling.</p>
            <Btn href="#model">Explore full evidence</Btn>
          </div>
          <div className={styles.metricCards}>
            {metrics.map(([Icon, label, value, text]) => (
              <article key={label}>
                <Icon />
                <small>{label}</small>
                <strong>{value}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.boundary}>
          <Info />
          <p>
            <b>Important:</b> Independent analysis covers wall thermal storage
            and heat delivery only. It does not evaluate solar collectors,
            heat-pump performance, controls, floor storage, or whole-building
            integration. Those are the focus of the next phase.
          </p>
          <a href="#coverage">
            See boundaries <ArrowRight size={14} />
          </a>
        </div>
      </section>
      <section
        id="model"
        className={`${styles.evSection} ${styles.modelSection}`}
      >
        <div className={`${styles.evShell} ${styles.modelGrid}`}>
          <div>
            <Label>INDEPENDENT ANALYSIS RESULT</Label>
            <h2>
              The independent analysis that separates TWT from a standard ICF
            </h2>
            <p>
              The University of Southern Indiana compared the TWT
              exterior-insulation principle with conventional two-sided
              insulated concrete construction under the same severe winter
              conditions.
            </p>
            <div className={styles.resultList}>
              <article>
                <CheckCircle2 />
                <div>
                  <b>TWT exterior-insulation wall</b>
                  <span>
                    Interior surface rose above room temperature.
                    <br />
                    Delivered stored heat for approximately five hours after
                    solar input ended.
                  </span>
                </div>
              </article>
              <article>
                <XCircle />
                <div>
                  <b>Conventional two-sided ICF</b>
                  <span>
                    Interior insulation prevented the stored energy from
                    reaching the occupied space.
                  </span>
                </div>
              </article>
              <article>
                <Gauge />
                <div>
                  <b>Bottom line</b>
                  <span>
                    Insulation placement determines whether the concrete merely
                    contains thermal mass—or actively stores and delivers energy
                    to the room.
                  </span>
                </div>
              </article>
            </div>
            <Btn href="/evidence/modeling-methods" primary>
              Explore modeled scenarios
            </Btn>
          </div>
          <Chart />
        </div>
      </section>
      <section
        id="thermal-cycle"
        className={`${styles.evSection} ${styles.thermalCycle}`}
      >
        <div className={styles.evShell}>
          <div className={styles.cycleIntro}>
            <div>
              <Label>FROM SUNLIGHT TO COMFORT</Label>
              <h2>A wall that works with the rhythm of the day.</h2>
            </div>
            <p>
              Thermal Wall Technology captures available solar energy, holds it
              within the concrete mass, and releases it gradually after the sun
              goes down.
            </p>
          </div>
          <div className={styles.cycleGrid}>
            {thermalCycle.map(
              ([Icon, number, phase, title, text, src, alt], index) => (
                <article className={styles.phaseCard} key={phase}>
                  <div className={styles.phaseHead}>
                    <span>{number}</span>
                    <Icon aria-hidden="true" />
                    <small>{phase}</small>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className={styles.phaseVisual}>
                    <Image
                      src={src}
                      alt={alt}
                      width={1448}
                      height={1086}
                      sizes="(max-width: 680px) calc(100vw - 64px), (max-width: 1100px) calc(50vw - 44px), 22vw"
                    />
                  </div>
                  {index < thermalCycle.length - 1 && (
                    <ArrowRight
                      className={styles.phaseArrow}
                      aria-hidden="true"
                    />
                  )}
                </article>
              ),
            )}
            <aside className={styles.comfortPanel}>
              <div className={styles.comfortIcon}>
                <Thermometer aria-hidden="true" />
              </div>
              <p className={styles.comfortLabel}>The result</p>
              <h3>Comfort that lasts longer.</h3>
              <p>
                Natural, renewable warmth delivered when your space needs it
                most.
              </p>
              <ul>
                {[
                  "Reduces heating demand",
                  "Improves thermal comfort",
                  "Stores free solar energy",
                ].map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section
        id="coverage"
        className={`${styles.evSection} ${styles.coverage}`}
      >
        <div className={styles.evShell}>
          <div className={styles.coverageIntro}>
            <div>
              <Label>SCOPE &amp; NEXT STEPS</Label>
              <h2>Clear evidence. Clear boundaries.</h2>
            </div>
            <p>
              The current analysis validates the core wall principle while
              keeping broader system claims separate until they can be measured
              through a full demonstration program.
            </p>
          </div>
          <div className={styles.coverageGrid}>
            <article>
              <div className={styles.scopeHead}>
                <span>01</span>
                <small>INDEPENDENTLY EXAMINED</small>
              </div>
              <h3>What the independent analysis examined</h3>
              <ul>
                {[
                  "Wall thermal storage and delivery",
                  "One-sided versus two-sided insulation placement",
                  "Response under the defined 0°F / 72°F scenario",
                  "Six-hour modeled solar loading",
                  "Relevant heat-flux agreement of approximately 2%",
                ].map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <div className={styles.scopeHead}>
                <span>02</span>
                <small>FOUNDER MODELING</small>
              </div>
              <h3>What system modeling addresses</h3>
              <ul>
                {[
                  "Modeled 65–75°F operating range",
                  "Wall and floor system scenarios",
                  "Controls, equipment, and climate configurations",
                  "Potential system integration pathways",
                ].map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <div className={styles.scopeHead}>
                <span>03</span>
                <small>VALIDATION ROADMAP</small>
              </div>
              <h3>What remains to be measured</h3>
              <ul>
                {[
                  "Whole-building seasonal performance",
                  "Real-world installation variables",
                  "Collector, heat pump, and HVAC performance claims",
                  "Long-term material behavior",
                  "Economics, insurance, or medical cost impacts",
                ].map((x) => (
                  <li key={x}>
                    <XCircle />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
        <p className={styles.roadmapLine}>
          <span>
            <b>Next milestone</b>
            The demonstration program is designed to close these gaps.
          </span>
          <a href="#roadmap">
            See the roadmap <ArrowRight size={14} />
          </a>
        </p>
      </section>
      <section
        id="roadmap"
        className={`${styles.evSection} ${styles.detailNav}`}
      >
        <div className={styles.evShell}>
          <div className={styles.detailIntro}>
            <Label>EXPLORE THE DETAILS</Label>
            <h2>
              All the data, methods,
              <br />
              and references.
            </h2>
            <p>
              For researchers, engineers, builders, and reviewers who want to
              explore every detail behind the results.
            </p>
          </div>
          <div className={styles.detailCards}>
            {(
              [
                [
                  FlaskConical,
                  "Evidence in detail",
                  "Full results, charts, comparisons, and performance summaries.",
                  "View evidence",
                ],
                [
                  Gauge,
                  "Modeling & methods",
                  "Inputs, material properties, equations, and solver setup.",
                  "View methods",
                ],
                [
                  ShieldCheck,
                  "Assumptions & boundaries",
                  "Scenario definitions, limitations, and what’s not included.",
                  "View assumptions",
                ],
                [
                  FileText,
                  "References",
                  "Citations, standards, patents, and source documents.",
                  "View references",
                ],
              ] as const
            ).map(([Icon, h, p, a]) => {
              const CardIcon = Icon;
              return (
                <article key={h}>
                  <CardIcon />
                  <h3>{h}</h3>
                  <p>{p}</p>
                  <a href="#references">
                    {a} <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section id="references" className={styles.evidenceFooterNote}>
        <div className={styles.evShell}>
          <ShieldCheck />
          <p>
            TWT is patented and trade secret protected. All modeling and
            analysis were performed by the founder and independently reviewed by
            the University of Southern Indiana. The technology is not yet widely
            commercialized.
          </p>
          <a href="#overview">
            Legal & IP <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
