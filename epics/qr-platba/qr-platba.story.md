# US - QR platba

## Proč to potřebujeme?

Uživatelé potřebují rychlý a jednoduchý způsob, jak zadat platební údaje bez ručního vyplňování. QR kódy nabízejí efektivní řešení, které minimalizuje chyby při zadávání a šetří čas.

## Uživatelský příběh

Jako bankovní klient chci načíst QR kód s platebními údaji, abych mohl rychle a bez chyb provést platbu.

## Kritéria přijetí (Given / When / Then)

Když: uživatel je přihlášen do aplikace  
A: načte QR kód obsahující platební údaje  
Pak: systém automaticky připraví platbu k odeslání se správnými údaji

Když: uživatel načte neplatný QR kód  
Pak: systém zobrazí chybovou hlášku o neplatném formátu QR kódu

Když: QR kód neobsahuje všechny povinné platební údaje  
Pak: systém upozorní uživatele na chybějící údaje

## Nepřímo-funkční požadavky (volitelné)

- Výkon: načtení a zpracování QR kódu do 1 sekundy
- Bezpečnost: validace všech platebních údajů před jejich použitím
- Použitelnost: jasná zpětná vazba během procesu načítání QR kódu

## Změny v datech

| Objekt   | Změna                                             | Zpětně kompatibilní? |
| -------- | ------------------------------------------------- | -------------------- |
| payments | přidáno pole source pro informaci o zdroji platby | ✔︎ (nullable)        |

## Změny API

| Endpoint              | Změna                               | Kompatibilita |
| --------------------- | ----------------------------------- | ------------- |
| POST /api/payments/qr | nový endpoint pro zpracování QR dat | n/a           |

## Hotovo, když:

- Splňuje obecné DoD
- Všechna kritéria přijetí jsou otestována
- Dokumentace je aktuální (Swagger, diagramy, apod.)
- Úspěšně otestováno s různými formáty QR platebních kódů
- Implementována validace vstupních QR dat
- Uživatelské rozhraní poskytuje jasnou zpětnou vazbu o stavu zpracování QR kódu
