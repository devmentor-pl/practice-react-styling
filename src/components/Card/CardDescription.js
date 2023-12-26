import React from 'react';
import styled from 'styled-components';

const StyledCardDescription = styled.div`
    margin: 5px 15px;
`

const CardDescription = (props) => {
    const {children} = props
    return (
        <StyledCardDescription>{children}</StyledCardDescription>
    );
}

export default CardDescription;