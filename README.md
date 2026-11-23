# Codex Limit Coach public site

This repository hosts the public homepage, practical usage guides, privacy policy, support guide, example screenshots, and issue tracker for Codex Limit Coach.

It does not contain the Chrome extension source code and does not represent the extension as open source.

- Homepage: https://eersonmez.github.io/burn-rate-coach-site/
- Usage limits guide: https://eersonmez.github.io/burn-rate-coach-site/how-codex-usage-limits-work.html
- Quota pacing guide: https://eersonmez.github.io/burn-rate-coach-site/why-codex-quota-runs-out-early.html
- Privacy: https://eersonmez.github.io/burn-rate-coach-site/privacy.html
- Support: https://eersonmez.github.io/burn-rate-coach-site/support.html
- Issues: https://github.com/eersonmez/burn-rate-coach-site/issues

The site is framework-free and contains no analytics, forms, cookies, remote scripts, or user tracking.
Canonical URLs, localized alternates, social preview metadata, `robots.txt`, and
`sitemap.xml` are generated from the same locale/page configuration as the
public pages.

## Localized pages

The root pages are the canonical English content. Turkish (`tr/`), Hindi (`hi/`), Spanish (`es/`), Arabic (`ar/`), French (`fr/`), German (`de/`), Japanese (`ja/`), Brazilian Portuguese (`pt-br/`), and European Portuguese (`pt-pt/`) are generated from the reviewable catalogs in `src/locales/`; Arabic is rendered right-to-left. Each non-English homepage uses its locale-matched rendered extension screenshots from `assets/<locale>/`, while the canonical English homepage keeps the base images in `assets/`. Run `npm run build` after editing a catalog or screenshot mapping and `npm run check` before committing.

Non-English catalogs retain explicit draft or reviewed provenance. The project owner's recorded release policy uses automated structural, safety, link, layout-direction, and generated-output validation; fluent review is optional and draft status does not block publication. `npm run check:release` verifies that waiver and every release contract. See `docs/TRANSLATION-WORKFLOW.md`.

The English privacy policy is authoritative. Localized privacy pages are summaries and link back to the canonical policy.
