import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { form_type, full_name, phone, email, project_type, message, source, website } = body;

    // Honeypot check - if website field is filled, silently discard
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d69a2d; border-bottom: 2px solid #d69a2d; padding-bottom: 10px;">
          New Lead from Kazemi Construction Website
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
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          This lead has been automatically saved to your Supabase database.
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
    console.error("Email send error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
