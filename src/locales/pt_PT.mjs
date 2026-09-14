export default {
  "review": {
    "state": "draft",
    "fluentReviewRequired": true,
    "reviewedBy": null,
    "reviewedAt": null
  },
  "common": {
    "skipToContent": "Saltar para o conteúdo",
    "home": "Início",
    "features": "Funcionalidades",
    "usageGuide": "Limites de utilização",
    "pacingGuide": "Ritmo da quota",
    "privacy": "Privacidade",
    "support": "Apoio",
    "issues": "Incidentes",
    "mainNavigation": "Navegação principal",
    "footerNavigation": "Navegação do rodapé",
    "languageNavigation": "Idioma",
    "brandHome": "Página inicial do Codex Limit Coach",
    "independentShort": "O Codex Limit Coach é independente e não é apoiado pela OpenAI.",
    "independentLong": "O Codex Limit Coach é uma extensão independente e não está afiliado nem é apoiado pela OpenAI."
  },
  "home": {
    "metaDescription": "Veja a evolução de cada quota do Codex até à reposição, com previsões locais e sem que nada saia do seu dispositivo.",
    "title": "Codex Limit Coach — veja a evolução de cada quota do Codex",
    "hero": {
      "eyebrow": "Extensão gratuita para o Chrome · Local por conceção",
      "headlinePrimary": "Veja a evolução de cada quota.",
      "headlineSecondary": "Antes da reposição.",
      "lede": "O Codex Limit Coach acrescenta um resultado projetado e uma trajetória local compacta a cada cartão de utilização compatível do Codex.",
      "storeCta": "Obter na Chrome Web Store",
      "examplesCta": "Ver dados de exemplo",
      "privacyHighlightsLabel": "Destaques de privacidade",
      "noAccount": "Sem conta do Codex Limit Coach",
      "noTelemetry": "Sem telemetria",
      "storagePermission": "Apenas permissão de armazenamento",
      "promoAlt": "Ilustração do medidor e da trajetória de cadência do Codex Limit Coach"
    },
    "features": {
      "eyebrow": "Útil num relance",
      "heading": "Um resultado por cartão.",
      "intro": "Veja o saldo projetado na reposição — ou uma hora estimada de esgotamento antecipado — sem abrir outro painel.",
      "items": [
        {
          "heading": "Resultado primeiro",
          "body": "Cada medidor apresenta de forma independente o saldo estimado na reposição ou quando poderá chegar a zero. Nenhum cartão se sobrepõe a outro."
        },
        {
          "heading": "O objetivo continua separado",
          "body": "A utilização observada determina a previsão. O seu objetivo é uma referência discreta, utilizada apenas para colorir o percurso em relação a um corredor fixo."
        },
        {
          "heading": "Uma definição",
          "body": "Escolha um objetivo para o fim do período. O histórico limitado de 14 dias é automático, fica neste dispositivo e pode ser limpo na janela de pop-up."
        }
      ]
    },
    "screenshots": {
      "eyebrow": "Renderizado pela extensão",
      "heading": "Interface real. Dados de exemplo sintéticos.",
      "intro": "Estas imagens executam o código de produção da extensão numa amostra privada e estruturalmente fiel. Não são apresentados dados de conta.",
      "items": [
        {
          "alt": "Cartão sintético de quota do Codex em tema escuro, com saldo projetado na reposição",
          "caption": "Resultado de relance"
        },
        {
          "alt": "Cartão sintético de quota do Codex em tema claro, com observações, objetivo e previsão",
          "caption": "Legível no tema claro ou escuro"
        },
        {
          "alt": "Estado sintético de esgotamento antecipado, com uma projeção que termina antes da reposição",
          "caption": "Estimativa de esgotamento antecipado"
        },
        {
          "alt": "Pop-up do Codex Limit Coach com uma definição de objetivo e histórico local automático",
          "caption": "Uma definição · histórico local automático"
        }
      ]
    },
    "private": {
      "eyebrow": "Privado por conceção",
      "heading": "A sua quota permanece no Chrome.",
      "body": [
        "Enquanto o Codex Analytics estiver aberto, o Codex Limit Coach observa passivamente o resultado de quotas que a própria página descodificou com êxito ao lê-lo. Acede apenas aos dados necessários para a previsão: os identificadores estáveis do medidor e do período, a percentagem utilizada, a duração do período e a hora de reposição. Gera localmente a hora da observação e associa os resultados aos cartões nativos apenas através da correspondência do progresso numérico e dos metadados de reposição — nunca através dos rótulos traduzidos nem da ordem dos cartões. As definições e as amostras automáticas limitadas permanecem em <code>chrome.storage.local</code>.",
        "Não inicia outro pedido de rede, não clona nem descodifica a resposta de forma independente, não inspeciona cookies ou cabeçalhos de autorização, não transmite dados de quota nem acede a campos de conta, e-mail, plano, créditos ou controlo de despesas. A única permissão da extensão é <code>storage</code>. Duas declarações de scripts de conteúdo incluídas no pacote partilham um único padrão limitado <code>https://chatgpt.com/codex/*</code> para entrada direta e por SPA; o tratamento de dados em tempo de execução e a renderização permanecem no Analytics. Não há contexto em segundo plano, backend, telemetria, publicidade, código remoto nem sistema de contas do Codex Limit Coach."
      ],
      "policyLink": "Ler a política de privacidade"
    },
    "limitations": {
      "eyebrow": "Conheça os limites",
      "heading": "Um assistente, não uma garantia.",
      "items": [
        "O histórico automático só é observado enquanto a página Analytics está aberta e visível; os separadores ocultos não registam amostras periódicas programadas.",
        "Pontos percentuais não são tarefas, tokens, mensagens nem minutos.",
        "As projeções são estimativas baseadas em modelo, não garantias, e não foram calibradas empiricamente com históricos de utilização reais.",
        "A recolha de quotas funciona em todos os idiomas da interface do Codex; a interface do assistente suporta inglês, turco, hindi, espanhol, árabe, francês, alemão, japonês e português (Brasil e Portugal)."
      ]
    },
    "closing": {
      "heading": "Faça com que cada reposição conte.",
      "body": "O Codex Limit Coach é gratuito na Chrome Web Store.",
      "cta": "Adicionar ao Chrome"
    }
  },
  "usageGuide": {
    "metaDescription": "Um guia em linguagem simples sobre saldos de utilização do Codex, horas de reposição, limites partilhados e por que motivo as percentagens não correspondem diretamente a tarefas.",
    "title": "Como funcionam os limites de utilização do Codex — Codex Limit Coach",
    "eyebrow": "Guia de utilização do Codex",
    "heading": "Como funcionam os limites de utilização do Codex",
    "lede": "A sua página de utilização do Codex é a fonte de verdade. Os saldos e as horas de reposição apresentados dependem do seu plano, das ofertas atuais e das superfícies que utiliza.",
    "sections": [
      {
        "heading": "Leia o saldo e a reposição juntos",
        "paragraphs": [
          "Cada saldo apresentado é a quota que resta para o período de reposição indicado ao lado. O Codex pode mostrar um ou mais períodos de utilização, um saldo de créditos ou outros limites específicos do plano.",
          "Não parta do princípio de que todas as contas têm os mesmos cartões. A OpenAI pode alterar os períodos e as promoções disponíveis; utilize os rótulos e as horas da sua própria página de utilização."
        ]
      },
      {
        "heading": "Algumas superfícies podem partilhar um pool",
        "paragraphs": [
          "Segundo a OpenAI, Codex, ChatGPT Work, ChatGPT for Excel e Workspace Agents podem partilhar um pool de utilização agêntico, dependendo do plano e dos produtos disponíveis.",
          "A atividade numa superfície incluída pode, por isso, alterar o saldo que verá mais tarde noutra. A página de utilização e qualquer aviso de limite são o registo prático do que resta."
        ]
      },
      {
        "heading": "Uma percentagem não é um contador de tarefas",
        "paragraphs": [
          "O volume usado por uma tarefa varia conforme seu tamanho, sua complexidade, o modelo e o local de execução. Dez edições pequenas e uma execução longa de agente não precisam consumir parcelas comparáveis.",
          "Por isso, uma percentagem restante não permite determinar com fiabilidade quantos prompts, tokens ou minutos restam. É um medidor de quota, não um conversor de unidades."
        ]
      },
      {
        "heading": "Utilize a hora de reposição apresentada",
        "paragraphs": [
          "Planeie com base na data e hora exatas da reposição apresentadas na página, em vez de memorizar um horário. Algumas ofertas temporárias também podem utilizar reposições acumuladas ou ajustadas.",
          "Para ver a situação atual, abra <code>https://chatgpt.com/codex/cloud/settings/analytics</code>. Se a rota ou os cartões disponíveis mudarem, siga a navegação atual do Codex e as orientações visíveis da conta."
        ]
      }
    ],
    "sourceLabel": "Ler as orientações atuais da OpenAI sobre a utilização do Codex",
    "productBody": "O Codex Limit Coach acrescenta cadência local e estimativas para a reposição aos saldos que a sua página de utilização do Codex apresenta. As previsões são estimativas descritivas, não garantias do fornecedor.",
    "cta": "Obter o Codex Limit Coach"
  },
  "pacingGuide": {
    "metaDescription": "Como ler uma previsão de quota do Codex, manter o objetivo separado e compreender os dados do modelo local.",
    "title": "Como ler uma previsão de quota do Codex — Codex Limit Coach",
    "eyebrow": "Guia prático de cadência",
    "heading": "Como ler uma previsão de quota",
    "lede": "O saldo atual mostra a situação da quota. Uma previsão descritiva estima onde poderá estar na reposição — ou quando poderá chegar a zero.",
    "sections": [
      {
        "heading": "Picos iniciais escondem a cadência real",
        "paragraphs": [
          "Um pico produtivo pode consumir uma grande parcela perto do início dum período de reposição. A percentagem restante pode continuar a parecer confortável, embora a cadência média necessária para o resto do período já seja muito menor.",
          "Compare o saldo restante com o tempo restante. Se 60% da quota precisar cobrir 85% do período, o planeamento terá menos margem do que a percentagem em destaque sugere."
        ]
      },
      {
        "heading": "Tarefas pesadas mudam a inclinação",
        "paragraphs": [
          "A utilização do Codex varia com o tamanho e a complexidade da tarefa, o modelo e a superfície. Uma execução longa de agente pode alterar a trajetória muito mais do que vários prompts simples.",
          "Encare uma projeção como uma estimativa em evolução. Volte a verificar depois dum trabalho excecionalmente exigente, em vez de presumir que a cadência de ontem continuará inalterada."
        ]
      },
      {
        "heading": "Leia cada período de forma independente",
        "paragraphs": [
          "Quando a página apresenta mais dum limite, cada cartão tem o seu próprio saldo, reposição, dados e resultado projetado.",
          "Compare os resultados relevantes para o seu trabalho, mas não trate um cartão como controlador de outro. Períodos diferentes podem expressar fatos diferentes e compatíveis."
        ]
      },
      {
        "heading": "Mantenha objetivo e previsão separadas",
        "paragraphs": [
          "Escolha como referência o saldo que gostaria de deixar na reposição. Alterar esse objetivo não deve influenciar a previsão; apenas a utilização observada determina a estimativa.",
          "Evidências incertas devem produzir uma cor mais suave ou neutra, não uma falsa precisão. A distribuição é baseada em modelo e não foi calibrada empiricamente com históricos de utilização reais."
        ]
      }
    ],
    "sourceLabel": "Ler as orientações atuais da OpenAI sobre a utilização do Codex",
    "productBody": "O Codex Limit Coach faz esta comparação na página de utilização do Codex, localmente no Chrome. Apresenta um resultado descritivo por cartão e mantém o objetivo separado da previsão.",
    "cta": "Adicionar o assistente local"
  },
  "privacy": {
    "metaDescription": "Política de privacidade do Codex Limit Coach.",
    "title": "Privacidade — Codex Limit Coach",
    "effectiveDate": "Em vigor desde 28 de julho de 2026",
    "heading": "Política de privacidade",
    "lede": "O Codex Limit Coach é uma extensão independente para o Chrome que acrescenta orientações de cadência à página de utilização do Codex Analytics. Não está afiliado nem é apoiado pela OpenAI.",
    "canonicalNotice": {
      "heading": "Tradução em rascunho",
      "body": "Este resumo ainda precisa de revisão por uma pessoa fluente. O texto vinculativo é a política em inglês:",
      "link": "política de privacidade em inglês"
    },
    "sections": [
      {
        "heading": "Informações tratadas",
        "paragraphs": [
          "Enquanto o Codex Analytics está aberto, uma ponte de página incluída no pacote observa passivamente o resultado de quotas que a própria página recebeu com êxito ao descodificá-lo. Acede diretamente apenas aos dados necessários para a orientação: os identificadores estáveis do medidor de limite de taxa e do período, a percentagem utilizada, a duração do período da quota e a hora de reposição. A extensão isolada associa os resultados aos cartões nativos apenas através da correspondência do progresso numérico e dos metadados de reposição; nunca utiliza rótulos traduzidos nem a ordem dos cartões. A extensão gera localmente a hora da observação, em vez de a ler na resposta. Não inicia o pedido, não clona nem descodifica a resposta de forma independente e não inspeciona cabeçalhos, cookies, tokens de autorização nem outras credenciais.",
          "O resultado da página também pode conter e-mail, identificadores de conta e utilizador, informações do plano, créditos e campos de controlo de gastos. O Codex Limit Coach não acede nem enumera esses campos não relacionados e nunca os transfere pela ponte, regista, guarda ou transmite. Também não lê nem guarda prompts, conversas, código-fonte, palavras-passe, credenciais de pagamento ou chaves de API.",
          "O Codex Limit Coach guarda a indicação de que o assistente está visível, a percentagem restante definida como objetivo, o estado de compatibilidade e as percentagens de quota e horas de reposição registadas automaticamente com data e hora no armazenamento local da extensão no Chrome. Não regista amostras periódicas programadas enquanto o separador do navegador está oculto. Os registos com mais de 14 dias são ignorados e removidos da próxima vez que o Analytics processa o histórico, e cada medidor está limitado a 10 082 amostras. Os registos antigos podem permanecer num dispositivo inativo até à limpeza, eliminação ou desinstalação."
        ]
      },
      {
        "heading": "Como as informações são usadas",
        "paragraphs": [
          "As informações de quota permitidas são utilizadas apenas para calcular e apresentar a posição atual, a referência do objetivo, as trajetórias locais, a quota restante projetada na reposição ou a hora estimada de esgotamento antecipado, a classificação por cor e o estado de compatibilidade ativo ou não reconhecido mais recente. Cada medidor é avaliado de forma independente."
        ]
      },
      {
        "heading": "Armazenamento e transmissão",
        "paragraphs": [
          "As definições, o estado de compatibilidade e o histórico de quotas permanecem em <code>chrome.storage.local</code> no seu dispositivo. A única permissão da extensão é <code>storage</code>. Duas declarações de scripts de conteúdo incluídas no pacote partilham um único padrão limitado <code>https://chatgpt.com/codex/*</code> para entrada direta e por SPA; o tratamento de dados em tempo de execução e a renderização permanecem no Analytics, sem contexto em segundo plano. O Codex Limit Coach não tem backend e não transmite dados da extensão ao programador ou a terceiros, não utiliza SDKs de análise ou publicidade e não vende dados de utilizadores.",
          "Se escolher uma ligação externa de apoio ou privacidade, o Chrome abre o respetivo site público. O site processa a visita ao abrigo da sua própria política de privacidade. O Codex Limit Coach não acrescenta parâmetros de rastreio."
        ]
      },
      {
        "heading": "Partilha",
        "paragraphs": [
          "O Codex Limit Coach não partilha nem transfere dados da extensão a terceiros. Não usa dados para publicidade, criação de perfis, avaliação de crédito ou finalidades não relacionadas ao ritmo da quota."
        ]
      },
      {
        "heading": "Seus controlos",
        "paragraphs": [
          "A ficha da Chrome Web Store explica esta utilização local dos dados de quota antes da instalação, e a janela de pop-up repete-a em linguagem simples. Desativar <strong>Mostrar assistente</strong> remove o Codex Limit Coach da página, mas não interrompe a observação da página, as verificações de compatibilidade nem o histórico local automático enquanto o Analytics está visível. O controlo de dois cliques <strong>Limpar histórico</strong> continua disponível enquanto o assistente está oculto e elimina as amostras de quota atuais e antigas. As novas observações podem criar outro histórico depois disso. A desinstalação do Codex Limit Coach remove os respetivos dados locais de extensão através do Chrome."
        ]
      },
      {
        "heading": "Segurança e conformidade com as políticas",
        "paragraphs": [
          "Todo o código executável é fornecido com a extensão. A ponte da página envia apenas uma projeção de quota permitida ao contexto isolado da extensão; não encaminha a resposta bruta. O Codex Limit Coach utiliza informações apenas para a finalidade única divulgada e segue a Política de Dados do Utilizador da Chrome Web Store, incluindo os requisitos de Utilização Limitada."
        ]
      },
      {
        "heading": "Alterações",
        "paragraphs": [
          "Alterações relevantes no tratamento de dados serão refletidas nesta política, nas divulgações de privacidade da Chrome Web Store e — quando exigido — numa divulgação no produto antes do início do novo tratamento."
        ]
      }
    ],
    "contact": {
      "heading": "Contacto",
      "privacyLabel": "Questões sobre privacidade",
      "supportLabel": "Pedidos de apoio",
      "issueTracker": "rastreador público de problemas"
    }
  },
  "support": {
    "metaDescription": "Ajuda e apoio para o Codex Limit Coach.",
    "title": "Apoio — Codex Limit Coach",
    "eyebrow": "Ajuda e compatibilidade",
    "heading": "Apoio",
    "lede": "A maioria dos problemas pode ser resolvida abrindo a rota exata de utilização do Codex Analytics e recarregando-a uma vez. Se a página ou sua resposta de quotas tiver mudado, o pop-up informará o estado de compatibilidade mais recente.",
    "openIssue": "Abrir um pedido de apoio",
    "quickChecks": {
      "heading": "Verificações rápidas",
      "items": [
        "Abra <code>https://chatgpt.com/codex/cloud/settings/analytics</code> e selecione a vista Utilização.",
        "Confirme que a versão do Chrome é a 111 ou posterior e que o Codex Limit Coach está ativado em <code>chrome://extensions</code>.",
        "Recarregue o Analytics. A extensão é executada apenas nessa rota exata de utilização e observa apenas o resultado de quotas que a própria página recebeu com êxito ao descodificá-lo.",
        "Abra a janela de pop-up da extensão e verifique a compatibilidade com o Codex.",
        "Se um cartão continuar nativo, aguarde o carregamento da página terminar e recarregue uma vez. O Codex Limit Coach restaura deliberadamente os cartões nativos após uma tentativa de melhoria malsucedida de 900 ms."
      ]
    },
    "include": {
      "heading": "O que incluir",
      "items": [
        "versões do Chrome e da extensão;",
        "o idioma da sua interface do Codex;",
        "se entrou no Analytics diretamente ou através da navegação do Codex;",
        "tema claro ou escuro, largura da janela de visualização e zoom do navegador;",
        "a mensagem de compatibilidade do pop-up;",
        "se recarregar altera o resultado."
      ]
    },
    "accountNotice": {
      "heading": "Proteja a sua conta.",
      "body": "Nunca publique ficheiros HAR, corpos completos de respostas de rede, cookies, tokens de autenticação, credenciais, prompts, conversas, exportações completas de páginas, código-fonte privado nem capturas de ecrã com dados da conta. A resposta de utilização do Codex pode conter e-mail e identificadores de conta. Prefira dados sintéticos ou imagens da interface recortadas com precisão."
    },
    "limitations": {
      "heading": "Limitações conhecidas",
      "items": [
        "O histórico automático só é recolhido enquanto o Analytics está aberto e visível; um separador oculto não regista amostras periódicas programadas.",
        "A atividade com a página fechada aparece apenas como uma lacuna entre observações.",
        "Os registos com mais de 14 dias são removidos da próxima vez que o Analytics processa o histórico; cada medidor está limitado a 10 082 amostras, e as instalações inativas podem conservar dados locais mais antigos até à limpeza ou desinstalação.",
        "As distribuições de previsão são baseadas em modelo e não foram calibradas empiricamente com históricos de utilização reais.",
        "A extração de quotas é independente do idioma; a interface do assistente suporta inglês, turco, hindi, espanhol, árabe, francês, alemão, japonês e português (Brasil e Portugal).",
        "Alterações na resposta ou na interface do Codex podem impedir temporariamente o reconhecimento dos cartões.",
        "Uma instalação não empacotada e uma instalação da Chrome Web Store utilizam identidades diferentes de armazenamento da extensão."
      ]
    },
    "privateContact": {
      "heading": "Contacto privado",
      "bodyBefore": "Para uma questão de privacidade ou um pedido que não deva ser público, envie um e-mail para",
      "bodyAfter": "Não envie por e-mail credenciais, ficheiros HAR, corpos completos de respostas ou exportações de conta."
    }
  }
};
