Feature: QR platba

  Scenario: Odeslání platby pomocí QR kódu
    Given že uživatel je přihlášen
    When načte QR kód s informacemi o platbě
    Then by měla být platba připravena k odeslání