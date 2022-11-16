import styled, {css} from 'styled-components';

const DefaultStyledButton = styled.button`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorBgcFocus};
    --color-gamma: ${props=>props.theme.colorShadow};
    display: inline-block;
    padding: .4rem 0.75rem;
    border: 1px solid var(--color-alfa);
    border-radius: 0.3rem;
    background-color: var(--color-alfa);
    box-shadow: 0.15s ease-in-out;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.15s ease-in-out, border-color .15s ease-in-out, box-shadow 0.15s ease-in-out;
    
    ${ props => props.size === 'lg' && css`
        padding: .5rem 1rem;
        font-size: 1.25rem;
    `}
    &:disabled {
        opacity: 0.2;
        cursor: none
    }
    &:focus { 
        border: 1px solid var(--color-beta); 
        outline: none;      
        box-shadow: 0 0 0px 3px var(--color-gamma);
        background-color: var(--color-beta)
    }
    &:hover {
        background-color: var(--color-beta)
    }
`


const StyledButton = styled(DefaultStyledButton)(props=> props.style);

export default StyledButton;
