"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import styles from "./page.module.css";

export type BenefitStatus = "established" | "modeled" | "design" | "validation";

export type BenefitItem = {
  number: number;
  title: string;
  summary: string;
  description: string;
  status: BenefitStatus;
  qualifier?: string;
};

const STATUS_LABELS: Record<BenefitStatus, string> = {
  established: "Established principle",
  modeled: "Founder-modeled",
  design: "Design-derived",
  validation: "Requires validation",
};

export function BenefitAccordion({
  items,
  tone,
}: {
  items: BenefitItem[];
  tone: "orange" | "blue" | "green" | "purple";
}) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const groupId = useId().replaceAll(":", "");

  function toggle(number: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });
  }

  return (
    <div className={styles.accordionGroup} data-tone={tone}>
      <div className={styles.accordionControls}>
        <span>{items.length} benefits</span>
        <div>
          <button
            type="button"
            onClick={() =>
              setOpenItems(new Set(items.map((item) => item.number)))
            }
          >
            Expand all
          </button>
          <span aria-hidden="true">/</span>
          <button type="button" onClick={() => setOpenItems(new Set())}>
            Collapse all
          </button>
        </div>
      </div>

      <div className={styles.accordionList}>
        {items.map((item) => {
          const isOpen = openItems.has(item.number);
          const panelId = `benefit-${groupId}-${item.number}`;
          return (
            <article className={styles.accordionItem} key={item.number}>
              <button
                className={styles.accordionTrigger}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.number)}
              >
                <span className={styles.benefitNumber}>
                  {String(item.number).padStart(2, "0")}
                </span>
                <span className={styles.triggerCopy}>
                  <span className={styles.triggerTitle}>{item.title}</span>
                  <span
                    className={`${styles.statusBadge} ${styles[item.status]}`}
                  >
                    {STATUS_LABELS[item.status]}
                  </span>
                </span>
                <ChevronDown
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={styles.accordionPanel}
                id={panelId}
                hidden={!isOpen}
              >
                <p className={styles.benefitSummary}>{item.summary}</p>
                <p>{item.description}</p>
                {item.qualifier ? (
                  <p className={styles.qualifier}>{item.qualifier}</p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
