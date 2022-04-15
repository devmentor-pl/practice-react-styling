import styled, {css} from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #c5aeb4;
    border-color: #9d8b90;
`

const StyledAlert = styled(DefaultStyledAlert)`
    ${(props)=>props.theme.alerts[props.variant]};
`;

export { StyledAlert };