---
title: Usando MetaMask com ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Um guia passo a passo sobre como usar o MetaMask com Ethereum Classic para enviar ETC e interagir com aplicativos descentralizados.
info: Este artigo foi [criado por Etherplan](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Para mais tutoriais, teoria e conceitos de criptomoeda do Ethereum Classic, confira [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Atualização**  
Agora você pode adicionar facilmente ETC ao MetaMask clicando em "Connect-Wallet" em https://chainlist.org/chain/61

Você também pode encontrar este link na parte inferior de todas as páginas deste site.

---

[MetaMask](https://metamask.io) pode ser usado como uma carteira para gerenciar seu ETC e Tokens, bem como interagir com aplicativos que o suportam. Este post explica como começar a usar o MetaMask com a rede Ethereum Classic (ETC).

Você também pode considerar [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), um fork do MetaMask que suporta ETC pronto para uso.

## Etapa 1: faça login no MetaMask

O primeiro passo é fazer login para desbloquear sua MetaMask.

![Passo 1](./01.png)

## Passo 2: Visualize a Tela Inicial

Você verá sua tela inicial normal. Neste caso, a rede padrão é Ethereum (ETH) e sua conta será exibida normalmente. À medida que você usa outras redes, elas aparecerão como padrão quando você desbloquear sua MetaMask, caso tenham sido as últimas usadas.

No meu caso, mostra Ethereum como a rede inicial e tenho saldo zero na minha conta ETH `0x48c1...EfF3`.

![Passo 2](./02.png)

## Etapa 3: abra o menu suspenso de redes

O próximo passo é abrir o menu suspenso de redes. Você pode fazer isso clicando na barra onde você vê a rede padrão.

Como pode ser visto acima, a lista padrão de redes é a mainnet Ethereum e suas testnets mais populares.

O “Local Host 8545” seria uma conexão com um nó Ethereum se você estivesse executando um em sua máquina.

“Custom RPC” é a opção de adicionar redes customizadas, neste caso ETC.

“RPC” significa “chamada de procedimento remoto”, que é o termo para as máquinas de protocolo usadas para programas para chamar outros programas em máquinas remotas.

![etapa 3](./03.png)

## Etapa 4: selecione RPC personalizado

Então, o próximo passo é clicar em “Custom RPC”.

![Passo 4](./04.png)

## Etapa 5: visualizar o novo formulário de rede

Depois de selecionar “Custom RPC” você verá o formulário para adicionar uma rede. Possui uma mensagem de segurança na parte superior e cinco opções com campos vazios para inserir a nova rede que deseja utilizar:

- Nome da Rede: O nome da rede que você deseja adicionar.
- Nova URL RPC: uma URL para a rede RPC que você deseja adicionar.
- Chain ID: O ID para enviar e direcionar as transações para a rede que você deseja adicionar.
- Símbolo da moeda (opcional): O símbolo da moeda da rede que você deseja adicionar. Por exemplo, “ETH” é o símbolo do Ethereum e “ETC” é o símbolo do Ethereum Classic.
- URL do Block Explorer (opcional): MetaMask tem links para blockchain explorers por rede para verificar o histórico da conta, novas transações enviadas e saldos nelas, então aqui você adicionaria um block explorer para a rede que deseja adicionar.

![Passo 5](./05.png)

## Etapa 6: insira as informações da rede Ethereum Classic

O próximo passo é adicionar as informações específicas do Ethereum Classic. Abaixo estão os dados de rede que usei:

- Nome da rede: `Ethereum Classic`
- Nova URL RPC: `https://etc.rivet.link`
- ID da cadeia: `61`
- Símbolo da moeda (opcional): `ETC`
- URL do Block Explorer (opcional): `https://blockscout.com/etc/mainnet/`

Para a “URL RPC” utilizei o endpoint disponibilizado para este fim por uma empresa chamada [Rivet](https://rivet.link/), contratada pela [ETC Cooperativa](https://etccooperative.org) para este fim. Você pode encontrar mais RPC Endpoints na seção [rede](/network/endpoints).

O “Chain ID” deve ser “61” porque esse é o ID específico da rede Ethereum Classic para enviar transações ETC por carteiras e nós para o blockchain operacional.

Embora o “símbolo” e o “URL do explorador de blocos” sejam opcionais, recomendo usar “ETC” como símbolo, porque esse é o símbolo de mercado amplamente conhecido da rede, e BlockScout como o explorador de blockchain porque é o que eu costumo usar ( mas você pode adicionar o seu preferido!).

Clique em “salvar” para adicionar ETC ao MetaMask.

![Passo 6](./06-rivet.png)

## Etapa 7: visualize o Ethereum Classic no menu suspenso de redes

Depois que o ETC for adicionado, você verá no menu suspenso de redes que ele foi adicionado à lista de redes.

![Passo 7](./07.png)

## Etapa 8: você pode visualizar sua mesma conta, mas no ETC

Se você acessar sua conta, notará que é igual à sua conta ETH. No meu caso, é a mesma conta `0x48c1...EfF3`.

Isso ocorre porque tanto o ETH quanto o ETC usam o mesmo formato de conta, portanto, as contas no Ethereum também podem ser usadas no Ethereum Classic.

Na verdade, você deve se lembrar que eu tinha um saldo zero na minha conta ETH, mas agora um saldo de 1 ETC pode ser visto na mesma conta, mas no Ethereum Classic. Isso porque enviei 1 ETC para esta conta na rede Ethereum Classic para esta demonstração.

Observe também que a rede ETC agora é a que aparece na barra de redes, e o símbolo “ETC” agora é usado para mostrar o saldo.

![Passo 8](./08.png)

## Etapa 9: você pode voltar ao Ethereum com a mesma conta

Portanto, como ambas as redes usam o mesmo formato de conta, você pode voltar para a rede principal Ethereum e poderá ver sua conta ETH com o mesmo número novamente.

![Passo 9](./09.png)

## Etapa 10: você pode voltar ao Ethereum Classic com a mesma conta

Para usar a rede ETC, basta selecionar Ethereum Classic novamente no menu suspenso de redes, onde você verá seus saldos ETC novamente.

![Passo 10](./10.png)

//

Desejo-lhe sucesso ao investir e usar o ETC!

---

**Código é Lei**
