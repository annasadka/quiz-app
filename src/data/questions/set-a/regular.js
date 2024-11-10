const questions = [
    {
        id: 1,
        chapter: "Podstawy testowania",
        subchapter: "Cele testowania",
        question: "Która z poniższych odpowiedzi opisuje poprawny cel testów?",
        options: [
            {
                label: "A",
                content: "Udowodnienie, że w systemie podlegającym testowaniu nie występują żadne nieusunięte defekty.",
                explanation: "Odpowiedź niepoprawna. Nie da się udowodnić, że w systemie podlegającym testowaniu nie występują już żadne defekty. Patrz zasada testowania nr 1."
            },
            {
                label: "B",
                content: "Udowodnienie, że po wprowadzeniu systemu do eksploatacji nie będą występowały żadne awarie.",
                explanation: "Odpowiedź niepoprawna. Patrz zasada testowania nr 7."
            },
            {
                label: "C",
                content: "Obniżenie poziomu ryzyka związanego z przedmiotem testów i zwiększenie zaufania do jego jakości.",
                explanation: "Odpowiedź poprawna. Testowanie pozwala wykryć defekty i awarie, co przekłada się na obniżenie poziomu ryzyka, a jednocześnie na zwiększenie zaufania do jakości przedmiotu testów."
            },
            {
                label: "D",
                content: "Sprawdzenie, czy nie pozostały żadne nieprzetestowane kombinacje danych wejściowych.",
                explanation: "Odpowiedź niepoprawna. Przetestowanie wszystkich kombinacji danych wejściowych nie jest możliwe (patrz zasada testowania nr 2)."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 2,
        chapter: "Podstawy testowania",
        subchapter: "Czynności w procesie testowym",
        question: "Które z poniższych stwierdzeń zawiera przykład czynności testowych, które przyczyniają się do powodzenia projektu?",
        options: [
            {
                label: "A",
                content: "Zaangażowanie testerów w różne działania podejmowane w ramach cyklu wytwarzania oprogramowania (SDLC) pomaga wykryć defekty w produktach pracy.",
                explanation: "Odpowiedź poprawna. Należy zadbać o zaangażowanie testerów od samego początku cyklu wytwarzania oprogramowania, ponieważ umożliwia to lepsze zrozumienie decyzji projektowych i sprzyja wczesnemu wykrywaniu defektów."
            },
            {
                label: "B",
                content: "Testerzy starają się nie przeszkadzać programistom na etapie pisania kodu, aby umożliwić im tworzenie kodu o wyższej jakości.",
                explanation: "Odpowiedź niepoprawna. Programiści i testerzy powinni wzajemnie poznawać swoje produkty pracy, ponieważ dzięki temu poszerzają swoją wiedzę na temat sposobów testowania kodu."
            },
            {
                label: "C",
                content: "Współpraca testerów z użytkownikami pozwala podnieść jakość raportów o defektach podczas testowania integracji modułów i testowania systemowego.",
                explanation: "Odpowiedź niepoprawna. Użytkownicy końcowi nie pomagają testerom w podnoszeniu jakości raportów o defektach; ponadto, użytkownicy zazwyczaj nie uczestniczą w testach niskopoziomowych."
            },
            {
                label: "D",
                content: "Certyfikowani testerzy projektują znacznie lepsze przypadki testowe niż testerzy, którzy nie posiadają certyfikatu.",
                explanation: "Odpowiedź niepoprawna. Posiadanie certyfikatu nie oznacza automatycznie, że tester będzie lepszy w projektowaniu testów."
            },
        ],
        correctAnswer: 0
    },
    {
        id: 3,
        chapter: "Podstawy testowania",
        subchapter: "Zasady testowania",
        question: "Rozpoczynasz pracę jako tester w zespole opracowującym nowy system metodą przyrostową. Zauważasz, że od kilku iteracji nie wprowadzono żadnych zmian w przypadkach testowych używanych do testowania regresji, a także nie zidentyfikowano żadnych nowych defektów związanych z regresją. Twój kierownik jest zadowolony — w przeciwieństwie do ciebie. Która zasada testowania uzasadnia twój sceptycyzm?",
        options: [
            {
                label: "A",
                content: "Testy ulegają zużyciu.",
                explanation: "Odpowiedź poprawna. Zasada ta oznacza, że ciągłe powtarzanie tych samych testów prowadzi do sytuacji, w której przestają one w pewnym momencie wykrywać nowe defekty."
            },
            {
                label: "B",
                content: "Przekonanie o braku defektów jest błędem.",
                explanation: "Odpowiedź niepoprawna. Ta zasada mówi o mylnym przekonaniu, że samo wykrycie i usunięcie dużej liczby defektów zapewni pomyślne wdrożenie systemu."
            },
            {
                label: "C",
                content: "Defekty mogą się kumulować.",
                explanation: "Odpowiedź niepoprawna. Ta zasada mówi, że niewielka liczba modułów zwykle zawiera większość defektów."
            },
            {
                label: "D",
                content: "Testowanie gruntowne jest niemożliwe.",
                explanation: "Odpowiedź niepoprawna. Ta zasada mówi, że przetestowanie wszystkich kombinacji danych wejściowych i warunków wstępnych nie jest możliwe."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 4,
        chapter: "Podstawy testowania",
        subchapter: "Proces testowy",
        question: "Pracujesz w zespole, który tworzy aplikację mobilną do zamawiania posiłków. Zespół postanowił, że w bieżącej iteracji ma zostać zaimplementowana funkcjonalność obsługi płatności. Która z wymienionych czynności jest elementem analizy testów?",
        options: [
            {
                label: "A",
                content: "Oszacowanie, że testowanie integracji z usługą płatniczą potrwa 8 osobodni.",
                explanation: "Odpowiedź niepoprawna. Szacowanie pracochłonności testów jest elementem planowania testów."
            },
            {
                label: "B",
                content: "Podjęcie decyzji, że zespół powinien przetestować, czy istnieje możliwość prawidłowego podziału płatności między kilku użytkowników.",
                explanation: "Odpowiedź poprawna. Jest to przykład definiowania warunków testowych, co wchodzi w zakres analizy testów."
            },
            {
                label: "C",
                content: "Zastosowanie metody analizy wartości brzegowych w celu opracowania danych testowych na potrzeby przypadków testowych, które sprawdzają prawidłowość przetwarzania płatności w minimalnej dozwolonej kwocie.",
                explanation: "Odpowiedź niepoprawna. Wyprowadzanie elementów pokrycia przy użyciu technik testowania wchodzi w zakres projektowania testów."
            },
            {
                label: "D",
                content: "Przeanalizowanie rozbieżności między rzeczywistym a oczekiwanym rezultatem po wykonaniu przypadku testowego sprawdzającego przetwarzanie płatności kartą kredytową, a następnie zgłoszenie defektu.",
                explanation: "Odpowiedź niepoprawna. Zgłaszanie defektów wykrytych podczas testowania dynamicznego jest elementem wykonywania testów."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        chapter: "Podstawy testowania",
        subchapter: "Podejście do testów",
        question: "Które z poniższych czynników (i–v) mają ISTOTNY wpływ na podejście do testów? i. Cykl życia wytwarzania oprogramowania (SDLC). ii. Liczba defektów wykrytych w poprzednich projektach. iii. Zidentyfikowane ryzyka produktowe. iv. Nowe wymagania wynikające z przepisów wymuszające formalne testowanie białoskrzynkowe. v. Konfiguracja środowiska testowego.",
        options: [
            {
                label: "A",
                content: "i oraz ii mają istotny wpływ.",
                explanation: "Odpowiedź niepoprawna. Liczba defektów z poprzednich projektów nie ma istotnego wpływu na podejście do testów."
            },
            {
                label: "B",
                content: "i, iii oraz iv mają istotny wpływ.",
                explanation: "Odpowiedź poprawna. Cykl SDLC, ryzyka produktowe i wymagania prawne to istotne czynniki wpływające na podejście do testów."
            },
            {
                label: "C",
                content: "ii, iv oraz v mają istotny wpływ.",
                explanation: "Odpowiedź niepoprawna. Konfiguracja środowiska testowego nie ma istotnego wpływu na podejście do testów."
            },
            {
                label: "D",
                content: "iii oraz v mają istotny wpływ.",
                explanation: "Odpowiedź niepoprawna. Konfiguracja środowiska testowego nie ma istotnego wpływu na podejście do testów."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 6,
        chapter: "Podstawy testowania",
        subchapter: "Role w testowaniu",
        question: "Wskaż DWA z wymienionych poniżej zadań, które są przypisane GŁÓWNIE do roli związanej z testowaniem.",
        options: [
            {
                label: "A",
                content: "Konfigurowanie środowiska testowego.",
                explanation: "Odpowiedź poprawna. Zadanie to jest wykonywane przez testerów."
            },
            {
                label: "B",
                content: "Prowadzenie backlogu produktu.",
                explanation: "Odpowiedź niepoprawna. Backlog produktu tworzy i utrzymuje właściciel produktu."
            },
            {
                label: "C",
                content: "Projektowanie rozwiązań dla nowych wymagań.",
                explanation: "Odpowiedź niepoprawna. Zadanie to jest wykonywane przez zespół tworzący oprogramowanie."
            },
            {
                label: "D",
                content: "Tworzenie planu testów.",
                explanation: "Odpowiedź niepoprawna. Zadanie to wchodzi w zakres obowiązków kierownika."
            },
            {
                label: "E",
                content: "Analizowanie podstawy testów.",
                explanation: "Odpowiedź poprawna. Zadanie to jest wykonywane przez testerów, ponieważ jest to zadanie techniczne wykonywane jako część analizy testów."
            }
        ],
        correctAnswer: [0, 4],
        multipleChoice: true
    },
    {
        id: 7,
        chapter: "Podstawy testowania",
        subchapter: "Umiejętności testera",
        question: "Które z poniższych umiejętności (i–v) są NAJBARDZIEJ ISTOTNYMI umiejętnościami w pracy testera? i. Posiadanie wiedzy merytorycznej. ii. Tworzenie wizji produktu. iii. Umiejętność sprawnej pracy w zespole. iv. Planowanie i organizowanie pracy zespołu. v. Krytyczne myślenie.",
        options: [
            {
                label: "A",
                content: "Umiejętności ii oraz iv.",
                explanation: "Odpowiedź niepoprawna. Tworzenie wizji produktu i planowanie pracy zespołu nie są głównymi umiejętnościami testera."
            },
            {
                label: "B",
                content: "Umiejętności i, iii oraz v.",
                explanation: "Odpowiedź poprawna. Wiedza merytoryczna, praca zespołowa i krytyczne myślenie to kluczowe umiejętności testera."
            },
            {
                label: "C",
                content: "Umiejętności i, ii oraz v.",
                explanation: "Odpowiedź niepoprawna. Tworzenie wizji produktu nie jest główną umiejętnością testera."
            },
            {
                label: "D",
                content: "Umiejętności iii oraz iv.",
                explanation: "Odpowiedź niepoprawna. Planowanie pracy zespołu nie jest główną umiejętnością testera."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        chapter: "Podstawy testowania",
        subchapter: "Podejście całego zespołu",
        question: "W jaki sposób podejście 'cały zespół' uwidacznia się w kontaktach testerów z przedstawicielami jednostek biznesowych?",
        options: [
            {
                label: "A",
                content: "Przedstawiciele jednostek biznesowych decydują o podejściu do automatyzacji testów.",
                explanation: "Odpowiedź niepoprawna. Podejście do automatyzacji testów określają testerzy z pomocą programistów i przedstawicieli jednostek biznesowych."
            },
            {
                label: "B",
                content: "Testerzy pomagają przedstawicielom jednostek biznesowych w określaniu strategii testów.",
                explanation: "Odpowiedź niepoprawna. Decyzję o wyborze strategii testów podejmuje się w porozumieniu z programistami."
            },
            {
                label: "C",
                content: "Przedstawiciele jednostek biznesowych nie są objęci podejściem opartym na zaangażowaniu całego zespołu.",
                explanation: "Odpowiedź niepoprawna. Podejście oparte na zaangażowaniu całego zespołu obejmuje testerów, programistów i przedstawicieli jednostek biznesowych."
            },
            {
                label: "D",
                content: "Testerzy pomagają przedstawicielom jednostek biznesowych w tworzeniu odpowiednich testów akceptacyjnych.",
                explanation: "Odpowiedź poprawna. Testerzy ściśle współpracują z przedstawicielami jednostek biznesowych, aby zagwarantować osiągnięcie wymaganych poziomów jakości."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 9,
        chapter: "Modele wytwarzania oprogramowania",
        subchapter: "Modele cyklu wytwarzania oprogramowania",
        question: "Zastanów się nad następującą zasadą: 'Do każdej czynności związanej z wytwarzaniem oprogramowania (SDLC) powinna być przypisana odpowiadająca jej czynność testowa'. W których modelach cyklu wytwarzania oprogramowania (SDLC) obowiązuje ta zasada?",

        options: [
            {
                label: "A",
                content: "Tylko w sekwencyjnych modelach wytwarzania oprogramowania.",
                explanation: "Odpowiedź niepoprawna. Ta zasada dotyczy wszystkich modeli wytwarzania oprogramowania."
            },
            {
                label: "B",
                content: "Tylko w iteracyjnych modelach wytwarzania oprogramowania.",
                explanation: "Odpowiedź niepoprawna. Ta zasada dotyczy wszystkich modeli wytwarzania oprogramowania."
            },
            {
                label: "C",
                content: "Tylko w iteracyjnych i przyrostowych modelach wytwarzania oprogramowania.",
                explanation: "Odpowiedź niepoprawna. Ta zasada dotyczy wszystkich modeli wytwarzania oprogramowania."
            },
            {
                label: "D",
                content: "W sekwencyjnych, przyrostowych i iteracyjnych modelach wytwarzania oprogramowania.",
                explanation: "Odpowiedź poprawna. Ta zasada odnosi się do wszystkich modeli wytwarzania oprogramowania."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 10,
        chapter: "Modele wytwarzania oprogramowania",
        subchapter: "ATDD",
        question: "Które z poniższych stwierdzeń NAJLEPIEJ opisuje wytwarzanie sterowane testami akceptacyjnymi (ATTD)?",
        options: [
            {
                label: "A",
                content: "W modelu ATDD kryteria akceptacji są zwykle tworzone w formacie Given/When/Then (Mając/Kiedy/Wtedy).",
                explanation: "Odpowiedź niepoprawna. Podejście to jest częściej stosowane w modelu wytwarzania sterowanego zachowaniem (BDD)."
            },
            {
                label: "B",
                content: "W modelu ATDD przypadki testowe są zwykle tworzone na etapie testowania modułowego i są ukierunkowane na kod.",
                explanation: "Odpowiedź niepoprawna. Jest to opis wytwarzania sterowanego testami (TDD)."
            },
            {
                label: "C",
                content: "W modelu ATDD testy są tworzone na podstawie kryteriów akceptacji i określają sposób tworzenia związanego z nimi oprogramowania.",
                explanation: "Odpowiedź poprawna. W modelu ATDD testy są pisane na podstawie kryteriów akceptacji w ramach procesu projektowania."
            },
            {
                label: "D",
                content: "W modelu ATDD testy są tworzone na podstawie pożądanego zachowania oprogramowania, co ułatwia członkom zespołu ich zrozumienie.",
                explanation: "Odpowiedź niepoprawna. Metoda ta jest stosowana w modelu wytwarzania sterowanego zachowaniem (BDD)."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 11,
        chapter: "Modele wytwarzania oprogramowania",
        subchapter: "Przesunięcie w lewo",
        question: "Które z poniższych stwierdzeń NIE jest przykładem przesunięcia w lewo (ang. shift left)?",
        options: [
            {
                label: "A",
                content: "Dokonywanie przeglądu wymagań użytkowników przed ich formalnym zaakceptowaniem przez interesariuszy.",
                explanation: "Odpowiedź niepoprawna. Dokonywanie przeglądu na wczesnym etapie jest przykładem podejścia przesunięcie w lewo."
            },
            {
                label: "B",
                content: "Pisanie testu modułowego przed napisaniem odpowiadającego mu kodu.",
                explanation: "Odpowiedź niepoprawna. Wytwarzanie sterowane testami (TDD) jest przykładem podejścia przesunięcie w lewo."
            },
            {
                label: "C",
                content: "Wykonywanie testu wydajności modułu w trakcie testowania modułowego.",
                explanation: "Odpowiedź niepoprawna. Testowanie niefunkcjonalne na wczesnym etapie jest przykładem podejścia przesunięcie w lewo."
            },
            {
                label: "D",
                content: "Pisanie skryptu testowego przed ustanowieniem procesu zarządzania konfiguracją.",
                explanation: "Odpowiedź poprawna. Skrypty testowe powinny być objęte zarządzaniem konfiguracją, w związku z czym tworzenie ich przed ustanowieniem tego procesu nie ma sensu."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 12,
        chapter: "Modele wytwarzania oprogramowania",
        subchapter: "Retrospektywy",
        question: "Którego z poniższych argumentów należałoby użyć, aby przekonać kierownika do organizowania retrospektyw na zakończenie każdego cyklu przekazywania oprogramowania do eksploatacji?",
        options: [
            {
                label: "A",
                content: "Retrospektywy są obecnie bardzo popularne, dlatego klienci byliby zadowoleni, gdybyśmy uwzględnili je w naszych procesach.",
                explanation: "Odpowiedź niepoprawna. Celem retrospektyw jest raczej wskazanie możliwości wprowadzania udoskonaleń, natomiast ich znaczenie dla klientów jest niewielkie."
            },
            {
                label: "B",
                content: "Organizowanie retrospektyw przyniesie organizacji wymierne oszczędności, ponieważ przedstawiciele użytkowników nie przekazują natychmiastowych informacji zwrotnych na temat produktu.",
                explanation: "Odpowiedź niepoprawna. Retrospektywy nie mają na celu zbierania informacji zwrotnych na temat produktu, ale na temat procesu."
            },
            {
                label: "C",
                content: "Słabe punkty procesów zidentyfikowane podczas retrospektywy można przeanalizować, a następnie wykorzystać do opracowania listy działań, które będą podejmowane w ramach prowadzonego przez organizację programu ciągłego doskonalenia procesów.",
                explanation: "Odpowiedź poprawna. Regularnie przeprowadzane retrospektywy połączone z odpowiednimi działaniami weryfikacyjnymi mają kluczowe znaczenie dla ciągłego doskonalenia procesów wytwarzania i testowania oprogramowania."
            },
            {
                label: "D",
                content: "Retrospektywy realizują pięć wartości (do których należą między innymi odwaga i szacunek), które są kluczowe dla utrzymania procesu ciągłego doskonalenia w organizacji.",
                explanation: "Odpowiedź niepoprawna. Odwaga i szacunek to wartości związane z programowaniem ekstremalnym (XP), które nie mają ścisłego związku z retrospektywami."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 13,
        chapter: "Poziomy testów",
        subchapter: "Typy awarii",
        question: "Które typy awarii (1–4) NAJLEPIEJ odpowiadają poszczególnym poziomom testów (A–D)? 1. Awarie związane z zachowaniem systemu, polegające na niezgodności z potrzebami biznesowymi użytkownika. 2. Awarie dotyczące komunikacji między modułami. 3. Awarie dotyczące logiki danego modułu. 4. Awarie związane z nieprawidłowo zaimplementowanymi regułami biznesowymi.",
        options: [
            {
                label: "A",
                content: "1D, 2B, 3A, 4C",
                explanation: "Odpowiedź poprawna. Podstawą testów w testowaniu akceptacyjnym są potrzeby biznesowe użytkownika (1D). Wymianę danych między modułami testuje się na etapie testowania integracji modułów (2B). Awarie na poziomie logiki można wykryć w trakcie testowania modułowego (3A). Reguły biznesowe są podstawą testów w testowaniu systemowym (4C)."
            },
            {
                label: "B",
                content: "1D, 2B, 3C, 4A",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "C",
                content: "1B, 2A, 3D, 4C",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "1C, 2B, 3A, 4D",
                explanation: "Odpowiedź niepoprawna."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 14,
        chapter: "Poziomy testów",
        subchapter: "Rodzaje testów",
        question: "Testujesz historyjkę użytkownika, z którą są związane trzy kryteria akceptacji: KA1, KA2 i KA3. Kryterium KA1 jest pokryte przez przypadek testowy PT1, kryterium KA2 przez przypadek PT2, a kryterium KA3 przez przypadek PT3. Z historii wykonywania testów wynika, że wykonano trzy przebiegi testów w trzech kolejnych wersjach oprogramowania: \n\nPrzebieg 1:\nPT1 (1) Niezaliczony\nPT2 (2) Zaliczony\nPT3 (3) Niezaliczony\n\nPrzebieg 2:\nPT1 (4) Zaliczony\nPT2 (5) Niezaliczony\nPT3 (6) Niezaliczony\n\nPrzebieg 3:\nPT1 (7) Zaliczony\nPT2 (8) Zaliczony\nPT3 (9) Zaliczony\n\nTesty są powtarzane dopiero po otrzymaniu informacji, że wszystkie defekty wykryte w ramach poprzednich przebiegów testów zostały usunięte i że dostępna jest nowa wersja oprogramowania. Które z powyższych testów są wykonywane jako testy regresji?",
        options: [
            {
                label: "A",
                content: "Tylko 4, 7, 8 i 9.",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "B",
                content: "Tylko 5 i 7.",
                explanation: "Odpowiedź poprawna. Przypadek testowy PT2 został zaliczony w przebiegu 1, dlatego test (5) to test regresji. Przypadek testowy PT1 został zaliczony w przebiegu 2, dlatego test (7) to również test regresji."
            },
            {
                label: "C",
                content: "Tylko 4, 6, 8 i 9.",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "Tylko 5 i 6.",
                explanation: "Odpowiedź niepoprawna."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 15,
        chapter: "Testowanie statyczne",
        subchapter: "Korzyści z testowania statycznego",
        question: "Które z poniższych stwierdzeń NIE opisuje korzyści wynikających z testowania statycznego?",
        options: [
            {
                label: "A",
                content: "Obniżenie kosztów zarządzania defektami z uwagi na łatwość wykrywania defektów na późniejszych etapach cyklu wytwarzania oprogramowania.",
                explanation: "Odpowiedź poprawna. Zarządzanie defektami nie jest mniej kosztowne. Koszty wykrywania i usuwania defektów na późniejszych etapach cyklu wytwarzania oprogramowania są w istocie wyższe."
            },
            {
                label: "B",
                content: "Niższe koszty usuwania defektów wykrytych podczas testowania statycznego w porównaniu z usuwaniem defektów wykrytych podczas testowania dynamicznego.",
                explanation: "Odpowiedź niepoprawna. Jest to korzyść wynikająca z testowania statycznego."
            },
            {
                label: "C",
                content: "Wykrywanie defektów w kodzie, które mogłyby nie zostać wykryte w przypadku wykonania wyłącznie testowania dynamicznego.",
                explanation: "Odpowiedź niepoprawna. Jest to korzyść wynikająca z testowania statycznego."
            },
            {
                label: "D",
                content: "Wykrywanie luk i niespójności w wymaganiach.",
                explanation: "Odpowiedź niepoprawna. Jest to korzyść wynikająca z testowania statycznego."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 16,
        chapter: "Testowanie statyczne",
        subchapter: "Wczesne informacje zwrotne",
        question: "Które z poniższych jest korzyścią wynikającą z wczesnego i częstego otrzymywania informacji zwrotnych?",
        options: [
            {
                label: "A",
                content: "Usprawnienie procesu testowego na potrzeby przyszłych projektów.",
                explanation: "Odpowiedź niepoprawna. Informacje zwrotne pozwalają usprawnić proces testowy, ale jeśli usprawnienia mają dotyczyć jedynie przyszłych projektów, informacje takie nie muszą być przekazywane na wczesnym etapie, ani z dużą częstotliwością."
            },
            {
                label: "B",
                content: "Zmuszanie klientów do ustalania priorytetów wymagań na podstawie uzgodnionych ryzyk.",
                explanation: "Odpowiedź niepoprawna. Informacje zwrotne nie są wykorzystywane do ustalania priorytetów wymagań."
            },
            {
                label: "C",
                content: "Jest to jedyny sposób mierzenia jakości zmian.",
                explanation: "Odpowiedź niepoprawna. Nie ma jednego, zalecanego sposobu pomiaru jakości zmian."
            },
            {
                label: "D",
                content: "Unikanie nieporozumień w kwestii wymagań.",
                explanation: "Odpowiedź poprawna. Wczesne i częste informacje zwrotne mogą zapobiec nieporozumieniom dotyczącym wymagań."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 17,
        chapter: "Przeglądy",
        subchapter: "Typy przeglądów",
        question: "Przeglądy przeprowadzane w organizacji mają następujące atrybuty:\n- Wyznaczono osobę pełniącą rolę protokolanta.\n- Głównym celem jest dokonywanie oceny jakości.\n- Spotkanie związane z przeglądem prowadzi autor produktu pracy.\n- Uczestnicy przygotowują się indywidualnie.\n- Sporządzany jest raport z przeglądu.\n\nKtóry z poniższych typów przeglądu jest NAJPRAWDOPODOBNIEJ stosowany?",
        options: [
            {
                label: "A",
                content: "Przegląd nieformalny.",
                explanation: "Odpowiedź niepoprawna. Przeglądy nieformalne nie mają formalnie przypisanych ról."
            },
            {
                label: "B",
                content: "Przejrzenie.",
                explanation: "Odpowiedź poprawna. Wszystkie wymienione atrybuty są charakterystyczne dla przejrzenia."
            },
            {
                label: "C",
                content: "Przegląd techniczny.",
                explanation: "Odpowiedź niepoprawna. W przeglądzie technicznym autor nie prowadzi spotkania."
            },
            {
                label: "D",
                content: "Inspekcja.",
                explanation: "Odpowiedź niepoprawna. W inspekcji autor nie prowadzi spotkania."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        chapter: "Przeglądy",
        subchapter: "Czynniki sukcesu przeglądu",
        question: "Który z wymienionych elementów NIE jest czynnikiem przyczyniającym się do powodzenia przeglądu?",
        options: [
            {
                label: "A",
                content: "Przeznaczenie przez uczestników odpowiedniej ilości czasu na przeprowadzenie przeglądu.",
                explanation: "Odpowiedź niepoprawna. Jest to czynnik sukcesu przeglądu."
            },
            {
                label: "B",
                content: "Podzielenie dużych produktów pracy na mniejsze części w celu zmniejszenia wymaganych nakładów pracy.",
                explanation: "Odpowiedź niepoprawna. Jest to czynnik sukcesu przeglądu."
            },
            {
                label: "C",
                content: "Uczestnicy powinni unikać zachowań, które mogłyby wskazywać na znudzenie, irytację bądź wrogie nastawienie wobec innych uczestników.",
                explanation: "Odpowiedź niepoprawna. Jest to czynnik sukcesu przeglądu."
            },
            {
                label: "D",
                content: "Przyjmowanie do wiadomości, potwierdzanie i rozpatrywanie wykrytych awarii w obiektywny sposób.",
                explanation: "Odpowiedź poprawna. Podczas przeglądów można wykryć defekty, a nie awarie."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 19,
        chapter: "Techniki testowania",
        subchapter: "Kategorie technik testowania",
        question: "Która z poniższych cech charakteryzuje techniki testowania oparte na doświadczeniu?",
        options: [
            {
                label: "A",
                content: "Przypadki testowe są tworzone na podstawie szczegółowych informacji projektowych.",
                explanation: "Odpowiedź niepoprawna. Jest to typowa cecha białoskrzynkowych technik testowania."
            },
            {
                label: "B",
                content: "Do mierzenia pokrycia używane są elementy testowane w kodzie implementującym interfejsy.",
                explanation: "Odpowiedź niepoprawna. Jest to typowa cecha białoskrzynkowych technik testowania."
            },
            {
                label: "C",
                content: "Stosowane techniki bazują w dużej mierze na wiedzy testera dotyczącej oprogramowania i dziedziny biznesowej.",
                explanation: "Odpowiedź poprawna. Jest to typowa cecha technik testowania opartych na doświadczeniu."
            },
            {
                label: "D",
                content: "Za pomocą przypadków testowych identyfikowane są odchylenia od wymagań.",
                explanation: "Odpowiedź niepoprawna. Jest to typowa cecha czarnoskrzynkowych technik testowania."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 20,
        chapter: "Techniki testowania",
        subchapter: "Klasy równoważności",
        question: "Testujesz uproszczony formularz wyszukiwania mieszkań, w którym występują tylko dwa kryteria wyszukiwania:\n- kondygnacja (trzy możliwe opcje: parter; pierwsze piętro; drugie lub wyższe piętro);\n- typ ogródka (trzy możliwe opcje: brak ogródka; mały ogródek; duży ogródek).\n\nOgródki są dostępne tylko w przypadku mieszkań na parterze. Formularz zawiera wbudowany mechanizm walidacji, który nie pozwala użyć kryteriów wyszukiwania niezgodnych z powyższą zasadą.\n\nKażdy test ma dwie wartości wejściowe: kondygnacja i typ ogródka. Aby pokryć w swoich testach każdą kondygnację i każdy typ ogródka, chcesz zastosować podział na klasy równoważności.\n\nJaka jest minimalna liczba przypadków testowych potrzebna do uzyskania stuprocentowego pokrycia klas równoważności?",
        options: [
            {
                label: "A",
                content: "3",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "B",
                content: "4",
                explanation: "Odpowiedź poprawna. Potrzebne są dwa testy dla parteru (z małym i dużym ogródkiem) oraz dwa testy dla pozostałych kondygnacji (pierwsze piętro i drugie lub wyższe piętro - oba bez ogródka)."
            },
            {
                label: "C",
                content: "5",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "6",
                explanation: "Odpowiedź niepoprawna."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 21,
        chapter: "Techniki testowania",
        subchapter: "Analiza wartości brzegowych",
        question: "Testujesz system, który oblicza ocenę końcową z przedmiotu dla danego ucznia. Ocena końcowa jest ustalana na podstawie wyniku końcowego zgodnie z następującymi zasadami:\n- 0–50 punktów: ocena niedostateczna\n- 51–60 punktów: ocena dopuszczająca\n- 61–70 punktów: ocena dostateczna\n- 71–80 punktów: ocena dobra\n- 81–90 punktów: ocena bardzo dobra\n- 91–100 punktów: ocena celująca\n\nTwój zespół przygotował następujący zbiór przypadków testowych:\nPT1: 91 -> celująca\nPT2: 50 -> niedostateczna\nPT3: 81 -> bardzo dobra\nPT4: 60 -> dopuszczająca\nPT5: 70 -> dostateczna\nPT6: 80 -> dobra\n\nJakie pokrycie wartości brzegowych dla wyniku końcowego w metodzie dwupunktowej analizy wartości brzegowych osiąga zbiór przypadków testowych PT1-PT6?",
        options: [
            {
                label: "A",
                content: "50%",
                explanation: "Odpowiedź poprawna. Występuje 12 wartości brzegowych (0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100). Przypadki testowe pokrywają 6 z nich, czyli 50%."
            },
            {
                label: "B",
                content: "60%",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "C",
                content: "33.3%",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "100%",
                explanation: "Odpowiedź niepoprawna."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 22,
        chapter: "Techniki testowania",
        subchapter: "Tablica decyzyjna",
        question: "Twoja ulubiona wypożyczalnia rowerów właśnie wprowadziła nowy system zarządzania relacjami z klientami i poprosiła cię (jako jednego z najbardziej lojalnych klientów) o jego przetestowanie. W systemie zaimplementowano następujące funkcjonalności:\n- Rower może wypożyczyć każdy, ale uczestnicy programu lojalnościowego otrzymują 20% rabatu.\n- Niezwrócenie roweru w terminie oznacza brak rabatu.\n- W ramach 15-go wypożyczenia uczestnik programu lojalnościowego otrzymuje prezent w postaci koszulki.\n\nTablica decyzyjna opisująca zaimplementowane funkcjonalności wygląda następująco:\nWarunki:\nUdział w programie lojalnościowym: P P P P F F F F\nNiezwrócenie roweru w terminie: P F P F P F F P\n15. wypożyczenie: F F P P F F P P\n\nAkcje:\nRabat 20%: X X\nDarmowa koszulka: X X X\n\nOpierając się WYŁĄCZNIE na opisie funkcjonalności systemu zarządzania relacjami z klientami wskaż, która z podanych reguł opisuje sytuację niemożliwą.",
        options: [
            {
                label: "A",
                content: "R4",
                explanation: "Odpowiedź niepoprawna. Uczestnik programu, który oddawał rowery w terminie, może uzyskać rabat i otrzymać darmową koszulkę w momencie 15. wypożyczenia."
            },
            {
                label: "B",
                content: "R2",
                explanation: "Odpowiedź niepoprawna. Uczestnik programu, który oddawał rowery w terminie, może uzyskać rabat, ale nie może otrzymać darmowej koszulki, dopóki nie wypożyczy roweru 15 razy."
            },
            {
                label: "C",
                content: "R6",
                explanation: "Odpowiedź niepoprawna. Osoba nieuczestnicząca w programie lojalnościowym nie może uzyskać rabatu, nawet jeśli zawsze oddaje rowery w terminie."
            },
            {
                label: "D",
                content: "R8",
                explanation: "Odpowiedź poprawna. Brak rabatu jest prawidłowy, ponieważ dana osoba nie uczestniczy w programie ani nie oddała roweru w terminie, ale tylko uczestnicy mogą otrzymać darmową koszulkę. W związku z tym akcja nie jest poprawna."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 23,
        chapter: "Techniki testowania",
        subchapter: "Testowanie przejść między stanami",
        question: "Testujesz system, którego cykl działania opisano na przedstawionym diagramie przejść pomiędzy stanami. System rozpoczyna pracę w stanie INICJOWANIE, a kończy pracę w stanie WYŁ.\n\nJaka jest MINIMALNA liczba przypadków testowych niezbędna do uzyskania pokrycia poprawnych przejść?",
        options: [
            {
                label: "A",
                content: "4",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "B",
                content: "2",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "C",
                content: "7",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "3",
                explanation: "Odpowiedź poprawna. Np:\nPT1: test, gotowe\nPT2: uruchomienie, błąd, gotowe\nPT3: uruchomienie, pauza, wznowienie, pauza, gotowe"
            }
        ],
        correctAnswer: 3
    },
    {
        id: 24,
        chapter: "Techniki testowania",
        subchapter: "Testowanie białoskrzynkowe",
        question: "Twój zestaw testowy osiągnął stuprocentowe pokrycie instrukcji kodu. Co to oznacza w praktyce?",
        options: [
            {
                label: "A",
                content: "Każda instrukcja w kodzie zawierająca defekt została wykonana przynajmniej raz.",
                explanation: "Odpowiedź poprawna. Uzyskanie stuprocentowego pokrycia instrukcji kodu oznacza, że każda instrukcja musiała zostać wykonana i oceniona co najmniej raz, a więc w szczególności także każda instrukcja zawierająca defekty."
            },
            {
                label: "B",
                content: "Dowolny zestaw testowy zawierający więcej przypadków testowych niż twój zestaw również osiągnie stuprocentowe pokrycie instrukcji kodu.",
                explanation: "Odpowiedź niepoprawna. Pokrycie zależy od tego, co jest testowane, a nie od liczby przypadków testowych."
            },
            {
                label: "C",
                content: "Każda ścieżka w kodzie musiała zostać wykonana co najmniej raz.",
                explanation: "Odpowiedź niepoprawna. Jeśli w kodzie występuje pętla, liczba możliwych ścieżek może być nieskończona."
            },
            {
                label: "D",
                content: "Każda kombinacja wartości wejściowych musiała zostać przetestowana co najmniej raz.",
                explanation: "Odpowiedź niepoprawna. Testowanie gruntowne nie jest możliwe."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 25,
        chapter: "Techniki testowania",
        subchapter: "Ograniczenia testowania białoskrzynkowego",
        question: "Które z poniższych stwierdzeń NIE jest zgodne z prawdą w odniesieniu do testowania białoskrzynkowego?",
        options: [
            {
                label: "A",
                content: "Podczas testowania białoskrzynkowego uwzględniana jest cała implementacja oprogramowania.",
                explanation: "Odpowiedź niepoprawna. Jest to prawdziwe stwierdzenie dotyczące testowania białoskrzynkowego."
            },
            {
                label: "B",
                content: "Metryki pokrycia stosowane w testowaniu białoskrzynkowym pomagają wskazać dodatkowe testy umożliwiające zwiększenie pokrycia kodu.",
                explanation: "Odpowiedź niepoprawna. Jest to prawdziwe stwierdzenie dotyczące testowania białoskrzynkowego."
            },
            {
                label: "C",
                content: "Białoskrzynkowe techniki testowania można stosować w testowaniu statycznym.",
                explanation: "Odpowiedź niepoprawna. Jest to prawdziwe stwierdzenie dotyczące testowania białoskrzynkowego."
            },
            {
                label: "D",
                content: "Testowanie białoskrzynkowe pozwala rozpoznać luki w implementacji wymagań.",
                explanation: "Odpowiedź poprawna. To stwierdzenie jest nieprawdziwe. Testowanie białoskrzynkowe NIE pozwala rozpoznać luk w implementacji wymagań, ponieważ bazuje wyłącznie na strukturze przedmiotu testów."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 26,
        chapter: "Techniki testowania",
        subchapter: "Zgadywanie błędów",
        question: "Które z poniższych stwierdzeń NAJLEPIEJ opisuje koncepcję zgadywania błędów?",
        options: [
            {
                label: "A",
                content: "Zgadywanie błędów polega na wykorzystaniu wiedzy i doświadczenia w zakresie dotychczas wykrytych defektów oraz typowych pomyłek popełnianych przez programistów.",
                explanation: "Odpowiedź poprawna. To jest właściwy opis techniki zgadywania błędów."
            },
            {
                label: "B",
                content: "Zgadywanie błędów polega na wykorzystaniu własnego doświadczenia w wytwarzaniu oprogramowania i wiedzy na temat pomyłek popełnionych podczas pracy na stanowisku programisty.",
                explanation: "Odpowiedź niepoprawna. To zbyt wąskie spojrzenie, ograniczone tylko do doświadczenia programistycznego."
            },
            {
                label: "C",
                content: "Zgadywanie błędów wymaga wyobrażenia sobie, że jest się użytkownikiem przedmiotu testów, i zgadywania, jakie pomyłki mógłby popełnić korzystający z niego użytkownik.",
                explanation: "Odpowiedź niepoprawna. To opis testowania użyteczności, nie zgadywania błędów."
            },
            {
                label: "D",
                content: "Zgadywanie błędów wymaga szybkiego powielenia zadania związanego z wytwarzaniem oprogramowania w celu zidentyfikowania rodzajów pomyłek, jakie mógłby popełnić programista.",
                explanation: "Odpowiedź niepoprawna. To niepraktyczne podejście, które nie jest częścią techniki zgadywania błędów."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 27,
        chapter: "Techniki testowania",
        subchapter: "Testowanie eksploracyjne",
        question: "W projekcie, w którym uczestniczysz, doszło do opóźnienia w pracach nad zupełnie nową aplikacją, przez co wykonywanie testów również rozpoczęło się zbyt późno. Masz jednak bardzo szczegółową wiedzę merytoryczną i dobre umiejętności analityczne. Chociaż zespół nie otrzymał jeszcze pełnej listy wymagań, kierownictwo domaga się przedstawienia wstępnych wyników testów.\n\nJaka technika testowania NAJLEPIEJ sprawdzi się w takiej sytuacji?",
        options: [
            {
                label: "A",
                content: "Testowanie w oparciu o listę kontrolną.",
                explanation: "Odpowiedź niepoprawna. Prawdopodobnie nie ma jeszcze listy kontrolnej dla nowego produktu."
            },
            {
                label: "B",
                content: "Zgadywanie błędów.",
                explanation: "Odpowiedź niepoprawna. Przy nowym produkcie może brakować doświadczenia potrzebnego do efektywnego zgadywania błędów."
            },
            {
                label: "C",
                content: "Testowanie eksploracyjne.",
                explanation: "Odpowiedź poprawna. Testowanie eksploracyjne jest najbardziej przydatne w przypadku posiadania niepełnych specyfikacji bądź w przypadku wykonywania testów pod presją czasu."
            },
            {
                label: "D",
                content: "Testowanie gałęzi.",
                explanation: "Odpowiedź niepoprawna. Testowanie gałęzi jest czasochłonne i nie wymaga wiedzy merytorycznej, którą posiadasz."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 28,
        chapter: "Testowanie w zwinnym wytwarzaniu oprogramowania",
        subchapter: "Kryteria akceptacji",
        question: "Które z poniższych stwierdzeń NAJLEPIEJ opisuje sposób, w jaki można udokumentować kryteria akceptacji?",
        options: [
            {
                label: "A",
                content: "Przeprowadzenie retrospektywy w celu ustalenia rzeczywistych potrzeb interesariuszy dotyczących danej historyjki użytkownika.",
                explanation: "Odpowiedź niepoprawna. Retrospektywy służą do usprawniania procesów, nie do dokumentowania kryteriów akceptacji."
            },
            {
                label: "B",
                content: "Opisanie przykładowego warunku testowego związanego z daną historyjką użytkownika w formacie Given/When/Then (Mając/Kiedy/Wtedy).",
                explanation: "Odpowiedź poprawna. Jest to standardowy sposób dokumentowania kryteriów akceptacji."
            },
            {
                label: "C",
                content: "Słowne przekazanie informacji w celu zmniejszenia ryzyka błędnego zrozumienia kryteriów akceptacji przez inne osoby.",
                explanation: "Odpowiedź niepoprawna. Słowna komunikacja nie zapewnia trwałej dokumentacji kryteriów akceptacji."
            },
            {
                label: "D",
                content: "Udokumentowanie ryzyk związanych z daną historyjką użytkownika w planie testów, co ułatwi wykonanie testowania opartego na ryzyku w odniesieniu do tej historyjki.",
                explanation: "Odpowiedź niepoprawna. Kryteria akceptacji dotyczą historyjki użytkownika, a nie planu testów."
            }
        ],
        correctAnswer: 1
    },
    {
        id: 29,
        chapter: "Testowanie w zwinnym wytwarzaniu oprogramowania",
        subchapter: "ATDD",
        question: "Rozważmy następującą historyjkę użytkownika:\n\nJako redaktor\nchcę weryfikować treść przed jej opublikowaniem,\naby upewnić się, że nie występują w niej błędy gramatyczne.\n\nKryteria akceptacji związane z tą historyjką są następujące:\n- Użytkownik może zalogować się do systemu zarządzania treścią przy użyciu konta z przypisaną rolą \"redaktora\".\n- Redaktor może wyświetlać istniejące strony z treścią.\n- Redaktor może edytować treść stron.\n- Redaktor może dodawać komentarze w formie adiustacji.\n- Redaktor może zapisywać zmiany.\n- Redaktor może zlecać osobie pełniącej rolę \"właściciela treści\" dokonywanie aktualizacji treści.\n\nKtóra z poniższych opcji jest najlepszym przykładem zastosowania modelu wytwarzania sterowanego testami akceptacyjnymi (ATDD) w celu przetestowania tej historyjki użytkownika?",
        options: [
            {
                label: "A",
                content: "Przetestowanie, czy redaktor może zapisać dokument po zredagowaniu treści strony.",
                explanation: "Odpowiedź poprawna. Ten test pokrywa dwa kryteria akceptacji: edycję dokumentu i zapisywanie zmian."
            },
            {
                label: "B",
                content: "Przetestowanie, czy właściciel treści może zalogować się i zaktualizować treść.",
                explanation: "Odpowiedź niepoprawna. Kryteria akceptacji dotyczą czynności wykonywanych przez redaktora, nie właściciela treści."
            },
            {
                label: "C",
                content: "Przetestowanie, czy redaktor może wyznaczyć termin publikacji zredagowanej treści.",
                explanation: "Odpowiedź niepoprawna. Wyznaczanie terminu publikacji nie jest ujęte w kryteriach akceptacji."
            },
            {
                label: "D",
                content: "Przetestowanie, czy redaktor może zlecić innemu redaktorowi dokonanie aktualizacji treści.",
                explanation: "Odpowiedź niepoprawna. Kryteria akceptacji mówią o zlecaniu aktualizacji właścicielowi treści, nie innemu redaktorowi."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 30,
        chapter: "Planowanie testów",
        subchapter: "Wkład testerów",
        question: "Jaki jest wkład testerów w planowanie iteracji i wydań?",
        options: [
            {
                label: "A",
                content: "Testerzy ustalają priorytety opracowywanych historyjek użytkownika.",
                explanation: "Odpowiedź niepoprawna. Priorytety historyjek użytkownika ustala przedstawiciel jednostki biznesowej we współpracy z zespołem."
            },
            {
                label: "B",
                content: "Testerzy koncentrują się wyłącznie na aspektach funkcjonalnych systemu będącego przedmiotem testów.",
                explanation: "Odpowiedź niepoprawna. Testerzy koncentrują się zarówno na aspektach funkcjonalnych, jak i niefunkcjonalnych."
            },
            {
                label: "C",
                content: "Testerzy uczestniczą w procesie szczegółowej identyfikacji i oceny ryzyka w odniesieniu do historyjek użytkownika.",
                explanation: "Odpowiedź poprawna. Jest to jeden z głównych wkładów testerów w planowanie iteracji i wydań."
            },
            {
                label: "D",
                content: "Testerzy gwarantują przekazanie do eksploatacji wysokiej jakości oprogramowanie poprzez projektowanie testów na wczesnym etapie — w ramach planowania wydań.",
                explanation: "Odpowiedź niepoprawna. Wczesne projektowanie testów nie gwarantuje automatycznie wysokiej jakości."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 31,
        chapter: "Planowanie testów",
        subchapter: "Kryteria wyjścia",
        question: "Które DWIE z poniższych opcji stanowią kryteria wyjścia w przypadku testowania systemu?",
        options: [
            {
                label: "A",
                content: "Gotowość środowiska testowego.",
                explanation: "Odpowiedź niepoprawna. To jest kryterium wejścia, nie wyjścia."
            },
            {
                label: "B",
                content: "Możliwość zalogowania się przez testera do przedmiotu testów.",
                explanation: "Odpowiedź niepoprawna. To jest kryterium wejścia."
            },
            {
                label: "C",
                content: "Osiągnięcie szacowanej gęstości defektów.",
                explanation: "Odpowiedź poprawna. Jest to kryterium wyjścia."
            },
            {
                label: "D",
                content: "Przekształcenie wymagań do formatu Given/When/Then (Mając/Kiedy/Wtedy).",
                explanation: "Odpowiedź niepoprawna. To jest kryterium wejścia."
            },
            {
                label: "E",
                content: "Zautomatyzowanie testów regresji.",
                explanation: "Odpowiedź poprawna. Jest to kryterium wyjścia."
            }
        ],
        correctAnswer: [2, 4]
    },
    {
        id: 32,
        chapter: "Planowanie testów",
        subchapter: "Szacowanie",
        question: "Twój zespół szacuje pracochłonność testowania nowej funkcjonalności obarczonej dużym ryzykiem, korzystając w tym celu z techniki szacowania trójpunktowego. Przygotowano następujące oszacowania:\n- najbardziej optymistyczne: 2 osobogodziny\n- najbardziej prawdopodobne: 11 osobogodzin\n- najbardziej pesymistyczne: 14 osobogodzin\n\nJaka jest ostateczna szacowana wartość?",
        options: [
            {
                label: "A",
                content: "9 osobogodzin.",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "B",
                content: "14 osobogodzin.",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "C",
                content: "11 osobogodzin.",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "10 osobogodzin.",
                explanation: "Odpowiedź poprawna. Według wzoru E = (optymistyczne + 4 × najbardziej prawdopodobne + pesymistyczne) / 6, czyli E = (2 + (4 × 11) + 14) / 6 = 10."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 33,
        chapter: "Planowanie testów",
        subchapter: "Priorytety",
        question: "Testujesz aplikację mobilną, która umożliwia użytkownikom znajdowanie pobliskich restauracji na podstawie rodzaju serwowanej kuchni. Rozpatrz poniższą listę przypadków testowych, priorytetów (gdzie mniejsza liczba oznacza wyższy priorytet) oraz zależności:\n\nNumer przypadku testowego | Pokrywany warunek testowy | Priorytet | Zależność logiczna\nPT 001 | Wybór rodzaju kuchni | 3 | brak\nPT 002 | Wybór restauracji | 2 | PT 001\nPT 003 | Uzyskanie wskazówek dojazdu | 1 | PT 002\nPT 004 | Zatelefonowanie do restauracji | 2 | PT 002\nPT 005 | Dokonanie rezerwacji | 3 | PT 002\n\nKtóry z poniższych przypadków testowych powinien zostać wykonany jako trzeci?",
        options: [
            {
                label: "A",
                content: "PT 003",
                explanation: "Odpowiedź poprawna. Po wykonaniu PT 001 i PT 002, PT 003 ma najwyższy priorytet."
            },
            {
                label: "B",
                content: "PT 005",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "C",
                content: "PT 002",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "PT 001",
                explanation: "Odpowiedź niepoprawna."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 34,
        chapter: "Planowanie testów",
        subchapter: "Kwadranty testowe",
        question: "Rozważ następujące kategorie testów (1-4) i kwadranty testowe w testowaniu zwinnym (A-D):\n\n1. Testowanie użyteczności.\n2. Testowanie modułowe.\n3. Testowanie funkcjonalne.\n4. Testowanie niezawodności.\n\nA. Kwadrant Q1: cel technologiczny, wspieranie zespołu tworzącego oprogramowanie.\nB. Kwadrant Q2: cel biznesowy, wspieranie zespołu tworzącego oprogramowanie.\nC. Kwadrant Q3: cel biznesowy, krytyka produktu.\nD. Kwadrant Q4: cel technologiczny, krytyka produktu.\n\nW jaki sposób należy przypisać podane kategorie testów do poszczególnych kwadrantów testowych w testowaniu zwinnym?",
        options: [
            {
                label: "A",
                content: "1C, 2A, 3B, 4D",
                explanation: "Odpowiedź poprawna. Testowanie użyteczności należy do Q3, modułowe do Q1, funkcjonalne do Q2, a niezawodności do Q4."
            },
            {
                label: "B",
                content: "1D, 2A, 3C, 4B",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "C",
                content: "1C, 2B, 3D, 4A",
                explanation: "Odpowiedź niepoprawna."
            },
            {
                label: "D",
                content: "1D, 2B, 3C, 4A",
                explanation: "Odpowiedź niepoprawna."
            }
        ],
        correctAnswer: 0
    },
    {
        id: 35,
        chapter: "Analiza ryzyka",
        subchapter: "Reakcje na ryzyko",
        question: "Podczas analizy ryzyka zidentyfikowano i oceniono następujące ryzyko:\n- Ryzyko: Czas odpowiedzi podczas generowania raportu jest zbyt długi.\n- Prawdopodobieństwo wystąpienia ryzyka: średnie; wpływ ryzyka: duży.\n- Reakcja na ryzyko:\n  * Niezależny zespół testowy wykonuje testowanie wydajnościowe w ramach testowania systemowego.\n  * Wybrana grupa użytkowników wykonuje testy akceptacyjne alfa i beta przed przekazaniem oprogramowania do eksploatacji.\n\nJak nazywa się działanie zaproponowane w odpowiedzi na zidentyfikowane podczas analizy ryzyko?",
        options: [
            {
                label: "A",
                content: "Akceptacja ryzyka.",
                explanation: "Odpowiedź niepoprawna. Nie zaakceptowano ryzyka - wręcz przeciwnie, zaproponowano konkretne działania zaradcze."
            },
            {
                label: "B",
                content: "Planowanie awaryjne.",
                explanation: "Odpowiedź niepoprawna. Nie zaproponowano żadnych planów awaryjnych."
            },
            {
                label: "C",
                content: "Łagodzenie ryzyka.",
                explanation: "Odpowiedź poprawna. Proponowane działania są związane z testowaniem, co jest formą łagodzenia ryzyka."
            },
            {
                label: "D",
                content: "Przeniesienie ryzyka.",
                explanation: "Odpowiedź niepoprawna. Ryzyko nie jest przenoszone, lecz łagodzone."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 36,
        chapter: "Monitorowanie i nadzór",
        subchapter: "Miary i metryki",
        question: "Który produkt pracy może być wykorzystywany przez zwinny zespół do pokazania ilości pracy, która została wykonana i ilości pracy pozostałej do wykonania w danej iteracji?",
        options: [
            {
                label: "A",
                content: "Kryteria akceptacji.",
                explanation: "Odpowiedź niepoprawna. Kryteria akceptacji to warunki służące do ustalania, czy historyjka użytkownika jest gotowa."
            },
            {
                label: "B",
                content: "Raport o defekcie.",
                explanation: "Odpowiedź niepoprawna. Raporty o defektach służą do informowania o wystąpieniu defektów."
            },
            {
                label: "C",
                content: "Sumaryczny raport z testów.",
                explanation: "Odpowiedź niepoprawna. Sumaryczny raport z testów powstaje po zakończeniu iteracji."
            },
            {
                label: "D",
                content: "Wykres spalania.",
                explanation: "Odpowiedź poprawna. Wykresy spalania pokazują graficznie pozostałą do wykonania pracę i pozostały czas."
            }
        ],
        correctAnswer: 3
    },
    {
        id: 37,
        chapter: "Zarządzanie konfiguracją",
        subchapter: "Zarządzanie wersjami",
        question: "Musisz zaktualizować jeden ze skryptów testów automatycznych, aby dostosować go do nowego wymagania. Który proces pozwala zarejestrować w repozytorium testów utworzenie nowej wersji skryptu testowego?",
        options: [
            {
                label: "A",
                content: "Zarządzanie śledzeniem powiązań.",
                explanation: "Odpowiedź niepoprawna. Śledzenie powiązań dotyczy relacji między różnymi produktami pracy."
            },
            {
                label: "B",
                content: "Testowanie pielęgnacyjne.",
                explanation: "Odpowiedź niepoprawna. Testowanie pielęgnacyjne dotyczy wprowadzanych zmian."
            },
            {
                label: "C",
                content: "Zarządzanie konfiguracją.",
                explanation: "Odpowiedź poprawna. Zarządzanie konfiguracją obejmuje kontrolę wersji wszystkich elementów testowych."
            },
            {
                label: "D",
                content: "Inżynieria wymagań.",
                explanation: "Odpowiedź niepoprawna. Inżynieria wymagań dotyczy pozyskiwania i dokumentowania wymagań."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 38,
        chapter: "Raportowanie defektów",
        subchapter: "Zawartość raportu",
        question: "Otrzymujesz od programistów następujący raport o defekcie wraz z informacją, że anomalii opisanej w raporcie z testów nie da się odtworzyć:\n\nAplikacja zawiesza się\n3 maja 2022 r. - Jan Kowalski - Odrzucono\n\nAplikacja zawiesza się po wprowadzeniu ciągu \"Dane wejściowe do testów: $ä\" w polu Nazwa na ekranie tworzenia nowego użytkownika. Próbowałem się wylogować, a następnie ponownie zalogować na konto test_admin01, ale problem nadal występuje. Próbowałem również korzystać z innych kont administratora, ale pojawił się ten sam problem. Nie jest wyświetlany żaden komunikat o błędzie, a dziennik (w załączniku) zawiera informację o błędzie krytycznym. Zgodnie z przypadkiem testowym PT-1305 aplikacja powinna zaakceptować podane dane wejściowe i utworzyć użytkownika. Proszę o pilne wprowadzenie poprawek, ponieważ funkcjonalność ta jest związana z wymaganiem W-0012, które jest nowym wymaganiem biznesowym o znaczeniu krytycznym.\n\nJakie kluczowe informacje, które byłyby przydatne dla programistów, NIE zostały uwzględnione w powyższym raporcie o defekcie?",
        options: [
            {
                label: "A",
                content: "Oczekiwany rezultat i rzeczywisty rezultat.",
                explanation: "Odpowiedź niepoprawna. Te informacje są zawarte w raporcie."
            },
            {
                label: "B",
                content: "Odwołania i status defektu.",
                explanation: "Odpowiedź niepoprawna. Te informacje są zawarte w raporcie."
            },
            {
                label: "C",
                content: "Środowisko testowe i element testowy.",
                explanation: "Odpowiedź poprawna. Te kluczowe informacje nie zostały podane w raporcie."
            },
            {
                label: "D",
                content: "Priorytet i krytyczność.",
                explanation: "Odpowiedź niepoprawna. Te informacje są zawarte w raporcie."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 39,
        chapter: "Narzędzia wspierające testowanie",
        subchapter: "Dane testowe",
        question: "W ramach której z podanych czynności testowych jest przydatne narzędzie do przygotowywania danych testowych?",
        options: [
            {
                label: "A",
                content: "Monitorowanie testów i nadzór nad testami.",
                explanation: "Odpowiedź niepoprawna. Te czynności nie wymagają przygotowywania danych testowych."
            },
            {
                label: "B",
                content: "Analiza i projektowanie testów.",
                explanation: "Odpowiedź niepoprawna. Na tym etapie identyfikuje się warunki testowe i tworzy przypadki testowe."
            },
            {
                label: "C",
                content: "Implementacja i wykonywanie testów.",
                explanation: "Odpowiedź poprawna. Narzędzie do przygotowywania danych testowych jest przydatne na etapie implementacji testów."
            },
            {
                label: "D",
                content: "Ukończenie testów.",
                explanation: "Odpowiedź niepoprawna. Na tym etapie jest już za późno na przygotowywanie danych testowych."
            }
        ],
        correctAnswer: 2
    },
    {
        id: 40,
        chapter: "Narzędzia wspierające testowanie",
        subchapter: "Automatyzacja testów",
        question: "Która z poniższych odpowiedzi poprawnie wskazuje potencjalne ryzyko związane z automatyzacją testów?",
        options: [
            {
                label: "A",
                content: "Automatyzacja może spowodować wprowadzenie nieznanych regresji w środowisku produkcyjnym.",
                explanation: "Odpowiedź niepoprawna. Automatyzacja testów nie powoduje regresji w środowisku produkcyjnym."
            },
            {
                label: "B",
                content: "Nakłady pracy przeznaczone na utrzymanie testaliów mogą być niewystarczające.",
                explanation: "Odpowiedź poprawna. Jest to rzeczywiste ryzyko związane z automatyzacją testów."
            },
            {
                label: "C",
                content: "Narzędzia do testowania i związane z nimi testalia mogą nie cieszyć się wystarczającym zaufaniem.",
                explanation: "Odpowiedź niepoprawna. Narzędzia testowe należy dobierać tak, aby użytkownicy mieli do nich zaufanie."
            },
            {
                label: "D",
                content: "Automatyzacja może spowodować skrócenie czasu przeznaczonego na testowanie manualne.",
                explanation: "Odpowiedź niepoprawna. Skrócenie czasu testowania manualnego jest korzyścią, a nie ryzykiem automatyzacji."
            }
        ],
        correctAnswer: 1
    }

];
export { questions };