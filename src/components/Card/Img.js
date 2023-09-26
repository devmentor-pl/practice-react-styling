import React from "react";
import StyledImg from "./StyledElements/StyledImg";

const Img = ({variant, src}) => {
    return (
        <StyledImg variant={variant} src={src}></StyledImg>
    )
}

export default Img;