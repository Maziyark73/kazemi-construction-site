"use client";

import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";
import TestimonialCard from "@/packages/website-engine/components/TestimonialCard";

export default function TestimonialsSection() {
  const { content } = useWebsiteConfig();
  return (
    <section id="reviews" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.testimonials.eyebrow}
          title={content.testimonials.title}
          text={content.testimonials.text}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.testimonials.items.map((review) => (
            <TestimonialCard key={`${review.name}-${review.city}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
