import React from 'react';
import {StyledCardImg} from './CardImg.styled'

const CardImg = (props) => {
    const {src} = props;
    return (
        <StyledCardImg src={src}> 
        </StyledCardImg>
    )
}

export {CardImg};