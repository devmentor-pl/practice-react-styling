import React from 'react';
import { StyledCardImg } from './Card.styled';

const CardImg = props => {
	return <StyledCardImg src={props.src} style={props.style}>{props.children}</StyledCardImg>;
};

export default CardImg;
