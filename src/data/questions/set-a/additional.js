// additional.js

export const additionalQuestions = [
    {
        id: 'A1',
        chapter: 'Podstawy testowania',
        subchapter: '1.1.2',
        question: 'Twoim zadaniem jest przeanalizowanie i usunięcie przyczyn awarii w nowym systemie, który ma zostać przekazany do eksploatacji. Którą z wymienionych czynności wykonujesz?',
        options: [
            {
                label: 'A',
                content: 'Debugowanie',
                explanation: 'Debugowanie to proces wyszukiwania, analizowania i usuwania przyczyn awarii w module lub systemie.'
            },
            {
                label: 'B',
                content: 'Testowanie oprogramowania',
                explanation: 'Testowanie to proces planowania, przygotowywania i dokonywania oceny modułu lub systemu oraz powiązanych produktów pracy. Proces ten nie jest związany z usuwaniem przyczyn awarii.'
            },
            {
                label: 'C',
                content: 'Pozyskiwanie wymagań',
                explanation: 'Pozyskiwanie wymagań to proces gromadzenia, rejestrowania i scalania wymagań pochodzących z dostępnych źródeł. Proces ten nie jest związany z usuwaniem przyczyn awarii.'
            },
            {
                label: 'D',
                content: 'Zarządzanie defektami',
                explanation: 'Zarządzanie defektami to proces rozpoznawania, rejestrowania, klasyfikowania, badania, rozwiązywania i usuwania defektów. Proces ten nie jest związany z usuwaniem przyczyn awarii.'
            }
        ],
        correctAnswer: 0
    },
    {
        id: 'A2',
        chapter: 'Podstawy testowania',
        subchapter: '1.2.2',
        question: 'W wielu organizacjach, które wytwarzają oprogramowanie, dział odpowiedzialny za testowanie jest nazywany działem zapewnienia jakości. Czy to zdanie jest poprawne, a jeśli nie, to dlaczego?',
        options: [
            {
                label: 'A',
                content: 'Zdanie jest poprawne. Testowanie i zapewnienie jakości to dwa różne określenia na ten sam proces.',
                explanation: 'To nie jest prawda, testowanie i zapewnienie jakości to różne procesy o różnych celach.'
            },
            {
                label: 'B',
                content: 'Zdanie jest poprawne. Określenia te mogą być używane wymiennie, ponieważ działania wykonywane w ramach testowania i działania wykonywane w ramach zapewnienia jakości koncentrują się na tych samych problemach związanych z jakością.',
                explanation: 'To nie jest prawda, testowanie i zapewnienie jakości mają różne cele i koncentrują się na różnych aspektach.'
            },
            {
                label: 'C',
                content: 'Zdanie jest niepoprawne. Testowanie jest szerszym procesem, który obejmuje wszystkie działania związane z jakością, a zapewnienie jakości koncentruje się na procesach związanych z jakością.',
                explanation: 'To jest odwrotnie - zapewnienie jakości jest szerszym procesem.'
            },
            {
                label: 'D',
                content: 'Zdanie jest niepoprawne. Zapewnienie jakości koncentruje się na procesach związanych z jakością, a testowanie — na wykazaniu, że dany moduł lub system jest zdatny do użytku zgodnie z przeznaczeniem, oraz na wykryciu ewentualnych defektów.',
                explanation: 'To jest prawidłowa odpowiedź - precyzyjnie opisuje różnice między testowaniem a zapewnieniem jakości.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: 'A3',
        chapter: 'Podstawy testowania',
        subchapter: '1.2.3',
        question: 'Telefon dzwoniący w sąsiednim pomieszczeniu chwilowo rozproszył programistę, przez co niewłaściwie zaprogramował on logikę sprawdzającą górną wartość brzegową jednej ze zmiennych wejściowych. Później, w trakcie testowania systemowego, tester zauważył, że system akceptuje nieprawidłowe wartości wejściowe wpisywane w polu wprowadzania danych. Nieprawidłowo zakodowana logika sprawdzania górnej wartości brzegowej to:',
        options: [
            {
                label: 'A',
                content: 'Podstawowa przyczyna',
                explanation: 'Podstawową przyczyną jest rozproszenie programisty podczas pisania kodu.'
            },
            {
                label: 'B',
                content: 'Awaria',
                explanation: 'Akceptowanie nieprawidłowych wartości wejściowych to awaria.'
            },
            {
                label: 'C',
                content: 'Pomyłka',
                explanation: 'Pomyłka to błąd w myśleniu, który spowodował umieszczenie defektu w kodzie.'
            },
            {
                label: 'D',
                content: 'Defekt',
                explanation: 'To jest prawidłowa odpowiedź - problem w kodzie to defekt.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: 'A4',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.3',
        question: 'Przeanalizuj podany fragment testaliów: Karta opisu testu nr 04.018, Czas trwania sesji: 1 godzina, Badany obiekt: Strona rejestracji, Badanie za pomocą: Różnych zestawów niepoprawnych danych wejściowych, Wykrywane defekty: Defekty związane z akceptacją rejestracji w przypadku podania nieprawidłowych danych wejściowych. W ramach której czynności testowej powstały powyższe testalia?',
        options: [
            {
                label: 'A',
                content: 'Planowanie testów',
                explanation: 'Planowanie testów nie obejmuje tworzenia kart opisu testów.'
            },
            {
                label: 'B',
                content: 'Monitorowanie testów i nadzór nad testami',
                explanation: 'Te czynności nie obejmują tworzenia kart opisu testów.'
            },
            {
                label: 'C',
                content: 'Analiza testów',
                explanation: 'Analiza testów nie obejmuje tworzenia kart opisu testów.'
            },
            {
                label: 'D',
                content: 'Projektowanie testów',
                explanation: 'To jest prawidłowa odpowiedź - karty opisu testów powstają na etapie projektowania testów.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: 'A13',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.2',
        question: 'Które z poniższych stwierdzeń dotyczących przeglądów formalnych jest PRAWDZIWE?',
        options: [
            {
                label: 'A',
                content: 'Niektóre przeglądy nie wymagają wyznaczenia więcej niż jednej roli.',
                explanation: 'We wszystkich typach przeglądów występuje więcej niż jedna rola.'
            },
            {
                label: 'B',
                content: 'Proces przeglądu składa się z kilku czynności.',
                explanation: 'To jest prawidłowa odpowiedź - w procesie przeglądu formalnego wykonywanych jest kilka czynności.'
            },
            {
                label: 'C',
                content: 'Dokumentacja będąca przedmiotem przeglądu nie jest przekazywana uczestnikom przed rozpoczęciem spotkania związanego z przeglądem.',
                explanation: 'Dokumentacja powinna być przekazywana uczestnikom jak najwcześniej.'
            },
            {
                label: 'D',
                content: 'Defekty wykryte podczas przeglądu nie są zgłaszane, ponieważ nie zostały wykryte w ramach testowania dynamicznego.',
                explanation: 'Defekty wykryte podczas przeglądu powinny być zgłaszane.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: 'A14',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.3',
        question: 'Jakie zadania może wykonywać kierownictwo podczas przeglądu formalnego?',
        options: [
            {
                label: 'A',
                content: 'Przyjęcie ogólnej odpowiedzialności za przegląd.',
                explanation: 'Jest to zadanie lidera przeglądu.'
            },
            {
                label: 'B',
                content: 'Decydowanie o tym, co ma być przedmiotem przeglądu.',
                explanation: 'To jest prawidłowa odpowiedź - jest to zadanie kierownictwa w przeglądzie formalnym.'
            },
            {
                label: 'C',
                content: 'Dbanie o sprawny przebieg spotkań związanych z przeglądem i występowanie w roli mediatora.',
                explanation: 'Jest to zadanie moderatora.'
            },
            {
                label: 'D',
                content: 'Protokołowanie informacji związanych z przeglądem, w tym informacji o podjętych decyzjach.',
                explanation: 'Jest to zadanie protokolanta.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: 'A15',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.2',
        question: 'W systemie do przechowywania wina zastosowano układ sterowania, który mierzy temperaturę T w winiarce (wyrażoną w °C w zaokrągleniu do najbliższego pełnego stopnia) i powiadamia użytkownika o odchyleniach od optymalnej wartości wynoszącej 12 zgodnie z regułami. Jaki jest MINIMALNY zbiór danych wejściowych do testów, który pozwala uzyskać 100% wymaganego pokrycia?',
        options: [
            {
                label: 'A',
                content: '11, 12, 13',
                explanation: 'Ten zestaw nie zapewnia pełnego pokrycia wartości brzegowych.'
            },
            {
                label: 'B',
                content: '10, 12, 14',
                explanation: 'Ten zestaw nie zapewnia pełnego pokrycia wartości brzegowych.'
            },
            {
                label: 'C',
                content: '10, 11, 12, 13, 14',
                explanation: 'To jest prawidłowa odpowiedź - ten zestaw zapewnia pełne pokrycie wartości brzegowych dla wszystkich przedziałów.'
            },
            {
                label: 'D',
                content: '10, 11, 13, 14',
                explanation: 'Ten zestaw pomija wartość optymalną 12.'
            }
        ],
        correctAnswer: 2
    },
    {
        id: 'A16',
        chapter: 'Testowanie',
        subchapter: '4.3.2',
        question: 'Które z poniższych stwierdzeń dotyczących testowania gałęzi jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'Jeśli program zawiera tylko gałęzie bezwarunkowe, stuprocentowe pokrycie gałęzi można uzyskać bez wykonywania żadnych przypadków testowych.',
                explanation: 'Nieprawda - wciąż wymagany jest co najmniej jeden przypadek testowy.'
            },
            {
                label: 'B',
                content: 'Jeśli przypadki testowe sprawdzają wszystkie gałęzie bezwarunkowe w kodzie, pokrycie gałęzi wynosi 100%.',
                explanation: 'Nieprawda - należy pokryć również gałęzie warunkowe.'
            },
            {
                label: 'C',
                content: 'Uzyskanie stuprocentowego pokrycia instrukcji kodu oznacza również uzyskanie stuprocentowego pokrycia gałęzi.',
                explanation: 'Nieprawda - pokrycie instrukcji nie gwarantuje pokrycia wszystkich gałęzi.'
            },
            {
                label: 'D',
                content: 'Uzyskanie stuprocentowego pokrycia gałęzi oznacza, że sprawdzono wszystkie wyniki decyzji w każdej instrukcji decyzyjnej w kodzie.',
                explanation: 'To jest prawidłowa odpowiedź - każdy wynik decyzji odpowiada gałęzi warunkowej.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: 'A17',
        chapter: 'Testowanie',
        subchapter: '4.4.3',
        question: 'Testujesz aplikację mobilną, która umożliwia klientom dostęp do kont bankowych i zarządzanie nimi. Uruchamiasz zestaw testowy, który przewiduje dokonanie oceny każdego ekranu i każdego pola na każdym ekranie w oparciu o ogólną listę najlepszych praktyk w dziedzinie tworzenia interfejsów użytkownika. Lista pochodzi z popularnej książki na ten temat i ma na celu zapewnienie maksymalnej atrakcyjności, łatwości obsługi oraz dostępności tego typu aplikacji. Która z poniższych opcji NAJLEPIEJ opisuje stosowaną przez ciebie technikę testowania?',
        options: [
            {
                label: 'A',
                content: 'Testowanie czarnoskrzynkowe',
                explanation: 'Ta technika nie bazuje na specyfikacji formalnej.'
            },
            {
                label: 'B',
                content: 'Testowanie eksploracyjne',
                explanation: 'Testowanie jest systematyczne według listy, a nie eksploracyjne.'
            },
            {
                label: 'C',
                content: 'Testowanie w oparciu o listę kontrolną',
                explanation: 'To jest prawidłowa odpowiedź - testy są wykonywane na podstawie listy najlepszych praktyk.'
            },
            {
                label: 'D',
                content: 'Zgadywanie błędów',
                explanation: 'Nie jest to zgadywanie błędów, lecz systematyczne sprawdzanie według listy.'
            }
        ],
        correctAnswer: 2
    },
    {
        id: 'A18',
        chapter: 'Testowanie',
        subchapter: '4.5.1',
        question: 'Która z poniższych odpowiedzi NAJLEPIEJ opisuje wspólne pisanie historyjek użytkownika?',
        options: [
            {
                label: 'A',
                content: 'Historyjki użytkownika są tworzone przez testerów i programistów, a następnie akceptowane przez przedstawicieli jednostek biznesowych.',
                explanation: 'To nie jest wspólne pisanie - brak jednoczesnej współpracy wszystkich stron.'
            },
            {
                label: 'B',
                content: 'Historyjki użytkownika są tworzone wspólnie przez przedstawicieli jednostek biznesowych, programistów i testerów.',
                explanation: 'To jest prawidłowa odpowiedź - pokazuje współpracę wszystkich interesariuszy.'
            },
            {
                label: 'C',
                content: 'Historyjki użytkownika są tworzone przez przedstawicieli jednostek biznesowych, a następnie weryfikowane przez programistów i testerów.',
                explanation: 'To nie jest wspólne pisanie - brak jednoczesnej współpracy.'
            },
            {
                label: 'D',
                content: 'Historyjki użytkownika są tworzone tak, aby były niezależne, negocjowalne, wartościowe, możliwe do oszacowania, zwięzłe i testowalne.',
                explanation: 'To opisuje cechy historyjek, nie proces ich tworzenia.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: 'A19',
        chapter: 'Testowanie',
        subchapter: '5.1.1',
        question: 'Weźmy pod uwagę następujący fragment planu testów: "Testowanie obejmie testowanie modułowe i testowanie integracji modułów. Zgodnie z wymogami obowiązujących przepisów należy wykazać osiągnięcie stuprocentowego pokrycia gałęzi w odniesieniu do każdego modułu sklasyfikowanego jako krytyczny." W której części planu testów powinien znajdować się ten fragment?',
        options: [
            {
                label: 'A',
                content: 'Wymiana informacji',
                explanation: 'Ten fragment nie dotyczy wymiany informacji.'
            },
            {
                label: 'B',
                content: 'Rejestr ryzyk',
                explanation: 'Ten fragment nie opisuje ryzyk.'
            },
            {
                label: 'C',
                content: 'Kontekst testowania',
                explanation: 'Ten fragment nie opisuje kontekstu testowania.'
            },
            {
                label: 'D',
                content: 'Podejście do testowania',
                explanation: 'To jest prawidłowa odpowiedź - fragment opisuje sposób realizacji testów.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: 'A20',
        chapter: 'Testowanie',
        subchapter: '5.1.4',
        question: 'Twój zespół szacuje metodą pokera planistycznego pracochłonność testowania funkcjonalności, która musi zostać wprowadzona zgodnie z nowymi wymaganiami. Po dwóch rundach nie osiągnięto konsensusu, w związku z czym rozpoczęto trzecią rundę. Które z poniższych stwierdzeń NAJTRAFNIEJ wskazuje, jaki powinien być następny krok?',
        options: [
            {
                label: 'A',
                content: 'Właściciel produktu musi wkroczyć i podjąć ostateczną decyzję.',
                explanation: 'Decyzja powinna być podjęta przez cały zespół.'
            },
            {
                label: 'B',
                content: 'Wartość 13 uzyskała najwięcej głosów, w związku z czym należy ją przyjąć jako ostateczne oszacowanie pracochłonności testów.',
                explanation: 'To jest prawidłowa odpowiedź - przy niewielkich rozbieżnościach można przyjąć wartość z największą liczbą głosów.'
            },
            {
                label: 'C',
                content: 'Nie są wymagane żadne dalsze działania. Osiągnięto konsensus.',
                explanation: 'Nie osiągnięto konsensusu - nadal są różne wartości.'
            },
            {
                label: 'D',
                content: 'Z powodu braku konsensusu należy usunąć nową funkcjonalność z bieżącego wydania.',
                explanation: 'Brak konsensusu w szacowaniu nie powinien prowadzić do usunięcia funkcjonalności.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: 'A21',
        chapter: 'Testowanie',
        subchapter: '5.1.6',
        question: 'Które z poniższych stwierdzeń jest PRAWDZIWE w odniesieniu do piramidy testów?',
        options: [
            {
                label: 'A',
                content: 'W modelu piramidy testów podkreśla się fakt, że na niższych poziomach testów powinna być wykonywana większa liczba testów.',
                explanation: 'To jest prawidłowa odpowiedź opisująca główną zasadę piramidy testów.'
            },
            {
                label: 'B',
                content: 'W modelu piramidy testów sugeruje się, że każdy test niskopoziomowy sprawdza większą część funkcjonalności.',
                explanation: 'Nieprawda - testy niskopoziomowe są bardziej szczegółowe i sprawdzają mniejsze części funkcjonalności.'
            },
            {
                label: 'C',
                content: 'Model piramidy testów opisuje rozkład typu testów w SDLC.',
                explanation: 'Piramida testów pokazuje rozkład liczby testów na różnych poziomach, nie typów testów.'
            },
            {
                label: 'D',
                content: 'Piramida testów nie ma wpływu na budowę testów automatycznych.',
                explanation: 'Nieprawda - piramida testów jest ważnym modelem przy planowaniu automatyzacji.'
            }
        ],
        correctAnswer: 0
    },
    {
        id: 'A22',
        chapter: 'Zarządzanie testami',
        subchapter: '5.2.1',
        question: 'W trakcie analizy ryzyka zespół rozważał następujące ryzyko: "System zezwala na udzielenie klientowi zbyt wysokiego rabatu". Członkowie zespołu oszacowali, że wpływ ryzyka jest bardzo duży. Co można na tej podstawie powiedzieć o prawdopodobieństwie wystąpienia ryzyka?',
        options: [
            {
                label: 'A',
                content: 'Jest również bardzo duże. Duży wpływ ryzyka zawsze oznacza duże prawdopodobieństwo wystąpienia ryzyka.',
                explanation: 'Nieprawda - wpływ i prawdopodobieństwo są niezależne.'
            },
            {
                label: 'B',
                content: 'Jest bardzo małe. Duży wpływ ryzyka zawsze oznacza małe prawdopodobieństwo wystąpienia ryzyka.',
                explanation: 'Nieprawda - wpływ i prawdopodobieństwo są niezależne.'
            },
            {
                label: 'C',
                content: 'Nie można nic powiedzieć na temat prawdopodobieństwa wystąpienia ryzyka. Wpływ ryzyka i prawdopodobieństwo wystąpienia ryzyka są od siebie niezależne.',
                explanation: 'To jest prawidłowa odpowiedź - te dwa parametry są niezależne.'
            },
            {
                label: 'D',
                content: 'Prawdopodobieństwo wystąpienia ryzyka nie jest istotne w przypadku tak dużego wpływu ryzyka.',
                explanation: 'Nieprawda - oba parametry są istotne przy ocenie ryzyka.'
            }
        ],
        correctAnswer: 2
    },
    {
        id: 'A23',
        chapter: 'Zarządzanie testami',
        subchapter: '5.2.2',
        question: 'Na poniższej liście wymieniono ryzyka zidentyfikowane w odniesieniu do nowego oprogramowania. Które z nich to ryzyka projektowe? i. Kierownictwo przesuwa dwóch doświadczonych testerów do innego projektu. ii. System nie spełnia standardów w dziedzinie bezpieczeństwa funkcjonalnego. iii. Czas odpowiedzi systemu przekracza wartość określoną w wymaganiach użytkownika. iv. Interesariusze mają nieprecyzyjnie określone oczekiwania. v. Osoby niepełnosprawne mają problemy z korzystaniem z systemu.',
        options: [
            {
                label: 'A',
                content: 'i oraz iv',
                explanation: 'To jest prawidłowa odpowiedź - oba ryzyka dotyczą projektu, nie produktu.'
            },
            {
                label: 'B',
                content: 'iv oraz v',
                explanation: 'Problemy z dostępnością to ryzyko produktowe.'
            },
            {
                label: 'C',
                content: 'i oraz iii',
                explanation: 'Problemy z wydajnością to ryzyko produktowe.'
            },
            {
                label: 'D',
                content: 'ii oraz v',
                explanation: 'Oba są ryzykami produktowymi.'
            }
        ],
        correctAnswer: 0
    },
    {
        id: 'A24',
        chapter: 'Zarządzanie testami',
        subchapter: '5.2.3',
        question: 'Które z poniższych stwierdzeń zawiera przykład na to, jak analiza ryzyka produktowego wpływa na staranność i zakres testowania?',
        options: [
            {
                label: 'A',
                content: 'Kierownik testów codziennie monitoruje poziom wszystkich znanych ryzyk i przesyła raporty na ten temat.',
                explanation: 'To jest przykład monitorowania ryzyka, nie wpływu na testowanie.'
            },
            {
                label: 'B',
                content: 'Jednym ze zidentyfikowanych ryzyk był "brak obsługi baz danych o otwartym kodzie".',
                explanation: 'To jest przykład decyzji architektonicznej, nie testowania.'
            },
            {
                label: 'C',
                content: 'W ramach analizy ryzyka przeprowadzanej metodą ilościową zespół oszacował łączny poziom wszystkich zidentyfikowanych ryzyk.',
                explanation: 'To jest przykład analizy ryzyka, nie jej wpływu na testowanie.'
            },
            {
                label: 'D',
                content: 'Ocena ryzyka ujawniła bardzo wysoki poziom ryzyka związanego z wydajnością, w związku z czym podjęto decyzję o wykonaniu szczegółowego testowania wydajnościowego we wczesnej fazie cyklu wytwarzania oprogramowania.',
                explanation: 'To jest prawidłowa odpowiedź pokazująca jak analiza ryzyka wpływa na zakres testów.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: 'A25',
        chapter: 'Zarządzanie testami',
        subchapter: '5.3.1',
        question: 'Wskaż DWIE z poniższych opcji, które odpowiadają metrykom powszechnie używanym w raportach na temat poziomu jakości przedmiotu testów.',
        options: [
            {
                label: 'A',
                content: 'Liczba defektów wykrytych podczas testowania systemowego.',
                explanation: 'To jest prawidłowa odpowiedź - liczba defektów jest ważną miarą jakości.'
            },
            {
                label: 'B',
                content: 'Iloraz łącznych nakładów pracy na projektowanie testów przez liczbę zaprojektowanych przypadków testowych.',
                explanation: 'To jest miara efektywności testów, nie jakości produktu.'
            },
            {
                label: 'C',
                content: 'Liczba wykonanych procedur testowych.',
                explanation: 'To jest miara postępu testów, nie jakości produktu.'
            },
            {
                label: 'D',
                content: 'Iloraz liczby wykrytych defektów przez wielkość produktu pracy.',
                explanation: 'To jest prawidłowa odpowiedź - gęstość defektów jest miarą jakości.'
            },
            {
                label: 'E',
                content: 'Czas niezbędny do usunięcia defektu.',
                explanation: 'To jest miara procesu, nie jakości produktu.'
            }
        ],
        correctAnswer: [0, 3]  // Poprawne są odpowiedzi A i D
    },
    {
        id: 'A26',
        chapter: 'Zarządzanie testami',
        subchapter: '5.3.2',
        question: 'Która z poniższych informacji zawartych w raporcie o postępie testów jest NAJMNIEJ przydatna z punktu widzenia przedstawicieli jednostek biznesowych?',
        options: [
            {
                label: 'A',
                content: 'Przeszkody w testowaniu.',
                explanation: 'Przeszkody mogą być istotne z biznesowego punktu widzenia.'
            },
            {
                label: 'B',
                content: 'Uzyskane pokrycie gałęzi.',
                explanation: 'To jest prawidłowa odpowiedź - to techniczna metryka nieistotna dla biznesu.'
            },
            {
                label: 'C',
                content: 'Postęp testów.',
                explanation: 'Postęp testów jest istotną informacją dla biznesu.'
            },
            {
                label: 'D',
                content: 'Nowe ryzyka zaobserwowane w cyklu testowym.',
                explanation: 'Ryzyka są bardzo istotne z biznesowego punktu widzenia.'
            }
        ],
        correctAnswer: 1
    }
];



