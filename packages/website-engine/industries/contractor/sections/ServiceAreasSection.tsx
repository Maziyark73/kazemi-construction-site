"use client";

import { MapPin } from "lucide-react";
import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

export default function ServiceAreasSection() {
  const { business, content } = useWebsiteConfig();
  return (
    <section id="areas" className="bg-[var(--brand-cream)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow={content.serviceAreas.eyebrow}
            title={content.serviceAreas.title}
            text={content.serviceAreas.text}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {business.serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-md border border-stone-200 bg-white px-5 py-4 text-base font-black text-stone-900 shadow-sm">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
