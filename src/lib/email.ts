import { Resend } from "resend";
import type { QuoteFormValues } from "@/lib/validation";

/**
 * Sends the quote request notification email via Resend.
 *
 * Required environment variables:
 * - RESEND_API_KEY: your Resend API key.
 * - QUOTE_TO_EMAIL: inbox that should receive quote requests (mohamed@mozasystems.com).
 *
 * Optional:
 * - RESEND_FROM_EMAIL: verified sending address on your Resend domain
 *   (e.g. "Moza Systems <quote@mozasystems.com>"). Falls back to Resend's
 *   shared sandbox address, which only works for testing and will NOT
 *   reliably deliver to arbitrary inboxes in production.
 */
export async function sendQuoteEmail(values: QuoteFormValues) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !toEmail) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY and QUOTE_TO_EMAIL in your environment.",
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Moza Systems <onboarding@resend.dev>";
  const fullPhone = `${values.countryCode} ${values.phoneNumber}`.trim();

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Business name", values.businessName],
    ["Work email", values.email],
    ["Phone", fullPhone],
    ["Service", values.service],
    ["Website", values.website || "—"],
  ];

  const textBody = [
    "New quote request from mozasystems.com",
    "",
    ...rows.map(([label, val]) => `${label}: ${val}`),
    "",
    "Project description:",
    values.message,
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, val]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5b6572;font-size:13px;white-space:nowrap;">${escapeHtml(
          label,
        )}</td><td style="padding:6px 0;font-size:14px;color:#101c2c;">${escapeHtml(val)}</td></tr>`,
    )
    .join("");

  const htmlBody = `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 560px;">
      <p style="font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#5b6572;margin:0 0 16px;">New quote request</p>
      <table cellpadding="0" cellspacing="0">${htmlRows}</table>
      <p style="font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#5b6572;margin:20px 0 8px;">Project description</p>
      <p style="font-size:14px;line-height:1.6;color:#101c2c;white-space:pre-wrap;">${escapeHtml(values.message)}</p>
    </div>
  `;

  return resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: values.email,
    subject: `Quote request — ${values.businessName}`,
    text: textBody,
    html: htmlBody,
  });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
