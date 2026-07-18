export const SITE_ORIGIN = "https://eersonmez.github.io/burn-rate-coach-site";

export const STORE_URL = "https://chromewebstore.google.com/detail/burn-rate-coach/kofionobchfmemihdnjhljplhlppdjmh";
export const ISSUES_URL = "https://github.com/eersonmez/burn-rate-coach-site/issues";
export const NEW_ISSUE_URL = `${ISSUES_URL}/new/choose`;
export const PRIVACY_EMAIL = "burn.rate.coach@gmail.com";

export const RELEASE_POLICY = Object.freeze({
  mode: "automated-validation",
  humanReviewRequired: false,
  waivedBy: "project owner (eersonmez)",
  waivedAt: "2026-07-18T08:58:02Z",
  waivedRevision: "04b6692709a5a704e8af1287f5025f98bac15375"
});

export const LOCALE_SPECS = Object.freeze([
  { code: "en", htmlLang: "en", dir: "ltr", label: "English", outputDir: "" },
  { code: "tr", htmlLang: "tr", dir: "ltr", label: "Türkçe", outputDir: "tr" },
  { code: "hi", htmlLang: "hi", dir: "ltr", label: "हिन्दी", outputDir: "hi" },
  { code: "es", htmlLang: "es", dir: "ltr", label: "Español", outputDir: "es" },
  { code: "ar", htmlLang: "ar", dir: "rtl", label: "العربية", outputDir: "ar" }
]);

export const PAGES = Object.freeze([
  { id: "home", fileName: "index.html" },
  { id: "privacy", fileName: "privacy.html" },
  { id: "support", fileName: "support.html" }
]);
