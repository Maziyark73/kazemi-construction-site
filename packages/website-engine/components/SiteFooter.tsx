import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import type { BusinessConfig, CTA, Service } from "@/packages/website-engine/config/types";

type SiteFooterProps = {
  business: BusinessConfig;
  cta: CTA;
  services: Service[];
};

export default function SiteFooter({ business, cta, services }: SiteFooterProps) {
  const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
  return (
    <footer className="bg-stone-950 px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              {business.logo ? <img src={business.logo} alt={business.companyName} className="h-14 w-14 object-contain" /> : null}
              <span className="text-xl font-black uppercase tracking-wide">{business.companyName}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">{business.tagline}</p>
            <Link href={cta.href} className="mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[var(--brand-gold)] px-5 text-xs font-black uppercase tracking-[0.12em] text-stone-950">
              {cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-gold)]">Contact</h3>
            <div className="mt-5 space-y-4 text-sm font-semibold text-white/72">
              <a href={phoneHref} className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-[var(--brand-gold)]" />{business.phone}</a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 text-[var(--brand-gold)]" />{business.email}</a>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--brand-gold)]" />{business.address}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-gold)]">Services</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/72">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-gold)]">Service areas</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold text-white/72">
              {business.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          Copyright {new Date().getFullYear()} {business.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
