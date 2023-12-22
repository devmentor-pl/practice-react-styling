import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${({ size, theme }) =>
    size &&
    `${theme.button[size].paddingVertical} ${theme.button[size].paddingHorizontal}`};
  border: transparent;
  cursor: pointer;
  border-radius: ${({ size, theme }) =>
    size && theme.button[size].borderRadius};
  text-align: center;
  font-size: ${({ size, theme }) => size && theme.button[size].fontSize};
  line-height: 1.5;
  margin-right: 0.5rem;
  background-color: ${({ variant, theme }) =>
    variant && theme.button[variant].bgColor};
  color: #fff;

  &:disabled {
    opacity: 0.65;
  }
  &:focus {
    background-color: ${({ variant, theme }) =>
      variant &&
      theme.button[variant] &&
      theme.button[variant].focus &&
      theme.button[variant].focus.bgColor};
    box-shadow: ${({ variant, theme }) =>
      variant &&
      theme.button[variant] &&
      theme.button[variant].focus &&
      theme.button[variant].focus.boxShadow};
    border: transparent;
    border: transparent;
  }
  &:hover {
    background-color: ${({ variant, theme }) =>
      variant && theme.button[variant] && theme.button[variant].hoverColor};
  }
`;

export { StyledButton };
