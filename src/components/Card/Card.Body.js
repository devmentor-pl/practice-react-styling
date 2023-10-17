import React from 'react';

import { StyledCardBodyDiv } from './Card.styled';
const CardBody = props => {
	return <StyledCardBodyDiv>{props.children}</StyledCardBodyDiv>;
};
export default CardBody;
