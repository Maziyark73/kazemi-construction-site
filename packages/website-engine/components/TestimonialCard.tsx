import { Quote } from "lucide-react";
import type { Testimonial } from "@/packages/website-engine/config/types";
import StarRating from "./StarRating";

export default function TestimonialCard({ review }: { review: Testimonial }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
      <div className="flex items-start justify-between gap-5">
        <StarRating rating={review.rating} />
        <Quote className="h-8 w-8 shrink-0 text-[var(--brand-gold)]" />
      </div>
      <p className="mt-5 text-base leading-8 text-stone-700">&ldquo;{review.text}&rdquo;</p>
      <div className="mt-6 border-t border-stone-200 pt-5">
        <p className="font-black text-stone-950">{review.name}</p>
        <p className="mt-1 text-sm font-semibold text-[var(--brand-bronze)]">{review.serviceType} - {review.city}</p>
      </div>
    </article>
  );
}

