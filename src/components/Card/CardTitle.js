import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
`

const CardTitle = ({ children }) => {
    return (
        <StyledCardTitle>{children}</StyledCardTitle>
    );
}

export default CardTitle;