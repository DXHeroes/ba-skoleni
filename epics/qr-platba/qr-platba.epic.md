# Epic: QR platba v mobilní aplikaci

## 1. Popis

Tento epic řeší potřebu rychlého a bezchybného zadávání plateb prostřednictvím QR kódů v mobilní bankovní aplikaci. V současné době musí uživatelé ručně zadávat všechny platební údaje, což vede k časté chybovosti a nespokojenosti klientů. Implementace QR platby umožní uživatelům jednoduše naskenovat QR kód s platebními údaji a automaticky vyplnit platební formulář, což výrazně zrychlí a zpřesní proces zadávání plateb.

## 2. Cíle / Byznysová hodnota

- Zrychlení procesu zadávání plateb o minimálně 70% oproti manuálnímu zadávání
- Snížení počtu chyb při zadávání platebních údajů o 90%
- Zvýšení spokojenosti uživatelů s procesem plateb měřené NPS (Net Promoter Score) o 20%
- Zvýšení počtu provedených plateb v aplikaci o 15% během prvních tří měsíců od nasazení

## 3. Rozsah

### V rozsahu

- Implementace skenování QR kódů v platebním formátu ČBA (České bankovní asociace)
- Automatické vyplnění platebního formuláře údaji z QR kódu
- Validace platebních údajů získaných z QR kódu
- Ošetření chybových stavů při neplatných nebo neúplných QR kódech
- Statistiky úspěšnosti zpracování QR kódů

### Mimo rozsah

- Generování QR kódů pro odchozí platby
- Podpora jiných typů QR kódů než platební formát ČBA
- Skenování papírových faktur (OCR funkcionalita)
- Automatické odesílání plateb bez potvrzení uživatelem

## 4. Závislosti

- Přístup k fotoaparátu zařízení a oprávnění na úrovni operačního systému
- Integrační API pro zpracování plateb
- Knihovna pro dekódování QR kódů
- Aktualizace platební infrastruktury pro podporu nového zdroje platebních údajů

## 5. Uživatelské příběhy

- [ ] [QRP-01] Jako uživatel aplikace chci naskenovat QR kód s platebními údaji, aby se automaticky vyplnil platební formulář
- [ ] [QRP-02] Jako uživatel aplikace chci být informován o neplatném QR kódu, abych věděl, že mám zkusit skenovat znovu nebo zadat údaje ručně
- [ ] [QRP-03] Jako uživatel aplikace chci vidět všechny detaily platby získané z QR kódu před potvrzením transakce
- [ ] [QRP-04] Jako uživatel aplikace chci mít možnost upravit údaje po naskenování QR kódu, pokud potřebuji změnit některé hodnoty
- [ ] [QRP-05] Jako administrátor systému chci mít přehled o úspěšnosti zpracování QR kódů, abych mohl identifikovat případné problémy

## 6. Rizika

| Riziko                                     | Dopad     | Pravděpodobnost | Zmírnění                                                                    |
| ------------------------------------------ | --------- | --------------- | --------------------------------------------------------------------------- |
| Kompatibilita s různými formáty QR kódů    | Vysoký    | Střední         | Důkladné testování s různými formáty a verzemi QR kódů                      |
| Nízká kvalita fotoaparátu na některých zařízeních | Střední   | Vysoká      | Implementace pokročilých algoritmů pro rozpoznávání i méně kvalitních snímků |
| Bezpečnostní rizika při zpracování dat     | Vysoký    | Nízká          | Důkladná validace vstupních dat a šifrování přenosu                         |
| Nedostatečná osvěta mezi uživateli         | Střední   | Střední         | Vytvoření edukativní kampaně a nápovědy v aplikaci                          |

## 7. Metriky úspěchu

- Podíl plateb zadaných pomocí QR kódu: cíl >25% všech plateb během prvních 3 měsíců
- Rychlost zadání platby: průměrný čas <15 sekund od naskenování po potvrzení
- Chybovost: <2% neúspěšných skenování z důvodu chyby aplikace
- Uživatelská spokojenost: >85% uživatelů hodnotí funkci pozitivně

## 8. Poznámky a další informace

- Implementace bude probíhat v souladu s bezpečnostními standardy banky
- Pro testování budou využity existující testovací účty a platební prostředí
- Více informací o formátu QR kódu lze nalézt v dokumentaci České bankovní asociace
- Relevantní výstupy z uživatelského výzkumu jsou dostupné v interním dokumentu Analýza uživatelských potřeb (ID: UX-2025-042)
- Další detaily viz schůzka produktového týmu ze dne 5.5.2025
