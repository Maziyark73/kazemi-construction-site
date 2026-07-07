import type { BusinessConfig } from "@/packages/website-engine/config/types";
import type { ContactLead } from "./types";

export function createLeadEmailHtml({
  business,
  lead,
  timestamp,
}: {
  business: BusinessConfig;
  lead: ContactLead;
  timestamp: string;
}) {
  const rows = [
    ["Form Type", lead.form_type],
    ["Full Name", lead.full_name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Project Type", lead.project_type],
    ["Message", lead.message],
    ["Source", lead.source],
    ["Submitted", timestamp],
    ["AI Callback", lead.phone?.trim() ? "Retell callback requested" : "No phone provided"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#d69a2d;border-bottom:2px solid #d69a2d;padding-bottom:10px;">New Lead - ${business.companyName}</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        ${rows.map(([label, value], index) => `
          <tr style="${index % 2 === 0 ? "background:#f8f7f2;" : ""}">
            <td style="padding:12px;border:1px solid #ddd;font-weight:bold;width:140px;">${label}</td>
            <td style="padding:12px;border:1px solid #ddd;">${value || "N/A"}</td>
          </tr>`).join("")}
      </table>
    </div>`;
}

