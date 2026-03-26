# Tech poznámky --- financial health service / integrace

**Autor:** Tomáš H. (Solution Architect)
**Datum:** 8. 5. 2025
**Status:** draft, nekompletní

---

## Datové zdroje

### Account Data API
- REST, interní, rate limit **200 req/min per API key** (sdílený, NE per user!)
- Při překročení: 429 + 60s cooldown
- Response time: průměr 800 ms, peak **3--5 s** (Po ráno, 1. pracovní den v měsíci)
- Vrací: zůstatky (BÚ, SÚ), příchozí/odchozí transakce, standing orders
- **NEVRACÍ** pending transakce --- pouze settled
- Max 90 dní historie v jednom callu, stránkování po 50 záznamech
- Sdílené účty: jiná response struktura (pole holders), **nepodporujeme v MVP**

### Loan Service API
- REST, jiný systém (core banking modul Loans)
- Data: aktivní úvěry, zůstatky, splátky, historie splátek
- **Nightly sync** z core banking --- data mohou být až **24 hodin stará**
- Pokud klient splatí úvěr, reflektuje se to nejdříve příští den
- Rate limit: 50 req/min (přísnější než account data)
- Není přístupný z K8s clusteru přímo --- jde přes API gateway, vyžaduje service account s elevated permissions. Request na permissions: **cca 2 týdny**.

### Kafka topics
- `account.balance.changed` --- existuje, fire-and-forget, žádná garance doručení. Core banking tým provozuje best-effort. **Nedoporučuji** pro kritické funkce.
- `loan.payment.processed` --- NEEXISTUJE. Loan service nemá event bus.

## Architektura

```
Mobile App → API Gateway → financial-health-service → Redis (cache)
                                                    → account-data-api
                                                    → loan-service-api
                                                    → calculation-engine (interní modul)
```

- financial-health-service: Kotlin, K8s, standardní deployment
- Cache: Redis, TTL 24h, batch refresh jednou denně (plánovaný čas: 02:00--06:00)
- Calculation engine: pro MVP rule-based, oddělený modul, vyměnitelný za ML model ve fázi 2

## API endpointy

- `GET /users/{id}/financial-health` --- skóre (číslo 0--100, barva, textový popis)
- `GET /users/{id}/financial-health/details` --- breakdown faktorů
- `POST /financial-health/calculate` --- trigger on-demand výpočtu (interní)
- `GET /financial-health/batch/status` --- monitoring

## Výpočet (MVP)

Pro MVP rule-based výpočet:
- Vstup 1: Poměr příjmů a výdajů (váha: ???)
- Vstup 2: Výše zůstatku relativně k měsíčním výdajům (váha: ???)
- Vstup 3: Úvěrové zatížení --- poměr splátek k příjmům (váha: ???)
- Vstup 4: Trend --- zlepšuje se / zhoršuje / stagnuje (váha: ???)

**KDO DEFINUJE VÁHY? Business nebo Data Science? → NEROZHODNUTO, čeká se na Martina.**

## Známé problémy

- **Batch pro 500k uživatelů**: s rate limitem 200/min na account-data-api trvá batch ~42 hodin. MUSÍME buď dostat vyšší limit, nebo batch rozložit. Požádáno o zvýšení limitu --- **odpověď core banking: nejdříve za 3 týdny**.
- **Cold start po nasazení**: cache prázdná, všichni uživatelé dostanou fallback. Bootstrap batch potřebuje min. 2 dny.
- **Loan data stará 24h**: score nemusí odpovídat aktuální realitě. Pokud se to klient dozví, může to podkopat důvěru.
- **Existující loan scoring**: interní loan scoring model pro spotřebitelské úvěry používá JINÉ váhy a JINÉ hodnocení stejných vstupů. Klient může dostat **protichůdné signály**. MUSÍME vyřešit komunikačně, alespoň disclaimerem.

## Naming conflict

Petr říkal, že **marketing už připravil launch kampaň s názvem „Vaše finanční skóre"** --- včetně bannerů, landing page, push notifikace. Ale **compliance řekla, že slovo „skóre" nemůžeme použít** (viz email od Evy). Marketing o tom zatím neví. **URGENTNĚ VYŘEŠIT.**

## Otevřené otázky

- [ ] Kdo definuje váhy výpočtu? Business / Data Science / joint? → **NIKDO NEROZHODL**
- [ ] Co zobrazit uživateli bez dostatečné historie (< 6 měsíců)? → **NIKDO NEROZHODL**
- [ ] Jak přistupovat ke sdíleným účtům? → odloženo, ale co joint owners?
- [ ] Multi-currency (EUR účty) → odloženo na po MVP
- [ ] Přistupnost: stávající kruhová komponenta v George není přístupná pro screen readery (info od Lucie). Kdo to opraví?
- [ ] Co se stane, když API vrátí neúplná data? (timeout, partial response) → fallback strategie není definovaná
- [ ] Monitoring accuracy modelu --- kdo to bude dělat? DS tým nemá kapacitu na ongoing monitoring
- [ ] Service account pro loan-service-api --- kdo požádá? → **NEŘEŠENO**
- [ ] Jak se budou lisit váhy mezi architektem a věkových skupin? Radek zmiňoval jiné patterny u mladých -- starších? Chybí segmentace.

## Pro trénink ML modelu (fáze 2)

- GDPR: nelze použít produkční data bez anonymizace
- ETL pipeline na anonymizaci **NEMÁME**, museli bychom vybudovat
- Odhad: 4--6 týdnů jen na pipeline
- Data retention: výsledky analýzy musí mít definovanou dobu retence --- zatím nespecifikováno
