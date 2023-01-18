import styled from 'styled-components';

const StyledButton = styled.button.attrs(props => ({
    type: "button",
    disabled: props.theme.isDisabled,
    active: props.theme.isActive,
}))`
    display: inline-block;
    --color-alfa: #fff; 
    --color-beta: rgba(59, 63, 67, 1);
    --color-gamma: rgba(59, 63, 67, 0.5);
    --color-epsilon: rgba(0,0,0,1);
    font-weight: 400;
    color: var(--color-alfa);
    border: none;
    background-color: var(--color-beta);
    transition: 0.5s;
    &:disabled{
        background-color: grey;
        opacity: 0.6; 
    }

    &:focus {
     outline: 3px solid var(--color-gamma);
    }
    &:hover{
        ${props => props.disabled === false 
        ? {
            backgroundColor: 'var(--color-epsilon)',
        }
        : null
        }
    }
    ${props => props.theme}
    `
    
export {StyledButton};