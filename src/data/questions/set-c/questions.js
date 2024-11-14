export const questionSetC = [
    {
        id: '1',
        chapter: 'Podstawy testowania',
        subchapter: '1.1.1',
        question: 'Która z poniższych odpowiedzi opisuje typowy cel testów?',
        options: [
            {
                label: 'A',
                content: 'Walidacja, czy udokumentowane wymagania są spełnione.',
                explanation: 'To niepoprawnie sformułowany cel - walidacja dotyczy sprawdzenia wymagań i oczekiwań użytkowników, a nie wymagań dokumentowych.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Powodowanie awarii i znajdowanie defektów.',
                explanation: 'To jest prawidłowa odpowiedź - powodowanie awarii i wykrywanie defektów to podstawowy cel testowania dynamicznego.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Inicjowanie błędów i identyfikowanie podstawowych przyczyn.',
                explanation: 'Testerzy nie inicjują błędów, tylko próbują powodować awarie. Identyfikowanie przyczyn to część debugowania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Weryfikacja spełnienia oczekiwań użytkowników przez przedmiot testów.',
                explanation: 'To niepoprawnie sformułowany cel - weryfikacja dotyczy sprawdzenia wymagań dokumentowych, a nie oczekiwań użytkowników.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '2',
        chapter: 'Podstawy testowania',
        subchapter: '1.1.2',
        question: 'Które z poniższych stwierdzeń NAJLEPIEJ opisuje różnicę między testowaniem i debugowaniem?',
        options: [
            {
                label: 'A',
                content: 'Testowanie polega na wywoływaniu awarii, a debugowanie na ich usuwaniu.',
                explanation: 'Debugowanie wiąże się z lokalizowaniem i usuwaniem defektów, nie awarii.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testowanie ma charakter negatywny, a debugowanie pozytywny.',
                explanation: 'Oba procesy mają charakter pozytywny, gdyż przyczyniają się do poprawy jakości.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testowanie polega na stwierdzeniu występowania defektów, natomiast w ramach debugowania defekty są usuwane.',
                explanation: 'To jest prawidłowa odpowiedź - testowanie wykrywa defekty, a debugowanie je usuwa.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Testowanie pozwala znaleźć przyczynę defektów, a debugowanie – usunąć przyczynę defektów.',
                explanation: 'Testowanie nie znajduje przyczyn defektów, tylko same defekty.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '3',
        chapter: 'Podstawy testowania',
        subchapter: '1.3.1',
        question: 'Jedna z zasad testowania mówi, że przekonanie o braku defektów jest błędem. Która z następujących odpowiedzi przedstawia przykład zastosowania tej zasady w praktyce?',
        options: [
            {
                label: 'A',
                content: 'Wyjaśnienie, że testowanie nie może wykazać braku defektów.',
                explanation: 'To dotyczy innej zasady - "testowanie pokazuje obecność defektów".',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Wsparcie użytkowników końcowych w wykonywaniu testowania akceptacyjnego.',
                explanation: 'To jest prawidłowa odpowiedź - pozwala zwalidować czy system spełnia oczekiwania użytkowników.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Zadbanie o brak defektów implementacji w dostarczonym systemie.',
                explanation: 'Nie jest możliwe zapewnienie całkowitego braku defektów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zmodyfikowanie testów, które nie powodują awarii, tak aby pozostała pewna liczba defektów.',
                explanation: 'To dotyczy innej zasady - "testy ulegają zużyciu".',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '4',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.1',
        question: 'Wskaż DWIE czynności testowe z poniższej listy, w których z NAJWIĘKSZYM prawdopodobieństwem zostanie zastosowana analiza wartości brzegowych i podział na klasy równoważności.',
        options: [
            {
                label: 'A',
                content: 'Implementacja testów.',
                explanation: 'Implementacja testów nie wymaga stosowania technik projektowania testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Projektowanie testów.',
                explanation: 'Projektowanie testów wymaga stosowania technik projektowania testów.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Wykonywanie testów.',
                explanation: 'Wykonywanie testów nie wymaga stosowania technik projektowania testów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Monitorowanie testów.',
                explanation: 'Monitorowanie testów nie wymaga stosowania technik projektowania testów.',
                isCorrect: false
            },
            {
                label: 'E',
                content: 'Analiza testów.',
                explanation: 'Analiza testów wymaga stosowania technik projektowania testów.',
                isCorrect: true
            }
        ],
        correctAnswer: [1, 4]
    },
    {
        id: '5',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.3',
        question: 'W której z poniższych odpowiedzi NAJLEPIEJ powiązano testalia z czynnościami, w ramach których zostały utworzone?',
        options: [
            {
                label: 'A',
                content: '1B, 2D, 3C, 4A',
                explanation: 'To jest prawidłowa odpowiedź - każde testalium jest powiązane z właściwą czynnością testową.',
                isCorrect: true
            },
            {
                label: 'B',
                content: '1B, 2D, 3A, 4C',
                explanation: 'To powiązanie nie jest optymalne dla wszystkich testaliów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1D, 2C, 3A, 4B',
                explanation: 'To powiązanie nie jest optymalne dla wszystkich testaliów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1D, 2C, 3B, 4A',
                explanation: 'To powiązanie nie jest optymalne dla wszystkich testaliów.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '6',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.5',
        question: 'Które z poniższych stwierdzeń dotyczących ról występujących w testowaniu należy uznać za NAJBARDZIEJ POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'W przypadku zwinnego wytwarzania oprogramowania za wykonywanie zadań związanych z zarządzaniem testami odpowiedzialny jest przede wszystkim zespół zwinny, a za zadania związane z wykonywaniem testów odpowiada głównie jedna osoba spoza zespołu.',
                explanation: 'To nieprawda - w zespole zwinnym testy wykonują różni członkowie zespołu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Osoba występująca w roli związanej z testowaniem ponosi ogólną odpowiedzialność za monitorowanie testów i nadzór nad testami, podczas gdy osoba występująca w roli związanej z zarządzaniem testami ponosi ogólną odpowiedzialność za planowanie i ukończenie testów.',
                explanation: 'Role są tu odwrócone - za monitorowanie i nadzór odpowiada osoba zarządzająca testami.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'W przypadku zwinnego wytwarzania oprogramowania zadania związane z zarządzaniem testami obejmujące swoim zasięgiem kilka zespołów są wykonywane przez kierownika testów spoza zespołu tworzącego oprogramowanie, ale niektóre z zadań związanych z zarządzaniem testami może wykonywać zespół zwinny.',
                explanation: 'To jest prawidłowa odpowiedź - opisuje właściwy podział zadań w zespole zwinnym.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Osoba występująca w roli związanej z zarządzaniem testami ponosi ogólną odpowiedzialność za analizę i projektowanie testów, podczas gdy osoba występująca w roli związanej z testowaniem ponosi ogólną odpowiedzialność za implementację i wykonywanie testów.',
                explanation: 'Za analizę i projektowanie odpowiada osoba w roli związanej z testowaniem, nie z zarządzaniem.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '7',
        chapter: 'Podstawy testowania',
        subchapter: '1.5.2',
        question: 'Które z poniższych stwierdzeń opisuje zaletę podejścia „cały zespół"?',
        options: [
            {
                label: 'A',
                content: 'Tworzenie zespołów bez testerów.',
                explanation: 'To nie jest zaleta - testerzy są ważną częścią zespołu "cały zespół".',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Zwiększenie dynamiki pracy zespołowej.',
                explanation: 'To jest prawidłowa odpowiedź - podejście zwiększa synergię i efektywność zespołu.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Specjalizacja członków zespołu.',
                explanation: 'Podejście "cały zespół" nie promuje wąskiej specjalizacji.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Tworzenie większych zespołów.',
                explanation: 'Wielkość zespołu nie jest istotna w tym podejściu.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '8',
        chapter: 'Podstawy testowania',
        subchapter: '1.5.3',
        question: 'Które z poniższych stwierdzeń dotyczących niezależności testowania jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'Ze względu na różne techniczne punkty widzenia niezależni testerzy mogą wykryć innego rodzaju defekty niż programiści, jednak niezależność testerów może być przyczyną ich konfliktów z programistami.',
                explanation: 'To jest prawidłowa odpowiedź - opisuje zarówno korzyści jak i wady niezależności testowania.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Programiści znają własny kod i dlatego potrafią znaleźć w nim jedynie niewielką liczbę defektów, jednak takie defekty mogą zostać również wykryte przez testerów dzięki podobnemu doświadczeniu w dziedzinie oprogramowania.',
                explanation: 'Znajomość kodu nie ogranicza zdolności znajdowania defektów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Niezależność testowania wymaga zaangażowania testerów spoza zespołu programistów, a w idealnym przypadku spoza organizacji, chociaż tacy testerzy mogą mieć trudności ze zrozumieniem dziedziny zastosowania.',
                explanation: 'Niezależność może być osiągnięta na różne sposoby, nie tylko przez zewnętrznych testerów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testerzy spoza zespołu programistów są bardziej niezależni od testerów będących członkami zespołu, ale testerzy z zespołu mogą być w większym stopniu obarczani winą za nieterminowe przekazanie produktu do eksploatacji.',
                explanation: 'To błędne założenie - testerzy zewnętrzni mogą być bardziej narażeni na obwinianie za opóźnienia.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '9',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.2',
        question: 'Które z poniższych stwierdzeń opisuje dobrą praktykę testowania mającą zastosowanie do wszystkich cykli wytwarzania oprogramowania?',
        options: [
            {
                label: 'A',
                content: 'Do każdego poziomu testów powinien być przypisany odpowiedni poziom wytwarzania.',
                explanation: 'Nie istnieje jednoznaczne pojęcie "poziomu wytwarzania".',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Do każdego celu testów powinien być przypisany odpowiedni cel wytwarzania.',
                explanation: 'Cele testów nie muszą mieć odpowiadających im celów wytwarzania.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Do każdej czynności związanej z testowaniem oprogramowania powinna być przypisana odpowiadająca jej czynność wykonywana przez użytkownika.',
                explanation: 'Nie wszystkie czynności testowe wiążą się z czynnościami użytkowników.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Do każdej czynności związanej z wytwarzaniem oprogramowania powinna być przypisana odpowiadająca jej czynność testowa.',
                explanation: 'To jest prawidłowa odpowiedź - każda czynność wytwarzania powinna być objęta kontrolą jakości.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '10',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.3',
        question: 'Która z następujących odpowiedzi przedstawia przykład podejścia „najpierw test" do wytwarzania oprogramowania?',
        options: [
            {
                label: 'A',
                content: 'Wytwarzanie sterowane testami modułowymi.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Wytwarzanie sterowane testami integracyjnymi.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wytwarzanie sterowane testami systemowymi.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wytwarzanie sterowane testami akceptacyjnymi.',
                explanation: 'To jest prawidłowa odpowiedź - ATDD jest przykładem podejścia "najpierw test".',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '11',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.5',
        question: 'Które z poniższych stwierdzeń przedstawia NAJLEPSZY opis podejścia „przesunięcie w lewo"?',
        options: [
            {
                label: 'A',
                content: 'Po uzgodnieniu przez programistów czynności manualne znajdujące się po lewej stronie procesu testowego podlegają automatyzacji zgodnie z zasadą „wczesne testowanie oszczędza czas i pieniądze".',
                explanation: 'Nie ma czegoś takiego jak "lewa strona procesu testowego".',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Jeśli jest to opłacalne, wykonanie czynności testowych przesuwa się do wcześniejszych faz cyklu wytwarzania oprogramowania w celu zmniejszenia łącznych kosztów zapewnienia jakości poprzez ograniczenie liczby defektów wykrywanych na dalszych etapach cyklu.',
                explanation: 'To jest prawidłowa odpowiedź - dokładnie opisuje istotę podejścia "shift left".',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Jeśli testerzy dysponują wolnym czasem, powinni zająć się automatyzacją testów regresji, zaczynając od testów modułowych i testów integracji modułów.',
                explanation: 'To nie opisuje istoty podejścia "shift left".',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Jeśli jest taka możliwość, testerzy szkolą się w wykonywaniu swoich zadań na wczesnych etapach wytwarzania oprogramowania, tak aby w późniejszych etapach można było zautomatyzować więcej czynności testowych.',
                explanation: 'To nie opisuje istoty podejścia "shift left".',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '12',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.6',
        question: 'Który z poniższych efektów z NAJMNIEJSZYM prawdopodobieństwem wystąpi po przeprowadzeniu retrospektywy?',
        options: [
            {
                label: 'A',
                content: 'Podniesienie jakości kolejnych przedmiotów testów dzięki określeniu usprawnień w praktykach programistycznych.',
                explanation: 'To jest typowy efekt retrospektywy.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Wzrost efektywności testowania dzięki skróceniu czasu konfigurowania środowisk testowych z zastosowaniem automatyzacji.',
                explanation: 'To jest typowy efekt retrospektywy.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Lepsze zrozumienie przez użytkowników końcowych procesów wytwarzania i testowania.',
                explanation: 'To jest prawidłowa odpowiedź - użytkownicy końcowi rzadko uczestniczą w retrospektywach.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Udoskonalenie skryptów testów automatycznych dzięki informacjom zwrotnym od programistów.',
                explanation: 'To jest typowy efekt retrospektywy.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '13',
        chapter: 'Podstawy testowania',
        subchapter: '2.2.1',
        question: 'Który z poniższych poziomów testów zostanie z NAJWIĘKSZYM prawdopodobieństwem uwzględniony, jeśli testowanie skupia się na walidacji i nie jest realizowane przez testerów?',
        options: [
            {
                label: 'A',
                content: 'Testowanie modułowe.',
                explanation: 'Testowanie modułowe skupia się na weryfikacji zgodności ze specyfikacją, nie walidacji, i jest wykonywane przez programistów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testowanie integracji modułów.',
                explanation: 'Testowanie integracji modułów skupia się na weryfikacji interfejsów, nie walidacji, i zwykle jest wykonywane przez programistów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testowanie integracji systemów.',
                explanation: 'Testowanie integracji systemów skupia się na weryfikacji interfejsów zewnętrznych, nie walidacji, i jest wykonywane przez testerów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testowanie akceptacyjne.',
                explanation: 'To jest prawidłowa odpowiedź - testowanie akceptacyjne skupia się na walidacji systemu i jest wykonywane przez użytkowników końcowych.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '14',
        chapter: 'Podstawy testowania',
        subchapter: '2.2.3',
        question: 'Oprogramowanie systemu nawigacji zostało poprawione, ponieważ proponowało trasy naruszające przepisy ruchu drogowego, np. jazdę pod prąd ulicami jednokierunkowymi. Która z poniższych odpowiedzi NAJLEPIEJ opisuje testy, które należy przeprowadzić?',
        options: [
            {
                label: 'A',
                content: 'Tylko testowanie potwierdzające.',
                explanation: 'Samo testowanie potwierdzające nie wystarczy - potrzebne są też testy regresji.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testowanie potwierdzające, a następnie testowanie regresji.',
                explanation: 'To jest prawidłowa odpowiedź - trzeba sprawdzić poprawkę i jej potencjalny wpływ na resztę systemu.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Tylko testowanie regresji.',
                explanation: 'Same testy regresji nie wystarczą - trzeba też potwierdzić działanie poprawki.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testowanie regresji, a następnie testowanie potwierdzające.',
                explanation: 'Kolejność powinna być odwrotna - najpierw testowanie potwierdzające.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '15',
        chapter: 'Podstawy testowania',
        subchapter: '3.1.3',
        question: 'W której z poniższych odpowiedzi NAJBARDZIEJ POPRAWNIE wyszczególniono przykładowe defekty, które można znaleźć za pomocą testowania statycznego (a nie za pomocą testowania dynamicznego)?',
        options: [
            {
                label: 'A',
                content: '2, 5',
                explanation: 'Obie pozycje dotyczą defektów, które można wykryć tylko w testowaniu dynamicznym.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '3, 5',
                explanation: 'Pozycja 5 dotyczy defektu, który można wykryć tylko w testowaniu dynamicznym.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1, 2, 4',
                explanation: 'Pozycja 2 dotyczy defektu, który można wykryć tylko w testowaniu dynamicznym.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1, 3, 4',
                explanation: 'To jest prawidłowa odpowiedź - wszystkie te defekty można wykryć w testowaniu statycznym.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '16',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.1',
        question: 'Która z poniższych jest korzyścią wynikającą z wczesnego i częstego otrzymywania informacji zwrotnych przez interesariuszy?',
        options: [
            {
                label: 'A',
                content: 'Zmiany w wymaganiach są lepiej rozumiane i wcześniej wprowadzane.',
                explanation: 'To jest prawidłowa odpowiedź - wczesne informacje zwrotne pozwalają lepiej zrozumieć i szybciej wprowadzać zmiany.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Zapewnienie, że interesariusze biznesowi rozumieją wymagania użytkownika.',
                explanation: 'Informacje zwrotne nie służą do lepszego zrozumienia wymagań przez interesariuszy.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Możliwość wprowadzania przez właścicieli produktów zmian w wymaganiach w dowolnym momencie.',
                explanation: 'Możliwość nieograniczonych zmian nie jest dobrą praktyką.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Poinformowanie użytkowników końcowych przed wydaniem produktu o wymaganiach, które nie zostaną zaimplementowane.',
                explanation: 'Informacje zwrotne pochodzą od interesariuszy, nie do nich.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '17',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.4',
        question: 'W której z poniższych odpowiedzi NAJLEPIEJ powiązano typy przeglądów i ich opisy?',
        options: [
            {
                label: 'A',
                content: '1A, 2B, 3C, 4D',
                explanation: 'To powiązanie nie jest optymalne dla wszystkich typów przeglądów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '1A, 2D, 3C, 4B',
                explanation: 'To jest prawidłowa odpowiedź - wszystkie typy przeglądów są poprawnie powiązane z ich opisami.',
                isCorrect: true
            },
            {
                label: 'C',
                content: '1B, 2C, 3D, 4A',
                explanation: 'To powiązanie nie jest optymalne dla wszystkich typów przeglądów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1C, 2D, 3A, 4B',
                explanation: 'To powiązanie nie jest optymalne dla wszystkich typów przeglądów.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '18',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.5',
        question: 'Która z poniższych odpowiedzi opisuje czynnik wpływający na powodzenie przeglądu?',
        options: [
            {
                label: 'A',
                content: 'Zapewnienie udziału przedstawicieli kierownictwa w roli przeglądających.',
                explanation: 'Udział kierownictwa jako przeglądających nie jest wymagany dla sukcesu przeglądu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Podział dużych produktów pracy na mniejsze fragmenty.',
                explanation: 'To jest prawidłowa odpowiedź - mniejsze fragmenty łatwiej poddać efektywnemu przeglądowi.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Dodanie oceny uczestników przeglądu do listy celów.',
                explanation: 'Ocena uczestników nie powinna być celem przeglądu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zaplanowanie przeglądów w taki sposób, aby obejmowały tylko jeden dokument.',
                explanation: 'Ograniczenie do jednego dokumentu nie jest wymagane ani korzystne.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '19',
        chapter: 'Podstawy testowania',
        subchapter: '4.1.1',
        question: 'Jaka jest GŁÓWNA różnica między czarnoskrzynkowymi technikami testowania i technikami testowania opartymi na doświadczeniu?',
        options: [
            {
                label: 'A',
                content: 'Przedmiot testów.',
                explanation: 'Obie techniki mogą być stosowane dla tych samych przedmiotów testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Poziom testów, na którym stosowana jest technika testowania.',
                explanation: 'Obie techniki mogą być stosowane na wszystkich poziomach testów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Podstawa testów.',
                explanation: 'To jest prawidłowa odpowiedź - techniki czarnoskrzynkowe bazują na specyfikacji, a oparte na doświadczeniu na wiedzy testerów.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Cykl wytwarzania oprogramowania, w którym może zostać zastosowana dana technika testowania.',
                explanation: 'Obie techniki mogą być stosowane w każdym cyklu wytwarzania.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '20',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.1',
        question: 'Testujesz moduł sprawdzania kodu PIN, który akceptuje poprawne kody PIN, a odrzuca niepoprawne kody PIN. Kod PIN jest ciągiem cyfr. Poprawna wartość składa się z czterech cyfr, a w ciągu muszą wystąpić co najmniej dwie różne cyfry. Które z poniższych zestawów wejściowych danych testowych pokrywają wszystkie klasy równoważności dla tego scenariusza?',
        options: [
            {
                label: 'A',
                content: '112, 1111, 1234, 123456',
                explanation: 'To jest prawidłowa odpowiedź - pokrywa wszystkie klasy: długość za krótka/dobra/za długa oraz kody PIN z jednakowymi/różnymi cyframi.',
                isCorrect: true
            },
            {
                label: 'B',
                content: '1, 123, 1111, 1234',
                explanation: 'Ten zestaw nie pokrywa klasy długość > 4.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '12, 112, 1112, 11112',
                explanation: 'Ten zestaw nie pokrywa klasy PIN z jednakowymi cyframi o długości 4.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1, 111, 1111, 11111',
                explanation: 'Ten zestaw nie pokrywa klasy PIN z różnymi cyframi.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '21',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.2',
        question: 'Projektujesz przypadki testowe, korzystając z dwupunktowej analizy wartości brzegowych. Który z poniższych zestawów danych wejściowych pozwala uzyskać największe pokrycie?',
        options: [
            {
                label: 'A',
                content: '100, 150, 200, 201',
                explanation: 'Ten zestaw nie zawiera wszystkich wartości brzegowych.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '99, 100, 200, 201',
                explanation: 'Ten zestaw nie zapewnia pełnego pokrycia dla analizy dwupunktowej.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '98, 99, 100, 101',
                explanation: 'Ten zestaw testuje tylko jedną granicę.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '101, 150, 199, 200',
                explanation: 'To jest prawidłowa odpowiedź - zawiera wartości brzegowe i sąsiadujące z nimi wartości.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '22',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.3',
        question: 'Które dane testowe pozwolą wykazać, że w tablicy decyzyjnej znajdują się sprzeczne reguły?',
        options: [
            {
                label: 'A',
                content: 'W1 = P, W2 = P, W3 = F',
                explanation: 'Ta kombinacja nie jest zgodna z żadną regułą - to pominięcie, nie sprzeczność.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'W1 = P, W2 = F, W3 = P',
                explanation: 'Ta kombinacja odpowiada tylko jednej regule.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'W1 = P, W2 = P, W3 = P oraz W1 = F, W2 = P, W3 = P',
                explanation: 'Obie kombinacje odpowiadają tej samej regule.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'W1 = F, W2 = F, W3 = F',
                explanation: 'To jest prawidłowa odpowiedź - ta kombinacja wskazuje sprzeczność między regułami.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '23',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.4',
        question: 'Jaka jest MINIMALNA liczba przypadków testowych niezbędna do uzyskania 100% pokrycia poprawnych przejść?',
        options: [
            {
                label: 'A',
                content: '3',
                explanation: 'To jest prawidłowa odpowiedź - trzy przypadki testowe wystarczą do pokrycia wszystkich przejść.',
                isCorrect: true
            },
            {
                label: 'B',
                content: '2',
                explanation: 'Dwa przypadki testowe nie wystarczą do pokrycia wszystkich przejść.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '5',
                explanation: 'Pięć przypadków testowych to więcej niż minimum potrzebne do pokrycia wszystkich przejść.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '6',
                explanation: 'Sześć przypadków testowych to więcej niż minimum potrzebne do pokrycia wszystkich przejść.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '24',
        chapter: 'Podstawy testowania',
        subchapter: '4.3.2',
        question: 'Ile elementów pokrycia należy przetestować?',
        options: [
            {
                label: 'A',
                content: '2',
                explanation: 'W grafie jest więcej niż 2 krawędzie.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '4',
                explanation: 'W grafie jest więcej niż 4 krawędzie.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '8',
                explanation: 'To jest prawidłowa odpowiedź - w grafie jest 8 krawędzi.',
                isCorrect: true
            },
            {
                label: 'D',
                content: '7',
                explanation: 'W grafie jest 8, nie 7 krawędzi.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '25',
        chapter: 'Podstawy testowania',
        subchapter: '4.3.3',
        question: 'W jaki sposób testowanie białoskrzynkowe może wspomóc testowanie czarnoskrzynkowe?',
        options: [
            {
                label: 'A',
                content: 'Miary pokrycia stosowane w technikach białoskrzynkowych mogą ułatwić testerom ocenę testów czarnoskrzynkowych pod kątem pokrycia kodu przez te testy czarnoskrzynkowe.',
                explanation: 'To jest prawidłowa odpowiedź - miary białoskrzynkowe pozwalają ocenić efektywność testów czarnoskrzynkowych.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Analiza pokrycia w testach białoskrzynkowych może ułatwić testerom zidentyfikowanie nieosiągalnych fragmentów kodu źródłowego.',
                explanation: 'To prawda, ale nie odpowiada na pytanie jak białoskrzynkowe wspomaga czarnoskrzynkowe.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testowanie gałęzi obejmuje czarnoskrzynkowe techniki testowania, więc uzyskanie pełnego pokrycia gałęzi pozwala uzyskać pełne pokrycie w dowolnej technice czarnoskrzynkowej.',
                explanation: 'Testowanie gałęzi nie obejmuje technik czarnoskrzynkowych.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Białoskrzynkowe techniki testowania pozwalają określić elementy pokrycia dla czarnoskrzynkowych technik testowania.',
                explanation: 'Każda technika ma własne elementy pokrycia niezależne od innych technik.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '26',
        chapter: 'Podstawy testowania',
        subchapter: '4.4.1',
        question: 'Którą technikę NAJPRAWDOPODOBNIEJ stosuje tester korzystający z tej listy podczas przeprowadzania testów?',
        options: [
            {
                label: 'A',
                content: 'Testowanie eksploracyjne.',
                explanation: 'W testowaniu eksploracyjnym nie używa się list awarii.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Atak usterek.',
                explanation: 'To jest prawidłowa odpowiedź - lista zawiera typowe awarie wykorzystywane w tej technice.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Testowanie w oparciu o listę kontrolną.',
                explanation: 'Lista kontrolna zawiera warunki testowe, nie potencjalne awarie.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Analiza wartości brzegowych.',
                explanation: 'Analiza wartości brzegowych nie opiera się na liście awarii.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '27',
        chapter: 'Podstawy testowania',
        subchapter: '4.4.3',
        question: 'Która z poniższych odpowiedzi NAJLEPIEJ opisuje powody potencjalnego zwiększenia pokrycia dzięki testowaniu w oparciu o listę kontrolną?',
        options: [
            {
                label: 'A',
                content: 'Elementy listy kontrolnej mogą zostać zdefiniowane na wystarczająco niskim poziomie szczegółowości, więc testerzy mogą zaimplementować i wykonywać szczegółowe przypadki testowe oparte na takich elementach.',
                explanation: 'To nie wyjaśnia jak zwiększa się pokrycie.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Listy kontrolne mogą zostać zautomatyzowane, więc przy każdym uruchomieniu testów automatycznych uwzględniających elementy listy kontrolnej zwiększa się stopień pokrycia.',
                explanation: 'Automatyzacja nie zwiększa pokrycia sama w sobie.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Każdy element listy kontrolnej powinien być testowany odrębnie i niezależnie od innych, tak aby poszczególne elementy pokrywały inne obszary oprogramowania.',
                explanation: 'To dotyczy kolejności wykonywania, nie zwiększania pokrycia.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Dwaj testerzy projektujący i wykonujący testy na podstawie tych samych elementów ogólnej listy kontrolnej często przeprowadzą testowanie w nieco inny sposób.',
                explanation: 'To jest prawidłowa odpowiedź - różni testerzy mogą inaczej interpretować ogólne elementy listy, zwiększając pokrycie.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '28',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.2',
        question: 'Która z poniższych odpowiedzi przedstawia NAJLEPSZY przykład kryterium akceptacji zorientowanego na scenariusze?',
        options: [
            {
                label: 'A',
                content: 'Aplikacja musi umożliwiać użytkownikowi usunięcie, na jego żądanie, jego konta i wszystkich danych powiązanych z tym kontem.',
                explanation: 'To jest kryterium zorientowane na reguły.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Kiedy klient dodaje towar do koszyka i przechodzi do płatności, powinien być poproszony o zalogowanie się lub utworzenie konta, jeśli do tej pory tego nie zrobił.',
                explanation: 'To jest prawidłowa odpowiedź - opisuje konkretny scenariusz zachowania systemu.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'IF (contain(product(23).Name, cart.products())) THEN return FALSE',
                explanation: 'To jest fragment kodu, nie kryterium akceptacji.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Serwis internetowy musi być zgodny ze standardami dostępności systemów teleinformatycznych (ICT Accessibility 508 standards), by zapewnić dostęp do serwisu dla użytkowników będących osobami niepełnosprawnymi.',
                explanation: 'To jest kryterium zorientowane na reguły.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '29',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.3',
        question: 'Który z poniższych przypadków testowych pozwoli NAJLEPIEJ przetestować kryterium KA3?',
        options: [
            {
                label: 'A',
                content: 'Sprawdzenie, czy zwykły użytkownik ma dostęp do pięter 1, 2 i 3',
                explanation: 'To testuje uprawnienia zwykłego użytkownika, nie specjalnego.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Sprawdzenie, czy zwykły użytkownik nie ma dostępu do piętra 4',
                explanation: 'To testuje ograniczenia zwykłego użytkownika, nie uprawnienia specjalnego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Sprawdzenie, czy specjalny użytkownik ma dostęp do piętra 5',
                explanation: 'Piętro 5 nie jest wymienione w kryteriach akceptacji.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Sprawdzenie, czy specjalny użytkownik ma dostęp do piętra 1, 2 i 3.',
                explanation: 'To jest prawidłowa odpowiedź - sprawdza czy specjalny użytkownik ma te same prawa co zwykły.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '30',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.1',
        question: 'Która z poniższych odpowiedzi NIE opisuje celu planu testów?',
        options: [
            {
                label: 'A',
                content: 'Zdefiniowanie danych testowych i oczekiwanych rezultatów testów modułowych i testów integracji modułów.',
                explanation: 'To jest prawidłowa odpowiedź - szczegółowe dane testowe należą do przypadków testowych, nie planu testów.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Zdefiniowanie jako kryteriów wyjścia dla poziomu testów modułowych zasady „musi zostać osiągnięte 100% pokrycia instrukcji i 100% pokrycia gałęzi".',
                explanation: 'Definiowanie kryteriów wyjścia jest jednym z celów planu testów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Określenie listy pól, które powinny się znaleźć w raporcie o postępie testów oraz ustalenie postaci tego raportu.',
                explanation: 'Definiowanie szablonów dokumentacji jest jednym z celów planu testów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wyjaśnienie, dlaczego testowanie nie obejmie testów integracji systemów, mimo że strategia testów wymaga przeprowadzenia testów na tym poziomie.',
                explanation: 'Uzasadnianie odstępstw od strategii jest jednym z celów planu testów.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '31',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.4',
        question: 'Na początku każdej iteracji zespół szacuje pracochłonność (w osobodniach) niezbędną do zrealizowania tej iteracji. Ile wynosi szacowana pracochłonność iteracji 5?',
        options: [
            {
                label: 'A',
                content: '10,5 osobodnia',
                explanation: 'Ta wartość nie wynika z zastosowania podanego wzoru.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '8,25 osobodnia',
                explanation: 'Ta wartość nie wynika z zastosowania podanego wzoru.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '6,5 osobodnia',
                explanation: 'To jest prawidłowa odpowiedź - wynika z podstawienia do wzoru: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26/4 = 6,5.',
                isCorrect: true
            },
            {
                label: 'D',
                content: '9,4 osobodnia',
                explanation: 'Ta wartość nie wynika z zastosowania podanego wzoru.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '32',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.5',
        question: 'Przygotowujesz harmonogram wykonania testów obejmujących siedem przypadków testowych – od PT 1 do PT 7. Który z poniższych przypadków testowych powinien zostać wykonany jako szósty?',
        options: [
            {
                label: 'A',
                content: 'PT 3',
                explanation: 'To jest prawidłowa odpowiedź - PT3 powinien być wykonany jako szósty uwzględniając priorytety i zależności.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'PT 5',
                explanation: 'PT5 ma wyższy priorytet i musi być wykonany wcześniej.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'PT 6',
                explanation: 'PT6 powinien być wykonany jako ostatni ze względu na niski priorytet.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'PT 2',
                explanation: 'PT2 musi być wykonany wcześniej ze względu na zależności.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '33',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.6',
        question: 'Które z poniższych spostrzeżeń zostało odzwierciedlone w modelu piramidy testów?',
        options: [
            {
                label: 'A',
                content: 'Testy mogą mieć różne priorytety.',
                explanation: 'Piramida testów nie dotyczy priorytetów testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testy mogą mieć różne poziomy szczegółowości.',
                explanation: 'To jest prawidłowa odpowiedź - piramida testów pokazuje różne poziomy szczegółowości testów.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Testy mogą wymagać różnych kryteriów pokrycia.',
                explanation: 'Piramida testów nie dotyczy kryteriów pokrycia.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testy mogą być zależne od innych testów.',
                explanation: 'Piramida testów nie dotyczy zależności między testami.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '34',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.7',
        question: 'Jaki istnieje związek między kwadrantami testowymi, poziomami testów i typami testów?',
        options: [
            {
                label: 'A',
                content: 'Kwadranty testowe reprezentują konkretne kombinacje poziomów testów i typów testów, definiując ich miejsce w cyklu wytwarzania oprogramowania.',
                explanation: 'Kwadranty nie reprezentują kombinacji poziomów i typów testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Kwadranty testowe opisują poziom szczegółowości różnych typów testów wykonywanych na każdym poziomie testów.',
                explanation: 'To jest domena piramidy testów, nie kwadrantów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Kwadranty testowe odzwierciedlają powiązanie typów testów, które można wykonać, z odpowiednimi poziomami testów.',
                explanation: 'Kwadranty nie definiują powiązań między typami i poziomami.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Kwadranty testowe grupują poziomy testów i typy testów według różnych kryteriów, ukierunkowując je na potrzeby konkretnych interesariuszy.',
                explanation: 'To jest prawidłowa odpowiedź - kwadranty grupują poziomy i typy testów według celów biznesowych/technicznych.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '35',
        chapter: 'Podstawy testowania',
        subchapter: '5.2.3',
        question: 'Która z poniższych odpowiedzi przedstawia przykład wpływu analizy ryzyka produktowego na staranność i zakres testowania?',
        options: [
            {
                label: 'A',
                content: 'Ciągłe monitorowanie ryzyka pozwala zidentyfikować pojawiające się ryzyka najszybciej jak to możliwe.',
                explanation: 'To dotyczy kontroli ryzyka, nie wpływu analizy na testowanie.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Identyfikacja ryzyka pozwala zastosować działania łagodzące ryzyko i obniżyć poziom ryzyka.',
                explanation: 'To dotyczy łagodzenia ryzyka, nie wpływu analizy na testowanie.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Ocena poziomu ryzyka ułatwia określenie szczegółowości testowania.',
                explanation: 'To jest prawidłowa odpowiedź - poziom ryzyka wpływa na szczegółowość testowania.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Analiza ryzyka pozwala zdefiniować elementy pokrycia.',
                explanation: 'Elementy pokrycia definiuje się za pomocą technik testowania, nie analizy ryzyka.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '36',
        chapter: 'Podstawy testowania',
        subchapter: '5.3.2',
        question: 'Która z następujących czynności w procesie testowania w NAJWIĘKSZYM stopniu korzysta z raportów o postępie testów?',
        options: [
            {
                label: 'A',
                content: 'Projektowanie testów.',
                explanation: 'Projektowanie testów nie opiera się na raportach o postępie.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Ukończenie testów.',
                explanation: 'To jest prawidłowa odpowiedź - raporty o postępie są podstawą sumarycznego raportu z testów.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Analiza testów.',
                explanation: 'Analiza testów nie opiera się na raportach o postępie.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Planowanie testów.',
                explanation: 'Planowanie testów nie opiera się na raportach o postępie.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '37',
        chapter: 'Podstawy testowania',
        subchapter: '5.4.1',
        question: 'Które z poniższych stwierdzeń NIE opisuje przykładu wspomagania testowania przez zarządzanie konfiguracją?',
        options: [
            {
                label: 'A',
                content: 'Wszystkie elementy zatwierdzane w repozytorium są jednoznacznie identyfikowane i objęte kontrolą wersji.',
                explanation: 'To jest prawidłowy przykład wspomagania przez zarządzanie konfiguracją.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Wszystkie zmiany elementów środowiska testowego podlegają śledzeniu.',
                explanation: 'To jest prawidłowy przykład wspomagania przez zarządzanie konfiguracją.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wszystkie specyfikacje wymagań są przywoływane w sposób jednoznaczny w planach testów.',
                explanation: 'To jest prawidłowy przykład wspomagania przez zarządzanie konfiguracją.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wszystkie zdefiniowane defekty mają przypisany status.',
                explanation: 'To jest prawidłowa odpowiedź - zarządzanie statusami defektów należy do zarządzania defektami, nie konfiguracją.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '38',
        chapter: 'Podstawy testowania',
        subchapter: '5.5.1',
        question: 'Jakie są NAJWAŻNIEJSZE informacje, których brakuje w tym raporcie o defekcie?',
        options: [
            {
                label: 'A',
                content: 'Imię i nazwisko testera i data raportu.',
                explanation: 'Te informacje nie są najważniejsze dla odtworzenia defektu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Elementy środowiska testowego i ich numery wersji.',
                explanation: 'To jest prawidłowa odpowiedź - informacje o środowisku są kluczowe dla odtworzenia defektu.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Identyfikacja przedmiotu testów.',
                explanation: 'Przedmiot testów jest już zidentyfikowany w raporcie.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wpływ z punktu widzenia interesariuszy.',
                explanation: 'Wpływ jest już określony przez krytyczność defektu.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '39',
        chapter: 'Podstawy testowania',
        subchapter: '6.1.1',
        question: 'Wskaż kategorię narzędzi, które ułatwiają uporządkowanie przypadków testowych i wykrytych defektów oraz zarządzanie konfiguracją.',
        options: [
            {
                label: 'A',
                content: 'Narzędzia do wykonywania testów i pomiaru pokrycia',
                explanation: 'Te narzędzia nie służą do zarządzania testami i defektami.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Narzędzia do projektowania i implementacji testów.',
                explanation: 'Te narzędzia nie służą do zarządzania testami i defektami.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Narzędzia do zarządzania defektami.',
                explanation: 'Te narzędzia służą tylko do zarządzania defektami, nie całym testowaniem.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Narzędzia do zarządzania testowaniem.',
                explanation: 'To jest prawidłowa odpowiedź - te narzędzia wspierają zarządzanie całym procesem testowym.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '40',
        chapter: 'Podstawy testowania',
        subchapter: '6.2.1',
        question: 'Która z poniższych odpowiedzi NAJLEPIEJ opisuje korzyści związane z automatyzacją testowania?',
        options: [
            {
                label: 'A',
                content: 'Możliwość generowania przypadków testowych bez dostępu do podstawy testów.',
                explanation: 'Automatyzacja nie pozwala generować testów bez podstawy testów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Uzyskanie większego pokrycia dzięki bardziej obiektywnej ocenie.',
                explanation: 'Sama obiektywna ocena nie zwiększa pokrycia.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Zwiększenie czasu wykonywania testów dzięki większej mocy obliczeniowej.',
                explanation: 'Zwiększenie czasu wykonywania nie jest korzyścią.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zapobieganie błędom ludzkim poprzez zwiększenie spójności i powtarzalności.',
                explanation: 'To jest prawidłowa odpowiedź - automatyzacja eliminuje ludzkie błędy w wykonywaniu testów.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    }
];

export default questionSetC;