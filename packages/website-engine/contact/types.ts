import type { BusinessConfig } from "@/packages/website-engine/config/types";

export type ContactLead = {
  form_type?: string;
  full_name: string;
  phone?: string;
  email?: string;
  project_type?: string;
  message?: string;
  source?: string;
  website?: string;
};

export type SavedLead = Omit<ContactLead, "form_type" | "website">;

export type ContactHandlerConfig = {
  business: BusinessConfig;
  ownerEmail?: string;
  resendApiKey?: string;
  leadsFromEmail?: string;
  retellApiKey?: string;
  retellAgentId?: string;
  retellFromNumber?: string;
  timeZone?: string;
};

export type ContactHandlerOptions = {
  request: Request;
  config: ContactHandlerConfig;
  saveLead?: (lead: SavedLead) => Promise<void>;
};

