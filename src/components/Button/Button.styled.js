import styled, { css } from "styled-components";

const DefaultStyledButton = styled.button`
  color: white;
  text-align: center;
  display: block;
  line-height: 1.5;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${(props) =>
    props.disabled === "true" &&
    css`
      opacity: 0.6;
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      border-radius: 0.25rem;
    `}

  ${({ theme, variant }) =>
    css`
      background-color: ${theme[variant].backgroundColor};
      &:hover {
        background-color: ${theme[variant].backgroundColorHover};
      &:active {
        background-color: ${theme[variant].backgroundColorActive};
        outline: ${theme[variant].outlineActive};
    `}
`;

const StyledButton = styled(DefaultStyledButton)((props) => props.style);
export { StyledButton };
