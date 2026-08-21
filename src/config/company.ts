/**
 * Company configuration for Moza Systems.
 *
 * This is the single source of truth for business-identifying details used
 * across the site (footer, legal pages, structured data, contact links).
 *
 * ⚠️ LEGAL INFORMATION IS INCOMPLETE.
 * The fields under `legal` are placeholders. Do NOT invent real values for
 * them. Replace every "TODO" with the real, confirmed value before the site
 * goes live, then set `legal.isComplete` to `true` below (it is derived
 * automatically — you don't need to touch it, just fill in the fields).
 */

export const company = {
  name: "Moza Systems",
  legalNameShort: "Moza Systems",
  domain: "mozasystems.com",
  url: "https://mozasystems.com",

  contact: {
    email: "mohamed@mozasystems.com",
    // No public phone number has been provided yet. Do not add one.
    phone: null as string | null,
  },

  founder: {
    firstName: "Mohamed",
    title: "Founder, Moza Systems",
  },

  social: {
    // Add real profile URLs when available. Leave empty until confirmed.
    linkedin: null as string | null,
    instagram: null as string | null,
  },

  /**
   * Legal / registration details.
   * TODO — all of these must be supplied before launch. Values below are
   * intentionally left blank rather than guessed.
   */
  legal: {
    registeredName: null as string | null, // TODO: official registered company name
    vatNumber: null as string | null, // TODO: VAT number
    companyNumber: null as string | null, // TODO: company registration number
    registeredAddress: null as string | null, // TODO: registered business address
    country: null as string | null, // TODO: country of registration
  },
} as const;

/**
 * True once every required legal field above has a real value.
 * Used to gate structured data fields and to flag the site as not yet
 * production-ready from a legal-information standpoint.
 */
export const legalInfoComplete = Boolean(
  company.legal.registeredName &&
    company.legal.vatNumber &&
    company.legal.companyNumber &&
    company.legal.registeredAddress &&
    company.legal.country,
);
