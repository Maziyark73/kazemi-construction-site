"use client";
import Link from "next/link";
import { ArrowRight, Bath, Building2, Clock3, Handshake, Home, ShieldCheck, Trees, Users } from "lucide-react";
import Header from "@/components/Header";
import EstimateForm from "@/components/EstimateForm";

const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90";

const services = [
  { title: "Kitchen Remodeling", description: "Beautiful, functional kitchens designed for the way you live.", icon: Home, image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80" },
  { title: "Bathroom Remodeling", description: "Modern upgrades that add comfort, value, and style.", icon: Bath, image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80" },
  { title: "Basement Finishing", description: "Maximize your space with quality finishes and smart design.", icon: Building2, image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80" },
];

const trustItems = [
  { title: "Licensed & Insured", text: "Fully licensed and insured for your peace of mind.", icon: ShieldCheck },
  { title: "Quality Craftsmanship", text: "We take pride in delivering high-quality work.", icon: Users },
  { title: "On Time. On Budget.", text: "We respect your time and your investment.", icon: Clock3 },
  { title: "Customer Focused", text: "Your satisfaction is our top priority.", icon: Handshake },
];

const projects = [
  { title: "Whole Home Renovation", image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1000&q=80" },
  { title: "Custom Kitchen Remodel", image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=80" },
];

export default function Page() {
  return (
    <div style={{ minWidth: "1100px" }} className="bg-[var(--logo-black)] text-white">
      <Header />

      <main>
        {/* Hero + Estimate Form */}
        <section className="relative min-h-[585px] overflow-hidden">
          <div className="absolute inset-0">
            <img alt="Luxury custom home exterior at dusk" className="h-full w-full object-cover object-[58%_50%]" src={heroImage} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.88)_20%,rgba(0,0,0,0.56)_43%,rgba(0,0,0,0.18)_69%,rgba(0,0,0,0.24)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_48%,rgba(0,0,0,0.58)_100%)]" />
          </div>
          <div className="relative mx-auto grid min-h-[585px] max-w-[1584px] items-center gap-10 px-10 py-10 lg:grid-cols-[minmax(0,1fr)_389px] lg:py-0">
            <div className="max-w-[610px] pt-1">
              <p className="gold-metal-text mb-[19px] text-[20px] font-black uppercase leading-none tracking-[0.19em]">Built on Trust.</p>
              <h1 className="text-[74px] font-black uppercase leading-[1.02] tracking-[0.025em] text-white">Built for<br />Generations.</h1>
              <div className="gold-metal-bg mb-[17px] mt-[20px] h-[3px] w-[73px]" />
              <p className="mb-[36px] max-w-[590px] text-[20px] font-medium leading-[1.78] text-white">
                Kazemi Construction LLC is a full-service general contractor delivering quality craftsmanship and reliable solutions for your home or business.
              </p>
              <div className="flex gap-[20px]">
                <Link className="gold-outline-button flex h-[48px] w-[182px] items-center justify-center gap-[12px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.075em] transition" href="/services">
                  Our Services <ArrowRight className="h-[15px] w-[15px]" strokeWidth={3} />
                </Link>
                <Link className="gold-outline-button flex h-[48px] w-[212px] items-center justify-center gap-[10px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.075em] transition" href="/contact">
                  Get a Free Estimate <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />
                </Link>
              </div>
            </div>
            <aside className="luxury-form w-full max-w-[389px] self-end rounded-[10px] px-[30px] pb-[30px] pt-[29px] text-[#171717] shadow-[0_22px_58px_rgba(0,0,0,0.34)] lg:mb-[11px]">
              <h2 className="text-center text-[21px] font-black uppercase leading-none tracking-[0.045em]">Get a Free Estimate</h2>
              <div className="gold-metal-bg mx-auto mb-[21px] mt-[15px] h-[3px] w-[36px]" />
              <EstimateForm source="home_estimate" />
            </aside>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-y border-white/5 bg-[linear-gradient(90deg,#080909_0%,#171816_48%,#0a0b0a_100%)]">
          <div className="mx-auto grid min-h-[118px] max-w-[1584px] grid-cols-4 px-10 py-0">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className={`flex items-center gap-[27px] py-6 ${index !== 0 ? "border-l border-white/10 pl-[57px]" : ""}`} key={item.title}>
                  <div className="gold-outline-medallion grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full">
                    <Icon className="h-[30px] w-[30px] text-[var(--logo-gold-light)]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="mb-[7px] text-[14px] font-black uppercase leading-none tracking-[0.055em]">{item.title}</h3>
                    <p className="text-[14px] font-medium leading-[1.55] text-white">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services Preview - 3 cards */}
        <section className="bg-[#f8f7f2] pb-[30px] pt-[40px] text-[#151515]">
          <div className="mx-auto max-w-[1584px] px-10">
            <div className="text-center">
              <h2 className="text-[28px] font-black uppercase leading-none tracking-[0.07em]">Our Services</h2>
              <div className="gold-metal-bg mx-auto mt-[12px] h-[3px] w-[35px]" />
            </div>
            <div className="mt-[30px] grid grid-cols-3 gap-[25px]">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="luxury-card overflow-hidden rounded-[4px] shadow-[0_7px_18px_rgba(19,18,15,0.09)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(19,18,15,0.14)]" key={service.title}>
                    <div className="relative h-[141px]">
                      <img alt={service.title} className="h-full w-full object-cover" src={service.image} />
                      <div className="gold-image-line absolute inset-x-0 bottom-0 h-[3px]" />
                      <div className="gold-outline-medallion absolute -bottom-[29px] left-[25px] grid h-[58px] w-[58px] place-items-center rounded-full">
                        <Icon className="h-[29px] w-[29px] text-[var(--logo-gold-light)]" strokeWidth={1.9} />
                      </div>
                    </div>
                    <div className="px-[20px] pb-[18px] pt-[35px] text-center">
                      <h3 className="mb-[12px] text-[14px] font-black uppercase leading-none tracking-[0.015em]">{service.title}</h3>
                      <p className="mx-auto max-w-[230px] text-[13px] font-medium leading-[1.65] text-[#202020]">{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-[24px] text-center">
              <Link className="gold-outline-button inline-flex h-[38px] w-[260px] items-center justify-center gap-[10px] rounded-[2px] text-[12px] font-black uppercase tracking-[0.12em] transition" href="/services">
                View All Services <ArrowRight className="h-[13px] w-[13px]" strokeWidth={3} />
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Preview - 2 cards */}
        <section className="bg-[#f8f7f2] pb-16">
          <div className="mx-auto max-w-[1584px] px-10">
            <div className="luxury-dark-panel relative overflow-hidden rounded-[4px] px-[34px] pb-[34px] pt-[28px] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_12%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]" />
              <div className="relative mb-[26px] flex items-center justify-between">
                <div>
                  <h2 className="text-[28px] font-black uppercase leading-none tracking-[0.07em] text-white">Recent Projects</h2>
                  <div className="gold-metal-bg mt-[15px] h-[3px] w-[55px]" />
                </div>
                <Link className="flex items-center gap-[13px] text-[12px] font-black uppercase tracking-[0.12em] text-[var(--logo-gold)]" href="/projects">
                  View All Projects <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />
                </Link>
              </div>
              <div className="relative grid grid-cols-2 gap-[24px]">
                {projects.map((project) => (
                  <article className="overflow-hidden rounded-[4px] shadow-[0_12px_26px_rgba(0,0,0,0.18)] ring-1 ring-[rgba(255,240,188,0.18)]" key={project.title}>
                    <div className="relative">
                      <img alt={project.title} className="h-[195px] w-full object-cover" src={project.image} />
                      <div className="gold-image-line absolute inset-x-0 bottom-0 h-[3px]" />
                    </div>
                    <div className="bg-white/5 px-5 py-4">
                      <h3 className="text-[17px] font-black uppercase tracking-[0.045em] text-white">{project.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-white/75">Premium materials, clean detailing, and reliable project management.</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
