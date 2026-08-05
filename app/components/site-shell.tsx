"use client";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
const links=[["Home","/"],["How It Works","/how-it-works"],["Evidence","/evidence"],["Research","/research-partnership"],["Future Applications","/future-applications"],["Resources","/resources"],["About","/about"]] as const;
function Brand(){return <Link href="/" className="brand" aria-label="Thermal Wall Technology home"><b>TWT</b><span>THERMAL WALL<small>TECHNOLOGY</small></span></Link>}
export function SiteHeader(){const path=usePathname();return <header className={`site-header ${path==="/about"?"about-header":""}`}><div className="shell"><Brand/><nav aria-label="Primary navigation">{links.map(([n,h])=><Link className={path===h?'nav-active':''} key={h} href={h}>{n}</Link>)}</nav><Link className="header-cta" href="/research-partnership">Start a conversation <ArrowRight size={17}/></Link><details><summary><Menu size={20}/> Menu</summary><nav aria-label="Mobile navigation">{links.map(([n,h])=><Link className={path===h?'nav-active':''} key={h} href={h}>{n}</Link>)}<Link href="/research-partnership">Start a conversation</Link></nav></details></div></header>}
export function SiteFooter(){return <footer className="site-footer"><div className="shell"><Brand/><p>A patented building concept that transforms concrete structures into active thermal storage and energy distribution systems.</p><nav aria-label="Footer navigation">{links.slice(1).map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><Link href="/research-partnership">Start a conversation <ArrowRight size={16}/></Link><small>© {new Date().getFullYear()} Thermal Wall Technology, LLC</small></div></footer>}

