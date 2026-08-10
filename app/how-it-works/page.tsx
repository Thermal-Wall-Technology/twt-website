import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CloudSun,
  Droplets,
  Flame,
  Home,
  Layers3,
  Shield,
  Snowflake,
  Sun,
  Thermometer,
  Waves,
} from "lucide-react";
import { SectionNav } from "./section-nav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Thermal Wall Technology connects energy, concrete thermal storage, and radiant comfort.",
};

const assembly = [
  [Layers3, "Exterior insulation", "Retains energy in the thermal mass."],
  [
    Home,
    "Continuous concrete thermal mass",
    "Walls and floors store energy across a large surface.",
  ],
  [
    Droplets,
    "Embedded hydronic tubing",
    "Water efficiently charges or cools the mass.",
  ],
  [
    Waves,
    "Conductive interior surface",
    "Large surfaces exchange energy by radiant comfort.",
  ],
] as const;

const heroCallouts = [
  [Sun, "Energy source", "Solar, heat pump, ground loop, or grid"],
  [Thermometer, "Heat exchanger", "Transfers energy to the hydronic loop"],
  [Shield, "Controls & distribution", "Manages zones, temperature, and timing"],
  [Layers3, "Thermal mass", "Walls and floors store energy in the structure"],
  [Waves, "Radiant exchange", "Interior surfaces deliver steady comfort"],
] as const;

const energy = [
  [Sun, "Generate or collect", "Solar, heat pump, ground loop, or grid"],
  [Droplets, "Route the fluid", "Controls send water where it is needed"],
  [Layers3, "Charge the mass", "Concrete walls and floors store energy"],
  [Shield, "Retain energy", "Exterior insulation protects the charge"],
  [Waves, "Release comfort", "Interior surfaces exchange energy slowly"],
] as const;

const modes = [
  [
    Flame,
    "Heating",
    "Charge the mass during off-peak periods, then release steady radiant warmth.",
    [
      "Lower operating temperatures",
      "High efficiency",
      "Comfort without drafts",
    ],
    "warm",
  ],
  [
    CloudSun,
    "Passive solar",
    "Capture solar gains in the mass and redistribute energy when it is needed.",
    [
      "Collects earlier and later",
      "Works on cloudy days",
      "Reduces conventional heating",
    ],
    "solar",
  ],
  [
    Snowflake,
    "Cooling",
    "Remove heat from the mass or reject it outside while protecting indoor comfort.",
    [
      "Passive & mechanical cooling",
      "Draws heat from the structure",
      "Dew-point-safe operation",
    ],
    "cool",
  ],
] as const;

const systemNodes = [
  [Sun, "Energy source"],
  [Thermometer, "Heat exchanger"],
  [Droplets, "Controls & distribution"],
  [Layers3, "Walls, floor & storage"],
  [Waves, "Return loop"],
] as const;

function Button({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${primary ? styles.buttonPrimary : styles.buttonSecondary}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export default function HowItWorks() {
  return (
    <main className={styles.howPage}>
      <SectionNav />

      <section id="overview" className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>THE BIG IDEA</p>
            <h1>
              The building becomes the heating, cooling, and thermal-storage
              system.
            </h1>
            <p>
              Water carries energy into tubing embedded in the concrete walls
              and floor. The structure stores that energy and gradually
              exchanges it with the room. Exterior-only insulation keeps the
              concrete connected to the interior while limiting energy loss.
            </p>
            <div className={styles.heroActions}>
              <Button href="/evidence" primary>
                Explore the evidence
              </Button>
              <Button href="/future-applications">
                See potential benefits
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroLegend}>
              {heroCallouts.map(([Icon, title, copy]) => (
                <article key={title}>
                  <Icon />
                  <span>
                    <b>{title}</b>
                    <small>{copy}</small>
                  </span>
                </article>
              ))}
            </div>
            <Image
              src="/howitworks/1.png"
              alt="Thermal Wall cutaway showing hydronic tubing, concrete thermal mass, controls, and a conditioned room"
              width={1402}
              height={1122}
              sizes="(max-width: 1000px) 100vw, 56vw"
              preload
            />
          </div>
        </div>
      </section>

      <section id="assembly" className={styles.assemblySection}>
        <div className={`${styles.shell} ${styles.assemblyLayout}`}>
          <div className={styles.compactIntro}>
            <p className={styles.eyebrow}>01 · WHAT TWT PHYSICALLY IS</p>
            <h2>Four elements. One integrated assembly.</h2>
          </div>
          <div className={styles.assemblyCards}>
            {assembly.map(([Icon, title, copy], index) => (
              <article key={title}>
                <span className={styles.assemblyNumber}>0{index + 1}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <details className={styles.constructionDetail}>
            <summary>
              <span>
                <Shield />
                <span>
                  <b>Patented construction detail</b>
                  <small>
                    Dry-stack insulated concrete blocks, continuous flow
                    channels, protective grommets, and finish attachment form a
                    monolithic assembly.
                  </small>
                </span>
              </span>
              <em>
                See construction details <ChevronDown />
              </em>
            </summary>
            <p>
              Construction details keep the tubing protected while preserving a
              continuous concrete thermal mass and a durable interior finish
              surface.
            </p>
          </details>
        </div>
      </section>

      <section id="why" className={styles.whySection}>
        <div className={`${styles.shell} ${styles.whyLayout}`}>
          <div className={styles.whyIntro}>
            <p className={styles.eyebrow}>02 · WHY IT WORKS</p>
            <h2>More surface. Lower temperature.</h2>
            <p>
              Using the entire building as the emitting and receiving surface,
              TWT can operate at lower water temperatures while delivering the
              same comfort.
            </p>
            <Button href="#surface-detail">See surface-area detail</Button>
          </div>
          <div id="surface-detail" className={styles.comparisonGrid}>
            <article className={styles.comparisonCard}>
              <p>Traditional systems</p>
              <Image
                src="/howitworks/2a.png"
                alt="Traditional radiator"
                width={1576}
                height={998}
                sizes="(max-width: 900px) 45vw, 23vw"
              />
              <strong>110–120°F</strong>
              <small>Typical emitter temperature</small>
            </article>
            <span className={styles.vsBadge}>VS</span>
            <article
              className={`${styles.comparisonCard} ${styles.twtComparison}`}
            >
              <p>TWT walls &amp; floor</p>
              <Image
                src="/howitworks/2b.png"
                alt="Thermal Wall radiant room"
                width={1402}
                height={1122}
                sizes="(max-width: 900px) 45vw, 23vw"
              />
              <strong>65–75°F</strong>
              <small>Modeled operating range</small>
            </article>
          </div>
          <div className={styles.whyBenefits}>
            {[
              [
                "Thermal mass stores energy",
                "Concrete absorbs and holds heat or cool.",
              ],
              [
                "Exterior insulation retains it",
                "Limits energy loss to the outdoors.",
              ],
              [
                "Radiant surfaces deliver it",
                "Large interior surfaces exchange energy slowly and evenly.",
              ],
            ].map(([title, copy]) => (
              <article key={title}>
                <Check />
                <span>
                  <b>{title}</b>
                  <small>{copy}</small>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="energy" className={styles.energySection}>
        <div className={`${styles.shell} ${styles.energyLayout}`}>
          <div className={styles.compactIntro}>
            <p className={styles.eyebrow}>03 · HOW ENERGY MOVES</p>
            <h2>From the energy source to the room.</h2>
          </div>
          <div className={styles.energyFlow}>
            {energy.map(([Icon, title, copy], index) => (
              <article key={title}>
                <span className={styles.energyIcon}>
                  <Icon />
                </span>
                <b>0{index + 1}</b>
                <h3>{title}</h3>
                <p>{copy}</p>
                {index < energy.length - 1 && <ArrowRight aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modes" className={styles.modesSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>
              04 · HOW IT WORKS THROUGH THE SEASONS
            </p>
            <h2>One system. Three operating modes.</h2>
          </div>
          <div className={styles.modeGrid}>
            {modes.map(([Icon, title, copy, points, tone]) => (
              <article className={styles[tone]} key={title}>
                <div className={styles.modeTitle}>
                  <Icon />
                  <h3>{title}</h3>
                </div>
                <p>{copy}</p>
                <div className={styles.modeSketch}>
                  <Home />
                  <Waves />
                </div>
                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <Check />
                      {point}
                    </li>
                  ))}
                </ul>
                <a href="#overview">
                  Learn more <ArrowRight />
                </a>
              </article>
            ))}
          </div>
          <p className={styles.dewPointNote}>
            <Shield /> Dew-point control is integrated into cooling operation to
            prevent condensation and protect indoor air quality.
          </p>
        </div>
      </section>

      <section id="system" className={styles.systemSection}>
        <div className={`${styles.shell} ${styles.systemLayout}`}>
          <div className={styles.systemIntro}>
            <p className={styles.eyebrow}>05 · THE FULL SYSTEM</p>
            <h2>A closed-loop system connects every part.</h2>
          </div>
          <div className={styles.systemNodes}>
            {systemNodes.map(([Icon, label], index) => (
              <div key={label}>
                <span>
                  <Icon />
                </span>
                <b>{label}</b>
                {index < systemNodes.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
          <aside className={styles.systemFacts}>
            <p>
              <b>Walls provide stability.</b> Walls store and deliver
              longer-term energy.
            </p>
            <p>
              <b>Floors provide response.</b> Floors respond to finer comfort
              adjustments.
            </p>
          </aside>
          <div className={styles.systemMap}>
            <Image
              src="/howitworks/5.png"
              alt="Thermal Wall closed-loop system map"
              width={1535}
              height={1024}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.shell} ${styles.ctaLayout}`}>
          <h2>Ready to go deeper?</h2>
          <div>
            <Button href="/evidence" primary>
              Review the evidence
            </Button>
            <Button href="/research-partnership">
              Explore the research program
            </Button>
            <Button href="/future-applications">See potential benefits</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
