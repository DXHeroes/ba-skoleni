**Ukázka možného postupu (kritická analýza / adversarial reading):**

Když dostanete více podkladů od různých lidí a z různých období, je pravděpodobné, že si budou protiřečit. AI vám může pomoci tyto rozpory systematicky odhalit — ale musíte ji k tomu explicitně navést. Bez správného zadání bude AI rozpory ignorovat a pokusí se vytvořit „hladký" souhrn.

### Krok 1: Načíst všechny podklady najednou

Základní chyba je zpracovávat dokumenty jeden po druhém. Místo toho přidejte do kontextu **všechny dokumenty najednou** (v Copilotu jako přílohy, v ChatGPT jako vložený text) a řekněte AI, že jde o podklady k jednomu projektu.

### Krok 2: Požádat o adversarial analýzu

Klíčová technika: místo „shrň mi tyto dokumenty" použijte **adversarial prompt** — řekněte AI, aby **aktivně hledala problémy**:

> „Projdi tyto podklady k projektu a najdi VŠECHNY případy, kde si dva dokumenty nebo dva stakeholdeři protiřečí. U každého rozporu uveď:
> 1. O co jde
> 2. Co říká dokument/osoba A
> 3. Co říká dokument/osoba B
> 4. Kde přesně to je (název dokumentu, kdo to řekl)
>
> Hledej i implicitní rozpory — např. když jeden dokument předpokládá něco, co jiný dokument vylučuje, i když to přímo neříká."

Tímto přístupem AI přepnete z režimu „shrň" do režimu „kritizuj". Výsledek bude výrazně užitečnější pro analytickou práci.

### Krok 3: Nechat AI identifikovat otevřené otázky

Na rozdíl od rozporů (kde dva lidé říkají různé věci) jsou **otevřené otázky** místa, kde se nikdo nevyjádřil nebo kde diskuze skončila bez závěru:

> „Teď projdi podklady znovu a najdi všechny otázky, na které zatím nikdo neodpověděl, nebo témata, kde diskuze skončila slovy 'vyřešíme příště' nebo 'parkujeme'. Uveď, v jakém dokumentu se to objevilo."

### Krok 4: Syntéza a doporučení

Teprve po identifikaci rozporů a otevřených otázek můžete požádat AI o návrh řešení:

> „Na základě identifikovaných rozporů navrhni u každého doporučení, jak ho vyřešit. Zohledni regulatorní omezení (mají přednost), technickou proveditelnost a uživatelský výzkum."

### Proč tato technika funguje

Standardní shrnutí „zhladí" konflikty — AI se snaží najít kompromis a prezentovat koherentní obraz. To je nebezpečné, protože analytik pak pracuje s falešným konsensem. Adversarial přístup naopak **konflikty zviditelní**, což je přesně to, co analytik potřebuje — ne odpovědi, ale správné otázky.

### Bonus: Propojení s předchozími technikami

- **Meta-prompting (cvičení A):** Můžete nejdřív požádat AI, aby navrhla prompt pro kritickou analýzu — „Navrhni mi prompt, který z těchto 6 dokumentů systematicky vytáhne všechny rozpory."
- **Chain of reasoning (cvičení B):** Můžete požádat AI, aby nejdřív popsala svůj postup — „Jak bys postupoval/a při hledání rozporů v těchto podkladech? Napiš mi postup, pak ho proveď."
- **Iterativní dotazování (cvičení C):** Po první analýze se můžete ptát dál — „U rozporu #3 (škála 0-100 vs. semafor): jaké jsou argumenty pro a proti každé variantě? Co říkají UX výzkumy obecně?"
