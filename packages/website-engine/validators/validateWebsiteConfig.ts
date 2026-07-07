import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import { validateAntiGenericCopy } from "@/packages/website-engine/anti-generic/validateCopy";

export function validateWebsiteConfig(config: WebsiteConfig) {
  const issues: string[] = [];
  if (!config.business.companyName) issues.push("Missing business.companyName");
  if (!config.business.phone) issues.push("Missing business.phone");
  if (!config.content.services.items.length) issues.push("At least one service is required");
  if (!config.content.faq.items.length) issues.push("At least one FAQ is required");

  const bannedPhrases = validateAntiGenericCopy(config.content);
  for (const phrase of bannedPhrases) {
    issues.push(`Generic phrase found: ${phrase}`);
  }

  return issues;
}

