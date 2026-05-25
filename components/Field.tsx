"use client";
import type { ChangeEvent } from "react";
import { ChevronDown, MessageSquare, type LucideIcon } from "lucide-react";

interface FieldProps {
  as?: "input" | "textarea" | "select";
  icon: LucideIcon;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function Field({ as = "input", icon: Icon, placeholder, value, onChange }: FieldProps) {
  if (as === "textarea") return (
    <label className="relative block">
      <MessageSquare className="pointer-events-none absolute left-[13px] top-[13px] h-[15px] w-[15px] text-[var(--logo-gold-mid)]" />
      <textarea aria-label={placeholder} className="h-[85px] w-full resize-none rounded-[3px] border border-[#d3d3d3] bg-white py-[12px] pl-[38px] pr-3 text-[13px] leading-5 text-[#2c2c2c] outline-none placeholder:text-[#838383] focus:border-[var(--logo-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.16)]" onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  );
  if (as === "select") return (
    <label className="relative block">
      <Icon className="pointer-events-none absolute left-[13px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--logo-gold-mid)]" />
      <select aria-label={placeholder} className="h-[42px] w-full appearance-none rounded-[3px] border border-[#d3d3d3] bg-white pl-[38px] pr-10 text-[13px] text-[#777] outline-none focus:border-[var(--logo-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.16)]" onChange={onChange} value={value}>
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
  return (
    <label className="relative block">
      <Icon className="pointer-events-none absolute left-[13px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--logo-gold-mid)]" />
      <input aria-label={placeholder} className="h-[42px] w-full rounded-[3px] border border-[#d3d3d3] bg-white pl-[38px] pr-3 text-[13px] text-[#2c2c2c] outline-none placeholder:text-[#838383] focus:border-[var(--logo-gold)] focus:ring-2 focus:ring-[rgba(214,154,45,0.16)]" onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  );
}
