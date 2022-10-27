import React from 'react';
import ImgStyled from './styled/CardImg.styled';

const CardImg = (props) => {
	return <ImgStyled src={props.src} />
};

export default CardImg;