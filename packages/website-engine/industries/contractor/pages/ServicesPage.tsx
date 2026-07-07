import ContractorLayout from "../ContractorLayout";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import LeadCaptureSection from "../sections/LeadCaptureSection";
import LocalProofSection from "../sections/LocalProofSection";
import ServicesSection from "../sections/ServicesSection";

export default function ContractorServicesPage({ config }: { config: WebsiteConfig }) {
  return (
    <ContractorLayout config={config}>
      <ServicesSection />
      <LocalProofSection />
      <LeadCaptureSection />
    </ContractorLayout>
  );
}
