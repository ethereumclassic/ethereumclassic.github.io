---
title: "Eine Schritt-für-Schritt-Lösung durch die digitalen Signaturen der Ethereum Classic"
date: 2018-03-15
author: Christian Seberino
---

![](./1badmg3GLTFGGKsRdqeySTg.png)

Digitale Signaturen von Ethereum Classic (ETC) sichern Transaktionen. Hierbei handelt es sich um eine Kryptographie mit elliptischen Kurven und den Elliptic Curve Digital Signature Algorithm (ECDSA). Ich werde digitale Signaturen von ETC *ohne* diese Themen mit Verwendung nur kleinen Python-Funktionen beschreiben.

### Die Grundlagen
<br/>![](./1yw1934-mAqp5DM4FWgbNqQ.jpeg)

Das Unterzeichnen und Überprüfen werden mit den folgenden vier Konstanten und drei Funktionen implementiert:

```
N  = 115792089237316195423570985008687907852837564279074904382605163141518161494337
P  = 115792089237316195423570985008687907853269984665640564039457584007908834671663
Gx = 55066263022277343669578718895168534326250603453777594175500187360389116729240
Gy = 32670510020758816978083085130507043184471273380659243275938904335757337482424

def invert(number, modulus):
        """
        Finds the inverses of natural numbers.
        """

        result = 1
        power  = number
        for e in bin(modulus - 2)[2:][::-1]:
                if int(e):
                        result = (result * power) % modulus
                power = (power ** 2) % modulus

        return result

def add(pair_1, pair_2):
        """
        Finds the sums of two pairs of natural numbers.
        """

        if   pair_1 == [0, 0]:
                result = pair_2
        elif pair_2 == [0, 0]:
                result = pair_1
        else:
                if pair_1 == pair_2:
                        temp = 3 * pair_1[0] ** 2
                        temp = (temp * invert(2 * pair_1[1], P)) % P
                else:
                        temp = pair_2[1] - pair_1[1]
                        temp = (temp * invert(pair_2[0] - pair_1[0], P)) % P
                result = (temp ** 2 - pair_1[0]  - pair_2[0]) % P
                result = [result, (temp * (pair_1[0] - result) - pair_1[1]) % P]

        return result

def multiply(number, pair):
        """
        Finds the products of natural numbers and pairs of natural numbers.
        """

        result = [0, 0]
        power  = pair[:]
        for e in bin(number)[2:][::-1]:
                if int(e):
                        result = add(result, power)
                power = add(power, power)

        return result
```

<br/>Die Invertierungsfunktion definiert eine Operation mit Zahlen in Form anderer Zahlen, die als Module bezeichnet werden. Die Ergänz-Funktion definiert eine Operation für *Zahlenpaare*. Die Multiplikationsfunktion definiert eine Operation für eine Zahl und ein Zahlenpaar. Hier sind Beispiele für deren Verwendung: ``` >>> invert (82856, 7164661) 3032150

>>> add([84672, 5768], [15684, 471346])
[98868508778765247164450388534339365517943901419260061027507991295919394382071, 110531019976596004792591549651085191890711482591841040377832420464376026143223]

>>> multiply(82716, [31616, 837454])
[82708077205483544970470074583740846828577431856187364454411787387343982212318, 30836796656275663256542662990890163662171092281704208118107591167423888588304]
```
### Private & Public Keys
<br/>![](./10Y8TNbhhEQytGNYJH5uPTg.jpeg)

Die privaten Schlüssel sind Zahlen ungleich Null, die kleiner als die Konstante N sind. Öffentliche Schlüssel sind die Produkte dieser privaten Schlüssel und des Paares (Gx, Gy). Beispielsweise:
```
>>> private_key = 296921718

>>> multiply(private_key, (Gx, Gy))
[29493341745186804828936410559976490896704930101972775917156948978213464516647, 14120583959514503052816414068611328686827638581568335296615875235402122319824]
```
<br/>Notice that public keys are pairs of numbers.


### Das Unterzeichnen (Signing)

![](./1na0d3BXnFL-nSj5mNOsE2g.jpeg)
Das Unterzeichnen von Transaktionen umfasst eine Operation für die Keccak 256-Hashes der Transaktionen und privaten Schlüsseln. Die folgende Funktion implementiert diese Operation:

```
import random

def sign(hash, priv_key):
        """
        Signs the hashes of transactions.
        """

        result = [0, 0]
        while 0 in result or result[1] > N / 2:
                temp      = random.randint(1, N - 1)
                result[0] = multiply(temp, (Gx, Gy))[0] % N
                result[1] = invert(temp, N) * (hash + priv_key * result[0])
                result[1] = result[1] % N

        return result
```

<br/>Zum Beispiel:

```
>>> hash = 0xf62d00f14db9521c03a39c20e94aa10a82ff5f5a614772b25e36757a95a71048

>>> private_key = 296921718

>>> sign(hash, private_key)
[12676003675279000995677412431399004760576311052126257887715931882164427686866, 17853929027942611176839390215748157599052991088042356790746129338653342477382]

>>> sign(hash, private_key)
[18783324464633387734826042295911802941026009108876130700727156896210203356179, 41959562951157235894396660120771158332032804144867595196194581439345450008533]
```
<br/>Beachten Sie, dass digitale Signaturen Zahlenpaare sind. Beachten Sie auch, dass die Zeichenfunktion auch unterschiedliche Ergebnisse für die *gleichen* Eingänge liefern kann!

### Das Überprüfen (Verifying)

![](./1mU-RpvD9LL_3ej7FC7nNsg.jpeg)

Zum Überprüfen digitaler Signaturen müssen bestimmte Eigenschaften in Bezug auf die Keccak 256-Hashes und die öffentlichen Schlüssel überprüft werden. Die folgende Funktion implementiert diese Prüfungen:

```
def verify(sig, hash, pub_key):
        """
        Verifies the signatures of the hashes of transactions.
        """

        temp_1 = multiply((invert(sig[1], N) * hash)   % N, (Gx, Gy))
        temp_2 = multiply((invert(sig[1], N) * sig[0]) % N, pub_key)
        sum    = add(temp_1, temp_2)
        test_1 = (0 < sig[0] < N) and (0 < sig[1] < N)
        test_2 = sum != (0, 0)
        test_3 = sig[0] == sum[0] % N

        return test_1 and test_2 and test_3
```

<br/>Zum Beispiel:
```
>>> hash = 0xf62d00f14db9521c03a39c20e94aa10a82ff5f5a614772b25e36757a95a71048

>>> private_key = 296921718

>>> public_key = multiply(private_key, (Gx, Gy))

>>> public_key
[29493341745186804828936410559976490896704930101972775917156948978213464516647, 14120583959514503052816414068611328686827638581568335296615875235402122319824]

>>> signature = sign(hash, private_key)

>>> signature
[54728868372105873293629977757277092827353030346967592768173610703187933361202, 18974025727476367931183775600389145833964496722266015570370178285290252701715]

>>> verify(signature, hash, public_key)
True
```
<br/>Um zu überprüfen, ob die öffentlichen Schlüssel bestimmten ETC-Kontoadressen entsprechen, stellen Sie sicher, dass die 20 Bytes des öffentlichen Schlüssels Keccak 256 mit diesen Adressen übereinstimmen.

### Die Wiederherstellungskennungen (Recovery Identifiers)
<br/>![](./6RuyzCB.png)
<br/>Genau genommen, enthalten digitale ETC-Signaturen zusätzliche kleine Nummern, die als *Wiederherstellungskennungen* bezeichnet werden. Damit können öffentliche Schlüssel ausschließlich aus den signierten Transaktionen ermittelt werden.


### Das Fazit
<br/>![](./1c2zDUxyTF1IidCj15Xa4yg.jpeg)

Ich habe digitale ETC-Signaturen eher mit Code als mit Mathematik erklärt. Es war hoffentlich hilfreich zu sehen, wie das Signieren und Überprüfen mit diesen winzigen Funktionen implementiert werden kann.


### Die Feedback

Sie können mich kontaktieren, indem Sie auf eines der folgenden Symbole klicken:

![](./0*eoFC6QOWZ--bCngK.png)

![](./0*i3CwTFEKUnKYHMf0.png)

![](./0*HQj6HSHxE7pkIBjk.png)

### Die Danksagung

Ich möchte IOHK (Input Output Hong Kong) für die Finanzierung dieser Bemühungen danken.

### Die Lizenz

![](./0*hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0
International License.

