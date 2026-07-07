import { Star } from "lucide-react";

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 sm:h-5 sm:w-5 ${index < Math.round(rating) ? "fill-[var(--brand-gold)] text-[var(--brand-gold)]" : "text-stone-300"}`}
          strokeWidth={2}
        />
      ))}
    </div>
  );
}

