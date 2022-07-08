import styled, {css} from 'styled-components';

const StyledTab = styled.a`
    border-radius: 0.25rem;
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    margin-bottom: -1px;
    text-decoration: none;

    &:hover {
        color:  ${props => props.theme.colorHover};
        border-color: #dee2e6 #dee2e6 #fff; 
        text-decoration: none;
        } 

    &:active {
        color: ${props => props.theme.colorActive};
        border-color: #dee2e6 #dee2e6 #fff; 
        text-decoration: none;
    }

    &:disabled {
        color: ${props => props.theme.colorDisabled};
    }

    ${props => props.active === true && css` {
        color:  ${props => props.theme.colorHover};
        border-color: #dee2e6 #dee2e6 #fff; 
        text-decoration: none;
    } 
    `};
`
export { StyledTab };

