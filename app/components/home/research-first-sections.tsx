import Link from "next/link";
import styles from "./research-first-sections.module.css";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  FileBadge,
  Layers3,
  Thermometer,
} from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="twt-spec-label text-twt-primary-orange">{children}</p>;
}

export function CoreAndMechanismPreview() {
  return (
    <>
      <section className={`${styles.researchHero} twt-technical-grid-dark`}>
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Eyebrow>Core operating principle</Eyebrow>
            <h2 className="mt-5 max-w-[760px] text-[clamp(42px,5vw,76px)] leading-[1.01] font-extrabold tracking-[-0.055em]">
              Use the building itself as a low-temperature thermal surface.
            </h2>
            <p className="mt-7 max-w-[760px] text-[clamp(18px,1.45vw,23px)] leading-[1.6] font-medium text-twt-blue-white">
              TWT proposes to distribute hydronic heating and cooling through
              concrete walls and floors, using the structure&apos;s thermal mass
              and surface area instead of relying on a small, high-temperature
              heat-emitting surface.
            </p>
            <p className="mt-6 max-w-[720px] border-l-2 border-twt-primary-orange pl-5 text-base leading-7 font-semibold text-twt-blue-white">
              The proposed 65&ndash;75&deg;F range refers to wall operating
              temperature&mdash;not a guaranteed water temperature or measured
              whole-building outcome. It must be validated against climate,
              loads, controls, comfort, and moisture conditions.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
            {[
              [Thermometer, "65–75°F", "Proposed wall operating band"],
              [
                Layers3,
                "Large surface",
                "Walls and floors exchange heat with the room",
              ],
              [
                Droplets,
                "Hydronic loop",
                "Embedded tubing moves heat through the assembly",
              ],
              [
                CheckCircle2,
                "Measured next",
                "Performance requires a defined test method",
              ],
            ].map(([Icon, value, label]) => {
              const CardIcon = Icon as typeof Thermometer;
              return (
                <article
                  className="min-h-[205px] bg-twt-deep-navy p-7"
                  key={value as string}
                >
                  <CardIcon
                    className="size-9 text-twt-sky-blue"
                    strokeWidth={1.55}
                    aria-hidden="true"
                  />
                  <p className="mt-9 text-[clamp(26px,2.5vw,40px)] leading-none font-extrabold tracking-[-0.045em] text-white">
                    {value as string}
                  </p>
                  <p className="twt-spec-label mt-4 max-w-[230px] text-twt-blue-white">
                    {label as string}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.researchStructure}>
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="twt-technical-grid relative min-h-[410px] overflow-hidden border border-twt-light-gray bg-twt-pale-blue p-8 sm:min-h-[500px]">
              <div
                className="absolute inset-x-0 bottom-0 h-[38%] bg-twt-concrete-light"
                aria-hidden="true"
              />
              <div
                className="absolute top-[18%] right-[12%] bottom-[21%] left-[22%] border-[18px] border-twt-concrete bg-[#c7c6c0] shadow-[inset_0_0_0_1px_rgba(3,26,61,0.14)]"
                aria-hidden="true"
              >
                <div className="absolute inset-5 border-l-[14px] border-twt-light-blue bg-[#a8a8a2]" />
                <div className="twt-thermal-line absolute top-1/2 right-6 left-10 h-4 -translate-y-1/2 bg-twt-primary-orange shadow-[0_0_0_6px_rgba(255,90,0,0.15)]" />
                <div className="twt-thermal-line absolute top-[31%] right-6 left-10 h-4 bg-twt-blueprint-blue shadow-[0_0_0_6px_rgba(29,134,200,0.14)]" />
                <div className="twt-thermal-line absolute right-6 bottom-[31%] left-10 h-4 bg-twt-primary-orange shadow-[0_0_0_6px_rgba(255,90,0,0.15)]" />
              </div>
              <span className="absolute top-[11%] left-7 border-l-2 border-twt-blueprint-blue pl-3 text-xs font-extrabold tracking-[0.14em] text-twt-medium-navy uppercase">
                Exterior insulation
              </span>
              <span className="absolute right-7 bottom-[11%] border-r-2 border-twt-primary-orange pr-3 text-right text-xs font-extrabold tracking-[0.14em] text-twt-medium-navy uppercase">
                Concrete thermal mass
              </span>
              <span className="absolute top-1/2 left-7 -translate-y-1/2 border-l-2 border-twt-primary-orange pl-3 text-xs font-extrabold tracking-[0.14em] text-twt-medium-navy uppercase">
                Embedded tubing
              </span>
            </div>
            <p className="mt-3 text-xs leading-5 font-semibold text-twt-slate-gray">
              Simplified schematic. Full assembly detail is on How It Works.
            </p>
          </div>
          <div>
            <Eyebrow>Mechanism preview</Eyebrow>
            <h2 className="mt-5 text-[clamp(42px,4.5vw,68px)] leading-[1.03] font-extrabold tracking-[-0.05em] text-twt-deep-navy">
              Four elements. One integrated assembly.
            </h2>
            <p className="mt-6 max-w-[690px] text-[clamp(18px,1.35vw,22px)] leading-[1.62] font-medium text-twt-slate-gray">
              Exterior insulation reduces heat transfer to the outdoors.
              Concrete provides structural mass. Hydronic tubing distributes
              heating or cooling through that mass. A conductive interior
              surface exchanges energy with the occupied space.
            </p>
            <div className="mt-8 border-l-2 border-twt-primary-orange bg-twt-pale-orange p-6">
              <h3 className="text-xl font-extrabold tracking-[-0.025em] text-twt-deep-navy">
                Not just an ICF.
              </h3>
              <p className="mt-2 leading-7 font-medium text-twt-slate-gray">
                Insulated concrete forms are relevant construction precedent.
                TWT&apos;s blocks add lowered end and center webs so concrete
                can flow diagonally as well as vertically, and a pin-and-channel
                system locks exterior insulation and the finish fa&ccedil;ade in
                place. The research question is how that additional, integrated
                hydronic thermal-mass system performs&mdash;not whether ICFs
                work.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="group mt-9 inline-flex items-center gap-3 font-extrabold text-twt-medium-navy underline decoration-twt-light-gray underline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-focus"
            >
              Examine the complete assembly
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function ResearchAndCredibilityPreview() {
  return (
    <>
      <section className={styles.researchEvidence}>
        <div className="mx-auto max-w-[1480px]">
          <Eyebrow>Research & validation</Eyebrow>
          <div className="mt-5 grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <h2 className="text-[clamp(42px,4.6vw,70px)] leading-[1.03] font-extrabold tracking-[-0.05em] text-twt-deep-navy">
                The important questions are still open.
              </h2>
            </div>
            <p className="max-w-[680px] text-[clamp(18px,1.35vw,22px)] leading-[1.62] font-medium text-twt-slate-gray">
              That is exactly what a credible validation program should make
              visible: the hypotheses, instruments, comparison baseline, and
              limits required before a broader application can be responsibly
              considered.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Hypotheses",
                "Test how the proposed assembly responds to heating, cooling, thermal amelioration, night-sky radiant cooling, and different control strategies.",
              ],
              [
                "Instrumentation",
                "Track energy use, weather, surface and wall temperature, humidity, comfort, control-system behavior, and off-peak grid interaction.",
              ],
              [
                "Baseline",
                "Compare against a defined conventional assembly under stated operating assumptions.",
              ],
              [
                "Milestones",
                "Move from wall-assembly testing, to a fully instrumented demonstration building, to published seasonal performance data.",
              ],
            ].map(([title, text]) => (
              <article
                className="border-t-4 border-twt-blueprint-blue bg-white p-7 shadow-[0_10px_28px_rgba(3,26,61,0.06)]"
                key={title}
              >
                <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-twt-deep-navy">
                  {title}
                </h3>
                <p className="mt-3 leading-7 font-medium text-twt-slate-gray">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/research-partnership"
            className="group mt-9 inline-flex items-center gap-3 font-extrabold text-twt-medium-navy underline decoration-twt-light-gray underline-offset-4 hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-focus"
          >
            See the proposed research program
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <section className={styles.researchValidation}>
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Credentials & IP</Eyebrow>
            <h2 className="mt-5 text-[clamp(42px,4.4vw,66px)] leading-[1.04] font-extrabold tracking-[-0.05em] text-twt-deep-navy">
              Protect the idea. Test the outcome.
            </h2>
            <p className="mt-6 max-w-[665px] text-[clamp(18px,1.35vw,22px)] leading-[1.62] font-medium text-twt-slate-gray">
              TWT has a documented inventor history and an active patent record
              covering the block geometry and insulation-attachment system. That
              establishes origin and ownership&mdash;not performance.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="border-l-4 border-twt-primary-orange bg-twt-pale-orange p-8">
              <FileBadge
                className="size-10 text-twt-primary-orange"
                strokeWidth={1.55}
                aria-hidden="true"
              />
              <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em] text-twt-deep-navy">
                Patented design
              </h3>
              <p className="mt-3 leading-7 font-medium text-twt-slate-gray">
                United States, Canadian, and UK patent records identify the
                protected building-system concept, active in the U.S. through
                2039.
              </p>
            </article>
            <article className="border-l-4 border-twt-blueprint-blue bg-twt-soft-white p-8">
              <Layers3
                className="size-10 text-twt-blueprint-blue"
                strokeWidth={1.55}
                aria-hidden="true"
              />
              <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em] text-twt-deep-navy">
                Scope of protection
              </h3>
              <p className="mt-3 leading-7 font-medium text-twt-slate-gray">
                The patents cover the block&apos;s diagonal concrete flow and
                pin-and-channel insulation system&mdash;not the thermal or
                efficiency outcomes, which the evidence page tracks separately.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export function FutureApplicationsPreview() {
  return (
    <section className={styles.researchCta}>
      <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow>Future potential</Eyebrow>
          <h2 className="mt-5 text-[clamp(42px,4.5vw,68px)] leading-[1.03] font-extrabold tracking-[-0.05em]">
            Applications come after validation.
          </h2>
        </div>
        <div className="border-l-2 border-twt-primary-orange pl-6">
          <p className="text-[clamp(18px,1.35vw,22px)] leading-[1.62] font-medium text-twt-blue-white">
            Homes, affordable housing, campus facilities, community buildings,
            manufacturing, and grid-aware systems are possible research
            contexts&mdash;not current performance promises.
          </p>
          <Link
            href="/future-applications"
            className="group mt-7 inline-flex items-center gap-3 font-extrabold text-white underline decoration-twt-primary-orange underline-offset-4 hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-sky-blue"
          >
            Explore future applications
            <Building2
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
