# Instrukce pro Explorativní Datovou Analýzu (EDA)

## 🎯 Cíl EDA
Systematicky prozkoumat data, identifikovat vzory, odlehlé hodnoty a připravit data pro další analýzu nebo modelování.

## 📋 Standardní struktura EDA

### 1. Základní přehled dat (Data Overview)
```python
def data_overview(df, dataset_name="Dataset"):
    """Základní přehled datasetu"""
    print(f"{'='*50}")
    print(f"PŘEHLED DATASETU: {dataset_name}")
    print(f"{'='*50}")
    
    # Základní informace
    print(f"📊 Rozměry: {df.shape[0]:,} řádků × {df.shape[1]} sloupců")
    print(f"💾 Velikost v paměti: {df.memory_usage(deep=True).sum() / 1024**2:.1f} MB")
    
    # Typy dat
    print(f"\n📈 Typy sloupců:")
    dtype_counts = df.dtypes.value_counts()
    for dtype, count in dtype_counts.items():
        print(f"  {dtype}: {count} sloupců")
    
    # Chybějící hodnoty
    missing_total = df.isnull().sum().sum()
    missing_percent = (missing_total / (df.shape[0] * df.shape[1])) * 100
    print(f"\n⚠️  Chybějící hodnoty: {missing_total:,} ({missing_percent:.1f}%)")
    
    # Duplicity
    duplicates = df.duplicated().sum()
    print(f"🔄 Duplicitní řádky: {duplicates:,} ({duplicates/len(df)*100:.1f}%)")
```

### 2. Analýza chybějících hodnot
```python
def missing_values_analysis(df):
    """Detailní analýza chybějících hodnot"""
    missing = df.isnull().sum()
    missing_percent = (missing / len(df)) * 100
    
    missing_df = pd.DataFrame({
        'Sloupec': missing.index,
        'Chybějící_počet': missing.values,
        'Chybějící_procenta': missing_percent.values
    }).sort_values('Chybějící_procenta', ascending=False)
    
    # Pouze sloupce s chybějícími hodnotami
    missing_df = missing_df[missing_df['Chybějící_počet'] > 0]
    
    if len(missing_df) > 0:
        print("📊 ANALÝZA CHYBĚJÍCÍCH HODNOT:")
        print(missing_df.to_string(index=False))
        
        # Vizualizace
        if len(missing_df) <= 20:  # Pouze pokud není příliš mnoho sloupců
            plt.figure(figsize=(12, 6))
            plt.bar(missing_df['Sloupec'], missing_df['Chybějící_procenta'])
            plt.title('Procento chybějících hodnot podle sloupců')
            plt.xticks(rotation=45, ha='right')
            plt.ylabel('Procento chybějících hodnot')
            plt.tight_layout()
            plt.show()
    else:
        print("✅ Žádné chybějící hodnoty!")
```

### 3. Univariate analýza (jednotlivé proměnné)
```python
def univariate_analysis(df):
    """Analýza jednotlivých proměnných"""
    
    # Numerické proměnné
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    if len(numeric_cols) > 0:
        print(f"\n📈 NUMERICKÉ PROMĚNNÉ ({len(numeric_cols)}):")
        print(df[numeric_cols].describe().round(2))
        
        # Histogramy pro numerické proměnné
        n_cols = min(4, len(numeric_cols))
        n_rows = (len(numeric_cols) + n_cols - 1) // n_cols
        
        fig, axes = plt.subplots(n_rows, n_cols, figsize=(15, 4*n_rows))
        if n_rows == 1:
            axes = [axes] if n_cols == 1 else axes
        else:
            axes = axes.flatten()
        
        for i, col in enumerate(numeric_cols):
            if i < len(axes):
                df[col].hist(bins=30, ax=axes[i], alpha=0.7)
                axes[i].set_title(f'Distribuce: {col}')
                axes[i].set_xlabel(col)
                axes[i].set_ylabel('Četnost')
        
        # Skryj prázdné subploty
        for i in range(len(numeric_cols), len(axes)):
            axes[i].set_visible(False)
        
        plt.tight_layout()
        plt.show()
    
    # Kategorické proměnné
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns
    if len(categorical_cols) > 0:
        print(f"\n📋 KATEGORICKÉ PROMĚNNÉ ({len(categorical_cols)}):")
        for col in categorical_cols:
            unique_count = df[col].nunique()
            print(f"\n{col}:")
            print(f"  Unikátních hodnot: {unique_count}")
            
            if unique_count <= 10:  # Zobraz všechny hodnoty
                print("  Distribuce:")
                value_counts = df[col].value_counts()
                for value, count in value_counts.items():
                    percent = (count / len(df)) * 100
                    print(f"    {value}: {count} ({percent:.1f}%)")
            else:  # Zobraz pouze top 10
                print("  Top 10 hodnot:")
                value_counts = df[col].value_counts().head(10)
                for value, count in value_counts.items():
                    percent = (count / len(df)) * 100
                    print(f"    {value}: {count} ({percent:.1f}%)")
```

### 4. Bivariate analýza (vztahy mezi proměnnými)
```python
def bivariate_analysis(df, target_col=None):
    """Analýza vztahů mezi proměnnými"""
    
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    
    # Korelační matice
    if len(numeric_cols) > 1:
        print("\n🔗 KORELAČNÍ ANALÝZA:")
        correlation_matrix = df[numeric_cols].corr()
        
        # Najdi nejvyšší korelace (kromě diagonály)
        corr_pairs = []
        for i in range(len(correlation_matrix.columns)):
            for j in range(i+1, len(correlation_matrix.columns)):
                corr_value = correlation_matrix.iloc[i, j]
                if abs(corr_value) > 0.5:  # Pouze silné korelace
                    corr_pairs.append((
                        correlation_matrix.columns[i],
                        correlation_matrix.columns[j],
                        corr_value
                    ))
        
        if corr_pairs:
            print("Silné korelace (|r| > 0.5):")
            for var1, var2, corr in sorted(corr_pairs, key=lambda x: abs(x[2]), reverse=True):
                print(f"  {var1} ↔ {var2}: {corr:.3f}")
        
        # Heatmapa korelací
        plt.figure(figsize=(10, 8))
        sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0,
                   square=True, fmt='.2f')
        plt.title('Korelační matice')
        plt.tight_layout()
        plt.show()
    
    # Analýza s target proměnnou
    if target_col and target_col in df.columns:
        print(f"\n🎯 ANALÝZA S TARGET PROMĚNNOU: {target_col}")
        
        if df[target_col].dtype in ['object', 'category']:
            # Kategorická target proměnná
            for col in numeric_cols:
                if col != target_col:
                    plt.figure(figsize=(10, 6))
                    df.boxplot(column=col, by=target_col)
                    plt.title(f'{col} podle {target_col}')
                    plt.suptitle('')  # Odstraň automatický title
                    plt.show()
        else:
            # Numerická target proměnná
            for col in numeric_cols:
                if col != target_col:
                    plt.figure(figsize=(8, 6))
                    plt.scatter(df[col], df[target_col], alpha=0.6)
                    plt.xlabel(col)
                    plt.ylabel(target_col)
                    plt.title(f'{target_col} vs {col}')
                    
                    # Přidej trend line
                    z = np.polyfit(df[col].dropna(), df[target_col].dropna(), 1)
                    p = np.poly1d(z)
                    plt.plot(df[col], p(df[col]), "r--", alpha=0.8)
                    plt.show()
```

### 5. Detekce outlierů
```python
def outlier_detection(df):
    """Detekce a analýza outlierů"""
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    
    print("\n🚨 DETEKCE OUTLIERŮ:")
    
    outlier_summary = []
    
    for col in numeric_cols:
        # IQR metoda
        Q1 = df[col].quantile(0.25)
        Q3 = df[col].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR
        
        outliers = df[(df[col] < lower_bound) | (df[col] > upper_bound)]
        outlier_count = len(outliers)
        outlier_percent = (outlier_count / len(df)) * 100
        
        outlier_summary.append({
            'Sloupec': col,
            'Outliers_počet': outlier_count,
            'Outliers_procenta': outlier_percent,
            'Min_hodnota': df[col].min(),
            'Max_hodnota': df[col].max(),
            'Q1': Q1,
            'Q3': Q3
        })
    
    outlier_df = pd.DataFrame(outlier_summary)
    outlier_df = outlier_df.sort_values('Outliers_procenta', ascending=False)
    print(outlier_df.round(2).to_string(index=False))
    
    # Box ploty pro vizualizaci outlierů
    if len(numeric_cols) > 0:
        n_cols = min(3, len(numeric_cols))
        n_rows = (len(numeric_cols) + n_cols - 1) // n_cols
        
        fig, axes = plt.subplots(n_rows, n_cols, figsize=(15, 4*n_rows))
        if n_rows == 1:
            axes = [axes] if n_cols == 1 else axes
        else:
            axes = axes.flatten()
        
        for i, col in enumerate(numeric_cols):
            if i < len(axes):
                df.boxplot(column=col, ax=axes[i])
                axes[i].set_title(f'Box plot: {col}')
        
        # Skryj prázdné subploty
        for i in range(len(numeric_cols), len(axes)):
            axes[i].set_visible(False)
        
        plt.tight_layout()
        plt.show()
```

## 🔄 Kompletní EDA workflow
```python
def complete_eda(df, dataset_name="Dataset", target_col=None):
    """Kompletní explorativní datová analýza"""
    
    # Import potřebných knihoven
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt
    import seaborn as sns
    
    # Nastavení stylu grafů
    plt.style.use('default')
    sns.set_palette("husl")
    
    print(f"🔍 SPOUŠTÍM KOMPLETNÍ EDA PRO: {dataset_name}")
    print("="*60)
    
    # 1. Základní přehled
    data_overview(df, dataset_name)
    
    # 2. Analýza chybějících hodnot
    missing_values_analysis(df)
    
    # 3. Univariate analýza
    univariate_analysis(df)
    
    # 4. Bivariate analýza
    bivariate_analysis(df, target_col)
    
    # 5. Detekce outlierů
    outlier_detection(df)
    
    print("\n✅ EDA DOKONČENA!")
    print("="*60)
    
    # Shrnutí doporučení
    print("\n📝 DOPORUČENÍ PRO DALŠÍ KROKY:")
    
    missing_cols = df.columns[df.isnull().any()].tolist()
    if missing_cols:
        print(f"• Zpracovat chybějící hodnoty v: {', '.join(missing_cols)}")
    
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    if len(numeric_cols) > 0:
        print("• Zvážit normalizaci/standardizaci numerických proměnných")
        print("• Prozkoumat a zpracovat outliers")
    
    categorical_cols = df.select_dtypes(include=['object']).columns
    if len(categorical_cols) > 0:
        print("• Zvážit encoding kategorických proměnných")
    
    print("• Vytvořit feature engineering na základě zjištěných vzorů")
```

## 📊 Doporučené vizualizace

### Pro numerické proměnné:
- **Histogramy** - distribuce hodnot
- **Box ploty** - outliers a kvartily
- **Scatter ploty** - vztahy mezi proměnnými
- **Correlation heatmap** - korelace

### Pro kategorické proměnné:
- **Bar charts** - četnosti kategorií
- **Pie charts** - proporce (pouze pro málo kategorií)
- **Grouped bar charts** - porovnání kategorií

### Pro časové řady:
- **Line plots** - trendy v čase
- **Seasonal decomposition** - sezónní vzory

## ⚠️ Časté chyby v EDA

1. **Nedostatečná kontrola dat** před analýzou
2. **Ignorování chybějících hodnot** a outlierů
3. **Příliš mnoho grafů** bez jasného účelu
4. **Neinterpretování výsledků** - pouze popis čísel
5. **Nedokumentování zjištění** a závěrů

---
*EDA je iterativní proces - vracejte se k předchozím krokům na základě nových zjištění!* 