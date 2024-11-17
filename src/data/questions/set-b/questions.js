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
                explanation: 'Odpowiedź niepoprawna. Często możliwe jest zastosowanie testowania dynamicznego do spowodowania awarii przedmiotu testów w sposób nieosiągalny dla użytkowników, np. za pomocą wstrzykiwania błędów. Jednak jeśli dana awaria nie może nigdy wystąpić w przypadku korzystania z produktu przez rzeczywistych użytkowników końcowych, wykrycie takich sytuacji nie ma istotnego znaczenia, ponieważ ostatecznym celem testowania jest poprawa jakości produktu pracy z punktu widzenia użytkowników końcowych. Poświęcenie czasu na testowanie pod kątem awarii, które nie mogą wystąpić u rzeczywistych użytkowników, to niezbyt efektywny sposób wykorzystania pracy testerów.'
            },
            {
                label: 'B',
                content: 'Testowanie statyczne jest stosowane przez programistów w celu wykrycia awarii w kodzie programu wcześniej niż można to osiągnąć za pomocą testowania dynamicznego.',
                explanation: 'Odpowiedź niepoprawna. Testowanie statyczne jest formą analizy statycznej stosowaną przez programistów w celu wykrycia defektów w kodzie programu wcześniej niż można to osiągnąć za pomocą testowania dynamicznego. Należy jednak zauważyć, że testowanie statyczne (i analiza statyczna) służy do wykrywania defektów, a nie awarii, które są wykrywane podczas testowania dynamicznego. Zatem z powodu użycia określenia „awarie" odpowiedź należy uznać za niepoprawną.'
            },
            {
                label: 'C',
                content: 'Analiza statyczna dostarcza klientom potwierdzenia, że elementy systemu, które nie udostępniają danych wyjściowych, są gotowe do przekazania do eksploatacji.',
                explanation: 'Odpowiedź niepoprawna. Analiza statyczna bezpośrednio wykrywa w kodzie anomalie, które mogą być defektami. Działania takie wykonuje się zwykle na potrzeby programistów, a nie klientów. Sformułowanie o potwierdzeniu poprzez analizę statyczną możliwości oddania do eksploatacji elementów, które nie udostępniają danych wyjściowych, jest pozbawione sensu.'
            },
            {
                label: 'D',
                content: 'Przeglądy zwiększają jakość specyfikacji wymagań, dzięki czemu w utworzonych na ich podstawie produktach pracy liczba niezbędnych zmian będzie mniejsza.',
                explanation: 'Odpowiedź poprawna. Przeglądy to forma testowania statycznego, którą można zastosować już na samym początku cyklu wytwarzania oprogramowania. Wykorzystuje się je do znalezienia defektów, które da się usunąć wcześniej, dzięki czemu nie trzeba niepotrzebnie poświęcać czasu na realizację niepoprawnych wymagań. Jeśli defekty nie zostaną wcześnie wykryte i usunięte, to po ich znalezieniu konieczne będzie wprowadzenie zmian w pochodnych produktach pracy, np. w projekcie lub w kodzie, ponieważ będą one oparte na błędnych wymaganiach.'
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
                explanation: 'Odpowiedź niepoprawna. Zapewnienie jakości koncentruje się na doskonaleniu i wdrażaniu procesów, stosując podejście prewencyjne w celu uniknięcia błędów i defektów, podczas gdy testowanie jest formą kontroli jakości, która służy do wykrywania defektów.'
            },
            {
                label: 'B',
                content: 'Testowanie jest wykonywane w ramach kontroli jakości.',
                explanation: 'Odpowiedź poprawna. Kontrola jakości ma na celu osiągnięcie odpowiednich poziomów jakości poprzez skupienie się na identyfikacji i korygowaniu defektów produktu. Testowanie jest istotną częścią kontroli jakości i pomaga odkryć te defekty.'
            },
            {
                label: 'C',
                content: 'Testowanie to inne określenie kontroli jakości.',
                explanation: 'Odpowiedź niepoprawna. Chociaż testowanie jest istotną częścią kontroli jakości i pomaga odkryć defekty, inne (nietestowe) techniki wykorzystywane w kontroli jakości obejmują metody formalne, takie jak sprawdzanie modelu i dowód poprawności, a także symulację i prototypowanie.'
            },
            {
                label: 'D',
                content: 'Testowanie odbywa się w ramach zapewnienia jakości.',
                explanation: 'Odpowiedź niepoprawna. Zapewnienie jakości koncentruje się na doskonaleniu i wdrażaniu procesów, stosując podejście prewencyjne w celu uniknięcia błędów i defektów, podczas gdy testowanie jest formą kontroli jakości, która służy do wykrywania defektów.'
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
                explanation: 'Odpowiedź niepoprawna. Zasada mówi, że z wyjątkiem najprostszych przypadków nie jest możliwe przetestowanie wszystkiego. Przetestowanie wszystkiego oznaczałoby konieczność sprawdzenia każdej możliwej kombinacji danych wejściowych do testów z uwzględnieniem wszystkich potencjalnych okoliczności. Jest to zwykle niewykonalne, gdyż może oznaczać praktycznie nieskończoną liczbę przypadków. Przetestowanie wszystkich możliwych danych wyjściowych nie rozwiąże tego problemu, ponieważ relacje między danymi wejściowymi i określonymi danymi wyjściowymi mogą być różne dla różnych przedmiotów testów.'
            },
            {
                label: 'B',
                content: 'Dokumentowanie wszystkich możliwych wariantów danych wejściowych i określanie ich priorytetów na podstawie stopnia ważności.',
                explanation: 'Odpowiedź niepoprawna. Zasada mówi o tym, że nie jest wykonalne przetestowanie każdej możliwej kombinacji wartości wejściowych z uwzględnieniem wszystkich potencjalnych okoliczności. Wynika to z faktu, że w przypadku nietrywialnych systemów liczba kombinacji może być praktycznie nieskończona. Dlatego udokumentowanie wszystkich możliwych kombinacji danych wejściowych do testów byłoby niepraktyczne, ponieważ zajęłoby nieskończenie wiele czasu.'
            },
            {
                label: 'C',
                content: 'Rozpoczynanie testów na jak najwcześniejszym etapie z wykorzystaniem przeglądów i innych podejść do testowania statycznego.',
                explanation: 'Odpowiedź niepoprawna. Rozpoczynanie testów na jak najwcześniejszym etapie z wykorzystaniem przeglądów i innych podejść do testowania statycznego nie rozwiązuje problemu wynikającego ze zbyt dużej liczby możliwych przypadków testowych. Zasada „wczesne testowanie oszczędza czas i pieniądze" dotyczy usuwania defektów na wczesnym etapie w celu uniknięcia ich wystąpienia w pochodnych produktach pracy, co pozwala obniżyć koszty i zmniejszyć prawdopodobieństwo awarii.'
            },
            {
                label: 'D',
                content: 'Zastosowanie podziału na klasy równoważności oraz analizy wartości brzegowych do generowania przypadków testowych.',
                explanation: 'Odpowiedź poprawna. Zastosowanie podziału na klasy równoważności oraz analizy wartości brzegowych do generowania przypadków testowych to jeden ze sposobów uwzględnienia omawianej zasady, ponieważ takie techniki testowania stanowią systematyczny sposób wyprowadzania skończonego podzbioru wszystkich przypadków testowych.'
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
                explanation: 'Odpowiedź poprawna. W projektowaniu testów używa się warunków testowych do tworzenia przypadków testowych i innych niezbędnych testaliów, np. wymagań dotyczących danych testowych i kart opisu testu na potrzeby testowania eksploracyjnego. Wymagania dotyczące środowiska testowego również są specyfikowane, z uwzględnieniem niezbędnej infrastruktury i narzędzi.'
            },
            {
                label: 'B',
                content: 'Wykonywanie testów.',
                explanation: 'Odpowiedź niepoprawna. Wykonywanie testów obejmuje wykonywanie przypadków testowych (w ramach procedur testowych), jednak bezpośrednio nie uwzględnia innych testaliów wymienionych w pytaniu, np. wymagań dotyczących danych testowych, wymagań dotyczących środowiska testowego i warunków testowych.'
            },
            {
                label: 'C',
                content: 'Analiza testów.',
                explanation: 'Odpowiedź niepoprawna. Analiza testów służy do określenia cech wymagających przetestowania. Podstawa testów jest analizowana i definiowana w postaci warunków testowych, którym następnie przypisywane są priorytety wraz z powiązanymi ryzykami. Analiza obejmuje pracę z warunkami testowymi, jednak nie uwzględnia innych testaliów wymienionych w pytaniu, np. wymagań dotyczących danych testowych, wymagań dotyczących środowiska testowego i przypadków testowych.'
            },
            {
                label: 'D',
                content: 'Implementacja testów.',
                explanation: 'Odpowiedź niepoprawna. Implementacja testów obejmuje generowanie procedur testowych, np. skryptów testów manualnych i automatycznych tworzonych na podstawie przypadków testowych i potencjalnie łączonych w zestawy testowe. Procedury testowe są szeregowane według priorytetów i porządkowane w ramach harmonogramu wykonywania testów. Następnie tworzy się dane testowe i buduje środowisko testowe, którego konfiguracja podlega zweryfikowaniu. W ramach implementacji bezpośrednio pracujemy z przypadkami testowymi, możemy również korzystać z wymagań dotyczących danych testowych i wymagań dotyczących środowiska testowego w celu utworzenia takich danych i środowiska, jednak nie uwzględniamy warunków testowych.'
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
                explanation: 'Odpowiedź niepoprawna. Dział marketingu organizacji raczej nie będzie wykonywał zbyt wielu testów (chociaż w przypadku niektórych organizacji pracownicy tego działu mogą uczestniczyć w testowaniu akceptacyjnym), więc średni poziom ich doświadczenia (na ogół w obszarze marketingu) raczej nie wpłynie na sposób testowania danego przedmiotu testów.'
            },
            {
                label: 'B',
                content: 'Wiedza użytkowników o tworzeniu przeznaczonego dla nich nowego systemu.',
                explanation: 'Odpowiedź niepoprawna. Poziom wiedzy użytkowników o budowaniu dla nich nowego systemu raczej nie wpłynie na sposób prowadzenia testów. Ewentualny udział użytkowników, który może wpłynąć na sposób wykonywania testów, będzie raczej wynikać z decyzji podjętych przez testerów, klienta i kierownika projektu.'
            },
            {
                label: 'C',
                content: 'Liczba lat doświadczenia członków zespołu testowego.',
                explanation: 'Odpowiedź poprawna. Liczba lat doświadczenia członków zespołu przeprowadzającego testy pozwala określić ich umiejętności i wiedzę (np. znajomość różnych narzędzi i typów defektów), które mogą zostać wykorzystane podczas testowania.'
            },
            {
                label: 'D',
                content: 'Struktura organizacyjna użytkowników końcowych komercyjnej aplikacji do strumieniowej transmisji muzyki.',
                explanation: 'Odpowiedź niepoprawna. Struktura organizacyjna będzie się różnić dla różnych użytkowników końcowych. Użytkownicy mogą nawet nie wiedzieć, że aplikacja aktualnie podlega testom, więc struktura organizacyjna, w której działa użytkownik końcowy, ma niewielki wpływ na sposób wykonywania testów.'
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
                explanation: 'Odpowiedź niepoprawna. Śledzenie powiązań między złagodzonymi ryzykami a zaliczonymi przypadkami testowymi nie daje zbyt wielu informacji, ponieważ aby ryzyka zostały złagodzone (za pomocą testowania), i tak muszą z nimi wiązać się odpowiednie zaliczone przypadki testowe. Jeśli mamy mieć możliwość oceny ryzyka rezydualnego, musi być dostępne śledzenie powiązań między wszystkimi ryzykami a wynikami testów, tak aby ryzyka, dla których nie ma odpowiednich zaliczonych testów, można było zidentyfikować jako ryzyka rezydualne.'
            },
            {
                label: 'B',
                content: 'Możliwość śledzenia powiązań między wymaganiami użytkowników a rezultatami wykonania testów pozwala zmierzyć postępy w realizacji projektu w odniesieniu do celów biznesowych.',
                explanation: 'Odpowiedź poprawna. Śledzenie powiązań między wymaganiami użytkowników a rezultatami wykonania testów pozwala określić, które wymagania użytkowników zostały do tej pory przetestowane, a zatem mierzyć postępy w realizacji projektu (w kontekście testowania) w odniesieniu do celów biznesowych.'
            },
            {
                label: 'C',
                content: 'Możliwość śledzenia powiązań między testerami a niezaliczonymi przypadkami testowymi pozwala określić poziom umiejętności testerów.',
                explanation: 'Odpowiedź niepoprawna. Nie jest wcale oczywiste, że niezaliczone przypadki testowe w większym stopniu świadczą o umiejętnościach testerów niż przypadki zaliczone. W pewnym zakresie zależy to od celu danego testu (np. może nim być budowanie zaufania do jakości przedmiotu testów albo powodowanie awarii). Taki pomiar jakości pracy testerów oparty na liczbie zaliczonych i niezaliczonych przypadków testów może poza tym przynieść efekty przeciwne do zamierzonego, ponieważ testerzy mogą zacząć optymalizować swoje działania na podstawie tej metryki, a nie na podstawie celu testu.'
            },
            {
                label: 'D',
                content: 'Możliwość śledzenia powiązań między zidentyfikowanymi ryzykami a zapisanymi warunkami testowymi pozwala określić, dla których ryzyk warto wykonać testy.',
                explanation: 'Odpowiedź niepoprawna. Śledzenie powiązań między zidentyfikowanymi ryzykami a zapisanymi warunkami testowymi pozwala określić warunki testowe, które należy jeszcze zapisać. Ustalenie, dla których ryzyk warto wykonać testy, jest częścią zarządzania ryzykiem, a konkretnie działań związanych z łagodzeniem ryzyka.'
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
                explanation: 'Odpowiedź niepoprawna. Dobre umiejętności komunikacyjne oraz umiejętność aktywnego słuchania i pracy w zespole pozwalają testerom sprawnie komunikować się ze wszystkimi interesariuszami. Głęboka znajomość rynku gier komputerowych nie jest jednak przykładem ogólnej umiejętności istotnej dla testerów.'
            },
            {
                label: 'B',
                content: 'Tester jest byłym pilotem i potrafił lepiej zrozumieć kryteria akceptacji systemu sterowania śmigłowcem.',
                explanation: 'Odpowiedź poprawna. Wiedza merytoryczna pozwalająca zrozumieć użytkowników i przedstawicieli jednostek biznesowych oraz sprawnie się z nimi porozumiewać jest jedną z ogólnych umiejętności, które powinni opanować testerzy. Tester będący doświadczonym pilotem może lepiej ocenić kryteria akceptacji systemu sterowania śmigłowcem.'
            },
            {
                label: 'C',
                content: 'Tester pracował poprzednio jako programista i skorzystał ze swoich umiejętności w tej dziedzinie, aby skuteczniej komunikować się z analitykami biznesowymi.',
                explanation: 'Odpowiedź niepoprawna. Chociaż kompetencje programistyczne można uznać za wiedzę techniczną pozwalającą zwiększyć efektywność testowania podczas korzystania z niektórych narzędzi testowych, jest mało prawdopodobne, że takie umiejętności usprawnią komunikację z analitykami biznesowymi.'
            },
            {
                label: 'D',
                content: 'Tester zachował szczególną ostrożność, chcąc uniknąć błędów podczas metodycznego generowania przypadków testowych przed rozpoczęciem sesji testowania eksploracyjnego.',
                explanation: 'Odpowiedź niepoprawna. Staranność, ostrożność, ciekawość, dbałość o szczegóły i podejście metodyczne (niezbędne do identyfikowania defektów, zwłaszcza defektów trudnych do wykrycia) są rzeczywiście przydatnymi dla testera umiejętnościami ogólnymi. Jest jednak wątpliwe, że tester zajmie się generowaniem przypadków testowych przed rozpoczęciem testowania eksploracyjnego, jednym z założeń tej techniki jest bowiem generowanie przypadków testowych w trakcie testowania, a nie zapisywanie ich na wcześniejszym etapie.'
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
                explanation: 'Odpowiedź niepoprawna. W ramach podejścia „cały zespół" każdy członek zespołu, który dysponuje niezbędną wiedzą i umiejętnościami, może wykonywać dowolne zadania, nie oznacza to jednak, że każdy może przyjmować w dowolnym momencie dowolną rolę. Zwykle członkowie zespołu przyjmują role, do których wypełniania mają odpowiednie kompetencje. Nie oczekuje się również, że każdy członek zespołu będzie w stanie realizować dowolną rolę.'
            },
            {
                label: 'B',
                content: 'W podejściu tym potrzebny jest tylko jeden zespół do obsługi całego projektu wytwarzania oprogramowania.',
                explanation: 'Odpowiedź niepoprawna. Podejście „cały zespół" dotyczy pracy jednego zespołu (zwykle w przypadku zwinnego wytwarzania oprogramowania), jednak nie opisuje sposobu pracy wielu zespołów w większych projektach. Nie sugeruje również, że tylko jeden zespół jest niezbędny do realizacji całego projektu.'
            },
            {
                label: 'C',
                content: 'Umieszczenie przedstawicieli jednostek biznesowych obok deweloperów w tym samym zespole.',
                explanation: 'Odpowiedź niepoprawna. W podejściu „cały zespół" nie oczekuje się, że wszyscy członkowie zespołu będą uczestniczyć w podejmowaniu każdej decyzji. Nie ma na przykład potrzeby, żeby przedstawiciel jednostki biznesowej (np. właściciel produktu) uczestniczył w każdej decyzji technicznej, która nie ma wpływu na cele biznesowe. Zastosowanie takiego podejścia niepotrzebnie spowolniłoby pracę zespołu.'
            },
            {
                label: 'D',
                content: 'Podejście to tworzy w zespole efekt synergii, który jest korzystny dla całego projektu.',
                explanation: 'Odpowiedź poprawna. Dzięki efektywnemu wykorzystaniu różnych zestawów kompetencji poszczególnych członków zespołu podejście „cały zespół" zwiększa dynamikę pracy zespołowej, usprawnia wymianę informacji i współpracę oraz generuje efekt synergii przynoszący korzyści dla całego projektu.'
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
                explanation: 'Odpowiedź niepoprawna. W przypadku zwinnego wytwarzania oprogramowania produkty powstają w każdej iteracji, a częste dostarczanie wersji przyrostowych wymaga szeroko zakrojonego testowania regresji. Niektóre lub wszystkie testy regresji mogą zostać zautomatyzowane, jednak automatyzacja testów systemowych nie jest w stanie zastąpić testowania regresji (niezależnie od tego, czy podlega ono automatyzacji).'
            },
            {
                label: 'B',
                content: 'Jeśli stosowany jest sekwencyjny model wytwarzania, testowanie dynamiczne odbywa się zwykle w późniejszych fazach cyklu życia.',
                explanation: 'Odpowiedź poprawna. Jeśli stosowany jest sekwencyjny model wytwarzania, w początkowych fazach cyklu życia nie jest dostępny kod przeznaczony do wykonania, dlatego w tym czasie wykonuje się testowanie statyczne (np. przeglądy). W późniejszych fazach, kiedy taki kod staje się dostępny, możliwe jest testowanie dynamiczne. Należy jednak pamiętać, że przygotowanie do testowania dynamicznego często odbywa się już we wczesnych fazach dowolnego cyklu wytwarzania oprogramowania.'
            },
            {
                label: 'C',
                content: 'Jeśli stosowany jest iteracyjny model wytwarzania, testy modułowe są zwykle wykonywane manualnie przez programistów.',
                explanation: 'Odpowiedź niepoprawna. Jeśli stosowany jest iteracyjny model wytwarzania, np. w przypadku zwinnego wytwarzania oprogramowania, testy modułowe mogą być dobrym sposobem testowania regresji w każdej iteracji. W takiej sytuacji wiele przemawia za automatyzacją testów modułowych, ponieważ muszą one być często uruchamiane. Mało prawdopodobne, żeby istniało poważne uzasadnienie konieczności manualnego wykonywania testów modułowych przez programistów.'
            },
            {
                label: 'D',
                content: 'W przypadku zastosowania przyrostowego modelu wytwarzania, testowanie statyczne odbywa się we wczesnych przyrostach, a testowanie dynamiczne w późniejszych.',
                explanation: 'Odpowiedź niepoprawna. W większości przyrostowych modeli wytwarzania produkty powstają w każdym przyroście, co wymaga zastosowania zarówno testowania statycznego, jak i dynamicznego na wszystkich poziomach testów dla każdego dostarczanego przyrostu.'
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
                explanation: 'Odpowiedź niepoprawna. Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po udostępnieniu wersji roboczych tych produktów. Pozwala to wykonać wcześniejsze testowanie w ramach podejścia „przesunięcie w lewo". Jeśli czekaliby z tym do następnej fazy wytwarzania, pojawiłaby się możliwość niepotrzebnego rozpoczęcia prac programistycznych (oraz związanych z testowaniem) opartych na wadliwych, niepoddanych przeglądom produktach pracy.'
            },
            {
                label: 'B',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po udostępnieniu wersji roboczych tych produktów.',
                explanation: 'Odpowiedź poprawna. Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po udostępnieniu wersji roboczych tych produktów. Pozwala to wykonać wcześniejsze testowanie w ramach podejścia „przesunięcie w lewo".'
            },
            {
                label: 'C',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy przed rozpoczęciem analizy i projektowania testów.',
                explanation: 'Odpowiedź niepoprawna. Testerzy zwykle prowadzą przeglądy produktów pracy stanowiących podstawę testów w ramach analizy testów, a nie przed rozpoczęciem analizy i projektowania testów.'
            },
            {
                label: 'D',
                content: 'Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po opublikowaniu tych produktów.',
                explanation: 'Odpowiedź niepoprawna. Testerzy powinni przeprowadzić przegląd produktów pracy natychmiast po udostępnieniu wersji roboczych tych produktów. Pozwala to wykonać wcześniejsze testowanie w ramach podejścia „przesunięcie w lewo". Gdyby testerzy czekali na publikację, do opublikowanej wersji dokumentu mogłyby trafić defekty, które udałoby się wcześniej znaleźć w trakcie przeglądu.'
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
                explanation: 'Odpowiedź poprawna. TDD jest klasycznym przykładem podejścia "najpierw test".'
            },
            {
                label: 'B',
                content: 'Wytwarzanie sterowane pokryciem.',
                explanation: 'Odpowiedź niepoprawna. To nie jest przykład podejścia "najpierw test".'
            },
            {
                label: 'C',
                content: 'Wytwarzanie sterowane jakością.',
                explanation: 'Odpowiedź niepoprawna. To nie jest przykład podejścia "najpierw test".'
            },
            {
                label: 'D',
                content: 'Wytwarzanie sterowane cechami.',
                explanation: 'Odpowiedź niepoprawna. To jest metodyka zwinna oparta na cechach, nie podejście "najpierw test".'
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
                explanation: 'Odpowiedź niepoprawna. W DevOps programiści muszą dostarczać testy modułowe wraz z kodem.'
            },
            {
                label: 'B',
                content: 'W celu zwiększenia częstotliwości aktualizacji i tworzenia wydań systemów wymagane jest opracowanie wielu automatycznych testów regresji, które pozwalają zmniejszyć ryzyko związane z regresją.',
                explanation: 'Odpowiedź poprawna. Metodyka DevOps wzbogaca testowanie na kilka sposobów, m.in. poprzez szybkie otrzymywanie informacji zwrotnych na temat jakości kodu, zmniejszenie ryzyka związanego z regresją dzięki automatycznym testom regresji oraz promowanie podejścia „przesunięcie w lewo" opierającego się na dostarczaniu wysokiej jakości kodu i wykonywaniu testów modułowych.'
            },
            {
                label: 'C',
                content: 'W celu równoprawnego traktowania programistów i osób odpowiedzialnych za eksploatację testerzy poświęcą więcej czasu na testowanie wydań przez tę drugą grupę z wykorzystaniem podejścia „przesunięcie w prawo".',
                explanation: 'Odpowiedź niepoprawna. To nie jest główny cel podejścia "przesunięcie w prawo" w DevOps.'
            },
            {
                label: 'D',
                content: 'W celu zwiększenia synergii między testerami, programistami i osobami odpowiedzialnymi za eksploatację należy w pełni zautomatyzować testowanie i zrezygnować z testów manualnych.',
                explanation: 'Odpowiedź niepoprawna. DevOps nie eliminuje testów manualnych, które nadal są wartościowe.'
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
                explanation: 'Odpowiedź poprawna. Testowanie systemowe bada zachowanie i możliwości całego systemu i obejmuje testowanie niefunkcjonalne charakterystyk jakościowych, m.in. testy zabezpieczeń. Ten typ testowania często jest wykonywany przez niezależny zespół testowy na podstawie specyfikacji systemu.'
            },
            {
                label: 'B',
                content: 'Testowanie interfejsu systemu wymiany walut z zewnętrznym systemem bankowym.',
                explanation: 'Odpowiedź niepoprawna. Interfejsy łączące system podlegający testowaniu z innymi systemami oraz usługami zewnętrznymi sprawdzane są w ramach testowania integracji systemów.'
            },
            {
                label: 'C',
                content: 'Testy beta systemu zdalnego nauczania prowadzone przez twórców oprogramowania.',
                explanation: 'Odpowiedź niepoprawna. Testowanie beta to typ testowania akceptacyjnego wykonywanego w zewnętrznym ośrodku przez osoby występujące w rolach spoza organizacji wytwórczej.'
            },
            {
                label: 'D',
                content: 'Testowanie interakcji między interfejsem użytkownika i bazą danych w systemie kadrowym.',
                explanation: 'Odpowiedź niepoprawna. Interfejsy i interakcje między modułami systemu, np. interfejsem użytkownika i bazą danych, sprawdzane są w ramach testowania integracji modułów.'
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
                explanation: 'Odpowiedź niepoprawna. Liczba testów regresji rośnie w miarę postępów w realizacji projektu, ponieważ zwykle po wprowadzeniu zmian w systemie wymagane są nowe testy regresji. Na ogół wzrasta również liczba testów potwierdzających, ponieważ potrzebne są testy dla każdej nowej poprawki wprowadzonej w systemie.'
            },
            {
                label: 'B',
                content: 'Testy regresji są tworzone i uruchamiane po wprowadzeniu poprawek w przedmiocie testów, natomiast testy potwierdzające są uruchamiane po wprowadzeniu udoskonaleń w przedmiocie testów.',
                explanation: 'Odpowiedź niepoprawna. Występuje odwrotna sytuacja. Testy potwierdzające są tworzone i uruchamiane po wprowadzeniu poprawek w przedmiocie testów, natomiast testy regresji są uruchamiane (w idealnej sytuacji) po wprowadzeniu udoskonaleń (zmian) w przedmiocie testów.'
            },
            {
                label: 'C',
                content: 'Testowanie regresji wiąże się ze sprawdzeniem, czy środowisko operacyjne nie uległo zmianie, natomiast testowanie potwierdzające polega na testowaniu zmian w przedmiocie testów.',
                explanation: 'Odpowiedź niepoprawna. Podczas testowania potwierdzającego sprawdzamy, czy defekt został poprawnie usunięty, zatem rzeczywiście polega ono na testowaniu zmian w przedmiocie testów. Jednak testowanie regresji wiąże się ze sprawdzeniem, czy wprowadzone zmiany (w tym zmiany w środowisku operacyjnym) nie spowodowały negatywnych konsekwencji w oprogramowaniu, które nie było modyfikowane. Nie chodzi w nim zatem o sprawdzenie, czy nie zmieniło się środowisko operacyjne.'
            },
            {
                label: 'D',
                content: 'Testowanie regresji uwzględnia negatywne konsekwencje w niezmienionym kodzie, natomiast testowanie potwierdzające wiąże się z testowaniem zmienionego kodu.',
                explanation: 'Odpowiedź poprawna. Testowanie regresji pozwala sprawdzić, czy wprowadzone zmiany nie spowodowały negatywnych konsekwencji w oprogramowaniu, które nie było modyfikowane. Podczas testowania potwierdzającego sprawdzamy, czy defekt został usunięty, zatem rzeczywiście polega ono na testowaniu zmian w zmodyfikowanym kodzie.'
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
                explanation: 'Odpowiedź niepoprawna. Brak użyteczności interfejsu użytkownika można wykryć w trakcie przeglądu za pomocą odpowiedniej listy kontrolnej, jednak można to również zrobić za pomocą dynamicznych testów interfejsu prowadzonych przez kilku typowych użytkowników, którzy przekażą informacje zwrotne na temat jego użyteczności.'
            },
            {
                label: 'B',
                content: 'Nieosiągalny kod.',
                explanation: 'Odpowiedź poprawna. W trakcie przeglądu kodu można wykryć fragmenty kodu, do których nie prowadzi żadna ścieżka, natomiast w testach dynamicznych można sprawdzić tylko kod wykonywalny i nie można określić, że kod nie może zostać osiągnięty bez uruchomienia każdej możliwej kombinacji wejść i stanów wejściowych, co jest niepraktyczne w przypadku rzeczywistego kodu.'
            },
            {
                label: 'C',
                content: 'Długi czas odpowiedzi w przypadku większości oczekiwanych użytkowników systemu.',
                explanation: 'Odpowiedź niepoprawna. Bez uruchamiania kodu, czyli za pomocą samego testowania statycznego, trudno wykryć, że w przypadku większości oczekiwanych użytkowników systemu występuje długi czas odpowiedzi. Zatem w tej sytuacji defekt można wykryć w testach dynamicznych, ale raczej nie w testach statycznych.'
            },
            {
                label: 'D',
                content: 'Brak implementacji wymaganych cech w kodzie.',
                explanation: 'Odpowiedź niepoprawna. W trakcie przeglądu kodu prowadzonego przez osobę, która zna wymagane cechy systemu, można wykryć, że takie cechy nie zostały zaimplementowane. Można to jednak wykryć również podczas testów dynamicznych.'
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
                explanation: 'Odpowiedź niepoprawna. Informacje zwrotne pochodzą od interesariuszy (np. użytkowników końcowych i przedstawicieli jednostek biznesowych), a nie od programistów, nie należy więc oczekiwać, że dzięki nim kierownicy zdobędą wiedzę o mniejszej bądź większej produktywności programistów.'
            },
            {
                label: 'B',
                content: 'Kierownicy projektów mogą określić priorytety interakcji z interesariuszami.',
                explanation: 'Odpowiedź niepoprawna. Wczesne i często otrzymywane informacje zwrotne od interesariuszy nie służą kierownikom projektów do określania priorytetów interakcji z różnymi interesariuszami.'
            },
            {
                label: 'C',
                content: 'Możliwe jest wczesne sygnalizowanie potencjalnych problemów związanych z jakością.',
                explanation: 'Odpowiedź poprawna. Informacje zwrotne od interesariuszy otrzymywane w procesie wytwarzania oprogramowania w odpowiednim czasie i z odpowiednią częstotliwością mogą przynieść wiele korzyści, ponieważ możliwe staje się wtedy wczesne sygnalizowanie potencjalnych problemów związanych z jakością.'
            },
            {
                label: 'D',
                content: 'Użytkownicy końcowi lepiej rozumieją przyczyny opóźnień w dostarczeniu produktów pracy.',
                explanation: 'Odpowiedź niepoprawna. Dzięki odpowiednio wcześnie i odpowiednio często przekazywanym informacjom zwrotnym można zapobiec powstaniu produktu, który nie spełnia potrzeb interesariuszy i wymaga kosztownych poprawek, co wiązałoby się z niedotrzymaniem terminów. W idealnej sytuacji nie powinno być zatem opóźnień. Ponadto informacje przekazywane są przez interesariuszy, a nie interesariuszom. Wiedza użytkowników końcowych nie zwiększy się dzięki przekazaniu przez nich informacji.'
            }
        ],
        correctAnswer: 2
    },
    {
        id: '17',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.2',
        question: 'Mamy następujące opisy zadań:\n\n1. Wybór charakterystyk jakościowych poddawanych ocenie oraz kryteriów wyjścia.\n2. Dostęp do produktu pracy dla wszystkich uczestników.\n3. Zidentyfikowanie anomalii w produkcie pracy.\n4. Omówienie anomalii.\n\noraz czynności wykonywanych w ramach przeglądu:\n\nA. Przegląd indywidualny.\nB. Rozpoczęcie przeglądu.\nC. Planowanie.\nD. Przekazanie informacji i analiza.\n\nW której z poniższych odpowiedzi NAJLEPIEJ powiązano opisy zadań i czynności?',
        options: [
            {
                label: 'A',
                content: '1B, 2C, 3D, 4A',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest poprawne dla wszystkich elementów.'
            },
            {
                label: 'B',
                content: '1B, 2D, 3C, 4A',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest poprawne dla wszystkich elementów.'
            },
            {
                label: 'C',
                content: '1C, 2A, 3B, 4D',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest poprawne dla wszystkich elementów.'
            },
            {
                label: 'D',
                content: '1C, 2B, 3A, 4D',
                explanation: 'Odpowiedź poprawna. Wszystkie zadania są poprawnie powiązane z odpowiednimi czynnościami:\n1. Wybór charakterystyk jakościowych i kryteriów - planowanie (C)\n2. Dostęp do produktu pracy - rozpoczęcie przeglądu (B)\n3. Zidentyfikowanie anomalii - przegląd indywidualny (A)\n4. Omówienie anomalii - przekazanie informacji i analiza (D)'
            }
        ],
        correctAnswer: 3
    },
    {
        id: '18',
        chapter: 'Podstawy testowania',
        subchapter: '3.2.3',
        question: 'Poniżej podano listę ról w przeglądach:\n\n1. Protokolant.\n2. Lider przeglądu.\n3. Facylitator.\n4. Kierownik.\n\noraz listę obowiązków osób uczestniczących w przeglądach:\n\nA. Dba o sprawny przebieg spotkań związanych z przeglądem i zapewnia bezpieczne środowisko przeglądu.\nB. Rejestruje informacje związane z przeglądem, w tym informacje o podjętych decyzjach oraz o nowych anomaliach stwierdzonych w trakcie spotkania związanego z przeglądem.\nC. Decyduje o tym, co ma być przedmiotem przeglądu, a także udostępnia niezbędne zasoby, m.in. wyznacza pracowników oraz określa ramy czasowe przeglądu.\nD. Ponosi ogólną odpowiedzialność za przegląd, w tym określa miejsce i termin przeglądu.\n\nW której z poniższych odpowiedzi NAJLEPIEJ powiązano role i obowiązki?',
        options: [
            {
                label: 'A',
                content: '1A, 2B, 3D, 4C',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest poprawne dla wszystkich ról i obowiązków.'
            },
            {
                label: 'B',
                content: '1A, 2C, 3B, 4D',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest poprawne dla wszystkich ról i obowiązków.'
            },
            {
                label: 'C',
                content: '1B, 2D, 3A, 4C',
                explanation: 'Odpowiedź poprawna. To powiązanie poprawnie łączy wszystkie role z ich obowiązkami:\n1. Protokolant rejestruje informacje (B)\n2. Lider przeglądu ponosi ogólną odpowiedzialność (D)\n3. Facylitator dba o sprawny przebieg (A)\n4. Kierownik decyduje o przedmiocie i zasobach (C)'
            },
            {
                label: 'D',
                content: '1B, 2D, 3C, 4A',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest poprawne dla wszystkich ról i obowiązków.'
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
                explanation: 'Odpowiedź niepoprawna. Testowanie z użyciem tablicy decyzyjnej jest techniką czarnoskrzynkową, nie bazuje na kodzie.'
            },
            {
                label: 'B',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są wyprowadzane na podstawie specyfikacji opisującej logikę biznesową. W testowaniu gałęzi przypadki testowe są wyprowadzane na podstawie przewidywania wystąpień potencjalnych defektów w kodzie źródłowym.',
                explanation: 'Odpowiedź niepoprawna. Testowanie gałęzi nie opiera się na przewidywaniu defektów.'
            },
            {
                label: 'C',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są wyprowadzane na podstawie znajomości przepływu sterowania w przedmiocie testów. W testowaniu gałęzi przypadki testowe są wyprowadzane na podstawie specyfikacji opisującej logikę biznesową.',
                explanation: 'Odpowiedź niepoprawna. Ta odpowiedź odwraca role obu technik.'
            },
            {
                label: 'D',
                content: 'W testowaniu w oparciu o tablicę decyzyjną przypadki testowe są niezależne od sposobu implementacji oprogramowania. W testowaniu gałęzi przypadki testowe można utworzyć dopiero po zaprojektowaniu i implementacji kodu.',
                explanation: 'Odpowiedź poprawna. Testowanie w oparciu o tablicę decyzyjną jest techniką czarnoskrzynkową, więc jest oparte na analizie określonego zachowania przedmiotu testów bez odwoływania się do jego wewnętrznej struktury. Testowanie gałęzi jest techniką białoskrzynkową, więc wymaga znajomości implementacji.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: '20',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.1',
        question: 'Klienci sieci myjni samochodowych TestWash otrzymują karty, na których rejestruje się liczbę zakupionych do tej pory programów mycia. Początkowa wartość wynosi 0. Po wjeździe do myjni system zwiększa liczbę na karcie o 1. Nowa wartość reprezentuje numer bieżącej usługi. Na jego podstawie system decyduje o wysokości zniżki, do której uprawniony jest klient.\n\nZa każdym razem przy dziesiątym z kolei umyciu auta system przyznaje upust 10%, a przy dwudziestym dodatkowo 40% (tj. łącznie upust wynosi 50%).\n\nKtóry z poniższych zestawów danych wejściowych (reprezentujących numer bieżącej usługi) pozwala uzyskać największe pokrycie klas równoważności?',
        options: [
            {
                label: 'A',
                content: '19, 20, 30',
                explanation: 'Odpowiedź poprawna. Ten zestaw pokrywa wszystkie trzy klasy równoważności:\n- brak upustu (19)\n- 50% upustu (20)\n- 10% upustu (30)'
            },
            {
                label: 'B',
                content: '11, 12, 20',
                explanation: 'Odpowiedź niepoprawna. Ten zestaw pokrywa tylko dwie klasy równoważności:\n- brak upustu (11, 12)\n- 50% upustu (20)'
            },
            {
                label: 'C',
                content: '1, 10, 50',
                explanation: 'Odpowiedź niepoprawna. Ten zestaw pokrywa tylko dwie klasy równoważności:\n- brak upustu (1)\n- 10% upustu (10, 50)'
            },
            {
                label: 'D',
                content: '10, 29, 30, 31',
                explanation: 'Odpowiedź niepoprawna. Ten zestaw pokrywa tylko dwie klasy równoważności:\n- 10% upustu (10, 30)\n- brak upustu (29, 31)'
            }
        ],
        correctAnswer: 0
    },
    {
        id: '21',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.2',
        question: 'Testujesz formularz, który weryfikuje poprawność długości hasła wprowadzonego jako wartość wejściowa. Formularz akceptuje hasła o poprawnej długości, a odrzuca hasła, które są zbyt krótkie lub zbyt długie. Poprawne hasło powinno mieć długość od 6 do 12 znaków (włącznie). Jeśli ma inną długość, jest uznawane za niepoprawne. \nPoczątkowo formularz jest pusty (długość hasła = 0). Stosujesz analizę wartości brzegowych do zmiennej „długość hasła". \n Twój zestaw przypadków testowych pozwala osiągnąć 100% pokrycia dla dwupunktowej analizy wartości brzegowych. Zespół podjął decyzję, że z powodu wysokiego ryzyka związanego z danym modułem należy dodać przypadki testowe, tak aby osiągnąć 100% pokrycia dla trójpunktowej analizy wartości brzegowych. \n Jakie dodatkowe długości hasła należy przetestować, aby uzyskać takie pokrycie?',
        options: [
            {
                label: 'A',
                content: '4, 5, 13, 14',
                explanation: 'Odpowiedź niepoprawna. Te wartości nie zapewniają kompletnego pokrycia dla trójpunktowej analizy wartości brzegowych.'
            },
            {
                label: 'B',
                content: '7, 11',
                explanation: 'Odpowiedź niepoprawna. Ponieważ mamy już pokrycie dla dwupunktowej analizy wartości brzegowych, oznacza to, że przetestowaliśmy już hasła o następującej długości: 0, 5, 6, 12 i 13. Te wartości nie są wystarczające dla trójpunktowej analizy wartości brzegowych.'
            },
            {
                label: 'C',
                content: '1, 5, 13',
                explanation: 'Odpowiedź niepoprawna. Dziedzina zmiennej „długość hasła" ma trzy klasy równoważności: zbyt krótkie hasła: {0, 1, …, 4, 5}; poprawne hasła: {6, 7, …, 11, 12}; zbyt długie hasła: {13, 14, …}. Te wartości nie zapewniają kompletnego pokrycia.'
            },
            {
                label: 'D',
                content: '1, 4, 7, 11, 14',
                explanation: 'Odpowiedź poprawna. Jeśli chcemy uzyskać pełne pokrycie dla trójpunktowej analizy wartości brzegowych, musimy przetestować następujące wartości: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Ponieważ mamy już pokrycie dla dwupunktowej analizy wartości brzegowych, oznacza to, że przetestowaliśmy już hasła o następującej długości: 0, 5, 6, 12 i 13. Oznacza to, że aby przejść z dwupunktowej analizy wartości brzegowych na trójpunktową analizę wartości brzegowych, musimy dodatkowo sprawdzić następujące długości: 1, 4, 7, 11 i 14.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: '22',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.3',
        question: `<div>
            <p>Poniższa tablica decyzyjna zawiera zasady służące do określania ryzyka zachorowania na miażdżycę tętnic.</p>
            <table class="w-full border-collapse border border-gray-300 my-4">
                <tr>
                    <td class="border border-gray-300 p-2"></td>
                    <td class="border border-gray-300 p-2">Reguła 1</td>
                    <td class="border border-gray-300 p-2">Reguła 2</td>
                    <td class="border border-gray-300 p-2">Reguła 3</td>
                    <td class="border border-gray-300 p-2">Reguła 4</td>
                    <td class="border border-gray-300 p-2">Reguła 5</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2 font-semibold" colspan="6">Warunki</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Cholesterol (mg/dl)</td>
                    <td class="border border-gray-300 p-2">≤ 124</td>
                    <td class="border border-gray-300 p-2">≤ 124</td>
                    <td class="border border-gray-300 p-2">125–200</td>
                    <td class="border border-gray-300 p-2">125–200</td>
                    <td class="border border-gray-300 p-2">≥ 201</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Ciśnienie krwi (mm Hg)</td>
                    <td class="border border-gray-300 p-2">≤ 140</td>
                    <td class="border border-gray-300 p-2">> 140</td>
                    <td class="border border-gray-300 p-2">≤ 140</td>
                    <td class="border border-gray-300 p-2">> 140</td>
                    <td class="border border-gray-300 p-2">–</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2 font-semibold" colspan="6">Akcja</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Poziom ryzyka</td>
                    <td class="border border-gray-300 p-2">bardzo niskie</td>
                    <td class="border border-gray-300 p-2">niskie</td>
                    <td class="border border-gray-300 p-2">średnie</td>
                    <td class="border border-gray-300 p-2">wysokie</td>
                    <td class="border border-gray-300 p-2">bardzo wysokie</td>
                </tr>
            </table>
            <p>Zaprojektowano przypadki testowe z następującymi danymi wejściowymi:</p>
            <p>PT1: Cholesterol = 125 mg/dl     Ciśnienie krwi = 141 mm Hg</p>
            <p>PT2: Cholesterol = 200 mg/dl     Ciśnienie krwi = 201 mm Hg</p>
            <p>PT3: Cholesterol = 124 mg/dl     Ciśnienie krwi = 201 mm Hg</p>
            <p>PT4: Cholesterol = 109 mg/dl     Ciśnienie krwi = 200 mm Hg</p>
            <p>PT5: Cholesterol = 201 mg/dl     Ciśnienie krwi = 140 mm Hg</p>
            <br><p>Jakie pokrycie tablicy decyzyjnej można uzyskać za pomocą tych przypadków testowych?</p>
        </div>`,
        options: [
            {
                label: 'A',
                content: '40%',
                explanation: 'Odpowiedź niepoprawna. Pokrycie jest większe niż 40%.'
            },
            {
                label: 'B',
                content: '60%',
                explanation: 'Odpowiedź poprawna. W tablicy decyzyjnej jest pięć kolumn. Każdy przypadek testowy pokrywa jedną z nich. PT1 i PT2 pokrywają Regułę 4. PT3 i PT4 pokrywają Regułę 2. PT5 pokrywa Regułę 5. Zatem pięć podanych przypadków testowych pokrywa trzy z pięciu kolumn, czyli pokrycie wynosi (3/5)*100% = 60%.'
            },
            {
                label: 'C',
                content: '80%',
                explanation: 'Odpowiedź niepoprawna. Pokrycie jest mniejsze niż 80%.'
            },
            {
                label: 'D',
                content: '100%',
                explanation: 'Odpowiedź niepoprawna. Nie wszystkie reguły są pokryte.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: '23',
        chapter: 'Podstawy testowania',
        subchapter: '4.2.4',
        question: `<div>
            <p>System pamięci może przechowywać maksymalnie trzy elementy. Jego model przedstawiono na poniższym diagramie przejść pomiędzy stanami. Zmienna N reprezentuje liczbę aktualnie przechowywanych elementów.</p>
    
            <img 
                src="/images/question23.png" 
                alt="Diagram przejść pomiędzy stanami"
                class="mx-auto my-8 max-w-full h-auto"
            />
    
            <p>Który z poniższych przypadków testowych, reprezentowanych w postaci sekwencji zdarzeń, pozwala osiągnąć najwyższy poziom pokrycia poprawnych przejść?</p>
        </div>`,
        options: [
            {
                label: 'A',
                content: 'Dodaj, Usuń, Dodaj, Dodaj, Dodaj',
                explanation: 'Odpowiedź niepoprawna. Test a) można zapisać jako E1, E3, E3, E2, E4 (zatem pokrywa 4 z 5 poprawnych przejść, czyli pozwala osiągnąć 80% pokrycia poprawnych przejść).'
            },
            {
                label: 'B',
                content: 'Dodaj, Dodaj, Dodaj, Dodaj, Usuń, Usuń',
                explanation: 'Odpowiedź niepoprawna. Test b) jest niewykonalny, ponieważ po trzech pierwszych akcjach „Dodaj" system znajdzie się w stanie PEŁNY, a nie ma poprawnych przejść prowadzących ze stanu PEŁNY wywoływanych przez zdarzenie „Dodaj". Po trzech pierwszych przejściach uzyskujemy pokrycie jedynie 60% poprawnych przejść.'
            },
            {
                label: 'C',
                content: 'Dodaj, Dodaj, Dodaj, Usuń, Usuń',
                explanation: 'Odpowiedź poprawna. Test c) można zapisać jako E1, E2, E4, E5, E3 (zatem pokrywa 5 z 5 poprawnych przejść, czyli pozwala osiągnąć 100% pokrycia poprawnych przejść).'
            },
            {
                label: 'D',
                content: 'Dodaj, Dodaj, Dodaj, Usuń, Dodaj',
                explanation: 'Odpowiedź niepoprawna. Test d) można zapisać jako E1, E2, E4, E5, E4 (zatem pokrywa 4 z 5 poprawnych przejść, czyli pozwala osiągnąć 80% pokrycia poprawnych przejść).'
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
                explanation: 'Odpowiedź niepoprawna. Pokrycie jest zawsze obliczane jako wskaźnik procentowy liczby pokrytych elementów, dlatego nie może przekraczać 100%.'
            },
            {
                label: 'B',
                content: 'Istnieje co najmniej jedna instrukcja, która musi być wykonywana zarówno w teście T1, jak i w teście T2.',
                explanation: 'Odpowiedź poprawna. Gdyby zbiory instrukcji w testach T1 i T2 były rozłączne, pokrycie zestawu testowego {T1, T2} wyniosłoby 105%, co nie jest możliwe – patrz odpowiedź a). Dlatego co najmniej 5% wykonywalnych instrukcji musiało zostać wykonane zarówno w teście T1, jak i w teście T2.'
            },
            {
                label: 'C',
                content: 'Co najmniej 5% instrukcji w testowanym kodzie to instrukcje niewykonywalne.',
                explanation: 'Odpowiedź niepoprawna. Pokrycie instrukcji nie mówi nic o liczbie niewykonywalnych instrukcji w kodzie.'
            },
            {
                label: 'D',
                content: 'Zestaw testowy składający się z testów T1 i T2 zapewnia pełne pokrycie gałęzi.',
                explanation: 'Odpowiedź niepoprawna. Nawet jeśli zestaw testowy daje pełne pokrycie instrukcji, nie wynika z tego pełne pokrycie gałęzi.'
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
                content: 'X = liczba wyników decyzji sprawdzonych przez przypadki testowe, \n Y = łączna liczba wyników decyzji w kodzie',
                explanation: 'Odpowiedź niepoprawna. Wynik decyzji to gałąź warunkowa. W testowaniu gałęzi wartość X uwzględnia nie tylko gałęzie warunkowe, ale również bezwarunkowe.'
            },
            {
                label: 'B',
                content: 'X = liczba gałęzi warunkowych sprawdzonych przez przypadki testowe, \n Y = łączna liczba gałęzi w kodzie',
                explanation: 'Odpowiedź niepoprawna. W testowaniu gałęzi uwzględnia się nie tylko gałęzie warunkowe, ale również bezwarunkowe.'
            },
            {
                label: 'C',
                content: 'X = liczba gałęzi sprawdzonych przez przypadki testowe, \n Y = łączna liczba gałęzi w kodzie',
                explanation: 'Odpowiedź poprawna. Pokrycie gałęzi mierzy się jako iloraz liczby gałęzi sprawdzonych za pomocą przypadków testowych przez łączną liczbę gałęzi, a uzyskaną wartość wyraża się w procentach.'
            },
            {
                label: 'D',
                content: 'X = liczba gałęzi warunkowych sprawdzonych przez przypadki testowe, \n Y = łączna liczba wyników decyzji w kodzie',
                explanation: 'Odpowiedź niepoprawna. Zarówno X, jak i Y uwzględniają jedynie gałęzie warunkowe, a nie biorą pod uwagę gałęzi bezwarunkowych.'
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
                explanation: 'Odpowiedź poprawna. Testowanie eksploracyjne jest przydatne w przypadku niepełnych lub niewłaściwie sporządzonych specyfikacji bądź w przypadku testowania pod presją czasu.'
            },
            {
                label: 'B',
                content: 'Istniejąca strategia testów wymaga użycia formalnych, czarnoskrzynkowych technik testowania.',
                explanation: 'Odpowiedź niepoprawna. Testowanie eksploracyjne nie jest czarnoskrzynkową techniką testowania.'
            },
            {
                label: 'C',
                content: 'Specyfikacja została zapisania w języku formalnym, który może być przetwarzany przez narzędzie.',
                explanation: 'Odpowiedź niepoprawna. Testowanie eksploracyjne jest przydatne w przypadku niewłaściwie sporządzonych specyfikacji.'
            },
            {
                label: 'D',
                content: 'Testerzy są członkami zespołu zwinnego i mają duże umiejętności programistyczne.',
                explanation: 'Odpowiedź niepoprawna. Umiejętności programistyczne nie mają w zasadzie nic wspólnego z testowaniem eksploracyjnym.'
            },
            {
                label: 'E',
                content: 'Testerzy mają doświadczenie w danej dziedzinie biznesowej i duże umiejętności analityczne.',
                explanation: 'Odpowiedź poprawna. Wśród czynników zwiększających skuteczność testowania eksploracyjnego można wymienić doświadczenie i wiedzę merytoryczną testera oraz wysoki poziom niezbędnych umiejętności, takich jak umiejętność analizy, ciekawość i kreatywność.'
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
                explanation: 'Odpowiedź niepoprawna. Listy kontrolne powinny zawierać warunki testowe, które można zweryfikować. To przykład błędu, a nie warunku testowego. Nawet jeśli tester byłby w stanie na podstawie przykładów błędów opracować potencjalne warunki testowe, przedstawiony opis błędu jest zbyt ogólny.'
            },
            {
                label: 'B',
                content: '"Uzyskane pokrycie instrukcji przekracza 85%".',
                explanation: 'Odpowiedź niepoprawna. Listy kontrolne nie powinny zawierać elementów, które nadają się raczej na kryteria wyjścia. Podany element jest przykładem kryterium wyjścia.'
            },
            {
                label: 'C',
                content: '"Program działa poprawnie, jeśli chodzi o realizację wymagań funkcjonalnych i niefunkcjonalnych".',
                explanation: 'Odpowiedź niepoprawna. Listy kontrolne nie powinny zawierać elementów, które są zbyt ogólne. Podany element ma bardzo ogólny charakter i w zasadzie opisuje ogólny cel testowania.'
            },
            {
                label: 'D',
                content: '"Komunikaty o błędach są napisane w języku zrozumiałym dla użytkownika".',
                explanation: 'Odpowiedź poprawna. To przykład warunku testowego, który może zostać sprawdzony przez człowieka.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: '28',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.2',
        question: 'Rozważmy następujące kryteria akceptacji związane z historyjką użytkownika napisaną z perspektywy właściciela sklepu internetowego.\n(Given) Przy założeniu, że użytkownik jest zalogowany na stronie głównej,\n(When) gdy użytkownik klika przycisk „Dodaj pozycję",\n(Then) powinien zostać wyświetlony formularz „Utwórz pozycję"\n(And) i użytkownik powinien mieć możliwość podania nazwy oraz ceny nowej pozycji.\n\nW jakim formacie zostały zapisane te kryteria akceptacji?',
        options: [
            {
                label: 'A',
                content: 'Ukierunkowanym na reguły.',
                explanation: 'Odpowiedź niepoprawna. Format ukierunkowany na reguły zawiera takie formaty jak lista weryfikacyjna w punktach lub przypisanie danych wejściowych do danych wyjściowych w formie tabelarycznej. W jawny sposób określa reguły, których należy przestrzegać. Format Given/When/Then to format ukierunkowany na scenariusze, ponieważ opisuje scenariusz, który należy zweryfikować.'
            },
            {
                label: 'B',
                content: 'Ukierunkowanym na scenariusze.',
                explanation: 'Odpowiedź poprawna. To format Given/When/Then, który jest ukierunkowany na scenariusze.'
            },
            {
                label: 'C',
                content: 'Ukierunkowanym na produkt.',
                explanation: 'Odpowiedź niepoprawna. Nie ma czegoś takiego jak format kryteriów akceptacji ukierunkowany na produkt.'
            },
            {
                label: 'D',
                content: 'Ukierunkowanym na proces.',
                explanation: 'Odpowiedź niepoprawna. Nie ma czegoś takiego jak format kryteriów akceptacji ukierunkowany na proces.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: '29',
        chapter: 'Podstawy testowania',
        subchapter: '4.5.3',
        question: 'Twój zespół analizuje następującą historyjkę użytkownika w celu zdefiniowania kryteriów akceptacji:\nJako zarejestrowany klient chcę mieć możliwość wyświetlenia swoich poprzednich zamówień w serwisie firmy, aby monitorować dokonane zakupy.\nKtóry z następujących przypadków testowych NIE jest istotny z punktu widzenia tej historyjki użytkownika?',
        options: [
            {
                label: 'A',
                content: 'Wejście: klient loguje się na swoje konto i klika przycisk „Pokaż historię zamówień". Oczekiwane wyjście: system pokazuje listę wszystkich poprzednich zamówień klienta wraz z ich datami, numerami i łączną wartością.',
                explanation: 'Odpowiedź niepoprawna. Przypadek testowy jest związany z wyświetlaniem poprzednich zamówień z historii zamówień.'
            },
            {
                label: 'B',
                content: 'Wejście: klient klika zamówienie z listy zamówień. Oczekiwane wyjście: system wyświetla poszczególne zakupione pozycje wraz z ich cenami i ilościami.',
                explanation: 'Odpowiedź niepoprawna. Przypadek testowy jest związany z wyświetlaniem poprzednich zamówień.'
            },
            {
                label: 'C',
                content: 'Wejście: klient klika przycisk „Sortuj rosnąco" na ekranie historii zamówień. Oczekiwane wyjście: system pokazuje historię zamówień uporządkowaną według numeru zamówienia w kolejności rosnącej.',
                explanation: 'Odpowiedź niepoprawna. Przypadek testowy jest związany z wyświetlaniem poprzednich zamówień z historii zamówień.'
            },
            {
                label: 'D',
                content: 'Wejście: niezarejestrowany klient rejestruje się jako nowy klient w serwisie z podaniem poprawnego adresu e-mail, który wcześniej nie został umieszczony w bazie danych. Oczekiwane wyjście: system akceptuje rejestrację i tworzy konto.',
                explanation: 'Odpowiedź poprawna. Przypadek testowy jest związany z procesem rejestracji, który nie jest uwzględniony w historyjce użytkownika. Historyjka użytkownika dotyczy wyświetlania poprzednich zamówień.'
            }
        ],
        correctAnswer: 3
    },
    {
        id: '31',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.4',
        question: `Zamierzasz oszacować pracochłonność testowania w nowym projekcie, korzystając z techniki szacowania na podstawie proporcji. Obliczasz wskaźnik pracochłonności testowania do wytwarzania na podstawie uśrednionych danych opisujących pracochłonność wytwarzania i testowania w czterech wcześniejszych projektach podobnych do bieżącego. Tabela zawiera odpowiednie dane historyczne:
    
    <table class="w-full border-collapse border border-gray-300 my-4">
        <tr>
            <th class="border border-gray-300 p-2">Projekt</th>
            <th class="border border-gray-300 p-2">Pracochłonność wytwarzania (USD)</th>
            <th class="border border-gray-300 p-2">Pracochłonność testowania (USD)</th>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">P1</td>
            <td class="border border-gray-300 p-2">800 000</td>
            <td class="border border-gray-300 p-2">40 000</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">P2</td>
            <td class="border border-gray-300 p-2">1 200 000</td>
            <td class="border border-gray-300 p-2">130 000</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">P3</td>
            <td class="border border-gray-300 p-2">600 000</td>
            <td class="border border-gray-300 p-2">70 000</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">P4</td>
            <td class="border border-gray-300 p-2">1 000 000</td>
            <td class="border border-gray-300 p-2">120 000</td>
        </tr>
    </table>
    
    Szacowana pracochłonność wytwarzania w nowym projekcie ma wartość 800 000 USD.
    Jakie jest oszacowanie pracochłonności testowania w tym projekcie?`,
        options: [
            {
                label: 'A',
                content: 'W trakcie analizy statycznej nie wystąpiły ostrzeżenia o wysokiej krytyczności dotyczące wprowadzonego kodu.',
                explanation: 'Odpowiedź poprawna. To warunek, który można (i należy) sprawdzić przed wprowadzeniem kodu do systemu kontroli wersji.'
            },
            {
                label: 'B',
                content: 'System kontroli wersji nie zgłasza konfliktów podczas scalania kodu z gałęzią „test".',
                explanation: 'Odpowiedź niepoprawna. To kryterium można sprawdzić po wykonaniu kroku (2), ponieważ raport o konfliktach scalania można utworzyć dopiero po wprowadzeniu i scaleniu kodu.'
            },
            {
                label: 'C',
                content: 'Testy modułowe zostały skompilowane i są gotowe do wykonania.',
                explanation: 'Odpowiedź niepoprawna. Opisany warunek nadaje się jako kryterium wejścia dla kroku (3).'
            },
            {
                label: 'D',
                content: 'Pokrycie instrukcji wynosi co najmniej 80%.',
                explanation: 'Odpowiedź niepoprawna. Opisany warunek nadaje się jako kryterium wyjścia dla kroku (3).'
            }
        ],
        correctAnswer: 0
    },
    {
        id: '31',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.4',
        question: `<div>
            <p>Zamierzasz oszacować pracochłonność testowania w nowym projekcie, korzystając z techniki szacowania na podstawie proporcji. Obliczasz wskaźnik pracochłonności testowania do wytwarzania na podstawie uśrednionych danych opisujących pracochłonność wytwarzania i testowania w czterech wcześniejszych projektach podobnych do bieżącego. Tabela zawiera odpowiednie dane historyczne:</p>
            
            <table class="w-full border-collapse border border-gray-300 my-4">
                <tr>
                    <td class="border border-gray-300 p-2 font-semibold">Projekt</td>
                    <td class="border border-gray-300 p-2 font-semibold">Pracochłonność wytwarzania (USD)</td>
                    <td class="border border-gray-300 p-2 font-semibold">Pracochłonność testowania (USD)</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">P1</td>
                    <td class="border border-gray-300 p-2">800 000</td>
                    <td class="border border-gray-300 p-2">40 000</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">P2</td>
                    <td class="border border-gray-300 p-2">1 200 000</td>
                    <td class="border border-gray-300 p-2">130 000</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">P3</td>
                    <td class="border border-gray-300 p-2">600 000</td>
                    <td class="border border-gray-300 p-2">70 000</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">P4</td>
                    <td class="border border-gray-300 p-2">1 000 000</td>
                    <td class="border border-gray-300 p-2">120 000</td>
                </tr>
            </table>
            
            <p>Szacowana pracochłonność wytwarzania w nowym projekcie ma wartość 800 000 USD.</p>
            <p>Jakie jest oszacowanie pracochłonności testowania w tym projekcie?</p>
        </div>`,
        options: [
            {
                label: 'A',
                content: '40 000 USD',
                explanation: 'Odpowiedź niepoprawna. Ta wartość odnosi się tylko do projektu P1.'
            },
            {
                label: 'B',
                content: '80 000 USD',
                explanation: 'Odpowiedź poprawna. Średnia wartość pracochłonności wytwarzania wynosi 900 000 USD, a pracochłonności testowania 90 000 USD (wartości obliczone na podstawie czterech projektów). Średni wskaźnik pracochłonności testowania do wytwarzania wynosi 1:10 (90 000 USD : 900 000 USD), a zatem średnia pracochłonność testowania w projekcie wynosi 10% pracochłonności wytwarzania. Jeśli zatem koszt prac wytwórczych jest szacowany na 800 000 USD, to koszt testowania można oszacować jako: 10% * 800 000 USD = 0,1 * 800 000 USD = 80 000 USD'
            },
            {
                label: 'C',
                content: '81 250 USD',
                explanation: 'Odpowiedź niepoprawna. Ta wartość nie wynika z przedstawionych danych.'
            },
            {
                label: 'D',
                content: '82 500 USD',
                explanation: 'Odpowiedź niepoprawna. Ta wartość nie wynika z przedstawionych danych.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: '32',
        chapter: 'Podstawy testowania',
        subchapter: '5.1.5',
        question: `<div>
            <p>Testujesz aplikację internetową, która udostępnia użytkownikom funkcje WYSZUKIWANIA produktów, WYŚWIETLANIA szczegółów produktów, DODAWANIA produktów do koszyka i składania ZAMÓWIENIA. Przygotowałeś siedem następujących przypadków testowych, z których wszystkie chcesz wykonać. Testy powinny być wykonywane w najlepszej kolejności, w oparciu o priorytet testu.</p>
            
            <table class="w-full border-collapse border border-gray-300 my-4">
                <tr>
                    <td class="border border-gray-300 p-2 font-semibold">PT</td>
                    <td class="border border-gray-300 p-2 font-semibold">Priorytet (1-najwyższy priorytet)</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT1</td>
                    <td class="border border-gray-300 p-2">WYSZUKIWANIE produktu A</td>
                    <td class="border border-gray-300 p-2">4</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT2</td>
                    <td class="border border-gray-300 p-2">WYSZUKIWANIE produktu B</td>
                    <td class="border border-gray-300 p-2">4</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT3</td>
                    <td class="border border-gray-300 p-2">WYŚWIETLENIE szczegółów produktu A</td>
                    <td class="border border-gray-300 p-2">3</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT4</td>
                    <td class="border border-gray-300 p-2">WYŚWIETLENIE szczegółów produktu B</td>
                    <td class="border border-gray-300 p-2">2</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT5</td>
                    <td class="border border-gray-300 p-2">DODANIE produktu A do koszyka</td>
                    <td class="border border-gray-300 p-2">3</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT6</td>
                    <td class="border border-gray-300 p-2">DODANIE produktu B do koszyka</td>
                    <td class="border border-gray-300 p-2">1</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">PT7</td>
                    <td class="border border-gray-300 p-2">złożenie ZAMÓWIENIA</td>
                    <td class="border border-gray-300 p-2">5</td>
                </tr>
            </table>
    
            <p>Udało Ci się również zidentyfikować następujące zależności logiczne pomiędzy przypadkami testowymi:</p>
            <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Funkcja WYSZUKIWANIA musi zostać przetestowana przed funkcją WYŚWIETLANIA.</li>
                <li>Funkcja WYŚWIETLANIA musi zostać przetestowana przed funkcją DODAWANIA do koszyka.</li>
                <li>Funkcja DODAWANIA do koszyka musi zostać przetestowana przed funkcją ZAMAWIANIA.</li>
            </ul>
    
            <p>Który z poniższych przypadków testowych powinien zostać wykonany jako czwarty?</p>
        </div>`,
        options: [
            {
                label: 'A',
                content: 'PT3',
                explanation: 'Odpowiedź niepoprawna. PT1 musi zostać wykonany przed PT3.'
            },
            {
                label: 'B',
                content: 'PT7',
                explanation: 'Odpowiedź niepoprawna. Jak pokazano powyżej, PT7 jest wykonywany jako ostatni.'
            },
            {
                label: 'C',
                content: 'PT1',
                explanation: 'Odpowiedź poprawna. PT1 zostanie wykonany jako czwarty przypadek testowy.'
            },
            {
                label: 'D',
                content: 'PT2',
                explanation: 'Odpowiedź niepoprawna. Produkt B musi zostać wykonany przed produktem A.'
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
                explanation: 'Odpowiedź niepoprawna. Testowanie użyteczności ma cel biznesowy i służy krytyce produktu (kwadrant Q3).'
            },
            {
                label: 'B',
                content: 'Testowanie funkcjonalne.',
                explanation: 'Odpowiedź niepoprawna. Testowanie funkcjonalne ma cel biznesowy (kwadrant Q2).'
            },
            {
                label: 'C',
                content: 'Testowanie akceptacyjne przez użytkownika.',
                explanation: 'Odpowiedź niepoprawna. Testowanie akceptacyjne przez użytkownika ma cel biznesowy i służy krytyce produktu (kwadrant Q3).'
            },
            {
                label: 'D',
                content: 'Testowanie integracji modułów.',
                explanation: 'Odpowiedź poprawna. Testowanie integracji modułów ma cel technologiczny i służy wspieraniu zespołu poprzez ukierunkowanie procesu wytwarzania oprogramowania (kwadrant Q1).'
            }
        ],
        correctAnswer: 3
    },
    {
        id: '34',
        chapter: 'Podstawy testowania',
        subchapter: '5.2.4',
        question: 'Mamy następujące ryzyka:\n1. Nieefektywna implementacja pętli powodująca długie czasy odpowiedzi systemu.\n2. Zmiana preferencji konsumentów.\n3. Zalanie serwerowni wodą.\n4. Pacjenci, którzy przekroczyli pewien wiek, otrzymują niepoprawne raporty.\n\noraz następujące działania łagodzące ryzyko:\nA. Akceptacja ryzyka.\nB. Testowanie wydajnościowe.\nC. Korzystanie z analizy wartości brzegowych jako techniki testowania.\nD. Przeniesienie ryzyka.\n\nW której z poniższych odpowiedzi NAJLEPIEJ powiązano ryzyka i działania łagodzące ryzyko?',
        options: [
            {
                label: 'A',
                content: '1C, 2D, 3A, 4B',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie odpowiada właściwym działaniom łagodzącym dla tych ryzyk.'
            },
            {
                label: 'B',
                content: '1B, 2D, 3A, 4C',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie odpowiada właściwym działaniom łagodzącym dla tych ryzyk.'
            },
            {
                label: 'C',
                content: '1B, 2A, 3D, 4C',
                explanation: 'Odpowiedź poprawna. Długi czas odpowiedzi (1) można sprawdzić w ramach testowania wydajnościowego (B). Na zmiany preferencji konsumentów (2) zwykle nie mamy wpływu, więc na ogół akceptujemy takie ryzyko (A). Zalanie serwerowni wodą (3) może spowodować poważne szkody, więc powinniśmy dokonać przeniesienia ryzyka, np. poprzez zakup polisy ubezpieczeniowej (D). Wiemy, że pacjenci, którzy przekroczyli pewien wiek, otrzymują niepoprawne raporty (4), a to może oznaczać potencjalny problem dotyczący wartości brzegowej, który może być skutecznie wykryty poprzez zastosowanie techniki w rodzaju analizy wartości brzegowych (C).'
            },
            {
                label: 'D',
                content: '1C, 2A, 3D, 4B',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie odpowiada właściwym działaniom łagodzącym dla tych ryzyk.'
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
                explanation: 'Odpowiedź poprawna. Metryki jakości produktu służą do pomiaru charakterystyk jakościowych. Średni czas do awarii określa dojrzałość produktu, zatem jest metryką jakości produktu.'
            },
            {
                label: 'B',
                content: 'Liczba wykrytych defektów.',
                explanation: 'Odpowiedź niepoprawna. To przykład metryki dotyczącej defektów, a nie jakości produktu.'
            },
            {
                label: 'C',
                content: 'Pokrycie wymagań.',
                explanation: 'Odpowiedź niepoprawna. To przykład metryki dotyczącej pokrycia, a nie jakości produktu.'
            },
            {
                label: 'D',
                content: 'Odsetek wykrytych defektów.',
                explanation: 'Odpowiedź niepoprawna. To przykład metryki dotyczącej defektów, a nie jakości produktu.'
            }
        ],
        correctAnswer: 0
    },
    {
        id: '36',
        chapter: 'Podstawy testowania',
        subchapter: '5.3.3',
        question: 'Należysz do zespołu testowego zlokalizowanego w Ameryce Północnej i uczestniczącego w tworzeniu produktu dla klienta z siedzibą w Europie. Zespół ma charakter zwinny i stosuje metodykę DevOps. Wykorzystuje procesy ciągłej integracji i potoku (ang. pipeline) ciągłego dostarczania. \nKtóry z poniższych sposobów jest NAJMNIEJ skuteczną metodą przekazywania klientowi informacji o postępach testowania?',
        options: [
            {
                label: 'A',
                content: 'Bezpośrednia komunikacja.',
                explanation: 'Odpowiedź poprawna. Klient znajduje się w innej lokalizacji i w innej strefie czasowej, więc bezpośrednia komunikacja może okazać się trudna.'
            },
            {
                label: 'B',
                content: 'Tablice wskaźników.',
                explanation: 'Odpowiedź niepoprawna. Tablice wskaźników zwykle są dostępne w dowolnym momencie dla każdego użytkownika, więc różne strefy czasowe nie będą w tym przypadku dużą przeszkodą w komunikacji – w odróżnieniu od bezpośredniej komunikacji słownej.'
            },
            {
                label: 'C',
                content: 'Poczta elektroniczna.',
                explanation: 'Odpowiedź niepoprawna. Różnica czasu między Europą i Ameryką wynosi kilka godzin i mogą się z tym wiązać pewne niedogodności, jednak bez wątpienia nie tak wielkie jak w przypadku bezpośredniej komunikacji.'
            },
            {
                label: 'D',
                content: 'Wideokonferencje.',
                explanation: 'Odpowiedź niepoprawna. Wideokonferencje to wygodny sposób komunikacji. Chociaż komunikacja między Europą i Ameryką w godzinach roboczych zwykle wymaga od jednej strony nawiązania połączenia wczesnym rankiem lub w późnych godzinach wieczornych, nie wiążą się z tym jednak tak duże utrudnienia jak w przypadku bezpośredniej komunikacji.'
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
                explanation: 'Odpowiedź poprawna. W przypadku złożonego elementu konfiguracji (np. środowiska testowego) system zarządzania konfiguracją rejestruje elementy, z których ten element się składa, a także ich powiązania i wersje.'
            },
            {
                label: 'B',
                content: 'Dysponując wartościami danych wejściowych narzędzie do zarządzania konfiguracją może wykonać przypadki testowe dla odpowiednich konfiguracji oraz obliczyć pokrycie testowe.',
                explanation: 'Odpowiedź niepoprawna. Narzędzia do zarządzania konfiguracją nie służą do wykonywania przypadków testowych i obliczania pokrycia.'
            },
            {
                label: 'C',
                content: 'Dysponując danymi dotyczącymi daty zakupu licencji oprogramowania, narzędzie do zarządzania konfiguracją automatycznie generuje informację o upływającym terminie ważności licencji produktu.',
                explanation: 'Odpowiedź niepoprawna. Narzędzie do zarządzania konfiguracją nie jest narzędziem do zarządzania licencjami.'
            },
            {
                label: 'D',
                content: 'Dysponując numerem wersji przypadku testowego, narzędzie do zarządzania konfiguracją może automatycznie wygenerować dla niego dane testowe.',
                explanation: 'Odpowiedź niepoprawna. Narzędzia do zarządzania konfiguracją nie generują danych testowych.'
            }
        ],
        correctAnswer: 0
    },
    {
        id: '38',
        chapter: 'Podstawy testowania',
        subchapter: '5.5.1',
        question: `<div>
            <p>Testujesz funkcję sortowania, która jako parametr wejściowy przyjmuje zbiór liczb i zwraca ten sam zbiór, ale uporządkowany w kolejności rosnącej. Log wykonania testu jest następujący:</p>
    
            <pre class="border border-gray-300 p-4 my-4 bg-gray-50 font-mono text-sm whitespace-pre overflow-x-auto">Konfiguracja środowiska: funkcja sortowania, wersja 2.002.2182, zestaw przypadków testowych: ZPT-3, liczba PT: 5
    ID uruchomienia testu: 736
    Start 12:43:21,003
    12:43:21,003   Wykonanie PT1.   Wejście: 3.              Wyjście: 3.          Wynik: zaliczony
    12:43:21,003   Wykonanie PT2.   Wejście: 3 11 6 5.       Wyjście: 3 5 6 11.   Wynik: zaliczony
    12:43:21,004   Wykonanie PT3.   Wejście: 8 7 3 7 1.      Wyjście: 1 3 7 8.    Wynik: niezaliczony
    12:43:21,005   Wykonanie PT4.   Wejście: -2 -2 -2 -3 -3. Wyjście: -3 -2.      Wynik: niezaliczony
    12:43:21,005   Wykonanie PT5.   Wejście: 0 -2 0 3 4 4.   Wyjście: -2 0 3 4.   Wynik: niezaliczony
    Koniec 12:43:21,005
    Łączny czas cyklu testowego: 0:00:00,002</pre>
    
            <p>Wskaż stwierdzenie stanowiące NAJLEPIEJ sformułowany opis awarii, który można umieścić w raporcie o defekcie.</p>
        </div>`,
        options: [
            {
                label: 'A',
                content: 'System niepoprawnie sortuje niektóre zbiory liczb. Patrz: PT3, PT4, PT5.',
                explanation: 'Odpowiedź niepoprawna. Stwierdzenie jest prawdziwe, jednak nie ma zbyt dużej wartości dla programistów.'
            },
            {
                label: 'B',
                content: 'System najwyraźniej nie uwzględnia zduplikowanych wartości podczas sortowania. Patrz: PT3, PT4, PT5.',
                explanation: 'Odpowiedź poprawna. Rezultaty testów wskazują, że prawdopodobnie system ignoruje zduplikowane wartości i sortuje listę bez uwzględniania powtórzeń. Zapewne jest to przyczyną awarii w PT3, PT4 i PT5. Takie informacje mogą pomóc programistom w odszukaniu defektu i jego skuteczniejszym usunięciu.'
            },
            {
                label: 'C',
                content: 'System nie sortuje liczb ujemnych. Patrz: PT4, PT5.',
                explanation: 'Odpowiedź niepoprawna. System sortuje liczby ujemne. Problem polega raczej na nieuwzględnianiu powtarzających się wartości.'
            },
            {
                label: 'D',
                content: 'W PT3, PT4 i PT5 występują defekty (powtórzone wartości wejściowe), które należy usunąć.',
                explanation: 'Odpowiedź niepoprawna. Przypadki testowe PT3, PT4 i PT5 nie zostały zaliczone, ale nie wiemy, czy wystąpiły w nich jakieś defekty.'
            }
        ],
        correctAnswer: 1
    },
    {
        id: '39',
        chapter: 'Podstawy testowania',
        subchapter: '6.1.1',
        question: 'Mamy następujące opisy:\n\n1. Pomoc w śledzeniu przepływu pracy.\n2. Usprawnienie komunikacji.\n3. Maszyny wirtualne.\n4. Pomoc w prowadzeniu przeglądów.\n\n\n\n oraz następujące kategorie narzędzi testowych:\nA. Narzędzia do testowania statycznego.\nB. Narzędzia zwiększające skalowalność i standaryzację wdrażania.\nC. Narzędzia DevOps.\nD. Narzędzia wspomagające współpracę.\nW której z poniższych odpowiedzi NAJLEPIEJ powiązano opisy i kategorie narzędzi?',
        options: [
            {
                label: 'A',
                content: '1A, 2B, 3C, 4D',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest właściwe.'
            },
            {
                label: 'B',
                content: '1B, 2D, 3C, 4A',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest właściwe.'
            },
            {
                label: 'C',
                content: '1C, 2D, 3B, 4A',
                explanation: 'Odpowiedź poprawna. Narzędzia DevOps wspomagają działanie potoku dostarczania, śledzenie przepływu pracy, zautomatyzowane procesy budowania oraz funkcjonowanie mechanizmów ciągłej integracji i ciągłego dostarczania (1). Narzędzia wspomagające współpracę ułatwiają wymianę informacji (2). Narzędzia zwiększające skalowalność i standaryzację wdrażania, na przykład maszyny wirtualne i narzędzia do konteneryzacji (3). Narzędzia do testowania statycznego pomagają testerom w prowadzeniu przeglądów i analizy statycznej (4).'
            },
            {
                label: 'D',
                content: '1D, 2C, 3A, 4B',
                explanation: 'Odpowiedź niepoprawna. To powiązanie nie jest właściwe.'
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
                explanation: 'Odpowiedź poprawna. Automatyzacja testów umożliwia przeprowadzenie pomiarów, które są zbyt skomplikowane, aby mogły zostać dokonane przez ludzi, np. obliczenie miar pokrycia w testowaniu białoskrzynkowym nietrywialnego kodu.'
            },
            {
                label: 'B',
                content: 'Przejęcie części odpowiedzialności za testowanie przez dostawcę narzędzia.',
                explanation: 'Odpowiedź niepoprawna. Jeśli używamy narzędzi testowych, odpowiedzialność za testowanie NIE przechodzi częściowo na dostawcę narzędzia. Dostawca nie uczestniczy w testowaniu, za które nadal odpowiadają testerzy. Dostawcę narzędzia można obciążyć odpowiedzialnością jedynie za sytuację, w której narzędzie nie działa zgodnie z oczekiwaniami i udostępnia niepoprawne wyniki testów.'
            },
            {
                label: 'C',
                content: 'Brak konieczności korzystania z krytycznego myślenia podczas analizy wyników testów.',
                explanation: 'Odpowiedź niepoprawna. Testerzy w dalszym ciągu muszą wykazywać się krytycznym myśleniem podczas analizy anomalii w wynikach testów, gdy chcą określić prawdopodobną przyczynę wystąpienia tych anomalii.'
            },
            {
                label: 'D',
                content: 'Wygenerowanie przypadków testowych na podstawie analizy kodu programu.',
                explanation: 'Odpowiedź niepoprawna. Ani testerzy, ani narzędzia nie są w stanie wygenerować przypadków testowych wyłącznie na podstawie analizy kodu programu, ponieważ kod stanowi jedynie implementację i nie zawiera informacji o oczekiwanych rezultatach. Takie informacje muszą znaleźć się w innym elemencie podstawy testów, np. w specyfikacji projektu.'
            }
        ],
        correctAnswer: 0
    }
];