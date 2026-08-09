import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  Flame,
  Home,
  Layers3,
  MousePointer2,
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
  [
    Layers3,
    "Exterior insulation",
    "Insulation is placed on the outside to retain energy in the thermal mass.",
  ],
  [
    Home,
    "Continuous concrete thermal mass",
    "Walls and floor store energy across a vast, accessible surface.",
  ],
  [
    Droplets,
    "Embedded hydronic tubing",
    "Tubing is embedded in the concrete to charge or cool the mass efficiently.",
  ],
  [
    Waves,
    "Thermally conductive interior surface",
    "Interior surfaces exchange energy with the room through radiant comfort.",
  ],
] as const;

const energy = [
  [
    Sun,
    "Generate or collect energy",
    "Solar, heat pump, ground loop, or grid provides thermal energy.",
  ],
  [
    Droplets,
    "Route the fluid",
    "Controls send water through the hydronic system to the zones that need it.",
  ],
  [
    Layers3,
    "Charge the mass",
    "Energy is stored in the concrete walls and floor across a large surface.",
  ],
  [
    Shield,
    "Retain the energy",
    "Exterior insulation keeps the stored energy in the thermal mass.",
  ],
  [
    Waves,
    "Release steady comfort",
    "Interior surfaces gently exchange energy with the room.",
  ],
] as const;

const modes = [
  [
    Flame,
    "Heating",
    "Charge the mass during off-peak periods. Release steady, radiant warmth.",
    [
      "Lower operating temperatures",
      "High efficiency",
      "Comfort without drafts",
    ],
    "warm",
  ],
  [
    Sun,
    "Passive solar",
    "Capture solar gains in the mass and redistribute as needed.",
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
    "Remove heat from the mass or reject it outside.",
    [
      "Passive and mechanical cooling",
      "Draws heat from the structure",
      "Dew-point-safe operation",
    ],
    "cool",
  ],
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
      <ArrowRight size={17} />
    </Link>
  );
}

export default function HowItWorks() {
  return (
    <main>
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
              concrete connected to the interior while limiting energy loss
              outdoors.
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

          <aside className={styles.principleCard}>
            <p>THE OPERATING PRINCIPLE</p>
            <h2>The structure becomes part of the system.</h2>
            <div className={styles.principleSteps}>
              <article>
                <span>01</span>
                <Droplets />
                <div>
                  <b>Water carries energy</b>
                  <small>Through embedded hydronic tubing.</small>
                </div>
              </article>
              <article>
                <span>02</span>
                <Layers3 />
                <div>
                  <b>Concrete stores it</b>
                  <small>Across the walls and floor.</small>
                </div>
              </article>
              <article>
                <span>03</span>
                <Waves />
                <div>
                  <b>The room receives it</b>
                  <small>As quiet, steady radiant comfort.</small>
                </div>
              </article>
            </div>
            <div className={styles.temperatureBadge}>
              <Thermometer />
              <div>
                <strong>65–75°F</strong>
                <span>Modeled operating range</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="assembly" className={styles.assemblySection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>01 · WHAT TWT PHYSICALLY IS</p>
              <h2>Four elements. One integrated assembly.</h2>
            </div>
            <p>
              The concrete structure, exterior insulation, embedded tubing, and
              conductive interior surface work together as one coordinated
              thermal system.
            </p>
          </div>

          <div className={styles.assemblyVisual}>
            <Image
              src="/howitworks/1.png"
              alt="Cutaway home showing the energy source, heat exchanger, controls, hydronic tubing, concrete thermal mass, and radiant exchange"
              width={1402}
              height={1122}
              sizes="(max-width: 900px) 100vw, 82vw"
              loading="eager"
            />
          </div>

          <div className={styles.assemblyCards}>
            {assembly.map(([Icon, title, copy], index) => (
              <article key={title}>
                <span className={styles.assemblyIcon}>
                  <Icon />
                </span>
                <div>
                  <b>0{index + 1}</b>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>

          <details className={styles.constructionDetail}>
            <summary>
              <span>
                <MousePointer2 />
                <span>
                  <b>Patented construction detail</b>
                  <small>
                    Dry-stack insulated concrete blocks, continuous
                    concrete-flow channels, protective grommets, and finish
                    attachment create a monolithic assembly.
                  </small>
                </span>
              </span>
              <em>
                See construction details <ChevronDown />
              </em>
            </summary>
            <p>
              Dry-stack ICB construction, continuous concrete-flow channels,
              positioning grommets, exterior finish attachment, and thermally
              conductive interior finishes work together as one integrated
              assembly.
            </p>
          </details>
        </div>
      </section>

      <section id="why" className={styles.whySection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>02 · WHY IT WORKS</p>
              <h2>More surface. Lower temperature.</h2>
            </div>
            <p>
              By using the entire building as the emitting and receiving
              surface, TWT operates at much lower temperatures while delivering
              the same comfort.
            </p>
          </div>

          <div id="surface-detail" className={styles.comparisonGrid}>
            <article className={styles.comparisonCard}>
              <div className={styles.comparisonImage}>
                <Image
                  src="/howitworks/2a.png"
                  alt="Traditional radiator representing a small, high-temperature emitting surface"
                  width={1576}
                  height={998}
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
              <div className={styles.comparisonCopy}>
                <span>TRADITIONAL SYSTEMS</span>
                <h3>Small surface. Higher temperature.</h3>
                <strong>110–120°F</strong>
                <p>Typical emitter temperature</p>
              </div>
            </article>

            <div className={styles.vsBadge}>VS</div>

            <article className={styles.comparisonCard}>
              <div className={styles.comparisonImage}>
                <Image
                  src="/howitworks/2b.png"
                  alt="Room with hydronic tubing across the walls and floor representing a large, low-temperature emitting surface"
                  width={1402}
                  height={1122}
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
              <div className={styles.comparisonCopy}>
                <span>TWT WALLS &amp; FLOOR</span>
                <h3>Building-scale surface. Lower temperature.</h3>
                <strong>65–75°F</strong>
                <p>Modeled operating range</p>
              </div>
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
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="energy" className={styles.energySection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>03 · HOW ENERGY MOVES</p>
              <h2>From the energy source to the room.</h2>
            </div>
            <p>
              Energy moves through a simple five-stage process, with controls
              directing the hydronic loop to the zones that need it.
            </p>
          </div>
          <div className={styles.energyFlow}>
            {energy.map(([Icon, title, copy], index) => (
              <article key={title}>
                <div className={styles.energyTopline}>
                  <span>
                    <Icon />
                  </span>
                  <b>0{index + 1}</b>
                </div>
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
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>
                04 · HOW IT WORKS THROUGH THE SEASONS
              </p>
              <h2>One system. Three operating modes.</h2>
            </div>
            <p>
              The same concrete mass can receive, store, and release energy in
              different ways as conditions change through the year.
            </p>
          </div>
          <div className={styles.modeGrid}>
            {modes.map(([Icon, title, copy, points, tone]) => (
              <article className={styles[tone]} key={title}>
                <span className={styles.modeIcon}>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <Check /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={styles.dewPointNote}>
            <Shield /> Dew-point control is integrated into cooling operation to
            prevent condensation and protect indoor conditions.
          </p>
        </div>
      </section>

      <section id="system" className={styles.systemSection}>
        <div className={styles.shell}>
          <div className={styles.systemIntro}>
            <p className={styles.eyebrow}>05 · THE FULL SYSTEM</p>
            <h2>One closed loop. Every part working together.</h2>
            <div>
              <p>
                TWT connects the energy source, heat exchanger, controls,
                thermal storage, and building zones into one coordinated
                hydronic system.
              </p>
              <p>
                Energy can be directed where it is most useful—immediately to
                the building, into reserve storage, or through individually
                controlled zones.
              </p>
            </div>
          </div>

          <div className={styles.systemVisual}>
            <Image
              src="/howitworks/5.png"
              alt="Complete Thermal Wall Technology closed-loop system showing energy sources, heat exchanger, controls, building zones, thermal storage, sensors, and return flow"
              width={1535}
              height={1024}
              sizes="(max-width: 900px) 100vw, 86vw"
            />
          </div>

          <blockquote>
            TWT is not one device added to a building. It is a coordinated
            hydronic system that uses the concrete structure to receive, store,
            distribute, and release thermal energy.
          </blockquote>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.shell} ${styles.ctaLayout}`}>
          <div>
            <p className={styles.eyebrow}>CONTINUE EXPLORING</p>
            <h2>Ready to go deeper?</h2>
          </div>
          <div className={styles.ctaActions}>
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
