"use client";
import { ArrowRight, Bath, Building2, CheckCircle, Home, Trees } from "lucide-react";
import Header from "@/components/Header";
import EstimateForm from "@/components/EstimateForm";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Beautiful, functional kitchens designed for the way you live.",
    details: "From custom cabinetry and countertops to lighting and flooring, we handle every detail. Whether you want a modern open-concept kitchen or a classic design, we bring your vision to life with premium materials and expert craftsmanship.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Bathroom Remodeling",
    description: "Modern upgrades that add comfort, value, and style.",
    details: "Transform your bathroom into a spa-like retreat. We specialize in walk-in showers, soaking tubs, custom vanities, and tile work. Our team ensures proper waterproofing and ventilation for a bathroom that lasts.",
    icon: Bath,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Basement Finishing",
    description: "Maximize your space with quality finishes and smart design.",
    details: "Turn your unfinished basement into valuable living space. We handle framing, insulation, electrical, plumbing, and finishing touches. Create a home theater, gym, office, or guest suite with professional results.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Decks & Outdoor Spaces",
    description: "Custom outdoor spaces for relaxation and entertainment.",
    details: "Build the perfect outdoor living area with custom decks, patios, and pergolas. We use durable materials like composite decking and pressure-treated lumber to create spaces that withstand the elements and look great for years.",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Additions & Renovations",
    description: "Seamless additions and renovations to fit your needs.",
    details: "Expand your living space with expertly designed additions that blend seamlessly with your existing home. Whether it's a new bedroom, sunroom, or second story, we manage permits, design, and construction from start to finish.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80"
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We discuss your vision, budget, and timeline to understand exactly what you need." },
  { step: "02", title: "Planning & Design", description: "Our team creates detailed plans and provides a transparent estimate with no hidden costs." },
  { step: "03", title: "Construction", description: "We execute the project with precision, keeping you informed every step of the way." },
  { step: "04", title: "Final Walkthrough", description: "We review every detail together to ensure your complete satisfaction." },
];

export default function ServicesPage() {
  return (
    <div style={{ minWidth: "1100px" }} className="bg-[var(--logo-black)] text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px] text-center">
            <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">What We Do</p>
            <h1 className="text-[48px] font-black uppercase leading-[1.1] tracking-[0.04em]">Our Services</h1>
            <div className="gold-metal-bg mx-auto mt-[18px] h-[3px] w-[55px]" />
            <p className="mx-auto mt-6 max-w-[700px] text-[18px] font-medium leading-[1.8] text-white/75">
              From kitchens and bathrooms to full home renovations, we deliver quality craftsmanship on every project.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="grid gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <article
                    key={service.title}
                    className={`luxury-card flex overflow-hidden rounded-[4px] shadow-[0_10px_30px_rgba(19,18,15,0.12)] ${isEven ? "" : "flex-row-reverse"}`}
                  >
                    <div className="relative w-[45%] shrink-0">
                      <img alt={service.title} className="h-full w-full object-cover" src={service.image} />
                      <div className={`gold-image-line absolute ${isEven ? "right-0 top-0 h-full w-[3px]" : "left-0 top-0 h-full w-[3px]"}`} />
                    </div>
                    <div className="flex flex-1 flex-col justify-center px-12 py-10">
                      <div className="gold-outline-medallion mb-6 grid h-[68px] w-[68px] place-items-center rounded-full">
                        <Icon className="h-[34px] w-[34px] text-[var(--logo-gold-light)]" strokeWidth={1.9} />
                      </div>
                      <h2 className="mb-4 text-[26px] font-black uppercase leading-none tracking-[0.03em]">{service.title}</h2>
                      <p className="mb-4 text-[16px] font-semibold leading-[1.6] text-[var(--logo-gold-dark)]">{service.description}</p>
                      <p className="text-[15px] font-medium leading-[1.75] text-[#404040]">{service.details}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px]">
            <div className="text-center">
              <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">How It Works</p>
              <h2 className="text-[36px] font-black uppercase leading-[1.1] tracking-[0.04em]">Our Process</h2>
              <div className="gold-metal-bg mx-auto mt-[18px] h-[3px] w-[55px]" />
            </div>
            <div className="mt-12 grid grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className={`relative ${index !== 0 ? "border-l border-white/10 pl-8" : ""}`}>
                  <div className="gold-metal-text mb-4 text-[42px] font-black leading-none">{item.step}</div>
                  <h3 className="mb-3 text-[18px] font-black uppercase tracking-[0.04em]">{item.title}</h3>
                  <p className="text-[14px] font-medium leading-[1.7] text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Estimate Form */}
        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="luxury-dark-panel relative overflow-hidden rounded-[4px] px-[50px] py-[50px] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
              <div className="relative grid grid-cols-[minmax(0,1fr)_420px] gap-16 items-center">
                <div>
                  <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Ready to Start?</p>
                  <h2 className="text-[36px] font-black uppercase leading-[1.12] tracking-[0.04em] text-white">Get Your Free Estimate</h2>
                  <div className="gold-metal-bg mb-[23px] mt-[15px] h-[3px] w-[55px]" />
                  <p className="max-w-[550px] text-[17px] font-medium leading-[1.8] text-white/75">
                    Tell us about your project and we&apos;ll provide a detailed estimate. No obligation, no pressure — just honest answers.
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <div className="flex items-center gap-3 text-[14px] font-bold text-white/80">
                      <CheckCircle className="h-5 w-5 text-[var(--logo-gold)]" /> Free consultations
                    </div>
                    <div className="flex items-center gap-3 text-[14px] font-bold text-white/80">
                      <CheckCircle className="h-5 w-5 text-[var(--logo-gold)]" /> Transparent pricing
                    </div>
                    <div className="flex items-center gap-3 text-[14px] font-bold text-white/80">
                      <CheckCircle className="h-5 w-5 text-[var(--logo-gold)]" /> Licensed & insured
                    </div>
                  </div>
                </div>
                <div className="luxury-form rounded-[10px] px-[30px] pb-[30px] pt-[29px] text-[#171717] shadow-[0_22px_58px_rgba(0,0,0,0.34)]">
                  <h3 className="text-center text-[21px] font-black uppercase leading-none tracking-[0.045em]">Request an Estimate</h3>
                  <div className="gold-metal-bg mx-auto mb-[21px] mt-[15px] h-[3px] w-[36px]" />
                  <EstimateForm source="services_page" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
