"use client";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";

const reviews = [
  {
    name: "Michael Thompson",
    project: "Kitchen Remodel",
    rating: 5,
    text: "Kazemi Construction transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they finished on time and within budget. Couldn't be happier with the results!",
    location: "Elk Grove, CA"
  },
  {
    name: "Sarah Mitchell",
    project: "Bathroom Renovation",
    rating: 5,
    text: "From start to finish, the team was professional, communicative, and respectful of our home. Our master bathroom is now a spa-like retreat. Highly recommend their services.",
    location: "Folsom, CA"
  },
  {
    name: "David & Linda Chen",
    project: "Whole Home Renovation",
    rating: 5,
    text: "We hired Kazemi for a complete home renovation and they exceeded all expectations. The project manager kept us informed at every stage, and the craftsmanship is outstanding. True professionals.",
    location: "Sacramento, CA"
  },
  {
    name: "Jennifer Rodriguez",
    project: "Basement Finishing",
    rating: 5,
    text: "They turned our unfinished basement into a beautiful entertainment space. The team was reliable, showed up on time, and the quality of work speaks for itself. Already planning our next project with them.",
    location: "Roseville, CA"
  },
  {
    name: "Robert Anderson",
    project: "Deck & Outdoor Living",
    rating: 5,
    text: "Our new deck and outdoor kitchen are absolutely stunning. Kazemi Construction understood our vision and brought it to life perfectly. The neighbors are jealous! Great experience overall.",
    location: "Rocklin, CA"
  },
  {
    name: "Amanda Foster",
    project: "Home Addition",
    rating: 5,
    text: "Adding a room to our home seemed daunting, but Kazemi made it seamless. They handled permits, design, and construction with expertise. The addition blends perfectly with our existing home.",
    location: "Carmichael, CA"
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-[var(--logo-gold)] text-[var(--logo-gold)]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div style={{ minWidth: "1100px" }} className="bg-[var(--logo-black)] text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px] text-center">
            <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">What Our Clients Say</p>
            <h1 className="text-[48px] font-black uppercase leading-[1.1] tracking-[0.04em]">Customer Reviews</h1>
            <div className="gold-metal-bg mx-auto mt-[18px] h-[3px] w-[55px]" />
            <p className="mx-auto mt-6 max-w-[700px] text-[18px] font-medium leading-[1.8] text-white/75">
              Don&apos;t just take our word for it. Here&apos;s what homeowners have to say about working with Kazemi Construction.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="grid grid-cols-2 gap-8">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="luxury-card rounded-[4px] p-8 shadow-[0_8px_24px_rgba(19,18,15,0.1)]"
                >
                  <StarRating rating={review.rating} />
                  <p className="mt-5 text-[16px] font-medium leading-[1.8] text-[#404040] italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#e5e5e5] pt-5">
                    <div>
                      <p className="text-[16px] font-black text-[#202020]">{review.name}</p>
                      <p className="mt-1 text-[13px] font-semibold text-[var(--logo-gold-dark)]">{review.project}</p>
                    </div>
                    <p className="text-[13px] font-medium text-[#888]">{review.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-white/5 bg-[linear-gradient(90deg,#080909_0%,#171816_48%,#0a0b0a_100%)] px-10 py-12">
          <div className="mx-auto grid max-w-[1584px] grid-cols-4 gap-8 text-center">
            <div>
              <p className="gold-metal-text text-[48px] font-black leading-none">100+</p>
              <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.1em] text-white/70">Projects Completed</p>
            </div>
            <div className="border-l border-white/10 pl-8">
              <p className="gold-metal-text text-[48px] font-black leading-none">5.0</p>
              <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.1em] text-white/70">Average Rating</p>
            </div>
            <div className="border-l border-white/10 pl-8">
              <p className="gold-metal-text text-[48px] font-black leading-none">98%</p>
              <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.1em] text-white/70">Client Satisfaction</p>
            </div>
            <div className="border-l border-white/10 pl-8">
              <p className="gold-metal-text text-[48px] font-black leading-none">10+</p>
              <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.1em] text-white/70">Years Experience</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px]">
            <div className="luxury-dark-panel relative overflow-hidden rounded-[4px] px-[50px] py-[50px] text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
              <div className="relative">
                <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Join Our Satisfied Clients</p>
                <h2 className="text-[36px] font-black uppercase leading-[1.12] tracking-[0.04em] text-white">Ready to Experience the Difference?</h2>
                <div className="gold-metal-bg mx-auto mb-[23px] mt-[15px] h-[3px] w-[55px]" />
                <p className="mx-auto max-w-[600px] text-[17px] font-medium leading-[1.8] text-white/75">
                  Start your project with a team that puts quality and customer satisfaction first. Contact us today for your free consultation.
                </p>
                <Link
                  href="/contact"
                  className="gold-outline-button mt-8 inline-flex h-[52px] items-center justify-center gap-[12px] rounded-[3px] px-8 text-[14px] font-black uppercase tracking-[0.08em] transition"
                >
                  Get Your Free Estimate <ArrowRight className="h-[15px] w-[15px]" strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
