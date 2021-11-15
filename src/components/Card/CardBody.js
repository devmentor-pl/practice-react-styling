import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    padding: 1.25rem;
`

const CardBody = ({ children }) => (
    <Body>
        { children }
    </Body>
);

export default CardBody;