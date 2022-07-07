import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    display: block;
    text-align: center;
    border: 1px solid transparent;
    background-color: ${props => props.theme[props.variant].backgroundColor};
    color: #FFFFFF;
    padding: 0.375rem 0.75rem;
    border-radius: 0.3em;
    min-width: 100px;
    font-size: 1rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
    ${ props => props.size === 'sm' && css`
        width: 65px;
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
    `};

    ${ props => props.size === 'lg' && css`
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
    `};

    &:hover {
        cursor: pointer;
        background-color:  ${props => props.theme[props.variant].backgroundHover};
        
    }
    &:active {
        background-color:  ${props => props.theme[props.variant].backgroundActive};
        border: 4px solid ${props => props.theme[props.variant].borderActive};
    }
`
export { StyledButton };