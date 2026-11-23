import { readFile, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  HOME_SCREENSHOT_SPECS,
  LOCALE_SPECS,
  PAGES,
  RELEASE_POLICY,
  SITE_ORIGIN
} from "../src/config.mjs";
import { catalogs } from "../src/locales/index.mjs";
import {
  absolutePageUrl,
  renderPage,
  renderRobots,
  renderSitemap
} from "../src/templates.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const releaseMode = process.argv.includes("--release");
const localizedSections = ["common", "home", "usageGuide", "pacingGuide", "privacy", "support"];

function leafPaths(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => leafPaths(item, `${prefix}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      leafPaths(child, prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

function localizedContent(catalog) {
  return Object.fromEntries(localizedSections.map((section) => [section, catalog[section]]));
}

const canonicalKeys = leafPaths(localizedContent(catalogs.en)).sort();
const screenshotFileNames = HOME_SCREENSHOT_SPECS.map(({ siteFileName }) => siteFileName);

if (HOME_SCREENSHOT_SPECS.length !== catalogs.en.home.screenshots.items.length) {
  errors.push("home screenshot config must match the canonical screenshot copy slots");
}
if (new Set(screenshotFileNames).size !== screenshotFileNames.length) {
  errors.push("home screenshot site filenames must be unique");
}
for (const { sourceFileName, siteFileName } of HOME_SCREENSHOT_SPECS) {
  if (!/^\d{2}-[a-z0-9-]+\.png$/.test(sourceFileName)
    || !/^[a-z0-9-]+\.png$/.test(siteFileName)) {
    errors.push(`invalid home screenshot mapping: ${sourceFileName} -> ${siteFileName}`);
  }
}

if (RELEASE_POLICY.mode !== "automated-validation"
  || RELEASE_POLICY.humanReviewRequired !== false
  || !RELEASE_POLICY.waivedBy
  || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(RELEASE_POLICY.waivedAt)
  || !/^[0-9a-f]{40}$/i.test(RELEASE_POLICY.waivedRevision)) {
  errors.push("release policy must retain a complete owner waiver for automated validation");
}

for (const locale of LOCALE_SPECS) {
  const catalog = catalogs[locale.code];
  if (!catalog) {
    errors.push(`Missing catalog: ${locale.code}`);
    continue;
  }

  for (const { siteFileName } of HOME_SCREENSHOT_SPECS) {
    const assetPath = resolve(root, "assets", locale.outputDir, siteFileName);
    try {
      const asset = await stat(assetPath);
      if (!asset.isFile() || asset.size === 0) {
        errors.push(`${locale.code}: empty or invalid localized screenshot asset ${assetPath}`);
      }
    } catch {
      errors.push(`${locale.code}: missing localized screenshot asset ${assetPath}`);
    }
  }

  const localeKeys = leafPaths(localizedContent(catalog)).sort();
  if (JSON.stringify(localeKeys) !== JSON.stringify(canonicalKeys)) {
    const missing = canonicalKeys.filter((key) => !localeKeys.includes(key));
    const extra = localeKeys.filter((key) => !canonicalKeys.includes(key));
    errors.push(`${locale.code}: catalog shape differs (missing: ${missing.join(", ") || "none"}; extra: ${extra.join(", ") || "none"})`);
  }

  if (locale.code === "en") {
    if (catalog.review.state !== "canonical" || catalog.review.fluentReviewRequired !== false) {
      errors.push("en: English must be marked canonical");
    }
  } else if (catalog.review.state === "draft") {
    if (catalog.review.fluentReviewRequired !== true || catalog.review.reviewedBy !== null || catalog.review.reviewedAt !== null) {
      errors.push(`${locale.code}: draft translations cannot contain review approval`);
    }
  } else if (catalog.review.state === "reviewed") {
    if (catalog.review.fluentReviewRequired !== false || !catalog.review.reviewedBy || !/^\d{4}-\d{2}-\d{2}$/.test(catalog.review.reviewedAt ?? "")) {
      errors.push(`${locale.code}: reviewed translations require reviewer identity and ISO review date`);
    }
  } else {
    errors.push(`${locale.code}: translation state must be draft or reviewed`);
  }

  const permissionSurfaces = {
    home: catalog.home.private.body.join(" "),
    privacy: catalog.privacy.sections
      .flatMap((section) => section.paragraphs)
      .join(" ")
  };
  for (const [surface, copy] of Object.entries(permissionSurfaces)) {
    for (const required of [
      "<code>storage</code>",
      "<code>https://chatgpt.com/codex/*</code>",
      "<code>https://chatgpt.com/settings/usage*</code>",
      "SPA"
    ]) {
      if (!copy.includes(required)) {
        errors.push(`${locale.code}: ${surface} permission contract is missing ${required}`);
      }
    }
  }

  if (releaseMode
    && RELEASE_POLICY.humanReviewRequired
    && locale.code !== "en"
    && catalog.review.state !== "reviewed") {
    errors.push(`${locale.code}: fluent review is required for release`);
  }

  for (const page of PAGES) {
    const outputPath = resolve(root, locale.outputDir, page.fileName);
    const expected = renderPage(locale, page.id, catalogs);
    let actual;
    try {
      actual = await readFile(outputPath, "utf8");
    } catch {
      errors.push(`Missing generated page: ${outputPath}`);
      continue;
    }
    if (actual !== expected) errors.push(`Stale generated page: ${outputPath}`);
    if (actual.includes("https://chatgpt.com/codex/cloud/settings/analytics")) {
      errors.push(`${outputPath}: stale Codex usage URL`);
    }
    if (["usageGuide", "support"].includes(page.id)
      && !actual.includes("https://chatgpt.com/settings/usage?tab=overview")) {
      errors.push(`${outputPath}: missing Usage Overview URL`);
    }
    if (!actual.includes(`<html lang="${locale.htmlLang}" dir="${locale.dir}"`)) errors.push(`${outputPath}: incorrect lang/dir`);
    const canonicalUrl = absolutePageUrl(locale, page.id);
    if ((actual.match(/<link rel="canonical"/g) || []).length !== 1
      || !actual.includes(`<link rel="canonical" href="${canonicalUrl}">`)) {
      errors.push(`${outputPath}: incorrect canonical URL`);
    }
    if (!actual.includes(`<meta property="og:url" content="${canonicalUrl}">`)
      || !actual.includes(`<meta property="og:image" content="${SITE_ORIGIN}/assets/promo.png">`)
      || !actual.includes('<meta name="twitter:card" content="summary_large_image">')) {
      errors.push(`${outputPath}: incomplete social preview metadata`);
    }
    if (!actual.includes('hreflang="x-default"')) errors.push(`${outputPath}: missing x-default alternate`);
    for (const alternate of LOCALE_SPECS) {
      if (!actual.includes(`hreflang="${alternate.htmlLang}"`)) errors.push(`${outputPath}: missing ${alternate.htmlLang} alternate`);
    }
    if (page.id === "home") {
      const screenshotPrefix = locale.outputDir
        ? `../assets/${locale.outputDir}/`
        : "assets/";
      for (const { siteFileName } of HOME_SCREENSHOT_SPECS) {
        const reference = `${screenshotPrefix}${siteFileName}`;
        if (!actual.includes(`<img src="${reference}"`)) {
          errors.push(`${outputPath}: missing locale-matched screenshot reference ${reference}`);
        }
      }
    }
    if (/<(?:script|form|iframe|object|embed|style|base|svg|math|video|audio|source)\b/i.test(actual)) {
      errors.push(`${outputPath}: executable, embedded, or active-content elements are not allowed`);
    }
    if (/\son[a-z]+\s*=|javascript:|\ssrcdoc\s*=|(?:href|src)="data:/i.test(actual)) errors.push(`${outputPath}: executable HTML attributes or URLs are not allowed`);
    if (/src="https?:/i.test(actual)) errors.push(`${outputPath}: remote assets are not allowed`);
    if (/googletagmanager|google-analytics|segment\.com|mixpanel/i.test(actual)) errors.push(`${outputPath}: analytics reference found`);

    const localReferences = [...actual.matchAll(/(?:href|src)="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((reference) => !/^(?:https?:|mailto:|#)/.test(reference))
      .map((reference) => reference.split(/[?#]/, 1)[0]);
    for (const reference of localReferences) {
      try {
        await stat(resolve(dirname(outputPath), reference));
      } catch {
        errors.push(`${outputPath}: broken local reference ${reference}`);
      }
    }
  }
}

for (const [fileName, expected] of [
  ["robots.txt", renderRobots()],
  ["sitemap.xml", renderSitemap()]
]) {
  try {
    const actual = await readFile(resolve(root, fileName), "utf8");
    if (actual !== expected) errors.push(`Stale generated discovery file: ${fileName}`);
  } catch {
    errors.push(`Missing generated discovery file: ${fileName}`);
  }
}

try {
  const sitemap = await readFile(resolve(root, "sitemap.xml"), "utf8");
  const locCount = (sitemap.match(/<loc>/g) || []).length;
  if (locCount !== LOCALE_SPECS.length * PAGES.length) {
    errors.push(`sitemap.xml: expected ${LOCALE_SPECS.length * PAGES.length} URLs, found ${locCount}`);
  }
  for (const locale of LOCALE_SPECS) {
    for (const page of PAGES) {
      if (!sitemap.includes(`<loc>${absolutePageUrl(locale, page.id)}</loc>`)) {
        errors.push(`sitemap.xml: missing ${locale.code}/${page.id}`);
      }
    }
  }
} catch {
  // The missing-file error above is sufficient.
}

if (releaseMode) {
  const currentCopy = JSON.stringify(catalogs);
  for (const removedClaim of [
    /optional local observations/i,
    /choose an end-of-window reserve and tolerance/i,
    /local pace history/i,
    /recommended action/i,
    /cross-window/i,
    /weekly controller/i,
    /observaciones locales opcionales/i,
    /acción recomendada/i,
    /isteğe bağlı yerel gözlemleri/i,
    /önerilen eylemi/i,
    /वैकल्पिक स्थानीय अवलोकनों/i,
    /अनुशंसित कार्रवाई/i,
    /الملاحظات المحلية الاختيارية/i,
    /الإجراء الموصى به/i
  ]) {
    if (removedClaim.test(currentCopy)) errors.push(`current release copy contains removed 1.x claim: ${removedClaim}`);
  }

  for (const { siteFileName } of HOME_SCREENSHOT_SPECS) {
    const asset = `assets/${siteFileName}`;
    try {
      await stat(resolve(root, asset));
    } catch {
      errors.push(`Missing final 2.0 screenshot asset: ${asset}`);
    }
  }
  try {
    await stat(resolve(root, "assets/narrow-cross-window.png"));
    errors.push("Legacy cross-window screenshot asset must not ship.");
  } catch {
    // Expected: the 1.x asset is absent.
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Localization ${releaseMode ? "release " : ""}checks passed for ${LOCALE_SPECS.length} locales and ${PAGES.length} pages.`);
}
