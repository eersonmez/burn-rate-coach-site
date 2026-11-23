export default {
  review: {
    state: "draft",
    fluentReviewRequired: true,
    reviewedBy: null,
    reviewedAt: null
  },
  common: {
    skipToContent: "Pular para o conteúdo",
    home: "Início",
    features: "Recursos",
    usageGuide: "Limites de uso",
    pacingGuide: "Ritmo da cota",
    privacy: "Privacidade",
    support: "Suporte",
    issues: "Problemas",
    mainNavigation: "Navegação principal",
    footerNavigation: "Navegação do rodapé",
    languageNavigation: "Idioma",
    brandHome: "Página inicial do Codex Limit Coach",
    independentShort: "O Codex Limit Coach é independente e não é endossado pela OpenAI.",
    independentLong: "O Codex Limit Coach é uma extensão independente e não é afiliado nem endossado pela OpenAI."
  },
  home: {
    metaDescription: "Veja para onde cada cota do Codex se encaminha até a redefinição, com previsões locais e sem que nada saia do seu dispositivo.",
    title: "Codex Limit Coach — veja para onde cada cota do Codex se encaminha",
    hero: {
      eyebrow: "Extensão gratuita para Chrome · Local por princípio",
      headlinePrimary: "Veja para onde cada cota se encaminha.",
      headlineSecondary: "Antes da redefinição.",
      lede: "Sua cota do Codex vai durar até a redefinição? Codex Limit Coach mostra o saldo estimado na redefinição ou quando ele pode chegar a zero, ao lado de cada cartão de cota compatível na página de uso do Codex.",
      storeCta: "Obter na Chrome Web Store",
      examplesCta: "Ver dados de exemplo",
      privacyHighlightsLabel: "Destaques de privacidade",
      noAccount: "Sem conta do Codex Limit Coach",
      noTelemetry: "Sem telemetria",
      storagePermission: "Somente permissão de armazenamento",
      promoAlt: "Ilustração do medidor e da trajetória de ritmo do Codex Limit Coach"
    },
    features: {
      eyebrow: "Útil de relance",
      heading: "Um resultado por cartão.",
      intro: "1. Instale a extensão e abra o popup. 2. Selecione “Abrir uso do Codex” e entre na conta se necessário. 3. Veja a previsão ao lado dos cartões compatíveis. Se a página de uso já estava aberta na instalação, recarregue a página uma vez.",
      items: [
        { heading: "Resultado primeiro", body: "Cada medidor mostra de forma independente o saldo estimado na redefinição ou quando poderá chegar a zero. Nenhum cartão se sobrepõe a outro." },
        { heading: "A meta continua separada", body: "O uso observado orienta a previsão. Sua meta é uma referência discreta, usada apenas para colorir o caminho em relação a um corredor fixo." },
        { heading: "Uma configuração", body: "Escolha uma meta para o fim do período. O histórico limitado de 14 dias é automático, fica neste dispositivo e pode ser limpo no pop-up." }
      ]
    },
    screenshots: {
      eyebrow: "Renderizado pela extensão",
      heading: "Interface real. Dados de exemplo sintéticos.",
      intro: "1. Instale a extensão e abra o popup. 2. Selecione “Abrir uso do Codex” e entre na conta se necessário. 3. Veja a previsão ao lado dos cartões compatíveis. Se a página de uso já estava aberta na instalação, recarregue a página uma vez.",
      items: [
        { alt: "Cartão sintético de cota do Codex em tema escuro, com saldo projetado na redefinição", caption: "Resultado de relance" },
        { alt: "Cartão sintético de cota do Codex em tema claro, com observações, meta e previsão", caption: "Legível no tema claro ou escuro" },
        { alt: "Estado sintético de esgotamento antecipado, com uma projeção que termina antes da redefinição", caption: "Estimativa de esgotamento antecipado" },
        { alt: "Pop-up do Codex Limit Coach com uma configuração de meta e histórico local automático", caption: "Uma configuração · histórico local automático" }
      ]
    },
    private: {
      eyebrow: "Privado por princípio",
      heading: "Sua cota permanece no Chrome.",
      body: [
        "Enquanto o a página de uso do Codex estiver aberto, o Codex Limit Coach observa passivamente o resultado de cotas que a própria página decodificou com sucesso ao lê-lo. Ele acessa apenas os identificadores estáveis do medidor e do período, a porcentagem usada, a duração do período e o horário de redefinição necessários para a previsão. O horário da observação é gerado localmente, e os resultados são associados aos cartões nativos somente pelo progresso numérico e pelos metadados de redefinição correspondentes — nunca por rótulos traduzidos nem pela ordem dos cartões. As configurações e as amostras automáticas limitadas permanecem em <code>chrome.storage.local</code>.",
        "Ele não inicia outra solicitação de rede, não clona nem decodifica a resposta de forma independente, não inspeciona cookies ou cabeçalhos de autorização, não transmite dados de cota nem acessa campos de conta, e-mail, plano, créditos ou controle de gastos. A única permissão da extensão é <code>storage</code>. Duas declarações de script de conteúdo empacotadas compartilham dois padrões limitados <code>https://chatgpt.com/codex/*</code> e <code>https://chatgpt.com/settings/usage*</code> para entrada direta e por SPA; o tratamento de dados em tempo de execução e a renderização permanecem nas visualizações de uso compatíveis. Não há contexto em segundo plano, backend, telemetria, publicidade, código remoto nem sistema de contas do Codex Limit Coach."
      ],
      policyLink: "Ler a política de privacidade"
    },
    limitations: {
      eyebrow: "Conheça os limites",
      heading: "Um assistente, não uma garantia.",
      items: [
        "O histórico automático só é observado enquanto a página visão geral de uso está aberta e visível; guias ocultas não registram amostras periódicas programadas.",
        "Pontos percentuais não são tarefas, tokens, mensagens nem minutos.",
        "As projeções são estimativas baseadas em modelo, não garantias, e não foram calibradas empiricamente com históricos de uso reais.",
        "A coleta de cotas funciona em todos os idiomas da interface do Codex; a interface do assistente oferece suporte a inglês, turco, hindi, espanhol, árabe, francês, alemão, japonês e português (Brasil e Portugal)."
      ]
    },
    closing: {
      heading: "Faça cada redefinição valer.",
      body: "O Codex Limit Coach é gratuito na Chrome Web Store.",
      cta: "Adicionar ao Chrome"
    }
  },
  usageGuide: {
    metaDescription: "Um guia em linguagem simples sobre saldos de uso do Codex, horários de redefinição, limites compartilhados e por que as porcentagens não correspondem diretamente a tarefas.",
    title: "Como funcionam os limites de uso do Codex — Codex Limit Coach",
    eyebrow: "Guia de uso do Codex",
    heading: "Como funcionam os limites de uso do Codex",
    lede: "Sua página de uso do Codex é a fonte confiável. Os saldos e horários de redefinição exibidos dependem do seu plano, das ofertas atuais e das superfícies que você usa.",
    sections: [
      {
        heading: "Leia o saldo e a redefinição juntos",
        paragraphs: [
          "Cada saldo exibido é a cota que resta para o período de redefinição indicado ao lado. O Codex pode mostrar um ou mais períodos de uso, um saldo de créditos ou outros limites específicos do plano.",
          "Não suponha que todas as contas tenham os mesmos cartões. A OpenAI pode alterar os períodos e as promoções disponíveis; use os rótulos e horários da sua própria página de uso."
        ]
      },
      {
        heading: "Algumas superfícies podem compartilhar um pool",
        paragraphs: [
          "Segundo a OpenAI, Codex, ChatGPT Work, ChatGPT for Excel e Workspace Agents podem compartilhar um pool de uso agêntico, dependendo do plano e dos produtos disponíveis.",
          "A atividade em uma superfície incluída pode, portanto, alterar o saldo que você verá depois em outra. A página de uso e qualquer aviso de limite são o registro prático do que resta."
        ]
      },
      {
        heading: "Uma porcentagem não é um contador de tarefas",
        paragraphs: [
          "O volume usado por uma tarefa varia conforme seu tamanho, sua complexidade, o modelo e o local de execução. Dez edições pequenas e uma execução longa de agente não precisam consumir parcelas comparáveis.",
          "Por isso, uma porcentagem restante não pode responder com segurança quantos prompts, tokens ou minutos restam. Ela é um medidor de cota, não um conversor de unidades."
        ]
      },
      {
        heading: "Use o horário de redefinição exibido",
        paragraphs: [
          "Planeje-se com base na data e hora exatas de redefinição mostradas na página, em vez de memorizar um cronograma. Algumas ofertas temporárias também podem usar redefinições acumuladas ou ajustadas.",
          "Para ver a situação atual, abra <code>https://chatgpt.com/settings/usage?tab=overview</code>. Se a rota ou os cartões disponíveis mudarem, siga a navegação atual do Codex e as orientações visíveis da conta."
        ]
      }
    ],
    sourceLabel: "Ler as orientações atuais da OpenAI sobre o uso do Codex",
    productBody: "O Codex Limit Coach adiciona ritmo local e estimativas para a redefinição aos saldos que sua página de uso do Codex realmente exibe. As previsões são estimativas descritivas, não garantias do provedor.",
    cta: "Obter o Codex Limit Coach"
  },
  pacingGuide: {
    metaDescription: "Como ler uma previsão de cota do Codex, manter a meta separada e entender as evidências do modelo local.",
    title: "Como ler uma previsão de cota do Codex — Codex Limit Coach",
    eyebrow: "Guia prático de ritmo",
    heading: "Como ler uma previsão de cota",
    lede: "O saldo atual mostra onde a cota está agora. Uma previsão descritiva estima onde ela poderá estar na redefinição — ou quando poderá chegar a zero.",
    sections: [
      {
        heading: "Picos iniciais escondem o ritmo real",
        paragraphs: [
          "Um pico produtivo pode consumir uma grande parcela perto do início de um período de redefinição. A porcentagem restante ainda pode parecer confortável, embora o ritmo médio necessário para o restante do período já seja muito menor.",
          "Compare o saldo restante com o tempo restante. Se 60% da cota precisar cobrir 85% do período, o cronograma terá menos margem do que a porcentagem em destaque sugere."
        ]
      },
      {
        heading: "Tarefas pesadas mudam a inclinação",
        paragraphs: [
          "O uso do Codex varia com o tamanho e a complexidade da tarefa, o modelo e a superfície. Uma execução longa de agente pode alterar a trajetória muito mais do que vários prompts leves.",
          "Trate uma projeção como uma estimativa em movimento. Verifique novamente depois de um trabalho excepcionalmente pesado, em vez de presumir que o ritmo de ontem continuará inalterado."
        ]
      },
      {
        heading: "Leia cada período de forma independente",
        paragraphs: [
          "Quando a página mostra mais de um limite, cada cartão tem seu próprio saldo, redefinição, evidências e resultado projetado.",
          "Compare os resultados relevantes para o seu trabalho, mas não trate um cartão como controlador de outro. Períodos diferentes podem expressar fatos diferentes e compatíveis."
        ]
      },
      {
        heading: "Mantenha meta e previsão separadas",
        paragraphs: [
          "Escolha como referência o saldo que você gostaria de deixar na redefinição. Alterar essa meta não deve puxar a previsão em sua direção; somente o uso observado orienta a estimativa.",
          "Evidências incertas devem produzir uma cor mais suave ou neutra, não uma falsa precisão. A distribuição é baseada em modelo e não foi calibrada empiricamente com históricos de uso reais."
        ]
      }
    ],
    sourceLabel: "Ler as orientações atuais da OpenAI sobre o uso do Codex",
    productBody: "O Codex Limit Coach faz essa comparação na página de uso do Codex, localmente no Chrome. Ele mostra um resultado descritivo por cartão e mantém a meta separada da previsão.",
    cta: "Adicionar o assistente local"
  },
  privacy: {
    metaDescription: "Política de privacidade do Codex Limit Coach.",
    title: "Privacidade — Codex Limit Coach",
    effectiveDate: "Em vigor desde 12 de outubro de 2026",
    heading: "Política de privacidade",
    lede: "O Codex Limit Coach é uma extensão independente para Chrome que adiciona orientações de ritmo à página de uso do Codex. Não é afiliado nem endossado pela OpenAI.",
    canonicalNotice: {
      heading: "Tradução preliminar",
      body: "Este resumo ainda precisa de revisão por uma pessoa fluente. O texto oficial é a política em inglês:",
      link: "política de privacidade em inglês"
    },
    sections: [
      {
        heading: "Informações tratadas",
        paragraphs: [
          "Enquanto a página de uso do Codex está aberta, uma ponte de página empacotada observa passivamente o resultado de cotas que a própria página recebeu com sucesso ao decodificá-lo. Ela acessa diretamente apenas os identificadores estáveis do medidor de limite de taxa e do período, a porcentagem usada, a duração do período da cota e o horário de redefinição necessários à orientação. A extensão isolada associa os resultados aos cartões nativos somente pelo progresso numérico e pelos metadados de redefinição correspondentes; ela nunca usa rótulos traduzidos nem a ordem dos cartões. A extensão gera localmente o horário da observação, em vez de lê-lo na resposta. Ela não inicia a solicitação, não clona nem decodifica a resposta de forma independente e não inspeciona cabeçalhos, cookies, tokens de autorização nem outras credenciais.",
          "O resultado da página também pode conter e-mail, identificadores de conta e usuário, informações do plano, créditos e campos de controle de gastos. O Codex Limit Coach não acessa nem enumera esses campos não relacionados e nunca os transfere pela ponte, registra, armazena ou transmite. Também não lê nem armazena prompts, conversas, código-fonte, senhas, credenciais de pagamento ou chaves de API.",
          "O Codex Limit Coach armazena se o assistente é exibido, sua meta de porcentagem restante, o estado de compatibilidade e as porcentagens de cota e horários de redefinição registrados automaticamente com data e hora no armazenamento local da extensão no Chrome. Ele não registra amostras periódicas programadas enquanto a guia do navegador está oculta. Registros com mais de 14 dias são ignorados e removidos na próxima vez que o visão geral de uso processa o histórico, e cada medidor é limitado a 10.082 amostras. Registros antigos podem permanecer em um dispositivo inativo até a limpeza, a exclusão ou a desinstalação."
        ]
      },
      {
        heading: "Como as informações são usadas",
        paragraphs: [
          "As informações de cota permitidas são usadas apenas para calcular e exibir a posição atual, a referência da meta, as trajetórias locais, a cota restante projetada na redefinição ou o horário estimado de esgotamento antecipado, a classificação por cor e o estado de compatibilidade ativo ou não reconhecido mais recente. Cada medidor é avaliado de forma independente."
        ]
      },
      {
        heading: "Armazenamento e transmissão",
        paragraphs: [
          "As configurações, o estado de compatibilidade e o histórico de cotas permanecem em <code>chrome.storage.local</code> no seu dispositivo. A única permissão da extensão é <code>storage</code>. Duas declarações de script de conteúdo empacotadas compartilham dois padrões limitados <code>https://chatgpt.com/codex/*</code> e <code>https://chatgpt.com/settings/usage*</code> para entrada direta e por SPA; o tratamento de dados em tempo de execução e a renderização permanecem nas visualizações de uso compatíveis, sem contexto em segundo plano. O Codex Limit Coach não tem backend e não transmite dados da extensão ao desenvolvedor ou a terceiros, não usa SDKs de análise ou publicidade e não vende dados de usuários.",
          "Se você escolher um link externo de suporte ou privacidade, o Chrome abrirá o site público correspondente. O site processa a visita de acordo com sua própria política de privacidade. O Codex Limit Coach não acrescenta parâmetros de rastreamento."
        ]
      },
      {
        heading: "Compartilhamento",
        paragraphs: [
          "O Codex Limit Coach não compartilha nem transfere dados da extensão a terceiros. Não usa dados para publicidade, criação de perfis, avaliação de crédito ou finalidades não relacionadas ao ritmo da cota."
        ]
      },
      {
        heading: "Seus controles",
        paragraphs: [
          "A listagem da Chrome Web Store explica esse uso local de dados de cota antes da instalação, e o pop-up o repete em linguagem simples. Desativar <strong>Mostrar assistente</strong> remove o Codex Limit Coach da página, mas não interrompe a observação da página, as verificações de compatibilidade nem o histórico local automático enquanto o visão geral de uso está visível. O controle de dois cliques <strong>Limpar histórico</strong> continua disponível enquanto o assistente está oculto e exclui as amostras de cota atuais e antigas. Novas observações podem criar outro histórico depois disso. Desinstalar o Codex Limit Coach remove seus dados locais de extensão pelo Chrome."
        ]
      },
      {
        heading: "Segurança e conformidade com as políticas",
        paragraphs: [
          "Todo o código executável é fornecido com a extensão. A ponte da página envia somente uma projeção de cota permitida ao contexto isolado da extensão; ela não encaminha a resposta bruta. O Codex Limit Coach usa informações apenas para a finalidade única divulgada e segue a Política de Dados do Usuário da Chrome Web Store, inclusive os requisitos de Uso Limitado."
        ]
      },
      {
        heading: "Alterações",
        paragraphs: [
          "Alterações relevantes no tratamento de dados serão refletidas nesta política, nas divulgações de privacidade da Chrome Web Store e — quando exigido — em uma divulgação no produto antes do início do novo tratamento."
        ]
      }
    ],
    contact: {
      heading: "Contato",
      privacyLabel: "Dúvidas sobre privacidade",
      supportLabel: "Relatos para o suporte",
      issueTracker: "rastreador público de problemas"
    }
  },
  support: {
    metaDescription: "Ajuda e suporte para o Codex Limit Coach.",
    title: "Suporte — Codex Limit Coach",
    eyebrow: "Ajuda e compatibilidade",
    heading: "Suporte",
    lede: "A maioria dos problemas pode ser resolvida abrindo a página de uso do Codex e recarregando-a uma vez. Se a página ou sua resposta de cotas tiver mudado, o pop-up informará o estado de compatibilidade mais recente.",
    openIssue: "Abrir um problema de suporte",
    quickChecks: {
      heading: "Verificações rápidas",
      items: [
        "Abra <code>https://chatgpt.com/settings/usage?tab=overview</code>.",
        "Confirme que a versão do Chrome é 111 ou posterior e que o Codex Limit Coach está ativado em <code>chrome://extensions</code>.",
        "Recarregue a visão geral de uso.",
        "Abra o pop-up da extensão e verifique a compatibilidade com o Codex.",
        "Se um cartão continuar nativo, aguarde o carregamento da página terminar e recarregue uma vez. O Codex Limit Coach restaura deliberadamente os cartões nativos após uma tentativa de aprimoramento malsucedida de 900 ms."
      ]
    },
    include: {
      heading: "O que incluir",
      items: [
        "versões do Chrome e da extensão;",
        "o idioma da sua interface do Codex;",
        "se você entrou no visão geral de uso diretamente ou pela navegação do Codex;",
        "tema claro ou escuro, largura da janela de exibição e zoom do navegador;",
        "a mensagem de compatibilidade do pop-up;",
        "se recarregar altera o resultado."
      ]
    },
    accountNotice: {
      heading: "Proteja sua conta.",
      body: "Nunca publique arquivos HAR, corpos completos de respostas de rede, cookies, tokens de autenticação, credenciais, prompts, conversas, exportações de página completas, código-fonte privado nem capturas de tela com dados da conta. A resposta de uso do Codex pode conter e-mail e identificadores de conta. Prefira evidências sintéticas ou imagens da interface recortadas com precisão."
    },
    limitations: {
      heading: "Limitações conhecidas",
      items: [
        "O histórico automático só é coletado enquanto o visão geral de uso está aberto e visível; uma guia oculta não registra amostras periódicas programadas.",
        "A atividade com a página fechada aparece apenas como uma lacuna entre observações.",
        "Registros com mais de 14 dias são removidos na próxima vez que o processamento do histórico do visão geral de uso é executado; cada medidor é limitado a 10.082 amostras, e instalações inativas podem manter bytes locais mais antigos até a limpeza ou desinstalação.",
        "As distribuições de previsão são baseadas em modelo e não foram calibradas empiricamente com históricos de uso reais.",
        "A extração de cotas independe do idioma; a interface do assistente oferece suporte a inglês, turco, hindi, espanhol, árabe, francês, alemão, japonês e português (Brasil e Portugal).",
        "Alterações na resposta ou na interface do Codex podem impedir temporariamente o reconhecimento dos cartões.",
        "Uma instalação não empacotada e uma instalação da Chrome Web Store usam identidades de armazenamento da extensão diferentes."
      ]
    },
    privateContact: {
      heading: "Contato privado",
      bodyBefore: "Para uma dúvida sobre privacidade ou um relato que não deva ser público, envie um e-mail para",
      bodyAfter: "Não envie por e-mail credenciais, arquivos HAR, corpos completos de respostas ou exportações de conta."
    }
  }
};
