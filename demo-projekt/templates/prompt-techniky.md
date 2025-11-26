### Co je meta prompting?

Meta prompting znamená, že místo psaní výsledného promptu **nejprve vytvoříte prompt, který pomůže vygenerovat samotný prompt**.
Je to způsob, jak AI donutit, aby vám pomohla s formulací úkolu dřív, než ho samotného spustíte.

Příklad:
„Napiš mi návrh promptu, který pomůže AI vytvořit backlog podle zadání. Prompt musí obsahovat jasnou roli, kontext, vstupy, výstupy a strukturu.“

---

> Teď zkuste příběh znovu, ale použijte **meta prompting** – tedy:
> 1. nejprve definujte prompt pro generování promptu,
> 2. pak z něj nechte AI vytvořit výsledný prompt.

#### Tip
- Začni větou, která AI řekne: „Tvůj úkol je vygenerovat prompt.“
- Přidej podmínky: jakou roli má mít výsledný prompt, jaký kontext má obsahovat, co má být vstupem a jaký formát má být výstupem.
- Ujisti se, že výstupem má být **hotový prompt**, který pak půjde použít.

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
> * nechte AI vysvětlit svůj myšlenkový postup,
> * a až na konci shrnout závěr pro manažera.

#### Tip
- Začni určením role a krátkého kontextu.
- Požádej AI, aby **nejprve popsala postup krok za krokem** (jak uvažuje).
- Pak ať AI vyvodí závěr a doporučení.
- Výstup rozděl na dvě části: „úvaha“ a „shrnutí“.


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
