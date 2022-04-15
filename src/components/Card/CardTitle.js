import React from 'react';
import styled from 'styled-components';

const Title = styled.h5`
    font-size: 1.25rem;
    margin-bottom: .75rem;
`

const CardTitle = ({ children }) => (
    <Title>
        { children }
    </Title>
)

export default CardTitle;