## Cvičení B: Analytická dokumentace z požadavků

### Uživatelský příběh: Specifikace nové funkce

Zápis z discovery schůzky k nové funkci v mobilní bankovní aplikaci

Martin (produktový manažer): "Chceme přidat do aplikace něco jako osobního finančního asistenta. Klient by měl vidět přehled svých výdajů a nějaké tipy, jak ušetřit."

Petra (UX designer): "Měli bychom začít s analýzou výdajových kategorií. Klienti chtějí vědět, kam jim peníze odchází — jídlo, doprava, zábava a podobně."

Tomáš (backend developer): "Budeme potřebovat napojení na transakční historii. API máme, ale bude potřeba vyřešit kategorizaci transakcí — ta teď není úplně spolehlivá."

Petra: "A co vizualizace? Grafy, koláče, trendy za poslední měsíce?"

Martin: "Určitě, to je základ. A pak bych chtěl, aby aplikace uměla posílat notifikace typu 'Tento měsíc jsi utratil o 30 % víc za restaurace než obvykle.'"

Jana (analytik): "Máme už nějaká data o tom, jak klienti kategorie používají? Protože minule jsme zjistili, že 40 % transakcí spadá do 'Ostatní'."

Tomáš: "Jo, to je problém. Budeme muset buď vylepšit kategorizační engine, nebo nechat klienty přiřazovat kategorie ručně."

Martin: "Ruční kategorizace by byla nice-to-have, ale ne pro první verzi. Teď potřebujeme hlavně ten základní přehled."

Petra: "Ještě mě napadlo — co export dat? Někteří klienti chtějí svá data stahovat do Excelu."

Martin: "To může počkat. Teď se soustřeďme na core funkcionalitu."

Lucie (compliance): "Nezapomeňte, že u finančních dat musíme řešit GDPR. Pokud budeme analyzovat výdajové vzorce, potřebujeme explicitní souhlas klienta."

Martin: "Dobře, to dáme jako prerekvizitu — consent flow před aktivací funkce."

Tomáš: "A co limity? Myslím, že by klient měl mít možnost nastavit si měsíční budget pro každou kategorii a dostat upozornění, když se blíží limitu."

Martin: "Super nápad, ale to je rozšíření. Zapišme si to jako fázi 2."

Petra: "Mimochodem, víte, že máme nový design systém? Měli bychom použít nové komponenty."

Martin: "To je spíš implementační detail, řešme to až při vývoji."

Jana: "Ještě jedna věc — reporting pro interní potřeby. Chtěla bych mít přehled, kolik klientů funkci aktivovalo a jak ji používají."

Martin: "To je interní analytika, ne součást produktu. Zapíšeme si to bokem."

Shrnutí klíčových požadavků z diskuze:
- Přehled výdajů podle kategorií s vizualizací (grafy, trendy).
- Automatická kategorizace transakcí (využití stávajícího API).
- Notifikace o neobvyklých výdajových vzorcích.
- Consent flow pro GDPR compliance před aktivací.
- Fáze 2: nastavení budgetů a limitů, ruční kategorizace, export dat.
