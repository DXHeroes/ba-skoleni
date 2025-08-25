# Příběh: Jak datový analytik zapojí AI od zadání po výsledek

## 1) Zadání a cíl
- Kontext: Máme funkcionalitu „Finanční skóre“ pro mobilní bankovnictví.
- Cíl: Připravit podklady – epiky, příběhy, ER diagram, BDD scénáře a krátkou analýzu dat.

## 2) Plán spolupráce s AI
- Co deleguji na AI: návrhy struktur, první verze textů, ER diagram v Mermaid, návrhy Gherkin scénářů.
- Co dělám já: upřesňuji kontext, kontroluji a akceptuji výstupy, ladím terminologii.
- Iterace: krátké kroky, AI si má říkat o chybějící vstupy.

## 3) První krok: obchodní požadavky → epiky a příběhy
- Prompt: použijte šablonu z `workshop-aktivity.md/2` a vložte obchodní požadavky.
- Kontrola: MoSCoW priorita, vazby mezi epikami, srozumitelnost.

## 4) Vizualizace procesu a dat
- Ze zápisků na tabuli přepište klíčové entity a vztahy.
- Požádejte Copilot o Mermaid `erDiagram` + vysvětlení normalizace.
- Alternativně nechte Copilot přepsat fotku poznámek do seznamu a diagramu (pokud to bezpečnost dovolí).

## 5) CSV – realistický postup bez kódu
- Zhodnoťte kvalitu dat (NA, duplicity, typy, extrémy) a definujte pravidla čištění.
- Volitelně si nechte vygenerovat SQL/Python jako přílohu, ale rozhodněte o postupu v nástrojích, které používáte (Excel/Power Query/Power BI/SQL).

## 6) BDD scénáře
- Vytvořte Gherkin scénáře (Given-When-Then) bez implementačního kódu.
- Zaměřte se na akceptační kritéria (co považujeme za „hotovo“).

## 7) Limity modelu – průběžné ověřování
- Požadujte kroky, zdroje a vysvětlení; nenechte model „hádat“ detaily.
- Dlouhá zadání zhušťujte a strukturalizujte.

## 8) Závěr a výstupy
- Zkompletujte: epiky/příběhy, ER diagram, BDD scénáře, stručný plán práce s daty.
- Sdílejte v Markdownu a uložte verze pro opakovatelnost.


