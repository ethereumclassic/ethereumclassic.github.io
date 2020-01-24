---
title: Wie man Emerald-Wallet verwendet
description: Benutzerhandbuch zur Verwendung von Emerald-Wallet-Desktop
---
## Installation

Die neueste Version von Emerald-Wallet kann hier heruntergeladen werden. Wähle die für Dein Betriebssystem geeignete Version aus:
[https://github.com/ETCDEVTeam/emerald-wallet/releases](https://github.com/ETCDEVTeam/emerald-wallet/releases)

**Für Windows:** Lade die Installationsdatei mit der Endung ".exe" herunter, doppelklicke darauf und befolge die Anweisungen.

**Für Debian:** Lade die `.deb`-Datei herunter und führe `sudo dpkg -i/path/to/the_file_you_downloaded.deb` aus.

**Für Linux (generisch):** Lade die tar-Datei herunter, extrahiere sie mit `tar -xvzf the_file_you_downloaded.tar.gz`, `chmod +x emeraldwallet` und führe `./emeraldwallet` aus.

**Für MacOS:** Lade die `.dmg`-Datei herunter und führe sie aus.

## Erste Benutzung

Nach der Installation solltest Du mit dem folgenden Bildschirm begrüßt werden:

![Network Select](./network_select.png)

Hier habest zwei Möglichkeiten, "Remote Node" und "Full Node":

**Remote Node**: Wenn Du einfach loslegen möchtest, klicke auf „Remote Node“, um die freien Knoten von epool/gastracker zu verwenden. Mit dieser Option kannst sofort mit der Nutzung des ETC-Netzwerkes beginnen.

**Full Node**: Wenn Du einen „full node“ synchronisieren möchtest, um maximale Sicherheit zu gewährleisten und das ETC-Netzwerk zu unterstützen, könnst auf „Full Node“ klicken und musst Du ein wenig warten, bis das Netzwerk synchronisiert ist.

- Wenn Du während der Synchronisierung ETC empfängst, wird der Saldo erst angezeigt, wenn Dein Knoten vollständig synchronisiert ist. Mache dir keine Sorgen, die Mittel fehlen nicht. Dein Knoten muss nur mit dem Rest des Netzwerkes Schritt halten
- Wenn hier Probleme auftreten, solltest Du sicherstellen, dass die Systemuhr ordnungsgemäß synchronisiert ist:
- Windows: Systemsteuerung > Datum & Uhrzeit > Internetzeit > Einstellungen ändern > Jetzt aktualisieren
- Linux/Mac: `sudo ntpdate -vu pool.ntp.org`. In einigen Fällen musst Du möglicherweise das Programm ntpdate mit Deinem Paketmanager installieren.

Unabhängig davon, welche Option Du auswählst, kannst Du diese jederzeit über das Menü oben rechts ändern.

## Neues Konto erstellen

Wenn Du ETC noch nicht verwendet hast und keine Ledger Nano S-Hardware-Wallet hast, kannst Du auf "Neues Konto erstellen" klicken und Ihre erste Wallet erhalten.

Bitte befolge die Anweisungen sorgfältig und genau so, wie sie lauten. Dies ist der beste Weg, um sicherzustellen, dass Du ETC sicher aufbewahrt wird.

**Denke daran, dass Kryptowährungen, einschließlich ETC, eher wie Bargeld als Kredite sind. Du würdest Dein Geld nicht unsicher aufbewahren, bewahre Deine Kryptowährung auch nicht unsicher auf. Befolge die Anweisungen in der Wallet, und schütze Deine privaten Schlüssel.**

### Verwendung eines vorhandenen Kontos oder von Ledger Nano S

Wähle Deine Option und folge den Anweisungen auf dem Bildschirm.

### Ändere wie Du eine Verbindung zu ETC herstellst

Wenn Du jemals zwischen Vollsynchronisations- und Light-Clients wechseln möchtest, kannst Du oben rechts auf dem Bildschirm auswählen. Die Option "Mainnet" ist eine "Full Sync", während die anderen beiden Optionen ("Mainnet (epool)"/"Mainnet (gastracker)") "Remote Node"-Optionen sind.

Morden ist für Entwickler gedacht. Wenn Du also keine eigenen intelligenten Verträge programmierst, musst Du diese Optionen nicht verwenden.

## Empfangen von ETC

Um ETC zu erhalten, musst Du dem Absender Deine öffentliche Adresse mitteilen, die Du auf dem Hauptbildschirm der Wallet findest und durch Klicken auf die beiden Kästchen/Zettel kopieren kannst; unten hervorgehoben.

![Address Example](./address_example.png)

## Senden von ETC

Um ETC zu senden, klickst Du im Hauptbildschirm auf "Senden". Gebe das Passwort Deiner Wallet und die Adresse ein, an die Du sendest möchtest (gelb hervorgehoben).

Du erhälst eine geschätzte Transaktionsgebühr und kannst Du dann auf "Senden" klicken.

Nach dem Absenden wird die Transaktion in Kürze bestätigt. Du kannst dies auch nach ein oder zwei Minuten überprüfen, indem Du die Adresse des Empfängers unter [https://gastracker.io](https://gastracker.io/) oder [http://etherhub.io](http://etherhub.io/)

![Send ETC](./send_etc.png)

**Es ist immer eine gute Idee, zuerst eine sehr kleine Testtransaktion zu schicken, zu bestätigen, dass der Empfänger die ETC erhalten hat, und dann eine zweite Transaktion durchzuführen. Auch wenn Du an Börsen sendest, solltest Du sicherstellen, dass es zuerst auf Dein Konto eingeht. Dies hilft, einen versehentlichen Verlust von ETC zu verhindern.**