# GitHub Copilot Instructions pro Datové Analytiky

## 📋 Co je tento soubor?

Tento soubor obsahuje instrukce pro GitHub Copilot, které mu pomáhají generovat relevantnější a kvalitnější kód pro datovou analýzu. Copilot automaticky čte tyto pokyny při každém spuštění a používá je jako kontext pro své návrhy.

## 🎯 Hlavní zaměření projektu

**Datová analýza v Pythonu** s důrazem na:
- **Pandas** pro manipulaci dat
- **NumPy** pro numerické výpočty  
- **Matplotlib/Seaborn** pro vizualizace
- **Jupyter Notebooks** pro explorativní analýzu

## 🔧 Základní pokyny pro Copilot

### Styl kódu
- Dodržuj **PEP 8** konvence
- Používej **popisné názvy proměnných** (např. `sales_data` místo `df`)
- Přidávaj **komentáře** vysvětlující logiku
- Preferuj **čitelnost před stručností**

### Pandas best practices
- Používej **method chaining** kde je to vhodné
- Preferuj **vectorizované operace** před loops
- Při filtrování používej **boolean indexing**
- Pro transformace dat používej **apply()** nebo **map()**

### Zpracování dat
- Vždy **kontroluj chybějící hodnoty** před analýzou
- Používaj **try-except** bloky pro robustní kód
- **Validuj vstupní data** před zpracováním
- Dokumentuj **předpoklady o datech**

## 💡 Konkrétní příklady instrukcí

```python
# ✅ Preferovaný způsob načítání dat
df = pd.read_csv('data.csv', encoding='utf-8', parse_dates=['date_column'])

# ✅ Preferovaný způsob čištění dat
df_clean = (df
    .dropna(subset=['important_column'])
    .fillna({'numeric_column': 0})
    .astype({'category_column': 'category'})
)

# ✅ Preferovaný způsob agregace
summary = (df
    .groupby('category')
    .agg({
        'sales': ['sum', 'mean'],
        'quantity': 'count'
    })
    .round(2)
)
```

## 📊 Specifické pokyny pro vizualizace

- Vždy přidej **titulky a popisky os**
- Používej **konzistentní barevné schéma**
- Nastav **vhodnou velikost figury** (plt.figure(figsize=(10, 6)))
- Přidej **grid** pro lepší čitelnost
- Ulož grafy ve **vysokém rozlišení** (dpi=300)

## 🚀 Pokyny pro Jupyter Notebooks

- Každá buňka by měla mít **jasný účel**
- Používaj **markdown buňky** pro dokumentaci
- **Očísluj a pojmenuj** jednotlivé kroky analýzy
- Na konci každé sekce přidej **shrnutí výsledků**

## ⚠️ Co se vyhnout

- Nepoužívej `inplace=True` bez dobrého důvodu
- Vyhni se `for` cyklům pro operace s DataFrame
- Nepoužívaj `eval()` nebo `exec()` pro zpracování dat
- Nevytvářej příliš dlouhé method chains (max 5-6 metod)

## 🎓 Tipy pro workshop účastníky

1. **Experimentujte** s různými formulacemi pokynů
2. **Testujte** jak Copilot reaguje na vaše změny
3. **Sdílejte** zajímavé návrhy s ostatními
4. **Upravujte** tento soubor podle vašich potřeb

## 📝 Jak přidat vlastní pokyny

Přidejte nové pokyny do této sekce:

```markdown
# Můj vlastní pokyn pro Copilot
- Popis toho, co chcete aby Copilot dělal
- Konkrétní příklad kódu
```

---
*Tento soubor je živý dokument - upravujte ho podle potřeb vašeho projektu!*