import ContractorLayout from "../ContractorLayout";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import LeadCaptureSection from "../sections/LeadCaptureSection";
import ProjectGallerySection from "../sections/ProjectGallerySection";

export default function ContractorProjectsPage({ config }: { config: WebsiteConfig }) {
  return (
    <ContractorLayout config={config}>
      <ProjectGallerySection />
      <LeadCaptureSection />
    </ContractorLayout>
  );
}
