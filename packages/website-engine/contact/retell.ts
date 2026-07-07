import type { ContactHandlerConfig, ContactLead } from "./types";
import { toE164 } from "./phone";

export async function triggerRetellCallback({ config, lead }: { config: ContactHandlerConfig; lead: ContactLead }) {
  if (!config.retellApiKey || !config.retellAgentId || !lead.phone?.trim()) return;

  const fromNumber = config.retellFromNumber || toE164(config.business.phone);
  const toNumber = toE164(lead.phone);
  if (!fromNumber || !toNumber) return;

  const response = await fetch("https://api.retell.ai/v2/create-phone-call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.retellApiKey}`,
    },
    body: JSON.stringify({
      from_number: fromNumber,
      to_number: toNumber,
      override_agent_id: config.retellAgentId,
      retell_llm_dynamic_variables: {
        customer_name: lead.full_name || "there",
        project_type: lead.project_type || "your project",
        message: lead.message || "",
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Retell callback failed: ${response.status} ${await response.text()}`);
  }
}

