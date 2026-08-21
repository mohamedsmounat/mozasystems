import type { QuoteFormFieldErrors } from "@/lib/validation";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: QuoteFormFieldErrors;
  values: Record<string, string>;
};

export const initialQuoteFormState: QuoteFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: {},
};
