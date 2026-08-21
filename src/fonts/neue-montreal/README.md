# Neue Montreal — licensed files go here

Neue Montreal is Moza Systems' primary typeface (headings, body copy,
navigation, buttons, UI, service labels). It is a commercial font from
[Pangram Pangram](https://pangrampangram.com/products/neue-montreal) and is
**not included in this repository** because we don't have redistribution
rights to it.

Until a license is purchased, the site falls back to a high-quality system
font stack defined in `src/lib/fonts.ts` (`-apple-system`, `Segoe UI`,
`Helvetica Neue`, `Arial`). This keeps the site looking clean and
professional without shipping an unlicensed or pirated font file.

## To add the real typeface

1. Buy the license and download the webfont files (woff2 preferred) for at
   least these weights: **Regular (400)** and **Medium (500)**.
2. Place the files here, named exactly:
   - `NeueMontreal-Regular.woff2`
   - `NeueMontreal-Medium.woff2`
3. In `src/lib/fonts.ts`, uncomment the `next/font/local` block at the top
   of the file and delete the temporary system-font `fontSans` export
   directly below it.
4. Remove this README's "not included" note once it's live.

Do not source Neue Montreal files from anywhere other than a legitimate
purchase. Do not commit unlicensed font files to this repository.
