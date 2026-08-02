import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CircleAlert,
  CloudSun,
  Droplets,
  ExternalLink,
  Flame,
  Gauge,
  Layers3,
  Snowflake,
  Sun,
  Thermometer,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Thermal Wall Technology",
  description:
    "Explore the proposed TWT assembly, its 65-75 degree wall operating band, heat-transfer principles, operating modes, and validation needs.",
};

const ASSEMBLY_PARTS = [
  ["01", "Exterior insulation", "Expanded-polystyrene (EPS) insulation on the exterior limits outward heat flow while keeping the concrete mass coupled to the conditioned space."],
  ["02", "Concrete thermal mass", "The proposed dry-stack block system forms continuous concrete walls and floors that store heat and moderate rapid temperature changes."],
  ["03", "Embedded hydronics", "Water-filled tubing adds or removes heat from the concrete. Water temperature is separate from wall-surface temperature."],
  ["04", "Conductive interior finish", "The room-facing finish must preserve useful heat exchange; an insulating interior layer would reduce the wall's connection to the room."],
] as const;

const MODES = [
  {
    icon: Flame,
    label: "Heating mode",
    range: "Toward 75°F wall temperature",
    text: "The hydronic loop adds heat to the concrete. When the wall surface is warmer than the room, its large area transfers heat to occupants, furnishings, and air.",
    status: "Established mechanism; TWT performance unmeasured",
    tone: "border-twt-primary-orange",
    iconTone: "bg-twt-pale-orange text-twt-primary-orange",
  },
  {
    icon: Sun,
    label: "Passive-solar support",
    range: "Capture, store, then redistribute",
    text: "Sunlight can charge exposed interior mass. Using the hydronic network to redistribute that heat is a proposed TWT control strategy that still requires testing.",
    status: "Proposed system behavior",
    tone: "border-twt-warm-orange",
    iconTone: "bg-twt-pale-orange text-twt-warm-orange",
  },
  {
    icon: Snowflake,
    label: "Cooling mode",
    range: "Toward 65°F wall temperature",
    text: "When the wall is cooler than the room, it absorbs heat. The controller must keep every surface safely above the room dew point and use a separately specified system to reject that heat.",
    status: "Established mechanism; climate-specific validation required",
    tone: "border-twt-blueprint-blue",
    iconTone: "bg-twt-light-blue text-twt-medium-navy",
  },
] as const;

const CONSTRAINTS = [
  ["Surface and water temperatures", "Map fluid temperature, tube spacing, concrete depth, load, and wall-surface response."],
  ["Condensation protection", "Sense room temperature and humidity, calculate dew point, and reset or stop cooling before condensation can form."],
  ["Controls and thermal lag", "Coordinate weather, occupancy, solar gain, zones, storage, pumps, and the concrete's slower response."],
  ["Buildable block geometry", "Finalize tubing paths, reinforcement, finishes, connections, serviceability, and code compliance."],
  ["Whole-building integration", "Size ventilation, humidity control, heat sources, heat rejection, domestic hot water, and backup capacity."],
  ["Measured performance", "Test representative assemblies, instrument a prototype building, and compare results with a matched reference."],
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
    <header className="max-w-[920px]">
      <p className="text-sm font-extrabold tracking-[0.2em] text-twt-primary-orange uppercase">{eyebrow}</p>
      <h2 className={`mt-4 text-[clamp(36px,4.2vw,66px)] leading-[1.03] font-extrabold tracking-[-0.045em] ${light ? "text-white" : "text-twt-deep-navy"}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-[820px] text-[clamp(17px,1.3vw,21px)] leading-[1.65] font-medium ${light ? "text-twt-blue-white" : "text-twt-slate-gray"}`}>
        {description}
      </p>
    </header>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="bg-twt-primary-white text-twt-text-dark">
      <header className="hidden">
        <div className="mx-auto flex min-h-20 max-w-[1480px] items-center justify-between gap-6 px-[clamp(22px,5vw,84px)]">
          <Link href="/" className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.08em] uppercase outline-offset-8 hover:text-twt-sky-blue focus-visible:outline-2 focus-visible:outline-twt-sky-blue">
            <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Back to overview
          </Link>
          <span className="text-right text-xs font-extrabold tracking-[0.15em] uppercase sm:text-sm">Thermal Wall Technology</span>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(72px,8vw,132px)] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgba(66,169,232,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,169,232,0.3)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_42%,black)]" aria-hidden="true" />
        <span className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue),var(--twt-primary-white),var(--twt-warm-orange),var(--twt-primary-orange))]" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1480px] gap-[clamp(48px,7vw,110px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.22em] text-twt-light-orange uppercase sm:text-base">How it works</p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(48px,6vw,92px)] leading-[0.98] font-extrabold tracking-[-0.055em]">
              The envelope becomes
              <span className="block text-twt-primary-orange">the thermal system.</span>
            </h1>
            <p className="mt-7 max-w-[820px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              TWT proposes placing insulation outside a concrete building envelope—the walls and floors—and embedding hydronic tubing within the mass. The room-facing structure then stores and exchanges heat across a large surface area.
            </p>
          </div>
          <aside className="border border-white/15 bg-white/[0.07] p-[clamp(24px,3.3vw,46px)]" aria-label="Proposed wall operating range">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-twt-light-orange uppercase">Proposed wall operating band</p>
                <p className="mt-3 text-[clamp(44px,5vw,76px)] leading-none font-extrabold tracking-[-0.055em]">65–75°F</p>
              </div>
              <Thermometer className="size-11 shrink-0 text-twt-sky-blue" strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div className="mt-9">
              <div className="h-3 rounded-full bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue)_32%,white_50%,var(--twt-warm-orange)_70%,var(--twt-primary-orange))]" aria-hidden="true" />
              <div className="mt-3 grid grid-cols-3 text-xs font-bold sm:text-sm">
                <span className="text-twt-sky-blue">65°F<br />Cooling side</span>
                <span className="text-center text-white">~72°F<br />Room reference</span>
                <span className="text-right text-twt-light-orange">75°F<br />Heating side</span>
              </div>
            </div>
            <p className="mt-8 border-l-2 border-twt-primary-orange pl-4 text-sm leading-6 font-medium text-twt-blue-white">
              This is the wall temperature, not the hydronic supply-water temperature. The exact target depends on room load, comfort conditions, humidity, and dew point. Field validation is still required.
            </p>
          </aside>
        </div>
      </section>

      <nav className="sticky top-[76px] z-20 overflow-x-auto border-b border-twt-light-gray bg-white/95 px-[clamp(22px,5vw,84px)] backdrop-blur" aria-label="On this page">
        <div className="mx-auto flex min-h-16 w-max max-w-[1480px] items-center gap-8 pr-6 text-sm font-extrabold text-twt-medium-navy lg:w-full lg:justify-between lg:pr-0">
          {[
            ["Assembly", "#assembly"],
            ["Operating principle", "#principle"],
            ["Modes", "#modes"],
            ["System flow", "#system"],
            ["ICF comparison", "#comparison"],
            ["Constraints", "#constraints"],
          ].map(([label, href]) => (
            <a className="whitespace-nowrap outline-offset-6 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus" href={href} key={href}>{label}</a>
          ))}
        </div>
      </nav>

      <section id="assembly" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="01 / Physical assembly" title="Four layers work as one system" description="The defining move is not concrete or hydronics alone. It is their placement: insulation remains outside while the active thermal mass stays connected to the room." />
          <div className="mt-[clamp(48px,5vw,78px)] grid gap-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
            <figure className="border border-twt-light-gray bg-twt-soft-white p-[clamp(20px,3vw,42px)] shadow-[0_18px_45px_rgba(3,26,61,0.08)]">
              <div className="flex min-h-[420px] overflow-hidden border border-twt-concrete bg-white">
                <div className="flex w-[12%] items-center justify-center bg-twt-concrete-light px-2 [writing-mode:vertical-rl]"><span className="text-xs font-extrabold tracking-[0.14em] text-twt-slate-gray uppercase">Exterior</span></div>
                <div className="relative w-[25%] border-x border-twt-light-gray bg-twt-eps-white [background-image:radial-gradient(var(--twt-concrete)_1px,transparent_1px)] [background-size:14px_14px]"><span className="absolute inset-x-2 top-4 text-center text-xs font-extrabold text-twt-medium-navy uppercase">EPS</span></div>
                <div className="relative w-[45%] overflow-hidden bg-twt-concrete">
                  <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#536273_1px,transparent_1px)] [background-size:17px_17px]" aria-hidden="true" />
                  <span className="absolute inset-x-2 top-4 z-10 text-center text-xs font-extrabold text-twt-deep-navy uppercase">Concrete mass</span>
                  <div className="absolute inset-x-[22%] top-[18%] bottom-[10%] rounded-[999px] border-[12px] border-twt-primary-orange border-b-twt-blueprint-blue bg-transparent" aria-hidden="true" />
                  <div className="absolute top-[43%] left-[22%] h-[12px] w-[56%] bg-twt-concrete" aria-hidden="true" />
                  <span className="absolute right-3 bottom-4 left-3 z-10 text-center text-xs font-bold text-twt-deep-navy">Embedded hydronic loop</span>
                </div>
                <div className="w-[7%] border-l border-twt-light-gray bg-white" aria-label="Conductive interior finish" />
                <div className="flex w-[11%] items-center justify-center bg-twt-pale-blue px-2 [writing-mode:vertical-rl]"><span className="text-xs font-extrabold tracking-[0.14em] text-twt-medium-navy uppercase">Room</span></div>
              </div>
              <figcaption className="mt-5 flex items-start gap-3 text-sm leading-6 font-medium text-twt-slate-gray">
                <CircleAlert className="mt-0.5 size-5 shrink-0 text-twt-primary-orange" aria-hidden="true" />
                Conceptual section, not to scale. Final block geometry, tubing layout, reinforcement, finishes, and connections remain engineering inputs.
              </figcaption>
            </figure>
            <ol className="grid gap-px overflow-hidden bg-twt-light-gray sm:grid-cols-2">
              {ASSEMBLY_PARTS.map(([number, title, text]) => (
                <li className="bg-white p-[clamp(24px,3vw,36px)]" key={number}>
                  <span className="font-mono text-xs font-bold tracking-[0.14em] text-twt-primary-orange">{number}</span>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">{title}</h3>
                  <p className="mt-3 leading-7 font-medium text-twt-slate-gray">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="principle" className="scroll-mt-16 bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="02 / Core operating principle" title="More surface area. Smaller temperature difference." description="For a given assembly and set of conditions, heat transfer rises with active surface area and the temperature difference between that surface and the room. TWT proposes using room-scale walls and floors so each surface can operate close to indoor temperature." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="bg-white p-[clamp(28px,4vw,52px)] shadow-[0_14px_36px_rgba(3,26,61,0.07)]">
              <p className="text-xs font-extrabold tracking-[0.16em] text-twt-slate-gray uppercase">Concentrated emitter</p>
              <div className="mt-8 flex min-h-40 items-center gap-8">
                <span className="grid size-24 shrink-0 place-items-center rounded-full bg-twt-primary-orange text-white"><Flame className="size-11" aria-hidden="true" /></span>
                <div><strong className="block text-3xl font-extrabold tracking-[-0.04em] text-twt-deep-navy">Small active area</strong><span className="mt-2 block text-lg font-bold text-twt-primary-orange">Larger surface-to-room difference</span></div>
              </div>
            </article>
            <article className="border-t-4 border-twt-blueprint-blue bg-white p-[clamp(28px,4vw,52px)] shadow-[0_14px_36px_rgba(3,26,61,0.07)]">
              <p className="text-xs font-extrabold tracking-[0.16em] text-twt-medium-navy uppercase">TWT operating concept</p>
              <div className="mt-8 flex min-h-40 items-center gap-8">
                <span className="grid size-24 shrink-0 place-items-center rounded-full bg-twt-deep-navy text-twt-sky-blue"><Building2 className="size-11" aria-hidden="true" /></span>
                <div><strong className="block text-3xl font-extrabold tracking-[-0.04em] text-twt-deep-navy">Room-scale active area</strong><span className="mt-2 block text-lg font-bold text-twt-medium-navy">Smaller surface-to-room difference</span></div>
              </div>
            </article>
          </div>
          <div className="mt-6 grid gap-6 bg-twt-deep-navy p-[clamp(26px,4vw,52px)] text-white lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <p className="text-[clamp(28px,3vw,46px)] leading-[1.12] font-extrabold tracking-[-0.04em]">For a given assembly,<span className="block text-twt-primary-orange">area and temperature difference matter.</span></p>
            <p className="border-l-2 border-twt-primary-orange pl-6 text-lg leading-8 font-medium text-twt-blue-white">A wall heats only when its surface is warmer than the room; it cools only when it is lower. The 65–75°F band spans two modes rather than one constant setpoint.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [Layers3, "Thermal storage", "Concrete absorbs, stores, and releases sensible heat, slowing rapid changes and shifting loads over time."],
              [Waves, "Radiant + convective exchange", "The room-facing surface exchanges heat by long-wave radiation and natural convection; both belong in the final model."],
              [CloudSun, "Exterior thermal control", "Continuous exterior insulation reduces outward heat flow and leaves the concrete better coupled to indoor conditions."],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Layers3;
              return <article className="border border-twt-light-gray bg-white p-[clamp(24px,3vw,38px)]" key={title as string}><ItemIcon className="size-9 text-twt-blueprint-blue" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">{title as string}</h3><p className="mt-3 leading-7 font-medium text-twt-slate-gray">{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="modes" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="03 / Operating modes" title="One thermal mass, three proposed behaviors" description="The direction of heat flow is established science. Capacity, controls, seasonal performance, and cost of the integrated TWT system remain subjects for validation." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {MODES.map(({ icon: Icon, label, range, text, status, tone, iconTone }) => (
              <article className={`flex flex-col border-t-4 bg-twt-soft-white p-[clamp(26px,3vw,40px)] ${tone}`} key={label}>
                <span className={`grid size-16 place-items-center rounded-full ${iconTone}`}><Icon className="size-8" strokeWidth={1.8} aria-hidden="true" /></span>
                <p className="mt-8 text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">{label}</p>
                <h3 className="mt-3 text-[clamp(25px,2vw,32px)] leading-[1.12] font-extrabold tracking-[-0.035em] text-twt-deep-navy">{range}</h3>
                <p className="mt-5 leading-7 font-medium text-twt-slate-gray">{text}</p>
                <p className="mt-8 border-t border-twt-light-gray pt-5 text-xs leading-5 font-extrabold tracking-[0.08em] text-twt-medium-navy uppercase">{status}</p>
              </article>
            ))}
          </div>
          <aside className="mt-6 flex gap-5 bg-twt-pale-orange p-[clamp(24px,3vw,38px)]">
            <Droplets className="size-9 shrink-0 text-twt-primary-orange" strokeWidth={1.7} aria-hidden="true" />
            <div><h3 className="text-xl font-extrabold text-twt-deep-navy">Cooling has a hard moisture boundary</h3><p className="mt-2 max-w-[1040px] leading-7 font-medium text-twt-text-dark">The usable lower wall temperature is not fixed by the 65°F target alone. It must remain above the room dew point with an engineering safety margin, supported by humidity control and automatic shutoff or temperature reset.</p></div>
          </aside>
        </div>
      </section>

      <section id="system" className="scroll-mt-16 bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)] text-white">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="04 / Conceptual system flow" title="Sources charge the mass. Controls decide when." description="TWT is an envelope and distribution concept, not a single heat source. A final project must select and size every component around climate, load, building use, and research objectives." light />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {[
              [Sun, "Energy source", "Heat pump, solar thermal, or another compatible source"],
              [Gauge, "Exchange + storage", "Heat exchanger and, if selected, water storage"],
              [Waves, "Control + distribution", "Sensors, controller, pumps, manifolds, and zones"],
              [Building2, "Walls + floors", "Concrete surfaces store energy and exchange it with the room"],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as typeof Sun;
              return <div className="contents" key={title as string}><article className="border border-white/15 bg-white/[0.06] p-6"><ItemIcon className="size-8 text-twt-sky-blue" strokeWidth={1.7} aria-hidden="true" /><p className="mt-6 text-xs font-bold tracking-[0.12em] text-twt-light-orange uppercase">Step 0{index + 1}</p><h3 className="mt-2 text-xl font-extrabold">{title as string}</h3><p className="mt-3 text-sm leading-6 font-medium text-twt-blue-white">{text as string}</p></article>{index < 3 ? <ArrowRight className="mx-auto size-7 rotate-90 self-center text-twt-primary-orange lg:rotate-0" aria-hidden="true" /> : null}</div>;
            })}
          </div>
          <p className="mt-6 border-l-2 border-twt-primary-orange pl-5 text-sm leading-6 font-medium text-twt-blue-white">Conceptual system sequence only. Final equipment, loop temperatures, tubing, flow rates, storage volume, zoning, backup systems, and control sequences are not yet specified.</p>
        </div>
      </section>

      <section id="comparison" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="05 / Construction distinction" title="TWT is not simply a conventional ICF wall" description="A conventional insulated concrete form (ICF) wall and the TWT concept both use insulation and concrete, but their room-side thermal coupling and intended mechanical roles differ." />
          <div className="mt-12 overflow-x-auto border border-twt-light-gray">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-twt-deep-navy text-white"><tr><th className="w-[25%] px-6 py-5 text-sm font-extrabold tracking-[0.1em] uppercase">Design question</th><th className="w-[37.5%] px-6 py-5 text-sm font-extrabold tracking-[0.1em] uppercase">Conventional ICF</th><th className="w-[37.5%] px-6 py-5 text-sm font-extrabold tracking-[0.1em] text-twt-light-orange uppercase">TWT concept</th></tr></thead>
              <tbody className="divide-y divide-twt-light-gray">
                {[
                  ["Insulation placement", "Foam commonly remains on both sides of the concrete core.", "Insulation is concentrated outside the concrete mass."],
                  ["Room-side coupling", "Interior foam reduces direct exchange between room and concrete.", "A conductive finish is intended to preserve room-to-mass exchange."],
                  ["Hydronic role", "Embedded hydronic distribution is not inherent to ICF construction.", "Tubing is embedded so the wall and floor can be actively charged or cooled."],
                  ["Thermal-mass role", "Concrete contributes structural mass and dynamic envelope effects.", "Concrete is proposed as active storage and a room-scale radiant/convective surface."],
                  ["Evidence status", "Commercial assemblies have established product and construction histories.", "The current block geometry and integrated system require new modeling and testing."],
                ].map(([question, icf, twt]) => (
                  <tr className="align-top" key={question}><th className="bg-twt-soft-white px-6 py-6 font-extrabold text-twt-deep-navy">{question}</th><td className="px-6 py-6 leading-7 font-medium text-twt-slate-gray">{icf}</td><td className="border-l-2 border-twt-primary-orange px-6 py-6 leading-7 font-semibold text-twt-deep-navy">{twt}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 border-l-2 border-twt-primary-orange bg-twt-pale-orange px-5 py-4 text-sm leading-6 font-semibold text-twt-text-dark">Evidence boundary: the 2016 USI analysis evaluated an earlier one-sided insulated wall case, not the complete current dry-stack block geometry or a finished TWT building.</p>
        </div>
      </section>

      <section id="constraints" className="scroll-mt-16 bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="06 / Engineering constraints" title="What a research program must resolve" description="These are design inputs and validation requirements, not finished specifications. They define the work needed for a rigorous, testable research collaboration." />
          <div className="mt-12 grid gap-px overflow-hidden bg-twt-light-gray sm:grid-cols-2 lg:grid-cols-3">
            {CONSTRAINTS.map(([title, text], index) => (
              <article className="bg-white p-[clamp(24px,3vw,38px)]" key={title}>
                <div className="flex items-center justify-between gap-5"><span className="font-mono text-xs font-bold tracking-[0.14em] text-twt-primary-orange">0{index + 1}</span>{index === 1 ? <Droplets className="size-6 text-twt-blueprint-blue" aria-hidden="true" /> : <Gauge className="size-6 text-twt-blueprint-blue" aria-hidden="true" />}</div>
                <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-twt-deep-navy">{title}</h3><p className="mt-3 leading-7 font-medium text-twt-slate-gray">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-twt-light-gray pt-8">
            <p className="text-xs font-extrabold tracking-[0.15em] text-twt-primary-orange uppercase">Mechanism references</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["ASHRAE guidance: radiant heating and cooling", "https://handbook.ashrae.org/Handbooks/A23/IP/a23_ch55/a23_ch55_ip.aspx"],
                ["U.S. DOE guide: thermal mass and passive design", "https://www.energy.gov/eere/buildings/zeb-technologies-passive-design-techniques"],
                ["ASTM C1363: hot-box testing standard", "https://store.astm.org/standards/c1363"],
              ].map(([label, href]) => (
                <a className="group inline-flex items-center gap-2 font-bold text-twt-medium-navy underline decoration-twt-light-gray underline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-focus" href={href} key={href} rel="noreferrer" target="_blank">{label}<ExternalLink className="size-4" aria-hidden="true" /></a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-orange px-[clamp(22px,5vw,84px)] py-[clamp(68px,7vw,104px)]">
        <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-[900px]"><p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">Evidence &amp; validation</p><h2 className="mt-4 text-[clamp(36px,4vw,62px)] leading-[1.05] font-extrabold tracking-[-0.045em] text-twt-deep-navy">The mechanism is the beginning. Measurement is the proof.</h2><p className="mt-5 max-w-[800px] text-lg leading-8 font-medium text-twt-slate-gray">Review which parts are established physics, company-modeled, independently analyzed, and still awaiting real-building data.</p></div>
          <Link href="/evidence" className="group inline-flex min-h-16 shrink-0 items-center justify-center gap-4 bg-twt-deep-navy px-8 py-5 text-lg font-bold text-white outline-offset-4 transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-focus">Review evidence &amp; limitations<ArrowRight className="size-6 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
        </div>
      </section>

      <footer className="hidden">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between"><p>Thermal Wall Technology, LLC</p><p>Conceptual design. Modeled results are not field-measured performance.</p></div>
      </footer>
    </main>
  );
}

