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

# Cvičení pokročilejšího promptování

Níže máte **uživatelské příběhy**. Každý obsahuje **důležité i nepodstatné informace**.
Cílem je naučit se různé techniky pokročilého promptování.
Postup bude vždy stejný:

1. Nejprve zkuste úkol vyřešit **bez speciální techniky**.
2. Pak si vysvětlíme novou techniku a vyzkoušíte to znovu.

---

## A. Meta prompting

### Uživatelský příběh: Backlog z obchodních požadavků

Úkol
```
Vaším úkolem je připravit backlog. Požadavky je potřeba rozdělit do epik a user stories,  
určit priority metodou MoSCoW a doplnit závislosti (např. API, data ve skladu).  
Výstup má být v Markdownu.
```
Příběh
```
Ráno dorazil od produktového manažera e-mail s volně sepsanými požadavky.  
Základní body jsou: zobrazit finanční skóre, stručně vysvětlit hlavní faktory,  
posílat notifikace při větších změnách a volitelně exportovat data pro reporting.  

Manažer k tomu připsal, že by bylo super, kdyby aplikace jednou uměla i predikovat budoucí vývoj skóre,  
ale to zatím není priorita. Stejně tak zmínil, že by bylo hezké mít export do PDF pro board meetingy.   

Poznámka: e-mail obsahoval i několik odrážek o tom, že by se mělo zlepšit UX aplikace,  
ale ty nejsou součástí aktuálního zadání.
```

> Nejprve vytvořte prompt tak, jak byste ho normálně napsali.

---

### Co je meta prompting?

Meta prompting znamená, že místo psaní výsledného promptu **nejprve vytvoříte prompt, který pomůže vygenerovat samotný prompt**.
Je to způsob, jak AI donutit, aby vám pomohla s formulací úkolu dřív, než ho samotného spustíte.

Příklad:
„Napiš mi návrh promptu, který pomůže AI vytvořit backlog podle zadání. Prompt musí obsahovat jasnou roli, kontext, vstupy, výstupy a strukturu.“

---

> Teď zkuste příběh znovu, ale použijte **meta prompting** – tedy:

1. nejprve definujte prompt pro generování promptu,
2. pak z něj nechte AI vytvořit výsledný prompt.

#### Tip
- Začni větou, která AI řekne: „Tvůj úkol je vygenerovat prompt.“
- Přidej podmínky: jakou roli má mít výsledný prompt, jaký kontext má obsahovat, co má být vstupem a jaký formát má být výstupem.
- Ujisti se, že výstupem má být **hotový prompt**, který pak půjde použít.

---

## B. Reasoning

### Uživatelský příběh: Anomálie v datech

Úkol
```
Úkol: připravit vysvětlení pro manažera, jestli jde spíš o datový problém, nebo reálný byznysový jev.  
Výstup má být stručný, s doporučením, co dál ověřit.
```

Příběh
```
Analytický tým si všiml, že v posledním exportu z datového skladu jsou výrazné rozdíly v počtu transakcí mezi jednotlivými regiony.  
V Evropě je nárůst o 250 %, v Asii naopak pokles o 70 %.  
Manažer se ptá, jestli jde o reálný trend, nebo o chybu v datech.  

Současně v poznámkách zaznělo, že v systému probíhala migrace části uživatelů na nové účty,  
a že obchodní tým měl marketingovou kampaň zaměřenou jen na Evropu.  
Další informace: v datech se objevuje několik duplicitních ID a některé záznamy mají chybějící časové značky.  
```

> Nejprve zkuste vytvořit prompt bez speciální podpory, který AI požádá o vysvětlení.


---

### Co je reasoning?

Reasoning (řetězec úvah) je technika, kdy AI požádáme, aby **ukázala krok za krokem, jak došla k závěru**.
To pomáhá:

* odhalit chyby v uvažování,
* získat průhlednost (proč AI něco tvrdí),
* snížit riziko zjednodušených nebo povrchních odpovědí.

Typický vzor: *„Nejprve vysvětli, jak bys postupoval krok za krokem, a pak uveď závěr.“*

---

> Teď zkuste znovu vyřešit příběh, ale tentokrát použijte **reasoning**:

* nechte AI vysvětlit svůj myšlenkový postup,
* a až na konci shrnout závěr pro manažera.

#### Tip
- Začni určením role a krátkého kontextu.
- Požádej AI, aby **nejprve popsala postup krok za krokem** (jak uvažuje).
- Pak ať AI vyvodí závěr a doporučení.
- Výstup rozděl na dvě části: „úvaha“ a „shrnutí“.


---

## C. Prompt chaining

### Uživatelský příběh: Analýza churnu

Úkol
```
Manažer chce:  
1. vědět hlavní faktory odchodu klientů,  
2. navrhnout segmenty rizikových klientů,  
3. připravit nápady na retenční opatření.  
```

Příběh
```
Vaše banka chce snížit odchody klientů (churn).  
Máte dataset s údaji o klientech: demografie, využívané produkty, historie transakcí, počet kontaktů se zákaznickou podporou.  

Poznámka: v datech jsou i položky jako „poslední marketingová kampaň“ a „preferovaná barva karty“,  
ty nejsou pro úkol zásadní.  
Manažer potřebuje výsledky jako podklady pro prezentaci na boardu.
```

> Nejprve zkuste napsat prompt, který se snaží odpovědět na vše najednou.

---

### Co je prompt chaining?

Prompt chaining znamená rozdělit složitý úkol do **více kroků** – sérií menších promptů, kde výstup z jednoho slouží jako vstup do dalšího.
Výhody:

* AI zvládne komplexní problém postupně,
* sníží se riziko ztráty detailů,
* lépe se kontroluje kvalita výsledku.

Příklad:

1. „Identifikuj nejdůležitější faktory churnu.“
2. „Na základě těchto faktorů navrhni segmenty rizikových klientů.“
3. „Pro každý segment navrhni retenční opatření.“

---

> Teď zkuste znovu vyřešit příběh, ale s **prompt chainingem** – tedy rozdělit problém na několik jasných kroků a použít výstupy postupně.

#### Tip
- Rozděl velký úkol na několik menších (např. 3 kroky).
- Každý krok nech AI vyřešit samostatně, a výstup použij jako vstup pro další.
- U každého kroku definuj jasný cíl a jednoduchý formát výsledku (seznam, tabulka, krátký text).
- Nakonec spoj dílčí výsledky do jednoho celku.


---

# Reflexe a diskuse

- Jak se lišilo psaní promptu napoprvé a potom s novou technikou?  
- U meta promptingu: pomohlo vám nejdřív definovat, jak má vypadat prompt, než jste ho spustili?  
- U reasoning: bylo užitečné vidět kroky uvažování, nebo to spíše komplikovalo výsledek?  
- U prompt chainingu: co se změnilo, když jste rozdělili velký úkol na menší části?  
- Kde jste cítili, že AI dává lepší a přesnější odpovědi?  
- Která z technik by se vám hodila ve vaší každodenní práci datového analytika?  
- Kdy je lepší být stručný, a kdy naopak strukturovat prompt do více kroků?  

--- 

# Závěr workshopu

Vyzkoušeli jste si tři různé techniky pokročilého promptování:

- **Meta prompting** – když potřebujete nejdřív ujasnit, co má prompt obsahovat.  
- **Reasoning** – když chcete, aby AI ukázala svůj myšlenkový postup, ne jen výsledek.  
- **Prompt chaining** – když je úkol složitý a je lepší ho rozdělit na menší části.  

Cílem nebylo najít jediný „správný“ prompt, ale uvědomit si, že různé techniky vedou k různým druhům výstupů.  
Důležité je umět si vybrat tu, která nejlépe odpovídá danému úkolu.  

V praxi datového analytika to znamená:  
- rychleji odlišit podstatné od šumu,  
- získat průhlednější a ověřitelnější odpovědi,  
- a rozložit složité problémy tak, aby je AI zvládla krok za krokem.  

Zkuste teď přemýšlet, **kde by vám každá technika mohla ušetřit čas nebo zvýšit kvalitu práce**.
