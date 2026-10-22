export const company = {
  name: 'REKORD HALE NAMIOTOWE SP. Z O.O.',
  phone: '+48571294344',
  phoneDisplay: '+48 571 294 344',
  email: 'dystrybucja@halenamiotowe.com.pl',
  address: 'ul. Kazimierza Wielkiego 1',
  city: 'Wrocław',
  postalCode: '50-077',
  sourceUrl: 'https://www.pozyczmnie.pl/agregaty-pradotworcze',
};

export const equipment = [
  {
    slug: 'sdmo-kohler',
    kind: 'series',
    name: 'SDMO KOHLER',
    brand: 'SDMO KOHLER',
    model: 'Seria agregatów 60–500 kVA',
    displayValue: '60–500 kVA',
    displayLabel: 'Zakres mocy pozornej oferty',
    note: 'Konkretny model, moc w danym trybie pracy, wyposażenie i dostępność potwierdzamy w indywidualnej ofercie.',
    description: 'Przemysłowe agregaty prądotwórcze SDMO KOHLER do zasilania budów, eventów i obiektów. Dobieramy jednostkę do odbiorników, sposobu użytkowania oraz warunków przyłączenia.',
    application: 'Budowy, wydarzenia, obiekty tymczasowe i zasilanie rezerwowe.',
    details: [
      {
        title: 'Zakres mocy dopasowany do zadania',
        text: 'Oferta obejmuje jednostki o mocy pozornej od 60 do 500 kVA. Wybór konkretnego agregatu zależy od odbiorników, ich rozruchu i jednoczesnej pracy. Moc znamionową oraz warunki użytkowania potwierdzamy dla wybranego modelu.',
      },
      {
        title: 'Zasilanie tymczasowe lub rezerwowe',
        text: 'Omówimy, czy agregat ma być podstawowym źródłem podczas projektu, czy rezerwą dla istniejącej instalacji. Ważne są godziny pracy, zmienność obciążenia i wymagany sposób przełączenia. Zakres konfiguracji ustalamy z uwzględnieniem warunków obiektu.',
      },
      {
        title: 'Urządzenie i zakres dostawy',
        text: 'Przy wynajmie uzgadniamy termin, okres użytkowania i logistykę. Przy zapytaniu o zakup potwierdzamy dostępny egzemplarz, stan oraz wyposażenie. Okablowanie, dystrybucja energii, paliwo i pozostałe elementy są określane w indywidualnej ofercie.',
      },
    ],
    specs: [
      { label: 'Marka w ofercie', value: 'SDMO KOHLER' },
      { label: 'Zakres mocy pozornej jednostek', value: '60–500 kVA' },
      { label: 'Zasilanie odbiorników', value: 'Trójfazowe — parametry przyłączenia do uzgodnienia' },
      { label: 'Model i moc w wybranym trybie', value: 'Potwierdzane w indywidualnej ofercie' },
      { label: 'Praca kilku jednostek', value: 'Konfiguracja po ocenie konkretnych agregatów i instalacji' },
    ],
    sourceUrl: 'https://www.pozyczmnie.pl/agregaty-pradotworcze',
    image: '/assets/sdmo-kohler.webp',
    imageAlt: 'Agregaty prądotwórcze SDMO KOHLER z oferty REKORD',
  },
];

export const configurationPage = {
  path: '/dobor-agregatu/',
  eyebrow: 'Dobór zasilania do projektu',
  title: 'Dobór agregatu prądotwórczego',
  metaTitle: 'Dobór agregatu prądotwórczego do odbiorników | Zasilimy',
  metaDescription: 'Jak przygotować zapytanie o agregat? Lista odbiorników, moc, rozruch, godziny pracy i warunki instalacji. Indywidualny dobór konfiguracji.',
  intro: 'Dobór agregatu zaczyna się od tego, co ma zasilać i w jakich warunkach. Prześlij listę urządzeń, planowany czas pracy oraz informacje o miejscu realizacji. Pomożemy ustalić jednostkę i zakres konfiguracji.',
  sections: [
    {
      title: 'Lista odbiorników i ich parametrów',
      text: 'Zbierz nazwy urządzeń, liczbę sztuk i dane z tabliczek lub dokumentacji. Zaznacz jednostki mocy: kW i kVA opisują różne wielkości. Wskaż odbiorniki jednofazowe i trójfazowe oraz urządzenia, które mają pracować jednocześnie. Jeśli nie znasz parametrów, pomocne będą zdjęcia tabliczek.',
    },
    {
      title: 'Rozruch i zmiany obciążenia',
      text: 'Pompy, sprężarki, wentylatory i inne urządzenia mogą wymagać uwzględnienia warunków rozruchu. Dlatego pytamy także o kolejność uruchamiania oraz skoki obciążenia. Dobór odnosi się do całego sposobu pracy instalacji, a nie wyłącznie do sumy mocy zapisanych na urządzeniach.',
    },
    {
      title: 'Harmonogram i rola agregatu',
      text: 'Określ godziny pracy dziennie, długość projektu i planowane przerwy. Inaczej opisuje się potrzebę zasilania podczas budowy, a inaczej rezerwę dla obiektu z przyłączem sieciowym. Dla wybranej jednostki potwierdzamy moc i dopuszczalne warunki pracy w odpowiednim trybie.',
    },
    {
      title: 'Przyłączenie i współpraca z instalacją',
      text: 'Potrzebne są informacje o istniejącej rozdzielni, punkcie przyłączenia i sposobie przełączenia źródeł. Warunki te uzgadniamy z osobą odpowiedzialną za instalację obiektu. Zakres okablowania, dystrybucji i uruchomienia określamy przed realizacją.',
    },
    {
      title: 'Konfiguracja kilku jednostek',
      text: 'Przy większym projekcie możemy omówić podział odbiorników między urządzenia lub ocenę układu współpracujących źródeł. Praca równoległa wymaga potwierdzenia kompatybilności konkretnych agregatów, sterowania i zabezpieczeń. Możliwości zestawu nie wynikają wyłącznie z dodania mocy jednostek.',
    },
    {
      title: 'Miejsce, transport i paliwo',
      text: 'Podaj lokalizację, możliwości dojazdu, miejsce ustawienia i dostęp dla dostaw. Omówimy planowany czas pracy oraz organizację paliwa w uzgodnionym zakresie. Warunki na miejscu wpływają zarówno na konfigurację, jak i logistykę zamówienia.',
    },
  ],
  faq: [
    {
      q: 'Czy kVA oznacza to samo co kW?',
      a: 'kVA opisuje moc pozorną, a kW moc czynną. Ich relacja zależy od współczynnika mocy i parametrów urządzenia. W zapytaniu podaj wartości wraz z jednostkami; dobór wykonujemy dla konkretnych odbiorników i agregatu.',
    },
    {
      q: 'Czy wystarczy zsumować moce wszystkich urządzeń?',
      a: 'Suma jest punktem wyjścia. Potrzebne są też informacje o jednoczesnej pracy, rozruchu i zmianach obciążenia. Parametry silników oraz innych wymagających odbiorników warto dołączyć do zapytania.',
    },
    {
      q: 'Czy dowolne dwa agregaty można połączyć równolegle?',
      a: 'Taka praca wymaga odpowiedniej konfiguracji urządzeń, sterowania i zabezpieczeń. Możliwość współpracy potwierdzamy dla konkretnych jednostek oraz instalacji. Samo podobieństwo mocy lub marki nie potwierdza kompatybilności.',
    },
    {
      q: 'Czy agregat rezerwowy zapewnia zasilanie bez przerwy?',
      a: 'Przełączenie źródła może wiązać się z przerwą. Jeżeli odbiorniki wymagają podtrzymania zasilania, trzeba uwzględnić to w projekcie całego układu. Opisz dopuszczalny czas przerwy i istniejące rozwiązania, abyśmy mogli omówić zakres konfiguracji.',
    },
  ],
};

export const faq = [
  {
    q: 'Jakie agregaty prądotwórcze oferujecie?',
    a: 'Oferta obejmuje przemysłowe agregaty SDMO KOHLER o mocy pozornej jednostek od 60 do 500 kVA. Konkretny model, moc w danym trybie pracy, wyposażenie i dostępność na wskazany termin potwierdzamy w ofercie.',
  },
  {
    q: 'Jak dobieracie moc agregatu?',
    a: 'Uwzględniamy listę odbiorników, ich parametry, warunki rozruchu i jednoczesnej pracy. Ważne są także harmonogram, rola agregatu oraz sposób przyłączenia. Możesz przesłać zdjęcia tabliczek znamionowych urządzeń.',
  },
  {
    q: 'Czy wynajmujecie agregaty na budowy i eventy?',
    a: 'Tak. Przygotowujemy konfiguracje dla budów, wydarzeń, obiektów tymczasowych i zaplecza technicznego. Dobór sprzętu oraz zakres dostawy ustalamy na podstawie potrzeb danego projektu.',
  },
  {
    q: 'Czy agregat może służyć jako zasilanie rezerwowe?',
    a: 'Możemy omówić takie zastosowanie. Potrzebne są informacje o instalacji, priorytetowych odbiornikach i wymaganym sposobie przełączenia. Warunki współpracy z obiektem ustalamy przed wyborem urządzenia.',
  },
  {
    q: 'Na jak długo można wynająć agregat?',
    a: 'Przygotowujemy wynajem krótkoterminowy i długoterminowy. Podaj datę rozpoczęcia, przewidywany okres użytkowania oraz godziny pracy. Dostępność i warunki potwierdzimy w indywidualnej ofercie.',
  },
  {
    q: 'Czy organizujecie dostawę?',
    a: 'Koordynujemy transport, termin dostawy i przygotowanie sprzętu do pracy w Polsce oraz Unii Europejskiej. Dojazd, rozładunek, miejsce ustawienia i pozostały zakres realizacji uzgadniamy przed zamówieniem.',
  },
  {
    q: 'Ile kosztuje wynajem agregatu prądotwórczego?',
    a: 'Cena zależy od jednostki, czasu wynajmu, lokalizacji i konfiguracji. Opis odbiorników oraz harmonogram pozwalają ustalić zakres sprzętu, dostawy i zasilania. Po uzgodnieniu tych danych przygotujemy wycenę.',
  },
  {
    q: 'Czy można zapytać o zakup agregatu?',
    a: 'Tak. Przyjmujemy indywidualne zapytania o zakup. Model, stan, parametry, wyposażenie, dostępność, cenę i warunki dostawy potwierdzamy dla konkretnego oferowanego egzemplarza.',
  },
];

export const useCases = [
  {
    slug: 'zasilanie-budowy',
    title: 'Budowy i zaplecza',
    eyebrow: 'Agregaty na budowę',
    metaTitle: 'Agregat na budowę — wynajem i dobór | Zasilimy',
    metaDescription: 'Wynajem agregatów na budowę i zaplecze techniczne. Dobór do maszyn, rozruchu i harmonogramu, ustalenie konfiguracji oraz dostawy.',
    description: 'Zaplanuj zasilanie maszyn, urządzeń i zaplecza budowy. Dobieramy agregat do odbiorników, warunków rozruchu oraz harmonogramu robót. Dostawę i zakres konfiguracji uzgadniamy z uwzględnieniem aktualnego etapu projektu.',
    details: [
      'Lista urządzeń z mocą, napięciem i liczbą sztuk.',
      'Odbiorniki pracujące jednocześnie i ich warunki rozruchu.',
      'Godziny robót oraz zmiany zapotrzebowania w kolejnych etapach.',
      'Punkt przyłączenia, miejsce ustawienia i dostęp dla transportu.',
    ],
    sections: [
      {
        title: 'Maszyny i urządzenia w planie zasilania',
        text: 'Przygotuj listę pomp, sprężarek, narzędzi oraz wyposażenia zaplecza, które mają pracować z agregatu. Wskaż urządzenia używane jednocześnie i te uruchamiane okresowo. Dane z tabliczek lub dokumentacji pomagają uwzględnić rozruch oraz charakter odbiorników.',
      },
      {
        title: 'Zapotrzebowanie zmienia się z etapem robót',
        text: 'Na początku projektu energia może być potrzebna głównie dla zaplecza, a później dla kolejnych maszyn i instalacji. Opisz planowany rozwój prac oraz godziny użytkowania. Pozwoli to ustalić jednostkę, okres wynajmu i zakres konfiguracji właściwy dla wskazanego etapu.',
      },
      {
        title: 'Dostawa i przyłączenie do budowy',
        text: 'Uzgadniamy dostęp do miejsca ustawienia, rozładunek i trasę doprowadzenia zasilania. Warunki przyłączenia omawiamy z osobą odpowiedzialną za instalację. W ofercie określamy również wyposażenie oraz uzgodniony zakres organizacji paliwa i logistyki.',
      },
    ],
    faq: [
      {
        q: 'Czy agregat może zasilać plac bez stałego przyłącza?',
        a: 'To jedno z zastosowań agregatu. Do przygotowania konfiguracji potrzebujemy listy odbiorników, ich parametrów i harmonogramu. Ustalimy także miejsce jednostki, sposób rozdziału zasilania oraz zakres dostawy.',
      },
      {
        q: 'Czy rozruch pompy lub sprężarki wpływa na dobór?',
        a: 'Tak. Parametry podczas uruchamiania mogą różnić się od warunków normalnej pracy. Przekaż dokumentację lub dane urządzenia oraz informację o sposobie uruchamiania i innych odbiornikach działających w tym czasie.',
      },
      {
        q: 'Czy mogę wynająć agregat tylko na wybrany etap?',
        a: 'Przygotowujemy również oferty krótkoterminowe. Podaj daty, miejsce i przewidywane godziny pracy dziennie. Dostępność, warunki rozliczenia oraz możliwość przedłużenia uzgodnimy dla konkretnego zamówienia.',
      },
    ],
  },
  {
    slug: 'zasilanie-imprez',
    title: 'Eventy i imprezy',
    eyebrow: 'Zasilanie wydarzeń',
    metaTitle: 'Agregaty na eventy i imprezy — wynajem | Zasilimy',
    metaDescription: 'Dobór i wynajem agregatów na eventy, koncerty i imprezy plenerowe. Lista odbiorników, podział stref, harmonogram i organizacja dostawy.',
    description: 'Przygotuj zasilanie wydarzenia od montażu po demontaż. Uwzględniamy potrzeby sceny, oświetlenia, gastronomii i zaplecza. Konfigurację ustalamy na podstawie listy odbiorników, planu terenu oraz harmonogramu pracy.',
    details: [
      'Zapotrzebowanie poszczególnych ekip i stref wydarzenia.',
      'Godziny prób, programu, montażu oraz demontażu.',
      'Urządzenia wymagające szczególnych parametrów zasilania.',
      'Miejsce agregatu, dystrybucja energii i dostęp dla obsługi.',
    ],
    sections: [
      {
        title: 'Jedna lista potrzeb od wszystkich ekip',
        text: 'Zbierz zapotrzebowanie nagłośnienia, światła, gastronomii, klimatyzacji i pozostałego wyposażenia. Warto rozdzielić moce przyłączeniowe od rzeczywistego sposobu użytkowania. Informacja o tym, co pracuje jednocześnie, pomaga ustalić konfigurację i podział odbiorników.',
      },
      {
        title: 'Harmonogram obejmuje więcej niż program',
        text: 'Energia bywa potrzebna podczas prób, przygotowania terenu i pracy ekip po wydarzeniu. Podaj godziny użytkowania dla poszczególnych stref oraz daty dostępu dla transportu. Uzgodnimy dostawę, okres wynajmu i wymagania wobec zasilania w kolejnych fazach.',
      },
      {
        title: 'Ustawienie i rozdział zasilania',
        text: 'Plan terenu powinien wskazywać scenę, zaplecze, punkty gastronomiczne i możliwe miejsce agregatu. Omawiamy odległości, zakres dystrybucji oraz wymagania dotyczące dźwięku i dostępu. Sposób przyłączenia odbiorników uzgadniamy z ekipą odpowiedzialną za instalację wydarzenia.',
      },
    ],
    faq: [
      {
        q: 'Czy jeden agregat może obsługiwać kilka stref imprezy?',
        a: 'Możliwość takiej konfiguracji zależy od parametrów i sposobu pracy odbiorników oraz rozdziału zasilania. Prześlij zapotrzebowanie każdej strefy i plan terenu. Ustalimy odpowiedni zakres rozwiązania.',
      },
      {
        q: 'Co przekazać, jeśli sprzęt dostarczają różne firmy?',
        a: 'Poproś każdą ekipę o wymagania elektryczne, listę urządzeń i godziny pracy. Wskaż odbiorniki szczególnie wrażliwe na przerwę lub parametry zasilania. Zebrane informacje pomogą przygotować spójny plan.',
      },
      {
        q: 'Czy dobieracie agregat do wymagań dotyczących hałasu?',
        a: 'Podaj wymagania organizatora, sąsiedztwo i możliwe miejsca ustawienia. Uwzględnimy te informacje przy propozycji jednostki i logistyki. Parametry konkretnego urządzenia potwierdzamy w ofercie.',
      },
    ],
  },
  {
    slug: 'zasilanie-rezerwowe',
    title: 'Obiekty i rezerwa',
    eyebrow: 'Zasilanie rezerwowe obiektów',
    metaTitle: 'Zasilanie rezerwowe obiektów — agregaty | Zasilimy',
    metaDescription: 'Agregaty do zasilania rezerwowego i planowanych przerw. Dobór do odbiorników, sposobu przełączenia i instalacji konkretnego obiektu.',
    description: 'Zaplanuj rezerwowe źródło energii dla obiektu lub zasilanie na czas prac przy instalacji. Ustalimy priorytetowe odbiorniki, oczekiwany sposób pracy i warunki przyłączenia. Konfigurację dobieramy do wymagań konkretnego obiektu.',
    details: [
      'Lista odbiorników, które mają pracować podczas przerwy sieciowej.',
      'Dopuszczalny czas przerwy i wymagania poszczególnych urządzeń.',
      'Istniejąca instalacja oraz sposób przełączania źródeł.',
      'Przewidywane obciążenie, czas pracy i miejsce ustawienia.',
    ],
    sections: [
      {
        title: 'Wybierz odbiorniki potrzebne w czasie przerwy',
        text: 'Rezerwa może dotyczyć całego obiektu lub wybranych urządzeń. Zidentyfikuj instalacje, które mają działać w pierwszej kolejności, i określ ich parametry. Lista priorytetów pomaga rozmawiać o konfiguracji, wymaganej mocy oraz kolejności uruchamiania odbiorników.',
      },
      {
        title: 'Sposób przełączenia jest częścią projektu',
        text: 'Agregat, instalacja obiektu i układ przełączenia muszą być rozpatrywane wspólnie. Potrzebujemy informacji o istniejących rozwiązaniach oraz dopuszczalnej przerwie dla poszczególnych odbiorników. Warunki współpracy uzgadniamy z osobą odpowiedzialną za instalację przed realizacją.',
      },
      {
        title: 'Planowane prace i potrzeby rezerwowe',
        text: 'Przy modernizacji instalacji można wcześniej określić terminy, punkty przyłączenia i obciążenie. Dla rezerwy opisz przewidywany sposób użytkowania, wymagania rozruchu i dostęp do paliwa. W obu przypadkach jednostkę oraz zakres wyposażenia potwierdzamy w ofercie.',
      },
    ],
    faq: [
      {
        q: 'Czy samo podłączenie agregatu usuwa każdą przerwę?',
        a: 'Przełączenie na inne źródło może wymagać przerwy. Jeśli wybrane odbiorniki potrzebują podtrzymania, należy uwzględnić je w projekcie całego układu. Opisz wymagania i istniejące rozwiązania w zapytaniu.',
      },
      {
        q: 'Czy można zasilać tylko najważniejsze urządzenia?',
        a: 'Możemy omówić taki zakres. Wskaż urządzenia i ich priorytety oraz sposób wydzielenia odbiorników w instalacji. Szczegóły przyłączenia i konfiguracji ustalamy dla danego obiektu.',
      },
      {
        q: 'Co jest potrzebne do wyceny rezerwy dla obiektu?',
        a: 'Przygotuj listę obciążeń, dane rozdzielni lub opis punktu przyłączenia, wymagany sposób przełączenia i lokalizację. Podaj także termin lub planowany sposób użytkowania, miejsce agregatu oraz wymagania organizacyjne.',
      },
    ],
  },
];

export const benefits = [
  {
    title: 'SDMO KOHLER 60–500 kVA',
    description: 'Zakres mocy pozornej jednostek w ofercie. Konkretny model i tryb pracy dobieramy do Twoich odbiorników.',
  },
  {
    title: 'Dobór do obciążenia',
    description: 'Uwzględniamy parametry urządzeń, rozruch, jednoczesną pracę i harmonogram projektu.',
  },
  {
    title: 'Uzgodniona konfiguracja',
    description: 'Omawiamy sposób przyłączenia, dystrybucję energii i zakres wyposażenia potrzebny na miejscu.',
  },
  {
    title: 'Dostawa w Polsce i UE',
    description: 'Koordynujemy transport, termin dostawy i przygotowanie sprzętu zgodnie z ustalonym zakresem.',
  },
];

export const process = [
  {
    title: 'Opisz, co zasilamy',
    description: 'Podaj listę odbiorników, ich moce z jednostkami, lokalizację i termin. Opisz planowane godziny pracy.',
  },
  {
    title: 'Dobierzmy konfigurację',
    description: 'Omówimy moc, rozruch, sposób przyłączenia i wyposażenie. Przygotujemy indywidualną ofertę.',
  },
  {
    title: 'Zaplanujmy realizację',
    description: 'Po uzgodnieniu zamówienia ustalamy transport i przygotowanie sprzętu według harmonogramu projektu.',
  },
];

export const servicePages = {
  rental: {
    eyebrow: 'Wynajem agregatów prądotwórczych',
    title: 'Wynajem agregatów prądotwórczych',
    metaTitle: 'Wynajem agregatów prądotwórczych 60–500 kVA | Zasilimy',
    metaDescription: 'Wynajem agregatów SDMO KOHLER na budowy, eventy i do obiektów. Dobór mocy, konfiguracji oraz dostawy w Polsce i Unii Europejskiej.',
    intro: 'Wynajem agregatów prądotwórczych SDMO KOHLER do zasilania tymczasowego i rezerwowego. Dobieramy jednostkę do odbiorników, harmonogramu pracy oraz warunków instalacji. Organizujemy dostawę w Polsce i Unii Europejskiej.',
    sections: [
      {
        title: 'Na wydarzenie, etap robót lub dłuższy projekt',
        text: 'Przygotowujemy wynajem krótkoterminowy i długoterminowy. Podaj datę rozpoczęcia, przewidywany okres i godziny pracy. Dostępność sprzętu oraz warunki rozliczenia potwierdzamy w indywidualnej ofercie.',
      },
      {
        title: 'Moc i jednostka wynikają z potrzeb',
        text: 'Prześlij listę urządzeń, parametry i informację o ich jednoczesnej pracy. Uwzględniamy wymagania rozruchu oraz zmiany obciążenia. Zakres 60–500 kVA opisuje ofertę jednostek; konkretny model i jego parametry ustalamy przy doborze.',
      },
      {
        title: 'Zakres wyposażenia przed zamówieniem',
        text: 'Omówimy punkt przyłączenia, rozprowadzenie zasilania, okablowanie i planowany czas użytkowania. Zakres paliwa, transportu i przygotowania sprzętu określamy w ofercie. Warunki instalacji uzgadniamy z osobą za nią odpowiedzialną.',
      },
      {
        title: 'Wycena i dostawa do miejsca realizacji',
        text: 'Cena zależy od agregatu, okresu wynajmu, lokalizacji oraz konfiguracji. Podaj możliwości dojazdu i rozładunku. Na tej podstawie ustalimy ofertę, termin dostawy i pozostałe elementy realizacji.',
      },
    ],
    faq: [
      {
        q: 'Jakie dane są potrzebne do wynajmu agregatu?',
        a: 'Podaj lokalizację, termin, okres i godziny pracy. Dołącz listę odbiorników z mocami oraz jednostkami, informację o rozruchu i punkcie przyłączenia. Jeśli nie znasz wymaganej mocy, poproś o dobór.',
      },
      {
        q: 'Czy podana moc ma być w kW czy kVA?',
        a: 'Możesz przekazać dane w jednostce podanej w dokumentacji urządzenia. Zapisz wyraźnie, czy chodzi o kW, czy kVA, i dołącz pozostałe parametry. Nie traktujemy tych wartości jako zamiennych.',
      },
      {
        q: 'Czy paliwo, kable i transport są częścią wynajmu?',
        a: 'Zakres każdego zamówienia ustalamy indywidualnie. Opisz potrzeby oraz warunki na miejscu, a w ofercie określimy urządzenie, wyposażenie, logistykę i uzgodnione elementy zasilania.',
      },
      {
        q: 'Czy można wykorzystać więcej niż jeden agregat?',
        a: 'Możemy omówić projekt wymagający kilku jednostek. Podział odbiorników lub ewentualna współpraca źródeł zależą od konfiguracji. Pracę równoległą oceniamy dla konkretnych urządzeń i instalacji.',
      },
      {
        q: 'Jak otrzymać cenę wynajmu?',
        a: 'Zadzwoń pod numer +48 571 294 344 lub przygotuj zapytanie z opisem odbiorników i terminem. Po ustaleniu jednostki oraz zakresu dostawy przedstawimy indywidualną wycenę.',
      },
    ],
  },
  sale: {
    eyebrow: 'Sprzedaż agregatów prądotwórczych',
    title: 'Sprzedaż agregatów prądotwórczych',
    metaTitle: 'Sprzedaż agregatów prądotwórczych SDMO KOHLER | Zasilimy',
    metaDescription: 'Zapytaj o zakup agregatu SDMO KOHLER. Dobór jednostki do odbiorników, potwierdzenie stanu, wyposażenia i warunków indywidualnej oferty.',
    intro: 'Sprzedaż agregatów prądotwórczych w formie indywidualnej oferty. Opisz zastosowanie i potrzebne zasilanie lub wskaż wymagany model. Potwierdzimy dostępność konkretnej jednostki SDMO KOHLER oraz warunki zakupu.',
    sections: [
      {
        title: 'Dobór do sposobu użytkowania',
        text: 'Ustalamy, czy agregat ma zasilać projekt tymczasowy, pracować regularnie czy stanowić rezerwę obiektu. Potrzebne są lista odbiorników, godziny pracy, wymagania rozruchu i informacje o przyłączeniu.',
      },
      {
        title: 'Konkretny egzemplarz i parametry',
        text: 'W propozycji zakupu potwierdzamy model, stan, moc w danym trybie pracy oraz wyposażenie. Zakres 60–500 kVA opisuje ofertę, a dostępność jednostki do sprzedaży ustalamy indywidualnie.',
      },
      {
        title: 'Współpraca z instalacją',
        text: 'Wymagania dotyczące przełączenia, sterowania i ewentualnej współpracy z innymi źródłami trzeba omówić przed wyborem agregatu. Oceniamy je dla konkretnej jednostki, konfiguracji i infrastruktury obiektu.',
      },
      {
        title: 'Warunki zamówienia i logistyka',
        text: 'Cena, termin, zakres dostawy oraz ewentualne warunki gwarancji i wsparcia są częścią indywidualnej oferty. Podaj docelową lokalizację i możliwości rozładunku, aby ustalić przygotowanie realizacji.',
      },
    ],
    faq: [
      {
        q: 'Jak zapytać o zakup agregatu?',
        a: 'Podaj zastosowanie, listę odbiorników, sposób pracy i planowany termin. Możesz wskazać wymagany model albo poprosić o dobór. Potwierdzimy dostępność i przygotujemy propozycję dla konkretnego egzemplarza.',
      },
      {
        q: 'Czy oferowane jednostki są nowe czy używane?',
        a: 'Stan, wersję i wyposażenie potwierdzamy indywidualnie. Przekaż wymagania dotyczące urządzenia, dokumentacji oraz planowanego zastosowania, abyśmy mogli odnieść się do nich w ofercie.',
      },
      {
        q: 'Czy mogę kupić agregat do istniejącego układu rezerwowego?',
        a: 'Możemy omówić takie zapytanie. Potrzebne są dane instalacji, sposobu przełączenia i sterowania oraz odbiorników. Zgodność proponowanego urządzenia z układem wymaga potwierdzenia przed zamówieniem.',
      },
      {
        q: 'Czy pomożecie ustalić wymaganą moc?',
        a: 'Tak. Omawiamy parametry i rozruch urządzeń, ich jednoczesną pracę oraz harmonogram. Na tej podstawie pomagamy ustalić wymagania wobec agregatu i konfiguracji.',
      },
      {
        q: 'Czy organizujecie transport zakupionej jednostki?',
        a: 'Możemy skoordynować dostawę w Polsce lub Unii Europejskiej. Termin, dojazd, rozładunek i pozostały zakres transportu określamy w indywidualnej ofercie.',
      },
    ],
  },
};
