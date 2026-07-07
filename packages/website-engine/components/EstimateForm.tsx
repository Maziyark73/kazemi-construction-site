"use client";
import { useState, type ChangeEvent } from "react";
import { ArrowRight, CheckCircle, Mail, MessageSquare, Phone, User, Wrench } from "lucide-react";
import type { FormContent } from "@/packages/website-engine/config/types";
import Field from "./Field";

type EstimateState = { full_name: string; phone: string; email: string; project_type: string; message: string; };

interface EstimateFormProps {
  content: FormContent;
  projectTypes: string[];
  source?: string;
}

export default function EstimateForm({ content, projectTypes, source = "estimate_form" }: EstimateFormProps) {
  const [form, setForm] = useState<EstimateState>({ full_name: "", phone: "", email: "", project_type: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const update = (field: keyof EstimateState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(c => ({ ...c, [field]: e.target.value }));

  const submit = async () => {
    if (!form.full_name.trim()) { setError(content.requiredNameError); return; }
    if (honeypot) { setDone(true); return; }
    setLoading(true); setError("");
    try {
      console.info("Website engine lead", { form_type: "Estimate Request", ...form, source });
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  if (done) return (
    <div className="flex min-h-[293px] flex-col items-center justify-center gap-4 text-center">
      <CheckCircle className="h-12 w-12 text-[var(--brand-gold)]" />
      <h3 className="text-xl font-black uppercase tracking-wide text-stone-950">{content.successTitle}</h3>
      <p className="max-w-[260px] text-sm leading-6 text-stone-600">{content.successMessage}</p>
    </div>
  );

  return (
    <form className="space-y-3">
      <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
        autoComplete="off" tabIndex={-1} aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }} />
      <Field icon={User} onChange={update("full_name")} placeholder={content.nameLabel} value={form.full_name} />
      <Field icon={Phone} onChange={update("phone")} placeholder={content.phoneLabel} value={form.phone} />
      <Field icon={Mail} onChange={update("email")} placeholder={content.emailLabel} value={form.email} />
      <Field as="select" icon={Wrench} onChange={update("project_type")} options={projectTypes} placeholder={content.projectTypeLabel} value={form.project_type} />
      <Field as="textarea" icon={MessageSquare} onChange={update("message")} placeholder={content.messageLabel} value={form.message} />
      {error && <p className="text-center text-xs font-semibold text-red-700">{error}</p>}
      <button className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-stone-950 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-stone-800 disabled:opacity-60"
        disabled={loading} onClick={submit} type="button">
        {loading ? content.loadingLabel : content.submitLabel}
        {!loading && <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />}
      </button>
    </form>
  );
}
