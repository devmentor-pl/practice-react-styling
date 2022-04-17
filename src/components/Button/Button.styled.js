import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 5px 10px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    /* &:disabled {
        opacity: .7;
        cursor: default;
    } */
`
const StyledButton = styled(DefaultStyledButton)`
    ${(props)=>props.theme.buttons[props.variant]};
    ${(props)=>props.theme.buttonsSizes[props.size]};
    background:${(props)=> props.active ? props.theme.buttonsActive[props.variant] : null};
    opacity:${(props)=>props.disabled ? .55 : null}; // to opacity mi nie działa jak mam wyzej odkomentowane style, &:disabled nie powinno nadpisac?
`

export {StyledButton};

