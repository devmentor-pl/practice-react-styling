import styled, { css } from "styled-components";

const StyledAlert = styled.div`
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
      case "danger":
        return ` background-color: var(--color-delta)`;
    }
  }};
`;

export { StyledAlert };



