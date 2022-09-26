import React from 'react';

import { StyledCard } from './Card.styled';

const Card = props => {
    const {width} = props.style;

    return (
        <StyledCard width={ width }>
            { props.children }
        </StyledCard>
    );
}

export default Card;