> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e05-react-styling` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._

&nbsp;

# `#01` React: Stylowanie

Twoim zadaniem jest przygotować komponent `<Alert>`, który ma wyglądać podobnie do tego z [Bootstrapa](https://react-bootstrap.github.io/components/alerts/)..

W zależności od wartości _props_ o nazwie `variant` element ma być renderowany z innym tłem. Nie musisz tworzyć styli dla wszystkich wariantów, wystarczą dwa wybrane (np. _primary_ i _secondary_).

Idealnie, gdyby zestaw kolorów można było definiować przy pomocy [ThemeProvidera](https://styled-components.com/docs/advanced#theming). Jeśli mamy zdefiniowany motyw, to kolory są pobierane za jego pośrednictwem. W przeciwnym razie wykorzystywane są te standardowe (domyślne).

Zwróć uwagę, że w lokalizacji `./src/components/Alert` jest kilka plików:

- **Alert.js** – nasz komponent
- **Alert.styled.js** – wygląd komponentu
- **index.js** – plik, który importuje i eksportuje zestaw niezbędnych elementów.

Kod w tych plikach będziesz musiał zmodyfikować – tak aby w pliku `./01/Task01.js` były renderowane komponenty o poprawnym wyglądzie.

W `./01/Task01.js` importujemy komponenty z React Boostrap oraz komponent stworzony przez Ciebie w celu porównania ich wyglądu.

PS Koncepcji na budowanie struktury plików jest wiele. To zazwyczaj zespół wspólnie decyduje o tym, jak ma ona wyglądać. Przemyślaną strukturę ma np. komponent `<Button>` w [Atlassian](https://bitbucket.org/atlassian/atlaskit-mk-2/src/989a29f0e5b9341042be354686c9ac0f9d77215e/packages/core/button/src/?at=master).

&nbsp;

> :arrow_left: ~~_poprzednie zadanie_~~ | [_następne zadanie_](./../02) :arrow_right:
