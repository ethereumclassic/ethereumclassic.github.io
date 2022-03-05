---
title: "Ethereum Classic Recursive Length Prefix Encoding"
date: 2018-03-19
author: Christian Seberino
contributors: ["cseberino"]
---

![](./QShEODs.png)

Ethereum Classic (ETC) verwendet RLP-Codierung (Recursive Length Prefix) zum Speichern und Senden von Datenstrukturen. Ich werde RLP beschreiben und wie es in ETC verwendet wird.

## Die Einführung

![](./1_y8SOO9LmGSUWnSGG1vidg.png)

Bei der Serialisierung werden Datenstrukturen in Byte-Sequenzen codiert. Es wird auch als Rangieren und Beizen (marshalling and pickling) bezeichnet. Beim Speichern und Senden von Datenstrukturen ist eine Serialisierung erforderlich.

RLP ist ein Serialisierungsformat, das von Ethereum-Entwicklern für alle Datenstrukturen wie Konten, Transaktionen und Blöcke erstellt wurde. RLP ist einfacher als die Alternativen wie XML (Extensible Markup Language), JSON (JavaScript Object Notation), BSON (Binary JSON), Protocol Buffers und Bencode.

RLP ist auch konsistent. Identische Objekte werden immer in identische Bytefolgen konvertiert. Dies gilt nicht für alle Serialisierungsformate. Wenn beispielsweise Sätze von Schlüsselwertpaaren codiert werden, geben einige Schemata keine Reihenfolge für die Schlüssel an.

## Die Einzelheiten

![](./lZK7AV3.jpg)

RLP bearbeitet Bytefolgen und Listen. Listen können Bytefolgen und andere Listen enthalten. Die Interpretation aller Eingaben wird von anderen Protokollen übernommen. Für Bytesequenzen werden kleine Header hinzugefügt, die von der Länge abhängen. Bei Listen werden die Elemente separat codiert und verkettet. Wie bei Byte-Sequenzen werden kleine Header hinzugefügt, die von der Länge abhängen. Zuletzt werden alle Längen im Big-Endian-Format codiert.

## Der Code

![](./NpkXLnm.jpg)

Hier sind Python-Funktionen, die die RLP-Codierung und -Decodierung implementieren:

```
#!/usr/bin/env python3

import math

N_BITS_PER_BYTE = 8

def n_bytes(integer):
        """
        Finds the numbers of bytes needed to represent integers.
        """

        return math.ceil(integer.bit_length() / N_BITS_PER_BYTE)

def get_len(input, extra):
        """
        Finds the lengths of the longest inputs using the given extra values.
        """

        n_bytes = input[0] - extra

        return 1 + n_bytes + int.from_bytes(input[2:2 + n_bytes], "big")

def rlp_encode(input):
        """
        Recursive Length Prefix encodes inputs.
        """

        if isinstance(input, bytes):
                body = input
                if   (len(body) == 1) and (body[0] < 128):
                        header = bytes([])
                elif len(body) < 56:
                        header = bytes([len(body) + 128])
                else:
                        len_   = len(body)
                        len_   = len_.to_bytes(n_bytes(len_), "big")
                        header = bytes([len(len_) + 183]) + len_
                result = header + body
        else:
                body = bytes([])
                for e in input:
                        body += rlp_encode(e)
                if len(body) < 56:
                        header = bytes([len(body) + 192])
                else:
                        len_   = len(body)
                        len_   = len_.to_bytes(n_bytes(len_), "big")
                        header = bytes([len(len_) + 247]) + len_
                result = header + body

        return result

def rlp_decode(input):
        """
        Recursive Length Prefix decodes inputs.
        """

        if   input[0] < 128:
                result = input
        elif input[0] < 184:
                result = input[1:]
        elif input[0] < 192:
                result = input[1 + (input[0] - 183):]
        else:
                result = []
                if input[0] < 248:
                        input = input[1:]
                else:
                        input = input[1 + (input[0] - 247):]
                while input:
                        if   input[0] < 128:
                                len_ = 1
                        elif input[0] < 184:
                                len_ = 1 + (input[0] - 128)
                        elif input[0] < 192:
                                len_ = get_len(input, 183)
                        elif input[0] < 248:
                                len_ = 1 + (input[0] - 192)
                        else:
                                len_ = get_len(input, 247)
                        result.append(rlp_decode(input[:len_]))
                        input = input[len_:]

        return result
```

<br/>Beachten Sie, dass die Funktionen rekursiv sind. Beachten Sie auch, dass die Funktionen für Eingaben funktionieren, die bis zu 18 Millionen Terabyte erfordern. Hier sind Beispiele für ihre Verwendung:

```
>>> rlp_encode(b"A")
b'A'

>>> rlp_encode(b"12345")
b'\x8512345'

>>> rlp_encode(20 * b"12345")
b'\xb8d1234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345'

>>> rlp_encode([b"12345"])
b'\xc6\x8512345'

>>> rlp_encode([b"abcde", 3 * [b"12345"], [b"fghij"], b"67890", 4 * [b"klmno"]])
b'\xf8\x85abcde\xd2\x8512345\x8512345\x8512345\xc6\x85fghij\x8567890\xd8\x85klmno\x85klmno\x85klmno\x85klmno'

>>> rlp_decode(b"\x8512345")
b'12345'

>>> rlp_decode(b"\xc6\x8512345")
[b'12345']

>>> rlp_decode(b"\xf8\x85abcde\xd2\x8512345\x8512345\x8512345\xc6\x85fghij\x8567890\xd8\x85klmno\x85klmno\x85klmno\x85klmno")
[b'abcde', [b'12345', b'12345', b'12345'], [b'fghij'], b'67890', [b'klmno', b'klmno', b'klmno', b'klmno']]
```

## Das Fazit

![](./iI2jnWZ.jpg)

RLP ist ein elegantes und zugängliches Serialisierungsformat, das weitgehend von ETC verwendet wird. Es kann schnell gemeistert werden, wodurch dieser wichtige Aspekt des Systemes beleuchtet wird.

## Die Feedback

You can contact me by clicking any of these icons:

![](./0*eoFC6QOWZ--bCngK.png)

![](./0*i3CwTFEKUnKYHMf0.png)

![](./0*HQj6HSHxE7pkIBjk.png)

## Acknowledgements

Ich möchte IOHK (Input Output Hong Kong) für die Finanzierung dieser Bemühungen danken.

## Die Lizenz

![](./0*hocpUZXBcjzNJeQ2.png)

Diese Arbeit unterliegt der Creative Commons Attribution ShareAlike 4.0 International-Lizenz.
