import styled from "styled-components";

const StyledButton = styled.button`
  --base-bg: ${({ theme, variant }) => variant && theme[variant].bgColor};
  --active-bg: ${({ theme, variant }) =>
    variant && theme[variant].active.bgColor};
  --active-box-shadow: ${({ theme, variant }) =>
    variant && theme[variant].active.boxShadow};
  --hover-bg: ${({ theme, variant }) => variant && theme[variant].hoverColor};
  --disabled-opacity: ${({ theme, variant }) =>
    variant && theme[variant].disabled.opacity};
  background-color: ${({ active }) =>
    active ? "var(--active-bg)" : "var(--base-bg)"};
  border: 1px solid transparent;
  border-radius: ${({ theme, size }) =>
    size ? theme[size].borderRadius : ".25rem"};
  font-size: ${({ theme, size }) => size && theme[size].fontSize};
  padding: ${({ theme, size }) =>
    size
      ? `${theme[size].paddingY} ${theme[size].paddingX} ${theme[size].paddingY} ${theme[size].paddingX}`
      : ".375rem 0.75rem;"};
  color: ${({ theme, variant }) => variant && theme[variant].fontColor};
  opacity: ${({ disabled }) => (disabled ? "var(--disabled-opacity)" : "1")};
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${({ active, disabled }) =>
      !active && !disabled ? "var(--hover-bg)" : null};
  }
  &:focus {
    outline: none;
    background-color: var(--active-bg);
    box-shadow: var(--active-box-shadow);
  }
`;

export { StyledButton };
