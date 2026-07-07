import { business } from "./business";
import { content } from "./content";
import { seo } from "./seo";
import { theme } from "./theme";
import { createWebsiteConfig } from "@/packages/website-engine/generators/createWebsiteConfig";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";

export const kazemiWebsiteConfig: WebsiteConfig = createWebsiteConfig({
  business,
  content,
  seo,
  theme,
});

export { business, content, seo, theme };
