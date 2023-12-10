import styled from "styled-components";


const DefaultStyledCardTitle = styled.div`
    margin-bottom: 0.75rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem;
`

const StyledCardTitle = styled(DefaultStyledCardTitle)(
    ({style}) => style
)


export default StyledCardTitle