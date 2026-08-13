"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./brand";

const links = [
  ["Home", "/"],
  ["How It Works", "/how-it-works"],
  ["Evidence", "/evidence"],
  ["Potential Benefits", "/potential-benefits"],
  ["Resources", "/resources"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const path = usePathname();
  return (
    <header
      className={`site-header ${path === "/about" ? "about-header" : ""}`}
    >
      <div className="shell">
        <Brand />
        <nav aria-label="Primary navigation">
          {links.map(([name, href]) => (
            <Link
              className={path === href ? "nav-active" : ""}
              key={href}
              href={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        <details>
          <summary>
            <Menu size={20} /> Menu
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map(([name, href]) => (
              <Link
                className={path === href ? "nav-active" : ""}
                key={href}
                href={href}
              >
                {name}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
