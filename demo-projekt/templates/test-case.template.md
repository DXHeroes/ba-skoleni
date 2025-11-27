Feature: [Název funkce]

  Scenario: [Název scénáře 1]
    Given [počáteční stav]
    When [akce, kterou uživatel provede]
    Then [očekávaný výsledek]

  Scenario: [Název scénáře 2]
    Given [počáteční stav]
    And [další podmínka]
    When [akce, kterou uživatel provede]
    Then [očekávaný výsledek]
    And [další očekávaný výsledek]

  Scenario Outline: [Název šablony scénáře] s různými parametry
    Given [počáteční stav] s hodnotou <hodnota1>
    When [akce, kterou uživatel provede] s <hodnota2>
    Then [očekávaný výsledek] by měl být <výsledek>

    Examples:
      | hodnota1 | hodnota2 | výsledek |
      | příklad1 | příklad2 | výsledek1 |
      | příklad3 | příklad4 | výsledek2 |