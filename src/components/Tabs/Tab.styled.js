import styled, {css} from 'styled-components';

const StyledTab = styled.a`
    display: block;
    padding: .5rem 1rem;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    margin-bottom: -1px;

    &:hover {
        text-decoration: none;
    }

    ${props => !props.active && !props.disabled && css`
        &:hover {
            border-color: #e9ecef #e9ecef transparent;
        }
    `}
    
    ${props => props.disabled && css`
        color: #6c757d;
        background-color: transparent;
        border-color: transparent;
        pointer-events: none;
        cursor: default;
    `
    }
    ${props => props.active && css` //
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff; // pomimo dolnej krawędzi #fff kolor nie nakłada się na dolny border elementu <nav> :o
    `
    }
`

export default StyledTab