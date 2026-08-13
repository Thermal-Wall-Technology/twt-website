import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CloudSun,
  Droplets,
  Flame,
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
  [
    "/howitworks/1a.png",
    1254,
    1254,
    "Exterior insulation surrounding a hydronic thermal wall assembly",
    "Exterior insulation",
    "Insulation is placed on the outside to retain energy in the thermal mass.",
  ],
  [
    "/howitworks/1b.png",
    1536,
    1024,
    "Continuous concrete block thermal mass",
    "Continuous concrete thermal mass",
    "Walls and floor store energy across a vast, accessible surface.",
  ],
  [
    "/howitworks/1c.png",
    1024,
    1536,
    "Hydronic tubing embedded within concrete thermal mass",
    "Embedded hydronic tubing",
    "Tubing is embedded in the concrete to charge or cool the mass efficiently.",
  ],
  [
    "/howitworks/1d.png",
    1536,
    1024,
    "Thermally conductive interior surface radiating energy into a room",
    "Thermally conductive interior surface",
    "Interior surfaces naturally exchange energy with the room through radiant comfort.",
  ],
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
    "/howitworks/4a.png",
    "Heating mode using hydronic tubing in the concrete mass",
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
    "/howitworks/4b.png",
    "Passive solar mode storing collected heat in the concrete mass",
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
    "/howitworks/4c.png",
    "Cooling mode removing heat through hydronic tubing in the concrete mass",
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
              <Button href="/potential-benefits">See potential benefits</Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
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
          <div className={styles.assemblyIntro}>
            <p className={styles.eyebrow}>01 · WHAT TWT PHYSICALLY IS</p>
            <h2>Four elements. One integrated assembly.</h2>
          </div>
          <div className={styles.assemblyCards}>
            {assembly.map(([src, width, height, alt, title, copy]) => (
              <article key={title}>
                <div className={styles.assemblyVisual}>
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="(max-width: 640px) 46vw, (max-width: 1120px) 20vw, 10vw"
                  />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
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
              <span>Small surface. Higher temperature.</span>
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
              <span>Building-scale surface. Lower temperature.</span>
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
            {modes.map(
              ([Icon, title, copy, points, tone, imageSrc, imageAlt]) => (
                <article className={styles[tone]} key={title}>
                  <div className={styles.modeHeader}>
                    <Icon />
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                  <div className={styles.modeBody}>
                    <div className={styles.modeImage}>
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1024}
                        height={1024}
                        sizes="(max-width: 760px) 80vw, 18vw"
                      />
                    </div>
                    <ul>
                      {points.map((point) => (
                        <li key={point}>
                          <Check />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#overview">
                    Learn more <ArrowRight />
                  </a>
                </article>
              ),
            )}
          </div>
          <p className={styles.dewPointNote}>
            <Shield /> Dew-point control is integrated into cooling operation to
            prevent condensation and protect indoor air quality.
          </p>
        </div>
      </section>

      <section id="system" className={styles.systemSection}>
        <div className={styles.shell}>
          <div className={styles.systemLayout}>
            <div className={styles.systemIntro}>
              <p className={styles.eyebrow}>05 / THE FULL SYSTEM</p>
              <h2>
                One closed loop.
                <br />
                Every part working
                <br />
                together.
              </h2>
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

              <div
                className={styles.flowLegend}
                aria-label="System flow legend"
              >
                <span>
                  <i className={styles.supplyLine} /> Supply flow (energy
                  delivered)
                </span>
                <span>
                  <i className={styles.returnLine} /> Return flow (fluid
                  returning)
                </span>
                <span>
                  <i className={styles.controlLine} /> Control signal
                  (information)
                </span>
              </div>
            </div>

            <div className={styles.systemMap}>
              <Image
                src="/howitworks/5.png"
                alt="Thermal Wall closed-loop system map showing energy sources, controls, building zones, thermal storage, and return flow"
                width={1535}
                height={1024}
                sizes="(max-width: 820px) 100vw, 70vw"
              />
            </div>
          </div>

          <div className={styles.systemSummary}>
            <div className={styles.summaryStatement}>
              <Shield />
              <p>
                <strong>TWT is not one device added to a building.</strong>
                <span>
                  It is a coordinated hydronic system that uses the concrete
                  structure to receive, store, distribute, and release thermal
                  energy.
                </span>
              </p>
            </div>
            <div className={styles.summaryPoint}>
              <Waves />
              <p>
                <strong>Continuous circulation</strong>A closed loop supports
                stable operation and efficient energy use.
              </p>
            </div>
            <div className={styles.summaryPoint}>
              <Layers3 />
              <p>
                <strong>Directed where it&apos;s useful</strong>Energy is sent
                to building zones or storage according to need.
              </p>
            </div>
            <div className={styles.summaryPoint}>
              <Thermometer />
              <p>
                <strong>Built-in stability</strong>The concrete mass provides
                steady comfort and reduces temperature swings.
              </p>
            </div>
          </div>

          <div className={styles.systemCta}>
            <div className={styles.systemCtaIntro}>
              <span>
                <Layers3 />
              </span>
              <p>
                <strong>See the data behind the system.</strong>
                Explore the evidence, modeling, and research program.
              </p>
            </div>
            <div className={styles.systemCtaActions}>
              <Button href="/evidence" primary>
                Review the evidence
              </Button>
              <Button href="/potential-benefits">See potential benefits</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
