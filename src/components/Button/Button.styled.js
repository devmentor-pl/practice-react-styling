import styled,{css} from 'styled-components';

const DefaultStyledButton = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
    border-radius: 0.3rem;
    margin:2px 5px;
    border:0;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
    &:disabled {
        cursor: default;
        pointer-events: none;
    }
    margin: ${(props)=>props.style};
`
const StyledButton = styled(DefaultStyledButton)`
    ${(props)=>props.theme.buttons[props.variant]};
    ${(props)=>props.theme.buttonsSizes[props.size]};
    background:${(props)=> props.active ? props.theme.buttonsActive[props.variant] : null};
    opacity:${(props)=>props.disabled ? .55 : null};
`;

export {StyledButton};

