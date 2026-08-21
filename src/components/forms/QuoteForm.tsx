"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { submitQuote } from "@/app/contact/actions";
import { initialQuoteFormState } from "@/lib/quote-form-state";
import { FormField, inputClasses } from "@/components/forms/FormField";
import { countryCodes, defaultCountryCode } from "@/data/country-codes";
import { quoteServiceOptions } from "@/data/services";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialQuoteFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-line bg-white p-8 md:p-10" role="status">
        <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-muted">Request sent</p>
        <p className="mt-3 max-w-[46ch] text-[19px] leading-relaxed text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {state.status === "error" && state.message ? (
        <p
          className="rounded-lg border border-[#9a3b3b]/30 bg-[#9a3b3b]/5 px-4 py-3 text-[13.5px] text-[#9a3b3b]"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      {/* Honeypot — hidden from real visitors, left empty by them. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_fax">Leave this field empty</label>
        <input type="text" id="company_fax" name="company_fax" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" error={state.fieldErrors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={state.values.name}
            className={cn(inputClasses, "w-full")}
          />
        </FormField>

        <FormField label="Business name" htmlFor="businessName" error={state.fieldErrors.businessName}>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            autoComplete="organization"
            defaultValue={state.values.businessName}
            className={cn(inputClasses, "w-full")}
          />
        </FormField>

        <FormField label="Work email" htmlFor="email" error={state.fieldErrors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={state.values.email}
            className={cn(inputClasses, "w-full")}
          />
        </FormField>

        <FormField label="Phone number" htmlFor="phoneNumber" error={state.fieldErrors.phoneNumber}>
          <div className="flex gap-2">
            <select
              id="countryCode"
              name="countryCode"
              defaultValue={state.values.countryCode || defaultCountryCode}
              aria-label="Country code"
              className={cn(inputClasses, "w-[110px] shrink-0")}
            >
              {countryCodes.map((c) => (
                <option key={c.iso2} value={c.dial}>
                  {c.dial} {c.iso2}
                </option>
              ))}
            </select>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              autoComplete="tel-national"
              defaultValue={state.values.phoneNumber}
              className={cn(inputClasses, "min-w-0 flex-1")}
            />
          </div>
        </FormField>

        <FormField label="Service interested in" htmlFor="service" error={state.fieldErrors.service}>
          <select
            id="service"
            name="service"
            required
            defaultValue={state.values.service || ""}
            className={cn(inputClasses, "w-full")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {quoteServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Website" htmlFor="website" optional error={state.fieldErrors.website}>
          <input
            id="website"
            name="website"
            type="text"
            inputMode="url"
            placeholder="yourbusiness.com"
            autoComplete="url"
            defaultValue={state.values.website}
            className={cn(inputClasses, "w-full")}
          />
        </FormField>
      </div>

      <FormField label="Project description" htmlFor="message" error={state.fieldErrors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on, and what would you like help with?"
          defaultValue={state.values.message}
          className={cn(inputClasses, "w-full resize-y")}
        />
      </FormField>

      <p className="text-[12.5px] leading-relaxed text-muted">
        We use this information to respond to your enquiry, nothing else. See our{" "}
        <Link href="/privacy" className="underline decoration-silver decoration-2 underline-offset-2 hover:decoration-ink">
          privacy policy
        </Link>
        .
      </p>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-offwhite transition-colors hover:bg-navy-soft disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request a quote"}
    </button>
  );
}
