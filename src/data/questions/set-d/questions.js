export const questionSetD = [
    {
        id: '1',
        chapter: 'Podstawy testowania',
        subchapter: '1.1.1',
        question: 'Która z poniższych odpowiedzi opisuje typowy cel testów?',
        options: [
            {
                label: 'A',
                content: 'Znajdowanie defektów w przedmiocie testów i ich usuwanie.',
                explanation: 'Mimo że wykrywanie defektów należy do celów testowania, usuwanie defektów nie jest czynnością testową.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Utrzymywanie efektywnej komunikacji z programistami.',
                explanation: 'Mimo że jest przydatne do osiągnięcia innych celów testowania, nie jest głównym powodem przeprowadzania testów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Walidacja realizacji wymagań prawnych.',
                explanation: 'Walidacja polega na sprawdzaniu czy system zaspokaja potrzeby użytkowników. Sprawdzanie realizacji wymogów prawnych to forma weryfikacji.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Budowanie zaufania do jakości przedmiotu testów.',
                explanation: 'To jest prawidłowa odpowiedź - zaufanie do jakości można budować poprzez wykonanie testów zakończonych sukcesem.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '2',
        chapter: 'Podstawy testowania',
        subchapter: '1.2.3',
        question: 'Projekt interfejsu użytkownika opracowany przez projektanta nie uwzględnia właściwej obsługi użytkowników niepełnosprawnych. Przyczyną takiego stanu rzeczy jest zmęczenie projektanta. Programista zaimplementował interfejs użytkownika zgodnie z projektem, jednak z powodu dużej presji czasu nie uwzględnił odpowiedniej obsługi wyjątków w kodzie programu przeznaczonym do obliczania premii. Po wdrożeniu systemu w środowisku operacyjnym część niepełnosprawnych użytkowników zgłosiła zastrzeżenia dotyczące interfejsu, a odpowiedni urząd nałożył karę finansową na przedsiębiorstwo. Nikt nie zauważył, że czasami wysokość premii jest obliczana niepoprawnie. Które z poniższych stwierdzeń jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'Błędne obliczanie premii to defekt, który występuje sporadycznie.',
                explanation: 'Błędne obliczanie premii to awaria systemu, a nie defekt.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Kara za brak uwzględnienia potrzeb części użytkowników niepełnosprawnych jest awarią.',
                explanation: 'Kara jest skutkiem awarii systemu, ale sama nie jest awarią.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Podstawową przyczyną problemów jest praca programisty w warunkach silnej presji czasowej.',
                explanation: 'To jest prawidłowa odpowiedź - błąd został popełniony przez programistę z powodu presji czasowej.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Projekt interfejsu użytkownika zawiera błąd projektanta.',
                explanation: 'Projekt zawiera defekt spowodowany błędem projektanta, a nie sam błąd.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '3',
        chapter: 'Podstawy testowania',
        subchapter: '1.3.1',
        question: 'Testerzy korzystają z warunków testowych, aby wygenerować przypadki testowe i wykonać testy. Warunki testowe nie ulegają zmianie, jednak przypadki testowe są za każdym razem nieco inne. Która z poniższych zasad testowania została w tej sytuacji uwzględniona dzięki zmienności przypadków testowych?',
        options: [
            {
                label: 'A',
                content: 'Testy ulegają zużyciu.',
                explanation: 'To jest prawidłowa odpowiedź - zasada mówi, że powtarzanie tych samych testów przestaje być skuteczne, więc należy je modyfikować.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Przekonanie o braku defektów jest błędem.',
                explanation: 'Ta zasada dotyczy zaspokojenia potrzeb użytkowników mimo wykonania wielu testów bez wykrycia defektów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wczesne testowanie oszczędza czas i pieniądze.',
                explanation: 'Ta zasada dotyczy usuwania defektów na wczesnym etapie, nie zmienności testów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Defekty mogą się kumulować.',
                explanation: 'Ta zasada dotyczy miejsca występowania defektów w systemie, nie zmienności testów.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '4',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.1',
        question: 'Mamy następującą listę zadań testowych:\n1. Opracowanie przypadków testowych na podstawie warunków testowych.\n2. Zidentyfikowanie testaliów, które mogą zostać ponownie wykorzystane.\n3. Uszeregowanie przypadków testowych w ramach procedur testowych.\n4. Przeanalizowanie podstawy testów i przedmiotu testów.\noraz następujące czynności testowe:\nA. Analiza testów.\nB. Projektowanie testów.\nC. Implementacja testów.\nD. Ukończenie testów.\nW której z poniższych odpowiedzi NAJLEPIEJ powiązano zadania testowe z czynnościami testowymi?',
        options: [
            {
                label: 'A',
                content: '1B, 2A, 3D, 4C',
                explanation: 'To powiązanie nie odpowiada poprawnym relacjom między zadaniami a czynnościami.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '1B, 2D, 3C, 4A',
                explanation: 'To jest prawidłowa odpowiedź - każde zadanie jest poprawnie powiązane z odpowiednią czynnością testową.',
                isCorrect: true
            },
            {
                label: 'C',
                content: '1C, 2A, 3B, 4D',
                explanation: 'To powiązanie nie odpowiada poprawnym relacjom między zadaniami a czynnościami.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1C, 2D, 3A, 4B',
                explanation: 'To powiązanie nie odpowiada poprawnym relacjom między zadaniami a czynnościami.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '5',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.3',
        question: 'Dane są następujące testalia:\ni. Sumaryczny raport z testów\nii. Dane zapisane w bazie danych i używane jako dane wejściowe oraz oczekiwane rezultaty testów\niii. Lista elementów niezbędnych do zbudowania środowiska testowego\niv. Udokumentowane sekwencje przypadków testowych w kolejności wykonywania\nv. Przypadki testowe\nW której z poniższych odpowiedzi NAJLEPIEJ określono testalia tworzone w wyniku implementacji testów?',
        options: [
            {
                label: 'A',
                content: 'ii, iv',
                explanation: 'To jest prawidłowa odpowiedź - podczas implementacji tworzone są dane testowe i procedury testowe.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'iii, v',
                explanation: 'Te testalia są tworzone podczas projektowania testów, nie implementacji.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'i, ii, v',
                explanation: 'Te testalia są tworzone podczas różnych czynności testowych, nie tylko implementacji.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'i, iii, iv',
                explanation: 'Te testalia są tworzone podczas różnych czynności testowych, nie tylko implementacji.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '6',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.5',
        question: 'Która z poniższych odpowiedzi opisuje zadanie wykonywane z NAJWIĘKSZYM prawdopodobieństwem przez osobę występującą w roli związanej z zarządzaniem testami?',
        options: [
            {
                label: 'A',
                content: 'Przeanalizowanie podstawy testów i przedmiotu testów.',
                explanation: 'To zadanie jest wykonywane przez osobę w roli związanej z testowaniem, nie zarządzaniem.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Definiowanie wymagań dotyczących środowiska testowego.',
                explanation: 'To zadanie jest wykonywane przez osobę w roli związanej z testowaniem, nie zarządzaniem.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Ocena testowalności przedmiotu testów.',
                explanation: 'To zadanie jest wykonywane przez osobę w roli związanej z testowaniem, nie zarządzaniem.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Tworzenie sumarycznego raportu z testów.',
                explanation: 'To jest prawidłowa odpowiedź - tworzenie sumarycznego raportu to zadanie związane z zarządzaniem testami.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '7',
        chapter: 'Podstawy testowania',
        subchapter: '1.5.2',
        question: 'Które z poniższych stwierdzeń opisuje zaletę podejścia „cały zespół"?',
        options: [
            {
                label: 'A',
                content: 'Usprawnienie wymiany informacji między członkami zespołu.',
                explanation: 'To jest prawidłowa odpowiedź - podejście usprawnia komunikację i współpracę w zespole.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Zmniejszenie indywidualnej odpowiedzialności za jakość.',
                explanation: 'To nie jest zaleta - podejście zwiększa odpowiedzialność wszystkich członków zespołu.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Szybsze wdrażanie produktów u użytkowników końcowych.',
                explanation: 'To nie jest bezpośrednia zaleta tego podejścia.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zmniejszenie stopnia współpracy z zewnętrznymi użytkownikami biznesowymi.',
                explanation: 'To nie jest zaleta i nie wynika z tego podejścia.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '8',
        chapter: 'Podstawy testowania',
        subchapter: '1.5.3',
        question: 'Rozpatrzmy następujące zalety i wady niezależności testowania:\ni. Testerzy pracują w innej lokalizacji niż programiści.\nii. Testerzy kwestionują założenia przyjęte przez programistów podczas pisania kodu.\niii. Relacje pomiędzy testerami i programistami mają charakter konfrontacyjny.\niv. Programiści nabierają przekonania, że za jakość odpowiedzialni są przede wszystkim testerzy.\nv. Testerzy popełniają inne błędy poznawcze niż programiści.\nKtóre z wymienionych elementów należy uznać za zalety niezależności testowania?',
        options: [
            {
                label: 'A',
                content: 'i, iv',
                explanation: 'Te elementy są wadami niezależności testowania.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'ii, v',
                explanation: 'To jest prawidłowa odpowiedź - oba elementy są zaletami wynikającymi z niezależności.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'i, iii, iv',
                explanation: 'Te elementy są wadami niezależności testowania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'ii, iii, v',
                explanation: 'Element (iii) jest wadą, nie zaletą niezależności testowania.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '9',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.2',
        question: 'Które z poniższych stwierdzeń opisuje dobrą praktykę testowania mającą zastosowanie do wszystkich cykli wytwarzania oprogramowania?',
        options: [
            {
                label: 'A',
                content: 'Poszczególnym poziomom testów odpowiadają konkretne i różne cele testów.',
                explanation: 'To jest prawidłowa odpowiedź - różne cele testów na różnych poziomach zapobiegają niepotrzebnym powtórzeniom.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Implementacja i wykonywanie testów na danym poziomie testów powinny rozpocząć się w odpowiedniej fazie procesu wytwarzania.',
                explanation: 'To nie jest dobra praktyka - analiza i projektowanie testów powinny zacząć się wcześniej.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testerzy powinni rozpocząć projektowanie testów od razu po udostępnieniu wersji roboczych odpowiednich produktów pracy.',
                explanation: 'To nie jest dobra praktyka - należy poczekać na uzgodnioną podstawę testów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Każdej czynności związanej z testowaniem dynamicznym odpowiada czynność związana z testowaniem statycznym.',
                explanation: 'To nie jest prawdą - nie wszystkie testy dynamiczne mają odpowiednik w testach statycznych.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '10',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.3',
        question: 'Która z następujących odpowiedzi przedstawia przykład podejścia „najpierw test" do wytwarzania oprogramowania?',
        options: [
            {
                label: 'A',
                content: 'Wytwarzanie sterowane zachowaniem.',
                explanation: 'To jest prawidłowa odpowiedź - BDD jest przykładem podejścia "najpierw test".',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Wytwarzanie sterowane poziomem testów.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wytwarzanie sterowane funkcjami.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wytwarzanie sterowane wydajnością.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '11',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.4',
        question: 'Która z poniższych odpowiedzi z NAJWIĘKSZYM prawdopodobieństwem opisuje jedno z wyzwań, które można napotkać w trakcie stosowania metodyki DevOps?',
        options: [
            {
                label: 'A',
                content: 'Zadbanie o uwzględnienie niefunkcjonalnych charakterystyk jakościowych.',
                explanation: 'DevOps zwykle zwiększa widoczność charakterystyk niefunkcjonalnych.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Zarządzanie środowiskami testowymi podlegającymi ciągłym zmianom.',
                explanation: 'Procesy CI/CD ułatwiają zarządzanie środowiskami testowymi.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Konieczność zatrudnienia dodatkowych testerów z odpowiednim doświadczeniem do testów manualnych.',
                explanation: 'DevOps zwykle ogranicza potrzebę manualnego testowania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Skonfigurowanie testów automatycznych w ramach potoku dostarczania DevOps.',
                explanation: 'To jest prawidłowa odpowiedź - konfiguracja automatyzacji w pipeline jest jednym z głównych wyzwań.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '12',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.6',
        question: 'Które z podanych określeń NAJLEPIEJ opisuje retrospektywy?',
        options: [
            {
                label: 'A',
                content: 'Retrospektywy umożliwiają członkom zespołu wskazanie osób, które w zbyt małym zakresie brały udział w doskonaleniu jakości.',
                explanation: 'To nie jest cel retrospektyw - nie służą do wskazywania winnych.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Retrospektywy dają testerom możliwość zidentyfikowania działań, które zakończyły się pomyślnie i które można zachować po wprowadzeniu ewentualnych usprawnień w przyszłości.',
                explanation: 'To jest prawidłowa odpowiedź - retrospektywy służą do identyfikacji udanych praktyk i obszarów do poprawy.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Retrospektywy to okazja do przedstawienia przez członków zespołu zwinnego krytycznych uwag pod adresem kierownictwa i klientów bez obawy o poniesienie odpowiedzialności.',
                explanation: 'To nie jest cel retrospektyw - nie służą do krytykowania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Retrospektywy stanowią dla członków zespołu zwinnego forum, na którym mogą przedyskutować plan i decyzje techniczne dotyczące kolejnej iteracji.',
                explanation: 'To nie jest cel retrospektyw - służą do przeglądu zakończonej iteracji.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '13',
        chapter: 'Podstawy testowania',
        subchapter: '2.2.2',
        question: 'Który z poniższych testów zostanie z NAJWIĘKSZYM prawdopodobieństwem wykonany w ramach testowania funkcjonalnego?',
        options: [
            {
                label: 'A',
                content: 'Test sprawdzający, czy funkcja sortowania porządkuje elementy listy lub tabeli w kolejności rosnącej.',
                explanation: 'To jest prawidłowa odpowiedź - sprawdza funkcjonalność sortowania.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Test sprawdzający, czy funkcja sortowania zakończy działanie w ciągu jednej sekundy od rozpoczęcia.',
                explanation: 'To jest test wydajności - rodzaj testu niefunkcjonalnego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Test sprawdzający łatwość zmiany kolejności w funkcji sortowania z rosnącej na malejącą.',
                explanation: 'To jest test modyfikowalności - rodzaj testu niefunkcjonalnego.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Test sprawdzający poprawność działania funkcji sortowania po przejściu z architektury 32-bitowej na 64-bitową.',
                explanation: 'To jest test przenaszalności - rodzaj testu niefunkcjonalnego.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '14',
        chapter: 'Podstawy testowania',
        subchapter: '2.3.1',
        question: 'Które z poniższych stwierdzeń NAJPRAWDOPODOBNIEJ opisuje zdarzenie wyzwalające, którego efektem jest testowanie pielęgnacyjne systemu wymiany walut?',
        options: [
            {
                label: 'A',
                content: 'Programiści zgłosili trudności z modyfikacją systemu wymiany walut, a testerzy postanowili sprawdzić, czy zgłoszenie jest zasadne.',
                explanation: 'To byłby test utrzymywalności, nie testowanie pielęgnacyjne.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Opcja zwrotu środków została usunięta z systemu wymiany walut, ponieważ klienci nie zawsze otrzymywali poprawną kwotę.',
                explanation: 'To jest prawidłowa odpowiedź - modyfikacja systemu jest zdarzeniem wyzwalającym testowanie pielęgnacyjne.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Zespół zwinny rozpoczął prace nad historyjką użytkownika, która dodaje w systemie wymiany walut nową funkcję obsługi lojalności klienta.',
                explanation: 'To wymaga testowania nowej funkcjonalności i regresji, nie testowania pielęgnacyjnego.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Opcja obsługi języka w systemie wymiany walut została wykorzystana do umożliwienia transakcji walutowych zarówno w języku angielskim, jak i lokalnym.',
                explanation: 'To jest zmiana konfiguracji, nie modyfikacja systemu wymagająca testowania pielęgnacyjnego.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '15',
        chapter: 'Podstawy testowania',
        subchapter: '3.1.1',
        question: 'Który z poniższych elementów NIE może zostać sprawdzony za pomocą testowania statycznego?',
        options: [
            {
                label: 'A',
                content: 'Umowa.',
                explanation: 'Umowa może być sprawdzona przez przegląd - rodzaj testowania statycznego.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Plan testów.',
                explanation: 'Plan testów może być sprawdzony przez przegląd - rodzaj testowania statycznego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Zaszyfrowany kod.',
                explanation: 'To jest prawidłowa odpowiedź - zaszyfrowany kod jest zbyt trudny do interpretacji.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Karta opisu testu.',
                explanation: 'Karta opisu testu może być sprawdzona przez przegląd - rodzaj testowania statycznego.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '16',
        chapter: 'Podstawy testowania',
        subchapter: '3.1.2',
        question: 'Które z poniższych stwierdzeń dotyczących korzyści wynikających z testowania statycznego jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'W testowaniu statycznym można wykryć inne typy defektów niż w testowaniu dynamicznym.',
                explanation: 'To nie jest pełna prawda - niektóre defekty można wykryć oboma typami testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'W testowaniu dynamicznym można wykryć wszystkie defekty, które da się wykryć w testowaniu statycznym, a także defekty innego typu.',
                explanation: 'To nieprawda - nie wszystkie defekty wykrywane statycznie można wykryć dynamicznie.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'W testowaniu dynamicznym można wykryć niektóre defekty wykrywane w testowaniu statycznym, jednak nie wszystkie.',
                explanation: 'To jest prawidłowa odpowiedź - niektóre defekty można wykryć tylko w testowaniu statycznym.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'W testowaniu statycznym można wykryć wszystkie defekty, które da się wykryć w testowaniu dynamicznym, a także defekty innego typu.',
                explanation: 'To nieprawda - nie wszystkie defekty wykrywane dynamicznie można wykryć statycznie.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '17',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.2',
        question: 'Rozpatrzmy następujące opisy czynności wykonywanych w ramach procesu przeglądu:\n1. Omówienie wykrytych anomalii oraz określenie ich statusu, wyznaczenie osób odpowiedzialnych i wskazanie wymaganych działań.\n2. Zarejestrowanie problemów i uwzględnienie wszystkich wymaganych aktualizacji przed dokonaniem odbioru produktu pracy.\n3. Zastosowanie różnych technik przez przeglądających w celu wykrycia anomalii oraz opracowania zaleceń i pytań dotyczących produktu pracy.\n4. Określenie celu i harmonogramu przeglądu umożliwiające efektywny, ukierunkowany proces przeglądu.\n5. Udostępnienie uczestnikom przedmiotu przeglądu.\nKtóra z poniższych odpowiedzi POPRAWNIE przedstawia kolejność w procesie przeglądu czynności odpowiadających powyższym opisom?',
        options: [
            {
                label: 'A',
                content: '4 – 3 – 5 – 2 – 1',
                explanation: 'Ta kolejność nie odpowiada prawidłowemu procesowi przeglądu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '4 – 5 – 3 – 1 – 2',
                explanation: 'To jest prawidłowa odpowiedź - odpowiada kolejności: planowanie, rozpoczęcie przeglądu, przegląd indywidualny, przekazanie informacji i analiza, usunięcie defektów i raportowanie.',
                isCorrect: true
            },
            {
                label: 'C',
                content: '5 – 4 – 1 – 3 – 2',
                explanation: 'Ta kolejność nie odpowiada prawidłowemu procesowi przeglądu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '5 – 4 – 3 – 2 – 1',
                explanation: 'Ta kolejność nie odpowiada prawidłowemu procesowi przeglądu.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '18',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.3',
        question: 'Który uczestnik procesu przeglądu dba o sprawny przebieg spotkań związanych z przeglądem oraz zapewnienie warunków, w których każdy uczestnik przeglądu może swobodnie wyrażać swoje zdanie?',
        options: [
            {
                label: 'A',
                content: 'Kierownik',
                explanation: 'Kierownik jest odpowiedzialny za określenie przedmiotu przeglądu i przydział zasobów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Moderator',
                explanation: 'To jest prawidłowa odpowiedź - moderator odpowiada za sprawny przebieg spotkań i zapewnienie bezpiecznych warunków.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Przewodniczący',
                explanation: 'Taka rola nie występuje w procesie przeglądu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Lider przeglądu',
                explanation: 'Lider przeglądu odpowiada za ogólny nadzór nad procesem przeglądu.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '19',
        chapter: 'Podstawy testowania',
        subchapter: '4.1.1',
        question: 'Prowadzisz testy systemowe sklepu internetowego. Zdefiniowano następujące wymaganie:\nWYM 05-017. Jeśli łączna wartość zakupów przekracza 100 PLN, klient otrzymuje 5% upustu na następne zakupy. W przeciwnym razie klient nie otrzymuje upustu.\nKtóre techniki testowania będą NAJBARDZIEJ przydatne podczas projektowania przypadków testowych opartych na tym wymaganiu?',
        options: [
            {
                label: 'A',
                content: 'Białoskrzynkowe techniki testowania.',
                explanation: 'Te techniki opierają się na strukturze kodu, nie na wymaganiach.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Czarnoskrzynkowe techniki testowania.',
                explanation: 'To jest prawidłowa odpowiedź - te techniki są najlepsze do testowania zachowania systemu opisanego w wymaganiach.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Techniki testowania oparte na doświadczeniu.',
                explanation: 'Te techniki mogą być używane, ale czarnoskrzynkowe będą bardziej odpowiednie dla tego konkretnego wymagania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Techniki testowania oparte na ryzyku.',
                explanation: 'Takie techniki nie istnieją w klasyfikacji technik testowania.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '20',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.1',
        question: 'System sprzedaży biletów do kina oblicza typ zniżki na podstawie roku urodzenia klienta (RU) oraz roku bieżącego (RB) w następujący sposób:\nNiech D oznacza różnicę między RB i RU, czyli D = RB – RU.\nJeśli D < 0 wyświetl komunikat o błędzie\nJeśli 0 ≤ D < 18 zastosuj zniżkę dla uczniów\nJeśli 18 ≤ D < 65 nie stosuj zniżek\nJeśli D ≥ 65 zastosuj zniżkę dla emerytów\nZestaw testowy zawiera obecnie dwa przypadki testowe:\n• RU = 1990, RB = 2020, oczekiwany rezultat: brak zniżki\n• RU = 2030, RB = 2029, oczekiwany rezultat: wyświetlenie komunikatu o błędzie\nWskaż DWA zestawy danych testowych, które należy dodać w celu uzyskania pełnego pokrycia poprawnych klas równoważności dla typu zniżki.',
        options: [
            {
                label: 'A',
                content: 'RU = 2001, RB = 2065',
                explanation: 'Te dane odpowiadają już pokrytej klasie "brak zniżki".',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'RU = 1900, RB = 1965',
                explanation: 'To jest jedna z prawidłowych odpowiedzi - pokrywa niepokrytą klasę "zniżka dla emerytów".',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'RU = 1965, RB = 1900',
                explanation: 'Te dane odpowiadają już pokrytej klasie "komunikat o błędzie".',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'RU = 2011, RB = 2029',
                explanation: 'Te dane odpowiadają już pokrytej klasie "brak zniżki".',
                isCorrect: false
            },
            {
                label: 'E',
                content: 'RU = 2000, RB = 2000',
                explanation: 'To jest jedna z prawidłowych odpowiedzi - pokrywa niepokrytą klasę "zniżka dla uczniów".',
                isCorrect: true
            }
        ],
        correctAnswer: [1, 4]
    },
    {
        id: '21',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.2',
        question: 'Testujesz system kontroli temperatury przeznaczony dla chłodni ogrodniczej. System otrzymuje jako dane wejściowe temperaturę wyrażoną w stopniach Celsjusza (z dokładnością do jednego stopnia). Jeśli temperatura jest nie mniejsza niż 0°C i nie przekracza 2°C, system wyświetla komunikat „temperatura OK". W przypadku niższych temperatur system wyświetla komunikat „zbyt niska temperatura", a w przypadku wyższych komunikat „zbyt wysoka temperatura". Który z poniższych zestawów danych wejściowych pozwala uzyskać najwyższy poziom pokrycia w dwupunktowej analizie wartości brzegowych?',
        options: [
            {
                label: 'A',
                content: '-1, 3',
                explanation: 'Ten zestaw nie zawiera wszystkich wartości brzegowych.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '0, 2',
                explanation: 'Ten zestaw nie pokrywa wartości tuż przy granicach.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '-1, 0, 2, 3',
                explanation: 'To jest prawidłowa odpowiedź - zawiera wszystkie wartości brzegowe i wartości tuż przy nich.',
                isCorrect: true
            },
            {
                label: 'D',
                content: '-2, 0, 2, 4',
                explanation: 'Ten zestaw zawiera wartości zbyt oddalone od granic.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '22',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.3',
        question: 'Projektujesz przypadki testowe na podstawie tablicy decyzyjnej. W obecnym zestawie testowym znajdują się przypadki PT1-PT4, które pokrywają odpowiednio reguły R2, R3, R7 i R6. Który z poniższych przypadków testowych po dodaniu pozwoli zwiększyć pokrycie tablicy decyzyjnej?',
        options: [
            {
                label: 'A',
                content: '66 lat, niezarejestrowany mężczyzna, bez doświadczenia; oczekiwany rezultat: kategoria B',
                explanation: 'To jest prawidłowa odpowiedź - pokrywa niepokrytą regułę R4.',
                isCorrect: true
            },
            {
                label: 'B',
                content: '55 lat, niezarejestrowana kobieta, 2 lata doświadczenia; oczekiwany rezultat: kategoria A',
                explanation: 'Ten przypadek pokrywa już pokrytą regułę R2.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '19 lat, zarejestrowana kobieta, 5 lat doświadczenia; oczekiwany rezultat: kategoria D',
                explanation: 'Ten przypadek pokrywa już pokrytą regułę R6.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Dodatkowe przypadki testowe nie zwiększą pokrycia tablicy decyzyjnej.',
                explanation: 'Nieprawda - istnieją jeszcze niepokryte reguły R1, R4 i R5.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '23',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.4',
        question: 'Stosujesz technikę testowania przejść pomiędzy stanami w testach systemu rezerwacji pokojów hotelowych. Który z poniższych przypadków testowych pozwala osiągnąć największe pokrycie poprawnych przejść?',
        options: [
            {
                label: 'A',
                content: 'Niedostępny, Dostępny, Zmień pokój, Niedostępny, Anuluj',
                explanation: 'Ta sekwencja pokrywa tylko 4 różne przejścia.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Dostępny, Zmień pokój, Dostępny, Niedostępny, Zapłać',
                explanation: 'To jest prawidłowa odpowiedź - pokrywa 5 różnych przejść.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Dostępny, Zmień pokój, Dostępny, Zmień pokój, Niedostępny',
                explanation: 'Ta sekwencja pokrywa tylko 3 różne przejścia.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Niedostępny, Anuluj, Zmień pokój, Dostępny, Zapłać',
                explanation: 'Ta sekwencja nie jest wykonalna - po Anuluj system jest w stanie końcowym.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '24',
        chapter: 'Podstawy testowania',
        subchapter: '4.3.1',
        question: 'Zestaw testowy S dla programu P osiągnął stuprocentowe pokrycie instrukcji kodu. Składa się z trzech przypadków testowych, z których każdy pozwala uzyskać 50% pokrycia instrukcji. Które z poniższych stwierdzeń jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'Wykonanie S spowoduje wywołanie wszystkich możliwych awarii w programie P.',
                explanation: 'Pokrycie instrukcji nie gwarantuje wykrycia wszystkich awarii.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'S pozwala osiągnąć stuprocentowe pokrycie gałęzi programu P.',
                explanation: 'Pokrycie instrukcji nie gwarantuje pełnego pokrycia gałęzi.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Każda wykonywalna instrukcja w programie P zawierająca defekt została uruchomiona co najmniej raz w trakcie wykonania S.',
                explanation: 'To jest prawidłowa odpowiedź - wszystkie wykonywalne instrukcje zostały wykonane.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Po usunięciu jednego przypadku testowego z zestawu S dwa pozostałe przypadki w dalszym ciągu pozwolą osiągnąć stuprocentowe pokrycie instrukcji.',
                explanation: 'Usunięty przypadek mógł pokrywać instrukcje niepokryte przez pozostałe przypadki.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '25',
        chapter: 'Podstawy testowania',
        subchapter: '4.3.3',
        question: 'Dlaczego testowanie białoskrzynkowe ułatwia wykrywanie defektów nawet w przypadku, gdy specyfikacja oprogramowania jest niejednoznaczna, nieaktualna lub niekompletna?',
        options: [
            {
                label: 'A',
                content: 'Przypadki testowe są projektowane na podstawie struktury przedmiotu testów, a nie na podstawie specyfikacji.',
                explanation: 'To jest prawidłowa odpowiedź - testowanie białoskrzynkowe bazuje na kodzie, nie specyfikacji.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Dla każdej białoskrzynkowej techniki testowania pokrycie może zostać precyzyjnie zdefiniowane, a jego pomiar jest łatwy.',
                explanation: 'Łatwość pomiaru pokrycia nie jest powodem lepszego wykrywania defektów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Białoskrzynkowe techniki testowania zostały bardzo dobrze zaprojektowane pod kątem wykrywania luk w wymaganiach.',
                explanation: 'Techniki białoskrzynkowe nie są dobre do wykrywania brakujących wymagań.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Białoskrzynkowe techniki testowania można stosować w testowaniu statycznym i w testowaniu dynamicznym.',
                explanation: 'Możliwość stosowania w obu typach testów nie jest powodem lepszego wykrywania defektów.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '26',
        chapter: 'Podstawy testowania',
        subchapter: '4.4.1',
        question: 'Której z poniższych sytuacji tester NIE może przewidzieć w ramach zgadywania błędów?',
        options: [
            {
                label: 'A',
                content: 'Programista źle zrozumiał podany w historyjce użytkownika wzór do obliczania odsetek.',
                explanation: 'To jest typowy błąd, który można przewidzieć.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Programista umieścił w kodzie źródłowym instrukcję "FA = A*(1+IR^N)" zamiast instrukcji "FA = A*(1+IR)^N".',
                explanation: 'To jest typowy defekt, który można przewidzieć.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Programista nie wziął udziału w seminarium poświęconym nowym przepisom związanym z obliczaniem odsetek.',
                explanation: 'To jest prawidłowa odpowiedź - tester nie może przewidzieć uczestnictwa programisty w szkoleniach.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Dokładność obliczeń stopy oprocentowania w systemie nie jest wystarczająca.',
                explanation: 'To jest typowa awaria, którą można przewidzieć.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '27',
        chapter: 'Podstawy testowania',
        subchapter: '4.4.2',
        question: 'Które z poniższych stwierdzeń dotyczących testowania eksploracyjnego jest PRAWDZIWE?',
        options: [
            {
                label: 'A',
                content: 'Przypadki testowe są projektowane przed rozpoczęciem sesji testowania eksploracyjnego.',
                explanation: 'W testowaniu eksploracyjnym przypadki są tworzone podczas sesji.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testerzy mogą zająć się wykonywaniem testów, ale nie zajmują się projektowaniem testów.',
                explanation: 'W testowaniu eksploracyjnym testerzy jednocześnie projektują i wykonują testy.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wyniki testowania eksploracyjnego są dobrym wskaźnikiem liczby pozostałych defektów.',
                explanation: 'Wyniki zależą od doświadczenia testerów i nie są dobrym wskaźnikiem pozostałych defektów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Podczas testowania eksploracyjnego tester może korzystać z czarnoskrzynkowych technik testowania.',
                explanation: 'To jest prawidłowa odpowiedź - tester może używać dowolnych technik podczas sesji.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '28',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.1',
        question: 'Która technika związana ze wspólnym pisaniem historyjek użytkownika umożliwia członkom zespołu wypracowanie wspólnego zrozumienia tego, co należy dostarczyć?',
        options: [
            {
                label: 'A',
                content: 'Poker planistyczny, umożliwiający osiągnięcie w zespole konsensusu dotyczącego pracochłonności.',
                explanation: 'Poker planistyczny służy do szacowania, nie zrozumienia wymagań.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Przeglądy umożliwiające członkom zespołu wykrycie niespójności i sprzeczności w historyjce użytkownika.',
                explanation: 'Przeglądy nie są techniką stosowaną do wspólnego pisania historyjek.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Planowanie iteracji, dzięki czemu historyjki o największej wartości biznesowej mogą uzyskać najwyższy priorytet.',
                explanation: 'Planowanie iteracji służy do organizacji pracy, nie zrozumienia wymagań.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Rozmowa pozwalająca zrozumieć, w jaki sposób będzie używane oprogramowanie.',
                explanation: 'To jest prawidłowa odpowiedź - rozmowa pomaga wypracować wspólne zrozumienie wymagań.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '29',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.3',
        question: 'Która z poniższych opcji jest NAJLEPSZYM przykładem przypadku testowego używanego w celu przetestowania historyjki użytkownika dotyczącej filtrowania wyników wyszukiwania według zakresu cen?',
        options: [
            {
                label: 'A',
                content: 'Przejdź na stronę internetową i ustaw filtr na przedział cen od 90 PLN do 100 PLN. Oczekiwany rezultat: wyświetlenie wyłącznie produktu A. Ustaw cenę maksymalną na 110 PLN. Oczekiwany rezultat: w wynikach wyszukiwania wyświetlane są produkty A i B.',
                explanation: 'To jest prawidłowa odpowiedź - testuje główną funkcjonalność z dynamiczną aktualizacją wyników.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Przejdź na stronę internetową. Oczekiwany rezultat: domyślna cena minimalna i cena maksymalna są ustawione odpowiednio na 100 PLN i 110 PLN. Dodaj produkt C w cenie 120 PLN. Odśwież stronę klienta.',
                explanation: 'Ten przypadek testuje zachowanie domyślne, nie główną funkcjonalność filtrowania.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Przejdź na stronę internetową i ustaw filtr na przedział cen od 90 PLN do 115 PLN. Zmień walutę z PLN na EUR.',
                explanation: 'Ten przypadek testuje konwersję walut, co nie jest częścią wymagań.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Przejdź na stronę internetową za pomocą trzech przeglądarek: Edge, Chrome i Opera. W każdej przeglądarce ustaw filtr na przedział od 90 PLN do 110 PLN.',
                explanation: 'Ten przypadek testuje kompatybilność z przeglądarkami, co nie jest częścią wymagań.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '30',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.3',
        question: 'Które z poniższych stwierdzeń NAJLEPIEJ opisują kryteria WYJŚCIA projektu testowego?',
        options: [
            {
                label: 'A',
                content: 'Zatwierdzenie budżetu.',
                explanation: 'To jest kryterium wejścia, nie wyjścia.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Przekroczenie budżetu.',
                explanation: 'To jest jedno z kryteriów wyjścia - sytuacja wymuszająca zakończenie testów.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Dostępność podstawy testów.',
                explanation: 'To jest kryterium wejścia, nie wyjścia.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Uzyskanie co najmniej 80% pokrycia instrukcji przez przypadki testowe.',
                explanation: 'To jest jedno z kryteriów wyjścia - osiągnięcie założonego poziomu pokrycia.',
                isCorrect: true
            },
            {
                label: 'E',
                content: 'Uzyskanie przez wszystkich analityków testów certyfikatu ISTQB na poziomie podstawowym.',
                explanation: 'To jest kryterium wejścia, nie wyjścia.',
                isCorrect: false
            }
        ],
        correctAnswer: [1, 3]
    },
    {
        id: '31',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.4',
        question: 'Zespół chce oszacować czas niezbędny do wykonania przez jednego testera czterech przypadków testowych związanych z modułem oprogramowania. Ustalono następujące miary pracochłonności wykonania pojedynczego przypadku testowego:\nNajbardziej optymistyczny scenariusz: 1 godzina\nNajbardziej pesymistyczny scenariusz: 8 godzin\nNajbardziej prawdopodobny scenariusz: 3 godziny\nIle wynosi końcowe oszacowanie czasu niezbędnego do wykonania wszystkich czterech przypadków testowych przy założeniu, że używamy techniki szacowania trójpunktowego?',
        options: [
            {
                label: 'A',
                content: '14 godzin',
                explanation: 'To jest prawidłowa odpowiedź - (1 + 4*3 + 8)/6 = 3.5h na jeden przypadek, więc 4 przypadki zajmą 14h.',
                isCorrect: true
            },
            {
                label: 'B',
                content: '3,5 godziny',
                explanation: 'To jest czas na jeden przypadek testowy, nie na wszystkie cztery.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '16 godzin',
                explanation: 'Ta wartość nie wynika z zastosowania wzoru na szacowanie trójpunktowe.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '12 godzin',
                explanation: 'Ta wartość nie wynika z zastosowania wzoru na szacowanie trójpunktowe.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '32',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.5',
        question: 'W tabeli przedstawiono macierz śledzenia powiązań między przypadkami testowymi PT1-PT4 a wymaganiami Wym1-Wym7. "X" oznacza, że dany przypadek testowy pokrywa odpowiednie wymaganie. Chcesz określić priorytety przypadków testowych, korzystając z techniki ustalania priorytetów na podstawie dodatkowego pokrycia. Który z poniższych przypadków testowych powinien zostać wykonany jako OSTATNI?',
        options: [
            {
                label: 'A',
                content: 'PT1',
                explanation: 'PT1 zapewnia największe dodatkowe pokrycie, powinien być wykonany pierwszy.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'PT2',
                explanation: 'To jest prawidłowa odpowiedź - PT2 daje najmniejsze dodatkowe pokrycie.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'PT3',
                explanation: 'PT3 powinien być wykonany wcześniej ze względu na dodatkowe pokrycie.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'PT4',
                explanation: 'PT4 powinien być wykonany wcześniej ze względu na dodatkowe pokrycie.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '33',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.7',
        question: 'Jakie korzyści można uzyskać podczas testowania dzięki kwadrantom testowym?',
        options: [
            {
                label: 'A',
                content: 'Kwadranty testowe ułatwiają planowanie testów dzięki podziałowi procesu testowego na cztery etapy odpowiadające poziomom testów.',
                explanation: 'Kwadranty nie służą do podziału procesu na etapy.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Kwadranty testowe ułatwiają ocenę pokrycia wysokiego poziomu w oparciu o pokrycie niskiego poziomu.',
                explanation: 'Kwadranty nie służą do oceny pokrycia.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Dzięki kwadrantom testowym interesariusze bez przygotowania technicznego mogą łatwiej zrozumieć różne typy testów.',
                explanation: 'To jest prawidłowa odpowiedź - kwadranty pomagają zrozumieć relacje między typami testów.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Kwadranty testowe pozwalają zespołom zwinnym wypracować strategię komunikacji opartą na klasyfikacji osób.',
                explanation: 'Kwadranty nie służą do klasyfikacji osób ani strategii komunikacji.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '34',
        chapter: 'Podstawy testowania',
        subchapter: '5.2.1',
        question: 'Dla danego ryzyka jego poziom wynosi 1 000 PLN, a prawdopodobieństwo oszacowano na 50%. Jaki jest w tym przypadku wpływ ryzyka?',
        options: [
            {
                label: 'A',
                content: '500 PLN',
                explanation: 'Ta wartość jest wynikiem mnożenia, nie dzielenia.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '2 000 PLN',
                explanation: 'To jest prawidłowa odpowiedź - wpływ = poziom / prawdopodobieństwo = 1000 / 0.5 = 2000.',
                isCorrect: true
            },
            {
                label: 'C',
                content: '50 000 PLN',
                explanation: 'Ta wartość nie wynika z podanych danych.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '200 PLN',
                explanation: 'Ta wartość nie wynika z podanych danych.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '35',
        chapter: 'Podstawy testowania',
        subchapter: '5.2.2',
        question: 'Które z poniższych to ryzyka produktowe?',
        options: [
            {
                label: 'A',
                content: 'Nieplanowane rozszerzanie zakresu projektu.',
                explanation: 'To jest ryzyko projektowe związane z problemami technicznymi.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Niedopracowana architektura.',
                explanation: 'To jest prawidłowa odpowiedź - dotyczy charakterystyki produktu.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Cięcia finansowe.',
                explanation: 'To jest ryzyko projektowe związane z problemami organizacyjnymi.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Niedostateczne wsparcie narzędziowe.',
                explanation: 'To jest ryzyko projektowe związane z problemami technicznymi.',
                isCorrect: false
            },
            {
                label: 'E',
                content: 'Zbyt długi czas odpowiedzi.',
                explanation: 'To jest prawidłowa odpowiedź - dotyczy charakterystyki produktu.',
                isCorrect: true
            }
        ],
        correctAnswer: [1, 4]
    },
    {
        id: '36',
        chapter: 'Podstawy testowania',
        subchapter: '5.3.2',
        question: 'Która z poniższych odpowiedzi NIE opisuje poprawnego celu raportu z testów?',
        options: [
            {
                label: 'A',
                content: 'Śledzenie postępu testów i identyfikowanie obszarów wymagających uwagi.',
                explanation: 'To jest poprawny cel raportu z testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Udostępnianie informacji o wykonywanych testach i ich wynikach oraz o wszelkich wykrytych problemach i defektach.',
                explanation: 'To jest poprawny cel raportu z testów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Udostępnianie informacji o poszczególnych defektach, np. o krokach umożliwiających ich odtworzenie.',
                explanation: 'To jest prawidłowa odpowiedź - szczegółowe informacje o defektach należą do raportów o defektach, nie do raportów z testów.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Udostępnianie informacji o testach zaplanowanych na następny okres.',
                explanation: 'To jest poprawny cel raportu z testów.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '37',
        chapter: 'Podstawy testowania',
        subchapter: '5.4.1',
        question: 'Użytkownik zgłosił awarię oprogramowania. Specjalista z zespołu wsparcia technicznego poprosił go o podanie numeru wersji oprogramowania, w której wystąpiła awaria. Na podstawie numeru wersji zespół zidentyfikował wszystkie pliki wchodzące w skład danego wydania. Umożliwiło to programiście przeprowadzenie analizy, odnalezienie defektu i jego usunięcie. Co pozwoliło zespołowi wykonać opisane powyżej działania?',
        options: [
            {
                label: 'A',
                content: 'Zarządzanie ryzykiem.',
                explanation: 'Zarządzanie ryzykiem nie dotyczy identyfikacji elementów wydania.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Monitorowanie testów i nadzór nad testami.',
                explanation: 'Te działania dotyczą kontroli procesu testowego, nie elementów wydania.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Podejście „cały zespół".',
                explanation: 'To podejście dotyczy współpracy w zespole, nie zarządzania elementami wydania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zarządzanie konfiguracją.',
                explanation: 'To jest prawidłowa odpowiedź - zarządzanie konfiguracją umożliwia identyfikację i śledzenie elementów wydania.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '38',
        chapter: 'Podstawy testowania',
        subchapter: '5.5.1',
        question: 'Które z poniższych działań z NAJWIĘKSZYM prawdopodobieństwem pomoże programiście, aby mógł szybko odtworzyć awarię systemu wypożyczania książek?',
        options: [
            {
                label: 'A',
                content: 'Dodanie do sekcji „Opis" informacji o tym, których użytkowników i których książek dotyczy problem.',
                explanation: 'To jest prawidłowa odpowiedź - konkretne dane pomagają w odtworzeniu defektu.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Podanie brakującej wartości w polu „Priorytet".',
                explanation: 'Priorytet nie pomaga w odtworzeniu defektu.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Dodanie do sekcji „Załączniki" zrzutów pamięci i obrazów stanu bazy danych po każdym kroku.',
                explanation: 'Te informacje spowolniłyby proces analizy i mogłyby nie być przydatne.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Powtórzenie wykonania tego samego przypadku testowego w różnych środowiskach.',
                explanation: 'To nie pomaga w odtworzeniu konkretnego defektu w danym środowisku.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '39',
        chapter: 'Podstawy testowania',
        subchapter: '6.1.1',
        question: 'Wskaż kategorie narzędzi, które powinny NAJBARDZIEJ ułatwić wykonywanie testów.',
        options: [
            {
                label: 'A',
                content: 'i, v (Narzędzia wspomagające współpracę, Narzędzia do projektowania i implementacji testów)',
                explanation: 'Te narzędzia nie są bezpośrednio związane z wykonywaniem testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'ii, iv (Narzędzia DevOps, Narzędzia do testowania niefunkcjonalnego)',
                explanation: 'To jest prawidłowa odpowiedź - oba typy narzędzi wspomagają wykonywanie testów.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'i, iii, v',
                explanation: 'Te narzędzia są głównie związane z zarządzaniem i projektowaniem testów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'ii, iii, iv',
                explanation: 'Narzędzia do zarządzania (iii) nie są bezpośrednio związane z wykonywaniem testów.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '40',
        chapter: 'Podstawy testowania',
        subchapter: '6.2.1',
        question: 'Która z poniższych odpowiedzi z NAJWIĘKSZYM prawdopodobieństwem opisuje ryzyko związane z automatyzacją testowania?',
        options: [
            {
                label: 'A',
                content: 'Wykrywanie dodatkowych defektów o wysokiej krytyczności.',
                explanation: 'To jest korzyść, nie ryzyko automatyzacji.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Możliwość określenia miar pokrycia, które są zbyt skomplikowane, aby pomiar mógł zostać dokonany przez ludzi.',
                explanation: 'To jest korzyść, nie ryzyko automatyzacji.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Niekompatybilność z platformą programistyczną.',
                explanation: 'To jest prawidłowa odpowiedź - jest to istotne ryzyko przy automatyzacji.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Znaczne skrócenie czasu wykonywania testów.',
                explanation: 'To jest korzyść, nie ryzyko automatyzacji.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    }
];

export default questionSetD;