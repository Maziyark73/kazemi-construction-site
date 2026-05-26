"use client";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle, Clock3, Handshake, ShieldCheck, Target, Users } from "lucide-react";
import Header from "@/components/Header";

const values = [
  { icon: ShieldCheck, title: "Integrity First", description: "We believe in honest communication, transparent pricing, and doing what we say we'll do. No surprises, no hidden costs." },
  { icon: Award, title: "Quality Craftsmanship", description: "Every project reflects our commitment to excellence. We use premium materials and proven techniques that stand the test of time." },
  { icon: Handshake, title: "Client Partnership", description: "Your vision drives our work. We listen carefully, communicate clearly, and treat your home with the same respect we'd give our own." },
  { icon: Clock3, title: "Reliability", description: "We show up when we say we will, keep our promises, and finish projects on schedule. Your time matters to us." },
];

const whyChooseUs = [
  "Licensed, bonded, and fully insured",
  "Detailed written estimates with no hidden fees",
  "Direct communication with project managers",
  "Clean job sites and respectful crews",
  "Warranties on all workmanship",
  "Local Sacramento-area company",
];

export default function AboutPage() {
  return (
    <div style={{ minWidth: "1100px" }} className="bg-[var(--logo-black)] text-white">
      <Header />
      <main>
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px]">
            <div className="grid grid-cols-[minmax(0,1fr)_480px] gap-16 items-center">
              <div>
                <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Who We Are</p>
                <h1 className="text-[48px] font-black uppercase leading-[1.1] tracking-[0.04em]">About Kazemi Construction</h1>
                <div className="gold-metal-bg mt-[18px] h-[3px] w-[55px]" />
                <p className="mt-8 text-[18px] font-medium leading-[1.9] text-white/80">Kazemi Construction LLC is a family-owned general contracting company serving the Sacramento area. We specialize in residential remodeling, renovations, and custom builds — delivering quality workmanship with integrity and care.</p>
                <p className="mt-6 text-[18px] font-medium leading-[1.9] text-white/80">Founded on the principle that every homeowner deserves a contractor they can trust, we&apos;ve built our reputation one project at a time. From kitchen remodels to whole-home renovations, we bring the same level of dedication and attention to detail to every job.</p>
              </div>
              <div className="relative">
                <div className="relative luxury-dark-panel overflow-hidden rounded-[4px] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
                  <img alt="Construction craftsmanship" className="h-[380px] w-full rounded-[2px] object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" />
                  <div className="gold-image-line absolute bottom-2 left-2 right-2 h-[3px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="luxury-card rounded-[4px] px-16 py-14 text-center shadow-[0_10px_30px_rgba(19,18,15,0.1)]">
              <div className="gold-outline-medallion mx-auto mb-6 grid h-[72px] w-[72px] place-items-center rounded-full">
                <Target className="h-[36px] w-[36px] text-[var(--logo-gold-light)]" strokeWidth={1.75} />
              </div>
              <h2 className="text-[32px] font-black uppercase leading-none tracking-[0.04em]">Our Mission</h2>
              <div className="gold-metal-bg mx-auto mt-[15px] h-[3px] w-[45px]" />
              <p className="mx-auto mt-8 max-w-[800px] text-[19px] font-medium leading-[1.85] text-[#404040]">To transform houses into homes through exceptional craftsmanship, honest service, and genuine care for our clients. We don&apos;t just build and renovate — we create spaces where families thrive and memories are made.</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px]">
            <div className="text-center">
              <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">What Drives Us</p>
              <h2 className="text-[36px] font-black uppercase leading-[1.1] tracking-[0.04em]">Our Values</h2>
              <div className="gold-metal-bg mx-auto mt-[18px] h-[3px] w-[55px]" />
            </div>
            <div className="mt-12 grid grid-cols-4 gap-8">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center">
                    <div className="gold-outline-medallion mx-auto mb-5 grid h-[68px] w-[68px] place-items-center rounded-full">
                      <Icon className="h-[34px] w-[34px] text-[var(--logo-gold-light)]" strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-4 text-[18px] font-black uppercase tracking-[0.04em]">{item.title}</h3>
                    <p className="text-[14px] font-medium leading-[1.75] text-white/70">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">The Kazemi Difference</p>
                <h2 className="text-[36px] font-black uppercase leading-[1.1] tracking-[0.04em]">Why Choose Us</h2>
                <div className="gold-metal-bg mt-[15px] h-[3px] w-[55px]" />
                <div className="mt-8 grid grid-cols-1 gap-4">
                  {whyChooseUs.map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <CheckCircle className="h-6 w-6 shrink-0 text-[var(--logo-gold)]" />
                      <span className="text-[16px] font-semibold text-[#303030]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative luxury-dark-panel overflow-hidden rounded-[4px] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.15)]">
                <img alt="Professional construction team" className="h-[400px] w-full rounded-[2px] object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80" />
                <div className="gold-image-line absolute bottom-2 left-2 right-2 h-[3px]" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px]">
            <div className="luxury-dark-panel relative overflow-hidden rounded-[4px] px-[50px] py-[50px] text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
              <div className="relative">
                <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Let&apos;s Work Together</p>
                <h2 className="text-[36px] font-black uppercase leading-[1.12] tracking-[0.04em] text-white">Ready to Start Your Project?</h2>
                <div className="gold-metal-bg mx-auto mb-[23px] mt-[15px] h-[3px] w-[55px]" />
                <p className="mx-auto max-w-[600px] text-[17px] font-medium leading-[1.8] text-white/75">Contact us today to discuss your project. We&apos;ll listen to your needs, answer your questions, and provide a free estimate.</p>
                <Link href="/contact" className="gold-outline-button mt-8 inline-flex h-[52px] items-center justify-center gap-[12px] rounded-[3px] px-8 text-[14px] font-black uppercase tracking-[0.08em] transition">
                  Contact Us <ArrowRight className="h-[15px] w-[15px]" strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
