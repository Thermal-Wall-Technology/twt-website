import Image from "next/image";
import Link from "next/link";
import { EvidenceSection } from "./components/home/evidence-section";
import {
  CoreAndMechanismPreview,
  FutureApplicationsPreview,
  ResearchAndCredibilityPreview,
} from "./components/home/research-first-sections";
import { Reveal } from "./components/motion/reveal";
import {
  ArrowRight,
  CircleCheckBig,
  Construction,
  FileBadge,
  DollarSign,
  Landmark,
  Leaf,
  Shield,
  Thermometer,
  TrendingUp,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Thermometer,
    text: "Ancient Thermal Wisdom, reengineered for modern construction.",
  },
  {
    icon: Landmark,
    text: "Patented Technology engineered to reduce heating and cooling costs to a small fraction of conventional systems",
  },
  {
    icon: Shield,
    text: "Hurricane Resilient Homes, that are stronger, healthier, lower-maintainence, and built to last for generations",
  },
  {
    icon: Leaf,
    text: "Affordable, Resilient and energy-efficient — the next evolution toward sustainable human shelter.",
  },
] as const;
const PROBLEM_ITEMS = [
  "Energy costs are rising as global demand grows and natural resources decline.",
  "Traditional insulation has reached a hard limit—extra inches no longer yield economic returns.",
  "Conventional systems operate at 110\u2013120\u00b0F because they heat through a limited surface area\u2014making savings prohibitively expensive.",
] as const;

const SOLUTION_ITEMS = [
  "TWT turns your walls and floors into active heating and cooling surfaces—delivering even, whisper-quiet comfort at a fraction of the operating cost.",
  "The proposed wall operating range is 65\u201375\u00b0F.",
  "The system hypothesis requires validation for each climate, building, control strategy, and comfort condition.",
] as const;
export default function Home() {
  return (
    <main>
      <section
        className="relative isolate min-h-svh overflow-hidden bg-twt-primary-white"
        aria-labelledby="hero-title"
      >
        <Image
          className="z-[-2] object-cover object-center max-[760px]:object-[63%_center]"
          src="/home/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[-1] hidden bg-white/[0.78] max-[760px]:block"
          aria-hidden="true"
        />

        <div className="grid min-h-svh w-full grid-cols-[41.5%_58.5%] items-start px-[clamp(32px,4.7vw,80px)] py-[clamp(30px,3.2vw,54px)] max-[1050px]:grid-cols-[39%_61%] max-[1050px]:px-8 max-[760px]:grid-cols-1 max-[760px]:gap-2 max-[760px]:px-5 max-[760px]:pt-6 max-[760px]:pb-12">
          <div className="flex justify-start max-[760px]:justify-center">
            <Image
              className="-ml-[1.1vw] h-auto w-[min(38vw,635px)] object-contain max-[1050px]:w-[39vw] max-[760px]:-mt-[4vw] max-[760px]:-mb-[8vw] max-[760px]:ml-0 max-[760px]:w-[min(78vw,430px)]"
              src="/home/logo.png"
              alt="Thermal Wall Technology - Merging the Past, the Present, to Forge the Future"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 760px) 78vw, 39vw"
            />
          </div>

          <div className="pt-[clamp(13px,1.2vw,20px)] max-[760px]:pt-0">
            <h1
              id="hero-title"
              className="m-0 flex flex-col text-[clamp(48px,4.65vw,78px)] leading-[1.08] font-extrabold tracking-[-0.045em] text-twt-deep-navy max-[1050px]:text-[clamp(42px,4.7vw,54px)] max-[760px]:items-center max-[760px]:text-center max-[760px]:text-[clamp(39px,11vw,62px)]"
            >
              <span className="block whitespace-nowrap max-[760px]:whitespace-normal">
                A New Foundation
              </span>
              <span className="block whitespace-nowrap max-[760px]:whitespace-normal">
                for{" "}
                <strong className="inline font-inherit text-twt-primary-orange">
                  Sustainable
                </strong>
              </span>
              <strong className="block whitespace-nowrap font-inherit text-twt-primary-orange max-[760px]:whitespace-normal">
                Human Shelter
              </strong>
            </h1>

            <div className="mt-[clamp(28px,3vw,50px)] grid max-w-[760px] gap-[clamp(19px,2vw,33px)] max-[760px]:mx-auto max-[760px]:mt-8 max-[760px]:gap-5">
              {BENEFITS.map(({ icon: Icon, text }) => (
                <div
                  className="grid grid-cols-[clamp(52px,4.15vw,70px)_2px_1fr] items-center gap-x-[clamp(16px,1.35vw,23px)] max-[760px]:grid-cols-[52px_2px_1fr] max-[760px]:gap-x-3.5"
                  key={text}
                >
                  <span className="grid aspect-square w-[clamp(52px,4.15vw,70px)] place-items-center rounded-full bg-twt-deep-navy text-twt-primary-white">
                    <Icon
                      aria-hidden="true"
                      className="size-[48%]"
                      strokeWidth={1.8}
                    />
                  </span>
                  <span
                    className="min-h-[58px] w-0.5 self-stretch bg-twt-primary-orange"
                    aria-hidden="true"
                  />
                  <p className="m-0 text-[clamp(18px,1.45vw,25px)] leading-[1.28] font-[650] tracking-[-0.025em] text-twt-deep-navy max-[1050px]:text-[clamp(16px,1.7vw,20px)] max-[760px]:text-[clamp(16px,4.6vw,19px)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="twt-technical-grid min-h-svh bg-twt-primary-white px-[clamp(32px,4vw,68px)] py-[clamp(72px,8.5vw,150px)]"
        aria-label="The problem and TWT solution"
      >
        <div className="mx-auto grid min-h-[650px] max-w-[1540px] grid-cols-2 divide-x divide-twt-light-gray max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:divide-x-0 max-[900px]:divide-y">
          <article
            id="problem"
            className="flex flex-col pr-[clamp(38px,4.5vw,76px)] max-[900px]:pr-0 max-[900px]:pb-16"
          >
            <h2 className="m-0 text-[clamp(42px,3.35vw,58px)] leading-none font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              The Problem
            </h2>
            <p className="mt-8 text-[clamp(24px,1.75vw,31px)] leading-[1.15] font-bold tracking-[-0.025em] text-twt-primary-orange">
              Rising Energy Costs and the Limits of Insulation
            </p>

            <div className="mt-[clamp(48px,4.2vw,72px)] grid grid-cols-[clamp(180px,14vw,236px)_1fr] items-center gap-[clamp(34px,4vw,68px)] max-[1200px]:grid-cols-[160px_1fr] max-[900px]:grid-cols-1">
              <div className="relative grid aspect-square w-[clamp(180px,14vw,236px)] place-items-center rounded-full bg-twt-deep-navy shadow-[0_12px_20px_rgba(3,26,61,0.18)] max-[1200px]:w-40 max-[900px]:mx-auto max-[900px]:w-44">
                <TrendingUp
                  className="absolute left-[16%] top-[20%] size-[58%] text-twt-primary-orange"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <DollarSign
                  className="absolute right-[14%] bottom-[17%] size-[31%] text-twt-primary-orange"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </div>

              <ul className="grid gap-[clamp(28px,2.8vw,48px)]">
                {PROBLEM_ITEMS.map((item) => (
                  <li
                    className="grid grid-cols-[18px_1fr] gap-6 text-[clamp(19px,1.45vw,25px)] leading-[1.55] font-medium tracking-[-0.025em] text-twt-deep-navy max-[1100px]:gap-4"
                    key={item}
                  >
                    <span
                      className="mt-[0.48em] size-[18px] rounded-full bg-twt-primary-orange"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/evidence"
              className="group mt-auto inline-flex w-fit items-center gap-7 pt-14 text-[clamp(20px,1.35vw,24px)] font-bold text-twt-medium-navy outline-offset-8 transition-colors hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus max-[900px]:mt-10 max-[900px]:pt-0"
            >
              See the evidence
              <ArrowRight
                className="size-8 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </article>

          <article
            id="technology"
            className="flex flex-col pl-[clamp(38px,4.5vw,76px)] max-[900px]:pt-16 max-[900px]:pl-0"
          >
            <h2 className="m-0 text-[clamp(42px,3.35vw,58px)] leading-none font-extrabold tracking-[-0.045em] text-twt-deep-navy">
              The Solution
            </h2>
            <p className="mt-8 text-[clamp(24px,1.75vw,31px)] leading-[1.15] font-bold tracking-[-0.025em] text-twt-primary-orange">
              Lower Temperature. Higher Efficiency.
            </p>

            <div className="mt-[clamp(48px,4.2vw,72px)] grid grid-cols-[1fr_clamp(180px,13vw,220px)] items-center gap-[clamp(34px,3vw,56px)] max-[1200px]:grid-cols-[1fr_160px] max-[900px]:grid-cols-1">
              <ul className="grid gap-[clamp(28px,2.8vw,48px)]">
                {SOLUTION_ITEMS.map((item) => (
                  <li
                    className="grid grid-cols-[38px_1fr] gap-6 text-[clamp(19px,1.45vw,25px)] leading-[1.55] font-medium tracking-[-0.025em] text-twt-deep-navy max-[1100px]:gap-4"
                    key={item}
                  >
                    <CircleCheckBig
                      className="mt-1 size-[38px] fill-twt-medium-navy text-twt-primary-white"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid aspect-square w-[clamp(180px,13vw,220px)] place-items-center rounded-full bg-[linear-gradient(135deg,var(--twt-primary-orange),#ff3d00)] text-twt-primary-white ring-1 ring-twt-light-orange ring-offset-6 ring-offset-twt-primary-white max-[1200px]:w-40 max-[900px]:order-first max-[900px]:mx-auto max-[900px]:w-44">
                <Thermometer
                  className="size-[58%]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
            </div>

            <Link
              href="/how-it-works"
              className="group mt-auto inline-flex w-fit items-center gap-7 pt-14 text-[clamp(20px,1.35vw,24px)] font-bold text-twt-medium-navy outline-offset-8 transition-colors hover:text-twt-primary-orange focus-visible:outline-2 focus-visible:outline-twt-focus max-[900px]:mt-10 max-[900px]:pt-0"
            >
              Explore the technology
              <ArrowRight
                className="size-8 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </article>
        </div>
      </section>
      <Reveal>
        <CoreAndMechanismPreview />
      </Reveal>
      <Reveal>
        <EvidenceSection />
      </Reveal>
      <Reveal>
        <ResearchAndCredibilityPreview />
      </Reveal>
      <section
        id="about"
        className="relative isolate min-h-svh overflow-hidden bg-twt-primary-white px-[clamp(28px,5vw,84px)] py-[clamp(64px,5.5vw,96px)]"
        aria-labelledby="about-title"
      >
        <Image
          className="z-[-1] object-cover object-center"
          src="/home/about/about-bg.png"
          alt=""
          fill
          sizes="100vw"
        />

        <div className="mx-auto grid min-h-[760px] max-w-[1320px] grid-cols-[40%_60%] items-center gap-[clamp(48px,5vw,84px)] max-[900px]:min-h-0 max-[900px]:grid-cols-1">
          <div className="relative mx-auto aspect-[0.68] w-[min(32vw,480px)] rounded-[34px] border-[3px] border-twt-deep-navy bg-twt-primary-white p-3 shadow-[0_14px_26px_rgba(3,26,61,0.22)] max-[900px]:w-[min(78vw,460px)]">
            <div className="relative size-full overflow-hidden rounded-[23px]">
              <Image
                className="object-cover object-center"
                src="/home/about/about-face.png"
                alt="Michael Sandefur, inventor of Thermal Wall Technology"
                fill
                sizes="(max-width: 900px) 78vw, 32vw"
              />
            </div>

            <span
              className="absolute -top-1 left-7 h-2 w-[44%] rounded-full bg-twt-deep-navy"
              aria-hidden="true"
            />
            <span
              className="absolute -top-1 right-5 h-1 w-[48%] rounded-full bg-twt-primary-orange"
              aria-hidden="true"
            />
            <span
              className="absolute -right-1 top-7 h-[43%] w-1 rounded-full bg-twt-primary-orange"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 right-5 h-2 w-[22%] rounded-full bg-twt-primary-orange"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 left-7 h-2 w-[58%] rounded-full bg-twt-deep-navy"
              aria-hidden="true"
            />
          </div>

          <div className="max-[900px]:text-center">
            <h2
              id="about-title"
              className="m-0 text-[clamp(54px,5vw,84px)] leading-[0.98] font-extrabold tracking-[-0.055em] text-twt-deep-navy"
            >
              Michael <span className="text-twt-primary-orange">Sandefur</span>
            </h2>

            <p className="mt-7 text-[clamp(24px,1.9vw,32px)] leading-[1.18] font-bold tracking-[-0.035em] text-twt-deep-navy">
              Inventor &amp; Patent Holder, Thermal Wall Technology
            </p>
            <span
              className="mt-4 block h-0.5 w-20 bg-twt-primary-orange max-[900px]:mx-auto"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-[760px] text-[clamp(19px,1.48vw,25px)] leading-[1.48] font-medium tracking-[-0.025em] text-twt-deep-navy max-[900px]:mx-auto">
              Michael Sandefur invented Thermal Wall Technology while building
              a tornado-safe room addition for a family member using insulated
              concrete forms. Embedding hydronic tubing in the concrete to
              qualify for a state solar-energy incentive, he began asking what
              would happen if the wall&apos;s thermal mass could communicate
              directly with the room instead of staying sealed behind interior
              insulation. Years of heat-loss calculations on later projects led
              to the current patented design.
            </p>
            <p className="mt-4 max-w-[760px] text-[clamp(17px,1.2vw,20px)] leading-[1.5] font-medium text-twt-slate-gray max-[900px]:mx-auto">
              Independent of TWT, Sandefur holds twelve patents spanning
              building and energy technologies, security and drone systems,
              pollution abatement, and industrial equipment, and has worked as
              an Executive Project Manager directing projects valued at more
              than $100 million.
            </p>

            <div className="mt-[clamp(36px,3.5vw,58px)] grid max-w-[620px] grid-cols-2 gap-6 max-[900px]:mx-auto max-[620px]:grid-cols-1">
              <div className="flex min-h-[126px] items-center gap-5 rounded-2xl border-2 border-twt-medium-navy bg-white/90 px-5 py-4 shadow-[0_8px_16px_rgba(3,26,61,0.12)]">
                <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-twt-deep-navy text-twt-primary-white">
                  <FileBadge
                    className="size-[54%]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="h-[76px] w-0.5 shrink-0 bg-twt-primary-orange"
                  aria-hidden="true"
                />
                <span className="text-left">
                  <strong className="block text-[clamp(38px,3vw,52px)] leading-none font-extrabold tracking-[-0.04em] text-twt-primary-orange">
                    12
                  </strong>
                  <span className="mt-1 block text-[clamp(18px,1.3vw,22px)] font-bold text-twt-deep-navy">
                    Patents
                  </span>
                </span>
              </div>

              <div className="flex min-h-[126px] items-center gap-5 rounded-2xl border-2 border-twt-medium-navy bg-white/90 px-5 py-4 shadow-[0_8px_16px_rgba(3,26,61,0.12)]">
                <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-twt-deep-navy text-twt-primary-white">
                  <Construction
                    className="size-[54%]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="h-[76px] w-0.5 shrink-0 bg-twt-primary-orange"
                  aria-hidden="true"
                />
                <span className="text-left">
                  <strong className="block whitespace-nowrap text-[clamp(34px,2.7vw,48px)] leading-none font-extrabold tracking-[-0.04em] text-twt-primary-orange">
                    $100M+
                  </strong>
                  <span className="mt-1 block text-[clamp(17px,1.2vw,21px)] leading-tight font-bold text-twt-deep-navy">
                    Projects Managed
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reveal>
        <FutureApplicationsPreview />
      </Reveal>
    </main>
  );
}
