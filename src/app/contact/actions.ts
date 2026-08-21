"use server";

import { quoteFormSchema, type QuoteFormFieldErrors } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";
import type { QuoteFormState } from "@/lib/quote-form-state";

export async function submitQuote(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const raw = {
    name: String(formData.get("name") || ""),
    businessName: String(formData.get("businessName") || ""),
    email: String(formData.get("email") || ""),
    countryCode: String(formData.get("countryCode") || ""),
    phoneNumber: String(formData.get("phoneNumber") || ""),
    service: String(formData.get("service") || ""),
    message: String(formData.get("message") || ""),
    website: String(formData.get("website") || ""),
    company_fax: String(formData.get("company_fax") || ""),
  };

  const parsed = quoteFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: QuoteFormFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof QuoteFormFieldErrors;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
      values: raw,
    };
  }

  // Optional: Cloudflare Turnstile can be added here once TURNSTILE_SECRET_KEY
  // is available. Verify formData.get("cf-turnstile-response") against
  // https://challenges.cloudflare.com/turnstile/v0/siteverify before sending
  // the email, and add the widget + site key to the form UI. Not wired up
  // yet since no keys have been provided.

  // Honeypot tripped: pretend success, send nothing.
  if (parsed.data.company_fax) {
    return {
      status: "success",
      message: "Thanks. We've received your request and will review it.",
      fieldErrors: {},
      values: {},
    };
  }

  try {
    await sendQuoteEmail(parsed.data);
  } catch (error) {
    console.error("Quote form email failed:", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your request. Please try again, or email mohamed@mozasystems.com directly.",
      fieldErrors: {},
      values: raw,
    };
  }

  return {
    status: "success",
    message: "Thanks. We've received your request and will review it.",
    fieldErrors: {},
    values: {},
  };
}
