import React from 'react';

import StyledCard from './Card.styled';

function Card({ children, style }) {
    return <StyledCard style={style}>{children}</StyledCard>;
}

export default Card;
