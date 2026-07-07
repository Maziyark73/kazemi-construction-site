"use client";

import Link from "next/link";
import { ArrowRight, Bath, Building2, Home, Paintbrush, Warehouse, Wrench } from "lucide-react";
import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

const icons = [Home, Bath, Building2, Paintbrush, Wrench, Warehouse];

export default function ServicesSection({ showAll = true }: { showAll?: boolean }) {
  const { content } = useWebsiteConfig();
  const services = showAll ? content.services.items : content.services.items.slice(0, 6);

  return (
    <section id="services" className="bg-[var(--brand-cream)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.services.eyebrow}
          title={content.services.title}
          text={content.services.text}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={service.title} className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/58 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-md bg-[var(--brand-gold)] text-stone-950">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase leading-tight tracking-wide text-stone-950">{service.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--brand-bronze)]">{service.description}</p>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{service.details}</p>
                  {service.story && <p className="mt-5 border-l-2 border-[var(--brand-gold)] pl-4 text-sm leading-6 text-stone-500">{service.story}</p>}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href={content.services.cta.href} className="inline-flex h-13 items-center justify-center gap-3 rounded-md bg-stone-950 px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-stone-800">
            {content.services.cta.label}
            <ArrowRight className="h-4 w-4 text-[var(--brand-gold)]" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
