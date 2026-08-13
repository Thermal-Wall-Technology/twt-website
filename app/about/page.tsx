import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import { aboutContent as c } from "./aboutPageContent";
import styles from "./page.module.css";

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

export default function About() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          className={styles.heroBackdrop}
          src="/about/about-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1>
              {c.hero.title.slice(0, 2).map((part) => (
                <span key={part}>{part}</span>
              ))}
              <span>{c.hero.title[2]}</span>
            </h1>
            <p className={styles.heroBody}>{c.hero.body}</p>
            <div className={styles.heroActions}>
              <Button href="#story" primary>
                Explore the development story
              </Button>
              <Button href="/evidence">View the patent &amp; evidence</Button>
            </div>
          </div>

          <aside className={styles.founderCard}>
            <div className={styles.founderImageWrap}>
              <Image
                src="/about/about-face.png"
                alt="Michael Sandefur, founder and inventor of Thermal Wall Technology"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 34vw"
                className={styles.founderImage}
              />
            </div>
            <div className={styles.founderCaption}>
              <p>FOUNDER &amp; INVENTOR</p>
              <h2>Michael Sandefur</h2>
              <span>Nearly a decade of founder-led development</span>
            </div>
          </aside>
        </div>

      </section>

      <section id="story" className={styles.storySection}>
        <div className={`${styles.shell} ${styles.storyShell} ${styles.storyGrid}`}>
          <div className={styles.storyMedia}>
            <div className={styles.storyVisual}>
              <Image
                src="/about/home.png"
                alt="Architectural illustration of the home that inspired Thermal Wall Technology"
                width={1456}
                height={1088}
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.storyImage}
              />
            </div>
            <blockquote className={styles.storyQuote}>
              <Quote aria-hidden="true" />
              <p>
                “The question was never whether concrete could store heat. The
                question was whether a building could be designed to use that
                ability deliberately.”
              </p>
              <footer>
                <b>— Michael Sandefur</b>
                <span>Founder and Inventor, Thermal Wall Technology</span>
              </footer>
            </blockquote>
          </div>

          <div className={styles.storyCopy}>
            <p className={styles.eyebrow}>01 · THE STORY BEHIND TWT</p>
            <h2>From a family mission to a structural breakthrough.</h2>
            <div className={styles.storyBody}>
              {c.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>
                02 · FROM INSIGHT TO PATENTED SYSTEM
              </p>
              <h2>A decade of focused development.</h2>
            </div>
            <p>
              A practical observation evolved through modeling, independent
              analysis, system iteration, and international patent protection.
            </p>
          </div>
          <div className={styles.timelineGrid}>
            {c.milestones.map(([Icon, title, text], index) => (
              <article key={title}>
                <div className={styles.timelineTopline}>
                  <span>
                    <Icon />
                  </span>
                  <b>0{index + 1}</b>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.inventorSection}>
        <div className={`${styles.shell} ${styles.inventorGrid}`}>
          <div className={styles.inventorImageWrap}>
            <Image
              src="/about/sketch.png"
              alt="Thermal Wall Technology concept sketched in an engineering notebook"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.inventorImage}
            />
          </div>
          <div className={styles.inventorCopy}>
            <p className={styles.eyebrow}>
              04 · THE INVENTOR BEHIND THE SYSTEM
            </p>
            <h2>A builder. An inventor. A systems thinker.</h2>
            <p className={styles.inventorLead}>
              Michael Sandefur is an inventor and project leader with experience
              across construction, engineering, life-safety systems, and product
              design. His work is united by a simple approach: identify a
              real-world problem, question the accepted solution, and build
              something better.
            </p>
            <div className={styles.inventorCards}>
              {c.inventor.map(([title, copy]) => (
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
        </div>
      </section>

      <section className={styles.analysisSection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>
                05 · INDEPENDENT ANALYSIS &amp; TECHNICAL WORK
              </p>
              <h2>Founder-developed work, independently examined.</h2>
            </div>
            <p>
              University analysis closely matched Mike&apos;s calculations,
              providing independent support for the thermal-storage principle at
              the core of TWT.
            </p>
          </div>
          <div className={styles.analysisFlow}>
            <article>
              <span>01</span>
              <h3>Founder engineering</h3>
              <ul>
                {c.founderEngineering.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>
            </article>
            <div className={styles.analysisArrow} aria-hidden="true">
              <ArrowRight />
              <small>closely matched</small>
            </div>
            <article>
              <span>02</span>
              <h3>Independent university analysis</h3>
              <ul>
                {c.universityAnalysis.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className={styles.analysisAction}>
            <Button href="/evidence" primary>
              See the evidence and methodology
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
