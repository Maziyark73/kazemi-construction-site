"use client";

import { BadgeCheck, Clock3, Hammer, MessageSquareText, ReceiptText, ShieldCheck } from "lucide-react";
import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

const icons = [ShieldCheck, ReceiptText, BadgeCheck, Hammer, MessageSquareText, Clock3];

export default function WhyChooseUsSection() {
  const { content } = useWebsiteConfig();
  return (
    <section id="why-us" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow={content.whyChooseUs.eyebrow}
            title={content.whyChooseUs.title}
            text={content.whyChooseUs.text}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {content.whyChooseUs.reasons.map((reason, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article key={reason.title} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-stone-950 text-[var(--brand-gold)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-black uppercase tracking-wide text-stone-950">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
