import type { FAQ } from "@/packages/website-engine/config/types";

export default function FaqAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
      {items.map((item, index) => (
        <details key={item.question} className="group p-5" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black uppercase tracking-wide text-stone-950">
            {item.question}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-stone-100 text-xl leading-none text-[var(--brand-bronze)] transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

