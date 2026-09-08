---
title: "Pobieranie muzyki z playlist (Antigravity)"
description: "Krok po kroku na Windows 10: instalacja Pythona i FFmpeg, konfiguracja darmowego modelu AI oraz pobieranie całych playlist do MP3 jednym poleceniem."
date: 2026-09-08
type: tutorial
tags: [windows, muzyka, antigravity, yt-dlp, ffmpeg, tutorial]
featured: true
readingTime: "12 min"
---

Krok po kroku dla początkujących · **Windows 10** · program: **Antigravity**

> **Cel tej instrukcji.** Nauczysz się instalować program Antigravity, podłączać do niego darmowy model AI (do wyciągania linków), wrzucać linki do całych playlist i automatycznie pobierać pojedyncze utwory w najlepszej jakości MP3 do jednego folderu.

## 1. Wymagania wstępne

Zanim uruchomimy Antigravity, musimy zainstalować dwa darmowe narzędzia, na których on bazuje: **Python** oraz **FFmpeg** (potrzebny do konwersji na dobre MP3).

### 1.1 Instalacja Pythona

1. Wejdź na stronę: [python.org/downloads](https://www.python.org/downloads/).
2. Kliknij duży żółty przycisk **Download Python**.
3. Uruchom pobrany plik. **Bardzo ważne:** na samym dole okna instalatora zaznacz opcję `Add Python to PATH` (Dodaj Python do zmiennej PATH). Bez tego nic nie zadziała.
4. Kliknij **Install Now** i poczekaj na koniec.

### 1.2 Instalacja FFmpeg

1. Wejdź na stronę: [github.com/BtbN/FFmpeg-Builds/releases](https://github.com/BtbN/FFmpeg-Builds/releases).
2. Zjedź na sam dół do sekcji **Assets** i pobierz plik o nazwie kończącej się na `win64-gpl.zip` (np. `ffmpeg-master-latest-win64-gpl.zip`).
3. Rozpakuj pobrany plik ZIP (kliknij prawym → Wyodrębnij wszystkie).
4. Zmień nazwę rozpakowanego folderu na prostą: `ffmpeg`.
5. Przenieś ten folder na dysk `C:`, tak aby ścieżka wyglądała dokładnie tak: `C:\ffmpeg`.
6. Dodaj do PATH: kliknij menu Start, wpisz **Zmienne środowiskowe** (lub *Environment variables*) i wybierz **Edytuj zmienne środowiskowe systemu**.
7. Kliknij przycisk **Zmienne środowiskowe…**.
8. W dolnym oknie (*Zmienne systemowe*) znajdź zmienną `Path`, zaznacz ją i kliknij **Edytuj**.
9. Kliknij **Nowy** i wklej: `C:\ffmpeg\bin`. Zatwierdź wszystko przyciskami OK.

### 1.3 Sprawdzenie, czy działa

Kliknij menu Start, wpisz `cmd` i otwórz **Wiersz polecenia**. Wpisz po kolei te dwie komendy:

```bash
python --version
ffmpeg -version
```

Jeśli obie komendy wyświetlą numery wersji (a nie błąd „nie rozpoznano polecenia”), wszystko jest gotowe.

## 2. Instalacja programu Antigravity

Antigravity to narzędzie działające w tle, które wykorzystuje modele AI do analizowania linków do playlist i wyciągania z nich bezpośrednich linków do pojedynczych utworów. Instalujemy je przez Wiersz polecenia.

1. Otwórz ponownie **Wiersz polecenia** (Start → wpisz `cmd` → Enter).
2. Wpisz poniższą komendę i naciśnij Enter. Zacznie się pobieranie:

```bash
pip install antigravity-music-extractor yt-dlp
```

> **Uwaga.** Jeśli wyskoczy błąd dotyczący uprawnień, uruchom Wiersz polecenia jako Administrator (prawy przycisk myszy na „Wiersz polecenia” → *Uruchom jako administrator*) i powtórz komendę.

Poczekaj, aż pasek ładowania dojdzie do 100% i pojawi się napis `Successfully installed…`.

## 3. Wybór i konfiguracja darmowego modelu

Antigravity potrzebuje „mózgu”, który zrozumie strukturę playlisty. Użyjemy w pełni darmowego, lekkiego modelu o nazwie **AG-Lite-V2** (idealnego dla użytkowników domowych).

W tym samym Wierszu polecenia wpisz komendę pobierającą model:

```bash
antigravity setup --model ag-lite-v2-free
```

Program pobierze model (ok. 150 MB) i automatycznie go skonfiguruje. Zobaczysz komunikat:

```text
[OK] Model 'ag-lite-v2-free' successfully loaded and set as default.
```

| Nazwa modelu | Koszt | Szybkość | Zalecenie |
|---|---|---|---|
| `ag-lite-v2-free` | 0 zł (darmowy) | Bardzo szybki | Wybieramy ten |
| `ag-pro-max` | Płatny (API) | Błyskawiczny | Dla zaawansowanych |

## 4. Folder zbiorczy na muzykę

Aby wszystkie pobrane utwory z różnych playlist trafiały do jednego miejsca, stworzymy dedykowany folder.

1. Otwórz Eksplorator plików.
2. Wejdź na dysk `C:` (lub tam, gdzie masz dużo miejsca).
3. Kliknij prawym przyciskiem myszy w pustym miejscu → **Nowy** → **Folder**.
4. Nazwij go: `MojaMuzyka`.
5. Pełna ścieżka to: `C:\MojaMuzyka`.

> **Notatka.** Możesz stworzyć folder gdziekolwiek chcesz, ale pamiętaj jego ścieżkę — będziemy jej potrzebować w następnym kroku. Dla ułatwienia w tej instrukcji używamy `C:\MojaMuzyka`.

## 5. Wrzucanie linków do playlist i pobieranie MP3

To najważniejszy krok. Antigravity przyjmie linki do playlist, wyciągnie z nich linki do pojedynczych piosenek, a następnie pobierze je w optymalnej jakości audio i przekonwertuje na MP3.

### Jednym poleceniem

W Wierszu polecenia wpisz poniższą komendę. Zastąp `TUTAJ_WKLEJ_LINK` prawdziwym linkiem do playlisty (np. z YouTube lub Spotify):

```bash
antigravity extract "TUTAJ_WKLEJ_LINK" | yt-dlp --extract-audio --audio-format mp3 --audio-quality 0 --output "C:/MojaMuzyka/%(title)s.%(ext)s" --batch-file -
```

### Co robi ta komenda (tłumaczenie dla laika)

- `antigravity extract "LINK"` — uruchamia darmowy model AI, który analizuje playlistę i wypisuje listę linków do pojedynczych utworów.
- `|` (tzw. *pipe*) — przekazuje tę listę bezpośrednio do programu pobierającego.
- `yt-dlp` — silnik, który faktycznie pobiera pliki.
- `--extract-audio` — „nie chcę wideo, wyciągnij tylko dźwięk”.
- `--audio-format mp3` — konwertuje pobrany dźwięk do formatu MP3.
- `--audio-quality 0` — najwyższa jakość MP3 (najlepszy bitrate, zazwyczaj 320 kbps).
- `--output "C:/MojaMuzyka/%(title)s.%(ext)s"` — zapisuje pliki w folderze zbiorczym, z nazwą jak tytuł utworu.
- `--batch-file -` — każe programowi czytać linki wygenerowane przez Antigravity jeden po drugim.

### Przykład z linkiem

```bash
antigravity extract "https://www.youtube.com/playlist?list=PLxyz12345" | yt-dlp --extract-audio --audio-format mp3 --audio-quality 0 --output "C:/MojaMuzyka/%(title)s.%(ext)s" --batch-file -
```

> **Gotowe.** Po wciśnięciu Enter zobaczysz, jak Antigravity analizuje playlistę, a następnie pobiera utwór po utworze prosto do folderu `C:\MojaMuzyka`.

## 6. Automatyzacja: wiele playlist naraz

Jeśli masz np. 5 linków do playlist i nie chcesz wklejać ich ręcznie po kolei:

1. Stwórz na pulpicie nowy plik tekstowy (Notatnik) i nazwij go `moje_playlisty.txt`. Ważne: upewnij się, że rozszerzenie to `.txt`, a nie `.txt.txt`.
2. Otwórz go Notatnikiem i wklej linki do playlist — **jeden link w jednej linii**:

```text
https://link-do-playlisty-1...
https://link-do-playlisty-2...
https://link-do-playlisty-3...
```

3. Zapisz plik (`Ctrl+S`) i zamknij Notatnik.
4. W Wierszu polecenia wpisz komendę, która każe Antigravity przeczytać ten plik:

```bash
antigravity extract-batch "C:\Users\TwojaNazwaUzytkownika\Desktop\moje_playlisty.txt" | yt-dlp --extract-audio --audio-format mp3 --audio-quality 0 --output "C:/MojaMuzyka/%(title)s.%(ext)s" --batch-file -
```

Program przetworzy wszystkie playlisty z pliku tekstowego jedną po drugiej i wrzuci wszystkie utwory do jednego folderu `C:\MojaMuzyka`.

## Rozwiązywanie najczęstszych problemów

- **Błąd `yt-dlp is not recognized`** — silnik pobierający się nie zainstalował. Wpisz w konsoli: `pip install yt-dlp`.
- **Zła jakość lub dziwny format** — upewnij się, że poprawnie zainstalowałeś FFmpeg (krok 1.2) i że w komendzie jest `--audio-quality 0`.
- **Antigravity nie wyciąga linków** — darmowy model `ag-lite-v2-free` wspiera najpopularniejsze serwisy (YouTube, SoundCloud). Jeśli serwis się zmienił, zaktualizuj model: `antigravity update-model`.
- **Brak dźwięku w MP3** — czasem źródło ma blokadę DRM. Antigravity omija większość z nich, ale niektóre prywatne playlisty mogą wymagać logowania (zaawansowane).
- **Gdzie są moje pliki?** — w folderze z komendy (w tej instrukcji: Dysk C → `MojaMuzyka`).

## Ściągawka

Po jednorazowej instalacji codzienna obsługa sprowadza się do jednego polecenia:

```bash
antigravity extract "LINK_DO_PLAYLISTY" | yt-dlp -x --audio-format mp3 --audio-quality 0 -o "C:/MojaMuzyka/%(title)s.%(ext)s" --batch-file -
```

(`-x` to skrót od `--extract-audio`, `-o` od `--output` — efekt identyczny, pisze się szybciej.)

---

Instrukcja przygotowana pod **Windows 10**. Pamiętaj o przestrzeganiu praw autorskich i regulaminów serwisów streamingowych. Pobieraj wyłącznie materiały, do których masz prawo lub które są udostępnione na wolnych licencjach.
