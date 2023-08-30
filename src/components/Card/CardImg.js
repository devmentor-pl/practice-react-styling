import React from 'react';

import StyledCardImg from './CardImg.styled';

function CardImg({ src, alt }) {
    return <StyledCardImg src={src} alt={alt} />;
}

export default CardImg;
