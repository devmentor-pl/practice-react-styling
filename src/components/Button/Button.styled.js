import styled from 'styled-components';

const StyledButton = styled.button.attrs(props => ({
    type: "button",
    disabled: props.theme.isDisabled,
    active: props.theme.isActive,
}))`
    display: inline-block;
    font-weight: 400;
    --color-alfa: #fff; 
    --color-beta: rgba(59, 63, 67, 1);
    --color-gamma: rgba(59, 63, 67, 0.5);
    color: var(--color-alfa);
    border: none;
    background-color: var(--color-beta);
    padding: .375rem .75rem;
    border-radius: .25rem; 
    font-size: 1rem;

    &:disabled{
        background-color: grey;
        opacity: 0.6; 
    }
    /* &:active {
        outline: 2px solid var(--color-gamma);
    } */
    &:focus {
     outline: 3px solid var(--color-gamma);
    }
    ${props => props.theme}
    `

export {StyledButton};