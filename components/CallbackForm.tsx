"use client";
import { useState, type ChangeEvent } from "react";
import { ArrowRight, CheckCircle, MessageSquare, Phone, User } from "lucide-react";
import Field from "./Field";

type CallbackState = { full_name: string; phone: string; message: string; };

interface CallbackFormProps { source?: string; }

export default function CallbackForm({ source = "callback_form" }: CallbackFormProps) {
  const [form, setForm] = useState<CallbackState>({ full_name: "", phone: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const update = (field: keyof CallbackState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(c => ({ ...c, [field]: e.target.value }));

  const submit = async () => {
    if (!form.full_name.trim()) { setError("Please enter your name."); return; }
    if (honeypot) { setDone(true); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_type: "Callback Request", ...form, source, website: honeypot }),
      });
      const data = await res.json();
      if (!data.ok) { setError("Something went wrong. Please call us directly."); return; }
      setDone(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (done) return (
    <div className="flex min-h-[227px] flex-col items-center justify-center gap-4 text-center text-white">
      <CheckCircle className="h-12 w-12 text-[var(--logo-gold)]" />
      <h3 className="text-xl font-black uppercase tracking-[0.045em]">Request Received</h3>
      <p className="max-w-[260px] text-sm leading-6 text-white/70">We&apos;ll call you back soon.</p>
    </div>
  );

  return (
    <form className="space-y-[11px]">
      <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
        autoComplete="off" tabIndex={-1} aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }} />
      <Field icon={User} onChange={update("full_name")} placeholder="Full Name" value={form.full_name} />
      <Field icon={Phone} onChange={update("phone")} placeholder="Phone Number" value={form.phone} />
      <Field as="textarea" icon={MessageSquare} onChange={update("message")} placeholder="What do you need done?" value={form.message} />
      {error && <p className="text-center text-xs font-semibold text-red-200">{error}</p>}
      <button className="gold-outline-button flex h-[45px] w-full items-center justify-center gap-[10px] rounded-[3px] text-[13px] font-black uppercase tracking-[0.08em] transition disabled:opacity-60"
        disabled={loading} onClick={submit} type="button">
        {loading ? "Sending..." : "Request Callback"}
        {!loading && <ArrowRight className="h-[14px] w-[14px]" strokeWidth={3} />}
      </button>
    </form>
  );
}
