# Emailový thread --- Změna priorit + Compliance

**Od:** Tomáš K. (CTO)
**Komu:** Jana P., Martin D.
**Kopie:** DL-FinancialHealth-Core, Eva M. (Legal)
**Datum:** 19. 5. 2025, 7:41
**Předmět:** Finanční ukazatel --- úprava priorit a timeline

Jano, Martine,

po včerejším executive review musím přeprioritizovat. Dostali jsme tlak na implementaci nových AML požadavků (viz níže zpráva od Evy), což nám zabere kapacitu na backendu.

V praxi to znamená:
- Timeline pro Finanční ukazatel se zkracuje --- **MVP musí být hotové do 4 týdnů od kickoffu**, ne do 6 týdnů. Důvod: chceme to stihnout před červnovou boardovou prezentací, kde to chceme ukázat jako příklad inovace.
- Backend kapacita bude omezenější, protože část týmu půjde na AML compliance.
- Prosím zrevidujte scope a navrhněte, co je realisticky achievable.

Nechci říkat „ořežte to na kost", ale musíme být pragmatičtí. Core funkčnost ukazatele musí fungovat, zbytek se může dodělat v další fázi.

Ještě jedna věc --- Eva dole zmiňuje závažné regulatorní body kolem **automatizovaného profilování**. Prostudujte si to a na příští schůzce to chci mít vyřešené.

Tomáš

---

**Přeposlal:** Tomáš K.
**Původní odesílatel:** Eva M. (Legal & Compliance)
**Datum původní zprávy:** 18. 5. 2025, 16:12
**Předmět:** Regulatorní poznámky k projektu Finanční skóre

Tomáši,

posílám shrnutí regulatorních bodů, které je potřeba zohlednit u projektu Finanční skóre (nebo jak tomu říkáte --- viděla jsem v JIRA i „Finanční ukazatel" a „Financial Health Score" a „Finanční zdraví" --- prosím **sjednoťte název**):

**Pojem „skóre" a regulace:**
- Použití slova „skóre" v kontextu hodnocení finančního stavu klienta může být vykládáno jako **úvěrový skóring**, který podléhá regulaci ČNB. Pokud produkt vypadá jako credit scoring (i když jím formálně není), vystavujeme se riziku, že regulátor bude požadovat licenci.
- **Doporučení:** Vyhnout se slovu „skóre" v uživatelském rozhraní i v komunikaci. Použít neutrální termín --- „ukazatel", „přehled", „index".
- Pokud budeme pojem „skóre" používat, potřebujeme formální právní stanovisko, které potvrdí, že nejde o regulovanou činnost. Odhad: **4--6 týdnů** na zpracování.

**GDPR a automatizované profilování (Článek 22):**
- Výpočet finančního ukazatele na základě transakčních dat klienta představuje **automatizované rozhodování / profilování**. Podle GDPR Článek 22 má subjekt údajů právo nebýt předmětem automatizovaného rozhodování, které má na něj právní účinky nebo se ho významně dotýká.
- I když náš ukazatel nemá přímé právní účinky, **pokud bude vizuálně vypadat jako hodnocení** (škála 0--100, barvy), klient ho může vnímat jako hodnocení ze strany banky, což spadá pod „významné dotčení".
- **Požadavky:** Explicitní opt-in souhlas (ne předškrtnutý checkbox), možnost kdykoliv odvolat souhlas, právo na vysvětlení logiky výpočtu, právo na lidský přezkum.
- Jednorázový generální souhlas typu „souhlasím s analýzou" NESTAČÍ. Musí být granulární --- souhlas s analýzou transakcí, souhlas se zobrazením ukazatele, souhlas s notifikacemi.

**Analýza transakcí a spending patterns:**
- Pokud budeme analyzovat „finanční chování" (jak zmiňoval Martin v emailu --- pravidelnost spoření, impulzivní nákupy), jdeme výrazně dál než jen zobrazení zůstatků. Tohle je plnohodnotné profilování a vyžaduje **Data Protection Impact Assessment (DPIA)**.
- DPIA trvá minimálně **3--4 týdny**. Bez dokončené DPIA nemůžeme tuto funkci spustit.

**Transparentnost výpočtu:**
- Martin psal, že chce „kompletní vzorec a váhy". Z compliance pohledu je tohle **dvousečné**: na jednu stranu máme povinnost poskytnout vysvětlení logiky (GDPR právo na vysvětlení), na druhou stranu zveřejnění kompletního vzorce může umožnit jeho **gaming** (uživatel si uměle zlepší skóre bez reálného zlepšení finanční situace).
- **Doporučení:** Poskytnout srozumitelné vysvětlení faktorů a jejich obecný vliv (pozitivní/negativní), ale NE konkrétní váhy a vzorec.

**Sdílení finančních údajů na sociálních sítích:**
- Slyšela jsem, že Martin chce umožnit sdílení „finančního skóre" na sociální sítě. Z compliance pohledu je tohle **výrazně problematické**. Jakékoliv sdílení finančních údajů mimo zabezpečený kanál banky vyžaduje explicitní souhlas a musíme zajistit, že sdílená data nelze zneužít (např. pro social engineering). Navíc pokud je sdílená hodnota vnímána jako „rating", otevíráme se riziku, že třetí strany (zaměstnavatelé, pronajímatelé) budou po klientech toto číslo požadovat. **Nedoporučuji implementovat.**

**Informační povinnost:**
- V UI musí být jasně uvedeno, že ukazatel generuje algoritmus, ne finanční poradce. Musíme se vyhnout tomu, aby klient měl dojem, že jde o personalizované finanční poradenství (vyžadovalo by licenci MiFID).
- Disclaimer musí být **viditelný na hlavní obrazovce**, ne schovaný v podmínkách.

Pokud budete potřebovat detailnější analýzu, dejte vědět. Ale tohle jsou **hard constraints**, které nelze obejít.

Eva

---

**Od:** Jana P.
**Komu:** Tomáš K.
**Kopie:** Martin D.
**Datum:** 19. 5. 2025, 9:15
**Předmět:** RE: Finanční ukazatel --- úprava priorit a timeline

Tomáši,

rozumím situaci. Ale potřebuju jasno v několika věcech:

a) Když říkáš „core funkčnost musí fungovat" --- myslíš tím jen zobrazení ukazatele na základě základních dat (zůstatky, příjmy, výdaje, úvěry), nebo i tu analýzu finančního chování, kterou chce Martin?

b) Z toho, co píše Eva, vyplývá, že analýza chování vyžaduje DPIA (3--4 týdny). To se do 4 týdnů nevejde, pokud chceme i implementovat. Navrhuji pro MVP jen základní metriky, chování odložit.

c) A to slovo „skóre" --- Martin ho používá všude, marketing už prý chystá kampaň „Vaše finanční skóre". Ale Eva říká, že to nemůžeme. Tohle musíme URGENTNĚ vyřešit, než se to dostane dál.

d) Ten souhlas --- budeme potřebovat consent flow v appce. To je práce na FE i BE, nikdo to zatím neplánoval.

Dej mi vědět, ať se podle toho zařídíme.

Jana
