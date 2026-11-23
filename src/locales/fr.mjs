export default {
  review: {
    state: "draft",
    fluentReviewRequired: true,
    reviewedBy: null,
    reviewedAt: null
  },
  common: {
    skipToContent: "Aller au contenu",
    home: "Accueil",
    features: "Fonctionnalités",
    usageGuide: "Limites d’utilisation",
    pacingGuide: "Rythme des quotas",
    privacy: "Confidentialité",
    support: "Assistance",
    issues: "Problèmes",
    mainNavigation: "Navigation principale",
    footerNavigation: "Navigation de pied de page",
    languageNavigation: "Langue",
    brandHome: "Accueil de Codex Limit Coach",
    independentShort: "Codex Limit Coach est indépendant et n’est pas approuvé par OpenAI.",
    independentLong: "Codex Limit Coach est une extension indépendante, sans affiliation avec OpenAI et non approuvée par OpenAI."
  },
  home: {
    metaDescription: "Voyez où se dirige chaque quota Codex à la réinitialisation, avec des prévisions locales et aucune donnée quittant votre appareil.",
    title: "Codex Limit Coach — voyez où se dirige chaque quota",
    hero: {
      eyebrow: "Extension Chrome gratuite · Traitement local par conception",
      headlinePrimary: "Voyez où se dirige chaque quota.",
      headlineSecondary: "Avant sa réinitialisation.",
      lede: "Votre quota Codex tiendra-t-il jusqu’à la réinitialisation ? Codex Limit Coach affiche le solde estimé à la réinitialisation ou le moment où il pourrait atteindre zéro, à côté de chaque carte de quota compatible sur la page d’utilisation de Codex.",
      storeCta: "Obtenir dans le Chrome Web Store",
      examplesCta: "Voir les données d’exemple",
      privacyHighlightsLabel: "Points clés sur la confidentialité",
      noAccount: "Aucun compte Codex Limit Coach",
      noTelemetry: "Aucune télémétrie",
      storagePermission: "Seule autorisation : stockage",
      promoAlt: "Illustration de la jauge et de la trajectoire de rythme de Codex Limit Coach"
    },
    features: {
      eyebrow: "Utile en un coup d’œil",
      heading: "Un résultat par carte.",
      intro: "1. Installez l’extension et ouvrez sa fenêtre contextuelle. 2. Sélectionnez « Ouvrir l’utilisation de Codex » et connectez-vous si nécessaire. 3. Consultez la prévision à côté des cartes compatibles. Si la page d’utilisation était déjà ouverte lors de l’installation, rechargez la page une fois.",
      items: [
        { heading: "Le résultat d’abord", body: "Chaque compteur affiche indépendamment son solde estimé à la réinitialisation ou le moment où il pourrait atteindre zéro. Aucune carte n’en supplante une autre." },
        { heading: "L’objectif reste distinct", body: "L’utilisation observée détermine la prévision. Votre objectif est une référence discrète utilisée seulement pour colorer la trajectoire par rapport à un corridor fixe." },
        { heading: "Un seul réglage", body: "Choisissez un objectif de fin de période. L’historique limité à 14 jours est automatique, reste sur cet appareil et peut être effacé depuis la fenêtre de l’extension." }
      ]
    },
    screenshots: {
      eyebrow: "Rendu par l’extension",
      heading: "Interface réelle. Données d’exemple synthétiques.",
      intro: "1. Installez l’extension et ouvrez sa fenêtre contextuelle. 2. Sélectionnez « Ouvrir l’utilisation de Codex » et connectez-vous si nécessaire. 3. Consultez la prévision à côté des cartes compatibles. Si la page d’utilisation était déjà ouverte lors de l’installation, rechargez la page une fois.",
      items: [
        { alt: "Carte synthétique de quota Codex en thème sombre avec un solde projeté à la réinitialisation", caption: "Le résultat en un coup d’œil" },
        { alt: "Carte synthétique de quota Codex en thème clair avec observations, objectif et prévision", caption: "Lisible en thème clair comme sombre" },
        { alt: "État synthétique d’épuisement anticipé montrant une projection qui se termine avant la réinitialisation", caption: "Estimation d’épuisement anticipé" },
        { alt: "Fenêtre de Codex Limit Coach avec un seul objectif et un historique local automatique", caption: "Un réglage · historique local automatique" }
      ]
    },
    private: {
      eyebrow: "Confidentiel par conception",
      heading: "Votre quota reste dans Chrome.",
      body: [
        "Tant que la page d’utilisation de Codex est ouvertee, Codex Limit Coach observe passivement le résultat de quota correctement décodé par la page au moment où celle-ci le lit. Il accède uniquement aux identifiants stables du compteur et de la période, au pourcentage utilisé, à la durée de la période et à l’heure de réinitialisation nécessaires à la prévision. Il génère l’heure d’observation localement et associe les résultats aux cartes natives uniquement à partir de la progression numérique et des métadonnées de réinitialisation, jamais à partir des libellés traduits ou de l’ordre des cartes. Les paramètres et les instantanés automatiques limités restent dans <code>chrome.storage.local</code>.",
        "Il n’effectue aucune requête réseau supplémentaire, ne clone ni ne décode indépendamment la réponse, n’examine ni cookies ni en-têtes d’autorisation, ne transmet aucune donnée de quota et n’accède pas aux champs concernant le compte, l’adresse e-mail, l’offre, les crédits ou le contrôle des dépenses. La seule autorisation de l’extension est <code>storage</code>. Deux déclarations de script de contenu intégrées utilisent deux motifs limités <code>https://chatgpt.com/codex/*</code> et <code>https://chatgpt.com/settings/usage*</code> pour les accès directs et via une SPA ; le traitement des données et le rendu restent sur les vues d’utilisation prises en charge. Il n’existe ni contexte d’arrière-plan, ni backend, ni télémétrie, ni publicité, ni code distant, ni système de compte Codex Limit Coach."
      ],
      policyLink: "Lire la politique de confidentialité"
    },
    limitations: {
      eyebrow: "Connaître les limites",
      heading: "Un coach, pas une garantie.",
      items: [
        "L’historique automatique n’est observé que lorsque la page vue d’ensemble de l’utilisation est ouverte et visible ; les onglets masqués n’enregistrent aucun échantillon périodique.",
        "Les points de pourcentage ne correspondent ni à des tâches, ni à des jetons, ni à des messages, ni à des minutes.",
        "Les projections sont des estimations fondées sur un modèle, et non des garanties ; elles ne sont pas étalonnées empiriquement sur des historiques d’utilisation réels.",
        "La collecte des quotas fonctionne quelle que soit la langue d’interface de Codex ; l’interface du coach prend en charge l’anglais, le turc, le hindi, l’espagnol, l’arabe, le français, l’allemand, le japonais et le portugais (Brésil et Portugal)."
      ]
    },
    closing: {
      heading: "Profitez de chaque période jusqu’à sa réinitialisation.",
      body: "Codex Limit Coach est gratuit sur le Chrome Web Store.",
      cta: "Ajouter à Chrome"
    }
  },
  usageGuide: {
    metaDescription: "Un guide simple sur les soldes d’utilisation Codex, les heures de réinitialisation, les limites partagées et les raisons pour lesquelles les pourcentages ne correspondent pas précisément à des tâches.",
    title: "Comprendre les limites d’utilisation Codex — Codex Limit Coach",
    eyebrow: "Guide d’utilisation de Codex",
    heading: "Comprendre les limites d’utilisation Codex",
    lede: "Votre page d’utilisation Codex est la source de référence. Les soldes et les heures de réinitialisation qu’elle affiche dépendent de votre offre, des promotions en cours et des interfaces que vous utilisez.",
    sections: [
      {
        heading: "Lisez le solde et la réinitialisation ensemble",
        paragraphs: [
          "Chaque solde affiché correspond à la part d’allocation restante pour la période de réinitialisation indiquée à côté. Codex peut afficher une ou plusieurs périodes d’utilisation, un solde de crédits ou d’autres limites propres à l’offre.",
          "Ne supposez pas que tous les comptes présentent les mêmes cartes. OpenAI peut modifier les périodes et les promotions disponibles ; fiez-vous donc aux libellés et aux horodatages de votre propre page d’utilisation."
        ]
      },
      {
        heading: "Certaines interfaces peuvent partager une même réserve",
        paragraphs: [
          "Selon OpenAI, Codex, ChatGPT Work, ChatGPT pour Excel et Workspace Agents peuvent partager une réserve d’utilisation agentique, selon l’offre et les produits disponibles.",
          "Une activité sur une interface incluse peut donc modifier le solde que vous verrez ensuite sur une autre. La page d’utilisation et les éventuelles bannières de limite constituent la référence pratique de ce qu’il reste."
        ]
      },
      {
        heading: "Un pourcentage n’est pas un compteur de tâches",
        paragraphs: [
          "La consommation d’une tâche varie selon sa taille, sa complexité, le modèle et l’endroit où elle s’exécute. Dix petites modifications et une longue exécution d’agent ne consomment pas nécessairement des parts comparables.",
          "C’est pourquoi un pourcentage restant ne permet pas de déterminer de façon fiable combien de prompts, de jetons ou de minutes subsistent. Il s’agit d’une jauge d’allocation, pas d’un convertisseur d’unités."
        ]
      },
      {
        heading: "Utilisez l’heure de réinitialisation affichée",
        paragraphs: [
          "Organisez-vous en fonction de l’horodatage exact de réinitialisation affiché sur la page plutôt que d’un calendrier mémorisé. Certaines promotions temporaires peuvent aussi appliquer des réinitialisations différées ou ajustées.",
          "Pour consulter l’état actuel, ouvrez <code>https://chatgpt.com/settings/usage?tab=overview</code>. Si l’itinéraire ou les cartes disponibles changent, suivez la navigation Codex et les indications visibles de votre compte."
        ]
      }
    ],
    sourceLabel: "Lire les indications actuelles d’OpenAI sur l’utilisation de Codex",
    productBody: "Codex Limit Coach ajoute un suivi local du rythme et des estimations à la réinitialisation aux soldes réellement affichés sur votre page d’utilisation Codex. Les prévisions sont des estimations descriptives, et non des garanties du fournisseur.",
    cta: "Obtenir Codex Limit Coach"
  },
  pacingGuide: {
    metaDescription: "Comment lire une prévision de quota Codex, maintenir l’objectif séparé et comprendre les données utilisées par le modèle local.",
    title: "Comment lire une prévision de quota Codex — Codex Limit Coach",
    eyebrow: "Guide pratique du rythme",
    heading: "Comment lire une prévision de quota",
    lede: "Le solde actuel indique où se trouve le quota maintenant. Une prévision descriptive estime où il pourrait se trouver à la réinitialisation ou le moment où il pourrait atteindre zéro.",
    sections: [
      {
        heading: "Les pics initiaux masquent le rythme réel",
        paragraphs: [
          "Une période de forte productivité peut consommer une grande part du quota près du début d’une période de réinitialisation. Le pourcentage restant peut encore sembler confortable, alors que le rythme moyen autorisé pour le reste de la période est désormais bien plus faible.",
          "Comparez le solde restant au temps restant. Si 60 % de l’allocation doit couvrir 85 % de la période, le calendrier laisse moins de marge que ne le suggère le pourcentage principal."
        ]
      },
      {
        heading: "Les tâches lourdes changent la pente",
        paragraphs: [
          "L’utilisation de Codex varie selon la taille de la tâche, sa complexité, le modèle et l’interface. Une longue exécution d’agent peut modifier la trajectoire bien plus que plusieurs prompts légers.",
          "Considérez une projection comme une estimation évolutive. Vérifiez-la de nouveau après une charge de travail exceptionnellement lourde plutôt que de supposer que le rythme d’hier restera inchangé."
        ]
      },
      {
        heading: "Lisez chaque période indépendamment",
        paragraphs: [
          "Lorsque la page affiche plusieurs limites, chaque carte possède son propre solde, sa propre réinitialisation, ses propres données et son propre résultat projeté.",
          "Comparez les résultats qui concernent votre travail, mais ne considérez pas qu’une carte en commande une autre. Des périodes différentes peuvent présenter des faits différents mais compatibles."
        ]
      },
      {
        heading: "Gardez l’objectif et la prévision séparés",
        paragraphs: [
          "Choisissez comme référence le solde que vous souhaitez conserver à la réinitialisation. Modifier cet objectif ne doit pas attirer la prévision vers lui ; seule l’utilisation observée détermine l’estimation.",
          "Des données incertaines doivent produire une couleur plus douce ou neutre, et non une fausse précision. La distribution repose sur un modèle et n’a pas été étalonnée empiriquement sur des historiques d’utilisation réels."
        ]
      }
    ],
    sourceLabel: "Lire les indications actuelles d’OpenAI sur l’utilisation de Codex",
    productBody: "Codex Limit Coach effectue cette comparaison sur la page d’utilisation Codex, localement dans Chrome. Il affiche un résultat descriptif par carte et maintient l’objectif séparé de la prévision.",
    cta: "Ajouter le coach local"
  },
  privacy: {
    metaDescription: "Politique de confidentialité de Codex Limit Coach.",
    title: "Confidentialité — Codex Limit Coach",
    effectiveDate: "En vigueur le 12 octobre 2026",
    heading: "Politique de confidentialité",
    lede: "Codex Limit Coach est une extension Chrome indépendante qui ajoute des indications de rythme à la page d’utilisation de Codex. Elle n’est ni affiliée à OpenAI ni approuvée par OpenAI.",
    canonicalNotice: {
      heading: "Projet de traduction",
      body: "Ce résumé doit encore être relu par une personne maîtrisant la langue. Le texte faisant autorité est la politique en anglais :",
      link: "politique de confidentialité en anglais"
    },
    sections: [
      {
        heading: "Informations traitées",
        paragraphs: [
          "Tant que la page d’utilisation de Codex est ouvertee, un pont de page intégré observe passivement le résultat de quota correctement décodé par la page au moment où celle-ci le lit. Il accède directement uniquement aux identifiants stables du compteur et de la période de limite de débit, au pourcentage utilisé, à la durée de la période de quota et à l’heure de réinitialisation nécessaires au coaching. L’extension isolée associe les résultats aux cartes natives uniquement à partir de la progression numérique et des métadonnées de réinitialisation ; elle n’utilise jamais les libellés traduits ni l’ordre des cartes. L’extension génère l’horodatage d’observation localement au lieu de le lire dans la réponse. Elle n’effectue pas la requête, ne clone ni ne décode indépendamment la réponse et n’examine ni en-têtes, ni cookies, ni jetons d’autorisation, ni autres identifiants.",
          "Le résultat de la page peut également contenir l’adresse e-mail, des identifiants de compte et d’utilisateur, des informations sur l’offre, des crédits et des champs de contrôle des dépenses. Codex Limit Coach n’accède pas à ces champs sans rapport, ne les énumère pas et ne les transmet, journalise, stocke ou envoie jamais. Il ne lit ni ne stocke non plus les prompts, conversations, codes sources, mots de passe, identifiants de paiement ou clés API.",
          "Codex Limit Coach enregistre dans le stockage local de l’extension Chrome si le coach est affiché, votre pourcentage restant cible, l’état de compatibilité, ainsi que les pourcentages de quota horodatés automatiquement et les horodatages de réinitialisation. Il n’enregistre aucun échantillon périodique lorsque l’onglet du navigateur est masqué. Les enregistrements de plus de 14 jours sont ignorés et supprimés lorsque la page vue d’ensemble de l’utilisation traite de nouveau l’historique, et chaque compteur est limité à 10 082 échantillons. Sur un appareil inactif, des enregistrements plus anciens peuvent subsister jusqu’au prochain nettoyage, à l’effacement ou à la désinstallation."
        ]
      },
      {
        heading: "Utilisation des informations",
        paragraphs: [
          "Les informations de quota autorisées servent uniquement à calculer et afficher la position actuelle, la référence de l’objectif, les trajectoires locales, le quota restant projeté à la réinitialisation ou l’heure estimée d’épuisement anticipé, la classification par couleur et le dernier état de compatibilité actif ou non reconnu. Chaque compteur est évalué indépendamment."
        ]
      },
      {
        heading: "Stockage et transmission",
        paragraphs: [
          "Les paramètres, l’état de compatibilité et l’historique des quotas restent dans <code>chrome.storage.local</code> sur votre appareil. La seule autorisation de l’extension est <code>storage</code>. Deux déclarations de script de contenu intégrées utilisent deux motifs limités <code>https://chatgpt.com/codex/*</code> et <code>https://chatgpt.com/settings/usage*</code> pour les accès directs et via une SPA ; le traitement des données et le rendu restent sur les vues d’utilisation prises en charge, sans contexte d’arrière-plan. Codex Limit Coach ne possède aucun backend et ne transmet pas les données de l’extension au développeur ou à des tiers, n’utilise pas de SDK d’analyse ou de publicité et ne vend pas les données utilisateur.",
          "Si vous choisissez un lien externe d’assistance ou de confidentialité, Chrome ouvre le site web public correspondant. Le site traite votre visite conformément à sa propre politique de confidentialité. Codex Limit Coach n’ajoute aucun paramètre de suivi."
        ]
      },
      {
        heading: "Partage",
        paragraphs: [
          "Codex Limit Coach ne partage ni ne transfère les données de l’extension à des tiers. Il n’utilise pas les données à des fins publicitaires, de profilage, d’évaluation de solvabilité ou à des fins sans rapport avec le rythme des quotas."
        ]
      },
      {
        heading: "Vos commandes",
        paragraphs: [
          "La fiche du Chrome Web Store explique cette utilisation locale des données de quota avant l’installation, et la fenêtre de l’extension la rappelle en termes simples. Désactiver <strong>Afficher le coach</strong> retire Codex Limit Coach de la page, mais n’interrompt ni l’observation de la page, ni les vérifications de compatibilité, ni l’historique local automatique tant qu’vue d’ensemble de l’utilisation est visible. La commande à deux clics <strong>Effacer l’historique</strong> reste disponible lorsque le coach est masqué et supprime les instantanés de quota actuels et anciens. De nouvelles observations peuvent ensuite créer un nouvel historique. La désinstallation de Codex Limit Coach supprime ses données locales d’extension par l’intermédiaire de Chrome."
        ]
      },
      {
        heading: "Sécurité et respect des règles",
        paragraphs: [
          "Tout le code exécutable est intégré à l’extension. Le pont de page envoie uniquement une projection de quota autorisée au contexte isolé de l’extension ; il ne transfère pas la réponse brute. Codex Limit Coach utilise les informations uniquement à la seule fin déclarée et respecte le règlement du Chrome Web Store relatif aux données utilisateur, y compris les exigences d’utilisation limitée."
        ]
      },
      {
        heading: "Modifications",
        paragraphs: [
          "Toute modification importante du traitement des données sera reflétée dans cette politique, dans les déclarations de confidentialité du Chrome Web Store et, le cas échéant, dans une information affichée dans le produit avant le début du nouveau traitement."
        ]
      }
    ],
    contact: {
      heading: "Contact",
      privacyLabel: "Questions de confidentialité",
      supportLabel: "Demandes d’assistance",
      issueTracker: "outil public de suivi des problèmes"
    }
  },
  support: {
    metaDescription: "Aide et assistance pour Codex Limit Coach.",
    title: "Assistance — Codex Limit Coach",
    eyebrow: "Aide et compatibilité",
    heading: "Assistance",
    lede: "La plupart des problèmes se résolvent en ouvrant la page d’utilisation de Codex puis en rechargeant la page une fois. Si la page ou sa réponse de quota a changé, la fenêtre de l’extension indique le dernier état de compatibilité.",
    openIssue: "Signaler un problème",
    quickChecks: {
      heading: "Vérifications rapides",
      items: [
        "Ouvrez <code>https://chatgpt.com/settings/usage?tab=overview</code>.",
        "Vérifiez que Chrome est en version 111 ou ultérieure et que Codex Limit Coach est activé dans <code>chrome://extensions</code>.",
        "Rechargez la vue d’ensemble de l’utilisation.",
        "Ouvrez la fenêtre de l’extension et vérifiez la compatibilité Codex.",
        "Si une carte reste dans son état natif, attendez la fin du chargement de la page puis rechargez-la une fois. Codex Limit Coach restaure volontairement les cartes natives après l’échec d’une tentative d’amélioration de 900 ms."
      ]
    },
    include: {
      heading: "Informations à fournir",
      items: [
        "les versions de Chrome et de l’extension ;",
        "la langue de votre interface Codex ;",
        "si vous avez accédé directement à vue d’ensemble de l’utilisation ou par la navigation Codex ;",
        "le thème clair ou sombre, la largeur de la fenêtre et le niveau de zoom du navigateur ;",
        "le message de compatibilité affiché dans la fenêtre de l’extension ;",
        "si le rechargement modifie le résultat."
      ]
    },
    accountNotice: {
      heading: "Protégez votre compte.",
      body: "Ne publiez jamais de fichiers HAR, de corps complets de réponses réseau, de cookies, de jetons d’authentification, d’identifiants, de prompts, de conversations, d’exports complets de page, de code source privé ou de captures d’écran contenant des données de compte. La réponse d’utilisation Codex peut contenir une adresse e-mail et des identifiants de compte. Privilégiez les éléments d’interface synthétiques ou très étroitement recadrés."
    },
    limitations: {
      heading: "Limites connues",
      items: [
        "L’historique automatique n’est collecté que lorsque la page vue d’ensemble de l’utilisation est ouverte et visible ; un onglet masqué n’enregistre aucun échantillon périodique.",
        "L’activité effectuée lorsque la page est fermée n’apparaît que sous forme d’intervalle entre les observations.",
        "Les enregistrements de plus de 14 jours sont supprimés lors du prochain traitement de l’historique vue d’ensemble de l’utilisation ; chaque compteur est limité à 10 082 échantillons, et les installations inactives peuvent conserver des octets locaux plus anciens jusqu’à l’effacement ou la désinstallation.",
        "Les distributions de prévision reposent sur un modèle et n’ont pas été étalonnées empiriquement sur des historiques d’utilisation réels.",
        "L’extraction des quotas ne dépend pas de la langue ; l’interface du coach prend en charge l’anglais, le turc, le hindi, l’espagnol, l’arabe, le français, l’allemand, le japonais et le portugais (Brésil et Portugal).",
        "Les modifications de la réponse ou de l’interface Codex peuvent temporairement empêcher la reconnaissance des cartes.",
        "Une installation non empaquetée et une installation depuis le Chrome Web Store utilisent des identités de stockage d’extension différentes."
      ]
    },
    privateContact: {
      heading: "Contact privé",
      bodyBefore: "Pour une question de confidentialité ou un signalement qui ne doit pas être public, écrivez à",
      bodyAfter: "N’envoyez pas d’identifiants, de fichiers HAR, de corps complets de réponses ou d’exports de compte."
    }
  }
};
