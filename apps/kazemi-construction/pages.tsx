import { kazemiWebsiteConfig } from "./config";
import { contractorIndustryAdapter } from "@/packages/website-engine/industries/contractor/adapter";

const {
  home: ContractorHomePage,
  about: ContractorAboutPage,
  services: ContractorServicesPage,
  projects: ContractorProjectsPage,
  reviews: ContractorReviewsPage,
  contact: ContractorContactPage,
} = contractorIndustryAdapter.pages;

export function KazemiHomePage() {
  return <ContractorHomePage config={kazemiWebsiteConfig} />;
}

export function KazemiAboutPage() {
  return <ContractorAboutPage config={kazemiWebsiteConfig} />;
}

export function KazemiServicesPage() {
  return <ContractorServicesPage config={kazemiWebsiteConfig} />;
}

export function KazemiProjectsPage() {
  return <ContractorProjectsPage config={kazemiWebsiteConfig} />;
}

export function KazemiReviewsPage() {
  return <ContractorReviewsPage config={kazemiWebsiteConfig} />;
}

export function KazemiContactPage() {
  return <ContractorContactPage config={kazemiWebsiteConfig} />;
}
