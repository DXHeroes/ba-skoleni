# Personalizované AI Instrukce pro Datové Analytiky

## 📖 Co jsou personalizované instrukce?

Personalizované instrukce jsou specifické pokyny, které můžete vytvořit pro různé typy úkolů nebo projekty. Na rozdíl od globálních `copilot-instructions.md`, tyto soubory můžete:

- **Přidat k jednotlivým chatům** podle potřeby
- **Nakonfigurovat pro specifické složky** nebo typy souborů
- **Vytvořit pro různé role** (junior analytik, senior analytik, data scientist)
- **Přizpůsobit konkrétním projektům** nebo klientům

## 🎯 Kdy použít personalizované instrukce?

### Scénáře použití:
- **Specifický projekt** s unikátními požadavky
- **Různé úrovně zkušeností** v týmu
- **Speciální domény** (finance, marketing, zdravotnictví)
- **Různé fáze projektu** (EDA, modeling, reporting)

## 📁 Struktura a organizace

### Doporučené pojmenování:
```
.github/
├── copilot-instructions.md          # Globální instrukce
├── instructions/
│   ├── junior-analyst.md            # Pro začátečníky
│   ├── senior-analyst.md            # Pro pokročilé
│   ├── eda-instructions.md          # Explorativní analýza
│   ├── modeling-instructions.md     # Machine learning
│   ├── reporting-instructions.md    # Tvorba reportů
│   └── finance-domain.md           # Specifická doména
```

## 💡 Příklady personalizovaných instrukcí

### 1. Pro začínající analytiky (`junior-analyst.md`)

```markdown
# Instrukce pro začínající datové analytiky

## Styl kódu
- Vždy přidávej komentáře vysvětlující každý krok
- Používej verbose názvy proměnných (např. `customer_sales_data`)
- Rozděl složité operace do více kroků
- Přidávaj print() statements pro kontrolu mezivýsledků

## Bezpečnostní pokyny
- Vždy zkontroluj shape a dtypes DataFrame před analýzou
- Používaj .head() a .info() pro pochopení dat
- Nikdy nemazej originální data bez zálohy
- Dokumentuj všechny předpoklady

## Příklad kódu:
```python
# Načtení dat s kontrolou
print("Načítám data...")
df = pd.read_csv('data.csv')
print(f"Načteno {len(df)} řádků a {len(df.columns)} sloupců")
print(df.info())
```

### 2. Pro pokročilé analytiky (`senior-analyst.md`)

```markdown
# Instrukce pro pokročilé datové analytiky

## Optimalizace výkonu
- Používej category dtype pro kategorické proměnné
- Implementuj lazy evaluation kde je to možné
- Využívaj vectorizované operace
- Optimalizuj memory usage

## Pokročilé techniky
- Používaj method chaining pro čitelnost
- Implementuj custom aggregation functions
- Využívaj groupby transforms
- Pracuj s MultiIndex kde je to vhodné

## Příklad kódu:
```python
# Optimalizovaná agregace s custom funkcemi
result = (df
    .astype({'category': 'category'})
    .groupby(['category', 'region'])
    .agg({
        'sales': ['sum', 'mean', lambda x: x.quantile(0.95)],
        'customers': 'nunique'
    })
    .round(2)
)
```

### 3. Pro explorativní analýzu (`eda-instructions.md`)

```markdown
# Instrukce pro explorativní datovou analýzu (EDA)

## Struktura EDA
1. **Základní přehled**: shape, dtypes, missing values
2. **Univariate analýza**: distribuce jednotlivých proměnných
3. **Bivariate analýza**: vztahy mezi proměnnými
4. **Multivariate analýza**: komplexní vztahy
5. **Outlier detection**: identifikace odlehlých hodnot

## Vizualizace
- Vždy začni s histogramy a box plots
- Používej correlation heatmapy
- Vytvoř pairplots pro numerické proměnné
- Přidej statistical tests kde je to relevantní

## Template kód:
```python
# EDA template
def basic_eda(df, target_col=None):
    print("=== ZÁKLADNÍ PŘEHLED ===")
    print(f"Shape: {df.shape}")
    print(f"Missing values:\n{df.isnull().sum()}")
    
    print("\n=== NUMERICKÉ PROMĚNNÉ ===")
    print(df.describe())
    
    if target_col:
        print(f"\n=== ANALÝZA TARGET PROMĚNNÉ: {target_col} ===")
        print(df[target_col].value_counts())
```

## 🔧 Jak používat personalizované instrukce

### Metoda 1: Přidání k chatu
1. Otevřete chat s AI asistentem
2. Nahrajte specifický instruction soubor
3. AI bude používat tyto instrukce pro danou konverzaci

### Metoda 2: Automatické načítání (VS Code)
```json
// settings.json
{
    "github.copilot.advanced": {
        "inlineSuggestCount": 3,
        "listCount": 10
    },
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false
    }
}
```

### Metoda 3: Projektové instrukce
Vytvořte `.copilot-instructions.md` v kořenovém adresáři projektu s odkazem na specifické instrukce:

```markdown
# Projekt: Analýza prodejních dat

@include instructions/finance-domain.md
@include instructions/senior-analyst.md

## Specifické požadavky projektu:
- Všechny částky v CZK
- Používej fiscal year (duben-březen)
- Respektuj GDPR při práci s osobními údaji
```

## 🎓 Tipy pro vytváření vlastních instrukcí

### ✅ Dobré praktiky:
- **Buďte specifičtí** - obecné pokyny jsou méně užitečné
- **Přidejte příklady** - ukažte konkrétní kód
- **Testujte instrukce** - ověřte, že fungují jak očekáváte
- **Aktualizujte pravidelně** - instrukce se vyvíjejí s projektem

### ❌ Čeho se vyhnout:
- Příliš dlouhé instrukce (AI má limit kontextu)
- Protichůdné pokyny
- Příliš obecné formulace
- Zastaralé informace

## 📝 Template pro nové instrukce

```markdown
# Název instrukcí

## Kontext
Krátký popis kdy a proč tyto instrukce používat.

## Specifické pokyny
- Konkrétní pokyn 1
- Konkrétní pokyn 2

## Příklady kódu
```python
# Ukázkový kód
```

## Co se vyhnout
- Seznam věcí, které nedělat

## Dodatečné poznámky
Další užitečné informace.
```

---
*Experimentujte s různými přístupy a najděte si styl, který vám nejvíce vyhovuje!*
