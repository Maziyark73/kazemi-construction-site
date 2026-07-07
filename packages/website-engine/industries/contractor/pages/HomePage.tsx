import ContractorLayout from "../ContractorLayout";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import FaqSection from "../sections/FaqSection";
import HeroSection from "../sections/HeroSection";
import LeadCaptureSection from "../sections/LeadCaptureSection";
import LocalProofSection from "../sections/LocalProofSection";
import ProjectGallerySection from "../sections/ProjectGallerySection";
import ServiceAreasSection from "../sections/ServiceAreasSection";
import ServicesSection from "../sections/ServicesSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";

export default function ContractorHomePage({ config }: { config: WebsiteConfig }) {
  return (
    <ContractorLayout config={config}>
      <HeroSection />
      <ProjectGallerySection />
      <LocalProofSection />
      <WhyChooseUsSection />
      <LeadCaptureSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ServiceAreasSection />
    </ContractorLayout>
  );
}
