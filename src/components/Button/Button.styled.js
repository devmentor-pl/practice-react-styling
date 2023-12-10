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
        border-color: ${theme.variant[variant].borderColor};
        background-color: ${theme.variant[variant].backgroundColor};
        color: ${theme.variant[variant].color};
      `}
    ${({ size, theme }) =>
      size &&
      css`
        font-size: ${theme.size[size].fontSize};
        border-radius: ${theme.size[size].borderRadius};
        padding: ${theme.size[size].padding};
      `}
    `

export { StyledButton }