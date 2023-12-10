import styled from "styled-components";


const DefaultStyledCardText = styled.p`

`

const StyledCardText = styled(DefaultStyledCardText)(
    ({style}) => style
)


export default StyledCardText