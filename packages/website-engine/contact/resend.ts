import { Resend } from "resend";
import { createLeadEmailHtml } from "./emailTemplate";
import type { ContactHandlerConfig, ContactLead } from "./types";

export async function sendLeadEmailNotification({
  config,
  lead,
  timestamp,
}: {
  config: ContactHandlerConfig;
  lead: ContactLead;
  timestamp: string;
}) {
  if (!config.resendApiKey || !config.ownerEmail) return;
  if (config.resendApiKey === "your_resend_key_here" || config.ownerEmail === "your_email_here") return;

  const resend = new Resend(config.resendApiKey);
  await resend.emails.send({
    from: config.leadsFromEmail || `${config.business.companyName} <leads@example.com>`,
    to: config.ownerEmail,
    subject: `New Website Lead - ${lead.form_type || "Contact Form"}`,
    html: createLeadEmailHtml({ business: config.business, lead, timestamp }),
  });
}

