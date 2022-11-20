---
title: Futuro Clásico
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Una visión general de la futura hoja de ruta de desarrollo y de cómo se toman las decisiones en el ecosistema de Ethereum Classic, basándose en su historia y sus principios.
---

A diferencia de muchos otros proyectos de blockchain, Ethereum Classic no tiene un comité organizador central que tome las decisiones, por lo que lo que se implementa en el protocolo se determina a través de un sistema orgánico, meritocrático y emergente, en lugar de hacerlo desde arriba. Si bien este enfoque no está diseñado al principio para producir una expansión explosiva, la compensación se hace para la sostenibilidad a largo plazo, y la persistencia de Ethereum Classic lo ha colocado en una posición fuerte para su próxima etapa de crecimiento cuando los efectos de la red comiencen a hacer una bola de nieve de adopción.

En esta sección, desmenuzaremos este proceso, haremos un repaso de alto nivel del estado actual del ETC, y cubriremos brevemente algunas actualizaciones potenciales que se están discutiendo actualmente y que pueden estar en el horizonte del ETC.

## Proceso de actualización

Ethereum Classic, al igual que Bitcoin, no tiene una hoja de ruta en el sentido tradicional de desarrollo de software, sino más bien un proceso que permite que las buenas características se implementen siempre y cuando se presenten y sean aprobadas por la comunidad.

### ECIPs

El proceso [Ethereum Classic Improvement Proposal (ECIP)](/development/ecips) es la forma en la que se discuten las actualizaciones de Ethereum Classic, y son rigurosamente examinadas por su comunidad de desarrolladores. Este proceso es abierto, y cualquiera puede contribuir redactando un ECIP que algún día podrá incluirse en Ethereum Classic.

### Muévete despacio & No rompas las cosas

Normalmente, la implementación de nuevas funciones requiere un apoyo abrumador o, al menos, ninguna oposición significativa por parte de la comunidad de Ethereum Classic, lo que hace que ETC, al igual que BTC, sea bastante prudente en su desarrollo tecnológico. Al no haber un grupo central que influya en las decisiones sobre las mejoras que se implementan, la amenaza de una ruptura de la cadena debido a un rechazo significativo significa que las bifurcaciones duras en ETC tienden a ser seguras, incrementales y, sobre todo, no conflictivas.

En lugar de una mentalidad de "moverse rápido y romper las cosas", que puede causar daños financieros si las cosas van mal, las actualizaciones importantes suelen ser meditadas, refinadas y probadas durante largos períodos antes de ser implementadas en el protocolo para que se pueda alcanzar un consenso adecuado _antes de_ una bifurcación.

Además, se procura que, en la medida de lo posible, los contratos que se desplegaron ya en 2015 puedan funcionar fielmente a perpetuidad y que se mantenga el Código _es la Ley_ .

Esto no significa que ETC sea incapaz de innovar de forma oportuna. Un ejemplo de ello es la bifurcación [Thanos](/knowledge/forks#thanos), que aprovechó el aumento del tamaño del DAG de Ethereum para barrer la seguridad permitiendo que una categoría de GPUs, que de otro modo estaría abandonada, minara ETC, lo que supuso una mejora fácil para Ethereum Classic.

### Innovación heredada

Ethereum Classic mantiene la compatibilidad con la Máquina Virtual Ethereum, hereda todas las innovaciones que se producen en otras cadenas EVM, incluyendo los sistemas de contratos, las herramientas para desarrolladores, las bibliotecas y otros conceptos generales financiados y desarrollados principalmente para estas otras cadenas.

Los Optimistic Rollups, una prometedora tecnología de capa 2 que mejora la escalabilidad mediante transacciones fuera de la cadena, es un excelente ejemplo de ello. Gracias a la naturaleza del software libre de código abierto, se gastaron millones de dólares en investigación y desarrollo por parte de proyectos y equipos que no tenían ninguna relación con Ethereum Classic. Esta innovación, gracias a la compatibilidad generalizada de los MVE, ha aumentado indirectamente la utilidad y el valor del CTE.

### Ethereum como red de pruebas

Una de las ventajas de este enfoque es que Ethereum Classic puede quedarse al margen mientras ve cómo otras cadenas asumen el riesgo de implementar nuevas funciones. Sólo después de que hayan demostrado ser seguras y eficaces, las buenas características pueden implementarse con un riesgo y un esfuerzo de desarrollo mínimos.

De este modo, otras cadenas de EVM pueden verse como redes de prueba incentivadas de Ethereum Classic, con pruebas mucho más rigurosas que las que podría ofrecer una red de prueba tradicional.

## Mirando al futuro

En el momento de escribir estas líneas, acaba de llegar el año 2022 y el ETC comienza el año con una gran actividad. Una letanía de nuevas aplicaciones de [](/services/apps) y los usuarios se han unido orgánicamente, y el ecosistema ETC está empezando a mostrar signos de efectos de red, lo que hará que la adopción se convierta en una bola de nieve a medida que la red sea más útil y valiosa.

El reciente crecimiento se debe, en parte, a un creciente ejército de creadores de contenido y personas influyentes de Ethereum Classic que han estado creando vídeos [](/videos) y memes, impulsando la adopción a través de las redes sociales.

### La fusión

La cadena de la red principal de Ethereum™, aunque está experimentando algunos retrasos menores, parece estar cada vez más cerca de completar la migración de Proof of Work a Proof of Stake, conocida como _The Merge_. Para Ethereum Classic este será un evento extremadamente relevante, ya que parece probable que los mineros de GPU recién desalojados busquen otras cadenas para minar, y Ethereum Classic es una opción obvia.

La migración de los mineros de ETH a ETC probablemente traerá una nueva ola de interés al ecosistema de Ethereum Classic, aumentará la seguridad de la red y acelerará la adopción y el valor de la red.

Además, si hay algún problema a corto plazo durante o después de "La Fusión", tal vez debido a problemas imprevistos de la teoría del juego o explotaciones del protocolo debido a la complejidad adicional, Ethereum Classic estará listo y esperando para proporcionar una cadena de reserva que se mantiene en el protocolo probado y verdadero de Ethereum de hoy. A largo plazo, el paso a Proof of Stake probablemente dará lugar a una mayor centralización de la mainnet de Ethereum™, lo que la hace vulnerable a otro tipo de ataques sociales, a los que, de nuevo, ETC seguirá siendo inmune.

### Versiones de EVM

Dado que Ethereum Classic pretende mantener _Code is Law_ durante muchas décadas, si no siglos, una característica de gran utilidad será la de versionar __ de los contratos desplegados. Esto proporciona varias ventajas significativas para el funcionamiento y el mantenimiento a largo plazo de Ethereum Classic, sobre todo porque hace que sea mucho más fácil mantener _El código es la ley_ , al tiempo que proporciona flexibilidad para actualizar la ejecución de los contratos en el futuro.

En lugar de preocuparse por si un cambio de protocolo, como la revalorización del gas, rompería los contratos antiguos, el versionado significaría que el código desplegado está garantizado para funcionar siempre en una versión compatible del EVM basada en el número de bloque en el que se desplegó. Además, los futuros contratos podrían optar por funcionalidades que de otro modo romperían los contratos antiguos, lo que significa que Ethereum Classic puede proporcionar nueva tecnología como esquemas de firma, añadir o modificar el comportamiento de los opcodes, etcétera, sin afectar a las aplicaciones existentes.

Aunque se ejecuten en una versión diferente del EVM, los futuros contratos podrán seguir comunicándose con los antiguos a través de la misma (o traducida) API para mantener la interoperabilidad. No parece haber ninguna desventaja aparente en el versionado, aparte de la complejidad adicional que requiere su aplicación.

### Capa 2

Cada vez está más claro que la única forma razonable de escalar las cadenas de bloques es por capas. Con la red Lightning de Bitcoin a la cabeza de este prometedor nuevo dominio, Ethereum le sigue en forma de State Channels, Optimistic Rollups, zk-Rollups y otras tecnologías emergentes.

La capa 2 promete ofrecer garantías adecuadas de descentralización y confianza, con un rendimiento de las transacciones mucho mayor al gestionar el estado fuera de la cadena y utilizar la cadena base para liquidar este estado. En teoría, no existe un límite superior al número de transacciones por segundo en muchos sistemas de capa 2, y puede satisfacer los requisitos de uso a escala civil.

Con el EVM de Ethereum Classic y el compromiso con el Proof of Work que eventualmente dominará la minería en ETCHash, será una de las pocas opciones para una capa base de Grado Soberano que puede soportar una gama completa de soluciones L2.
