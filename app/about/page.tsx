import drawings from "./about-drawings.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Quote, ShieldCheck } from "lucide-react";
import { aboutContent as c } from "./aboutPageContent";

const shell =
  "mx-auto w-[min(1360px,calc(100%-64px))] max-[900px]:w-[min(1360px,calc(100%-40px))] max-sm:w-[min(1360px,calc(100%-32px))]";
const label =
  "mb-2.5 text-[11px] font-black tracking-[0.1em] text-twt-primary-orange";
const heading =
  "m-0 leading-[1.05] font-extrabold tracking-[-0.055em] text-twt-deep-navy";

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
      className={`inline-flex items-center gap-[9px] border px-[15px] py-3 text-[11px] font-black no-underline max-sm:justify-center ${primary ? "border-twt-primary-orange bg-twt-primary-orange text-white" : "border-twt-medium-navy bg-white text-twt-primary-navy"}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

function OriginVisual() {
  return (
    <div
      className={drawings.originVisual}
      role="img"
      aria-label="Technical rendering of a concrete residential structure with embedded orange and blue hydronic tubing"
    >
      <div className={drawings.originRoof} />
      <div className={drawings.originWall}>
        <i />
        <i />
        <b />
        <b />
        <span />
      </div>
      <div className={drawings.originFoundation} />
    </div>
  );
}

function AssemblyVisual() {
  return (
    <div
      className={drawings.assemblyVisual}
      role="img"
      aria-label="Integrated thermal wall assembly with concrete, exterior insulation, and embedded tubing"
    >
      <div className={drawings.aInsulation} />
      <div className={drawings.aConcrete}>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={drawings.aFinish} />
      <div className={drawings.aControl}>■</div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-twt-deep-navy py-12 text-white max-sm:py-[33px]">
        <div className={drawings.heroArtwork} aria-hidden="true" />
        <div
          className={`${shell} relative grid grid-cols-[1.2fr_0.8fr] items-center gap-[55px] max-[900px]:grid-cols-1`}
        >
          <div>
            <p className={label}>{c.hero.eyebrow}</p>
            <h1 className="m-0 text-[40px] leading-[1.05] font-extrabold tracking-[-0.055em] text-white max-sm:text-[33px]">
              {c.hero.title.slice(0, 2).map((part) => (
                <span className="block" key={part}>
                  {part}
                </span>
              ))}
              <span className="block text-twt-primary-orange">
                {c.hero.title[2]}
              </span>
            </h1>
            <p className="max-w-[610px] text-[13px] leading-[1.55] font-semibold text-[#eef6ff]">
              {c.hero.body}
            </p>
            <div className="my-[19px] grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {c.hero.proofs.map((proof, index) => (
                <article
                  className="flex gap-2 border-r border-[#4b6080] pr-[9px] text-[10px] leading-[1.35] last:border-0 max-sm:border-r-0 max-sm:border-b max-sm:pb-2"
                  key={proof}
                >
                  <ShieldCheck className="w-[26px] shrink-0" />
                  <span className="grid gap-[3px]">
                    <b className="text-twt-primary-orange">0{index + 1}</b>
                    {proof}
                  </span>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-[13px] max-sm:grid">
              <Button href="#story" primary>
                Explore the development story
              </Button>
              <Button href="/evidence">View the patent & evidence</Button>
            </div>
          </div>
          <aside className="border border-[#385275] bg-twt-primary-navy p-2 max-[900px]:max-w-[520px]">
            <div className="relative h-[215px] overflow-hidden max-sm:h-[235px]">
              <Image
                src="/home/about/about-face.png"
                alt="Michael Sandefur, founder and inventor of Thermal Wall Technology"
                fill
                priority
                sizes="(max-width:900px) 90vw, 35vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <p className={`${label} mt-2.5 text-[10px]`}>FOUNDER & INVENTOR</p>
            <h2 className="m-0 text-lg text-white">Michael Sandefur</h2>
            <p className="m-0 text-right font-[cursive] text-2xl italic text-twt-blueprint-blue">
              Michael Sandefur
            </p>
          </aside>
        </div>
      </section>

      <section id="story" className="py-[43px]">
        <div
          className={`${shell} grid grid-cols-[0.7fr_1.3fr] items-start gap-12 max-[900px]:grid-cols-1 max-sm:gap-[25px]`}
        >
          <OriginVisual />
          <div>
            <p className={label}>1. THE STORY BEHIND TWT</p>
            <h2 className={`${heading} text-[26px]`}>
              From a family mission to a<br />
              structural thermodynamic breakthrough.
            </h2>
            <div className="text-[14px] leading-[1.5] text-twt-deep-navy [&>p]:mb-[15px] [&>p]:mt-0 [&>p:first-child::first-letter]:text-twt-primary-orange">
              {c.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="relative mt-6 border border-[#ffb28d] py-[18px] pr-[115px] pl-20 text-twt-deep-navy max-sm:px-[18px] max-sm:pt-[60px]">
              <Quote className="absolute top-5 left-5 size-[42px] fill-twt-primary-orange text-twt-primary-orange" />
              <p className="m-0 text-[19px] leading-[1.35] font-extrabold">
                “The question was never whether concrete could store heat.
                <br />
                The question was whether a building could be designed
                <br />
                to use that ability deliberately.”
              </p>
              <footer className="mt-4 grid text-[11px]">
                <b>— Michael Sandefur</b>
                <span className="mt-[3px]">
                  Founder and Inventor, Thermal Wall Technology
                </span>
              </footer>
              <em className="absolute right-5 bottom-[19px] font-[cursive] text-xl not-italic text-[#185ac6] max-sm:static max-sm:mt-3 max-sm:block max-sm:text-right">
                Michael Sandefur
              </em>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-t border-twt-light-gray bg-[#fbfdff] py-[43px]">
        <div className={shell}>
          <p className={label}>2. FROM INSIGHT TO PATENTED SYSTEM</p>
          <h2 className={`${heading} text-[26px]`}>
            A decade of focused development.
          </h2>
          <div className="relative mt-[25px] grid grid-cols-6 gap-3 before:absolute before:top-[27px] before:right-[4%] before:left-[4%] before:border-t before:border-twt-primary-navy max-[900px]:grid-cols-3 max-[900px]:before:hidden max-sm:grid-cols-1 max-sm:border-l max-sm:border-twt-primary-navy max-sm:pl-5">
            {c.milestones.map(([Icon, title, text], index) => (
              <article
                className="relative pt-[7px] max-sm:pl-[50px]"
                key={title}
              >
                <span className="relative z-1 grid size-[43px] place-items-center rounded-full bg-twt-deep-navy text-white max-sm:absolute max-sm:-left-[42px]">
                  <Icon className="size-[21px]" />
                </span>
                <b className="mt-2.5 block text-[10px] text-twt-primary-orange">
                  0{index + 1}
                </b>
                <h3 className="my-1 text-xs text-twt-deep-navy">{title}</h3>
                <p className="m-0 text-[10px] leading-[1.4] text-twt-slate-gray">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-twt-light-gray py-[43px]">
        <div className={shell}>
          <p className={label}>3. THE SYSTEM IN ONE ASSEMBLY</p>
          <h2 className={`${heading} text-[26px]`}>
            One assembly. Multiple jobs.
          </h2>
          <div className="my-[22px] grid grid-cols-[0.72fr_1.35fr_0.93fr] items-center gap-6 max-[900px]:grid-cols-1">
            <div className="grid max-[900px]:grid-cols-2 max-sm:grid-cols-1">
              {c.assembly.slice(0, 2).map(([title, copy]) => (
                <article
                  className="relative border-b border-twt-light-gray px-5 py-3 text-right max-[900px]:text-left max-sm:px-0"
                  key={title}
                >
                  <h3 className="m-0 text-xs text-twt-deep-navy">{title}</h3>
                  <p className="mt-[5px] mb-0 text-[10px] leading-[1.35] text-twt-slate-gray">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
            <div className="max-[900px]:order-first">
              <AssemblyVisual />
            </div>
            <div className="grid max-[900px]:grid-cols-2 max-sm:grid-cols-1">
              {c.assembly.slice(2).map(([title, copy]) => (
                <article
                  className="relative border-b border-twt-light-gray px-5 py-3 max-sm:px-0"
                  key={title}
                >
                  <h3 className="m-0 text-xs text-twt-deep-navy">{title}</h3>
                  <p className="mt-[5px] mb-0 text-[10px] leading-[1.35] text-twt-slate-gray">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <Button href="/how-it-works" primary>
            See how the complete system works
          </Button>
        </div>
      </section>

      <section className="bg-[#fcfdff] py-[43px]">
        <div
          className={`${shell} grid grid-cols-[0.75fr_1.25fr] items-center gap-[42px] max-[900px]:grid-cols-1`}
        >
          <div className="relative h-[300px] overflow-hidden">
            <Image
              src="/home/evidence/wood.png"
              alt="Engineering notebook and construction material detail"
              fill
              sizes="(max-width:900px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className={label}>4. THE INVENTOR BEHIND THE SYSTEM</p>
            <h2 className={`${heading} text-[26px]`}>
              A builder. An inventor.
              <br />A systems thinker.
            </h2>
            <p className="text-[13px] leading-[1.5] text-twt-text-dark">
              Michael Sandefur is an inventor and project leader with experience
              across construction, engineering, life-safety systems, and product
              design. His work is united by a simple approach: identify a
              real-world problem, question the accepted solution, and build
              something better.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {c.inventor.map(([title, copy]) => (
                <article className="flex gap-[7px]" key={title}>
                  <Check className="w-[19px] shrink-0 text-twt-medium-navy" />
                  <div>
                    <b className="block text-[10px] leading-[1.35] text-twt-deep-navy">
                      {title}
                    </b>
                    <span className="block text-[10px] leading-[1.35] text-twt-slate-gray">
                      {copy}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <p className="m-0 text-right font-[cursive] text-2xl italic text-twt-blueprint-blue">
              Michael Sandefur
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-twt-light-gray py-[43px]">
        <div
          className={`${shell} grid grid-cols-[0.7fr_1.3fr] items-center gap-[35px] max-[900px]:grid-cols-1`}
        >
          <div>
            <p className={label}>5. INTELLECTUAL PROPERTY</p>
            <h2 className={`${heading} text-[26px]`}>
              Patented in three
              <br />
              major jurisdictions.
            </h2>
            <div className="mt-[22px]">
              <Button href="/evidence">View patent details</Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-1">
            {c.patents.map(([flag, country, type, number, status]) => (
              <article
                className="grid grid-cols-[37px_1fr] gap-[9px] border border-[#dce5ef] p-[14px]"
                key={country}
              >
                <span className="text-[23px]">{flag}</span>
                <div>
                  <b className="text-[11px] text-twt-deep-navy">{country}</b>
                  <p className="my-1 text-[9px] leading-[1.35] text-twt-slate-gray">
                    {type}
                    <br />
                    {number}
                  </p>
                </div>
                <em className="col-start-2 text-[9px] font-black not-italic text-[#278d55]">
                  {status}
                </em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-twt-pale-blue py-[43px]">
        <div className={shell}>
          <p className={label}>6. INDEPENDENT ANALYSIS & TECHNICAL WORK</p>
          <h2 className={`${heading} text-[26px]`}>
            Founder-developed work,
            <br />
            independently examined.
          </h2>
          <p className="max-w-[800px] text-[13px] leading-[1.5] text-twt-text-dark">
            The underlying wall concept was evaluated by the University of
            Southern Indiana. Their engineering analysis closely matched
            Mike&apos;s calculations, providing independent support for the
            thermal-storage principle at the core of TWT.
          </p>
          <div className="my-5 grid grid-cols-[1fr_55px_1fr] gap-[15px] max-sm:grid-cols-1">
            {[
              ["Founder engineering", c.founderEngineering],
              ["Independent university analysis", c.universityAnalysis],
            ].map(([title, items], index) => (
              <>
                <article
                  className="border border-[#dce5ef] bg-white p-[17px]"
                  key={title as string}
                >
                  <h3 className="m-0 text-[13px] text-twt-deep-navy">
                    {title as string}
                  </h3>
                  <ul className="mt-3 mb-0 list-none p-0">
                    {(items as readonly string[]).map((item) => (
                      <li
                        className="my-[7px] flex gap-[7px] text-[10px] leading-[1.4] text-twt-slate-gray"
                        key={item}
                      >
                        <Check className="w-[14px] shrink-0 text-[#258e55]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                {index === 0 && (
                  <ArrowRight className="self-center text-twt-primary-navy max-sm:justify-self-center max-sm:rotate-90" />
                )}
              </>
            ))}
          </div>
          <Button href="/evidence" primary>
            See the evidence and methodology
          </Button>
        </div>
      </section>
    </main>
  );
}
