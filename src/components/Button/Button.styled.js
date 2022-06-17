import styled, { css } from "styled-components";

const DefaultStyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  background-color: lightblue;
  font-size: 1.1rem;
  margin: 20px 0;
  ${(props) =>
    props.size === "lg" &&
    css`
      padding: 15px 25px;
    `}
  ${(props) =>
    props.size === "sm" &&
    css`
      padding: 5px 15px;
    `}
  ${(props) =>
    props.active &&
    css`
      box-shadow: 0 0 10px 1px red;
    `}
`;

const StyledButton = styled(DefaultStyledButton)((props) => props.theme);

export { StyledButton };
