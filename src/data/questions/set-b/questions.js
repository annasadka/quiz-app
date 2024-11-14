export const questionSetB = [
    {
        id: '1',
        chapter: 'Podstawy testowania',
        subchapter: '1.2.1',
        question: 'Która z następujących odpowiedzi przedstawia przykładowe powody, dla których testowanie jest niezbędne?',
        options: [
            {
                label: 'A',
                content: 'Testowanie dynamiczne pozwala poprawić jakość dzięki wywołaniu awarii przedmiotu testów w sposób nieosiągalny dla użytkowników.',
                explanation: 'Nie jest to dobry powód - wywoływanie awarii nieosiągalnych dla użytkowników nie ma istotnego znaczenia.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testowanie statyczne jest stosowane przez programistów w celu wykrycia awarii w kodzie programu wcześniej niż można to osiągnąć za pomocą testowania dynamicznego.',
                explanation: 'Testowanie statyczne służy do wykrywania defektów, nie awarii.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Analiza statyczna dostarcza klientom potwierdzenia, że elementy systemu, które nie udostępniają danych wyjściowych, są gotowe do przekazania do eksploatacji.',
                explanation: 'To stwierdzenie jest pozbawione sensu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Przeglądy zwiększają jakość specyfikacji wymagań, dzięki czemu w utworzonych na ich podstawie produktach pracy liczba niezbędnych zmian będzie mniejsza.',
                explanation: 'To jest prawidłowa odpowiedź - wczesne wykrycie defektów w wymaganiach pozwala uniknąć zmian w późniejszych produktach.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '2',
        chapter: 'Podstawy testowania',
        subchapter: '1.2.2',
        question: 'Które z poniższych stwierdzeń dotyczących zapewnienia jakości i/lub kontroli jakości jest poprawne?',
        options: [
            {
                label: 'A',
                content: 'Zapewnienie jakości odbywa się w ramach testowania.',
                explanation: 'To nieprawda - zapewnienie jakości jest szerszym pojęciem.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testowanie jest wykonywane w ramach kontroli jakości.',
                explanation: 'To jest prawidłowa odpowiedź - testowanie jest formą kontroli jakości.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Testowanie to inne określenie kontroli jakości.',
                explanation: 'Kontrola jakości zawiera również inne techniki poza testowaniem.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testowanie odbywa się w ramach zapewnienia jakości.',
                explanation: 'Testowanie jest częścią kontroli jakości, nie zapewnienia jakości.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '3',
        chapter: 'Podstawy testowania',
        subchapter: '1.3.1',
        question: 'Jedna z „zasad testowania" głosi, że testowanie gruntowne jest niemożliwe. Która z następujących odpowiedzi przedstawia przykład zastosowania tej zasady w praktyce?',
        options: [
            {
                label: 'A',
                content: 'Tworzenie przypadków testowych pokrywających wszystkie możliwe określone dane wyjściowe.',
                explanation: 'To nie jest praktyczne rozwiązanie problemu niemożliwości przetestowania wszystkiego.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Dokumentowanie wszystkich możliwych wariantów danych wejściowych i określanie ich priorytetów na podstawie stopnia ważności.',
                explanation: 'Dokumentowanie wszystkich możliwych kombinacji byłoby niepraktyczne.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Rozpoczynanie testów na jak najwcześniejszym etapie z wykorzystaniem przeglądów i innych podejść do testowania statycznego.',
                explanation: 'To dotyczy innej zasady testowania - "wczesne testowanie oszczędza czas i pieniądze".',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zastosowanie podziału na klasy równoważności oraz analizy wartości brzegowych do generowania przypadków testowych.',
                explanation: 'To jest prawidłowa odpowiedź - techniki te pomagają systematycznie wybrać reprezentatywny podzbiór wszystkich możliwych testów.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '4',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.1',
        question: 'Która czynność związana z testowaniem obejmuje pracę z wymaganiami dotyczącymi danych testowych, warunkami testowymi, wymaganiami dotyczącymi środowiska testowego i przypadkami testowymi?',
        options: [
            {
                label: 'A',
                content: 'Projektowanie testów.',
                explanation: 'To jest prawidłowa odpowiedź - projektowanie testów używa warunków testowych do tworzenia przypadków testowych i innych niezbędnych testaliów.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Wykonywanie testów.',
                explanation: 'Wykonywanie testów obejmuje głównie wykonywanie przypadków testowych, nie pracę z innymi testaliami.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Analiza testów.',
                explanation: 'Analiza testów koncentruje się na warunkach testowych, ale nie obejmuje innych wymienionych testaliów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Implementacja testów.',
                explanation: 'Implementacja testów skupia się na tworzeniu i wykonywaniu procedur testowych, nie na projektowaniu testaliów.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '5',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.2',
        question: 'Który z poniższych elementów najprawdopodobniej W NAJWIĘKSZYM STOPNIU wpłynie na sposób testowania danego przedmiotu testów?',
        options: [
            {
                label: 'A',
                content: 'Średni poziom doświadczenia pracowników działu marketingu organizacji.',
                explanation: 'Dział marketingu zwykle nie wykonuje testów, więc ich doświadczenie nie ma większego wpływu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Wiedza użytkowników o tworzeniu przeznaczonego dla nich nowego systemu.',
                explanation: 'Poziom wiedzy użytkowników o budowanym systemie raczej nie wpływa na sposób testowania.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Liczba lat doświadczenia członków zespołu testowego.',
                explanation: 'To jest prawidłowa odpowiedź - doświadczenie testerów bezpośrednio wpływa na ich umiejętności i możliwości testowe.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Struktura organizacyjna użytkowników końcowych komercyjnej aplikacji do strumieniowej transmisji muzyki.',
                explanation: 'Struktura organizacyjna użytkowników końcowych ma niewielki wpływ na sposób testowania.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '6',
        chapter: 'Podstawy testowania',
        subchapter: '1.4.4',
        question: 'Które z poniższych stwierdzeń jest POPRAWNYM przykładem korzyści wynikających ze śledzenia powiązań?',
        options: [
            {
                label: 'A',
                content: 'Możliwość śledzenia powiązań między złagodzonymi ryzykami a zaliczonymi przypadkami testowymi pozwala określić poziom ryzyka rezydualnego.',
                explanation: 'Ta informacja nie pozwala ocenić ryzyka rezydualnego bez analizy wszystkich ryzyk.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Możliwość śledzenia powiązań między wymaganiami użytkowników a rezultatami wykonania testów pozwala zmierzyć postępy w realizacji projektu w odniesieniu do celów biznesowych.',
                explanation: 'To jest prawidłowa odpowiedź - pozwala ocenić postęp testowania względem celów biznesowych.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Możliwość śledzenia powiązań między testerami a niezaliczonymi przypadkami testowymi pozwala określić poziom umiejętności testerów.',
                explanation: 'Liczba niezaliczonych testów nie jest dobrym wskaźnikiem umiejętności testerów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Możliwość śledzenia powiązań między zidentyfikowanymi ryzykami a zapisanymi warunkami testowymi pozwala określić, dla których ryzyk warto wykonać testy.',
                explanation: 'To śledzenie pokazuje tylko pokrycie ryzyk warunkami testowymi, nie decyduje o wartości testowania.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '7',
        chapter: 'Podstawy testowania',
        subchapter: '1.5.1',
        question: 'Którą z poniższych sytuacji z NAJWIĘKSZYM prawdopodobieństwem można uznać za przykład wykorzystania ogólnych umiejętności przez testera podczas testowania?',
        options: [
            {
                label: 'A',
                content: 'Dogłębna znajomość rynku gier komputerowych przez testera sprawiła, że tester mógł nawiązać dobre relacje z jednym z programistów, który również pasjonuje się grami.',
                explanation: 'Znajomość rynku gier nie jest przykładem ogólnej umiejętności istotnej dla testerów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Tester jest byłym pilotem i potrafił lepiej zrozumieć kryteria akceptacji systemu sterowania śmigłowcem.',
                explanation: 'To jest prawidłowa odpowiedź - wiedza merytoryczna pozwala lepiej zrozumieć wymagania i komunikować się z interesariuszami.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Tester pracował poprzednio jako programista i skorzystał ze swoich umiejętności w tej dziedzinie, aby skuteczniej komunikować się z analitykami biznesowymi.',
                explanation: 'Umiejętności programistyczne raczej nie usprawnią komunikacji z analitykami biznesowymi.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Tester zachował szczególną ostrożność, chcąc uniknąć błędów podczas metodycznego generowania przypadków testowych przed rozpoczęciem sesji testowania eksploracyjnego.',
                explanation: 'Testowanie eksploracyjne zakłada generowanie przypadków testowych w trakcie, nie przed testowaniem.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '8',
        chapter: 'Podstawy testowania',
        subchapter: '1.5.2',
        question: 'Które z poniższych stwierdzeń opisuje zaletę podejścia „cały zespół"?',
        options: [
            {
                label: 'A',
                content: 'Podejście to pozwala członkom zespołu przyjmować w dowolnym momencie dowolną rolę.',
                explanation: 'Członkowie zespołu przyjmują role zgodne z ich kompetencjami, nie dowolne role.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'W podejściu tym potrzebny jest tylko jeden zespół do obsługi całego projektu wytwarzania oprogramowania.',
                explanation: 'Podejście to nie sugeruje, że tylko jeden zespół jest potrzebny do realizacji całego projektu.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Umieszczenie przedstawicieli jednostek biznesowych obok deweloperów w tym samym zespole.',
                explanation: 'Nie wszystkie decyzje wymagają udziału wszystkich członków zespołu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Podejście to tworzy w zespole efekt synergii, który jest korzystny dla całego projektu.',
                explanation: 'To jest prawidłowa odpowiedź - efektywne wykorzystanie różnych kompetencji tworzy synergię korzystną dla projektu.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '9',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.1',
        question: 'Które z poniższych stwierdzeń dotyczących wybranego cyklu wytwarzania oprogramowania jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'Jeśli stosowane jest zwinne wytwarzanie oprogramowania, to dzięki automatyzacji testów systemowych nie ma potrzeby testowania regresji.',
                explanation: 'W podejściu zwinnym częste dostarczanie wymaga szerokiego testowania regresji.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Jeśli stosowany jest sekwencyjny model wytwarzania, testowanie dynamiczne odbywa się zwykle w późniejszych fazach cyklu życia.',
                explanation: 'To jest prawidłowa odpowiedź - w modelu sekwencyjnym kod do testowania dynamicznego powstaje w późniejszych fazach.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Jeśli stosowany jest iteracyjny model wytwarzania, testy modułowe są zwykle wykonywane manualnie przez programistów.',
                explanation: 'W podejściu iteracyjnym testy modułowe powinny być zautomatyzowane ze względu na częste wykonywanie.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'W przypadku zastosowania przyrostowego modelu wytwarzania, testowanie statyczne odbywa się we wczesnych przyrostach, a testowanie dynamiczne w późniejszych.',
                explanation: 'W modelu przyrostowym oba rodzaje testowania są potrzebne w każdym przyroście.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '10',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.2',
        question: 'Które z poniższych stwierdzeń opisuje dobrą praktykę testowania mającą zastosowanie do wszystkich cykli wytwarzania oprogramowania?',
        options: [
            {
                label: 'A',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy w ramach następnej fazy wytwarzania.',
                explanation: 'Czekanie do następnej fazy opóźniłoby wykrycie defektów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po udostępnieniu wersji roboczych tych produktów.',
                explanation: 'To jest prawidłowa odpowiedź - wczesny przegląd pozwala wcześniej wykryć i naprawić defekty.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy przed rozpoczęciem analizy i projektowania testów.',
                explanation: 'Przeglądy zwykle są częścią analizy testów, nie poprzedzają jej.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po opublikowaniu tych produktów.',
                explanation: 'Czekanie na publikację opóźniłoby wykrycie defektów.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '11',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.3',
        question: 'Która z następujących odpowiedzi przedstawia przykład podejścia „najpierw test" do wytwarzania oprogramowania?',
        options: [
            {
                label: 'A',
                content: 'Wytwarzanie sterowane testami.',
                explanation: 'To jest prawidłowa odpowiedź - TDD jest klasycznym przykładem podejścia "najpierw test".',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Wytwarzanie sterowane pokryciem.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wytwarzanie sterowane jakością.',
                explanation: 'To nie jest przykład podejścia "najpierw test".',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wytwarzanie sterowane cechami.',
                explanation: 'To jest metodyka zwinna oparta na cechach, nie podejście "najpierw test".',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '12',
        chapter: 'Podstawy testowania',
        subchapter: '2.1.4',
        question: 'Które z poniższych stwierdzeń dotyczących metodyki DevOps jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'W celu przyspieszenia tworzenia wydań stosowana jest ciągła integracja, która ma zachęcić programistów do szybkiego przekazywania kodu bez konieczności wykonywania pełnego testowania modułowego.',
                explanation: 'W DevOps programiści muszą dostarczać testy modułowe wraz z kodem.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'W celu zwiększenia częstotliwości aktualizacji i tworzenia wydań systemów wymagane jest opracowanie wielu automatycznych testów regresji, które pozwalają zmniejszyć ryzyko związane z regresją.',
                explanation: 'To jest prawidłowa odpowiedź - automatyczne testy regresji są kluczowe dla częstych wydań w DevOps.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'W celu równoprawnego traktowania programistów i osób odpowiedzialnych za eksploatację testerzy poświęcą więcej czasu na testowanie wydań przez tę drugą grupę z wykorzystaniem podejścia „przesunięcie w prawo".',
                explanation: 'To nie jest główny cel podejścia "przesunięcie w prawo" w DevOps.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'W celu zwiększenia synergii między testerami, programistami i osobami odpowiedzialnymi za eksploatację należy w pełni zautomatyzować testowanie i zrezygnować z testów manualnych.',
                explanation: 'DevOps nie eliminuje testów manualnych, które nadal są wartościowe.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '13',
        chapter: 'Podstawy testowania',
        subchapter: '2.2.1',
        question: 'Które z poniższych działań zostanie z NAJWIĘKSZYM prawdopodobieństwem wykonane w ramach testowania systemowego?',
        options: [
            {
                label: 'A',
                content: 'Testowanie zabezpieczeń systemu zarządzania kredytami przez niezależny zespół testowy.',
                explanation: 'To jest prawidłowa odpowiedź - testowanie systemowe bada cały system, w tym jego charakterystyki niefunkcjonalne jak zabezpieczenia.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Testowanie interfejsu systemu wymiany walut z zewnętrznym systemem bankowym.',
                explanation: 'To jest przykład testowania integracji systemów, nie testowania systemowego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testy beta systemu zdalnego nauczania prowadzone przez twórców oprogramowania.',
                explanation: 'Testy beta to rodzaj testów akceptacyjnych wykonywanych przez zewnętrznych użytkowników.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testowanie interakcji między interfejsem użytkownika i bazą danych w systemie kadrowym.',
                explanation: 'To jest przykład testowania integracji modułów, nie testowania systemowego.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '14',
        chapter: 'Podstawy testowania',
        subchapter: '2.2.3',
        question: 'Które z poniższych stwierdzeń jest POPRAWNE?',
        options: [
            {
                label: 'A',
                content: 'W miarę postępów w realizacji projektu liczba testów regresji rośnie, natomiast liczba testów potwierdzających maleje.',
                explanation: 'Zazwyczaj liczba obu typów testów rośnie wraz z postępem projektu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testy regresji są tworzone i uruchamiane po wprowadzeniu poprawek w przedmiocie testów, natomiast testy potwierdzające są uruchamiane po wprowadzeniu udoskonaleń w przedmiocie testów.',
                explanation: 'Jest odwrotnie - testy potwierdzające są dla poprawek, a regresyjne dla zmian/udoskonaleń.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testowanie regresji wiąże się ze sprawdzeniem, czy środowisko operacyjne nie uległo zmianie, natomiast testowanie potwierdzające polega na testowaniu zmian w przedmiocie testów.',
                explanation: 'Testowanie regresji sprawdza wpływ zmian na niezmodyfikowany kod, nie tylko środowisko.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testowanie regresji uwzględnia negatywne konsekwencje w niezmienionym kodzie, natomiast testowanie potwierdzające wiąże się z testowaniem zmienionego kodu.',
                explanation: 'To jest prawidłowa odpowiedź - testy regresji sprawdzają efekty uboczne w niezmienionym kodzie, a potwierdzające weryfikują poprawki.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '15',
        chapter: 'Podstawy testowania',
        subchapter: '3.1.3',
        question: 'Która z poniższych odpowiedzi przedstawia przykład defektu, który można znaleźć za pomocą testowania statycznego, a którego NIE można znaleźć za pomocą testowania dynamicznego?',
        options: [
            {
                label: 'A',
                content: 'Brak użyteczności interfejsu użytkownika.',
                explanation: 'To można wykryć zarówno w przeglądzie jak i testach dynamicznych.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Nieosiągalny kod.',
                explanation: 'To jest prawidłowa odpowiedź - nieosiągalny kod można wykryć tylko w przeglądzie lub analizie statycznej.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Długi czas odpowiedzi w przypadku większości oczekiwanych użytkowników systemu.',
                explanation: 'To można wykryć tylko w testach dynamicznych, nie w statycznych.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Brak implementacji wymaganych cech w kodzie.',
                explanation: 'To można wykryć zarówno w przeglądzie jak i testach dynamicznych.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '16',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.1',
        question: 'Która z poniższych korzyści wynika z wczesnego i częstego otrzymywania informacji zwrotnych przez interesariuszy?',
        options: [
            {
                label: 'A',
                content: 'Kierownicy wiedzą, którzy programiści charakteryzują się mniejszą produktywnością.',
                explanation: 'Informacje zwrotne nie służą do oceny produktywności programistów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Kierownicy projektów mogą określić priorytety interakcji z interesariuszami.',
                explanation: 'To nie jest główny cel wczesnych informacji zwrotnych.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Możliwe jest wczesne sygnalizowanie potencjalnych problemów związanych z jakością.',
                explanation: 'To jest prawidłowa odpowiedź - wczesne informacje zwrotne pozwalają szybko wykryć problemy z jakością.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Użytkownicy końcowi lepiej rozumieją przyczyny opóźnień w dostarczeniu produktów pracy.',
                explanation: 'Celem nie jest informowanie o opóźnieniach, lecz ich unikanie.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '17',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.2',
        question: 'Które z poniższych powiązań zadań i czynności przeglądowych jest NAJLEPSZE?',
        options: [
            {
                label: 'A',
                content: '1B, 2C, 3D, 4A',
                explanation: 'To powiązanie nie jest poprawne dla wszystkich elementów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '1B, 2D, 3C, 4A',
                explanation: 'To powiązanie nie jest poprawne dla wszystkich elementów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1C, 2A, 3B, 4D',
                explanation: 'To powiązanie nie jest poprawne dla wszystkich elementów.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1C, 2B, 3A, 4D',
                explanation: 'To jest prawidłowa odpowiedź - wszystkie zadania są poprawnie powiązane z odpowiednimi czynnościami.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '18',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.3',
        question: 'Które z poniższych powiązań ról w przeglądach i obowiązków jest NAJLEPSZE?',
        options: [
            {
                label: 'A',
                content: '1A, 2B, 3D, 4C',
                explanation: 'To powiązanie nie jest poprawne dla wszystkich elementów.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '1A, 2C, 3B, 4D',
                explanation: 'To powiązanie nie jest poprawne dla wszystkich elementów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1B, 2D, 3A, 4C',
                explanation: 'To jest prawidłowa odpowiedź - wszystkie role są poprawnie powiązane z odpowiednimi obowiązkami.',
                isCorrect: true
            },
            {
                label: 'D',
                content: '1B, 2D, 3C, 4A',
                explanation: 'To powiązanie nie jest poprawne dla wszystkich elementów.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '19',
        chapter: 'Podstawy testowania',
        subchapter: '4.1.1',
        question: 'Które z poniższych stwierdzeń NAJLEPIEJ opisuje różnicę między testowaniem w oparciu o tablicę decyzyjną i testowaniem gałęzi?',
        options: [
            {
                label: 'A',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są wyprowadzane na podstawie instrukcji decyzyjnych w kodzie. W testowaniu gałęzi przypadki testowe są wyprowadzane na podstawie znajomości przepływu sterowania w przedmiocie testów.',
                explanation: 'Testowanie z użyciem tablicy decyzyjnej jest techniką czarnoskrzynkową, nie bazuje na kodzie.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są wyprowadzane na podstawie specyfikacji opisującej logikę biznesową. W testowaniu gałęzi przypadki testowe są wyprowadzane na podstawie przewidywania wystąpień potencjalnych defektów w kodzie źródłowym.',
                explanation: 'Testowanie gałęzi nie opiera się na przewidywaniu defektów.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są wyprowadzane na podstawie znajomości przepływu sterowania w przedmiocie testów. W testowaniu gałęzi przypadki testowe są wyprowadzane na podstawie specyfikacji opisującej logikę biznesową.',
                explanation: 'Ta odpowiedź odwraca role obu technik.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są niezależne od sposobu implementacji oprogramowania. W testowaniu gałęzi przypadki testowe można utworzyć dopiero po zaprojektowaniu i implementacji kodu.',
                explanation: 'To jest prawidłowa odpowiedź - tablica decyzyjna to technika czarnoskrzynkowa, a testowanie gałęzi to technika białoskrzynkowa.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '20',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.1',
        question: 'Klienci sieci myjni samochodowych TestWash otrzymują karty, na których rejestruje się liczbę zakupionych do tej pory programów mycia. Początkowa wartość wynosi 0. Po wjeździe do myjni system zwiększa liczbę na karcie o 1. Nowa wartość reprezentuje numer bieżącej usługi. Na jego podstawie system decyduje o wysokości zniżki, do której uprawniony jest klient. Za każdym razem przy dziesiątym z kolei umyciu auta system przyznaje upust 10%, a przy dwudziestym dodatkowo 40% (tj. łącznie upust wynosi 50%). Który z poniższych zestawów danych wejściowych (reprezentujących numer bieżącej usługi) pozwala uzyskać największe pokrycie klas równoważności?',
        options: [
            {
                label: 'A',
                content: '19, 20, 30',
                explanation: 'To jest prawidłowa odpowiedź - pokrywa wszystkie klasy: brak upustu (19), 50% upustu (20) i 10% upustu (30).',
                isCorrect: true
            },
            {
                label: 'B',
                content: '11, 12, 20',
                explanation: 'Ten zestaw pokrywa tylko dwie klasy: brak upustu (11,12) i 50% upustu (20).',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1, 10, 50',
                explanation: 'Ten zestaw pokrywa tylko dwie klasy: brak upustu (1) i 10% upustu (10,50).',
                isCorrect: false
            },
            {
                label: 'D',
                content: '10, 29, 30, 31',
                explanation: 'Ten zestaw pokrywa tylko dwie klasy: 10% upustu (10,30) i brak upustu (29,31).',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '21',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.2',
        question: 'Testujesz formularz, który weryfikuje poprawność długości hasła wprowadzonego jako wartość wejściowa. Formularz akceptuje hasła o poprawnej długości, a odrzuca hasła, które są zbyt krótkie lub zbyt długie. Poprawne hasło powinno mieć długość od 6 do 12 znaków (włącznie). Jeśli ma inną długość, jest uznawane za niepoprawne. Początkowo formularz jest pusty (długość hasła = 0). Stosujesz analizę wartości brzegowych do zmiennej „długość hasła". Twój zestaw przypadków testowych pozwala osiągnąć 100% pokrycia dla dwupunktowej analizy wartości brzegowych. Zespół podjął decyzję, że z powodu wysokiego ryzyka związanego z danym modułem należy dodać przypadki testowe, tak aby osiągnąć 100% pokrycia dla trójpunktowej analizy wartości brzegowych. Jakie dodatkowe długości hasła należy przetestować, aby uzyskać takie pokrycie?',
        options: [
            {
                label: 'A',
                content: '4, 5, 13, 14',
                explanation: 'Ta odpowiedź zawiera wartości, które już są testowane w dwupunktowej analizie.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '7, 11',
                explanation: 'Te wartości są niewystarczające do uzyskania pełnego pokrycia trójpunktowego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1, 5, 13',
                explanation: 'Te wartości nie zapewnią pełnego pokrycia dla trójpunktowej analizy.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '1, 4, 7, 11, 14',
                explanation: 'To jest prawidłowa odpowiedź - te wartości uzupełniają dwupunktową analizę do trójpunktowej.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '22',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.3',
        question: 'Jakie pokrycie tablicy decyzyjnej można uzyskać za pomocą podanych w pytaniu przypadków testowych?',
        options: [
            {
                label: 'A',
                content: '40%',
                explanation: 'To pokrycie jest za niskie - przypadki testowe pokrywają więcej reguł.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '60%',
                explanation: 'To jest prawidłowa odpowiedź - przypadki testowe pokrywają 3 z 5 reguł (60%).',
                isCorrect: true
            },
            {
                label: 'C',
                content: '80%',
                explanation: 'To pokrycie jest za wysokie - przypadki testowe nie pokrywają aż tylu reguł.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '100%',
                explanation: 'To pokrycie jest niemożliwe - przypadki testowe nie pokrywają wszystkich reguł.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '23',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.4',
        question: 'System pamięci może przechowywać maksymalnie trzy elementy. Który z poniższych przypadków testowych, reprezentowanych w postaci sekwencji zdarzeń, pozwala osiągnąć najwyższy poziom pokrycia poprawnych przejść?',
        options: [
            {
                label: 'A',
                content: 'Dodaj, Usuń, Dodaj, Dodaj, Dodaj',
                explanation: 'Ta sekwencja pokrywa 4 z 5 możliwych przejść (80%).',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Dodaj, Dodaj, Dodaj, Dodaj, Usuń, Usuń',
                explanation: 'Ta sekwencja jest niepoprawna - czwarte dodanie jest niemożliwe.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Dodaj, Dodaj, Dodaj, Usuń, Usuń',
                explanation: 'To jest prawidłowa odpowiedź - pokrywa wszystkie możliwe przejścia (100%).',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'Dodaj, Dodaj, Dodaj, Usuń, Dodaj',
                explanation: 'Ta sekwencja pokrywa 4 z 5 możliwych przejść (80%).',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '24',
        chapter: 'Podstawy testowania',
        subchapter: '4.3.1',
        question: 'Uruchamiamy dwa przypadki testowe, T1 i T2, na tym samym kodzie. W teście T1 uzyskujemy 40% pokrycia instrukcji, a w teście T2 – 65% pokrycia instrukcji. Które z poniższych stwierdzeń na pewno jest prawdziwe?',
        options: [
            {
                label: 'A',
                content: 'Zestaw testowy składający się z testów T1 i T2 zapewnia pokrycie instrukcji na poziomie 105%.',
                explanation: 'Pokrycie nie może przekroczyć 100%.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Istnieje co najmniej jedna instrukcja, która musi być wykonywana zarówno w teście T1, jak i w teście T2.',
                explanation: 'To jest prawidłowa odpowiedź - musi być co najmniej 5% wspólnych instrukcji.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Co najmniej 5% instrukcji w testowanym kodzie to instrukcje niewykonywalne.',
                explanation: 'Na podstawie tych informacji nie można wyciągnąć takiego wniosku.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Zestaw testowy składający się z testów T1 i T2 zapewnia pełne pokrycie gałęzi.',
                explanation: 'Pokrycie instrukcji nie gwarantuje pełnego pokrycia gałęzi.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '25',
        chapter: 'Podstawy testowania',
        subchapter: '4.3.2',
        question: 'Zdefiniujmy wskaźnik pokrycia gałęzi jako PG = (X / Y) * 100%. Co oznaczają zmienne X i Y w tym wzorze?',
        options: [
            {
                label: 'A',
                content: 'X = liczba wyników decyzji sprawdzonych przez przypadki testowe\nY = łączna liczba wyników decyzji w kodzie',
                explanation: 'To definicja dotyczy tylko gałęzi warunkowych, pomija gałęzie bezwarunkowe.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'X = liczba gałęzi warunkowych sprawdzonych przez przypadki testowe\nY = łączna liczba gałęzi w kodzie',
                explanation: 'To uwzględnia tylko gałęzie warunkowe, a pokrycie gałęzi obejmuje wszystkie rodzaje gałęzi.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'X = liczba gałęzi sprawdzonych przez przypadki testowe\nY = łączna liczba gałęzi w kodzie',
                explanation: 'To jest prawidłowa odpowiedź - uwzględnia wszystkie gałęzie (warunkowe i bezwarunkowe).',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'X = liczba gałęzi warunkowych sprawdzonych przez przypadki testowe\nY = łączna liczba wyników decyzji w kodzie',
                explanation: 'To miesza pojęcia gałęzi warunkowych i wyników decyzji.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '26',
        chapter: 'Podstawy testowania',
        subchapter: '4.4.2',
        question: 'Wskaż DWA stwierdzenia, które przedstawiają NAJLEPSZE uzasadnienie zastosowania testowania eksploracyjnego.',
        options: [
            {
                label: 'A',
                content: 'Testerom nie przydzielono wystarczająco dużo czasu na zaprojektowanie i wykonanie testów.',
                explanation: 'To jest jedna z sytuacji, gdy testowanie eksploracyjne jest odpowiednie.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Istniejąca strategia testów wymaga użycia formalnych, czarnoskrzynkowych technik testowania.',
                explanation: 'To nie jest dobry powód do stosowania testowania eksploracyjnego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Specyfikacja została zapisania w języku formalnym, który może być przetwarzany przez narzędzie.',
                explanation: 'Formalna specyfikacja sugeruje raczej formalne techniki testowania.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testerzy są członkami zespołu zwinnego i mają duże umiejętności programistyczne.',
                explanation: 'Umiejętności programistyczne nie są kluczowe dla testowania eksploracyjnego.',
                isCorrect: false
            },
            {
                label: 'E',
                content: 'Testerzy mają doświadczenie w danej dziedzinie biznesowej i duże umiejętności analityczne.',
                explanation: 'To jest dobry powód - doświadczenie i umiejętności analityczne są kluczowe w testowaniu eksploracyjnym.',
                isCorrect: true
            }
        ],
        correctAnswer: [0, 4]
    },
    {
        id: '27',
        chapter: 'Podstawy testowania',
        subchapter: '4.4.3',
        question: 'Która z poniższych odpowiedzi NAJLEPIEJ sprawdzi się jako element listy kontrolnej używanej w testowaniu w oparciu o listę kontrolną?',
        options: [
            {
                label: 'A',
                content: '"Programista popełnił błąd podczas implementacji kodu".',
                explanation: 'To jest stwierdzenie błędu, nie warunek testowy do sprawdzenia.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '"Uzyskane pokrycie instrukcji przekracza 85%".',
                explanation: 'To jest kryterium wyjścia, nie element listy kontrolnej do testowania.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '"Program działa poprawnie, jeśli chodzi o realizację wymagań funkcjonalnych i niefunkcjonalnych".',
                explanation: 'To jest zbyt ogólne stwierdzenie, nie konkretny element do sprawdzenia.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '"Komunikaty o błędach są napisane w języku zrozumiałym dla użytkownika".',
                explanation: 'To jest prawidłowa odpowiedź - konkretny, weryfikowalny element do sprawdzenia.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '28',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.2',
        question: 'W jakim formacie zostały zapisane kryteria akceptacji w podanym przykładzie?',
        options: [
            {
                label: 'A',
                content: 'Ukierunkowanym na reguły.',
                explanation: 'Format Given/When/Then nie jest formatem ukierunkowanym na reguły.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Ukierunkowanym na scenariusze.',
                explanation: 'To jest prawidłowa odpowiedź - format Given/When/Then opisuje scenariusz do weryfikacji.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'Ukierunkowanym na produkt.',
                explanation: 'Nie istnieje format kryteriów akceptacji ukierunkowany na produkt.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Ukierunkowanym na proces.',
                explanation: 'Nie istnieje format kryteriów akceptacji ukierunkowany na proces.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '29',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.3',
        question: 'Który z następujących przypadków testowych NIE jest istotny z punktu widzenia tej historyjki użytkownika?',
        options: [
            {
                label: 'A',
                content: 'Wejście: klient loguje się na swoje konto i klika przycisk „Pokaż historię zamówień".\nOczekiwane wyjście: system pokazuje listę wszystkich poprzednich zamówień klienta wraz z ich datami, numerami i łączną wartością.',
                explanation: 'Ten przypadek testowy jest związany z wyświetlaniem historii zamówień.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Wejście: klient klika zamówienie z listy zamówień.\nOczekiwane wyjście: system wyświetla poszczególne zakupione pozycje wraz z ich cenami i ilościami.',
                explanation: 'Ten przypadek testowy jest związany z wyświetlaniem szczegółów zamówień.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Wejście: klient klika przycisk „Sortuj rosnąco" na ekranie historii zamówień.\nOczekiwane wyjście: system pokazuje historię zamówień uporządkowaną według numeru zamówienia w kolejności rosnącej.',
                explanation: 'Ten przypadek testowy jest związany z sortowaniem historii zamówień.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wejście: niezarejestrowany klient rejestruje się jako nowy klient w serwisie z podaniem poprawnego adresu e-mail.\nOczekiwane wyjście: system akceptuje rejestrację i tworzy konto.',
                explanation: 'To jest prawidłowa odpowiedź - ten przypadek dotyczy rejestracji, nie historii zamówień.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '30',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.3',
        question: 'Która z poniższych odpowiedzi zawiera NAJLEPSZE potencjalne kryterium wejścia dla kroku (2) tego procesu?',
        options: [
            {
                label: 'A',
                content: 'W trakcie analizy statycznej nie wystąpiły ostrzeżenia o wysokiej krytyczności dotyczące wprowadzonego kodu.',
                explanation: 'To jest prawidłowa odpowiedź - to kryterium można sprawdzić przed wprowadzeniem kodu do systemu kontroli wersji.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'System kontroli wersji nie zgłasza konfliktów podczas scalania kodu z gałęzią „test".',
                explanation: 'To można sprawdzić dopiero po wykonaniu kroku (2).',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testy modułowe zostały skompilowane i są gotowe do wykonania.',
                explanation: 'To jest kryterium wejścia dla kroku (3).',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Pokrycie instrukcji wynosi co najmniej 80%.',
                explanation: 'To jest potencjalne kryterium wyjścia dla kroku (3).',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '31',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.4',
        question: 'Zamierzasz oszacować pracochłonność testowania w nowym projekcie, korzystając z techniki szacowania na podstawie proporcji. Obliczasz wskaźnik pracochłonności testowania do wytwarzania na podstawie uśrednionych danych opisujących pracochłonność wytwarzania i testowania w czterech wcześniejszych projektach podobnych do bieżącego. Szacowana pracochłonność wytwarzania w nowym projekcie ma wartość 800 000 USD. Jakie jest oszacowanie pracochłonności testowania w tym projekcie?',
        options: [
            {
                label: 'A',
                content: '40 000 USD',
                explanation: 'Ta wartość jest zbyt niska w stosunku do średniego wskaźnika historycznego.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '80 000 USD',
                explanation: 'To jest prawidłowa odpowiedź - średni wskaźnik to 10%, więc 800 000 * 0.1 = 80 000 USD.',
                isCorrect: true
            },
            {
                label: 'C',
                content: '81 250 USD',
                explanation: 'Ta wartość jest błędna - nie odpowiada średniemu wskaźnikowi historycznemu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: '82 500 USD',
                explanation: 'Ta wartość jest błędna - nie odpowiada średniemu wskaźnikowi historycznemu.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '32',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.5',
        question: 'Testujesz aplikację internetową, która udostępnia użytkownikom funkcje WYSZUKIWANIA produktów, WYŚWIETLANIA szczegółów produktów, DODAWANIA produktów do koszyka i składania ZAMÓWIENIA. Który z poniższych przypadków testowych powinien zostać wykonany jako czwarty?',
        options: [
            {
                label: 'A',
                content: 'PT3',
                explanation: 'PT3 nie może być wykonany przed PT1.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'PT7',
                explanation: 'PT7 jest wykonywany jako ostatni ze względu na zależności.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'PT1',
                explanation: 'To jest prawidłowa odpowiedź - po przetestowaniu produktu B trzeba rozpocząć testowanie produktu A.',
                isCorrect: true
            },
            {
                label: 'D',
                content: 'PT2',
                explanation: 'PT2 musi być wykonany wcześniej - jako pierwszy.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '33',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.7',
        question: 'Który z poniższych rodzajów testów należy w modelu kwadrantów testowych do kwadrantu Q1 (cel technologiczny, wspieranie zespołu)?',
        options: [
            {
                label: 'A',
                content: 'Testowanie użyteczności.',
                explanation: 'Testowanie użyteczności należy do kwadrantu Q3 (cel biznesowy, krytyka produktu).',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'Testowanie funkcjonalne.',
                explanation: 'Testowanie funkcjonalne należy do kwadrantu Q2 (cel biznesowy).',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Testowanie akceptacyjne przez użytkownika.',
                explanation: 'Testowanie akceptacyjne należy do kwadrantu Q3 (cel biznesowy, krytyka produktu).',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Testowanie integracji modułów.',
                explanation: 'To jest prawidłowa odpowiedź - wspiera zespół w rozwoju produktu i ma cel technologiczny.',
                isCorrect: true
            }
        ],
        correctAnswer: 3
    },
    {
        id: '34',
        chapter: 'Podstawy testowania',
        subchapter: '5.2.4',
        question: 'W której z poniższych odpowiedzi NAJLEPIEJ powiązano ryzyka i działania łagodzące ryzyko?',
        options: [
            {
                label: 'A',
                content: '1C, 2D, 3A, 4B',
                explanation: 'To powiązanie nie jest optymalne dla podanych ryzyk i działań.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '1B, 2D, 3A, 4C',
                explanation: 'To powiązanie nie jest optymalne dla podanych ryzyk i działań.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1B, 2A, 3D, 4C',
                explanation: 'To jest prawidłowa odpowiedź - wszystkie ryzyka są odpowiednio powiązane z działaniami łagodzącymi.',
                isCorrect: true
            },
            {
                label: 'D',
                content: '1C, 2A, 3D, 4B',
                explanation: 'To powiązanie nie jest optymalne dla podanych ryzyk i działań.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '35',
        chapter: 'Podstawy testowania',
        subchapter: '5.3.1',
        question: 'Która z poniższych metryk jest metryką jakości produktu?',
        options: [
            {
                label: 'A',
                content: 'Średni czas do awarii.',
                explanation: 'To jest prawidłowa odpowiedź - średni czas do awarii jest miarą niezawodności produktu.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Liczba wykrytych defektów.',
                explanation: 'To jest metryka dotycząca defektów, nie jakości produktu.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Pokrycie wymagań.',
                explanation: 'To jest metryka dotycząca pokrycia, nie jakości produktu.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Odsetek wykrytych defektów.',
                explanation: 'To jest metryka dotycząca defektów, nie jakości produktu.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '36',
        chapter: 'Podstawy testowania',
        subchapter: '5.3.3',
        question: 'Należysz do zespołu testowego zlokalizowanego w Ameryce Północnej i uczestniczącego w tworzeniu produktu dla klienta z siedzibą w Europie. Zespół ma charakter zwinny i stosuje metodykę DevOps. Który z poniższych sposobów jest NAJMNIEJ skuteczną metodą przekazywania klientowi informacji o postępach testowania?',
        options: [
            {
                label: 'A',
                content: 'Bezpośrednia komunikacja.',
                explanation: 'To jest prawidłowa odpowiedź - ze względu na różnice w strefach czasowych bezpośrednia komunikacja jest najmniej skuteczna.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Tablice wskaźników.',
                explanation: 'Tablice wskaźników są dostępne zawsze, niezależnie od strefy czasowej.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Poczta elektroniczna.',
                explanation: 'Email działa asynchronicznie, więc różnice czasowe nie są dużym problemem.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wideokonferencje.',
                explanation: 'Wideokonferencje mogą być planowane z uwzględnieniem różnic czasowych.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '37',
        chapter: 'Podstawy testowania',
        subchapter: '5.4.1',
        question: 'Które z poniższych stwierdzeń NAJLEPIEJ opisuje przykład wspomagania testowania przez zarządzanie konfiguracją?',
        options: [
            {
                label: 'A',
                content: 'Dysponując numerem wersji środowiska narzędzie do zarządzania konfiguracją może pobrać numery wersji bibliotek, zaślepek i sterowników używanych w tym środowisku.',
                explanation: 'To jest prawidłowa odpowiedź - narzędzie śledzi wszystkie komponenty i ich wersje w środowisku.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Dysponując wartościami danych wejściowych narzędzie do zarządzania konfiguracją może wykonać przypadki testowe dla odpowiednich konfiguracji oraz obliczyć pokrycie testowe.',
                explanation: 'Narzędzia do zarządzania konfiguracją nie wykonują testów ani nie obliczają pokrycia.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Dysponując danymi dotyczącymi daty zakupu licencji oprogramowania, narzędzie do zarządzania konfiguracją automatycznie generuje informację o upływającym terminie ważności licencji produktu.',
                explanation: 'Zarządzanie licencjami nie jest funkcją narzędzi do zarządzania konfiguracją.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Dysponując numerem wersji przypadku testowego, narzędzie do zarządzania konfiguracją może automatycznie wygenerować dla niego dane testowe.',
                explanation: 'Narzędzia do zarządzania konfiguracją nie generują danych testowych.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    },
    {
        id: '38',
        chapter: 'Podstawy testowania',
        subchapter: '5.5.1',
        question: 'Testujesz funkcję sortowania, która jako parametr wejściowy przyjmuje zbiór liczb i zwraca ten sam zbiór, ale uporządkowany w kolejności rosnącej. Wskaż stwierdzenie stanowiące NAJLEPIEJ sformułowany opis awarii, który można umieścić w raporcie o defekcie.',
        options: [
            {
                label: 'A',
                content: 'System niepoprawnie sortuje niektóre zbiory liczb. Patrz: PT3, PT4, PT5.',
                explanation: 'To stwierdzenie jest zbyt ogólne i nie wskazuje konkretnej przyczyny problemu.',
                isCorrect: false
            },
            {
                label: 'B',
                content: 'System najwyraźniej nie uwzględnia zduplikowanych wartości podczas sortowania. Patrz: PT3, PT4, PT5.',
                explanation: 'To jest prawidłowa odpowiedź - precyzyjnie wskazuje prawdopodobną przyczynę problemu.',
                isCorrect: true
            },
            {
                label: 'C',
                content: 'System nie sortuje liczb ujemnych. Patrz: PT4, PT5.',
                explanation: 'To jest nieprawdziwe - system sortuje liczby ujemne, problem leży gdzie indziej.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'W PT3, PT4 i PT5 występują defekty (powtórzone wartości wejściowe), które należy usunąć.',
                explanation: 'To błędnie sugeruje, że problem leży w danych testowych, nie w implementacji.',
                isCorrect: false
            }
        ],
        correctAnswer: 1
    },
    {
        id: '39',
        chapter: 'Podstawy testowania',
        subchapter: '6.1.1',
        question: 'W której z poniższych odpowiedzi NAJLEPIEJ powiązano opisy i kategorie narzędzi testowych?',
        options: [
            {
                label: 'A',
                content: '1A, 2B, 3C, 4D',
                explanation: 'To powiązanie nie jest optymalne dla podanych opisów i kategorii.',
                isCorrect: false
            },
            {
                label: 'B',
                content: '1B, 2D, 3C, 4A',
                explanation: 'To powiązanie nie jest optymalne dla podanych opisów i kategorii.',
                isCorrect: false
            },
            {
                label: 'C',
                content: '1C, 2D, 3B, 4A',
                explanation: 'To jest prawidłowa odpowiedź - każdy opis jest powiązany z właściwą kategorią narzędzi.',
                isCorrect: true
            },
            {
                label: 'D',
                content: '1D, 2C, 3A, 4B',
                explanation: 'To powiązanie nie jest optymalne dla podanych opisów i kategorii.',
                isCorrect: false
            }
        ],
        correctAnswer: 2
    },
    {
        id: '40',
        chapter: 'Podstawy testowania',
        subchapter: '6.2.1',
        question: 'Która z poniższych odpowiedzi NAJLEPIEJ opisuje korzyści związane z automatyzacją testowania?',
        options: [
            {
                label: 'A',
                content: 'Możliwość określenia miar pokrycia, które są zbyt skomplikowane, aby pomiar mógł zostać dokonany przez ludzi.',
                explanation: 'To jest prawidłowa odpowiedź - automatyzacja umożliwia złożone pomiary, np. pokrycia kodu.',
                isCorrect: true
            },
            {
                label: 'B',
                content: 'Przejęcie części odpowiedzialności za testowanie przez dostawcę narzędzia.',
                explanation: 'Odpowiedzialność za testowanie pozostaje po stronie zespołu testowego.',
                isCorrect: false
            },
            {
                label: 'C',
                content: 'Brak konieczności korzystania z krytycznego myślenia podczas analizy wyników testów.',
                explanation: 'Automatyzacja nie eliminuje potrzeby krytycznej analizy wyników.',
                isCorrect: false
            },
            {
                label: 'D',
                content: 'Wygenerowanie przypadków testowych na podstawie analizy kodu programu.',
                explanation: 'Same narzędzia nie mogą generować przypadków testowych tylko na podstawie kodu.',
                isCorrect: false
            }
        ],
        correctAnswer: 0
    }
];

export default questionSetB;