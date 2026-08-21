import { Source_Serif_4 } from "next/font/google";

// ---------------------------------------------------------------------------
// Primary typeface: Neue Montreal (licensed, not yet supplied).
//
// Once the licensed woff2 files are added to src/fonts/neue-montreal/
// (see the README there), replace the block below with:
//
// import localFont from "next/font/local";
// export const fontSans = localFont({
//   src: [
//     { path: "../fonts/neue-montreal/NeueMontreal-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../fonts/neue-montreal/NeueMontreal-Medium.woff2", weight: "500", style: "normal" },
//   ],
//   variable: "--font-sans",
//   display: "swap",
// });
// ---------------------------------------------------------------------------

/**
 * Temporary fallback for Neue Montreal: a high-quality system font stack
 * rather than a substitute Google Font, so the brand typeface swaps in
 * cleanly later without a visible personality shift. Applied via CSS
 * variable in globals.css.
 */
export const fontSansVariable = "--font-sans";
export const fontSansFallbackStack =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif';

export const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
