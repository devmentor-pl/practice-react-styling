import styled,{css} from 'styled-components';

const DefaultStyledButton = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
    border-radius: 0.3rem;
    margin:2px 2px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    &:disabled {
        opacity: .7;
        cursor: default;
        pointer-events: none;
    }
`
const StyledButton = styled(DefaultStyledButton)`
    ${(props)=>props.theme.buttons[props.variant]};
    ${(props)=>props.theme.buttonsSizes[props.size]};
    background:${(props)=> props.active ? props.theme.buttonsActive[props.variant] : null};
    opacity:${(props)=>props.disabled ? .55 : null}; // to opacity mi nie działa jak mam wyzej odkomentowane style, opacity nie powinno sienadpisac?
`;

// mam wrazenie ze nie do konca to dobrze napisałam, mam przy buttonach taki cień, zrobił się lekki efekt 3D
export {StyledButton};

