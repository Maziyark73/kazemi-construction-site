"use client";

import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import WebsiteShell from "@/packages/website-engine/layouts/WebsiteShell";
import type React from "react";

export default function ContractorLayout({ children, config }: { children: React.ReactNode; config: WebsiteConfig }) {
  return (
    <WebsiteShell config={config}>
      {children}
    </WebsiteShell>
  );
}
