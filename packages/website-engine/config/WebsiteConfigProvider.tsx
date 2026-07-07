"use client";

import { createContext, useContext } from "react";
import type React from "react";
import type { WebsiteConfig } from "./types";

const WebsiteConfigContext = createContext<WebsiteConfig | null>(null);

export function WebsiteConfigProvider({ children, config }: { children: React.ReactNode; config: WebsiteConfig }) {
  return <WebsiteConfigContext.Provider value={config}>{children}</WebsiteConfigContext.Provider>;
}

export function useWebsiteConfig() {
  const config = useContext(WebsiteConfigContext);
  if (!config) {
    throw new Error("useWebsiteConfig must be used inside WebsiteConfigProvider.");
  }
  return config;
}
