"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Phone, ShieldCheck, Users, Clock3, Handshake, Home, Bath, Hammer, Trees, Building2, ArrowRight, Mail, MapPin, CheckCircle } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const LOGO = "/logo.png";

const services = [
  { title: "Kitchen Remodeling", description: "Beautiful, functional kitchens designed for the way you live.", icon: Home, image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80" },
  { title: "Bathroom Remodeling", description: "Modern upgrades that add comfort, value, and style.", icon: Bath, image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80" },
  { title: "Basement Finishing", description: "Maximize your space with quality finishes and smart design.", icon: Building2, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" },
  { title: "Decks & Outdoor Spaces", description: "Custom outdoor spaces for relaxing, hosting, and family time.", icon: Trees, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" },
  { title: "Additions & Renovations", description: "Seamless additions and renovations built around your needs.", icon: Hammer, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80" },
];

const trustItems = [
  { title: "Licensed & Insured", text: "Fully licensed and insured for your peace of mind.", icon: ShieldCheck },
  { title: "Quality Craftsmanship", text: "We take pride in delivering high-quality work.", icon: Users },
  { title: "On Time. On Budget.", text: "We respect your time and your investment.", icon: Clock3 },
  { title: "Customer Focused", text: "Your satisfaction is our top priority.", icon: Handshake },
];

function EstimateForm() {
  const [form, setForm] = useState({ full_name: "", phone: "", email: "", project_type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (!form.full_name) return;
    setLoading(true);
    await supabase.schema("kazemi").from("leads").insert({
      ...form,
      source: "estimate_form",
    });
    setLoading(false);
    setDone(true);
  };

  if (done) return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
      <CheckCircle className="h-12 w-12 text-amber-500" />
      <h3 className="text-xl font-black uppercase">Request Received!</h3>
      <p className="text-sm text-neutral-500">We&apos;ll be in touch within 24 hours.</p>
    </div>
  );

  return (
    <div className="space-y-4">
      <input className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-amber-500" placeholder="Full Name *" value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))} />
      <input className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-amber-500" placeholder="Phone Number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
      <input className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-amber-500" placeholder="Email Address" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      <select className="w-full rounded-md border border-neutral-300 px-4 py-3 text-neutral-500 outline-none focus:border-amber-500" value={form.project_type} onChange={e => setForm(f => ({ ...f, project_type: e.target.value }))}>
        <option value="">Project Type</option>
        <option>Kitchen Remodeling</option>
        <option>Bathroom Remodeling</option>
        <option>Deck or Outdoor Space</option>
        <option>Addition or Renovation</option>
        <option>Basement Finishing</option>
        <option>Other General Contracting</option>
      </select>
      <textarea className="h-28 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-amber-500" placeholder="Tell us about your project" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
      <button type="button" onClick={submit} disabled={loading} className="w-full rounded-md bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white disabled:opacity-60">
        {loading ? "Sending..." : "Submit Request"}
      </button>
    </div>
  );
}

function CallbackForm() {
  const [form, setForm] = useState({ full_name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (!form.full_name) return;
    setLoading(true);
    await supabase.schema("kazemi").from("leads").insert({
      full_name: form.full_name,
      phone: form.phone,
      message: form.message,
      source: "callback_form",
    });
    setLoading(false);
    setDone(true);
  };

  if (done) return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center text-white">
      <CheckCircle className="h-12 w-12 text-amber-400" />
      <h3 className="text-xl font-black uppercase">Got it!</h3>
      <p className="text-sm text-neutral-300">We&apos;ll call you back soon.</p>
    </div>
  );

  return (
    <div className="space-y-4">
      <input className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-amber-500" placeholder="Your Name *" value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))} />
      <input className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-amber-500" placeholder="Phone Number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
      <textarea className="h-28 w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-amber-500" placeholder="What do you need done?" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
      <button type="button" onClick={submit} disabled={loading} className="w-full rounded-md bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white disabled:opacity-60">
        {loading ? "Sending..." : "Send Request"}
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center">
            <img src={LOGO} alt="Kazemi Construction LLC" className="h-16 w-auto" />
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
            <a className="text-amber-400 border-b-2 border-amber-400 pb-1" href="#home">Home</a>
            <a className="hover:text-amber-400 transition-colors" href="#about">About Us</a>
            <a className="hover:text-amber-400 transition-colors" href="#services">Services</a>
            <a className="hover:text-amber-400 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-amber-400 transition-colors" href="#reviews">Reviews</a>
            <a className="hover:text-amber-400 transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a className="flex items-center gap-2 font-semibold" href="tel:+17037325447">
              <Phone className="h-5 w-5 text-amber-400" />
              <span>(703) 732-5447</span>
            </a>
            <a href="#estimate" className="rounded-md bg-gradient-to-r from-amber-500 to-yellow-600 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:opacity-90">Get a Free Estimate</a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2400&q=90" alt="Luxury home exterior" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>
          <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_420px]">
            <div className="max-w-2xl">
              <p className="mb-4 text-base font-bold uppercase tracking-[0.22em] text-amber-400">Built on Trust.</p>
              <h1 className="mb-5 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">Built for <br /> Generations.</h1>
              <div className="mb-5 h-1 w-20 bg-amber-500" />
              <p className="mb-9 max-w-xl text-lg leading-8 text-neutral-100">Kazemi Construction LLC is a full-service general contractor delivering quality craftsmanship and reliable solutions for your home or business.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-amber-500 to-yellow-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl">Our Services <ArrowRight className="h-4 w-4" /></a>
                <a href="#estimate" className="inline-flex items-center justify-center rounded-md border border-amber-500/70 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-amber-500/10">Get a Free Estimate</a>
              </div>
            </div>
            <div id="estimate" className="rounded-2xl bg-white p-7 text-neutral-900 shadow-2xl">
              <h2 className="mb-2 text-center text-2xl font-black uppercase">Get a Free Estimate</h2>
              <div className="mx-auto mb-6 h-1 w-16 bg-amber-500" />
              <EstimateForm />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-neutral-900">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 py-8 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`flex gap-5 py-5 ${index !== 0 ? "lg:border-l lg:border-white/10 lg:pl-10" : ""}`}>
                  <Icon className="mt-1 h-9 w-9 shrink-0 text-amber-400" />
                  <div>
                    <h3 className="mb-2 text-sm font-black uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm leading-6 text-neutral-300">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services" className="bg-stone-100 px-6 py-16 text-neutral-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">Our Services</h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-amber-500" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-40">
                      <img className="h-full w-full object-cover" src={service.image} alt={service.title} />
                      <div className="absolute -bottom-7 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 shadow-lg">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="px-5 pb-6 pt-10 text-center">
                      <h3 className="mb-3 text-sm font-black uppercase tracking-wide">{service.title}</h3>
                      <p className="text-sm leading-6 text-neutral-600">{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-amber-600 px-12 py-3 text-sm font-bold uppercase tracking-wide text-amber-700 transition hover:bg-amber-50">View All Services</a>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-neutral-950 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-wide">Recent Projects</h2>
                <div className="mt-3 h-1 w-16 bg-amber-500" />
              </div>
              <a href="#contact" className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-400 md:inline-flex">View All Projects <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {["Kitchen Upgrade", "Outdoor Deck", "Home Renovation"].map((title, i) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 h-48 rounded-lg bg-neutral-800 bg-cover bg-center" style={{ backgroundImage: `url(${services[i].image})` }} />
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-neutral-300">Clean craftsmanship, reliable timeline, and a finished result built to last.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-6 py-16 text-neutral-950">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-amber-600">Ready to Build?</p>
              <h2 className="mb-5 text-4xl font-black leading-tight">Get a reliable contractor for your next project.</h2>
              <p className="mb-8 text-lg leading-8 text-neutral-600">Whether it&apos;s a remodel, repair, addition, or full renovation, Kazemi Construction LLC is ready to help you plan it clearly and build it properly.</p>
              <div className="space-y-4 text-neutral-700">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-600" /> (703) 732-5447</div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-600" /> info@kazemiconstruction.com</div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-600" /> Serving homeowners and businesses</div>
              </div>
            </div>
            <div className="rounded-2xl bg-neutral-950 p-8 text-white shadow-2xl">
              <h3 className="mb-6 text-2xl font-black uppercase">Request a Callback</h3>
              <CallbackForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
