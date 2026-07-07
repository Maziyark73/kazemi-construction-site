type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, align = "center", dark = false }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-gold)] sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-black uppercase leading-tight tracking-wide sm:text-4xl ${dark ? "text-white" : "text-stone-950"}`}>
        {title}
      </h2>
      <div className={`mt-5 h-1 w-14 rounded-full bg-[var(--brand-gold)] ${align === "center" ? "mx-auto" : ""}`} />
      {text && <p className={`mt-6 text-base leading-8 sm:text-lg ${dark ? "text-white/75" : "text-stone-600"}`}>{text}</p>}
    </div>
  );
}

