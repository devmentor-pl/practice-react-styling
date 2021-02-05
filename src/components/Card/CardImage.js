import React from 'react';
import StyledCardImage from './CardImage.styled'

const CardImage = ({variant, src}) => {

    return (
        <StyledCardImage src={src} variant={variant}>
        </StyledCardImage>
    )
}

export default CardImage;