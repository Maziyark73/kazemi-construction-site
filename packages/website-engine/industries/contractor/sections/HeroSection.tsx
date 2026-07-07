"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Hammer, MapPin, ShieldCheck, Star } from "lucide-react";
import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";

const trustIcons = [ShieldCheck, BadgeCheck, MapPin, Star];

export default function HeroSection() {
  const { business, content } = useWebsiteConfig();
  return (
    <section id="home" className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0">
        <img src={content.hero.image} alt={`${business.companyName} project`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,0.96)_0%,rgba(28,25,23,0.82)_42%,rgba(28,25,23,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.18)_0%,rgba(28,25,23,0.06)_52%,rgba(28,25,23,0.88)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
            <Hammer className="h-4 w-4 text-[var(--brand-gold)]" />
            {content.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-black uppercase leading-[1.04] tracking-wide sm:text-6xl lg:text-7xl">
            {content.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            {content.hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={content.hero.primaryCTA.href} className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[var(--brand-gold)] px-7 text-sm font-black uppercase tracking-[0.12em] text-stone-950 shadow-xl shadow-black/20 transition hover:bg-[var(--brand-gold-dark)]">
              {content.hero.primaryCTA.label}
              <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </Link>
            <Link href={content.hero.secondaryCTA.href} className="inline-flex h-14 items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/16">
              {content.hero.secondaryCTA.label}
            </Link>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {content.hero.trustBadges.map((badge, index) => {
              const Icon = trustIcons[index % trustIcons.length];
              return (
                <div key={badge} className="flex items-center gap-3 rounded-md border border-white/12 bg-white/8 px-4 py-3 backdrop-blur">
                  <Icon className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                  <span className="text-sm font-semibold text-white/88">{badge}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-white/12 bg-stone-950/82 p-6 shadow-2xl shadow-black/35 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--brand-gold)]">{content.hero.estimatePanel.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-tight">{content.hero.estimatePanel.title}</h2>
          <p className="mt-4 text-sm leading-6 text-white/72">
            {content.hero.estimatePanel.text}
          </p>
          <div className="mt-6 space-y-3 text-sm font-semibold text-white/86">
            {content.hero.stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between border-t border-white/10 pt-3">
                <span>{stat.label}</span>
                <span className="text-[var(--brand-gold)]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
