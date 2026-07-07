import type { BusinessConfig, ContentConfig } from "@/packages/website-engine/config/types";

export function createLocalBusinessSchema({ business, content }: { business: BusinessConfig; content: ContentConfig }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.companyName,
    telephone: business.phone,
    email: business.email,
    address: business.address,
    areaServed: business.serviceAreas,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.averageRating,
      reviewCount: business.reviewsCount,
    },
    makesOffer: content.services.items.map((service) => ({
      "@type": "Offer",
      itemOffered: service.title,
    })),
  };
}

