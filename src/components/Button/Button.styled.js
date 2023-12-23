import styled, {css} from "styled-components";



const theme = {
  button: {
    primary: {
      backgroundColor: '#0069D9',
      color: '#fff',
      hoverBackgroundColor: '#0022D9',
      activeBackgroundColor: '#0022D9',
      activeBorder: '5px solid #0069D9'
    },
    secondary: {
      backgroundColor: '#5585b5',
      color: '#fff',
      hoverBackgroundColor: '#5055c5',
      activeBackgroundColor: '#5055c5',
      activeBorder: '5px solid #5585b5'
    },
    sizes: {
      lg: {
        padding: '10px 20px',
        fontSize: '20px',
      },
      sm: {
        padding: '5px 10px',
        fontSize: '16px',
      },
    },
  },
};

const StyledButton = styled.button`
  border-radius: 10px;
  border: 5px solid transparent;
  margin: 0 5px;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
  transition: 200ms;
  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.button.primary.backgroundColor};
      color: ${theme.button.primary.color};
      &:hover {
        background-color: ${theme.button.primary.hoverBackgroundColor};
      }
    `}
    ${({ theme, variant, active }) =>
    variant === 'primary' && active &&
    css`
      &:focus {
        background-color: ${theme.button.primary.activeBackgroundColor};
        border: ${theme.button.primary.activeBorder};
      }
    `}
  ${({ theme, variant }) =>
    variant === 'secondary' && 
    css`
      background-color: ${theme.button.secondary.backgroundColor};
      color: ${theme.button.secondary.color};
      &:hover {
        background-color: ${theme.button.secondary.hoverBackgroundColor};
      }
    `}
    ${({ theme, variant, active }) =>
    variant === 'secondary' && active &&
    css`
      &:focus {
        background-color: ${theme.button.secondary.activeBackgroundColor};
        border: ${theme.button.secondary.activeBorder};
      }
    `}

  ${({ theme, size }) =>
    size === 'lg' &&
    css`
      padding: ${theme.button.sizes.lg.padding};
      font-size: ${theme.button.sizes.lg.fontSize};
    `}

  ${({ theme, size }) =>
    size === 'sm' &&
    css`
      padding: ${theme.button.sizes.sm.padding};
      font-size: ${theme.button.sizes.sm.fontSize};
    `}
  }
`;

export { StyledButton, theme }