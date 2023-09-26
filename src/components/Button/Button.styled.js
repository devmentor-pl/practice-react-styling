import styled from 'styled-components';

const DefaultStyledButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	line-height: 1.5;
	border-radius: 0.3rem;
`;

const StyledButton = styled(DefaultStyledButton)`
  color: ${({ theme, variant }) => theme.button[variant]?.color};
  background-color: ${({ theme, variant }) =>
    theme.button[variant]?.backgroundColor};
  border-color: ${({ theme, variant }) => theme.button[variant]?.borderColor};
  font-size: ${({ theme, size }) => theme.button.sizes[size]?.fontSize};
  padding: ${({ theme, size }) => theme.button.sizes[size]?.padding};
  opacity: ${({ active, disabled }) => (active ? 1.1 : disabled ? 0.6 : 1)};

  &:hover {
    color: ${({ theme, variant }) => theme.button[variant]?.hover.color};
    background-color: ${({ theme, variant }) =>
      theme.button[variant]?.hover.backgroundColor};
    border-color: ${({ theme, variant }) =>
      theme.button[variant]?.hover.borderColor};
  }
  &:focus {
    color: ${({ theme, variant }) => theme.button[variant]?.focus.color};
    background-color: ${({ theme, variant }) =>
      theme.button[variant]?.focus.backgroundColor};
    border-color: ${({ theme, variant }) =>
      theme.button[variant]?.focus.borderColor};
    outline: 0;
    box-shadow: ${({ theme, variant }) =>
      theme.button[variant]?.focus.boxShadow};
  }
  &:active {
    color: ${({ theme, variant }) => theme.button[variant]?.active.color};
    background-color: ${({ theme, variant }) =>
      theme.button[variant]?.active.backgroundColor};
    border-color: ${({ theme, variant }) =>
      theme.button[variant]?.active.borderColor};
    outline: ${({ theme, variant }) => theme.button[variant]?.active.outline};
  }
`;

export default StyledButton;
