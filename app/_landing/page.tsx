"use client";

import styles from "./page.module.css";
import drawings from "./landing-drawings.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Droplets,
  Home as HomeIcon,
  Shield,
  Thermometer,
  TrendingUp,
  Waves,
  Landmark,
  Layers3,
  Zap,
  Leaf,
} from "lucide-react";

const benefits = [
  ["landmark", "Ancient thermal wisdom, reengineered for modern construction."],
  [
    "shield",
    "Patented technology engineered to reduce heating and cooling costs to a small fraction of conventional systems.",
  ],
  [
    "home",
    "Hurricane-resilient homes that are stronger, healthier, lower-maintenance, and built to last for generations.",
  ],
  [
    "waves",
    "Affordable, resilient, and energy-efficient—the next evolution toward sustainable human shelter.",
  ],
] as const;
const problemPoints = [
  [
    "01",
    "Energy costs are rising as global demand grows and natural resources decline.",
  ],
  [
    "02",
    "Traditional insulation has reached a hard limit—extra inches no longer yield economic returns.",
  ],
  [
    "03",
    "Conventional systems operate at 110–120°F because they heat through a limited surface area.",
  ],
] as const;

const solutionPoints = [
  "TWT turns the walls and floors into the heating and cooling surface.",
  "Operate at just 65–75°F.",
  "Operating closer to room temperature reduces energy loss and improves performance.",
] as const;

function BenefitIcon({ kind }: { kind: (typeof benefits)[number][0] }) {
  if (kind === "landmark") return <Landmark size={30} />;
  if (kind === "shield") return <Shield size={30} />;
  if (kind === "home") return <HomeIcon size={30} />;
  return <Waves size={30} />;
}

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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}

      <section className={styles.hero}>
        <Image
          className={styles.heroBackground}
          src="/home/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={drawings.heroLines} aria-hidden="true" />

        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroBrand}>
            <Image
              className={styles.heroLogo}
              src="/home/logo_v2.png"
              alt="Thermal Wall Technology"
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 900px) 88vw, 46vw"
            />
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A NEW FOUNDATION</p>
            <h1 className={styles.heroTitle}>
              A New Foundation for <span>Sustainable Human Shelter</span>
            </h1>
            <div className={styles.benefitStrip}>
              {benefits.map(([kind, text]) => (
                <article className={styles.benefit} key={text}>
                  <span className={styles.benefitIcon}>
                    <BenefitIcon kind={kind} />
                  </span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.videoSection} aria-labelledby="video-title">
        <div className={styles.shell}>
          <div className={styles.videoIntro}>
            <p className={styles.eyebrow}>THE TWT STORY</p>
            <h2 id="video-title">
              From ancient thermal mass to a new foundation.
            </h2>
            <p>
              See the idea behind Thermal Wall Technology: learning from the
              past, responding to today&apos;s building challenges, and looking
              toward a more resilient future.
            </p>
          </div>
          <div className={styles.videoFrame}>
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="Thermal Wall Technology story video"
            >
              <source src="/home/twt-video.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* Problem and Solution */}

      <section className={`${styles.section} ${styles.challengeSection}`}>
        <div className={styles.shell}>
          <div className={styles.centeredTitle}>
            <p className={styles.eyebrow}>THE CHALLENGE AND THE RESPONSE</p>
            <h2>
              When adding more insulation stops paying off,
              <br />
              <em>activate the structure.</em>
            </h2>
          </div>
          <div className={styles.challengeGrid}>
            <article
              className={`${styles.challengePanel} ${styles.problemPanel}`}
            >
              <p className={styles.panelLabel}>
                <b>01</b> THE PROBLEM
              </p>
              <h3>Rising Energy Costs and the Limits of Insulation</h3>
              <ol className={styles.problemList}>
                {problemPoints.map(([number, copy], index) => (
                  <li key={number}>
                    <span className={styles.problemNumber}>{number}</span>
                    {index === 0 ? <TrendingUp /> : <Thermometer />}
                    <p>{copy}</p>
                  </li>
                ))}
              </ol>
              <Button href="/evidence">Learn more about the problem</Button>
            </article>

            <div className={styles.comparison}>
              <div className={styles.hotComparison}>
                <strong>SMALL SURFACE</strong>
                <b>110–120°F</b>
                <Thermometer className={styles.heatIcon} />
              </div>
              <span className={styles.vsBadge}>VS</span>
              <ArrowDown className={styles.comparisonArrow} />
              <div className={styles.coolComparison}>
                <strong>LARGE SURFACE</strong>
                <b>65–75°F</b>
                <Waves className={styles.coolIcon} />
              </div>
            </div>

            <article
              className={`${styles.challengePanel} ${styles.solutionPanel}`}
            >
              <p className={styles.panelLabel}>
                <b>02</b> THE RESPONSE
              </p>
              <h3>Lower Temperature. Higher Efficiency.</h3>
              <ul className={styles.solutionList}>
                {solutionPoints.map((copy) => (
                  <li key={copy}>
                    <span>
                      <Check />
                    </span>
                    <p>{copy}</p>
                  </li>
                ))}
              </ul>
              <Button href="/how-it-works">Explore the technology</Button>
            </article>
          </div>
        </div>
      </section>

      {/* How it Works Section */}

      <section className={`${styles.section} ${styles.howSection}`}>
        <div className={`${styles.shell} ${styles.howGrid}`}>
          <div className={styles.howCopy}>
            <p className={styles.howEyebrow}>HOW IT WORKS</p>
            <h2>
              Heat moves through water.
              <br />
              The building stores it.
              <br />
              The room receives it.
            </h2>
            <p className={styles.howDescription}>
              Thermal Wall Technology uses hydronic tubing embedded within the
              concrete walls and floor to move thermal energy through the
              structure. The concrete absorbs and stores that energy, while its
              large interior surfaces gradually exchange it with the occupied
              space.
            </p>

            <div className={styles.howSteps}>
              {[
                [
                  Droplets,
                  "01",
                  "MOVE",
                  "Water carries thermal energy through embedded tubing.",
                ],
                [
                  Layers3,
                  "02",
                  "STORE",
                  "The concrete structure absorbs and holds that energy.",
                ],
                [
                  Waves,
                  "03",
                  "RELEASE",
                  "Large interior surfaces gradually exchange energy with the room.",
                ],
              ].map(([Icon, number, title, copy]) => {
                const StepIcon = Icon as typeof Droplets;
                return (
                  <article key={title as string}>
                    <span className={styles.howStepIcon}>
                      <StepIcon />
                    </span>
                    <b>{number as string}</b>
                    <h3>{title as string}</h3>
                    <p>{copy as string}</p>
                  </article>
                );
              })}
            </div>

            <Link className={styles.howLink} href="/how-it-works">
              Explore how the complete system works <ArrowRight />
            </Link>
          </div>

          <div className={styles.howVisual}>
            <Image
              src="/home/howitworks_side.png"
              alt="Cutaway home showing hydronic tubing embedded in a Thermal Wall and concrete floor"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      {/* Story Behind TWT */}

      <section className={styles.storySection}>
        <div className={`${styles.shell} ${styles.storyLayout}`}>
          <div className={styles.storyVisual}>
            <Image
              className={styles.storyImage}
              src="/home/about-face.png"
              alt="Michael Sandefur, inventor of Thermal Wall Technology"
              width={850}
              height={1080}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <span className={styles.placeholderLabel}>
              MICHAEL SANDEFUR · INVENTOR
            </span>
          </div>
          <div className={styles.storyCopy}>
            <p className={styles.eyebrow}>THE STORY BEHIND TWT</p>
            <h2>From a Question to a Breakthrough</h2>
            <p>
              Mike and April Sandefur began asking why we insulate buildings
              when so much heat is already inside the concrete. Their family-led
              approach activates the building itself rather than adding more
              insulation.
            </p>
            <blockquote>
              <span>“</span>
              <p>
                The question was never whether concrete could store heat. The
                question was whether a building could be designed to use that
                ability deliberately.
              </p>
              <cite>— Michael Sandefur</cite>
            </blockquote>
            <Link className={styles.storyLink} href="/about">
              Read the full story <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      {/* Potential Benefits */}

      <section className={styles.benefitsSection}>
        <div className={`${styles.shell} ${styles.benefitsLayout}`}>
          <div className={styles.benefitsIntro}>
            <p className={styles.eyebrow}>POTENTIAL BENEFITS</p>
            <h2>
              Better for People.
              <br />
              Better for the Planet.
              <br />
              Better for the Future.
            </h2>
            <Link className={styles.benefitsLink} href="/potential-benefits">
              Explore all benefits <ArrowRight size={22} />
            </Link>
          </div>
          <div className={styles.benefitsGroups}>
            {[
              [
                Zap,
                "Energy & Grid Flexibility",
                [
                  "Lower energy costs",
                  "Operate at lower temperatures",
                  "Draw energy during off-peak hours",
                  "Adapt to dynamic energy pricing",
                ],
                "orange",
              ],
              [
                HomeIcon,
                "Comfort",
                [
                  "Even, consistent temperatures",
                  "Quieter and more comfortable",
                  "Healthier indoor environments",
                  "Low-temperature radiant comfort",
                ],
                "blue",
              ],
              [
                Shield,
                "Resilience & Durability",
                [
                  "Hurricane and disaster resilient",
                  "Stronger structural performance",
                  "Lower maintenance and long life",
                  "Built to last for generations",
                ],
                "green",
              ],
              [
                Leaf,
                "Renewable Integration",
                [
                  "Works seamlessly with solar",
                  "Improves system performance",
                  "Stores energy for when it is needed",
                  "Supports a sustainable future",
                ],
                "gold",
              ],
            ].map(([Icon, title, points, tone]) => {
              const BenefitIcon = Icon as typeof Zap;
              return (
                <article
                  className={`${styles.benefitGroup} ${styles[tone as "orange" | "blue" | "green" | "gold"]}`}
                  key={title as string}
                >
                  <span className={styles.benefitGroupIcon}>
                    <BenefitIcon />
                  </span>
                  <div>
                    <h3>{title as string}</h3>
                    <ul>
                      {(points as readonly string[]).map((point) => (
                        <li key={point}>
                          <Check />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Credibility Section */}

      <section className={styles.credibility}>
        <div className={styles.shell}>
          <p className={styles.credibilityTitle}>
            BUILT ON INVENTION. SUPPORTED BY ANALYSIS.
          </p>
          <div className={styles.credibilityGrid}>
            {[
              [
                Shield,
                "Patented Technology",
                "Protected by patents covering the integrated assembly.",
              ],
              [
                HomeIcon,
                "Founder-Developed",
                "Invented by Michael Sandefur and developed over nearly a decade.",
              ],
              [
                Thermometer,
                "Independently Analyzed",
                "University analysis examined the core TWT wall principle.",
              ],
            ].map(([Icon, title, copy]) => {
              const CredibilityIcon = Icon as typeof Shield;
              return (
                <article
                  className={styles.credibilityItem}
                  key={title as string}
                >
                  <span>
                    <CredibilityIcon />
                  </span>
                  <div>
                    <h3>{title as string}</h3>
                    <p>{copy as string}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
