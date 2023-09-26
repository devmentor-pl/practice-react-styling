import React from 'react';
import styled from 'styled-components';
import CardBody from './CardBody';
import CardImg from './CardImg';
import CardText from './CardText';
import CardTitle from './CardTitle';

const StyledCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	overflow: hidden;
`;

const Card = ({ style, children }) => {
	return <StyledCard style={style}>{children}</StyledCard>;
};

export default Object.assign(Card, {
	Body: CardBody,
	Img: CardImg,
	Title: CardTitle,
	Text: CardText,
});
