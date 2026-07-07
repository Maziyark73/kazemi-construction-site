"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import type { BusinessConfig, CTA, NavItem } from "@/packages/website-engine/config/types";

type SiteHeaderProps = {
  business: BusinessConfig;
  cta: CTA;
  navItems: NavItem[];
};

export default function SiteHeader({ business, cta, navItems }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/94 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          {business.logo ? <img alt={business.companyName} className="h-12 w-12 shrink-0 object-contain" src={business.logo} /> : null}
          <span className="max-w-[210px] text-sm font-black uppercase leading-tight tracking-wide text-stone-950 xl:max-w-none xl:text-base">{business.companyName}</span>
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-black uppercase tracking-[0.1em] xl:gap-7 xl:tracking-[0.11em] lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition hover:text-[var(--brand-bronze)] ${isActive ? "text-[var(--brand-bronze)]" : "text-stone-700"}`}
              >{item.label}</Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a className="flex items-center gap-2 text-sm font-black text-stone-950" href={phoneHref}>
            <Phone className="h-4 w-4 text-[var(--brand-gold)]" strokeWidth={3} />
            <span>{business.phone}</span>
          </a>
          <Link className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-stone-950 px-5 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-stone-800" href={cta.href}>
            {cta.label} <ArrowRight className="h-4 w-4 text-[var(--brand-gold)]" strokeWidth={3} />
          </Link>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-md border border-stone-200 text-stone-950 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" type="button">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-stone-200 bg-white px-5 py-4 lg:hidden">
          <nav className="grid gap-3 text-sm font-black uppercase tracking-[0.1em] text-stone-800">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </nav>
          <div className="mt-5 grid gap-3">
            <a className="flex h-11 items-center justify-center gap-2 rounded-md border border-stone-200 font-black text-stone-950" href={phoneHref}>
              <Phone className="h-4 w-4 text-[var(--brand-gold)]" /> {business.phone}
            </a>
            <Link className="flex h-11 items-center justify-center rounded-md bg-stone-950 text-xs font-black uppercase tracking-[0.1em] text-white" href={cta.href} onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
