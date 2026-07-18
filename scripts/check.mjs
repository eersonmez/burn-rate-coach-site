import { readFile, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { LOCALE_SPECS, PAGES, RELEASE_POLICY } from "../src/config.mjs";
import { catalogs } from "../src/locales/index.mjs";
import { renderPage } from "../src/templates.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const releaseMode = process.argv.includes("--release");

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

const canonicalKeys = leafPaths({ common: catalogs.en.common, home: catalogs.en.home, privacy: catalogs.en.privacy, support: catalogs.en.support }).sort();

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

  const localeKeys = leafPaths({ common: catalog.common, home: catalog.home, privacy: catalog.privacy, support: catalog.support }).sort();
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
    if (!actual.includes(`<html lang="${locale.htmlLang}" dir="${locale.dir}"`)) errors.push(`${outputPath}: incorrect lang/dir`);
    if (!actual.includes('hreflang="x-default"')) errors.push(`${outputPath}: missing x-default alternate`);
    for (const alternate of LOCALE_SPECS) {
      if (!actual.includes(`hreflang="${alternate.htmlLang}"`)) errors.push(`${outputPath}: missing ${alternate.htmlLang} alternate`);
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

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Localization ${releaseMode ? "release " : ""}checks passed for ${LOCALE_SPECS.length} locales and ${PAGES.length} pages.`);
}
