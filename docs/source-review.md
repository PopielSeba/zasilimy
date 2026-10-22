# Weryfikacja źródeł — Zasilimy

Data sprawdzenia: **22 października 2026 r.**

Dokument opisuje podstawę treści strony **Zasilimy / zasilimy.pl** oraz decyzje dotyczące zakresu oferty. Dane handlowe i techniczne konkretnego egzemplarza wymagają potwierdzenia przy przygotowaniu zamówienia.

## Źródła oferty REKORD

| Źródło | Ustalenia i sposób wykorzystania |
| --- | --- |
| [pozyczmnie.pl — agregaty prądotwórcze](https://www.pozyczmnie.pl/agregaty-pradotworcze) | Oferta SDMO KOHLER, zakres jednostek 60–500 kVA, zastosowania budowlane, eventowe i rezerwowe, wynajem krótko- i długoterminowy, dobór oraz logistyka w Polsce i UE. Brak listy konkretnych oznaczeń modeli. |
| [REKORD — zaplecze techniczne](https://halenamiotowe.com.pl/nasze-produkty/zaplecze-techniczne/) | Osobny opis ogólny podaje ponad 40 modeli oraz zakres 24–400 kW. Nie zawiera identyfikacji jednostek ani ich szczegółowych kart. Potwierdza dane rejestrowe i adres firmy. |
| [REKORD — karta agregatów PDF](https://halenamiotowe.com.pl/wp-content/uploads/2025/01/20_05_Produkty_Zaplecze-techniczne-Agregaty-pradotworcze.pdf) | Dwustronicowy materiał powtarza zakres 24–400 kW i ogólny opis. Nie wystarcza do identyfikacji modeli, ich mocy pozornej, trybów pracy, sterowników ani wyposażenia. |

Zakresów **60–500 kVA** i **24–400 kW** nie połączono w jedną specyfikację. Nie potwierdzono, że opisują te same egzemplarze lub aktualny stan floty. Liczba modeli z ogólnego katalogu nie jest traktowana jako bieżąca liczba urządzeń dostępnych do wynajmu.

## Decyzja katalogowa

W `equipment` znajduje się jedna pozycja:

- `slug: sdmo-kohler`;
- `kind: series`;
- marka i nazwa: **SDMO KOHLER**;
- zakres: **60–500 kVA**;
- etykieta: **Zakres mocy pozornej oferty**;
- adres: `/agregaty-pradotworcze/sdmo-kohler/`.

„Seria” jest tutaj grupą oferty, nie nazwą potwierdzonej fabrycznej rodziny modeli. Nie przypisano kodów typu J, R, V, T ani parametrów znalezionych wyłącznie na podobnym urządzeniu. Gdy właściciel dostarczy tabliczki i karty własnych egzemplarzy, katalog można rozszerzyć o rzeczywiste modele z właściwymi wariantami parametrów.

Eksport `configurationPage` generuje `/dobor-agregatu/`. To strona wyjaśniająca sposób przygotowania zapytania. Nie jest dodatkowym modelem urządzenia ani produktem z mocą wyprowadzoną przez dodawanie jednostek. Katalog i strona serii używają `CollectionPage`; nie powstały fikcyjne dane `Product`, `Offer`, ceny ani oceny.

## Praca równoległa — zakres potwierdzenia

Publiczna oferta pozyczmnie.pl zawiera informację o układach do **1 MVA**. Właściciel wskazał jednak w rozmowie, że część agregatów nie jest przystosowana do pracy równoległej. Informacja ogólna nie pozwala ustalić, które jednostki i jakie zestawy spełniają wymagania.

Na nowej stronie nie publikujemy 1 MVA jako gwarantowanego produktu ani nie deklarujemy możliwości łączenia dowolnych agregatów. Konfiguracja kilku źródeł wymaga sprawdzenia urządzeń, sterowania, zabezpieczeń i instalacji. Samo podobieństwo marki, mocy lub fotografii nie potwierdza kompatybilności.

Podstawa techniczna:

- [Rehlko — sterownik APM403](https://www.powersystems.rehlko.com/sea/products/controllers/apm403): producent rozróżnia wariant do pracy pojedynczego agregatu i wariant do pracy równoległej. To dowód znaczenia konfiguracji, **nie identyfikacja sterownika floty REKORD**.
- [Rehlko — Understanding the Benefits of Paralleled Standby Generators](https://www.powersystems.rehlko.com/understanding-the-benefits-of-paralleled-standby-generators): opisuje potrzebę integracji agregatów, układu łączeniowego i sterowania oraz synchronizacji przed podziałem obciążenia. Ogólne korzyści przedstawione przez producenta nie zostały przeniesione na ofertę jako gwarancje.

## Moc, rozruch i tryb użytkowania

[Cummins — T-030, Liquid-Cooled Generator Set Application Manual](https://powersuite.cummins.com/sites/powersuite/files/2024-04/t030.pdf), rozdziały 2.4, 3.3.1 i 3.3.4.2.1, stanowi źródło ogólnych zasad: warunki rozruchu mogą różnić się od pracy ustalonej; znaczenie mają kolejność i charakter obciążeń; relacja kW do kVA zależy od współczynnika mocy. Dokument rozróżnia również sposoby określania mocy dla różnych trybów użytkowania.

Nie przyjmujemy jednego współczynnika mocy dla całej floty. Nie przeliczamy 60–500 kVA na reklamowy zakres kW i nie przypisujemy konkretnym jednostkom limitów pracy z dokumentacji innego producenta. Na stronie prosimy o dane odbiorników i potwierdzamy parametry wybranego agregatu. Formularz nie jest kalkulatorem doboru.

Zasilanie rezerwowe nie jest przedstawiane jako bezprzerwowe. Treść pyta o dopuszczalną przerwę oraz istniejący sposób przełączenia i podtrzymania. Przyłączenie pozostaje elementem uzgodnienia z osobą odpowiedzialną za instalację obiektu.

## Fotografie

Pochodzenie pobranych plików i ich wariantów dokumentuje `public/assets/SOURCES.json`. Kontrola widocznych oznaczeń wykonana podczas przygotowania mediów wykazała:

- fotografie użyte dla oferty SDMO KOHLER przedstawiają urządzenia z oznaczeniami tej marki; nie przypisano im nieczytelnych lub niepotwierdzonych modeli i mocy;
- zdjęcie `generator-3-5-B2VD8C.webp`, umieszczone na źródłowej stronie przy pracy równoległej, pokazuje oznaczenie **INMESOL** — nie jest podpisywane SDMO KOHLER i nie potwierdza zdolności współpracy konkretnych jednostek;
- plik REKORD `20_05_Produkty_Zaplecze-techniczne-Agregaty-pradotworcze-scaled.jpg` pokazuje urządzenie **Atlas ZBC300-300** z oznaczeniem baterii litowych UN3536. Nie został wykorzystany jako fotografia agregatu spalinowego;
- zdjęcia floty nie stanowią dowodu dostępności w konkretnym terminie ani referencji z określonej realizacji.

Główna fotografia karty: `/assets/sdmo-kohler.webp`. Podpis opisuje urządzenia i ofertę bez deklaracji, że zdjęcie przedstawia każdy wariant z zakresu 60–500 kVA.

## Dane firmy i zakres handlowy

Dane kontaktowe przyjęto zgodnie z ofertą i ustaleniem właściciela:

- **REKORD HALE NAMIOTOWE SP. Z O.O.**
- ul. Kazimierza Wielkiego 1, 50-077 Wrocław;
- **+48 571 294 344**;
- **dystrybucja@halenamiotowe.com.pl**.

Główny numer i ogólny e-mail ze strony korporacyjnej mogą różnić się od wskazanego kontaktu handlowego. Nie zamieniano ich automatycznie.

Zakup jest przedstawiony jako indywidualne zapytanie. Stan urządzenia, model, wyposażenie, cena, termin i warunki dostawy wymagają oferty dla konkretnego egzemplarza. Nie dodano cen, liczników floty, godzin serwisu 24/7, obietnic gwarancyjnych ani informacji o natychmiastowej dostępności.

Opisy zastosowań są autorskimi materiałami pomagającymi przygotować zapytanie. „Modelowe scenariusze” ze źródłowej witryny nie zostały przedstawione jako udokumentowane realizacje. Dodanie referencji wymaga rzeczywistych danych projektu i zgody na ich publikację.

