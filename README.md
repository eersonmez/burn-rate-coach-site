# Burn Rate Coach public site

This repository hosts the public homepage, privacy policy, support guide, example screenshots, and issue tracker for Burn Rate Coach.

It does not contain the Chrome extension source code and does not represent the extension as open source.

- Homepage: https://eersonmez.github.io/burn-rate-coach-site/
- Privacy: https://eersonmez.github.io/burn-rate-coach-site/privacy.html
- Support: https://eersonmez.github.io/burn-rate-coach-site/support.html
- Issues: https://github.com/eersonmez/burn-rate-coach-site/issues

The site is framework-free and contains no analytics, forms, cookies, remote scripts, or user tracking.

## Localized pages

The root pages are the canonical English content. `tr/`, `hi/`, `es/`, and `ar/` are generated from the reviewable catalogs in `src/locales/`; Arabic is rendered right-to-left. Run `npm run build` after editing a catalog and `npm run check` before committing.

Non-English catalogs retain explicit draft or reviewed provenance. The project owner's recorded release policy uses automated structural, safety, link, layout-direction, and generated-output validation; fluent review is optional and draft status does not block publication. `npm run check:release` verifies that waiver and every release contract. See `docs/TRANSLATION-WORKFLOW.md`.

The English privacy policy is authoritative. Localized privacy pages are summaries and link back to the canonical policy.
