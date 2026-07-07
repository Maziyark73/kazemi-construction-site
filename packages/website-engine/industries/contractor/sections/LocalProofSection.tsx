"use client";

import { ClipboardCheck, Home, MapPinned, Timer } from "lucide-react";
import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

const icons = [Home, ClipboardCheck, MapPinned, Timer];

export default function LocalProofSection() {
  const { content } = useWebsiteConfig();
  return (
    <section className="bg-white px-5 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-stone-200 bg-[var(--brand-cream)] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <SectionHeading align="left" eyebrow={content.localProof.eyebrow} title={content.localProof.title} text={content.localProof.text} />
            <div className="grid gap-4 md:grid-cols-2">
              {content.localProof.details.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <article key={item.title} className="border-t border-stone-300 pt-5">
                    <Icon className="h-6 w-6 text-[var(--brand-bronze)]" />
                    <h3 className="mt-4 text-base font-black uppercase tracking-wide text-stone-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
