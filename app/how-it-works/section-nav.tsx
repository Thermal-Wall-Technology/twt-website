"use client";

import { useEffect, useState } from "react";
import styles from "./section-nav.module.css";

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
    <nav className={styles.sectionNav} aria-label="How it works sections">
      <div>
        {sections.map(([id, label]) => (
          <a
            className={active === id ? styles.active : undefined}
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
