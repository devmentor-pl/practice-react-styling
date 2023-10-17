import React from 'react';

import { StyledParagraph } from './Card.styled';
const CardText = props => {
	return <StyledParagraph>{props.children}</StyledParagraph>;
};
export default CardText;
