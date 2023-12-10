import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    text-align: center;
    vertical-align: middle;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    ${({ theme, variant }) =>
      variant &&
      css`
        color: ${theme.variant[variant].color};
        background-color: ${theme.variant[variant].backgroundColor};
        border-color: ${theme.variant[variant].borderColor};
      `}

    ${({ size, theme }) =>
      size &&
      css`
        padding: ${theme.size[size].padding};
        font-size: ${theme.size[size].fontSize};
        border-radius: ${theme.size[size].borderRadius};
      `}
    }

    &:hover{
        ${({ variant, theme, active, disabled }) =>
          variant &&
          !active &&
          !disabled &&
          css`
            background-color: ${theme.variant[variant].hoverBackgroundColor};
          `}
        }
    }

    &:disabled{
        opacity:0.65;
    }

    &:active {
        ${({ variant, theme, disabled }) =>
          variant &&
          !disabled &&
          css`
            background-color: ${theme.variant[variant].hoverBackgroundColor};
            border-color: ${theme.variant[variant].hoverBackgroundColor};
          `}
    }

    `

export { StyledButton }
