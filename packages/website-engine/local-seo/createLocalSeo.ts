import type { BusinessConfig, SEOConfig } from "@/packages/website-engine/config/types";

export function createLocalSeo({ business, seo }: { business: BusinessConfig; seo: SEOConfig }) {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    serviceAreaSummary: `${business.companyName} serves ${business.serviceAreas.join(", ")}.`,
  };
}

