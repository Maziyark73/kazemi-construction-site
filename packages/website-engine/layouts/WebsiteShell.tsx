"use client";

import { WebsiteConfigProvider } from "@/packages/website-engine/config/WebsiteConfigProvider";
import type { WebsiteConfig } from "@/packages/website-engine/config/types";
import type React from "react";
import SiteFooter from "@/packages/website-engine/components/SiteFooter";
import SiteHeader from "@/packages/website-engine/components/SiteHeader";
import { createThemeStyle } from "@/packages/website-engine/themes/themeStyle";

export default function WebsiteShell({ children, config }: { children: React.ReactNode; config: WebsiteConfig }) {
  const { business, content, theme } = config;

  return (
    <WebsiteConfigProvider config={config}>
      <div style={createThemeStyle(theme)} className="min-h-screen bg-white text-stone-950">
        <SiteHeader business={business} cta={content.hero.primaryCTA} navItems={content.navigation} />
        <main>{children}</main>
        <SiteFooter business={business} cta={content.footer.cta} services={content.services.items} />
      </div>
    </WebsiteConfigProvider>
  );
}
