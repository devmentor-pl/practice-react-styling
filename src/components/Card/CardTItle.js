import React from 'react';
import CardTitleStyled  from './styled/CardTitle.styled';

const CardTitle = (props) => {
	return <CardTitleStyled>{props.children}</CardTitleStyled>
}

export default CardTitle;