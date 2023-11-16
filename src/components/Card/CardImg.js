import React from "react";
import styled from "styled-components";

const StyledCardImg = styled.div `
    width:100%;
    height:50%;
`

const StyledImg = styled.img `
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
`

const CardImg = ({src,alt}) => {
    return (
        <StyledCardImg>
            <StyledImg src={src} alt={alt} />
        </StyledCardImg>
    )
}

export default CardImg;