import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    ${props => props.theme}
`

export { StyledAlert };