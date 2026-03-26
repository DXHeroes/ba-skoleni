# Záznam schůzky --- Business requirements Finanční ukazatel

**Datum:** 5. 5. 2025, 14:00--15:30
**Účastníci:** Jana P. (PM), Martin D. (Business Owner), Lucie Š. (UX), Radek F. (Data Scientist), Ondřej B. (IT analytik), Karolína N. (QA)
**Zapisovatel:** Ondřej B. (pozn.: zápis dělaný za běhu, některé části nemusí být doslovné)

---

Jana: „Tak, díky že jste dorazili. Cíl dnešní schůzky --- projít základní business požadavky na Finanční ukazatel a odejít s jasnou představou, co vlastně děláme. Martin, chceš začít?"

Martin: „Jasně. Základní myšlenka --- chceme, aby lidi v appce viděli jedno číslo, které jim řekne, jak na tom finančně jsou. Finanční skóre. Jednoduché, intuitivní, jako když se podíváš na tachometr v autě."

Jana: „Počkej --- 'Finanční skóre' nebo 'Finanční ukazatel'? V zadání máme ukazatel."

Martin: „To je jedno, jak tomu interně říkáme. Pro uživatele to bude 'Vaše finanční skóre'. Marketing na tom už pracuje."

Jana: „Hmm, OK, ale někdo by měl ověřit, jestli slovo 'skóre' nemůže být problém... Ale to teď neřešme. Co přesně bude to číslo znamenat?"

Martin: „Škála 0 až 100. Nula je špatně, stovka je výborně. Jako ve škole, ale obráceně. Uživatel okamžitě pochopí, kde stojí."

Ondřej: „A z čeho to číslo spočítáme? Z Janina emailu jsem pochopil, že zůstatky, příjmy, výdaje a úvěry."

Martin: „To je základ, ale to nestačí. Já chci, aby ten model hodnotil i **finanční chování** --- jak pravidelně uživatel spoří, jestli má impulzivní výdaje, jestli má finanční polštář na nečekané výdaje. Bez toho je to jen kalkulačka, ne chytrý ukazatel."

Radek: „To je ale výrazně komplexnější. Pro analýzu chování bychom potřebovali kategorizaci transakcí, detekci patterns... Pro MVP bych navrhoval jednodušší přístup --- poměr příjmů a výdajů, stav úvěrového zatížení, výše zůstatku relativně k průměrným měsíčním výdajům."

Martin: „Ale to je hloupé. To si spočítá každý na kalkulačce. Kde je přidaná hodnota?"

Radek: „Přidaná hodnota je v tom, že to děláme za uživatele automaticky a vizualizujeme to. Pro MVP to stačí. Behaviorální analýzu přidáme ve fázi 2, až budeme mít kategorizační model."

Jana: „Souhlasím s Radkem. Pro MVP základní metriky, chování později."

Martin: „No... ale trvám na tom, aby architektura počítala s rozšířením. A aby to v roadmapě bylo jako fáze 2, ne někdy možná."

Jana: „Fajn, zapíšeme. Pojďme k vizualizaci. Lucie?"

Lucie: „Z UX pohledu --- jednoduchý barevný kruh na home screenu, číslo uprostřed. Zelená, oranžová, červená. Po kliknutí detail s rozpadem faktorů."

Martin: „S tím souhlasím. Ale ta škála musí být 0--100, žádné zjednodušování na tři barvy a hotovo. Uživatel potřebuje granularitu --- je rozdíl, jestli má 45 nebo 65."

Lucie: „Hmm, v UX výzkumech se ukazuje, že uživatelé mají problém interpretovat jemné škály u finančních produktů. Většina preferuje jednodušší sdělení. Ale nemám ještě data specificky pro náš use case, tak to zatím nechme."

Jana: „OK, škála 0--100 jako výchozí, ale UX to ověří ve výzkumu. Pojďme dál --- messaging. Jak budeme komunikovat výsledky?"

Martin: „Upřímně. Když je někdo na 30, tak mu řekneme, že má problém. Nemůžeme tvrdlit člověku, který utrácí víc než vydělá, že je na tom dobře."

Jana: „Moment --- na boardu jsme se dohodli, že messaging bude **vždy motivační, nikdy negativní**. Nechceme, aby se uživatelé cítili špatně a přestali appku používat."

Martin: „Ale to je lhaní! Když je někdo v průšvihu, musíme mu to říct. Jinak ta funkce nemá smysl."

Jana: „Neříkám, že budeme lhát. Říkám, že to podáme pozitivně. Místo 'Vaše finance jsou v kritickém stavu' řekneme 'Máte prostor ke zlepšení --- tady jsou tipy'."

Martin: „To je eufemismus na druhou. Ale fajn, ať se k tomu vyjádří UX."

Lucie: „Na to bychom měli dělat A/B test s uživateli. Nemám na to teď jednoznačnou odpověď."

Jana: „Dobře, parkujeme. Ondřeji, ještě notifikace."

Martin: „Ano! Chci **denní push notifikaci** s aktuálním skóre. Každý den ráno --- 'Vaše finanční skóre dnes: 72, +3 oproti včerejšku.' Tohle udrží engagement."

Jana: „Denně? To je agresivní. Já bych navrhovala maximum jednou týdně, jinak to lidi budou vnímat jako spam a vypnou si notifikace úplně."

Martin: „Ale denně! Podívejte se na fitness appky --- Fitbit, Apple Health --- ty posílají data denně a lidi to milují."

Lucie: „Fitness appky jsou trochu jiná kategorie. Finance jsou citlivější téma. Ale nemám data, nechci spekulovat."

Jana: „Pojďme to nechat na UX výzkum. Zatím zapíšeme jako otevřený bod."

Martin: „Fajn. Ale ještě jedna věc --- **sociální sdílení**. Uživatel by měl mít možnost sdílet svoje skóre na sociální sítě. 'Moje finanční skóre je 85!' To by mohlo být virální."

Ondřej: „To... by znamenalo sdílení finančních údajů na sociální sítě? To je z privacy pohledu dost odvážné."

Martin: „Uživatel to sdílí sám, dobrovolně. To není problém."

Jana: „Hm, nevím. Museli bychom to ověřit s compliance. A hlavně --- chtějí to uživatelé?"

Martin: „Jistě že chtějí! Lidi se rádi chlubí."

Lucie: „No, to bych netvrdila tak jednoznačně, ale můžeme to ověřit. Zapíšu si to."

Jana: „Dobře. Ještě --- cílová skupina. Kdo bude vidět ukazatel?"

Martin: „Všichni retail klienti. Každý, kdo má osobní účet."

Ondřej: „A co nové klienty, kteří mají účet třeba týden? Nebudeme mít dost dat na smysluplný výpočet."

Radek: „To je dobrý bod. Pro rozumný výpočet bych řekl, že potřebujeme minimálně 3 měsíce transakční historie, ideálně 6 měsíců."

Martin: „Takže novým klientům to neukážeme? To je špatné, je to první dojem z appky."

Jana: „Můžeme jim ukázat omezenou verzi, třeba jen na základě zůstatku. Ale to je detail, vyřešíme v rámci design phase."

Ondřej: „OK, mám akční body:
- Data Science: definice výpočetních vstupů a první model pro MVP (Radek)
- UX: wireframy --- home screen kruh, detail breakdown, messaging (Lucie)
- UX: naplánovat výzkum --- škála, notifikace, messaging, sociální sdílení (Lucie)
- IT analýza: ověřit dostupnost dat přes account-data-api, připravit seznam API (Ondřej)
- QA: začít přemýšlet o test scénářích (Karolína)
- PM: ověřit naming s compliance --- 'skóre' vs. 'ukazatel' (Jana)"

Jana: „Technická schůzka je ve středu, tam probereme architekturu. Díky všem."

---

[pozn. zapisovatele: Po formálním ukončení schůzky ještě probíhala neformální diskuze u kávovaru. Martin říkal, že chce, aby se ukazatel **aktualizoval v reálném čase** --- jakmile uživatel utratí peníze kartou, skóre by se mělo okamžitě změnit. „Jako tachometr, live." Jana namítala, že to technicky asi nepůjde, ale Martin řekl, že „to je úkol pro architekta, ne pro PM." Nedomluvili se. Zároveň Martin zmínil, že s CMO už řešili kampaň a název „Vaše finanční skóre" je prý definitivní. Jana na to reagovala, že se jí to nezdá, ale nic dalšího neřekla.]
