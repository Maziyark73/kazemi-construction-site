"use client";

import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import FaqAccordion from "@/packages/website-engine/components/FaqAccordion";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

export default function FaqSection() {
  const { content } = useWebsiteConfig();
  return (
    <section id="faq" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={content.faq.eyebrow} title={content.faq.title} />
        <div className="mt-10">
          <FaqAccordion items={content.faq.items} />
        </div>
      </div>
    </section>
  );
}
