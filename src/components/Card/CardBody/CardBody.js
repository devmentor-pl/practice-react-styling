import React from "react";
import StyledCardBody from "./CardBody.styled";


const CardBody = ({style,children}) => {

    return (
        <StyledCardBody style={style}>
            {children}
        </StyledCardBody>
    )
}


export default CardBody