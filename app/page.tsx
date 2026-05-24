"use client";

import { useState, type ChangeEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  ArrowRight,
  Bath,
  Building2,
  CheckCircle,
  ChevronDown,
  Clock3,
  Handshake,
  Home,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Trees,
  User,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const logoImage = "/logo.png";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Beautiful, functional kitchens designed for the way you live.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bathroom Remodeling",
    description: "Modern upgrades that add comfort, value, and style.",
    icon: Bath,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Basement Finishing",
    description: "Maximize your space with quality finishes and smart design.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Decks & Outdoor Spaces",
    description: "Custom outdoor spaces for relaxation and entertainment.",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Additions & Renovations",
    description: "Seamless additions and renovations to fit your needs.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
  },
];

const trustItems = [
  {
    title: "Licensed & Insured",
    text: "Fully licensed and insured for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Craftsmanship",
    text: "We take pride in delivering high-quality work.",
    icon: Users,
  },
  {
    title: "On Time. On Budget.",
    text: "We respect your time and your investment.",
    icon: Clock3,
  },
  {
    title: "Customer Focused",
    text: "Your satisfaction is our top priority.",
    icon: Handshake,
  },
];

const projects = [
  {
    title: "Whole Home Renovation",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Custom Kitchen Remodel",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Outdoor Living Build",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80",
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#projects" },
  { label: "Contact", href: "#estimate" },
];

type EstimateState = {
  full_name: string;
  phone: string;
  email: string;
  project_type: string;
  message: string;
};

function LogoMark() {
  return (
    <a
      aria-label="Kazemi Construction LLC home"
      className="flex h-[170px] w-[245px] shrink-0 items-center md:h-[210px] md:w-[390px]"
      href="#home"
    >
      <img
        alt="Kazemi Construction LLC"
        className="h-full w-full object-contain object-left drop-shadow-[0_9px_18px_rgba(0,0,0,0.82)]"
        src={logoImage}
      />
    </a>
  );
}

function Field({
  as = "input",
  icon: Icon,
  placeholder,
  value,
  onChange,
}: {
  as?: "input" | "textarea" | "select";
  icon: LucideIcon;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}) {
  if (as === "textarea") {
    return (
      <label className="relative block">
        <MessageSquare className="pointer-events-none absolute left-[13px] top-[13px] h-[15px] w-[15px] text-[var(--logo-gold-mid)]" />
        <textarea
          aria-label={placeholder}
          className="h-[85px] w-full resize-none rounded-[3px] border border-[#d3d3d3] bg-white py-[12px] pl-[38px] pr-3 text-[13px] leading-5 text-[#2c2c2c] outline-none placeholder:text-[#838383] focus:border-[var(--logo-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.16)]"
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
    );
  }

  if (as === "select") {
    return (
      <label className="relative block">
        <Icon className="pointer-events-none absolute left-[13px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--logo-gold-mid)]" />
        <select
          aria-label={placeholder}
          className="h-[42px] w-full appearance-none rounded-[3px] border border-[#d3d3d3] bg-white pl-[38px] pr-10 text-[13px] text-[#777] outline-none focus:border-[var(--logo-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.16)]"
          onChange={onChange}
          value={value}
        >
          <option value="">{placeholder}</option>
          <option>Kitchen Remodeling</option>
          <option>Bathroom Remodeling</option>
          <option>Basement Finishing</option>
          <option>Decks & Outdoor Spaces</option>
          <option>Additions & Renovations</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-[13px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[var(--logo-gold-dark)]" />
      </label>
    );
  }

  return (
    <label className="relative block">
      <Icon className="pointer-events-none absolute left-[13px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--logo-gold-mid)]" />
      <input
        aria-label={placeholder}
        className="h-[42px] w-full rounded-[3px] border border-[#d3d3d3] bg-white pl-[38px] pr-3 text-[13px] text-[#2c2c2c] outline-none placeholder:text-[#838383] focus:border-[var(--logo-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.16)]"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

function EstimateForm() {
  const [form, setForm] = useState<EstimateState>({
    full_name: "",
    phone: "",
    email: "",
    project_type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof EstimateState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const submit = async () => {
    if (!form.full_name.trim()) {
      setError("Please enter your name.");
      return;
    }

    setLoading(true);
    setError("");

    const { error: insertError } = await supabase.schema("kazemi").from("leads").insert({
      ...form,
      source: "estimate_form",
    });

    setLoading(false);

    if (insertError) {
      setError("Something went wrong. Please call us directly.");
      return;
    }

    setDone(true);
  };

  if (done) {
    return (
      <div className="flex min-h-[293px] flex-col items-center justify-center gap-4 text-center">
        <CheckCircle className="h-12 w-12 text-[var(--logo-gold)]" />
        <h3 className="text-xl font-black uppercase tracking-[0.045em]">Request Received</h3>
        <p className="max-w-[260px] text-sm leading-6 text-neutral-500">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="space-y-[11px]">
      <Field icon={User} onChange={update("full_name")} placeholder="Full Name" value={form.full_name} />
      <Field icon={Phone} onChange={update("phone")} placeholder="Phone Number" value={form.phone} />
      <Field icon={Mail} onChange={update("email")} placeholder="Email Address" value={form.email} />
      <Field as="select" icon={Wrench} onChange={update("project_type")} placeholder="Project Type" value={form.project_type} />
      <Field as="textarea" icon={MessageSquare} onChange={update("message")} placeholder="Tell us about your project" value={form.message} />
      {error ? <p className="text-center text-xs font-semibold text-red-700">{error}</p> : null}
      <button
        className="gold-outline-button flex h-[45px] w-full items-center justify-center gap-[10px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.08em] transition disabled:cursor-not-allowed disabled:opacity-60"
        disabled={loading}
        onClick={submit}
        type="button"
      >
        {loading ? "Sending..." : "Submit Request"}
        {!loading ? <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} /> : null}
      </button>
    </form>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--logo-black)] text-white">
      <header className="relative z-30 border-b border-white/10 bg-[var(--logo-black)] shadow-[0_14px_34px_rgba(0,0,0,0.38)]">
        <div className="mx-auto flex h-[190px] max-w-[1760px] items-center justify-between px-5 md:h-[232px] 2xl:px-8">
          <LogoMark />

          <nav className="ml-[54px] hidden h-full items-center gap-[36px] text-[12px] font-black uppercase tracking-[0.055em] xl:flex 2xl:ml-[70px] 2xl:gap-[44px]">
            {navItems.map((item) => (
              <a
                className={`relative flex h-full items-center transition hover:text-[var(--logo-gold)] ${
                  item.label === "Home"
                    ? "text-[var(--logo-gold)] after:absolute after:bottom-[56px] after:left-1/2 after:h-[2px] after:w-[41px] after:-translate-x-1/2 after:bg-[var(--logo-gold)]"
                    : "text-white"
                }`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-[26px] 2xl:flex">
            <a className="flex items-center gap-[13px] text-[17px] font-bold tracking-[0.02em]" href="tel:+17037325447">
              <Phone className="h-[18px] w-[18px] text-[var(--logo-gold)]" strokeWidth={3} />
              <span>(703) 732-5447</span>
            </a>
            <a
              className="gold-outline-button flex h-[48px] w-[235px] items-center justify-center gap-[10px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.085em] transition"
              href="#estimate"
            >
              Get a Free Estimate
              <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />
            </a>
          </div>

          <a className="ml-auto hidden items-center gap-2 text-sm font-bold text-white md:flex 2xl:hidden" href="tel:+17037325447">
            <Phone className="h-4 w-4 text-[var(--logo-gold)]" />
            <span>(703) 732-5447</span>
          </a>
          <button className="ml-4 grid h-10 w-10 place-items-center rounded-[3px] border border-white/20 xl:hidden" type="button" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <span className="gold-hairline pointer-events-none absolute inset-x-0 bottom-0 h-px" />
      </header>

      <main id="home">
        <section className="relative min-h-[585px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Luxury custom home exterior at dusk"
              className="h-full w-full object-cover object-[58%_50%]"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.88)_20%,rgba(0,0,0,0.56)_43%,rgba(0,0,0,0.18)_69%,rgba(0,0,0,0.24)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_48%,rgba(0,0,0,0.58)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(255,240,188,0.34),transparent)]" />
          </div>

          <div className="relative mx-auto grid min-h-[585px] max-w-[1584px] items-center gap-10 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_389px] lg:py-0 2xl:px-0">
            <div className="max-w-[610px] pt-1">
              <p className="gold-metal-text mb-[19px] text-[20px] font-black uppercase leading-none tracking-[0.19em]">
                Built on Trust.
              </p>
              <h1 className="text-[49px] font-black uppercase leading-[1.02] tracking-[0.025em] text-white sm:text-[64px] xl:text-[74px]">
                Built for
                <br />
                Generations.
              </h1>
              <div className="gold-metal-bg mb-[17px] mt-[20px] h-[3px] w-[73px]" />
              <p className="mb-[36px] max-w-[590px] text-[18px] font-medium leading-[1.78] text-white md:text-[20px]">
                Kazemi Construction LLC is a full-service general contractor delivering quality craftsmanship and
                reliable solutions for your home or business.
              </p>
              <div className="flex flex-col gap-[29px] sm:flex-row">
                <a
                  className="gold-outline-button flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.075em] transition sm:w-[182px]"
                  href="#services"
                >
                  Our Services
                  <ArrowRight className="h-[15px] w-[15px]" strokeWidth={3} />
                </a>
                <a
                  className="gold-outline-button flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.075em] transition sm:w-[212px]"
                  href="#estimate"
                >
                  Get a Free Estimate
                  <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />
                </a>
              </div>
            </div>

            <aside
              id="estimate"
              className="luxury-form w-full max-w-[389px] self-end rounded-[10px] px-[30px] pb-[30px] pt-[29px] text-[#171717] shadow-[0_22px_58px_rgba(0,0,0,0.34)] lg:mb-[11px]"
            >
              <h2 className="text-center text-[21px] font-black uppercase leading-none tracking-[0.045em]">
                Get a Free Estimate
              </h2>
              <div className="gold-metal-bg mx-auto mb-[21px] mt-[15px] h-[3px] w-[36px]" />
              <EstimateForm />
            </aside>
          </div>
        </section>

        <section className="min-h-[118px] border-y border-white/5 bg-[linear-gradient(90deg,#080909_0%,#171816_48%,#0a0b0a_100%)] shadow-[inset_0_1px_0_rgba(255,240,188,0.08)]">
          <div className="mx-auto grid min-h-[118px] max-w-[1584px] gap-y-6 px-5 py-[23px] md:grid-cols-2 lg:grid-cols-4 lg:py-0 2xl:px-0">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  className={`flex items-center gap-[27px] ${
                    index === 0 ? "" : "lg:border-l lg:border-white/10 lg:pl-[57px]"
                  }`}
                  key={item.title}
                >
                  <div className="gold-outline-medallion grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full">
                    <Icon className="h-[30px] w-[30px] text-[var(--logo-gold-light)]" strokeWidth={1.75} />
                  </div>
                  <div className="max-w-[245px]">
                    <h3 className="mb-[7px] text-[14px] font-black uppercase leading-none tracking-[0.055em]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] font-medium leading-[1.55] text-white">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services" className="bg-[#f8f7f2] pb-[12px] pt-[22px] text-[#151515]">
          <div className="mx-auto max-w-[1584px] px-5 2xl:px-0">
            <div className="text-center">
              <h2 className="text-[26px] font-black uppercase leading-none tracking-[0.07em] md:text-[28px]">
                Our Services
              </h2>
              <div className="gold-metal-bg mx-auto mt-[12px] h-[3px] w-[35px]" />
            </div>

            <div className="mt-[22px] grid gap-[25px] md:grid-cols-2 lg:grid-cols-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    className="luxury-card group min-h-[250px] overflow-hidden rounded-[4px] shadow-[0_7px_18px_rgba(19,18,15,0.09)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(19,18,15,0.14)]"
                    key={service.title}
                  >
                    <div className="relative h-[141px]">
                      <img alt={service.title} className="h-full w-full object-cover" src={service.image} />
                      <div className="gold-image-line absolute inset-x-0 bottom-0 h-[3px]" />
                      <div className="gold-outline-medallion absolute -bottom-[29px] left-[25px] grid h-[58px] w-[58px] place-items-center rounded-full">
                        <Icon className="h-[29px] w-[29px] text-[var(--logo-gold-light)]" strokeWidth={1.9} />
                      </div>
                    </div>
                    <div className="px-[20px] pb-[18px] pt-[35px] text-center">
                      <h3 className="mb-[12px] text-[14px] font-black uppercase leading-none tracking-[0.015em]">
                        {service.title}
                      </h3>
                      <p className="mx-auto max-w-[230px] text-[13px] font-medium leading-[1.65] text-[#202020]">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-[17px] text-center">
              <a
                className="gold-outline-button inline-flex h-[38px] w-full max-w-[260px] items-center justify-center gap-[10px] rounded-[2px] text-[12px] font-black uppercase tracking-[0.12em] transition"
                href="#services"
              >
                View All Services
                <ArrowRight className="h-[13px] w-[13px]" strokeWidth={3} />
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#f8f7f2] pb-16 text-white">
          <div className="mx-auto max-w-[1584px] px-5 2xl:px-0">
            <div className="luxury-dark-panel relative min-h-[430px] overflow-hidden rounded-[4px] px-[34px] pb-[34px] pt-[28px] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_12%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]" />

              <div className="relative mb-[26px] flex items-center justify-between gap-6">
                <div>
                  <h2 className="text-[28px] font-black uppercase leading-none tracking-[0.07em]">Recent Projects</h2>
                  <div className="gold-metal-bg mt-[15px] h-[3px] w-[55px]" />
                </div>
                <a
                  className="hidden items-center gap-[13px] text-[12px] font-black uppercase tracking-[0.12em] text-[var(--logo-gold)] md:flex"
                  href="#projects"
                >
                  View All Projects
                  <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />
                </a>
              </div>

              <div className="relative grid gap-[24px] md:grid-cols-3">
                {projects.map((project) => (
                  <article
                    className="overflow-hidden rounded-[4px] bg-white/8 shadow-[0_12px_26px_rgba(0,0,0,0.18)] ring-1 ring-[rgba(255,240,188,0.18)]"
                    key={project.title}
                  >
                    <div className="relative">
                      <img alt={project.title} className="h-[195px] w-full object-cover" src={project.image} />
                      <div className="gold-image-line absolute inset-x-0 bottom-0 h-[3px]" />
                    </div>
                    <div className="px-5 py-4">
                      <h3 className="text-[17px] font-black uppercase tracking-[0.045em]">{project.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-white/75">
                        Premium materials, clean detailing, and reliable project management.
                      </p>
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
