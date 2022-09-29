import React from "react";
import StyledCardImg from "./CardImg.styled";


const CardImg = ({style,src,variant,children}) => {

    return (
        <StyledCardImg style={style} src={src} variant={variant}>
            {children}
        </StyledCardImg>
    )
}


export default CardImg