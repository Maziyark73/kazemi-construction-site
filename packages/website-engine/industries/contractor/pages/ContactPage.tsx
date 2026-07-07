import ContractorLayout from "../ContractorLayout";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import LeadCaptureSection from "../sections/LeadCaptureSection";
import ServiceAreasSection from "../sections/ServiceAreasSection";

export default function ContractorContactPage({ config }: { config: WebsiteConfig }) {
  return (
    <ContractorLayout config={config}>
      <LeadCaptureSection />
      <ServiceAreasSection />
    </ContractorLayout>
  );
}
