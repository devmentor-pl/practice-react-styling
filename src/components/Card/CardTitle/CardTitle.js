import React from "react";
import StyledCardTitle from "./CardTitle.styled";


const CardTitle = ({style,children}) => {

    return (
        <StyledCardTitle style={style}>
            {children}
        </StyledCardTitle>
    )
}


export default CardTitle