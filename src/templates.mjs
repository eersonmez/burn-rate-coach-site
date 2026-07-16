import {
  ISSUES_URL,
  LOCALE_SPECS,
  NEW_ISSUE_URL,
  PAGES,
  PRIVACY_EMAIL,
  SITE_ORIGIN,
  STORE_URL
} from "./config.mjs";

const pageById = Object.fromEntries(PAGES.map((page) => [page.id, page]));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function prefixFor(locale) {
  return locale.outputDir ? "../" : "";
}

function localPageHref(pageId) {
  return pageById[pageId].fileName;
}

function alternateHref(fromLocale, targetLocale, pageId) {
  const prefix = prefixFor(fromLocale);
  const fileName = pageById[pageId].fileName;
  return targetLocale.outputDir ? `${prefix}${targetLocale.outputDir}/${fileName}` : `${prefix}${fileName}`;
}

function absolutePageUrl(locale, pageId) {
  const path = locale.outputDir ? `/${locale.outputDir}/${pageById[pageId].fileName}` : `/${pageById[pageId].fileName}`;
  return `${SITE_ORIGIN}${path}`;
}

function head(locale, pageId, copy) {
  const alternates = LOCALE_SPECS.map((target) =>
    `  <link rel="alternate" hreflang="${target.htmlLang}" href="${absolutePageUrl(target, pageId)}">`).join("\n");
  return `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(copy.metaDescription)}">
  <meta name="theme-color" content="#0b1020">
  <title>${escapeHtml(copy.title)}</title>
  <link rel="canonical" href="${absolutePageUrl(locale, pageId)}">
${alternates}
  <link rel="alternate" hreflang="x-default" href="${absolutePageUrl(LOCALE_SPECS[0], pageId)}">
  <link rel="icon" href="${prefixFor(locale)}assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${prefixFor(locale)}styles.css">
</head>`;
}

function mainNavigation(pageId, common) {
  const links = [
    ["home", pageId === "home" ? common.features : common.home],
    ["privacy", common.privacy],
    ["support", common.support]
  ];
  return links.map(([target, label]) => {
    const isFeatureLink = pageId === "home" && target === "home";
    const current = !isFeatureLink && target === pageId ? ' aria-current="page"' : "";
    const href = isFeatureLink ? "#features" : localPageHref(target);
    return `<a${current} href="${href}">${label}</a>`;
  }).join("");
}

function languageNavigation(locale, pageId, common) {
  const links = LOCALE_SPECS.map((target) => {
    const current = target.code === locale.code ? ' aria-current="page"' : "";
    return `<a lang="${target.htmlLang}" hreflang="${target.htmlLang}"${current} href="${alternateHref(locale, target, pageId)}">${target.label}</a>`;
  }).join("");
  return `<nav class="language-nav wrap" aria-label="${escapeHtml(common.languageNavigation)}">${links}</nav>`;
}

function siteHeader(locale, pageId, common) {
  return `<header class="site-header">
    <a class="brand" href="${localPageHref("home")}" aria-label="${escapeHtml(common.brandHome)}"><img src="${prefixFor(locale)}assets/logo.svg" width="40" height="40" alt=""><span>Burn Rate Coach</span></a>
    <nav aria-label="${escapeHtml(common.mainNavigation)}">${mainNavigation(pageId, common)}</nav>
  </header>
  ${languageNavigation(locale, pageId, common)}`;
}

function siteFooter(locale, pageId, common) {
  const links = ["home", "privacy", "support"]
    .filter((target) => target !== pageId)
    .map((target) => `<a href="${localPageHref(target)}">${common[target]}</a>`)
    .join("");
  const independence = pageId === "home" ? common.independentLong : common.independentShort;
  return `<footer class="site-footer wrap"><p>${independence}</p><nav aria-label="${escapeHtml(common.footerNavigation)}">${links}<a href="${ISSUES_URL}">${common.issues}</a></nav></footer>`;
}

function draftComment(catalog) {
  return catalog.review.state === "draft"
    ? "<!-- Translation status: DRAFT. Fluent human review is required before publication. -->"
    : "<!-- English is the canonical source content. -->";
}

function documentStart(locale, pageId, catalog, pageCopy) {
  return `<!doctype html>
${draftComment(catalog)}
<html lang="${locale.htmlLang}" dir="${locale.dir}" data-translation-status="${catalog.review.state}">
${head(locale, pageId, pageCopy)}
<body>
  <a class="skip-link" href="#main">${catalog.common.skipToContent}</a>
  ${siteHeader(locale, pageId, catalog.common)}`;
}

function renderHome(locale, catalog) {
  const copy = catalog.home;
  const asset = (name) => `${prefixFor(locale)}assets/${name}`;
  return `${documentStart(locale, "home", catalog, copy)}

  <main id="main">
    <section class="hero wrap">
      <div class="hero-copy">
        <span class="eyebrow">${copy.hero.eyebrow}</span>
        <h1>${copy.hero.headlinePrimary}<br><span>${copy.hero.headlineSecondary}</span></h1>
        <p class="lede">${copy.hero.lede}</p>
        <div class="hero-actions"><a class="button button-primary active" href="${STORE_URL}">${copy.hero.storeCta}</a><a class="button button-secondary" href="#screenshots">${copy.hero.examplesCta}</a></div>
        <ul class="trust-list" aria-label="${escapeHtml(copy.hero.privacyHighlightsLabel)}"><li>${copy.hero.noAccount}</li><li>${copy.hero.noTelemetry}</li><li>${copy.hero.storagePermission}</li></ul>
      </div>
      <div class="hero-art"><img src="${asset("promo.png")}" width="440" height="280" alt="${escapeHtml(copy.hero.promoAlt)}"></div>
    </section>

    <section class="section wrap" id="features">
      <div class="section-heading"><span class="eyebrow">${copy.features.eyebrow}</span><h2>${copy.features.heading}</h2><p>${copy.features.intro}</p></div>
      <div class="feature-grid">
        ${copy.features.items.map((item, index) => `<article><span class="feature-number">0${index + 1}</span><h3>${item.heading}</h3><p>${item.body}</p></article>`).join("\n        ")}
      </div>
    </section>

    <section class="section section-tint" id="screenshots">
      <div class="wrap">
        <div class="section-heading"><span class="eyebrow">${copy.screenshots.eyebrow}</span><h2>${copy.screenshots.heading}</h2><p>${copy.screenshots.intro}</p></div>
        <div class="gallery">
          <figure class="gallery-wide"><img src="${asset("dark-overview.png")}" width="1280" height="800" loading="lazy" alt="${escapeHtml(copy.screenshots.items[0].alt)}"><figcaption>${copy.screenshots.items[0].caption}</figcaption></figure>
          <figure class="gallery-wide"><img src="${asset("light-overview.png")}" width="1280" height="800" loading="lazy" alt="${escapeHtml(copy.screenshots.items[1].alt)}"><figcaption>${copy.screenshots.items[1].caption}</figcaption></figure>
          <figure><img src="${asset("early-zero.png")}" width="1280" height="800" loading="lazy" alt="${escapeHtml(copy.screenshots.items[2].alt)}"><figcaption>${copy.screenshots.items[2].caption}</figcaption></figure>
          <figure><img src="${asset("narrow-cross-window.png")}" width="1280" height="800" loading="lazy" alt="${escapeHtml(copy.screenshots.items[3].alt)}"><figcaption>${copy.screenshots.items[3].caption}</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="section wrap split">
      <div><span class="eyebrow">${copy.private.eyebrow}</span><h2>${copy.private.heading}</h2></div>
      <div><p>${copy.private.body[0]}</p><p>${copy.private.body[1]}</p><a class="text-link" href="${localPageHref("privacy")}">${copy.private.policyLink} <span aria-hidden="true">→</span></a></div>
    </section>

    <section class="section section-tint">
      <div class="wrap limitations"><div><span class="eyebrow">${copy.limitations.eyebrow}</span><h2>${copy.limitations.heading}</h2></div><ul>${copy.limitations.items.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    </section>

    <section class="closing wrap"><img src="${asset("logo.svg")}" width="64" height="64" alt=""><div><h2>${copy.closing.heading}</h2><p>${copy.closing.body}</p></div><a class="button button-primary active" href="${STORE_URL}">${copy.closing.cta}</a></section>
  </main>

  ${siteFooter(locale, "home", catalog.common)}
</body>
</html>
`;
}

function paragraphs(items) {
  return items.map((item) => `    <p>${item}</p>`).join("\n");
}

function renderPrivacy(locale, catalog) {
  const copy = catalog.privacy;
  const canonicalNotice = copy.canonicalNotice.body
    ? `\n    <aside class="notice translation-summary"><strong>${copy.canonicalNotice.heading}</strong><p>${copy.canonicalNotice.body} <a href="${alternateHref(locale, LOCALE_SPECS[0], "privacy")}">${copy.canonicalNotice.link}</a></p></aside>`
    : "";
  const sections = copy.sections.map((section) => `
    <h2>${section.heading}</h2>
${paragraphs(section.paragraphs)}`).join("\n");
  return `${documentStart(locale, "privacy", catalog, copy)}
  <main id="main" class="document wrap">
    <span class="eyebrow">${copy.effectiveDate}</span>
    <h1>${copy.heading}</h1>
    <p class="lede">${copy.lede}</p>${canonicalNotice}
${sections}

    <h2>${copy.contact.heading}</h2>
    <p>${copy.contact.privacyLabel}: <a href="mailto:${PRIVACY_EMAIL}">${PRIVACY_EMAIL}</a><br>${copy.contact.supportLabel}: <a href="${ISSUES_URL}">${copy.contact.issueTracker}</a></p>
  </main>
  ${siteFooter(locale, "privacy", catalog.common)}
</body>
</html>
`;
}

function renderSupport(locale, catalog) {
  const copy = catalog.support;
  return `${documentStart(locale, "support", catalog, copy)}
  <main id="main" class="document wrap">
    <span class="eyebrow">${copy.eyebrow}</span>
    <h1>${copy.heading}</h1>
    <p class="lede">${copy.lede}</p>
    <a class="button button-primary active" href="${NEW_ISSUE_URL}">${copy.openIssue}</a>

    <h2>${copy.quickChecks.heading}</h2>
    <ol>${copy.quickChecks.items.map((item) => `<li>${item}</li>`).join("")}</ol>

    <h2>${copy.include.heading}</h2>
    <ul>${copy.include.items.map((item) => `<li>${item}</li>`).join("")}</ul>

    <aside class="notice"><strong>${copy.accountNotice.heading}</strong><p>${copy.accountNotice.body}</p></aside>

    <h2>${copy.limitations.heading}</h2>
    <ul>${copy.limitations.items.map((item) => `<li>${item}</li>`).join("")}</ul>

    <h2>${copy.privateContact.heading}</h2>
    <p>${copy.privateContact.bodyBefore} <a href="mailto:${PRIVACY_EMAIL}">${PRIVACY_EMAIL}</a>. ${copy.privateContact.bodyAfter}</p>
  </main>
  ${siteFooter(locale, "support", catalog.common)}
</body>
</html>
`;
}

export function renderPage(locale, pageId, catalogs) {
  const catalog = catalogs[locale.code];
  if (pageId === "home") return renderHome(locale, catalog);
  if (pageId === "privacy") return renderPrivacy(locale, catalog);
  if (pageId === "support") return renderSupport(locale, catalog);
  throw new Error(`Unknown page: ${pageId}`);
}
