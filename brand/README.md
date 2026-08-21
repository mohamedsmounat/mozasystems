# Moza Systems — social banner

A clean, on-brand header banner for LinkedIn and other social profiles.

- `moza-banner.svg` — scalable source. Edit this directly (colors, spacing,
  tagline) and re-export as needed. The wordmark is embedded as a base64
  PNG (it's a photographed/rasterised logo lockup, not a vector original),
  everything else is real SVG markup.
- `moza-banner.html` — the same design as plain HTML/CSS, used to render
  the PNG below with real system fonts and pixel-perfect anti-aliasing.
- `moza-banner.png` — rendered at 3168×792 (2x), sized for LinkedIn's
  1584×396 cover photo. Downscale if a platform wants something smaller;
  the layout keeps a wide safe margin so it also crops reasonably for
  X/Twitter's header (1500×500) if needed.

To regenerate the PNG after editing the HTML, open `moza-banner.html` in a
browser at 1584×396 and take a device-scale-2 screenshot, or use a headless
browser script (Playwright/Puppeteer) pointed at the file.
