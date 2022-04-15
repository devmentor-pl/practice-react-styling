import styled from 'styled-components';

const DefaultAlert = styled.div`
    background-color: transparent;
    border-color: #b8daff;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: #004085;
    margin-bottom: 1rem;
    padding: .75rem 1.25rem;
    position: relative;
`

const StyledAlert = styled(DefaultAlert)`
    background-color: ${({theme, variant}) => variant && theme[variant].backgroundColor};
`

export { StyledAlert };