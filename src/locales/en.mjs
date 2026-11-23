export default {
  review: {
    state: "canonical",
    fluentReviewRequired: false,
    reviewedBy: "canonical-source",
    reviewedAt: "2026-08-08"
  },
  common: {
    skipToContent: "Skip to content",
    home: "Home",
    features: "Features",
    usageGuide: "Usage limits",
    pacingGuide: "Quota pacing",
    privacy: "Privacy",
    support: "Support",
    issues: "Issues",
    mainNavigation: "Main navigation",
    footerNavigation: "Footer navigation",
    languageNavigation: "Language",
    brandHome: "Codex Limit Coach home",
    independentShort: "Codex Limit Coach is independent and not endorsed by OpenAI.",
    independentLong: "Codex Limit Coach is an independent extension and is not affiliated with or endorsed by OpenAI."
  },
  home: {
    metaDescription: "See where each Codex quota is heading by reset, with local forecasts and nothing leaving your device.",
    title: "Codex Limit Coach — see where each Codex quota is heading",
    hero: {
      eyebrow: "Free Chrome extension · Local by design",
      headlinePrimary: "See where each quota is heading.",
      headlineSecondary: "Before it resets.",
      lede: "Will your Codex quota last until reset? Codex Limit Coach shows the estimated balance at reset, or when your quota may reach zero, beside each supported quota card on Codex Usage Overview.",
      storeCta: "Get it from the Chrome Web Store",
      examplesCta: "See example data",
      privacyHighlightsLabel: "Privacy highlights",
      noAccount: "No Codex Limit Coach account",
      noTelemetry: "No telemetry",
      storagePermission: "Only storage permission",
      promoAlt: "Codex Limit Coach gauge and pacing trajectory illustration"
    },
    features: {
      eyebrow: "Useful at a glance",
      heading: "One outcome per card.",
      intro: "1. Install the extension and open its popup. 2. Select “Open Codex usage” and sign in if needed. 3. View the forecast beside your supported quota cards. If Usage Overview was already open when you installed, reload it once.",
      items: [
        { heading: "Outcome first", body: "Each meter independently shows its estimated balance at reset or when it may reach zero. No card overrides another." },
        { heading: "Target stays separate", body: "Observed usage drives the forecast. Your target is a quiet reference used only to color the path against a fixed corridor." },
        { heading: "One setting", body: "Choose an end-of-window target. Bounded 14-day history is automatic, stays on this device, and can be cleared from the popup." }
      ]
    },
    screenshots: {
      eyebrow: "Rendered by the extension",
      heading: "Real UI. Synthetic example data.",
      intro: "1. Install the extension and open its popup. 2. Select “Open Codex usage” and sign in if needed. 3. View the forecast beside your supported quota cards. If Usage Overview was already open when you installed, reload it once.",
      items: [
        { alt: "Dark theme synthetic Codex quota card with a projected balance at reset", caption: "Outcome at a glance" },
        { alt: "Light theme synthetic Codex quota card with observations, target, and forecast", caption: "Readable in light or dark" },
        { alt: "Synthetic early-zero state showing a projection ending before reset", caption: "Early-zero estimate" },
        { alt: "Codex Limit Coach popup with one target setting and automatic local history", caption: "One setting · automatic local history" }
      ]
    },
    private: {
      eyebrow: "Private by design",
      heading: "Your quota stays in Chrome.",
      body: [
        "While the Codex usage page is open on Overview or Analytics, Codex Limit Coach passively observes the page's own successful quota parse. The packaged bridge accesses only base and additional quota-group identity, used percentage, window duration, and reset timing; each additional name becomes an opaque stable identifier. The isolated script associates meters with native rows through numeric progress and compatible reset metadata, never translated labels or card order. Settings and bounded history remain in <code>chrome.storage.local</code>.",
        "The bridge initiates no request, independently parses no response, inspects no credentials or unrelated account fields, and transmits no quota data. The sole extension API permission is <code>storage</code>. Content scripts match direct and SPA navigation on <code>https://chatgpt.com/codex/*</code> and <code>https://chatgpt.com/settings/usage*</code>; runtime capture is limited to the two Usage tabs or the legacy usage view, and coaching renders on Overview or that legacy view. There is no background context, backend, telemetry, advertising, remote code, or Codex Limit Coach account system."
      ],
      policyLink: "Read the privacy policy"
    },
    limitations: {
      eyebrow: "Know the limits",
      heading: "A coach, not a guarantee.",
      items: [
        "Automatic history is processed only while Usage Overview or the legacy usage view is visible; hidden tabs record no scheduled cadence samples.",
        "Percentage points are not tasks, tokens, messages, or minutes.",
        "Projections are model-based estimates, not guarantees, and are not empirically calibrated on real usage histories.",
        "Quota collection works across Codex interface languages; the coach interface supports English, Turkish, Hindi, Spanish, Arabic, French, German, Japanese, and Portuguese (Brazil and Portugal)."
      ]
    },
    closing: {
      heading: "Make every reset count.",
      body: "Codex Limit Coach is free on the Chrome Web Store.",
      cta: "Add to Chrome"
    }
  },
  usageGuide: {
    metaDescription: "A plain-language guide to Codex usage balances, reset times, shared limits, and why percentages do not map cleanly to tasks.",
    title: "How Codex usage limits work — Codex Limit Coach",
    eyebrow: "Codex usage guide",
    heading: "How Codex usage limits work",
    lede: "Your Codex usage page is the source of truth. The balances and reset times it shows depend on your plan, current offers, and the surfaces you use.",
    sections: [
      {
        heading: "Read the balance and reset together",
        paragraphs: [
          "Each displayed balance is the allowance remaining for the reset window shown beside it. Codex may show one or more usage windows, a credit balance, or other plan-specific limits.",
          "Do not assume every account has the same cards. OpenAI can change available windows and promotions, so use the labels and timestamps on your own usage page."
        ]
      },
      {
        heading: "Some surfaces can share a pool",
        paragraphs: [
          "OpenAI says Codex, ChatGPT Work, ChatGPT for Excel, and Workspace Agents may share an agentic usage pool, depending on the plan and which products are available.",
          "Activity on one included surface can therefore change the balance you later see on another. The usage page and any limit banner are the practical record of what remains."
        ]
      },
      {
        heading: "A percentage is not a task counter",
        paragraphs: [
          "The amount used by a task varies with its size, complexity, model, and where it runs. Ten small edits and one long agent run need not consume comparable shares.",
          "That is why a remaining percentage cannot reliably answer how many prompts, tokens, or minutes are left. It is an allowance meter, not a unit converter."
        ]
      },
      {
        heading: "Use the displayed reset time",
        paragraphs: [
          "Plan around the exact reset timestamp shown on the page instead of a memorized schedule. Some temporary offers may also use banked or adjusted resets.",
          "For the current view, open <code>https://chatgpt.com/settings/usage?tab=overview</code>. If the route or available cards change, follow the current Codex navigation and visible account guidance."
        ]
      }
    ],
    sourceLabel: "Read OpenAI’s current Codex usage guidance",
    productBody: "Codex Limit Coach adds local pacing and at-reset estimates to the balances your Codex usage page actually displays. Forecasts are descriptive estimates, not provider guarantees.",
    cta: "Get Codex Limit Coach"
  },
  pacingGuide: {
    metaDescription: "How to read a Codex quota forecast, keep the target separate, and understand local model evidence.",
    title: "How to read a Codex quota forecast — Codex Limit Coach",
    eyebrow: "Practical pacing guide",
    heading: "How to read a quota forecast",
    lede: "A current balance says where the quota is now. A descriptive forecast estimates where it may be at reset—or when it may reach zero.",
    sections: [
      {
        heading: "Early bursts hide the real pace",
        paragraphs: [
          "A productive burst can consume a large share near the start of a reset window. The remaining percentage may still look comfortable even though the average pace required for the rest of the window is now much lower.",
          "Compare balance remaining with time remaining. If 60% of the allowance must cover 85% of the window, the schedule has less room than the headline percentage suggests."
        ]
      },
      {
        heading: "Heavy tasks change the slope",
        paragraphs: [
          "Codex usage varies with task size, complexity, model, and surface. A long agent run can change the trajectory much more than several lightweight prompts.",
          "Treat a projection as a moving estimate. Recheck after unusually heavy work instead of assuming yesterday’s pace will continue unchanged."
        ]
      },
      {
        heading: "Read each window independently",
        paragraphs: [
          "When the page shows more than one limit, each card has its own balance, reset, evidence, and projected outcome.",
          "Compare the outcomes that apply to your work, but do not treat one card as controlling another. Different windows can state different, compatible facts."
        ]
      },
      {
        heading: "Keep target and forecast separate",
        paragraphs: [
          "Choose the balance you would like left at reset as a reference. Changing that target must not pull the forecast toward it; only observed usage drives the estimate.",
          "Uncertain evidence should produce a softer or neutral color, not false precision. The distribution is model-based and has not been empirically calibrated on real usage histories."
        ]
      }
    ],
    sourceLabel: "Read OpenAI’s current Codex usage guidance",
    productBody: "Codex Limit Coach performs this comparison on the Codex usage page, locally in Chrome. It shows one descriptive outcome per card and keeps the target separate from the forecast.",
    cta: "Add the local coach"
  },
  privacy: {
    metaDescription: "Codex Limit Coach privacy policy.",
    title: "Privacy — Codex Limit Coach",
    effectiveDate: "Effective October 12, 2026",
    heading: "Privacy policy",
    lede: "Codex Limit Coach is an independent Chrome extension that adds pacing guidance to Codex Usage Overview. It is not affiliated with or endorsed by OpenAI.",
    canonicalNotice: { heading: "", body: "", link: "" },
    sections: [
      {
        heading: "Information handled",
        paragraphs: [
          "While the Codex usage page is open on Overview or Analytics, a packaged page bridge passively observes the page's own successful quota parse. It accesses only base and provider-declared additional quota-group identity, used percentage, window duration, and reset timing. Each additional name is immediately reduced to an opaque stable identifier before crossing to the isolated script. That script associates meters with native rows through numeric progress and compatible reset metadata, never translated labels or card order. Observation time is derived locally. The bridge initiates no request, independently parses no response body, and inspects no headers, cookies, authorization tokens, or other credentials.",
          "The page’s result can also contain email, account and user identifiers, plan information, credits, and spend-control fields. Codex Limit Coach does not access or enumerate those unrelated fields and never bridges, logs, stores, or transmits them. It also does not read or store prompts, conversations, source code, passwords, payment credentials, or API keys.",
          "Codex Limit Coach stores whether the coach is shown, your target remaining percentage, compatibility state, and automatic timestamped quota percentages and reset timestamps in Chrome local extension storage. History is processed while Usage Overview or the legacy usage view is visible; a hidden tab records no scheduled cadence samples. Records older than 14 days are ignored and pruned on the next processing pass, and each meter is capped at 10,082 samples. Older records can remain on an inactive device until cleanup, clear, or uninstall."
        ]
      },
      {
        heading: "How information is used",
        paragraphs: [
          "The allowlisted quota information is used only to calculate and display current position, the target reference, local trajectories, projected quota remaining at reset or estimated early-zero time, color classification, and the latest active or unrecognized compatibility state. Each meter is evaluated independently."
        ]
      },
      {
        heading: "Storage and transmission",
        paragraphs: [
          "Settings, compatibility state, and quota history remain in <code>chrome.storage.local</code> on your device. The sole extension API permission is <code>storage</code>. Packaged content scripts match direct and SPA navigation on <code>https://chatgpt.com/codex/*</code> and <code>https://chatgpt.com/settings/usage*</code>; runtime capture is restricted to the new Usage tabs or the legacy usage view, and coaching renders only on Overview or that legacy view. Codex Limit Coach has no background context or backend, does not transmit extension data to the developer or third parties, and does not use analytics or advertising SDKs or sell user data.",
          "If you choose an external support or privacy link, Chrome opens that public website. The website processes the visit under its own privacy policy. Codex Limit Coach does not append tracking parameters."
        ]
      },
      {
        heading: "Sharing",
        paragraphs: [
          "Codex Limit Coach does not share or transfer extension data to third parties. It does not use data for advertising, profiling, creditworthiness, or purposes unrelated to quota pacing."
        ]
      },
      {
        heading: "Your controls",
        paragraphs: [
          "The Chrome Web Store listing explains local quota-data use before installation, and the popup repeats it in plain language. Turning off <strong>Show coach</strong> removes guidance but does not stop page observation or compatibility checks. Automatic local history continues while Usage Overview or the legacy usage view is visible. The two-click <strong>Clear history</strong> control remains available while the coach is hidden and deletes current and legacy quota snapshots. Fresh observations can create new history afterward. Uninstalling Codex Limit Coach removes its local extension data through Chrome."
        ]
      },
      {
        heading: "Security and policy compliance",
        paragraphs: [
          "All executable code is packaged with the extension. The page bridge sends only an allowlisted quota projection to the isolated extension context; it does not forward the raw response. Codex Limit Coach uses information only for its disclosed single purpose and follows the Chrome Web Store User Data Policy, including Limited Use requirements."
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
    metaDescription: "Help and support for Codex Limit Coach.",
    title: "Support — Codex Limit Coach",
    eyebrow: "Help and compatibility",
    heading: "Support",
    lede: "Open Codex Usage Overview and reload once to check compatibility. If the page or quota response has changed, the popup reports the latest compatibility state.",
    openIssue: "Open a support issue",
    quickChecks: {
      heading: "Quick checks",
      items: [
        "Open <code>https://chatgpt.com/settings/usage?tab=overview</code>.",
        "Confirm Chrome is version 111 or newer and Codex Limit Coach is enabled on <code>chrome://extensions</code>.",
        "Reload Usage Overview.",
        "Open the extension popup and check Codex compatibility.",
        "If a card remains native, wait for the page to finish loading and reload once. Codex Limit Coach deliberately restores native cards after a failed 900 ms enhancement attempt."
      ]
    },
    include: {
      heading: "What to include",
      items: [
        "Chrome and extension versions;",
        "your Codex interface language;",
        "whether you entered Usage Overview directly or through Codex navigation;",
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
        "Automatic history is collected only while Usage Overview or the legacy usage view is visible; a hidden tab records no scheduled cadence samples.",
        "Closed-page activity appears only as a gap between observations.",
        "Records older than 14 days are pruned on the next Usage Overview or legacy-view history pass; each meter is capped at 10,082 samples, and inactive installs may retain older local bytes until clear or uninstall.",
        "Forecast distributions are model-based and have not been empirically calibrated on real usage histories.",
        "Quota extraction is locale-independent; the coach interface supports English, Turkish, Hindi, Spanish, Arabic, French, German, Japanese, and Portuguese (Brazil and Portugal).",
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
