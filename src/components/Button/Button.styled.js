import styled, { css } from "styled-components";

const StyledButton = styled.button`
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
        return `{padding: 0.5rem 1rem; font-size: 1.25rem; line-height: 1.5; border-radius: 0.3rem;} `;
      case "sm":
        return `{padding: 0.25rem 0.5rem; font-size: 0.875rem; line-height: 1.5; border-radius: 0.2rem;} `;
    }
  }};
  &:disabled {
    opacity: 0.65;
  }
  // poniżej należałoby zrobić switch i zmianę kolorów w zależności od wariantu, już to na razie pominęłam żeby nie tracić czasu, będzie to działać tak jak wyżej
  &:active:not(:disabled) {
    color: white;
    border: 5px solid yellow;
  }
`;
export { StyledButton };