import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    border: 1px solid transparent;
    border-radius: .25rem;
`

export { StyledAlert };