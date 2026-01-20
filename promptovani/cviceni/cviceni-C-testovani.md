## Cvičení C: Testovací scénáře z požadavků

### Uživatelský příběh: Příprava akceptačních kritérií

Slack konverzace mezi QA a vývojovým týmem

**#projekt-platby**

**Kamil (QA lead):** Ahoj všichni, potřebuju připravit testovací scénáře pro novou funkci platebních šablon. Můžete mi shrnout, co přesně má fungovat?

**Ondřej (backend dev):** Jasně. Klient si může vytvořit šablonu pro opakované platby — zadá příjemce, částku, a může si nastavit frekvenci (měsíčně, týdně, nebo konkrétní den).

**Kamil:** OK, a co limity? Může si klient nastavit libovolnou částku?

**Ondřej:** Ne, platí standardní denní a měsíční limity jako u běžných plateb. Pokud by šablona překročila limit, platba se neprovede a klient dostane notifikaci.

**Simona (PM):** Ještě důležité — klient musí mít ověřený účet (KYC level 2), jinak šablony neuvidí vůbec.

**Kamil:** A co editace? Může klient šablonu změnit?

**Ondřej:** Jo, může měnit částku a frekvenci. Příjemce změnit nejde — musí vytvořit novou šablonu.

**Tereza (frontend dev):** Pozor, máme tam ještě jeden edge case. Když má klient víc účtů, musí vybrat zdrojový účet. A pokud na účtu není dostatek prostředků v momentě platby, přesune se na další den (max 3 pokusy).

**Kamil:** Co se stane po 3 neúspěšných pokusech?

**Tereza:** Šablona se deaktivuje a klient dostane push notifikaci + email.

**Simona:** A ještě jedna věc — pro firemní účty je schvalovací flow jiné. Tam musí platbu potvrdit druhý uživatel s oprávněním.

**Ondřej:** Jo, to je dual authorization. Ale to bych řešil jako separátní scénář, je to dost komplexní.

**Kamil:** Jasně. A mazání šablon?

**Tereza:** Klient může smazat kdykoliv. Ale pokud je naplánovaná platba do 24 hodin, zobrazí se warning, že se už neprovede.

**Ondřej:** Mimochodem, v API máme bug s timezone — platby se někdy spouští o hodinu dřív. Na tom pracuju, ale zatím to ber v úvahu při testování.

**Simona:** A nezapomeň, že celá funkce je zatím jen pro CZ a SK trh. DE a AT budou až v další fázi.

Shrnutí hlavních bodů pro testování:
- Vytvoření šablony (příjemce, částka, frekvence)
- Limity plateb a jejich validace
- KYC level 2 jako prerekvizita
- Editace šablony (částka a frekvence ano, příjemce ne)
- Retry logika při nedostatku prostředků (max 3 pokusy)
- Dual authorization pro firemní účty
- Mazání šablony s warningem
- Omezení na CZ/SK trh  
