import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`

const CardText = ({ children }) => (
    <Text>{ children }</Text>
)

export default CardText;