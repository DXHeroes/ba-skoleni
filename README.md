# L2 - AI pro analytiky: Pokročilé techniky a automatizace

Zvládáte základy? Teď je čas posunout se dál. V tomto školení se naučíte, jak z AI vytěžit maximum ve složitějších analytických scénářích – od tvorby pokročilých promptů přes práci s kontextem až po návrh automatizovaných workflow. To vše na reálných zadáních z bankovního prostředí.

## 🎯 Co se naučíte

- **Zvládnete řešit komplexní úkoly** díky práci s kontextem, vícestupňovým promptováním a využitím několika AI nástrojů zároveň
- **Vyzkoušíte si praktické aplikace** - přepis poznámek z porady, extrakce dat z dokumentů, automatizace reportů
- **Uvidíte GitHub Copilot v akci** - jak ve VS Code zvládne napsat kus práce za vás a ušetří hodiny při psaní kódu, skriptů nebo analýz
- **Naučíte se validovat výstupy** a vyhnout se AI halucinacím a bezpečnostním chybám

Tento repozitář obsahuje materiály pro školení datových analytiků v práci s GitHub Copilotem a pokročilými AI technikami.

## 📁 Struktura projektu

```
├── .github/                     # AI instrukce a konfigurace
│   ├── copilot-instructions.md  # Globální instrukce pro Copilot
│   ├── me.instructions.md       # Průvodce personalizovanými instrukcemi
│   └── instructions/            # Ukázkové personalizované instrukce
├── src/                         # Zdrojové kódy a skripty
├── features/                    # BDD testy a scénáře
├── templates/                   # Šablony pro dokumentaci a workflow
├── docs/                        # Dokumentace a materiály
│   ├── poznamky/               # Ukázkové poznámky z porad
│   ├── schuzky/                # Materiály ze schůzek
│   └── soubory/                # Další dokumenty
├── stories/                     # User stories a případové studie
└── uzitecne-zdroje.md          # Odkazy na pokročilé nástroje
```

## 🎯 Co najdete v tomto repozitáři

### 1. 🤖 AI Instrukce a konfigurace (`.github/`)
- **Globální Copilot instrukce** - Šablona pro základní pokyny (příklad v `.example`)
- **Personalizované instrukce** - Workshop šablony pro vlastní instrukce
- **Kompletní příklady** - Hotové instrukce v `.examples` složkách

### 2. 💻 Praktické skripty a kódy (`src/`)
- **Automatizační skripty** pro běžné analytické úkoly
- **Utility funkce** pro práci s bankovními daty
- **Příklady integrace** různých AI nástrojů

### 3. 🧪 BDD testy a scénáře (`features/`)
- **Cucumber testy** pro validaci AI výstupů
- **Scénáře** pro testování automatizovaných workflow
- **Kontrolní mechanismy** proti AI halucinacím

### 4. 📋 Šablony a workflow (`templates/`)
- **User story šablony** pro AI-asistované projekty
- **Dokumentační šablony** pro reporty a analýzy
- **Workflow šablony** pro týmovou spolupráci

### 5. 📚 Dokumentace a případové studie (`docs/`)
- **Ukázkové poznámky** z porad pro AI zpracování
- **Materiály ze schůzek** s praktickými příklady
- **Případové studie** z bankovního prostředí

### 6. 📖 User stories a případy použití (`stories/`)
- **Reálné scénáře** z bankovní praxe
- **Komplexní případové studie** pro pokročilé techniky
- **Příklady vícestupňového promptování**

## 🚀 Jak začít

### 1. Nastavení prostředí
```bash
# Klonování repozitáře
git clone [repository-url]
cd ba-skoleni

# Instalace závislostí
npm install

# Spuštění testů
npm test
```

### 2. Konfigurace AI nástrojů
1. **GitHub Copilot**: Aktivujte subscription a nainstalujte rozšíření
2. **Další AI nástroje**: Zkontrolujte `uzitecne-zdroje.md` pro doporučené nástroje
3. **Instrukce**: Copilot automaticky načte instrukce z `.github/copilot-instructions.md`

### 3. Praktické vyzkoušení
```python
# Zkuste AI-asistovanou analýzu
# Otevřete některý ze skriptů v src/ a experimentujte s Copilotem

# Příklad: Analýza rizikových klientů
# Načti data o klientech a identifikuj rizikové segmenty
```

### 4. Testování workflow
```bash
# Spuštění BDD testů pro validaci AI výstupů
npm run test:features

# Testování konkrétního scénáře
npx cucumber-js features/qrPlatba.feature
```

## 📚 Workshop aktivity

### Aktivita 1: Vytvoření vlastních Copilot instrukcí
1. Otevřete `.github/copilot-instructions.md` a vyplňte šablonu
2. Přizpůsobte instrukce vašemu týmu a projektům
3. Testujte, jak různé formulace ovlivňují kvalitu návrhů

### Aktivita 2: Personalizované instrukce pro různé role
1. Použijte šablonu v `.github/instructions/template.md`
2. Vytvořte instrukce pro svou roli (junior/senior analytik, EDA, reporting)
3. Otestujte instrukce v AI chatu a porovnejte výsledky

### Aktivita 3: Porovnání různých přístupů
1. Vyzkoušejte příklady z `.github/instructions.examples/`
2. Porovnejte výsledky s vašimi vlastními instrukcemi
3. Identifikujte nejefektivnější techniky pro váš use case

### Aktivita 4: Týmová spolupráce s AI
1. Nastavte sdílené instrukce pro celý tým
2. Vytvořte standardy pro validaci AI výstupů
3. Implementujte review proces pro AI-generovaný kód

### Aktivita 5: Práce s dokumenty a poznámkami
1. Použijte AI pro zpracování poznámek z `docs/poznamky/`
2. Vytvořte automatizovaný přepis a strukturování
3. Implementujte extrakci klíčových informací

### Aktivita 6: BDD testování AI workflow
1. Prozkoumat existující testy v `features/`
2. Vytvořte nové scénáře pro validaci AI výstupů
3. Implementujte automatizované kontroly kvality

## 💡 Tipy pro efektivní práci

### ✅ Dobré praktiky:
- **Buďte specifičtí** v pokynech
- **Testujte změny** pravidelně
- **Dokumentujte** co funguje
- **Sdílejte** užitečné instrukce s týmem

### ❌ Čeho se vyhnout:
- Příliš obecné pokyny
- Protichůdné instrukce
- Příliš dlouhé soubory
- Zastaralé informace

## 🔧 Pokročilé techniky

### Vícestupňové promptování
```markdown
# Krok 1: Kontext a cíl
Analyzuji data o bankovních klientech pro identifikaci rizikových segmentů

# Krok 2: Specifické požadavky
Zaměř se na klienty s více než 3 produkty a historií opožděných plateb

# Krok 3: Validace a interpretace
Ověř výsledky pomocí statistických testů a business logiky
```

### Kombinování AI nástrojů
```markdown
# Workflow: Copilot + ChatGPT + Claude
1. Copilot: Generování kódu pro analýzu
2. ChatGPT: Interpretace výsledků
3. Claude: Tvorba business reportu
4. Validace: Křížová kontrola výstupů
```

### Práce s kontextem
```markdown
# V copilot-instructions.md
@include instructions/banking-domain.md
@include instructions/risk-analysis.md
@include instructions/regulatory-compliance.md

# Specifické pro bankovní prostředí:
- Všechny částky v CZK, formát s tisícovými oddělovači
- Respektuj GDPR při práci s osobními údaji
- Používej bankovní terminologii (úvěr, vklad, rating)
```

## 🛠️ Dostupné nástroje a zdroje

### AI Nástroje (viz `uzitecne-zdroje.md`)
- **T3 Chat** - Několik AI modelů na jednom místě
- **Pokročilé prompty** - Kolekce osvědčených technik
- **Další doporučené nástroje** - Průběžně aktualizovaný seznam

### Šablony a workflow (`templates/`)
- **User Story šablona** - Strukturovaný přístup k požadavkům
- **Dokumentační šablony** - Pro reporty a analýzy
- **BDD scénáře** - Pro testování AI workflow

### 📊 Ukázkové datasety pro bankovní analýzy

Pro testování pokročilých technik můžete použít:
- [Credit Card Fraud Detection](https://www.kaggle.com/mlg-ulb/creditcardfraud) - Detekce podvodů
- [Loan Prediction](https://www.kaggle.com/altruistdelhite04/loan-prediction-problem-dataset) - Schvalování úvěrů  
- [Bank Marketing](https://www.kaggle.com/henriqueyamahata/bank-marketing) - Marketingové kampaně
- [Default of Credit Card Clients](https://www.kaggle.com/uciml/default-of-credit-card-clients-dataset) - Riziko defaultu

## 🤝 Přispívání

Máte nápad na vylepšení? 
1. Vytvořte nový soubor v `instructions/`
2. Otestujte ho na reálných datech
3. Zdokumentujte výsledky
4. Sdílejte s ostatními

## 📞 Podpora

Pokud máte otázky nebo problémy:
- Zkontrolujte [GitHub Copilot dokumentaci](https://docs.github.com/en/copilot)
- Podívejte se na [VS Code Copilot guide](https://code.visualstudio.com/docs/editor/github-copilot)
- Zeptejte se na workshopu nebo v týmu

## 📝 Licence

Tento materiál je určen pro vzdělávací účely. Můžete ho volně používat a upravovat pro vaše potřeby.

---
*Vytvořeno pro L2 školení: AI pro analytiky - Pokročilé techniky a automatizace*
