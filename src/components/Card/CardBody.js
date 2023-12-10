import React from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    min-height: 10px;
    padding: 20px;
`

const CardBody = (props) => {
    const {children} = props
    return (
        <StyledCardBody>{children}</StyledCardBody>
    );
}

export default CardBody;