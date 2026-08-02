import type { Metadata } from "next";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  Building2,
  ChevronDown,
  CircleAlert,
  Clock,
  CloudSun,
  Droplets,
  ExternalLink,
  FileCheck2,
  Flame,
  FlaskConical,
  Gauge,
  Layers3,
  Radio,
  SlidersHorizontal,
  Snowflake,
  Sun,
  Thermometer,
  Timer,
  Waves,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Thermal Wall Technology",
  description:
    "How TWT turns a concrete wall into a 65–75°F radiant surface: the assembly, the physics, the operating modes, the independent model behind the numbers, and what's still being tested.",
};

const ASSEMBLY_PARTS = [
  ["01", "Exterior insulation", "EPS insulation on the outside face only — and only the outside face — so outward heat loss is blocked without cutting the concrete off from the room."],
  ["02", "Concrete thermal mass", "A continuous, monolithic wall and floor, cast through the TWT block so there are no cold joints between pours — and left exposed to the interior instead of buried under insulation."],
  ["03", "Embedded hydronic tubing", "Polymer tubing cast inside the concrete carries hot or cold water to actively charge or discharge the mass on demand."],
  ["04", "Grommet-secured finish system", "Positioning grommets cast into the block double as attachment points for the ribbing that secures exterior finishes — without a single fastener piercing the insulation or the thermal mass."],
] as const;

const MODES = [
  {
    icon: Flame,
    label: "Heating mode",
    range: "Toward 75°F wall temperature",
    text: "A heat pump or hydronic solar collectors charge the water loop, which charges the concrete. Because the storage medium runs at 65–75°F instead of the 105–120°F a conventional hydronic heat pump needs, University of Southern Indiana engineering faculty modeled a 39–60% reduction in heating energy — pushing heat-pump COP into the 5.5–7.5+ range under typical winter conditions.",
    status: "Mechanism established — whole-building energy use not yet field-measured",
    tone: "border-twt-primary-orange",
    iconTone: "bg-twt-pale-orange text-twt-primary-orange",
  },
  {
    icon: Sun,
    label: "Passive-solar mode",
    range: "Capture, then redistribute",
    text: "Shading eaves block high summer sun and admit low winter sun. The floor's thermal mass absorbs that light directly; if a sunlit area starts to overheat, the hydronic network moves the surplus to cooler rooms instead of venting it outside or shading the window — the move a conventional passive-solar home can't make.",
    status: "Redistribution mechanism established — whole-system gain still being quantified",
    tone: "border-twt-warm-orange",
    iconTone: "bg-twt-pale-orange text-twt-warm-orange",
  },
  {
    icon: Snowflake,
    label: "Cooling mode",
    range: "Toward 65°F wall temperature",
    text: "A mass this size naturally settles near the day's average temperature instead of its peak — the same reason Mammoth Cave holds 53–54°F year-round. Modeled against a Typical Meteorological Year dataset for Asheville, NC, that effect alone cut the cooling season to roughly 10 days. On those days, the same collectors run in reverse at night to dump heat to the cool air, or a heat pump chills the loop directly.",
    status: "Mechanism established — climate-specific validation required",
    tone: "border-twt-blueprint-blue",
    iconTone: "bg-twt-light-blue text-twt-medium-navy",
  },
] as const;

const OPEN_QUESTIONS = [
  [Layers3, "Floor storage", "The 2016 USI model deliberately scoped out the floor as a storage element — wall storage only. The founder has since modeled walls and floors together to size the full storage capacity; a floor-inclusive model hasn't yet been independently reviewed."],
  [Radio, "Radiative heat transfer", "The USI model captures conduction through the wall but not the radiant exchange between the wall surface and the room — the mechanism Section 3 below describes as central to how the system actually delivers comfort."],
  [SlidersHorizontal, "Zoning and controls", "How a house-level controller should direct heat to specific rooms, and how it should choose between solar, storage, and heat-pump input, hasn't been modeled or tested."],
  [Armchair, "Interior thermal mass", "The model holds the interior at a constant 72°F and doesn't account for the added thermal mass of furniture, people, or contents — all of which affect how fast a real room actually responds."],
  [Timer, "Control strategy for multi-day lag", "A mass that stores several days of heat also responds slowly. How a controller avoids overshooting comfortable temperatures with that much lag hasn't been tested in a real structure."],
  [Wrench, "Serviceability", "What happens if an embedded tube develops a leak inside a structural wall — and how it gets located and repaired — is an open construction question, not a physics one."],
  [Droplets, "Humidity and condensation management", "Keeping cooling-mode wall temperatures safely above the dew point across a full range of climates, particularly humid ones, needs climate-specific control logic."],
  [FileCheck2, "Structural and code path", "What building-code evaluation the ICB block itself requires, and what that approval process looks like, is still ahead of us."],
  [Clock, "Long-term material behavior", "How the assembly performs after years of repeated thermal cycling hasn't been observed yet — it can only be observed in a real building over real time."],
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
      <h2 className={`mt-4 text-[clamp(34px,4vw,60px)] leading-[1.05] font-extrabold tracking-[-0.045em] ${light ? "text-white" : "text-twt-deep-navy"}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-[820px] text-[clamp(17px,1.3vw,21px)] leading-[1.65] font-medium ${light ? "text-twt-blue-white" : "text-twt-slate-gray"}`}>
        {description}
      </p>
    </header>
  );
}

function Term({ term, definition }: { term: string; definition: string }) {
  return (
    <span
      tabIndex={0}
      className="group relative inline-block cursor-help border-b border-dotted border-twt-blueprint-blue outline-offset-4 focus-visible:outline-2 focus-visible:outline-twt-focus"
    >
      {term}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-md bg-twt-deep-navy px-3.5 py-2.5 text-[13px] leading-[1.45] font-medium text-white opacity-0 shadow-[0_10px_24px_rgba(3,26,61,0.28)] transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {definition}
      </span>
    </span>
  );
}

function EngineeringDetail({
  label,
  summary,
  children,
}: {
  label: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group mt-8 border border-twt-light-gray bg-twt-soft-white open:bg-white open:shadow-[0_14px_32px_rgba(3,26,61,0.07)]">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-6 py-5 outline-offset-[-4px] marker:content-none focus-visible:outline-2 focus-visible:outline-twt-focus [&::-webkit-details-marker]:hidden">
        <span className="flex items-start gap-4">
          <FlaskConical className="mt-0.5 size-6 shrink-0 text-twt-blueprint-blue" strokeWidth={1.7} aria-hidden="true" />
          <span>
            <span className="block text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">Engineering detail</span>
            <span className="mt-1 block text-lg font-extrabold tracking-[-0.02em] text-twt-deep-navy">{label}</span>
            <span className="mt-1 block text-sm leading-6 font-medium text-twt-slate-gray">{summary}</span>
          </span>
        </span>
        <ChevronDown className="mt-1 size-5 shrink-0 text-twt-slate-gray transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="border-t border-twt-light-gray px-6 py-6 text-[15px] leading-[1.75] font-medium text-twt-text-dark [&_strong]:font-extrabold [&_strong]:text-twt-deep-navy">
        {children}
      </div>
    </details>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="bg-twt-primary-white text-twt-text-dark">
      <section className="relative isolate overflow-hidden bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(72px,8vw,132px)] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgba(66,169,232,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,169,232,0.3)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_42%,black)]" aria-hidden="true" />
        <span className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,var(--twt-blueprint-blue),var(--twt-sky-blue),var(--twt-primary-white),var(--twt-warm-orange),var(--twt-primary-orange))]" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1480px] gap-[clamp(48px,7vw,110px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.22em] text-twt-light-orange uppercase sm:text-base">How it works</p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(46px,5.6vw,86px)] leading-[0.98] font-extrabold tracking-[-0.05em]">
              The wall doesn&apos;t just insulate.
              <span className="block text-twt-primary-orange">It heats the room.</span>
            </h1>
            <p className="mt-7 max-w-[820px] text-[clamp(19px,1.5vw,24px)] leading-[1.58] font-medium text-twt-blue-white">
              TWT moves all the insulation to the outside of a concrete wall and threads water tubing through the mass left exposed inside — turning the entire wall and floor surface of a room into a radiator that runs barely warmer than the room itself.
            </p>
            <p className="mt-6 max-w-[760px] text-base leading-7 font-semibold text-twt-blue-white">
              This page starts with what the assembly physically is, then builds up through the physics, the day-to-day operating modes, the independent model behind the numbers, and exactly what still needs testing. It gets more technical as it goes — read as far as you need.
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
            <p className="mt-7 border-l-2 border-twt-primary-orange pl-4 text-sm leading-6 font-semibold text-twt-blue-white">
              Compare that to a conventional hydronic heat pump, which typically needs 105–120°F to deliver the same comfort. This is wall temperature, not supply-water temperature — the exact target depends on room load, humidity, and dew point, and field validation is still required.
            </p>
          </aside>
        </div>
      </section>

      <nav className="sticky top-[76px] z-20 overflow-x-auto border-b border-twt-light-gray bg-white/95 px-[clamp(22px,5vw,84px)] backdrop-blur" aria-label="On this page">
        <div className="mx-auto flex min-h-16 w-max max-w-[1480px] items-center gap-8 pr-6 text-sm font-extrabold text-twt-medium-navy lg:w-full lg:justify-between lg:pr-0">
          {[
            ["Assembly", "#assembly"],
            ["Core idea", "#core-idea"],
            ["Physics", "#physics"],
            ["Modes", "#modes"],
            ["Full system", "#system"],
            ["ICF comparison", "#comparison"],
            ["Model assumptions", "#assumptions"],
            ["Open questions", "#open-questions"],
          ].map(([label, href]) => (
            <a className="whitespace-nowrap outline-offset-6 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus" href={href} key={href}>{label}</a>
          ))}
        </div>
      </nav>

      <section id="assembly" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="01 / What TWT physically is"
            title="A block designed to disappear into one solid wall"
            description="TWT's patented design is a dry-stackable insulated concrete block (ICB) — no mortar, no forms. A reduced-height end and center crossmember lets poured concrete flow horizontally, vertically, and diagonally between blocks as they're core-filled, so the result is one continuous monolithic wall rather than a stack of separate pours."
          />
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
                <div className="flex w-[7%] items-center justify-center border-l border-twt-light-gray bg-white px-1 [writing-mode:vertical-rl]" aria-label="Conductive interior finish"><span className="text-[9px] font-extrabold tracking-[0.1em] text-twt-slate-gray uppercase">Finish</span></div>
                <div className="flex w-[11%] items-center justify-center bg-twt-pale-blue px-2 [writing-mode:vertical-rl]"><span className="text-xs font-extrabold tracking-[0.14em] text-twt-medium-navy uppercase">Room</span></div>
              </div>
              <figcaption className="mt-5 flex items-start gap-3 text-sm leading-6 font-medium text-twt-slate-gray">
                <CircleAlert className="mt-0.5 size-5 shrink-0 text-twt-primary-orange" aria-hidden="true" />
                Conceptual section, not to scale. Confirmed outside block dimensions are 8&quot;×8&quot;×16&quot;; cavity width, crossmember geometry, and the patent drawings are still needed before this diagram can be redrawn around the exact block.
              </figcaption>
            </figure>
            <div>
              <ol className="grid gap-px overflow-hidden bg-twt-light-gray sm:grid-cols-2">
                {ASSEMBLY_PARTS.map(([number, title, text]) => (
                  <li className="bg-white p-[clamp(24px,3vw,36px)]" key={number}>
                    <span className="font-mono text-xs font-bold tracking-[0.14em] text-twt-primary-orange">{number}</span>
                    <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">{title}</h3>
                    <p className="mt-3 leading-7 font-medium text-twt-slate-gray">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 leading-7 font-medium text-twt-slate-gray">
                Positioning grommets cast into every block keep the stack aligned as it&apos;s built, and the same grommets anchor the ribbing that holds the exterior insulation and finish system — <Term term="one attachment system" definition="Grommets and ribbing carry both jobs at once: keeping blocks aligned during stacking, and securing insulation and exterior facades — without a fastener ever piercing the insulation layer or the thermal mass." />, doing the job that separate anchors, clips, and furring strips do on a conventional wall.
              </p>
              <p className="mt-4 leading-7 font-medium text-twt-slate-gray">
                Interior finishes have one rule: stay thermally conductive. Plaster, thin stucco, paint, most wallpapers, tile, brick, and stone all work — an insulating layer, even a thin one, meaningfully cuts the wall&apos;s ability to talk to the room. Exterior finishes aren&apos;t restricted the same way, since the insulation already sits behind them: stucco, siding, shiplap, brick, stone, and half- or quarter-log cladding have all been used. The floor uses the same embedded tubing in a poured slab, acting as the system&apos;s fine-adjustment tool while the walls hold the room steady.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="core-idea" className="scroll-mt-16 bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)] text-white">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading
            eyebrow="02 / The core idea"
            title="The wood-stove math behind a 65°F wall"
            description="Every heating system trades temperature for surface area. A small heat source has to run hot to warm a room; a large one can run barely above room temperature and deliver the same comfort. TWT pushes that trade as far as it goes — using the entire wall and floor of a room as the heat source."
            light
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="border border-white/15 bg-white/[0.06] p-[clamp(28px,3.4vw,44px)]">
              <p className="text-xs font-extrabold tracking-[0.16em] text-twt-light-orange uppercase">The thought experiment</p>
              <p className="mt-5 leading-8 font-medium text-twt-blue-white">
                Picture a wood stove shaped like a 4-foot cube, radiating at 250°F. Six sides, 4 feet square each: 96 square feet of surface (4 × 4 × 6).
              </p>
              <p className="mt-4 leading-8 font-medium text-twt-blue-white">
                Now slice that stove into eight 2-foot cubes and spread them around the room. Total wood-stove volume hasn&apos;t changed — but total surface area has: each small cube has 24 square feet (2 × 2 × 6), and eight of them add up to 192 square feet, <em className="text-white not-italic font-extrabold">twice</em> the original area, still at 250°F. To avoid overheating the room, those eight stoves now have to run cooler than one.
              </p>
              <p className="mt-4 leading-8 font-medium text-twt-blue-white">
                Keep dividing. Sixty-four 1-foot cubes: 384 square feet, four times the original. Five hundred twelve 6-inch cubes: 768 square feet, eight times the original — and close to nothing you&apos;d recognize as a wood stove anymore.
              </p>
              <p className="mt-4 leading-8 font-medium text-twt-blue-white">
                That last number isn&apos;t a coincidence: 768 square feet is almost exactly the combined wall and floor area of a 16-by-16-foot room with an 8-foot ceiling. Spreading the same heat output across a room&apos;s entire wall and floor surface, instead of concentrating it in one hot object, is the same move as slicing that stove into 512 pieces — and the temperature needed to stay comfortable drops right along with it.
              </p>
            </div>
            <div className="border-t-4 border-twt-primary-orange bg-white p-[clamp(28px,3.4vw,44px)] text-twt-deep-navy">
              <p className="text-xs font-extrabold tracking-[0.16em] text-twt-primary-orange uppercase">What that buys you</p>
              <p className="mt-5 text-[clamp(24px,2vw,32px)] leading-[1.2] font-extrabold tracking-[-0.03em]">
                This is why TWT targets 65–75°F, while a baseboard heater typically needs 130–160°F, a conventional heat pump 105–120°F, and a radiant floor system 85–135°F to deliver the same comfort.
              </p>
              <p className="mt-6 leading-7 font-medium text-twt-slate-gray">
                Lower operating temperature is the one mechanical fact behind every efficiency claim on this page — heat-pump gain, solar-collector gain, passive cooling. Everything downstream traces back to this trade-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="physics" className="scroll-mt-16 bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="03 / The physics underneath" title="Why concrete, and not copper or water?" description="Three properties decide whether a material can act as a room's heat source: how much energy it stores, how it releases that energy, and where the insulation sits relative to it." />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="border border-twt-light-gray bg-white p-[clamp(26px,3vw,38px)]">
              <Layers3 className="size-9 text-twt-blueprint-blue" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">3a. <Term term="Thermal mass" definition="A material's capacity to absorb, store, and slowly release heat — the property that lets a wall act as a heat reservoir instead of just a barrier." /></h3>
              <p className="mt-4 leading-7 font-medium text-twt-slate-gray">
                Copper conducts heat efficiently but stores comparatively little energy per unit of volume, and costs far more — which is why it shows up in solar collectors, not walls. Water stores a great deal of energy but provides no structural support on its own. Concrete sits in the practical middle: enough capacity to store several days&apos; worth of heat at a low, controllable temperature, while also serving as the building&apos;s actual structure.
              </p>
            </article>
            <article className="border border-twt-light-gray bg-white p-[clamp(26px,3vw,38px)]">
              <Waves className="size-9 text-twt-blueprint-blue" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">3b. Radiant heat, not convection</h3>
              <p className="mt-4 leading-7 font-medium text-twt-slate-gray">
                Most conventional systems heat the air and rely on it circulating. TWT works primarily by radiation — the wall and floor emit heat directly, the way a campfire or an old cast-iron radiator does, just from a far larger surface at a far gentler temperature. Because radiant heat warms people and objects directly, radiant-heating research commonly documents that a 5°F lower setpoint still feels comfortable, cutting heat loss through walls, windows, and roofs by roughly 5–15%.
              </p>
            </article>
            <article className="border border-twt-light-gray bg-white p-[clamp(26px,3vw,38px)]">
              <CloudSun className="size-9 text-twt-blueprint-blue" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">3c. Insulation, moved outside</h3>
              <p className="mt-4 leading-7 font-medium text-twt-slate-gray">
                A standard insulated wall — including a conventional ICF — puts insulation on both faces of the concrete. That stops heat loss both directions, but it also seals the mass off from the room: it can&apos;t give heat to the interior or take heat from it. TWT insulates the exterior only, keeping stored heat from escaping outward while leaving the mass open to the room. That one placement decision is what turns a concrete wall into an active heat store instead of just a well-insulated structural shell.
              </p>
            </article>
          </div>

          <EngineeringDetail label="Why heat can't simply be blocked — only slowed" summary="Electromagnetic radiation, insulation's actual mechanism, and why glass traps passive-solar heat.">
            <p>
              Visible light and infrared radiation sit on the same electromagnetic spectrum as X-rays and radio waves — they differ only in wavelength. Glass passes visible light readily but blocks re-radiated infrared, which is why sunlight entering a window converts to heat that can&apos;t easily leave the way it came in. That&apos;s the physical basis of passive-solar gain, and the same low-emissivity behavior that makes a greenhouse work.
            </p>
            <p className="mt-4">
              Insulation doesn&apos;t block heat outright — it forces heat to repeatedly radiate across a series of microscopic trapped-air pockets, which is a far slower process than direct conduction through a solid. It&apos;s a delay mechanism, not a wall. That&apos;s also why insulation has strongly diminishing returns: each additional inch traps proportionally less benefit than the one before it. TWT&apos;s exterior EPS is sized to retain heat, not to seal the mass away from the building — adding more than necessary wouldn&apos;t change how the wall performs on the room side at all.
            </p>
          </EngineeringDetail>
        </div>
      </section>

      <section id="modes" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="04 / How the system operates" title="How the same wall heats in January and cools in July" description="One thermal mass, driven by whichever direction the water loop is running. The direction of heat flow is established physics; the capacity, controls, and seasonal performance of the integrated TWT system are what the research program is built to measure." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {MODES.map(({ icon: Icon, label, range, text, status, tone, iconTone }) => (
              <article className={`flex flex-col border-t-4 bg-twt-soft-white p-[clamp(26px,3vw,40px)] ${tone}`} key={label}>
                <span className={`grid size-16 place-items-center rounded-full ${iconTone}`}><Icon className="size-8" strokeWidth={1.8} aria-hidden="true" /></span>
                <p className="mt-8 text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">{label}</p>
                <h3 className="mt-3 text-[clamp(23px,1.8vw,30px)] leading-[1.15] font-extrabold tracking-[-0.03em] text-twt-deep-navy">{range}</h3>
                <p className="mt-5 leading-7 font-medium text-twt-slate-gray">{text}</p>
                <p className="mt-8 border-t border-twt-light-gray pt-5 text-xs leading-5 font-extrabold tracking-[0.08em] text-twt-medium-navy uppercase">{status}</p>
              </article>
            ))}
          </div>
          <aside className="mt-6 flex gap-5 bg-twt-pale-orange p-[clamp(24px,3vw,38px)]">
            <Droplets className="size-9 shrink-0 text-twt-primary-orange" strokeWidth={1.7} aria-hidden="true" />
            <div>
              <h3 className="text-xl font-extrabold text-twt-deep-navy">Cooling has one hard rule: never go below the <Term term="dew point" definition="The temperature at which air becomes saturated and moisture begins to condense on a surface. Cooling-mode wall temperatures must stay safely above it." /></h3>
              <p className="mt-2 max-w-[1040px] leading-7 font-medium text-twt-text-dark">The usable lower wall temperature isn&apos;t fixed by the 65°F target alone — it has to stay above the room&apos;s dew point with a real safety margin, backed by humidity sensing and automatic shutoff or reset. There&apos;s also a second, simpler cooling trick: incoming potable water almost always arrives colder than the thermal mass, so routing it through a heat exchanger on the way into the building draws heat off the wall for free before it ever reaches a tap.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="system" className="scroll-mt-16 bg-twt-deep-navy px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)] text-white">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="05 / The full mechanical system" title="Where the heat actually comes from" description="TWT is an envelope and distribution concept, not a single heat source. A heat pump, hydronic solar collectors, or both together can drive it — a project doesn't need solar to get the wall's efficiency benefit." light />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {[
              [Sun, "Energy source", "Heat pump (air or ground-source), solar thermal collectors, or both"],
              [Gauge, "Exchange + storage", "Heat exchanger isolates loops; optional tank reserves heat for later"],
              [Waves, "Control + distribution", "Mixing valves, zone pumps, and a thermostat/valve controller route hot or cool water"],
              [Building2, "Walls + floors", "Concrete surfaces store the energy and radiate it into the room"],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as typeof Sun;
              return <div className="contents" key={title as string}><article className="border border-white/15 bg-white/[0.06] p-6"><ItemIcon className="size-8 text-twt-sky-blue" strokeWidth={1.7} aria-hidden="true" /><p className="mt-6 text-xs font-bold tracking-[0.12em] text-twt-light-orange uppercase">Step 0{index + 1}</p><h3 className="mt-2 text-xl font-extrabold">{title as string}</h3><p className="mt-3 text-sm leading-6 font-medium text-twt-blue-white">{text as string}</p></article>{index < 3 ? <ArrowRight className="mx-auto size-7 rotate-90 self-center text-twt-primary-orange lg:rotate-0" aria-hidden="true" /> : null}</div>;
            })}
          </div>

          <div className="mt-8 border border-white/15 bg-white/[0.04]">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-[clamp(22px,3vw,38px)] py-6 outline-offset-[-4px] marker:content-none focus-visible:outline-2 focus-visible:outline-twt-sky-blue [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-4">
                  <Wrench className="size-6 shrink-0 text-twt-sky-blue" strokeWidth={1.7} aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-extrabold tracking-[0.14em] text-twt-light-orange uppercase">Engineering detail</span>
                    <span className="mt-1 block text-lg font-extrabold">The full plumbing, valve by valve</span>
                  </span>
                </span>
                <ChevronDown className="size-5 shrink-0 text-twt-blue-white transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="border-t border-white/15 px-[clamp(22px,3vw,38px)] py-7 text-[15px] leading-[1.75] font-medium text-twt-blue-white">
                <p>A heat pump serves as the primary or supplemental source, drawing heat from air, a storage tank, or a ground loop depending on configuration; in ground-source setups, the loop can also act as a heat sink for unwanted heat collected from the walls during cooling. Solar collectors, where present, heat a sealed glycol-water loop that passes through a heat exchanger — never mixing with the building&apos;s own water — and the heat pump tops up storage whenever solar temperature falls short of demand. Solar isn&apos;t required; the heat pump alone can run the system.</p>
                <p className="mt-4">From the heat exchanger, hot water routes three ways by priority: to the domestic hot water tank through a scald-protection mixing valve, to a space-heat storage tank for later use, or directly to the thermal walls and floor through a second mixing valve and zone pump. Return water flows back to storage or the collector loop to be reheated. For cooling, the system reverses at night — warmer water from the walls circulates to the collectors, or through a supplemental fan-and-radiator, to discharge heat to the cool night air before the chilled water returns to the walls.</p>
                <p className="mt-4">Pressure and flow gauges, backflow check valves, and low-point drains support maintenance throughout, and a thermostat/valve controller directs hot or cool water to individual wall and floor zones as comfort calls for it.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="comparison" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="06 / Construction distinction" title="The single test that separates TWT from a standard ICF" description="A conventional insulated concrete form insulates both faces of the wall. Under a modeled worst-case scenario, that configuration couldn't deliver its stored heat to the room at all — no matter how much solar energy went into it." />

          <div className="mt-10 border-l-4 border-twt-primary-orange bg-twt-pale-orange p-[clamp(26px,3vw,42px)]">
            <p className="text-lg leading-8 font-semibold text-twt-deep-navy">
              Dr. Brandon Field of the University of Southern Indiana built a transient heat-flow model comparing a standard two-sided ICF wall against TWT&apos;s one-sided configuration, both under an extreme 0°F outdoor / 72°F indoor scenario with six hours of solar heat applied to the concrete in each case. The two-sided wall&apos;s interior surface never rose above the 72°F indoor temperature at all — the stored heat physically couldn&apos;t reach the room under those conditions. The one-sided wall showed a clear rise in interior surface temperature, delivering stored heat to the room for roughly five hours after sunset.
            </p>
            <p className="mt-4 leading-7 font-medium text-twt-text-dark">
              In other words: under the modeled conditions, moving the insulation to the exterior isn&apos;t what makes the wall deliver heat <em>more efficiently</em> — it&apos;s what makes the wall able to deliver heat <em>at all</em>. That single change is the basis of the patent.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-twt-light-gray">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-twt-deep-navy text-white"><tr><th className="w-[25%] px-6 py-5 text-sm font-extrabold tracking-[0.1em] uppercase">Design question</th><th className="w-[37.5%] px-6 py-5 text-sm font-extrabold tracking-[0.1em] uppercase">Conventional ICF</th><th className="w-[37.5%] px-6 py-5 text-sm font-extrabold tracking-[0.1em] text-twt-light-orange uppercase">TWT concept</th></tr></thead>
              <tbody className="divide-y divide-twt-light-gray">
                {[
                  ["Insulation placement", "Foam commonly remains on both sides of the concrete core.", "Insulation is concentrated outside the concrete mass."],
                  ["Room-side coupling", "Interior foam reduces direct exchange between room and concrete.", "A conductive finish preserves room-to-mass exchange."],
                  ["Hydronic role", "Embedded hydronic distribution is not inherent to ICF construction.", "Tubing is cast in so the wall and floor can be actively charged or cooled."],
                  ["Thermal-mass role", "Concrete contributes structural mass and dynamic envelope effects only.", "Concrete is the structure, the storage medium, and the radiant surface at once."],
                  ["Evidence status", "Commercial assemblies have established product and construction histories.", "The current block geometry and integrated system are moving into new modeling and testing."],
                ].map(([question, icf, twt]) => (
                  <tr className="align-top" key={question}><th className="bg-twt-soft-white px-6 py-6 font-extrabold text-twt-deep-navy">{question}</th><td className="px-6 py-6 leading-7 font-medium text-twt-slate-gray">{icf}</td><td className="border-l-2 border-twt-primary-orange px-6 py-6 leading-7 font-semibold text-twt-deep-navy">{twt}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-6 font-medium text-twt-slate-gray">Evidence boundary: the 2016 USI analysis evaluated an earlier one-sided insulated wall case, not the complete current dry-stack ICB block geometry or a finished TWT building. See the full model parameters below.</p>
        </div>
      </section>

      <section id="assumptions" className="scroll-mt-16 bg-twt-pale-blue px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="07 / Model assumptions" title="The exact model behind every number on this page" description="Every performance figure on this page is a modeled output, not a field-measured result, unless stated otherwise. The core thermal-storage numbers rest on an independent model built by Dr. Brandon Field, Associate Professor of Engineering at the University of Southern Indiana, dated March 2016." />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <article className="border border-twt-light-gray bg-white p-7"><p className="text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">Result</p><p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">~5 hours</p><p className="mt-2 leading-6 font-medium text-twt-slate-gray">of stored heat delivered to the room after sunset, in the fully solar-charged one-sided wall</p></article>
            <article className="border border-twt-light-gray bg-white p-7"><p className="text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">Cross-check</p><p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">Within 2%</p><p className="mt-2 leading-6 font-medium text-twt-slate-gray">agreement between Dr. Field&apos;s model and the founder&apos;s own spreadsheet calculations</p></article>
            <article className="border border-twt-light-gray bg-white p-7"><p className="text-xs font-extrabold tracking-[0.14em] text-twt-primary-orange uppercase">Scope</p><p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-twt-deep-navy">Wall only</p><p className="mt-2 leading-6 font-medium text-twt-slate-gray">the model validates wall thermal storage and delivery — not the floor, controls, or collector system</p></article>
          </div>

          <EngineeringDetail label="Every input, in full" summary="Element count, time steps, material properties, solar input, and the honest gap between two model runs.">
            <p>The model is one-dimensional, transient, and finite-difference: the wall thickness was divided into <strong>29 elements</strong> and solved in <strong>0.1-second time steps</strong> to capture how heat actually lags through concrete over time, rather than assuming an instant, uniform temperature throughout the mass.</p>
            <p className="mt-4"><strong>Boundary conditions:</strong> 0°F outdoor design temperature (chosen as a deliberate worst case — performance improves on milder days), 72°F indoor comfort temperature.</p>
            <p className="mt-4"><strong>Wall assembly modeled:</strong> 5 inches of EPS insulation on the exterior, 8 inches of poured concrete on the interior — the 2016-era one-sided ICF geometry, not the current ICB block. The underlying principle (insulation placement determines whether stored heat can reach the room) should carry over; the specific numbers below describe the ICF geometry and haven&apos;t yet been re-run against actual ICB dimensions.</p>
            <p className="mt-4"><strong>Material properties:</strong> EPS with a thermal conductivity of 0.237 BTU·in/(h·ft²·°F) and a density of 2 lb/ft³; concrete with a thermal conductivity of 13.8 BTU·in/(h·ft²·°F), a density of 150 lb/ft³, and a specific heat of 0.2 BTU/(lb·°F); standard interior and exterior air-film resistances.</p>
            <p className="mt-4"><strong>Solar input:</strong> a heat flux of 51,840 BTU/h applied to the center of the concrete layer over six hours of available sunlight, plus 413,831 BTU/day of passive solar gain through south-facing windows, modeled separately.</p>
            <p className="mt-4"><strong>Result:</strong> the fully solar-charged wall showed a 15% increase in overall heat loss compared to an unloaded wall (86.64 vs. 75.22 BTU/ft²/day) — loss more than offset by the fact that this energy was captured at all. Scaled to a 4,440 ft² whole-house wall area, baseline heat loss ran roughly 334,000 BTU/day against a total daily solar delivery (active and passive combined) of roughly 725,000 BTU/day — 91 kWh of active solar delivery alone.</p>
            <p className="mt-4"><strong>Agreement:</strong> the model matched the founder&apos;s own spreadsheet within 2% on the post-solar-loading heat-flux figure (86.64 vs. 84.72 BTU/ft²/day). An earlier baseline comparison had shown roughly 5% divergence, later traced to a convection-resistance term the spreadsheet had omitted — the kind of discrepancy independent review exists to catch.</p>
            <p className="mt-4">Dr. Field was explicit about scope: the model validates wall thermal storage and delivery only. It doesn&apos;t validate the solar collector system itself, doesn&apos;t model the floor as a storage element, doesn&apos;t account for radiative heat transfer or interior thermal mass like furniture, and doesn&apos;t model a control system. Because the floor is excluded, the model likely <em>under</em>-predicts TWT&apos;s real advantage — wall temperatures, and therefore heat loss, would run lower in practice if the floor were sharing the storage load.</p>
          </EngineeringDetail>

          <p className="mt-8 leading-7 font-medium text-twt-slate-gray">This report covers wall thermal storage only — it doesn&apos;t cover the collector-efficiency or heat-pump-efficiency figures used elsewhere on this page and the homepage. For the full accounting of what&apos;s modeled, independently checked, and still unmeasured, see <Link href="/evidence" className="font-extrabold text-twt-medium-navy underline decoration-twt-light-gray underline-offset-4 hover:text-twt-primary-orange">Evidence &amp; Validation</Link>.</p>
        </div>
      </section>

      <section id="open-questions" className="scroll-mt-16 px-[clamp(22px,5vw,84px)] py-[clamp(76px,8vw,128px)]">
        <div className="mx-auto max-w-[1480px]">
          <SectionHeading eyebrow="08 / Open questions" title="What the model doesn't answer yet" description="These are exactly what the planned validation testing is designed to resolve — some identified directly by the USI model's own stated scope, others coming from construction, control, and long-term performance questions the modeling doesn't touch at all." />
          <div className="mt-12 grid gap-px overflow-hidden bg-twt-light-gray sm:grid-cols-2 lg:grid-cols-3">
            {OPEN_QUESTIONS.map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Layers3;
              return (
                <article className="bg-white p-[clamp(24px,3vw,38px)]" key={title as string}>
                  <ItemIcon className="size-6 text-twt-blueprint-blue" strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-twt-deep-navy">{title as string}</h3>
                  <p className="mt-3 leading-7 font-medium text-twt-slate-gray">{text as string}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-12 border-t border-twt-light-gray pt-8">
            <p className="text-xs font-extrabold tracking-[0.15em] text-twt-primary-orange uppercase">Mechanism references</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["ASHRAE: Radiant heating and cooling", "https://handbook.ashrae.org/Handbooks/A23/IP/a23_ch55/a23_ch55_ip.aspx"],
                ["U.S. DOE: Thermal mass and passive design", "https://www.energy.gov/eere/buildings/zeb-technologies-passive-design-techniques"],
                ["ASTM C1363: Assembly hot-box testing", "https://store.astm.org/standards/c1363"],
              ].map(([label, href]) => (
                <a className="group inline-flex items-center gap-2 font-bold text-twt-medium-navy underline decoration-twt-light-gray underline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-focus" href={href} key={href} rel="noreferrer" target="_blank">{label}<ExternalLink className="size-4" aria-hidden="true" /></a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-orange px-[clamp(22px,5vw,84px)] py-[clamp(68px,7vw,104px)]">
        <div className="mx-auto max-w-[1480px]">
          <p className="text-sm font-extrabold tracking-[0.18em] text-twt-primary-orange uppercase">Where to go next</p>
          <h2 className="mt-4 max-w-[900px] text-[clamp(34px,3.8vw,58px)] leading-[1.08] font-extrabold tracking-[-0.04em] text-twt-deep-navy">The mechanism is the beginning. Measurement is the proof.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/research-partnership" className="group flex flex-col justify-between border-t-4 border-twt-blueprint-blue bg-white p-7 shadow-[0_10px_28px_rgba(3,26,61,0.06)] transition-transform hover:-translate-y-1">
              <div><h3 className="text-xl font-extrabold tracking-[-0.02em] text-twt-deep-navy">Researching or funding this?</h3><p className="mt-3 leading-6 font-medium text-twt-slate-gray">See the validation program, open research questions, and how to get involved.</p></div>
              <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-twt-medium-navy group-hover:text-twt-primary-orange">Research &amp; partnership<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
            <Link href="/future-applications" className="group flex flex-col justify-between border-t-4 border-twt-primary-orange bg-white p-7 shadow-[0_10px_28px_rgba(3,26,61,0.06)] transition-transform hover:-translate-y-1">
              <div><h3 className="text-xl font-extrabold tracking-[-0.02em] text-twt-deep-navy">Evaluating a partnership?</h3><p className="mt-3 leading-6 font-medium text-twt-slate-gray">See where this could go once validated — housing types, scale, and integration paths.</p></div>
              <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-twt-medium-navy group-hover:text-twt-primary-orange">Future applications<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
            <Link href="/evidence" className="group flex flex-col justify-between border-t-4 border-twt-medium-navy bg-white p-7 shadow-[0_10px_28px_rgba(3,26,61,0.06)] transition-transform hover:-translate-y-1">
              <div><h3 className="text-xl font-extrabold tracking-[-0.02em] text-twt-deep-navy">Want the proof, not the mechanism?</h3><p className="mt-3 leading-6 font-medium text-twt-slate-gray">Review what&apos;s established physics, founder-modeled, independently analyzed, and still unmeasured.</p></div>
              <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-twt-medium-navy group-hover:text-twt-primary-orange">Evidence &amp; validation<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
            <Link href="/resources" className="group flex flex-col justify-between border-t-4 border-twt-slate-gray bg-white p-7 shadow-[0_10px_28px_rgba(3,26,61,0.06)] transition-transform hover:-translate-y-1">
              <div><h3 className="text-xl font-extrabold tracking-[-0.02em] text-twt-deep-navy">Need a term defined?</h3><p className="mt-3 leading-6 font-medium text-twt-slate-gray">The full glossary and FAQ behind every technical term on this page.</p></div>
              <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-twt-medium-navy group-hover:text-twt-primary-orange">Resources &amp; glossary<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
