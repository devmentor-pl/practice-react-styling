import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    display: block;
    color: #fff;
    font-weight: 400;
    text-align: center;
    border: 1px solid transparent;

    ${props => props.theme.variant === 'primary' && css`
        background-color: #007bff;
        border-color: #007bff;
    `};

    ${props => props.theme.active && css`
        background-color: #0062cc;
        border-color: #005cbf;
    `};

    ${props => props.theme.size === 'lg' && css`
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
    `};

    :focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(146, 199, 255, 1);
    }

    ${props => props.theme.disabled && css`
        opacity: .65;
        outline: none;
        :hover {
            cursor: default;
        }
        :focus {
            box-shadow: none;
        }
    `};
`

export { StyledButton };