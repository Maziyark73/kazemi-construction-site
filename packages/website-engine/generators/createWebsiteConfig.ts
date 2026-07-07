import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import { validateWebsiteConfig } from "@/packages/website-engine/validators/validateWebsiteConfig";

export function createWebsiteConfig(config: WebsiteConfig) {
  const issues = validateWebsiteConfig(config);
  if (issues.length > 0) {
    throw new Error(`Invalid website config:\n${issues.join("\n")}`);
  }
  return config;
}

