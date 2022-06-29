import reactDom from 'react-dom';
import styled, {css} from 'styled-components';

const StyledButton = styled.div`
    display: block;
    text-align: center;
    border: 1px solid transparent;
    background-color: ${props => props.theme[props.variant].backgroundColor};
    color: #FFFFFF;
    padding: 0.5rem 1rem;
    border-radius: 0.3em;
    width: 100px;
    font-size: 1.25rem;
    
    ${ props => props.size === 'sm' && css`
        width: 65px;
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
    `};

    &:hover {
        cursor: pointer;
        background-color:  ${props => props.theme[props.variant].backgroundHover};
        transition: ease-in-out 0.3s 
        
    }
    &:active {
        background-color:  ${props => props.theme[props.variant].backgroundActive};
        border: 4px solid ${props => props.theme[props.variant].borderActive};
        transition: ease-in-out 0.2s 
    }
`
export { StyledButton };