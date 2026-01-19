# Konvence názvosloví pro projektovou dokumentaci

Tento dokument definuje naming conventions pro všechny typy dokumentů v projektu, aby byla zajištěna konzistence a snadná orientace.

## Obecná pravidla

- Všechny názvy souborů používají **malá písmena**
- Slova jsou oddělena **pomlčkami** (kebab-case)
- Datum je ve formátu **YYYY-MM-DD** (ISO 8601)
- Číselné identifikátory jsou **třímístné** s předchozími nulami (001, 002, ...)
- Název souboru by měl být **stručný ale výstižný** (max 50 znaků)
- České znaky jsou nahrazeny ASCII ekvivalenty (é → e, ř → r, atd.)

## Formáty podle typu dokumentu

### Epic dokumenty
```
epic-[ID]-[nazev].md
```

**Příklady:**
- `epic-001-financni-ukazatel.md`
- `epic-002-kategorizace-plateb.md`
- `epic-003-notifikace-limitu.md`

**Pravidla:**
- ID začíná od 001 a postupuje sekvenčně
- Název odpovídá businessové doméně
- Vždy přípona `.md`

### User Stories
```
story-[EPIC_ID]-[STORY_ID]-[nazev].md
```

**Příklady:**
- `story-001-001-zobrazeni-skore.md`
- `story-001-002-detail-rozpad.md`
- `story-002-001-automaticka-kategorizace.md`

**Pravidla:**
- První ID odkazuje na parent epic
- Druhé ID je sekvenční číslo story v rámci epicu
- Umožňuje snadné spojení story s epicem

### BDD Feature soubory
```
feature-[ID]-[nazev].feature
```

**Příklady:**
- `feature-001-vypocet-skore.feature`
- `feature-002-kategorizace-transakce.feature`
- `feature-003-oprava-kategorie.feature`

**Pravidla:**
- Přípona vždy `.feature` (pro Cucumber/Gherkin)
- ID může, ale nemusí odpovídat epic/story ID
- Název popisuje testovanou funkcionalitu

### Záznamy ze schůzek
```
schuzka-[YYYY-MM-DD]-[nazev].md
nebo
schuzka-[YYYY-MM-DD].md
```

**Příklady:**
- `schuzka-2025-05-05.md`
- `schuzka-2025-05-07-technicka.md`
- `schuzka-2025-05-09-ux-review.md`

**Pravidla:**
- Datum schůzky je povinné
- Volitelný popisek pro identifikaci typu schůzky
- Formát data YYYY-MM-DD pro správné řazení

### Poznámky a náměty
```
poznamka-[ID]-[nazev].md
nebo
poznamka-[nazev].md
```

**Příklady:**
- `poznamka-001-textace-skore.md`
- `poznamka-002-on-demand-vypocet.md`
- `poznamka-animace-ux.md`

**Pravidla:**
- ID je volitelné, použít pokud je potřeba číslování
- Název by měl být výstižný
- Pro ad-hoc poznámky bez ID

### Emaily a formální komunikace
```
email-[YYYY-MM-DD]-[nazev].md
```

**Příklady:**
- `email-2025-05-01-kickoff.md`
- `email-2025-05-15-status-update.md`
- `email-gdpr-guidelines.md`

**Pravidla:**
- Datum odeslání/přijetí emailu
- Název popisuje obsah nebo účel
- Datum může být vynecháno u obecných dokumentů

### Technické specifikace
```
tech-spec-[ID]-[nazev].md
```

**Příklady:**
- `tech-spec-001-api-skore.md`
- `tech-spec-002-ml-model-struktura.md`
- `tech-spec-003-cache-strategie.md`

**Pravidla:**
- Pro detailní technické návrhy
- ID je sekvenční
- Název popisuje technickou oblast

### Architecture Decision Records (ADR)
```
adr-[ID]-[nazev].md
```

**Příklady:**
- `adr-001-microservice-vs-monolit.md`
- `adr-002-volba-ml-frameworku.md`
- `adr-003-cloud-vs-ondevice.md`

**Pravidla:**
- Pro dokumentaci architektonických rozhodnutí
- ID je sekvenční
- Název popisuje rozhodnutí

### API dokumentace
```
api-[nazev]-[verze].md
```

**Příklady:**
- `api-financial-score-v1.md`
- `api-categorization-v2.md`
- `api-user-profile-v1.md`

**Pravidla:**
- Název API endpointu nebo domény
- Verze v formátu v1, v2, atd.

### Test scénáře
```
test-[ID]-[nazev].md
```

**Příklady:**
- `test-001-skore-vypocet.md`
- `test-002-kategorizace-edge-cases.md`
- `test-003-ui-oprava-kategorie.md`

**Pravidla:**
- Pro manuální test cases nebo test plány
- ID je sekvenční
- Název popisuje testovanou oblast

### Datové modely a diagramy
```
model-[nazev].md
diagram-[nazev].md
```

**Příklady:**
- `model-transakce.md`
- `model-uzivatel.md`
- `diagram-er-financial-score.md`
- `diagram-flow-kategorizace.md`

**Pravidla:**
- Pro popis datových modelů nebo přiložení diagramů
- Název popisuje entitu nebo proces

### Glosář a slovníky
```
glosar-[oblast].md
slovnik-[oblast].md
```

**Příklady:**
- `glosar-financni-terminy.md`
- `glosar-ml-terminy.md`
- `slovnik-api.md`

**Pravidla:**
- Pro vysvětlení termínů a zkratek
- Oblast specifikuje doménu

## Struktura složek

Doporučená struktura pro větší projekty:

```
docs/
├── epics/
│   ├── epic-001-financni-ukazatel.md
│   └── epic-002-kategorizace-plateb.md
├── stories/
│   ├── story-001-001-zobrazeni-skore.md
│   └── story-001-002-detail-rozpad.md
├── features/
│   ├── feature-001-vypocet-skore.feature
│   └── feature-002-kategorizace-transakce.feature
├── schuzky/
│   ├── schuzka-2025-05-05.md
│   └── schuzka-2025-05-07.md
├── poznamky/
│   ├── poznamka-001-textace-skore.md
│   └── poznamka-002-animace-ux.md
├── tech/
│   ├── tech-spec-001-api-skore.md
│   ├── adr-001-microservice-vs-monolit.md
│   └── api-financial-score-v1.md
├── tests/
│   ├── test-001-skore-vypocet.md
│   └── test-002-kategorizace-edge-cases.md
├── models/
│   ├── model-transakce.md
│   └── diagram-er-financial-score.md
└── glosar-financni-terminy.md
```

Pro menší projekty lze použít flat strukturu (všechny soubory v `docs/`), ale je třeba důsledně dodržovat naming conventions.

## Kontrolní checklist

Před vytvořením nového dokumentu ověřte:

- [ ] Název souboru odpovídá konvencím pro daný typ
- [ ] Používá malá písmena a pomlčky
- [ ] ID je třímístné s nulami (pokud je vyžadováno)
- [ ] Datum je ve formátu YYYY-MM-DD (pokud je součástí názvu)
- [ ] České znaky jsou nahrazeny ASCII
- [ ] Název je stručný ale výstižný (max 50 znaků)
- [ ] Přípona souboru je správná (.md nebo .feature)

## Automatizace kontroly

Pro kontrolu dodržování konvencí lze použít:

- **Git hooks** - pre-commit hook kontrolující názvy souborů
- **CI/CD pipeline** - automatická validace při pull requestu
- **Linting skripty** - bash/python skripty pro ověření názvů

Příklad bash skriptu pro kontrolu:
```bash
#!/bin/bash
# Kontrola naming conventions v docs/

find docs/ -type f -name "*.md" | while read file; do
  basename=$(basename "$file")
  if [[ ! $basename =~ ^[a-z0-9-]+\.md$ ]]; then
    echo "CHYBA: Neplatný název souboru: $file"
    exit 1
  fi
done
```

## Výjimky

Následující soubory jsou výjimkou z pravidel:
- `README.md` - hlavní dokumentace projektu
- `CHANGELOG.md` - historie změn
- `CONTRIBUTING.md` - pokyny pro přispěvatele
- `NAMING-CONVENTIONS.md` - tento dokument

Tyto soubory používají velká písmena pro lepší viditelnost v kořenové složce.
