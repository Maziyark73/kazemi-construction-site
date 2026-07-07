import ContractorLayout from "../ContractorLayout";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import LeadCaptureSection from "../sections/LeadCaptureSection";
import TestimonialsSection from "../sections/TestimonialsSection";

export default function ContractorReviewsPage({ config }: { config: WebsiteConfig }) {
  return (
    <ContractorLayout config={config}>
      <TestimonialsSection />
      <LeadCaptureSection />
    </ContractorLayout>
  );
}
