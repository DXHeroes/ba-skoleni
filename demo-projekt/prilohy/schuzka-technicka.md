# Záznam schůzky --- Technická architektura + UX review

**Datum:** 7. 5. 2025, 10:00--11:45
**Účastníci:** Jana P. (PM), Lucie Š. (UX), Radek F. (Data Scientist), Ondřej B. (IT analytik), Petr N. (Team Lead FE), Tomáš H. (Solution Architect), Jakub K. (BE vývojář)
**Nepřítomen:** Martin D. (Business Owner) --- omluven, je na konferenci

---

Jana: „Dobře, pojďme navázat na pondělní business schůzku. Dneska bychom chtěli vyřešit technickou architekturu a zároveň projít první UX návrhy od Lucie. Tomáši, můžeš začít s architekturou?"

Tomáš H.: „Jasně. Takže jsem se díval na to, jak to uchopit. Navrhuji nový microservice --- nazvěme ho `financial-health-service` --- Kotlin, v K8s clusteru vedle ostatních služeb. Bude mít na starosti výpočet ukazatele a poskytování výsledků přes REST API."

Jakub: „A ten výpočet poběží kdy? Real-time per request, nebo batch?"

Tomáš H.: „Batch. Jednou denně. Výpočet pro všechny aktivní uživatele, výsledky do Redis cache. Mobilka si pak jenom sahá do cache."

Ondřej: „Moment --- Martin na pondělní schůzce říkal, že chce real-time aktualizaci. Jakmile uživatel utratí, skóre se změní."

Tomáš H.: „To je technicky... problematické. Account-data-api nemá push mechanismus. Museli bychom pollovat, a s rate limitem 200 requestů za minutu per API key --- pozor, to je **sdílený** limit, ne per user --- to prostě nejde. Máme 500 tisíc aktivních uživatelů. I kdyby batch běžel sekvenčně, dávka pro všechny by trvala tady... (počítá) ...asi 42 hodin. Takže musíme batch rozložit přes den, prioritizovat aktivní uživatele."

Jakub: „A co Kafka? Není tam topic pro změny na účtu?"

Tomáš H.: „Je. `account.balance.changed`. Ale je to fire-and-forget, žádná garance doručení. Core banking tým to provozuje na best-effort bázi. Nedoporučuju na tom stavět kritickou funkci."

Radek: „Takže pro MVP batch jednou denně. Aktualizace skóre ráno, uživatel vidí včerejší stav."

Jana: „Jasně, to mi dává smysl. Martin nebude nadšený, ale real-time prostě nejde. Budeme mu to muset vysvětlit."

Petr: „K tomu FE --- jak to bude vypadat na home screenu?"

Lucie: „Mám první wireframy. Hlavní obrazovky:
1. **Home screen** --- barevný kruh se skóre uprostřed, rozsah 0--100. Barvy: zelená (70--100), oranžová (40--69), červená (0--39).
2. **Detail ukazatele** --- po kliknutí na kruh. Rozpad na faktory: příjmy, výdaje, zůstatek, úvěrové zatížení. U každého faktoru šipka nahoru/dolů a krátký komentář.
3. **Onboarding** --- při prvním zobrazení vysvětlení, co ukazatel je a co není (disclaimer).
Textace pod kruhem: krátká lidská věta --- 'Jste na dobré cestě', 'Mírné riziko', 'Potřebuje pozornost'."

Petr: „K tomu kruhu --- animovaný, předpokládám? Otáčení, plnění?"

Lucie: „Ano, animovaný. Vyplňuje se od nuly do aktuálního skóre."

Petr: „OK, ale tady je problém. Jak jsem psal v emailu --- home screen už teď renderuje 2,8 s na starších zařízeních. S animovanou SVG komponentou, která navíc čeká na data z API, se dostaneme nad 3,5 s. A to je nad naším SLA."

Tomáš H.: „Data budou v cache, ne? Takže API response by měl být rychlý --- pod 100 ms z Redis."

Petr: „Pokud cache, tak jo. Ale co cold start? Když uživatel otevře appku a cache je prázdná --- třeba po deployi, po výpadku Redis, nebo nový uživatel?"

Tomáš H.: „Cold start... dobrá otázka. Fallback bude, že zobrazíme placeholder --- 'Načítáme váš ukazatel' nebo prázdný kruh. A na pozadí spustíme on-demand výpočet."

Jakub: „On-demand výpočet ale vyžaduje volání account-data-api, které má response time 3--5 s v peaku."

Tomáš H.: „Hm, takže v nejhorším případě uživatel čeká 5 s na první zobrazení. To je moc."

Jana: „Kolik uživatelů se tohle bude týkat reálně?"

Radek: „Po nasazení to bude 100 % uživatelů --- nikdo nebude mít cache. Postupně se naplní během prvního batch runu, ale to bude za 42 hodin..."

Tomáš H.: „Musíme to vyřešit jinak. Předplníme cache ještě před spuštěním. Uděláme bootstrap batch. Ale to znamená, že potřebujeme minimálně 2 dny navíc na prvotní naplnění."

Jana: „OK, tohle je technický detail, vyřešte offline. Pojďme k dalšímu bodu --- nový uživatel. Co zobrazíme někomu, kdo má účet týden?"

Radek: „Pro smysluplný výpočet potřebujeme minimálně **6 měsíců** transakční historie. S méně daty je výpočet nespolehlivý a skóre bude hodně volatilní."

Jana: „Na pondělní schůzce Martin řekl, že to má vidět **každý retail klient**. Nemůžeme říct půlce nových klientů, že na ně nemáme data."

Ondřej: „Mohli bychom zobrazit omezenou verzi --- jen na základě aktuálního zůstatku a příjmů. S disclaimerem, že se přesnost zlepší s další historií."

Radek: „To ale bude nepřesné a uživatel může dostat špatný dojem. Někdo s vysokým zůstatkem ale obrovskou hypotékou by vypadal dobře."

Lucie: „Z UX pohledu --- raději nezobrazit nic než špatné číslo. Důvěra je křehká."

Jana: „Nehoda, tohle prostě musíme rozhodnout. Parkujeme na příští schůzku, ale potřebuju návrh --- Radek s Lucií, připravte varianty."

Ondřej: „Můžu se zeptat na API? Tomáši, jaké endpointy navrhujete?"

Tomáš H.: „Dva hlavní:
- `GET /users/{id}/financial-health` --- základní skóre (číslo, barva, textace)
- `GET /users/{id}/financial-health/details` --- breakdown faktorů

A pak interní:
- `POST /financial-health/calculate` --- trigger on-demand výpočtu (interní, ne pro FE)
- `GET /financial-health/batch/status` --- monitoring batch jobů"

Jakub: „A co validace? Server-side only?"

Tomáš H.: „Ano, všechno na serveru. FE bere data as-is."

Ondřej: „Ještě k datům --- account-data-api nevrací pending transakce, jen settled. Takže pokud uživatel v pondělí udělá velký nákup kartou, ale transakce se settlne až ve středu, náš výpočet v úterním batchi to nebude reflektovat."

Tomáš H.: „Správně. To je omezení, se kterým musíme žít. Alternativa by byla napojení na payment gateway pro real-time auth data, ale to je jiný tým a jiné schvalovací procesy."

Radek: „Ještě k modelu --- v první iteraci bude rule-based. Definujeme váhy pro jednotlivé faktory --- říkejme tomu 'výpočetní jádro'. Důležité je, aby to jádro bylo vyměnitelné --- až budeme mít dost dat, nahradíme pravidla ML modelem."

Jana: „A kdo definuje ty váhy? Business nebo Data Science?"

Radek: „To je dobrá otázka..."

Martin: (nepřítomen)

Jana: „No, Martin tu není. Tohle musíme vyřešit s ním. Zapíšeme jako otevřený bod."

Karolína (QA, připojila se telefonicky na posledních 20 minut): „Jen krátce --- jakmile budeme mít API specifikaci a výpočetní pravidla, připravím testovací scénáře v Gherkinu. Potřebuju vědět edge cases --- minimální historie, nulový zůstatek, klient s exekucí, sdílený účet..."

Tomáš H.: „Sdílené účty --- dobrý bod. Account-data-api pro sdílené účty vrací **jinou response strukturu** --- má tam pole držitelů. Náš service by musel rozhodnout, kterému držiteli skóre přiřadit. Nebo jestli počítat jedno skóre pro oba."

Jana: „Pro MVP bychom sdílené účty NEpodporovali. Souhlasíte?"

Ondřej: „Souhlasím. A co multi-currency? Máme klienty s eurovými účty."

Jana: „Jen CZK pro MVP."

Ondřej: „Jasné. Tak shrnu akční body:
- Tomáš a Jakub: detailní návrh architektury financial-health-service, vyřešit cold start a bootstrap cache
- Radek: definice vstupních dat a váh pro MVP model, varianty pro nové klienty
- Petr: performance analýza home screen s novou komponentou
- Lucie: finální wireframy, onboarding flow, disclaimer texty
- Lucie + Radek: návrh variant pro uživatele s krátkou historií
- Karolína: příprava test scénářů po dodání API specifikace
- Jana: vyřešit s Martinem --- kdo definuje váhy, real-time vs. batch, naming"

Jana: „Díky všem."

---

**Poznámka Ondřeje po schůzce (přidáno 7. 5. večer):**

Mluvil jsem s Tomášem H. po schůzce. Zmínil důležitou věc --- v jiném produktu (spotřebitelské úvěry) už máme **interní loan scoring model**, který používá některé stejné vstupy (příjmy, výdaje, úvěrové zatížení). Ten model přiřazuje klientovi jiné váhy a jiné hodnocení než náš plánovaný finanční ukazatel. Pokud bude klient vidět oba výstupy (finanční ukazatel na home screenu + loan scoring při žádosti o úvěr), může dostat **protichůdné signály** --- finanční ukazatel řekne „jste na tom dobře", ale u úvěru bude zamítnutý kvůli internímu skóringu.

Tomáš říká, že to musíme vyřešit buď sladěním vah (nerealistické, loan scoring je regulovaný a validovaný), nebo jasnou komunikací, že finanční ukazatel NENÍ credit scoring. Ale obává se, že uživatelé ten rozdíl nepochopí.

Taky jsem zjistil, že **úvěrová data** (zůstatky úvěrů, splátky) nejsou v account-data-api, ale v **loan-service-api**, který je v jiném systému s **nightly sync**. Data tam můžou být až **24 hodin stará**. Pokud klient v pondělí splatí úvěr, v úterý to ještě neuvidíme.
