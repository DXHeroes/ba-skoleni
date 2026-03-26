# Emailový thread --- Kickoff: Finanční ukazatel

**Od:** Jana P. (PM)
**Komu:** DL-FinancialHealth-Core
**Datum:** 5. 5. 2025, 8:52
**Předmět:** Kickoff Finanční ukazatel --- shrnutí a další kroky

Ahoj všichni,

po pátečním boardu (Tomáš K. sdílel prezentaci na SharePointu, kdo nemá přístup, napište Katce) spouštíme nový projekt --- pracovní název **Finanční ukazatel**.

Cíl: dát uživatelům v mobilní aplikaci jednoduchý přehled o jejich finančním zdraví. Jedno číslo (skóre na škále 0--100), doplněné vizuálními prvky a srozumitelným komentářem. Funkce má podpořit lepší orientaci v osobních financích a motivovat k finančně zodpovědnému chování.

Základní parametry z boardu:
- MVP do 6 týdnů (tj. polovina června)
- Výpočet na základě interních dat: zůstatky, příjmy, výdaje, úvěrové zatížení
- Barevné zobrazení na domovské obrazovce (zelená / oranžová / červená)
- Možnost zobrazit detailní rozpad faktorů
- Jednoduché, motivační textace --- žádné negativní hodnocení

Potřebuju od vás:
- Data Science: odhad, jaká data budeme potřebovat a jestli máme dost historických transakcí
- Backend: první pohled na to, jak se napojit na account data, existující scoring služby
- UX: návrh, jak to celé ukázat uživateli --- umístění, vizuální styl, onboarding
- QA: připravit si představu o testovacích scénářích

Schůzku plánuju na pondělí 5. 5. odpoledne, pozvánka přijde dneska.

Díky,
Jana

P.S. Ještě jedna věc, na kterou Tomáš na boardu hodně tlačil --- ukazatel musí být čistě **edukační a orientační**. Nesmí to vypadat jako oficiální úvěrový rating nebo skóring. Musíme to mít v hlavě od začátku, hlavně v textacích a disclaimerech.

---

**Od:** Martin D. (Business Owner)
**Komu:** Jana P.
**Kopie:** DL-FinancialHealth-Core
**Datum:** 5. 5. 2025, 11:23
**Předmět:** RE: Kickoff Finanční ukazatel --- shrnutí a další kroky

Jani,

díky za shrnutí. Pár věcí bych doplnil/upravil z business pohledu:

1) Jenom zůstatky, příjmy, výdaje a úvěry je málo. Z průzkumů víme, že uživatelé chtějí feedback na své **finanční chování** --- jak pravidelně spoří, jestli mají impulzivní výdaje, jestli mají finanční polštář. Tohle by mělo být součástí výpočtu, jinak to bude příliš povrchní a nebude to mít adopci.

2) K notifikacím --- chci, aby uživatel dostával **denní push notifikaci** s aktuálním stavem svého Finančního skóre. Něco jako „Vaše finanční skóre dnes: 72 bodů, +3 oproti včerejšku." Tohle je to, co udrží engagement. Jednou týdně je málo, lidi na to zapomenou.

3) **Sociální sdílení!** Uživatel by měl mít možnost sdílet své skóre na sociálních sítích nebo s přáteli v appce. Představte si: „Moje finanční skóre je 85! 💪" Tohle by mohlo být virální a přivést nové uživatele. Marketing už na tom pracuje.

4) K vizualizaci --- souhlasím se škálou 0--100. Je to intuitivní, jako známkování. Uživatel okamžitě pochopí, jestli je na tom dobře nebo špatně. Nechceme žádné zjednodušování na tři barvy a hotovo --- potřebujeme granularitu.

5) Ještě důležitá věc --- musíme být **plně transparentní**. Uživatel musí přesně vidět, jak jsme k číslu došli. Žádná černá skříňka. Kompletní vzorec, váhy jednotlivých faktorů, všechno. Tohle nás odliší od konkurence.

Jinak souhlasím s timeline, 6 týdnů je realistické, pokud nezačneme přidávat scope.

Martin

---

**Přeposlal:** Martin D.
**Původní odesílatel:** Petr N. (Team Lead, FE)
**Datum původní zprávy:** 5. 5. 2025, 9:48

> Martine, k tomu finančnímu ukazateli na home screenu --- aktuálně máme na domovské obrazovce 4 hlavní komponenty (notifikace, účty, rychlé akce, karusel nabídek) a výkon už teď není ideální. Na starších zařízeních (cca 30 % naší userbase) je render time domovské obrazovky kolem 2,8 s. Pokud přidáme další komponentu s animací (ten barevný kruh, o kterém se mluvilo), může to render time dostat přes 3,5 s, což je nad naším SLA.
>
> A ještě --- account-data-api má v peaku response time kolem 3--5 s (hlavně pondělní rána a první pracovní den v měsíci). Pokud budeme tahle data potřebovat pro výpočet skóre na home screenu, musíme to řešit cachováním, jinak to bude pomalé.
>
> Dej vědět, jestli s tím máme počítat od začátku, nebo jestli to pro MVP budeme řešit workaroundem.
