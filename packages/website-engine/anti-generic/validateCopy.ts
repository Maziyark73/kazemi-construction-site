import type { ContentConfig } from "@/packages/website-engine/config/types";

export const bannedGenericPhrases = [
  "quality craftsmanship",
  "your trusted partner",
  "transform your space",
  "exceed expectations",
  "bringing your vision to life",
  "premier contractor",
  "commitment to excellence",
  "customer satisfaction",
  "one-stop solution",
  "dream home",
];

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
  return [];
}

export function validateAntiGenericCopy(content: ContentConfig) {
  const haystack = collectStrings(content).join("\n").toLowerCase();
  return bannedGenericPhrases.filter((phrase) => haystack.includes(phrase));
}

