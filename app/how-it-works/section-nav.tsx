"use client";

import { useEffect, useState } from "react";

const sections = [
  ["overview", "Overview"],
  ["assembly", "The Assembly"],
  ["why", "Why It Works"],
  ["energy", "Energy Flow"],
  ["modes", "Operating Modes"],
  ["system", "The Full System"],
] as const;

export function SectionNav() {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4] },
    );
    sections.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <nav
      className="sticky top-[62px] z-15 overflow-x-auto border-b border-twt-light-gray bg-white max-[900px]:top-[60px]"
      aria-label="How it works sections"
    >
      <div className="mx-auto flex w-[min(760px,calc(100%-32px))] justify-between gap-[22px] max-[900px]:w-max max-[900px]:gap-[25px] max-[900px]:px-5">
        {sections.map(([id, label]) => (
          <a
            className={`whitespace-nowrap border-b-2 py-[15px] pb-3 text-[11px] font-extrabold text-twt-primary-navy no-underline ${active === id ? "border-twt-primary-orange" : "border-transparent"}`}
            href={`#${id}`}
            key={id}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
