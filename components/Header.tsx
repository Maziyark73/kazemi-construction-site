"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";

const logoImage = "/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ minWidth: "1100px" }} className="relative z-30 border-b border-white/10 bg-[var(--logo-black)] shadow-[0_14px_34px_rgba(0,0,0,0.38)]">
      <div className="flex h-[190px] items-center justify-between px-10">
        {/* Logo */}
        <Link href="/" className="flex h-[160px] w-[230px] shrink-0 items-center">
          <img alt="Kazemi Construction LLC" className="h-full w-full object-contain object-left drop-shadow-[0_9px_18px_rgba(0,0,0,0.82)]" src={logoImage} />
        </Link>

        {/* Nav — always visible, never collapses */}
        <nav className="flex h-full items-center gap-[36px] text-[12px] font-black uppercase tracking-[0.055em]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-full items-center transition hover:text-[var(--logo-gold)] ${isActive ? "text-[var(--logo-gold)] after:absolute after:bottom-[52px] after:left-1/2 after:h-[2px] after:w-[41px] after:-translate-x-1/2 after:bg-[var(--logo-gold)]" : "text-white"}`}
              >{item.label}</Link>
            );
          })}
        </nav>

        {/* Phone + CTA */}
        <div className="flex shrink-0 items-center gap-[22px]">
          <a className="flex items-center gap-[10px] text-[15px] font-bold tracking-[0.02em] text-white" href="tel:+19163132237">
            <Phone className="h-[17px] w-[17px] text-[var(--logo-gold)]" strokeWidth={3} />
            <span>(916) 313-2237</span>
          </a>
          <Link className="gold-outline-button flex h-[46px] w-[210px] shrink-0 items-center justify-center gap-[9px] rounded-[3px] text-[12px] font-black uppercase tracking-[0.085em] transition" href="/contact">
            Get a Free Estimate <ArrowRight className="h-[13px] w-[13px]" strokeWidth={3} />
          </Link>
        </div>
      </div>
      <span className="gold-hairline pointer-events-none absolute inset-x-0 bottom-0 h-px" />
    </header>
  );
}
