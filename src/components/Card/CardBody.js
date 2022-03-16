import React from 'react';
import StyledCardBody from './CardBody.styled';

export default function CardBody(props) {
	return <StyledCardBody>{props.children}</StyledCardBody>;
}
