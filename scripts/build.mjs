import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { LOCALE_SPECS, PAGES } from "../src/config.mjs";
import { catalogs } from "../src/locales/index.mjs";
import { renderPage } from "../src/templates.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

for (const locale of LOCALE_SPECS) {
  for (const page of PAGES) {
    const outputPath = resolve(root, locale.outputDir, page.fileName);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderPage(locale, page.id, catalogs), "utf8");
  }
}

console.log(`Generated ${LOCALE_SPECS.length * PAGES.length} localized pages.`);
