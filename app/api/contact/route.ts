import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Server-side Supabase client with service role — bypasses RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function triggerRetellCallback(phone: string, full_name: string, project_type: string, message: string) {
  try {
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
    if (!res.ok) console.error("Retell failed:", res.status, await res.text());
    else console.log("Retell callback triggered for", e164);
  } catch (err) {
    console.error("Retell error:", err);
  }
}

async function sendEmailNotification(data: Record<string, string>) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "your_resend_key_here") return;
  if (!process.env.OWNER_EMAIL || process.env.OWNER_EMAIL === "your_email_here") return;
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { form_type, full_name, phone, email, project_type, message, source, timestamp } = data;
    await resend.emails.send({
      from: "Kazemi Construction <leads@kazemiconstructionllc.com>",
      to: process.env.OWNER_EMAIL,
      subject: `New Kazemi Lead — ${form_type || "Contact Form"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#d69a2d;border-bottom:2px solid #d69a2d;padding-bottom:10px;">New Lead — Kazemi Construction</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:20px;">
            ${[["Form Type", form_type], ["Full Name", full_name], ["Phone", phone],
               ["Email", email], ["Project Type", project_type], ["Message", message],
               ["Source", source], ["Submitted", timestamp],
               ["AI Callback", phone?.trim() ? "✅ Retell triggered" : "⚠️ No phone"]
              ].map(([k, v], i) => `
              <tr style="${i % 2 === 0 ? "background:#f8f7f2;" : ""}">
                <td style="padding:12px;border:1px solid #ddd;font-weight:bold;width:140px;">${k}</td>
                <td style="padding:12px;border:1px solid #ddd;">${v || "N/A"}</td>
              </tr>`).join("")}
          </table>
        </div>`,
    });
  } catch (err) {
    console.error("Resend error (non-fatal):", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { form_type, full_name, phone, email, project_type, message, source, website } = body;

    // Honeypot — discard bots silently
    if (website) return NextResponse.json({ ok: true });

    if (!full_name?.trim()) {
      return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
    }

    // Save to Supabase server-side — no schema prefix needed, tables are in public schema
    const { error: dbError } = await supabase
      .from("leads")
      .insert({ full_name, phone, email, project_type, message, source: source || "website" });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Fire and forget — don't block response
    if (phone?.trim()) triggerRetellCallback(phone, full_name, project_type, message);
    sendEmailNotification({ form_type, full_name, phone, email, project_type, message, source, timestamp });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
