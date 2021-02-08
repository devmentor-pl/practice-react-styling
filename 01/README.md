# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React: Styling #01

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Twoim zadaniem jest przygotować komponent `<Alert>`, który ma wyglądać podobnie do tego z [Boostrap-a](https://react-bootstrap.github.io/components/alerts/).

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

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl)