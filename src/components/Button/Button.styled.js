import styled, {css} from "styled-components";



const theme = {
  button: {
    primary: {
      backgroundColor: '#0069D9',
      color: '#fff',
      hoverBackgroundColor: '#0022D9',
      activeBackgroundColor: '#0022D9',
      activeOutline: '3px solid #0099D9',
    },
    secondary: {
      backgroundColor: '#5585b5',
      color: '#fff',
      hoverBackgroundColor: '#5055c5',
      activeBackgroundColor: '#5055c5',
      activeOutline: '3px solid #5585b5'
    },
    sizes: {
      lg: {
        padding: '8px 16px',
        fontSize: '20px',
      },
      sm: {
        padding: '6px 10px',
        fontSize: '16px',
      },
    },
  },
};

const StyledButton = styled.button`
  border-radius: 5px;
  border: 3px solid transparent;
  margin: 0 5px;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.button.primary.backgroundColor};
      color: ${theme.button.primary.color};
      &:hover {
        background-color: ${theme.button.primary.hoverBackgroundColor};
        transition: 300ms;
      }
    `}
    ${({ theme, variant, active }) =>
    variant === 'primary' && active &&
    css`
      &:focus {
        background-color: ${theme.button.primary.activeBackgroundColor};
        outline: ${theme.button.primary.activeOutline};
        transition: 100ms;
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
        outline: ${theme.button.secondary.activeOutline};
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