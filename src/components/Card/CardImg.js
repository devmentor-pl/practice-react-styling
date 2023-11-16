import React from 'react';
import { StyledCardImg } from './CardImg.styled';

const CardImg = ({ src, variant }) => {
	return (
		<StyledCardImg
			variant={variant}
			src={src}></StyledCardImg>
	);
};

export default CardImg;
