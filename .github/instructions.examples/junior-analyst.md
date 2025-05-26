# Instrukce pro začínající datové analytiky

## 🎯 Cíl těchto instrukcí
Pomoci začínajícím analytikům psát bezpečný, čitelný a dobře zdokumentovaný kód pro datovou analýzu.

## 📝 Styl kódu

### Názvy proměnných
- Používej **popisné názvy**: `customer_sales_data` místo `df`
- Používej **snake_case**: `total_revenue` místo `totalRevenue`
- Přidej **kontext**: `monthly_sales` místo `sales`

### Komentáře a dokumentace
- **Každý krok** by měl mít komentář
- Vysvětli **proč**, ne jen **co** děláš
- Přidej **očekávané výsledky**

```python
# ✅ Dobrý příklad
# Načítám prodejní data za posledních 12 měsíců
# Očekávám cca 50 000 řádků s 15 sloupci
sales_data = pd.read_csv('sales_2023.csv', encoding='utf-8')
print(f"Načteno {len(sales_data)} řádků")

# Kontrolujem základní informace o datech
print("Základní info o datech:")
print(sales_data.info())
```

## 🔍 Bezpečnostní kontroly

### Vždy před analýzou zkontroluj:
1. **Velikost dat**: `df.shape`
2. **Typy sloupců**: `df.dtypes`
3. **Chybějící hodnoty**: `df.isnull().sum()`
4. **Duplicity**: `df.duplicated().sum()`
5. **Základní statistiky**: `df.describe()`

```python
# Template pro základní kontrolu dat
def check_data_quality(df, dataset_name="dataset"):
    print(f"=== KONTROLA KVALITY DAT: {dataset_name} ===")
    
    # Základní informace
    print(f"📊 Velikost: {df.shape[0]} řádků, {df.shape[1]} sloupců")
    
    # Chybějící hodnoty
    missing = df.isnull().sum()
    if missing.sum() > 0:
        print(f"⚠️  Chybějící hodnoty:")
        print(missing[missing > 0])
    else:
        print("✅ Žádné chybějící hodnoty")
    
    # Duplicity
    duplicates = df.duplicated().sum()
    if duplicates > 0:
        print(f"⚠️  Duplicitní řádky: {duplicates}")
    else:
        print("✅ Žádné duplicity")
    
    print("-" * 50)
```

## 📊 Postupy pro analýzu

### 1. Načítání dat
```python
# Vždy specifikuj encoding a kontroluj výsledek
try:
    data = pd.read_csv('soubor.csv', encoding='utf-8')
    print(f"✅ Data úspěšně načtena: {data.shape}")
except UnicodeDecodeError:
    print("⚠️  Problém s encoding, zkouším cp1250...")
    data = pd.read_csv('soubor.csv', encoding='cp1250')
except FileNotFoundError:
    print("❌ Soubor nenalezen!")
    raise
```

### 2. Čištění dat
```python
# Postupné čištění s kontrolami
print("Původní data:", data.shape)

# Odstranění duplicit
data_clean = data.drop_duplicates()
print("Po odstranění duplicit:", data_clean.shape)

# Zpracování chybějících hodnot
# POZOR: Vždy si rozmysli, jestli mazat nebo doplňovat!
missing_before = data_clean.isnull().sum().sum()
print(f"Chybějící hodnoty před čištěním: {missing_before}")

# Příklad: doplnění číselných hodnot mediánem
numeric_columns = data_clean.select_dtypes(include=[np.number]).columns
for col in numeric_columns:
    if data_clean[col].isnull().sum() > 0:
        median_value = data_clean[col].median()
        data_clean[col].fillna(median_value, inplace=True)
        print(f"Doplněn sloupec {col} mediánem: {median_value}")
```

### 3. Základní analýza
```python
# Postupná explorativní analýza
def basic_analysis(df, target_column=None):
    print("=== ZÁKLADNÍ ANALÝZA ===")
    
    # Numerické sloupce
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    if len(numeric_cols) > 0:
        print(f"\n📈 Numerické sloupce ({len(numeric_cols)}):")
        print(df[numeric_cols].describe().round(2))
    
    # Kategorické sloupce
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns
    if len(categorical_cols) > 0:
        print(f"\n📋 Kategorické sloupce ({len(categorical_cols)}):")
        for col in categorical_cols[:5]:  # Pouze prvních 5
            print(f"\n{col}:")
            print(df[col].value_counts().head())
    
    # Analýza target proměnné
    if target_column and target_column in df.columns:
        print(f"\n🎯 Target proměnná: {target_column}")
        if df[target_column].dtype in ['object', 'category']:
            print(df[target_column].value_counts())
        else:
            print(df[target_column].describe())
```

## ⚠️ Časté chyby a jak se jim vyhnout

### 1. Nekontroluji data před analýzou
```python
# ❌ Špatně
df = pd.read_csv('data.csv')
result = df.groupby('category').sum()  # Co když category má NaN?

# ✅ Správně
df = pd.read_csv('data.csv')
print("Kontrola dat před analýzou:")
print(df['category'].isnull().sum())
if df['category'].isnull().sum() > 0:
    print("⚠️  Pozor: category obsahuje chybějící hodnoty!")
    df = df.dropna(subset=['category'])
result = df.groupby('category').sum()
```

### 2. Neukládám mezivýsledky
```python
# ❌ Špatně - ztratím práci při chybě
final_result = df.groupby('cat').agg({'sales': 'sum'}).sort_values('sales')

# ✅ Správně - postupné kroky
grouped_data = df.groupby('category').agg({'sales': 'sum'})
print("Agregovaná data:", grouped_data.shape)
final_result = grouped_data.sort_values('sales', ascending=False)
print("Finální výsledek:", final_result.head())
```

### 3. Neověřuji výsledky
```python
# ✅ Vždy ověř výsledky
result = df.groupby('region').agg({'sales': 'sum'})

# Kontrola: součet by měl být stejný jako původní data
original_sum = df['sales'].sum()
result_sum = result['sales'].sum()
print(f"Kontrola součtu: {original_sum:.2f} vs {result_sum:.2f}")
assert abs(original_sum - result_sum) < 0.01, "Chyba v agregaci!"
```

## 🎓 Doporučené workflow

1. **Načti a zkontroluj** data
2. **Prozkoumej** základní charakteristiky
3. **Vyčisti** data postupně s kontrolami
4. **Analyzuj** po malých krocích
5. **Ověř** každý výsledek
6. **Dokumentuj** závěry

## 📚 Užitečné funkce pro začátečníky

```python
# Rychlý přehled DataFrame
def quick_overview(df, name="DataFrame"):
    print(f"=== PŘEHLED: {name} ===")
    print(f"Shape: {df.shape}")
    print(f"Columns: {list(df.columns)}")
    print(f"Memory usage: {df.memory_usage(deep=True).sum() / 1024**2:.1f} MB")
    print(f"Missing values: {df.isnull().sum().sum()}")
    print("\nFirst 3 rows:")
    print(df.head(3))

# Kontrola outlierů
def check_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    
    outliers = df[(df[column] < lower_bound) | (df[column] > upper_bound)]
    print(f"Outliers v {column}: {len(outliers)} ({len(outliers)/len(df)*100:.1f}%)")
    
    return outliers
```

---
*Pamatuj: Lepší je být pomalý a důkladný než rychlý a chybující!* 