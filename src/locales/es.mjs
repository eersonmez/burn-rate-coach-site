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
    metaDescription: "Burn Rate Coach convierte los límites de cuota de Codex en orientación clara sobre el ritmo y previsiones de reinicio, de forma local y sin telemetría.",
    title: "Burn Rate Coach — controla el ritmo de tu cuota de Codex",
    hero: {
      eyebrow: "Extensión gratuita para Chrome · Local por diseño",
      headlinePrimary: "Sabe cuándo reducir el ritmo.",
      headlineSecondary: "Y cuándo puedes usar más.",
      lede: "Burn Rate Coach convierte los porcentajes de cuota de Codex en una decisión clara de ritmo, un indicador del nivel ideal actual y una previsión para el próximo reinicio.",
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
      heading: "Un porcentaje se convierte en una decisión.",
      intro: "Comprueba cómo encajan la posición actual y el ritmo reciente con el tiempo restante, sin abrir otro panel.",
      items: [
        { heading: "Orientación clara", body: "Reduce el ritmo, Ritmo correcto, Margen o Espera, según la posición y la trayectoria actuales. Los límites de mayor duración protegen los más cortos del mismo conjunto." },
        { heading: "Previsiones honestas", body: "Las estimaciones usan actividad de cuota independiente del idioma observada mientras Analytics está abierto y observaciones locales opcionales, señalan la baja confianza como aproximada y terminan en cero en vez de insinuar una cuota negativa." },
        { heading: "Tu objetivo", body: "Elige una reserva al final del periodo y una tolerancia, o pausa el historial local. Los ajustes de la ventana emergente se guardan de inmediato y funcionan en modo claro u oscuro." }
      ]
    },
    screenshots: {
      eyebrow: "Generado por la extensión",
      heading: "Interfaz real. Datos de ejemplo sintéticos.",
      intro: "Estas imágenes ejecutan el código de producción de la extensión con un entorno privado y estructuralmente fiel. No contienen datos de ninguna cuenta.",
      items: [
        { alt: "Vista general en tema oscuro con cuatro tarjetas sintéticas de cuota de Codex y orientación de ritmo", caption: "Vista oscura · protecciones entre periodos" },
        { alt: "Vista general en tema claro con cuatro tarjetas sintéticas de cuota de Codex y orientación de ritmo", caption: "Vista clara · contraste de estado legible" },
        { alt: "Estado sintético que muestra una previsión que llega a cero antes del reinicio", caption: "Estimación de agotamiento anticipado" },
        { alt: "Diseño estrecho en el que la cuota semanal limita una recomendación de corto plazo", caption: "Diseño estrecho · control semanal" }
      ]
    },
    private: {
      eyebrow: "Privado por diseño",
      heading: "Tu cuota se queda en Chrome.",
      body: [
        "Mientras Codex Analytics está abierto, Burn Rate Coach observa de forma pasiva el resultado de cuota que la propia página ha decodificado correctamente cuando lo lee. Solo accede a identificadores estables del medidor y del periodo, el porcentaje usado, la duración del periodo y el momento del reinicio necesarios para orientar el ritmo. Genera localmente la hora de observación y asocia los resultados con las tarjetas originales solo mediante metadatos numéricos coincidentes de progreso y reinicio, nunca mediante etiquetas traducidas ni el orden de las tarjetas. Los ajustes y las instantáneas opcionales permanecen en <code>chrome.storage.local</code>.",
        "No inicia ninguna solicitud de red adicional, no clona ni decodifica la respuesta por separado, no inspecciona cookies ni encabezados de autorización, no transmite datos de cuota ni accede a campos de cuenta, correo, plan, crédito o control de gasto. No existe backend, telemetría, publicidad, código remoto ni sistema de cuentas de Burn Rate Coach."
      ],
      policyLink: "Leer la política de privacidad"
    },
    limitations: {
      eyebrow: "Conoce los límites",
      heading: "Es una guía, no una garantía.",
      items: [
        "El historial solo se observa mientras la página Analytics está abierta.",
        "Los puntos porcentuales no son tareas, tokens, mensajes ni minutos.",
        "Las previsiones pueden cambiar tras periodos de trabajo más intenso o más ligero.",
        "La recopilación de cuota funciona con cualquier idioma de la interfaz de Codex; la interfaz del coach admite inglés, turco, hindi, español y árabe."
      ]
    },
    closing: {
      heading: "Aprovecha cada reinicio.",
      body: "Burn Rate Coach es gratuito en Chrome Web Store.",
      cta: "Añadir a Chrome"
    }
  },
  privacy: {
    metaDescription: "Resumen de la política de privacidad de Burn Rate Coach.",
    title: "Privacidad — Burn Rate Coach",
    effectiveDate: "Vigente desde el 16 de julio de 2026",
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
          "Burn Rate Coach almacena los ajustes que eliges. Si activas el historial local, los porcentajes de cuota con marca de tiempo y los momentos de reinicio permanecen en el almacenamiento local de la extensión de Chrome. Los registros de más de 14 días se eliminan la siguiente vez que Analytics procesa el historial y cada medidor se limita a 10.082 muestras."
        ]
      },
      {
        heading: "Uso de la información",
        paragraphs: [
          "La información de cuota permitida se utiliza únicamente para calcular y mostrar la posición de ritmo actual, la acción recomendada, las trayectorias locales, la cuota prevista al reinicio y el último estado de compatibilidad activo o no reconocido."
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
          "La orientación basada en la respuesta solo se activa después de que aceptes, en esa instalación de Chrome, su aviso localizado y único sobre la fuente de datos. Desactivar <strong>Mostrar coach</strong> quita la orientación, pero no detiene la observación de la página ni las comprobaciones de compatibilidad. Desactivar <strong>Historial local de ritmo</strong> detiene la recopilación y el uso de muestras guardadas. <strong>Borrar historial</strong> elimina las instantáneas de cuota actuales y antiguas. Al desinstalar Burn Rate Coach, Chrome elimina sus datos locales."
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
        "El historial solo se recopila mientras Analytics está abierto.",
        "La actividad con la página cerrada aparece como un intervalo entre observaciones.",
        "Los registros de más de 14 días se eliminan cuando Analytics vuelve a procesar el historial; cada medidor se limita a 10.082 muestras y las instalaciones inactivas pueden conservar datos locales antiguos hasta que se borren o desinstalen.",
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
