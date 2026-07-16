# Translation workflow

English in `src/locales/en.mjs` is the canonical source. Turkish, Hindi, neutral Spanish, and Modern Standard Arabic use the same catalog shape and are generated into locale directories by `npm run build`.

## Review

1. A fluent reviewer checks every visible string, metadata value, link label, image description, privacy statement, and support warning in one locale catalog.
2. Privacy wording must preserve the distinction between observing the page's own successful decoded result and initiating, cloning, or independently decoding a network response. It must state that headers and credentials are not inspected, unrelated account fields are not accessed or enumerated, and the raw result is never bridged, logged, stored, or transmitted.
3. The reviewer changes `review.state` to `reviewed`, `fluentReviewRequired` to `false`, records their name or stable identifier in `reviewedBy`, and records an ISO date in `reviewedAt`.
4. Run `npm run build`, `npm run check`, and `npm run check:release`. Publication is blocked until all four non-English catalogs pass the release check.

Machine-generated or AI-assisted copy is never sufficient for the `reviewed` state. Any substantive edit after approval returns that locale to `draft` until it is reviewed again.

## Locale conventions

- `es` is neutral international Spanish.
- `ar` is Modern Standard Arabic and must remain `dir="rtl"`; technical identifiers stay left-to-right.
- Product names, URLs, email addresses, and Chrome API identifiers are not translated.
- Do not add localized claims or functionality that does not exist in the canonical English source.
