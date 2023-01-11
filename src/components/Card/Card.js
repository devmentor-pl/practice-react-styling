import React from "react";
import { StyledDiv } from "./Card.styled";

const Card = props => {
    const style = {
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '0.25rem',
        marginBottom: '30px',
    }
    return (
        <StyledDiv style={{...props.style, ...style}}>{props.children}</StyledDiv>        
    )
}

export default Card