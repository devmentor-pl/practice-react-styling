import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
`
const CardImg = ({ src }) => <Img src={ src } />

export default CardImg;