export type SectionId =
  | "hero"
  | "project-stories"
  | "local-proof"
  | "trust-details"
  | "lead-capture"
  | "services"
  | "testimonials"
  | "faq"
  | "service-areas";

export type SectionDefinition = {
  id: SectionId;
  label: string;
};

