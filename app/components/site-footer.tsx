import Link from "next/link";
import { Brand } from "./brand";

const footerLinks = [
  ["How It Works", "/how-it-works"],
  ["Evidence", "/evidence"],
  ["Potential Benefits", "/potential-benefits"],
  ["Resources", "/resources"],
  ["About", "/about"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <Brand />
        <p>
          A patented building concept that transforms concrete structures into
          active thermal storage and energy distribution systems.
        </p>
        <nav aria-label="Footer navigation">
          {footerLinks.map(([name, href]) => (
            <Link key={href} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <small>© {new Date().getFullYear()} Thermal Wall Technology, LLC</small>
      </div>
    </footer>
  );
}
