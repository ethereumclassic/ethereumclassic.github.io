---
title: Futuro Clássico
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Uma visão geral do roteiro de desenvolvimento futuro e como as decisões são tomadas no ecossistema Ethereum Classic, com base em sua história e princípios.
---

Ao contrário de muitos outros projetos de blockchain, o Ethereum Classic não possui um comitê organizador central dando as ordens, então o que é implementado no protocolo é determinado por meio de um sistema orgânico, meritocrático e emergente, em vez de de cima para baixo. Embora essa abordagem não seja projetada inicialmente para gerar uma expansão explosiva, a compensação é feita para sustentabilidade a longo prazo, e a persistência do Ethereum Classic o colocou em uma posição forte para seu próximo estágio de crescimento, quando os efeitos de rede começam a se tornar uma bola de neve.

Nesta seção, vamos descompactar esse processo, obter uma visão geral de alto nível do estado atual do ETC e cobrir brevemente algumas atualizações em potencial atualmente em discussão que podem estar no horizonte do ETC.

## Processo de atualização

O Ethereum Classic, como o Bitcoin, não possui um roteiro no sentido tradicional de desenvolvimento de software, mas sim um processo que permite que bons recursos sejam implementados se e quando eles aparecerem e forem aprovados pela comunidade.

### ECIPs

O processo [da Proposta de Melhoria do Ethereum Classic (ECIP)](/development/ecips) é como as atualizações para o Ethereum Classic são discutidas e rigorosamente examinadas por sua comunidade de desenvolvedores. Este processo é aberto e qualquer pessoa pode contribuir elaborando um ECIP que um dia poderá ser incluído no Ethereum Classic.

### Mova-se devagar & Não quebre as coisas

Normalmente, a implementação de novos recursos requer suporte esmagador ou, pelo menos, nenhuma oposição significativa da comunidade Ethereum Classic, tornando o ETC, como o BTC, bastante cauteloso em seu desenvolvimento tecnológico. Sem decisões de viés do grupo central sobre quais atualizações são implementadas, a ameaça de uma divisão da cadeia devido a um retrocesso significativo significa que os Hard Forks no ETC tendem a ser seguros, incrementais e, acima de tudo, não controversos.

Em vez de uma mentalidade de "agir rápido e quebrar as coisas", que pode causar danos financeiros se as coisas derem errado, atualizações significativas são normalmente ponderadas, refinadas e testadas por longos períodos antes de serem implementadas no protocolo para que o consenso possa ser alcançado adequadamente _antes de_ um garfo.

Além disso, é tomado cuidado para garantir que, tanto quanto possível, os contratos implantados já em 2015 possam operar fielmente em perpetuidade e que o Código _é a Lei_ seja mantido.

Isso não significa que a ETC seja incapaz de inovar oportunisticamente. Um exemplo é o [Thanos fork](/knowledge/forks#thanos), que aproveitou o aumento do tamanho DAG do Ethereum para aumentar a segurança, permitindo que uma categoria abandonada de GPUs minerasse o ETC, o que foi uma atualização fácil e ganha-ganha para o Ethereum Classic.

### Inovação Herdada

O Ethereum Classic mantém a compatibilidade com a Ethereum Virtual Machine, herda todas as inovações que acontecem em outras cadeias EVM, incluindo sistemas de contrato, ferramentas de desenvolvedor, bibliotecas e outros conceitos gerais financiados e desenvolvidos principalmente para essas outras cadeias.

Otimistic Rollups, uma promissora tecnologia de Camada 2 que aumenta a escalabilidade por meio de transações off-chain, é um excelente exemplo disso. Graças à natureza do Software Livre de Código Aberto, milhões de dólares em pesquisa e desenvolvimento foram gastos por projetos e equipes que não tinham associação com o Ethereum Classic. Essa inovação, graças à compatibilidade generalizada do EVM, aumentou indiretamente a utilidade e o valor do ETC.

### Ethereum como uma rede de teste

Uma vantagem dessa abordagem é que o Ethereum Classic pode aguardar enquanto outras cadeias assumem o risco de implementar novos recursos. Somente depois de se mostrarem seguros e eficazes, bons recursos podem ser implementados com o mínimo de risco e esforço de desenvolvimento.

Dessa forma, outras cadeias de EVM podem ser vistas como testnets incentivadas do Ethereum Classic, com testes muito mais rigorosos do que uma testnet tradicional poderia fornecer.

## olhando para frente

Até o momento, 2022 acabou de chegar e a ETC está começando o ano com um aumento de atividade. Uma ladainha de novos [aplicativos](/services/apps) e usuários se fundiram organicamente, e o ecossistema ETC está começando a mostrar sinais de efeitos de rede, que aumentarão a adoção à medida que a rede se torna mais útil e valiosa.

O crescimento recente é em parte graças a um crescente exército de criadores de conteúdo Ethereum Classic e influenciadores que criaram [vídeos](/videos) e memes, impulsionando a adoção por meio da mídia social.

### A fusão

A rede principal Ethereum™, apesar de experimentar alguns pequenos atrasos, parece cada vez mais perto de concluir uma migração de Proof of Work para Proof of Stake, conhecida como _The Merge_. Para o Ethereum Classic, este será um evento extremamente relevante, pois parece provável que os mineradores de GPU recém-despejados estejam procurando outras cadeias para minerar, e o Ethereum Classic é uma escolha óbvia.

A migração de mineradores de ETH para ETC provavelmente trará uma nova onda de interesse ao ecossistema Ethereum Classic, aumentará a segurança da rede e acelerará a adoção e o valor da rede.

Além disso, se houver algum problema de curto prazo durante ou após "A fusão", talvez devido a problemas imprevistos da teoria do jogo ou explorações de protocolo devido à complexidade adicional, o Ethereum Classic estará pronto e esperando para fornecer uma cadeia de fallback que permaneça no testado e comprovado verdadeiro protocolo Ethereum de hoje. A longo prazo, a mudança para Proof of Stake provavelmente resultará em maior centralização da rede principal Ethereum™, o que a torna vulnerável a outros tipos de ataques sociais, aos quais, novamente, a ETC permanecerá imune.

### Versão EVM

Com o Ethereum Classic visando manter _Código é Lei_ por muitas décadas, se não séculos, um recurso de grande utilidade será o de _versionamento_ de contratos implantados. Isso oferece várias vantagens significativas para a operação e manutenção de longo prazo do Ethereum Classic, principalmente porque torna muito mais fácil manter _Code is Law_ , ao mesmo tempo em que oferece flexibilidade para atualizar a execução do contrato no futuro.

Em vez de se preocupar se uma mudança de protocolo, como reprecificação do gás, quebraria contratos antigos, o controle de versão significaria que o código implantado sempre será executado em uma versão compatível do EVM com base no número do bloco em que foi implantado. Além disso, contratos futuros podem optar por funcionalidades que, de outra forma, quebrariam contratos antigos, o que significa que o Ethereum Classic pode fornecer novas tecnologias, como esquemas de assinatura, adicionar ou modificar o comportamento do opcode, etc., sem afetar os aplicativos existentes.

Mesmo que estejam rodando em uma versão diferente do EVM, os contratos futuros ainda seriam capazes de se comunicar com contratos antigos na mesma API (ou traduzida) para manter a interoperabilidade. Parece não haver nenhuma desvantagem aparente no controle de versão além da complexidade adicional necessária para implementá-lo.

### Camada 2

Está ficando cada vez mais claro que a única maneira razoável de escalar blockchains é em camadas. Com a Lightning Network do Bitcoin liderando esse novo domínio promissor, o Ethereum está seguindo na forma de State Channels, Optimistic Rollups, zk-Rollups e outras tecnologias emergentes.

A Camada 2 promete fornecer garantias adequadas de descentralização e ausência de confiança, com muito maior rendimento de transações gerenciando o estado fora da cadeia e usando a cadeia de base para estabelecer esse estado. Em teoria, não há limite superior para o número de transações por segundo em muitos sistemas da Camada 2 e pode satisfazer os requisitos de uso em escala de civilização.

Com o EVM do Ethereum Classic e o compromisso com a prova de trabalho que eventualmente dominará a mineração no ETCHash, será uma das poucas opções para uma camada base de grau soberano que pode suportar uma gama completa de soluções L2.
