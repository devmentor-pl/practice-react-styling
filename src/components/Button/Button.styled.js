import styled from "styled-components";

const DefaultStyledButton = styled.button`
    background-color: #ffffff;
    padding: 6px 12px;
    border-radius: 4px;
    border: none;
    &:focus {
         outline: none
    };
     &:active {
        ${props => props.theme.active}
    }
    `

const StyledButton = styled(DefaultStyledButton)`
    ${({ variant, theme }) => theme[variant]};
    ${({ size, theme }) => size === 'lg' && theme.large};
    ${({ disabled, theme }) => disabled === true && theme.disabled};`

export { StyledButton }


