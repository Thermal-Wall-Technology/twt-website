import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Gauge,
  Ruler,
  ShieldCheck,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";
import {
  BenefitAccordion,
  type BenefitItem,
  type BenefitStatus,
} from "./benefit-accordion";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Potential Benefits | Thermal Wall Technology",
  description:
    "Explore the potential energy, comfort, resilience, and indoor-environment benefits of Thermal Wall Technology and the evidence status behind each one.",
};

const ENERGY: BenefitItem[] = [
  {
    number: 1,
    title: "Heat-pump efficiency and grid flexibility",
    summary:
      "Lower-temperature operation may improve heat-pump efficiency and make off-peak thermal charging practical.",
    description:
      "TWT is designed to circulate water at roughly 67–75°F rather than the much hotter supply temperatures common to conventional emitters. The founder’s model estimates a COP of 5.5–7.5+ and an efficiency improvement of approximately 39–60%, while the concrete mass allows energy to be stored when grid demand is lower.",
    status: "modeled",
    qualifier:
      "Founder-modeled estimates; whole-building testing is required before these figures can be treated as performance outcomes.",
  },
  {
    number: 3,
    title: "Higher solar-thermal collector efficiency",
    summary:
      "A low-temperature hydronic loop can make solar heat easier to collect and use.",
    description:
      "Because TWT can accept useful heat at relatively low water temperatures, collectors may operate across a wider and more efficient range. Founder analysis estimates more than a 50% seasonal improvement compared with higher-temperature collection strategies.",
    status: "modeled",
    qualifier:
      "The estimate depends on climate, collector design, controls, orientation, and system configuration.",
  },
  {
    number: 5,
    title: "Increased solar availability",
    summary:
      "Lower collection temperatures may extend useful solar collection earlier, later, and through marginal conditions.",
    description:
      "The system may be able to gather heat during lower-angle sunlight, hazy weather, or partly cloudy periods when a high-temperature system would not produce useful output. Stored energy can then be redistributed when it is needed.",
    status: "design",
  },
  {
    number: 9,
    title: "Efficient hydronic heating and cooling",
    summary:
      "Water can move thermal energy with less distribution loss and less air movement than ducted systems.",
    description:
      "The founder’s engineering analysis estimates that liquid circulation may require only 10–15% of the distribution energy used by comparable forced-air delivery. Hydronic routing also avoids duct leakage and can pair well with photovoltaics, off-grid systems, and emergency operation.",
    status: "modeled",
    qualifier:
      "Actual pumping and system energy will depend on loop design, controls, pressure drop, equipment, and building conditions.",
  },
  {
    number: 12,
    title: "Ground-source heat-pump integration",
    summary:
      "Low water temperatures may reduce the lift required from ground-source equipment.",
    description:
      "Founder modeling estimates a 30–50% COP gain and the possibility of smaller ground loops, wells, and heat-pump tonnage. The thermal mass can also spread loads over time, which may reduce short peak demands.",
    status: "modeled",
    qualifier:
      "These are system-level projections, not field-measured sizing or performance guarantees.",
  },
  {
    number: 13,
    title: "Grid stabilization and off-peak capability",
    summary:
      "The building’s mass can be charged when electricity is cleaner, less expensive, or more available.",
    description:
      "Smaller equipment loads, efficient hydronic delivery, and thermal storage may let controls shift heating or cooling away from grid peaks without sacrificing comfort. This could support time-of-use strategies and demand-response programs.",
    status: "design",
  },
  {
    number: 17,
    title: "Heating objects, not air",
    summary:
      "Radiant surfaces exchange heat directly with people and objects instead of relying primarily on heated air.",
    description:
      "When doors open or ventilation air is exchanged, the stored energy remains in the concrete structure. That may reduce the amount of useful heat carried out of the building with escaping air and help the space recover more steadily.",
    status: "established",
  },
];

const COMFORT: BenefitItem[] = [
  {
    number: 2,
    title: "Thermal-mass temperature moderation",
    summary:
      "Accessible concrete mass can absorb and release heat to smooth indoor temperature swings.",
    description:
      "TWT places the storage mass inside the insulated envelope and actively connects it to a hydronic loop. That large, stable reservoir can absorb excess heat and return it later, reducing sharp peaks and rapid cycling.",
    status: "established",
  },
  {
    number: 6,
    title: "Improved passive-solar performance",
    summary:
      "The insulated concrete structure can capture direct solar gains without adding a separate storage layer.",
    description:
      "Walls and floors serve as both building structure and thermal storage. When interior surfaces receive solar energy, the mass can absorb it and moderate the effect on room temperature before releasing it later.",
    status: "design",
  },
  {
    number: 7,
    title: "Hydronic balancing of passive-solar gains",
    summary:
      "A connected loop may move captured solar heat from one area of the building to another.",
    description:
      "Instead of allowing a sunny zone to overheat while shaded rooms remain cool, controls can redistribute stored energy through wall and floor zones. Founder estimates suggest 35–60% more usable solar harvest and a 40–65% reduction in conventional heating demand.",
    status: "modeled",
    qualifier:
      "The percentages are founder-modeled and require controlled building-scale validation.",
  },
  {
    number: 8,
    title: "Passive and mechanical space cooling",
    summary:
      "Cool thermal mass may absorb room heat and support several low-energy heat-rejection paths.",
    description:
      "Possible strategies include passive absorption into the structure, exchanging heat with incoming domestic water, or rejecting stored heat through a solar collector at night. In suitable climates, these approaches could reduce active cooling demand.",
    status: "design",
    qualifier:
      "Cooling performance and condensation control must be validated for each climate and operating strategy.",
  },
  {
    number: 16,
    title: "Heat retention through re-radiation",
    summary:
      "Warm concrete surfaces can absorb, store, and re-radiate infrared energy over long periods.",
    description:
      "Unlike a short pulse of heated air, the building mass remains an energy reservoir. It can continue exchanging heat with interior surfaces and occupants after the active heat source has slowed or stopped.",
    status: "established",
  },
  {
    number: 18,
    title: "Consistent, draft-free comfort",
    summary:
      "Large radiant surfaces can deliver comfort gently and evenly without depending on high air velocity.",
    description:
      "The wall and floor areas operate at modest temperatures across a broad surface. This can reduce the hot spots, cold drafts, fan noise, and cycling sensations often associated with smaller emitters or forced-air delivery.",
    status: "established",
  },
];

const RESILIENCE: BenefitItem[] = [
  {
    number: 4,
    title: "Smaller equipment and space requirements",
    summary:
      "Reduced peaks and low-temperature operation may allow several system components to be downsized.",
    description:
      "Potential reductions include heat-pump capacity, pumps, heat exchangers, solar collectors, storage tanks, ground loops, wells, and associated roof or yard area. Smaller equipment could reduce installation complexity and first cost.",
    status: "design",
    qualifier:
      "Final equipment sizing must follow measured loads, engineering calculations, and applicable codes.",
  },
  {
    number: 10,
    title: "Reduced supplemental solar storage",
    summary:
      "The walls and floors already provide a large thermal reservoir within the building.",
    description:
      "Using the concrete structure as active storage may reduce the need for separate water tanks or other dedicated storage hardware. This could free mechanical-room space and simplify a solar-thermal system.",
    status: "design",
  },
  {
    number: 11,
    title: "Domestic-water supplemental cooling",
    summary:
      "Incoming potable water could provide a secondary path for drawing heat from the thermal mass.",
    description:
      "A properly isolated heat exchanger could transfer heat from wall and floor loops into incoming domestic water before it reaches the water heater, cooling the structure while preheating the water supply.",
    status: "design",
    qualifier:
      "This configuration requires code-compliant separation, water-quality protection, and engineering validation.",
  },
  {
    number: 14,
    title: "Monolithic structural integrity and hurricane resilience",
    summary:
      "Interconnected, poured-concrete cavities are intended to form a strong continuous structure.",
    description:
      "The system’s monolithic wall construction may offer high impact and wind resistance while integrating insulation and hydronic pathways. That could be valuable in severe-weather regions and long-life buildings.",
    status: "validation",
    qualifier:
      "Structural, wind, impact, fire, and code performance must be established through licensed engineering, testing, and certification.",
  },
  {
    number: 15,
    title: "Generational longevity and permanence",
    summary:
      "A concrete primary structure is intended to provide durable, long-term value with fewer vulnerable layers.",
    description:
      "The founder envisions European-style building permanence: a structure designed for generations rather than short replacement cycles. Long service life could reduce repair, replacement, and material turnover over time.",
    status: "design",
    qualifier:
      "Service life and maintenance outcomes will depend on detailing, materials, workmanship, climate, and operation.",
  },
];

const INDOOR: BenefitItem[] = [
  {
    number: 19,
    title: "Lower required air temperature",
    summary:
      "Warm surrounding surfaces may make occupants comfortable at a lower thermostat setting.",
    description:
      "The founder estimates that radiant comfort could allow an indoor air temperature roughly 5°F lower than a forced-air setting, with a potential 5–15% energy benefit depending on the building and climate.",
    status: "modeled",
    qualifier:
      "Comfort response and energy savings vary by occupant, surface temperature, humidity, clothing, and building operation.",
  },
  {
    number: 20,
    title: "Reduced temperature stratification",
    summary:
      "Broad radiant exchange can reduce the temperature difference between the floor, occupied zone, and ceiling.",
    description:
      "Because comfort is delivered through large interior surfaces, the system may rely less on buoyant hot air and mixing fans. More even vertical temperatures can improve perceived comfort and reduce avoidable ceiling heat accumulation.",
    status: "established",
  },
  {
    number: 21,
    title: "Healthier indoor humidity levels",
    summary:
      "Reduced reliance on hot forced air may help avoid excessive winter drying.",
    description:
      "Radiant delivery does not need a continuous stream of heated air to warm occupants. The founder expects this to support steadier indoor humidity and reduce dryness-related discomfort.",
    status: "validation",
    qualifier:
      "Humidity and health effects require field measurement and appropriate indoor-environment expertise.",
  },
  {
    number: 22,
    title: "Improved control of air exchanges",
    summary:
      "Ventilation can be managed for air quality without also serving as the primary heating or cooling distribution system.",
    description:
      "Separating ventilation from thermal delivery may allow outdoor air to be introduced according to occupancy and air-quality needs while the structure maintains comfort. This can make ventilation strategies easier to tune and verify.",
    status: "design",
  },
  {
    number: 23,
    title: "Reduced air movement and pollutant circulation",
    summary:
      "Less dependence on forced-air delivery may reduce the movement of dust, pollen, and other particles.",
    description:
      "Radiant surfaces can maintain comfort with lower recirculation air volumes. That creates the potential for quieter rooms and less redistribution of settled particles and allergens through occupied spaces.",
    status: "validation",
    qualifier:
      "Actual air-quality outcomes depend on ventilation, filtration, sources, cleaning, humidity, and occupancy and must be measured.",
  },
  {
    number: 24,
    title: "Surface drying and mold reduction",
    summary:
      "Moderately warm interior surfaces may stay drier and less hospitable to mold and mildew.",
    description:
      "By raising surface temperatures and reducing cold spots, TWT may lower the duration of surface condensation and help assemblies dry. This could reduce moisture accumulation at vulnerable interior locations.",
    status: "validation",
    qualifier:
      "Mold risk is assembly- and climate-specific; enclosure design, water management, and field validation remain essential.",
  },
];

const PILLARS = [
  {
    id: "energy",
    icon: Zap,
    tone: "orange",
    title: "Energy & Grid Flexibility",
    count: ENERGY.length,
    copy: "Use and store energy when it is most available—and move it more efficiently.",
  },
  {
    id: "comfort",
    icon: Thermometer,
    tone: "blue",
    title: "Comfort & Thermal Stability",
    count: COMFORT.length,
    copy: "Create steady comfort through the mass and surfaces of the building itself.",
  },
  {
    id: "resilience",
    icon: ShieldCheck,
    tone: "green",
    title: "Resilience & Longevity",
    count: RESILIENCE.length,
    copy: "Design the structure and its systems for durable, long-term value.",
  },
  {
    id: "indoor",
    icon: Wind,
    tone: "purple",
    title: "Indoor Environment",
    count: INDOOR.length,
    copy: "Support comfort with less dependence on moving and reheating air.",
  },
] as const;

const STATUS: {
  status: BenefitStatus;
  icon: typeof Gauge;
  title: string;
  copy: string;
}[] = [
  {
    status: "established",
    icon: Gauge,
    title: "Established principle",
    copy: "Supported by accepted building science and physics.",
  },
  {
    status: "modeled",
    icon: FlaskConical,
    title: "Founder-modeled",
    copy: "Developed through the founder’s engineering analysis.",
  },
  {
    status: "design",
    icon: Ruler,
    title: "Design-derived",
    copy: "A logical outcome of the proposed system design.",
  },
  {
    status: "validation",
    icon: ClipboardCheck,
    title: "Requires validation",
    copy: "To be confirmed through testing and demonstration.",
  },
];

export default function PotentialBenefitsPage() {
  return (
    <main className={styles.page}>
      <nav
        className={styles.sectionNav}
        aria-label="Potential benefits sections"
      >
        <div>
          <a href="#benefit-areas">Benefit areas</a>
          <a href="#all-benefits">All benefits</a>
          <a href="#evidence-status">Evidence status</a>
          <a href="#participate">Participate</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Potential benefits</p>
            <h1>
              One system. Multiple layers of potential <span>benefit.</span>
            </h1>
            <p className={styles.heroLead}>
              TWT brings thermal storage, radiant delivery, structure, and
              controls into one building assembly. The opportunities below
              explain what that integration could make possible—and which ideas
              still need to be proven.
            </p>
          </div>
          <div className={styles.heroWall} aria-hidden="true">
            <Image
              src="/potentialbenefits/wallimg.png"
              alt=""
              width={1672}
              height={936}
              sizes="(max-width: 1023px) 88vw, 34vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.overview} id="benefit-areas">
        <div className={styles.shell}>
          <header className={styles.centeredHeading}>
            <p className={styles.eyebrow}>Four areas of potential impact</p>
            <h2>One structure. Multiple opportunities.</h2>
            <p>
              Explore the overview, then open any benefit for the founder’s full
              description and its current evidence status.
            </p>
          </header>
          <div className={styles.pillarGrid}>
            {PILLARS.map(({ icon: Icon, tone, title, count, copy, id }) => (
              <a
                className={styles.pillar}
                data-tone={tone}
                href={`#${id}`}
                key={id}
              >
                <span className={styles.pillarIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <span className={styles.pillarCount}>{count} benefits</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className={styles.explore}>
                  Explore area <ArrowRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection} id="all-benefits">
        <div className={styles.shell}>
          <header className={styles.benefitsHeading}>
            <p className={styles.eyebrow}>Full benefits framework</p>
            <h2>See every potential benefit.</h2>
          </header>
          <div className={styles.benefitsGrid}>
            <article className={`${styles.supportCard} ${styles.orangeCard}`} id="energy">
              <header className={styles.benefitHeader}>
                <span className={styles.categoryIcon}>
                  <Zap aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.categoryLabel}>Area 01</p>
                  <h2>Energy, equipment, and grid flexibility</h2>
                </div>
              </header>
              <p className={styles.categoryIntro}>
                Lower operating temperatures, off-peak charging, and
                building-scale thermal storage create opportunities to reduce
                demand and use renewable energy more effectively.
              </p>
              <BenefitAccordion items={ENERGY} tone="orange" />
            </article>
            <article
              className={`${styles.supportCard} ${styles.blueCard}`}
              id="comfort"
            >
              <header className={styles.benefitHeader}>
                <span className={styles.categoryIcon}>
                  <Thermometer aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.categoryLabel}>Area 02</p>
                  <h2>Comfort &amp; thermal stability</h2>
                </div>
              </header>
              <p className={styles.categoryIntro}>
                Thermal mass, passive gains, and radiant exchange work together
                to create stable, even comfort.
              </p>
              <BenefitAccordion items={COMFORT} tone="blue" />
            </article>
            <article
              className={`${styles.supportCard} ${styles.greenCard}`}
              id="resilience"
            >
              <header className={styles.benefitHeader}>
                <span className={styles.categoryIcon}>
                  <ShieldCheck aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.categoryLabel}>Area 03</p>
                  <h2>Resilience &amp; longevity</h2>
                </div>
              </header>
              <p className={styles.categoryIntro}>
                A monolithic concrete structure and integrated storage concept
                are designed for durability and long-term value.
              </p>
              <BenefitAccordion items={RESILIENCE} tone="green" />
            </article>
            <article
              className={`${styles.supportCard} ${styles.purpleCard}`}
              id="indoor"
            >
              <header className={styles.benefitHeader}>
                <span className={styles.categoryIcon}>
                  <Wind aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.categoryLabel}>Area 04</p>
                  <h2>Indoor environment &amp; air movement</h2>
                </div>
              </header>
              <p className={styles.categoryIntro}>
                Radiant comfort may reduce reliance on moving air and create
                more controllable indoor conditions.
              </p>
              <BenefitAccordion items={INDOOR} tone="purple" />
            </article>
          </div>

          <section className={styles.statusBand} id="evidence-status">
            <div className={styles.statusIntro}>
              <p className={styles.eyebrow}>Evidence status key</p>
              <h2>Read every benefit in context.</h2>
              <p>
                The label beside each item shows what currently supports it.
              </p>
            </div>
            <div className={styles.statusGrid}>
              {STATUS.map(({ status, icon: Icon, title, copy }) => (
                <div
                  className={styles.statusItem}
                  data-status={status}
                  key={status}
                >
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.cta} id="participate">
            <div>
              <p className={styles.eyebrow}>Ready to collaborate?</p>
              <h2>Help turn potential into measured evidence.</h2>
              <p>
                Bring a test site, research question, technical capability, or
                validation method.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link className={styles.secondaryButton} href="/evidence">
                Review the evidence <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <CheckCircle2 className={styles.ctaMark} aria-hidden="true" />
          </section>
        </div>
      </section>
      <section className={styles.legalStrip} aria-label="Legal and intellectual property note">
        <div className={styles.shell}>
          <ShieldCheck aria-hidden="true" />
          <p>
            TWT is patented and trade secret protected. All modeling and
            analysis were performed by the founder and independently reviewed
            by the University of Southern Indiana. The technology is not yet
            widely commercialized.
          </p>
          <Link href="/evidence">
            Legal &amp; IP <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
