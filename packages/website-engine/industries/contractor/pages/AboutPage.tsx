import ContractorLayout from "../ContractorLayout";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import LeadCaptureSection from "../sections/LeadCaptureSection";
import LocalProofSection from "../sections/LocalProofSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";

export default function ContractorAboutPage({ config }: { config: WebsiteConfig }) {
  return (
    <ContractorLayout config={config}>
      <WhyChooseUsSection />
      <LocalProofSection />
      <LeadCaptureSection />
    </ContractorLayout>
  );
}
