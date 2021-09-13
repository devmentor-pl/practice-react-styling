> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e05-react-styling` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` React: Stylowanie

Kolejnym komponentem z [React Boostrap](https://react-bootstrap.github.io/components/breadcrumb/) jest `<Breadcrumb>`, który wykorzystuje dodatkowo `<Breadcrumb.Item>`, co umożliwia tworzenie tzw. okruchów chleba.

Wystarczy, że Twój komponent `<Breadcrumb.Item>` będzie wspierał opcje:
* href
* active

Zwróć uwagę, że React Boostrap w [swoich źródłach](https://github.com/react-bootstrap/react-bootstrap/tree/master/src) ma komponenty w osobnych plikach tj. `Breadcrumb.tsx` (rozszerzenie `.tsx` oznacza, że deweloperzy wykorzystują [TypeScript](https://pl.wikipedia.org/wiki/TypeScript)) oraz `BreadcrumbItem.tsx`, a dopiero przy eksporcie ([koniec pliku](https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Breadcrumb.tsx)) dołącza do właściwości `Breadcrumb.Item` importowany komponent `BreadcrumbItem` (`Breadcrumb.Item = BreadcrumbItem`). Możesz zrobić podobnie.

Tym razem sam stwórz wygodną dla siebie strukturę plików w lokalizacji `./src/components/Breadcrumb` i wykorzystaj ją w `./03/Task3.js`.

&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
