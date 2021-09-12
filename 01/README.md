> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e05-react-styling` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#01` React: Stylowanie


Twoim zadaniem jest przygotować komponent `<Alert>`, który ma wyglądać podobnie do tego z [Boostrapa](https://react-bootstrap.github.io/components/alerts/).

W zależności od wartości *props* o nazwie `variant` element ma być renderowany z innym tłem.

Idealnie by było, gdyby zestaw kolorów można by było definiować przy pomocy [ThemeProvider](https://styled-components.com/docs/advanced#theming). Jeśli mamy zdefiniowany motyw to kolory są pobierane za jego pośrednictwem. W przeciwnym razie są wykorzystywane te standardowe (domyślne).

Zwróć uwagę, że w lokalizacji `./src/components/Alert` jest kilka plików tj.:
* **Alert.js** - nasz komponent
* **Alert.styled.js** - wygląd komponentu
* **index.js** - plik, który importuje zestaw niezbędnych elementów

To te elementy będziesz musiał zmodyfikować, aby w pliku `./01/Task01.js` był renderowane komponenty o poprawnym wyglądzie.

W tym pliku importujemy komponenty z React Boostrap oraz nasz komponent stworzony przez Ciebie w celu porównania ich wyglądu.

PS. Koncepcji na budowanie struktur plików jest wiele. To zazwyczaj zespół wspólnie decyduje jak ma ona wyglądać. Zwróć uwagę np. na komponent `<Button>` w [Atlassian](https://bitbucket.org/atlassian/atlaskit-mk-2/src/989a29f0e5b9341042be354686c9ac0f9d77215e/packages/core/button/src/?at=master).


&nbsp;


> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
