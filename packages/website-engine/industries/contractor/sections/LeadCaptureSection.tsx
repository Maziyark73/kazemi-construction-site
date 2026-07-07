"use client";

import { CheckCircle, Phone } from "lucide-react";
import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import EstimateForm from "@/packages/website-engine/components/EstimateForm";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

export default function LeadCaptureSection() {
  const { business, content } = useWebsiteConfig();
  return (
    <section id="estimate" className="bg-[var(--brand-cream)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow={content.leadCapture.eyebrow}
            title={content.leadCapture.title}
            text={content.leadCapture.text}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.leadCapture.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-bold text-stone-800 shadow-sm">
                <CheckCircle className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                {item}
              </div>
            ))}
          </div>
          <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`} className="mt-8 inline-flex items-center gap-3 text-lg font-black text-stone-950">
            <Phone className="h-5 w-5 text-[var(--brand-gold)]" />
            {business.phone}
          </a>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-2xl shadow-stone-900/10">
          <h3 className="text-2xl font-black uppercase leading-tight tracking-wide text-stone-950">{content.hero.primaryCTA.label}</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">{content.hero.estimatePanel.text}</p>
          <div className="mt-6">
            <EstimateForm content={content.leadCapture.form} projectTypes={content.services.items.map((service) => service.title)} source="lead_capture" />
          </div>
        </div>
      </div>
    </section>
  );
}
