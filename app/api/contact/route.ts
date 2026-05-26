import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function triggerRetellCallback(
  phone: string,
  full_name: string,
  project_type: string,
  message: string
) {
  try {
    // Clean phone number — strip everything except digits and leading +
    const cleaned = phone.replace(/[^\d+]/g, "");
    const e164 = cleaned.startsWith("+") ? cleaned : `+1${cleaned}`;

    const res = await fetch("https://api.retell.ai/v2/create-phone-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        from_number: "+19163132237",
        to_number: e164,
        override_agent_id: process.env.RETELL_AGENT_ID,
        retell_llm_dynamic_variables: {
          customer_name: full_name || "there",
          project_type: project_type || "your project",
          message: message || "",
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Retell callback failed:", res.status, err);
    } else {
      console.log("Retell callback triggered for", e164);
    }
  } catch (err) {
    console.error("Retell trigger error:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      form_type,
      full_name,
      phone,
      email,
      project_type,
      message,
      source,
      website,
    } = body;

    // Honeypot — silently discard bots
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Fire Retell callback if phone number present
    if (phone?.trim()) {
      triggerRetellCallback(phone, full_name, project_type, message);
    }

    // Send email notification via Resend
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d69a2d; border-bottom: 2px solid #d69a2d; padding-bottom: 10px;">
          New Lead — Kazemi Construction
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f8f7f2;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 140px;">Form Type</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${form_type || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${full_name || "N/A"}</td>
          </tr>
          <tr style="background-color: #f8f7f2;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${email || "N/A"}</td>
          </tr>
          <tr style="background-color: #f8f7f2;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Project Type</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${project_type || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${message || "N/A"}</td>
          </tr>
          <tr style="background-color: #f8f7f2;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Source</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${source || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Submitted</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${timestamp}</td>
          </tr>
          <tr style="background-color: #f8f7f2;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">AI Callback</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone?.trim() ? "✅ Retell callback triggered" : "⚠️ No phone number — no callback"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Lead saved to Supabase. ${phone?.trim() ? "AI receptionist is calling the customer now." : "No phone provided — follow up manually."}
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Kazemi Construction <leads@kazemiconstructionllc.com>",
      to: process.env.OWNER_EMAIL!,
      subject: `New Kazemi Lead — ${form_type || "Contact Form"}`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
