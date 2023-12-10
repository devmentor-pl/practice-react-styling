import React from "react";
import StyledCardText from "./CardText.styled";


const CardText = ({style,children}) => {

    return (
        <StyledCardText style={style}>
            {children}
        </StyledCardText>
    )
}


export default CardText