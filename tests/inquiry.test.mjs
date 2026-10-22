import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInquiry } from '../public/app.js';

test('rental inquiry preserves the chosen generator series, dates, location and quantity', () => {
  const inquiry = buildInquiry({
    service: 'rental',
    model: 'sdmo-kohler',
    location: '  Wrocław,   Polska  ',
    quantity: '2',
    start: '2026-11-03',
    duration: '1–2 tygodnie',
  });
  assert.equal(inquiry.subject, 'Wynajem agregatów prądotwórczych — SDMO KOHLER — Wrocław, Polska');
  assert.match(inquiry.body, /Model \/ seria: SDMO KOHLER/);
  assert.match(inquiry.body, /Lokalizacja realizacji: Wrocław, Polska/);
  assert.match(inquiry.body, /Wstępna liczba agregatów: 2/);
  assert.match(inquiry.body, /Planowany początek wynajmu: 03\.11\.2026/);
  assert.match(inquiry.body, /Planowany okres wynajmu: 1–2 tygodnie/);
});

test('sale inquiry includes site requirements but excludes stale rental dates', () => {
  const inquiry = buildInquiry({
    service: 'sale',
    model: 'sdmo-kohler',
    location: 'Opole',
    quantity: 1,
    start: '2026-11-03',
    duration: 'Kilka dni',
    powerDemand: '100 kVA — do potwierdzenia',
    loads: 'Pompy i elektronarzędzia; rozruch do ustalenia',
    operatingHours: '18:00–06:00',
    connection: 'Przyłącze i układ do ustalenia',
  });
  assert.equal(inquiry.subject, 'Zakup agregatów prądotwórczych — SDMO KOHLER — Opole');
  assert.match(inquiry.body, /ofertę zakupu agregatów prądotwórczych/);
  assert.match(inquiry.body, /Zapotrzebowanie na moc \(wg zgłoszenia\): 100 kVA — do potwierdzenia/);
  assert.match(inquiry.body, /Odbiorniki \/ rozruch:\nPompy i elektronarzędzia; rozruch do ustalenia/);
  assert.match(inquiry.body, /Planowane godziny pracy: 18:00–06:00/);
  assert.match(inquiry.body, /Przyłącze \/ układ zasilania: Przyłącze i układ do ustalenia/);
  assert.doesNotMatch(inquiry.body, /Planowany początek wynajmu|Planowany okres wynajmu|03\.11\.2026|Kilka dni/);
});

test('user details and multiline notes survive without introducing subject line breaks', () => {
  const inquiry = buildInquiry({
    location: 'Łódź\r\nplac A',
    model: 'Urządzenie\r\nz zapytania',
    quantity: 3,
    application: 'Impreza plenerowa',
    powerDemand: '  Około   100 kVA  ',
    loads: 'Nagłośnienie 30 kW.\r\nOświetlenie 20 kW.\rRozruch do potwierdzenia.',
    operatingHours: '  Od 18:00\r\ndo 06:00  ',
    connection: ' Do\nustalenia ',
    message: 'Wydarzenie na 300 osób.\r\nPraca: 10:00–18:00.\rProszę o kontakt.',
  });
  assert.match(inquiry.subject, /Łódź plac A$/);
  assert.doesNotMatch(inquiry.subject, /[\r\n]/);
  assert.match(inquiry.body, /Zastosowanie: Impreza plenerowa/);
  assert.match(inquiry.body, /Zapotrzebowanie na moc \(wg zgłoszenia\): Około 100 kVA/);
  assert.ok(inquiry.body.includes('Nagłośnienie 30 kW.\nOświetlenie 20 kW.\nRozruch do potwierdzenia.'));
  assert.match(inquiry.subject, /Urządzenie z zapytania/);
  assert.match(inquiry.body, /Planowane godziny pracy: Od 18:00 do 06:00/);
  assert.match(inquiry.body, /Przyłącze \/ układ zasilania: Do ustalenia/);
  assert.ok(inquiry.body.includes('Wydarzenie na 300 osób.\nPraca: 10:00–18:00.\nProszę o kontakt.'));
  assert.doesNotMatch(inquiry.body, /\r/);
});

test('unspecified equipment requests selection instead of assuming a model', () => {
  const inquiry = buildInquiry({ location: 'Poznań' });
  assert.equal(inquiry.subject, 'Wynajem agregatów prądotwórczych — Poznań');
  assert.match(inquiry.body, /Model \/ konfiguracja: proszę o dobór\./);
  assert.match(inquiry.body, /Wstępna liczba agregatów: 1/);
  assert.match(inquiry.body, /Planowany początek wynajmu: do uzgodnienia/);
  assert.match(inquiry.body, /Planowany okres wynajmu: do uzgodnienia/);
  assert.doesNotMatch(inquiry.body, /\bundefined\b|\bnull\b/);
  assert.doesNotMatch(inquiry.body, /Zapotrzebowanie na moc|Odbiorniki \/ rozruch:|Planowane godziny pracy:|Przyłącze \/ układ zasilania:|masztów|klimatyzac|nagrzewnic/i);
  assert.match(buildInquiry({ location: 'Poznań', quantity: 99 }).body, /Wstępna liczba agregatów: 99/);
});

test('the catalog series slug and human-readable brand names produce the expected series', () => {
  for (const [input, expected] of [
    ['sdmo-kohler', 'SDMO KOHLER'],
    ['  SDMO KOHLER  ', 'SDMO KOHLER'],
    ['Kohler SDMO', 'SDMO KOHLER'],
  ]) {
    const inquiry = buildInquiry({ location: 'Warszawa', model: input });
    assert.ok(inquiry.body.includes(`Model / seria: ${expected}`));
    assert.ok(inquiry.subject.includes(expected));
  }
});

test('power demand keeps the submitted units without conversion, sizing or parallel-operation claims', () => {
  const inquiry = buildInquiry({
    location: 'Gdańsk',
    powerDemand: '100 kVA',
    loads: 'Lista odbiorników do potwierdzenia',
    operatingHours: 'Całą noc, do uzgodnienia',
  });
  assert.match(inquiry.body, /Zapotrzebowanie na moc \(wg zgłoszenia\): 100 kVA/);
  assert.match(inquiry.body, /Planowane godziny pracy: Całą noc, do uzgodnienia/);
  assert.match(inquiry.body, /Wstępna liczba agregatów: 1/);
  assert.match(inquiry.body, /proszę o dobór/);
  assert.doesNotMatch(inquiry.body, /\bkW\b|obliczon|zalecan.*liczb|równoległ|synchroniz/i);
  const watts = buildInquiry({ location: 'Gdańsk', powerDemand: '80 kW' });
  assert.match(watts.body, /Zapotrzebowanie na moc \(wg zgłoszenia\): 80 kW/);
  assert.doesNotMatch(watts.body, /\bkVA\b/);
});

test('empty and whitespace-only locations cannot produce an inquiry', () => {
  for (const location of [undefined, null, '', '   ', '\n\t']) {
    assert.throws(() => buildInquiry({ location }), TypeError);
  }
});

test('invalid quantities are rejected instead of sending an unusable request', () => {
  for (const quantity of [0, -1, 100, 1.5, 'abc', '', Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.throws(() => buildInquiry({ location: 'Wrocław', quantity }), RangeError);
  }
});
