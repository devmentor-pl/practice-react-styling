import styled from "styled-components";


const DefaultStyledCardBody = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`

const StyledCardBody = styled(DefaultStyledCardBody)(
    ({style}) => style
)


export default StyledCardBody