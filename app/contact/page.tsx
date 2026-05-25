"use client";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import CallbackForm from "@/components/CallbackForm";

export default function ContactPage() {
  return (
    <div style={{ minWidth: "1100px" }} className="bg-[var(--logo-black)] text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[var(--logo-black)] px-10 py-16">
          <div className="mx-auto max-w-[1584px] text-center">
            <p className="gold-metal-text mb-[13px] text-[15px] font-black uppercase leading-none tracking-[0.19em]">Get in Touch</p>
            <h1 className="text-[48px] font-black uppercase leading-[1.1] tracking-[0.04em]">Contact Us</h1>
            <div className="gold-metal-bg mx-auto mt-[18px] h-[3px] w-[55px]" />
            <p className="mx-auto mt-6 max-w-[700px] text-[18px] font-medium leading-[1.8] text-white/75">
              Ready to discuss your project? Reach out today and let&apos;s get started on bringing your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f8f7f2] px-10 py-16 text-[#151515]">
          <div className="mx-auto max-w-[1584px]">
            <div className="grid grid-cols-[minmax(0,1fr)_480px] gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-[32px] font-black uppercase leading-none tracking-[0.04em]">Let&apos;s Talk</h2>
                <div className="gold-metal-bg mt-[15px] h-[3px] w-[55px]" />
                <p className="mt-6 text-[17px] font-medium leading-[1.8] text-[#505050]">
                  Whether you have a question about our services, want to discuss a project, or just need some advice, we&apos;re here to help.
                </p>

                <div className="mt-10 space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+19163132237"
                    className="gold-outline-button flex items-center gap-5 rounded-[4px] px-6 py-5 transition"
                  >
                    <div className="gold-outline-medallion grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full">
                      <Phone className="h-[26px] w-[26px] text-[var(--logo-gold-light)]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/60">Call Us</p>
                      <p className="mt-1 text-[20px] font-black tracking-[0.02em] text-[var(--logo-gold-light)]">(916) 313-2237</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@kazemiconstructionllc.com"
                    className="gold-outline-button flex items-center gap-5 rounded-[4px] px-6 py-5 transition"
                  >
                    <div className="gold-outline-medallion grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full">
                      <Mail className="h-[26px] w-[26px] text-[var(--logo-gold-light)]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/60">Email Us</p>
                      <p className="mt-1 text-[18px] font-black tracking-[0.01em] text-[var(--logo-gold-light)]">info@kazemiconstructionllc.com</p>
                    </div>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="luxury-card rounded-[4px] p-6 shadow-[0_6px_18px_rgba(19,18,15,0.08)]">
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-[var(--logo-gold)]" />
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#888]">Service Area</p>
                        <p className="mt-1 text-[15px] font-semibold text-[#303030]">Sacramento & Surrounding Areas</p>
                      </div>
                    </div>
                  </div>
                  <div className="luxury-card rounded-[4px] p-6 shadow-[0_6px_18px_rgba(19,18,15,0.08)]">
                    <div className="flex items-center gap-4">
                      <Clock className="h-6 w-6 text-[var(--logo-gold)]" />
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#888]">Response Time</p>
                        <p className="mt-1 text-[15px] font-semibold text-[#303030]">Within 24 Hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callback Form */}
              <div className="luxury-dark-panel relative overflow-hidden rounded-[4px] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
                <div className="relative">
                  <h3 className="text-[24px] font-black uppercase leading-none tracking-[0.04em] text-white">Request a Callback</h3>
                  <div className="gold-metal-bg mt-[15px] h-[3px] w-[45px]" />
                  <p className="mt-5 text-[15px] font-medium leading-[1.7] text-white/70">
                    Fill out the form below and we&apos;ll call you back to discuss your project.
                  </p>
                  <div className="mt-8">
                    <CallbackForm source="contact_page" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
