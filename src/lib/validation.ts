import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120),
  businessName: z.string().trim().min(1, "Enter your business name.").max(160),
  email: z.string().trim().email("Enter a valid work email."),
  countryCode: z.string().trim().min(1, "Select a country code."),
  phoneNumber: z
    .string()
    .trim()
    .min(4, "Enter a phone number.")
    .max(20)
    .regex(/^[0-9()\-.\s]+$/, "Use numbers only."),
  service: z.string().trim().min(1, "Select a service."),
  message: z.string().trim().min(20, "Tell us a bit more about the project.").max(4000),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  // Honeypot — must stay empty. Bots tend to fill every field.
  company_fax: z.string().max(0).optional().or(z.literal("")),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export type QuoteFormFieldErrors = Partial<Record<keyof QuoteFormValues, string>>;
