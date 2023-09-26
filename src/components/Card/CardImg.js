import React from 'react';
import styled from 'styled-components';

const StyledCardImg = styled.img`
	width: 100%;
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
`;

const CardImg = ({ src, alt }) => {
	return <StyledCardImg src={src} alt={alt} />;
};

export default CardImg;
