import React from 'react';

import {StyledCardBody} from './CardBody.styled';

function CardBody({ children }) {
    return <StyledCardBody>{children}</StyledCardBody>;
}

export default CardBody;
