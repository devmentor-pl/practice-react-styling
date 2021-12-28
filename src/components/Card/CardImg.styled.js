import styled from 'styled-components';

const DefaultStyledCardImg = styled.img`
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    display: inline-block;
    width: 100%;
`
const StyledCardImg = styled(DefaultStyledCardImg)(props=> props.style)

export {StyledCardImg};