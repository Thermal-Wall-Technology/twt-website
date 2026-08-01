import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartHandshake,
  House,
  Landmark,
  ShieldCheck,
  University,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Future Applications | Thermal Wall Technology",
  description:
    "Explore the potential future applications TWT intends to evaluate after rigorous research and validation.",
};

const APPLICATIONS = [
  {
    icon: House,
    title: "Homes",
    context: "Comfort, operating cost, resilience, and durable construction in a complete residential assembly.",
    question: "Can the system maintain comfort and manage moisture across real heating and cooling seasons?",
  },
  {
    icon: Building2,
    title: "Multifamily & affordable housing",
    context: "A research setting where energy burden, maintenance, indoor conditions, and durability can be assessed together.",
    question: "Where can an integrated envelope and low-temperature system create measurable public value?",
  },
  {
    icon: GraduationCap,
    title: "Education & campus",
    context: "Potential living-lab environments with defined operations, multidisciplinary research capacity, and long-term monitoring.",
    question: "How does the concept perform under consistent use, controls, and measurement protocols?",
  },
  {
    icon: Landmark,
    title: "Community & resilience buildings",
    context: "Buildings that may benefit from investigation of thermal stability, durability, and operation during disruptions.",
    question: "What remains functional through weather events or limited power, and for how long?",
  },
  {
    icon: Factory,
    title: "Manufacturing partnerships",
    context: "A future pathway for evaluating repeatable block production, quality assurance, constructability, and supply-chain feasibility.",
    question: "Can the design be manufactured and installed consistently at a defined quality standard?",
  },
  {
    icon: Waves,
    title: "Grid-aware systems",
    context: "A research opportunity to study thermal storage, hydronic controls, and demand shifting alongside utility or industry partners.",
    question: "When and how can thermal mass reduce grid demand without compromising comfort?",
  },
] as const;

const PATH = [
  ["Research", "Define the question, baseline, and method before making a performance claim."],
  ["Prototype", "Test assemblies and operate an instrumented building under a documented protocol."],
  ["Compare", "Evaluate measured outcomes against a transparent reference condition."],
  ["Decide", "Identify where the system is appropriate, what remains uncertain, and what needs refinement."],
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
    <header className="max-w-[900px]">
      <p className="text-sm font-extrabold tracking-[0.2em] text-twt-primary-orange uppercase">{eyebrow}</p>
      <h2 className={`mt-4 text-[clamp(36px,4.1vw,64px)] leading-[1.04] font-extrabold tracking-[-0.045em] ${light ? "text-white" : "text-twt-deep-navy"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-[clamp(17px,1.3vw,21px)] leading-[1.65] font-medium ${light ? "text-twt-blue-white" : "text-twt-slate-gray"}`}>
        {description}
      </p>
    </header>
  );
}

export default function FutureApplicationsPage() {
  return (
    <main className="bg-white text-twt-text-dark">
      <section className="overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(78px,9vw,144px)] text-white">
        <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold tracking-[0.2em] text-twt-light-orange uppercase">Future potential</p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(48px,6.2vw,96px)] leading-[0.98] font-extrabold tracking-[-0.065em]">
              Where the research could lead.
            </h1>
            <p className="mt-8 max-w-[790px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              TWT is a patented building concept with potential applications across housing, institutional buildings, manufacturing, and grid-aware energy systems. Those applications remain prospective until research defines where the system performs, for whom, and under what conditions.
            </p>
            <Link href="/research-partnership" className="group mt-9 inline-flex min-h-14 items-center gap-3 border-2 border-twt-primary-orange px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus">
              Explore the research program
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <aside className="border-l-2 border-twt-primary-orange bg-white/[0.06] p-[clamp(26px,3.4vw,44px)]">
            <ShieldCheck className="size-11 text-twt-sky-blue" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-8 text-xs font-extrabold tracking-[0.17em] text-twt-light-orange uppercase">A necessary distinction</p>
            <p className="mt-4 text-[clamp(26px,2.3vw,37px)] leading-[1.12] font-extrabold tracking-[-0.04em]">
              Potential is not a performance claim.
            </p>
            <p className="mt-5 leading-7 font-medium text-twt-blue-white">
              This page describes contexts worth studying after validation. It does not represent installed-project outcomes, guaranteed savings, or a current market offer.
            </p>
          </aside>
        </div>
      </section>

      <nav className="sticky top-[76px] z-30 border-b border-twt-light-gray bg-white/95 px-[clamp(22px,5vw,84px)] py-4 backdrop-blur" aria-label="Future applications sections">
        <div className="mx-auto flex max-w-[1480px] gap-6 overflow-x-auto text-sm font-extrabold whitespace-nowrap text-twt-medium-navy">
          <a href="#contexts" className="outline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus">Contexts to evaluate</a>
          <a href="#sequence" className="outline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus">Validation before deployment</a>
          <a href="#participate" className="outline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus">Participate</a>
        </div>
      </nav>

      <section id="contexts" className="scroll-mt-32 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Contexts to evaluate"
            title="Applications should follow the evidence."
            description="Each setting presents a different technical, human, and economic question. The right next step is not to market every possibility; it is to select useful test cases and make their assumptions visible."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {APPLICATIONS.map(({ icon: Icon, title, context, question }, index) => (
              <article className="group border border-twt-light-gray bg-twt-soft-white p-[clamp(25px,3vw,38px)] transition-colors hover:border-twt-blueprint-blue hover:bg-white" key={title}>
                <div className="flex items-start justify-between gap-5">
                  <Icon className="size-10 text-twt-blueprint-blue" strokeWidth={1.55} aria-hidden="true" />
                  <span className="font-mono text-xs font-bold tracking-[0.14em] text-twt-primary-orange">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-[clamp(25px,2vw,32px)] leading-[1.1] font-extrabold tracking-[-0.035em] text-twt-deep-navy">{title}</h3>
                <p className="mt-4 leading-7 font-medium text-twt-slate-gray">{context}</p>
                <div className="mt-7 border-l-2 border-twt-primary-orange pl-4">
                  <p className="text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">Question to answer</p>
                  <p className="mt-2 leading-6 font-semibold text-twt-medium-navy">{question}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="border-t-4 border-twt-primary-orange bg-twt-pale-orange p-[clamp(26px,3vw,42px)]">
            <HeartHandshake className="size-11 text-twt-primary-orange" strokeWidth={1.55} aria-hidden="true" />
            <p className="mt-8 text-xs font-extrabold tracking-[0.17em] text-twt-primary-orange uppercase">Design principle</p>
            <p className="mt-4 text-[clamp(27px,2.35vw,39px)] leading-[1.12] font-extrabold tracking-[-0.04em] text-twt-deep-navy">
              Start with a public-value question, not a product category.
            </p>
            <p className="mt-5 leading-7 font-medium text-twt-slate-gray">
              Research partners can help identify sites where comfort, energy burden, resilience, constructability, or grid performance can be measured honestly.
            </p>
          </aside>
          <div>
            <SectionHeading
              eyebrow="What each evaluation must include"
              title="A full system boundary"
              description="TWT should be evaluated as an integrated assembly, not as a single material or isolated energy number."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "A clearly defined wall, floor, hydronic, control, and ventilation configuration.",
                "A matched baseline and stated climate, occupancy, and utility assumptions.",
                "Measured energy, surface temperature, comfort, humidity, and maintenance information.",
                "Constructability, cost, durability, and code questions documented alongside energy results.",
              ].map((item) => (
                <div className="flex gap-4 border border-twt-light-gray bg-white p-6" key={item}>
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-twt-blueprint-blue" aria-hidden="true" />
                  <p className="leading-7 font-semibold text-twt-slate-gray">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sequence" className="scroll-mt-32 bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,132px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="Validation before deployment"
            title="A disciplined route from idea to application."
            description="The next applications should be selected as research cases. What is learned in one setting determines whether and how the next setting is appropriate."
            light
          />
          <ol className="mt-[clamp(48px,5vw,78px)] grid gap-5">
            {PATH.map(([number, text], index) => (
              <li className="grid gap-5 border-t border-white/15 pt-6 md:grid-cols-[90px_0.4fr_1fr] md:items-start" key={number}>
                <span className="font-mono text-sm font-bold tracking-[0.16em] text-twt-light-orange">0{index + 1}</span>
                <h3 className="text-[clamp(25px,2.2vw,34px)] leading-[1.1] font-extrabold tracking-[-0.04em] text-white">{number}</h3>
                <p className="border-l-2 border-twt-primary-orange pl-6 leading-7 font-medium text-twt-blue-white">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="participate" className="scroll-mt-32 bg-twt-pale-orange px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,118px)]">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">Shape a test case</p>
            <h2 className="mt-4 text-[clamp(38px,4vw,62px)] leading-[1.05] font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              Bring the question, site, method, or capability.
            </h2>
          </div>
          <div className="border-l-2 border-twt-primary-orange pl-6">
            <p className="text-lg leading-8 font-medium text-twt-slate-gray">
              TWT is looking for collaborators who can help define practical research applications, develop evaluation methods, host prototypes, or support the work needed to validate a serious building-system decision.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/research-partnership#participate" className="group inline-flex min-h-14 items-center gap-3 bg-twt-deep-navy px-6 py-4 font-bold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-focus">
                Research &amp; partnership
                <University className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/evidence" className="group inline-flex min-h-14 items-center gap-3 border-2 border-twt-medium-navy px-6 py-4 font-bold text-twt-medium-navy outline-offset-4 transition-colors hover:border-twt-primary-orange hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus">
                Review evidence first
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

