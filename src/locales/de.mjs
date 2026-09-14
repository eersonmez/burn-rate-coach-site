export default {
  review: {
    state: "draft",
    fluentReviewRequired: true,
    reviewedBy: null,
    reviewedAt: null
  },
  common: {
    skipToContent: "Zum Inhalt springen",
    home: "Startseite",
    features: "Funktionen",
    usageGuide: "Nutzungslimits",
    pacingGuide: "Verbrauchstempo",
    privacy: "Datenschutz",
    support: "Hilfe",
    issues: "Probleme",
    mainNavigation: "Hauptnavigation",
    footerNavigation: "Fußzeilennavigation",
    languageNavigation: "Sprache",
    brandHome: "Startseite von Codex Limit Coach",
    independentShort: "Codex Limit Coach ist unabhängig und wird von OpenAI nicht unterstützt.",
    independentLong: "Codex Limit Coach ist eine unabhängige Erweiterung und weder mit OpenAI verbunden noch von OpenAI unterstützt."
  },
  home: {
    metaDescription: "Sehen Sie, wohin jedes Codex-Kontingent bis zum Reset steuert – mit lokalen Prognosen, ohne dass Daten Ihr Gerät verlassen.",
    title: "Codex Limit Coach – sehen Sie, wohin jedes Codex-Kontingent steuert",
    hero: {
      eyebrow: "Kostenlose Chrome-Erweiterung · Lokal konzipiert",
      headlinePrimary: "Sehen Sie, wohin jedes Kontingent steuert.",
      headlineSecondary: "Bevor es zurückgesetzt wird.",
      lede: "Reicht dein Codex-Kontingent bis zum Zurücksetzen? Codex Limit Coach zeigt neben jeder unterstützten Kontingentkarte in Codex Analytics den geschätzten Rest beim Zurücksetzen oder den Zeitpunkt, an dem das Kontingent aufgebraucht sein könnte.",
      storeCta: "Im Chrome Web Store herunterladen",
      examplesCta: "Beispieldaten ansehen",
      privacyHighlightsLabel: "Datenschutz auf einen Blick",
      noAccount: "Kein Konto bei Codex Limit Coach",
      noTelemetry: "Keine Telemetrie",
      storagePermission: "Nur Speicherberechtigung",
      promoAlt: "Darstellung der Kontingentanzeige und des Verbrauchsverlaufs von Codex Limit Coach"
    },
    features: {
      eyebrow: "Auf einen Blick nützlich",
      heading: "Ein Ergebnis pro Karte.",
      intro: "1. Installiere die Erweiterung und öffne ihr Popup. 2. Wähle „Codex-Nutzung öffnen“ und melde dich bei Bedarf an. 3. Lies die Prognose neben den unterstützten Karten. Falls Analytics bei der Installation bereits geöffnet war, lade die Seite einmal neu.",
      items: [
        { heading: "Das Ergebnis zuerst", body: "Jedes Kontingent zeigt unabhängig sein geschätztes Restkontingent beim Reset oder den Zeitpunkt, zu dem es null erreichen könnte. Keine Karte setzt eine andere außer Kraft." },
        { heading: "Das Ziel bleibt getrennt", body: "Die beobachtete Nutzung bestimmt die Prognose. Ihr Ziel ist eine zurückhaltende Referenz, die den Verlauf lediglich gegenüber einem festen Korridor einfärbt." },
        { heading: "Eine Einstellung", body: "Wählen Sie einen Zielwert am Ende des Zeitfensters. Der begrenzte 14-Tage-Verlauf wird automatisch geführt, bleibt auf diesem Gerät und kann im Pop-up gelöscht werden." }
      ]
    },
    screenshots: {
      eyebrow: "Von der Erweiterung gerendert",
      heading: "Echte Oberfläche. Synthetische Beispieldaten.",
      intro: "1. Installiere die Erweiterung und öffne ihr Popup. 2. Wähle „Codex-Nutzung öffnen“ und melde dich bei Bedarf an. 3. Lies die Prognose neben den unterstützten Karten. Falls Analytics bei der Installation bereits geöffnet war, lade die Seite einmal neu.",
      items: [
        { alt: "Synthetische Codex-Kontingentkarte im dunklen Design mit prognostiziertem Restkontingent beim Reset", caption: "Ergebnis auf einen Blick" },
        { alt: "Synthetische Codex-Kontingentkarte im hellen Design mit Beobachtungen, Ziel und Prognose", caption: "Hell und dunkel gut lesbar" },
        { alt: "Synthetischer Zustand für vorzeitigen Aufbrauch mit einer Projektion, die vor dem Reset endet", caption: "Geschätzter vorzeitiger Aufbrauch" },
        { alt: "Pop-up von Codex Limit Coach mit einer Zieleinstellung und automatischem lokalem Verlauf", caption: "Eine Einstellung · automatischer lokaler Verlauf" }
      ]
    },
    private: {
      eyebrow: "Datenschutz von Grund auf",
      heading: "Ihr Kontingent bleibt in Chrome.",
      body: [
        "Solange Codex Analytics geöffnet ist, beobachtet Codex Limit Coach passiv das von der Seite selbst erfolgreich decodierte Kontingentergebnis, sobald die Seite es liest. Die Erweiterung greift nur auf die für die Prognose erforderlichen stabilen Kennungen von Kontingent und Zeitfenster, den verbrauchten Prozentsatz, die Dauer des Zeitfensters und den Reset-Zeitpunkt zu. Sie erzeugt den Beobachtungszeitpunkt lokal und ordnet Ergebnisse den ursprünglichen Karten ausschließlich anhand übereinstimmender numerischer Fortschritts- und Reset-Metadaten zu – niemals anhand übersetzter Beschriftungen oder der Kartenreihenfolge. Einstellungen und automatische begrenzte Momentaufnahmen verbleiben in <code>chrome.storage.local</code>.",
        "Codex Limit Coach startet keine zusätzliche Netzwerkanfrage, klont oder decodiert die Antwort nicht eigenständig, untersucht weder Cookies noch Autorisierungsheader, überträgt keine Kontingentdaten und greift nicht auf Konto-, E-Mail-, Tarif-, Guthaben- oder Ausgabenkontrollfelder zu. Die einzige Berechtigung der Erweiterung ist <code>storage</code>. Zwei enthaltene Deklarationen für Inhaltsskripte verwenden für den direkten Einstieg und den SPA-Einstieg gemeinsam ein einziges begrenztes Übereinstimmungsmuster, <code>https://chatgpt.com/codex/*</code>; die Laufzeitverarbeitung und Darstellung von Daten bleibt auf Analytics beschränkt. Es gibt keinen Hintergrundkontext, kein Backend, keine Telemetrie, keine Werbung, keinen externen Code und kein Kontosystem von Codex Limit Coach."
      ],
      policyLink: "Datenschutzerklärung lesen"
    },
    limitations: {
      eyebrow: "Die Grenzen kennen",
      heading: "Ein Coach, keine Garantie.",
      items: [
        "Der automatische Verlauf wird nur erfasst, solange die Analytics-Seite geöffnet und sichtbar ist; ausgeblendete Tabs zeichnen keine planmäßigen Verlaufsmessungen auf.",
        "Prozentpunkte sind keine Aufgaben, Tokens, Nachrichten oder Minuten.",
        "Projektionen sind modellbasierte Schätzungen, keine Garantien, und wurden nicht empirisch anhand realer Nutzungsverläufe kalibriert.",
        "Die Kontingenterfassung funktioniert unabhängig von der Sprache der Codex-Oberfläche; die Coach-Oberfläche unterstützt Englisch, Türkisch, Hindi, Spanisch, Arabisch, Französisch, Deutsch, Japanisch und Portugiesisch für Brasilien und Portugal."
      ]
    },
    closing: {
      heading: "Jeder Reset zählt.",
      body: "Codex Limit Coach ist kostenlos im Chrome Web Store erhältlich.",
      cta: "Zu Chrome hinzufügen"
    }
  },
  usageGuide: {
    metaDescription: "Eine verständliche Einführung in Codex-Nutzungskontingente, Reset-Zeitpunkte, gemeinsam genutzte Limits und die Frage, warum sich Prozentsätze nicht direkt in Aufgaben umrechnen lassen.",
    title: "So funktionieren die Codex-Nutzungslimits – Codex Limit Coach",
    eyebrow: "Leitfaden zur Codex-Nutzung",
    heading: "So funktionieren die Codex-Nutzungslimits",
    lede: "Ihre Codex-Nutzungsseite ist die maßgebliche Quelle. Die angezeigten Restkontingente und Reset-Zeitpunkte hängen von Ihrem Tarif, aktuellen Angeboten und den verwendeten Oberflächen ab.",
    sections: [
      {
        heading: "Restkontingent und Reset zusammen betrachten",
        paragraphs: [
          "Jedes angezeigte Restkontingent ist der noch verfügbare Anteil für das daneben angegebene Reset-Zeitfenster. Codex kann ein oder mehrere Nutzungszeitfenster, ein Guthaben oder andere tarifabhängige Limits anzeigen.",
          "Gehen Sie nicht davon aus, dass jedes Konto dieselben Karten besitzt. OpenAI kann verfügbare Zeitfenster und Aktionen ändern; maßgeblich sind daher die Beschriftungen und Zeitangaben auf Ihrer eigenen Nutzungsseite."
        ]
      },
      {
        heading: "Einige Oberflächen können ein gemeinsames Kontingent nutzen",
        paragraphs: [
          "Laut OpenAI können Codex, ChatGPT Work, ChatGPT for Excel und Workspace Agents je nach Tarif und verfügbaren Produkten ein gemeinsames Kontingent für agentische Nutzung verwenden.",
          "Aktivität auf einer einbezogenen Oberfläche kann daher das Restkontingent verändern, das Sie später auf einer anderen sehen. Die Nutzungsseite und etwaige Limit-Hinweise sind der praktische Nachweis des verbleibenden Kontingents."
        ]
      },
      {
        heading: "Ein Prozentsatz ist kein Aufgabenzähler",
        paragraphs: [
          "Der Verbrauch einer Aufgabe hängt von ihrer Größe, Komplexität, dem Modell und dem Ausführungsort ab. Zehn kleine Änderungen und ein langer Agentenlauf müssen nicht vergleichbare Anteile verbrauchen.",
          "Darum lässt sich aus einem verbleibenden Prozentsatz nicht zuverlässig ableiten, wie viele Prompts, Tokens oder Minuten übrig sind. Er zeigt ein Kontingent an und rechnet keine Einheiten um."
        ]
      },
      {
        heading: "Den angezeigten Reset-Zeitpunkt verwenden",
        paragraphs: [
          "Planen Sie anhand des genauen Reset-Zeitpunkts auf der Seite und nicht anhand eines gemerkten Zeitplans. Für manche zeitlich begrenzten Angebote können auch angesparte oder angepasste Reset-Zeitpunkte gelten.",
          "Die aktuelle Ansicht finden Sie unter <code>https://chatgpt.com/codex/cloud/settings/analytics</code>. Falls sich der Pfad oder die verfügbaren Karten ändern, folgen Sie der jeweils aktuellen Codex-Navigation und den sichtbaren Hinweisen für Ihr Konto."
        ]
      }
    ],
    sourceLabel: "Aktuelle Hinweise von OpenAI zur Codex-Nutzung lesen",
    productBody: "Codex Limit Coach ergänzt die tatsächlich auf Ihrer Codex-Nutzungsseite angezeigten Restkontingente um ein lokales Verbrauchstempo und Schätzungen für den Reset-Zeitpunkt. Prognosen sind beschreibende Schätzungen, keine Garantien des Anbieters.",
    cta: "Codex Limit Coach herunterladen"
  },
  pacingGuide: {
    metaDescription: "So lesen Sie eine Prognose für Ihr Codex-Kontingent, halten Ziel und Prognose getrennt und verstehen die lokale Datengrundlage des Modells.",
    title: "So lesen Sie eine Prognose für Ihr Codex-Kontingent – Codex Limit Coach",
    eyebrow: "Praktischer Leitfaden zum Verbrauchstempo",
    heading: "So lesen Sie eine Kontingentprognose",
    lede: "Das aktuelle Restkontingent zeigt, wo das Kontingent jetzt steht. Eine beschreibende Prognose schätzt, wo es beim Reset liegen oder wann es null erreichen könnte.",
    sections: [
      {
        heading: "Frühe Spitzen verdecken das tatsächliche Tempo",
        paragraphs: [
          "Eine produktive Arbeitsphase kann gleich zu Beginn eines Reset-Zeitfensters einen großen Anteil verbrauchen. Der verbleibende Prozentsatz kann noch komfortabel wirken, obwohl das für den Rest des Zeitfensters mögliche Durchschnittstempo bereits deutlich niedriger ist.",
          "Vergleichen Sie das verbleibende Kontingent mit der verbleibenden Zeit. Wenn 60 % des Kontingents 85 % des Zeitfensters abdecken müssen, bietet der Zeitplan weniger Spielraum, als der hervorgehobene Prozentsatz vermuten lässt."
        ]
      },
      {
        heading: "Aufwendige Aufgaben verändern die Steigung",
        paragraphs: [
          "Die Codex-Nutzung hängt von Größe und Komplexität der Aufgabe, vom Modell und von der Oberfläche ab. Ein langer Agentenlauf kann den Verlauf wesentlich stärker verändern als mehrere kurze Prompts.",
          "Betrachten Sie eine Projektion als laufend aktualisierte Schätzung. Prüfen Sie sie nach ungewöhnlich aufwendiger Arbeit erneut, statt anzunehmen, dass das gestrige Tempo unverändert anhält."
        ]
      },
      {
        heading: "Jedes Zeitfenster unabhängig betrachten",
        paragraphs: [
          "Wenn die Seite mehr als ein Limit zeigt, besitzt jede Karte ein eigenes Restkontingent, einen eigenen Reset, eine eigene Datengrundlage und ein eigenes prognostiziertes Ergebnis.",
          "Vergleichen Sie die für Ihre Arbeit relevanten Ergebnisse, aber behandeln Sie keine Karte als Steuerung einer anderen. Unterschiedliche Zeitfenster können unterschiedliche, miteinander vereinbare Tatsachen darstellen."
        ]
      },
      {
        heading: "Ziel und Prognose getrennt halten",
        paragraphs: [
          "Wählen Sie das Restkontingent, das Sie beim Reset gern bewahren möchten, als Referenz. Eine Änderung dieses Ziels darf die Prognose nicht in seine Richtung ziehen; allein die beobachtete Nutzung bestimmt die Schätzung.",
          "Eine unsichere Datengrundlage sollte eine dezentere oder neutrale Farbe bewirken, nicht falsche Präzision. Die Verteilung basiert auf einem Modell und wurde nicht empirisch anhand realer Nutzungsverläufe kalibriert."
        ]
      }
    ],
    sourceLabel: "Aktuelle Hinweise von OpenAI zur Codex-Nutzung lesen",
    productBody: "Codex Limit Coach führt diesen Vergleich lokal in Chrome auf der Codex-Nutzungsseite durch. Er zeigt ein beschreibendes Ergebnis pro Karte und hält das Ziel von der Prognose getrennt.",
    cta: "Lokalen Coach hinzufügen"
  },
  privacy: {
    metaDescription: "Datenschutzerklärung von Codex Limit Coach.",
    title: "Datenschutz – Codex Limit Coach",
    effectiveDate: "Gültig ab 28. Juli 2026",
    heading: "Datenschutzerklärung",
    lede: "Codex Limit Coach ist eine unabhängige Chrome-Erweiterung, die die Nutzungsseite von Codex Analytics um Hinweise zum Verbrauchstempo ergänzt. Sie ist weder mit OpenAI verbunden noch von OpenAI unterstützt.",
    canonicalNotice: {
      heading: "Übersetzungsentwurf",
      body: "Diese Zusammenfassung muss noch von einer sprachkundigen Person geprüft werden. Maßgeblich ist die englische Datenschutzerklärung:",
      link: "englische Datenschutzerklärung"
    },
    sections: [
      {
        heading: "Verarbeitete Informationen",
        paragraphs: [
          "Solange Codex Analytics geöffnet ist, beobachtet eine in der Erweiterung enthaltene Seitenbrücke passiv das erfolgreiche Kontingentergebnis der Seite, sobald die Seite es decodiert. Sie greift unmittelbar nur auf die für den Coach erforderlichen stabilen Kennungen des Nutzungslimits und seines Zeitfensters, den verbrauchten Prozentsatz, die Dauer des Kontingentzeitfensters und den Reset-Zeitpunkt zu. Der isolierte Erweiterungskontext ordnet die Ergebnisse den ursprünglichen Karten ausschließlich anhand übereinstimmender numerischer Fortschritts- und Reset-Metadaten zu; übersetzte Beschriftungen oder die Kartenreihenfolge werden nie verwendet. Den Zeitstempel der Beobachtung erzeugt die Erweiterung lokal, statt ihn aus der Antwort zu lesen. Sie startet die Anfrage nicht, klont oder decodiert die Antwort nicht eigenständig und untersucht weder Header, Cookies, Autorisierungstokens noch andere Zugangsdaten.",
          "Das Ergebnis der Seite kann außerdem E-Mail-Adressen, Konto- und Benutzerkennungen, Tarifinformationen, Guthaben und Felder zur Ausgabenkontrolle enthalten. Codex Limit Coach greift auf diese sachfremden Felder weder zu noch zählt die Erweiterung sie auf; sie leitet sie niemals aus der Seite weiter und protokolliert, speichert oder überträgt sie nicht. Die Erweiterung liest oder speichert außerdem keine Prompts, Unterhaltungen, Quellcodes, Passwörter, Zahlungsdaten oder API-Schlüssel.",
          "Codex Limit Coach speichert im lokalen Erweiterungsspeicher von Chrome, ob der Coach angezeigt wird, Ihren Zielwert für das verbleibende Kontingent, den Kompatibilitätsstatus sowie automatisch erfasste Kontingentprozentsätze und Reset-Zeitstempel. Solange der Browser-Tab ausgeblendet ist, werden keine planmäßigen Verlaufsmessungen aufgezeichnet. Einträge, die älter als 14 Tage sind, werden ignoriert und entfernt, wenn Analytics den Verlauf das nächste Mal verarbeitet; jedes Kontingent ist auf 10.082 Messwerte begrenzt. Ältere Einträge können auf einem inaktiven Gerät verbleiben, bis sie bereinigt oder gelöscht werden oder die Erweiterung deinstalliert wird."
        ]
      },
      {
        heading: "Verwendung der Informationen",
        paragraphs: [
          "Die ausdrücklich zugelassenen Kontingentinformationen werden ausschließlich verwendet, um die aktuelle Position, die Zielreferenz, lokale Verläufe, das prognostizierte Restkontingent beim Reset oder den geschätzten Zeitpunkt des vorzeitigen Aufbrauchens, die Farbklassifizierung sowie den letzten aktiven oder nicht erkannten Kompatibilitätsstatus zu berechnen und anzuzeigen. Jedes Kontingent wird unabhängig ausgewertet."
        ]
      },
      {
        heading: "Speicherung und Übertragung",
        paragraphs: [
          "Einstellungen, Kompatibilitätsstatus und Kontingentverlauf verbleiben auf Ihrem Gerät in <code>chrome.storage.local</code>. Die einzige Berechtigung der Erweiterung ist <code>storage</code>. Zwei enthaltene Deklarationen für Inhaltsskripte verwenden für den direkten Aufruf und den SPA-Aufruf gemeinsam ein einziges begrenztes Übereinstimmungsmuster, <code>https://chatgpt.com/codex/*</code>; die Laufzeitverarbeitung und Darstellung von Daten bleibt ohne Hintergrundkontext auf Analytics beschränkt. Codex Limit Coach besitzt kein Backend, überträgt keine Erweiterungsdaten an den Entwickler oder Dritte, verwendet keine Analyse- oder Werbe-SDKs und verkauft keine Benutzerdaten.",
          "Wenn Sie einen externen Hilfe- oder Datenschutzlink auswählen, öffnet Chrome die entsprechende öffentliche Website. Diese verarbeitet den Besuch gemäß ihrer eigenen Datenschutzerklärung. Codex Limit Coach fügt keine Trackingparameter hinzu."
        ]
      },
      {
        heading: "Weitergabe",
        paragraphs: [
          "Codex Limit Coach gibt Erweiterungsdaten weder an Dritte weiter noch überträgt er sie an Dritte. Die Daten werden nicht für Werbung, Profilbildung, Bonitätsbewertung oder Zwecke verwendet, die nichts mit dem Kontingenttempo zu tun haben."
        ]
      },
      {
        heading: "Ihre Kontrollmöglichkeiten",
        paragraphs: [
          "Der Eintrag im Chrome Web Store erläutert diese lokale Verwendung von Kontingentdaten vor der Installation, und das Pop-up wiederholt sie in verständlicher Sprache. Wenn Sie <strong>Coach anzeigen</strong> deaktivieren, wird Codex Limit Coach von der Seite entfernt. Die Seitenbeobachtung, Kompatibilitätsprüfungen und der automatische lokale Verlauf werden dadurch jedoch nicht beendet, solange Analytics sichtbar ist. Die mit zwei Klicks zu bedienende Funktion <strong>Verlauf löschen</strong> bleibt auch bei ausgeblendetem Coach verfügbar und löscht aktuelle sowie ältere Kontingentmomentaufnahmen. Neue Beobachtungen können anschließend einen neuen Verlauf erzeugen. Wenn Sie Codex Limit Coach deinstallieren, entfernt Chrome die lokalen Erweiterungsdaten."
        ]
      },
      {
        heading: "Sicherheit und Einhaltung von Richtlinien",
        paragraphs: [
          "Der gesamte ausführbare Code ist in der Erweiterung enthalten. Die Seitenbrücke sendet ausschließlich eine auf ausdrücklich zugelassene Kontingentdaten begrenzte Projektion an den isolierten Erweiterungskontext; sie leitet die unverarbeitete Antwort nicht weiter. Codex Limit Coach verwendet Informationen nur für den offengelegten einzigen Zweck und erfüllt die Richtlinie zu Nutzerdaten des Chrome Web Store einschließlich der Anforderungen zur eingeschränkten Nutzung."
        ]
      },
      {
        heading: "Änderungen",
        paragraphs: [
          "Wesentliche Änderungen der Datenverarbeitung werden in dieser Erklärung, in den Datenschutzhinweisen des Chrome Web Store und – sofern erforderlich – in einem Hinweis innerhalb des Produkts aufgeführt, bevor die geänderte Verarbeitung beginnt."
        ]
      }
    ],
    contact: {
      heading: "Kontakt",
      privacyLabel: "Datenschutzfragen",
      supportLabel: "Supportanfragen",
      issueTracker: "öffentlicher Issue-Tracker"
    }
  },
  support: {
    metaDescription: "Hilfe und Support für Codex Limit Coach.",
    title: "Hilfe – Codex Limit Coach",
    eyebrow: "Hilfe und Kompatibilität",
    heading: "Hilfe",
    lede: "Die meisten Probleme lassen sich beheben, indem Sie den genauen Nutzungspfad von Codex Analytics öffnen und die Seite einmal neu laden. Falls sich die Seite oder ihre Kontingentantwort geändert hat, zeigt das Pop-up den aktuellen Kompatibilitätsstatus an.",
    openIssue: "Supportanfrage erstellen",
    quickChecks: {
      heading: "Schnelle Prüfungen",
      items: [
        "Öffnen Sie <code>https://chatgpt.com/codex/cloud/settings/analytics</code> und wählen Sie die Nutzungsansicht.",
        "Vergewissern Sie sich, dass Sie mindestens Chrome 111 verwenden und Codex Limit Coach unter <code>chrome://extensions</code> aktiviert ist.",
        "Laden Sie Analytics neu. Die Erweiterung läuft nur unter diesem genauen Nutzungspfad und beobachtet ausschließlich das erfolgreiche Kontingentergebnis der Seite, sobald die Seite es decodiert.",
        "Öffnen Sie das Pop-up der Erweiterung und prüfen Sie die Codex-Kompatibilität.",
        "Falls eine Karte unverändert bleibt, warten Sie, bis die Seite vollständig geladen ist, und laden Sie sie einmal neu. Codex Limit Coach stellt ursprüngliche Karten nach einem fehlgeschlagenen Verbesserungsversuch von 900 ms absichtlich wieder her."
      ]
    },
    include: {
      heading: "Diese Angaben helfen",
      items: [
        "Versionen von Chrome und der Erweiterung;",
        "die Sprache Ihrer Codex-Oberfläche;",
        "ob Sie Analytics direkt oder über die Codex-Navigation geöffnet haben;",
        "helles oder dunkles Design, Breite des Ansichtsbereichs und Browser-Zoom;",
        "die Kompatibilitätsmeldung im Pop-up;",
        "ob ein Neuladen das Ergebnis verändert."
      ]
    },
    accountNotice: {
      heading: "Schützen Sie Ihr Konto.",
      body: "Veröffentlichen Sie niemals HAR-Dateien, vollständige Inhalte von Netzwerkantworten, Cookies, Authentifizierungstokens, Zugangsdaten, Prompts, Unterhaltungen, vollständige Seitenexporte, privaten Quellcode oder Screenshots mit Kontodaten. Die Codex-Nutzungsantwort kann E-Mail- und Kontokennungen enthalten. Synthetische oder eng zugeschnittene Nachweise der Oberfläche sind vorzuziehen."
    },
    limitations: {
      heading: "Bekannte Einschränkungen",
      items: [
        "Der automatische Verlauf wird nur erfasst, solange Analytics geöffnet und sichtbar ist; ein ausgeblendeter Tab zeichnet keine planmäßigen Verlaufsmessungen auf.",
        "Aktivität bei geschlossener Seite erscheint lediglich als Lücke zwischen Beobachtungen.",
        "Einträge, die älter als 14 Tage sind, werden bei der nächsten Verarbeitung des Analytics-Verlaufs entfernt; jedes Kontingent ist auf 10.082 Messwerte begrenzt, und inaktive Installationen können ältere lokale Daten bis zum Löschen oder Deinstallieren behalten.",
        "Prognoseverteilungen basieren auf einem Modell und wurden nicht empirisch anhand realer Nutzungsverläufe kalibriert.",
        "Die Kontingentextraktion ist sprachunabhängig; die Coach-Oberfläche unterstützt Englisch, Türkisch, Hindi, Spanisch, Arabisch, Französisch, Deutsch, Japanisch und Portugiesisch für Brasilien und Portugal.",
        "Änderungen an der Codex-Antwort oder -Oberfläche können vorübergehend verhindern, dass Karten erkannt werden.",
        "Eine entpackte Installation und eine Installation aus dem Chrome Web Store verwenden unterschiedliche Identitäten für den Erweiterungsspeicher."
      ]
    },
    privateContact: {
      heading: "Vertraulicher Kontakt",
      bodyBefore: "Bei einer Datenschutzfrage oder einer Meldung, die nicht öffentlich sein sollte, schreiben Sie an",
      bodyAfter: "Senden Sie keine Zugangsdaten, HAR-Dateien, vollständigen Antwortinhalte oder Kontoexporte per E-Mail."
    }
  }
};
