import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    width: ${props => props.width}
`

export { StyledCard };