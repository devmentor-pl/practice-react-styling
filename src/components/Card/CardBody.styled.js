import styled from 'styled-components';

const DefaultStyledCardBody = styled.div`
    padding: 20px;
`
const StyledCardBody = styled(DefaultStyledCardBody)(props=> props.style)

export {StyledCardBody};