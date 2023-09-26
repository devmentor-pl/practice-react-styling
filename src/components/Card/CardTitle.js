import React from 'react';

import { StyledCardTitle } from './CardBody.styled';

function CardTitle({ children }) {
    return <StyledCardTitle>{children}</StyledCardTitle>;
}

export default CardTitle;
