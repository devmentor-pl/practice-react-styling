import React from 'react';

import { StyledCardText } from './CardBody.styled';

function CardText({ children }) {
    return <StyledCardText>{children}</StyledCardText>;
}

export default CardText;
