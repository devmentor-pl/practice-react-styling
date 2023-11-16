import React from "react";
import styled from "styled-components";

const StyledP = styled.p``

const CardText = ({children}) => {
    return (
        <StyledP>{children}</StyledP>
    )
}

export default CardText;