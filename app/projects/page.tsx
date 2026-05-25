"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const projects = [
  {
    title: "Whole Home Renovation",
    description: "Complete interior transformation including open-concept living, modern kitchen, and updated bathrooms.",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1000&q=80",
    category: "Full Renovation"
  },
  {
    title: "Custom Kitchen Remodel",
    description: "High-end kitchen featuring custom cabinetry, quartz countertops, and professional-grade appliances.",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=80",
    category: "Kitchen"
  },
  {
    title: "Outdoor Living Build",
    description: "Expansive deck with pergola, built-in seating, and integrated lighting for year-round enjoyment.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80",
    category: "Outdoor"
  },
  {
    title: "Luxury Master Bath",
    description: "Spa-inspired master bathroom with walk-in shower, freestanding tub, and heated floors.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    category: "Bathroom"
  },
  {
    title: "Basement Entertainment Space",
    description: "Finished basement featuring home theater, wet bar, and gaming area with custom lighting.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",
    category: "Basement"
  },
  {
    title: "Modern Home Addition",
    description: "Two-story addition seamlessly integrated with existing architecture, adding 800 sq ft of living space.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1000&q=80",
    category: "Addition"
  },
  {
    title: "Chef's Dream Kitchen",
    description: "Professional kitchen with dual islands, commercial range, and walk-in pantry with custom shelving.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
    category: "Kitchen"
  },
  {
    title: "Contemporary Deck Design",
    description: "Multi-level composite deck with cable railings, outdoor kitchen, and fire pit seating area.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
    category: "Outdoor"
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ minWidth: "1100px" }} className="bg-[var(--logo-black)] text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px] text-center">
            <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Our Work</p>
            <h1 className="text-[48px] font-black uppercase leading-[1.1] tracking-[0.04em]">Featured Projects</h1>
            <div className="gold-metal-bg mx-auto mt-[18px] h-[3px] w-[55px]" />
            <p className="mx-auto mt-6 max-w-[700px] text-[18px] font-medium leading-[1.8] text-white/75">
              Explore our portfolio of completed projects. Each one represents our commitment to quality, attention to detail, and client satisfaction.
            </p>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="grid grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="luxury-card group overflow-hidden rounded-[4px] shadow-[0_10px_30px_rgba(19,18,15,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(19,18,15,0.18)]"
                >
                  <div className="relative h-[280px] overflow-hidden">
                    <img
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      src={project.image}
                    />
                    <div className="gold-image-line absolute inset-x-0 bottom-0 h-[3px]" />
                    <div className="absolute left-5 top-5">
                      <span className="gold-outline-button rounded-[2px] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.1em]">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="px-7 py-6">
                    <h2 className="mb-3 text-[22px] font-black uppercase leading-none tracking-[0.02em]">{project.title}</h2>
                    <p className="text-[15px] font-medium leading-[1.7] text-[#505050]">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px]">
            <div className="luxury-dark-panel relative overflow-hidden rounded-[4px] px-[50px] py-[50px] text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
              <div className="relative">
                <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Your Project Could Be Next</p>
                <h2 className="text-[36px] font-black uppercase leading-[1.12] tracking-[0.04em] text-white">Ready to Get Started?</h2>
                <div className="gold-metal-bg mx-auto mb-[23px] mt-[15px] h-[3px] w-[55px]" />
                <p className="mx-auto max-w-[600px] text-[17px] font-medium leading-[1.8] text-white/75">
                  Let&apos;s discuss your vision and create something exceptional together. Contact us today for a free consultation.
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
