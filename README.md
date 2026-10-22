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

**Status na 22 października 2026: strona opublikowana; własna domena oczekuje na zmianę DNS w UT.pl.**

- Działająca strona: **https://zasilimy.vercel.app/**
- Repozytorium: **https://github.com/PopielSeba/zasilimy**
- Panel domen: **https://vercel.com/sebastians-projects-e047c519/zasilimy/settings/domains**
- Projekt: **zasilimy**, zespół **Sebastian's projects** (`sebastians-projects-e047c519`).
- Commit źródłowy wdrożenia: `cb541b9447e179cf68a7918953744baefc9e7830`.

`vercel.json` uruchamia `npm run build && npm run check && npm test`, publikuje katalog `dist` i włącza `trailingSlash: true`. GitHub jest połączony z Vercel; zmiana gałęzi `main` uruchamia kolejne wdrożenie.

### Rekordy do ustawienia w UT.pl

Poniższe wartości zostały odczytane z panelu tego projektu w Vercelu:

| Nazwa / host | Typ | Wartość |
| --- | --- | --- |
| `@` | `A` | `216.198.79.1` |
| `www` | `CNAME` | `ac742a2b740fd5e0.vercel-dns-017.com.` |

1. Dla `@` zastąp dotychczasowy rekord A `54.38.201.206` wartością `216.198.79.1`.
2. Dla `www` zastąp dotychczasowy rekord A `54.38.201.206` rekordem CNAME podanym w tabeli. Rekord A i CNAME nie powinny współistnieć dla tej samej nazwy `www`.
3. Pozostaw TTL domyślny lub 3600 sekund. Zachowaj rekordy poczty (w tym MX), weryfikacyjne i serwery nazw UT.

W Vercelu dodano `zasilimy.pl` do **Production** oraz `www.zasilimy.pl` jako **308 Permanent Redirect → zasilimy.pl**. Status **Invalid Configuration** oznacza obecnie, że DNS nadal wskazuje dotychczasowy serwer UT. Zmian w panelu UT nie wykonano. Po propagacji należy sprawdzić status domen i certyfikatu HTTPS oraz wejście przez oba adresy.

### Sprawdzenie przed publikacją i po wdrożeniu

- Build, kontrola 11 plików HTML / 11 bloków JSON-LD / 447 lokalnych odwołań oraz testy generatora zapytania: poprawne.
- Sprawdzono w przeglądarce stronę główną, ofertę, poradnik, galerię, menu mobilne, formularz wynajmu i zakupu oraz kopiowanie treści. W widoku mobilnym o szerokości 375 px nie ma poziomego przewijania.
- Kontrola produkcji: 34 odczyty HTTP; 10 publicznych tras zwraca 200, nieistniejący adres zwraca własne 404 z `noindex`, sitemap zawiera 10 właściwych adresów, a 17 sprawdzonych zasobów zwraca poprawne odpowiedzi i typy MIME.
- Canonicale, sitemap i dane strukturalne używają docelowej domeny `https://zasilimy.pl`.
- Potwierdzono nagłówki `X-Content-Type-Options`, `Referrer-Policy` i `Permissions-Policy`.

### Google Search Console po podłączeniu domeny

Po uruchomieniu domeny dodaj lub zweryfikuj usługę `zasilimy.pl` w Google Search Console. Rekord weryfikacyjny pobierz z tej konkretnej usługi. Mapa do zgłoszenia: `https://zasilimy.pl/sitemap.xml`. Weryfikacja Search Console nie została wykonana w ramach publikacji.

