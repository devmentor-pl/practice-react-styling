import React from 'react';
import { StyledCardDiv } from './Card.styled';

const Card = props => {
	return <StyledCardDiv style={props.style}>{props.children}</StyledCardDiv>;
};

export default Card;
