import styled, { css } from "styled-components";

const StyledAlert = styled.div`
  --color-alfa: ${(props) => props.theme.colors.colorAlfa};
  --color-beta: ${(props) => props.theme.colors.colorBeta};
  display: block;
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--color-alfa)" : "var(--color-beta)"};
`;

export { StyledAlert };
