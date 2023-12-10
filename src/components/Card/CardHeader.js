import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
`

const CardHeader = ({ children }) => {
    return (
        <StyledCardHeader>{children}</StyledCardHeader>
    );
}

export default CardTitle;