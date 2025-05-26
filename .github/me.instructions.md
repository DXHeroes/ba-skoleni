# Personalizované AI Instrukce - Workshop Template

## 🎯 Co jsou personalizované instrukce?

Personalizované instrukce jsou **specifické pokyny pro konkrétní úkoly nebo projekty**. Na rozdíl od globálních instrukcí můžete:

- ✅ Přidat k jednotlivým chatům podle potřeby
- ✅ Vytvořit pro různé role (junior/senior analytik)
- ✅ Přizpůsobit konkrétním projektům nebo klientům
- ✅ Použít pro specifické fáze projektu (EDA, modeling, reporting)

## 📝 Workshop úkol

**Vytvořte si vlastní personalizované instrukce!**

### Krok 1: Vyberte si scénář
- [ ] **Junior analytik** - potřebuje více vysvětlení a kontrol
- [ ] **Senior analytik** - chce optimalizovaný a pokročilý kód  
- [ ] **EDA analýza** - zaměření na explorativní analýzu
- [ ] **Reporting** - tvorba reportů a prezentací
- [ ] **Vlastní**: _______________

### Krok 2: Vyplňte šablonu níže

## 📋 Šablona pro vaše instrukce

```markdown
# Název vašich instrukcí: _______________

## Kontext a účel
TODO: Popište kdy a proč tyto instrukce používat
Příklad: "Pro začínající analytiky, kteří potřebují více vysvětlení"

## Specifické pokyny
TODO: Přidejte konkrétní pokyny
- Pokyn 1: _______________
- Pokyn 2: _______________
- Pokyn 3: _______________

## Styl kódu
TODO: Definujte preferovaný styl
Příklad:
- Používej verbose názvy proměnných
- Přidávaj komentáře k každému kroku
- Rozděl složité operace do více kroků

## Příklad kódu
```python
# TODO: Přidejte ukázkový kód
# Například:
# print("Načítám data...")
# df = pd.read_csv('data.csv')
# print(f"Načteno {len(df)} řádků")
```

## Co se vyhnout
TODO: Seznam věcí, které nedělat
- _______________
- _______________

## Dodatečné poznámky
TODO: Další užitečné informace
_______________
```

## 💡 Inspirace pro různé role

### Pro začátečníky:
- Více komentářů a vysvětlení
- Kontroly dat na každém kroku
- Postupné workflow
- Varování před častými chybami

### Pro pokročilé:
- Optimalizovaný kód
- Pokročilé techniky
- Method chaining
- Performance optimalizace

### Pro EDA:
- Strukturovaný přístup k analýze
- Automatizované kontroly
- Vizualizační workflow
- Statistické testy

## 🔧 Jak použít vaše instrukce

### Metoda 1: Přidat k chatu
1. Otevřete chat s AI asistentem
2. Nahrajte váš instruction soubor
3. AI bude používat tyto instrukce pro konverzaci

### Metoda 2: Uložit do projektu
1. Vytvořte soubor v `.github/instructions/`
2. Pojmenujte ho popisně (např. `moje-instrukce.md`)
3. Odkazujte na něj podle potřeby

## 📁 Doporučená struktura

```
.github/instructions/
├── junior-analyst.md      # Pro začátečníky
├── senior-analyst.md      # Pro pokročilé  
├── eda-workflow.md        # Pro EDA
├── reporting.md           # Pro reporty
└── moje-instrukce.md      # Vaše vlastní
```

## 🎓 Workshop poznámky

```markdown
TODO: Během workshopu si zapisujte:

Co jsem vyzkoušel/a:
- _______________
- _______________

Co fungovalo dobře:
- _______________
- _______________

Co bych chtěl/a změnit:
- _______________
- _______________

Zajímavé návrhy od AI:
- _______________
- _______________
```

## 💡 Tipy pro úspěch

### ✅ Dobré praktiky:
- **Buďte specifičtí** - obecné pokyny jsou méně užitečné
- **Přidejte příklady** - ukažte konkrétní kód
- **Testujte instrukce** - ověřte, že fungují
- **Iterujte** - postupně vylepšujte

### ❌ Čeho se vyhnout:
- Příliš dlouhé instrukce
- Protichůdné pokyny  
- Příliš obecné formulace
- Zastaralé informace

---

**Kompletní příklady najdete v**: `.github/instructions.examples/`

**Tip**: Začněte jednoduše a postupně přidávejte detaily!
