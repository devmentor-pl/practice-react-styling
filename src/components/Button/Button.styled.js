import styled, { css } from "styled-components";

// poniżej próba tak dla sprawdzenia, czy mogę w ogóle zmieniać coś w button, wydaje mi się, że nie bo to jest jakoś dziedziczone tu z bootstrapa, czy dobrze myślę ?
const StyledButton = styled.button`
  padding: 40 px;
  font-size: 40 px;
  line-height: 1.5;
  border-radius: 10 px;
  color: yellow;
  background-color: violet;
`;

export { StyledButton };
// poniżej już kod do podmiany kolorów tła, wielkości i aktywności przycisku, kolory i disabled działa
/* 
  --color-alfa: ${(props) => props.theme.colors.colorAlfa};
  --color-beta: ${(props) => props.theme.colors.colorBeta};
  --color-gamma: ${(props) => props.theme.colors.colorGamma};
  --color-delta: ${(props) => props.theme.colors.colorDelta};
  display: block;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `background-color: var(--color-alfa) `;
      case "secondary":
        return ` background-color: var(--color-beta)`;
      case "success":
        return ` background-color: var(--color-gamma)`;
      case "warning":
        return ` background-color: var(--color-delta)`;
    }
  }};

    ${(props) => {
    switch (props.size) {
      case "lg":
        return `{padding: 0.5 rem 1 rem; font-size: 1.25 rem; line-height: 1.5; border-radius: 0.3 rem;} `;
      case "sm":
        return `{padding: 0.25 rem 0.5 rem; font-size: 0.875 rem; line-height: 1.5; border-radius: 0.2 rem;} `;
    }
  }};
  opacity: ${(props) => props.disabled === 0.65}; */
