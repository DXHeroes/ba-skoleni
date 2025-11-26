## Cvičení B: Anomálie v datech

### Uživatelský příběh: Anomálie v datech

Zápis ze schůzky

Jana (analytik): "V posledním exportu z DW nám vyskočily regionální rozdíly — Evropa +250 %, Asie -70 %. Nahlásila jsem to, protože to nevypadá normálně."

Petr (manažer): "Potřebuji stručné vysvětlení — jestli jde o chybu v datech nebo o reálný byznysový trend."

Eva (data engineer): "V té periodě proběhla migrace části uživatelů na nové účty. V surovém exportu jsou duplicitní ID a několik záznamů bez timestampu — to může zkreslit agregáty."

Tomáš (marketing): "My jsme spustili kampaň pouze v Evropě v té době — to může vysvětlit nárůst v EU, ale ne pokles v Asii."

Lukáš (lead): "Zapišme pouze fakta a kontext."

Tomáš: "Souhlasím, do zápisu patří jen fakta a kontext."

Petr: "Dobře. Necháme tu jasně zaznamenané, co víme."

Jana: "Počkejte, ať to máme v zápisu správně… Je ta tabulka v Metabase už přepočítaná? Minule tam bylo něco jiného."

Eva: "Je, ale jenom za posledních 24 hodin. Tyhle exporty jsou z celého měsíce. A mimochodem, někdo mi přejmenoval dashboard, takže jsem ho chvíli vůbec nemohla najít."

Tomáš: "To jsem byl asi já, přidal jsem si tam svoje značky, abych to rychleji poznal. Můžeme se na to podívat po callu?"

Petr: "Prosím vás, řešme teď jenom tu anomálii, ať to stihneme do půl hodiny. K obecnému bordelu v dashboardech si uděláme zvláštní slot."

Lukáš: "Jo, a hlavně neřešme teď, jak často se mají dělat exporty. To je jiný úkol, ať se nám to tady nemíchá."

Tomáš: "Můžu se jenom rychle zeptat, jestli někdo ví, proč mi nejdou notifikace z Jiry? Vůbec mi to nechodí do mailu."

Petr: "Tohle je přesně ta věc, která sem nepatří. Napiš to prosím do Slacku na #it-support."

Poznámky během schůzky (shrnutí informací):
- Evropa: nárůst ~250 % v agregátu.
- Asie: pokles ~70 %.
- Migrace uživatelů proběhla ve stejné periodě.
- V surovém exportu se objevují duplicitní ID a některé záznamy mají chybějící timestampy.
- Marketingová kampaň cílená na Evropu v daném období.
