import { sendLeadEmailNotification } from "./resend";
import { triggerRetellCallback } from "./retell";
import type { ContactHandlerOptions, ContactLead } from "./types";

function createTimestamp(timeZone = "America/Los_Angeles") {
  return new Date().toLocaleString("en-US", {
    timeZone,
    dateStyle: "full",
    timeStyle: "short",
  });
}

export async function handleContactRequest({ config, request, saveLead }: ContactHandlerOptions) {
  try {
    const body = await request.json();
    const lead = body as ContactLead;

    if (lead.website) return Response.json({ ok: true });

    if (!lead.full_name?.trim()) {
      return Response.json({ ok: false, error: "Name is required" }, { status: 400 });
    }

    if (saveLead) {
      await saveLead({
        full_name: lead.full_name,
        phone: lead.phone,
        email: lead.email,
        project_type: lead.project_type,
        message: lead.message,
        source: lead.source || "website",
      });
    }

    const timestamp = createTimestamp(config.timeZone);

    await Promise.allSettled([
      triggerRetellCallback({ config, lead }),
      sendLeadEmailNotification({ config, lead, timestamp }),
    ]);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}

