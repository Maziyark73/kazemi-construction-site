import { createClient } from "@supabase/supabase-js";
import { business } from "@/apps/kazemi-construction/config";
import { handleContactRequest } from "@/packages/website-engine/contact/handleContactRequest";
import type { SavedLead } from "@/packages/website-engine/contact/types";

async function saveKazemiLead(lead: SavedLead) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { error } = await supabase.from("leads").insert(lead);
  if (error) throw error;
}

export async function POST(request: Request) {
  return handleContactRequest({
    request,
    saveLead: saveKazemiLead,
    config: {
      business,
      ownerEmail: process.env.OWNER_EMAIL,
      resendApiKey: process.env.RESEND_API_KEY,
      leadsFromEmail: process.env.LEADS_FROM_EMAIL,
      retellApiKey: process.env.RETELL_API_KEY,
      retellAgentId: process.env.RETELL_AGENT_ID,
      retellFromNumber: process.env.RETELL_FROM_NUMBER,
      timeZone: "America/Los_Angeles",
    },
  });
}

