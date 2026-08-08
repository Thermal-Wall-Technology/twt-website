import drawings from "./how-it-works-drawings.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  Flame,
  Gauge,
  Home,
  Layers3,
  MousePointer2,
  Settings2,
  Shield,
  Snowflake,
  Sun,
  Thermometer,
  Waves,
} from "lucide-react";
import { SectionNav } from "./section-nav";
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
const shell =
  "mx-auto w-[min(1360px,calc(100%-64px))] max-[900px]:w-[min(1360px,calc(100%-40px))] max-sm:w-[min(1360px,calc(100%-32px))]";
const label =
  "mb-2.5 text-[11px] font-black tracking-[0.1em] text-twt-primary-orange";
const heading =
  "m-0 leading-[1.07] font-extrabold tracking-[-0.05em] text-twt-deep-navy";
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
      className={`inline-flex items-center gap-[11px] border border-twt-medium-navy bg-white px-4 py-3 text-[11px] font-black text-twt-primary-navy no-underline ${primary ? "bg-twt-primary-navy text-white" : ""}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
function BuildingDiagram() {
  return (
    <div
      className={drawings.buildingDiagram}
      role="img"
      aria-label="Cutaway building with hydronic tubing embedded in its walls and floor"
    >
      <div className={drawings.callouts}>
        {[
          [Sun, "Energy source", "Solar, heat pump, ground loop, or grid."],
          [
            Settings2,
            "Heat exchanger",
            "Transfers energy to the hydronic loop.",
          ],
          [
            Gauge,
            "Controls & distribution",
            "Manages zones, temperatures, and timing.",
          ],
          [
            Layers3,
            "Thermal mass",
            "Walls and floor store energy in the concrete.",
          ],
          [
            Waves,
            "Radiant exchange",
            "Large interior surfaces deliver steady comfort.",
          ],
        ].map(([Icon, title, copy]) => {
          const CalloutIcon = Icon as typeof Sun;
          return (
            <p key={title as string}>
              <CalloutIcon />
              <b>{title as string}</b>
              <span>{copy as string}</span>
            </p>
          );
        })}
      </div>
      <div className={drawings.cutaway}>
        <div className={drawings.roof} />
        <div className={drawings.room}>
          <span className={drawings.window} />
          <span className={drawings.sofa} />
          <span className={drawings.wallLoop} />
          <span className={drawings.floorLoop} />
        </div>
        <div className={drawings.equipment}>
          <Settings2 />
        </div>
      </div>
    </div>
  );
}
function SystemDiagram() {
  return (
    <div
      className={drawings.systemDiagram}
      role="img"
      aria-label="Closed-loop Thermal Wall Technology system"
    >
      <div className={drawings.sources}>
        <Sun />
        <span>Heat pump</span>
        <span>Solar thermal</span>
        <span>Ground source loop</span>
      </div>
      <div className={drawings.systemArrow}>→</div>
      <div className={drawings.systemNode}>
        <Thermometer />
        <b>HEAT EXCHANGER</b>
        <small>Transfers energy to the hydronic loop.</small>
      </div>
      <div className={drawings.systemArrow}>→</div>
      <div className={drawings.systemNode}>
        <Settings2 />
        <b>CONTROLS & DISTRIBUTION</b>
        <small>Manages pumps, mixing valves, temperatures, and zones.</small>
      </div>
      <div className={drawings.systemArrow}>→</div>
      <div className={drawings.zoneBuilding}>
        <div className={drawings.zoneRoof} />
        <div className={drawings.zoneRoom}>
          <span className={drawings.orangeLoop} />
          <span className={drawings.blueLoop} />
          <b>CONTROLLED BUILDING ZONES</b>
          <small>Embedded hydronic tubing in wall and floor zones.</small>
        </div>
      </div>
      <div className={drawings.storage}>
        <Layers3 />
        <b>OPTIONAL THERMAL STORAGE</b>
        <small>Stores energy when immediate use is not required.</small>
      </div>
      <div className={drawings.returnLoop}>
        RETURN LOOP <span>←</span> Fluid returns to be reheated or cooled
      </div>
      <div className={drawings.legend}>
        <span /> Supply flow — energy delivered{" "}
        <span className={drawings.return} /> Return flow — fluid returning{" "}
        <span className={drawings.signal} /> Control signal — information
      </div>
    </div>
  );
}
export default function HowItWorks() {
  return (
    <main>
      <SectionNav />
      <section
        id="overview"
        className="bg-[linear-gradient(110deg,#fff_55%,#f7faff)] pt-12 pb-[35px]"
      >
        <div
          className={`${shell} grid grid-cols-[40%_60%] items-center max-[900px]:grid-cols-1`}
        >
          <div>
            <p className={label}>THE BIG IDEA</p>
            <h1 className={`${heading} text-[37px]`}>
              The building becomes
              <br />
              the heating, cooling,
              <br />
              and thermal-storage
              <br />
              system.
            </h1>
            <p className="max-w-[440px] text-[13px] leading-[1.65] font-semibold text-twt-primary-navy">
              Water carries energy into tubing embedded in the concrete walls
              and floor. The structure stores that energy and gradually
              exchanges it with the room. Exterior-only insulation keeps the
              concrete connected to the interior while limiting energy loss
              outdoors.
            </p>
            <div className="mt-[21px] flex gap-[14px] max-sm:grid">
              <Button href="/evidence" primary>
                Explore the evidence
              </Button>
              <Button href="/future-applications">
                See potential benefits
              </Button>
            </div>
          </div>
          <div className="max-[900px]:mt-[25px]">
            <BuildingDiagram />
          </div>
        </div>
      </section>
      <section
        id="assembly"
        className="border-t border-twt-light-gray py-[42px]"
      >
        <div
          className={`${shell} grid grid-cols-[210px_1fr] gap-[26px] max-[900px]:grid-cols-1`}
        >
          <div>
            <p className={label}>1. WHAT TWT PHYSICALLY IS</p>
            <h2 className={`${heading} text-[26px]`}>
              Four elements.
              <br />
              One integrated assembly.
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-sm:grid-cols-1">
            {assembly.map(([Icon, title, copy], i) => (
              <article
                className={`min-h-[170px] border border-twt-light-gray p-[17px] ${["bg-white", "bg-[#f7fbff]", "bg-[#f7fcf8]", "bg-[#fbfaff]"][i]}`}
                key={title}
              >
                <Icon
                  className={`w-[37px] ${["text-twt-primary-orange", "text-[#2875d8]", "text-[#378a56]", "text-[#7851c9]"][i]}`}
                />
                <h3 className="text-xs text-twt-deep-navy">{title}</h3>
                <p className="text-[10px] leading-[1.45] text-twt-slate-gray">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
        <details className="mx-auto mt-[15px] w-[min(1100px,calc(100%-64px))] border border-[#dce8f4] bg-[#f7fbff] p-[14px]">
          <summary className="flex cursor-pointer items-center justify-between max-sm:block">
            <span className="grid grid-cols-[28px_1fr] gap-x-2.5">
              <MousePointer2 className="row-span-2 w-[21px] text-twt-blueprint-blue" />
              <b className="text-[11px] text-twt-deep-navy">
                Patented construction detail
              </b>
              <small className="text-[10px] text-twt-slate-gray">
                Dry-stack insulated concrete blocks, continuous concrete-flow
                channels, protective grommets, and finish attachment create a
                monolithic, high-performance assembly.
              </small>
            </span>
            <em className="flex gap-2 text-[10px] font-extrabold not-italic text-twt-blueprint-blue">
              See construction details <ChevronDown />
            </em>
          </summary>
          <p className="pl-[38px] text-[11px] text-twt-slate-gray">
            Dry-stack ICB construction, continuous concrete-flow channels,
            positioning grommets, exterior finish attachment, and thermally
            conductive interior finishes work together as one integrated
            assembly.
          </p>
        </details>
      </section>
      <section
        id="why"
        className="border-t border-twt-light-gray bg-[#fcfdff] py-[42px]"
      >
        <div
          className={`${shell} grid grid-cols-[210px_1fr_220px] items-center gap-[25px] max-[900px]:grid-cols-1`}
        >
          <div className="max-[900px]:max-w-[500px]">
            <p className={label}>2. WHY IT WORKS</p>
            <h2 className={`${heading} text-[26px]`}>
              More surface.
              <br />
              Lower temperature.
            </h2>
            <p className="max-w-[440px] text-[13px] leading-[1.65] font-semibold text-twt-primary-navy">
              By using the entire building as the emitting and receiving
              surface, TWT operates at much lower temperatures while delivering
              the same comfort.
            </p>
            <Button href="#surface-detail">See surface-area detail</Button>
          </div>
          <div className="grid grid-cols-[1fr_45px_1fr] items-center">
            <article className="min-h-[210px] border border-twt-light-gray bg-[#f7faff] p-4 text-center text-twt-primary-navy">
              <b className="text-[10px]">TRADITIONAL SYSTEMS</b>
              <small className="m-[5px] block text-[9px] text-twt-slate-gray">
                Small surface. Higher temperature.
              </small>
              <div className={drawings.radiatorIcon}>♨</div>
              <strong className="text-xl text-twt-primary-orange">
                110–120°F
              </strong>
              <span className="m-[5px] block text-[9px] text-twt-slate-gray">
                Typical emitter temperature
              </span>
            </article>
            <i className="grid size-10 place-items-center rounded-full border border-twt-light-gray bg-white font-black not-italic">
              VS
            </i>
            <article className="min-h-[210px] border border-twt-light-gray bg-[#f7faff] p-4 text-center text-twt-primary-navy">
              <b className="text-[10px]">TWT WALLS & FLOOR</b>
              <small className="m-[5px] block text-[9px] text-twt-slate-gray">
                Building-scale surface. Lower temperature.
              </small>
              <div className={drawings.roomIcon}>
                <span />
              </div>
              <strong className="text-xl text-[#2470cf]">65–75°F</strong>
              <span className="m-[5px] block text-[9px] text-twt-slate-gray">
                Modeled operating range
              </span>
            </article>
          </div>
          <ul className="m-0 grid list-none gap-[15px] p-0 max-[900px]:grid-cols-3 max-sm:grid-cols-1">
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
              <li
                className="flex gap-2.5 border-b border-twt-light-gray py-3"
                key={title}
              >
                <Check className="w-5 shrink-0 text-[#30a55b]" />
                <p className="m-0 text-[10px] leading-[1.35] text-twt-slate-gray">
                  <b className="mb-[3px] block text-twt-deep-navy">{title}</b>
                  {copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="energy" className="border-t border-twt-light-gray py-[42px]">
        <div
          className={`${shell} grid grid-cols-[210px_1fr] gap-[26px] max-[900px]:grid-cols-1`}
        >
          <div>
            <p className={label}>3. HOW ENERGY MOVES</p>
            <h2 className={`${heading} text-[26px]`}>
              From the energy
              <br />
              source to the room.
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-[15px] max-[900px]:grid-cols-3 max-sm:grid-cols-1">
            {energy.map(([Icon, title, copy], i) => (
              <article
                className="relative text-center text-twt-primary-navy"
                key={title}
              >
                <Icon
                  className={`size-[66px] rounded-full border border-[#dce8f4] p-[18px] ${["text-twt-primary-orange", "text-twt-blueprint-blue", "text-[#398a55]", "text-[#7648c2]", "text-twt-primary-orange"][i]}`}
                />
                <b className="m-2 block text-xs text-twt-primary-orange">
                  {i + 1}
                </b>
                <h3 className="m-0 text-[10px] text-twt-deep-navy">{title}</h3>
                <p className="text-[9px] leading-[1.4] text-twt-slate-gray">
                  {copy}
                </p>
                {i < 4 && (
                  <ArrowRight className="absolute top-[31px] -right-[17px] w-5 text-[#7c91ad] max-sm:hidden" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="modes" className="border-t border-twt-light-gray py-[42px]">
        <div className={shell}>
          <p className={label}>4. HOW IT WORKS THROUGH THE SEASONS</p>
          <h2 className={`${heading} text-[26px]`}>
            One system. Three operating modes.
          </h2>
          <div className="mt-5 grid grid-cols-3 gap-5 max-sm:grid-cols-1">
            {modes.map(([Icon, title, copy, points, tone]) => {
              const color =
                tone === "warm"
                  ? "text-twt-primary-orange"
                  : tone === "solar"
                    ? "text-[#399558]"
                    : "text-[#2371d8]";
              return (
                <article
                  className={`border border-twt-light-gray p-5 ${tone === "solar" ? "bg-[#f8fcf8]" : tone === "cool" ? "bg-[#f7fbff]" : "bg-white"}`}
                  key={title}
                >
                  <Icon className={`w-[42px] ${color}`} />
                  <h3 className="my-[5px] text-[15px] text-twt-deep-navy">
                    {title}
                  </h3>
                  <p className="min-h-[30px] text-[10px] leading-[1.4] text-twt-slate-gray">
                    {copy}
                  </p>
                  <div className={`${drawings.houseLoop} ${drawings[tone]}`}>
                    <Home />
                    <Waves />
                  </div>
                  <ul className="my-[6px] list-none p-0">
                    {points.map((point) => (
                      <li
                        className="my-[6px] flex gap-[5px] text-[10px] text-twt-slate-gray"
                        key={point}
                      >
                        <Check className={`w-[13px] ${color}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="flex gap-[6px] text-[10px] font-black text-twt-primary-orange no-underline"
                    href="#overview"
                  >
                    Learn more <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="mt-[13px] flex items-center gap-2 border border-[#dce8f4] bg-[#f7fbff] p-2.5 text-[10px] text-twt-slate-gray">
            <Shield className="w-4 text-twt-blueprint-blue" /> Dew-point control
            is integrated into cooling operation to prevent condensation and
            protect indoor conditions.
          </p>
        </div>
      </section>
      <section id="system" className="bg-twt-deep-navy py-[55px] text-white">
        <div className={shell}>
          <p className="mb-2.5 text-[11px] font-black tracking-[0.1em] text-[#ff7b36]">
            5. THE FULL SYSTEM
          </p>
          <h2 className="m-0 text-[32px] leading-[1.07] font-extrabold tracking-[-0.05em]">
            One closed loop.
            <br />
            Every part working together.
          </h2>
          <p className="my-[13px] max-w-[700px] text-[13px] leading-[1.5] text-[#dce8f4]">
            TWT connects the energy source, heat exchanger, controls, thermal
            storage, and building zones into one coordinated hydronic system.
          </p>
          <p className="my-[13px] max-w-[700px] text-[13px] leading-[1.5] text-[#dce8f4]">
            Energy can be directed where it is most useful—immediately to the
            building, into reserve storage, or through individually controlled
            zones.
          </p>
          <SystemDiagram />
          <blockquote className="mt-8 max-w-[690px] border-l-2 border-twt-primary-orange pl-[18px] text-[16px] leading-[1.35] font-bold">
            TWT is not one device added to a building.
            <br />
            <br />
            It is a coordinated hydronic system that uses the concrete structure
            to receive, store, distribute, and release thermal energy.
          </blockquote>
        </div>
      </section>
      <section className="bg-[#fff4ed] py-8">
        <div
          className={`${shell} flex items-center justify-between gap-[30px] max-[900px]:flex-col max-[900px]:items-start`}
        >
          <h2 className={`${heading} text-[22px]`}>Ready to go deeper?</h2>
          <div className="flex flex-wrap gap-[14px]">
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
