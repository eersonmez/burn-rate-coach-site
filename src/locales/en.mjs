export default {
  review: {
    state: "canonical",
    fluentReviewRequired: false,
    reviewedBy: "canonical-source",
    reviewedAt: "2026-07-16"
  },
  common: {
    skipToContent: "Skip to content",
    home: "Home",
    features: "Features",
    privacy: "Privacy",
    support: "Support",
    issues: "Issues",
    mainNavigation: "Main navigation",
    footerNavigation: "Footer navigation",
    languageNavigation: "Language",
    brandHome: "Burn Rate Coach home",
    independentShort: "Burn Rate Coach is independent and not endorsed by OpenAI.",
    independentLong: "Burn Rate Coach is an independent extension and is not affiliated with or endorsed by OpenAI."
  },
  home: {
    metaDescription: "Burn Rate Coach turns Codex quota limits into clear pacing guidance and reset forecasts—locally, with no telemetry.",
    title: "Burn Rate Coach — pace your Codex quota",
    hero: {
      eyebrow: "Free Chrome extension · Local by design",
      headlinePrimary: "Know when to slow down.",
      headlineSecondary: "And when you can use more.",
      lede: "Burn Rate Coach turns Codex quota percentages into a clear pacing decision, an ideal-now marker, and a forecast for your next reset.",
      storeCta: "Get it from the Chrome Web Store",
      examplesCta: "See example data",
      privacyHighlightsLabel: "Privacy highlights",
      noAccount: "No Burn Rate Coach account",
      noTelemetry: "No telemetry",
      storagePermission: "Only storage permission",
      promoAlt: "Burn Rate Coach gauge and pacing trajectory illustration"
    },
    features: {
      eyebrow: "Useful at a glance",
      heading: "A percentage becomes a decision.",
      intro: "See how today’s position and recent pace fit the time remaining—without opening another dashboard.",
      items: [
        { heading: "Clear guidance", body: "Slow down, On pace, Headroom, or Hold—based on current position and trajectory. Longer-window limits guard shorter ones in the same pool." },
        { heading: "Honest forecasts", body: "Estimates use locale-independent quota activity observed while Analytics is open and optional local observations, mark low confidence with an approximation, and end at zero instead of implying negative quota." },
        { heading: "Your target", body: "Choose an end-of-window reserve and tolerance or pause local history. Popup settings save immediately and work in light or dark mode." }
      ]
    },
    screenshots: {
      eyebrow: "Rendered by the extension",
      heading: "Real UI. Synthetic example data.",
      intro: "These images run the production extension code against a private, structurally faithful fixture. No account data appears here.",
      items: [
        { alt: "Dark theme overview with four synthetic Codex quota cards and pacing guidance", caption: "Dark overview · cross-window guardrails" },
        { alt: "Light theme overview with four synthetic Codex quota cards and pacing guidance", caption: "Light overview · readable status contrast" },
        { alt: "Synthetic early-zero state showing a projection ending before reset", caption: "Early-zero estimate" },
        { alt: "Narrow layout with a weekly quota holding a short-window recommendation", caption: "Narrow layout · weekly controller" }
      ]
    },
    private: {
      eyebrow: "Private by design",
      heading: "Your quota stays in Chrome.",
      body: [
        "While Codex Analytics is open, Burn Rate Coach passively observes the page’s own successfully decoded quota result when the page reads it. It accesses only stable meter and window identifiers, used percentage, window duration, and reset timing needed for coaching. It generates observation time locally and associates results with native cards only through matching numeric progress and reset metadata—never translated labels or card order. Settings and optional snapshots remain in <code>chrome.storage.local</code>.",
        "It does not initiate an additional network request, clone or independently decode the response, inspect cookies or authorization headers, transmit quota data, or access account, email, plan, credit, or spend-control fields. There is no backend, telemetry, advertising, remote code, or Burn Rate Coach account system."
      ],
      policyLink: "Read the privacy policy"
    },
    limitations: {
      eyebrow: "Know the limits",
      heading: "A coach, not a guarantee.",
      items: [
        "History is observed only while the Analytics page is open.",
        "Percentage points are not tasks, tokens, messages, or minutes.",
        "Projections can change after bursts of heavier or lighter work.",
        "Quota collection works across Codex interface languages; the coach interface supports English, Turkish, Hindi, Spanish, and Arabic."
      ]
    },
    closing: {
      heading: "Make every reset count.",
      body: "Burn Rate Coach is free on the Chrome Web Store.",
      cta: "Add to Chrome"
    }
  },
  privacy: {
    metaDescription: "Burn Rate Coach privacy policy.",
    title: "Privacy — Burn Rate Coach",
    effectiveDate: "Effective July 16, 2026",
    heading: "Privacy policy",
    lede: "Burn Rate Coach is an independent Chrome extension that adds pacing guidance to the Codex Analytics usage page. It is not affiliated with or endorsed by OpenAI.",
    canonicalNotice: { heading: "", body: "", link: "" },
    sections: [
      {
        heading: "Information handled",
        paragraphs: [
          "While Codex Analytics is open, a packaged page bridge passively observes the page’s own successful quota result when the page decodes it. It directly accesses only stable rate-limit meter and window identifiers, used percentage, quota-window duration, and reset timing needed for coaching. The isolated extension associates results with native cards only through matching numeric progress and reset metadata; it never uses translated labels or card order. The extension generates the observation timestamp locally rather than reading it from the response. It does not initiate the request, clone or independently decode the response, or inspect headers, cookies, authorization tokens, or other credentials.",
          "The page’s result can also contain email, account and user identifiers, plan information, credits, and spend-control fields. Burn Rate Coach does not access or enumerate those unrelated fields and never bridges, logs, stores, or transmits them. It also does not read or store prompts, conversations, source code, passwords, payment credentials, or API keys.",
          "Burn Rate Coach stores the settings you choose. When local history is enabled, it stores timestamped quota percentages and reset timestamps in Chrome’s local extension storage. Records older than 14 days are ignored and pruned when Analytics next processes history, and each meter is capped at 10,082 samples. Older records can remain on an inactive device until cleanup, clear, or uninstall."
        ]
      },
      {
        heading: "How information is used",
        paragraphs: [
          "The allowlisted quota information is used only to calculate and display current pacing position, recommended action, local trajectories, projected quota remaining at reset, and the latest active or unrecognized compatibility state."
        ]
      },
      {
        heading: "Storage and transmission",
        paragraphs: [
          "Settings, compatibility state, and quota history remain in <code>chrome.storage.local</code> on your device. Burn Rate Coach has no backend and does not transmit extension data to the developer or third parties, use analytics or advertising SDKs, or sell user data.",
          "If you choose an external support or privacy link, Chrome opens that public website. The website processes the visit under its own privacy policy. Burn Rate Coach does not append tracking parameters."
        ]
      },
      {
        heading: "Sharing",
        paragraphs: [
          "Burn Rate Coach does not share or transfer extension data to third parties. It does not use data for advertising, profiling, creditworthiness, or purposes unrelated to quota pacing."
        ]
      },
      {
        heading: "Your controls",
        paragraphs: [
          "Response-based coaching is enabled only after you acknowledge its one-time localized data-source disclosure on that Chrome installation. Turning off <strong>Show coach</strong> removes Burn Rate Coach guidance from the page but does not stop page observation or compatibility checks. If Local pace history is enabled, local sampling continues while the Analytics page is open so guidance can resume with current evidence when shown again. Turning off <strong>Local pace history</strong> stops collecting and using saved samples whether the coach is shown or hidden. Existing samples remain on the device until the next Analytics-page cleanup, an explicit clear, or uninstall, and can inform projections again if you re-enable history first. The two-click <strong>Clear history</strong> control remains available while the coach is hidden, deletes current and legacy quota snapshots, and prevents an in-flight older write from restoring them. If Local pace history remains enabled, collection can begin again with later page observations. Uninstalling Burn Rate Coach removes its local extension data through Chrome."
        ]
      },
      {
        heading: "Security and policy compliance",
        paragraphs: [
          "All executable code is packaged with the extension. The page bridge sends only an allowlisted quota projection to the isolated extension context; it does not forward the raw response. Burn Rate Coach uses information only for its disclosed single purpose and follows the Chrome Web Store User Data Policy, including Limited Use requirements."
        ]
      },
      {
        heading: "Changes",
        paragraphs: [
          "Material changes to data handling will be reflected in this policy, the Chrome Web Store privacy disclosures, and—when required—an in-product disclosure before the changed handling begins."
        ]
      }
    ],
    contact: {
      heading: "Contact",
      privacyLabel: "Privacy questions",
      supportLabel: "Support reports",
      issueTracker: "public issue tracker"
    }
  },
  support: {
    metaDescription: "Help and support for Burn Rate Coach.",
    title: "Support — Burn Rate Coach",
    eyebrow: "Help and compatibility",
    heading: "Support",
    lede: "Most issues can be resolved by opening the exact Codex Analytics usage route and reloading once. If the page or its quota response has changed, the popup will report the latest compatibility state.",
    openIssue: "Open a support issue",
    quickChecks: {
      heading: "Quick checks",
      items: [
        "Open <code>https://chatgpt.com/codex/cloud/settings/analytics</code> and select the Usage view.",
        "Confirm Chrome is version 111 or newer and Burn Rate Coach is enabled on <code>chrome://extensions</code>.",
        "Reload Analytics. The extension runs only on that exact usage route and observes only the page’s own successful quota result when the page decodes it.",
        "Open the extension popup and check Codex compatibility.",
        "If a card remains native, wait for the page to finish loading and reload once. Burn Rate Coach deliberately restores native cards after a failed 900 ms enhancement attempt."
      ]
    },
    include: {
      heading: "What to include",
      items: [
        "Chrome and extension versions;",
        "your Codex interface language;",
        "whether you entered Analytics directly or through Codex navigation;",
        "light or dark theme, viewport width, and browser zoom;",
        "the popup’s compatibility message;",
        "whether reloading changes the result."
      ]
    },
    accountNotice: {
      heading: "Protect your account.",
      body: "Never post HAR files, full network-response bodies, cookies, authentication tokens, credentials, prompts, conversations, full page exports, private source code, or screenshots containing account data. The Codex usage response can contain email and account identifiers. Synthetic or tightly cropped UI evidence is preferred."
    },
    limitations: {
      heading: "Known limitations",
      items: [
        "History is collected only while Analytics is open.",
        "Closed-page activity appears as a gap between observations.",
        "Records older than 14 days are pruned the next time Analytics history processing runs; each meter is capped at 10,082 samples, and inactive installs may retain older local bytes until clear or uninstall.",
        "Quota extraction is locale-independent; the coach interface supports English, Turkish, Hindi, Spanish, and Arabic.",
        "Codex response or interface changes can temporarily prevent card recognition.",
        "An unpacked install and Chrome Web Store install use different extension storage identities."
      ]
    },
    privateContact: {
      heading: "Private contact",
      bodyBefore: "For a privacy question or a report that should not be public, email",
      bodyAfter: "Do not email credentials, HAR files, full response bodies, or account exports."
    }
  }
};
