export default {
  review: {
    state: "draft",
    fluentReviewRequired: true,
    reviewedBy: null,
    reviewedAt: null
  },
  common: {
    skipToContent: "Ir al contenido",
    home: "Inicio",
    features: "Funciones",
    usageGuide: "Límites de uso",
    pacingGuide: "Ritmo de cuota",
    privacy: "Privacidad",
    support: "Ayuda",
    issues: "Incidencias",
    mainNavigation: "Navegación principal",
    footerNavigation: "Navegación del pie",
    languageNavigation: "Idioma",
    brandHome: "Inicio de Burn Rate Coach",
    independentShort: "Burn Rate Coach es independiente y no está respaldado por OpenAI.",
    independentLong: "Burn Rate Coach es una extensión independiente; no está afiliada ni respaldada por OpenAI."
  },
  home: {
    metaDescription: "Vea hacia dónde va cada cuota de Codex al reiniciarse, con previsiones locales y sin que nada salga de su dispositivo.",
    title: "Burn Rate Coach — vea hacia dónde va cada cuota de Codex",
    hero: {
      eyebrow: "Extensión gratuita para Chrome · Local por diseño",
      headlinePrimary: "Vea hacia dónde va cada cuota.",
      headlineSecondary: "Antes del reinicio.",
      lede: "Burn Rate Coach añade un resultado previsto y una trayectoria local compacta a cada tarjeta de uso de Codex compatible.",
      storeCta: "Obtener en Chrome Web Store",
      examplesCta: "Ver datos de ejemplo",
      privacyHighlightsLabel: "Aspectos de privacidad",
      noAccount: "Sin cuenta de Burn Rate Coach",
      noTelemetry: "Sin telemetría",
      storagePermission: "Solo permiso de almacenamiento",
      promoAlt: "Ilustración del medidor y la trayectoria de ritmo de Burn Rate Coach"
    },
    features: {
      eyebrow: "Útil de un vistazo",
      heading: "Un resultado por tarjeta.",
      intro: "Vea el saldo previsto al reinicio o la hora estimada de agotamiento sin abrir otro panel.",
      items: [
        { heading: "El resultado primero", body: "Cada medidor muestra de forma independiente el saldo estimado al reinicio o cuándo podría llegar a cero. Ninguna tarjeta anula otra." },
        { heading: "El objetivo queda aparte", body: "El uso observado determina la previsión. El objetivo es una referencia discreta que solo colorea la ruta frente a un corredor fijo." },
        { heading: "Un ajuste", body: "Elija el objetivo al final del periodo. El historial limitado de 14 días es automático, queda en este dispositivo y puede borrarse desde la ventana emergente." }
      ]
    },
    screenshots: {
      eyebrow: "Generado por la extensión",
      heading: "Interfaz real. Datos de ejemplo sintéticos.",
      intro: "Estas imágenes ejecutan el código de producción de la extensión con un entorno privado y estructuralmente fiel. No contienen datos de ninguna cuenta.",
      items: [
        { alt: "Tarjeta sintética de cuota de Codex en tema oscuro con saldo previsto al reinicio", caption: "Resultado de un vistazo" },
        { alt: "Tarjeta sintética de cuota de Codex en tema claro con observaciones, objetivo y previsión", caption: "Legible en claro u oscuro" },
        { alt: "Estado sintético que muestra una previsión que llega a cero antes del reinicio", caption: "Estimación de agotamiento anticipado" },
        { alt: "Ventana emergente de Burn Rate Coach con un objetivo e historial local automático", caption: "Un ajuste · historial local automático" }
      ]
    },
    private: {
      eyebrow: "Privado por diseño",
      heading: "Tu cuota se queda en Chrome.",
      body: [
        "Mientras Codex Analytics está abierto, Burn Rate Coach observa de forma pasiva el resultado de cuota que la propia página ha decodificado correctamente cuando lo lee. Solo accede a identificadores estables del medidor y del periodo, el porcentaje usado, la duración del periodo y el momento del reinicio necesarios para la previsión. Genera localmente la hora de observación y asocia los resultados con las tarjetas originales solo mediante metadatos numéricos coincidentes de progreso y reinicio, nunca mediante etiquetas traducidas ni el orden de las tarjetas. Los ajustes y las instantáneas automáticas limitadas permanecen en <code>chrome.storage.local</code>.",
        "No inicia ninguna solicitud de red adicional, no clona ni decodifica la respuesta por separado, no inspecciona cookies ni encabezados de autorización, no transmite datos de cuota ni accede a campos de cuenta, correo, plan, crédito o control de gasto. No existe backend, telemetría, publicidad, código remoto ni sistema de cuentas de Burn Rate Coach."
      ],
      policyLink: "Leer la política de privacidad"
    },
    limitations: {
      eyebrow: "Conoce los límites",
      heading: "Es una guía, no una garantía.",
      items: [
        "El historial automático solo se observa mientras Analytics está abierto y visible; las pestañas ocultas no registran muestras programadas.",
        "Los puntos porcentuales no son tareas, tokens, mensajes ni minutos.",
        "Las previsiones son estimaciones basadas en un modelo, no garantías, y no se han calibrado empíricamente con historiales de uso reales.",
        "La recopilación de cuota funciona con cualquier idioma de la interfaz de Codex; la interfaz del coach admite inglés, turco, hindi, español y árabe."
      ]
    },
    closing: {
      heading: "Aprovecha cada reinicio.",
      body: "Burn Rate Coach es gratuito en Chrome Web Store.",
      cta: "Añadir a Chrome"
    }
  },
  usageGuide: {
    metaDescription: "Guía sencilla sobre saldos de uso de Codex, reinicios, límites compartidos y por qué los porcentajes no equivalen directamente a tareas.",
    title: "Cómo funcionan los límites de uso de Codex — Burn Rate Coach",
    eyebrow: "Guía de uso de Codex",
    heading: "Cómo funcionan los límites de uso de Codex",
    lede: "Tu página de uso de Codex es la fuente de referencia. Los saldos y reinicios dependen de tu plan, las ofertas vigentes y las superficies que utilices.",
    sections: [
      {
        heading: "Lee juntos el saldo y el reinicio",
        paragraphs: [
          "Cada saldo mostrado es la asignación restante para la ventana de reinicio que aparece a su lado. Codex puede mostrar una o más ventanas, un saldo de créditos u otros límites propios del plan.",
          "No supongas que todas las cuentas tienen las mismas tarjetas. OpenAI puede cambiar ventanas y promociones; usa las etiquetas y fechas de tu propia página."
        ]
      },
      {
        heading: "Algunas superficies pueden compartir un fondo",
        paragraphs: [
          "OpenAI indica que Codex, ChatGPT Work, ChatGPT for Excel y Workspace Agents pueden compartir un fondo de uso agéntico, según el plan y los productos disponibles.",
          "La actividad en una superficie incluida puede cambiar el saldo que luego ves en otra. La página de uso y los avisos de límite son el registro práctico de lo que queda."
        ]
      },
      {
        heading: "Un porcentaje no es un contador de tareas",
        paragraphs: [
          "El consumo de una tarea varía según su tamaño, complejidad, modelo y lugar de ejecución. Diez ediciones pequeñas y una ejecución larga de un agente no tienen por qué consumir proporciones comparables.",
          "Por eso el porcentaje restante no dice de forma fiable cuántos mensajes, tokens o minutos quedan. Es un medidor de asignación, no un conversor de unidades."
        ]
      },
      {
        heading: "Usa la hora de reinicio mostrada",
        paragraphs: [
          "Planifica con la hora exacta de reinicio que muestra la página, no con un horario memorizado. Algunas ofertas temporales también pueden usar reinicios acumulados o ajustados.",
          "Para la vista actual, abre <code>https://chatgpt.com/codex/cloud/settings/analytics</code>. Si cambian la ruta o las tarjetas, sigue la navegación vigente de Codex y las indicaciones visibles de la cuenta."
        ]
      }
    ],
    sourceLabel: "Lee la guía vigente de OpenAI sobre el uso de Codex",
    productBody: "Burn Rate Coach añade ritmo local y estimaciones al reinicio a los saldos que muestra realmente tu página de Codex. Son estimaciones descriptivas, no garantías del proveedor.",
    cta: "Obtener Burn Rate Coach"
  },
  pacingGuide: {
    metaDescription: "Cómo leer una previsión de cuota de Codex, separar el objetivo y entender la evidencia local del modelo.",
    title: "Cómo leer una previsión de cuota de Codex — Burn Rate Coach",
    eyebrow: "Guía práctica de ritmo",
    heading: "Cómo leer una previsión de cuota",
    lede: "El saldo actual indica dónde está la cuota ahora. Una previsión descriptiva estima dónde podría estar al reinicio o cuándo podría llegar a cero.",
    sections: [
      {
        heading: "Las ráfagas iniciales ocultan el ritmo real",
        paragraphs: [
          "Una ráfaga productiva puede consumir una gran parte al inicio de la ventana. El porcentaje restante aún puede parecer cómodo aunque el ritmo medio permitido para el resto ya sea mucho menor.",
          "Compara saldo restante con tiempo restante. Si el 60 % de la asignación debe cubrir el 85 % de la ventana, hay menos margen del que sugiere el porcentaje principal."
        ]
      },
      {
        heading: "Las tareas pesadas cambian la pendiente",
        paragraphs: [
          "El uso de Codex varía según el tamaño, la complejidad, el modelo y la superficie. Una ejecución larga de un agente puede cambiar mucho más la trayectoria que varios mensajes ligeros.",
          "Trata la proyección como una estimación móvil. Vuelve a comprobarla después de trabajo inusualmente pesado en vez de asumir que el ritmo de ayer seguirá igual."
        ]
      },
      {
        heading: "Lea cada periodo de forma independiente",
        paragraphs: [
          "Cuando la página muestra más de un límite, cada tarjeta tiene su propio saldo, reinicio, evidencia y resultado previsto.",
          "Compare los resultados aplicables a su trabajo, pero no trate una tarjeta como control de otra. Distintos periodos pueden expresar hechos distintos y compatibles."
        ]
      },
      {
        heading: "Separe el objetivo de la previsión",
        paragraphs: [
          "Elija como referencia el saldo que desea conservar al reinicio. Cambiar ese objetivo no debe atraer la previsión: solo el uso observado determina la estimación.",
          "La evidencia incierta debe producir un color más suave o neutro, no falsa precisión. La distribución se basa en un modelo y no se ha calibrado empíricamente con historiales reales."
        ]
      }
    ],
    sourceLabel: "Lee la guía vigente de OpenAI sobre el uso de Codex",
    productBody: "Burn Rate Coach hace esta comparación de forma local en Chrome, sobre la página de uso de Codex. Muestra un resultado descriptivo por tarjeta y mantiene el objetivo separado de la previsión.",
    cta: "Añadir el guía local"
  },
  privacy: {
    metaDescription: "Resumen de la política de privacidad de Burn Rate Coach.",
    title: "Privacidad — Burn Rate Coach",
    effectiveDate: "Vigente desde el 28 de julio de 2026",
    heading: "Resumen de la política de privacidad",
    lede: "Burn Rate Coach es una extensión independiente de Chrome que añade orientación de ritmo a la página de uso de Codex Analytics. No está afiliada ni respaldada por OpenAI.",
    canonicalNotice: {
      heading: "Traducción en borrador",
      body: "Este resumen aún necesita la revisión de una persona con dominio del idioma. El texto oficial es la política en inglés:",
      link: "política de privacidad en inglés"
    },
    sections: [
      {
        heading: "Información tratada",
        paragraphs: [
          "Mientras Codex Analytics está abierto, un puente empaquetado en la página observa de forma pasiva el resultado de cuota correcto de la propia página cuando esta lo decodifica. Solo accede directamente a identificadores estables del medidor y del periodo del límite, el porcentaje usado, la duración del periodo de cuota y el momento del reinicio necesarios para orientar el ritmo. La extensión aislada asocia los resultados con las tarjetas originales solo mediante metadatos numéricos coincidentes de progreso y reinicio; nunca usa etiquetas traducidas ni el orden de las tarjetas. La extensión genera localmente la marca de tiempo de observación en vez de leerla de la respuesta. No inicia la solicitud, no clona ni decodifica la respuesta por separado y no inspecciona encabezados, cookies, tokens de autorización u otras credenciales.",
          "El resultado de la página también puede contener correo, identificadores de cuenta y usuario, información del plan, créditos y campos de control de gasto. Burn Rate Coach no accede ni enumera esos campos ajenos y nunca los transmite mediante el puente, registra, almacena o envía. Tampoco lee ni guarda instrucciones, conversaciones, código fuente, contraseñas, credenciales de pago ni claves de API.",
          "Burn Rate Coach almacena si se muestra el coach, el porcentaje objetivo, el estado de compatibilidad y porcentajes de cuota y reinicios automáticos con marca de tiempo en el almacenamiento local de Chrome. No registra muestras programadas mientras la pestaña está oculta. Los registros de más de 14 días se eliminan la siguiente vez que Analytics procesa el historial y cada medidor se limita a 10.082 muestras."
        ]
      },
      {
        heading: "Uso de la información",
        paragraphs: [
          "La información de cuota permitida se usa solo para mostrar la posición actual, la referencia objetivo, trayectorias locales, el saldo previsto al reinicio o la hora estimada de agotamiento, la clasificación por color y el estado de compatibilidad. Cada medidor se evalúa de forma independiente."
        ]
      },
      {
        heading: "Almacenamiento y transmisión",
        paragraphs: [
          "Los ajustes, el estado de compatibilidad y el historial de cuota permanecen en <code>chrome.storage.local</code> en tu dispositivo. Burn Rate Coach no tiene backend, no transmite datos de la extensión al desarrollador ni a terceros, no usa SDK de análisis o publicidad y no vende datos de usuario.",
          "Si eliges un enlace externo de ayuda o privacidad, Chrome abre ese sitio público. Burn Rate Coach no añade parámetros de seguimiento."
        ]
      },
      {
        heading: "Uso compartido",
        paragraphs: [
          "Burn Rate Coach no comparte ni transfiere datos de la extensión a terceros. No usa los datos para publicidad, elaboración de perfiles, solvencia crediticia ni fines ajenos al ritmo de cuota."
        ]
      },
      {
        heading: "Tus controles",
        paragraphs: [
          "La ficha de Chrome Web Store explica este uso local antes de la instalación y la ventana emergente lo repite con lenguaje sencillo. Desactivar <strong>Mostrar coach</strong> quita la interfaz, pero no detiene la observación, las comprobaciones ni el historial local automático mientras Analytics está visible. <strong>Borrar historial</strong> elimina las instantáneas actuales y antiguas; observaciones nuevas pueden crear historial después. Al desinstalar Burn Rate Coach, Chrome elimina sus datos locales."
        ]
      },
      {
        heading: "Seguridad y cumplimiento",
        paragraphs: [
          "Todo el código ejecutable está empaquetado con la extensión. El puente de la página solo envía una proyección de cuota permitida al contexto aislado de la extensión; no reenvía la respuesta sin procesar. Burn Rate Coach usa la información únicamente para el fin declarado y cumple los requisitos de Uso Limitado de la Política de Datos de Usuario de Chrome Web Store."
        ]
      },
      {
        heading: "Cambios",
        paragraphs: [
          "Los cambios importantes en el tratamiento de datos se reflejarán en esta política, en las declaraciones de privacidad de Chrome Web Store y, cuando corresponda, en un aviso dentro del producto antes de que comience el nuevo tratamiento."
        ]
      }
    ],
    contact: {
      heading: "Contacto",
      privacyLabel: "Consultas de privacidad",
      supportLabel: "Informes de ayuda",
      issueTracker: "registro público de incidencias"
    }
  },
  support: {
    metaDescription: "Ayuda y soporte para Burn Rate Coach.",
    title: "Ayuda — Burn Rate Coach",
    eyebrow: "Ayuda y compatibilidad",
    heading: "Ayuda",
    lede: "La mayoría de los problemas se resuelven abriendo la ruta exacta de uso de Codex Analytics y recargando una vez. Si la página o su respuesta de cuota han cambiado, la ventana emergente mostrará el último estado de compatibilidad.",
    openIssue: "Abrir una incidencia de ayuda",
    quickChecks: {
      heading: "Comprobaciones rápidas",
      items: [
        "Abre <code>https://chatgpt.com/codex/cloud/settings/analytics</code> y selecciona la vista Uso.",
        "Confirma que usas Chrome 111 o posterior y que Burn Rate Coach está activado en <code>chrome://extensions</code>.",
        "Recarga Analytics. La extensión solo funciona en esa ruta exacta y solo observa el resultado de cuota correcto de la propia página cuando esta lo decodifica.",
        "Abre la ventana emergente de la extensión y comprueba la compatibilidad con Codex.",
        "Si una tarjeta conserva su aspecto original, espera a que termine de cargarse la página y recarga una vez. Burn Rate Coach restaura deliberadamente las tarjetas originales tras un intento de mejora fallido de 900 ms."
      ]
    },
    include: {
      heading: "Qué debes incluir",
      items: [
        "las versiones de Chrome y de la extensión;",
        "el idioma de tu interfaz de Codex;",
        "si entraste directamente a Analytics o mediante la navegación de Codex;",
        "tema claro u oscuro, ancho de la ventana y zoom del navegador;",
        "el mensaje de compatibilidad de la ventana emergente;",
        "si recargar cambia el resultado."
      ]
    },
    accountNotice: {
      heading: "Protege tu cuenta.",
      body: "No publiques archivos HAR, cuerpos completos de respuestas de red, cookies, tokens de autenticación, credenciales, instrucciones, conversaciones, exportaciones completas de páginas, código fuente privado ni capturas con datos de cuenta. La respuesta de uso de Codex puede contener correo e identificadores de cuenta. Es preferible usar pruebas sintéticas o capturas muy recortadas."
    },
    limitations: {
      heading: "Limitaciones conocidas",
      items: [
        "El historial automático solo se recopila mientras Analytics está abierto y visible; una pestaña oculta no registra muestras programadas.",
        "La actividad con la página cerrada aparece solo como un intervalo entre observaciones.",
        "Los registros de más de 14 días se eliminan cuando Analytics vuelve a procesar el historial; cada medidor se limita a 10.082 muestras y las instalaciones inactivas pueden conservar datos locales antiguos hasta que se borren o desinstalen.",
        "Las distribuciones previstas se basan en un modelo y no se han calibrado empíricamente con historiales de uso reales.",
        "La extracción de cuota es independiente del idioma; la interfaz del coach admite inglés, turco, hindi, español y árabe.",
        "Los cambios en la respuesta o interfaz de Codex pueden impedir temporalmente el reconocimiento de tarjetas.",
        "Una instalación sin empaquetar y otra desde Chrome Web Store usan identidades de almacenamiento de extensión diferentes."
      ]
    },
    privateContact: {
      heading: "Contacto privado",
      bodyBefore: "Para una consulta de privacidad o un informe que no deba ser público, escribe a",
      bodyAfter: "No envíes credenciales, archivos HAR, cuerpos completos de respuestas ni exportaciones de cuenta."
    }
  }
};
