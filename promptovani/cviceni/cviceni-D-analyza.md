## Cvičení D: Kritická analýza protichůdných podkladů

### Uživatelský příběh: Identifikace rozporů a syntéza požadavků

PM ti předal tři podklady k nové funkci a napsal:

```
Ahoj,

posílám ti podklady k projektu digitálního onboardingu — email od business ownera,
výtah ze schůzky a poznámku od compliance. Potřebuju, abys to prošel/a a připravil/a
přehled toho, na čem se tým shoduje a na čem ne.

Vím, že si tam lidi protiřečí — potřebuju to mít černé na bílém, abychom
na příští schůzce mohli rozhodnout. U každého rozporu prosím napiš,
kdo říká co a v jakém dokumentu, a jestli máš doporučení, tak ho přidej.

Taky mi vypiš otevřené otázky a rizika.

Formát: Markdown, ať to můžu rovnou hodit do Confluence.

Díky,
Dana, PM
```

---

### Podklad 1: Email od business ownera

**Od:** Vojtěch R. (Business Owner)
**Komu:** DL-Onboarding-Core
**Datum:** 12. 5. 2025, 9:30
**Předmět:** Digitální onboarding --- vize a požadavky

Ahoj,

chceme kompletně přepracovat onboarding nových klientů v mobilní appce. Cíl: klient si otevře účet **do 5 minut**, bez návštěvy pobočky, bez papírových formulářů.

Klíčové požadavky:
- Ověření identity přes **selfie + scan dokladu** (občanka nebo pas). Žádné video hovory --- uživatelé je nesnáší, máme na to data z průzkumu.
- Celý proces musí být **na jedné obrazovce** --- žádný wizard s 8 kroky. Jeden formulář, jedno odeslání, hotovo.
- Podporujeme **všechny typy klientů** --- osobní účty, firemní, studenti, cizinci s povolením k pobytu.
- Notifikace o stavu žádosti: **real-time push notifikace** při každé změně stavu (přijato, ověřuje se, schváleno/zamítnuto).
- Cíl: **10 000 nových klientů za první měsíc** po spuštění. Marketing už připravuje kampaň „Účet za 5 minut".
- Timeline: MVP do **konce června**.

Vojtěch

---

### Podklad 2: Výtah ze schůzky --- technická architektura

**Datum:** 14. 5. 2025
**Účastníci:** Dana (PM), Marek (Solution Architect), Filip (BE dev), Klára (FE dev)

Marek: „Ověření identity přes selfie + doklad --- budeme muset použít externího providera. Náš interní systém tohle neumí. Integrace s providerem zabere minimálně **6--8 týdnů**, protože potřebujeme projít security review."

Filip: „A ten provider má SLA na response time 30 sekund na jedes ověření. Takže ‚5 minut' celý proces je nerealistické --- jen čekání na ověření identity může trvat minutu, a to pokud nedojde k manuálnímu review."

Klára: „K tomu UI --- ‚jedna obrazovka' pro celý onboarding je z UX pohledu špatný nápad. Máme 15 povinných polí + upload 2 dokumentů + selfie + consent checkbox + GDPR souhlas. Na jedné obrazovce to bude nepřehledné obzvlášť na mobilu. Navrhuji **wizard se 4 kroky**: osobní údaje → dokumenty → selfie → souhrn a odeslání."

Dana: „A co ty firemní účty? Vojtěch psal, že všechny typy klientů."

Marek: „Firemní účty vyžadují **ověření firmy v OR**, kontrolu skutečného majitele a compliance screening. To je úplně jiný flow --- minimálně **3 měsíce** práce navíc. Pro MVP bych je vyřadil."

Filip: „Ještě k notifikacím --- náš notifikační systém **nepodporuje real-time push**. Fronta zpracovává zprávy s průměrnou latencí 10--20 minut. Real-time by vyžadovalo WebSocket implementaci, což je další práce navíc."

Dana: „Takže shrnuji --- Vojtěch chce všechno do konce června, ale integrace identity providera sama o sobě zabere 6--8 týdnů. To se nevejde, budeme muset ořezat scope."

---

### Podklad 3: Vyjádření compliance

**Od:** Romana S. (Compliance Officer)
**Datum:** 15. 5. 2025

Poznámky k projektu digitální onboarding:

1. **Ověření identity:** Selfie + scan dokladu **nestačí** pro plné KYC ověření podle AML zákona. Pro otevření běžného účtu s transakcním limitem nad 1 000 EUR musíme provést buď **video verifikaci**, nebo klient musí navštívit pobočku. Alternativa: otevřít „light" účet s omezeným limitem (max 1 000 EUR/měsíc) na základě selfie + doklad, a plný účet až po video verifikaci nebo návštěvě pobočky.

2. **Cizinci:** Pro cizince s povolením k pobytu potřebujeme ověření v **Registru cizinců**, ke kterému máme přístup pouze přes dávkové zpracování (1× denně). Takže „otevření účtu do 5 minut" pro cizince **není možné** --- minimálně 24 hodin na ověření.

3. **GDPR:** Souhlas se zpracováním biometrických dat (selfie) musí být na **samostatné obrazovce** s jasným vysvětlením. Nesmí být součástí obecného formuláře --- regulátor na tohle klade důraz.

4. **Uchovávání dat:** Scan dokladu smíme uchovávat maximálně **72 hodin** po dokončení ověření. Poté musí být smazán. Toto musí být implementováno automaticky.

5. Název „Účet za 5 minut" v marketingové kampani je **potenciálně klamavý**, pokud proces reálně trvá déle. Doporučuji změnit na vágnejší formulaci.
