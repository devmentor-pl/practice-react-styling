import React from 'react';
import styled from 'styled-components';

const StyledCardText = styled.div`
    margin-top: 0;
    margin-bottom: 1rem;
`

const CardText = ({ children }) => {
    return (
        <StyledCardText>{children}</StyledCardText>
    );
}

export default CardText;