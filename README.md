# Zasilimy

Statyczna polska strona oferty wynajmu agregatów prądotwórczych i indywidualnych zapytań o zakup. Marka **Zasilimy**, docelowa domena **https://zasilimy.pl**. Ofertę realizuje REKORD HALE NAMIOTOWE SP. Z O.O.

Strona korzysta z rzeczywistych fotografii sprzętu i potwierdzonej oferty SDMO KOHLER. Zakres **60–500 kVA** oznacza moc pozorną jednostek w ofercie; konkretny model, parametry, tryb pracy i wyposażenie są ustalane indywidualnie.

## Uruchomienie i sprawdzenie

Wymagany jest **Node.js 22 lub nowszy**. Projekt nie ma zależności npm ani frameworka.

```bash
npm run build
npm run check
npm test
```

- `build` generuje komplet strony w `dist/`.
- `check` sprawdza wygenerowane strony, odnośniki, zasoby i podstawowe elementy SEO.
- `test` uruchamia testy generatora zapytania i zachowania formularza.

Domyślne ustawienia:

```text
SITE_URL=https://zasilimy.pl
BASE_PATH=
```

`SITE_URL` określa bazę adresów kanonicznych, mapy witryny i danych strukturalnych. `BASE_PATH` pozostaje pusty przy publikacji w głównej domenie. Pliki w `dist/` są wynikiem budowania; treści edytuj w źródłach.

## Struktura projektu

| Plik lub katalog | Przeznaczenie |
| --- | --- |
| `src/content.mjs` | Dane firmy, seria urządzeń, usługi, dobór agregatu, zastosowania i FAQ |
| `src/templates.mjs` | Układ stron, lista tras, metadane i dane strukturalne |
| `public/styles.css` | Wygląd strony i układy responsywne |
| `public/app.js` | Formularz zapytania, nawigacja i interakcje |
| `public/assets/` | Fotografie, warianty obrazów oraz materiały marki |
| `public/assets/SOURCES.json` | Pochodzenie fotografii i zasady ich opisu |
| `scripts/build.mjs` | Generator HTML, sitemap.xml i robots.txt |
| `scripts/check.mjs` | Kontrola wygenerowanej strony |
| `tests/inquiry.test.mjs` | Testy zapytań o wynajem i zakup |
| `docs/source-review.md` | Weryfikacja oferty, źródła i ograniczenia danych |
| `vercel.json` | Konfiguracja publikacji na Vercel |

## Strony

Projekt generuje **10 publicznych stron oraz stronę 404**:

1. `/` — strona główna.
2. `/wynajem-agregatow-pradotworczych/` — wynajem.
3. `/sprzedaz-agregatow-pradotworczych/` — indywidualne zapytania o zakup.
4. `/agregaty-pradotworcze/` — przegląd oferty.
5. `/agregaty-pradotworcze/sdmo-kohler/` — oferta serii SDMO KOHLER.
6. `/dobor-agregatu/` — informacje potrzebne do doboru konfiguracji.
7. `/zastosowania/zasilanie-budowy/` — budowy i zaplecza.
8. `/zastosowania/zasilanie-imprez/` — eventy i imprezy.
9. `/zastosowania/zasilanie-rezerwowe/` — zasilanie rezerwowe obiektów.
10. `/kontakt/` — kontakt i przygotowanie zapytania.

`/404.html` ma oznaczenie `noindex` i nie trafia do mapy witryny.

## Sprzęt i treści

Katalog zawiera jedną potwierdzoną grupę urządzeń: **SDMO KOHLER, 60–500 kVA**. Źródła nie podają pełnej listy modeli floty, dlatego nie tworzono fikcyjnych kart konkretnych jednostek ani zakresów mocy udających modele. Strona doboru jest osobną stroną informacyjną.

Źródłem zakresu oferty jest [pozyczmnie.pl — agregaty prądotwórcze](https://www.pozyczmnie.pl/agregaty-pradotworcze). Materiały [REKORD — zaplecze techniczne](https://halenamiotowe.com.pl/nasze-produkty/zaplecze-techniczne/) oraz ich rozbieżności opisano w `docs/source-review.md`.

Treści rozróżniają kVA i kW oraz uwzględniają rozruch, jednoczesną pracę odbiorników, harmonogram i przyłączenie. Praca równoległa wymaga oceny konkretnych agregatów, sterowania i instalacji. Strona nie obiecuje kompatybilności całej floty, zasilania bez przerwy, niepotwierdzonej dostępności ani określonych cen.

## Formularz kontaktowy

Formularz **przygotowuje wiadomość w przeglądarce**. Użytkownik przegląda treść, kopiuje ją lub otwiera własny program pocztowy. Strona sama nie wysyła e-maila i nie ma zaplecza zapisującego zgłoszenia.

Zapytanie uwzględnia wynajem lub zakup, model/serię albo prośbę o dobór, lokalizację, wstępną liczbę agregatów, zastosowanie, zapotrzebowanie na moc wraz z jednostką, odbiorniki i rozruch, godziny pracy oraz układ przyłączenia. Przy wynajmie dochodzą termin i okres użytkowania.

- E-mail: **dystrybucja@halenamiotowe.com.pl**
- Telefon: **+48 571 294 344**

Parametry `?oferta=wynajem`, `?oferta=zakup` i `?model=sdmo-kohler` pozwalają otworzyć formularz z wybranym zakresem zapytania. Liczba wpisana w formularzu jest deklaracją klienta, nie informacją o stanach magazynowych.

## SEO

Każda publiczna strona ma własny tytuł, opis, H1 i adres kanoniczny. Generator tworzy sitemap.xml, robots.txt oraz metadane Open Graph. Dane strukturalne opisują firmę, witrynę, strony i nawigację. Katalog i grupa SDMO KOHLER są kolekcjami, a poradnik doboru stroną informacyjną; nie dodano fikcyjnych produktów, cen, ocen ani stanów dostępności.

Osobne strony wynajmu, zakupu, doboru i trzech zastosowań odpowiadają na różne potrzeby klienta. Publikacja i poprawny HTML nie gwarantują indeksacji ani określonych pozycji w wyszukiwarce.

## Publikacja

**Status: w przygotowaniu.** Docelowy projekt Vercel: **zasilimy**. Docelowa domena: **zasilimy.pl**.

`vercel.json` uruchamia `npm run build && npm run check && npm test`, publikuje katalog `dist` i włącza `trailingSlash: true`. Adres repozytorium, działający deployment oraz ustawienia domeny zostaną uzupełnione po ich rzeczywistym utworzeniu i sprawdzeniu.

