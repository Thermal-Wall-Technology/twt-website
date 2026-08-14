import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  Clock3,
  House,
  Info,
  Lightbulb,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  Zap,
} from "lucide-react";
import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Modeled Energy-Cost Scenarios | Thermal Wall Technology",
  description:
    "Illustrative modeled electricity-cost scenarios for Thermal Wall Technology configurations.",
};

const subnav = [
  ["Overview", "/evidence#overview"],
  ["Established physics", "/evidence#details"],
  ["Founder engineering", "/evidence#founder"],
  ["Independent model", "/evidence#model"],
  ["Boundaries", "/evidence#coverage"],
  ["Modeled scenarios", "#top"],
  ["Validation roadmap", "/evidence#roadmap"],
  ["References", "/evidence#references"],
] as const;

const scenarios = [
  {
    number: "1",
    title: "Standard Wood Frame",
    label: "Baseline",
    description:
      "A typical all-electric wood-frame home under full utility rates.",
    details: [
      "Standard wood-frame home",
      "~12,000 kWh/yr electricity use",
      "Full utility rates",
    ],
    image: "/evidence/wood.png",
    imageAlt: "Illustration of a standard wood-frame wall assembly",
    kind: "wood",
  },
  {
    number: "2",
    title: "TWT + MPC RES",
    label: "Optimized grid-powered model",
    description:
      "Thermal wall storage coordinated with reserve energy storage.",
    details: [
      "TWT + MPC + hot water reserve",
      "~2,200 kWh/yr off-peak equivalent",
      "Grid-powered, but optimized",
    ],
    image: "/evidence/twt-wall.png",
    imageAlt: "Thermal Wall system with hydronic tubing",
    kind: "twt",
  },
  {
    number: "3",
    title: "TWT + Solar + MPC RES",
    label: "Lowest modeled grid dependence",
    description: "A modeled solar-thermal configuration with reserve storage.",
    details: [
      "TWT + solar thermal + MPC + reserve",
      "~850 kWh/yr off-peak equivalent",
      "Solar pre-charging reduces grid reliance",
    ],
    image: "/evidence/twt-wall-solar.png",
    imageAlt: "Thermal Wall system with solar thermal and MPC controls",
    kind: "solar",
  },
] as const;

const forecast = [
  ["2030", "19.83", "$2,380 / yr", "$305 / yr", "$118 / yr", "$2,262 / yr"],
  ["2040", "26.50", "$3,180 / yr", "$408 / yr", "$158 / yr", "$3,022 / yr"],
  ["2050", "35.50", "$4,260 / yr", "$547 / yr", "$211 / yr", "$4,049 / yr"],
  ["2060", "44.50", "$5,340 / yr", "$685 / yr", "$265 / yr", "$5,075 / yr"],
  ["2070", "58.00", "$6,960 / yr", "$893 / yr", "$345 / yr", "$6,615 / yr"],
] as const;

const costBars = [
  [House, "Standard Wood Frame", "~12,000 kWh/yr", "$2,380 / yr", "standard"],
  [Zap, "TWT + MPC RES", "~2,200 kWh/yr", "$305 / yr", "optimized"],
  [Sun, "TWT + Solar + MPC RES", "~850 kWh/yr", "$118 / yr", "solar"],
] as const;

export default function ModelingMethodsPage() {
  return (
    <main id="top" className={styles.modelPage}>
      <nav className={styles.subnav} aria-label="Evidence navigation">
        <div>
          {subnav.map(([label, href]) => (
            <Link
              className={label === "Modeled scenarios" ? styles.active : ""}
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>MODELED ECONOMIC SCENARIOS</p>
              <h1>Modeled Energy-Cost Scenario</h1>
              <p className={styles.lede}>
                Illustrative annual electricity-cost comparisons across three
                building-system scenarios.
              </p>
              <p className={styles.context}>
                
              </p>
              
            </div>
            <aside className={styles.readPanel}>
              <div className={styles.readPanelHead}>
                <h2>How to read this analysis</h2>
                <span>
                  <ChartNoAxesCombined /> Modeled, not field-measured
                </span>
              </div>
              <ul>
                <li>
                  <span className={styles.readIcon}>
                    <CircleDollarSign />
                  </span>
                  <div>
                    <b>Three building system scenarios</b>
                    <p>
                      Comparison of annual electricity use and cost across TWT
                      configurations.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.readIcon}>
                    <ChartNoAxesCombined />
                  </span>
                  <div>
                    <b>Modeled rate scenarios</b>
                    <p>
                      Illustrative U.S. average residential electricity rates
                      from 2030 to 2070.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.readIcon}>
                    <SlidersHorizontal />
                  </span>
                  <div>
                    <b>Assumptions matter</b>
                    <p>
                      Results vary with climate, utility rates, occupancy,
                      controls, and system configuration.
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.scenarioSection}>
        <div className={styles.shell}>
          <div className={styles.scenarioGrid}>
            {scenarios.map((scenario) => (
              <article
                className={`${styles.scenarioCard} ${styles[scenario.kind]}`}
                key={scenario.number}
              >
                <div className={styles.scenarioHead}>
                  <span>{scenario.number}</span>
                  <div>
                    <h2>{scenario.title}</h2>
                    <small>{scenario.label}</small>
                  </div>
                </div>
                <div className={styles.scenarioImage}>
                  <Image
                    src={scenario.image}
                    alt={scenario.imageAlt}
                    width={1600}
                    height={1067}
                    sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1060px) calc(50vw - 50px), 31vw"
                  />
                </div>
                <ul>
                  {scenario.details.map((detail) => (
                    <li key={detail}>
                      <Check />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="forecast" className={styles.costSection}>
        <div className={styles.shell}>
          <div className={styles.costBoard}>
            <div className={styles.costTop}>
              <div>
                <h2>2030 ILLUSTRATIVE ANNUAL ELECTRICITY COST</h2>
                <p>Modeled rate: 19.83¢/kWh (U.S. average residential)</p>
              </div>
              <p>
                Projected rate: <b>19.83¢/kWh</b>
              </p>
            </div>
            <div className={styles.costBars}>
              {costBars.map(([Icon, title, use, value, tone]) => (
                <div className={styles.costRow} key={title}>
                  <div className={styles.costName}>
                    <span className={styles[`${tone}Icon`]}>
                      <Icon />
                    </span>
                    <div>
                      <b>{title}</b>
                      <small>{use}</small>
                    </div>
                  </div>
                  <div className={styles.barTrack}>
                    <span className={styles[`${tone}Bar`]} />
                  </div>
                  <b className={styles[`${tone}Value`]}>{value}</b>
                </div>
              ))}
              <div className={styles.axis} aria-hidden="true">
                <span>0</span>
                <span>500</span>
                <span>1,000</span>
                <span>1,500</span>
                <span>2,000</span>
                <span>2,500</span>
              </div>
              <p className={styles.axisLabel}>Annual electricity cost (USD)</p>
            </div>
            <aside className={styles.savingsCard}>
              <p>Annual savings</p>
              <span>vs. standard wood frame</span>
              <strong>$2,075 / yr</strong>
              <b>TWT + MPC RES</b>
              <strong className={styles.solarSaving}>$2,262 / yr</strong>
              <b className={styles.solarText}>TWT + solar + MPC RES</b>
              <small>
                Illustrative savings in 2030 under the assumptions below.
              </small>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.shell}>
          <div className={styles.tableCard}>
            <div className={styles.tableHeading}>
              <div>
                <h2>2030–2070 ILLUSTRATIVE ANNUAL COST COMPARISON</h2>
                <p>
                  All values in USD. Costs will vary with future electricity
                  rates and conditions.
                </p>
              </div>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>
                      Modeled rate
                      <br />
                      (¢/kWh)
                    </th>
                    <th>
                      Standard wood frame
                      <br />
                      (~12,000 kWh/yr)
                    </th>
                    <th>
                      TWT + MPC RES
                      <br />
                      (~2,200 kWh/yr off-peak eq.)
                    </th>
                    <th>
                      TWT + solar + MPC RES
                      <br />
                      (~850 kWh/yr off-peak eq.)
                    </th>
                    <th>
                      Annual savings
                      <br />
                      (solar TWT vs. wood frame)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {forecast.map((row) => (
                    <tr key={row[0]}>
                      {row.map((value, index) => (
                        <td
                          className={index === 5 ? styles.savingsCell : ""}
                          key={value}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="assumptions" className={styles.assumptionSection}>
        <div className={styles.shell}>
          <div className={styles.whyStrip}>
            <div>
              <h2>Why the modeled costs differ</h2>
            </div>
            <article>
              <ChartNoAxesCombined />
              <p>
                <b>Wood frame</b>Full exposure to grid-price increases.
              </p>
            </article>
            <article>
              <Clock3 />
              <p>
                <b>TWT + MPC RES</b>Lower load and off-peak shifting.
              </p>
            </article>
            <article>
              <BatteryCharging />
              <p>
                <b>TWT + solar + MPC RES</b>Solar thermal and minimal grid
                top-offs.
              </p>
            </article>
          </div>
          <div className={styles.bottomGrid}>
            <article className={styles.assumptionCard}>
              <p className={styles.eyebrow}>KEY MODEL ASSUMPTIONS</p>
              <ul>
                <li>
                  <House />
                  2,500 sq. ft. illustrative home
                </li>
                <li>
                  <Lightbulb />
                  U.S. average residential electricity rates (illustrative)
                </li>
                <li>
                  <Zap />
                  All-electric residential profile (no natural gas)
                </li>
                <li>
                  <SlidersHorizontal />
                  MPC shifts 100% of heating and cooling load to off-peak hours
                </li>
                <li>
                  <Sun />
                  Solar thermal provides 80%+ of thermal pre-charge
                </li>
              </ul>
              <a href="/evidence#coverage">
                See all assumptions in detail <ArrowRight />
              </a>
            </article>
            <article className={styles.exploreCard}>
              <p className={styles.eyebrow}>EXPLORE THE FULL ANALYSIS</p>
              <h2>Change the assumptions, change the model.</h2>
              <p>
                Explore other climates, rate scenarios, and system
                configurations as the demonstration program develops.
              </p>
              <div>
                <a href="#forecast">
                  View full 2030–2070 analysis <ArrowRight />
                </a>
                <a href="#assumptions">
                  Review assumptions &amp; methodology <ArrowRight />
                </a>
              </div>
            </article>
          </div>
          <aside className={styles.boundaryNote}>
            <ShieldCheck />
            <p>
              <b>Evidence boundary:</b> These results are based on modeled
              inputs and assumptions. Independent analysis to date covers wall
              thermal storage and delivery only. Whole-building performance will
              be validated in the demonstration program.
            </p>
            <Link href="/evidence#coverage">
              See evidence boundaries <ArrowRight />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
