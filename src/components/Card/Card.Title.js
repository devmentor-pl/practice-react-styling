import React from 'react';
import { StyledTitleH5 } from './Card.styled';

const CardTitle = props => {
	return <StyledTitleH5 style={props.style}>{props.children}</StyledTitleH5>;
};

export default CardTitle;
