# Translation workflow

English in `src/locales/en.mjs` is the canonical source. Turkish, Hindi, neutral Spanish, Modern Standard Arabic, French, German, Japanese, Brazilian Portuguese, and European Portuguese use the same catalog shape and are generated into locale directories by `npm run build`.

## Review and release policy

Non-English catalogs keep honest provenance: machine-generated or AI-assisted copy remains `draft`, and only a fluent human review may mark it `reviewed`. A substantive edit after approval returns that locale to `draft` until it is reviewed again.

The project owner waived mandatory human review on July 18, 2026 for the localization release surfaces. The recorded `automated-validation` policy in `src/config.mjs` therefore permits draft translations to ship while preserving their status. `npm run check:release` validates the waiver, catalog parity, safe static HTML, links, locale direction, and byte-current generated pages.

An optional fluent review must:

1. Check every visible string, metadata value, link label, image description, privacy statement, and support warning in one locale catalog.
2. Preserve the distinction between observing the page's own successful decoded result and initiating, cloning, or independently decoding a network response. It must state that headers and credentials are not inspected, unrelated account fields are not accessed or enumerated, and the raw result is never bridged, logged, stored, or transmitted.
3. Change `review.state` to `reviewed`, set `fluentReviewRequired` to `false`, record the reviewer's name or stable identifier in `reviewedBy`, and record an ISO date in `reviewedAt`.

Run `npm run build`, `npm run check`, and `npm run check:release` before publication.

## Localized homepage screenshots

The four homepage gallery slots are defined once in `HOME_SCREENSHOT_SPECS` in `src/config.mjs`. English keeps the canonical base assets directly in `assets/`. Every non-English locale uses the same locale identity as its catalog and stores the mapped files under `assets/<outputDir>/`; for example, the `pt_BR` capture catalog is published from `assets/pt-br/`.

Copy each finalized extension capture from `store/screenshots/<catalog>/` using this mapping:

| Extension capture | Site asset |
| --- | --- |
| `01-outcome-at-a-glance.png` | `dark-overview.png` |
| `05-light-theme.png` | `light-overview.png` |
| `02-early-zero.png` | `early-zero.png` |
| `04-one-setting-local-history.png` | `popup-controls.png` |

Do not overwrite the English base assets when refreshing translated captures. `npm run check` verifies that every configured locale asset exists and that each generated homepage references its own output-directory assets.

## Locale conventions

- `es` is neutral international Spanish.
- `ar` is Modern Standard Arabic and must remain `dir="rtl"`; technical identifiers stay left-to-right.
- `pt_BR` and `pt_PT` are distinct catalogs. Their output directories are `pt-br/` and `pt-pt/`, and their HTML language tags are `pt-BR` and `pt-PT`; do not pass underscore identifiers to `Intl` or use them in public URLs.
- `ja` must preserve technical identifiers and allow natural wrapping without inserting hard line breaks into catalog text.
- Product names, URLs, email addresses, and Chrome API identifiers are not translated.
- Do not add localized claims or functionality that does not exist in the canonical English source.
