# US - Název

## Proč to potřebujeme?

Stručně popiš důvod, problém nebo příležitost.

## Uživatelský příběh

Jako [uživatel / role] chci [co udělat] abych [získal/a hodnotu].

## Kritéria přijetí (Given / When / Then)

Když: [výchozí stav]  
A: [uživatel provede akci]  
Pak: [očekávaný výsledek]

(Zvaž i okrajové případy)

## Nepřímo-funkční požadavky (volitelné)

- Výkon: API odpověď do 200 ms
- Bezpečnost: přístup jen pro roli user

## Změny v datech

Objekt Změna Zpětně kompatibilní?
users tabulka přidán avatar_url ✔︎ (nullable)

## Změny API

Endpoint Změna Kompatibilita
GET /v1/profile bude zrušeno výstražný header
PATCH /v2/profile nový n/a

## Hotovo, když:

- Splňuje obecné DoD
- Všechna kritéria přijetí jsou otestována
- Dokumentace je aktuální (Swagger, diagramy, apod.)
- [Specifické kontroly pro tuto story, např. test konkrétní funkce]
