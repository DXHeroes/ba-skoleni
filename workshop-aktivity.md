# Workshop: AI v praxi datového analytika

## Jak pracovat s promptem

* Role v promptu je volitelná. Definujte ji jen, pokud pomáhá vymezit očekávání.
* Doplňte si sami kontext, vstupy, omezení a požadovaný výstup. Šablony níže berte jako oporu, ne jako dogma.
* Začněte stručným cílem, potom popište kroky (1–2–3), co od AI chcete.
* Požádejte AI, ať si řekne o chybějící informace. Vytvářejte krátké iterace.
* Preferujte přehledný výstup (seznam, tabulka, diagram, kontrolní seznam).
* Pamatujte: **kratší, jasnější prompt = lepší výstup**.

### Prompt šablona k vyplnění (doporučeno)

```markdown
# Role (volitelné):
- [doplňte roli jen pokud pomáhá, např. "datový analytik zaměřený na kvalitu dat"]

# Kontext:
- [stručně popište situaci/úkol]

# Vstupy:
- [jaká data/podklady máte]

# Úkoly:
1. [co má AI udělat, krok za krokem]
2. [druhý krok]
3. [třetí krok]

# Výstup:
- [požadovaný formát – text, tabulka, diagram, kontrolní seznam]
- Odpověď česky.
```

---

# Cvičení

Níže máte **uživatelské příběhy**. Každý obsahuje **důležité i nepodstatné informace**.
Vaším úkolem je **zformulovat prompt jen z toho, co považujete za klíčové**.
Poté porovnejte svůj výsledek s ostatními a diskutujte rozdíly.

---

## 1. Uživatelský příběh: změna hesla

```
Ve čtvrtek odpoledne volal klient na linku podpory, protože se mu nedařilo změnit heslo.  
Operátor zapsal požadavek do ticketovacího systému a ten doputoval až k vám.  
Klient byl rozladěný a zmínil, že má už několikátý problém s internetovým bankovnictvím.  

Vaše role je připravit podklady, se kterými může pracovat vývojový tým i dokumentace.  
Banka má nastavená pravidla pro tvorbu hesel (minimální délka, složitost, zákaz opakování).  
Součástí návrhu má být i popis chybových stavů (slabé heslo, vypršený odkaz).  
Každá změna má být logovaná kvůli auditu.  

Manažer z podpory také zmínil, že by se do budoucna hodila vizualizace změn hesel,  
ale to není aktuální priorita. Operátor si navíc všiml, že klient měl neobvyklý e-mail,  
ale to s heslem nesouvisí.  

Výstup by měl být přehledný a vhodný pro týmovou spolupráci.
```

### Na co se zaměřit při tvorbě promptu

* Oddělte **hlavní úkoly** (pravidla hesel, chybové stavy, audit log) od **doplňkového šumu**.
* V promptu jasně specifikujte **požadovaný výstup** (např. tabulka pravidel, seznam chybových situací).
* Ujistěte se, že AI má kontext: *„tento výstup bude sloužit pro dokumentaci a tým vývoje“*.

---

## 2. Backlog z obchodních požadavků

```
Ráno dorazil od produktového manažera e-mail s volně sepsanými požadavky.  
Základní body jsou: zobrazit finanční skóre, stručně vysvětlit hlavní faktory,  
posílat notifikace při větších změnách a volitelně exportovat data pro reporting.  

Manažer k tomu připsal, že by bylo super, kdyby aplikace jednou uměla i predikovat budoucí vývoj skóre,  
ale to zatím není priorita. Stejně tak zmínil, že by bylo hezké mít export do PDF pro board meetingy.  

Vaším úkolem je připravit backlog. Požadavky je potřeba rozdělit do epik a user stories,  
určit priority metodou MoSCoW a doplnit závislosti (např. API, data ve skladu).  
Výstup má být v Markdownu.  

Poznámka: e-mail obsahoval i několik odrážek o tom, že by se mělo zlepšit UX aplikace,  
ale ty nejsou součástí aktuálního zadání.
```

### Na co se zaměřit při tvorbě promptu

* Zaměřte se na **relevantní požadavky**, ignorujte nápady „do budoucna“.
* Struktura promptu by měla vést AI k:

  1. rozdělení do epik a user stories,
  2. označení priorit (MoSCoW),
  3. doplnění závislostí.
* Nezapomeňte v promptu vyžádat **výstup v Markdownu**.

---

## 3. Sekvenční diagram

```
Tým si není jistý pořadím zpráv mezi systémy při zobrazení skóre.  
Většina případů funguje přes tok: Mobilní aplikace → Backend API → Scoring Service → Databáze.  

Scénář: uživatel otevře obrazovku, aplikace volá GET `/users/{id}/score`,  
backend načte z databáze (nebo spustí přepočet ve Scoring Service), vrátí JSON.  
Chybový tok: 404 pokud uživatel neexistuje.  

Tester ale připomněl, že některé starší verze aplikace dělají ještě volání jiného API,  
ale to se už dnes nepoužívá. Produkták zmínil, že by jednou mohli chtít i realtime notifikace,  
ale to není součástí současného zadání.  

Navíc si tým stěžuje, že aplikace na starých telefonech se někdy seká,  
ale to s pořadím zpráv nesouvisí.  

Úkol: připravit sekvenční diagram v PlantUML, který jasně ukáže hlavní tok.
```

### Na co se zaměřit při tvorbě promptu

* Identifikujte **hlavní tok** a **minimální chybový tok**, ignorujte historické nebo budoucí poznámky.
* V promptu uveďte jasně: *„vytvoř sekvenční diagram v PlantUML“*.
* Pokud chcete, doplňte požadavek na **krátký popis kroků** spolu s diagramem.

---

## 4. BDD scénáře (Gherkin)

```
Produktový manažer chce sjednotit, co znamená „hotovo“ pro obrazovku skóre.  
Sepsal několik požadavků: šťastná cesta (zobrazení skóre), hraniční stavy (bez dat),  
chybové stavy (selhání služby) a zobrazení faktorů.  

Dodal, že by bylo dobré mít i performance testy pro 100k uživatelů současně,  
ale to není aktuálně scope. Zmínil také, že by se scénáře měly dát importovat do JIRA,  
ale to není podmínka pro první verzi.  

Scénáře mají být napsané v Gherkinu, s Examples, tak aby jim rozuměl byznys i IT.  
Výstup má být v češtině, bez implementačního kódu.  

V poznámkách se objevilo i „vylepšit barevné schéma UI“, ale to s testováním nesouvisí.
```

### Na co se zaměřit při tvorbě promptu

* Oddělte **testovací scénáře** od „nice to have“ poznámek.
* V promptu uveďte: *„napiš Gherkin scénáře se sekcemi Given/When/Then a doplň Examples“*.
* Ujistěte se, že AI ví, že výstup má být **v češtině** a **bez implementačního kódu**.

---

# Reflexe a diskuse

* Co jste do promptu zahrnuli a co vynechali?
* Bylo těžké odlišit podstatné od šumu?
* Jak se liší výstupy AI podle délky/obsahu promptu?
* Kdy je lepší být stručný vs. kdy podrobný?
* Co jste si odnesli z porovnání promptů s ostatními?

Cílem workshopu je **naučit se vybírat z příběhu jen to podstatné** a zformulovat jasný, přehledný prompt.