import styled, { css } from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  ${({ variant }) =>
    variant === "top"
      ? css`
          border-top-left-radius: calc(0.25rem - 1px);
          border-top-right-radius: calc(0.25rem - 1px);
        `
      : variant === "bottom"
      ? css`
          border-bottom-right-radius: calc(0.25rem - 1px);
          border-bottom-left-radius: calc(0.25rem - 1px);
        `
      : null}
`;

export default StyledImg;
