import styled, {css} from 'styled-components';

const StyledTab = styled.a`
    display: block;
    padding: .5rem 1rem;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;

    &:hover {
        text-decoration: none;
    }

    ${props => !props.active && !props.disabled && css`
        &:hover {
            border-color: #e9ecef #e9ecef transparent;
        }
    `}
    
    ${props => props.disabled && css` // nadal reaguje na klikanie x_x
    // Wg CSSTrics (https://css-tricks.com/how-to-disable-links/) nie powinnam tworzyć linka, jeśli ma być nieaktywny, ale w bootstrapowych elementach jest href='#', więc tak samo zrobiłam tutaj :x 
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