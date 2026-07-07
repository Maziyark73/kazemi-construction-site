"use client";
import type { ChangeEvent } from "react";
import { ChevronDown, MessageSquare, type LucideIcon } from "lucide-react";

interface FieldProps {
  as?: "input" | "textarea" | "select";
  icon: LucideIcon;
  placeholder: string;
  options?: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function Field({ as = "input", icon: Icon, placeholder, options = [], value, onChange }: FieldProps) {
  if (as === "textarea") return (
    <label className="relative block">
      <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[var(--brand-gold)]" />
      <textarea aria-label={placeholder} className="min-h-28 w-full resize-none rounded-md border border-stone-300 bg-white py-3 pl-10 pr-3 text-sm leading-6 text-stone-900 outline-none placeholder:text-stone-500 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.18)]" onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  );
  if (as === "select") return (
    <label className="relative block">
      <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--brand-gold)]" />
      <select aria-label={placeholder} className="h-12 w-full appearance-none rounded-md border border-stone-300 bg-white pl-10 pr-10 text-sm text-stone-700 outline-none focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.18)]" onChange={onChange} value={value}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-600" />
    </label>
  );
  return (
    <label className="relative block">
      <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--brand-gold)]" />
      <input aria-label={placeholder} className="h-12 w-full rounded-md border border-stone-300 bg-white pl-10 pr-3 text-sm text-stone-900 outline-none placeholder:text-stone-500 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.18)]" onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  );
}
