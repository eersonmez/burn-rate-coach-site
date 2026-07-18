# Translation workflow

English in `src/locales/en.mjs` is the canonical source. Turkish, Hindi, neutral Spanish, and Modern Standard Arabic use the same catalog shape and are generated into locale directories by `npm run build`.

## Review and release policy

Non-English catalogs keep honest provenance: machine-generated or AI-assisted copy remains `draft`, and only a fluent human review may mark it `reviewed`. A substantive edit after approval returns that locale to `draft` until it is reviewed again.

The project owner waived mandatory human review on July 18, 2026 for the localization release surfaces. The recorded `automated-validation` policy in `src/config.mjs` therefore permits draft translations to ship while preserving their status. `npm run check:release` validates the waiver, catalog parity, safe static HTML, links, locale direction, and byte-current generated pages.

An optional fluent review must:

1. Check every visible string, metadata value, link label, image description, privacy statement, and support warning in one locale catalog.
2. Preserve the distinction between observing the page's own successful decoded result and initiating, cloning, or independently decoding a network response. It must state that headers and credentials are not inspected, unrelated account fields are not accessed or enumerated, and the raw result is never bridged, logged, stored, or transmitted.
3. Change `review.state` to `reviewed`, set `fluentReviewRequired` to `false`, record the reviewer's name or stable identifier in `reviewedBy`, and record an ISO date in `reviewedAt`.

Run `npm run build`, `npm run check`, and `npm run check:release` before publication.

## Locale conventions

- `es` is neutral international Spanish.
- `ar` is Modern Standard Arabic and must remain `dir="rtl"`; technical identifiers stay left-to-right.
- Product names, URLs, email addresses, and Chrome API identifiers are not translated.
- Do not add localized claims or functionality that does not exist in the canonical English source.
