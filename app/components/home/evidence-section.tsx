import styles from "./evidence-section.module.css";
import {
  ArrowRight,
  BookOpenCheck,
  Calculator,
  FileBadge,
  FlaskConical,
  University,
} from "lucide-react";

const EVIDENCE_STEPS = [
  {
    number: "01",
    label: "Established foundation",
    title: "Building-science principles",
    description:
      "Heat transfer, thermal storage in concrete, exterior insulation, and hydronic radiant exchange are established principles. ICF research provides relevant construction precedent\u2014not proof of TWT performance.",
    icon: BookOpenCheck,
    accent: "bg-twt-medium-navy",
    iconStyle: "bg-twt-pale-blue text-twt-medium-navy",
  },
  {
    number: "02",
    label: "Founder-modeled",
    title: "Defined thermal scenarios",
    description:
      "Founder calculations modeled heat loss, insulation placement, and stored energy\u2014projecting a 39\u201360% heat-pump efficiency gain and a 69% solar-thermal collector efficiency gain from the lower 65\u201375\u00b0F operating range.",
    icon: Calculator,
    accent: "bg-twt-blueprint-blue",
    iconStyle: "bg-twt-light-blue text-twt-medium-navy",
  },
  {
    number: "03",
    label: "Independently analyzed",
    title: "USI engineering analysis",
    description:
      "A 2016 University of Southern Indiana thermal-wall model achieved 98% agreement with the founder model on the relevant calculation, and a separate USI heat-pump efficiency analysis independently supported the 39\u201360% modeled gain.",
    icon: University,
    accent: "bg-twt-primary-navy",
    iconStyle: "bg-twt-blue-white text-twt-primary-navy",
  },
  {
    number: "04",
    label: "Not yet field-measured",
    title: "Whole-building validation",
    description:
      "Seasonal energy use, 65\u201375\u00b0F operation, integrated solar and controls, and whole-building cost performance still require prototype testing.",
    icon: FlaskConical,
    accent: "bg-twt-primary-orange",
    iconStyle: "bg-twt-pale-orange text-twt-primary-orange",
  },
] as const;

export function EvidenceSection() {
  return (
    <section
      id="evidence"
      className={`${styles.evidenceSection} twt-technical-grid`}
      aria-labelledby="evidence-title"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(to_right,rgba(29,134,200,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,134,200,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1480px]">
        <header className="mx-auto max-w-[1040px] text-center">
          <p className="m-0 text-sm font-extrabold tracking-[0.22em] text-twt-primary-orange uppercase sm:text-base">
            04 / Evidence
          </p>
          <h2
            id="evidence-title"
            className="mt-4 text-[clamp(42px,4.5vw,72px)] leading-[1.02] font-extrabold tracking-[-0.05em] text-twt-deep-navy"
          >
            What we know.{" "}
            <span className="text-twt-primary-orange">
              What we&apos;re testing.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[900px] text-[clamp(18px,1.45vw,24px)] leading-[1.55] font-medium tracking-[-0.02em] text-twt-slate-gray">
            TWT combines established building science, inventor-developed
            modeling, and independent engineering analysis. Whole-building
            performance has not yet been field-measured.
          </p>
        </header>

        <div className="relative mt-[clamp(56px,6vw,92px)]">
          <div
            className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-twt-light-gray xl:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {EVIDENCE_STEPS.map(
              ({
                number,
                label,
                title,
                description,
                icon: Icon,
                accent,
                iconStyle,
              }) => (
                <li className="flex" key={number}>
                  <article className="group relative flex w-full flex-col overflow-hidden border border-twt-light-gray bg-white px-[clamp(22px,2vw,30px)] pt-8 pb-9 shadow-[0_12px_30px_rgba(3,26,61,0.06)] transition-transform duration-300 hover:-translate-y-1">
                    <span
                      className={"absolute inset-x-0 top-0 h-1.5 " + accent}
                      aria-hidden="true"
                    />
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={
                          "relative z-10 grid size-16 place-items-center rounded-full ring-8 ring-white " +
                          iconStyle
                        }
                      >
                        <Icon
                          className="size-8"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-mono text-sm font-bold tracking-[0.16em] text-twt-slate-gray">
                        {number}
                      </span>
                    </div>
                    <p className="twt-spec-label mt-7 w-fit border border-twt-light-gray bg-twt-soft-white px-2.5 py-1.5 text-twt-medium-navy">
                      {label}
                    </p>
                    <h3 className="mt-4 text-[clamp(23px,1.65vw,28px)] leading-[1.12] font-extrabold tracking-[-0.035em] text-twt-deep-navy">
                      {title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.6] font-medium text-twt-text-dark">
                      {description}
                    </p>
                  </article>
                </li>
              ),
            )}
          </ol>
        </div>

        <div className="mt-[clamp(34px,4vw,56px)] grid overflow-hidden rounded-[10px] border border-twt-light-gray bg-white shadow-[0_14px_36px_rgba(3,26,61,0.07)] lg:grid-cols-[1fr_auto]">
          <div className="grid gap-6 px-[clamp(24px,3vw,44px)] py-7 sm:grid-cols-2 sm:divide-x sm:divide-twt-light-gray">
            <div className="flex gap-4 sm:pr-6">
              <FileBadge
                className="mt-0.5 size-7 shrink-0 text-twt-primary-orange"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <p className="text-[15px] leading-[1.55] font-medium text-twt-text-dark">
                <strong className="block font-extrabold text-twt-deep-navy">
                  Patents establish intellectual property.
                </strong>
                They are intentionally kept separate from performance evidence.
              </p>
            </div>
            <div className="flex gap-4 sm:pl-6">
              <FlaskConical
                className="mt-0.5 size-7 shrink-0 text-twt-blueprint-blue"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <p className="text-[15px] leading-[1.55] font-medium text-twt-text-dark">
                <strong className="block font-extrabold text-twt-deep-navy">
                  Modeled results are not measurements.
                </strong>
                Each claim is labeled by evidence type and current validation
                status.
              </p>
            </div>
          </div>
          <a
            href="/evidence"
            className="group flex min-h-24 items-center justify-center gap-5 bg-twt-deep-navy px-[clamp(28px,3vw,48px)] py-6 text-center text-lg font-bold text-white outline-offset-[-5px] transition-colors hover:bg-twt-medium-navy focus-visible:outline-2 focus-visible:outline-twt-sky-blue"
          >
            Review evidence &amp; methodology
            <ArrowRight
              className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
