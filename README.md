# L2 - AI pro analytiky: Pokročilé techniky a automatizace

Zvládáte základy? Teď je čas posunout se dál. V tomto školení se naučíte, jak z AI vytěžit maximum ve složitějších analytických scénářích – od tvorby pokročilých promptů přes práci s kontextem až po návrh automatizovaných workflow. To vše na reálných zadáních z bankovního prostředí.

## 🎯 Co se naučíte

- **Zvládnete řešit komplexní úkoly** díky práci s kontextem, vícestupňovým promptováním a využitím několika AI nástrojů zároveň
- **Vyzkoušíte si praktické aplikace** - přepis poznámek z porady, extrakce dat z dokumentů, automatizace reportů
- **Uvidíte GitHub Copilot v akci** - jak ve VS Code zvládne napsat kus práce za vás a ušetří hodiny při psaní kódu, skriptů nebo analýz
- **Naučíte se validovat výstupy** a vyhnout se AI halucinacím a bezpečnostním chybám

Tento repozitář obsahuje materiály pro školení datových analytiků v práci s GitHub Copilotem a pokročilými AI technikami.

### Doporučený průvodce
- [Příběh datového analytika a AI](docs/pribeh-datoveho-analytika-ai.md)

## 📁 Struktura projektu

```
├── docs/                        # Dokumentace a materiály
│   ├── poznamky/                # Ukázkové poznámky z porad
│   ├── schuzky/                 # Materiály ze schůzek
│   └── soubory/                 # Další dokumenty a exporty
├── epics/                       # Epics pro jednotlivé funkční celky
│   ├── financni-ukazatel/       # Epic pro funkcionalitu finančního ukazatele
│   └── qr-platba/               # Epic pro funkcionalitu QR plateb
├── features/                    # BDD testy a scénáře
│   ├── financni-ukazatel/       # Testy pro finanční ukazatel
│   └── qr-platba/               # Testy pro QR platby
├── src/                         # Zdrojové kódy a implementace
└── templates/                   # Šablony pro dokumentaci a workflow
```

## 💡 Tipy pro efektivní práci

### ✅ Dobré praktiky:

- **Buďte specifičtí** v pokynech
- **Testujte změny** pravidelně
- **Dokumentujte** co fungujes
- **Sdílejte** užitečné instrukce s týmem

### ❌ Čeho se vyhnout:

- Příliš obecné pokyny
- Protichůdné instrukce
- Příliš dlouhé soubory
- Zastaralé informace

### Kombinování AI nástrojů

```markdown
# Workflow: Copilot + ChatGPT + Claude

1. Copilot: Generování kódu pro analýzu
2. ChatGPT: Interpretace výsledků
3. Claude: Tvorba business reportu
4. Validace: Křížová kontrola výstupů
```

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
