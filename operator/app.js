const nawigacja = [
  ["pulpit", "⌁", "Dzisiaj", "GŁÓWNE"],
  ["kalendarz", "▦", "Kalendarz", "REZERWACJE I GOŚCIE"], ["rezerwacje", "⌂", "Rezerwacje", "REZERWACJE I GOŚCIE"], ["wiadomosci", "✉", "Wiadomości", "REZERWACJE I GOŚCIE"],
  ["ceny", "zł", "Ceny i dostępność", "CENY I SPRZEDAŻ"], ["revenue", "↗", "Revenue management", "CENY I SPRZEDAŻ"], ["sprzedaz", "◎", "Sprzedaż bezpośrednia", "CENY I SPRZEDAŻ"],
  ["koordynatorzy", "☷", "Koordynatorzy i zadania", "OPERACJE"], ["sprzatanie", "✓", "Plan sprzątania", "OPERACJE"], ["panel_sprzatajacej", "◫", "Panel pracownika", "OPERACJE"], ["jakosc", "★", "Kontrola jakości", "OPERACJE"], ["magazyn", "▧", "Magazyn i pralnia", "OPERACJE"], ["usterki", "◇", "Usterki", "OPERACJE"], ["zlota_raczka", "⚒", "Złota rączka", "OPERACJE"], ["zespol", "♙", "Zespół i rozliczenia", "OPERACJE"],
  ["finanse", "₿", "Finanse", "FINANSE I WŁAŚCICIELE"], ["wlasciciele", "◉", "Panel właściciela", "FINANSE I WŁAŚCICIELE"], ["raporty", "▤", "Raporty", "FINANSE I WŁAŚCICIELE"],
  ["ai_koordynator", "✦", "AI koordynator", "SYSTEM"], ["automatyzacje", "↻", "Automatyzacje", "SYSTEM"], ["integracje", "⌘", "Integracje", "SYSTEM"], ["audyt", "≡", "Audyt", "SYSTEM"], ["apartamenty", "▥", "Apartamenty", "SYSTEM"],
];

const portfele = [
  ["Mokotów Residence", "Warszawa · Mokotów", "Horyzont Nieruchomości"],
  ["Wola City", "Warszawa · Wola", "City Stay Polska"],
  ["Stare Miasto", "Kraków · Stare Miasto", "Dziedzictwo Apartamenty"],
  ["Nad Motławą", "Gdańsk · Śródmieście", "Bałtyk Homes"],
  ["Rynek Premium", "Wrocław · Rynek", "Urban Keys"],
  ["Portowa Przystań", "Gdynia · Śródmieście", "Północny Najem"],
].map(([nazwa, miasto, wlasciciel]) => ({ nazwa, miasto, wlasciciel, waluta: "PLN" }));

const apartamenty = portfele.flatMap((p, grupa) => Array.from({ length: 6 }, (_, indeks) => {
  const numer = grupa * 6 + indeks + 1;
  return {
    id: `APT-${String(numer).padStart(3, "0")}`,
    nazwa: `${p.nazwa} ${String(indeks + 1).padStart(2, "0")}`,
    miasto: p.miasto, wlasciciel: p.wlasciciel, waluta: p.waluta,
    pokoje: [2, 2, 3, 3, 4, 2][indeks], lazienki: [1, 1, 1, 2, 1, 2][indeks],
    oblozenie: 66 + ((numer * 7) % 29),
    status: numer === 17 ? "Wymaga mapowania" : numer === 29 ? "Usterka" : "Gotowy",
  };
}));

const miesiace = [[9, "Wrzesień"], [10, "Październik"], [11, "Listopad"], [12, "Grudzień"]].map(([numer, nazwa]) => ({ numer, nazwa }));
const kanaly = ["Booking.com", "Airbnb", "Expedia", "Bezpośrednia"];
const imiona = ["Ada Kowalska", "Mark Smith", "Julia Nowak", "Liam Davis", "Zofia Wiśniewska", "Oliver Brown", "Laura Zielińska", "Noah Wilson", "Maja Wójcik", "Emma Taylor", "Jan Kamiński", "Lucas Martin", "Natalia Lewandowska", "Sofia Rossi", "Piotr Szymański", "Anna Müller", "Michał Dąbrowski", "Ethan Clark", "Klara Woźniak", "Leo Anderson", "Aleksandra Kozłowska", "Mia Thomas", "Tomasz Jankowski", "Amelia White"];
const pytania = ["Czy zameldowanie po 20:00 będzie możliwe?", "Czy w apartamencie jest łóżeczko dla dziecka?", "Gdzie znajduje się parking?", "Czy możemy zostawić bagaże przed zameldowaniem?", "Czy kod do drzwi otrzymamy w dniu przyjazdu?", "Dziękuję. Wszystko jasne, do zobaczenia!"];

const stan = { widok: "pulpit", miesiac: 9, szukajKalendarz: "", miesiacRezerwacji: 9, kanalRezerwacji: "", szukajRezerwacji: "", portfelCen: portfele[0].nazwa, apartamentCen: "", platformaCen: "Booking.com", dataStartCen: "2026-09-01", zakresDniCen: 30, trybWyboruCen: false, slackAutoStatus: true, slackMinimalnaLiczbaZdjec: 3, integrationTab: "centrum", syncingProvider: null, wybranyWatek: null, wybranaRezerwacja: null, zakladkaPanelu: "szczegoly", wybranaSprzatajaca: "Anna Kowalska", wybranaOsobaDoPrzydzialu: "Anna Kowalska", dataPlanuSprzatania: "2026-09-09", miesiacDyspozycji: 9, trybDyspozycji: "Dostępna", revenueZakres: "30", aiFiltr: "otwarte", raportZakladka: "sprzedaz", raportMiesiac: 9, raportPortfel: "", raportKanal: "", raportStatus: "wszystkie", raportWidok: "tabela", raportApartamentId: null, wlascicielNazwa: portfele[0].wlasciciel, wlascicielMiesiac: 9, wlascicielApartamentId: null, wlascicielZakladka: "wynik", koordynatorOsoba: "Ola Operacje", koordynatorKategoria: "", koordynatorApartament: "", koordynatorSzukaj: "" };

const iso = (miesiac, dzien) => `2026-${String(miesiac).padStart(2, "0")}-${String(dzien).padStart(2, "0")}`;
const dniWMiesiacu = (miesiac) => new Date(Date.UTC(2026, miesiac, 0)).getUTCDate();
const dodajDni = (dataIso, ile) => { const d = new Date(`${dataIso}T12:00:00Z`); d.setUTCDate(d.getUTCDate() + ile); return d.toISOString().slice(0, 10); };
const liczbaNocy = (od, doDaty) => Math.round((new Date(`${doDaty}T12:00:00Z`) - new Date(`${od}T12:00:00Z`)) / 86400000);
const polskaData = (dataIso) => new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${dataIso}T12:00:00Z`));
const krotkaData = (dataIso) => new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "short" }).format(new Date(`${dataIso}T12:00:00Z`));
const pelnaPolskaData = (dataIso) => new Intl.DateTimeFormat("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${dataIso}T12:00:00Z`));
const odmien = (n, jeden, kilka, wiele) => n === 1 ? jeden : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? kilka : wiele;
const bezpiecznyTekst = (v) => String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const apartamentPoId = (id) => apartamenty.find((a) => a.id === id);

function utworzRezerwacje() {
  const wynik = [];
  let numer = 721000;
  apartamenty.forEach((apartament, ai) => miesiace.forEach(({ numer: miesiac }, mi) => {
    const terminy = [
      [2 + ((ai * 5 + mi * 3) % 15), 3 + ((ai + mi) % 4)],
      [21 + ((ai * 2 + mi) % 6), 2 + ((ai + mi * 2) % 4)],
    ];
    terminy.forEach(([start, dlugosc], ti) => {
      numer += 1;
      const przyjazd = iso(miesiac, start);
      const wyjazd = dodajDni(przyjazd, dlugosc);
      const kanal = kanaly[(ai + mi + ti) % kanaly.length];
      const gosc = imiona[(ai * 2 + mi * 5 + ti) % imiona.length];
      const anulowana = numer % 29 === 0;
      const status = anulowana ? "Anulowana" : wyjazd <= "2026-09-05" ? "Zakończona" : przyjazd <= "2026-09-05" ? "W trakcie pobytu" : "Potwierdzona";
      const kod = kanal === "Booking.com" ? "BKG" : kanal === "Airbnb" ? "AIR" : kanal === "Expedia" ? "EXP" : "DIR";
      const stawka = 330 + ((ai * 37 + mi * 23) % 240);
      const email = gosc.toLocaleLowerCase("pl").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]+/g, ".").replace(/^\.|\.$/g, "");
      wynik.push({
        id: `${kod}-${numer}`, apartamentId: apartament.id, gosc, kanal, status, przyjazd, wyjazd,
        dorosli: 1 + ((ai + ti) % 3), dzieci: (ai + mi) % 5 === 0 ? 1 : 0, kwota: stawka * dlugosc,
        telefon: `+48 5${String(10000000 + numer).slice(-8)}`, email: `${email}@example.test`,
        meldunek: ai % 3 === 0 ? "Samodzielny · kod do zamka" : "Odbiór kluczy w skrytce",
        notatka: ai % 4 === 0 ? "Gość prosi o spokojny apartament i późne zameldowanie." : "Brak dodatkowych wymagań.",
        wiadomosci: [
          { typ: "gosc", autor: gosc, czas: "09:14", tekst: pytania[(ai + mi) % pytania.length] },
          { typ: "zespol", autor: "Anna Demo", czas: "09:21", tekst: "Potwierdzamy rezerwację. Szczegóły zameldowania prześlemy automatycznie przed przyjazdem." },
        ],
      });
    });
  }));
  return wynik;
}

const rezerwacjeDemo = utworzRezerwacje();
const rezerwacjaPoId = (id) => rezerwacjeDemo.find((r) => r.id === id);
const rezerwacjeAktywne = rezerwacjeDemo.filter((r) => r.status !== "Anulowana");
const RAPORT_DZISIAJ = "2026-09-08";
const formatPLN = (wartosc) => `${Math.round(wartosc).toLocaleString("pl-PL")} PLN`;
const portfelApartamentu = (apartament) => portfele.find((p) => apartament.nazwa.startsWith(p.nazwa));
const poczatekMiesiaca = (miesiac) => iso(miesiac, 1);
const poczatekNastepnegoMiesiaca = (miesiac) => miesiac === 12 ? "2027-01-01" : iso(miesiac + 1, 1);

function noceRezerwacjiWMiesiacu(rezerwacja, miesiac) {
  const od = rezerwacja.przyjazd > poczatekMiesiaca(miesiac) ? rezerwacja.przyjazd : poczatekMiesiaca(miesiac);
  const doDaty = rezerwacja.wyjazd < poczatekNastepnegoMiesiaca(miesiac) ? rezerwacja.wyjazd : poczatekNastepnegoMiesiaca(miesiac);
  return Math.max(0, liczbaNocy(od, doDaty));
}

function daneRozliczenia(rezerwacja) {
  const stawki = { "Booking.com": .155, Airbnb: .142, Expedia: .173, "Bezpośrednia": .022 };
  const opoznienie = { "Booking.com": 3, Airbnb: 1, Expedia: 5 };
  const prowizja = Math.round(rezerwacja.kwota * stawki[rezerwacja.kanal]);
  const doKonta = rezerwacja.kwota - prowizja;
  const dataWyplaty = rezerwacja.kanal === "Bezpośrednia" ? dodajDni(rezerwacja.przyjazd, -5) : dodajDni(rezerwacja.wyjazd, opoznienie[rezerwacja.kanal]);
  const numer = Number(rezerwacja.id.match(/\d+/)?.[0] || 0);
  const wstrzymana = numer % 37 === 0;
  const statusWyplaty = wstrzymana ? "Wstrzymana" : dataWyplaty <= RAPORT_DZISIAJ ? "Wypłacona" : dataWyplaty < poczatekNastepnegoMiesiaca(stan.raportMiesiac) ? "Zaplanowana" : "Po miesiącu";
  const etapPobytu = rezerwacja.wyjazd <= RAPORT_DZISIAJ ? "Zrealizowana" : rezerwacja.przyjazd <= RAPORT_DZISIAJ ? "W trakcie pobytu" : "Potwierdzona";
  const zamknieta = etapPobytu === "Zrealizowana" && statusWyplaty === "Wypłacona";
  return { prowizja, doKonta, dataWyplaty, statusWyplaty, etapPobytu, zamknieta };
}

function rezerwacjeRaportu() {
  return rezerwacjeAktywne.filter((r) => {
    const apartament = apartamentPoId(r.apartamentId);
    const portfel = portfelApartamentu(apartament);
    return noceRezerwacjiWMiesiacu(r, stan.raportMiesiac) > 0
      && (!stan.raportPortfel || portfel?.nazwa === stan.raportPortfel)
      && (!stan.raportKanal || r.kanal === stan.raportKanal);
  });
}

function wierszeSprzedazyRaportu() {
  const rezerwacje = rezerwacjeRaportu();
  return apartamenty
    .filter((a) => !stan.raportPortfel || portfelApartamentu(a)?.nazwa === stan.raportPortfel)
    .map((apartament) => {
      const lokalne = rezerwacje.filter((r) => r.apartamentId === apartament.id);
      const pokojonoce = lokalne.reduce((s, r) => s + noceRezerwacjiWMiesiacu(r, stan.raportMiesiac), 0);
      const przychod = lokalne.reduce((s, r) => s + Math.round(r.kwota * noceRezerwacjiWMiesiacu(r, stan.raportMiesiac) / liczbaNocy(r.przyjazd, r.wyjazd)), 0);
      const prowizje = lokalne.reduce((s, r) => { const d = daneRozliczenia(r); return s + Math.round(d.prowizja * noceRezerwacjiWMiesiacu(r, stan.raportMiesiac) / liczbaNocy(r.przyjazd, r.wyjazd)); }, 0);
      return { apartament, rezerwacje: lokalne, pokojonoce, przychod, prowizje, adr: pokojonoce ? Math.round(przychod / pokojonoce) : 0, oblozenie: Math.round(pokojonoce / dniWMiesiacu(stan.raportMiesiac) * 100) };
    })
    .filter((w) => w.rezerwacje.length)
    .sort((a, b) => b.przychod - a.przychod);
}

function kosztSprzatania(apartament) {
  if (apartament.lazienki >= 2) return 180;
  return apartament.pokoje > 2 ? 150 : 135;
}

function rozliczenieWlasciciela(rezerwacja, miesiac = stan.wlascicielMiesiac) {
  const apartament = apartamentPoId(rezerwacja.apartamentId);
  const noce = noceRezerwacjiWMiesiacu(rezerwacja, miesiac);
  const wszystkieNoce = liczbaNocy(rezerwacja.przyjazd, rezerwacja.wyjazd);
  const brutto = Math.round(rezerwacja.kwota * noce / wszystkieNoce);
  const prowizjaPortalu = rezerwacja.kanal === "Bezpośrednia" ? 0 : Math.round(brutto * .162);
  const wplywPoPortalu = brutto - prowizjaPortalu;
  const vat = Math.round(wplywPoPortalu * .08);
  const poVat = wplywPoPortalu - vat;
  const wynagrodzenieOperatora = Math.round(poVat * .20);
  const pierwszyDzienNastepnego = poczatekNastepnegoMiesiaca(miesiac);
  const sprzatanie = rezerwacja.wyjazd >= poczatekMiesiaca(miesiac) && rezerwacja.wyjazd < pierwszyDzienNastepnego ? kosztSprzatania(apartament) : 0;
  const dlaWlasciciela = poVat - wynagrodzenieOperatora - sprzatanie;
  return { apartament, noce, brutto, prowizjaPortalu, wplywPoPortalu, vat, poVat, wynagrodzenieOperatora, sprzatanie, dlaWlasciciela };
}

function wierszeWlasciciela() {
  const lokale = apartamenty.filter((a) => a.wlasciciel === stan.wlascicielNazwa);
  const rezerwacje = rezerwacjeAktywne.filter((r) => lokale.some((a) => a.id === r.apartamentId) && noceRezerwacjiWMiesiacu(r, stan.wlascicielMiesiac) > 0);
  return lokale.map((apartament) => {
    const lokalne = rezerwacje.filter((r) => r.apartamentId === apartament.id);
    const rozliczenia = lokalne.map((r) => ({ rezerwacja: r, dane: rozliczenieWlasciciela(r) }));
    const suma = (pole) => rozliczenia.reduce((s, r) => s + r.dane[pole], 0);
    return { apartament, rozliczenia, rezerwacje: lokalne.length, noce: suma("noce"), brutto: suma("brutto"), prowizjaPortalu: suma("prowizjaPortalu"), vat: suma("vat"), wynagrodzenieOperatora: suma("wynagrodzenieOperatora"), sprzatanie: suma("sprzatanie"), dlaWlasciciela: suma("dlaWlasciciela") };
  }).sort((a, b) => b.dlaWlasciciela - a.dlaWlasciciela);
}
const nadpisaneCeny = new Map();
const nadpisaneRestrykcje = new Map();
const wybraneCeny = new Set();

function kluczCeny(apartamentId, dataIso, platforma = stan.platformaCen) { return `${apartamentId}|${dataIso}|${platforma}`; }
function cenaBazowa(apartamentId, dataIso, platforma = stan.platformaCen) {
  const indeks = apartamenty.findIndex((a) => a.id === apartamentId);
  const data = new Date(`${dataIso}T12:00:00Z`);
  const weekend = [5, 6].includes(data.getUTCDay()) ? 85 : 0;
  const sezon = (Number(dataIso.slice(5, 7)) - 9) * 18;
  const mnoznikKanalu = { "Booking.com": 1, Airbnb: 1.05, Expedia: 1.03, "Bezpośrednia": .94 }[platforma] || 1;
  return Math.round((315 + (indeks % 6) * 28 + weekend + sezon) * mnoznikKanalu);
}
function pobierzCene(apartamentId, dataIso, platforma = stan.platformaCen) { return nadpisaneCeny.get(kluczCeny(apartamentId, dataIso, platforma)) ?? cenaBazowa(apartamentId, dataIso, platforma); }
function pobierzRestrykcje(apartamentId, dataIso, platforma = stan.platformaCen) {
  const dzienTygodnia = new Date(`${dataIso}T12:00:00Z`).getUTCDay();
  return nadpisaneRestrykcje.get(kluczCeny(apartamentId, dataIso, platforma)) || { minNocy: [5, 6].includes(dzienTygodnia) ? 3 : 2, zamkniete: false, bezPrzyjazdu: false };
}

const zespolSprzatajacy = [
  { imieNazwisko: "Anna Kowalska", inicjaly: "AK", strefa: "Mokotów i Wola", telefon: "+48 500 210 101" },
  { imieNazwisko: "Zofia Nowak", inicjaly: "ZN", strefa: "Śródmieście", telefon: "+48 500 210 102" },
  { imieNazwisko: "Marta Król", inicjaly: "MK", strefa: "Stare Miasto", telefon: "+48 500 210 103" },
  { imieNazwisko: "Kinga Zielińska", inicjaly: "KZ", strefa: "Wola i Mokotów", telefon: "+48 500 210 104" },
  { imieNazwisko: "Paweł Wójcik", inicjaly: "PW", strefa: "Gdańsk i Gdynia", telefon: "+48 500 210 105" },
  { imieNazwisko: "Robert Mazur", inicjaly: "RM", strefa: "Wrocław", telefon: "+48 500 210 106" },
];

const datyPlanuSprzatania = Array.from({ length: 14 }, (_, i) => dodajDni("2026-09-09", i));
const dyspozycyjnoscSprzatania = new Map();
zespolSprzatajacy.forEach((osoba, oi) => {
  for (let miesiac = 9; miesiac <= 12; miesiac += 1) {
    for (let dzien = 1; dzien <= dniWMiesiacu(miesiac); dzien += 1) {
      const data = iso(miesiac, dzien);
      const status = data === "2026-09-09" ? "Dostępna" : (dzien + oi * 2) % 7 === 0 ? "Wolne" : (dzien + oi) % 5 === 0 ? "Nieokreślone" : "Dostępna";
      dyspozycyjnoscSprzatania.set(`${osoba.imieNazwisko}|${data}`, status);
    }
  }
});
const pobierzDyspozycje = (imieNazwisko, data) => dyspozycyjnoscSprzatania.get(`${imieNazwisko}|${data}`) || "Nieokreślone";
const dostepniWData = (data) => zespolSprzatajacy.filter((osoba) => pobierzDyspozycje(osoba.imieNazwisko, data) === "Dostępna");

const uwagiSprzatania = [
  "Proszę zwrócić szczególną uwagę na okna — gość zgłaszał, że są bardzo brudne.",
  "Przygotować łóżeczko dziecięce i dodatkowy komplet ręczników.",
  "Sprawdzić ekspres do kawy oraz uzupełnić kapsułki.",
  "",
  "Nowy gość przyjeżdża wcześniej — lokal musi być gotowy do 14:00.",
  "",
];

const zadaniaSprzatania = datyPlanuSprzatania.flatMap((dataSprzatania, di) => {
  const liczbaZadan = di === 0 ? 12 : 6 + (di % 4);
  const dostepni = dostepniWData(dataSprzatania);
  return Array.from({ length: liczbaZadan }, (_, i) => {
    const apartament = apartamenty[(di * 7 + i) % apartamenty.length];
    const rezerwacja = rezerwacjeAktywne.find((r) => r.apartamentId === apartament.id);
    return {
      id: `CLN-${501 + di * 20 + i}`, rezerwacjaId: rezerwacja?.id || "", apartamentId: apartament.id,
      dataSprzatania, osoba: dostepni.length ? dostepni[i % dostepni.length].imieNazwisko : "Nieprzypisane",
      okno: `${krotkaData(dataSprzatania)} · ${i % 3 === 0 ? "10:00–14:00" : i % 3 === 1 ? "11:00–15:00" : "12:00–16:00"}`,
      nastepnyCheckin: i % 4 === 0 ? "14:00" : i % 2 === 0 ? "15:00" : "16:00",
      status: dostepni.length ? "Zaplanowane" : "Wymaga przypisania", uwagaAdmin: uwagiSprzatania[(i + di) % uwagiSprzatania.length],
      checklista: ["Pościel i ręczniki wymienione", "Łazienka zdezynfekowana", "Kuchnia i wyposażenie sprawdzone", "Zdjęcia po sprzątaniu dodane"].map((tekst) => ({ tekst, gotowe: false })),
    };
  });
});

const zdarzeniaSlack = [
  { id: "SLK-9021", czas: "10:42", autor: "Kinga Zielińska", apartamentId: "APT-009", zdjecia: 5, status: "Przetworzono" },
  { id: "SLK-9020", czas: "09:58", autor: "Robert Mazur", apartamentId: "APT-020", zdjecia: 4, status: "Przetworzono" },
  { id: "SLK-9019", czas: "09:17", autor: "Marta Król", apartamentId: "APT-001", zdjecia: 2, status: "Oczekuje na zdjęcie" },
];

const zdarzeniaSynchronizacji = [
  { provider: "Channex", operacja: "RESERVATIONS_PULL", obiekt: "Wszystkie obiekty", czas: "Dzisiaj, 08:32", requestId: "req_chx_0907_0832", status: "SYNCED", proba: 1 },
  { provider: "Channex", operacja: "AVAILABILITY_PUSH", obiekt: "Mokotów Residence", czas: "Dzisiaj, 08:27", requestId: "req_chx_0907_0827", status: "SYNCED", proba: 1 },
  { provider: "IdoBooking", operacja: "CONNECTION_TEST", obiekt: "Brak mapowania", czas: "Dzisiaj, 08:20", requestId: "req_ido_0907_0820", status: "AUTH_REQUIRED", proba: 1 },
  { provider: "Channex", operacja: "MESSAGE_PULL", obiekt: "Wola City", czas: "Dzisiaj, 08:14", requestId: "req_chx_0907_0814", status: "SYNCED", proba: 1 },
];

const czySprzatanieGotowe = (z) => z.status.toLocaleLowerCase("pl").includes("gotowe");

const usterkiDemo = [
  ["ISS-1041", "Wyciek wody pod zlewem", "APT-017", "Wysoki", "Otwarte", "Podczas sprzątania zauważono wodę pod syfonem. Wymagana szybka weryfikacja hydraulika.", "Nieprzypisane"],
  ["ISS-1040", "Nie działa lampa w sypialni", "APT-001", "Średni", "W realizacji", "Prawdopodobnie uszkodzony zasilacz lampy przy łóżku.", "Tomasz"],
  ["ISS-1039", "Luźny uchwyt szafy", "APT-009", "Niski", "Oczekuje", "Zamówiono nowy komplet mocowań.", "Paweł"],
  ["ISS-1038", "Problem z dźwiękiem domofonu", "APT-020", "Średni", "Otwarte", "Gość zgłosił brak dźwięku po naciśnięciu przycisku wejściowego.", "Nieprzypisane"],
].map(([id, tytul, apartamentId, priorytet, status, opis, osoba]) => ({ id, tytul, apartamentId, priorytet, status, opis, osoba }));

const koordynatorzy = [
  { imieNazwisko: "Ola Operacje", inicjaly: "OO", obszar: "Warszawa · Mokotów i Wola", telefon: "+48 500 220 101" },
  { imieNazwisko: "Michał Koordynator", inicjaly: "MK", obszar: "Kraków · Stare Miasto", telefon: "+48 500 220 102" },
  { imieNazwisko: "Karolina Operacje", inicjaly: "KO", obszar: "Gdańsk i Gdynia", telefon: "+48 500 220 103" },
  { imieNazwisko: "Piotr Koordynator", inicjaly: "PK", obszar: "Wrocław · Rynek", telefon: "+48 500 220 104" },
];

const kategorieZadanKoordynatorow = ["Konkretny apartament", "Znajdź specjalistę", "Dodaj ogłoszenie o pracę", "Kontakt z właścicielem", "Operacje bieżące"];
const zadaniaKoordynatorow = [
  { id: "KOR-101", tytul: "Ustalić termin naprawy domofonu", opis: "Gość zgłosił brak dźwięku. Trzeba potwierdzić termin wejścia serwisu przed kolejnym pobytem.", kategoria: "Konkretny apartament", apartamentId: "APT-020", koordynator: "Ola Operacje", termin: "2026-09-09", priorytet: "Pilne", status: "W trakcie", historia: [{ czas: "Dzisiaj · 09:20", autor: "Ola Operacje", status: "W trakcie", opis: "Skontaktowałam się z administracją budynku. Czekam na potwierdzenie wejścia technika między 13:00 a 15:00." }] },
  { id: "KOR-102", tytul: "Dodać ogłoszenie dla pokojowej", opis: "Potrzebna dodatkowa osoba do obsługi weekendów w Warszawie.", kategoria: "Dodaj ogłoszenie o pracę", apartamentId: "", koordynator: "Ola Operacje", termin: "2026-09-12", priorytet: "Normalne", status: "Do zrobienia", historia: [{ czas: "Wczoraj · 15:40", autor: "Ola Operacje", status: "Do zrobienia", opis: "Zadanie utworzone. Do przygotowania zakres obowiązków i widełki godzinowe." }] },
  { id: "KOR-103", tytul: "Potwierdzić zgodę na wymianę materaca", opis: "Właściciel powinien zatwierdzić koszt nowego materaca po reklamacji gościa.", kategoria: "Kontakt z właścicielem", apartamentId: "APT-004", koordynator: "Ola Operacje", termin: "2026-09-10", priorytet: "Normalne", status: "Do zrobienia", historia: [{ czas: "Dzisiaj · 08:05", autor: "Ola Operacje", status: "Do zrobienia", opis: "Przygotowano dwa warianty cenowe do wysłania właścicielowi." }] },
  { id: "KOR-104", tytul: "Zamknąć zgłoszenie uszkodzonej lampy", opis: "Wymieniono zasilacz i sprawdzono oświetlenie w sypialni.", kategoria: "Konkretny apartament", apartamentId: "APT-001", koordynator: "Ola Operacje", termin: "2026-09-07", priorytet: "Normalne", status: "Zakończone", historia: [{ czas: "7 wrz · 16:35", autor: "Ola Operacje", status: "Zakończone", opis: "Technik wymienił zasilacz. Lampa działa, zdjęcie kontrolne dodano do karty apartamentu." }] },
  { id: "KOR-105", tytul: "Znaleźć firmę do prania zasłon", opis: "Porównać termin, odbiór i koszt prania zasłon dla sześciu lokali.", kategoria: "Znajdź specjalistę", apartamentId: "APT-013", koordynator: "Michał Koordynator", termin: "2026-09-14", priorytet: "Normalne", status: "W trakcie", historia: [{ czas: "Dzisiaj · 10:10", autor: "Michał Koordynator", status: "W trakcie", opis: "Mam dwie oferty. Czekam na trzecią wycenę i informację o terminie odbioru." }] },
  { id: "KOR-106", tytul: "Sprawdzić komplet kluczy awaryjnych", opis: "Zweryfikować podpisane komplety dla wszystkich lokali Starego Miasta.", kategoria: "Operacje bieżące", apartamentId: "", koordynator: "Michał Koordynator", termin: "2026-09-11", priorytet: "Normalne", status: "Do zrobienia", historia: [{ czas: "Wczoraj · 12:15", autor: "Michał Koordynator", status: "Do zrobienia", opis: "Lista lokali przygotowana do kontroli." }] },
  { id: "KOR-107", tytul: "Umówić serwis ekspresu do kawy", opis: "Ekspres zatrzymuje program odkamieniania i pokazuje błąd.", kategoria: "Konkretny apartament", apartamentId: "APT-026", koordynator: "Karolina Operacje", termin: "2026-09-09", priorytet: "Pilne", status: "Do zrobienia", historia: [{ czas: "Dzisiaj · 07:50", autor: "Karolina Operacje", status: "Do zrobienia", opis: "Zgłoszenie ze sprzątania potwierdzone zdjęciem komunikatu błędu." }] },
  { id: "KOR-108", tytul: "Znaleźć hydraulika dyżurnego", opis: "Potrzebny wykonawca dostępny wieczorami i w weekendy dla Trójmiasta.", kategoria: "Znajdź specjalistę", apartamentId: "", koordynator: "Karolina Operacje", termin: "2026-09-16", priorytet: "Normalne", status: "W trakcie", historia: [{ czas: "Dzisiaj · 09:45", autor: "Karolina Operacje", status: "W trakcie", opis: "Rozmawiałam z jedną firmą. Weryfikuję stawkę za dojazd i gwarantowany czas reakcji." }] },
  { id: "KOR-109", tytul: "Przekazać rozliczenie wymiany zamka", opis: "Koszt został zatwierdzony i opisany dla właściciela lokalu.", kategoria: "Kontakt z właścicielem", apartamentId: "APT-031", koordynator: "Karolina Operacje", termin: "2026-09-06", priorytet: "Normalne", status: "Zakończone", historia: [{ czas: "6 wrz · 14:20", autor: "Karolina Operacje", status: "Zakończone", opis: "Właściciel otrzymał fakturę, protokół i zdjęcia. Potwierdził rozliczenie." }] },
  { id: "KOR-110", tytul: "Zorganizować przegląd klimatyzacji", opis: "Ustalić wizytę bez kolizji z rezerwacjami i potwierdzić dostęp technika.", kategoria: "Konkretny apartament", apartamentId: "APT-032", koordynator: "Piotr Koordynator", termin: "2026-09-13", priorytet: "Normalne", status: "W trakcie", historia: [{ czas: "Wczoraj · 17:05", autor: "Piotr Koordynator", status: "W trakcie", opis: "Termin wstępnie zarezerwowany na 11 września po check-oucie. Czekam na zgodę gościa na wejście serwisu." }] },
  { id: "KOR-111", tytul: "Uzupełnić instrukcję parkingu", opis: "Dodać nowe zdjęcie bramy i opis miejsca postojowego do instrukcji przyjazdu.", kategoria: "Konkretny apartament", apartamentId: "APT-034", koordynator: "Piotr Koordynator", termin: "2026-09-10", priorytet: "Normalne", status: "Do zrobienia", historia: [{ czas: "Dzisiaj · 08:30", autor: "Piotr Koordynator", status: "Do zrobienia", opis: "Zgromadzono uwagi z trzech ostatnich rozmów z gośćmi." }] },
  { id: "KOR-112", tytul: "Rozliczyć awaryjne sprzątanie", opis: "Dodatkowe sprzątanie po szkodzie zostało potwierdzone przez właściciela.", kategoria: "Operacje bieżące", apartamentId: "APT-033", koordynator: "Piotr Koordynator", termin: "2026-09-07", priorytet: "Normalne", status: "Zakończone", historia: [{ czas: "7 wrz · 11:10", autor: "Piotr Koordynator", status: "Zakończone", opis: "Koszt przypisano do rezerwacji, a dokumentację przekazano do finansów." }] },
];

const alertyOperacyjne = [
  { id: "ALT-101", priorytet: "Krytyczny", tytul: "Brak potwierdzonego sprzątania przed check-inem", opis: "Mokotów Residence 01 · gość przyjeżdża o 14:00", widok: "sprzatanie", akcja: "Przejdź do planu", status: "Otwarte" },
  { id: "ALT-102", priorytet: "Wysoki", tytul: "Rozbieżność dostępności Booking.com", opis: "Stare Miasto 05 · kanał pokazuje 1 dodatkowy pokój", widok: "integracje", akcja: "Sprawdź synchronizację", status: "Otwarte" },
  { id: "ALT-103", priorytet: "Wysoki", tytul: "Gość czeka na odpowiedź 18 minut", opis: "Wola City 03 · pytanie o późny check-in", widok: "wiadomosci", akcja: "Otwórz rozmowę", status: "Otwarte" },
  { id: "ALT-104", priorytet: "Średni", tytul: "Płatność wymaga ponowienia", opis: "Rezerwacja BKG-721041 · 1 840 PLN", widok: "finanse", akcja: "Zobacz płatność", status: "Otwarte" },
  { id: "ALT-105", priorytet: "Średni", tytul: "Cena poniżej bezpiecznego minimum", opis: "Rynek Premium 04 · 249 PLN zamiast minimum 310 PLN", widok: "revenue", akcja: "Zobacz rekomendację", status: "Otwarte" },
  { id: "ALT-106", priorytet: "Niski", tytul: "Kod do zamka nie został przygotowany", opis: "Portowa Przystań 02 · check-in jutro 15:00", widok: "rezerwacje", akcja: "Otwórz rezerwacje", status: "Otwarte" },
];

const kontroleJakosci = zadaniaSprzatania.slice(0, 8).map((zadanie, i) => ({
  id: `QA-${301 + i}`, zadanieId: zadanie.id, apartamentId: zadanie.apartamentId, osoba: zadanie.osoba,
  zdjecia: 4 + (i % 4), wymagane: 6, wynik: 78 + ((i * 7) % 20),
  status: i < 2 ? "Do weryfikacji" : i === 2 ? "Do poprawy" : "Zaakceptowane",
  uwaga: i === 2 ? "Na zdjęciu łazienki widać brak ręczników." : i === 0 ? "Sprawdź okna zgodnie z uwagą gościa." : "Komplet zdjęć przesłany ze Slacka.",
}));

const regulyAutomatyzacji = [
  { id: "AUT-01", nazwa: "Utwórz sprzątanie po check-oucie", wyzwalacz: "Wyjazd gościa", rezultat: "Zadanie + checklista + termin", aktywna: true, wykonania: 84 },
  { id: "AUT-02", nazwa: "Wyślij instrukcję zameldowania", wyzwalacz: "24 h przed przyjazdem", rezultat: "Wiadomość z instrukcją przyjazdu", aktywna: true, wykonania: 61 },
  { id: "AUT-03", nazwa: "Przypomnij o płatności", wyzwalacz: "Saldo nieopłacone przez 2 h", rezultat: "E-mail i WhatsApp", aktywna: true, wykonania: 17 },
  { id: "AUT-04", nazwa: "Zamknij sprzątanie ze zdjęć", wyzwalacz: "Minimum 3 zdjęcia na Slacku", rezultat: "Status: Posprzątane · gotowe", aktywna: true, wykonania: 39 },
  { id: "AUT-05", nazwa: "Poproś o opinię", wyzwalacz: "2 h po check-oucie", rezultat: "Wiadomość w języku gościa", aktywna: false, wykonania: 0 },
];

const rekomendacjeRevenue = [
  { id: "REV-01", apartamentId: "APT-004", od: "2026-09-11", do: "2026-09-13", zmiana: 18, powod: "Wzrost popytu weekendowego i mało dostępnych lokali w okolicy", wplyw: "+1 420 PLN", status: "Nowa" },
  { id: "REV-02", apartamentId: "APT-009", od: "2026-09-14", do: "2026-09-16", zmiana: -12, powod: "Krótki booking window i luka pomiędzy pobytami", wplyw: "+8 p.p. obłożenia", status: "Nowa" },
  { id: "REV-03", apartamentId: "APT-021", od: "2026-10-02", do: "2026-10-04", zmiana: 24, powod: "Lokalne wydarzenie oraz szybki pickup rezerwacji", wplyw: "+1 980 PLN", status: "Nowa" },
  { id: "REV-04", apartamentId: "APT-032", od: "2026-09-22", do: "2026-09-22", zmiana: -15, powod: "Pojedyncza wolna noc możliwa do wypełnienia", wplyw: "+1 noc", status: "Nowa" },
];

const rekomendacjeAI = [
  { id: "AI-01", kategoria: "Operacje", tytul: "Uzupełnij brakującą obsadę sprzątania", opis: "Anna i Marta mają wolną pojemność 9 września. Mogę rozdzielić 3 zadania według stref i obciążenia.", akcja: "Rozdziel zadania", widok: "sprzatanie", status: "Otwarte" },
  { id: "AI-02", kategoria: "Goście", tytul: "Dodaj uwagę o oknach do sprzątania", opis: "Gość z Mokotów Residence 01 zgłosił zabrudzone okna. Zadanie sprzątania jest już utworzone.", akcja: "Dodaj uwagę", widok: "sprzatanie", status: "Otwarte" },
  { id: "AI-03", kategoria: "Przychód", tytul: "Wypełnij jednodniową lukę", opis: "APT-032 ma pojedynczą wolną noc. Obniżenie ceny o 15% i minimum pobytu do 1 nocy zwiększa szansę sprzedaży.", akcja: "Zastosuj zmianę", widok: "revenue", status: "Otwarte" },
  { id: "AI-04", kategoria: "Integracje", tytul: "Uzgodnij dostępność z kanałem", opis: "Jedna rozbieżność może prowadzić do nadmiarowej sprzedaży. Uruchomię kontrolowane uzgodnienie 36 apartamentów.", akcja: "Uruchom uzgodnienie", widok: "integracje", status: "Otwarte" },
];

const rozliczeniaWlascicieli = portfele.map((portfel, i) => ({
  id: `STM-${901 + i}`, wlasciciel: portfel.wlasciciel, portfel: portfel.nazwa,
  przychod: 84200 + i * 11650, prowizjeOta: 10600 + i * 910, koszty: 7800 + i * 620,
  prowizjaOperatora: 13200 + i * 1450, status: i < 2 ? "Gotowe do wypłaty" : i === 2 ? "Wymaga weryfikacji" : "W przygotowaniu",
}));

const magazynDemo = [
  { id: "STK-01", nazwa: "Komplety pościeli dwuosobowej", kategoria: "Pralnia", stan: 41, minimum: 36, jednostka: "kpl.", lokalizacja: "Magazyn Warszawa" },
  { id: "STK-02", nazwa: "Ręczniki kąpielowe", kategoria: "Pralnia", stan: 62, minimum: 72, jednostka: "szt.", lokalizacja: "Magazyn Warszawa" },
  { id: "STK-03", nazwa: "Kosmetyki hotelowe", kategoria: "Gość", stan: 118, minimum: 90, jednostka: "zest.", lokalizacja: "Magazyn centralny" },
  { id: "STK-04", nazwa: "Kapsułki do kawy", kategoria: "Gość", stan: 84, minimum: 120, jednostka: "szt.", lokalizacja: "Magazyn Kraków" },
  { id: "STK-05", nazwa: "Środek do łazienek", kategoria: "Chemia", stan: 19, minimum: 24, jednostka: "szt.", lokalizacja: "Magazyn Gdańsk" },
  { id: "STK-06", nazwa: "Worki na pranie", kategoria: "Pralnia", stan: 55, minimum: 40, jednostka: "szt.", lokalizacja: "Magazyn centralny" },
];

const kafel = (wartosc, etykieta, opis, ton = "") => `<article class="metric-card ${ton}"><span class="metric-value">${wartosc}</span><span class="metric-label">${etykieta}</span><small>${opis}</small></article>`;
const naglowek = (nadtytul, tytul, opis, odznaka = "Dane demonstracyjne", ton = "") => `<header class="page-heading"><div><span class="eyebrow">${nadtytul}</span><h1>${tytul}</h1><p>${opis}</p></div><span class="status ${ton}">${odznaka}</span></header>`;
const rekordy = (wiersze) => `<div class="record-list">${wiersze.map((w) => `<article class="record-row"><span class="record-copy"><strong>${w[0]}</strong><small>${w[2]}</small></span><span class="record-meta"><strong>${w[1]}</strong></span></article>`).join("")}</div>`;

function przyciskRezerwacji(r, klasa = "record-row record-button") {
  const a = apartamentPoId(r.apartamentId);
  const search = `${r.id} ${r.gosc} ${a.nazwa} ${r.kanal}`.toLocaleLowerCase("pl");
  return `<button class="${klasa}" type="button" data-reservation-id="${r.id}" data-search="${bezpiecznyTekst(search)}" data-channel="${r.kanal}"><span class="record-copy"><strong>${r.id} · ${r.gosc}</strong><small>${a.nazwa} · ${krotkaData(r.przyjazd)}–${krotkaData(r.wyjazd)} · ${r.kanal}</small></span><span class="record-meta"><span class="status ${r.status === "Anulowana" ? "danger" : ""}">${r.status}</span><small>${r.kwota.toLocaleString("pl-PL")} PLN</small></span></button>`;
}

function pulpit() {
  const otwarte = alertyOperacyjne.filter((alert) => alert.status === "Otwarte");
  const krytyczne = otwarte.filter((alert) => ["Krytyczny", "Wysoki"].includes(alert.priorytet));
  const najblizsze = rezerwacjeAktywne.filter((r) => r.przyjazd >= "2026-09-08").sort((a, b) => a.przyjazd.localeCompare(b.przyjazd)).slice(0, 4);
  return `<div class="page-stack command-center">${naglowek("Centrum dowodzenia", "Dzisiaj wymagają Twojej decyzji", "Rutynowe procesy działają automatycznie. Poniżej są wyłącznie wyjątki, ryzyka i zadania wymagające reakcji.", `${otwarte.length} otwartych spraw`, krytyczne.length ? "danger" : "")}<section class="metric-grid">${kafel(String(krytyczne.length), "Pilne decyzje", "Krytyczne i wysokie ryzyko", "sand")}${kafel("12", "Przyjazdy dzisiaj", "11 instrukcji wysłanych", "sage")}${kafel("9 / 12", "Lokale gotowe", "3 sprzątania w toku", "blue")}${kafel("99,94%", "Synchronizacja", "1 rozbieżność do sprawdzenia", "ink")}</section><section class="command-layout"><article class="panel exception-panel"><div class="panel-header"><div><span class="eyebrow">Kolejka decyzji</span><h2>Co wymaga uwagi</h2></div><button class="button secondary" type="button" data-go="ai_koordynator">Zapytaj AI koordynatora</button></div><div class="exception-list">${otwarte.map((alert) => `<article class="exception-card ${alert.priorytet.toLocaleLowerCase("pl")}"><span class="exception-priority">${alert.priorytet}</span><div><strong>${alert.tytul}</strong><small>${alert.opis}</small></div><div class="button-row"><button class="button compact-button" type="button" data-go="${alert.widok}">${alert.akcja}</button><button class="button secondary compact-button" type="button" data-resolve-alert="${alert.id}">Oznacz rozwiązane</button></div></article>`).join("") || `<div class="empty compact-empty">Wszystkie wyjątki zostały obsłużone.</div>`}</div></article><aside class="command-side"><article class="panel"><div class="panel-header"><div><span class="eyebrow">Ruch gości</span><h2>Najbliższe przyjazdy</h2></div><button class="button secondary compact-button" data-go="kalendarz">Kalendarz</button></div><div class="record-list">${najblizsze.map((r) => przyciskRezerwacji(r, "record-row record-button compact")).join("")}</div></article><article class="panel health-panel"><div><span class="eyebrow">Stan automatyzacji</span><h2>Procesy w tle</h2></div><div class="health-row"><span class="health-dot"></span><strong>Rezerwacje i dostępność</strong><small>5 min temu</small></div><div class="health-row"><span class="health-dot"></span><strong>Wiadomości gości</strong><small>1 min temu</small></div><div class="health-row warning"><span class="health-dot"></span><strong>Kontrola zgodności kanałów</strong><small>1 alert</small></div><button class="button secondary" type="button" data-go="integracje">Centrum integracji</button></article></aside></section></div>`;
}

function kalendarz() {
  const liczbaDni = dniWMiesiacu(stan.miesiac);
  const nazwa = miesiace.find((m) => m.numer === stan.miesiac).nazwa;
  const fraza = stan.szukajKalendarz.toLocaleLowerCase("pl");
  const lokale = apartamenty.filter((a) => `${a.id} ${a.nazwa} ${a.miasto}`.toLocaleLowerCase("pl").includes(fraza));
  const dni = Array.from({ length: liczbaDni }, (_, i) => {
    const d = new Date(Date.UTC(2026, stan.miesiac - 1, i + 1));
    const weekend = [0, 6].includes(d.getUTCDay()) ? "is-weekend" : "";
    return `<div class="calendar-day ${weekend}"><strong>${String(i + 1).padStart(2, "0")}</strong><small>${new Intl.DateTimeFormat("pl-PL", { weekday: "short" }).format(d).replace(".", "")}</small></div>`;
  }).join("");
  const wiersze = lokale.map((a) => {
    const komorki = Array.from({ length: liczbaDni }, (_, i) => { const d = new Date(Date.UTC(2026, stan.miesiac - 1, i + 1)); return `<span class="calendar-cell ${[0, 6].includes(d.getUTCDay()) ? "is-weekend" : ""}" aria-hidden="true"></span>`; }).join("");
    const paski = rezerwacjeDemo.filter((r) => r.apartamentId === a.id && Number(r.przyjazd.slice(5, 7)) === stan.miesiac).map((r) => {
      const start = Number(r.przyjazd.slice(8, 10));
      const dlugosc = Math.min(liczbaNocy(r.przyjazd, r.wyjazd), liczbaDni - start + 1);
      const kanal = r.kanal.toLocaleLowerCase("pl").replace(/[^a-z]/g, "");
      return `<button class="calendar-booking channel-${kanal} ${r.status === "Anulowana" ? "is-cancelled" : ""}" style="grid-column:${start + 1} / span ${dlugosc}" type="button" data-reservation-id="${r.id}" title="${bezpiecznyTekst(`${r.gosc}, ${krotkaData(r.przyjazd)}–${krotkaData(r.wyjazd)}, ${r.kanal}`)}"><strong>${r.gosc}</strong><small>${r.kanal}</small></button>`;
    }).join("");
    return `<div class="calendar-row" style="--days:${liczbaDni}"><button class="calendar-unit" type="button" data-apartment-id="${a.id}"><strong>${a.nazwa}</strong><small>${a.id}</small></button>${komorki}${paski}</div>`;
  }).join("");
  return `<div class="page-stack">${naglowek("Rezerwacje wrzesień–grudzień 2026", "Kalendarz 36 apartamentów", "Kliknij kolorowy pobyt, aby otworzyć panel boczny ze szczegółami, płatnością, meldunkiem i komunikacją z gościem.", `${lokale.length} lokali · ${nazwa}`)}<section class="panel calendar-toolbar"><div class="month-switch" role="group" aria-label="Wybierz miesiąc">${miesiace.map((m) => `<button class="month-button ${m.numer === stan.miesiac ? "is-active" : ""}" type="button" data-month="${m.numer}">${m.nazwa}</button>`).join("")}</div><label class="field calendar-search"><span>Znajdź apartament</span><input id="calendar-search" type="search" value="${bezpiecznyTekst(stan.szukajKalendarz)}" placeholder="Nazwa, kod lub miasto"></label><div class="calendar-legend"><span><i class="legend-dot booking"></i>Booking.com</span><span><i class="legend-dot airbnb"></i>Airbnb</span><span><i class="legend-dot expedia"></i>Expedia</span><span><i class="legend-dot direct"></i>Bezpośrednia</span></div></section><section class="panel calendar-panel"><div class="calendar-scroll"><div class="calendar-head" style="--days:${liczbaDni}"><div class="calendar-unit calendar-unit--head"><strong>${nazwa} 2026</strong><small>${lokale.length} apartamentów</small></div>${dni}</div>${wiersze || `<div class="empty">Nie znaleziono apartamentu.</div>`}</div></section><div class="notice"><span><strong>Wskazówka:</strong> przewijaj kalendarz poziomo. Dane obejmują okres do 31 grudnia 2026.</span><button class="button secondary" data-demo="Widok dostępności został odświeżony">Odśwież dostępność</button></div></div>`;
}

function ceny() {
  const lokalePortfela = apartamenty.filter((a) => a.nazwa.startsWith(stan.portfelCen));
  if (stan.apartamentCen && !lokalePortfela.some((a) => a.id === stan.apartamentCen)) stan.apartamentCen = "";
  const lokale = stan.apartamentCen ? lokalePortfela.filter((a) => a.id === stan.apartamentCen) : lokalePortfela;
  const daty = Array.from({ length: stan.zakresDniCen }, (_, i) => dodajDni(stan.dataStartCen, i)).filter((data) => data <= "2026-12-31");
  const liczbaDni = daty.length;
  const koniecZakresu = daty.at(-1);
  const widoczneKlucze = lokale.flatMap((a) => daty.map((dataIso) => kluczCeny(a.id, dataIso)));
  const wszystkieWidoczneWybrane = widoczneKlucze.length > 0 && widoczneKlucze.every((key) => wybraneCeny.has(key));
  const zmienioneCeny = Array.from(nadpisaneCeny.keys()).filter((k) => lokale.some((a) => k.startsWith(`${a.id}|`)) && k.endsWith(`|${stan.platformaCen}`)).length;
  const zmienioneRestrykcje = Array.from(nadpisaneRestrykcje.keys()).filter((k) => lokale.some((a) => k.startsWith(`${a.id}|`)) && k.endsWith(`|${stan.platformaCen}`)).length;
  const naglowki = daty.map((dataIso) => {
    const data = new Date(`${dataIso}T12:00:00Z`);
    const weekend = [0, 6].includes(data.getUTCDay()) ? "is-weekend" : "";
    const calaKolumna = lokale.length > 0 && lokale.every((a) => wybraneCeny.has(kluczCeny(a.id, dataIso)));
    const dzien = new Intl.DateTimeFormat("pl-PL", { weekday: "short" }).format(data).replace(".", "");
    const miesiac = new Intl.DateTimeFormat("pl-PL", { month: "short" }).format(data).replace(".", "");
    return stan.trybWyboruCen
      ? `<button class="rate-day rate-day-button ${weekend} ${calaKolumna ? "is-selected-group" : ""}" type="button" data-select-rate-day="${dataIso}" aria-pressed="${calaKolumna}" aria-label="Zaznacz wszystkie ceny na ${polskaData(dataIso)}"><small>${dzien}</small><strong>${String(data.getUTCDate()).padStart(2, "0")}</strong><small>${miesiac}</small></button>`
      : `<div class="rate-day ${weekend}"><small>${dzien}</small><strong>${String(data.getUTCDate()).padStart(2, "0")}</strong><small>${miesiac}</small></div>`;
  }).join("");
  const wiersze = lokale.map((a) => {
    const calyWiersz = daty.length > 0 && daty.every((dataIso) => wybraneCeny.has(kluczCeny(a.id, dataIso)));
    const dostepnosc = daty.map((dataIso) => { const r = pobierzRestrykcje(a.id, dataIso); return `<span class="availability-cell ${r.zamkniete ? "is-closed" : "is-open"}">${r.zamkniete ? "0" : "1"}</span>`; }).join("");
    const cenyWiersz = daty.map((dataIso) => {
      const data = new Date(`${dataIso}T12:00:00Z`);
      const key = kluczCeny(a.id, dataIso);
      const weekend = [0, 6].includes(data.getUTCDay()) ? "is-weekend" : "";
      const zmieniona = nadpisaneCeny.has(key) ? "is-changed" : "";
      const wybrana = wybraneCeny.has(key) ? "is-selected" : "";
      return `<button class="rate-cell ${weekend} ${zmieniona} ${wybrana}" type="button" data-rate-key="${key}" ${stan.trybWyboruCen ? `aria-pressed="${wybraneCeny.has(key)}"` : ""} aria-label="${a.nazwa}, ${stan.platformaCen}, ${polskaData(dataIso)}, ${pobierzCene(a.id, dataIso)} zł${stan.trybWyboruCen ? ", kliknij, aby zaznaczyć" : ""}"><strong>${pobierzCene(a.id, dataIso)}</strong><small>PLN</small></button>`;
    }).join("");
    const restrykcjeWiersz = daty.map((dataIso) => {
      const key = kluczCeny(a.id, dataIso);
      const r = pobierzRestrykcje(a.id, dataIso);
      const zmieniona = nadpisaneRestrykcje.has(key) ? "is-changed" : "";
      return `<button class="restriction-cell ${zmieniona} ${r.zamkniete ? "is-closed" : ""}" type="button" data-restriction-key="${key}" aria-label="${a.nazwa}, ${polskaData(dataIso)}, minimalny pobyt ${r.minNocy} nocy"><strong>${r.zamkniete ? "Zamk." : `${r.minNocy} n.`}</strong><small>${r.bezPrzyjazdu ? "bez przyj." : "min. pobyt"}</small></button>`;
    }).join("");
    const etykietaCeny = stan.trybWyboruCen
      ? `<button class="rate-unit rate-unit--sub rate-unit-selector ${calyWiersz ? "is-selected-group" : ""}" type="button" data-select-rate-unit="${a.id}" aria-pressed="${calyWiersz}"><strong>Cena za noc</strong><small>Zaznacz cały wiersz</small></button>`
      : `<div class="rate-unit rate-unit--sub"><strong>Cena za noc</strong><small>Oferta standardowa</small></div>`;
    return `<div class="rate-row rate-property-row" style="--days:${liczbaDni}"><div class="rate-unit rate-unit--property"><strong>⌄ ${a.nazwa}</strong><small>${a.id} · ${stan.platformaCen}</small></div>${dostepnosc}</div><div class="rate-row rate-price-row" style="--days:${liczbaDni}">${etykietaCeny}${cenyWiersz}</div><div class="rate-row rate-restriction-row" style="--days:${liczbaDni}"><div class="rate-unit rate-unit--sub"><strong>Minimalny pobyt</strong><small>Kliknij, aby zmienić restrykcje</small></div>${restrykcjeWiersz}</div>`;
  }).join("");
  const pasekWyboru = stan.trybWyboruCen ? `<section class="panel rate-selection-bar" aria-label="Zbiorcza zmiana zaznaczonych cen"><div class="rate-selection-summary"><span class="eyebrow">Tryb zaznaczania</span><strong id="selected-rate-count">${wybraneCeny.size} ${odmien(wybraneCeny.size, "wybrana cena", "wybrane ceny", "wybranych cen")}</strong><small>Klikaj pojedyncze ceny. Nagłówek dnia zaznacza kolumnę, a „Cena za noc” cały wiersz.</small></div><div class="rate-selection-actions"><label class="field"><span>Sposób zmiany</span><select id="selected-rate-operation"><option value="add_percent">Zwiększ procentowo</option><option value="subtract_percent">Obniż procentowo</option><option value="add_amount">Zwiększ o kwotę PLN</option><option value="subtract_amount">Obniż o kwotę PLN</option><option value="set">Ustaw dokładną cenę</option></select></label><label class="field rate-selection-value"><span>Wartość</span><input id="selected-rate-value" type="number" min="0" max="5000" step="1" value="20"></label><button class="button" type="button" data-apply-rate-selection ${wybraneCeny.size ? "" : "disabled"}>Zastosuj do zaznaczonych</button><button class="button secondary" type="button" data-clear-rate-selection ${wybraneCeny.size ? "" : "disabled"}>Wyczyść</button></div></section>` : "";
  const rogSiatki = stan.trybWyboruCen
    ? `<button class="rate-unit rate-unit--head rate-unit-selector ${wszystkieWidoczneWybrane ? "is-selected-group" : ""}" type="button" data-select-visible-rates aria-pressed="${wszystkieWidoczneWybrane}"><strong>Zaznacz widoczne</strong><small>${lokale.length} apartamentów · ${liczbaDni} dni</small></button>`
    : `<div class="rate-unit rate-unit--head"><strong>Rozwiń wszystko</strong><small>${lokale.length} apartamentów · ${stan.platformaCen}</small></div>`;
  return `<div class="page-stack rate-workspace">${naglowek("Ceny i restrykcje kanałowe", `Zarządzanie cenami · ${stan.platformaCen}`, "Wybierz platformę i zaznacz dowolne dni oraz apartamenty. Możesz zmienić wybrane ceny o procent, kwotę albo ustawić nową wartość.", `${krotkaData(stan.dataStartCen)}–${krotkaData(koniecZakresu)}`)}<section class="panel rate-command-bar"><div class="rate-command-main"><label class="field rate-channel-field"><span>Ceny i restrykcje w</span><select id="rate-channel">${kanaly.map((kanal) => `<option value="${kanal}" ${kanal === stan.platformaCen ? "selected" : ""}>${kanal}</option>`).join("")}</select></label><button class="button bulk-rate-button" type="button" data-open-bulk-rate>+ Zbiorcza aktualizacja</button><button class="button secondary multi-rate-button ${stan.trybWyboruCen ? "is-active" : ""}" type="button" data-toggle-rate-selection aria-pressed="${stan.trybWyboruCen}">${stan.trybWyboruCen ? "✓ Zaznaczanie aktywne" : "☑ Zaznacz wiele"}</button><div class="rate-date-controls"><label class="field"><span>Przejdź do daty</span><input id="rate-go-date" type="date" min="2026-09-01" max="2026-12-31" value="${stan.dataStartCen}"></label><button class="button secondary" type="button" data-rate-go>Przejdź</button><button class="icon-step" type="button" data-rate-shift="-1" aria-label="Poprzedni zakres">←</button><select id="rate-range" aria-label="Długość widoku"><option value="14" ${stan.zakresDniCen === 14 ? "selected" : ""}>Widok na 14 dni</option><option value="30" ${stan.zakresDniCen === 30 ? "selected" : ""}>Widok na 30 dni</option><option value="60" ${stan.zakresDniCen === 60 ? "selected" : ""}>Widok na 60 dni</option></select><button class="icon-step" type="button" data-rate-shift="1" aria-label="Następny zakres">→</button></div></div><div class="filters rate-filter-row"><label class="field"><span>Portfel</span><select id="rate-portfolio">${portfele.map((p) => `<option value="${p.nazwa}" ${p.nazwa === stan.portfelCen ? "selected" : ""}>${p.nazwa}</option>`).join("")}</select></label><label class="field grow"><span>Apartament</span><select id="rate-unit"><option value="">Wszystkie 6 apartamentów</option>${lokalePortfela.map((a) => `<option value="${a.id}" ${a.id === stan.apartamentCen ? "selected" : ""}>${a.id} · ${a.nazwa}</option>`).join("")}</select></label><span class="rate-change-summary"><b>${zmienioneCeny}</b> ${odmien(zmienioneCeny, "zmiana ceny", "zmiany cen", "zmian cen")} · <b>${zmienioneRestrykcje}</b> ${odmien(zmienioneRestrykcje, "zmiana restrykcji", "zmiany restrykcji", "zmian restrykcji")}</span></div></section>${pasekWyboru}<section class="rate-legend"><span><i class="legend-swatch price"></i>Cena</span><span><i class="legend-swatch restriction"></i>Minimalny pobyt</span><span><i class="legend-swatch open"></i>Sprzedaż otwarta</span><span><i class="legend-swatch selected"></i>Zaznaczono</span><span><i class="legend-swatch changed"></i>Zmieniono ręcznie</span></section><section class="panel rate-panel"><div class="rate-scroll"><div class="rate-head" style="--days:${liczbaDni}">${rogSiatki}${naglowki}</div>${wiersze}</div></section><div class="notice"><span><strong>Obsługa:</strong> włącz „Zaznacz wiele”, wybierz dowolne komórki, dni lub wiersze i zastosuj jedną zmianę do całego wyboru. Niebieskie komórki nadal służą do restrykcji.</span><button class="button secondary" type="button" data-demo="Zmiany cen i restrykcji przekazano do synchronizacji z wybraną platformą">Wyślij do ${stan.platformaCen}</button></div></div>`;
}

function rezerwacje() {
  const lista = rezerwacjeDemo.filter((r) => Number(r.przyjazd.slice(5, 7)) === stan.miesiacRezerwacji);
  const aktywne = lista.filter((r) => r.status !== "Anulowana");
  const wartosc = aktywne.reduce((s, r) => s + r.kwota, 0);
  return `<div class="page-stack">${naglowek("Pełny rejestr danych demo", "Rezerwacje", "Filtruj pobyty i kliknij dowolny wiersz, aby przejść do szczegółów oraz rozmowy z gościem.", `${lista.length} rezerwacji w miesiącu`)}<section class="metric-grid">${kafel(String(lista.length), "Rezerwacje", "W wybranym miesiącu", "sage")}${kafel(String(aktywne.length), "Aktywne", "Potwierdzone i w toku", "blue")}${kafel(String(lista.length - aktywne.length), "Anulowane", "Widoczne w historii", "sand")}${kafel(`${Math.round(wartosc / 1000)} tys. PLN`, "Wartość aktywnych", "Dane brutto", "ink")}</section><section class="panel"><div class="filters booking-filters"><label class="field"><span>Miesiąc przyjazdu</span><select id="booking-month">${miesiace.map((m) => `<option value="${m.numer}" ${m.numer === stan.miesiacRezerwacji ? "selected" : ""}>${m.nazwa} 2026</option>`).join("")}</select></label><label class="field"><span>Kanał</span><select id="booking-channel"><option value="">Wszystkie kanały</option>${kanaly.map((k) => `<option value="${k}" ${k === stan.kanalRezerwacji ? "selected" : ""}>${k}</option>`).join("")}</select></label><label class="field grow"><span>Szukaj</span><input id="booking-search" type="search" value="${bezpiecznyTekst(stan.szukajRezerwacji)}" placeholder="Gość, apartament lub numer"></label><span class="status" id="booking-count">${lista.length} wyników</span></div></section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Kliknij, aby otworzyć kartę</span><h2>Rejestr rezerwacji</h2></div><button class="button secondary" data-demo="Uzgadnianie rezerwacji trafiło do kolejki">Uzgodnij z kanałami</button></div><div class="record-list" id="booking-list">${lista.map((r) => przyciskRezerwacji(r)).join("")}</div><div class="empty" id="booking-empty" hidden>Brak rezerwacji spełniających kryteria.</div></section></div>`;
}

function wiadomosci() {
  const watki = rezerwacjeAktywne.filter((r) => r.przyjazd >= "2026-09-05").sort((a, b) => a.przyjazd.localeCompare(b.przyjazd)).slice(0, 18);
  if (!stan.wybranyWatek || !watki.some((r) => r.id === stan.wybranyWatek)) stan.wybranyWatek = watki[0].id;
  const aktywna = rezerwacjaPoId(stan.wybranyWatek);
  const a = apartamentPoId(aktywna.apartamentId);
  return `<div class="page-stack">${naglowek("Komunikacja z gośćmi", "Skrzynka odbiorcza", "Wybierz rozmowę, przeczytaj kontekst pobytu i dopisz demonstracyjną odpowiedź.", "18 otwartych wątków")}<section class="inbox-layout"><aside class="panel inbox-threads"><div class="panel-header"><div><span class="eyebrow">Rozmowy</span><h2>Wątki gości</h2></div><span class="status">3 nowe</span></div><div class="thread-list">${watki.map((r, i) => `<button class="thread-row ${r.id === aktywna.id ? "is-active" : ""}" type="button" data-thread-id="${r.id}"><span class="record-copy"><strong>${r.gosc}</strong><small>${apartamentPoId(r.apartamentId).nazwa} · ${r.kanal}</small><small>${bezpiecznyTekst(r.wiadomosci.at(-1).tekst.slice(0, 58))}…</small></span>${i < 3 ? `<span class="status">${i + 1}</span>` : ""}</button>`).join("")}</div></aside><article class="panel conversation"><div class="panel-header"><div><span class="eyebrow">${aktywna.kanal} · ${aktywna.id}</span><h2>${aktywna.gosc}</h2><small>${a.nazwa} · ${krotkaData(aktywna.przyjazd)}–${krotkaData(aktywna.wyjazd)}</small></div><button class="button secondary" data-reservation-id="${aktywna.id}">Pełne szczegóły</button></div><div class="messages" id="messages">${aktywna.wiadomosci.map((m) => `<div class="message ${m.typ === "gosc" ? "guest" : "team"}"><strong>${bezpiecznyTekst(m.autor)}</strong><span>${bezpiecznyTekst(m.tekst)}</span><small>${m.czas}</small></div>`).join("")}<div class="message note">Notatka wewnętrzna · ${bezpiecznyTekst(aktywna.notatka)}</div></div><form class="composer" id="reply-form"><input id="reply-input" maxlength="500" placeholder="Napisz odpowiedź demo…" aria-label="Odpowiedź dla gościa"><button class="button" type="submit">Dodaj odpowiedź</button></form></article></section></div>`;
}

function sprzatanie() {
  const zadaniaDnia = zadaniaSprzatania.filter((z) => z.dataSprzatania === stan.dataPlanuSprzatania);
  const dostepni = dostepniWData(stan.dataPlanuSprzatania);
  const niedostepni = zespolSprzatajacy.filter((osoba) => !dostepni.includes(osoba));
  if (!dostepni.some((osoba) => osoba.imieNazwisko === stan.wybranaOsobaDoPrzydzialu)) stan.wybranaOsobaDoPrzydzialu = dostepni[0]?.imieNazwisko || "";
  const gotowe = zadaniaDnia.filter(czySprzatanieGotowe).length;
  const zUwagi = zadaniaDnia.filter((z) => z.uwagaAdmin).length;
  const nieprzypisane = zadaniaDnia.filter((z) => z.osoba === "Nieprzypisane").length;
  return `<div class="page-stack">${naglowek("Plan pracy zespołu", "Planowanie sprzątania", "Wybierz dzień, a zobaczysz zadania i tylko osoby, które potwierdziły dyspozycyjność.", pelnaPolskaData(stan.dataPlanuSprzatania), nieprzypisane ? "danger" : "warning")}<section class="cleaning-date-strip" aria-label="Wybierz dzień planu">${datyPlanuSprzatania.map((data) => { const zadania = zadaniaSprzatania.filter((z) => z.dataSprzatania === data).length; const osoby = dostepniWData(data).length; return `<button class="cleaning-date-button ${data === stan.dataPlanuSprzatania ? "is-active" : ""}" type="button" data-cleaning-date="${data}"><small>${new Intl.DateTimeFormat("pl-PL", { weekday: "short" }).format(new Date(`${data}T12:00:00Z`))}</small><strong>${data.slice(8, 10)}</strong><span>${zadania} zadań · ${osoby} os.</span></button>`; }).join("")}</section><section class="metric-grid">${kafel(String(zadaniaDnia.length), "Apartamenty do sprzątania", "Wyjazdy w wybranym dniu", "sage")}${kafel(String(dostepni.length), "Dostępne osoby", `${zespolSprzatajacy.length - dostepni.length} wolne lub bez deklaracji`, "blue")}${kafel(String(nieprzypisane), "Wymaga przypisania", nieprzypisane ? "Uzupełnij obsadę" : "Wszystkie zadania obsadzone", "sand")}${kafel(String(zUwagi), "Uwagi administratora", "Wymagają szczególnej uwagi", "ink")}</section><div class="notice cleaning-instruction"><span><strong>Lista zespołu jest filtrowana przez dyspozycyjność.</strong> System może rozdzielić pracę według stref, dyspozycyjności i aktualnego obciążenia.</span><div class="button-row"><button class="button" type="button" data-auto-assign>Rozdziel automatycznie</button><button class="button secondary" type="button" data-go="panel_sprzatajacej">Ustaw dyspozycyjność</button></div></div><section class="cleaning-planner"><aside class="panel cleaning-team-panel"><div class="panel-header"><div><span class="eyebrow">${dostepni.length} z ${zespolSprzatajacy.length} osób</span><h2>Dostępni tego dnia</h2></div><span class="status">Przeciągnij osobę</span></div><div class="cleaner-roster">${dostepni.length ? dostepni.map((osoba) => { const przydzialy = zadaniaDnia.filter((z) => z.osoba === osoba.imieNazwisko).length; return `<button class="cleaner-roster-card ${stan.wybranaOsobaDoPrzydzialu === osoba.imieNazwisko ? "is-selected" : ""}" type="button" draggable="true" data-cleaner-drag="${osoba.imieNazwisko}" data-cleaner-select="${osoba.imieNazwisko}"><span class="cleaner-avatar">${osoba.inicjaly}</span><span class="cleaner-roster-copy"><strong>${osoba.imieNazwisko}</strong><small>${osoba.strefa}</small></span><span class="cleaner-load"><strong>${przydzialy}</strong><small>${odmien(przydzialy, "lokal", "lokale", "lokali")}</small></span><span class="drag-handle" aria-hidden="true">⋮⋮</span></button>`; }).join("") : `<div class="empty compact-empty">Nikt nie potwierdził dyspozycyjności.</div>`}</div>${stan.wybranaOsobaDoPrzydzialu ? `<div class="shift-card"><small>Wybrana osoba do szybkiego przypisania</small><strong>${stan.wybranaOsobaDoPrzydzialu}</strong><span>Kliknij inną osobę lub przeciągnij jej kartę.</span></div>` : ""}<div class="availability-summary"><span class="eyebrow">Niedostępni</span>${niedostepni.map((osoba) => `<div><span class="availability-dot ${pobierzDyspozycje(osoba.imieNazwisko, stan.dataPlanuSprzatania) === "Wolne" ? "off" : "unknown"}"></span><strong>${osoba.imieNazwisko}</strong><small>${pobierzDyspozycje(osoba.imieNazwisko, stan.dataPlanuSprzatania)}</small></div>`).join("") || `<small>Wszyscy są dostępni.</small>`}</div></aside><article class="panel cleaning-jobs-panel"><div class="panel-header"><div><span class="eyebrow">${pelnaPolskaData(stan.dataPlanuSprzatania)}</span><h2>Apartamenty do posprzątania</h2></div><span class="status ${nieprzypisane ? "danger" : "warning"}">${zadaniaDnia.length} zadań</span></div><div class="cleaning-assignment-list">${zadaniaDnia.map((z, i) => { const a = apartamentPoId(z.apartamentId); const ile = z.checklista.filter((e) => e.gotowe).length; return `<article class="cleaning-assignment-card" data-cleaning-drop="${z.id}"><span class="task-order">${i + 1}</span><div class="cleaning-assignment-main"><div class="cleaning-assignment-title"><div><span class="eyebrow">${a.id} · następny check-in ${z.nastepnyCheckin}</span><strong>${a.nazwa}</strong><small>${a.miasto} · ${z.okno} · checklista ${ile}/${z.checklista.length}</small></div><span class="status ${z.osoba === "Nieprzypisane" ? "danger" : ""}">${z.status}</span></div>${z.uwagaAdmin ? `<div class="cleaning-note-preview"><strong>Uwaga administratora</strong><span>${bezpiecznyTekst(z.uwagaAdmin)}</span></div>` : ""}<div class="cleaning-assignment-controls"><label class="field"><span>Przypisana osoba</span><select data-cleaning-assignment="${z.id}">${z.osoba === "Nieprzypisane" ? `<option value="" selected disabled>Wybierz dostępną osobę</option>` : ""}${dostepni.map((osoba) => `<option value="${osoba.imieNazwisko}" ${osoba.imieNazwisko === z.osoba ? "selected" : ""}>${osoba.imieNazwisko}</option>`).join("")}</select></label><button class="button secondary compact-button" type="button" data-assign-selected="${z.id}" ${stan.wybranaOsobaDoPrzydzialu ? "" : "disabled"}>Przypisz wybraną</button><button class="button secondary compact-button" type="button" data-cleaning-id="${z.id}">Checklista i uwagi</button></div></div></article>`; }).join("")}</div></article></section><div class="notice"><span><strong>Automatyzacja Slack jest aktywna.</strong> Minimum ${stan.slackMinimalnaLiczbaZdjec} zdjęcia z kodem apartamentu automatycznie ustawią status „Posprzątane · gotowe”.</span><button class="button secondary" type="button" data-go="integracje">Ustawienia Slack</button></div></div>`;
}

function panelSprzatajacej() {
  const pracownik = zespolSprzatajacy.find((osoba) => osoba.imieNazwisko === stan.wybranaSprzatajaca) || zespolSprzatajacy[0];
  const moje = zadaniaSprzatania.filter((z) => z.osoba === pracownik.imieNazwisko).sort((a, b) => a.dataSprzatania.localeCompare(b.dataSprzatania));
  const wykonanePunkty = moje.reduce((s, z) => s + z.checklista.filter((e) => e.gotowe).length, 0);
  const wszystkiePunkty = moje.reduce((s, z) => s + z.checklista.length, 0);
  const postep = wszystkiePunkty ? Math.round((wykonanePunkty / wszystkiePunkty) * 100) : 0;
  const zweryfikowane = moje.filter((z) => z.weryfikacjaSlack).length;
  const miesiac = stan.miesiacDyspozycji;
  const pierwszyDzien = (new Date(Date.UTC(2026, miesiac - 1, 1)).getUTCDay() + 6) % 7;
  const dniMiesiaca = Array.from({ length: dniWMiesiacu(miesiac) }, (_, i) => iso(miesiac, i + 1));
  const miesiacLabel = new Intl.DateTimeFormat("pl-PL", { month: "long", year: "numeric" }).format(new Date(Date.UTC(2026, miesiac - 1, 1)));
  const liczbyDyspozycji = dniMiesiaca.reduce((wynik, data) => { const status = pobierzDyspozycje(pracownik.imieNazwisko, data); wynik[status] += 1; return wynik; }, { "Dostępna": 0, "Wolne": 0, "Nieokreślone": 0 });
  const listaZadan = moje.slice(0, 14);
  return `<div class="page-stack worker-page"><section class="role-hero cleaner"><div class="role-identity"><span class="role-avatar">${pracownik.inicjaly}</span><div><span class="eyebrow">Panel osoby sprzątającej</span><h1>Dzień dobry, ${pracownik.imieNazwisko.split(" ")[0]}</h1><p>${pracownik.strefa} · plan na najbliższe 14 dni</p></div></div><div class="role-score"><strong>${moje.length}</strong><span>przydzielonych zadań</span></div></section><section class="panel cleaner-switcher"><label class="field"><span>Podgląd panelu pracownika</span><select id="cleaner-view-person">${zespolSprzatajacy.map((osoba) => `<option value="${osoba.imieNazwisko}" ${osoba.imieNazwisko === pracownik.imieNazwisko ? "selected" : ""}>${osoba.imieNazwisko}</option>`).join("")}</select></label><span class="cleaner-switcher-copy"><strong>Widok demonstracyjny</strong><small>Każda osoba ma własną dyspozycyjność i przydziały.</small></span><button class="button secondary" type="button" data-go="sprzatanie">Wróć do planowania</button></section><section class="availability-layout"><article class="panel availability-panel"><div class="panel-header"><div><span class="eyebrow">Mój grafik</span><h2>Dyspozycyjność · ${miesiacLabel}</h2></div><div class="calendar-month-controls"><button class="button secondary compact-button" type="button" data-availability-shift="-1" ${miesiac <= 9 ? "disabled" : ""} aria-label="Poprzedni miesiąc">←</button><button class="button secondary compact-button" type="button" data-availability-shift="1" ${miesiac >= 12 ? "disabled" : ""} aria-label="Następny miesiąc">→</button></div></div><div class="availability-mode" role="group" aria-label="Status wpisywany do kalendarza"><span>Po kliknięciu dnia ustaw:</span>${["Dostępna", "Wolne", "Nieokreślone"].map((status) => `<button class="availability-mode-button ${stan.trybDyspozycji === status ? "is-active" : ""}" type="button" data-availability-mode="${status}"><span class="availability-dot ${status === "Wolne" ? "off" : status === "Nieokreślone" ? "unknown" : ""}"></span>${status}</button>`).join("")}</div><div class="availability-weekdays" aria-hidden="true">${["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nie"].map((dzien) => `<span>${dzien}</span>`).join("")}</div><div class="availability-calendar">${Array.from({ length: pierwszyDzien }, () => `<span class="availability-day is-empty"></span>`).join("")}${dniMiesiaca.map((data) => { const status = pobierzDyspozycje(pracownik.imieNazwisko, data); const przydzialy = moje.filter((z) => z.dataSprzatania === data).length; return `<button class="availability-day ${status === "Dostępna" ? "available" : status === "Wolne" ? "off" : "unknown"}" type="button" data-availability-date="${data}" title="${polskaData(data)}: ${status}"><strong>${Number(data.slice(8, 10))}</strong><span>${status === "Dostępna" ? "Mogę" : status === "Wolne" ? "Wolne" : "—"}</span>${przydzialy ? `<small>${przydzialy} ${odmien(przydzialy, "zadanie", "zadania", "zadań")}</small>` : ""}</button>`; }).join("")}</div></article><aside class="panel availability-side"><div><span class="eyebrow">Podsumowanie miesiąca</span><h2>${pracownik.imieNazwisko}</h2></div><div class="availability-stat available"><span class="availability-dot"></span><strong>${liczbyDyspozycji.Dostępna} dni</strong><small>Dostępna</small></div><div class="availability-stat off"><span class="availability-dot off"></span><strong>${liczbyDyspozycji.Wolne} dni</strong><small>Wolne</small></div><div class="availability-stat unknown"><span class="availability-dot unknown"></span><strong>${liczbyDyspozycji.Nieokreślone} dni</strong><small>Nieokreślone</small></div><div class="notice"><span>Po oznaczeniu „Wolne” osoba znika z listy dostępnych administratora w tym dniu.</span></div></aside></section><section class="worker-summary"><article><span class="worker-icon">✓</span><div><strong>${moje.length} ${odmien(moje.length, "zadanie", "zadania", "zadań")}</strong><small>przypisane na 14 dni</small></div></article><article><span class="worker-icon">⌁</span><div><strong>${postep}%</strong><small>wykonania checklist</small></div></article><article><span class="worker-icon slack">#</span><div><strong>${zweryfikowane} potwierdzeń</strong><small>zdjęcia odebrane ze Slacka</small></div></article></section><div class="notice"><span><strong>Slack obserwuje kanał #sprzatanie-gotowe.</strong> Gdy pojawią się minimum ${stan.slackMinimalnaLiczbaZdjec} zdjęcia z kodem apartamentu, zadanie zmieni status automatycznie.</span><button class="button secondary" type="button" data-test-slack>Symuluj odbiór zdjęć</button></div><section class="worker-layout"><article class="panel"><div class="panel-header"><div><span class="eyebrow">Najbliższe 14 dni</span><h2>Przypisane apartamenty</h2></div><span class="status">${moje.length} ${odmien(moje.length, "lokal", "lokale", "lokali")}</span></div><div class="worker-task-list">${listaZadan.length ? listaZadan.map((z, i) => { const a = apartamentPoId(z.apartamentId); const ile = z.checklista.filter((e) => e.gotowe).length; return `<button class="worker-task worker-task-with-note" type="button" data-cleaning-id="${z.id}"><span class="task-order">${i + 1}</span><span class="record-copy"><strong>${a.nazwa}</strong><small>${polskaData(z.dataSprzatania)} · ${a.miasto} · check-in ${z.nastepnyCheckin}</small><span class="task-time">${z.okno} · checklista ${ile}/${z.checklista.length}${z.weryfikacjaSlack ? ` · Slack ${z.weryfikacjaSlack.zdjecia} zdjęcia` : ""}</span>${z.uwagaAdmin ? `<span class="worker-admin-note"><b>Uwaga administratora:</b> ${bezpiecznyTekst(z.uwagaAdmin)}</span>` : ""}</span><span class="status">${z.status}</span></button>`; }).join("") : `<div class="empty compact-empty"><span>Brak przydzielonych apartamentów.</span><small>Zaznacz dostępność, aby administrator mógł zaplanować zadania.</small></div>`}</div></article><aside class="panel worker-side"><div><span class="eyebrow">Szybkie działania</span><h2>Obsługa zmiany</h2></div>${listaZadan.length ? `<button class="button" type="button" data-cleaning-id="${listaZadan[0].id}">Otwórz następne zadanie</button>` : ""}<button class="button secondary" type="button" data-go="integracje">Ustawienia Slack</button><button class="button secondary" type="button" data-demo="Problem został przygotowany do zgłoszenia kierownikowi">Zgłoś problem</button><div class="shift-card"><small>Kontakt do koordynatora</small><strong>Ola Operacje</strong><span>+48 500 000 100</span></div><div class="shift-card"><small>Telefon pracownika</small><strong>${pracownik.imieNazwisko}</strong><span>${pracownik.telefon}</span></div></aside></section></div>`;
}

function usterki() {
  return `<div class="page-stack">${naglowek("Rejestr napraw", "Usterki i konserwacja", "Kliknij zgłoszenie, aby zobaczyć pełny opis i zmienić status.", "4 otwarte", "warning")}<section class="metric-grid">${kafel("4", "Zgłoszenia", "W całym portfelu", "sage")}${kafel("1", "Wysoki priorytet", "Reakcja dzisiaj", "sand")}${kafel("1", "W realizacji", "Przypisane technikowi", "blue")}${kafel("3", "Oczekują", "Otwarte lub planowane", "ink")}</section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Kolejka oceny</span><h2>Zgłoszenia techniczne</h2></div><button class="button" data-demo="Formularz zgłoszenia otwarto w trybie demo">Utwórz zgłoszenie</button></div><div class="record-list">${usterkiDemo.map((u) => `<button class="record-row record-button" type="button" data-issue-id="${u.id}"><span class="record-copy"><strong>${u.id} · ${u.tytul}</strong><small>${apartamentPoId(u.apartamentId).nazwa} · ${u.osoba}</small></span><span class="record-meta"><span class="status ${u.priorytet === "Wysoki" ? "danger" : "warning"}">${u.priorytet}</span><small>${u.status}</small></span></button>`).join("")}</div></section></div>`;
}

function zlotaRaczka() {
  const aktywne = usterkiDemo.filter((u) => u.status !== "Rozwiązane");
  return `<div class="page-stack worker-page"><section class="role-hero technician"><div class="role-identity"><span class="role-avatar">TK</span><div><span class="eyebrow">Panel serwisu technicznego</span><h1>Złota rączka · Tomasz</h1><p>Dzisiejsze naprawy w całym portfelu</p></div></div><div class="role-score"><strong>${aktywne.length}</strong><span>aktywne zgłoszenia</span></div></section><section class="worker-summary"><article><span class="worker-icon danger">!</span><div><strong>${aktywnеWysokie()}</strong><small>wysoki priorytet</small></div></article><article><span class="worker-icon">⚒</span><div><strong>${aktywne.filter((u) => u.status === "W realizacji").length}</strong><small>w realizacji</small></div></article><article><span class="worker-icon">◎</span><div><strong>2 h 15 min</strong><small>średni czas naprawy</small></div></article></section><section class="worker-layout"><article class="panel"><div class="panel-header"><div><span class="eyebrow">Kolejka serwisowa</span><h2>Moje zgłoszenia</h2></div><span class="status warning">${aktywne.length} zadania</span></div><div class="service-board">${aktywne.map((u, i) => { const a = apartamentPoId(u.apartamentId); return `<button class="service-card" type="button" data-issue-id="${u.id}"><span class="service-card__top"><span class="status ${u.priorytet === "Wysoki" ? "danger" : "warning"}">${u.priorytet}</span><small>${u.id}</small></span><strong>${u.tytul}</strong><span>${a.nazwa}</span><small>${a.miasto}</small><span class="service-card__footer"><b>${u.status}</b><span>${i === 0 ? "Dzisiaj · 15:30" : "Dzisiaj · elastycznie"}</span></span></button>`; }).join("")}</div></article><aside class="panel worker-side"><div><span class="eyebrow">Plan dnia</span><h2>Praca technika</h2></div><div class="route-step"><span>1</span><div><strong>Stare Miasto 05</strong><small>Wyciek · 15:30</small></div></div><div class="route-step"><span>2</span><div><strong>Mokotów Residence 01</strong><small>Lampa · 17:00</small></div></div><button class="button" type="button" data-issue-id="ISS-1041">Rozpocznij pilne zgłoszenie</button><button class="button secondary" type="button" data-demo="Dostępność technika została przekazana koordynatorowi">Zgłoś dostępność</button></aside></section></div>`;
}

function aktywnеWysokie() { return usterkiDemo.filter((u) => u.priorytet === "Wysoki" && u.status !== "Rozwiązane").length; }

function revenue() {
  const nowe = rekomendacjeRevenue.filter((r) => r.status === "Nowa");
  return `<div class="page-stack">${naglowek("Ceny oparte na danych", "Revenue management", "Rekomendacje uwzględniają popyt, tempo rezerwacji, luki, sezonowość i bezpieczne limity ceny.", `${nowe.length} rekomendacje do decyzji`)}<section class="metric-grid">${kafel("505 PLN", "ADR", "+8,4% rok do roku", "sage")}${kafel("397 PLN", "RevPAR", "+11,2% rok do roku", "blue")}${kafel("78,6%", "Obłożenie", "Bieżące 30 dni", "sand")}${kafel("+18 420 PLN", "Potencjał", "Po akceptacji rekomendacji", "ink")}</section><section class="revenue-toolbar panel"><label class="field"><span>Horyzont analizy</span><select id="revenue-range"><option value="30" ${stan.revenueZakres === "30" ? "selected" : ""}>30 dni</option><option value="60" ${stan.revenueZakres === "60" ? "selected" : ""}>60 dni</option><option value="120" ${stan.revenueZakres === "120" ? "selected" : ""}>120 dni</option></select></label><div class="revenue-signal"><span class="health-dot"></span><span><strong>Rynek rośnie</strong><small>Popyt +12% w najbliższych 30 dniach</small></span></div><button class="button secondary" type="button" data-go="ceny">Otwórz kalendarz cen</button></section><section class="two-column"><article class="panel"><div class="panel-header"><div><span class="eyebrow">Do zatwierdzenia</span><h2>Rekomendacje cenowe</h2></div><span class="status">Pełna kontrola administratora</span></div><div class="recommendation-list">${rekomendacjeRevenue.map((r) => { const a = apartamentPoId(r.apartamentId); return `<article class="recommendation-card ${r.status === "Zastosowana" ? "is-done" : ""}"><div class="recommendation-change ${r.zmiana < 0 ? "down" : ""}">${r.zmiana > 0 ? "+" : ""}${r.zmiana}%</div><div><span class="eyebrow">${a.id} · ${krotkaData(r.od)}–${krotkaData(r.do)}</span><strong>${a.nazwa}</strong><p>${r.powod}</p><small>Szacowany wpływ: <b>${r.wplyw}</b></small></div><div class="button-row">${r.status === "Nowa" ? `<button class="button compact-button" type="button" data-apply-revenue="${r.id}">Zastosuj</button><button class="button secondary compact-button" type="button" data-demo="Rekomendację pozostawiono do późniejszej decyzji">Pomiń</button>` : `<span class="status">Zastosowana</span>`}</div></article>`; }).join("")}</div></article><aside class="panel strategy-panel"><div><span class="eyebrow">Strategia portfela</span><h2>Reguły ochronne</h2></div>${rekordy([["Cena minimalna", "290 PLN", "Nigdy nie sprzedawaj poniżej"], ["Cena maksymalna", "1 250 PLN", "Ochrona przed błędem reguły"], ["Minimalny pobyt", "2 noce", "Dynamicznie dla luk i wydarzeń"], ["Last minute", "do −18%", "Maksymalna automatyczna obniżka"], ["Wydarzenia", "+10–35%", "Po zatwierdzeniu operatora"]])}<button class="button" type="button" data-go="ceny">Edytuj ceny i restrykcje</button></aside></section></div>`;
}

function jakosc() {
  const doWeryfikacji = kontroleJakosci.filter((k) => k.status === "Do weryfikacji").length;
  const doPoprawy = kontroleJakosci.filter((k) => k.status === "Do poprawy").length;
  const srednia = Math.round(kontroleJakosci.reduce((s, k) => s + k.wynik, 0) / kontroleJakosci.length);
  return `<div class="page-stack">${naglowek("Standard przygotowania lokalu", "Kontrola jakości", "Zweryfikuj komplet zdjęć, checklistę i uwagi przed oznaczeniem apartamentu jako gotowy.", `${doWeryfikacji + doPoprawy} wymagają decyzji`, doPoprawy ? "danger" : "")}<section class="metric-grid">${kafel(`${srednia}%`, "Średni wynik jakości", "+4 p.p. względem sierpnia", "sage")}${kafel(String(doWeryfikacji), "Do weryfikacji", "Nowe zestawy zdjęć", "blue")}${kafel(String(doPoprawy), "Do poprawy", "Zadanie wróci do pracownika", "sand")}${kafel("96%", "Kompletność zdjęć", "Wymagane pomieszczenia", "ink")}</section><div class="notice"><span><strong>Kontrola zdjęciowa.</strong> Każdy lokal wymaga zdjęcia wejścia, kuchni, łazienki, sypialni, salonu i licznika wyposażenia.</span><button class="button secondary" type="button" data-go="integracje">Źródło: Slack</button></div><section class="quality-grid">${kontroleJakosci.map((k) => { const a = apartamentPoId(k.apartamentId); return `<article class="panel quality-card"><div class="quality-card-head"><div><span class="eyebrow">${k.id} · ${k.zadanieId}</span><h2>${a.nazwa}</h2><small>${k.osoba}</small></div><div class="quality-score ${k.wynik < 85 ? "warning" : ""}">${k.wynik}<span>/100</span></div></div><div class="photo-check"><span><strong>${k.zdjecia}/${k.wymagane}</strong><small>zdjęć wymaganych pomieszczeń</small></span><div class="progress"><i style="width:${Math.min(100, Math.round(k.zdjecia / k.wymagane * 100))}%"></i></div></div><p>${k.uwaga}</p><div class="button-row"><button class="button compact-button" type="button" data-cleaning-id="${k.zadanieId}">Zobacz checklistę</button>${k.status !== "Zaakceptowane" ? `<button class="button secondary compact-button" type="button" data-quality-action="approve" data-quality-id="${k.id}">Zaakceptuj</button><button class="button danger compact-button" type="button" data-quality-action="reject" data-quality-id="${k.id}">Do poprawy</button>` : `<span class="status">Zaakceptowane</span>`}</div></article>`; }).join("")}</section></div>`;
}

function finanse() {
  const przychod = rozliczeniaWlascicieli.reduce((s, r) => s + r.przychod, 0);
  const wyplaty = rozliczeniaWlascicieli.reduce((s, r) => s + r.przychod - r.prowizjeOta - r.koszty - r.prowizjaOperatora, 0);
  const gotowe = rozliczeniaWlascicieli.filter((r) => r.status === "Gotowe do wypłaty").length;
  const platnosci = rezerwacjeAktywne.slice(0, 6);
  return `<div class="page-stack">${naglowek("Rozliczenia rezerwacji", "Finanse", "Przychód, prowizje, koszty operacyjne, płatności i wypłaty właścicielskie w jednym miejscu.", "Wrzesień 2026")}<section class="metric-grid">${kafel(`${Math.round(przychod / 1000)} tys. PLN`, "Przychód brutto", "Wszystkie portfele", "sage")}${kafel("74,8 tys. PLN", "Prowizje OTA", "Booking.com, Airbnb i Expedia", "blue")}${kafel("91,4 tys. PLN", "Koszty operacyjne", "Sprzątanie, serwis, materiały", "sand")}${kafel(`${Math.round(wyplaty / 1000)} tys. PLN`, "Dla właścicieli", `${gotowe} rozliczenia gotowe`, "ink")}</section><div class="notice"><span><strong>Potrzebujesz dokładnej prognozy?</strong> Raport rozdziela przychód apartamentów od faktycznych i zaplanowanych wpływów na konto.</span><button class="button secondary" type="button" data-go="raporty">Otwórz raporty finansowe</button></div><section class="two-column finance-layout"><article class="panel"><div class="panel-header"><div><span class="eyebrow">Księga rezerwacji</span><h2>Najnowsze płatności</h2></div><span class="status">PLN · brutto</span></div><div class="payment-list">${platnosci.map((r, i) => `<article class="payment-row"><span class="payment-icon ${i === 2 ? "warning" : ""}">${i === 2 ? "!" : "✓"}</span><span class="record-copy"><strong>${r.id} · ${r.gosc}</strong><small>${apartamentPoId(r.apartamentId).nazwa} · ${r.kanal}</small></span><span class="record-meta"><strong>${r.kwota.toLocaleString("pl-PL")} PLN</strong><small>${i === 2 ? "Wymaga ponowienia" : "Rozliczona"}</small></span><button class="button secondary compact-button" type="button" data-finance-action="${i === 2 ? "retry" : "details"}" data-finance-id="${r.id}">${i === 2 ? "Ponów" : "Szczegóły"}</button></article>`).join("")}</div></article><aside class="panel"><div class="panel-header"><div><span class="eyebrow">Do zamknięcia miesiąca</span><h2>Lista kontrolna</h2></div><span class="status warning">3 kroki</span></div>${rekordy([["Rozbieżności płatności", "1", "Sprawdź nieudaną transakcję"], ["Faktury kosztowe", "4", "Oczekują na przypisanie"], ["Rozliczenia właścicieli", `${gotowe}/6`, "Gotowe do publikacji"], ["Eksport księgowy", "Nieutworzony", "Format CSV/JPK"]])}<button class="button" type="button" data-demo="Pakiet zamknięcia miesiąca został przygotowany">Przygotuj zamknięcie miesiąca</button></aside></section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Właściciele</span><h2>Rozliczenia miesięczne</h2></div><button class="button secondary" type="button" data-go="wlasciciele">Otwórz portal właścicieli</button></div><div class="statement-table">${rozliczeniaWlascicieli.map((r) => { const netto = r.przychod - r.prowizjeOta - r.koszty - r.prowizjaOperatora; return `<article class="statement-row"><span class="record-copy"><strong>${r.wlasciciel}</strong><small>${r.portfel} · ${r.id}</small></span><span><small>Przychód</small><strong>${r.przychod.toLocaleString("pl-PL")} PLN</strong></span><span><small>Koszty i prowizje</small><strong>${(r.prowizjeOta + r.koszty + r.prowizjaOperatora).toLocaleString("pl-PL")} PLN</strong></span><span><small>Do wypłaty</small><strong>${netto.toLocaleString("pl-PL")} PLN</strong></span><span class="status ${r.status === "Wymaga weryfikacji" ? "danger" : ""}">${r.status}</span><button class="button secondary compact-button" type="button" data-statement-id="${r.id}">Generuj PDF</button></article>`; }).join("")}</div></section></div>`;
}

function sprzedaz() {
  const bezposrednie = rezerwacjeAktywne.filter((r) => r.kanal === "Bezpośrednia");
  return `<div class="page-stack">${naglowek("Rezerwacje bez prowizji OTA", "Sprzedaż bezpośrednia", "Silnik rezerwacji, oferty, kupony, powracający goście i dodatki zwiększające wartość pobytu.", "Kanał bezpośredni · aktywny w demo")}<section class="metric-grid">${kafel("13%", "Udział rezerwacji", "+3 p.p. względem sierpnia", "sage")}${kafel(`${bezposrednie.length}`, "Rezerwacje bezpośrednie", "Wrzesień–grudzień", "blue")}${kafel("18 620 PLN", "Zaoszczędzona prowizja", "Szacunek dla portfela", "sand")}${kafel("8,7%", "Konwersja strony", "Ostatnie 30 dni", "ink")}</section><section class="sales-layout"><article class="panel booking-engine-preview"><div class="panel-header"><div><span class="eyebrow">Silnik rezerwacji</span><h2>Znajdź swój apartament</h2></div><span class="status">Dostępność na żywo · demo</span></div><div class="booking-search-box"><label class="field"><span>Przyjazd</span><input type="date" value="2026-09-18"></label><label class="field"><span>Wyjazd</span><input type="date" value="2026-09-21"></label><label class="field"><span>Goście</span><select><option>2 osoby</option><option>3 osoby</option><option>4 osoby</option></select></label><button class="button" type="button" data-demo="Znaleziono 11 dostępnych apartamentów w podanym terminie">Sprawdź dostępność</button></div><div class="direct-offers">${apartamenty.slice(0, 3).map((a, i) => `<article><span class="offer-rank">${i + 1}</span><div><strong>${a.nazwa}</strong><small>${a.miasto} · ${2 + i} osoby · bezpłatne anulowanie</small></div><span><strong>${(459 + i * 70).toLocaleString("pl-PL")} PLN</strong><small>za noc</small></span><button class="button secondary compact-button" type="button" data-demo="Oferta ${a.nazwa} została wybrana">Wybierz</button></article>`).join("")}</div></article><aside class="panel campaign-panel"><div><span class="eyebrow">CRM gości</span><h2>Automatyczne kampanie</h2></div>${rekordy([["Powrót w ciągu 90 dni", "184 gości", "Kupon −10%"], ["Niedokończona rezerwacja", "23 osoby", "Przypomnienie po 2 h"], ["Rocznica pobytu", "61 gości", "Oferta spersonalizowana"], ["Dodatki przed przyjazdem", "38% konwersji", "Parking i późny wyjazd"]])}<button class="button" type="button" data-demo="Kampania do powracających gości została uruchomiona w trybie demonstracyjnym">Uruchom kampanię</button></aside></section></div>`;
}

function zespolWidok() {
  const data = stan.dataPlanuSprzatania;
  return `<div class="page-stack">${naglowek("Kadry operacyjne", "Zespół i rozliczenia pracy", "Dyspozycyjność, obciążenie, czas pracy, stawki oraz jakość wykonania dla każdej osoby.", "6 osób sprzątających · 3 role biurowe")}<section class="metric-grid">${kafel("9", "Aktywni pracownicy", "6 terenowych · 3 biurowych", "sage")}${kafel("164 h", "Zaplanowane godziny", "Najbliższe 14 dni", "blue")}${kafel("12 840 PLN", "Koszt pracy", "Prognoza bieżącego miesiąca", "sand")}${kafel("91/100", "Średnia jakości", "Kontrole przygotowania lokali", "ink")}</section><section class="panel"><div class="panel-header"><div><span class="eyebrow">${polskaData(data)}</span><h2>Obciążenie zespołu sprzątającego</h2></div><button class="button secondary" type="button" data-go="panel_sprzatajacej">Kalendarze dyspozycyjności</button></div><div class="team-grid">${zespolSprzatajacy.map((osoba, i) => { const zadania = zadaniaSprzatania.filter((z) => z.osoba === osoba.imieNazwisko).length; const jakosc = 87 + (i * 3) % 11; const koszt = zadania * (78 + i * 3); return `<article class="team-card"><div class="team-card-head"><span class="cleaner-avatar">${osoba.inicjaly}</span><span><strong>${osoba.imieNazwisko}</strong><small>${osoba.strefa}</small></span><span class="status ${pobierzDyspozycje(osoba.imieNazwisko, data) === "Wolne" ? "danger" : ""}">${pobierzDyspozycje(osoba.imieNazwisko, data)}</span></div><div class="team-facts"><span><small>Zadania</small><strong>${zadania}</strong></span><span><small>Jakość</small><strong>${jakosc}/100</strong></span><span><small>Rozliczenie</small><strong>${koszt.toLocaleString("pl-PL")} PLN</strong></span></div><div class="button-row"><button class="button secondary compact-button" type="button" data-team-person="${osoba.imieNazwisko}">Otwórz panel</button><button class="button secondary compact-button" type="button" data-demo="Ewidencja czasu ${osoba.imieNazwisko} została otwarta">Czas pracy</button></div></article>`; }).join("")}</div></section></div>`;
}

function koordynatorzyWidok() {
  const osoba = koordynatorzy.find((k) => k.imieNazwisko === stan.koordynatorOsoba) || koordynatorzy[0];
  const wszystkie = zadaniaKoordynatorow.filter((z) => z.koordynator === osoba.imieNazwisko);
  const widoczne = wszystkie.filter((z) => (!stan.koordynatorKategoria || z.kategoria === stan.koordynatorKategoria)
    && (!stan.koordynatorApartament || z.apartamentId === stan.koordynatorApartament)
    && (!stan.koordynatorSzukaj || `${z.id} ${z.tytul} ${z.opis} ${z.kategoria}`.toLocaleLowerCase("pl").includes(stan.koordynatorSzukaj.toLocaleLowerCase("pl"))));
  const statusy = [["Do zrobienia", "Do zrobienia", "Zadania oczekujące na rozpoczęcie"], ["W trakcie", "W trakcie realizacji", "Każde ma aktualny opis etapu"], ["Zakończone", "Zakończone", "Pełna historia wykonania"]];
  const pilne = wszystkie.filter((z) => z.status !== "Zakończone" && z.termin <= "2026-09-10").length;
  const terminOpis = (z) => z.status === "Zakończone" ? `Zakończone · termin ${krotkaData(z.termin)}` : z.termin < RAPORT_DZISIAJ ? `Po terminie · ${krotkaData(z.termin)}` : z.termin === RAPORT_DZISIAJ ? "Termin dzisiaj" : `Termin ${krotkaData(z.termin)}`;
  const karta = (z) => { const apartament = z.apartamentId ? apartamentPoId(z.apartamentId) : null; const ostatni = z.historia.at(-1); const nastepny = z.status === "Do zrobienia" ? "W trakcie" : z.status === "W trakcie" ? "Zakończone" : "Do zrobienia"; const etykieta = z.status === "Do zrobienia" ? "Rozpocznij" : z.status === "W trakcie" ? "Zakończ" : "Wznów"; return `<article class="coordinator-task-card ${z.priorytet === "Pilne" ? "is-urgent" : ""} ${z.status !== "Zakończone" && z.termin < RAPORT_DZISIAJ ? "is-overdue" : ""}"><button class="task-card-main" type="button" data-coordinator-task="${z.id}"><span class="task-card-top"><span class="task-category">${z.kategoria}</span><span class="task-id">${z.id}</span></span><strong>${z.tytul}</strong><span class="task-apartment">${apartament ? `${apartament.id} · ${apartament.nazwa}` : "Zadanie ogólne"}</span><span class="task-due ${z.status !== "Zakończone" && z.termin <= RAPORT_DZISIAJ ? "danger" : ""}">${terminOpis(z)}</span><span class="task-last-update"><small>Ostatnia aktualizacja</small>${bezpiecznyTekst(ostatni.opis)}</span></button><div class="task-card-actions"><span class="status ${z.priorytet === "Pilne" ? "danger" : ""}">${z.priorytet}</span><button class="button secondary compact-button" type="button" data-coordinator-next="${nastepny}" data-coordinator-task-id="${z.id}">${etykieta}</button></div></article>`; };
  return `<div class="page-stack coordinator-page"><section class="coordinator-hero"><div class="coordinator-identity"><span class="coordinator-avatar">${osoba.inicjaly}</span><div><span class="eyebrow">Panel koordynatora</span><h1>${osoba.imieNazwisko}</h1><p>${osoba.obszar} · ${osoba.telefon}</p></div></div><div class="coordinator-hero-actions"><label class="field"><span>Podgląd koordynatora</span><select id="coordinator-person">${koordynatorzy.map((k) => `<option value="${k.imieNazwisko}" ${k.imieNazwisko === osoba.imieNazwisko ? "selected" : ""}>${k.imieNazwisko}</option>`).join("")}</select></label><button class="button" type="button" data-new-coordinator-task>+ Dodaj zadanie</button></div></section><div class="notice"><span><strong>Podgląd administratora.</strong> Tutaj możesz przełączać osoby. Po zalogowaniu koordynator zobaczy wyłącznie własną tablicę i sam doda sobie zadanie.</span></div><section class="metric-grid coordinator-metrics">${kafel(String(wszystkie.filter((z) => z.status === "Do zrobienia").length), "Do zrobienia", "Zadania oczekujące", "sage")}${kafel(String(wszystkie.filter((z) => z.status === "W trakcie").length), "W trakcie", "Z opisanym etapem", "blue")}${kafel(String(pilne), "Pilne terminy", "Do 10 września", "sand")}${kafel(String(wszystkie.filter((z) => z.status === "Zakończone").length), "Zakończone", "Z pełną historią", "ink")}</section><section class="panel coordinator-filters"><label class="field grow"><span>Szukaj zadania</span><input id="coordinator-search" type="search" value="${bezpiecznyTekst(stan.koordynatorSzukaj)}" placeholder="Tytuł, opis, numer zadania"></label><label class="field"><span>Kategoria</span><select id="coordinator-category"><option value="">Wszystkie kategorie</option>${kategorieZadanKoordynatorow.map((k) => `<option value="${k}" ${k === stan.koordynatorKategoria ? "selected" : ""}>${k}</option>`).join("")}</select></label><label class="field"><span>Apartament</span><select id="coordinator-apartment"><option value="">Wszystkie zadania</option>${apartamenty.map((a) => `<option value="${a.id}" ${a.id === stan.koordynatorApartament ? "selected" : ""}>${a.id} · ${a.nazwa}</option>`).join("")}</select></label><button class="button secondary" type="button" data-clear-coordinator-filters>Wyczyść</button></section><div class="coordinator-board" aria-label="Tablica zadań koordynatora">${statusy.map(([status, tytul, opis]) => { const zadania = widoczne.filter((z) => z.status === status); return `<section class="task-column task-column-${status === "Do zrobienia" ? "todo" : status === "W trakcie" ? "doing" : "done"}"><header><div><span class="task-column-dot"></span><h2>${tytul}</h2></div><strong>${zadania.length}</strong><small>${opis}</small></header><div class="task-column-list">${zadania.map(karta).join("") || `<div class="empty task-empty"><span>Brak zadań</span><small>Zmień filtry albo dodaj nowe zadanie.</small></div>`}</div></section>`; }).join("")}</div><div class="notice coordinator-rule"><span><strong>Aktualizacja etapu jest obowiązkowa.</strong> Przy rozpoczęciu, zakończeniu lub wznowieniu zadania koordynator musi opisać, co się dzieje i na jakim etapie jest sprawa.</span></div></div>`;
}

function wlascicieleWidok() {
  const portfel = portfele.find((p) => p.wlasciciel === stan.wlascicielNazwa) || portfele[0];
  const wiersze = wierszeWlasciciela();
  const suma = (pole) => wiersze.reduce((s, w) => s + w[pole], 0);
  const rezerwacje = wiersze.flatMap((w) => w.rozliczenia).sort((a, b) => a.rezerwacja.przyjazd.localeCompare(b.rezerwacja.przyjazd));
  const miesiac = miesiace.find((m) => m.numer === stan.wlascicielMiesiac);
  const oblozenie = Math.round(suma("noce") / (wiersze.length * dniWMiesiacu(stan.wlascicielMiesiac)) * 100);
  const wybrany = wiersze.find((w) => w.apartament.id === stan.wlascicielApartamentId);
  const inicjaly = stan.wlascicielNazwa.split(" ").map((x) => x[0]).slice(0, 2).join("");
  const tabelaLokali = `<div class="analysis-table-scroll"><table class="analysis-table owner-statement-table"><thead><tr><th>Apartament</th><th>Rezerwacje</th><th>Pokojonoce</th><th>Brutto</th><th>Prowizja portali 16,2%</th><th>VAT 8%</th><th>Obsługa 20%</th><th>Sprzątanie</th><th>Dla właściciela</th><th></th></tr></thead><tbody>${wiersze.map((w) => `<tr class="${w.apartament.id === stan.wlascicielApartamentId ? "is-selected" : ""}"><td><strong>${w.apartament.nazwa}</strong><small>${w.apartament.id} · ${w.apartament.pokoje} pokoje · ${w.apartament.lazienki} ${w.apartament.lazienki === 1 ? "łazienka" : "łazienki"}</small></td><td>${w.rezerwacje}</td><td>${w.noce}</td><td>${formatPLN(w.brutto)}</td><td>−${formatPLN(w.prowizjaPortalu)}</td><td>−${formatPLN(w.vat)}</td><td>−${formatPLN(w.wynagrodzenieOperatora)}</td><td>−${formatPLN(w.sprzatanie)}</td><td><strong>${formatPLN(w.dlaWlasciciela)}</strong></td><td><button class="button secondary compact-button" type="button" data-owner-apartment="${w.apartament.id}">Rezerwacje</button></td></tr>`).join("")}</tbody><tfoot><tr><td>Razem · ${portfel.nazwa}</td><td>${suma("rezerwacje")}</td><td>${suma("noce")}</td><td>${formatPLN(suma("brutto"))}</td><td>−${formatPLN(suma("prowizjaPortalu"))}</td><td>−${formatPLN(suma("vat"))}</td><td>−${formatPLN(suma("wynagrodzenieOperatora"))}</td><td>−${formatPLN(suma("sprzatanie"))}</td><td>${formatPLN(suma("dlaWlasciciela"))}</td><td></td></tr></tfoot></table></div>`;
  const tabelaRezerwacji = `<div class="analysis-table-scroll"><table class="analysis-table owner-booking-table"><thead><tr><th>Rezerwacja</th><th>Apartament</th><th>Termin</th><th>Kanał</th><th>Brutto</th><th>Prowizja portalu</th><th>Wpływ po portalu</th><th>VAT</th><th>Obsługa</th><th>Sprzątanie</th><th>Dla właściciela</th><th></th></tr></thead><tbody>${rezerwacje.map(({ rezerwacja: r, dane: d }) => `<tr><td><strong>${r.id}</strong><small>${r.gosc}</small></td><td><strong>${d.apartament.nazwa}</strong><small>${d.apartament.id}</small></td><td>${krotkaData(r.przyjazd)}–${krotkaData(r.wyjazd)}</td><td>${r.kanal}</td><td>${formatPLN(d.brutto)}</td><td>−${formatPLN(d.prowizjaPortalu)}</td><td>${formatPLN(d.wplywPoPortalu)}</td><td>−${formatPLN(d.vat)}</td><td>−${formatPLN(d.wynagrodzenieOperatora)}</td><td>−${formatPLN(d.sprzatanie)}</td><td><strong>${formatPLN(d.dlaWlasciciela)}</strong></td><td><button class="button secondary compact-button" type="button" data-reservation-id="${r.id}">Szczegóły</button></td></tr>`).join("")}</tbody></table></div>`;
  const szczegoly = wybrany ? `<section class="panel owner-apartment-detail"><div class="panel-header"><div><span class="eyebrow">${wybrany.apartament.id} · rozliczenie lokalu</span><h2>${wybrany.apartament.nazwa}</h2><small>${wybrany.rezerwacje} rezerwacje · ${wybrany.noce} pokojonocy · ${formatPLN(wybrany.dlaWlasciciela)} dla właściciela</small></div><button class="button secondary compact-button" type="button" data-owner-close-details>Zamknij</button></div><div class="owner-reservation-cards">${wybrany.rozliczenia.map(({ rezerwacja: r, dane: d }) => `<article><div class="owner-reservation-head"><span class="record-copy"><strong>${r.id} · ${r.gosc}</strong><small>${krotkaData(r.przyjazd)}–${krotkaData(r.wyjazd)} · ${r.kanal}</small></span><button class="button secondary compact-button" type="button" data-reservation-id="${r.id}">Pełne dane</button></div><div class="owner-mini-bridge"><span><small>Brutto</small><strong>${formatPLN(d.brutto)}</strong></span><i>−</i><span><small>Portal</small><strong>${formatPLN(d.prowizjaPortalu)}</strong></span><i>−</i><span><small>VAT</small><strong>${formatPLN(d.vat)}</strong></span><i>−</i><span><small>Obsługa</small><strong>${formatPLN(d.wynagrodzenieOperatora)}</strong></span><i>−</i><span><small>Sprzątanie</small><strong>${formatPLN(d.sprzatanie)}</strong></span><i>=</i><span class="is-total"><small>Dla właściciela</small><strong>${formatPLN(d.dlaWlasciciela)}</strong></span></div></article>`).join("")}</div></section>` : "";
  return `<div class="page-stack owner-portal-page"><section class="owner-portal-hero"><div class="owner-profile"><span class="owner-avatar large">${inicjaly}</span><div><span class="eyebrow">Panel właściciela · widok demonstracyjny</span><h1>${stan.wlascicielNazwa}</h1><p>${portfel.nazwa} · ${portfel.miasto} · 6 przypisanych apartamentów</p></div></div><div class="owner-portal-controls"><label class="field"><span>Klient</span><select id="owner-client">${portfele.map((p) => `<option value="${p.wlasciciel}" ${p.wlasciciel === stan.wlascicielNazwa ? "selected" : ""}>${p.wlasciciel}</option>`).join("")}</select></label><label class="field"><span>Miesiąc</span><select id="owner-month">${miesiace.map((m) => `<option value="${m.numer}" ${m.numer === stan.wlascicielMiesiac ? "selected" : ""}>${m.nazwa} 2026</option>`).join("")}</select></label><button class="button secondary" type="button" data-owner-export>Pobierz rozliczenie CSV</button></div></section><div class="notice warning"><span><strong>Prezentacja uprawnień.</strong> Administrator może przełączać klientów. Po prawdziwym logowaniu właściciel zobaczy wyłącznie swoje przypisane apartamenty i rezerwacje.</span><button class="button secondary" type="button" data-demo="Ustawienia dostępu właściciela zostały otwarte">Uprawnienia</button></div><div class="owner-portal-tabs"><button class="button ${stan.wlascicielZakladka === "wynik" ? "is-active" : "secondary"}" type="button" data-owner-tab="wynik">Wynik apartamentów</button><button class="button ${stan.wlascicielZakladka === "rezerwacje" ? "is-active" : "secondary"}" type="button" data-owner-tab="rezerwacje">Wszystkie rezerwacje</button></div><section class="metric-grid">${kafel(formatPLN(suma("brutto")), "Przychód brutto", `${suma("rezerwacje")} rezerwacji w miesiącu`, "sage")}${kafel(`${oblozenie}%`, "Obłożenie portfela", `${suma("noce")} sprzedanych pokojonocy`, "blue")}${kafel(formatPLN(suma("prowizjaPortalu") + suma("vat") + suma("wynagrodzenieOperatora") + suma("sprzatanie")), "Łączne potrącenia", "Portal, VAT, obsługa i sprzątanie", "sand")}${kafel(formatPLN(suma("dlaWlasciciela")), "Dla właściciela", `${miesiac.nazwa} 2026`, "ink")}</section><section class="owner-formula panel"><div><span class="eyebrow">Jawna formuła rozliczenia</span><h2>Jak powstaje kwota dla właściciela</h2><p>Sprzątanie jest odliczane osobno i nie stanowi podstawy naliczania procentowych potrąceń.</p></div><div class="owner-formula-flow"><span><small>1 · Cena brutto</small><strong>100%</strong></span><i>−</i><span><small>2 · Portal</small><strong>16,2%</strong></span><i>→</i><span><small>3 · VAT od wpływu</small><strong>8%</strong></span><i>→</i><span><small>4 · Obsługa po VAT</small><strong>20%</strong></span><i>−</i><span><small>5 · Sprzątanie</small><strong>135 / 150 / 180 PLN</strong></span></div><div class="cleaning-price-legend"><span><strong>135 PLN</strong><small>do 2 pokoi · 1 łazienka</small></span><span><strong>150 PLN</strong><small>powyżej 2 pokoi · 1 łazienka</small></span><span><strong>180 PLN</strong><small>lokal z 2 łazienkami</small></span></div></section><section class="panel owner-statement"><div class="panel-header"><div><span class="eyebrow">${miesiac.nazwa} 2026</span><h2>${stan.wlascicielZakladka === "wynik" ? "Wynik każdego apartamentu" : "Rezerwacje przypisanych apartamentów"}</h2></div><span class="status">${stan.wlascicielZakladka === "wynik" ? "6 apartamentów" : `${rezerwacje.length} rezerwacji`}</span></div>${stan.wlascicielZakladka === "wynik" ? tabelaLokali : tabelaRezerwacji}</section>${szczegoly}</div>`;
}

function filtryRaportu() {
  const statusy = [["wszystkie", "Wszystkie etapy"], ["zrealizowane", "Pobyty zrealizowane"], ["zamkniete", "Zamknięte finansowo"], ["do_wyplaty", "Do wypłaty"], ["wstrzymane", "Wstrzymane"]];
  return `<section class="panel report-control-panel"><div class="report-tabs" role="tablist" aria-label="Rodzaj raportu"><button class="report-tab ${stan.raportZakladka === "sprzedaz" ? "is-active" : ""}" type="button" role="tab" aria-selected="${stan.raportZakladka === "sprzedaz"}" data-report-tab="sprzedaz"><span>01</span><strong>Sprzedaż według apartamentu</strong><small>Pokojonoce, ADR i przychód</small></button><button class="report-tab ${stan.raportZakladka === "rozliczenia" ? "is-active" : ""}" type="button" role="tab" aria-selected="${stan.raportZakladka === "rozliczenia"}" data-report-tab="rozliczenia"><span>02</span><strong>Zrealizowane i zamknięte</strong><small>Wpłaty, potrącenia i terminy</small></button></div><div class="report-filters"><label class="field"><span>Miesiąc rozliczeniowy</span><select id="report-month">${miesiace.map((m) => `<option value="${m.numer}" ${m.numer === stan.raportMiesiac ? "selected" : ""}>${m.nazwa} 2026</option>`).join("")}</select></label><label class="field"><span>Portfel</span><select id="report-portfolio"><option value="">Wszystkie portfele</option>${portfele.map((p) => `<option value="${p.nazwa}" ${p.nazwa === stan.raportPortfel ? "selected" : ""}>${p.nazwa}</option>`).join("")}</select></label><label class="field"><span>Kanał sprzedaży</span><select id="report-channel"><option value="">Wszystkie kanały</option>${kanaly.map((k) => `<option value="${k}" ${k === stan.raportKanal ? "selected" : ""}>${k}</option>`).join("")}</select></label>${stan.raportZakladka === "rozliczenia" ? `<label class="field"><span>Status rozliczenia</span><select id="report-status">${statusy.map(([id, nazwa]) => `<option value="${id}" ${id === stan.raportStatus ? "selected" : ""}>${nazwa}</option>`).join("")}</select></label>` : `<div class="report-view-switch" role="group" aria-label="Sposób prezentacji"><span>Widok</span><button class="button ${stan.raportWidok === "tabela" ? "is-active" : "secondary"} compact-button" type="button" data-report-view="tabela">Tabela</button><button class="button ${stan.raportWidok === "wykres" ? "is-active" : "secondary"} compact-button" type="button" data-report-view="wykres">Wykres</button></div>`}<button class="button report-export" type="button" data-report-export>Eksportuj CSV</button></div></section>`;
}

function szczegolyApartamentuRaportu(wiersz) {
  if (!wiersz) return "";
  return `<section class="panel report-details"><div class="panel-header"><div><span class="eyebrow">${wiersz.apartament.id} · szczegóły miesiąca</span><h2>${wiersz.apartament.nazwa}</h2><small>${wiersz.apartament.miasto} · ${wiersz.rezerwacje.length} rezerwacje</small></div><button class="button secondary compact-button" type="button" data-report-close-details>Zamknij szczegóły</button></div><div class="report-reservation-list">${wiersz.rezerwacje.map((r) => { const d = daneRozliczenia(r); const noce = noceRezerwacjiWMiesiacu(r, stan.raportMiesiac); const wartosc = Math.round(r.kwota * noce / liczbaNocy(r.przyjazd, r.wyjazd)); return `<article class="report-reservation-row"><span class="record-copy"><strong>${r.id} · ${r.gosc}</strong><small>${krotkaData(r.przyjazd)}–${krotkaData(r.wyjazd)} · ${r.kanal}</small></span><span><small>Pokojonoce</small><strong>${noce}</strong></span><span><small>Przychód miesiąca</small><strong>${formatPLN(wartosc)}</strong></span><span class="status ${d.statusWyplaty === "Wstrzymana" ? "danger" : d.statusWyplaty === "Zaplanowana" ? "warning" : ""}">${d.statusWyplaty}</span><button class="button secondary compact-button" type="button" data-reservation-id="${r.id}">Karta rezerwacji</button></article>`; }).join("")}</div></section>`;
}

function raportSprzedazy() {
  const wiersze = wierszeSprzedazyRaportu();
  const liczbaRezerwacji = wiersze.reduce((s, w) => s + w.rezerwacje.length, 0);
  const pokojonoce = wiersze.reduce((s, w) => s + w.pokojonoce, 0);
  const przychod = wiersze.reduce((s, w) => s + w.przychod, 0);
  const prowizje = wiersze.reduce((s, w) => s + w.prowizje, 0);
  const adr = pokojonoce ? Math.round(przychod / pokojonoce) : 0;
  const wybrany = wiersze.find((w) => w.apartament.id === stan.raportApartamentId);
  const maksimum = Math.max(...wiersze.map((w) => w.przychod), 1);
  const tabela = `<div class="analysis-table-scroll"><table class="analysis-table"><thead><tr><th>Apartament</th><th>Rezerwacje</th><th>Pokojonoce</th><th>Obłożenie</th><th>Średnia cena / noc</th><th>Przychód brutto</th><th>Prowizje kanałów</th><th>Po prowizjach</th><th></th></tr></thead><tbody>${wiersze.map((w) => `<tr class="${w.apartament.id === stan.raportApartamentId ? "is-selected" : ""}"><td><strong>${w.apartament.nazwa}</strong><small>${w.apartament.id} · ${w.apartament.miasto}</small></td><td>${w.rezerwacje.length}</td><td>${w.pokojonoce}</td><td>${w.oblozenie}%</td><td>${formatPLN(w.adr)}</td><td><strong>${formatPLN(w.przychod)}</strong></td><td>−${formatPLN(w.prowizje)}</td><td><strong>${formatPLN(w.przychod - w.prowizje)}</strong></td><td><button class="button secondary compact-button" type="button" data-report-apartment="${w.apartament.id}">Szczegóły</button></td></tr>`).join("")}</tbody><tfoot><tr><td>Razem</td><td>${liczbaRezerwacji}</td><td>${pokojonoce}</td><td>—</td><td>${formatPLN(adr)}</td><td>${formatPLN(przychod)}</td><td>−${formatPLN(prowizje)}</td><td>${formatPLN(przychod - prowizje)}</td><td></td></tr></tfoot></table></div>`;
  const wykres = `<div class="report-chart" aria-label="Przychód apartamentów w wybranym miesiącu">${wiersze.slice(0, 18).map((w, i) => `<button type="button" data-report-apartment="${w.apartament.id}" title="${bezpiecznyTekst(`${w.apartament.nazwa}: ${formatPLN(w.przychod)}`)}"><span><strong>${String(i + 1).padStart(2, "0")}. ${w.apartament.nazwa}</strong><small>${w.pokojonoce} pokojonocy · ADR ${formatPLN(w.adr)}</small></span><i><b style="width:${Math.round(w.przychod / maksimum * 100)}%"></b></i><em>${formatPLN(w.przychod)}</em></button>`).join("")}</div>`;
  return `<section class="metric-grid report-metrics">${kafel(String(liczbaRezerwacji), "Rezerwacje w miesiącu", "Bez anulowanych", "sage")}${kafel(String(pokojonoce), "Sprzedane pokojonoce", `${wiersze.length} aktywne apartamenty`, "blue")}${kafel(formatPLN(adr), "Średnia cena za noc", "Przychód ÷ pokojonoce", "sand")}${kafel(formatPLN(przychod), "Przychód brutto", `${formatPLN(przychod - prowizje)} po prowizjach`, "ink")}</section><div class="report-definition"><strong>Jak liczymy sprzedaż?</strong><span>Przychód jest przypisany do nocy faktycznie przypadających na wybrany miesiąc. Rezerwacja przechodząca przez granicę miesiąca jest dzielona proporcjonalnie.</span></div><section class="panel report-result-panel"><div class="panel-header"><div><span class="eyebrow">Wynik według miejsca noclegowego</span><h2>Pokojonoce, średnia cena i wartość</h2></div><span class="status">${wiersze.length} apartamentów</span></div>${stan.raportWidok === "wykres" ? wykres : tabela}</section>${szczegolyApartamentuRaportu(wybrany)}`;
}

function pasujeDoStatusuRaportu(d) {
  return stan.raportStatus === "wszystkie"
    || stan.raportStatus === "zrealizowane" && d.etapPobytu === "Zrealizowana"
    || stan.raportStatus === "zamkniete" && d.zamknieta
    || stan.raportStatus === "do_wyplaty" && d.statusWyplaty === "Zaplanowana"
    || stan.raportStatus === "wstrzymane" && d.statusWyplaty === "Wstrzymana";
}

function raportRozliczen() {
  const wszystkie = rezerwacjeRaportu().map((r) => ({ rezerwacja: r, rozliczenie: daneRozliczenia(r) }));
  const widoczne = wszystkie.filter(({ rozliczenie: d }) => pasujeDoStatusuRaportu(d));
  const juzWplynelo = wszystkie.filter(({ rozliczenie: d }) => d.statusWyplaty === "Wypłacona").reduce((s, x) => s + x.rozliczenie.doKonta, 0);
  const zaplanowane = wszystkie.filter(({ rozliczenie: d }) => d.statusWyplaty === "Zaplanowana").reduce((s, x) => s + x.rozliczenie.doKonta, 0);
  const poMiesiacu = wszystkie.filter(({ rozliczenie: d }) => d.statusWyplaty === "Po miesiącu").reduce((s, x) => s + x.rozliczenie.doKonta, 0);
  const wstrzymane = wszystkie.filter(({ rozliczenie: d }) => d.statusWyplaty === "Wstrzymana").reduce((s, x) => s + x.rozliczenie.doKonta, 0);
  const brutto = wszystkie.reduce((s, x) => s + x.rezerwacja.kwota, 0);
  const prowizje = wszystkie.reduce((s, x) => s + x.rozliczenie.prowizja, 0);
  return `<section class="cash-forecast"><article class="cash-forecast-primary"><span class="eyebrow">Prognoza wpływów do końca miesiąca</span><strong>${formatPLN(juzWplynelo + zaplanowane)}</strong><small>${formatPLN(juzWplynelo)} już wpłynęło + ${formatPLN(zaplanowane)} zaplanowano</small></article><article><span>Wartość rezerwacji brutto</span><strong>${formatPLN(brutto)}</strong><small>Przed potrąceniami kanałów</small></article><article><span>Prowizje i opłaty</span><strong>−${formatPLN(prowizje)}</strong><small>Booking.com, Airbnb, Expedia i płatności</small></article><article class="${wstrzymane ? "has-warning" : ""}"><span>Wstrzymane</span><strong>${formatPLN(wstrzymane)}</strong><small>Wymagają ręcznej weryfikacji</small></article></section><div class="cash-flow-strip"><span><small>Już na koncie</small><strong>${formatPLN(juzWplynelo)}</strong></span><i>+</i><span><small>Do końca miesiąca</small><strong>${formatPLN(zaplanowane)}</strong></span><i>+</i><span><small>Po zakończeniu miesiąca</small><strong>${formatPLN(poMiesiacu)}</strong></span><i>+</i><span><small>Wstrzymane</small><strong>${formatPLN(wstrzymane)}</strong></span><i>=</i><span class="cash-flow-total"><small>Łącznie po prowizjach</small><strong>${formatPLN(brutto - prowizje)}</strong></span></div><div class="report-definition"><strong>Co oznacza „zamknięta finansowo”?</strong><span>Pobyt został zakończony, wypłata wpłynęła i można ją uzgodnić z wyciągiem bankowym. Prognoza korzysta z demonstracyjnych terminów wypłat poszczególnych kanałów.</span></div><section class="panel report-result-panel"><div class="panel-header"><div><span class="eyebrow">Księga pobytów i wypłat</span><h2>Zrealizowane oraz zamknięte rezerwacje</h2></div><span class="status">${widoczne.length} pozycji</span></div><div class="analysis-table-scroll"><table class="analysis-table settlement-table"><thead><tr><th>Rezerwacja</th><th>Apartament</th><th>Pobyt</th><th>Etap pobytu</th><th>Brutto</th><th>Potrącenia</th><th>Wpływ na konto</th><th>Termin wypłaty</th><th>Status wypłaty</th><th></th></tr></thead><tbody>${widoczne.map(({ rezerwacja: r, rozliczenie: d }) => `<tr><td><strong>${r.id}</strong><small>${r.gosc} · ${r.kanal}</small></td><td><strong>${apartamentPoId(r.apartamentId).nazwa}</strong><small>${r.apartamentId}</small></td><td>${krotkaData(r.przyjazd)}–${krotkaData(r.wyjazd)}</td><td><span class="status ${d.etapPobytu === "Zrealizowana" ? "" : "warning"}">${d.zamknieta ? "Zamknięta finansowo" : d.etapPobytu}</span></td><td>${formatPLN(r.kwota)}</td><td>−${formatPLN(d.prowizja)}</td><td><strong>${formatPLN(d.doKonta)}</strong></td><td>${polskaData(d.dataWyplaty)}</td><td><span class="status ${d.statusWyplaty === "Wstrzymana" ? "danger" : d.statusWyplaty === "Zaplanowana" || d.statusWyplaty === "Po miesiącu" ? "warning" : ""}">${d.statusWyplaty}</span></td><td><button class="button secondary compact-button" type="button" data-reservation-id="${r.id}">Szczegóły</button></td></tr>`).join("")}</tbody></table></div></section>`;
}

function raportyWidok() {
  const miesiac = miesiace.find((m) => m.numer === stan.raportMiesiac);
  return `<div class="page-stack reports-page">${naglowek("Analizy sprzedaży i przepływów", "Raporty finansowe", "Sprawdź wynik każdego apartamentu, a następnie oddziel go od rzeczywistych i planowanych wpływów na konto.", `${miesiac.nazwa} 2026 · dane demo`)}${filtryRaportu()}${stan.raportZakladka === "rozliczenia" ? raportRozliczen() : raportSprzedazy()}</div>`;
}

function magazyn() {
  const braki = magazynDemo.filter((p) => p.stan < p.minimum);
  const lacznie = magazynDemo.reduce((s, p) => s + p.stan, 0);
  return `<div class="page-stack">${naglowek("Zaopatrzenie operacyjne", "Magazyn i pralnia", "Kontroluj obieg pościeli, ręczników, chemii i wyposażenia przypisanego do lokalizacji oraz zadań.", `${braki.length} pozycje poniżej minimum`, braki.length ? "danger" : "")}<section class="metric-grid">${kafel(String(lacznie), "Jednostki na stanie", "Wszystkie magazyny", "sage")}${kafel(String(braki.length), "Do uzupełnienia", "Poniżej stanu minimalnego", "blue")}${kafel("74", "Komplety w pralni", "Odbiór jutro o 08:30", "sand")}${kafel("98,2%", "Zgodność wydań", "Skanowanie zadań i lokalizacji", "ink")}</section><div class="notice"><span><strong>Automatyczne zużycie.</strong> Zakończenie sprzątania rozlicza pościel, ręczniki i zestawy gościnne według checklisty apartamentu.</span><button class="button secondary" type="button" data-demo="Plan odbiorów pralni został otwarty">Plan pralni</button></div><section class="inventory-grid">${magazynDemo.map((p) => { const niski = p.stan < p.minimum; const procent = Math.min(100, Math.round(p.stan / Math.max(p.minimum, 1) * 100)); return `<article class="panel inventory-card ${niski ? "is-low" : ""}"><div class="inventory-card-head"><span class="stock-icon">${p.kategoria === "Pralnia" ? "▦" : p.kategoria === "Chemia" ? "◫" : "◇"}</span><div><span class="eyebrow">${p.id} · ${p.kategoria}</span><h2>${p.nazwa}</h2><small>${p.lokalizacja}</small></div><span class="status ${niski ? "danger" : ""}">${niski ? "Uzupełnij" : "Stan OK"}</span></div><div class="stock-number"><strong>${p.stan}</strong><span>${p.jednostka}<small>minimum ${p.minimum}</small></span></div><div class="progress"><i style="width:${procent}%"></i></div><div class="button-row"><button class="button ${niski ? "" : "secondary"} compact-button" type="button" data-stock-order="${p.id}">${niski ? "Zamów do minimum" : "Dodaj przyjęcie"}</button><button class="button secondary compact-button" type="button" data-demo="Historia ruchów ${p.id} została otwarta">Historia ruchów</button></div></article>`; }).join("")}</section></div>`;
}

function audytWidok() {
  const wpisy = [
    ["09:42:18", "Anna Demo", "Zmieniono ceny zbiorczo", "25 komórek · Booking.com", "Zapisano"],
    ["09:36:04", "AI koordynator", "Utworzono propozycję", "REV-04 · APT-032", "Czeka na decyzję"],
    ["09:17:51", "Slack / Kinga Zielińska", "Dodano zdjęcia po sprzątaniu", "APT-009 · 5 plików", "Zweryfikowano"],
    ["08:32:12", "Channex", "Pobrano rezerwacje", "36 apartamentów · req_chx_0907_0832", "SYNCED"],
    ["08:27:46", "System", "Opublikowano dostępność", "Mokotów Residence · 180 dni", "SYNCED"],
    ["08:20:09", "IdoBooking", "Sprawdzono połączenie", "Brak danych uwierzytelniających", "AUTH_REQUIRED"],
  ];
  return `<div class="page-stack">${naglowek("Pełna rozliczalność", "Audyt i bezpieczeństwo", "Każda zmiana ceny, rezerwacji, płatności, statusu zadania i synchronizacji ma autora, czas oraz identyfikator.", "Dziennik tylko do odczytu")}<section class="metric-grid">${kafel("1 284", "Zdarzenia dzisiaj", "Wszystkie moduły", "sage")}${kafel("0", "Nieautoryzowane zmiany", "Kontrola ról aktywna", "blue")}${kafel("4", "Eksporty danych", "Zgodne z uprawnieniami", "sand")}${kafel("180 dni", "Retencja online", "Archiwum dostępne na żądanie", "ink")}</section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Ostatnia aktywność</span><h2>Niezmienny dziennik zdarzeń</h2></div><div class="button-row"><button class="button secondary compact-button" type="button" data-demo="Filtry audytu zostały otwarte">Filtry</button><button class="button compact-button" type="button" data-demo="Eksport audytu CSV został przygotowany">Eksportuj CSV</button></div></div><div class="audit-table">${wpisy.map((w, i) => `<article class="audit-row"><span class="audit-time"><strong>${w[0]}</strong><small>8 wrz 2026</small></span><span class="record-copy"><strong>${w[2]}</strong><small>${w[1]}</small></span><span class="record-copy"><strong>${w[3]}</strong><small>evt_${String(8401 - i).padStart(6, "0")}</small></span><span class="status ${w[4].includes("AUTH") ? "danger" : w[4].includes("Czeka") ? "warning" : ""}">${w[4]}</span><button class="button secondary compact-button" type="button" data-demo="Szczegóły zdarzenia evt_${String(8401 - i).padStart(6, "0")} zostały otwarte">Szczegóły</button></article>`).join("")}</div></section><div class="notice warning"><span><strong>Bezpieczeństwo produkcyjne.</strong> Role, MFA, zasada najmniejszych uprawnień i rotacja kluczy powinny być egzekwowane po stronie serwera.</span><button class="button secondary" type="button" data-demo="Macierz ról została otwarta">Macierz uprawnień</button></div></div>`;
}

function aiKoordynator() {
  const lista = rekomendacjeAI.filter((r) => stan.aiFiltr === "wszystkie" || r.status === "Otwarte");
  return `<div class="page-stack ai-page">${naglowek("Asystent decyzyjny", "AI koordynator operacyjny", "Analizuje rezerwacje, wiadomości, synchronizację, ceny i pracę zespołu. Każda akcja wymaga zatwierdzenia i trafia do audytu.", `${rekomendacjeAI.filter((r) => r.status === "Otwarte").length} propozycje do decyzji`)}<section class="ai-hero panel"><div><span class="ai-mark">✦</span><span><span class="eyebrow">Poranny briefing</span><h2>Najważniejsze sprawy są gotowe do zatwierdzenia</h2><p>Największe ryzyko: nieprzypisane sprzątania i jedna rozbieżność dostępności w kanale.</p></span></div><div class="button-row"><button class="button ${stan.aiFiltr === "otwarte" ? "is-active" : "secondary"}" type="button" data-ai-filter="otwarte">Otwarte</button><button class="button ${stan.aiFiltr === "wszystkie" ? "is-active" : "secondary"}" type="button" data-ai-filter="wszystkie">Wszystkie</button></div></section><section class="ai-recommendations">${lista.map((r) => `<article class="panel ai-card ${r.status === "Wykonano" ? "is-done" : ""}"><div class="ai-card-top"><span class="status">${r.kategoria}</span><small>${r.id}</small></div><h2>${r.tytul}</h2><p>${r.opis}</p><div class="ai-explanation"><strong>Dlaczego to widzisz?</strong><span>Rekomendacja powstała z danych demonstracyjnych widocznych w systemie. Nic nie zostanie wysłane bez zatwierdzenia.</span></div><div class="button-row">${r.status === "Otwarte" ? `<button class="button" type="button" data-ai-action="${r.id}">${r.akcja}</button><button class="button secondary" type="button" data-ai-dismiss="${r.id}">Odrzuć</button>` : `<span class="status">${r.status}</span>`}<button class="button secondary" type="button" data-go="${r.widok}">Pokaż dane źródłowe</button></div></article>`).join("") || `<div class="empty panel">Brak otwartych rekomendacji.</div>`}</section></div>`;
}

function automatyzacje() {
  const aktywne = regulyAutomatyzacji.filter((r) => r.aktywna).length;
  return `<div class="page-stack">${naglowek("Procesy bez pracy ręcznej", "Automatyzacje", "Reguły łączą zdarzenia rezerwacyjne, płatności, wiadomości, sprzątanie i dostęp do lokalu.", `${aktywne}/${regulyAutomatyzacji.length} reguły aktywne`)}<section class="metric-grid">${kafel(String(aktywne), "Aktywne reguły", "Monitorowane przez system", "sage")}${kafel("201", "Wykonania w miesiącu", "Bez błędów krytycznych", "blue")}${kafel("31 h", "Oszczędzony czas", "Szacunek operacyjny", "sand")}${kafel("99,5%", "Skuteczność", "1 wykonanie do sprawdzenia", "ink")}</section><section class="automation-flow panel"><div class="panel-header"><div><span class="eyebrow">Edytor reguł</span><h2>Aktywne przepływy</h2></div><button class="button" type="button" data-demo="Kreator nowej reguły został otwarty">Nowa automatyzacja</button></div><div class="automation-list">${regulyAutomatyzacji.map((r) => `<article class="automation-row"><label class="toggle-row"><input type="checkbox" data-automation-id="${r.id}" ${r.aktywna ? "checked" : ""}><span><strong>${r.nazwa}</strong><small>${r.id} · ${r.wykonania} wykonań</small></span></label><span class="automation-node"><small>JEŻELI</small><strong>${r.wyzwalacz}</strong></span><span class="automation-arrow">→</span><span class="automation-node"><small>WTEDY</small><strong>${r.rezultat}</strong></span><span class="status ${r.aktywna ? "" : "warning"}">${r.aktywna ? "Aktywna" : "Wyłączona"}</span></article>`).join("")}</div></section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Historia</span><h2>Ostatnie wykonania</h2></div><span class="status">Audyt włączony</span></div>${rekordy([["Instrukcja zameldowania", "Dostarczono", "BKG-721041 · 2 min temu"], ["Zadanie sprzątania", "Utworzono", "APT-009 · 7 min temu"], ["Przypomnienie o płatności", "Wysłano", "AIR-721088 · 18 min temu"], ["Kontrola zdjęć", "Do weryfikacji", "QA-301 · 24 min temu"]])}</section></div>`;
}

function slackIntegracje() {
  const przetworzone = zdarzeniaSlack.filter((z) => z.status === "Przetworzono").length;
  return `<div class="page-stack">${naglowek("Automatyzacje operacyjne", "Integracja ze Slackiem", "Zdjęcia dodane przez ekipę sprzątającą mogą automatycznie potwierdzić gotowość apartamentu.", "Kanał #sprzatanie-gotowe")}<section class="metric-grid">${kafel("Aktywna", "Automatyzacja demo", "Nasłuchiwanie nowych zdjęć", "sage")}${kafel("36 / 36", "Mapowanie lokali", "Kod APT przypisany do lokalu", "blue")}${kafel(`${stan.slackMinimalnaLiczbaZdjec} zdjęcia`, "Warunek zakończenia", "Minimalna liczba załączników", "sand")}${kafel(String(przetworzone), "Przetworzone dzisiaj", "Bez błędów mapowania", "ink")}</section><section class="slack-grid"><article class="panel slack-connection"><div class="panel-header"><div class="slack-title"><span class="slack-logo">#</span><div><span class="eyebrow">Slack</span><h2>#sprzatanie-gotowe</h2></div></div><span class="status">Połączenie demo aktywne</span></div><div class="slack-settings"><label class="toggle-row"><input id="slack-auto-status" type="checkbox" ${stan.slackAutoStatus ? "checked" : ""}><span><strong>Automatycznie ustawiaj „Posprzątane · gotowe”</strong><small>Po spełnieniu warunku zdjęciowego system zamyka checklistę sprzątania.</small></span></label><label class="field"><span>Minimalna liczba zdjęć</span><select id="slack-photo-min"><option value="2" ${stan.slackMinimalnaLiczbaZdjec === 2 ? "selected" : ""}>2 zdjęcia</option><option value="3" ${stan.slackMinimalnaLiczbaZdjec === 3 ? "selected" : ""}>3 zdjęcia</option><option value="4" ${stan.slackMinimalnaLiczbaZdjec === 4 ? "selected" : ""}>4 zdjęcia</option><option value="5" ${stan.slackMinimalnaLiczbaZdjec === 5 ? "selected" : ""}>5 zdjęć</option></select></label><div class="mapping-card"><span><strong>Rozpoznawanie apartamentu</strong><small>Wiadomość powinna zawierać kod, np. <b>[APT-001]</b>. System dopasuje kod do jednego z 36 lokali.</small></span><span class="status">36 mapowań</span></div><div class="button-row"><button class="button" type="button" data-test-slack>Symuluj nowe zdjęcia</button><button class="button secondary" type="button" data-demo="Otworzono konfigurację kanału Slack w trybie demonstracyjnym">Zmień kanał</button></div></div></article><article class="panel"><div class="panel-header"><div><span class="eyebrow">Reguła automatyzacji</span><h2>Jak działa przepływ</h2></div><span class="status">Włączona</span></div><ol class="automation-flow"><li><span>1</span><div><strong>Slack odbiera wiadomość</strong><small>Kod apartamentu i załączone zdjęcia.</small></div></li><li><span>2</span><div><strong>System sprawdza warunki</strong><small>Minimum ${stan.slackMinimalnaLiczbaZdjec} zdjęcia oraz aktywne zadanie.</small></div></li><li><span>3</span><div><strong>Checklista kończy się automatycznie</strong><small>Status zmienia się na „Posprzątane · gotowe”.</small></div></li><li><span>4</span><div><strong>Operator otrzymuje potwierdzenie</strong><small>Zdarzenie trafia do historii operacyjnej.</small></div></li></ol></article></section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Ostatnie wiadomości ze zdjęciami</span><h2>Dziennik automatyzacji</h2></div><button class="button secondary" type="button" data-test-slack>Dodaj zdarzenie testowe</button></div><div class="slack-events">${zdarzeniaSlack.map((z) => { const a = apartamentPoId(z.apartamentId); return `<article class="slack-event"><span class="event-photo">▦<b>${z.zdjecia}</b></span><span class="record-copy"><strong>${a.id} · ${a.nazwa}</strong><small>${z.autor} · ${z.czas} · ${z.zdjecia} zdjęcia</small></span><span class="status ${z.status === "Przetworzono" ? "" : "warning"}">${z.status}</span></article>`; }).join("")}</div></section><div class="notice warning"><span><strong>To jest działająca symulacja przepływu.</strong> Prawdziwe odbieranie plików wymaga podłączenia aplikacji Slack do kanału zespołu i nadania jej dostępu do wiadomości oraz zdjęć.</span><button class="button secondary" type="button" data-demo="Przygotowano listę uprawnień wymaganych przez aplikację Slack">Wymagane uprawnienia</button></div></div>`;
}

function kartaIntegracji(nazwa, opis, status, ton, szczegoly, akcja) {
  return "<article class='integration-card'><div class='integration-card__top'><span class='integration-logo'>" + nazwa.slice(0, 2).toUpperCase() + "</span><span class='record-copy'><strong>" + nazwa + "</strong><small>" + opis + "</small></span><span class='status " + ton + "'>" + status + "</span></div><div class='integration-facts'>" + szczegoly.map((wiersz) => "<span><small>" + wiersz[0] + "</small><strong>" + wiersz[1] + "</strong></span>").join("") + "</div><div class='button-row'>" + akcja + "</div></article>";
}

function integracje() {
  if (stan.integrationTab === "slack") {
    return slackIntegracje().replace("<div class=\"page-stack\">", "<div class='page-stack'><div><button class='button secondary' type='button' data-integration-center>← Wróć do Centrum integracji</button></div>");
  }

  const channexStatus = stan.syncingProvider === "Channex" ? "SYNCING" : "CONNECTED (DEMO)";
  const channexTone = stan.syncingProvider === "Channex" ? "warning" : "";
  const karty = [
    kartaIntegracji("IdoBooking", "Główny upstream PMS · API administracyjne v36", "AUTH_REQUIRED", "danger", [["Ostatnia synchronizacja", "Brak"], ["Następna synchronizacja", "Po autoryzacji"], ["Obiekty", "0"], ["Oczekujące", "0"], ["Ostatni błąd", "Brak danych sandbox"]], "<button class='button' type='button' data-open-idobooking>Konfiguracja i możliwości API</button>"),
    kartaIntegracji("Channex", "Zachowany gateway rezerwacji, dostępności i wiadomości", channexStatus, channexTone, [["Ostatnia synchronizacja", "Dzisiaj, 08:32"], ["Następna synchronizacja", "Dzisiaj, 08:47"], ["Obiekty", "36"], ["Oczekujące", stan.syncingProvider ? "2" : "1"], ["Ostatni błąd", "Brak"]], "<button class='button' type='button' data-sync-provider='Channex'" + (stan.syncingProvider ? " disabled" : "") + ">" + (stan.syncingProvider ? "Synchronizuję…" : "Synchronizuj teraz (demo)") + "</button><button class='button secondary' type='button' data-demo='Otwarto mapowanie 36 apartamentów Channex'>Mapowanie obiektów</button>"),
    kartaIntegracji("Slack", "Zdjęcia sprzątania i automatyczna gotowość lokalu", "CONNECTED (DEMO)", "", [["Kanał", "#sprzatanie-gotowe"], ["Mapowania", "36"], ["Reguła", stan.slackMinimalnaLiczbaZdjec + " zdjęcia"], ["Oczekujące", "0"], ["Ostatni błąd", "Brak"]], "<button class='button' type='button' data-integration-slack>Otwórz ustawienia Slack</button>"),
    kartaIntegracji("Booking.com", "Planowany adapter bezpośredni; obecnie routing przez PMS", "DISCONNECTED", "", [["Tryb", "Przez upstream"], ["Obiekty", "0"], ["Oczekujące", "0"], ["API", "Wymaga partnerstwa"], ["Ostatni błąd", "Brak konfiguracji"]], "<button class='button secondary' type='button' data-demo='Booking.com pozostaje planowanym adapterem; demo nie udaje aktywnego połączenia'>Zobacz status</button>"),
    kartaIntegracji("Airbnb", "Planowany adapter bezpośredni; obecnie routing przez PMS", "DISCONNECTED", "", [["Tryb", "Przez upstream"], ["Obiekty", "0"], ["Oczekujące", "0"], ["API", "Wymaga partnerstwa"], ["Ostatni błąd", "Brak konfiguracji"]], "<button class='button secondary' type='button' data-demo='Airbnb pozostaje planowanym adapterem; demo nie udaje aktywnego połączenia'>Zobacz status</button>"),
    kartaIntegracji("Expedia", "Planowany adapter bezpośredni; obecnie routing przez PMS", "DISCONNECTED", "", [["Tryb", "Przez upstream"], ["Obiekty", "0"], ["Oczekujące", "0"], ["API", "Wymaga partnerstwa"], ["Ostatni błąd", "Brak konfiguracji"]], "<button class='button secondary' type='button' data-demo='Expedia pozostaje planowanym adapterem; demo nie udaje aktywnego połączenia'>Zobacz status</button>"),
    kartaIntegracji("PriceLabs", "Planowane źródło rekomendacji cen", "DISCONNECTED", "", [["Źródło ceny", "PRICELABS"], ["Obiekty", "0"], ["Oczekujące", "0"], ["Tryb", "Wyłączony"], ["Ostatni błąd", "Brak konfiguracji"]], "<button class='button secondary' type='button' data-demo='Adapter PriceLabs jest zaplanowany i nie został oznaczony jako połączony'>Zobacz status</button>"),
    kartaIntegracji("TTLock", "Planowany provider kodów dostępu", "DISCONNECTED", "", [["Urządzenia", "0"], ["Aktywne kody", "0"], ["Oczekujące", "0"], ["Tryb", "Wyłączony"], ["Ostatni błąd", "Brak konfiguracji"]], "<button class='button secondary' type='button' data-demo='TTLock wymaga prawdziwych danych API i urządzenia testowego'>Zobacz status</button>"),
    kartaIntegracji("Stripe", "Planowany provider płatności", "DISCONNECTED", "", [["Konto", "Niepołączone"], ["Waluta", "PLN"], ["Oczekujące", "0"], ["Tryb", "Wyłączony"], ["Ostatni błąd", "Brak konfiguracji"]], "<button class='button secondary' type='button' data-demo='Stripe wymaga bezpiecznej konfiguracji serwerowej'>Zobacz status</button>"),
  ].join("");

  const log = zdarzeniaSynchronizacji.map((z) => "<article class='sync-row'><span class='record-copy'><strong>" + z.provider + " · " + z.operacja + "</strong><small>" + z.obiekt + " · " + z.czas + " · próba " + z.proba + "</small><small class='sync-request'>" + z.requestId + "</small></span><span class='status " + (z.status === "AUTH_REQUIRED" ? "danger" : z.status === "SYNCING" ? "warning" : "") + "'>" + z.status + "</span></article>").join("");

  return "<div class='page-stack'>" + naglowek("Providerzy i synchronizacja", "Centrum integracji", "Kontroluj stan połączeń, mapowanie obiektów, kolejkę ponowień i historię uzgadniania danych.", "P0 · niezawodność kanałów") + "<section class='metric-grid'>" + kafel("2", "Adaptery w architekturze", "IdoBooking i Channex", "sage") + kafel("36", "Obiekty demonstracyjne", "6 portfeli", "blue") + kafel("1", "Rozbieżność", "Dostępność do uzgodnienia", "sand") + kafel(String(zdarzeniaSynchronizacji.length), "Zdarzenia synchronizacji", "Jawny dziennik demo", "ink") + "</section><div class='notice warning'><span><strong>Brak fałszywego połączenia.</strong> IdoBooking pozostaje AUTH_REQUIRED do czasu prawdziwego testu konta sandbox. Statusy DEMO są wyłącznie prezentacją zachowania systemu.</span><button class='button secondary' type='button' data-open-idobooking>Sprawdź zakres API</button></div><section class='reliability-grid'><article class='panel reliability-card'><span class='health-dot'></span><div><span class='eyebrow'>Ochrona overbookingu</span><h2>Kontrola dostępności</h2><p>Porównuje stan centralny z każdym kanałem i blokuje publikację podejrzanej zmiany.</p></div><button class='button compact-button' type='button' data-sync-provider='Channex'>Uzgodnij 36 lokali</button></article><article class='panel reliability-card'><span class='health-dot'></span><div><span class='eyebrow'>Kolejka ponowień</span><h2>Automatyczne odzyskiwanie</h2><p>Nieudane operacje trafiają do kolejki z idempotentnym kluczem i pełnym audytem prób.</p></div><button class='button secondary compact-button' type='button' data-demo='Kolejka ponowień jest pusta'>Sprawdź kolejkę</button></article><article class='panel reliability-card'><span class='health-dot'></span><div><span class='eyebrow'>API i webhooki</span><h2>Zdarzenia w czasie zbliżonym do rzeczywistego</h2><p>Rezerwacje, wiadomości, płatności i zadania mają wspólny dziennik zdarzeń.</p></div><button class='button secondary compact-button' type='button' data-demo='Dokumentacja webhooków została otwarta w trybie demo'>Dokumentacja API</button></article></section><section class='integration-grid'>" + karty + "</section><section class='panel'><div class='panel-header'><div><span class='eyebrow'>Sync log</span><h2>Dziennik synchronizacji</h2></div><button class='button secondary' type='button' data-sync-provider='Channex'" + (stan.syncingProvider ? " disabled" : "") + ">Synchronizuj teraz</button></div><div class='sync-list'>" + log + "</div></section></div>";
}

function otworzIdoBooking() {
  const layer = document.createElement("div");
  layer.id = "drawer-layer";
  layer.className = "drawer-layer";
  layer.innerHTML = "<button class='drawer-backdrop' type='button' aria-label='Zamknij panel'></button><aside class='drawer' role='dialog' aria-modal='true' aria-labelledby='ido-title'><header class='drawer-header'><div><span class='eyebrow'>Upstream PMS · API v36</span><h2 id='ido-title'>IdoBooking</h2><span class='status danger'>AUTH_REQUIRED</span></div><button class='drawer-close' type='button' aria-label='Zamknij panel'>×</button></header><div class='drawer-body'><div class='drawer-section'><div class='notice warning'><span><strong>Połączenie nie jest aktywne.</strong> Wersja produkcyjna wymaga domeny panelu, loginu systemowego i hasła zapisanych wyłącznie po stronie serwera.</span></div><div class='drawer-card'><span class='eyebrow'>Konfiguracja serwerowa</span><strong>IDOBOOKING_API_BASE_URL</strong><strong>IDOBOOKING_SYSTEM_LOGIN</strong><strong>IDOBOOKING_SYSTEM_PASSWORD</strong><p>Hasło i dzienny klucz autoryzacyjny nigdy nie trafiają do przeglądarki ani dziennika synchronizacji.</p></div><div class='capability-list'><article><span><strong>Obiekty i jednostki</strong><small>Objects.getAll</small></span><span class='status'>IMPLEMENTED</span></article><article><span><strong>Rezerwacje — odczyt</strong><small>Reservations.get</small></span><span class='status'>IMPLEMENTED</span></article><article><span><strong>Ceny i restrykcje</strong><small>API potwierdzone, zapis wymaga testu sandbox</small></span><span class='status warning'>BLOCKED TEST</span></article><article><span><strong>Anulowanie</strong><small>Skutki Reservations.editStatus wymagają potwierdzenia</small></span><span class='status warning'>UNKNOWN</span></article><article><span><strong>Wiadomości i webhooki</strong><small>Brak potwierdzonego kontraktu w analizowanej dokumentacji</small></span><span class='status warning'>UNKNOWN</span></article></div><button class='button secondary' type='button' data-demo='Test połączenia jest zablokowany do czasu dodania prawdziwych danych sandbox'>Testuj połączenie</button></div></div></aside>";
  document.body.append(layer);
  document.body.classList.add("drawer-open");
  layer.querySelector(".drawer-backdrop").addEventListener("click", zamknijPanel);
  layer.querySelector(".drawer-close").addEventListener("click", zamknijPanel);
  layer.querySelector("[data-demo]").addEventListener("click", (event) => pokazKomunikat(event.currentTarget.dataset.demo));
}

function uruchomSynchronizacje(provider) {
  if (stan.syncingProvider) return;
  stan.syncingProvider = provider;
  const event = { provider, operacja: "MANUAL_RECONCILIATION", obiekt: "36 apartamentów", czas: "Teraz", requestId: "req_demo_" + Date.now(), status: "SYNCING", proba: 1 };
  zdarzeniaSynchronizacji.unshift(event);
  pokazWidok("integracje", false, false);
  pokazKomunikat("Synchronizacja demonstracyjna została uruchomiona");
  setTimeout(() => {
    event.status = "SYNCED";
    event.czas = "Przed chwilą";
    stan.syncingProvider = null;
    if (stan.widok === "integracje" && stan.integrationTab === "centrum") pokazWidok("integracje", false, false);
    pokazKomunikat("Synchronizacja demonstracyjna zakończona");
  }, 900);
}

function symulujZdarzenieSlack() {
  const zadanie = zadaniaSprzatania.find((z) => z.osoba === stan.wybranaSprzatajaca && !czySprzatanieGotowe(z)) || zadaniaSprzatania.find((z) => !czySprzatanieGotowe(z));
  if (!zadanie) { pokazKomunikat("Wszystkie zadania są już gotowe"); return; }
  const zdjecia = Math.max(stan.slackMinimalnaLiczbaZdjec, 3);
  const wydarzenie = { id: `SLK-${9022 + zdarzeniaSlack.length}`, czas: "Teraz", autor: zadanie.osoba, apartamentId: zadanie.apartamentId, zdjecia, status: stan.slackAutoStatus ? "Przetworzono" : "Oczekuje na akceptację" };
  zdarzeniaSlack.unshift(wydarzenie);
  if (stan.slackAutoStatus) {
    zadanie.checklista.forEach((punkt) => { punkt.gotowe = true; });
    zadanie.status = "Posprzątane · gotowe";
    zadanie.weryfikacjaSlack = { kanal: "#sprzatanie-gotowe", zdjecia, czas: "Teraz", zdarzenieId: wydarzenie.id };
  }
  pokazWidok(stan.widok, false, false);
  pokazKomunikat(stan.slackAutoStatus ? `${zdjecia} zdjęcia odebrane — status apartamentu zmieniono na Posprzątane · gotowe` : `${zdjecia} zdjęcia odebrane — oczekują na ręczną akceptację`);
}

function przypiszSprzatanie(id, imieNazwisko) {
  const zadanie = zadaniaSprzatania.find((z) => z.id === id);
  const osoba = zespolSprzatajacy.find((element) => element.imieNazwisko === imieNazwisko);
  if (!zadanie || !osoba) return;
  if (pobierzDyspozycje(osoba.imieNazwisko, zadanie.dataSprzatania) !== "Dostępna") { pokazKomunikat(`${osoba.imieNazwisko} nie jest dostępna tego dnia`); return; }
  zadanie.osoba = osoba.imieNazwisko;
  zadanie.status = czySprzatanieGotowe(zadanie) ? zadanie.status : "Zaplanowane";
  stan.wybranaOsobaDoPrzydzialu = osoba.imieNazwisko;
  pokazWidok("sprzatanie", false, false);
  pokazKomunikat(`${apartamentPoId(zadanie.apartamentId).nazwa} przypisano: ${osoba.imieNazwisko}`);
}

function ustawDyspozycje(imieNazwisko, data, status) {
  dyspozycyjnoscSprzatania.set(`${imieNazwisko}|${data}`, status);
  let zwolnione = 0;
  if (status !== "Dostępna") {
    zadaniaSprzatania.filter((z) => z.dataSprzatania === data && z.osoba === imieNazwisko).forEach((z) => { z.osoba = "Nieprzypisane"; z.status = "Wymaga przypisania"; zwolnione += 1; });
  }
  pokazWidok("panel_sprzatajacej", false, false);
  pokazKomunikat(`${polskaData(data)}: ${status}${zwolnione ? ` · ${zwolnione} ${odmien(zwolnione, "zadanie wróciło", "zadania wróciły", "zadań wróciło")} do administratora` : ""}`);
}

function rozlozZadaniaDnia(data) {
  const dostepni = dostepniWData(data);
  const zadania = zadaniaSprzatania.filter((z) => z.dataSprzatania === data && !czySprzatanieGotowe(z));
  if (!dostepni.length) return 0;
  const obciazenie = new Map(dostepni.map((osoba) => [osoba.imieNazwisko, 0]));
  zadania.forEach((zadanie) => {
    const apartament = apartamentPoId(zadanie.apartamentId);
    const dzielnica = apartament.miasto.split(" · ").at(-1);
    const pasujacy = dostepni.filter((osoba) => osoba.strefa.includes(dzielnica));
    const kandydaci = pasujacy.length ? pasujacy : dostepni;
    kandydaci.sort((a, b) => obciazenie.get(a.imieNazwisko) - obciazenie.get(b.imieNazwisko));
    zadanie.osoba = kandydaci[0].imieNazwisko;
    zadanie.status = "Zaplanowane";
    obciazenie.set(kandydaci[0].imieNazwisko, obciazenie.get(kandydaci[0].imieNazwisko) + 1);
  });
  return zadania.length;
}

function automatycznieRozdzielSprzatanie() {
  const liczba = rozlozZadaniaDnia(stan.dataPlanuSprzatania);
  pokazWidok("sprzatanie", false, false);
  pokazKomunikat(liczba ? `Rozdzielono ${liczba} ${odmien(liczba, "zadanie", "zadania", "zadań")} według stref i obciążenia` : "Brak dostępnych osób lub zadań do rozdzielenia");
}

function zastosujRekomendacjeRevenue(id, odswiez = true) {
  const rekomendacja = rekomendacjeRevenue.find((r) => r.id === id);
  if (!rekomendacja || rekomendacja.status === "Zastosowana") return false;
  let data = rekomendacja.od;
  while (data <= rekomendacja.do) {
    kanaly.forEach((kanal) => { const key = kluczCeny(rekomendacja.apartamentId, data, kanal); nadpisaneCeny.set(key, Math.max(100, Math.round(pobierzCene(rekomendacja.apartamentId, data, kanal) * (1 + rekomendacja.zmiana / 100)))); });
    if (rekomendacja.id === "REV-04") kanaly.forEach((kanal) => nadpisaneRestrykcje.set(kluczCeny(rekomendacja.apartamentId, data, kanal), { minNocy: 1, zamkniete: false, bezPrzyjazdu: false }));
    data = dodajDni(data, 1);
  }
  rekomendacja.status = "Zastosowana";
  if (odswiez) { pokazWidok("revenue", false, false); pokazKomunikat(`Rekomendacja ${id} została zastosowana we wszystkich kanałach`); }
  return true;
}

function wykonajRekomendacjeAI(id) {
  const rekomendacja = rekomendacjeAI.find((r) => r.id === id);
  if (!rekomendacja || rekomendacja.status !== "Otwarte") return;
  if (id === "AI-01") rozlozZadaniaDnia("2026-09-09");
  if (id === "AI-02") { const zadanie = zadaniaSprzatania.find((z) => z.apartamentId === "APT-001"); if (zadanie) zadanie.uwagaAdmin = "Proszę dokładnie umyć okna — gość zgłosił zabrudzenia."; }
  if (id === "AI-03") zastosujRekomendacjeRevenue("REV-04", false);
  if (id === "AI-04") zdarzeniaSynchronizacji.unshift({ provider: "Channex", operacja: "AI_RECONCILIATION", obiekt: "36 apartamentów", czas: "Przed chwilą", requestId: `req_ai_${Date.now()}`, status: "SYNCED", proba: 1 });
  rekomendacja.status = "Wykonano";
  pokazWidok("ai_koordynator", false, false);
  pokazKomunikat(`AI wykonało zatwierdzoną akcję: ${rekomendacja.akcja}`);
}

function apartamentyWidok() {
  return `<div class="page-stack">${naglowek("Konfiguracja portfela", "36 apartamentów", "Kompletne dane lokali. Kliknij lokal, aby otworzyć kartę.", "36 aktywnych")}<section class="metric-grid">${kafel("36", "Aktywne apartamenty", "6 portfeli po 6 lokali", "sage")}${kafel("6", "Właściciele", "Oddzielne organizacje", "blue")}${kafel("34", "Gotowe operacyjnie", "Bez blokad", "sand")}${kafel("78,6%", "Średnie obłożenie", "Dane demo", "ink")}</section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Zarządzane lokale</span><h2>Pełna lista 36 apartamentów</h2></div><span class="status" id="apartment-count">36 wyników</span></div><div class="filters apartment-filters"><label class="field grow"><span>Szukaj</span><input id="apartment-search" type="search" placeholder="Nazwa, kod, miasto lub właściciel"></label><label class="field"><span>Właściciel</span><select id="owner-filter"><option value="">Wszyscy właściciele</option>${portfele.map((p) => `<option value="${p.wlasciciel}">${p.wlasciciel}</option>`).join("")}</select></label><button class="button secondary" id="clear-apartment-filters">Wyczyść</button></div><div class="record-list">${apartamenty.map((a) => `<button class="record-row record-button apartment-row" type="button" data-apartment-id="${a.id}" data-apartment-search="${bezpiecznyTekst(`${a.id} ${a.nazwa} ${a.miasto} ${a.wlasciciel}`.toLocaleLowerCase("pl"))}" data-owner="${a.wlasciciel}"><span class="record-copy"><strong>${a.id} · ${a.nazwa}</strong><small>${a.miasto} · ${a.wlasciciel}</small></span><span class="record-meta"><strong>${a.status}</strong><small>Obłożenie ${a.oblozenie}%</small></span></button>`).join("")}</div></section></div>`;
}

function prostyWidok(id) {
  const dane = {
    wlasciciele: ["Relacje właścicielskie", "Właściciele", "6 organizacji klientów", [["6", "Aktywni właściciele", "Oddzielne organizacje"], ["36", "Apartamenty", "Po 6 w portfelu"], ["8", "Konta", "Dostęp do własnych danych"], ["0", "Konflikty", "Izolacja danych"]]],
    raporty: ["Raportowanie właścicielskie", "Raport portfela", "Wrzesień–grudzień 2026", [["1,73 mln PLN", "Przychód", "Dane demonstracyjne"], ["78,6%", "Obłożenie", "Cały portfel"], ["505 PLN", "ADR", "Na zajętą noc"], ["397 PLN", "RevPAR", "Na dostępną noc"]]],
    integracje: ["Połączenia kanałowe", "Integracje Channex", "36 mapowanych apartamentów", [["35", "Kompletne mapowania", "Gotowe"], ["1", "Wymaga uwagi", "Brak planu cenowego"], ["36", "Apartamenty", "6 portfeli"], ["Tylko serwer", "Dane dostępowe", "Chronione"]]],
    operacje: ["Centrum operacyjne", "Kolejki i odzyskiwanie", "6 połączeń w zakresie", [["4", "Aktywne procesy", "W toku"], ["1", "Błędne zadanie", "Do ponowienia"], ["1", "Niezmapowane", "Wymaga uwagi"], ["6", "Połączeń", "Rozdzielone"]]],
    audyt: ["Rejestr odpowiedzialności", "Historia audytowa", "Najnowsze zmiany", [["250", "Wpisów", "Limit widoku"], ["18", "Dzisiaj", "Działania zespołu"], ["0", "Braki", "Pełny rejestr"], ["RLS", "Ochrona", "Role użytkowników"]]],
    zespol: ["Zarządzanie dostępem", "Zespół", "8 aktywnych osób", [["8", "Osób", "Aktywne konta"], ["5", "Ról", "Jawne uprawnienia"], ["4", "Operacje", "Dzisiaj"], ["0", "Blokady", "Dostęp poprawny"]]],
  }[id];
  const listy = {
    wlasciciele: portfele.map((p) => [p.wlasciciel, "6 apartamentów", `${p.nazwa} · ${p.miasto}`]),
    raporty: [["Booking.com", "42%", "Udział kanału"], ["Airbnb", "27%", "Udział kanału"], ["Expedia", "18%", "Udział kanału"], ["Bezpośrednia", "13%", "Udział kanału"]],
    integracje: portfele.map((p, i) => [p.nazwa, i === 2 ? "Wymaga uwagi" : "Połączenie prawidłowe", i === 2 ? "5/6 lokali" : "6/6 lokali"]),
    operacje: portfele.map((p) => [p.nazwa, "Połączono", "Ostatnia synchronizacja 5 minut temu"]),
    audyt: [["Eskalacja rozmowy", "13:02", "Anna Demo · Wiadomości"], ["Udostępnienie usterki", "12:44", "Anna Demo · Usterki"], ["Utworzenie blokady", "11:18", "Klient Horyzont · Kalendarz"], ["Zakończenie sprzątania", "10:55", "Marta · Sprzątanie"]],
    zespol: [["Anna Demo", "Superadministrator", "Pełny dostęp"], ["Ola Operacje", "Kierownik", "Operacje i integracje"], ["Robert Recepcja", "Recepcja", "Rezerwacje i wiadomości"], ["Marta", "Sprzątanie", "Przypisane zadania"], ["Klient Horyzont", "Właściciel", "6 apartamentów"]],
  }[id];
  return `<div class="page-stack">${naglowek(dane[0], dane[1], "Spójny, polski widok demonstracyjny danych operacyjnych.", dane[2])}<section class="metric-grid">${dane[3].map((k, i) => kafel(k[0], k[1], k[2], ["sage", "blue", "sand", "ink"][i])).join("")}</section><section class="panel"><div class="panel-header"><div><span class="eyebrow">Aktualny stan</span><h2>${dane[1]}</h2></div><button class="button secondary" data-demo="Widok został odświeżony">Odśwież</button></div>${rekordy(listy)}</section></div>`;
}

const widoki = { pulpit, kalendarz, ceny, revenue, sprzedaz, rezerwacje, wiadomosci, koordynatorzy: koordynatorzyWidok, sprzatanie, panel_sprzatajacej: panelSprzatajacej, jakosc, magazyn, usterki, zlota_raczka: zlotaRaczka, zespol: zespolWidok, finanse, wlasciciele: wlascicieleWidok, raporty: raportyWidok, ai_koordynator: aiKoordynator, automatyzacje, integracje, operacje: () => prostyWidok("operacje"), audyt: audytWidok, apartamenty: apartamentyWidok };
const navDesktop = document.querySelector("#desktop-nav");
const navMobile = document.querySelector("#mobile-nav");
const main = document.querySelector("#main");
const toast = document.querySelector("#toast");
let toastTimer;
const kodNawigacji = () => { let grupa = ""; return nawigacja.map(([id, ikona, etykieta, nowaGrupa]) => { const separator = grupa !== nowaGrupa ? `<span class="nav-group">${nowaGrupa}</span>` : ""; grupa = nowaGrupa; return `${separator}<button class="nav-link" type="button" data-view="${id}"><span class="nav-icon" aria-hidden="true">${ikona}</span><span>${etykieta}</span></button>`; }).join(""); };
navDesktop.innerHTML = kodNawigacji(); navMobile.innerHTML = kodNawigacji();

function pokazKomunikat(tresc) {
  clearTimeout(toastTimer); toast.textContent = `Demo: ${tresc}.`; toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3400);
}

function zamknijPanel() {
  document.querySelector("#drawer-layer")?.remove(); stan.wybranaRezerwacja = null; document.body.classList.remove("drawer-open");
}

function trescPaneluRezerwacji(r) {
  const a = apartamentPoId(r.apartamentId);
  if (stan.zakladkaPanelu === "komunikacja") return `<div class="drawer-section"><div class="messages drawer-messages">${r.wiadomosci.map((m) => `<div class="message ${m.typ === "gosc" ? "guest" : "team"}"><strong>${bezpiecznyTekst(m.autor)}</strong><span>${bezpiecznyTekst(m.tekst)}</span><small>${m.czas}</small></div>`).join("")}<div class="message note">Notatka · ${bezpiecznyTekst(r.notatka)}</div></div><form class="composer drawer-composer" id="drawer-reply-form"><textarea id="drawer-reply-input" maxlength="500" placeholder="Napisz odpowiedź demo…" aria-label="Odpowiedź dla gościa"></textarea><button class="button" type="submit">Dodaj odpowiedź</button></form></div>`;
  if (stan.zakladkaPanelu === "historia") return `<div class="timeline"><article><strong>Rezerwacja odebrana z ${r.kanal}</strong><small>${polskaData(r.przyjazd)} · zapis automatyczny</small></article><article><strong>Potwierdzenie wysłane</strong><small>Dostarczono przez ${r.kanal}</small></article><article><strong>Sprzątanie zaplanowane</strong><small>${krotkaData(r.wyjazd)} · kolejka operacyjna</small></article><article><strong>Stan zsynchronizowany</strong><small>5 minut temu · bez rozbieżności</small></article></div>`;
  return `<div class="drawer-section"><div class="detail-grid"><div><small>Apartament</small><strong>${a.nazwa}</strong><span>${a.miasto}</span></div><div><small>Termin</small><strong>${polskaData(r.przyjazd)} – ${polskaData(r.wyjazd)}</strong><span>${liczbaNocy(r.przyjazd, r.wyjazd)} noce</span></div><div><small>Goście</small><strong>${r.dorosli} dorosłych${r.dzieci ? ` · ${r.dzieci} dziecko` : ""}</strong><span>Meldunek od 15:00</span></div><div><small>Wartość</small><strong>${r.kwota.toLocaleString("pl-PL")} PLN</strong><span>Płatność opłacona</span></div></div><div class="drawer-card"><span class="eyebrow">Dane gościa</span><div class="contact-row"><span><small>Telefon</small><strong>${r.telefon}</strong></span><span><small>E-mail</small><strong>${r.email}</strong></span></div></div><div class="drawer-card"><span class="eyebrow">Zameldowanie</span><strong>${r.meldunek}</strong><p>${bezpiecznyTekst(r.notatka)}</p></div><div class="button-row"><button class="button" data-open-communication type="button">Otwórz rozmowę</button><button class="button secondary" data-demo="Instrukcja zameldowania trafiła do kolejki demo" type="button">Wyślij instrukcję</button><button class="button secondary" data-demo="Zadanie sprzątania powiązano z pobytem" type="button">Zadanie sprzątania</button></div></div>`;
}

function podlaczPanelRezerwacji() {
  const layer = document.querySelector("#drawer-layer"); if (!layer) return;
  const tlo = layer.querySelector(".drawer-backdrop"); if (tlo) tlo.onclick = zamknijPanel;
  const zamknij = layer.querySelector(".drawer-close"); if (zamknij) zamknij.onclick = zamknijPanel;
  layer.querySelectorAll("[data-drawer-tab]").forEach((b) => { b.onclick = () => { stan.zakladkaPanelu = b.dataset.drawerTab; odswiezPanelRezerwacji(); }; });
  const rozmowa = layer.querySelector("[data-open-communication]"); if (rozmowa) rozmowa.onclick = () => { stan.zakladkaPanelu = "komunikacja"; odswiezPanelRezerwacji(); };
  layer.querySelectorAll("[data-demo]").forEach((b) => { b.onclick = () => pokazKomunikat(b.dataset.demo); });
  const formularz = layer.querySelector("#drawer-reply-form"); if (formularz) formularz.onsubmit = (e) => {
    e.preventDefault(); const pole = layer.querySelector("#drawer-reply-input"); if (!pole.value.trim()) return;
    rezerwacjaPoId(stan.wybranaRezerwacja).wiadomosci.push({ typ: "zespol", autor: "Anna Demo", czas: new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" }), tekst: pole.value.trim() });
    odswiezPanelRezerwacji(); pokazKomunikat("Odpowiedź dodano do rozmowy");
  };
}

function otworzRezerwacje(id, zakladka = "szczegoly") {
  const r = rezerwacjaPoId(id); if (!r) return; zamknijPanel(); stan.wybranaRezerwacja = id; stan.zakladkaPanelu = zakladka; document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer";
  layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title"><header class="drawer-header"><div><span class="eyebrow">${r.kanal} · ${r.id}</span><h2 id="drawer-title">${r.gosc}</h2><span class="status ${r.status === "Anulowana" ? "danger" : ""}">${r.status}</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><nav class="drawer-tabs" aria-label="Sekcje rezerwacji"><button data-drawer-tab="szczegoly" type="button">Szczegóły</button><button data-drawer-tab="komunikacja" type="button">Komunikacja <span>${r.wiadomosci.length}</span></button><button data-drawer-tab="historia" type="button">Historia</button></nav><div class="drawer-body">${trescPaneluRezerwacji(r)}</div></aside>`;
  document.body.append(layer); podlaczPanelRezerwacji(); odswiezPanelRezerwacji(); layer.querySelector(".drawer-close").focus();
}

function odswiezPanelRezerwacji() {
  if (!stan.wybranaRezerwacja) return; const r = rezerwacjaPoId(stan.wybranaRezerwacja);
  const komunikacja = document.querySelector('[data-drawer-tab="komunikacja"]');
  if (komunikacja) komunikacja.innerHTML = `Komunikacja <span>${r.wiadomosci.length}</span>`;
  document.querySelectorAll("[data-drawer-tab]").forEach((b) => b.classList.toggle("is-active", b.dataset.drawerTab === stan.zakladkaPanelu));
  document.querySelector(".drawer-body").innerHTML = trescPaneluRezerwacji(r); podlaczPanelRezerwacji();
}

function widoczneKluczeCen() {
  return Array.from(main.querySelectorAll("[data-rate-key]"), (b) => b.dataset.rateKey);
}

function przelaczWybraneCeny(klucze) {
  const unikalne = [...new Set(klucze)];
  const wszystkieWybrane = unikalne.length > 0 && unikalne.every((key) => wybraneCeny.has(key));
  unikalne.forEach((key) => wszystkieWybrane ? wybraneCeny.delete(key) : wybraneCeny.add(key));
  odswiezWyborCen();
}

function odswiezWyborCen() {
  const przyciski = Array.from(main.querySelectorAll("[data-rate-key]"));
  przyciski.forEach((b) => {
    const wybrana = wybraneCeny.has(b.dataset.rateKey);
    b.classList.toggle("is-selected", wybrana);
    b.setAttribute("aria-pressed", String(wybrana));
  });
  main.querySelectorAll("[data-select-rate-day]").forEach((b) => {
    const klucze = przyciski.filter((c) => c.dataset.rateKey.split("|")[1] === b.dataset.selectRateDay).map((c) => c.dataset.rateKey);
    const wybrane = klucze.length > 0 && klucze.every((key) => wybraneCeny.has(key));
    b.classList.toggle("is-selected-group", wybrane);
    b.setAttribute("aria-pressed", String(wybrane));
  });
  main.querySelectorAll("[data-select-rate-unit]").forEach((b) => {
    const klucze = przyciski.filter((c) => c.dataset.rateKey.split("|")[0] === b.dataset.selectRateUnit).map((c) => c.dataset.rateKey);
    const wybrane = klucze.length > 0 && klucze.every((key) => wybraneCeny.has(key));
    b.classList.toggle("is-selected-group", wybrane);
    b.setAttribute("aria-pressed", String(wybrane));
  });
  const widoczne = przyciski.map((b) => b.dataset.rateKey);
  const rog = main.querySelector("[data-select-visible-rates]");
  if (rog) {
    const wszystkie = widoczne.length > 0 && widoczne.every((key) => wybraneCeny.has(key));
    rog.classList.toggle("is-selected-group", wszystkie);
    rog.setAttribute("aria-pressed", String(wszystkie));
  }
  const licznik = main.querySelector("#selected-rate-count");
  if (licznik) licznik.textContent = `${wybraneCeny.size} ${odmien(wybraneCeny.size, "wybrana cena", "wybrane ceny", "wybranych cen")}`;
  main.querySelectorAll("[data-apply-rate-selection], [data-clear-rate-selection]").forEach((b) => { b.disabled = wybraneCeny.size === 0; });
}

function zastosujZmianeDoWybranychCen() {
  const operacja = main.querySelector("#selected-rate-operation")?.value;
  const wartosc = Number(main.querySelector("#selected-rate-value")?.value);
  if (!wybraneCeny.size) { pokazKomunikat("Najpierw zaznacz ceny w siatce"); return; }
  if (!Number.isFinite(wartosc) || wartosc < 0) { pokazKomunikat("Wpisz poprawną, dodatnią wartość zmiany"); return; }
  wybraneCeny.forEach((key) => {
    const [apartamentId, dataIso, platforma] = key.split("|");
    const obecna = pobierzCene(apartamentId, dataIso, platforma);
    const nowa = operacja === "set" ? wartosc
      : operacja === "add_amount" ? obecna + wartosc
        : operacja === "subtract_amount" ? obecna - wartosc
          : operacja === "add_percent" ? obecna * (1 + wartosc / 100)
            : obecna * (1 - wartosc / 100);
    nadpisaneCeny.set(key, Math.max(100, Math.round(nowa)));
  });
  const liczbaZmian = wybraneCeny.size;
  pokazWidok("ceny", false, false);
  pokazKomunikat(`Zmieniono ${liczbaZmian} ${odmien(liczbaZmian, "cenę", "ceny", "cen")} w ${stan.platformaCen}`);
}

function wyczyscWyborCen(wylaczTryb = false) {
  wybraneCeny.clear();
  if (wylaczTryb) stan.trybWyboruCen = false;
}

function otworzCene(key) {
  const [apartamentId, dataIso, platforma] = key.split("|");
  const a = apartamentPoId(apartamentId);
  const restrykcje = pobierzRestrykcje(apartamentId, dataIso, platforma);
  const cena = pobierzCene(apartamentId, dataIso, platforma);
  zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer";
  layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="rate-drawer-title"><header class="drawer-header"><div><span class="eyebrow">${platforma} · ${polskaData(dataIso)}</span><h2 id="rate-drawer-title">${a.nazwa}</h2><span class="status">${cena} PLN · min. ${restrykcje.minNocy} n.</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><form class="drawer-section" id="single-rate-form"><div class="drawer-card"><span class="eyebrow">Cena w wybranym kanale</span><label class="field"><span>Cena za noc (PLN)</span><input id="single-rate-price" type="number" min="100" max="5000" step="1" value="${cena}" required></label><label class="field"><span>Minimalna długość pobytu</span><input id="single-min-nights" type="number" min="1" max="30" step="1" value="${restrykcje.minNocy}" required></label></div><div class="drawer-card"><span class="eyebrow">Dostępność</span><label class="toggle-row"><input id="single-closed" type="checkbox" ${restrykcje.zamkniete ? "checked" : ""}><span><strong>Zamknij sprzedaż</strong><small>Noc nie będzie dostępna w ${platforma}</small></span></label><label class="toggle-row"><input id="single-no-arrival" type="checkbox" ${restrykcje.bezPrzyjazdu ? "checked" : ""}><span><strong>Bez przyjazdu</strong><small>Gość nie może rozpocząć pobytu tego dnia</small></span></label></div><div class="notice"><span>Ta zmiana dotyczy wyłącznie kanału <strong>${platforma}</strong>. Pozostałe platformy zachowają własne ceny i restrykcje.</span></div><div class="button-row"><button class="button" type="submit">Zapisz cenę i restrykcje</button><button class="button secondary" type="button" data-reset-rate>Przywróć wartości bazowe</button></div></form></div></aside>`;
  document.body.append(layer);
  layer.querySelector(".drawer-backdrop").onclick = zamknijPanel; layer.querySelector(".drawer-close").onclick = zamknijPanel;
  layer.querySelector("#single-rate-form").onsubmit = (e) => {
    e.preventDefault();
    const nowa = Number(layer.querySelector("#single-rate-price").value);
    if (nowa !== cena || nadpisaneCeny.has(key)) nadpisaneCeny.set(key, nowa);
    nadpisaneRestrykcje.set(key, { minNocy: Number(layer.querySelector("#single-min-nights").value), zamkniete: layer.querySelector("#single-closed").checked, bezPrzyjazdu: layer.querySelector("#single-no-arrival").checked });
    zamknijPanel(); pokazWidok("ceny", false, false); pokazKomunikat(`Zapisano cenę i restrykcje ${a.nazwa} na ${krotkaData(dataIso)} w ${platforma}`);
  };
  layer.querySelector("[data-reset-rate]").onclick = () => { nadpisaneCeny.delete(key); nadpisaneRestrykcje.delete(key); zamknijPanel(); pokazWidok("ceny", false, false); pokazKomunikat(`Przywrócono wartości bazowe w ${platforma}`); };
  layer.querySelector("#single-rate-price").focus();
}

function otworzEdycjeZbiorcza() {
  const pierwszy = stan.dataStartCen;
  const ostatni = [dodajDni(pierwszy, 6), "2026-12-31"].sort()[0];
  const lokalePortfela = apartamenty.filter((a) => a.nazwa.startsWith(stan.portfelCen));
  zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer";
  layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="bulk-rate-title"><header class="drawer-header"><div><span class="eyebrow">${stan.platformaCen} · ceny i restrykcje</span><h2 id="bulk-rate-title">Zbiorcza aktualizacja</h2><span class="status">${stan.portfelCen}</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><form class="drawer-section" id="bulk-rate-form"><div class="drawer-card"><span class="eyebrow">Zakres zmiany</span><label class="field"><span>Apartamenty</span><select id="bulk-rate-units"><option value="all">${stan.apartamentCen ? "Wybrany apartament" : "Wszystkie 6 apartamentów w portfelu"}</option>${stan.apartamentCen ? "" : `<option value="all36">Wszystkie 36 apartamentów</option>`}${lokalePortfela.map((a) => `<option value="${a.id}" ${a.id === stan.apartamentCen ? "selected" : ""}>${a.id} · ${a.nazwa}</option>`).join("")}</select></label><div class="date-pair"><label class="field"><span>Od</span><input id="bulk-rate-from" type="date" value="${pierwszy}" min="2026-09-01" max="2026-12-31" required></label><label class="field"><span>Do</span><input id="bulk-rate-to" type="date" value="${ostatni}" min="2026-09-01" max="2026-12-31" required></label></div></div><div class="drawer-card"><span class="eyebrow">Operacja na cenie</span><label class="field"><span>Sposób zmiany</span><select id="bulk-rate-operation"><option value="set">Ustaw dokładną cenę</option><option value="add_amount">Zwiększ o kwotę PLN</option><option value="subtract_amount">Obniż o kwotę PLN</option><option value="add_percent">Zwiększ procentowo</option><option value="subtract_percent">Obniż procentowo</option><option value="none">Bez zmiany ceny</option></select></label><label class="field"><span>Wartość zmiany</span><input id="bulk-rate-value" type="number" min="0" max="5000" step="1" value="50" required></label><small class="field-help">Przykład: wybierz „Obniż procentowo” i wpisz 15, aby obniżyć aktualne ceny o 15%.</small></div><div class="drawer-card"><span class="eyebrow">Reguły pobytu i sprzedaży</span><label class="field"><span>Minimalna długość pobytu (1–30 nocy)</span><input id="bulk-rate-min-stay" type="number" min="1" max="30" step="1" placeholder="Bez zmiany"></label><label class="field"><span>Sprzedaż</span><select id="bulk-rate-closed"><option value="">Bez zmiany</option><option value="open">Otwarta</option><option value="closed">Zamknięta</option></select></label><label class="field"><span>Przyjazdy</span><select id="bulk-rate-arrival"><option value="">Bez zmiany</option><option value="allowed">Dozwolone</option><option value="blocked">Zablokowane</option></select></label><label class="toggle-row"><input id="bulk-include-weekends" type="checkbox" checked><span><strong>Uwzględnij weekendy</strong><small>Zastosuj reguły również w piątki i soboty</small></span></label></div><div class="notice"><span>Zmiany zostaną zapisane wyłącznie dla platformy <strong>${stan.platformaCen}</strong>.</span></div><div class="button-row"><button class="button" type="submit">Zastosuj zmianę</button><button class="button secondary" type="button" data-cancel-bulk>Anuluj</button></div></form></div></aside>`;
  document.body.append(layer);
  layer.querySelector(".drawer-backdrop").onclick = zamknijPanel; layer.querySelector(".drawer-close").onclick = zamknijPanel; layer.querySelector("[data-cancel-bulk]").onclick = zamknijPanel;
  layer.querySelector("#bulk-rate-form").onsubmit = (e) => {
    e.preventDefault();
    const od = layer.querySelector("#bulk-rate-from").value;
    const doDaty = layer.querySelector("#bulk-rate-to").value;
    const operacja = layer.querySelector("#bulk-rate-operation").value;
    const wartosc = Number(layer.querySelector("#bulk-rate-value").value);
    const wybor = layer.querySelector("#bulk-rate-units").value;
    const minNocy = layer.querySelector("#bulk-rate-min-stay").value;
    const sprzedaz = layer.querySelector("#bulk-rate-closed").value;
    const przyjazdy = layer.querySelector("#bulk-rate-arrival").value;
    const uwzglednijWeekendy = layer.querySelector("#bulk-include-weekends").checked;
    if (od > doDaty) { pokazKomunikat("Data końcowa musi być późniejsza niż początkowa"); return; }
    const lokale = (wybor === "all36" ? apartamenty : lokalePortfela).filter((a) => wybor === "all36" || ((!stan.apartamentCen || a.id === stan.apartamentCen) && (wybor === "all" || a.id === wybor)));
    let data = od; let zmianyCen = 0; let zmianyRestrykcji = 0;
    while (data <= doDaty) {
      const dzienTygodnia = new Date(`${data}T12:00:00Z`).getUTCDay();
      if (uwzglednijWeekendy || ![5, 6].includes(dzienTygodnia)) lokale.forEach((a) => {
        const key = kluczCeny(a.id, data, stan.platformaCen);
        if (operacja !== "none") {
          const obecna = pobierzCene(a.id, data, stan.platformaCen);
          const nowa = operacja === "set" ? wartosc : operacja === "add_amount" ? obecna + wartosc : operacja === "subtract_amount" ? obecna - wartosc : operacja === "add_percent" ? obecna * (1 + wartosc / 100) : obecna * (1 - wartosc / 100);
          nadpisaneCeny.set(key, Math.max(100, Math.round(nowa))); zmianyCen += 1;
        }
        if (minNocy || sprzedaz || przyjazdy) {
          const obecne = pobierzRestrykcje(a.id, data, stan.platformaCen);
          nadpisaneRestrykcje.set(key, { minNocy: minNocy ? Number(minNocy) : obecne.minNocy, zamkniete: sprzedaz ? sprzedaz === "closed" : obecne.zamkniete, bezPrzyjazdu: przyjazdy ? przyjazdy === "blocked" : obecne.bezPrzyjazdu });
          zmianyRestrykcji += 1;
        }
      });
      data = dodajDni(data, 1);
    }
    zamknijPanel(); pokazWidok("ceny", false, false); pokazKomunikat(`Zapisano ${zmianyCen} zmian cen i ${zmianyRestrykcji} zmian restrykcji w ${stan.platformaCen}`);
  };
}

function otworzNoweZadanieKoordynatora() {
  zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer";
  layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="new-task-title"><header class="drawer-header"><div><span class="eyebrow">Nowe zadanie koordynatora</span><h2 id="new-task-title">Dodaj zadanie</h2><span class="status">Termin i odpowiedzialność</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><form class="drawer-section coordinator-task-form" id="new-coordinator-task-form"><label class="field"><span>Tytuł zadania</span><input id="new-task-name" maxlength="100" placeholder="Np. umówić serwis pralki" required></label><label class="field"><span>Opis zadania</span><textarea id="new-task-description" maxlength="700" placeholder="Co dokładnie trzeba zrobić i jaki ma być rezultat?" required></textarea></label><div class="date-pair"><label class="field"><span>Kategoria</span><select id="new-task-category" required>${kategorieZadanKoordynatorow.map((k) => `<option value="${k}">${k}</option>`).join("")}</select></label><label class="field"><span>Termin realizacji</span><input id="new-task-date" type="date" min="2026-09-08" value="2026-09-11" required></label></div><label class="field"><span>Powiązany apartament</span><select id="new-task-apartment"><option value="">Bez przypisanego apartamentu</option>${apartamenty.map((a) => `<option value="${a.id}">${a.id} · ${a.nazwa}</option>`).join("")}</select><small class="field-help">Dla kategorii „Konkretny apartament” wybór lokalu jest obowiązkowy.</small></label><div class="date-pair"><label class="field"><span>Koordynator</span><select id="new-task-coordinator">${koordynatorzy.map((k) => `<option value="${k.imieNazwisko}" ${k.imieNazwisko === stan.koordynatorOsoba ? "selected" : ""}>${k.imieNazwisko}</option>`).join("")}</select></label><label class="field"><span>Priorytet</span><select id="new-task-priority"><option value="Normalne">Normalne</option><option value="Pilne">Pilne</option></select></label></div><p class="form-error" id="new-task-error" role="alert"></p><div class="button-row"><button class="button" type="submit">Utwórz zadanie</button><button class="button secondary" type="button" data-cancel-new-task>Anuluj</button></div></form></div></aside>`;
  document.body.append(layer);
  layer.querySelector(".drawer-backdrop").addEventListener("click", zamknijPanel);
  layer.querySelector(".drawer-close").addEventListener("click", zamknijPanel);
  layer.querySelector("[data-cancel-new-task]").addEventListener("click", zamknijPanel);
  layer.querySelector("#new-coordinator-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const kategoria = layer.querySelector("#new-task-category").value;
    const apartamentId = layer.querySelector("#new-task-apartment").value;
    const blad = layer.querySelector("#new-task-error");
    if (kategoria === "Konkretny apartament" && !apartamentId) { blad.textContent = "Wybierz apartament, którego dotyczy zadanie."; layer.querySelector("#new-task-apartment").focus(); return; }
    const koordynator = layer.querySelector("#new-task-coordinator").value;
    const numer = Math.max(...zadaniaKoordynatorow.map((z) => Number(z.id.split("-")[1]))) + 1;
    zadaniaKoordynatorow.unshift({ id: `KOR-${numer}`, tytul: layer.querySelector("#new-task-name").value.trim(), opis: layer.querySelector("#new-task-description").value.trim(), kategoria, apartamentId, koordynator, termin: layer.querySelector("#new-task-date").value, priorytet: layer.querySelector("#new-task-priority").value, status: "Do zrobienia", historia: [{ czas: "Przed chwilą", autor: koordynator, status: "Do zrobienia", opis: "Zadanie utworzone i dodane do kolejki." }] });
    stan.koordynatorOsoba = koordynator; stan.koordynatorKategoria = ""; stan.koordynatorApartament = ""; stan.koordynatorSzukaj = "";
    zamknijPanel(); pokazWidok("koordynatorzy", false, false); pokazKomunikat(`Utworzono zadanie KOR-${numer}`);
  });
  layer.querySelector("#new-task-name").focus();
}

function otworzZadanieKoordynatora(id, sugerowanyStatus = "") {
  const zadanie = zadaniaKoordynatorow.find((z) => z.id === id); if (!zadanie) return;
  const apartament = zadanie.apartamentId ? apartamentPoId(zadanie.apartamentId) : null;
  zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer"; document.body.append(layer);
  const render = () => {
    const wybranyStatus = sugerowanyStatus || zadanie.status;
    layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="coordinator-task-title"><header class="drawer-header"><div><span class="eyebrow">${zadanie.id} · ${zadanie.kategoria}</span><h2 id="coordinator-task-title">${zadanie.tytul}</h2><span class="status ${zadanie.priorytet === "Pilne" ? "danger" : ""}">${zadanie.status}</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><div class="detail-grid"><div><small>Koordynator</small><strong>${zadanie.koordynator}</strong><span>${koordynatorzy.find((k) => k.imieNazwisko === zadanie.koordynator)?.obszar || ""}</span></div><div><small>Termin realizacji</small><strong>${polskaData(zadanie.termin)}</strong><span>${zadanie.priorytet} · ${zadanie.status}</span></div></div><div class="drawer-card"><span class="eyebrow">Opis zadania</span><p>${bezpiecznyTekst(zadanie.opis)}</p></div>${apartament ? `<div class="drawer-card coordinator-apartment-card"><span><small>Powiązany apartament</small><strong>${apartament.id} · ${apartament.nazwa}</strong><p>${apartament.miasto} · ${apartament.wlasciciel}</p></span><button class="button secondary compact-button" type="button" data-open-coordinator-apartment>Otwórz kartę apartamentu</button></div>` : `<div class="drawer-card"><small>Zakres</small><strong>Zadanie ogólne — bez przypisanego apartamentu</strong></div>`}<div class="drawer-card coordinator-history"><span class="eyebrow">Historia etapów</span><div class="timeline">${[...zadanie.historia].reverse().map((wpis) => `<article><strong>${wpis.status}</strong><small>${wpis.czas} · ${wpis.autor}</small><p>${bezpiecznyTekst(wpis.opis)}</p></article>`).join("")}</div></div><form class="drawer-card coordinator-stage-form" id="coordinator-stage-form"><span class="eyebrow">Zapisz aktualny etap</span><label class="field"><span>Status zadania</span><select id="coordinator-stage-status">${["Do zrobienia", "W trakcie", "Zakończone"].map((status) => `<option value="${status}" ${status === wybranyStatus ? "selected" : ""}>${status}</option>`).join("")}</select></label><label class="field"><span>Co się dzieje i na jakim etapie jest zadanie?</span><textarea id="coordinator-stage-note" minlength="5" maxlength="700" placeholder="Np. wybrano dwie firmy, czekam na ostateczną wycenę do jutra…" required></textarea></label><p class="form-error" id="coordinator-stage-error" role="alert"></p><button class="button" type="submit">Zapisz etap i przenieś zadanie</button><small>Opis jest obowiązkowy i zostanie zapisany w historii zadania.</small></form></div></aside>`;
    const zamknij = () => { zamknijPanel(); pokazWidok("koordynatorzy", false, false); };
    layer.querySelector(".drawer-backdrop").addEventListener("click", zamknij);
    layer.querySelector(".drawer-close").addEventListener("click", zamknij);
    layer.querySelector("[data-open-coordinator-apartment]")?.addEventListener("click", () => otworzApartament(apartament.id));
    layer.querySelector("#coordinator-stage-form").addEventListener("submit", (event) => {
      event.preventDefault(); const opis = layer.querySelector("#coordinator-stage-note").value.trim();
      if (opis.length < 5) { layer.querySelector("#coordinator-stage-error").textContent = "Opisz aktualny etap zadania przed zmianą statusu."; layer.querySelector("#coordinator-stage-note").focus(); return; }
      zadanie.status = layer.querySelector("#coordinator-stage-status").value;
      zadanie.historia.push({ czas: "Przed chwilą", autor: zadanie.koordynator, status: zadanie.status, opis });
      zamknijPanel(); pokazWidok("koordynatorzy", false, false); pokazKomunikat(`${zadanie.id}: zapisano etap „${zadanie.status}”`);
    });
    if (sugerowanyStatus) layer.querySelector("#coordinator-stage-note").focus();
  };
  render();
}

function otworzSprzatanie(id) {
  const z = zadaniaSprzatania.find((x) => x.id === id); if (!z) return; const a = apartamentPoId(z.apartamentId); zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer"; document.body.append(layer);
  const render = () => { const gotowe = z.checklista.filter((e) => e.gotowe).length; const dostepni = dostepniWData(z.dataSprzatania); layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true"><header class="drawer-header"><div><span class="eyebrow">${z.id} · ${z.okno}</span><h2>${a.nazwa}</h2><span class="status">${z.status}</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><div class="detail-grid"><div><small>Przypisana osoba</small><strong>${z.osoba}</strong><p data-cleaning-progress>Postęp: ${gotowe}/${z.checklista.length}</p></div><div><small>Następny check-in</small><strong>${z.nastepnyCheckin}</strong><span>Termin sprzątania: ${polskaData(z.dataSprzatania)}</span></div></div><label class="field drawer-card"><span>Zmiana przypisanej osoby · tylko dostępni</span><select data-drawer-cleaner>${z.osoba === "Nieprzypisane" ? `<option value="" selected disabled>Wybierz osobę</option>` : ""}${dostepni.map((osoba) => `<option value="${osoba.imieNazwisko}" ${osoba.imieNazwisko === z.osoba ? "selected" : ""}>${osoba.imieNazwisko}</option>`).join("")}</select></label><div class="drawer-card admin-note-card"><span class="eyebrow">Uwagi administratora</span><textarea id="cleaning-admin-note" maxlength="500" placeholder="Np. proszę zwrócić szczególną uwagę na okna…">${bezpiecznyTekst(z.uwagaAdmin || "")}</textarea><button class="button secondary" type="button" data-save-cleaning-note>Zapisz uwagę dla pracownika</button><small>Uwaga będzie od razu widoczna w panelu przypisanej osoby.</small></div>${z.weryfikacjaSlack ? `<div class="drawer-card slack-proof"><span class="eyebrow">Potwierdzenie ze Slacka</span><strong>${z.weryfikacjaSlack.zdjecia} zdjęcia · ${z.weryfikacjaSlack.kanal}</strong><p>Automatyzacja ${z.weryfikacjaSlack.zdarzenieId} zakończyła zadanie o ${z.weryfikacjaSlack.czas}.</p></div>` : ""}<div class="checklist"><span class="eyebrow">Checklista przygotowania</span>${z.checklista.map((e, i) => `<label><input type="checkbox" data-check-index="${i}" ${e.gotowe ? "checked" : ""}><span>${e.tekst}</span></label>`).join("")}</div><div class="notice"><span>Zmiany działają w tej sesji demonstracyjnej i są widoczne w panelu pracownika.</span></div></div></aside>`; layer.querySelector(".drawer-backdrop").addEventListener("click", zamknijPanel); layer.querySelector(".drawer-close").addEventListener("click", zamknijPanel); layer.querySelector("[data-drawer-cleaner]").addEventListener("change", (event) => { przypiszSprzatanie(z.id, event.target.value); otworzSprzatanie(z.id); }); layer.querySelector("[data-save-cleaning-note]").addEventListener("click", () => { z.uwagaAdmin = layer.querySelector("#cleaning-admin-note").value.trim(); render(); pokazKomunikat("Uwaga administratora została zapisana"); }); layer.querySelectorAll("[data-check-index]").forEach((pole) => pole.addEventListener("change", () => { z.checklista[Number(pole.dataset.checkIndex)].gotowe = pole.checked; z.status = z.checklista.every((e) => e.gotowe) ? "Posprzątane · gotowe" : "W toku"; const postep = z.checklista.filter((e) => e.gotowe).length; layer.querySelector(".drawer-header .status").textContent = z.status; layer.querySelector("[data-cleaning-progress]").textContent = `Postęp: ${postep}/${z.checklista.length}`; pokazKomunikat("Postęp checklisty zapisano"); })); };
  render();
}

function otworzUsterke(id) {
  const u = usterkiDemo.find((x) => x.id === id); const a = apartamentPoId(u.apartamentId); zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer"; document.body.append(layer);
  const render = () => { layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true"><header class="drawer-header"><div><span class="eyebrow">${u.id} · ${u.priorytet} priorytet</span><h2>${u.tytul}</h2><span class="status warning">${u.status}</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><div class="drawer-card"><small>Apartament</small><strong>${a.nazwa}</strong><p>${u.opis}</p></div><div class="drawer-card"><small>Przypisanie</small><strong>${u.osoba}</strong></div><div class="button-row"><button class="button" data-issue-status="W realizacji">Rozpocznij realizację</button><button class="button secondary" data-issue-status="Rozwiązane">Oznacz jako rozwiązane</button></div></div></aside>`; layer.querySelector(".drawer-backdrop").addEventListener("click", zamknijPanel); layer.querySelector(".drawer-close").addEventListener("click", zamknijPanel); layer.querySelectorAll("[data-issue-status]").forEach((b) => b.addEventListener("click", () => { u.status = b.dataset.issueStatus; render(); pokazKomunikat(`Status: ${u.status}`); })); }; render();
}

function otworzApartament(id) {
  const a = apartamentPoId(id);
  const portfel = portfele.find((p) => a.nazwa.startsWith(p.nazwa));
  const pobyty = rezerwacjeAktywne.filter((r) => r.apartamentId === id && r.przyjazd >= "2026-09-05").slice(0, 4);
  zamknijPanel(); document.body.classList.add("drawer-open");
  const layer = document.createElement("div"); layer.id = "drawer-layer"; layer.className = "drawer-layer";
  layer.innerHTML = `<button class="drawer-backdrop" type="button" aria-label="Zamknij panel"></button><aside class="drawer" role="dialog" aria-modal="true"><header class="drawer-header"><div><span class="eyebrow">${a.id} · ${a.miasto}</span><h2>${a.nazwa}</h2><span class="status">${a.status}</span></div><button class="drawer-close" type="button" aria-label="Zamknij panel">×</button></header><div class="drawer-body"><div class="button-row drawer-primary-actions"><button class="button" type="button" data-open-apartment-rates>Ustaw ceny tego apartamentu</button><button class="button secondary" type="button" data-demo="Kalendarz apartamentu został przygotowany">Pokaż kalendarz</button></div><div class="detail-grid"><div><small>Właściciel</small><strong>${a.wlasciciel}</strong></div><div><small>Obłożenie</small><strong>${a.oblozenie}%</strong></div><div><small>Waluta</small><strong>${a.waluta}</strong></div><div><small>Synchronizacja</small><strong>5 min temu</strong></div></div><div class="drawer-card"><span class="eyebrow">Najbliższe pobyty</span><div class="record-list">${pobyty.map((r) => przyciskRezerwacji(r, "record-row record-button compact")).join("")}</div></div></div></aside>`;
  document.body.append(layer);
  layer.querySelector(".drawer-backdrop").addEventListener("click", zamknijPanel);
  layer.querySelector(".drawer-close").addEventListener("click", zamknijPanel);
  layer.querySelector("[data-open-apartment-rates]").addEventListener("click", () => { stan.portfelCen = portfel.nazwa; stan.apartamentCen = a.id; pokazWidok("ceny"); });
  layer.querySelectorAll("[data-reservation-id]").forEach((b) => b.addEventListener("click", () => otworzRezerwacje(b.dataset.reservationId)));
  layer.querySelectorAll("[data-demo]").forEach((b) => b.addEventListener("click", () => pokazKomunikat(b.dataset.demo)));
}

function filtrApartamentow() {
  const q = document.querySelector("#apartment-search"), owner = document.querySelector("#owner-filter"), count = document.querySelector("#apartment-count"); if (!q) return;
  const filtruj = () => { let n = 0; document.querySelectorAll(".apartment-row").forEach((row) => { const ok = row.dataset.apartmentSearch.includes(q.value.trim().toLocaleLowerCase("pl")) && (!owner.value || row.dataset.owner === owner.value); row.hidden = !ok; if (ok) n += 1; }); count.textContent = `${n} wyników`; };
  q.addEventListener("input", filtruj); owner.addEventListener("change", filtruj); document.querySelector("#clear-apartment-filters").addEventListener("click", () => { q.value = ""; owner.value = ""; filtruj(); });
}

function filtrRezerwacji() {
  const q = document.querySelector("#booking-search"), channel = document.querySelector("#booking-channel"), count = document.querySelector("#booking-count"); if (!q) return;
  const filtruj = () => { stan.szukajRezerwacji = q.value; stan.kanalRezerwacji = channel.value; let n = 0; document.querySelectorAll("#booking-list [data-reservation-id]").forEach((row) => { const ok = row.dataset.search.includes(q.value.trim().toLocaleLowerCase("pl")) && (!channel.value || row.dataset.channel === channel.value); row.hidden = !ok; if (ok) n += 1; }); count.textContent = `${n} wyników`; document.querySelector("#booking-empty").hidden = n !== 0; };
  q.addEventListener("input", filtruj); channel.addEventListener("change", filtruj); filtruj();
}

function eksportujRaportCSV() {
  let wiersze;
  let nazwa;
  if (stan.raportZakladka === "sprzedaz") {
    wiersze = [["Apartament", "Kod", "Miasto", "Rezerwacje", "Pokojonoce", "Obłożenie %", "ADR PLN", "Przychód brutto PLN", "Prowizje PLN", "Po prowizjach PLN"], ...wierszeSprzedazyRaportu().map((w) => [w.apartament.nazwa, w.apartament.id, w.apartament.miasto, w.rezerwacje.length, w.pokojonoce, w.oblozenie, w.adr, w.przychod, w.prowizje, w.przychod - w.prowizje])];
    nazwa = `raport-sprzedazy-2026-${String(stan.raportMiesiac).padStart(2, "0")}.csv`;
  } else {
    const dane = rezerwacjeRaportu().map((r) => ({ r, d: daneRozliczenia(r) })).filter(({ d }) => pasujeDoStatusuRaportu(d));
    wiersze = [["Rezerwacja", "Gość", "Apartament", "Kod apartamentu", "Kanał", "Przyjazd", "Wyjazd", "Etap pobytu", "Brutto PLN", "Potrącenia PLN", "Wpływ na konto PLN", "Termin wypłaty", "Status wypłaty"], ...dane.map(({ r, d }) => [r.id, r.gosc, apartamentPoId(r.apartamentId).nazwa, r.apartamentId, r.kanal, r.przyjazd, r.wyjazd, d.zamknieta ? "Zamknięta finansowo" : d.etapPobytu, r.kwota, d.prowizja, d.doKonta, d.dataWyplaty, d.statusWyplaty])];
    nazwa = `raport-wplat-2026-${String(stan.raportMiesiac).padStart(2, "0")}.csv`;
  }
  const csv = `\ufeff${wiersze.map((wiersz) => wiersz.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(";")).join("\r\n")}`;
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url; link.download = nazwa; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  pokazKomunikat(`Pobrano plik ${nazwa}`);
}

function eksportujRozliczenieWlasciciela() {
  const wiersze = [["Właściciel", "Apartament", "Kod", "Pokoje", "Łazienki", "Rezerwacje", "Pokojonoce", "Brutto PLN", "Prowizja portali 16,2% PLN", "VAT 8% PLN", "Wynagrodzenie 20% PLN", "Sprzątanie PLN", "Dla właściciela PLN"], ...wierszeWlasciciela().map((w) => [stan.wlascicielNazwa, w.apartament.nazwa, w.apartament.id, w.apartament.pokoje, w.apartament.lazienki, w.rezerwacje, w.noce, w.brutto, w.prowizjaPortalu, w.vat, w.wynagrodzenieOperatora, w.sprzatanie, w.dlaWlasciciela])];
  const csv = `\ufeff${wiersze.map((wiersz) => wiersz.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(";")).join("\r\n")}`;
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url; link.download = `rozliczenie-${stan.wlascicielNazwa.toLocaleLowerCase("pl").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")}-2026-${String(stan.wlascicielMiesiac).padStart(2, "0")}.csv`; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  pokazKomunikat("Pobrano miesięczne rozliczenie właściciela");
}

function podlaczAkcjeWidoku() {
  main.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => pokazWidok(b.dataset.go)));
  main.querySelectorAll("[data-demo]").forEach((b) => b.addEventListener("click", () => pokazKomunikat(b.dataset.demo)));
  main.querySelector("[data-new-coordinator-task]")?.addEventListener("click", otworzNoweZadanieKoordynatora);
  main.querySelectorAll("[data-coordinator-task]").forEach((b) => b.addEventListener("click", () => otworzZadanieKoordynatora(b.dataset.coordinatorTask)));
  main.querySelectorAll("[data-coordinator-next]").forEach((b) => b.addEventListener("click", () => otworzZadanieKoordynatora(b.dataset.coordinatorTaskId, b.dataset.coordinatorNext)));
  document.querySelector("#coordinator-person")?.addEventListener("change", (e) => { stan.koordynatorOsoba = e.target.value; stan.koordynatorKategoria = ""; stan.koordynatorApartament = ""; stan.koordynatorSzukaj = ""; pokazWidok("koordynatorzy", false, false); });
  document.querySelector("#coordinator-category")?.addEventListener("change", (e) => { stan.koordynatorKategoria = e.target.value; pokazWidok("koordynatorzy", false, false); });
  document.querySelector("#coordinator-apartment")?.addEventListener("change", (e) => { stan.koordynatorApartament = e.target.value; pokazWidok("koordynatorzy", false, false); });
  document.querySelector("#coordinator-search")?.addEventListener("change", (e) => { stan.koordynatorSzukaj = e.target.value.trim(); pokazWidok("koordynatorzy", false, false); });
  main.querySelector("[data-clear-coordinator-filters]")?.addEventListener("click", () => { stan.koordynatorKategoria = ""; stan.koordynatorApartament = ""; stan.koordynatorSzukaj = ""; pokazWidok("koordynatorzy", false, false); });
  main.querySelectorAll("[data-report-tab]").forEach((b) => b.addEventListener("click", () => { stan.raportZakladka = b.dataset.reportTab; stan.raportApartamentId = null; pokazWidok("raporty", false, false); }));
  document.querySelector("#report-month")?.addEventListener("change", (e) => { stan.raportMiesiac = Number(e.target.value); stan.raportApartamentId = null; pokazWidok("raporty", false, false); });
  document.querySelector("#report-portfolio")?.addEventListener("change", (e) => { stan.raportPortfel = e.target.value; stan.raportApartamentId = null; pokazWidok("raporty", false, false); });
  document.querySelector("#report-channel")?.addEventListener("change", (e) => { stan.raportKanal = e.target.value; stan.raportApartamentId = null; pokazWidok("raporty", false, false); });
  document.querySelector("#report-status")?.addEventListener("change", (e) => { stan.raportStatus = e.target.value; pokazWidok("raporty", false, false); });
  main.querySelectorAll("[data-report-view]").forEach((b) => b.addEventListener("click", () => { stan.raportWidok = b.dataset.reportView; pokazWidok("raporty", false, false); }));
  main.querySelectorAll("[data-report-apartment]").forEach((b) => b.addEventListener("click", () => { stan.raportApartamentId = b.dataset.reportApartment; pokazWidok("raporty", false, false); }));
  main.querySelector("[data-report-close-details]")?.addEventListener("click", () => { stan.raportApartamentId = null; pokazWidok("raporty", false, false); });
  main.querySelector("[data-report-export]")?.addEventListener("click", eksportujRaportCSV);
  document.querySelector("#owner-client")?.addEventListener("change", (e) => { stan.wlascicielNazwa = e.target.value; stan.wlascicielApartamentId = null; pokazWidok("wlasciciele", false, false); });
  document.querySelector("#owner-month")?.addEventListener("change", (e) => { stan.wlascicielMiesiac = Number(e.target.value); stan.wlascicielApartamentId = null; pokazWidok("wlasciciele", false, false); });
  main.querySelectorAll("[data-owner-tab]").forEach((b) => b.addEventListener("click", () => { stan.wlascicielZakladka = b.dataset.ownerTab; stan.wlascicielApartamentId = null; pokazWidok("wlasciciele", false, false); }));
  main.querySelectorAll("[data-owner-apartment]").forEach((b) => b.addEventListener("click", () => { stan.wlascicielApartamentId = b.dataset.ownerApartment; pokazWidok("wlasciciele", false, false); }));
  main.querySelector("[data-owner-close-details]")?.addEventListener("click", () => { stan.wlascicielApartamentId = null; pokazWidok("wlasciciele", false, false); });
  main.querySelector("[data-owner-export]")?.addEventListener("click", eksportujRozliczenieWlasciciela);
  main.querySelectorAll("[data-resolve-alert]").forEach((b) => b.addEventListener("click", () => { const alert = alertyOperacyjne.find((a) => a.id === b.dataset.resolveAlert); if (alert) alert.status = "Rozwiązane"; pokazWidok("pulpit", false, false); pokazKomunikat("Sprawa została oznaczona jako rozwiązana"); }));
  main.querySelector("[data-auto-assign]")?.addEventListener("click", automatycznieRozdzielSprzatanie);
  main.querySelectorAll("[data-apply-revenue]").forEach((b) => b.addEventListener("click", () => zastosujRekomendacjeRevenue(b.dataset.applyRevenue)));
  document.querySelector("#revenue-range")?.addEventListener("change", (e) => { stan.revenueZakres = e.target.value; pokazWidok("revenue", false, false); });
  main.querySelectorAll("[data-quality-action]").forEach((b) => b.addEventListener("click", () => { const kontrola = kontroleJakosci.find((k) => k.id === b.dataset.qualityId); if (!kontrola) return; kontrola.status = b.dataset.qualityAction === "approve" ? "Zaakceptowane" : "Do poprawy"; if (b.dataset.qualityAction === "reject") { const zadanie = zadaniaSprzatania.find((z) => z.id === kontrola.zadanieId); if (zadanie) zadanie.status = "Do poprawy"; } pokazWidok("jakosc", false, false); pokazKomunikat(kontrola.status === "Zaakceptowane" ? "Kontrola jakości została zaakceptowana" : "Zadanie wróciło do pracownika z uwagą"); }));
  main.querySelectorAll("[data-statement-id]").forEach((b) => b.addEventListener("click", () => { const r = rozliczeniaWlascicieli.find((x) => x.id === b.dataset.statementId); if (r) r.status = "Opublikowane"; pokazWidok(stan.widok, false, false); pokazKomunikat("Zestawienie właścicielskie zostało wygenerowane i opublikowane"); }));
  main.querySelectorAll("[data-finance-action]").forEach((b) => b.addEventListener("click", () => pokazKomunikat(b.dataset.financeAction === "retry" ? "Płatność przeszła po ponowieniu w trybie demonstracyjnym" : `Otwarto księgę rezerwacji ${b.dataset.financeId}`)));
  main.querySelectorAll("[data-team-person]").forEach((b) => b.addEventListener("click", () => { stan.wybranaSprzatajaca = b.dataset.teamPerson; pokazWidok("panel_sprzatajacej"); }));
  main.querySelectorAll("[data-ai-filter]").forEach((b) => b.addEventListener("click", () => { stan.aiFiltr = b.dataset.aiFilter; pokazWidok("ai_koordynator", false, false); }));
  main.querySelectorAll("[data-ai-action]").forEach((b) => b.addEventListener("click", () => wykonajRekomendacjeAI(b.dataset.aiAction)));
  main.querySelectorAll("[data-ai-dismiss]").forEach((b) => b.addEventListener("click", () => { const r = rekomendacjeAI.find((x) => x.id === b.dataset.aiDismiss); if (r) r.status = "Odrzucono"; pokazWidok("ai_koordynator", false, false); pokazKomunikat("Rekomendacja została odrzucona i zapisana w audycie"); }));
  main.querySelectorAll("[data-automation-id]").forEach((pole) => pole.addEventListener("change", () => { const regula = regulyAutomatyzacji.find((r) => r.id === pole.dataset.automationId); if (regula) regula.aktywna = pole.checked; pokazWidok("automatyzacje", false, false); pokazKomunikat(pole.checked ? "Automatyzacja została włączona" : "Automatyzacja została wyłączona"); }));
  main.querySelectorAll("[data-stock-order]").forEach((b) => b.addEventListener("click", () => { const produkt = magazynDemo.find((p) => p.id === b.dataset.stockOrder); if (!produkt) return; const byloPonizej = produkt.stan < produkt.minimum; produkt.stan = byloPonizej ? produkt.minimum + Math.ceil(produkt.minimum * .2) : produkt.stan + Math.ceil(produkt.minimum * .25); pokazWidok("magazyn", false, false); pokazKomunikat(byloPonizej ? "Zamówienie uzupełniające zostało dodane" : "Przyjęcie magazynowe zostało zapisane"); }));
  main.querySelectorAll("[data-open-idobooking]").forEach((b) => b.addEventListener("click", otworzIdoBooking));
  main.querySelectorAll("[data-sync-provider]").forEach((b) => b.addEventListener("click", () => uruchomSynchronizacje(b.dataset.syncProvider)));
  main.querySelector("[data-integration-slack]")?.addEventListener("click", () => { stan.integrationTab = "slack"; pokazWidok("integracje", false, false); });
  main.querySelector("[data-integration-center]")?.addEventListener("click", () => { stan.integrationTab = "centrum"; pokazWidok("integracje", false, false); });
  main.querySelectorAll("[data-rate-key]").forEach((b) => b.addEventListener("click", () => {
    if (stan.trybWyboruCen) przelaczWybraneCeny([b.dataset.rateKey]);
    else otworzCene(b.dataset.rateKey);
  }));
  main.querySelectorAll("[data-restriction-key]").forEach((b) => b.addEventListener("click", () => otworzCene(b.dataset.restrictionKey)));
  main.querySelectorAll("[data-open-bulk-rate]").forEach((b) => b.addEventListener("click", otworzEdycjeZbiorcza));
  main.querySelector("[data-toggle-rate-selection]")?.addEventListener("click", () => {
    stan.trybWyboruCen = !stan.trybWyboruCen;
    if (!stan.trybWyboruCen) wyczyscWyborCen();
    pokazWidok("ceny", false, false);
  });
  main.querySelectorAll("[data-select-rate-day]").forEach((b) => b.addEventListener("click", () => {
    przelaczWybraneCeny(widoczneKluczeCen().filter((key) => key.split("|")[1] === b.dataset.selectRateDay));
  }));
  main.querySelectorAll("[data-select-rate-unit]").forEach((b) => b.addEventListener("click", () => {
    przelaczWybraneCeny(widoczneKluczeCen().filter((key) => key.split("|")[0] === b.dataset.selectRateUnit));
  }));
  main.querySelector("[data-select-visible-rates]")?.addEventListener("click", () => przelaczWybraneCeny(widoczneKluczeCen()));
  main.querySelector("[data-clear-rate-selection]")?.addEventListener("click", () => { wyczyscWyborCen(); odswiezWyborCen(); });
  main.querySelector("[data-apply-rate-selection]")?.addEventListener("click", zastosujZmianeDoWybranychCen);
  main.querySelectorAll("[data-cleaner-select]").forEach((karta) => karta.addEventListener("click", () => { stan.wybranaOsobaDoPrzydzialu = karta.dataset.cleanerSelect; pokazWidok("sprzatanie", false, false); }));
  main.querySelectorAll("[data-cleaner-drag]").forEach((karta) => {
    karta.addEventListener("dragstart", (event) => { event.dataTransfer.setData("text/plain", karta.dataset.cleanerDrag); event.dataTransfer.effectAllowed = "copy"; karta.classList.add("is-dragging"); });
    karta.addEventListener("dragend", () => { karta.classList.remove("is-dragging"); main.querySelectorAll(".is-drop-target").forEach((cel) => cel.classList.remove("is-drop-target")); });
  });
  main.querySelectorAll("[data-cleaning-drop]").forEach((cel) => {
    cel.addEventListener("dragover", (event) => { event.preventDefault(); event.dataTransfer.dropEffect = "copy"; cel.classList.add("is-drop-target"); });
    cel.addEventListener("dragleave", () => cel.classList.remove("is-drop-target"));
    cel.addEventListener("drop", (event) => { event.preventDefault(); cel.classList.remove("is-drop-target"); przypiszSprzatanie(cel.dataset.cleaningDrop, event.dataTransfer.getData("text/plain")); });
  });
  main.querySelectorAll("[data-cleaning-assignment]").forEach((pole) => pole.addEventListener("change", () => przypiszSprzatanie(pole.dataset.cleaningAssignment, pole.value)));
  main.querySelectorAll("[data-assign-selected]").forEach((b) => b.addEventListener("click", () => przypiszSprzatanie(b.dataset.assignSelected, stan.wybranaOsobaDoPrzydzialu)));
  main.querySelectorAll("[data-cleaning-date]").forEach((b) => b.addEventListener("click", () => { stan.dataPlanuSprzatania = b.dataset.cleaningDate; pokazWidok("sprzatanie", false, false); }));
  document.querySelector("#cleaner-view-person")?.addEventListener("change", (event) => { stan.wybranaSprzatajaca = event.target.value; pokazWidok("panel_sprzatajacej", false, false); });
  main.querySelectorAll("[data-availability-mode]").forEach((b) => b.addEventListener("click", () => { stan.trybDyspozycji = b.dataset.availabilityMode; pokazWidok("panel_sprzatajacej", false, false); }));
  main.querySelectorAll("[data-availability-date]").forEach((b) => b.addEventListener("click", () => ustawDyspozycje(stan.wybranaSprzatajaca, b.dataset.availabilityDate, stan.trybDyspozycji)));
  main.querySelectorAll("[data-availability-shift]").forEach((b) => b.addEventListener("click", () => { stan.miesiacDyspozycji = Math.max(9, Math.min(12, stan.miesiacDyspozycji + Number(b.dataset.availabilityShift))); pokazWidok("panel_sprzatajacej", false, false); }));
  main.querySelectorAll("[data-test-slack]").forEach((b) => b.addEventListener("click", symulujZdarzenieSlack));
  main.querySelectorAll("[data-reservation-id]").forEach((b) => b.addEventListener("click", () => otworzRezerwacje(b.dataset.reservationId)));
  main.querySelectorAll("[data-cleaning-id]").forEach((b) => b.addEventListener("click", () => otworzSprzatanie(b.dataset.cleaningId)));
  main.querySelectorAll("[data-issue-id]").forEach((b) => b.addEventListener("click", () => otworzUsterke(b.dataset.issueId)));
  main.querySelectorAll("[data-apartment-id]").forEach((b) => b.addEventListener("click", () => otworzApartament(b.dataset.apartmentId)));
  main.querySelectorAll("[data-month]").forEach((b) => b.addEventListener("click", () => { stan.miesiac = Number(b.dataset.month); pokazWidok("kalendarz", false, false); }));
  document.querySelector("#calendar-search")?.addEventListener("change", (e) => { stan.szukajKalendarz = e.target.value; pokazWidok("kalendarz", false, false); });
  document.querySelector("#rate-portfolio")?.addEventListener("change", (e) => { wyczyscWyborCen(); stan.portfelCen = e.target.value; stan.apartamentCen = ""; pokazWidok("ceny", false, false); });
  document.querySelector("#rate-unit")?.addEventListener("change", (e) => { wyczyscWyborCen(); stan.apartamentCen = e.target.value; pokazWidok("ceny", false, false); });
  document.querySelector("#rate-channel")?.addEventListener("change", (e) => { wyczyscWyborCen(); stan.platformaCen = e.target.value; pokazWidok("ceny", false, false); });
  document.querySelector("#rate-range")?.addEventListener("change", (e) => { wyczyscWyborCen(); stan.zakresDniCen = Number(e.target.value); pokazWidok("ceny", false, false); });
  main.querySelector("[data-rate-go]")?.addEventListener("click", () => { const data = document.querySelector("#rate-go-date").value; if (data) { wyczyscWyborCen(); stan.dataStartCen = data; pokazWidok("ceny", false, false); } });
  main.querySelectorAll("[data-rate-shift]").forEach((b) => b.addEventListener("click", () => {
    const przesuniecie = Number(b.dataset.rateShift) * stan.zakresDniCen;
    const nowaData = dodajDni(stan.dataStartCen, przesuniecie);
    wyczyscWyborCen();
    stan.dataStartCen = nowaData < "2026-09-01" ? "2026-09-01" : nowaData > "2026-12-31" ? "2026-12-31" : nowaData;
    pokazWidok("ceny", false, false);
  }));
  document.querySelector("#slack-auto-status")?.addEventListener("change", (e) => { stan.slackAutoStatus = e.target.checked; pokazKomunikat(e.target.checked ? "Automatyczna zmiana statusu została włączona" : "Automatyczna zmiana statusu została wyłączona"); });
  document.querySelector("#slack-photo-min")?.addEventListener("change", (e) => { stan.slackMinimalnaLiczbaZdjec = Number(e.target.value); pokazWidok("integracje", false, false); pokazKomunikat(`Warunek zmieniono na ${stan.slackMinimalnaLiczbaZdjec} zdjęcia`); });
  document.querySelector("#booking-month")?.addEventListener("change", (e) => { stan.miesiacRezerwacji = Number(e.target.value); pokazWidok("rezerwacje", false, false); });
  main.querySelectorAll("[data-thread-id]").forEach((b) => b.addEventListener("click", () => { stan.wybranyWatek = b.dataset.threadId; pokazWidok("wiadomosci", false, false); }));
  document.querySelector("#reply-form")?.addEventListener("submit", (e) => { e.preventDefault(); const pole = document.querySelector("#reply-input"); if (!pole.value.trim()) return; rezerwacjaPoId(stan.wybranyWatek).wiadomosci.push({ typ: "zespol", autor: "Anna Demo", czas: new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" }), tekst: pole.value.trim() }); pokazWidok("wiadomosci", false, false); pokazKomunikat("Odpowiedź dodano do rozmowy"); });
  filtrApartamentow(); filtrRezerwacji();
}

function pokazWidok(id, zmienAdres = true, przewin = true) {
  const widok = widoki[id] ? id : "pulpit"; stan.widok = widok; zamknijPanel(); main.innerHTML = widoki[widok]();
  document.querySelectorAll("[data-view]").forEach((el) => el.classList.toggle("is-active", el.dataset.view === widok));
  if (zmienAdres) history.replaceState(null, "", `#${widok}`); navMobile.hidden = true; document.querySelector("#menu-button").setAttribute("aria-expanded", "false"); podlaczAkcjeWidoku();
  if (przewin) { main.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: "smooth" }); }
}

document.querySelectorAll("[data-view]").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); pokazWidok(el.dataset.view); }));
document.querySelector("#menu-button").addEventListener("click", (e) => { const otwarte = e.currentTarget.getAttribute("aria-expanded") === "true"; e.currentTarget.setAttribute("aria-expanded", String(!otwarte)); navMobile.hidden = otwarte; });
document.querySelector(".icon-button").addEventListener("click", () => pokazKomunikat("Masz 3 nowe powiadomienia operacyjne"));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") zamknijPanel(); });
window.addEventListener("hashchange", () => pokazWidok(location.hash.slice(1), false));
pokazWidok(location.hash.slice(1) || "pulpit", false);
