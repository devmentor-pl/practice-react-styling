import React from "react";
import styled, {ThemeProvider} from "styled-components";

const StyledCardBody = styled.div`
    margin:1rem;
`

const CardBody = ({children}) => {
    return (
        <StyledCardBody>
            {children}
        </StyledCardBody>
    )
}

export default CardBody;